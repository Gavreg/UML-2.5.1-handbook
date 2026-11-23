"""
Name: simple_classifiers_figures_notation.py
Purpose: Interactive SVG builders for the notation and example figures of UML 2.5.1 Clause 10 — Figures 10.2-10.4 and 10.6 (datatype, enumeration and reception notation) and Figures 10.8-10.12 (provided, required, inherited and collaborating Interfaces).
Interface: import simple_classifiers_figures_notation as scn; svg = scn.BUILDERS["10.2"](); python scripts/simple_classifiers_figures_notation.py [--output-dir PATH]
Goal: Recreate the official notation examples as clickable vector figures with tooltips, preserving OMG notation verified against the official PDF.
Sources: The official UML 2.5.1 PDF, figures 10.2-10.4, 10.6 and 10.8-10.12 (printed pages 168-173).
Requires: Python 3 standard library and the shared SVG helpers from scripts/generate_common_structure_svg.py.
Usage:
  Run from the repository root to render only Clause 10 notation figures during development.
  python scripts/simple_classifiers_figures_notation.py
  python scripts/simple_classifiers_figures_notation.py --output-dir PATH
  Output defaults to .tmp-pages; use generate_simple_classifiers_svg.py for the full Clause 10 set.
"""

from argparse import ArgumentParser
import math
from pathlib import Path

from generate_common_structure_svg import (
    CLASSES,
    Svg,
    class_node,
    dependency,
    dot,
    example_association,
    generalization,
    text,
)


ROOT = Path(__file__).resolve().parent.parent

INTERFACE_TOOLTIP = f'Interface. {CLASSES["Interface"]["definition"]}'
INTERFACEREALIZATION_TOOLTIP = f'InterfaceRealization. {CLASSES["InterfaceRealization"]["definition"]}'
USAGE_TOOLTIP = f'Usage. {CLASSES["Usage"]["definition"]}'


def interface_link(svg, href, title, markup):
    """Wrap an interface symbol (lollipop or socket) in a link with a definition tooltip."""
    svg.add(f'<a class="interface-symbol-link" href="{href}" target="_top" aria-label="Открыть описание Interface"><title>{title}</title>{markup}</a>')


def lollipop(svg, cx, cy, radius=12, label="", label_y=None, side=1):
    """Ball (lollipop) notation for a provided Interface; side=1 attaches the ball on the left, side=-1 on the right."""
    stem_start = cx + radius if side > 0 else cx - radius - 56
    stem_end = cx + radius + 56 if side > 0 else cx - radius
    circle = f'<circle cx="{cx}" cy="{cy}" r="{radius}" fill="#ffffff" stroke="#111111" stroke-width="1.4"/>'
    group = (
        f'<g class="example-association-group"><title>{INTERFACE_TOOLTIP}</title>'
        f'<path class="example-association" d="M {stem_start} {cy} H {stem_end}"/>'
        f'<path class="association-hitbox" d="M {stem_start} {cy} H {stem_end}" aria-hidden="true"/>'
        f'{circle}'
        + (text(label, cx, label_y, "middle", "example-label") if label else "")
        + "</g>"
    )
    interface_link(svg, "../../index.html#/classifier/interface", INTERFACE_TOOLTIP, group)
    return stem_end


def socket(svg, x, y, radius=20):
    """Half-circle (socket) notation for a required Interface attached on its left side."""
    points = " ".join(
        f"{int(round(x + radius * math.cos(angle)))},{int(round(y + radius * math.sin(angle)))}"
        for angle in [math.radians(value) for value in range(-90, 91, 15)]
    )
    group = (
        f'<g class="example-association-group"><title>{INTERFACE_TOOLTIP}</title>'
        f'<path class="example-association" d="M {x - 60} {y} H {x}"/>'
        f'<path class="association-hitbox" d="M {x - 60} {y} H {x}" aria-hidden="true"/>'
        f'<path class="example-association" d="M {points.split()[0].replace(",", " ")}'
        + " L " + " L ".join(points.split()[1:]) + '"/></g>'
    )
    interface_link(svg, "../../index.html#/classifier/interface", INTERFACE_TOOLTIP, group)


