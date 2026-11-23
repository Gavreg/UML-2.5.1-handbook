# Реестр раздела 20 InformationFlows (Потоки информации)

Черновик, аналог этапа 1 (inventory). Источник: OMG UML 2.5.1 formal/17-12-05.

---

## Конфигурация для sections.json

```json
"20": {
    "title": "InformationFlows",
    "title_ru": "Потоки информации",
    "slug": "information-flows",
    "package": "InformationFlows",
    "first_page": 669,
    "last_page": 676,
    "classifier_catalog": "20.2 Classifier Descriptions",
    "association_catalog": "20.3 Association Descriptions",
    "source": {
        "pdf": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf",
        "xmi": "site/docs/UML-2.5.1.xmi",
        "text_dump": "site/docs/omg-uml-2.5.1-formal-17-12-05.txt"
    },
    "diagram_catalog": {
        "folder": "site/assets/diagrams/",
        "figure_prefix": "Figure 20."
    }
}
```

---

## Дерево подразделов

| № | Заголовок | Печ. стр. |
|---|-----------|-----------|
| 20 | InformationFlows | 669 |
| 20.1 | Information Flows | 669 |
| 20.1.1 | Summary | 669 |
| 20.1.2 | Abstract Syntax | 669 |
| 20.1.3 | Semantics | 669 |
| 20.1.4 | Notation | 670 |
| 20.1.5 | Examples | 671 |
| 20.2 | Classifier Descriptions | 672 |
| 20.2.1 | InformationFlow [Class] | 672 |
| 20.2.2 | InformationItem [Class] | 673 |
| 20.3 | Association Descriptions | 674 |
| 20.3.1 | A_conveyed_conveyingFlow [Association] | 674 |
| 20.3.2 | A_informationSource_informationFlow [Association] | 674 |
| 20.3.3 | A_informationTarget_informationFlow [Association] | 675 |
| 20.3.4 | A_realization_abstraction_flow [Association] | 675 |
| 20.3.5 | A_realizingActivityEdge_informationFlow [Association] | 675 |
| 20.3.6 | A_realizingConnector_informationFlow [Association] | 675 |
| 20.3.7 | A_realizingMessage_informationFlow [Association] | 675 |
| 20.3.8 | A_represented_representation [Association] | 676 |

**Итого подразделов: 19** (включая главный раздел 20, подразделы первого/второго/третьего уровней)

---

## Классификаторы (пакет InformationFlows из XMI)

| # | Англ. имя | Подраздел | Определение (англ.) | Пояснение (рус.) | Родители (из спецификации) | Атриб. | Опер. | Правила |
|---|-----------|-----------|---------------------|------------------|---------------------------|--------|-------|---------|
| 1 | **InformationFlow** | 20.2.1 | InformationFlows describe circulation of information through a system in a general manner. They do not specify the nature of the information, mechanisms by which it is conveyed, sequences of exchange or any control conditions. | Потоки информации описывают циркуляцию информации через систему в общем виде, не специфицируя её природу, механизмы передачи или последовательности обмена. | DirectedRelationship, PackageableElement | 7 | 0 | 3 |
| 2 | **InformationItem** | 20.2.2 | InformationItems represent many kinds of information that can flow from sources to targets in very abstract ways. They represent the kinds of information that may move within a system, but do not elaborate details of the transferred information. | Информационные элементы представляют различные виды информации, которые могут перемещаться от источников к целям на самых абстрактных уровнях, не детализируя переданную информацию. | Classifier | 1 | 0 | 3 |

**Итого классификаторов: 2** (2 regular class, нет Enumeration/Signal)

### Атрибуты InformationFlow (7 штук, из XMI):

