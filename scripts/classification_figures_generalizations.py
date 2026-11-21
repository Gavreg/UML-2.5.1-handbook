"""
Name: classification_figures_generalizations.py
Purpose: Interactive SVG builders for the twelve UML 2.5.1 Clause 9.7 figures 9.15-9.26 on
         GeneralizationSet notation: sets designated by name, by shared target, by dashed
         spanning lines, with constraints and with powertypes.
Interface: BUILDERS maps "9.15" ... "9.26" to builder callables returning Svg objects;
           python scripts/classification_figures_generalizations.py [--output-dir PATH]
Goal: Preserve the OMG notation and layout of the original figures while adding Russian
      titles, tooltips and consistent geometry on top of generate_common_structure_svg.py.
Sources: site/docs/omg-uml-2.5.1-formal-17-12-05.pdf (pp. 118-124, Clause 9.7.4-9.7.5) and
         the reference renders .tmp-pages/classification-120.png ... classification-126.png.
Requires: Python 3 standard library and scripts/generate_common_structure_svg.py.
"""

from argparse import ArgumentParser
from pathlib import Path

from generate_common_structure_svg import Svg, class_node, generalization, example_association, text


EMPTY_TOOLTIP = "Классификатор примера без имени; участвует в обозначении наборов обобщений."
SET_NAME_TOOLTIP = "Имя набора обобщений: все обобщения с этим именем принадлежат одному GeneralizationSet."
DASHED_TOOLTIP = "Пунктирная линия объединяет обобщения со своими наконечниками в один набор GeneralizationSet."
POWER_LINE_TOOLTIP = "Связь примера: экземпляры типа-степени соответствуют специальным классификаторам набора обобщений."
COMPLETE_DISJOINT_TOOLTIP = "Набор обобщений покрывающий (complete) и несовместный (disjoint): каждый экземпляр относится ровно к одному специальному классификатору."
DISJOINT_INCOMPLETE_TOOLTIP = "Набор обобщений несовместный (disjoint) и непокрывающий (incomplete): экземпляр относится не более чем к одному специальному классификатору."
INCOMPLETE_TOOLTIP = "Набор обобщений непокрывающий (incomplete): экземпляр может не иметь специализации из этого набора."
DISJOINT_COMPLETE_TOOLTIP = "Набор обобщений несовместный (disjoint) и покрывающий (complete): каждый экземпляр относится ровно к одному специальному классификатору."
DISJOINT_INCOMPLETE_26_TOOLTIP = "Набор обобщений несовместный (disjoint) и непокрывающий (incomplete): экземпляр относится не более чем к одному специальному классификатору."


def _empty(svg, x, y, width=130, tooltip=EMPTY_TOOLTIP):
    class_node(svg, " ", x, y, width, 50, example=True, tooltip=tooltip)


def _abstract(svg):
    for index in range(len(svg.parts) - 1, -1, -1):
        if 'class="class-name"' in svg.parts[index]:
            svg.parts[index] = svg.parts[index].replace('class="class-name"', 'class="class-name abstract"', 1)
            return


def _set_label(svg, value, x, y, anchor, tooltip=SET_NAME_TOOLTIP):
    svg.add(text(value, x, y, anchor, "association-label", tooltip))


def _spanning_line(svg, path, tooltip=DASHED_TOOLTIP):
    svg.add(f'<g><title>{tooltip}</title><path class="dependency-line" d="{path}"/></g>')


def figure_9_15():
    svg = Svg("9.15", "Наборы обобщений, заданные именем",
              "Три обобщения со своими наконечниками; имя у линии обозначает принадлежность к набору "
              "обобщений GeneralizationSet, одинаковое имя — один набор.", 700, 380)
    _empty(svg, 285, 40, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 70, 270)
    _empty(svg, 285, 270)
    _empty(svg, 500, 270)
    generalization(svg, "M 135 270 L 315 90", child="specific-1", parent="generic")
    generalization(svg, "M 350 270 V 90", child="specific-2", parent="generic")
    generalization(svg, "M 565 270 L 385 90", child="specific-3", parent="generic")
    _set_label(svg, "GeneralizationSet1", 227, 170, "end")
    _set_label(svg, "GeneralizationSet1", 360, 345, "start")
    _set_label(svg, "GeneralizationSet2", 482, 180, "start")
    return svg


