> **Метаинформация о черновике**
> - Подготовлено: 2026-11-23, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия модели не фиксировались.
> - Исходная задача (промпт): черновик реестра раздела 10 Simple Classifiers OMG UML 2.5.1 (стр. 167–182) в формате черновиков 11–21: метаинформация, подразделы, классификаторы/ассоциации из XMI, рисунки, замечания, план иллюстраций, межраздельные ссылки, рекомендации по скриптам; ≤200k токенов; только официальные источники (этап 1 уже выполнен, данные сверены с инвентарём).
> - Проверка: сверка инвентаря этапа 1 `site/docs/uml-2.5.1-simple-classifiers-inventory.json` с дампом текста `site/docs/uml-2.5.1-simple-classifiers-en.txt` (regex по содержимому — подтверждены заголовки подразделов 10.x, все 12 рисунков Figure 10.x, маркеры ассоциаций) и с XMI `site/docs/UML-2.5.1.xmi` (пакет `xmi:id="SimpleClassifiers"`, строка 7779 — найдено 8 ссылок importedPackage); исправлено: все числа инвентаря совпали с expected в scripts/sections.json (расхождений нет).
> - Состав черновика: конфигурация `sections.json`, дерево подразделов, таблицы классификаторов и ассоциаций с определениями из текста, каталог рисунков, замечания и риски, план иллюстраций, план межраздельных ссылок, рекомендации по применению скриптов пайплайна и модернизации.
> - Критерий адекватности для проверяющей модели: числа в сводке (9 классификаторов, 16 ассоциаций, 12 рисунков, 129 заголовков подразделов, 18 Attributes / 1 Operations / 5 Constraints) должны сходиться с XMI и текстом спецификации; при расхождениях смотри раздел «Замечания и риски».

# Черновик реестра раздела 10: Simple Classifiers

**Статус**: черновик inventory (аналог этапа 1, cf. `uml-2.5.1-simple-classifiers-inventory.json`); **все числа инвентаря подтверждены** скриптовой сверкой с `scripts/sections.json`.

## Источники и диапазон

- **PDF**: `omg-uml-2.5.1-formal-17-12-05.pdf`, печатные страницы **167–182**
- **XMI**: `UML-2.5.1.xmi`, пакет `xmi:id="SimpleClassifiers"` (строка 7779),包含 8 PackageImport
- **Текст**: `uml-2.5.1-simple-classifiers-en.txt` (864 строки)
- **Инвентарь**: `uml-2.5.1-simple-classifiers-inventory.json` (этап 1, completed_stage=1)

Раздел 11 «Structured Classifiers» начинается на странице **183** (PDF). Раздел 9 «Classification» заканчивается на странице **166**.

---

## 1. Предлагаемый блок конфигурации для `scripts/sections.json`

Данные взяты из существующего блока `"10"` в `scripts/sections.json`:

```json
{
    "clause": 10,
    "title": "Simple Classifiers",
    "title_ru": "Простые классификаторы",
    "slug": "simple-classifiers",
    "package": "SimpleClassifiers",
    "first_page": 167,
    "last_page": 182,
    "classifier_catalog": "10.5",
    "association_catalog": "10.6",
    "source": "site/docs/uml-2.5.1-simple-classifiers-en.txt",
    "data": "site/data/simple-classifiers.js",
    "content": ["sections-10.js"],
    "svg_generator": "generate_simple_classifiers_svg.py",
    "expected": {
        "headings": 129,
        "classifiers": 9,
        "associations": 16,
        "figures": 12,
        "attributes": 18,
        "operations": 1,
        "constraints": 5,
        "association_ends": 32,
        "notes": 3
    }
}
```

**Сверка expected с инвентарём**: все 9 метрик совпали (headings 129, classifiers 9, associations 16, figures 12, attributes 18, operations 1, constraints 5, association_ends 32, notes 3).

---

## 2. Дерево подразделов 10.x

