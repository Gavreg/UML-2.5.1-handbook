"""
Name: classification_figures_examples.py
Purpose: Interactive SVG builders for the 13 example figures of UML 2.5.1 Clause 9:
         9.2, 9.3, 9.5-9.8, 9.11-9.12, 9.28-9.32.
Interface: import classification_figures_examples; BUILDERS maps each figure id ("9.2")
           to a zero-argument callable returning an Svg object;
           python scripts/classification_figures_examples.py [--output-dir PATH] [--check]
           renders or verifies only the SVGs of this module (the shared generator is not run).
Goal: Preserve the OMG example notation and original figure texts while reusing the
      handbook helpers (links to classifier pages, tooltips, consistent geometry).
Sources: site/docs/omg-uml-2.5.1-formal-17-12-05.pdf (PDF pages 103, 106-107, 115-116, 129),
         .tmp-pages/classification-103.png, -106.png, -107.png, -115.png, -116.png, -129.png,
         site/docs/omg-uml-2.5.1-formal-17-12-05.txt.
Requires: Python 3 standard library and scripts/generate_common_structure_svg.py.
Usage:
  Run from the repository root to render or verify only this module's example figures.
  python scripts/classification_figures_examples.py
  python scripts/classification_figures_examples.py --check
  python scripts/classification_figures_examples.py --output-dir PATH
  Output defaults to site/assets/diagrams; --check never rewrites files.
"""

from argparse import ArgumentParser
from html import escape
from pathlib import Path

from generate_common_structure_svg import (
    CLASSES,
    Svg,
    class_node,
    dependency,
    example_association,
    generalization,
    text,
)

ROOT = Path(__file__).resolve().parent.parent

TEMPLATE_BINDING = "../../index.html#/classifier/templatebinding"
SUBSTITUTION = "../../index.html#/classifier/substitution"


def underlined_text(value, x, y, anchor="middle", css="class-name"):
    """Текст с подчёркиванием для имён InstanceSpecification в примерах."""
    class_attr = f' class="{css}"' if css else ""
    anchor_attr = f' text-anchor="{anchor}"' if anchor != "start" else ""
    return f'<text{class_attr} x="{x}" y="{y}"{anchor_attr} text-decoration="underline">{escape(value)}</text>'


def instance_node(svg, name, x, y, width, height, slots=None, values=None, tooltip=""):
    """Прямоугольник примера-InstanceSpecification с подчёркнутым именем.

    values — строки значения в том же отсеке, что и имя (Figure 9.28);
    slots — строки слотов во втором отсеке (Figure 9.29, 9.31).
    """
    slots = slots or []
    values = values or []
    svg.add(f'<g class="class-node" data-classifier="{escape(name)}"><title>{escape(tooltip or f"Экземпляр {name}.")}</title>')
    svg.add(f'<rect class="class-box" x="{x}" y="{y}" width="{width}" height="{height}"/>')
    if slots:
        svg.add(f'<line class="class-divider" x1="{x}" y1="{y + 50}" x2="{x + width}" y2="{y + 50}"/>')
        svg.add(underlined_text(name, x + width / 2, y + 33))
        line_y = y + 72
        for slot in slots:
            svg.add(text(slot, x + 10, line_y, css="attribute"))
            line_y += 21
    else:
        svg.add(underlined_text(name, x + width / 2, y + 44 if values else y + height / 2 + 6))
        line_y = y + 76
        for value in values:
            svg.add(text(value, x + width / 2, line_y))
            line_y += 24
    svg.add('</g>')


def italic_example_node(svg, name, x, y, width, height, tooltip=""):
    """Пример класса с курсивным именем (абстрактный класс Shape на Figure 9.2)."""
    svg.add(f'<g class="class-node" data-classifier="{escape(name)}"><title>{escape(tooltip or f"Пример класса {name}.")}</title>')
    svg.add(f'<rect class="class-box" x="{x}" y="{y}" width="{width}" height="{height}"/>')
    svg.add(f'<line class="class-divider" x1="{x}" y1="{y + 32}" x2="{x + width}" y2="{y + 32}"/>')
    svg.add(text(name, x + width / 2, y + 23, "middle", "class-name abstract"))
    svg.add('</g>')


