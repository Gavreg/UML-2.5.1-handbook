"""
Name: sync_xmi_properties.py
Purpose: Generate classifier and association properties from the normative UML 2.5.1 XMI.
Interface: python scripts/sync_xmi_properties.py [--check]
Goal: Keep owned attributes, association ends, inherited properties and signatures consistent with OMG XMI.
Requires: Python 3; docs/UML-2.5.1.xmi and site/data/common-structure.js.
"""

from argparse import ArgumentParser
from copy import deepcopy
import json
from pathlib import Path
import re
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
XMI = ROOT / "docs" / "UML-2.5.1.xmi"
DATA = ROOT / "site" / "data" / "common-structure.js"
OUTPUT = ROOT / "site" / "data" / "common-structure-xmi.js"
XMI_NS = "{http://www.omg.org/spec/XMI/20131001}"
UML_NS = "{http://www.omg.org/spec/UML/20131001}"

CLASSIFIER_TRANSLATIONS = {
    "Expression": "Узел дерева выражения, который может быть терминальным или нетерминальным. Задаёт символ и, возможно, пустую последовательность операндов — спецификаций значений. При вычислении в контексте обозначает, возможно, пустое множество значений.",
}

PROPERTY_TRANSLATIONS = {
    "A_actual_templateParameterSubstitution-templateParameterSubstitution": "Подстановки, в которых элемент выступает фактическим параметром.",
    "A_annotatedElement_comment-comment": "Комментарии, присоединённые к элементу.",
    "A_constrainedElement_constraint-constraint": "Ограничения, применяемые к элементу.",
    "A_default_templateParameter-templateParameter": "Параметры шаблона, для которых элемент задан как значение по умолчанию.",
    "A_formal_templateParameterSubstitution-templateParameterSubstitution": "Подстановки, в которых параметр выступает формальным параметром.",
    "A_importedElement_import-import": "Импорты, добавляющие элемент в пространство имён.",
    "A_importedMember_namespace-namespace": "Пространства имён, в которые элемент добавлен импортом.",
    "A_importedPackage_packageImport-packageImport": "Импорты, добавляющие членов пакета в пространство имён.",
    "A_lowerValue_owningLower-owningLower": "Элемент кратности, которому принадлежит спецификация нижней границы.",
    "A_mapping_abstraction-abstraction": "Абстрагирование, которому принадлежит выражение отображения.",
    "A_member_memberNamespace-memberNamespace": "Пространства имён, членом которых является элемент.",
    "A_nameExpression_namedElement-namedElement": "Именованный элемент, имя которого задаёт выражение.",
    "A_ownedActual_owningTemplateParameterSubstitution-owningTemplateParameterSubstitution": "Подстановка, владеющая фактическим параметром.",
    "A_ownedComment_owningElement-owningElement": "Элемент, владеющий комментарием.",
    "A_ownedDefault_templateParameter-templateParameter": "Параметр шаблона, владеющий значением по умолчанию.",
    "A_parameter_templateSignature-templateSignature": "Подписи, включающие параметр шаблона.",
    "A_relatedElement_relationship-relationship": "Отношения, в которых участвует элемент.",
    "A_signature_templateBinding-templateBinding": "Привязки, использующие подпись целевого шаблона.",
    "A_source_directedRelationship-directedRelationship": "Направленные отношения, для которых элемент является источником.",
    "A_specification_owningConstraint-owningConstraint": "Ограничение, владеющее спецификацией условия.",
    "A_supplier_supplierDependency-supplierDependency": "Зависимости, которые ссылаются на элемент как на поставщика.",
    "A_target_directedRelationship-directedRelationship": "Направленные отношения, для которых элемент является целью.",
    "A_type_typedElement-typedElement": "Типизированные элементы, для которых задан этот тип.",
    "A_upperValue_owningUpper-owningUpper": "Элемент кратности, которому принадлежит спецификация верхней границы.",
    "Expression-operand": "Упорядоченная последовательность спецификаций значений-операндов.",
    "Expression-symbol": "Символ, связанный с этим узлом дерева выражения.",
    "OpaqueExpression-behavior": "Поведение UML, задающее вычисление выражения.",
    "OpaqueExpression-body": "Текстовое определение поведения выражения, возможно на нескольких языках.",
    "OpaqueExpression-language": "Языки текстовых определений; порядок языков соответствует порядку строк body. Если языки не указаны, они могут следовать из выражения или контекста.",
    "OpaqueExpression-result": "Единственный возвращаемый параметр поведения, значения которого являются результатом вычисления выражения.",
    "Package-URI": "Идентификатор пакета, соответствующий правилам синтаксиса URI.",
    "Package-nestedPackage": "Вложенные пакеты, принадлежащие этому пакету.",
    "Package-nestingPackage": "Пакет, владеющий этим пакетом.",
    "Package-ownedStereotype": "Стереотипы, принадлежащие пакету.",
    "Package-ownedType": "Типы, принадлежащие пакету.",
    "Package-packageMerge": "Операции слияния пакетов, принадлежащие этому пакету.",
    "Package-packagedElement": "Упаковываемые элементы, принадлежащие пакету.",
    "Package-profileApplication": "Применения профилей, показывающие, какие профили применены к пакету.",
    "StringExpression-owningExpression": "Строковое выражение, частью которого является данное подвыражение.",
    "StringExpression-subExpression": "Строковые подвыражения, образующие данное выражение.",
    "A_behavior_opaqueExpression-opaqueExpression": "Непрозрачное выражение, вычисление которого задаёт поведение.",
    "A_operand_expression-expression": "Выражение, которому принадлежит операнд.",
    "A_ownedStereotype_owningPackage-owningPackage": "Пакет, владеющий стереотипом.",
    "A_packagedElement_owningPackage-owningPackage": "Пакет, владеющий упаковываемым элементом.",
    "A_result_opaqueExpression-opaqueExpression": "Непрозрачное выражение, результат которого задаёт параметр.",
    "Action-localPostcondition": "Ограничение, которое должно выполняться после завершения выполнения действия.",
    "Action-localPrecondition": "Ограничение, которое должно выполняться перед началом выполнения действия.",
    "ActivityEdge-guard": "Спецификация значения, определяющая, может ли маркер проходить по ребру деятельности; при её отсутствии прохождение не ограничено.",
    "ActivityEdge-weight": "Минимальное число маркеров, которые должны одновременно проходить по ребру; по умолчанию равно 1.",
    "ActivityPartition-represents": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
    "Association-endType": "Классификаторы, используемые как типы концов ассоциации.",
    "Behavior-postcondition": "Необязательные ограничения, выполняемые после завершения поведения, если перед вызовом были выполнены предусловия.",
    "Behavior-precondition": "Необязательные ограничения, которые должны выполняться перед вызовом поведения.",
    "BehavioralFeature-raisedException": "Типы исключений, которые могут возникать при вызове поведенческой характеристики.",
    "ChangeEvent-changeExpression": "Логическая спецификация значения; событие изменения происходит при смене её значения с false на true.",
    "Classifier-inheritedMember": "Элементы, унаследованные классификатором от общих классификаторов.",
    "CollaborationUse-roleBinding": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
    "Component-packagedElement": "Упаковываемые элементы, принадлежащие компоненту.",
    "ConsiderIgnoreFragment-message": "Сообщения, применимые к этому фрагменту взаимодействия.",
    "DeploymentTarget-deployedElement": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
    "Duration-expr": "Спецификация значения, вычисляющая длительность.",
    "DurationObservation-event": "События входа или выхода, между которыми измеряется длительность.",
    "Extend-condition": "Условие, которое должно выполняться при достижении первой точки расширения; без него расширение безусловно.",
    "InformationFlow-informationSource": "Источник, из которого исходят передаваемые информационные элементы.",
    "InformationFlow-informationTarget": "Цель, которой направляются передаваемые информационные элементы.",
    "InformationFlow-realization": "Отношения, реализующие указанный информационный поток.",
    "InstanceSpecification-specification": "Спецификация способа вычисления, вывода или построения экземпляра.",
    "InteractionConstraint-maxint": "Максимальное число итераций цикла.",
    "InteractionConstraint-minint": "Минимальное число итераций цикла.",
    "InteractionUse-argument": "Фактические аргументы взаимодействия.",
    "InteractionUse-returnValue": "Значение выполненного взаимодействия.",
    "Interval-max": "Спецификация максимального значения интервала.",
    "Interval-min": "Спецификация минимального значения интервала.",
    "JoinNode-joinSpec": "Условие, при котором узел слияния предлагает маркер на исходящем ребре; по умолчанию требуются маркеры на всех входящих рёбрах.",
    "Lifeline-selector": "Если соединяемый элемент многозначен, задаёт конкретную часть внутри этого множества.",
    "Manifestation-utilizedElement": "Элемент модели, используемый при воплощении в артефакте.",
    "Message-argument": "Аргументы сообщения.",
    "Message-signature": "Спецификация содержимого сообщения: операция или сигнал.",
    "ObjectNode-upperBound": "Максимальное число маркеров в узле объектов; при достижении границы новые маркеры не поступают, а при её отсутствии ограничения нет.",
    "Operation-bodyCondition": "Необязательное ограничение на значения результата вызова операции.",
    "Operation-postcondition": "Необязательные ограничения на состояние системы после завершения операции.",
    "Operation-precondition": "Необязательные ограничения на состояние системы при вызове операции.",
    "Operation-raisedException": "Типы исключений, которые могут возникать при вызове операции.",
    "Operation-type": "Возвращаемый тип операции, если он есть; выводится из возвращаемого параметра.",
    "PackageMerge-mergedPackage": "Пакет, содержимое которого объединяется с принимающим пакетом.",
    "PackageMerge-receivingPackage": "Пакет, расширяемый содержимым объединяемого пакета.",
    "Parameter-defaultValue": "Спецификация значения, используемого, если аргумент параметра не передан.",
    "ParameterSet-condition": "Ограничение, определяющее возможность начала или завершения выполнения со значениями параметров набора.",
    "Profile-metaclassReference": "Импорт метакласса, который может быть расширен профилем.",
    "Profile-metamodelReference": "Импорт пакета, содержащего прямо или косвенно расширяемые метаклассы.",
    "ProfileApplication-applyingPackage": "Пакет, владеющий применением профиля.",
    "Property-defaultValue": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
    "ProtocolTransition-postCondition": "Постусловие перехода, которое должно выполняться после его срабатывания и входит в постусловие связанной операции.",
    "ProtocolTransition-preCondition": "Предусловие перехода, проверяемое перед его срабатыванием.",
    "RedefinableTemplateSignature-inheritedParameter": "Формальные параметры расширяемых сигнатур шаблонов.",
    "Slot-value": "Значение или значения, хранящиеся в слоте.",
    "State-stateInvariant": "Условия, которые всегда истинны, пока это состояние является текущим.",
    "StateInvariant-invariant": "Ограничение, которое должно выполняться во время выполнения для этого инварианта состояния.",
    "TimeExpression-expr": "Спецификация значения, вычисляющая значение временного выражения.",
    "TimeObservation-event": "Событие входа или выхода, по которому определяется наблюдение времени.",
    "Transition-guard": "Ограничение-сторож, управляющее срабатыванием перехода; оно вычисляется без побочных эффектов.",
    "ValuePin-value": "Спецификация значения, вычисляемого для получения значения контакта значения.",
    "ValueSpecificationAction-value": "Спецификация значения, которое требуется вычислить.",
    "A_event_durationObservation-durationObservation": "Наблюдения длительности, события которых определяют измеряемую длительность.",
    "A_event_timeObservation-timeObservation": "Наблюдения времени, события которых определяют наблюдаемое время.",
    "A_expr_duration-duration": "Длительность, вычисляющая значение Duration.",
    "A_expr_timeExpression-timeExpression": "Временное выражение, вычисляющее значение TimeExpression.",
    "A_max_durationInterval-durationInterval": "Интервал длительности, обозначающий максимальное значение диапазона.",
    "A_max_interval-interval": "Интервал, обозначающий максимальное значение диапазона.",
    "A_max_timeInterval-timeInterval": "Интервал времени, обозначающий максимальное значение диапазона.",
    "A_min_durationInterval-durationInterval": "Интервал длительности, обозначающий минимальное значение диапазона.",
    "A_min_interval-interval": "Интервал, обозначающий минимальное значение диапазона.",
    "A_min_timeInterval-timeInterval": "Интервал времени, обозначающий минимальное значение диапазона.",
    "A_observation_duration-duration": "Длительность, участвующая в наблюдении.",
    "A_observation_timeExpression-timeExpression": "Временное выражение, участвующее в наблюдении.",
    "A_specification_durationConstraint-durationConstraint": "Ограничение длительности, задающее ограничение для DurationInterval.",
    "A_specification_intervalConstraint-intervalConstraint": "Интервальное ограничение, задающее спецификацию интервала.",
    "A_specification_timeConstraint-timeConstraint": "Ограничение времени, задающее ограничение для TimeInterval.",
    "Duration-observation": "Наблюдения, участвующие в вычислении значения Duration.",
    "DurationConstraint-firstEvent": "Значение первого события наблюдения входа/выхода.",
    "DurationConstraint-specification": "DurationInterval, ограничивающий длительность.",
    "DurationInterval-max": "Длительность, обозначающая максимальное значение диапазона.",
    "DurationInterval-min": "Длительность, обозначающая минимальное значение диапазона.",
    "DurationObservation-firstEvent": "Значение первого события наблюдения входа/выхода для каждого event.",
    "IntervalConstraint-specification": "Interval, задающий условие IntervalConstraint.",
    "TimeConstraint-specification": "TimeInterval, ограничивающий время.",
    "TimeExpression-observation": "Наблюдения, участвующие в вычислении значения TimeExpression.",
    "TimeInterval-max": "TimeExpression, обозначающее максимальное значение диапазона.",
    "TimeInterval-min": "TimeExpression, обозначающее минимальное значение диапазона.",
}