| # | Имя атрибута | Тип | Кратность | Ассоциация | Описание |
|---|-------------|-----|-----------|------------|----------|
| 1 | conveyed | Classifier | 0..* | A_conveyed_conveyingFlow | Specifies the information items that may circulate on this information flow. |
| 2 | informationSource | NamedElement | 0..* | A_informationSource_informationFlow | Defines from which source the conveyed InformationItems are initiated. (subsets DirectedRelationship-source) |
| 3 | informationTarget | NamedElement | 0..* | A_informationTarget_informationFlow | Defines to which target the conveyed InformationItems are directed. (subsets DirectedRelationship-target) |
| 4 | realization | Relationship | 0..* | A_realization_abstraction_flow | Determines which Relationship will realize the specified flow. |
| 5 | realizingActivityEdge | ActivityEdge | 0..* | A_realizingActivityEdge_informationFlow | Determines which ActivityEdges will realize the specified flow. |
| 6 | realizingConnector | Connector | 0..* | A_realizingConnector_informationFlow | Determines which Connectors will realize the specified flow. |
| 7 | realizingMessage | Message | 0..* | A_realizingMessage_informationFlow | Determines which Messages will realize the specified flow. |

### Атрибуты InformationItem (1 атрибут, из XMI):

| # | Имя атрибута | Тип | Кратность | Ассоциация | Описание |
|---|-------------|-----|-----------|------------|----------|
| 1 | represented | Classifier | 0..* | A_represented_representation | Determines the classifiers that will specify the structure and nature of the information. An information item represents all its represented classifiers. |

### Ограничения (constraints) из XMI — всего 6:

#### InformationFlow (3 правила):

| # | Имя правила | Текст (англ.) |
|---|-----------|---------------|
| 1 | must_conform | The sources and targets of the information flow must conform to the sources and targets or conversely the targets and sources of the realization relationships. |
| 2 | sources_and_targets_kind | The sources and targets of the information flow can only be one of the following kind: Actor, Node, UseCase, Artifact, Class, Component, Port, Property, Interface, Package, ActivityNode, ActivityPartition, Behavior and InstanceSpecification (except when its classifier is a Relationship). OCL: `(self.informationSource->forAll(sis | oclIsKindOf(Actor) or oclIsKindOf(Node) or ...)) and (self.informationTarget->forAll(sit | same types))` |
| 3 | convey_classifiers | An information flow can only convey classifiers that are allowed to represent an information item. OCL: `self.conveyed->forAll(oclIsKindOf(Class) or oclIsKindOf(Interface) or oclIsKindOf(InformationItem) or oclIsKindOf(Signal) or oclIsKindOf(Component))` |

#### InformationItem (3 правила):

| # | Имя правила | Текст (англ.) |
|---|-----------|---------------|
| 1 | sources_and_targets | The sources and targets of an information item (its related information flows) must designate subsets of the sources and targets of the representation information item, if any. |
| 2 | has_no | An informationItem has no feature, no generalization, and no associations. |
| 3 | not_instantiable | It is not instantiable. |

---

## Ассоциации (пакет InformationFlows из XMI)

### Таблица концов ассоциаций (ownedEnd):

| # | Англ. имя ассоциации | ownedEnd name | Тип | Кратность | subsets |
|---|----------------------|---------------|-----|-----------|---------|
| 1 | **A_conveyed_conveyingFlow** | conveyingFlow | InformationFlow [0..*] | — | — |
| 2 | **A_informationSource_informationFlow** | informationFlow | InformationFlow [0..*] | subsets A_source_directedRelationship::directedRelationship | {subsets ...} |
| 3 | **A_informationTarget_informationFlow** | informationFlow | InformationFlow [0..*] | subsets A_target_directedRelationship::directedRelationship | {subsets ...} |
| 4 | **A_realization_abstraction_flow** | abstraction | InformationFlow [0..*] | — | — |
| 5 | **A_realizingActivityEdge_informationFlow** | informationFlow | InformationFlow [0..*] | — | — |
| 6 | **A_realizingConnector_informationFlow** | informationFlow | InformationFlow [0..*] | — | — |
| 7 | **A_realizingMessage_informationFlow** | informationFlow | InformationFlow [0..*] | — | — |
| 8 | **A_represented_representation** | representation | InformationItem [0..*] | — | — |