def template_parameter_box(svg, x, y, width, lines):
    """Пунктирный прямоугольник формальных параметров шаблона в углу класса."""
    height = 20 + len(lines) * 24
    svg.add(f'<rect class="note-box template-signature" x="{x}" y="{y}" width="{width}" height="{height}"/>')
    line_y = y + 26
    for line in lines:
        svg.add(text(line, x + 12, line_y, css="attribute"))
        line_y += 24


def figure_9_2():
    svg = Svg("9.2", "Обозначение обобщения с разными стилями целей",
              "Два стиля обобщений: отдельная цель для каждой стрелки и общая цель для нескольких "
              "обобщений (абстрактный класс Shape и классы Polygon, Ellipse, Spline).", 800, 560)
    italic_example_node(svg, "Shape", 340, 30, 120, 50, "Абстрактный пример класса Shape.")
    class_node(svg, "Polygon", 60, 210, 140, 60, example=True)
    class_node(svg, "Ellipse", 330, 210, 140, 60, example=True)
    class_node(svg, "Spline", 590, 210, 150, 60, example=True)
    generalization(svg, "M 130 210 L 365 80")
    generalization(svg, "M 400 210 L 400 80")
    generalization(svg, "M 665 210 L 435 80")
    svg.add(text("Separate target style", 490, 60, css="example-label"))
    italic_example_node(svg, "Shape", 340, 320, 120, 50, "Абстрактный пример класса Shape.")
    generalization(svg, "M 400 370 V 400")
    generalization(svg, "M 130 400 H 665 M 130 400 V 470 M 400 400 V 470 M 665 400 V 470", marker=False)
    class_node(svg, "Polygon", 60, 470, 140, 60, example=True)
    class_node(svg, "Ellipse", 330, 470, 140, 60, example=True)
    class_node(svg, "Spline", 590, 470, 150, 60, example=True)
    svg.add(text("Shared target style", 490, 350, css="example-label"))
    return svg


def figure_9_3():
    svg = Svg("9.3", "Пример обозначения Substitution",
              "В конкретной среде ResizableWindow может подставляться вместо обобщённого класса Window.",
              840, 210)
    class_node(svg, "Window", 60, 40, 190, 80, example=True, tooltip="Обобщённый пример класса Window.")
    class_node(svg, "ResizableWindow", 540, 40, 240, 80, example=True,
              tooltip="ResizableWindow подставляется вместо Window в конкретной среде.")
    dependency(svg, "M 540 80 H 250", "«substitute»", 395, 105,
               "Зависимость Substitution: ResizableWindow подставляется вместо Window.", SUBSTITUTION)
    return svg


def figure_9_5():
    svg = Svg("9.5", "Класс-шаблон и связанный класс",
              "Класс-шаблон FArray с формальными параметрами T и k : LiteralInteger = 10 и связанный "
              "класс AddressList, подставляющий Address для T и 3 для k.", 800, 600)
    class_node(svg, "FArray", 90, 70, 540, 220, example=True,
               tooltip="Пример класса-шаблона FArray с параметрами T и k.")
    svg.add('<g class="class-node" data-classifier="contents: T[0..k]"><title>Атрибут contents шаблона FArray.</title>')
    svg.add('<rect class="class-box" x="130" y="150" width="185" height="62"/>')
    svg.add(text("contents: T[0..k]", 145, 188, css="attribute"))
    svg.add('</g>')
    template_parameter_box(svg, 480, 26, 290, ["T, k : LiteralInteger = 10"])
    class_node(svg, "AddressList", 250, 460, 220, 80, example=True,
               tooltip="Связанный класс AddressList, подставляющий Address для T и 3 для k.")
    dependency(svg, "M 360 460 V 290", "«bind» T -> Address, k -> 3", 545, 380,
               CLASSES["TemplateBinding"]["definition"] + " T подставляется Address, k — 3.", TEMPLATE_BINDING)
    return svg