def classifier_blocks(text):
    block = text.split("const classifiers = [", 1)[1].split("const associations = [", 1)[0]
    starts = list(re.finditer(r'^    \{\n      name: "([A-Za-z]+)",\n      ru:', block, re.MULTILINE))
    for index, match in enumerate(starts):
        end = starts[index + 1].start() if index + 1 < len(starts) else len(block)
        yield match.group(1), block[match.start():end]


def curated_descriptions(text):
    result = {}
    for classifier, block in classifier_blocks(text):
        for signature, description in re.findall(
            r'\{ signature: "([^"]+)", description: "([^"]*)" \}', block
        ):
            name = signature.split(":", 1)[0].strip().lstrip("/")
            if "(" not in name:
                result[f"{classifier}-{name}"] = description
    return result


def association_names(text):
    block = text.split("const associations = [", 1)[1].split("const diagrams = [", 1)[0]
    return re.findall(r'name: "(A_[A-Za-z_]+)"', block)


def value(element, default):
    if element is None:
        return default
    return element.get("value", default)


def property_type(prop):
    if prop.get("type"):
        return prop.get("type")
    type_element = prop.find("type")
    if type_element is not None:
        return type_element.get("href", "").rsplit("#", 1)[-1]
    raise ValueError(f"Property {prop.get(XMI_NS + 'id')} has no type")


