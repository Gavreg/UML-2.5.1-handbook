# Черновик реестра раздела 11: Structured Classifiers

**Статус**: черновик inventory (аналог этапа 1, cf. `uml-2.5.1-simple-classifiers-inventory.json`)

## Источники и диапазон

- **PDF**: `omg-uml-2.5.1-formal-17-12-05.pdf`, печатные страницы **183–240** (внутренняя нумерация PDF: 141–198)
- **XMI**: `UML-2.5.1.xmi`, пакет `xmi:id="StructuredClassifiers"`
- **Текст**: `omg-uml-2.5.1-formal-17-12-05.txt` (полный дамп)

Раздел 12 «Packages» начинается на странице **241** (PDF-страница 199).

## 1. Предлагаемый блок конфигурации для `scripts/sections.json`

```json
{
    "clause": 11,
    "title": "Structured Classifiers",
    "title_ru": "Структурированные классификаторы",
    "slug": "structured-classifiers",
    "package": "StructuredClassifiers",
    "first_page": 183,
    "last_page": 240,
    "pdf_first": 141,
    "pdf_last": 198,
    "classifier_catalog": "11.8",
    "association_catalog": "11.9",
    "figure_catalog": "Figure 11.x",
    "source": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf"
}
```

## 2. Дерево подразделов