def figure_9_6():
    svg = Svg("9.6", "Анонимный связанный класс",
              "Анонимный связанный класс FArray<T -> Point>; подстановка для k отсутствует, "
              "поэтому используется значение по умолчанию 10.", 400, 230)
    class_node(svg, "FArray<T -> Point>", 60, 55, 280, 80, example=True,
               tooltip="Анонимный связанный класс FArray<T -> Point>; для k используется значение по умолчанию 10.")
    return svg


def figure_9_7():
    svg = Svg("9.7", "Класс-шаблон с ограниченным параметром-классом",
              "Класс-шаблон Car с параметром CarEngine, ограниченным классом Engine, "
              "и параметром n : LiteralInteger; элементы e : CarEngine и dw : Wheel [n+1].", 800, 580)
    class_node(svg, "Car", 60, 90, 560, 400, example=True,
               tooltip="Пример класса-шаблона Car с параметрами CarEngine и n.")
    template_parameter_box(svg, 420, 36, 300, ["CarEngine:>Engine,", "n:LiteralInteger"])
    class_node(svg, "e : CarEngine", 130, 380, 210, 70, example=True,
               tooltip="Параметр e типа CarEngine в примере класса-шаблона Car.")
    class_node(svg, "dw : Wheel [n+1]", 400, 380, 230, 70, example=True,
               tooltip="Параметр dw типа Wheel [n+1] в примере класса-шаблона Car.")
    example_association(svg, "M 340 415 H 400", markers="",
                        title="Связь между элементами e : CarEngine и dw : Wheel [n+1] примера.")
    return svg


def figure_9_8():
    svg = Svg("9.8", "Связанный класс",
              "Связанный класс DieselCar : Car<CarEngine -> DieselEngine, n -> 2> — класс "
              "трёхколёсных дизельных автомобилей.", 640, 230)
    class_node(svg, "DieselCar : Car<CarEngine -> DieselEngine, n -> 2>", 40, 55, 560, 80, example=True,
               tooltip="Связанный класс DieselCar, подставляющий DieselEngine для CarEngine и 2 для n.")
    return svg


def figure_9_11():
    svg = Svg("9.11", "Примеры атрибутов",
              "Атрибуты ClassA и ClassB: тип, видимость, кратность, производность, значение по умолчанию, "
              "переопределение {redefines} и унаследованный атрибут со значком ^.", 600, 640)
    class_node(svg, "ClassA", 120, 30, 360, 170, example=True,
               attributes=["name: String", "shape: Rectangle", "+size: Integer[0..1]",
                           "/area: Integer {readOnly}", "height: Integer = 5", "width: Integer"],
               tooltip="Пример класса ClassA с атрибутами разных видов.")
    class_node(svg, "ClassB", 150, 420, 330, 150, example=True,
               attributes=["id {redefines name}", "shape: Square", "^+size: Integer[0..1]",
                           "Integer = 7", "/width"],
               tooltip="Пример класса ClassB: переопределения и унаследованный атрибут ^+size.")
    generalization(svg, "M 315 420 V 200", child="ClassB", parent="ClassA")
    return svg


def figure_9_12():
    svg = Svg("9.12", "Атрибут в нотации ассоциации",
              "Атрибут size класса Window типа Area с кратностью 1, показанный как ассоциация.", 800, 210)
    class_node(svg, "Window", 60, 50, 170, 80, example=True,
               tooltip="Пример класса Window с атрибутом size : Area [1].")
    class_node(svg, "Area", 560, 50, 170, 80, example=True, tooltip="Тип Area атрибута size класса Window.")
    example_association(svg, "M 230 90 H 560", [("size", 470, 61, "middle"), ("1", 470, 78, "middle")],
                        title="Атрибут size : Area [1] класса Window в нотации ассоциации.")
    return svg


