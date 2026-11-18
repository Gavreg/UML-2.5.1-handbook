"""
Name: check_svg_overlaps.py
Purpose: Check SVG diagram geometry and report overlapping or misplaced elements.
Interface: python scripts/check_svg_overlaps.py [SVG ...] [--browser PATH]
Goal: Detect text collisions, insufficient clearances and invalid line or marker connections.
Requires: Python 3 standard library; Google Chrome or Microsoft Edge.
"""

from argparse import ArgumentParser
from pathlib import Path
import re
import subprocess
import tempfile


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"


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
  const formatBox = box => `x=${box.x.toFixed(1)}, y=${box.y.toFixed(1)}, w=${box.width.toFixed(1)}, h=${box.height.toFixed(1)}`;
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
        errors.push(`text/text: ${labels[first].name} [${formatBox(labels[first].box)}] / ${labels[second].name} [${formatBox(labels[second].box)}]`);
      }
    }
  }

  for (const label of labels) {
    const owner = label.element.closest(".class-node, a")?.querySelector("rect.class-box");
    if (owner) {
      const box = owner.getBBox();
      if (!inside({ x: label.box.x, y: label.box.y }, box, 1)
        || !inside({ x: label.box.x + label.box.width, y: label.box.y + label.box.height }, box, 1)) {
        errors.push(`text/class border: ${label.name} [${formatBox(label.box)}]`);
      }
    } else {
      for (const classBox of classBoxes) {
        const clearance = associationLabel(label) ? expanded(classBox.box, horizontalGap, verticalGap) : classBox.box;
        if (overlaps(label.box, clearance)) errors.push(`label/class clearance: ${label.name} [${formatBox(label.box)}]; class ${classBox.name} [${formatBox(classBox.box)}]`);
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
          errors.push(`text/line: ${label.name} [${formatBox(label.box)}]`);
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
        errors.push(`text/end marker clearance: ${label.name} [${formatBox(label.box)}]`);
      }
    }
  }

  const distanceToBox = (point, box) => Math.hypot(
    Math.max(box.x - point.x, 0, point.x - box.x - box.width),
    Math.max(box.y - point.y, 0, point.y - box.y - box.height)
  );
  const axialGap = (origin, box, horizontal) => horizontal
    ? Math.max(box.x - origin.x, origin.x - box.x - box.width, 0)
    : Math.max(box.y - origin.y, origin.y - box.y - box.height, 0);
  for (const group of document.querySelectorAll("g.association-group")) {
    const path = group.querySelector("path.association");
    const roles = [...group.querySelectorAll("text.association-end")];
    if (!path || roles.length !== 2) continue;
    const length = path.getTotalLength();
    const origins = [path.getPointAtLength(0), path.getPointAtLength(length)];
    const placements = roles.map(role => {
      const box = role.getBBox();
      const distances = origins.map(origin => distanceToBox(origin, box));
      const endIndex = distances[0] <= distances[1] ? 0 : 1;
      const origin = origins[endIndex];
      const next = path.getPointAtLength(endIndex ? length - 1 : 1);
      const horizontal = Math.abs(next.x - origin.x) > Math.abs(next.y - origin.y);
      return { role, box, endIndex, origin, next, horizontal, nameGap: axialGap(origin, box, horizontal) };
    });
    if (placements[0].endIndex === placements[1].endIndex) {
      errors.push(`association end labels assigned to the same end: ${group.id}`);
    }
    for (const placement of placements) {
      const { role, box, origin, next, horizontal } = placement;
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
    }
    for (const label of group.querySelectorAll("text.association-label")) {
      const box = label.getBBox();
      const placement = placements.reduce((nearest, candidate) => {
        const labelCenter = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
        return distanceToBox(labelCenter, candidate.box) < distanceToBox(labelCenter, nearest.box)
          ? candidate : nearest;
      });
      const endIndex = placement.endIndex;
      if (placement.nameGap > axialGap(origins[endIndex], box, placement.horizontal) + 0.75) {
        errors.push(`association end name is farther than its modifier: ${placement.role.textContent.trim()} / ${label.textContent.trim()}`);
      }
    }
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


def find_browser(explicit=None):
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


def display_path(source):
    try:
        return source.resolve().relative_to(ROOT).as_posix()
    except ValueError:
        return str(source)


def check_svg_geometry(browser, source):
    source = Path(source)
    name = display_path(source)
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
        return [f"{name}: browser exit code {result.returncode}"]
    match = re.search(r'data-geometry-errors="([^"]*)"', dom)
    if not match:
        return [f"{name}: SVG geometry check did not run"]
    return [f"{name}: {error}" for error in match.group(1).split(" | ") if error]


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("svg", nargs="*", type=Path, help="SVG files; by default all Clause 7 diagrams")
    parser.add_argument("--browser", help="Path to Chrome or Edge")
    args = parser.parse_args()

    sources = args.svg or sorted((SITE / "assets" / "diagrams").glob("figure-*.svg"))
    missing = [source for source in sources if not source.is_file()]
    if missing:
        for source in missing:
            print(f"ERROR: SVG file not found: {source}")
        raise SystemExit(1)
    browser = find_browser(args.browser)
    if not browser:
        raise SystemExit("Chrome or Edge is required; specify its path with --browser")

    failures = [error for source in sources for error in check_svg_geometry(browser, source)]
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"SVG geometry checks: OK; {len(sources)} diagrams passed")


if __name__ == "__main__":
    main()