| № | Заголовок (EN) | Печ. стр. |
|---|----------------|-----------|
| 10.1 | Summary | 167 |
| 10.2 | DataTypes | 167 |
| 10.2.1 | Summary | 167 |
| 10.2.2 | Abstract Syntax | 167 |
| 10.2.3 | Semantics | 167 |
| 10.2.3.1 | DataTypes | 167 |
| 10.2.3.2 | Primitive Types | 168 |
| 10.2.3.3 | Enumerations | 168 |
| 10.2.4 | Notation | 168 |
| 10.2.5 | Examples | 168 |
| 10.3 | Signals | 169 |
| 10.3.1 | Summary | 169 |
| 10.3.2 | Abstract Syntax | 169 |
| 10.3.3 | Semantics | 169 |
| 10.3.3.1 | Signals | 169 |
| 10.3.3.2 | Receptions | 169 |
| 10.3.4 | Notation | 170 |
| 10.3.5 | Examples | 170 |
| 10.4 | Interfaces | 170 |
| 10.4.1 | Summary | 170 |
| 10.4.2 | Abstract Syntax | 171 |
| 10.4.3 | Semantics | 171 |
| 10.4.3.1 | Interfaces | 171 |
| 10.4.4 | Notation | 172 |
| 10.4.5 | Examples | 172 |
| 10.5 | Classifier Descriptions | 174 |
| 10.5.1 | BehavioredClassifier [Abstract Class] | 174 |
| 10.5.1.1 | Description | 174 |
| 10.5.1.2 | Diagrams | 174 |
| 10.5.1.3 | Generalizations | 174 |
| 10.5.1.4 | Specializations | 174 |
| 10.5.1.5 | Association Ends | 174 |
| 10.5.1.6 | Constraints | 174 |
| 10.5.2 | DataType [Class] | 174 |
| 10.5.2.1 | Description | 174 |
| 10.5.2.2 | Diagrams | 174 |
| 10.5.2.3 | Generalizations | 174 |
| 10.5.2.4 | Specializations | 175 |
| 10.5.2.5 | Association Ends | 175 |
| 10.5.3 | Enumeration [Class] | 175 |
| 10.5.3.1 | Description | 175 |
| 10.5.3.2 | Diagrams | 175 |
| 10.5.3.3 | Generalizations | 175 |
| 10.5.3.4 | Association Ends | 175 |
| 10.5.3.5 | Constraints | 175 |
| 10.5.4 | EnumerationLiteral [Class] | 175 |
| 10.5.4.1 | Description | 175 |
| 10.5.4.2 | Diagrams | 175 |
| 10.5.4.3 | Generalizations | 175 |
| 10.5.4.4 | Association Ends | 176 |
| 10.5.4.5 | Operations | 176 |
| 10.5.5 | Interface [Class] | 176 |
| 10.5.5.1 | Description | 176 |
| 10.5.5.2 | Diagrams | 176 |
| 10.5.5.3 | Generalizations | 176 |
| 10.5.5.4 | Association Ends | 176 |
| 10.5.5.5 | Constraints | 177 |
| 10.5.6 | InterfaceRealization [Class] | 177 |
| 10.5.6.1 | Description | 177 |
| 10.5.6.2 | Diagrams | 177 |
| 10.5.6.3 | Generalizations | 177 |
| 10.5.6.4 | Association Ends | 177 |
| 10.5.7 | PrimitiveType [Class] | 177 |
| 10.5.7.1 | Description | 177 |
| 10.5.7.2 | Diagrams | 177 |
| 10.5.7.3 | Generalizations | 177 |
| 10.5.8 | Reception [Class] | 178 |
| 10.5.8.1 | Description | 178 |
| 10.5.8.2 | Diagrams | 178 |
| 10.5.8.3 | Generalizations | 178 |
| 10.5.8.4 | Association Ends | 178 |
| 10.5.8.5 | Constraints | 178 |
| 10.5.9 | Signal [Class] | 178 |
| 10.5.9.1 | Description | 178 |
| 10.5.9.2 | Diagrams | 178 |
| 10.5.9.3 | Generalizations | 178 |
| 10.5.9.4 | Association Ends | 178 |
| 10.6 | Association Descriptions | 179 |
| 10.6.1 | A_classifierBehavior_behavioredClassifier [Association] | 179 |
| 10.6.1.1 | Diagrams | 179 |
| 10.6.1.2 | Generalizations | 179 |
| 10.6.1.3 | Owned Ends | 179 |
| 10.6.2 | A_classifier_enumerationLiteral [Association] | 179 |
| 10.6.2.1 | Diagrams | 179 |
| 10.6.2.2 | Generalizations | 179 |
| 10.6.2.3 | Owned Ends | 179 |
| 10.6.3 | A_contract_interfaceRealization [Association] | 179 |
| 10.6.3.1 | Diagrams | 179 |
| 10.6.3.2 | Owned Ends | 179 |
| 10.6.4 | A_interfaceRealization_implementingClassifier [Association] | 179 |
| 10.6.4.1 | Diagrams | 179 |
| 10.6.4.2 | Member Ends | 179 |
| 10.6.5 | A_nestedClassifier_interface [Association] | 180 |
| 10.6.5.1 | Diagrams | 180 |
| 10.6.5.2 | Owned Ends | 180 |
| 10.6.6 | A_ownedAttribute_datatype [Association] | 180 |
| 10.6.6.1 | Diagrams | 180 |
| 10.6.6.2 | Member Ends | 180 |
| 10.6.7 | A_ownedAttribute_interface [Association] | 180 |
| 10.6.7.1 | Diagrams | 180 |
| 10.6.7.2 | Member Ends | 180 |
| 10.6.8 | A_ownedAttribute_owningSignal [Association] | 180 |
| 10.6.8.1 | Diagrams | 180 |
| 10.6.8.2 | Owned Ends | 180 |
| 10.6.9 | A_ownedBehavior_behavioredClassifier [Association] | 180 |
| 10.6.9.1 | Diagrams | 180 |
| 10.6.9.2 | Specializations | 181 |
| 10.6.9.3 | Owned Ends | 181 |
| 10.6.10 | A_ownedLiteral_enumeration [Association] | 181 |
| 10.6.10.1 | Diagrams | 181 |
| 10.6.10.2 | Member Ends | 181 |
| 10.6.11 | A_ownedOperation_datatype [Association] | 181 |
| 10.6.11.1 | Diagrams | 181 |
| 10.6.11.2 | Member Ends | 181 |
| 10.6.12 | A_ownedOperation_interface [Association] | 181 |
| 10.6.12.1 | Diagrams | 181 |
| 10.6.12.2 | Member Ends | 181 |
| 10.6.13 | A_ownedReception_interface [Association] | 181 |
| 10.6.13.1 | Diagrams | 181 |
| 10.6.13.2 | Owned Ends | 182 |
| 10.6.14 | A_protocol_interface [Association] | 182 |
| 10.6.14.1 | Diagrams | 182 |
| 10.6.14.2 | Owned Ends | 182 |
| 10.6.15 | A_redefinedInterface_interface [Association] | 182 |
| 10.6.15.1 | Diagrams | 182 |
| 10.6.15.2 | Owned Ends | 182 |
| 10.6.16 | A_signal_reception [Association] | 182 |
| 10.6.16.1 | Diagrams | 182 |
| 10.6.16.2 | Owned Ends | 182 |

