# Реестр раздела Common Behavior (Поведение общего характера) — ЧЕРНОВИК

> - Подготовлено: 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия модели не фиксировались.
> - Исходная задача (промпт): черновик реестра раздела 13 Common Behavior OMG UML 2.5.1 (стр. 285–304) для переноса в справочник: подразделы, классификаторы/ассоциации из XMI (пакет CommonBehavior), рисунки, замечания; ≤200k токенов; только официальные источники.
> - Проверка: 2025-11-22, сверка с дампом и XMI; добавлено 8 подразделов (13.2.2–13.2.5, 13.3.2–13.3.5), заполнены определения.
> - Состав: конфигурация, дерево подразделов, классификаторы, ассоциации, рисунки, замечания, план иллюстраций, план межраздельных ссылок, рекомендации по скриптам.
> - Критерий адекватности: числа должны сходиться с XMI и текстом; расхождения — в «Замечаниях и рисках».

> **Контекст**: В OMG UML 2.5.1 — это раздел **13** (страницы 285–304).
> Разделы: 12 = Packages (241–284), 13 = Common Behavior (285–304), 14 = StateMachines (305–372).
> Ниже данные для XMI-пакета `CommonBehavior`, соответствующего разделу 13.

## Предлагаемая конфигурация для `sections.json`

```json
{
  "title": "Common Behavior",
  "title_ru": "Поведение общего характера",
  "slug": "common-behavior",
  "package": "CommonBehavior",
  "first_page": 285,
  "last_page": 304,
  "classifier_catalog": "13.4 Classifier Descriptions",
  "association_catalog": "13.5 Association Descriptions",
  "source": "omg-uml-2.5.1-formal-17-12-05.pdf"
}
```

## Дерево подразделов (реальные подразделы)

| Номер | Заголовок | Печатная страница |
|-------|-----------|-------------------|
| `13.1` | Summary | 285 |
| `13.2` | Behaviors | 285 |
| `13.2.1` | Summary | 285 |
| `13.2.2` | Abstract Syntax | 286 |
| `13.2.3` | Semantics | 286 |
| `13.2.3.1` | Behaviors | 286 |
| `13.2.3.2` | Behavior Parameters | 287 |
| `13.2.3.3` | Opaque and Function Behaviors | 288 |
| `13.2.3.4` | Behaviored Classifiers | 288 |
| `13.2.3.5` | Behavioral Features and Methods | 289 |
| `13.2.4` | Notation | 290 |
| `13.2.5` | Examples | 290 |
| `13.3` | Events | 290 |
| `13.3.1` | Summary | 290 |
| `13.3.2` | Abstract Syntax | 291 |
| `13.3.3` | Semantics | 291 |
| `13.3.4` | Notation | 293 |
| `13.3.5` | Examples | 294 |
| `13.3.3.1` | Event Dispatching | 291 |
| `13.3.3.2` | Message Events | 292 |
| `13.3.3.3` | Change Events | 292 |
| `13.3.3.4` | Time Events | 293 |
| `13.4` | Classifier Descriptions | 294 |
| `13.4.1` | AnyReceiveEvent [Class] | 294 |
| `13.4.2` | Behavior [Abstract Class] | 294 |
| `13.4.2.5` | Attributes | 294 |
| `13.4.2.6` | Association Ends | 295 |
| `13.4.3` | CallEvent [Class] | 297 |
| `13.4.3.4` | Association Ends | 297 |
| `13.4.4` | ChangeEvent [Class] | 297 |
| `13.4.4.4` | Association Ends | 297 |
| `13.4.5` | Event [Abstract Class] | 297 |
| `13.4.6` | FunctionBehavior [Class] | 298 |
| `13.4.7` | MessageEvent [Abstract Class] | 298 |
| `13.4.8` | OpaqueBehavior [Class] | 299 |
| `13.4.8.5` | Attributes | 299 |
| `13.4.9` | SignalEvent [Class] | 299 |
| `13.4.9.4` | Association Ends | 299 |
| `13.4.10` | TimeEvent [Class] | 299 |
| `13.4.10.4` | Attributes | 300 |
| `13.4.10.5` | Association Ends | 300 |
| `13.4.11` | Trigger [Class] | 300 |
| `13.4.11.4` | Association Ends | 300 |
| `13.5` | Association Descriptions | 301 |
| `13.5.1` | A_changeExpression_changeEvent [Association] | 301 |
| `13.5.2` | A_context_behavior [Association] | 301 |
| `13.5.3` | A_event_trigger [Association] | 301 |
| `13.5.4` | A_operation_callEvent [Association] | 301 |
| `13.5.5` | A_ownedParameterSet_behavior [Association] | 301 |
| `13.5.6` | A_ownedParameter_behavior [Association] | 302 |
| `13.5.7` | A_port_trigger [Association] | 302 |
| `13.5.8` | A_postcondition_behavior [Association] | 302 |
| `13.5.9` | A_precondition_behavior [Association] | 302 |
| `13.5.10` | A_redefinedBehavior_behavior [Association] | 302 |
| `13.5.11` | A_signal_signalEvent [Association] | 303 |
| `13.5.12` | A_when_timeEvent [Association] | 303 |