def figure_10_2():
    svg = Svg(
        "10.2", "Нотация PrimitiveType",
        "Примитивный тип Integer обозначается прямоугольником с ключевым словом «primitive».",
        300, 170,
    )
    class_node(svg, "Integer", 60, 40, 170, 65, stereotype="«primitive»", example=True,
               tooltip="Примитивный тип Integer из примера нотации PrimitiveType.")
    return svg


def figure_10_3():
    svg = Svg(
        "10.3", "Нотация DataType",
        "Структурированный тип данных FullName с атрибутами и тип Person, использующий FullName как тип атрибута fullName.",
        560, 200,
    )
    class_node(svg, "FullName", 60, 40, 200, 130, ["firstName : String", "secondName : String", "initial : String"],
               stereotype="«dataType»", example=True,
               tooltip="Пример структурированного типа данных FullName из нотации DataType.")
    class_node(svg, "Person", 340, 40, 180, 85, ["fullName : FullName"],
               stereotype="«dataType»", example=True,
               tooltip="Пример типа данных Person с атрибутом fullName типа FullName.")
    return svg


def figure_10_4():
    svg = Svg(
        "10.4", "Нотация Enumeration",
        "Перечисление VisibilityKind со литералами public, private, protected и package.",
        300, 230,
    )
    class_node(svg, "VisibilityKind", 60, 30, 190, 150, ["public", "private", "protected", "package"],
               stereotype="«enumeration»", example=True,
               tooltip="Пример перечисления VisibilityKind с литералами из нотации Enumeration.")
    return svg


def figure_10_6():
    svg = Svg(
        "10.6", "Нотация Reception",
        "Интерфейс IAlarm объявляет два приёма «signal» Notify() и Activate(), ссылающиеся на сигналы Notify и Activate.",
        700, 270,
    )
    class_node(svg, "IAlarm", 60, 55, 240, 130, operations=["«signal» Notify()", "«signal» Activate()"],
               stereotype="«interface»", example=True,
               tooltip="Пример интерфейса IAlarm с приёмами сигналов Notify и Activate.")
    class_node(svg, "Notify", 450, 55, 160, 70, stereotype="«signal»", example=True,
               tooltip="Пример сигнала Notify из примера нотации Reception.")
    class_node(svg, "Activate", 450, 160, 160, 70, stereotype="«signal»", example=True,
               tooltip="Пример сигнала Activate из примера нотации Reception.")
    return svg


def figure_10_8():
    svg = Svg(
        "10.8", "ISensor — предоставляемый интерфейс ProximitySensor",
        "Предоставляемый интерфейс ISensor класса ProximitySensor обозначен символом «леденец» (круг с меткой имени).",
        520, 190,
    )
    line_end = lollipop(svg, 150, 88, label="ISensor", label_y=125)
    class_node(svg, "ProximitySensor", line_end, 55, 200, 65, example=True,
               tooltip="Пример класса ProximitySensor, предоставляющего интерфейс ISensor.")
    return svg


def figure_10_9():
    svg = Svg(
        "10.9", "ISensor, предоставляемый интерфейс ProximitySensor, показан как унаследованный CapacitiveSensor",
        "Унаследованный предоставляемый интерфейс ISensor обозначен «леденцом» с именем, которому предшествует символ caret.",
        700, 310,
    )
    class_node(svg, "ProximitySensor", 280, 30, 200, 65, example=True,
               tooltip="Пример класса ProximitySensor, предоставляющего интерфейс ISensor.")
    class_node(svg, "CapacitiveSensor", 280, 190, 220, 75, example=True,
               tooltip="Пример класса CapacitiveSensor, наследующего ProximitySensor и унаследованный интерфейс ISensor.")
    generalization(svg, "M 390 190 V 95", child="CapacitiveSensor", parent="ProximitySensor")
    lollipop(svg, 590, 227, side=-1)
    svg.add(text("^ ISensor", 540, 206, "middle", "class-name",
                 title="Имя унаследованного предоставляемого интерфейса ISensor."))
    return svg