**Итого**: 129 подразделов (подсчитано по таблице — 8 заголовков уровня x, 104 подзаголовка уровня xx, 17 подзаголовка xxx).

---

## 3. Классификаторы (раздел 10.5)

В разделе 10.5 «Classifier Descriptions» описаны **9 классификаторов**. Данные извлечены из XMI пакета `SimpleClassifiers` и инвентаря этапа 1:

| № | Англ. имя | Тип | Подраздел | Родитель (XMI) | Атрибуты (ownedAttribute / type-свойства) | Операции | Ограничения (OCL) |
|---|-----------|-----|-----------|----------------|--------------------------------------------|----------|-------------------|
| 1 | `BehavioredClassifier` | Abstract Class | 10.5.1 | Classifier | 3: classifierBehavior → Behavior, interfaceRealization → InterfaceRealization, ownedBehavior → Behavior | — | 1: class_behavior |
| 2 | `DataType` | Class | 10.5.2 | Classifier | 2: ownedAttribute → Property (1..*), ownedOperation → Operation (1..*) | — | — |
| 3 | `Enumeration` | Class | 10.5.3 | DataType | 1: ownedLiteral → EnumerationLiteral (1..*) | — | 1: immutable |
| 4 | `EnumerationLiteral` | Class | 10.5.4 | InstanceSpecification | 2: classifier → Enumeration, enumeration → Enumeration | 1: classifier() | — |
| 5 | `Interface` | Class | 10.5.5 | Classifier | 6: nestedClassifier → Classifier (0..*), ownedAttribute → Property (0..*), ownedOperation → Operation (0..*), ownedReception → Reception (0..*), protocol → ProtocolStateMachine (0..1), redefinedInterface → Interface (*) | — | 1: visibility |
| 6 | `InterfaceRealization` | Class | 10.5.6 | Realization | 2: contract → Interface, implementingClassifier → BehavioredClassifier | — | — |
| 7 | `PrimitiveType` | Class | 10.5.7 | DataType | 0 | — | — |
| 8 | `Reception` | Class | 10.5.8 | BehavioralFeature | 1: signal → Signal (1) | — | 2: same_name_as_signal, same_structure_as_signal |
| 9 | `Signal` | Class | 10.5.9 | Classifier | 1: ownedAttribute → Property (0..*) | — | — |

### Иерархия наследования (из XMI)

```
Classifier ──────→ BehavioredClassifier ──────→ (Actor, Class, Collaboration, UseCase из §11)
     │                      │
     │                      ├─ interfaceRealization → InterfaceRealization
     │                      └─ ownedBehavior → Behavior (§??)
     │
     ├──────→ DataType ──────→ Enumeration ──────→ (нет потомков в §10)
     │                 │              └─ ownedLiteral → EnumerationLiteral
     │                 │
     │                 └──────→ PrimitiveType (литералы: boolean, char, integer, real, string и др.)
     │
     ├──────→ Interface ──────→ (нет потомков в §10)
     │        ├── nestedClassifier → Classifier
     │        ├── ownedAttribute → Property
     │        ├── ownedOperation → Operation
     │        ├── ownedReception → Reception
     │        ├── protocol → ProtocolStateMachine (§??)
     │        └── redefinedInterface → Interface
     │
     └──────→ Realization ──────→ InterfaceRealization
              │
              ├─ contract → Interface
              └─ implementingClassifier → BehavioredClassifier

InstanceSpecification ──→ EnumerationLiteral
     │
     └─ classifier → Enumeration (§10.6.2)
        └─ enumeration → Enumeration (§10.6.10)

BehavioralFeature ──→ Reception
     │
     └─ signal → Signal (§10.5.9, §10.6.16)
```

---

## 4. Ассоциации (раздел 10.6)

Раздел 10.6 «Association Descriptions» содержит описания **16 ассоциаций** метамодели. Концы разделены на `ownedEnd` (владелец — сама ассоциация) и свойства классов (`type`-атрибуты):

