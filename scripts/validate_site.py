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
import sys
import tempfile
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
INDEX = SITE / "index.html"
DATA = SITE / "data" / "common-structure.js"
XMI_DATA = SITE / "data" / "common-structure-xmi.js"


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
        if tag == "object" and attributes.get("data"):
            self.resources.append(attributes["data"])


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


def diagram_vectors():
    text = DATA.read_text(encoding="utf-8")
    diagram_block = text.split("const diagrams = [", 1)[1].split("].map(diagram =>", 1)[0]
    ids = re.findall(r'\{ id: "(7\.\d+)"', diagram_block)
    return [f"assets/diagrams/figure-{figure.replace('.', '-')}.svg" for figure in ids]


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
    for path in (INDEX, DATA, XMI_DATA, SITE / "app.js", SITE / "styles.css"):
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
    data_text = DATA.read_text(encoding="utf-8")
    vectors = diagram_vectors()
    if len(vectors) != 21:
        errors.append(f"Expected 21 vector diagrams, found {len(vectors)}")
    for vector in vectors:
        vector_path = SITE / vector
        if not vector_path.is_file():
            errors.append(f"Missing vector diagram: {vector}")
            continue
        svg = ET.parse(vector_path).getroot()
        for link in svg.findall("{http://www.w3.org/2000/svg}a"):
            route = "#/" + link.get("href", "").split("#/", 1)[-1]
            if route not in {item[0] for item in all_routes}:
                errors.append(f"Broken SVG link in {vector}: {route}")

    expected = (3, 9, 29, 36, 21)
    if len(all_routes) != sum(expected):
        errors.append(f"Route extraction mismatch: {len(all_routes)} routes")

    app = (SITE / "app.js").read_text(encoding="utf-8")
    if "fetch(" in app:
        errors.append("fetch() is not allowed for core offline data")

    sync = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "sync_xmi_properties.py"), "--check"],
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if sync.returncode:
        errors.append(f"XMI data check failed: {sync.stdout}{sync.stderr}")
    generated = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "generate_common_structure_svg.py"), "--check"],
        cwd=ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if generated.returncode:
        errors.append(f"Generated SVG check failed: {generated.stdout}{generated.stderr}")
    return errors, all_routes