def default_value(prop):
    default = prop.find("defaultValue")
    if default is None:
        return None
    if default.get("value") is not None:
        return default.get("value")
    if default.get("instance"):
        return default.get("instance").rsplit("-", 1)[-1]
    default_types = {
        "uml:LiteralBoolean": "false",
        "uml:LiteralInteger": "0",
        "uml:LiteralUnlimitedNatural": "1",
    }
    return default_types.get(default.get(XMI_NS + "type"))


class XmiModel:
    def __init__(self, path):
        self.root = ET.parse(path).getroot()
        self.elements = {
            element.get(XMI_NS + "id"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "id")
        }
        self.classes = {
            element.get("name"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "type") == "uml:Class"
        }
        self.associations = {
            element.get("name"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "type") == "uml:Association"
        }
        self.property_owners = {
            prop.get(XMI_NS + "id"): {"type": "classifier", "name": name}
            for name, classifier in self.classes.items()
            for prop in classifier.findall("ownedAttribute")
        }
        self.property_owners.update({
            prop.get(XMI_NS + "id"): {"type": "association", "name": name}
            for name, association in self.associations.items()
            for prop in association.findall("ownedEnd")
        })
        self.missing_descriptions = []

    def property_name(self, element_id):
        return self.elements[element_id].get("name")

    def property_references(self, prop, tag):
        return [
            {
                "id": item.get(XMI_NS + "idref"),
                "name": self.property_name(item.get(XMI_NS + "idref")),
                "type": property_type(self.elements[item.get(XMI_NS + "idref")]),
                "owner": self.property_owners.get(item.get(XMI_NS + "idref")),
            }
            for item in prop.findall(tag)
        ]

    def modifiers(self, prop):
        result = []
        if prop.get("isOrdered") == "true":
            result.append("ordered")
        if prop.get("isUnique") == "false":
            result.append("nonunique")
        if prop.get("isReadOnly") == "true":
            result.append("readOnly")
        if prop.get("isDerivedUnion") == "true":
            result.append("union")
        subsets = [self.property_name(item.get(XMI_NS + "idref")) for item in prop.findall("subsettedProperty")]
        redefines = [self.property_name(item.get(XMI_NS + "idref")) for item in prop.findall("redefinedProperty")]
        if subsets:
            result.append("subsets " + ", ".join(subsets))
        if redefines:
            result.append("redefines " + ", ".join(redefines))
        return result, subsets, redefines

    def signature(self, prop):
        name = prop.get("name")
        if prop.get("isDerived") == "true":
            name = "/" + name
        lower_element = prop.find("lowerValue")
        upper_element = prop.find("upperValue")
        lower = value(lower_element, "0" if lower_element is not None else "1")
        upper = value(upper_element, "1")
        signature = f"{name} : {property_type(prop)} [{lower}..{upper}]"
        default = default_value(prop)
        if default is not None:
            signature += f" = {default}"
        modifiers, _, _ = self.modifiers(prop)
        if modifiers:
            signature += " {" + ", ".join(modifiers) + "}"
        return signature

    def property(self, prop, descriptions, owner):
        prop_id = prop.get(XMI_NS + "id")
        description = descriptions.get(prop_id) or PROPERTY_TRANSLATIONS.get(prop_id)
        if not description:
            self.missing_descriptions.append(prop_id)
            description = ""
        _, subsets, redefines = self.modifiers(prop)
        return {
            "id": prop_id,
            "name": prop.get("name"),
            "signature": self.signature(prop),
            "description": description,
            "type": property_type(prop),
            "association": prop.get("association"),
            "owner": owner,
            "subsets": subsets,
            "redefines": redefines,
            "subsettedProperties": self.property_references(prop, "subsettedProperty"),
            "redefinedProperties": self.property_references(prop, "redefinedProperty"),
        }

    def direct_properties(self, class_name, descriptions):
        classifier = self.classes[class_name]
        return [
            self.property(prop, descriptions, class_name)
            for prop in classifier.findall("ownedAttribute")
        ]

    def classifier_definition(self, class_name):
        if class_name in CLASSIFIER_TRANSLATIONS:
            return CLASSIFIER_TRANSLATIONS[class_name]
        comment = self.classes[class_name].find("ownedComment")
        return comment.get("body", "") if comment is not None else ""

    def generalizations(self, class_name):
        return [
            item.get("general")
            for item in self.classes[class_name].findall("generalization")
        ]

    def inherited_properties(self, class_name, direct_by_class):
        inherited = []
        seen = set()
        redefined_ids = set()

        def collect_redefinitions(name):
            for prop in self.classes[name].findall("ownedAttribute"):
                redefined_ids.update(
                    item.get(XMI_NS + "idref")
                    for item in prop.findall("redefinedProperty")
                )
            for parent in self.generalizations(name):
                collect_redefinitions(parent)

        collect_redefinitions(class_name)

        def visit(parent):
            for prop in direct_by_class[parent]:
                if prop["id"] in redefined_ids or prop["id"] in seen:
                    continue
                item = deepcopy(prop)
                item["inheritedFrom"] = parent
                inherited.append(item)
                seen.add(prop["id"])
            for grandparent in self.generalizations(parent):
                visit(grandparent)

        for parent in self.generalizations(class_name):
            visit(parent)
        return inherited

    def association_ends(self, association_name, descriptions):
        association = self.associations[association_name]
        result = []
        for end_ref in association.findall("memberEnd"):
            prop = self.elements[end_ref.get(XMI_NS + "idref")]
            result.append(self.property(prop, descriptions, association_name))
        return result


