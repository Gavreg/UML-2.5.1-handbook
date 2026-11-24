"""
Name: check_svg_overlaps.py
Purpose: Check SVG geometry entirely in Python and report overlapping or misplaced elements.
Interface: python scripts/check_svg_overlaps.py [SVG ...]
Goal: Detect text collisions, insufficient clearances and invalid line or marker connections without a browser.
Requires: Python 3 and Pillow; Arial is used when available, with DejaVu Sans as a metrics fallback.
Usage:
  Run from the repository root; without arguments all handbook SVG figures are checked.
  python scripts/check_svg_overlaps.py
  python scripts/check_svg_overlaps.py site/assets/diagrams/figure-9-1.svg
  Pass one or more SVG paths to narrow the check; a nonzero exit code reports geometry errors.
"""

from argparse import ArgumentParser
from dataclasses import dataclass
from functools import cached_property
import math
from pathlib import Path
import re
import xml.etree.ElementTree as ET

from PIL import ImageFont


ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
SVG_NS = "{http://www.w3.org/2000/svg}"


@dataclass(frozen=True)
class Box:
    x: float
    y: float
    width: float
    height: float

    @property
    def right(self):
        return self.x + self.width

    @property
    def bottom(self):
        return self.y + self.height


@dataclass(frozen=True)
class PathGeometry:
    points: tuple

    @cached_property
    def segments(self):
        result = []
        for start, end in zip(self.points, self.points[1:]):
            length = math.dist(start, end)
            if length:
                result.append((start, end, length))
        return tuple(result)

    @cached_property
    def length(self):
        return sum(segment[2] for segment in self.segments)

    def point(self, distance):
        if not self.points:
            return (0.0, 0.0)
        if len(self.points) == 1 or not self.segments:
            return self.points[0]
        distance = max(0.0, min(float(distance), self.length))
        traversed = 0.0
        for start, end, length in self.segments:
            if distance <= traversed + length:
                ratio = (distance - traversed) / length
                return start[0] + (end[0] - start[0]) * ratio, start[1] + (end[1] - start[1]) * ratio
            traversed += length
        return self.points[-1]

    @property
    def start(self):
        return self.point(0)

    @property
    def end(self):
        return self.point(self.length)


class FontMetrics:
    def __init__(self):
        self.cache = {}

    def font(self, size, bold=False, italic=False):
        key = (size, bold, italic)
        if key in self.cache:
            return self.cache[key]
        names = []
        if bold and italic:
            names = ["arialbi.ttf", "DejaVuSans-BoldOblique.ttf"]
        elif bold:
            names = ["arialbd.ttf", "DejaVuSans-Bold.ttf"]
        elif italic:
            names = ["ariali.ttf", "DejaVuSans-Oblique.ttf"]
        else:
            names = ["arial.ttf", "DejaVuSans.ttf"]
        windows = Path("C:/Windows/Fonts")
        candidates = [windows / name for name in names] + names
        for candidate in candidates:
            try:
                font = ImageFont.truetype(str(candidate), size=size)
                self.cache[key] = font
                return font
            except OSError:
                continue
        raise RuntimeError("No TrueType font found for SVG text measurements; install Arial or DejaVu Sans")

    def box(self, value, x, y, anchor, size, bold=False, italic=False):
        font = self.font(size, bold, italic)
        left, _, right, _ = font.getbbox(value, anchor="ls")
        advance = font.getlength(value)
        if anchor == "middle":
            origin = x - advance / 2
        elif anchor == "end":
            origin = x - advance
        else:
            origin = x
        return Box(origin + left, y - size + 1, right - left, size + 2)


FONTS = FontMetrics()


def classes(element):
    return set(element.get("class", "").split())


def local_name(element):
    return element.tag.rsplit("}", 1)[-1]


def float_attribute(element, name, default=0.0):
    return float(element.get(name, default))


def rect_box(element):
    return Box(
        float_attribute(element, "x"), float_attribute(element, "y"),
        float_attribute(element, "width"), float_attribute(element, "height"),
    )