INHERITANCE_GEOMETRY_SCRIPT = r"""
(() => {
  const errors = [];
  const svg = document.querySelector("svg.inheritance-svg");
  if (!svg) {
    document.documentElement.setAttribute("data-inheritance-errors", "missing inheritance SVG");
    return;
  }
  const blocks = [...svg.querySelectorAll(".inheritance-class")].map(element => ({
    element,
    rect: element.querySelector(".inheritance-class-box"),
    text: element.querySelector(".inheritance-class-name")
  })).map(item => ({ ...item, box: item.rect.getBBox(), textBox: item.text.getBBox() }));
  const paths = [...svg.querySelectorAll("path.inheritance-generalization")];
  const inside = (point, box, margin = 0.75) => point.x > box.x + margin
    && point.x < box.x + box.width - margin
    && point.y > box.y + margin
    && point.y < box.y + box.height - margin;
  const onBorder = (point, box) => {
    const withinX = point.x >= box.x - 0.75 && point.x <= box.x + box.width + 0.75;
    const withinY = point.y >= box.y - 0.75 && point.y <= box.y + box.height + 0.75;
    return (withinY && (Math.abs(point.x - box.x) <= 0.75 || Math.abs(point.x - box.x - box.width) <= 0.75))
      || (withinX && (Math.abs(point.y - box.y) <= 0.75 || Math.abs(point.y - box.y - box.height) <= 0.75));
  };
  const overlaps = (a, b) => Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x) > 0.5
    && Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y) > 0.5;

  if (!blocks.length) errors.push("inheritance SVG has no class blocks");
  if (svg.querySelectorAll("text:not(.inheritance-class-name)").length) errors.push("inheritance SVG has non-class text");
  if (blocks.length) {
    const bodyFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    const diagramFontSize = parseFloat(getComputedStyle(blocks[0].text).fontSize);
    const scale = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width;
    if (diagramFontSize <= bodyFontSize || diagramFontSize > bodyFontSize * 1.2) {
      errors.push(`inheritance font size ${diagramFontSize} is not slightly larger than body text ${bodyFontSize}`);
    }
    if (Math.abs(scale - 1) > 0.02) errors.push(`inheritance SVG is scaled instead of using its natural size: ${scale}`);
  }
  const known = new Set(window.UML_DATA.classifiers.map(item => item.name));
  for (const block of blocks) {
    const name = block.element.dataset.classifier;
    if (!block.element.querySelector(":scope > title")?.textContent.trim()) errors.push(`class has no definition tooltip: ${name}`);
    if (known.has(name) && block.element.tagName.toLowerCase() !== "a") errors.push(`class has no link: ${name}`);
    if (!inside({ x: block.textBox.x, y: block.textBox.y }, block.box, 4)
      || !inside({ x: block.textBox.x + block.textBox.width, y: block.textBox.y + block.textBox.height }, block.box, 4)) {
      errors.push(`class name exceeds its block: ${name}`);
    }
  }
  for (let first = 0; first < blocks.length; first += 1) {
    for (let second = first + 1; second < blocks.length; second += 1) {
      if (overlaps(blocks[first].textBox, blocks[second].textBox)) errors.push("class names overlap");
    }
  }

  const current = blocks.filter(block => block.element.hasAttribute("data-current"));
  const roots = blocks.filter(block => block.element.dataset.depth === "0");
  if (current.length !== 1) errors.push("inheritance SVG must have one current class");
  if (!roots.length) errors.push("inheritance SVG has no root");
  const left = Math.min(...blocks.map(block => block.box.x));
  const right = Math.max(...blocks.map(block => block.box.x + block.box.width));
  if (roots.some(block => Math.abs(block.box.x - left) > 0.75)) errors.push("root is not the leftmost block");
  if (current.length === 1 && Math.abs(current[0].box.x + current[0].box.width - right) > 0.75) {
    errors.push("current class is not the rightmost block");
  }

  const names = new Set(blocks.map(block => block.element.dataset.classifier));
  const expectedEdges = blocks.reduce((count, block) => count
    + (window.UML_XMI_DATA.generalizations[block.element.dataset.classifier] || []).filter(parent => names.has(parent)).length, 0);
  if (paths.length !== expectedEdges) errors.push(`generalization edge count: ${paths.length} instead of ${expectedEdges}`);

  const terminalRun = path => {
    const length = path.getTotalLength();
    const origin = path.getPointAtLength(length);
    const next = path.getPointAtLength(length - 1);
    const runX = next.x - origin.x;
    const runY = next.y - origin.y;
    const runLength = Math.hypot(runX, runY);
    const unitX = runX / runLength;
    const unitY = runY / runLength;
    let run = 1;
    for (let distance = 2; distance < length; distance += 1) {
      const point = path.getPointAtLength(length - distance);
      const cross = Math.abs((point.x - origin.x) * unitY - (point.y - origin.y) * unitX);
      if (cross > 0.25) break;
      run = distance;
    }
    return run;
  };
  for (const path of paths) {
    if (path.getAttribute("marker-end") !== "url(#inheritance-generalization)") errors.push("nonstandard inheritance marker");
    if (terminalRun(path) < 12) errors.push("insufficient straight segment before inheritance marker");
    const length = path.getTotalLength();
    const start = path.getPointAtLength(0);
    const end = path.getPointAtLength(length);
    if (!blocks.some(block => onBorder(start, block.box))) errors.push("inheritance start is not on a class border");
    if (!blocks.some(block => onBorder(end, block.box))) errors.push("inheritance end is not on a class border");
    const child = blocks.find(block => block.element.dataset.classifier === path.dataset.child);
    const parent = blocks.find(block => block.element.dataset.classifier === path.dataset.parent);
    if (!child || !onBorder(start, child.box)) errors.push(`inheritance does not start at child class: ${path.dataset.child}`);
    if (!parent || !onBorder(end, parent.box)) errors.push(`generalization arrow does not point to parent class: ${path.dataset.parent}`);
    for (let distance = 1; distance < length - 1; distance += 1) {
      if (blocks.some(block => inside(path.getPointAtLength(distance), block.box))) {
        errors.push(`inheritance line enters a class block: ${path.getAttribute("d")}`);
        break;
      }
    }
  }

  const classifierName = document.querySelector(".original-name")?.textContent.split(" [")[0];
  const classData = window.UML_XMI_DATA.classes[classifierName];
  const properties = [...(classData?.direct || []), ...(classData?.inherited || [])];
  const propertyRows = [...document.querySelectorAll(".property-list .detail-item")];
  for (const property of properties) {
    const row = propertyRows.find(item => item.querySelector("code")?.textContent === property.signature);
    for (const reference of property.subsettedProperties || []) {
      const owner = reference.owner;
      const associationName = owner?.type === "association" ? owner.name
        : window.UML_XMI_DATA.classes[owner?.name]?.direct.find(item => item.id === reference.id)?.association;
      const association = window.UML_DATA.associations.find(item => item.name === associationName);
      const diagram = window.UML_DATA.diagrams.find(item => item.en === association?.diagrams[0]);
      if (!diagram) continue;
      const expectedHref = `#/diagram/${diagram.id.replace(/\./g, "-")}`;
      const link = [...(row?.querySelectorAll("code a") || [])].find(item => item.textContent === reference.name);
      if (link?.getAttribute("href") !== expectedHref) {
        errors.push(`subsets ${property.signature} must link ${reference.name} to ${expectedHref}`);
      }
    }
  }
  document.documentElement.setAttribute("data-inheritance-errors", [...new Set(errors)].join(" | "));
})();
"""