def generate():
    text = DATA.read_text(encoding="utf-8")
    model = XmiModel(XMI)
    descriptions = curated_descriptions(text)
    class_names = [name for name, _ in classifier_blocks(text)]
    association_list = association_names(text)

    enumeration_names = {
        element.get("name")
        for element in model.root.iter()
        if element.get(XMI_NS + "type") == "uml:Enumeration"
    }
    missing_classes = [
        name for name in class_names
        if name not in model.classes and name not in enumeration_names
    ]
    if missing_classes:
        raise ValueError(f"Diagram classifiers absent from XMI: {missing_classes}")
    class_names = [name for name in class_names if name in model.classes]
    missing_associations = [name for name in association_list if name not in model.associations]
    if missing_associations:
        raise ValueError(f"Associations absent from XMI: {missing_associations}")

    required_classes = set()

    def require_with_ancestors(name):
        if name in required_classes:
            return
        required_classes.add(name)
        for parent in model.generalizations(name):
            require_with_ancestors(parent)

    for name in class_names:
        require_with_ancestors(name)
    direct_by_class = {
        name: model.direct_properties(name, descriptions)
        for name in required_classes
    }
    classes = {}
    for name in class_names:
        classes[name] = {
            "direct": direct_by_class[name],
            "inherited": model.inherited_properties(name, direct_by_class),
        }
    associations = {
        name: {"ends": model.association_ends(name, descriptions)}
        for name in association_list
    }
    if model.missing_descriptions:
        missing = sorted(set(model.missing_descriptions))
        raise ValueError("Missing Russian property descriptions:\n" + "\n".join(missing))
    payload = {
        "source": "OMG UML 2.5.1, formal/17-12-05, UML.xmi (20161101)",
        "classes": classes,
        "associations": associations,
        "generalizations": {
            name: model.generalizations(name)
            for name in sorted(required_classes)
        },
        "classifierDefinitions": {
            name: model.classifier_definition(name)
            for name in sorted(required_classes)
        },
    }
    return "window.UML_XMI_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check that the generated file is up to date")
    args = parser.parse_args()
    expected = generate()
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_text(encoding="utf-8") != expected:
            raise SystemExit("Generated XMI data is out of date; run python scripts/sync_xmi_properties.py")
        print("XMI property data: OK")
        return
    OUTPUT.write_text(expected, encoding="utf-8")
    print(f"Generated {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