def figure_9_16():
    svg = Svg("9.16", "Наборы обобщений с общей целью",
              "Стиль «shared target»: линии, сходящиеся к одному наконечнику и подписанные одним именем, "
              "образуют один набор GeneralizationSet.", 1100, 390)
    _empty(svg, 170, 40, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 30, 270)
    _empty(svg, 180, 270)
    _empty(svg, 330, 270)
    generalization(svg, "M 95 270 L 215 180", marker=False, child="specific-1", parent="generic")
    generalization(svg, "M 245 270 L 215 180", marker=False, child="specific-2", parent="generic")
    generalization(svg, "M 215 180 V 90", child="specific-1+2", parent="generic")
    generalization(svg, "M 395 270 L 255 90", child="specific-3", parent="generic")
    _set_label(svg, "GeneralizationSet1", 203, 145, "end")
    _set_label(svg, "GeneralizationSet2", 310, 145, "start")
    _empty(svg, 650, 40, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 510, 250)
    _empty(svg, 510, 320)
    _empty(svg, 730, 250)
    generalization(svg, "M 820 255 H 865 V 90", child="specific-1+2", parent="generic")
    generalization(svg, "M 820 345 H 865", marker=False, child="specific-2", parent="generic")
    generalization(svg, "M 795 250 L 745 90", child="specific-3", parent="generic")
    _set_label(svg, "GeneralizationSet1", 700, 120, "end")
    _set_label(svg, "GeneralizationSet2", 900, 180, "start")
    return svg


def figure_9_17():
    svg = Svg("9.17", "Набор обобщений, заданный пунктирной линией",
              "Пунктирная линия через стрелки обобщений с отдельными наконечниками объединяет их в один "
              "набор GeneralizationSet; набор подписан одним именем.", 700, 340)
    _empty(svg, 285, 30, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 70, 240)
    _empty(svg, 285, 240)
    _empty(svg, 500, 240)
    generalization(svg, "M 135 240 L 320 80", child="specific-1", parent="generic")
    generalization(svg, "M 350 240 V 80", child="specific-2", parent="generic")
    generalization(svg, "M 565 240 L 380 80", child="specific-3", parent="generic")
    _spanning_line(svg, "M 245 135 H 400")
    _set_label(svg, "GeneralizationSet1", 243, 118, "end")
    _set_label(svg, "GeneralizationSet2", 432, 118, "start")
    return svg


def figure_9_18():
    svg = Svg("9.18", "Ограничения набора обобщений в стиле общей цели",
              "Ограничения {GeneralizationSetConstraint} размещены рядом с линиями обобщений, оформленными "
              "со сходом к общему наконечнику.", 800, 390)
    _empty(svg, 300, 30, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 120, 230)
    _empty(svg, 120, 300)
    _empty(svg, 400, 230)
    generalization(svg, "M 185 255 L 280 165", marker=False, child="specific-1", parent="generic")
    generalization(svg, "M 185 325 L 280 165", marker=False, child="specific-2", parent="generic")
    generalization(svg, "M 280 165 L 330 80", child="specific-1+2", parent="generic")
    generalization(svg, "M 465 255 L 395 80", child="specific-3", parent="generic")
    _set_label(svg, "{GeneralizationSetConstraint1}", 268, 140, "end",
               "Ограничение набора обобщений для классификаторов со общим наконечником.")
    _set_label(svg, "{GeneralizationSetConstraint2}", 432, 140, "start",
               "Ограничение набора обобщений для классификатора со своим наконечником.")
    return svg


