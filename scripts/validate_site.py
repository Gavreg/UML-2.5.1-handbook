"""
Name: validate_site.py
Purpose: Validate the offline UML handbook and every hash route in Clause 7.
Interface: python scripts/validate_site.py [--browser PATH] [--static-only]
Goal: Detect missing assets, invalid local dependencies, broken routes and browser JavaScript errors.
Requires: Python 3; Google Chrome or Microsoft Edge for browser checks unless --static-only is used.
"""

from argparse import ArgumentParser
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
import re
import subprocess
import tempfile


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
INDEX = SITE / "index.html"
DATA = SITE / "data" / "common-structure.js"


class ResourceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.resources = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "script" and attributes.get("src"):
            self.resources.append(attributes["src"])
        if tag == "link" and attributes.get("href"):
            self.resources.append(attributes["href"])
        if tag == "img" and attributes.get("src"):
            self.resources.append(attributes["src"])


def slug(value):
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def routes():
    text = DATA.read_text(encoding="utf-8")
    result = [("", "Метамодель UML"), ("#/diagrams", "Диаграммы"), ("#/search/Namespace", "Результаты поиска")]

    section_block = text.split("const sections = [", 1)[1].split("const classifiers = [", 1)[0]
    for section, title in re.findall(r'id: "(7\.\d)",\s+title: "([^"]+)"', section_block):
        result.append((f"#/section/{slug(section)}", title))

    classifier_block = text.split("const classifiers = [", 1)[1].split("const associations = [", 1)[0]
    for name, russian in re.findall(r'name: "([A-Za-z]+)",\s+ru: "([^"]+)",\s+kind:', classifier_block):
        result.append((f"#/classifier/{slug(name)}", russian))

    association_block = text.split("const associations = [", 1)[1].split("const diagrams = [", 1)[0]
    for name, russian in re.findall(r'name: "(A_[A-Za-z_]+)",\s+ru: "([^"]+)"', association_block):
        result.append((f"#/association/{slug(name)}", russian))

    diagram_block = text.split("const diagrams = [", 1)[1].split("return {", 1)[0]
    for figure, title in re.findall(r'\{ id: "(7\.\d+)", title: "([^"]+)"', diagram_block):
        result.append((f"#/diagram/{slug(figure)}", title))

    return result


def find_browser(explicit):
    if explicit:
        path = Path(explicit)
        if path.is_file():
            return path
        raise FileNotFoundError(f"Browser not found: {path}")
    candidates = [
        Path("C:/Program Files/Google/Chrome/Application/chrome.exe"),
        Path("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"),
        Path("C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"),
        Path("C:/Program Files/Microsoft/Edge/Application/msedge.exe"),
    ]
    return next((path for path in candidates if path.is_file()), None)


def check_static():
    errors = []
    for path in (INDEX, DATA, SITE / "app.js", SITE / "styles.css"):
        if not path.is_file():
            errors.append(f"Missing file: {path.relative_to(ROOT)}")

    parser = ResourceParser()
    parser.feed(INDEX.read_text(encoding="utf-8"))
    for resource in parser.resources:
        if re.match(r"^[a-z]+:", resource):
            errors.append(f"Remote page dependency: {resource}")
        elif not (SITE / resource).is_file():
            errors.append(f"Missing resource: {resource}")

    images = sorted((SITE / "assets" / "diagrams").glob("figure-*.png"))
    if len(images) != 21:
        errors.append(f"Expected 21 diagram screenshots, found {len(images)}")
    for image in images:
        if image.stat().st_size < 100:
            errors.append(f"Empty image: {image.name}")

    all_routes = routes()
    expected = (3, 9, 24, 36, 21)
    if len(all_routes) != sum(expected):
        errors.append(f"Route extraction mismatch: {len(all_routes)} routes")

    app = (SITE / "app.js").read_text(encoding="utf-8")
    if "fetch(" in app:
        errors.append("fetch() is not allowed for core offline data")
    return errors, all_routes


def check_route(browser, route, expected):
    with tempfile.TemporaryDirectory() as profile:
        result = subprocess.run(
            [
                str(browser),
                "--headless=new",
                "--disable-gpu",
                "--disable-background-networking",
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
    errors = re.findall(r"(?:Uncaught|SyntaxError|ReferenceError|TypeError)[^\r\n]*", console)
    if errors:
        return f"{route or '#/'}: {'; '.join(errors)}"
    return None


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--browser", help="Path to Chrome or Edge")
    parser.add_argument("--static-only", action="store_true", help="Skip browser route checks")
    args = parser.parse_args()

    errors, all_routes = check_static()
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    print(f"Static checks: OK; {len(all_routes)} routes discovered")

    if args.static_only:
        return
    browser = find_browser(args.browser)
    if not browser:
        raise SystemExit("Chrome or Edge is required for browser checks; use --static-only to skip them")

    with ThreadPoolExecutor(max_workers=4) as executor:
        failures = list(executor.map(lambda item: check_route(browser, *item), all_routes))
    failures = [failure for failure in failures if failure]
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"Browser checks: OK; {len(all_routes)} file:// routes passed")


if __name__ == "__main__":
    main()