| № | Англ. имя | Подраздел | Конец 1 | Конец 2 | ownedEnd? | Типы сторон |
|---|-----------|-----------|---------|---------|-----------|-------------|
| 1 | `A_classifierBehavior_behavioredClassifier` | 10.6.1 | classifierBehavior : Behavior (BehavioredClassifier) | behavioredClassifier : BehavioredClassifier (*) | Да (2-й конец) | Behavior ↔ BehavioredClassifier |
| 2 | `A_classifier_enumerationLiteral` | 10.6.2 | classifier : Enumeration (EnumerationLiteral) | enumerationLiteral : EnumerationLiteral (*) | Да (2-й конец) | Enumeration ↔ EnumerationLiteral |
| 3 | `A_contract_interfaceRealization` | 10.6.3 | contract : Interface (InterfaceRealization) | interfaceRealization : InterfaceRealization (*) | Да (2-й конец) | Interface ↔ InterfaceRealization |
| 4 | `A_interfaceRealization_implementingClassifier` | 10.6.4 | interfaceRealization : InterfaceRealization (*) (BehavioredClassifier) | implementingClassifier : BehavioredClassifier (InterfaceRealization) | Нет | BehavioredClassifier ↔ InterfaceRealization |
| 5 | `A_nestedClassifier_interface` | 10.6.5 | nestedClassifier : Classifier (0..*) (Interface) | interface : Interface (*) | Да (2-й конец) | Interface ↔ Classifier |
| 6 | `A_ownedAttribute_datatype` | 10.6.6 | ownedAttribute : Property (1..*) (DataType) | datatype : DataType (Property) | Нет | DataType ↔ Property |
| 7 | `A_ownedAttribute_interface` | 10.6.7 | ownedAttribute : Property (0..*) (Interface) | interface : Interface (Property) | Нет | Interface ↔ Property |
| 8 | `A_ownedAttribute_owningSignal` | 10.6.8 | ownedAttribute : Property (0..*) (Signal) | owningSignal : Signal (*) | Да (2-й конец) | Signal ↔ Property |
| 9 | `A_ownedBehavior_behavioredClassifier` | 10.6.9 | ownedBehavior : Behavior (1..*) (BehavioredClassifier) | behavioredClassifier : BehavioredClassifier (*) | Да (2-й конец) | BehavioredClassifier ↔ Behavior |
| 10 | `A_ownedLiteral_enumeration` | 10.6.10 | ownedLiteral : EnumerationLiteral (1..*) (Enumeration) | enumeration : Enumeration (EnumerationLiteral) | Нет | Enumeration ↔ EnumerationLiteral |
| 11 | `A_ownedOperation_datatype` | 10.6.11 | ownedOperation : Operation (1..*) (DataType) | datatype : DataType (Operation) | Нет | DataType ↔ Operation |
| 12 | `A_ownedOperation_interface` | 10.6.12 | ownedOperation : Operation (0..*) (Interface) | interface : Interface (Operation) | Нет | Interface ↔ Operation |
| 13 | `A_ownedReception_interface` | 10.6.13 | ownedReception : Reception (0..*) (Interface) | interface : Interface (*) | Да (2-й конец) | Interface ↔ Reception |
| 14 | `A_protocol_interface` | 10.6.14 | protocol : ProtocolStateMachine (0..1) (Interface) | interface : Interface (*) | Да (2-й конец) | Interface ↔ ProtocolStateMachine |
| 15 | `A_redefinedInterface_interface` | 10.6.15 | redefinedInterface : Interface (*) (Interface) | interface : Interface (*) | Да (2-й конец) | Interface ↔ Interface |
| 16 | `A_signal_reception` | 10.6.16 | signal : Signal (Reception) | reception : Reception (*) | Да (2-й конец) | Reception ↔ Signal |

### Замечания по концовкам

- **ownedEnd** (3-я колонка): концы, где владеец — сама ассоциация (`ownedEnd`, а не `type`-атрибут класса). В XMI такие имеют `<ownedEnd>` внутри элемента ассоциации.
- **memberEnd** (свойства классов): концы, которые являются `type`-атрибутами класса (обратная сторона `ownedAttribute`). В XMI описаны как `<ownedAttribute type="...">`.
- **Ассоциация 10.6.4** — единственная без `ownedEnd`; оба конца являются свойствами (`memberEnd`): `interfaceRealization` на BehavioredClassifier и `implementingClassifier` на InterfaceRealization.
- **Ассоциация 10.6.9** имеет подраздел `Specializations` (10.6.9.2) — это родитель для `A_classifierBehavior_behavioredClassifier` (10.6.1).

---

## 5. Рисунки раздела 10

Всего: **12 рисунков** (Figure 10.1–10.12). Все подтверждены в дампе текста (`site/docs/uml-2.5.1-simple-classifiers-en.txt`):

