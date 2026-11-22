"""
Name: validate_site.py
Purpose: Validate generated offline UML handbook pages, Python SVG geometry and hash routes.
Interface: python scripts/validate_site.py [--clause N] [--browser PATH] [--static-only]
Goal: Detect stale generated data, missing content, invalid SVG geometry, broken links and browser JavaScript errors.
Requires: Python 3, Pillow; Chrome or Edge only for final browser rendering checks.
Usage:
  Run from the repository root after generation; validation itself does not rewrite site data.
  python scripts/validate_site.py                       run static and file:// browser checks
  python scripts/validate_site.py --clause 9            limit checks to Clause 9 and shared pages
  python scripts/validate_site.py --static-only         skip browser checks
  Use --browser PATH when Chrome or Edge is not installed in a standard location.
"""

from argparse import ArgumentParser
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET

from check_spec_completeness import check_completeness
from check_svg_overlaps import check_inheritance, check_svg, find_browser
from handbook_data import ROOT, SITE, base_routes, load_handbook, load_pages, slug
from section_config import load_sections


INDEX = SITE / "index.html"
DATA = SITE / "data" / "common-structure.js"
XMI_DATA = SITE / "data" / "common-structure-xmi.js"
CONTENT_DATA = SITE / "data" / "common-structure-content.js"
PAGES = SITE / "data" / "common-structure-pages.js"


class ResourceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.resources = []
        self.hash_links = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "script" and attributes.get("src"):
            self.resources.append(attributes["src"])
        if tag == "link" and attributes.get("href"):
            self.resources.append(attributes["href"])
        if tag == "img" and attributes.get("src"):
            self.resources.append(attributes["src"])
        if tag == "object" and attributes.get("data"):
            self.resources.append(attributes["data"])
        if attributes.get("href", "").startswith("#"):
            self.hash_links.append(attributes["href"])


def routes(data=None, clause=None):
    data = data or load_handbook()[0]
    if clause is None:
        return base_routes(data) + [("#/search/Namespace", "Результаты поиска")]
    result = base_routes(data)[:2]
    groups = (
        ("sections", "section", "id"),
        ("classifiers", "classifier", "name"),
        ("associations", "association", "name"),
        ("diagrams", "diagram", "id"),
    )
    for group, kind, name in groups:
        for item in data[group]:
            section = item["id"] if group in {"sections", "diagrams"} else item["section"]
            if section.split(".")[0] == clause:
                result.append((f"#/{kind}/{slug(item[name])}", item.get("title") or item.get("ru")))
    return result + [("#/search/Namespace", "Результаты поиска")]


def diagram_vectors(data=None, clause=None):
    data = data or load_handbook()[0]
    return [
        item["vector"] for item in data["diagrams"]
        if clause is None or item["id"].split(".")[0] == clause
    ]


def run_check(script):
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / script.split()[0]), *script.split()[1:]],
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    return result


def check_static(clause=None):
    errors = []
    data, xmi, _ = load_handbook()
    for path in (INDEX, DATA, XMI_DATA, CONTENT_DATA, PAGES, SITE / "app.js", SITE / "styles.css"):
        if not path.is_file():
            errors.append(f"Missing file: {path.relative_to(ROOT)}")
    if errors:
        return errors, [], data, xmi, None

    parser = ResourceParser()
    parser.feed(INDEX.read_text(encoding="utf-8"))
    for resource in parser.resources:
        if re.match(r"^[a-z]+:", resource):
            errors.append(f"Remote page dependency: {resource}")
        elif not (SITE / resource).is_file():
            errors.append(f"Missing resource: {resource}")

    images = sorted((SITE / "assets" / "diagrams").glob("figure-*.png"))
    if clause is not None:
        images = [path for path in images if path.stem.split("-")[1] == clause]
    expected_diagrams = len(diagram_vectors(data, clause))
    if len(images) != expected_diagrams:
        errors.append(f"Expected {expected_diagrams} diagram screenshots, found {len(images)}")
    for image in images:
        if image.stat().st_size < 100:
            errors.append(f"Empty image: {image.name}")

    all_routes = routes(data, clause)
    known_routes = {item[0] for item in base_routes(data)} | {"#/", "#content"}
    vectors = diagram_vectors(data, clause)
    if len(vectors) != expected_diagrams:
        errors.append(f"Expected {expected_diagrams} vector diagrams, found {len(vectors)}")
    for vector in vectors:
        vector_path = SITE / vector
        if not vector_path.is_file():
            errors.append(f"Missing vector diagram: {vector}")
            continue
        svg = ET.parse(vector_path).getroot()
        for link in svg.findall("{http://www.w3.org/2000/svg}a"):
            route = "#/" + link.get("href", "").split("#/", 1)[-1]
            if route not in known_routes:
                errors.append(f"Broken SVG link in {vector}: {route}")

    expected_routes = len(routes(data, clause))
    if len(all_routes) != expected_routes:
        errors.append(f"Route extraction mismatch: {len(all_routes)} routes instead of {expected_routes}")
    app = (SITE / "app.js").read_text(encoding="utf-8")
    if "fetch(" in app:
        errors.append("fetch() is not allowed for core offline data")
    for rendering_function in ("renderClassifier", "inheritanceDiagram", "metamodelDescription", "propertySignature"):
        if re.search(rf"function\s+{rendering_function}\b", app):
            errors.append(f"Page rendering remains in JavaScript: {rendering_function}")

    sections = load_sections()
    active_clauses = [clause] if clause is not None else [
        number for number in sections
        if any(item["id"].startswith(number + ".") for item in data["sections"])
    ]
    scripts = ["sync_xmi_properties.py --check"]
    for number in active_clauses:
        generator = sections[number]["svg_generator"]
        command = f"{generator} --check"
        if command not in scripts:
            scripts.append(command)
    scripts.append("build_site.py --check")
    if clause is not None:
        scripts = [
            script.replace(" --check", f" --clause {clause} --check")
            for script in scripts
        ]
    for script in scripts:
        result = run_check(script)
        if result.returncode:
            errors.append(f"{script} failed: {result.stdout}{result.stderr}")

    if PAGES.is_file():
        generated = load_pages()
        selected_routes = {route for route, _ in all_routes}
        for route, page in generated["pages"].items():
            if clause is not None and route not in selected_routes:
                continue
            if route not in known_routes:
                errors.append(f"Unexpected generated route: {route}")
            page_parser = ResourceParser()
            page_parser.feed(page)
            for target in page_parser.hash_links:
                if target not in known_routes:
                    errors.append(f"Broken generated link in {route}: {target}")
            for resource in page_parser.resources:
                clean = resource.split("#", 1)[0]
                if clean and not re.match(r"^[a-z]+:", clean) and not (SITE / clean).is_file():
                    errors.append(f"Missing generated resource in {route}: {clean}")
    else:
        generated = None

    if not any(error.startswith("check_spec_completeness") for error in errors):
        completeness_errors, _ = check_completeness([clause] if clause is not None else None)
        errors.extend(completeness_errors)
    return errors, all_routes, data, xmi, generated