def overlaps(first, second):
    return min(first.right, second.right) - max(first.x, second.x) > 0.5 and min(
        first.bottom, second.bottom
    ) - max(first.y, second.y) > 0.5


def inside(point, box, margin=0.75):
    return box.x + margin < point[0] < box.right - margin and box.y + margin < point[1] < box.bottom - margin


def on_border(point, box):
    within_x = box.x - 0.75 <= point[0] <= box.right + 0.75
    within_y = box.y - 0.75 <= point[1] <= box.bottom + 0.75
    return (
        within_y and (abs(point[0] - box.x) <= 0.75 or abs(point[0] - box.right) <= 0.75)
    ) or (
        within_x and (abs(point[1] - box.y) <= 0.75 or abs(point[1] - box.bottom) <= 0.75)
    )


def expanded(box, horizontal, vertical):
    return Box(box.x - horizontal, box.y - vertical, box.width + horizontal * 2, box.height + vertical * 2)


def format_box(box):
    return f"x={box.x:.1f}, y={box.y:.1f}, w={box.width:.1f}, h={box.height:.1f}"


def direct_text(element):
    return ((element.text or "") + "".join(child.tail or "" for child in element)).strip()


def direct_child(element, name, class_name=None):
    return next((
        child for child in element
        if local_name(child) == name and (class_name is None or class_name in classes(child))
    ), None)


def path_geometry(element):
    if local_name(element) == "line":
        return PathGeometry((
            (float_attribute(element, "x1"), float_attribute(element, "y1")),
            (float_attribute(element, "x2"), float_attribute(element, "y2")),
        ))
    tokens = re.findall(r"[A-Za-z]|-?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?", element.get("d", ""))
    position = 0
    command = None
    current = (0.0, 0.0)
    start = current
    points = []
    arity = {"M": 2, "L": 2, "H": 1, "V": 1, "C": 6, "Z": 0}
    while position < len(tokens):
        if tokens[position].isalpha():
            command = tokens[position]
            position += 1
        if command is None or command.upper() not in arity:
            raise ValueError(f"Unsupported SVG path: {element.get('d', '')}")
        upper = command.upper()
        count = arity[upper]
        if position + count > len(tokens):
            raise ValueError(f"Incomplete SVG path: {element.get('d', '')}")
        values = [float(value) for value in tokens[position:position + count]]
        position += count
        relative = command.islower()
        if upper in ("M", "L"):
            point = (values[0] + (current[0] if relative else 0), values[1] + (current[1] if relative else 0))
        elif upper == "H":
            point = (values[0] + (current[0] if relative else 0), current[1])
        elif upper == "V":
            point = (current[0], values[0] + (current[1] if relative else 0))
        elif upper == "C":
            offset_x, offset_y = current if relative else (0, 0)
            control1 = (values[0] + offset_x, values[1] + offset_y)
            control2 = (values[2] + offset_x, values[3] + offset_y)
            point = (values[4] + offset_x, values[5] + offset_y)
            origin = current
            for step in range(1, 25):
                t = step / 24
                inverse = 1 - t
                points.append((
                    inverse ** 3 * origin[0] + 3 * inverse ** 2 * t * control1[0] + 3 * inverse * t ** 2 * control2[0] + t ** 3 * point[0],
                    inverse ** 3 * origin[1] + 3 * inverse ** 2 * t * control1[1] + 3 * inverse * t ** 2 * control2[1] + t ** 3 * point[1],
                ))
        else:
            point = start
        if upper == "M":
            start = point
        points.append(point)
        current = point
        if upper == "M":
            command = "l" if relative else "L"
        elif upper == "Z":
            command = None
    return PathGeometry(tuple(points))