def figure_9_19():
    svg = Svg("9.19", "Ограничения набора обобщений в пунктирном стиле",
              "Ограничения {GeneralizationSetConstraint} размещены рядом с пунктирной линией, пересекающей "
              "стрелки обобщений с отдельными наконечниками.", 700, 340)
    _empty(svg, 285, 30, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    _empty(svg, 70, 240)
    _empty(svg, 285, 240)
    _empty(svg, 500, 240)
    generalization(svg, "M 135 240 L 320 80", child="specific-1", parent="generic")
    generalization(svg, "M 350 240 V 80", child="specific-2", parent="generic")
    generalization(svg, "M 565 240 L 380 80", child="specific-3", parent="generic")
    _spanning_line(svg, "M 245 135 H 400")
    _set_label(svg, "{GeneralizationSetConstraint3}", 243, 118, "end",
               "Ограничение набора обобщений, объединённого пунктирной линией.")
    _set_label(svg, "{GeneralizationSetConstraint4}", 432, 118, "start",
               "Ограничение набора обобщений для классификатора со своим наконечником.")
    return svg


def _power_type_header(svg, y):
    class_node(svg, "PowerType1", 60, y, 140, 50, example=True,
               tooltip="Классификатор типа-степени (powertype) примера: его экземпляры соответствуют специальным классификаторам набора обобщений.")
    _empty(svg, 320, y, tooltip="Классификатор примера без имени — общий родитель обобщений.")
    class_node(svg, "PowerType2", 540, y, 140, 50, example=True,
               tooltip="Классификатор типа-степени (powertype) примера: его экземпляры соответствуют специальным классификаторам набора обобщений.")
    example_association(svg, f"M 200 {y + 25} H 320", markers="", title=POWER_LINE_TOOLTIP)
    example_association(svg, f"M 450 {y + 25} H 540", markers="", title=POWER_LINE_TOOLTIP)


def figure_9_20():
    svg = Svg("9.20", "Обозначение типа-степени в стиле общей цели",
              "Имя типа-степени (powertype) с двоеточием подписано у набора обобщений, оформленного со сходом "
              "к общему наконечнику; PowerType1 и PowerType2 — классификаторы типа-степени.", 800, 390)
    _power_type_header(svg, 55)
    _empty(svg, 90, 300)
    _empty(svg, 320, 300)
    _empty(svg, 550, 300)
    generalization(svg, "M 155 300 L 350 195", marker=False, child="specific-1", parent="generic")
    generalization(svg, "M 385 300 L 350 195", marker=False, child="specific-2", parent="generic")
    generalization(svg, "M 350 195 V 105", child="specific-1+2", parent="generic")
    generalization(svg, "M 615 300 L 415 105", child="specific-3", parent="generic")
    _set_label(svg, ":PowerType1", 337, 165, "end",
               "Тип-степень (powertype) набора: каждой специализации соответствует экземпляр PowerType1.")
    _set_label(svg, ":PowerType2", 525, 200, "start",
               "Тип-степень (powertype) набора: каждой специализации соответствует экземпляр PowerType2.")
    return svg


def figure_9_21():
    svg = Svg("9.21", "Обозначение типа-степени в пунктирном стиле",
              "Имя типа-степени (powertype) с двоеточием подписано у набора обобщений, объединённого "
              "пунктирной линией через стрелки; PowerType1 и PowerType2 — классификаторы типа-степени.", 800, 370)
    _power_type_header(svg, 40)
    _empty(svg, 70, 280)
    _empty(svg, 320, 280)
    _empty(svg, 570, 280)
    generalization(svg, "M 135 280 L 330 90", child="specific-1", parent="generic")
    generalization(svg, "M 385 280 V 90", child="specific-2", parent="generic")
    generalization(svg, "M 635 280 L 425 90", child="specific-3", parent="generic")
    _spanning_line(svg, "M 195 155 H 415")
    _set_label(svg, ":PowerType1", 250, 138, "end",
               "Тип-степень (powertype) набора: каждой специализации соответствует экземпляр PowerType1.")
    _set_label(svg, ":PowerType2", 487, 138, "start",
               "Тип-степень (powertype) набора: каждой специализации соответствует экземпляр PowerType2.")
    return svg


def _person(svg, x, y):
    class_node(svg, "Person", x, y, 120, 50, example=True,
               tooltip="Пример: абстрактный класс Person (человек), специализируется классами Woman, Man и Employee.")
    _abstract(svg)


def figure_9_22():
    svg = Svg("9.22", "Варианты обозначения наборов обобщений",
              "Четыре варианта нотации: отдельные наконечники с именами наборов, общий наконечник, пунктирная "
              "линия через стрелки; абстрактный класс Person со специализациями Woman, Man и Employee.", 1160, 690)
    _person(svg, 300, 40)
    class_node(svg, "Woman", 130, 230, 120, 50, example=True, tooltip="Пример: специализация Person — женщина.")
    class_node(svg, "Man", 300, 230, 120, 50, example=True, tooltip="Пример: специализация Person — мужчина.")
    class_node(svg, "Employee", 470, 230, 130, 50, example=True, tooltip="Пример: специализация Person — работник.")
    generalization(svg, "M 190 230 L 335 90", child="Woman", parent="Person")
    generalization(svg, "M 360 230 V 90", child="Man", parent="Person")
    generalization(svg, "M 535 230 L 385 90", child="Employee", parent="Person")
    _set_label(svg, "gender", 265, 150, "end", "Имя набора обобщений «gender»: специализации Woman и Man.")
    _set_label(svg, "gender", 345, 185, "end", "Имя набора обобщений «gender»: специализации Woman и Man.")
    _set_label(svg, "employment", 449, 128, "start", "Имя набора обобщений «employment status»: специализация Employee.")
    _set_label(svg, "status", 449, 144, "start", "Имя набора обобщений «employment status»: специализация Employee.")

    _person(svg, 850, 40)
    class_node(svg, "Woman", 700, 230, 120, 50, example=True, tooltip="Пример: специализация Person — женщина.")
    class_node(svg, "Man", 700, 300, 120, 50, example=True, tooltip="Пример: специализация Person — мужчина.")
    class_node(svg, "Employee", 990, 230, 130, 50, example=True, tooltip="Пример: специализация Person — работник.")
    generalization(svg, "M 820 255 H 865 V 90", child="Woman+Man", parent="Person")
    generalization(svg, "M 820 345 H 865", marker=False, child="Man", parent="Person")
    generalization(svg, "M 1055 230 L 935 90", child="Employee", parent="Person")
    _set_label(svg, "gender", 852, 140, "end", "Имя набора обобщений «gender»: специализации Woman и Man.")
    _set_label(svg, "employment", 989, 126, "start", "Имя набора обобщений «employment status»: специализация Employee.")
    _set_label(svg, "status", 989, 142, "start", "Имя набора обобщений «employment status»: специализация Employee.")

    _person(svg, 300, 400)
    class_node(svg, "Woman", 130, 590, 120, 50, example=True, tooltip="Пример: специализация Person — женщина.")
    class_node(svg, "Man", 300, 590, 120, 50, example=True, tooltip="Пример: специализация Person — мужчина.")
    class_node(svg, "Employee", 470, 590, 130, 50, example=True, tooltip="Пример: специализация Person — работник.")
    generalization(svg, "M 190 590 L 335 450", child="Woman", parent="Person")
    generalization(svg, "M 360 590 V 450", child="Man", parent="Person")
    generalization(svg, "M 535 590 L 385 450", child="Employee", parent="Person")
    _spanning_line(svg, "M 285 490 H 380")
    _set_label(svg, "gender", 285, 470, "end", "Имя набора обобщений «gender»: специализации Woman и Man.")
    _set_label(svg, "employment", 428, 468, "start", "Имя набора обобщений «employment status»: специализация Employee.")
    _set_label(svg, "status", 428, 484, "start", "Имя набора обобщений «employment status»: специализация Employee.")

    _person(svg, 850, 400)
    class_node(svg, "Woman", 700, 590, 120, 50, example=True, tooltip="Пример: специализация Person — женщина.")
    class_node(svg, "Man", 880, 590, 120, 50, example=True, tooltip="Пример: специализация Person — мужчина.")
    class_node(svg, "Employee", 1060, 590, 130, 50, example=True, tooltip="Пример: специализация Person — работник.")
    generalization(svg, "M 760 590 L 905 450", child="Woman", parent="Person")
    generalization(svg, "M 940 590 V 450", child="Man", parent="Person")
    generalization(svg, "M 1125 590 L 955 450", child="Employee", parent="Person")
    _spanning_line(svg, "M 855 490 H 960")
    return svg


def figure_9_23():
    svg = Svg("9.23", "Наборы обобщений и ограничения",
              "Person специализируется на Woman и Man в покрывающем несовместном наборе {complete, disjoint} и на "
              "Employee в непокрывающем наборе {incomplete}.", 700, 390)
    _person(svg, 280, 40)
    class_node(svg, "Woman", 90, 240, 120, 50, example=True, tooltip="Пример: специализация Person — женщина.")
    class_node(svg, "Man", 90, 310, 120, 50, example=True, tooltip="Пример: специализация Person — мужчина.")
    class_node(svg, "Employee", 340, 240, 130, 50, example=True, tooltip="Пример: специализация Person — работник.")
    generalization(svg, "M 210 265 L 230 175", marker=False, child="Woman", parent="Person")
    generalization(svg, "M 210 335 L 230 175", marker=False, child="Man", parent="Person")
    generalization(svg, "M 230 175 L 300 90", child="Woman+Man", parent="Person")
    generalization(svg, "M 405 240 L 345 90", child="Employee", parent="Person")
    _set_label(svg, "{complete, disjoint}", 257, 130, "end", COMPLETE_DISJOINT_TOOLTIP)
    _set_label(svg, "{incomplete}", 370, 115, "start", INCOMPLETE_TOOLTIP)
    return svg


def figure_9_24():
    svg = Svg("9.24", "Пример типа-степени",
              "Tree и его виды Sugar Maple, Apricot, American Elm и Saguaro; Tree Species — тип-степень набора "
              "обобщений ({disjoint, incomplete} : TreeSpecies); связи с Geographic Location и Leaf Pattern.", 860, 470)
    class_node(svg, "Tree", 80, 40, 130, 50, example=True,
               tooltip="Пример: классификатор деревьев; его специализации образуют набор обобщений с типом-степенью Tree Species.")
    class_node(svg, "Tree Species", 500, 40, 160, 50, example=True,
               tooltip="Пример: тип-степень (powertype) набора обобщений Tree — вид дерева.")
    example_association(svg, "M 210 65 H 500",
                        [("tree", 285, 51, "end"), ("tree species", 440, 51, "end"),
                         ("*", 222, 87, "start"), ("1", 488, 87, "end")],
                        markers="", title="Ассоциация примера: каждое дерево относится ровно к одному виду (Tree Species).")
    generalization(svg, "M 240 185 H 210 V 125 H 120 V 90", child="Tree kinds", parent="Tree")
    generalization(svg, "M 240 255 H 210", marker=False, child="Apricot", parent="Tree")
    generalization(svg, "M 240 325 H 210", marker=False, child="American Elm", parent="Tree")
    generalization(svg, "M 240 395 H 210", marker=False, child="Saguaro", parent="Tree")
    _set_label(svg, ": TreeSpecies", 197, 147, "end",
               "Тип-степень (powertype) набора: каждому виду дерева соответствует экземпляр Tree Species.")
    _set_label(svg, "{disjoint, incomplete}", 218, 147, "start", DISJOINT_INCOMPLETE_TOOLTIP)
    class_node(svg, "Sugar Maple", 240, 160, 140, 50, example=True, tooltip="Пример: вид дерева — специализация Tree.")
    class_node(svg, "Apricot", 240, 230, 140, 50, example=True, tooltip="Пример: вид дерева — специализация Tree.")
    class_node(svg, "American Elm", 240, 300, 140, 50, example=True, tooltip="Пример: вид дерева — специализация Tree.")
    class_node(svg, "Saguaro", 240, 370, 140, 50, example=True, tooltip="Пример: вид дерева — специализация Tree.")
    class_node(svg, "Geographic Location", 420, 280, 190, 55, example=True,
               tooltip="Пример: географическое местоположение дерева или вида.")
    class_node(svg, "Leaf Pattern", 660, 280, 130, 55, example=True,
               tooltip="Пример: листовой узор (форма листьев), характерный для вида дерева.")
    example_association(svg, "M 520 90 V 180 H 460 V 280",
                        [("general locations", 508, 140, "end"), ("*", 508, 158, "end"),
                         ("actual location", 500, 250, "start"), ("1", 500, 266, "start")],
                        markers="", title="Ассоциация примера: вид дерева имеет общие местонахождения, дерево — фактическое.")
    example_association(svg, "M 620 90 V 190 H 690 V 280",
                        [("leaf pattern", 632, 150, "start"), ("1", 632, 168, "start")],
                        markers="", title="Ассоциация примера: каждому виду дерева соответствует один листовой узор.")
    return svg


def figure_9_25():
    svg = Svg("9.25", "Другие примеры типов-степеней",
              "Четыре примера типа-степени: Account/Account Type, Vehicle/Vehicle Type, Disease Occurrence/"
              "Disease Classification и Installed Telephone Service/Telephone Service Category.", 1400, 700)
    class_node(svg, "Account", 90, 60, 130, 50, example=True, tooltip="Пример: банковский счёт.")
    class_node(svg, "Account Type", 400, 60, 160, 50, example=True,
               tooltip="Пример: тип банковского счёта — тип-степень набора обобщений Account.")
    example_association(svg, "M 220 85 H 400",
                        [("account", 330, 71, "end"), ("1", 388, 71, "end"),
                         ("*", 232, 107, "start"), ("account type", 232, 123, "start")],
                        markers="", title="Ассоциация примера: счёт относится к типу банковского счёта.")
    generalization(svg, "M 60 237 H 40 V 160 H 120 V 110", child="Account kinds", parent="Account")
    generalization(svg, "M 60 317 H 40", marker=False, child="Savings Account", parent="Account")
    _set_label(svg, "{disjoint, incomplete}", 200, 180, "start", DISJOINT_INCOMPLETE_TOOLTIP)
    _set_label(svg, ":AccountType", 200, 196, "start",
               "Тип-степень (powertype) набора: каждому виду счёта соответствует экземпляр Account Type.")
    class_node(svg, "Checking Account", 60, 210, 160, 55, example=True, tooltip="Пример: вид банковского счёта — специализация Account.")
    class_node(svg, "Savings Account", 60, 290, 160, 55, example=True, tooltip="Пример: вид банковского счёта — специализация Account.")
    svg.add(text("(a) Пример «банковский счёт / тип счёта»", 60, 380, css="example-label"))

    class_node(svg, "Vehicle", 690, 60, 130, 50, example=True, tooltip="Пример: транспортное средство.")
    class_node(svg, "Vehicle Type", 1000, 60, 160, 50, example=True,
               tooltip="Пример: тип транспортного средства — тип-степень набора обобщений Vehicle.")
    example_association(svg, "M 820 85 H 1000",
                        [("vehicle", 930, 71, "end"), ("1", 988, 71, "end"),
                         ("*", 832, 107, "start"), ("vehicle type", 832, 123, "start")],
                        markers="", title="Ассоциация примера: транспортное средство относится к типу транспорта.")
    generalization(svg, "M 660 237 H 640 V 160 H 720 V 110", child="Vehicle kinds", parent="Vehicle")
    generalization(svg, "M 660 317 H 640", marker=False, child="Car", parent="Vehicle")
    _set_label(svg, "{disjoint, incomplete}", 800, 180, "start", DISJOINT_INCOMPLETE_TOOLTIP)
    _set_label(svg, ":VehicleType", 800, 196, "start",
               "Тип-степень (powertype) набора: каждому виду транспорта соответствует экземпляр Vehicle Type.")
    class_node(svg, "Truck", 660, 210, 150, 55, example=True, tooltip="Пример: вид транспортного средства — специализация Vehicle.")
    class_node(svg, "Car", 660, 290, 150, 55, example=True, tooltip="Пример: вид транспортного средства — специализация Vehicle.")
    svg.add(text("(b) Пример «транспортное средство / тип транспорта»", 660, 380, css="example-label"))

    class_node(svg, "Disease Occurrence", 60, 400, 200, 55, example=True, tooltip="Пример: случай заболевания.")
    class_node(svg, "Disease Classification", 400, 400, 210, 55, example=True,
               tooltip="Пример: классификация заболеваний — тип-степень набора обобщений Disease Occurrence.")
    example_association(svg, "M 260 427 H 400",
                        [("disease", 360, 413, "end"), ("1", 388, 413, "end"),
                         ("*", 272, 449, "start"), ("classification", 272, 465, "start")],
                        markers="", title="Ассоциация примера: случай заболевания относится к классификации.")
    generalization(svg, "M 60 567 H 40 V 500 H 130 V 455", child="Disease kinds", parent="Disease Occurrence")
    generalization(svg, "M 60 647 H 40", marker=False, child="Measles", parent="Disease Occurrence")
    _set_label(svg, "{disjoint, incomplete}", 230, 510, "start", DISJOINT_INCOMPLETE_TOOLTIP)
    _set_label(svg, ":DiseaseClassification", 230, 526, "start",
               "Тип-степень (powertype) набора: каждой болезни соответствует экземпляр Disease Classification.")
    class_node(svg, "ChickenPox", 60, 540, 150, 55, example=True, tooltip="Пример: вид заболевания — специализация Disease Occurrence.")
    class_node(svg, "Measles", 60, 620, 150, 55, example=True, tooltip="Пример: вид заболевания — специализация Disease Occurrence.")
    svg.add(text("(c) Пример «случай заболевания / классификация»", 60, 710, css="example-label"))

    class_node(svg, "Installed Telephone Service", 620, 400, 260, 55, example=True, tooltip="Пример: установленная телефонная услуга.")
    class_node(svg, "Telephone Service Category", 1100, 400, 250, 55, example=True,
               tooltip="Пример: категория телефонной услуги — тип-степень набора обобщений Installed Telephone Service.")
    example_association(svg, "M 880 427 H 1100",
                        [("service", 1070, 413, "end"), ("1", 1088, 413, "end"),
                         ("*", 892, 449, "start"), ("category", 892, 465, "start")],
                        markers="", title="Ассоциация примера: установленная услуга относится к категории телефонной услуги.")
    generalization(svg, "M 650 567 H 630 V 500 H 720 V 455", child="Service kinds", parent="Installed Telephone Service")
    generalization(svg, "M 650 647 H 630", marker=False, child="Call Transferring", parent="Installed Telephone Service")
    _set_label(svg, "{disjoint, incomplete}", 850, 510, "start", DISJOINT_INCOMPLETE_TOOLTIP)
    _set_label(svg, ":TelephoneServiceCategory", 850, 526, "start",
               "Тип-степень (powertype) набора: каждой услуге соответствует экземпляр Telephone Service Category.")
    class_node(svg, "Call Waiting", 650, 540, 160, 55, example=True, tooltip="Пример: вид телефонной услуги — специализация Installed Telephone Service.")
    class_node(svg, "Call Transferring", 650, 620, 170, 55, example=True, tooltip="Пример: вид телефонной услуги — специализация Installed Telephone Service.")
    svg.add(text("(d) Пример «телефонная услуга / категория услуг»", 620, 710, css="example-label"))
    return svg


def figure_9_26():
    svg = Svg("9.26", "Более одного типа-степени",
              "Policy классифицируется одновременно по Policy Coverage Type (набор {disjoint, complete}) и по "
              "Insurance Line (набор {disjoint, incomplete}).", 1100, 425)
    class_node(svg, "Policy Coverage Type", 60, 40, 200, 55, example=True,
               tooltip="Пример: тип страхового покрытия — тип-степень набора обобщений Policy.")
    class_node(svg, "Policy", 480, 40, 130, 50, example=True, tooltip="Пример: страховой полис.")
    class_node(svg, "Insurance Line", 880, 40, 170, 55, example=True,
               tooltip="Пример: страховая линия — тип-степень набора обобщений Policy.")
    example_association(svg, "M 260 67 H 480",
                        [("1", 302, 53, "end"), ("policy", 455, 53, "end"),
                         ("*", 272, 88, "start"), ("coverage type", 272, 104, "start")],
                        markers="", title="Ассоциация примера: полис относится к типу страхового покрытия.")
    example_association(svg, "M 610 67 H 880",
                        [("policy", 655, 53, "end"), ("insurance line", 860, 53, "end"), ("1", 868, 53, "start"),
                         ("*", 622, 88, "start")],
                        markers="", title="Ассоциация примера: полис относится к страховой линии.")
    generalization(svg, "M 340 247 H 320 V 170 H 510 V 90", child="Coverage kinds", parent="Policy")
    generalization(svg, "M 340 327 H 320", marker=False, child="Individual Policy", parent="Policy")
    _set_label(svg, "{disjoint, complete}", 60, 135, "start", DISJOINT_COMPLETE_TOOLTIP)
    _set_label(svg, ":PolicyCoverageType", 60, 151, "start",
               "Тип-степень (powertype) набора: каждому виду покрытия соответствует экземпляр Policy Coverage Type.")
    generalization(svg, "M 700 187 H 680 V 140 H 570 V 90", child="Insurance lines", parent="Policy")
    generalization(svg, "M 700 267 H 680", marker=False, child="Health Policy", parent="Policy")
    generalization(svg, "M 700 347 H 680", marker=False, child="Property/Casualty Policy", parent="Policy")
    _set_label(svg, "{disjoint, incomplete}", 900, 135, "start", DISJOINT_INCOMPLETE_26_TOOLTIP)
    _set_label(svg, ":InsuranceLine", 900, 151, "start",
               "Тип-степень (powertype) набора: каждой страховой линии соответствует экземпляр Insurance Line.")
    class_node(svg, "Group Policy", 340, 220, 150, 55, example=True, tooltip="Пример: вид полиса по типу покрытия — специализация Policy.")
    class_node(svg, "Individual Policy", 340, 300, 170, 55, example=True, tooltip="Пример: вид полиса по типу покрытия — специализация Policy.")
    class_node(svg, "Life Policy", 700, 160, 150, 55, example=True, tooltip="Пример: вид полиса по страховой линии — специализация Policy.")
    class_node(svg, "Health Policy", 700, 240, 150, 55, example=True, tooltip="Пример: вид полиса по страховой линии — специализация Policy.")
    class_node(svg, "Property/Casualty Policy", 700, 320, 230, 55, example=True, tooltip="Пример: вид полиса по страховой линии — специализация Policy.")
    return svg


BUILDERS = {
    "9.15": figure_9_15,
    "9.16": figure_9_16,
    "9.17": figure_9_17,
    "9.18": figure_9_18,
    "9.19": figure_9_19,
    "9.20": figure_9_20,
    "9.21": figure_9_21,
    "9.22": figure_9_22,
    "9.23": figure_9_23,
    "9.24": figure_9_24,
    "9.25": figure_9_25,
    "9.26": figure_9_26,
}


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=None,
                        help="Write generated SVG files to this directory instead of only rendering them in memory")
    args = parser.parse_args()
    for figure, builder in BUILDERS.items():
        content = builder().render()
        if args.output_dir:
            target = args.output_dir / f"figure-{figure.replace('.', '-')}.svg"
            target.write_text(content, encoding="utf-8", newline="\n")
            print(f"Figure {figure}: {target}")
        else:
            print(f"Figure {figure}: OK ({len(content)} bytes)")
    print(f"Classification GeneralizationSet figure builders: OK; {len(BUILDERS)} figures rendered")


if __name__ == "__main__":
    main()
