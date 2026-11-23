> **Метаинформация о черновике**
> - Подготовлено: 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия модели не фиксировались.
> - Исходная задача (промпт): составить черновик реестра раздела 11 Structured Classifiers спецификации OMG UML 2.5.1 (страницы 183–240) для будущего переноса в справочник: дерево подразделов, классификаторы и ассоциации из XMI, каталог рисунков, замечания; бюджет ≤200k токенов; источники — PDF `omg-uml-2.5.1-formal-17-12-05.pdf`, текстовый дамп `omg-uml-2.5.1-formal-17-12-05.txt`, XMI `UML-2.5.1.xmi` (пакет StructuredClassifiers); без выдумывания, только извлечение regex/grep/awk по нужным диапазонам.
> - Дата и характер проверки: 2025-11-22, сверка с текстом спецификации (regex по дампу страниц 183–240) и с XMI (пакет StructuredClassifiers); исправлены рисунки (48→54), добавлены Figure 39/40/43; обновлены замечания и статус рисков.
> - Состав черновика: конфигурация `sections.json`, дерево подразделов, таблицы классификаторов и ассоциаций с определениями из текста, каталог рисунков, замечания и риски, план иллюстраций, план межраздельных ссылок, рекомендации по применению скриптов пайплайна и модернизации.
> - Критерий адекватности для проверяющей модели: числа в сводке (15 классификаторов, 35 ассоциаций, 54 рисунка, 90 заголовков подразделов, 5 Attributes / 12 Operations / 8 Constraints) должны сходиться с XMI и текстом спецификации; при расхождениях смотри раздел «Замечания и риски».

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
    "figure_count": 54,
    "nested_packages": ["StateMachines", "SimpleClassifiers", "Packages", "Interactions", "InformationFlows", "Deployments", "CommonStructure", "CommonBehavior", "Classification", "Actions"],
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

Всего: **54** рисунка (Figure 11.1–11.54, все пронумерованы подряд).

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
| 39 | Example of an overview diagram showing Components and their general Dependencies | 209 |
| 40 | A Component with two provided and three required Interfaces | 209 |
| 41 | Black box notation showing a listing of provided and required interfaces | 210 |
| 43 | Explicit representation of provided and required Interfaces using Dependency notation | 210 |
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
| Рисунки | 54 |
| Подзаголовки "Attributes" в 11.8 | 5 |
| Подзаголовки "Operations" в 11.8 | 12 |
| Подзаголовки "Constraints" в 11.8 | 8 |
| Вложенных пакетов (XMI) | 10 |

## 7. Замечания и риски

### Особенности структуры раздела (проверено)

1. **Все 15 классификаторов** (11.8.1–11.8.15) присутствуют как прямые дети пакета `StructuredClassifiers` в XMI ✓

2. **Все 35 ассоциаций** (11.9.1–11.9.35) найдены в XMI, все являются прямыми детьми пакета ✓
   Однако пакет содержит **сотни** других ассоциаций из вложенных пакетов — при импорте нужно фильтровать по `11.9.`

3. **Все 54 рисунка** (Figure 11.1–11.54) присутствуют: TOC содержит только ~39 (пропускает Figure 11, 39–40), контентная область — все 54 подряд ✓

4. **Аномалия в структуре подразделов**:
   - `11.8.2 AssociationClass` НЕ имеет подраздела "Generalizations" (только Description, Diagrams, Constraints)
   - `11.8.9 ConnectableElementTemplateParameter` пропускает "Diagrams" (переход Description → Generalizations)

5. **StateMachines** — подпакет с ~13 классами (Vertex, StateMachine и др.). Все относятся к разделу 11.

6. **SimpleClassifiers** содержит DataType/Enumeration/PrimitiveType из раздела 10 — НЕ включать в справочник 11.8–11.9.

### Риски (актуализировано)

- **Ассоциации без концов в черновике**: текущий черновик перечисляет только имена ассоциаций. Для этапа 2 нужно извлечь `ownedEnd` (имя, тип, нижняя/верхняя кратность) для каждой из 35 ассоциаций из XMI.

- **Перекрёстные ссылки**: элементы раздела 11 активно используются в других разделах (Component → раздел 19, Connector → Activity diagrams). Ссылки строить с учётом порядка создания страниц.

- **Enumeration PseudostateKind** имеет 9 литералов (initial, deepHistory, shallowHistory, join, fork, junction, choice, entryPoint, exitPoint, terminate) — но часть литералов описывается в контексте state machines (§13), не §11.

## 8. План иллюстраций (из каталога рисунков 54 фигур)