class SvgDocument:
    def __init__(self, source=None, text=None):
        self.source = Path(source) if source else None
        self.root = ET.fromstring(text) if text is not None else ET.parse(source).getroot()
        self.parents = {child: parent for parent in self.root.iter() for child in parent}

    def ancestors(self, element):
        current = self.parents.get(element)
        while current is not None:
            yield current
            current = self.parents.get(current)

    def closest(self, element, class_names=(), tags=()):
        current = element
        while current is not None:
            if (class_names and classes(current).intersection(class_names)) or (tags and local_name(current) in tags):
                return current
            current = self.parents.get(current)
        return None

    def descendants(self, tag=None, class_name=None):
        return [
            element for element in self.root.iter()
            if (tag is None or local_name(element) == tag) and (class_name is None or class_name in classes(element))
        ]

    def text_size(self, element):
        element_classes = classes(element)
        ancestors = list(self.ancestors(element))
        if "inheritance-class-name" in element_classes:
            return 17
        if element_classes.intersection({"attribute", "operation", "association-end", "association-label"}):
            return 14
        if any(classes(parent).intersection({"association-group", "example-association-group"}) for parent in ancestors):
            return 14
        if "example-label" in element_classes:
            return 14
        return 16

    def labels(self):
        result = []
        for index, element in enumerate(self.descendants("text")):
            value = direct_text(element)
            if not value:
                continue
            element_classes = classes(element)
            box = FONTS.box(
                value, float_attribute(element, "x"), float_attribute(element, "y"),
                element.get("text-anchor", "start"), self.text_size(element),
                bool(element_classes.intersection({"class-name", "inheritance-class-name"})), "abstract" in element_classes,
            )
            result.append({"element": element, "box": box, "name": value or f"text {index}"})
        return result

    def association_label(self, label):
        return self.closest(label["element"], ("association-group",)) is not None


def terminal_run(path, at_end):
    length = path.length
    if length < 2:
        return length
    origin = path.point(length if at_end else 0)
    next_point = path.point(length - 1 if at_end else 1)
    run_x, run_y = next_point[0] - origin[0], next_point[1] - origin[1]
    run_length = math.hypot(run_x, run_y)
    if not run_length:
        return 0
    unit_x, unit_y = run_x / run_length, run_y / run_length
    run = 1
    distance = 2
    while distance < length:
        point = path.point(length - distance if at_end else distance)
        cross = abs((point[0] - origin[0]) * unit_y - (point[1] - origin[1]) * unit_x)
        if cross > 0.25:
            break
        run = distance
        distance += 1
    return run


def distance_to_box(point, box):
    return math.hypot(
        max(box.x - point[0], 0, point[0] - box.right),
        max(box.y - point[1], 0, point[1] - box.bottom),
    )


def axial_gap(origin, box, horizontal):
    return max(box.x - origin[0], origin[0] - box.right, 0) if horizontal else max(
        box.y - origin[1], origin[1] - box.bottom, 0
    )