> **Каталог классификаторов**: 13.4 Classifier Descriptions
> **Каталог ассоциаций**: 13.5 Association Descriptions

## Классификаторы раздела

### Из XMI-пакета `CommonBehavior` (прямые классы/перечисления: 11)

| Англ. имя | Тип | Подраздел | Русское пояснение | Первое предложение определения (англ.) |
|-----------|-----|-----------|-------------------|------------------------------------------|
| **AnyReceiveEvent** | [Class] | 13.4.1 | Приём любого сообщения | A trigger for an AnyReceiveEvent is triggered by the receipt of any message that triggers the event. |
| **Behavior** | [Abstract Class] | 13.4.2 | Описывает поведение структурного элемента | Behavior is a specification of how its context BehavioredClassifier changes state either through execution or emergent behavior. |
| **CallEvent** | [Class] | 13.4.3 | Событие вызова операции/услуги | A CallEvent models the receipt by an object of a message invoking a call of an Operation. |
| **ChangeEvent** | [Class] | 13.4.4 | Событие изменения условия (guard) | A ChangeEvent models a change in the system configuration that makes a condition true or false. |
| **Event** | [Abstract Class] | 13.4.5 | Момент во времени, когда происходит что-то значимое | An Event is the specification of some occurrence that may potentially trigger effect. |
| **FunctionBehavior** | [Class] | 13.4.6 | Чистая функция (без побочных эффектов) | A FunctionBehavior is an OpaqueBehavior that does not access or modify any objects. |
| **MessageEvent** | [Abstract Class] | 13.4.7 | Событие получения сообщения (операция или сигнал) | A MessageEvent specifies the receipt by an object of either an Operation call or a Signal. |
| **OpaqueBehavior** | [Class] | 13.4.8 | Поведение с текстовым телом (непрозрачное) | An OpaqueBehavior is a Behavior whose specification is given in a textual language. |
| **SignalEvent** | [Class] | 13.4.9 | Событие получения асинхронного сигнала | A SignalEvent represents the receipt of an asynchronous Signal instance. |
| **TimeEvent** | [Class] | 13.4.10 | Событие, связанное со временем | A TimeEvent is an Event that occurs at a specific point in time or over a specified time interval. |
| **Trigger** | [Class] | 13.4.11 | Триггер перехода (событие + условие) | A Trigger specifies a specific point at which an Event occurrence may trigger action. |

### Статистика атрибутов, операций и ограничений (из XMI)

| Классификатор | Атрибуты | Операции | Правила |
|-------------|----------|----------|---------|
| AnyReceiveEvent | 0 | 0 | 0 |
| Behavior | 8 | 4 | 3 |
| CallEvent | 1 | 0 | 0 |
| ChangeEvent | 1 | 0 | 0 |
| Event | 0 | 0 | 0 |
| FunctionBehavior | 0 | 1 | 2 |
| MessageEvent | 0 | 0 | 0 |
| OpaqueBehavior | 2 | 0 | 0 |
| SignalEvent | 1 | 0 | 0 |
| TimeEvent | 2 | 0 | 1 |
| Trigger | 2 | 0 | 1 |

**Итого**: **11** классификаторов, **17** атрибутов, **5** операций, **7** правил.

## Ассоциации раздела (из XMI)

**A_event_trigger**
- `trigger` : [0..*] Trigger

**A_port_trigger**
- `trigger` : [0..*] Trigger

**A_when_timeEvent**
- `timeEvent` : [0..*] TimeEvent

**A_signal_signalEvent**
- `signalEvent` : [0..*] SignalEvent

**A_changeExpression_changeEvent**
- `changeEvent` : [0..*] ChangeEvent

**A_operation_callEvent**
- `callEvent` : [0..*] CallEvent

**A_ownedParameterSet_behavior**
- `behavior` : [0..*] Behavior

**A_context_behavior**
- `behavior` : [0..*] Behavior

**A_precondition_behavior**
- `behavior` : [0..*] Behavior

**A_postcondition_behavior**
- `behavior` : [0..*] Behavior

**A_redefinedBehavior_behavior**
- `behavior` : [0..*] Behavior

**A_ownedParameter_behavior**
- `behavior` : [0..*] Behavior

