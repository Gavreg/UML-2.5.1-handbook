"""
Name: classification_figures_layout.py
Purpose: Shared label placement helpers for interactive SVG figures in UML 2.5.1 Clause 9.
Interface: import classification_figures_layout as layout; layout.horizontal_association(...)
Goal: Keep association labels near their ends with consistent clearances and 16 px line spacing.
Sources: AGENTS.md diagram rules and scripts/check_svg_overlaps.py.
Requires: Python 3 standard library and scripts/generate_common_structure_svg.py.
"""

from generate_common_structure_svg import association


def horizontal_association(svg, name, x1, x2, y, start, end, markers="", decorations=""):
    start_owner, start_prop, start_name, start_labels = start
    end_owner, end_prop, end_name, end_labels = end
    association(
        svg,
        name,
        f"M {x1} {y} H {x2}",
        (start_owner, start_prop, start_name, x1 + 20, y - 20, "start"),
        (end_owner, end_prop, end_name, x2 - 20, y - 20, "end"),
        markers,
        decorations,
        [
            *[(value, x1 + 20, y - 40 - index * 16, "start") for index, value in enumerate(start_labels)],
            *[(value, x2 - 20, y - 40 - index * 16, "end") for index, value in enumerate(end_labels)],
        ],
    )


def vertical_association(svg, name, x, y1, y2, start, end, markers="", decorations="", side=1):
    down = y2 > y1
    start_owner, start_prop, start_name, start_labels = start
    end_owner, end_prop, end_name, end_labels = end
    start_y = y1 + (38 if down else -28)
    end_y = y2 + (-28 if down else 38)
    label_x = x + 20 * side
    anchor = "start" if side > 0 else "end"
    association(
        svg,
        name,
        f"M {x} {y1} V {y2}",
        (start_owner, start_prop, start_name, label_x, start_y, anchor),
        (end_owner, end_prop, end_name, label_x, end_y, anchor),
        markers,
        decorations,
        [
            *[
                (value, label_x, y1 + (54 + index * 16 if down else -44 - index * 16), anchor)
                for index, value in enumerate(start_labels)
            ],
            *[
                (value, label_x, y2 + (-44 - index * 16 if down else 54 + index * 16), anchor)
                for index, value in enumerate(end_labels)
            ],
        ],
    )


def self_association_top(svg, name, right, start_y, top, end_x, lane_x, lane_y, start, end, decorations=""):
    start_owner, start_prop, start_name, start_labels = start
    end_owner, end_prop, end_name, end_labels = end
    association(
        svg,
        name,
        f"M {right} {start_y} H {lane_x} V {lane_y} H {end_x} V {top}",
        (start_owner, start_prop, start_name, right + 20, start_y - 20, "start"),
        (end_owner, end_prop, end_name, end_x + 20, top - 28, "start"),
        "",
        decorations,
        [
            *[(value, right + 20, start_y - 40 - index * 16, "start") for index, value in enumerate(start_labels)],
            *[(value, end_x + 20, top - 44 - index * 16, "start") for index, value in enumerate(end_labels)],
        ],
    )


def self_association(svg, name, right, start_y, bottom, end_x, lane_x, lane_y, start, end, decorations=""):
    start_owner, start_prop, start_name, start_labels = start
    end_owner, end_prop, end_name, end_labels = end
    association(
        svg,
        name,
        f"M {right} {start_y} H {lane_x} V {lane_y} H {end_x} V {bottom}",
        (start_owner, start_prop, start_name, right + 20, start_y - 20, "start"),
        (end_owner, end_prop, end_name, end_x + 20, bottom + 38, "start"),
        "",
        decorations,
        [
            *[(value, right + 20, start_y - 40 - index * 16, "start") for index, value in enumerate(start_labels)],
            *[(value, end_x + 20, bottom + 54 + index * 16, "start") for index, value in enumerate(end_labels)],
        ],
    )