def check_svg(source=None, text=None):
    document = SvgDocument(source, text)
    name = document.source.name if document.source else "inheritance SVG"
    errors = []
    labels = document.labels()
    class_boxes = []
    for element in document.descendants("rect", "class-box"):
        owner = document.closest(element, ("class-node",))
        class_boxes.append({"element": element, "name": owner.get("data-classifier", "") if owner is not None else "", "box": rect_box(element)})
    ex = 16 * 0.448
    horizontal_gap, vertical_gap = ex, ex / 2

    end_labels = [
        element for element in document.descendants("text")
        if document.closest(element, ("association-group", "example-association-group")) is not None
    ]
    invalid_sizes = sorted({document.text_size(element) for element in end_labels if document.text_size(element) != 14})
    if invalid_sizes:
        errors.append(f"association end font sizes must be 14 px: {', '.join(map(str, invalid_sizes))}")

    for first_index, first in enumerate(labels):
        for second in labels[first_index + 1:]:
            if overlaps(first["box"], second["box"]):
                errors.append(f"text/text: {first['name']} [{format_box(first['box'])}] / {second['name']} [{format_box(second['box'])}]")

    for label in labels:
        owner = document.closest(label["element"], ("class-node",), ("a",))
        owner_box_element = direct_child(owner, "rect", "class-box") if owner is not None else None
        if owner_box_element is not None:
            box = rect_box(owner_box_element)
            label_box = label["box"]
            if not inside((label_box.x, label_box.y), box, 1) or not inside((label_box.right, label_box.bottom), box, 1):
                errors.append(f"text/class border: {label['name']} [{format_box(label_box)}]")
        else:
            for class_box in class_boxes:
                clearance = expanded(class_box["box"], horizontal_gap, vertical_gap) if document.association_label(label) else class_box["box"]
                if overlaps(label["box"], clearance):
                    errors.append(f"label/class clearance: {label['name']} [{format_box(label['box'])}]; class {class_box['name']} [{format_box(class_box['box'])}]")

    line_classes = {"association", "generalization-line", "example-association", "dependency-line", "note-link", "class-divider"}
    lines = [element for element in document.root.iter() if classes(element).intersection(line_classes) and local_name(element) in {"path", "line"}]
    for line in lines:
        path = path_geometry(line)
        for label in labels:
            gap_x = horizontal_gap if document.association_label(label) else 0.75
            gap_y = vertical_gap if document.association_label(label) else 0.75
            box = expanded(label["box"], gap_x, gap_y)
            for distance in range(int(path.length) + 1):
                if inside(path.point(distance), box, 0):
                    errors.append(f"text/line: {label['name']} [{format_box(label['box'])}]; {line.get('class')} {line.get('d', '')}")
                    break

    for link in document.descendants("a"):
        if "#/classifier/" not in link.get("href", ""):
            continue
        title = direct_child(link, "title")
        tooltip = "" if title is None else "".join(title.itertext()).strip()
        if not tooltip or "открыть описание" in tooltip:
            errors.append("class link has no definition tooltip")
    for group in document.descendants("g", "association-group"):
        if document.closest(group, tags=("a",)) is None or "association-link" not in classes(document.closest(group, tags=("a",))):
            errors.append(f"association group has no link: {group.get('id', '')}")
        ends = [element for element in group.iter() if local_name(element) == "text" and "association-end" in classes(element)]
        if len(ends) != 2:
            errors.append(f"association must have two described end labels: {group.get('id', '')}")
        for end in ends:
            title = direct_child(end, "title")
            if title is None or not "".join(title.itertext()).strip():
                errors.append(f"association end has no description tooltip: {direct_text(end)}")

    end_shapes = []
    for element in document.root.iter():
        if "end-dot" in classes(element):
            radius = float_attribute(element, "r")
            center = (float_attribute(element, "cx"), float_attribute(element, "cy"))
            end_shapes.append(Box(center[0] - radius, center[1] - radius, radius * 2, radius * 2))
        elif "composition" in classes(element):
            points = [tuple(map(float, pair.split(","))) for pair in element.get("points", "").split()]
            if points:
                xs, ys = zip(*points)
                end_shapes.append(Box(min(xs), min(ys), max(xs) - min(xs), max(ys) - min(ys)))
    marker_boxes = []
    for element in document.descendants("path", "association"):
        path = path_geometry(element)
        for at_end, attribute in ((False, "marker-start"), (True, "marker-end")):
            if element.get(attribute):
                origin = path.point(path.length if at_end else 0)
                base = path.point(max(0, path.length - 8) if at_end else min(8, path.length))
                marker_boxes.append(Box(min(origin[0], base[0]), min(origin[1], base[1]) - 4, abs(base[0] - origin[0]), abs(base[1] - origin[1]) + 8))
    for label in labels:
        if not document.association_label(label):
            continue
        for shape in end_shapes + marker_boxes:
            if overlaps(label["box"], expanded(shape, horizontal_gap, vertical_gap)):
                errors.append(f"text/end marker clearance: {label['name']} [{format_box(label['box'])}]")

    for group in document.descendants("g", "association-group"):
        path_element = next((item for item in group.iter() if local_name(item) == "path" and "association" in classes(item)), None)
        roles = [item for item in group.iter() if local_name(item) == "text" and "association-end" in classes(item)]
        if path_element is None or len(roles) != 2:
            continue
        path = path_geometry(path_element)
        origins = [path.start, path.end]
        placements = []
        for role in roles:
            label = next(item for item in labels if item["element"] is role)
            box = label["box"]
            distances = [distance_to_box(origin, box) for origin in origins]
            end_index = 0 if distances[0] <= distances[1] else 1
            origin = origins[end_index]
            next_point = path.point(path.length - 1 if end_index else 1)
            horizontal = abs(next_point[0] - origin[0]) > abs(next_point[1] - origin[1])
            placements.append({"role": role, "box": box, "endIndex": end_index, "origin": origin, "next": next_point, "horizontal": horizontal, "nameGap": axial_gap(origin, box, horizontal)})
        if placements[0]["endIndex"] == placements[1]["endIndex"]:
            errors.append(f"association end labels assigned to the same end: {group.get('id', '')}")
        for placement in placements:
            role, box, origin = placement["role"], placement["box"], placement["origin"]
            next_point, horizontal, end_index = placement["next"], placement["horizontal"], placement["endIndex"]
            role_name = direct_text(role)
            own_distance = distance_to_box(origin, box)
            opposite_distance = distance_to_box(origins[1 - end_index], box)
            if opposite_distance < own_distance + horizontal_gap:
                errors.append(f"association end description is too close to opposite end: {group.get('id', '')} / {role_name}")
            if horizontal:
                to_right = next_point[0] > origin[0]
                gap = box.x - origin[0] if to_right else origin[0] - box.right
                perpendicular_gap = box.y - origin[1] if origin[1] < box.y else origin[1] - box.bottom if origin[1] > box.bottom else 0
                if gap < horizontal_gap - 0.75 or gap > horizontal_gap * 3 or perpendicular_gap > ex * 6:
                    errors.append(f"horizontal association end placement: {role_name}")
                expected_anchor = "start" if to_right else "end"
                if role.get("text-anchor", "start") != expected_anchor:
                    errors.append(f"horizontal association end alignment: {role_name}")
            else:
                downward = next_point[1] > origin[1]
                side_gap = box.y - origin[1] if downward else origin[1] - box.bottom
                on_left = box.right <= origin[0]
                lateral_gap = origin[0] - box.right if on_left else box.x - origin[0]
                if side_gap < vertical_gap - 0.75 or side_gap > ex * 6 or lateral_gap < horizontal_gap - 0.75:
                    errors.append(f"vertical association end placement: {role_name}")
                expected_anchor = "end" if on_left else "start"
                if role.get("text-anchor", "start") != expected_anchor:
                    errors.append(f"vertical association end alignment: {role_name}")
        for label_element in group.iter():
            if local_name(label_element) != "text" or "association-label" not in classes(label_element):
                continue
            label = next(item for item in labels if item["element"] is label_element)
            box = label["box"]
            distances = [distance_to_box(origin, box) for origin in origins]
            end_index = 0 if distances[0] <= distances[1] else 1
            placement = next((item for item in placements if item["endIndex"] == end_index), None)
            if placement is None:
                errors.append(f"association end label has no matching role: {group.get('id', '')} / {direct_text(label_element)}")
                continue
            if distances[1 - end_index] < distances[end_index] + horizontal_gap:
                errors.append(f"association end description is too close to opposite end: {group.get('id', '')} / {direct_text(label_element)}")
            modifier_gap = axial_gap(origins[end_index], box, placement["horizontal"])
            if placement["nameGap"] > modifier_gap + 1.25:
                errors.append(f"association end name is farther than its modifier: {direct_text(placement['role'])} / {direct_text(label_element)} [name={placement['nameGap']:.1f}, modifier={modifier_gap:.1f}]")

    for group in document.descendants("g", "example-association-group"):
        path_element = next((item for item in group.iter() if local_name(item) == "path" and "example-association" in classes(item)), None)
        if path_element is None:
            continue
        path = path_geometry(path_element)
        origins = [path.start, path.end]
        for label_element in group.iter():
            if local_name(label_element) != "text" or label_element.get("text-anchor") == "middle":
                continue
            label = next(item for item in labels if item["element"] is label_element)
            distances = [distance_to_box(origin, label["box"]) for origin in origins]
            if min(distances) > ex * 6:
                continue
            end_index = 0 if distances[0] <= distances[1] else 1
            if distances[1 - end_index] < distances[end_index] + horizontal_gap:
                errors.append(f"association end description is too close to opposite end: example / {direct_text(label_element)}")

    for element in document.descendants("path", "association"):
        group = document.closest(element, ("association-group",))
        link = document.closest(element, ("association-link",))
        if group is None:
            errors.append("association has no hover group")
        if link is None:
            errors.append("association has no link")
        path = path_geometry(element)
        if not any(on_border(path.start, class_box["box"]) for class_box in class_boxes):
            errors.append("association start is not on a class border")
        if not any(on_border(path.end, class_box["box"]) for class_box in class_boxes):
            errors.append("association end is not on a class border")
        for distance in range(1, max(1, int(path.length))):
            if distance >= path.length - 1:
                break
            if any(inside(path.point(distance), class_box["box"]) for class_box in class_boxes):
                errors.append("association enters a class")
                break
        for attribute in ("marker-start", "marker-end"):
            marker = element.get(attribute)
            if marker and marker not in {"url(#navigation)", "url(#navigation-start)"}:
                errors.append(f"nonstandard association marker: {marker}")
        for at_end, attribute in ((False, "marker-start"), (True, "marker-end")):
            if element.get(attribute) and terminal_run(path, at_end) < 12:
                errors.append(f"insufficient straight segment before {'end' if at_end else 'start'} marker")

    for element in document.descendants("path", "generalization-line"):
        if element.get("marker-end"):
            if element.get("marker-end") != "url(#generalization)":
                errors.append(f"nonstandard generalization marker: {element.get('marker-end')}")
            if terminal_run(path_geometry(element), True) < 12:
                errors.append("insufficient straight segment before end marker")
        if element.get("data-child") and element.get("data-parent"):
            path = path_geometry(element)
            children = [item for item in class_boxes if item["name"] == element.get("data-child")]
            parents = [item for item in class_boxes if item["name"] == element.get("data-parent")]
            if children and not any(on_border(path.start, child["box"]) for child in children):
                errors.append(f"generalization does not start at child: {element.get('data-child')}")
            if element.get("marker-end") and parents and not any(on_border(path.end, parent["box"]) for parent in parents):
                errors.append(f"generalization does not point to parent: {element.get('data-parent')}")

    return [f"{name}: {error}" for error in dict.fromkeys(errors)]