def check_route(browser, route, expected, known_routes, placeholder_routes):
    with tempfile.TemporaryDirectory() as profile:
        result = subprocess.run(
            [
                str(browser),
                "--headless=new",
                "--disable-gpu",
                "--disable-background-networking",
                "--disable-extensions",
                "--no-first-run",
                f"--user-data-dir={profile}",
                "--virtual-time-budget=1000",
                "--dump-dom",
                INDEX.resolve().as_uri() + route,
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=45,
        )
    dom = result.stdout.decode("utf-8", errors="replace")
    console = result.stderr.decode("utf-8", errors="replace")
    if result.returncode:
        return f"{route or '#/'}: browser exit code {result.returncode}"
    if expected not in dom:
        return f"{route or '#/'}: missing expected text {expected!r}"
    if "<h1" not in dom:
        return f"{route or '#/'}: missing h1"
    if route.startswith("#/classifier/") and route not in placeholder_routes:
        if 'class="inheritance-svg"' not in dom:
            return f"{route}: missing inheritance SVG"
        if 'data-current="true"' not in dom:
            return f"{route}: missing current class in inheritance SVG"
    for target in set(re.findall(r'href="(#[^"]*)"', dom)):
        if target not in known_routes:
            return f"{route or '#/'}: broken internal link {target}"
    errors = [
        error for error in re.findall(r"(?:Uncaught|SyntaxError|ReferenceError|TypeError)[^\r\n]*", console)
        if "chrome-extension://" not in error
    ]
    if errors:
        return f"{route or '#/'}: {'; '.join(errors)}"
    return None


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections(), key=int), help="Validate only this clause and shared pages")
    parser.add_argument("--browser", help="Path to Chrome or Edge")
    parser.add_argument("--static-only", action="store_true", help="Skip browser route checks")
    args = parser.parse_args()

    errors, all_routes, data, xmi, generated = check_static(args.clause)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    print(f"Static checks and specification completeness: OK; {len(all_routes)} routes discovered")

    vectors = diagram_vectors(data, args.clause)
    geometry_failures = [error for vector in vectors for error in check_svg(SITE / vector)]
    if generated:
        for item in data["classifiers"]:
            if item.get("placeholder") or (
                args.clause is not None and item["section"].split(".")[0] != args.clause
            ):
                continue
            route = f"#/classifier/{re.sub(r'[^a-z0-9]+', '-', item['name'].lower())}"
            page = generated["pages"][route]
            match = re.search(r'<svg class="inheritance-svg".*?</svg>', page, re.DOTALL)
            if not match:
                geometry_failures.append(f"{item['name']}: missing inheritance SVG")
            else:
                geometry_failures.extend(check_inheritance(match.group(0), item["name"], xmi, data))
    if geometry_failures:
        for failure in geometry_failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    inheritance_count = sum(
        not item.get("placeholder")
        and (args.clause is None or item["section"].split(".")[0] == args.clause)
        for item in data["classifiers"]
    )
    print(f"Python SVG geometry checks: OK; {len(vectors)} figures and {inheritance_count} inheritance diagrams passed")

    if args.static_only:
        return
    browser = find_browser(args.browser)
    if not browser:
        raise SystemExit("Chrome or Edge is required for browser checks; use --static-only to skip them")

    with ThreadPoolExecutor(max_workers=4) as executor:
        known_routes = {item[0] for item in all_routes} | {"#/", "#content"}
        placeholder_routes = {
            f"#/classifier/{item['name'].lower()}"
            for item in data["classifiers"]
            if item.get("placeholder")
        }
        failures = list(executor.map(
            lambda item: check_route(browser, *item, known_routes, placeholder_routes),
            all_routes,
        ))
    failures = [failure for failure in failures if failure]
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"Browser checks: OK; {len(all_routes)} file:// routes passed")


if __name__ == "__main__":
    main()