def check_route(browser, route, expected, known_routes):
    page = INDEX
    validation_page = None
    if route.startswith("#/classifier/"):
        script = f'<script>document.addEventListener("DOMContentLoaded", () => {{{INHERITANCE_GEOMETRY_SCRIPT}}});</script>'
        with tempfile.NamedTemporaryFile(
            mode="w", encoding="utf-8", dir=SITE, prefix=".validate-", suffix=".html", delete=False
        ) as temporary:
            temporary.write(INDEX.read_text(encoding="utf-8").replace("</body>", script + "</body>"))
            validation_page = Path(temporary.name)
        page = validation_page
    try:
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
                    page.resolve().as_uri() + route,
                ],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                timeout=45,
            )
    finally:
        if validation_page:
            validation_page.unlink()
    dom = result.stdout.decode("utf-8", errors="replace")
    console = result.stderr.decode("utf-8", errors="replace")
    if result.returncode:
        return f"{route or '#/'}: browser exit code {result.returncode}"
    if expected not in dom:
        return f"{route or '#/'}: missing expected text {expected!r}"
    if "<h1" not in dom:
        return f"{route or '#/'}: missing h1"
    if route.startswith("#/classifier/"):
        if 'class="inheritance-svg"' not in dom:
            return f"{route}: missing inheritance SVG"
        if 'data-current="true"' not in dom:
            return f"{route}: missing current class in inheritance SVG"
        match = re.search(r'data-inheritance-errors="([^"]*)"', dom)
        if not match:
            return f"{route}: inheritance geometry check did not run"
        if match.group(1):
            return f"{route}: {match.group(1)}"
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