| Номер | Заголовок (EN) | Печ. стр. |
|-------|----------------|-----------|
| 11.1 | Summary | 183 |
| 11.2 | Structured Classifiers | 184 |
| 11.2.1 | Summary | 184 |
| 11.2.2 | Abstract Syntax | 184 |
| 11.2.3 | Semantics | 185 |
| 11.2.4 | Notation | 186 |
| 11.2.5 | Examples | 187 |
| 11.3 | Encapsulated Classifiers | 188 |
| 11.3.1 | Summary | 188 |
| 11.3.2 | Abstract Syntax | 188 |
| 11.3.3 | Semantics | 189 |
| 11.3.4 | Notation | 190 |
| 11.3.5 | Examples | 191 |
| 11.4 | Classes | 192 |
| 11.4.1 | Summary | 192 |
| 11.4.2 | Abstract Syntax | 192 |
| 11.4.3 | Semantics | 193 |
| 11.4.4 | Notation | 193 |
| 11.4.5 | Examples | 193 |
| 11.5 | Associations | 197 |
| 11.5.1 | Summary | 197 |
| 11.5.2 | Abstract Syntax | 198 |
| 11.5.3 | Semantics | 198 |
| 11.5.4 | Notation | 198 |
| 11.5.5 | Examples | 200 |
| 11.6 | Components | 207 |
| 11.6.1 | Summary | 207 |
| 11.6.2 | Abstract Syntax | 208 |
| 11.6.3 | Semantics | 208 |
| 11.6.4 | Notation | 209 |
| 11.6.5 | Examples | 210 |
| 11.7 | Collaborations | 211 |
| 11.7.1 | Summary | 211 |
| 11.7.2 | Abstract Syntax | 212 |
| 11.7.3 | Semantics | 212 |
| 11.7.4 | Notation | 213 |
| 11.7.5 | Examples | 214 |
| 11.8 | Classifier Descriptions | ~219 |
| 11.8.1 | `Association` [Class] | ~219 |
| 11.8.2 | `AssociationClass` [Class] | ~221 |
| 11.8.3 | `Class` [Class] | ~221 |
| 11.8.4 | `Collaboration` [Class] | ~223 |
| 11.8.5 | `CollaborationUse` [Class] | ~224 |
| 11.8.6 | `Component` [Class] | ~225 |
| 11.8.7 | `ComponentRealization` [Class] | ~227 |
| 11.8.8 | `ConnectableElement` [Abstract Class] | ~228 |
| 11.8.9 | `ConnectableElementTemplateParameter` [Class] | ~229 |
| 11.8.10 | `Connector` [Class] | ~229 |
| 11.8.11 | `ConnectorEnd` [Class] | ~231 |
| 11.8.12 | `ConnectorKind` [Enumeration] | ~232 |
| 11.8.13 | `EncapsulatedClassifier` [Abstract Class] | ~232 |
| 11.8.14 | `Port` [Class] | ~233 |
| 11.8.15 | `StructuredClassifier` [Abstract Class] | ~235 |
| 11.9 | Association Descriptions | ~236 |
| 11.9.1 | `A_collaborationRole_collaboration` | ~236 |
| 11.9.2 | `A_connectableElement_templateParameter_parameteredElement` | ~236 |
| 11.9.3 | `A_contract_connector` | ~237 |
| 11.9.4 | `A_definingEnd_connectorEnd` | ~237 |
| 11.9.5 | `A_endType_association` | ~237 |
| 11.9.6 | `A_end_connector` | ~237 |
| 11.9.7 | `A_end_role` | ~237 |
| 11.9.8 | `A_extension_metaclass` | ~237 |
| 11.9.9 | `A_memberEnd_association` | ~238 |
| 11.9.10 | `A_navigableOwnedEnd_association` | ~238 |
| 11.9.11 | `A_nestedClassifier_nestingClass` | ~238 |
| 11.9.12 | `A_ownedAttribute_class` | ~238 |
| 11.9.13 | `A_ownedAttribute_structuredClassifier` | ~239 |
| 11.9.14 | `A_ownedConnector_structuredClassifier` | ~239 |
| 11.9.15 | `A_ownedEnd_owningAssociation` | ~239 |
| 11.9.16 | `A_ownedOperation_class` | ~239 |
| 11.9.17 | `A_ownedPort_encapsulatedClassifier` | ~240 |
| 11.9.18 | `A_ownedReception_class` | ~240 |
| 11.9.19 | `A_packagedElement_component` | ~240 |
| 11.9.20 | `A_partWithPort_connectorEnd` | ~240 |
| 11.9.21 | `A_part_structuredClassifier` | ~240 |
| 11.9.22 | `A_protocol_port` | ~240 |
| 11.9.23 | `A_provided_component` | ~240 |
| 11.9.24 | `A_provided_port` | ~240 |
| 11.9.25 | `A_realization_abstraction_component` | ~240 |
| 11.9.26 | `A_realizingClassifier_componentRealization` | ~240 |
| 11.9.27 | `A_redefinedConnector_connector` | ~231 |
| 11.9.28 | `A_redefinedPort_port` | ~231 |
| 11.9.29 | `A_required_component` | ~232 |
| 11.9.30 | `A_required_port` | ~232 |
| 11.9.31 | `A_roleBinding_collaborationUse` | ~232 |
| 11.9.32 | `A_role_structuredClassifier` | ~232 |
| 11.9.33 | `A_superClass_class` | ~232 |
| 11.9.34 | `A_type_collaborationUse` | ~233 |
| 11.9.35 | `A_type_connector` | ~233 |

## 3. Классификаторы (раздел 11.8)

В разделе 11.8 «Classifier Descriptions» описаны 15 классификаторов:

| № | Англ. имя | Тип | Подраздел | Определение (EN, первый абзац) |
|---|-----------|-----|-----------|-------------------------------|
| 1 | `Association` | Class | 11.8.1 | A link is a tuple of values that refer to typed objects. An Association classifi... |
| 2 | `AssociationClass` | Class | 11.8.2 | A model element that has both Association and Class properties. An AssociationCl... |
| 3 | `Class` | Class | 11.8.3 | A Class classifies a set of objects and specifies the features that characterize... |
| 4 | `Collaboration` | Class | 11.8.4 | A Collaboration describes a structure of collaborating elements (roles), each pe... |
| 5 | `CollaborationUse` | Class | 11.8.5 | A CollaborationUse is used to specify the application of a pattern specified by ... |
| 6 | `Component` | Class | 11.8.6 | A Component represents a modular part of a system that encapsulates its contents... |
| 7 | `ComponentRealization` | Class | 11.8.7 | Realization is specialized to (optionally) define the Classifiers that realize t... |
| 8 | `ConnectableElement` | Abstract Class | 11.8.8 | ConnectableElement is an abstract metaclass representing a set of instances that... |
| 9 | `ConnectableElementTemplateParameter` | Class | 11.8.9 | A ConnectableElementTemplateParameter exposes a ConnectableElement as a formal p... |
| 10 | `Connector` | Class | 11.8.10 | A Connector specifies links that enables communication between two or more insta... |
| 11 | `ConnectorEnd` | Class | 11.8.11 | A ConnectorEnd is an endpoint of a Connector, which attaches the Connector to a ... |
| 12 | `ConnectorKind` | Enumeration | 11.8.12 | ConnectorKind is an enumeration that defines whether a Connector is an assembly ... |
| 13 | `EncapsulatedClassifier` | Abstract Class | 11.8.13 | An EncapsulatedClassifier may own Ports to specify typed interaction points. Enc... |
| 14 | `Port` | Class | 11.8.14 | A Port is a property of an EncapsulatedClassifier that specifies a distinct inte... |
| 15 | `StructuredClassifier` | Abstract Class | 11.8.15 | StructuredClassifiers may contain an internal structure of connected elements ea... |