| № | Стр. | Тип диаграммы | Сложность SVG | Приоритет | Заметка |
|---|------|---------------|---------------|-----------|---------|
| 1 | 181 | Композиционная (обзор пакета) | Высокая — много элементов, перекрёстные связи | Высший | Схема «что входит» в StructuredClassifiers |
| 2 | 184 | Нотация (прямоугольники частей/ролей) | Низкая | Высший | Базовая схема для понимания parts & roles |
| 3 | 184 | Нотация (Ports на частях) | Средняя — требует port notation с интерфейсами | Высший | Показывает связь Part ↔ Port |
| 4 | 185 | Варианты нотации (соединение Parts и Ports) | Низкая | Высший | Три альтернативы, нужно выбрать одну для справочника |
| 5 | 185 | Сравнение (Assocation vs Connector) | Средняя — две схемы в одной фигуре | Высший | Ключевая схема: показывает семантическую разницу |
| 6 | 186 | Шаблон Star (соединение N портов к одному узлу) | Средняя — радиальная компоновка, линии пересекаются | Средний | Пример топологии «звезда» для Connector |
| 7 | 186 | Шаблон Array (массив коннекторов) | Средняя — повторяющийся паттерн, много элементов | Средний | Альтернатива Star для параллельных связей |
| 8 | 187 | Пример assembly Connector между двумя Components | Высокая — содержит Port, Component и стрелку | Высший | Показывает делегирование от одного Interface к другому |
| 9 | 187 | n-арный channeled ball-and-socket Connector | Высокaя — 4-арное соединение с каналами, перекрёстные линии | Средний | Усложнённый паттерн: можно реализовать через SVG `<path>` |
| 10 | 188 | Композиционная (EncapsulatedClassifiers) | Средняя — порт-ориентированная нотация | Высший | Показывает Ports на Class, Component и др. |
| 11–14 | 190–191 | Нотация портов (Port notation, behavior Port, multiple interfaces, примеры) | Низкая/Средняя | Высокий | Базовая нотация — приоритет выше примеров Car |
| 15–21 | 192–195 | Классы и Connector/Parts для Car Class | Средняя (каждая по отдельности) | Средний | Примеры используют Car/Window/Axle/Wheel из разделов значений/ассоциаций |
| 22–24 | 196 | InstanceSpecification — конструкторы Class | Низкая | Средний | Показывают создание объектов через IS |
| 25, 27–38 | 197–207 | Ассоциации: двоичные, тернарные, маркировка концов, qualified associations, composite aggregation | Средняя (многие содержат multiple ends и стрелки) | Высший | **Критически важны для каталога метамодели** |
| 26 | 200 | Точечная нотация «один конец принадлежит ассоциации» | Низкая | Средний | Показывает dot-маркер — можно реализовать через SVG `<circle>` |
| 39–40 | 209 | Композиционная (Components + Dependencies) | Высокая — несколько Components, много Dependency стрелок | Средний | Примеры из разделов компонентов и зависимостей |
| 41–48 | 210–212 | White-box notation, реализация Component, делегирование | Высокaя — много интерфейсов (lollipop/cocktail), Delegating Connector arrows | Высший | **Самые сложные схемы раздела** — требуют точной геометрии портов и коннекторов |
| 49–54 | 213–217 | Collaborations (Observer, Sale, BrokeredSale) | Высокaя — нотация Collaboration (рамка с пунктиром), parts-roles, roleBinding | Высший | **Относятся к пакету Interactions/Actions из StateMachines** — переносить совместно |

### Рисунки, относящиеся к вложенным пакетам
| Рисунок | Вложенный пакет | Переносить с пакетом или с разделом 11? |
|---------|----------------|-----------------------------------------|
| 11.49–11.50 | Interactions + Collaborations (связь с CommonStructure) | С разделом 11 (описано в §11.7 Collaborations) |
| 11.52–11.54 | Actions + «occurrence» нотация (вложена в Sale Collaboration) | С разделом 11, но проверить элементы из CommonBehavior (§7) |
| 11.46–11.48 | Components + wiring через Dependencies (§7.7) | С разделом 11.6, но ссылки на §7.7 обязательны |

## 9. План межраздельных ссылок

Элементы раздела 11 активно ссылуются на другие разделы метамодели (наследование, типы, subsets).