SVG_GEOMETRY_SCRIPT = r"""
(() => {
  const errors = [];
  const labels = [...document.querySelectorAll("text")].map((element, index) => ({
    element,
    box: element.getBBox(),
    name: element.textContent.trim() || `text ${index}`
  }));
  const classBoxes = [...document.querySelectorAll("rect.class-box")].map(element => ({
    element,
    name: element.closest(".class-node")?.dataset.classifier || "",
    box: element.getBBox()
  }));
  const overlaps = (a, b) => Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x) > 0.5
    && Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y) > 0.5;
  const inside = (point, box, margin = 0.75) => point.x > box.x + margin
    && point.x < box.x + box.width - margin
    && point.y > box.y + margin
    && point.y < box.y + box.height - margin;
  const onBorder = (point, box) => {
    const withinX = point.x >= box.x - 0.75 && point.x <= box.x + box.width + 0.75;
    const withinY = point.y >= box.y - 0.75 && point.y <= box.y + box.height + 0.75;
    return (withinY && (Math.abs(point.x - box.x) <= 0.75 || Math.abs(point.x - box.x - box.width) <= 0.75))
      || (withinX && (Math.abs(point.y - box.y) <= 0.75 || Math.abs(point.y - box.y - box.height) <= 0.75));
  };
  const expanded = (box, horizontal, vertical) => ({
    x: box.x - horizontal,
    y: box.y - vertical,
    width: box.width + horizontal * 2,
    height: box.height + vertical * 2
  });
  const unitProbe = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  unitProbe.setAttribute("width", "1ex");
  unitProbe.setAttribute("height", "0");
  document.documentElement.appendChild(unitProbe);
  const ex = unitProbe.getBBox().width || 8;
  unitProbe.remove();
  const horizontalGap = ex;
  const verticalGap = ex / 2;
  const associationLabel = label => Boolean(label.element.closest("g.association-group"));

  for (let first = 0; first < labels.length; first += 1) {
    for (let second = first + 1; second < labels.length; second += 1) {
      if (overlaps(labels[first].box, labels[second].box)) {
        errors.push(`text/text: ${labels[first].name} / ${labels[second].name}`);
      }
    }
  }

  for (const label of labels) {
    const owner = label.element.closest(".class-node, a")?.querySelector("rect.class-box");
    if (owner) {
      const box = owner.getBBox();
      if (!inside({ x: label.box.x, y: label.box.y }, box, 1)
        || !inside({ x: label.box.x + label.box.width, y: label.box.y + label.box.height }, box, 1)) {
        errors.push(`text/class border: ${label.name}`);
      }
    } else {
      for (const classBox of classBoxes) {
        const clearance = associationLabel(label) ? expanded(classBox.box, horizontalGap, verticalGap) : classBox.box;
        if (overlaps(label.box, clearance)) errors.push(`label/class clearance: ${label.name} at ${label.box.x},${label.box.y}; class ${classBox.box.x},${classBox.box.y},${classBox.box.width},${classBox.box.height}`);
      }
    }
  }

  const lines = [...document.querySelectorAll("path.association, path.generalization-line, path.example-association, path.dependency-line, path.note-link, line.class-divider")];
  for (const line of lines) {
    const length = line.getTotalLength();
    for (const label of labels) {
      const gapX = associationLabel(label) ? horizontalGap : 0.75;
      const gapY = associationLabel(label) ? verticalGap : 0.75;
      const box = expanded(label.box, gapX, gapY);
      for (let distance = 0; distance <= length; distance += 1) {
        if (inside(line.getPointAtLength(distance), box, 0)) {
          errors.push(`text/line: ${label.name} at ${label.box.x},${label.box.y}`);
          break;
        }
      }
    }
  }

  for (const link of document.querySelectorAll('a[href*="#/classifier/"]')) {
    const title = link.querySelector(":scope > title");
    if (!title?.textContent.trim() || title.textContent.includes("открыть описание")) {
      errors.push("class link has no definition tooltip");
    }
  }
  for (const group of document.querySelectorAll("g.association-group")) {
    if (!group.closest("a.association-link")) errors.push("association group has no link");
    const ends = [...group.querySelectorAll("text.association-end")];
    if (ends.length !== 2) errors.push(`association must have two described end labels: ${group.id}`);
    for (const end of ends) {
      if (!end.querySelector(":scope > title")?.textContent.trim()) {
        errors.push(`association end has no description tooltip: ${end.textContent.trim()}`);
      }
    }
  }

  const endShapes = [...document.querySelectorAll(".end-dot, .composition")].map(element => ({
    element,
    box: element.getBBox()
  }));
  const markerBoxes = [];
  for (const path of document.querySelectorAll("path.association")) {
    const length = path.getTotalLength();
    const addMarker = atEnd => {
      const origin = path.getPointAtLength(atEnd ? length : 0);
      const base = path.getPointAtLength(atEnd ? Math.max(0, length - 8) : Math.min(8, length));
      markerBoxes.push({
        x: Math.min(origin.x, base.x),
        y: Math.min(origin.y, base.y) - 4,
        width: Math.abs(base.x - origin.x),
        height: Math.abs(base.y - origin.y) + 8
      });
    };
    if (path.hasAttribute("marker-start")) addMarker(false);
    if (path.hasAttribute("marker-end")) addMarker(true);
  }
  for (const label of labels.filter(associationLabel)) {
    for (const shape of [...endShapes, ...markerBoxes]) {
      if (overlaps(label.box, expanded(shape.box || shape, horizontalGap, verticalGap))) {
        errors.push(`text/end marker clearance: ${label.name}`);
      }
    }
  }

  for (const group of document.querySelectorAll("g.association-group")) {
    const path = group.querySelector("path.association");
    const roles = [...group.querySelectorAll("text.association-end")];
    if (!path || roles.length !== 2) continue;
    const length = path.getTotalLength();
    [false, true].forEach((atEnd, index) => {
      const role = roles[index];
      const box = role.getBBox();
      const origin = path.getPointAtLength(atEnd ? length : 0);
      const next = path.getPointAtLength(atEnd ? length - 1 : 1);
      const horizontal = Math.abs(next.x - origin.x) > Math.abs(next.y - origin.y);
      const name = role.textContent.trim();
      if (horizontal) {
        const toRight = next.x > origin.x;
        const gap = toRight ? box.x - origin.x : origin.x - box.x - box.width;
        const perpendicularGap = origin.y < box.y ? box.y - origin.y
          : origin.y > box.y + box.height ? origin.y - box.y - box.height : 0;
        if (gap < horizontalGap - 0.75 || gap > horizontalGap * 3 || perpendicularGap > ex * 6) {
          errors.push(`horizontal association end placement: ${name}`);
        }
        const expectedAnchor = toRight ? "start" : "end";
        if ((role.getAttribute("text-anchor") || "start") !== expectedAnchor) {
          errors.push(`horizontal association end alignment: ${name}`);
        }
      } else {
        const downward = next.y > origin.y;
        const sideGap = downward ? box.y - origin.y : origin.y - box.y - box.height;
        const onLeft = box.x + box.width <= origin.x;
        const lateralGap = onLeft ? origin.x - box.x - box.width : box.x - origin.x;
        if (sideGap < verticalGap - 0.75 || sideGap > ex * 6
          || lateralGap < horizontalGap - 0.75) {
          errors.push(`vertical association end placement: ${name}`);
        }
        const expectedAnchor = onLeft ? "end" : "start";
        if ((role.getAttribute("text-anchor") || "start") !== expectedAnchor) {
          errors.push(`vertical association end alignment: ${name}`);
        }
      }
    });
  }

  for (const path of document.querySelectorAll("path.association")) {
    if (!path.closest("g.association-group")) errors.push("association has no hover group");
    if (!path.closest("a.association-link")) errors.push("association has no link");
    const length = path.getTotalLength();
    const start = path.getPointAtLength(0);
    const end = path.getPointAtLength(length);
    if (!classBoxes.some(classBox => onBorder(start, classBox.box))) errors.push("association start is not on a class border");
    if (!classBoxes.some(classBox => onBorder(end, classBox.box))) errors.push("association end is not on a class border");
    for (let distance = 1; distance < length - 1; distance += 1) {
      if (classBoxes.some(classBox => inside(path.getPointAtLength(distance), classBox.box))) {
        errors.push("association enters a class");
        break;
      }
    }
  }

  for (const path of document.querySelectorAll("path.association")) {
    for (const attribute of ["marker-start", "marker-end"]) {
      const marker = path.getAttribute(attribute);
      if (marker && marker !== "url(#navigation)" && marker !== "url(#navigation-start)") {
        errors.push(`nonstandard association marker: ${marker}`);
      }
    }
  }
  for (const path of document.querySelectorAll("path.generalization-line[marker-end]")) {
    if (path.getAttribute("marker-end") !== "url(#generalization)") errors.push("nonstandard generalization marker");
    if (path.dataset.child && path.dataset.parent) {
      const child = classBoxes.find(block => block.name === path.dataset.child);
      const parents = classBoxes.filter(block => block.name === path.dataset.parent);
      const length = path.getTotalLength();
      const end = path.getPointAtLength(length);
      if (!child || !onBorder(path.getPointAtLength(0), child.box)) errors.push(`generalization does not start at child: ${path.dataset.child}`);
      if (!parents.length || !parents.some(parent => onBorder(end, parent.box))) errors.push(`generalization does not point to parent: ${path.dataset.parent}`);
    }
  }

  const terminalRun = (path, atEnd) => {
    const length = path.getTotalLength();
    const origin = path.getPointAtLength(atEnd ? length : 0);
    const next = path.getPointAtLength(atEnd ? length - 1 : 1);
    const runX = next.x - origin.x;
    const runY = next.y - origin.y;
    const runLength = Math.hypot(runX, runY);
    const unitX = runX / runLength;
    const unitY = runY / runLength;
    let run = 1;
    for (let distance = 2; distance < length; distance += 1) {
      const point = path.getPointAtLength(atEnd ? length - distance : distance);
      const cross = Math.abs((point.x - origin.x) * unitY - (point.y - origin.y) * unitX);
      if (cross > 0.25) break;
      run = distance;
    }
    return run;
  };
  for (const path of document.querySelectorAll("path.association, path.generalization-line")) {
    if (path.getAttribute("marker-start") && terminalRun(path, false) < 12) errors.push("insufficient straight segment before start marker");
    if (path.getAttribute("marker-end") && terminalRun(path, true) < 12) errors.push("insufficient straight segment before end marker");
  }
  document.documentElement.setAttribute("data-geometry-errors", [...new Set(errors)].join(" | "));
})();
"""