### Прямые дети пакета StructuredClassifiers (из XMI)

| xmi:id / имя | Англ. имя | isAbstract | Кол-во литералов enum |
|--------------|-----------|------------|----------------------|
| `Association` | Association | нет | — |
| `AssociationClass` | AssociationClass | нет | — |
| `Class` | Class | нет | — |
| `Collaboration` | Collaboration | нет | — |
| `CollaborationUse` | CollaborationUse | нет | — |
| `Component` | Component | нет | — |
| `ComponentRealization` | ComponentRealization | нет | — |
| `ConnectableElement` | ConnectableElement | да | — |
| `ConnectableElementTemplateParameter` | ConnectableElementTemplateParameter | нет | — |
| `Connector` | Connector | нет | — |
| `ConnectorEnd` | ConnectorEnd | нет | — |
| `ConnectorKind` | ConnectorKind | нет | 2 |
| `EncapsulatedClassifier` | EncapsulatedClassifier | да | — |
| `Port` | Port | нет | — |
| `PseudostateKind` | PseudostateKind | нет | 9 |
| `StructuredClassifier` | StructuredClassifier | да | — |
| `TransitionKind` | TransitionKind | нет | 4 |

### Вложенные пакеты пакета StructuredClassifiers

| Имя пакета | Содержимое | Относится к разделу 11? |
|-----------|-----------|------------------------|
| `StateMachines` | ~13 классов: Vertex, StateMachine, Region, Transition, State, Pse... | — |
| `SimpleClassifiers` | Из раздела 10: DataType, Enumeration, PrimitiveType — НЕ включать... | — |
| `Packages` | Из раздела 12: Package, PackageMerge... | — |
| `Interactions` | Объекты взаимодействий: Interaction, Lifeline, Message и др. (раз... | — |
| `InformationFlows` | Потоки информации... | — |
| `Deployments` | Элементы развертывания... | — |
| `CommonStructure` | Базовые элементы общей структуры (разделы 7–8)... | — |
| `CommonBehavior` | Общие элементы поведения... | — |
| `Classification` | Классификаторы раздела 9 (Category, LiteralConstraint и др.)... | — |
| `Actions` | Действия activity diagrams (раздел 15–16)... | — |

## 4. Ассоциации (раздел 11.9)

Раздел 11.9 «Association Descriptions» содержит описания **35 ассоциаций** метамодели:

| № | Англ. имя | Подраздел | Контекст (содержит) |
|---|-----------|-----------|---------------------|
| 1 | `A_collaborationRole_collaboration` | 11.9.1 | Collaboration |
| 2 | `A_connectableElement_templateParameter_parameteredElement` | 11.9.2 | ConnectableElement |
| 3 | `A_contract_connector` | 11.9.3 | Connector |
| 4 | `A_definingEnd_connectorEnd` | 11.9.4 | ConnectorEnd |
| 5 | `A_endType_association` | 11.9.5 | Association |
| 6 | `A_end_connector` | 11.9.6 | Connector |
| 7 | `A_end_role` | 11.9.7 | ConnectorEnd |
| 8 | `A_extension_metaclass` | 11.9.8 | Extension |
| 9 | `A_memberEnd_association` | 11.9.9 | Property |
| 10 | `A_navigableOwnedEnd_association` | 11.9.10 | Association |
| 11 | `A_nestedClassifier_nestingClass` | 11.9.11 | Class |
| 12 | `A_ownedAttribute_class` | 11.9.12 | Class |
| 13 | `A_ownedAttribute_structuredClassifier` | 11.9.13 | StructuredClassifier |
| 14 | `A_ownedConnector_structuredClassifier` | 11.9.14 | StructuredClassifier |
| 15 | `A_ownedEnd_owningAssociation` | 11.9.15 | Association |
| 16 | `A_ownedOperation_class` | 11.9.16 | Class |
| 17 | `A_ownedPort_encapsulatedClassifier` | 11.9.17 | EncapsulatedClassifier |
| 18 | `A_ownedReception_class` | 11.9.18 | Class |
| 19 | `A_packagedElement_component` | 11.9.19 | Component |
| 20 | `A_partWithPort_connectorEnd` | 11.9.20 | ConnectorEnd |
| 21 | `A_part_structuredClassifier` | 11.9.21 | StructuredClassifier |
| 22 | `A_protocol_port` | 11.9.22 | Port |
| 23 | `A_provided_component` | 11.9.23 | Component |
| 24 | `A_provided_port` | 11.9.24 | Port |
| 25 | `A_realization_abstraction_component` | 11.9.25 | Component |
| 26 | `A_realizingClassifier_componentRealization` | 11.9.26 | ComponentRealization |
| 27 | `A_redefinedConnector_connector` | 11.9.27 | Connector |
| 28 | `A_redefinedPort_port` | 11.9.28 | Port |
| 29 | `A_required_component` | 11.9.29 | Component |
| 30 | `A_required_port` | 11.9.30 | Port |
| 31 | `A_roleBinding_collaborationUse` | 11.9.31 | CollaborationUse |
| 32 | `A_role_structuredClassifier` | 11.9.32 | StructuredClassifier |
| 33 | `A_superClass_class` | 11.9.33 | Class |
| 34 | `A_type_collaborationUse` | 11.9.34 | CollaborationUse |
| 35 | `A_type_connector` | 11.9.35 | Connector |

## 5. Рисунки раздела 11

Всего: **48** рисунков (Figure 11.1–11.54, нумерация содержит пропуски).

| № | Подпись | Печ. стр. |
|---|---------|-----------|
| 1 | Structured Classifiers | 181 |
| 2 | Parts and roles | 184 |
| 3 | Parts and roles with Ports | 184 |
| 4 | Alternative notations for connecting parts and roles with Ports | 185 |
| 5 | Associations compared with Connectors | 185 |
| 6 | "Star" Connector pattern | 186 |
| 7 | "Array" Connector pattern | 186 |
| 8 | An assembly Connector maps a simple Port of a Component to a matching Port of another Component | 187 |
| 9 | An n-ary Connector that assembles four simple Ports using channeled ball-and-socket notation | 187 |
| 10 | Encapsulated Classifiers | 188 |
| 11 | Port notation | 190 |
| 12 | Behavior Port notation | 190 |
| 13 | Port notation showing multiple provided Interfaces | 191 |
| 14 | Port examples | 191 |
| 15 | Classes | 192 |
| 16 | Class notation variants | 194 |
| 17 | Class notation: attributes and Operations grouped according to vi | 194 |
| 18 | Active Class | 194 |
| 19 | Connectors and Parts | 195 |
| 20 | Connectors and Parts in a structure diagram using multiplicities | 195 |
| 21 | An Instance of the Car Class | 195 |
| 22 | InstanceSpecification indicating a constructor | 196 |
| 23 | A constructor for the Car Class | 196 |
| 24 | Showing that the extended Class is a metaclass | 196 |
| 25 | Associations | 197 |
| 26 | Graphic notation indicating exactly one Association end owned by the Association | 200 |
| 27 | Binary and ternary Associations | 202 |
| 28 | Association ends with various adornments | 202 |
| 29 | Examples of navigable association-owned ends | 203 |
| 30 | Examples of class-owned ends | 204 |
| 31 | Example of attribute notation for navigable end owned by an end Class | 204 |
| 32 | Derived supersets (union) | 204 |
| 33 | Composite aggregation is depicted as a black diamond | 205 |
| 34 | Composite aggregation sharing a source segment | 205 |
| 35 | Example AssociationClass Job, defined between the two Classes Person and Company | 205 |
| 36 | Example AssociationClass using diamond symbol | 206 |
| 37 | Qualified associations | 206 |
| 38 | Components | 207 |
| 41 | Black box notation showing a listing of provided and required int | 210 |
| 42 | Optional “white-box” representation of a Component | 210 |
| 44 | A representation of the realization of a complex Component | 211 |
| 45 | An alternative nested representation of a complex Component | 211 |
| 46 | Example model of a Component, its provided and required Interfaces, and wiring | 211 |
| 47 | Internal structure of a Component | 212 |
| 48 | Delegation Connectors connect externally provided Interfaces to the parts that realize them | 212 |
| 49 | Collaborations | 213 |
| 50 | The internal structure of the Observer Collaboration | 215 |
| 51 | Alternative notation for the parts of the Observer Collaboration | 216 |
| 52 | The Sale Collaboration | 216 |
| 53 | The BrokeredSale Collaboration | 216 |
| 54 | A subset of the BrokeredSale Collaboration using «occurrence» and Dependency arrows | 217 |

## 6. Статистика

| Метрика | Значение |
|---------|----------|
| Классификаторы (основные классы/enum) | 15 |
| Вложенных enum-литералов (всего) | 15 |
|   ConnectorKind: 2 литералов | |
|   PseudostateKind: 9 литералов | |
|   TransitionKind: 4 литералов | |
| Ассоциации (11.9.X) | 35 |
| Рисунки | 48 |
| Подзаголовки "Attributes" в 11.8 | 5 |
| Подзаголовки "Operations" в 11.8 | 12 |
| Подзаголовки "Constraints" в 11.8 | 8 |
| Вложенных пакетов (XMI) | 10 |

## 7. Замечания и риски

### Особенности структуры раздела

1. **Огромный XMI-пакет**: `StructuredClassifiers` объединяет элементы из разделов 7, 9, 10, 11, 12, 15–17.
   При создании справочника нужно отфильтровать только те элементы, которые описываются в разделах 11.1–11.9 текста.

2. **Пакет StateMachines** — наиболее богатый подпакет (~13 классов). Все они относятся к разделу 11 и должны быть включены в справочник как часть структуры классификаторов, работающих с внутренними структурами.

3. **Пакет SimpleClassifiers** содержит DataType/Enumeration/PrimitiveType из раздела 10 — НЕ включать в содержимое разделов 11.8–11.9.

4. **Самый объёмный каталог**: 35 ассоциаций в 11.9 — больше, чем в любом другом разделе справочника метамодели.
   Многие (ownedAttribute, ownedOperation, nestedClassifier...) являются стандартными атрибутами метамодели.

### Риски

- **Перекрёстные ссылки**: элементы раздела 11 активно используются в других разделах (Component → раздел 19, Connector → Activity diagrams). Ссылки строить с учётом порядка создания страниц.

- **Нумерация рисунков в TOC**: некоторые подписи переносятся на несколько строк (Figure 11.8, 11.26, 11.35), что усложняет автоматический парсинг. Рекомендуется ручной контроль.

- **Малые классификаторы**: `ConnectableElementTemplateParameter` (11.8.9) и `ConnectorKind` (11.8.12) описаны 1–2 абзацами — рекомендуется объединить с родительскими разделами.

- **Enumeration PseudostateKind** имеет 9 литералов (initial, deepHistory, shallowHistory, join, fork, junction, choice, entryPoint, exitPoint, terminate), но некоторые могут описываться в контексте state machines (§13).