## Рисунки раздела

| ID | Подпись | Печатная страница |
|----|---------|-------------------|
| Figure 13.1 | Behaviors | 286 |
| Figure 13.2 | Events | 291 |

## Замечания и риски

- **Номера разделов**: В OMG UML 2.5.1 Common Behavior — это раздел **13** (страницы 285–304). Раздел 12 = Packages (241–284), раздел 14 = StateMachines (305–372).
- **Размер**: 56 подразделов (включая структурные: Abstract Syntax, Semantics, Notation, Examples для каждого из 13.2 и 13.3), 11 классификаторов (из XMI пакета `CommonBehavior`), 12 ассоциаций.
- **Рисунки**: 2 (Figure 13.1 Behaviors стр. 286, Figure 13.2 Events стр. 291). Простые диаграммы наследования.
- **XMI-пакет**: называется `CommonBehavior` (без 's' на конце) — не путать с "CommonBehaviors".
- **Ассоциации**: все имеют по 2–3 конца; ends с пустым именем — это memberEnd, связывающий класс-владелец с ассоциацией. ownedEnd содержит фактический тип (ChangeEvent, Trigger и т.д.).
- **Структура раздела**: 13.2 Behaviors и 13.3 Events каждый содержат подразделы Abstract Syntax / Semantics / Notation / Examples — эти разделы описывают синтаксис и семантику, а не новые элементы метамодели.

## План иллюстраций

| # | Рис. | Тип | Сложность SVG | Приоритет | Примечание |
|---|------|-----|---------------|-----------|------------|
| 1 | Figure 13.1 Behaviors | Диаграмма наследования (2 уровня) | Низкая | Высокий | Показывает иерархию: Behavior → OpaqueBehavior, FunctionBehavior; Event → CallEvent/MessageEvent/ChangeEvent/TimeEvent. Классы-листья не имеют потомков в этом пакете. |
| 2 | Figure 13.2 Events | Диаграмма наследования (3 уровня) | Низкая | Высокий | Три ветви: Event → ChangeEvent (guard), TimeEvent, MessageEvent → CallEvent/SignalEvent. Корень Event абстрактный — это ключевой паттерн поведения UML. |

**Рекомендация по дополнительным иллюстрациям**:
- **Диаграмма наследования Behavior** (не в Figure 13.1/13.2): класс `Behavior` связан с пакетами Activities и StateMachines — стоит добавить расширенную диаграмму, охватывающую наследование из других разделов (Activity → Behavior, StateMachine → Behavior).
- **Диаграмма классов Trigger**: Trigger используется в разделах 14 (StateMachines), 17 (Interactions) — нужна отдельная иллюстрация его атрибутов (event, guard, action) и ассоциаций.

## План межраздельных ссылок

Элементы раздела 13 связаны со следующими разделами OMG UML 2.5.1:

| Элемент раздела 13 | Связанный элемент / раздел | Раздел | Тип связи |
|--------------------|--------------------------|--------|-----------|
| Behavior | BehavioredClassifier (ClassifiedElement → OwnedElement) | 7 (Common Structure) | наследование через ownedAttribute «behavior» |
| Behavior | StateMachine, Activity | 14, 18 | specialization: StateMachine/Activity наследуют от Behavior |
| Event | Operation, Signal | 9 (Classification), 9.2 | классификация как типы параметров события |
| CallEvent | Operation | 9.2 (Operation) | ассоциация A_operation_callEvent → ownedParameter |
| SignalEvent | Signal | 9.5 (Signal) | ассоциация A_signal_signalEvent → ownedAttribute |
| Trigger | Constraint (guard), ActionExecutionSpecification | 14, 17 | guard = Constraint; action = Behavior (OpaqueExpression/Action) |
| Event (abstract) | Reception | 9.3 (NamedElement) | NamedElement-базис: событие как приём сигнала/операции |
| Parameter | ParameterableElement → Element | 7 |ownedParameter/set в BehavioralFeature/Operation |
| OpaqueExpression | OpaqueBehavior (specification) | 13.4.8 / Activities | язык спецификации поведения |
| Constraint | ownedRule, inv: | 7 (Common Structure) | Behavior-ownedConstraint: pre/post-условия операций |

**Ключевые перекрёстные зависимости для реализации**:
- Все классификаторы раздела 13 наследуются от `NamedElement` → `PackageableElement` → `Element` (раздел 9/7).
- `Behavior` — центральное звено: его потребляют Activity (18), StateMachine (14), CollaborationUse.
- `Event` и `Trigger` — мосты к Interactions (17): сигнал как message в SequenceDiagram.

## Применение скриптов пайплайна к разделу 13