def check_svg_geometry(browser, vector):
    source = SITE / vector
    with tempfile.TemporaryDirectory() as workspace:
        workspace = Path(workspace)
        copy = workspace / source.name
        script = f"<script><![CDATA[{SVG_GEOMETRY_SCRIPT}]]></script>"
        copy.write_text(source.read_text(encoding="utf-8").replace("</svg>", script + "</svg>"), encoding="utf-8")
        result = subprocess.run(
            [
                str(browser),
                "--headless=new",
                "--disable-gpu",
                "--disable-background-networking",
                "--disable-extensions",
                "--no-first-run",
                f"--user-data-dir={workspace / 'profile'}",
                "--virtual-time-budget=1000",
                "--dump-dom",
                copy.resolve().as_uri(),
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=45,
        )
    dom = result.stdout.decode("utf-8", errors="replace")
    if result.returncode:
        return [f"{vector}: browser exit code {result.returncode}"]
    match = re.search(r'data-geometry-errors="([^"]*)"', dom)
    if not match:
        return [f"{vector}: SVG geometry check did not run"]
    return [f"{vector}: {error}" for error in match.group(1).split(" | ") if error]


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

    vectors = diagram_vectors()
    geometry_failures = [error for vector in vectors for error in check_svg_geometry(browser, vector)]
    if geometry_failures:
        for failure in geometry_failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"SVG geometry checks: OK; {len(vectors)} diagrams passed")

    with ThreadPoolExecutor(max_workers=4) as executor:
        known_routes = {item[0] for item in all_routes} | {"#/", "#content"}
        failures = list(executor.map(lambda item: check_route(browser, *item, known_routes), all_routes))
    failures = [failure for failure in failures if failure]
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"Browser checks: OK; {len(all_routes)} file:// routes passed")


if __name__ == "__main__":
    main()