### Полная таблица концов всех ассоциаций (включая memberEnd из ownedAttribute):

| # | Ассоциация | Конец 1 (тип/кратность) | Конец 2 (тип/кратность) |
|---|-----------|------------------------|------------------------|
| 1 | A_conveyed_conveyingFlow | conveyed : Classifier [0..*] (InformationFlow-ownedAttribute) | conveyingFlow : InformationFlow [0..*] (новое ownedEnd) |
| 2 | A_informationSource_informationFlow | informationSource : NamedElement [0..*] (InformationFlow-attr, subsets source) | informationFlow : InformationFlow [0..*] (новое ownedEnd) |
| 3 | A_informationTarget_informationFlow | informationTarget : NamedElement [0..*] (InformationFlow-attr, subsets target) | informationFlow : InformationFlow [0..*] (новое ownedEnd) |
| 4 | A_realization_abstraction_flow | realization : Relationship [0..*] (InformationFlow-attr) | abstraction : InformationFlow [0..*] (новое ownedEnd — **само-рекурсивная!**) |
| 5 | A_realizingActivityEdge_informationFlow | realizingActivityEdge : ActivityEdge [0..*] (InformationFlow-attr) | informationFlow : InformationFlow [0..*] (новое ownedEnd) |
| 6 | A_realizingConnector_informationFlow | realizingConnector : Connector [0..*] (InformationFlow-attr) | informationFlow : InformationFlow [0..*] (новое ownedEnd) |
| 7 | A_realizingMessage_informationFlow | realizingMessage : Message [0..*] (InformationFlow-attr) | informationFlow : InformationFlow [0..*] (новое ownedEnd) |
| 8 | A_represented_representation | represented : Classifier [0..*] (InformationItem-attr) | representation : InformationItem [0..*] (новое ownedEnd — **само-рекурсивная!**) |

**Итого ассоциаций: 8** (все в пакете InformationFlows)

---

## Рисунки (Figures)

Из содержимого раздела (PDF страницы 711–718 = печатные 669–676):

| № | Подпись | Печ. стр. | Содержание |
|---|---------|-----------|------------|
| Figure 20.1 | Information Flows | 669 | Диаграмма абстрактного синтаксиса: Classifier, DirectedRelationship, Relationship → InformationFlow; Classifier → InformationItem; NamedElement, Connector, ActivityEdge, Message. Все мультипликаторы на диаграмме — `*` (без нижнего ограничения). В XMI все ownedAttribute по умолчанию имеют lowerBound=0 (т.е. 0..*). |
| Figure 20.2 | Example of InformationFlows conveying InformationItems | 669 | Пример: продукты и зарплаты (InformationItems) текут от компании к клиентам и сотрудникам по двум InformationFlows. Каналы передачи не показаны. |
| Figure 20.3 | Information Item represented as a classifier | 669 | Wage InformationItem представлен независимо от любого InformationFlow как классификатор (прямоугольник с треугольником). |
| Figure 20.4 | Examples of «representation» notation | 669 | Примеры нотации представления: travel document -> passports + plane tickets; Wage -> Salary + Bonus. Пунктирные стрелки <<representation>>. |
| Figure 20.5 | InformationItems attached to Connectors | 669 | Информационные элементы украшают Connector между m1:myC1 и m2:myC2. Чёрные треугольники указывают направление потока. |
| Figure 20.6 | InformationItems attached to Associations | 670 | product и wage прикреплены к ассоциациям, реализующим каналы передачи их InformationFlows. Треугольники указывают направление. |

**Итого рисунков: 6** (Figure 20.1–20.6)

> **Примечание по TOC:** В оглавлении PDF Figure 20.1 указан на стр. 667, но фактическое содержание раздела (стр. 669+) показывает, что все 6 рисунков расположены внутри содержания раздела на страницах 669–670 (печатная нумерация). TOC может иметь опечатку для Figure 20.1.

---

## Иерархия наследования (из XMI)