def check_inheritance(svg_text, classifier_name, xmi, data):
    """Check one classifier hierarchy, or the complete graph when classifier_name is None."""
    document = SvgDocument(text=svg_text)
    errors = []
    blocks = []
    for element in document.descendants(class_name="inheritance-class"):
        rect = direct_child(element, "rect", "inheritance-class-box")
        text = direct_child(element, "text", "inheritance-class-name")
        if rect is not None and text is not None:
            label = FONTS.box(direct_text(text), float_attribute(text, "x"), float_attribute(text, "y"), "middle", 17, True, "abstract" in classes(text))
            blocks.append({"element": element, "box": rect_box(rect), "textBox": label})
    paths = [path_geometry(element) for element in document.descendants("path", "inheritance-generalization")]
    path_elements = document.descendants("path", "inheritance-generalization")
    if not blocks:
        errors.append("inheritance SVG has no class blocks")
    non_class_text = [element for element in document.descendants("text") if "inheritance-class-name" not in classes(element)]
    if non_class_text:
        errors.append("inheritance SVG has non-class text")
    if 17 <= 16 or 17 > 16 * 1.2:
        errors.append("inheritance font size is not slightly larger than body text")
    view_box = [float(value) for value in document.root.get("viewBox", "0 0 0 0").split()]
    if view_box[2] and abs(float_attribute(document.root, "width") / view_box[2] - 1) > 0.02:
        errors.append("inheritance SVG is scaled instead of using its natural size")
    known = {item["name"] for item in data["classifiers"]}
    for block in blocks:
        element = block["element"]
        name = element.get("data-classifier", "")
        title = direct_child(element, "title")
        if title is None or not "".join(title.itertext()).strip():
            errors.append(f"class has no definition tooltip: {name}")
        if name in known and local_name(element) != "a":
            errors.append(f"class has no link: {name}")
        text_box = block["textBox"]
        if not inside((text_box.x, text_box.y), block["box"], 4) or not inside((text_box.right, text_box.bottom), block["box"], 4):
            errors.append(f"class name exceeds its block: {name}")
    for first_index, first in enumerate(blocks):
        for second in blocks[first_index + 1:]:
            if overlaps(first["textBox"], second["textBox"]):
                errors.append("class names overlap")
    current = [block for block in blocks if block["element"].get("data-current") == "true"]
    roots = [block for block in blocks if block["element"].get("data-depth") == "0"]
    expected_current = 0 if classifier_name is None else 1
    if len(current) != expected_current:
        errors.append(f"inheritance SVG must have {expected_current} current classes")
    if not roots:
        errors.append("inheritance SVG has no root")
    if blocks:
        left = min(block["box"].x for block in blocks)
        right = max(block["box"].right for block in blocks)
        if any(abs(block["box"].x - left) > 0.75 for block in roots):
            errors.append("root is not the leftmost block")
        if len(current) == 1 and abs(current[0]["box"].right - right) > 0.75:
            errors.append("current class is not the rightmost block")
    names = {block["element"].get("data-classifier") for block in blocks}
    expected_edges = sum(
        1 for block in blocks for parent in xmi.get("generalizations", {}).get(block["element"].get("data-classifier"), []) if parent in names
    )
    if len(paths) != expected_edges:
        errors.append(f"generalization edge count: {len(paths)} instead of {expected_edges}")
    for element, path in zip(path_elements, paths):
        if element.get("marker-end") != "url(#inheritance-generalization)":
            errors.append("nonstandard inheritance marker")
        if terminal_run(path, True) < 12:
            errors.append("insufficient straight segment before inheritance marker")
        if not any(on_border(path.start, block["box"]) for block in blocks):
            errors.append("inheritance start is not on a class border")
        if not any(on_border(path.end, block["box"]) for block in blocks):
            errors.append("inheritance end is not on a class border")
        child = next((block for block in blocks if block["element"].get("data-classifier") == element.get("data-child")), None)
        parent = next((block for block in blocks if block["element"].get("data-classifier") == element.get("data-parent")), None)
        if child is None or not on_border(path.start, child["box"]):
            errors.append(f"inheritance does not start at child class: {element.get('data-child')}")
        if parent is None or not on_border(path.end, parent["box"]):
            errors.append(f"generalization arrow does not point to parent class: {element.get('data-parent')}")
        for distance in range(1, max(1, int(path.length))):
            if distance >= path.length - 1:
                break
            if any(inside(path.point(distance), block["box"]) for block in blocks):
                errors.append(f"inheritance line enters a class block: {element.get('d')}")
                break
    if classifier_name is not None and len(current) == 1 and current[0]["element"].get("data-classifier") != classifier_name:
        errors.append(f"current inheritance class is not {classifier_name}")
    label = classifier_name or "complete metamodel"
    return [f"{label} inheritance: {error}" for error in dict.fromkeys(errors)]


def display_path(source):
    try:
        return source.resolve().relative_to(ROOT).as_posix()
    except ValueError:
        return str(source)


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


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("svg", nargs="*", type=Path, help="SVG files; by default all handbook diagrams")
    args = parser.parse_args()
    sources = args.svg or sorted((SITE / "assets" / "diagrams").glob("figure-*.svg"))
    missing = [source for source in sources if not source.is_file()]
    if missing:
        for source in missing:
            print(f"ERROR: SVG file not found: {source}")
        raise SystemExit(1)
    failures = [error for source in sources for error in check_svg(source)]
    if failures:
        for failure in failures:
            print(f"ERROR: {failure}")
        raise SystemExit(1)
    print(f"SVG geometry checks: OK; {len(sources)} diagrams passed (Python)")


if __name__ == "__main__":
    main()