def figure_10_10():
    svg = Svg(
        "10.10", "ISensor — требуемый интерфейс TheftAlarm",
        "Требуемый интерфейс ISensor класса TheftAlarm обозначен символом «розетка» (полукруг).",
        380, 210,
    )
    class_node(svg, "TheftAlarm", 80, 55, 150, 105, example=True,
               tooltip="Пример класса TheftAlarm, требующего интерфейс ISensor.")
    socket(svg, 310, 107)
    return svg


def figure_10_11():
    svg = Svg(
        "10.11", "Альтернативная нотация для требуемого и предоставляемого интерфейсов",
        "Интерфейс ISensor в прямоугольной нотации: TheftAlarm использует его через зависимость «use», ProximitySensor реализует его.",
        780, 210,
    )
    class_node(svg, "TheftAlarm", 70, 80, 140, 60, example=True,
               tooltip="Пример класса TheftAlarm, использующего интерфейс ISensor.")
    class_node(svg, "ISensor", 330, 55, 170, 115, operations=["activate ( )", "read ( )"],
               stereotype="«interface»", example=True,
               tooltip="Пример интерфейса ISensor в прямоугольной нотации с операциями activate и read.")
    class_node(svg, "ProximitySensor", 570, 80, 190, 60, example=True,
               tooltip="Пример класса ProximitySensor, реализующего интерфейс ISensor.")
    dependency(svg, "M 210 110 H 330", "«use»", 270, 96, USAGE_TOOLTIP, "../../index.html#/classifier/usage")
    dependency(svg, "M 570 110 H 500", "", 535, 96, INTERFACEREALIZATION_TOOLTIP,
               "../../index.html#/classifier/interfacerealization")
    return svg


def figure_10_12():
    svg = Svg(
        "10.12", "Набор взаимодействующих интерфейсов",
        "Интерфейсы IBuzzer, IAlarm и ISensor связаны ассоциациями: IAlarm знает ISensor (theSensor), ISensor знает IAlarm (theAlarm), IAlarm знает IBuzzer (theBuzzer).",
        940, 230,
    )
    class_node(svg, "IBuzzer", 60, 60, 140, 130, attributes=["volume : Integer"], operations=["start ( )", "reset ( )"],
               stereotype="«interface»", example=True,
               tooltip="Пример интерфейса IBuzzer с атрибутом volume и операциями start и reset.")
    class_node(svg, "IAlarm", 430, 60, 130, 95, operations=["notify ( )"],
               stereotype="«interface»", example=True,
               tooltip="Пример интерфейса IAlarm с операцией notify.")
    class_node(svg, "ISensor", 760, 60, 140, 115, operations=["activate ( )", "read ( )"],
               stereotype="«interface»", example=True,
               tooltip="Пример интерфейса ISensor с операциями activate и read.")
    example_association(
        svg, "M 200 110 H 430",
        [("1", 220, 94, "start"), ("*", 410, 94, "end"), ("+ theBuzzer", 220, 132, "start")],
        ' marker-start="url(#navigation-start)"',
        title="Ассоциация между взаимодействующими интерфейсами IAlarm и IBuzzer.",
        decorations=dot(200, 110),
    )
    example_association(
        svg, "M 560 110 H 760",
        [("+ theAlarm", 580, 94, "start"), ("1", 610, 132, "start"),
         ("+ theSensor", 740, 94, "end"), ("1", 740, 132, "end")],
        "",
        title="Двунаправленная ассоциация между взаимодействующими интерфейсами IAlarm и ISensor.",
        decorations=dot(560, 110) + dot(760, 110),
    )
    return svg


BUILDERS = {
    "10.2": figure_10_2,
    "10.3": figure_10_3,
    "10.4": figure_10_4,
    "10.6": figure_10_6,
    "10.8": figure_10_8,
    "10.9": figure_10_9,
    "10.10": figure_10_10,
    "10.11": figure_10_11,
    "10.12": figure_10_12,
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=ROOT / ".tmp-pages")
    args = parser.parse_args()
    for figure, builder in BUILDERS.items():
        target = args.output_dir / f"figure-{figure.replace('.', '-')}.svg"
        target.write_text(builder().render(), encoding="utf-8", newline="\n")
        print(f"Figure {figure}: {target}")


if __name__ == "__main__":
    main()