```
                        ┌──────────┐         ┌─────────────────┐
                        │ Classifier│         │ DirectedRel.    │ (из пакета CommonStructure)
                        └─────┬─────┘         └────────┬────────┘
                              │ generalization          │ generalization
                    ┌─────────┴─────────┐     ┌─────────┴─────────┐
                    │                   │     │                   │
              ┌─────▼──────┐   ┌────────▼─────────┐    ┌────────▼─────────┐
              │Information│   │ InformationItem  │    │PackageableElement│
              │  Flow     │   │                  │    │                  │
              └─────┬─────┘   └────────┬─────────┘    └────────┬─────────┘
                    │                 |                          |
        ┌───────────┼─────────────────┤                    + source : NamedElement [1..*]
        │           │                 │                    + target : NamedElement [1..*]
 ┌──────▼──────┐  ┌─▼────────┐  ┌─────▼──────┐
 │ DirectedRel.│  │Packageable│  │ Classifier │ (parent)
 │ elation     │  │ Element   │  │            │
 └─────────────┘  └───────────┘  └────────────┘

Родители InformationItem: Classifier (один родитель, из пакета Classification)
Родители InformationFlow: DirectedRelationship + PackageableElement (два родителя = множественное наследование)
Направление обобщения: потомок → предок (как требует UML-нотация).
```

---

## Статистика XMI (пакет InformationFlows)

| Категория | Количество |
|-----------|------------|
| Классы (Class/Enumeration/Signal) | 2 |
| ownedAttribute (всего в пакете) | 8 |
| ownedOperation (всего в пакете) | 0 |
| ownedRule (всего в пакете) | 6 |
| Association | 8 |
| ownedEnd (в пакетах ассоциаций) | 8 |

> **Примечание по подсчётам:** ownedAttribute = 8 включает 7 атрибутов InformationFlow + 1 атрибут InformationItem. ownedEnd = 8 — по одному новому ownedEnd на каждую из 8 ассоциаций. ownedOperation = 0: ни один элемент пакета не содержит операций. ownedRule = 6: по 3 правила для каждого классификатора.

---

## Замечания и риски

### 1. Очень короткий раздел
Раздел 20 — один из самых коротких в UML 2.5.1: всего **8 страниц** (669–676), **2 классификатора** и **8 ассоциаций**. Это делает его относительно простым для переноса, но требует внимания к деталям семантики.

### 2. Все концы ассоциаций — InformationFlow или InformationItem
Необычность: все 8 ассоциаций в пакете имеют оба конца одного типа (InformationFlow ↔ InformationFlow или InformationItem ↔ InformationItem). Это означает диаграмму наследования с **само-рекурсивными связями** — на SVG-диаграммах это потребует визуального решения для циклических связей.

### 3. Само-рекурсивные ассоциации (2 штуки)
| Ассоциация | Тип концов | Особенность |
|-----------|------------|-------------|
| A_realization_abstraction_flow | InformationFlow ↔ InformationFlow | Оба конца одного типа; абстракция может реализовывать саму себя (теоретически). Для диаграммы: петля от класса к себе. В XMI: `abstraction` имеет `lowerBound=0`, т.е. 0..*. |
| A_represented_representation | InformationItem ↔ InformationItem | Информационный элемент может представлять другие информационные элементы. Иерархическая декомпозиция. Оба конца [0..*]. |

**Все 8 ассоциаций пакета имеют мультипликатор `0..*` на обоих концах.** В XMI ни один ownedEnd не имеет явного lowerBound (UML-дефолт = 0).

### 4. Все ассоциации используют memberEnd + ownedEnd
Каждая ассоциация в XMI имеет:
- Один **memberEnd**, ссылающийся на существующий `ownedAttribute` класса (InformationFlow или InformationItem)
- Один **ownedEnd** — новый Property, определяющий обратную сторону связи

Это означает, что при генерации страниц для ассоциаций нужно собирать данные из двух разных мест XMI.