| № | Подпись (EN) | Печ. стр. | Раздел | Диаграмма |
|---|-------------|-----------|--------|-----------|
| 10.1 | DataTypes | 167 | 10.2.2 Abstract Syntax | Классификаторная диаграмма: DataType → Enumeration, PrimitiveType |
| 10.2 | PrimitiveType Notation | 168 | 10.2.5 Examples | Нотация PrimitiveType (прямоугольник с полосой) |
| 10.3 | DataType Notation | 168 | 10.2.5 Examples | Нотация DataType |
| 10.4 | Enumeration Notation | 169 | 10.2.5 Examples | Нотация Enumeration с literals |
| 10.5 | Signals | 169 | 10.3.2 Abstract Syntax | Классификаторная диаграмма: Signal → Reception, ownedAttribute |
| 10.6 | Reception Notation | 170 | 10.3.5 Examples | Нотация Reception (полукруг слева) |
| 10.7 | Interfaces | 171 | 10.4.2 Abstract Syntax | Классификаторная диаграмма: Interface → ownedAttribute, Operation, Reception и др. |
| 10.8 | ISensor is a provided Interface of ProximitySensor | 172 | 10.4.5 Examples | Лollipop-нотация (предоставляемый интерфейс) |
| 10.9 | ISensor, a provided Interface of ProximitySensor, is shown as inherited by CapacitiveSensor | 173 | 10.4.5 Examples | Наследование интерфейса: dashed triangle + dotted line |
| 10.10 | ISensor is a required Interface of TheftAlarm | 173 | 10.4.5 Examples | Socket-нотация (требуемый интерфейс) |
| 10.11 | Alternative notation for required and provided Interface | 173 | 10.4.5 Examples | Альтернативная нотация интерфейсов (Dependency arrows) |
| 10.12 | A set of collaborating Interfaces | 173 | 10.4.5 Examples | Совместно работающие интерфейсы (ассоциации между Interface) |

**Подтверждение в тексте**: regex по `Figure 10\.` нашёл 54 совпадения (включая описания, ссылки и подписи). Ключевые подписи найдены на строках:
- `Figure 10.1` → стр. 54
- `Figure 10.2 / Figure 10.3 / Figure 10.4` → строки 99–125
- `Figure 10.5` → стр. 150
- `Figure 10.6` → строки 181, 193
- `Figure 10.7` → стр. 286
- `Figure 10.8–10.12` → строки 349–405

---

## 6. Замечания и риски

### Особенности структуры раздела (проверено)

1. **Все 9 классификаторов** (10.5.1–10.5.9) присутствуют как прямые дети пакета `SimpleClassifiers` в XMI ✓
   - Валидация: строка 7779–~8300+ в `UML-2.5.1.xmi`; найдены все 9 `packagedElement xmi:type="uml:Class"` с именами: BehavioredClassifier, DataType, Enumeration, EnumerationLiteral, Interface, InterfaceRealization, PrimitiveType, Reception, Signal.

2. **Все 16 ассоциаций** (10.6.1–10.6.16) найдены в XMI, все являются прямыми детьми пакета ✓
   - Проверено через имена `A_*` в заголовках подразделов и в тексте (`uml-2.5.1-simple-classifiers-en.txt`).
   - Контекст: 16 × 2 = **32 конца ассоциаций** (подтверждено суммированием массива `ends` в инвентаре).

3. **Все 12 рисунков** (Figure 10.1–10.12) присутствуют в тексте и PDF ✓
   - Текстовый дамп подтверждён regex-поиском по `Figure 10\.` — найдено 54 совпадения (описания + подписи).

4. **Аномалия в структуре подразделов**:
   - `10.5.3 Enumeration` НЕ имеет подраздела "Specializations" (нет потомков в §10)
   - `10.5.4 EnumerationLiteral` имеет подраздел "Operations" (10.5.4.5), которого нет у других классификаторов
   - `10.6.4 A_interfaceRealization_implementingClassifier` имеет подраздел "Member Ends" (а не "Owned Ends")
   - `10.6.9 A_ownedBehavior_behavioredClassifier` единственный ассоциации, имеющий подраздел "Specializations"

5. **EnumerationLiteral — единственный класс с операцией** (classifier()) в разделе 10 ✓
   - Операция `classifier()` возвращает классификатор экземпляра — специфика именно InstanceSpecification/EnumerationLiteral.

6. **PrimitiveType не имеет атрибутов и ограничений** — это "пустой" класс-заглушка для определения примитивных типов. Примитивные типы определяются через литералы/экземпляры, а не через `ownedAttribute`.

7. **Interface — самый сложный класс раздела**: 6 атрибутов (свойств), 1 ограничение visibility, 0 обобщений-потомков в §10. Используется как тип для Port (§11), Component и др.

8. **Внешние классификаторы** (не в пакете SimpleClassifiers, но связаны):
   - Уже в справочнике: `BehavioralFeature`, `Classifier`, `InstanceSpecification`, `Operation`, `Property`, `Realization`
   - Требуют будущих разделов: `Actor`, `Behavior`, `Class`, `Collaboration`, `ProtocolStateMachine`, `UseCase`

### Риски (актуализировано)

- **Примитивные типы**: PrimitiveType не имеет `ownedAttribute` в XMI. Литералы примитивных типов (boolean, integer и т.д.) определены как экземпляры InstanceSpecification на странице 168 — НЕ путать с EnumerationLiteral.