| Элемент (§11) | Связанный элемент | Раздел справочника | Тип связи |
|---------------|-------------------|--------------------|-----------|
| Association (11.8.1) → Generalization: `Relationship` | Relationship | 9.1 Classifier | Обобщение (предок) |
| Association (11.8.1) → Generalization: `Classifier` | Classifier | 9.1 Classifier | Обобщение (предок) |
| Association {isDerived} : Boolean | ownedAttribute in Class | 11.8.3 | subsets / атрибут из предка |
| endType (Association) → Type | Type | 9.1 Classifier | тип атрибута из Classification |
| memberEnd (Association) → Property | Property | 9.5 Feature, 9.5.4 | subset: Namespace::member |
| Class {ownedAttribute} → Feature | Feature | 9.5 Feature | наследование от предка |
| Class {name} → NamedElement | NamedElement | 7.2 NamedElement | обобщение (предок) |
| Class {visibility} → VisibilityKind | VisibilityKind | 9.3 Property | тип из Classification |
| CollaborationUse {classifier} → Classifier | Classifier | 9.1 Classifier | attribute type |
| CollaborationUse {type} → Collaboration | Collaboration (§11.7) | раздел 11.7 | внутренняя ссылка |
| Component {packagedElement} → PackageableElement | PackageableElement | Classification (раздел 9) | subsets / наследование |
| ComponentRealization {abstraction} → Abstraction | Abstraction | 7.7 Dependencies | тип атрибута из CommonStructure |
| ComponentRealization {realizingClassifier} → Classifier | Classifier | 9.1 Classifier | обобщение (предок) |
| ConnectableElement {end} → Property | Property | 9.5 Feature | subsets / конец ассоциации |
| ConnectorEnd {type} → ConnectableElement | ConnectableElement (§11.8.8) | раздел 11.8.8 | внутренний тип |
| ConnectorKind (Enumeration, literal: assembly/delegation) | EnumerationLiteral | Classification (раздел 9) | тип из пакетов SimpleClassifiers |
| Port {type} → Interface | Interface | 10.6 Interfaces | тип атрибута из SimpleClassifiers |
| EncapsulatedClassifier {ownedPort} → Property | Property | 9.5 Feature | subsets / атрибут |
| StructuredClassifier {ownedAttribute} → Property | Property | 9.5 Feature | subset: ownedEnd (в XMI) |
| StateMachines::Vertex, StateMachine, Transition и др. | Classifier | 9.1 Classifier | обобщение от Classification (раздел 9) |
| PseudostateKind literal names (initial, deepHistory...) | EnumerationLiteral | SimpleClassifiers (§10.4) | тип из пакета SimpleClassifiers |

### Отмечу: какие пакеты XMI несут свои типы
- **SimpleClassifiers** (§10): Interface, DataType, Enumeration, PrimitiveType — используются как `type` для атрибутов Port, Component и др.
- **Classification** (§9): Classifier, Type, Feature, Property, NamedElement — базовые предки для всех 15 классификаторов.
- **CommonStructure** (§7–8): Relationship, Dependency, Element — предки Association.
- **StateMachines**: Vertex, StateMachine → StateMachines, но в §11 они являются наследниками Classifier (через SimpleClassifiers).

## 10. Рекомендации по применению существующих скриптов