### 5. Наследование от DirectedRelationship и PackageableElement
`InformationFlow` наследуется от **DirectedRelationship** (пакет CommonStructure), что даёт ему автоматические атрибуты `source` и `target` типа `NamedElement [1..*]`. Его собственные атрибуты `informationSource` и `informationTarget` **подсетеют** (subsets) эти унаследованные атрибуты:
- `informationSource` subsets `DirectedRelationship::source`
- `informationTarget` subsets `DirectedRelationship::target`

На странице класса нужно показывать:
- Обычные ownedAttribute (7 штук, все 0..*)
- Унаследованные source/target от DirectedRelationship (обязательные атрибуты базового класса)
- `PackageableElement` — второй родитель (из пакета Packages), но без дополнительных атрибутов в наследовании.

### 6. Информация о пакетах-импортах
Пакет InformationFlows импортирует **7 пакетов**: UseCases, Deployments, StructuredClassifiers, Classification, SimpleClassifiers, Packages, Activities. Многие типы концов (Actor, Node, Artifact, Component, Port и т.д.) находятся в этих пакетах — при написании описаний нужно ссылаться на соответствующие разделы.

### 7. Constraint с OCL — сложные выражения
Три из шести правил содержат **OCL-спецификации**. Например:
- `sources_and_targets_kind` проверяет, что source/target принадлежит к одному из 13 типов (Actor, Node, UseCase, ...). Это важное ограничение для валидации моделей.
- `convey_classifiers` ограничивает conveyed классификаторы: только Class, Interface, InformationItem, Signal, Component.

### 8. Диаграмма наследования сложная
InformationFlow имеет **множественное наследование** (DirectedRelationship + PackageableElement). На SVG-диаграмме это потребует показать две ветви от разных предков к одному потомку. Информационные элементы — прямое наследование от Classifier, но с важным ограничением: они не могут быть инстанциированы (`isAbstract`).

### 9. Риски при генерации SVG диаграмм
- **Figure 20.1** (абстрактный синтаксис): самый большой рисунок с 9 классами и множеством связей. Все мультипликаторы на диаграмме — `*`. Может потребовать горизонтальной прокрутки или адаптивной ширины. Классификаторы InformationFlow и InformationItem должны быть кликабельными ссылками на соответствующие страницы.
- **Figure 20.2–20.6**: примеры использования — требуют текстовых подписей для InformationItem на диаграммах, что добавляет сложность в позиционирование. Нужно проверять пересечения текста (scripts/check_svg_overlaps.py).

### 10. Нумерация страниц в TOC
В оглавлении PDF Figure 20.1 указан как страница 667, но он фактически содержится в разделе на странице 669. TOC-ссылка на рисунки может быть неточной — при генерации каталога диаграмм использовать фактическое содержимое, а не TOC.

---

## Итого по разделу

| Метрика | Значение |
|---------|----------|
| Диапазон печатных страниц | 669–676 (8 страниц) |
| PDF-страницы (0-based) | 711–718 |
| Количество подразделов | 19 (включая вложенные) |
| Классификаторы | 2 |
| Атрибуты классификаторов | 8 (7 + 1) |
| Ассоциации | 8 |
| ownedEnd (обратные стороны) | 8 |
| Ограничения (ownedRule) | 6 |
| Операции | 0 |
| Перечисления / Signals | 0 |
| Рисунки | 6 (Figure 20.1–20.6) |
| Абстрактные классы | 0 (XMI: ни один класс не имеет `isAbstract="true"`; InformationItem семантически абстрактен через constraint `not_instantiable` с OCL `isAbstract`) |
| Множественное наследование | Да (InformationFlow -> DirectedRelationship + PackageableElement) |
| Само-рекурсивные ассоциации | 2 (A_realization_abstraction_flow, A_represented_representation) |

---

*Черновик создан: раздел 20 InformationFlows спецификации OMG UML 2.5.1.*  
*Следующие шаги: этап 2 (scaffold) — создание русского контента для каждого классификатора; этап 3 (XMI sync); этапы 4–6 (site build, SVG diagrams, validation).*