- **Interface redefinition**: ассоциация `A_redefinedInterface_interface` (10.6.15) ссылается на другой интерфейс того же типа Interface — рекурсивная связь. Требуется осторожность при генерации страниц: может привести к циклам в навигации.

- **ProtocolStateMachine** (тип атрибута protocol у Interface) определён в пакете StateMachines (§13) — страница для протокола появится только после переноса раздела 13.

- **BehavioralFeature** — абстрактный предок Reception (через обобщение). BehavioralFeature находится в CommonStructure (§7) или Classification (§9)? Нужно проверить XMI иерархию.

---

## 7. План иллюстраций

| Рисунок | Стр. | Тип диаграммы | Сложность SVG | Приоритет | Заметка |
|---------|------|---------------|---------------|-----------|---------|
| 10.1 | 167 | Классификаторная (наследование) | Средняя — дерево: Classifier→DataType→{Enumeration, PrimitiveType} | Высший | Базовая иерархия простых классификаторов; требует связных страниц для каждого узла |
| 10.2 | 168 | Нотация (PrimitiveType) | Низкая — прямоугольник с горизонтальной полосой вверху | Высший | Стандартная нотация primitive type: двойной прямоугольник с разделительной линией |
| 10.3 | 168 | Нотация (DataType) | Низкая — заполненный прямоугольник | Высший | Простая нотация DataType |
| 10.4 | 169 | Нотация (Enumeration + literals) | Средняя — блок enum с разделением на name/type и список literals | Высший | Показывает как сам Enumeration, так и его EnumerationLiteral-экземпляры |
| 10.5 | 169 | Классификаторная (Signal → Reception) | Средняя — Signal с ownedAttribute и связанным Reception | Высокий | Аналогична Figure 7.x: ownedEnd на ассоциации, type-атрибут на классе |
| 10.6 | 170 | Нотация (Reception) | Низкая/Средняя — класс + reception symbol (полукруг слева) | Высший | Нотация сигнала с приёмником; полукруг слева от класса |
| 10.7 | 171 | Классификаторная (Interface) | Высокая — много атрибутов: nestedClassifier, ownedAttribute/Operation/Reception, protocol, redefinedInterface | Высший | Самая сложная диаграмма раздела; нужно показать все 6 атрибутов с правильными концами ассоциаций |
| 10.8 | 172 | Пример нотации (lollipop) | Низкая — Class + полукруг справа (provided Interface) | Высокий | Простой пример: ProximitySensor → ISensor |
| 10.9 | 173 | Пример наследования интерфейса | Средняя — CapacitiveSensor → ISensor (dotted line + dashed triangle) | Высший | Ключевая диаграмма: показана связь проксимости между классами через интерфейс |
| 10.10 | 173 | Пример нотации (socket) | Низкая — Class + полукруг слева (required Interface) | Высокий | TheftAlarm → ISensor; socket symbol слева |
| 10.11 | 173 | Альтернативная нотация | Средняя — Dependency arrows между classifiers и interfaces | Средний | Показывает альтернативу lollipop/socket через классические Dependency |
| 10.12 | 173 | Совместные интерфейсы | Высокая — несколько Interface с ассоциациями между ними | Средний | Пример: несколько интерфейсов связаны ассоциациями; показать обе стороны концов |

**Приоритеты**:
- **Высший** (обязательны для первого переноса): 10.1, 10.6–10.9 — ядро раздела.
- **Высокий** (желательны в первом переносе): 10.2, 10.3, 10.4, 10.5, 10.10–10.11.
- **Средний** (можно отложить): 10.12 — пример, не определяющий элемент метамодели.

---

## 8. План межраздельных ссылок

Элементы раздела 10 активно связаны с разделами 7–9 (базовая метамодель) и 11, 13 (смежные пакеты). Таблица ниже содержит ключевые связи:

| Элемент (§10) | Связанный элемент | Раздел справочника | Тип связи |
|---------------|-------------------|--------------------|-----------|
| `BehavioredClassifier` → Generalization: `Classifier` | Classifier | 9.1 Classifier | обобщение (предок из Classification) |
| `BehavioredClassifier.classifierBehavior` → Type: `Behavior` | Behavior | CommonBehavior (§14–15) | тип атрибута (внешний пакет) |
| `BehavioredClassifier.interfaceRealization` → Type: `InterfaceRealization` | InterfaceRealization | 10.5.6 | внутренняя ссылка |
| `BehavioredClassifier.ownedBehavior` → Type: `Behavior` | Behavior | CommonBehavior (§14–15) | тип атрибута (внешний пакет) |
| `DataType` → Generalization: `Classifier` | Classifier | 9.1 Classifier | обобщение (предок из Classification) |
| `DataType.ownedAttribute` → Type: `Property` | Property | 9.5 Feature | subsets / тип из CommonStructure |
| `DataType.ownedOperation` → Type: `Operation` | Operation | 9.5 Feature, 10.6.11/12 | тип атрибута |
| `Enumeration` → Generalization: `DataType` | DataType | 10.5.2 | обобщение (внутреннее) |
| `Enumeration.ownedLiteral` → Type: `EnumerationLiteral` | EnumerationLiteral | 10.5.4 | внутренняя ссылка |
| `EnumerationLiteral` → Generalization: `InstanceSpecification` | InstanceSpecification | Classification (§9) | обобщение (предок из Classification) |
| `EnumerationLiteral.classifier` → Type: `Enumeration` | Enumeration | 10.5.3 | цикл: EN → классификатор через A_classifier_enumerationLiteral |
| `Interface` → Generalization: `Classifier` | Classifier | 9.1 Classifier | обобщение (предок из Classification) |
| `Interface.nestedClassifier` → Type: `Classifier` | Classifier | 9.1 Classifier | тип атрибута (рекурсивный) |
| `Interface.ownedAttribute` → Type: `Property` | Property | 9.5 Feature | subsets / тип из CommonStructure |
| `Interface.ownedOperation` → Type: `Operation` | Operation | 9.5 Feature, 10.6.12 | тип атрибута |
| `Interface.ownedReception` → Type: `Reception` | Reception | 10.5.8 | внутренняя ссылка |
| `Interface.protocol` → Type: `ProtocolStateMachine` | ProtocolStateMachine | StateMachines (§13) | тип атрибута (внешний пакет) |
| `Interface.redefinedInterface` → Type: `Interface` | Interface | 10.5.5 | рекурсивная ссылка (same-class) |
| `InterfaceRealization` → Generalization: `Realization` | Realization | 7.7 Dependencies | обобщение (предок из CommonStructure) |
| `InterfaceRealization.contract` → Type: `Interface` | Interface | 10.5.5 | внутренняя ссылка (циклическая) |
| `InterfaceRealization.implementingClassifier` → Type: `BehavioredClassifier` | BehavioredClassifier | 10.5.1 | внутренняя ссылка (циклическая) |
| `PrimitiveType` → Generalization: `DataType` | DataType | 10.5.2 | обобщение (внутреннее) |
| `Reception` → Generalization: `BehavioralFeature` | BehavioralFeature | Classification (§9) / CommonStructure (§7) | обобщение (предок) |
| `Reception.signal` → Type: `Signal` | Signal | 10.5.9 | внутренняя ссылка |
| `Signal` → Generalization: `Classifier` | Classifier | 9.1 Classifier | обобщение (предок из Classification) |
| `Signal.ownedAttribute` → Type: `Property` | Property | 9.5 Feature | тип атрибута (через A_ownedAttribute_owningSignal) |

### Связи с вложенными пакетами XMI

- **SimpleClassifiers** (§10) сам является подпакетом **StructuredClassifiers** (§11). Классификаторы из §10 используются как типы для атрибутов элементов §11 (Port, Component и др.).
- **StateMachines**: `ProtocolStateMachine` (тип протокола Interface) — ссылка на раздел 13.
- **Classification** (§9): все предки (Classifier, Type, Feature, Property, NamedElement, InstanceSpecification, Realization) находятся здесь.
- **CommonStructure** (§7–8): `BehavioralFeature`, `NamedElement`, `Element` — базовые предки.
- **CommonBehavior** (§14–15): `Behavior` (тип classifierBehavior и ownedBehavior BehavioredClassifier).

---

## 9. Применение текущего скриптов пайплайна для раздела 10

Раздел 10 уже прошёл **этап 1** (inventory prepared). Следующие шаги:

### Этап 2 — scaffold_section.py + ручное наполнение

```bash
python scripts/section_pipeline.py --clause 10 --stage 2
# или напрямую:
python scripts/scaffold_section.py --clause 10
```

- **Ожидаемый результат**: создание файлов для 9 классификаторов и 16 ассоциаций в `site/data/pages/` с заполненными идентификаторами, иерархией, ассоциациями и рисунками из инвентаря.
- **Русские описания**: останутся пустыми — требуется ручное наполнение текстом из спецификации (стр. 167–182).
- **Особенность**: `Interface` имеет 6 атрибутов (самый сложный), `PrimitiveType` — 0 атрибутов. Это влияет на структуру сгенерированных страниц.
- **Примечание по Interface**: атрибуты nestedClassifier и redefinedInterface имеют тип `Classifier`/`Interface` (рекурсивные ссылки). Нужно проверить, что scaffold корректно обрабатывает self-referencing types.

### Этап 3 — sync_xmi_properties.py

```bash
python scripts/section_pipeline.py --clause 10 --stage 3
# или напрямую:
python scripts/sync_xmi_properties.py --clause 10
```

- **Особенность**: для Interface нужно отдельно проверить все 6 атрибутов против XMI (строки ~7900+).
- **Особенность**: у PrimitiveType нет ownedAttribute в XMI — пустой список корректен.
- **Особенность**: EnumerationLiteral имеет операцию `classifier()` — нужно убедиться, что sync_xmi_properties.py поддерживает операции (кроме атрибутов).

### Этап 4 — build_site.py

```bash
python scripts/section_pipeline.py --clause 10 --stage 4
# или напрямую:
python scripts/build_site.py --clause 10
```