### Подготовка конфигурации (sections.json)
Добавить объект для `clause: 11`:
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
    "figure_count": 54,
    "source": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf"
}
```

### Этап 1 — prepare_section.py --clause 11
- **Работает без изменений**: извлекает заголовки regex'ом, рисунки, XMI-ссылки из пакета.
- **Корректировка**: добавить `--include_nested` для вложенных пакетов (StateMachines, ~13 классов; SimpleClassifiers — исключить). Без этого скрипт пропустит классы наследования от StructuredClassifier.

### Этап 2 — scaffold_section.py --clause 11
- **Работает без изменений**: создаёт файлы для 15 классификаторов и 35 ассоциаций из реестра.
- **Корректировка**: в `ownedEnd`-полях ассоциаций оставить пустыми (нет русских описаний) — как сделано в разделе 9.

### Этап 3 — sync_xmi_properties.py --clause 11
- **Нужна корректировка**: добавить фильтрацию по пакету `StructuredClassifiers` (не только `xmi:id="X"`). Текущий скрипт ищет элементы по `packagedElement` в корне XMI, но здесь нужно рекурсивное сканирование пакета.
- **Дополнительно**: включить `StateMachines` (~13 классов: Vertex, StateMachine, Region, Transition, State, Pseudostate, ConnectionPointReference, FinalState, ProtocolStateMachine, ProtocolTransition, ProtocolConformance) как наследников пакетного уровня.

### Этап 4 — build_site.py --clause 11
- **Работает без изменений**: строит HTML из data/content файлов + навигацию + поисковый индекс.

### Этап 5 — генерация SVG-диаграмм
| Скрипт | Применяется к разделу 11? | Особенности |
|--------|--------------------------|-------------|
| `generate_common_structure_svg.py` | Нет (для §7–8) | — |
| `generate_classification_svg.py` | **Да** (большая часть) | Рисунки 1–37 относятся к классификаторам/ассоциациям (аналогично разделу 9); нужен `--clause 11`. Но: рисунки 6, 8–9 — паттерны коннекторов (топология Star/Array) — требуют нового layout-алгоритма |
| SVG для StateMachines (~13 классов) | **Да**, но в отдельном builder'е | Рисунок наследования Vertex→StateMachine и т.д. — аналогично 9.2, но с глубже вложенными предками |

### Этап 6 — validate_site.py --clause 11
- **Работает без изменений**: проверяет ссылки, SVG-геометрию, текст.
- **Дополнительно**: проверить, что все Figure 11.x (54 штуки) сгенерированы и не имеют наложений Pillow-метрик.

## 11. Рекомендации по модернизации скриптов для раздела 11

### 1. Расширить sync_xmi_properties.py: поддержка вложенных пакетов XMI
**Проблема**: текущий скрипт находит классы/ассоциации только в корневом пакете или одном уровне `packagedElement`. Пакет `StructuredClassifiers` содержит 10 вложенных пакетов, из которых `StateMachines` имеет ~13 классов, каждый со своими атрибутами.
**Предложение**: добавить параметр `--recursive-packages`, который рекурсивно обходит XMI-иерархию и собирает все классы/ассоциации из пакета и всех его вложенных пакетов (с пометкой `nested_package` для фильтрации).

### 2. Новый builder в generate_classification_svg.py: «Topologies and patterns»
**Проблема**: рисунки 6, 7, 8, 9 — паттерны коннекторов (Star, Array, assembly, ball-and-socket) — не являются классическими диаграммами наследования. Текущий builder ориентирован на деревья обобщений (root → leaf).
**Предложение**: создать `builder_connector_patterns.py` с алгоритмом автоматической компоновки графов связей: узлы = классы, рёбра = коннекторы, топология расчитывается по параметру шаблона (радиальная для Star, сетчатая для Array, chain для n-ary).

### 3. Обработка множественного наследования в диаграммах наследования
**Проблема**: элементы из пакета StructuredClassifiers имеют сложное множественное наследование: `Association → Relationship + Classifier`, `ConnectableElement → NamedElement + Element`, `Port → Feature + Type` (через EncapsulatedClassifier), и т.д. Текущий генератор диаграмм наследования ориентирован на одноуровневые деревья.
**Предложение**: добавить параметр `--multiple-inheritance=true` в builder, который строит граф с несколькими предками (DAG layout) вместо дерева — алгоритм Sugiyama или layering.

### 4. Поддержка `subsets`-ссылок из XMI-конец ассоциаций
**Проблема**: при извлечении свойств классов через XMI многие атрибуты указывают `subsets Feature::featuringClassifier` и т.д. — ссылки на другие пакеты. Текущий скрипт пишет их как текст без обработки ссылок.
**Предложение**: добавить парсер OCL-ограничений `subsets`/`redefines` в `sync_xmi_properties.py`, который извлекает имя связанного атрибута и генерирует markdown-ссылку `[имя](../path/to/element)` вместо текста.

### 5. Фильтрация «лишних» ассоциаций при импорте из пакетов
**Проблема**: пакеты StateMachines, CommonBehavior и др. несут сотни собственных ассоциаций (A_action_actionExecutionSpecification, A_classifier_createObjectAction...), которые НЕ относятся к содержимому §11.8–11.9.
**Предложение**: добавить whitelist в `sections.json` вида `association_whitelist: ["A_collaborationRole_collaboration", ...]`, чтобы sync_xmi_properties.py применял фильтрацию при записи файлов, а не на этапе ручного аудита.

### 6. Поддержка «компонентных» диаграмм (Components/ports/interfaces)
**Проблема**: рисунки 41–48 — это diagram components с lollipop interfaces (provides), sockets (requires), realization arrows и Delegating Connectors. Текущий SVG-движок строит прямоугольники классов, но не поддерживает interface symbols.
**Предложение**: расширить SVG-шаблон для `Component` с поддержкой `provided_interface()` (полукруг справа), `required_interface()` (полукруг слева) и линий делегирования между ними — аналогично нотации в спецификации §11.6.4.