Раздел 13 мал (11 классов, 12 ассоциаций, 2 рисунка) — его целесообразно переносить **одновременно с разделом 12** или **отдельно за один проход**.

| Этап пайплайна | Действие для раздела 13 | Особое внимание |
|----------------|-------------------------|-----------------|
| Stage 0 (sections.json) | Добавить запись: `title="Common Behavior"`, `slug="common-behavior"`, `package="CommonBehavior"`, `first_page=285`, `last_page=304`, `classifier_catalog="13.4 Classifier Descriptions"`, `association_catalog="13.5 Association Descriptions"` | Название пакета **без 's'**: `CommonBehavior` (не "CommonBehaviors") |
| Stage 1 (prepare_section) | Запустить `--clause 13`; извлечь PDF-страницы 285–304, текст дампа, реестр; проверить полноту по inventory JSON | Все структурные подразделы (Abstract Syntax и т.д.) — пропускаются при генерации страниц справочника |
| Stage 2 (scaffold) | Сгенерировать страницы для 11 классификаторов + 12 ассоциаций; структурные подразделы **не** требуют scaffold-страниц | Для абстрактных классов (Behavior, Event, MessageEvent) — указать наследников из таблицы |
| Stage 3 (sync_xmi_properties) | Извлечь ownedAttribute/ownedOperation/ownedRule для всех 11 классов; концы ассоциаций с type resolution | ends вида `""` в XMI — это memberEnd класса-владелец (пропускать как неатрибут) |
| Stage 4 (build_site) | Построить HTML, маршруты, навигацию; связать классы из пакета CommonBehavior с другими разделами | Связи: Behavior ↔ Activities/StateMachines, Trigger ↔ Interactions |
| Stage 5 (SVG builder) | Сгенерировать **2 SVG** (13.1 Behaviors, 13.2 Events); добавить диаграмму наследования Behavior из других разделов | Низкая сложность — стандартные inheritance diagrams с треугольными стрелками |
| Stage 6 (validate_site) | Проверка: открытие index.html, маршруты для всех 23 страниц (11 + 12), поиск по "Behavior/Event", интерактивные SVG | Все ассоциации имеют ownedEnd-типы → проверить гиперссылки на целевые страницы |

## Модернизация скриптов (предложения)

1. **Авто-диаграмма наследования для Behavior**: добавить в `generate_classification_svg.py` режим inheritance_from_cross_packages — собирает все specializedClassifier/refinedBy из пакета CommonBehavior + Activity/StateMachines, строит multi-column layout.
2. **Связь потребителей Behavior**: скрипт должен искать по XMI все `subclassedElement` и `specializedClassifier` ссылающиеся на классы раздела 13, и автоматически генерировать перекрёстные гиперссылки в HTML.
3. **Резольвер ends типов для memberEnd**: в `sync_xmi_properties.py` — если ownedEnd.type пустой/не определён, искать тип через parent association's end (memberEnd → type) из другого пакета.
4. **Генерация cross-references JSON**: скрипт должен выписывать все ссылки между разделами в единый JSON (`site/data/cross-references.json`) для поиска по навигации: "какие элементы зависят от Behavior" → список Activity, StateMachine, Operation и т.д.
5. **Оптимизация Stage 1 для малых разделов**: если `last_page - first_page <= 20` (как в разделе 13), запускать `prepare_section.py` в режиме `--fast` без PDF-извлечения — достаточно дампа текста и XMI.
6. **Валидация named vs anonymous memberEnds**: добавить проверку в `check_spec_completeness.py`: все ends ассоциаций должны иметь непустое имя или быть явным образом помечены как owner-reference; ложные "атрибуты" (memberEnd) не должны попадать в таблицу свойств класса.
7. **Автоматическое определение package name**: вместо ручного ввода `package` в sections.json — скрипт должен сканировать все `<packagedElement xmi:type="uml:Package">` в XMI и строить реестр пакетов автоматически.

## Рекомендации по переносу

1. Добавить конфигурацию для `sections.json` с номером раздела **13** (Common Behavior). В поле `package` указать `CommonBehavior` (без 's').
2. Этап 2 (scaffold): создать заготовки страниц для 11 классификаторов и 12 ассоциаций. Структурные подразделы (Abstract Syntax, Semantics, Notation, Examples) не требуют отдельных страниц — это метаданные спецификации.
3. Этап 3 (XMI): извлечь свойства классов и концы ассоциаций из XMI-пакета `CommonBehavior`. Внимание: ends с пустым именем в XMI — это memberEnd, связывающий класс-владелец, а не самостоятельный атрибут.
4. Этап 5 (SVG): сгенерировать диаграммы для двух рисунков (Behaviors и Events). Обе — простые диаграммы наследования без сложной композиции.