def figure_9_28():
    svg = Svg("9.28", "Спецификация экземпляра String",
              "Экземпляр streetName класса String со спецификацией-литералом \"5, Crown Street\".", 420, 220)
    instance_node(svg, "streetName : String", 60, 40, 270, 110, values=['"5, Crown Street"'],
                  tooltip="Экземпляр streetName класса String со значением \"5, Crown Street\".")
    return svg


def figure_9_29():
    svg = Svg("9.29", "Слоты со значениями",
              "Экземпляр myAddress класса Address со слотами streetName = \"5, Crown Street\" "
              "и streetNumber: Integer = 381.", 500, 220)
    instance_node(svg, "myAddress : Address", 60, 40, 350, 115,
                  slots=['streetName = "5, Crown Street"', "streetNumber: Integer = 381"],
                  tooltip="Экземпляр myAddress класса Address со слотами streetName и streetNumber.")
    return svg


def figure_9_30():
    svg = Svg("9.30", "Экземпляры, соединённые связью",
              "Экземпляры Don : Person и Josh : Person, соединённые связью с ролями father и son.", 780, 220)
    instance_node(svg, "Don : Person", 60, 60, 150, 75, tooltip="Экземпляр Don класса Person.")
    instance_node(svg, "Josh : Person", 570, 60, 160, 75, tooltip="Экземпляр Josh класса Person.")
    example_association(svg, "M 210 97 H 570", [("father", 225, 125, "start"), ("son", 555, 125, "end")],
                        markers="", title="Связь между экземплярами Don и Josh с ролями father и son.")
    return svg


def figure_9_31():
    svg = Svg("9.31", "InstanceValue в текстовой нотации",
              "Экземпляр :Window со слотом size = medium; значение medium : Area записано текстом.", 740, 220)
    instance_node(svg, ":Window", 60, 40, 180, 120, slots=["size = medium"],
                  tooltip="Экземпляр Window со слотом size, значение которого medium записано текстом.")
    instance_node(svg, "medium : Area", 500, 45, 190, 75, tooltip="Экземпляр medium класса Area.")
    return svg


def figure_9_32():
    svg = Svg("9.32", "InstanceValue в графической нотации",
              "Экземпляр :Window со слотом size; то же значение medium : Area представлено графически связью.",
              740, 210)
    instance_node(svg, ":Window", 60, 50, 170, 75, tooltip="Экземпляр Window со слотом size.")
    instance_node(svg, "medium : Area", 500, 50, 190, 75, tooltip="Экземпляр medium класса Area как значение слота size.")
    example_association(svg, "M 230 87 H 500", [("size", 470, 114, "end")],
                        title="Значение слота size, представленное графической связью с экземпляром medium : Area.")
    return svg


BUILDERS = {
    "9.2": figure_9_2,
    "9.3": figure_9_3,
    "9.5": figure_9_5,
    "9.6": figure_9_6,
    "9.7": figure_9_7,
    "9.8": figure_9_8,
    "9.11": figure_9_11,
    "9.12": figure_9_12,
    "9.28": figure_9_28,
    "9.29": figure_9_29,
    "9.30": figure_9_30,
    "9.31": figure_9_31,
    "9.32": figure_9_32,
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "site" / "assets" / "diagrams")
    parser.add_argument("--check", action="store_true", help="Check generated SVG files without rewriting them")
    args = parser.parse_args()
    missing = []
    changed = []
    for figure, builder in BUILDERS.items():
        target = args.output_dir / f"figure-{figure.replace('.', '-')}.svg"
        content = builder().render()
        if not target.is_file():
            missing.append(str(target))
        elif target.read_text(encoding="utf-8") != content:
            changed.append(str(target))
        if not args.check:
            target.write_text(content, encoding="utf-8", newline="\n")
            print(f"Figure {figure}: {target}")
    if args.check and (missing or changed):
        for path in missing:
            print(f"Missing: {path}")
        for path in changed:
            print(f"Outdated: {path}")
        raise SystemExit(1)
    if args.check:
        print(f"Generated SVG checks: OK; {len(BUILDERS)} figures synchronized")


if __name__ == "__main__":
    main()