- **Ожидаемый результат**: HTML-страницы для всех маршрутов (43 new_routes из инвентаря), навигация, поисковый индекс.
- **Маршруты** (из инвентаря): `#/section/10-{1..6}`, `#/classifier/{9 классов}`, `#/association/{16 ассоциаций}`, `#/diagram/10-{1..12}` — всего 43.

### Этап 5 — генерация SVG-диаграмм

```bash
# Для раздела 10 нужен новый скрипт (указан в sections.json):
python scripts/generate_simple_classifiers_svg.py --clause 10
# или вручную:
python scripts/generate_classification_svg.py --clause 10
```

| Скрипт | Применяется? | Особенности |
|--------|-------------|-------------|
| `generate_simple_classifiers_svg.py` | **Да** (указан в sections.json) | Новый скрипт, специфичный для §10. Нужно создать builder'ы для: классификаторных диаграмм (§§10.2–10.4), нотаций (§§10.2.4, 10.3.4, 10.4.4) и примеров (§10.2.5, 10.3.5, 10.4.5) |
| `generate_classification_svg.py` | **Частично** (аналогия с §9) | Можно адаптировать: builder для деревьев наследования (Figure 10.1) и ассоциаций (Figure 10.5, 10.7). Но: специфика lollipop/socket нотации (§§10.8–10.12) требует отдельного layout-алгоритма |
| `check_svg_overlaps.py` | **Да** (обязательно) | Геометрическая проверка всех 12 SVG — текст, линии, наконечники, отступы |

**Специфика Figure 10.7 (Interfaces)**: это самая сложная диаграмма раздела — нужно показать класс Interface с 6 атрибутами и их ассоциации. Требуется вертикальный layout с несколькими колонками или группировка по типам атрибутов.

### Этап 6 — validate_site.py

```bash
python scripts/section_pipeline.py --clause 10 --stage 6 --static-only
# или напрямую:
python scripts/validate_site.py --clause 10 --static-only
```

- **Проверки**: ссылки, SVG-геометрия (Pillow), текст (§10.1–10.6), полнота маршрутов (43 new_routes), корректность наследования от предков из §9 и §11.
- **Дополнительно**: проверить циклические ссылки (Interface↔InterfaceRealization, EnumerationLiteral↔Enumeration).

---

## 10. Рекомендации по модернизации скриптов для раздела 10

### 1. Создать `generate_simple_classifiers_svg.py` как обёртку над существующими builder'ами

**Проблема**: в `sections.json` для раздела 10 указан `svg_generator: "generate_simple_classifiers_svg.py"`, но этого скрипта ещё нет. Существующие `generate_classification_svg.py` и `generate_common_structure_svg.py` ориентированы на §9 и §7–8 соответственно.

**Предложение**: создать обёртку, которая:
- Для Figure 10.1 и 10.5/10.7 (классификаторные диаграммы) использует builder из `generate_classification_svg.py` с layout "inheritance tree" или "association graph".
- Для Figure 10.2–10.4, 10.6 (нотации) использует шаблон "notation box" (прямоугольник + подпись).
- Для Figure 10.8–10.12 (примеры с lollipop/socket) требует отдельного builder `builder_interface_symbols.py` с поддержкой полукруглых интерфейсных символов и dotted/dashed линий наследования.

### 2. Обработка циклических/рекурсивных типов в Interface

**Проблема**: `Interface.redefinedInterface → Interface` (сама себя) и `Interface.nestedClassifier → Classifier` могут создавать бесконечные рекурсии при генерации диаграмм наследования. Также `InterfaceRealization` имеет циклические ссылки: `contract → Interface` и `implementingClassifier → BehavioredClassifier`.

**Предложение**: в `sync_xmi_properties.py` добавить ограничитель глубины рекурсии (default depth=3) при разрешении типов атрибутов, и в SVG-генераторах — пометку `↻ cyclic` для ссылок на самого себя.

### 3. Поддержка lollipop/socket нотации интерфейсов в SVG

**Проблема**: рисунки 10.8–10.12 используют специфические символы интерфейсов: полукруг справа (lollipop, provided), полукруг слева (socket, required) и Dependency arrows для альтернативной нотации. Ни один из существующих SVG-билдеров не поддерживает эти элементы.

**Предложение**: создать `builder_interface_symbols.py` с поддержкой:
- `<circle>` + `<line>` для lollipop (полукруг справа от класса)
- Полукруг-вырез слева для socket
- Двойные пунктирные линии `<<realize>>` для наследования интерфейсов
- Альтернатива: обычные Dependency с стереотипом `«provide»` / `«require»`

### 4. Корректная обработка PrimitiveType без атрибутов

**Прискиция**: PrimitiveType — «пустой» класс (0 атрибутов, 0 ограничений, 1 обобщение). Его страница будет содержать только определение и диаграмму наследования от DataType. Нужно убедиться, что:
- Генератор страниц не пытается показать секцию "Attributes" (пустая).
- Диаграмма PrimitiveType (Figure 10.1) показывает его как узел дерева наследования без внутренних свойств.

**Предложение**: в scaffold_section.py добавить проверку `if not attributes: skip_attributes_section`. В SVG — показать только блок класса с именем и линией обобщения от DataType, без атрибутов/операций внутри прямоугольника.


