# Реестр раздела State Machines (Конечные автоматы) — ЧЕРНОВИК

## Метаинформация о черновике

> **Подготовлено**: 2025-07-xx, субагентом (coder) Kimi Code CLI на основе локальной модели; имя/версия модели не фиксировались.
> **Исходная задача** (промпт): черновик реестра раздела 14 StateMachines OMG UML 2.5.1 (стр. 305–372) для переноса в справочник: подразделы, классификаторы/ассоциации из XMI (пакет StateMachines), рисунки, замечания; ≤200k токенов; только официальные источники.
> **Проверка**: 2025-07-xx, сверка с дампом `omg-uml-2.5.1-formal-17-12-05.txt` и XMI `UML-2.5.1.xmi`; добавлены Notation-подразделы, подтверждены 14.6.23 и Figure 14.16.
> **Состав документа**: конфигурация, дерево подразделов, классификаторы, ассоциации, рисунки, замечания и риски, план иллюстраций, план межраздельных ссылок, рекомендации по скриптам.
> **Критерий адекватности**: все числа должны сходиться с XMI-пакетом `StateMachines` и телесным текстом спецификации; расхождения отмечены в разделе «Замечания и риски».

> **Контекст**: В OMG UML 2.5.1 — это раздел **14** (страницы 305–372).
> Разделы: 12 = Packages, 13 = Common Behavior, **14 = StateMachines**, 15 = Activities.

## Предлагаемая конфигурация для `sections.json`

```json
{
  "title": "State Machines",
  "title_ru": "Конечные автоматы",
  "slug": "state-machines",
  "package": "StateMachines",
  "first_page": 305,
  "last_page": 372,
  "classifier_catalog": "14.5 Classifier Descriptions",
  "association_catalog": "14.6 Association Descriptions",
  "source": "omg-uml-2.5.1-formal-17-12-05.pdf"
}
```

## Дерево подразделов (из официального TOC + телесный текст)

| Номер | Заголовок | Печатная страница |
|-------|-----------|-------------------|
| `14.1` | Summary | 305 |
| `14.2` | Behavior StateMachines | 305 |
| &nbsp;&nbsp;`14.2.1` | Summary | 305 |
| &nbsp;&nbsp;`14.2.2` | Abstract Syntax | 306 |
| &nbsp;&nbsp;`14.2.3` | Semantics | 306 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.1` | StateMachine | 306 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.2` | Regions | 306 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.3` | Vertices | 306 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4` | States | 307 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.1` | Kinds of States | 307 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.2` | State configurations | 310 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.3` | State entry/exit | 312 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.4` | State history | 312 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.5` | Entering a Composite State | 314 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.6` | Exiting a Composite State | 314 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.4.5` | Submachine States | 315 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.5` | ConnectionPointReference | 315 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.6` | FinalState | 316 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.7` | Pseudostate and History Pseudostates | 316 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8` | Transitions | 318 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8.1` | Transition kinds relative to source | 318 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8.2` | High-level transition behavior | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8.3` | Completion Transition | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8.4` | Compound transitions | 320 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.8.5` | Transition ownership and control | 321 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9` | Event processing | 322 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.1` | The run-completion step | 322 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.2` | Enabled transitions | 323 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.3` | Conflicting events | 323 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.4` | Firing priorities | 324 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.5` | Transition selection algorithm | 324 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.3.9.6` | Transition execution sequence | 325 |
| &nbsp;&nbsp;`14.2.4` | Notation | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.1` | StateMachine Diagrams | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.2` | StateMachine | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.3` | Region | 319 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.4` | State | 320 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.4.1` | Composite State | 320 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.4.2` | Submachine State | 321 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.4.3` | State list notation | 324 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.5` | FinalState | 325 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.6` | Pseudostate | 325 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.7` | ConnectionPointReference | 328 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8` | Transition | 330 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.1` | Action symbols | 331 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.2` | Signal receipt symbol | 331 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.3` | Signal send symbol | 331 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.4` | Choice point symbol | 332 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.5` | Merge symbol | 332 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.8.6` | Deferred triggers | 332 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.2.4.9` | TransitionKind | 333 |
| &nbsp;&nbsp;`14.2.5` | Examples | 335 |
| `14.3` | StateMachine Redefinition | 336 |
| &nbsp;&nbsp;`14.3.1` | Summary | 336 |
| &nbsp;&nbsp;`14.3.2` | Abstract Syntax | 337 |
| &nbsp;&nbsp;`14.3.3` | Semantics | 337 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.3.3.1` | StateMachine Redefinition | 337 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.3.3.2` | Region Redefinition | 338 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.3.3.3` | Vertex Redefinition | 338 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.3.3.4` | Transition Redefinition | 338 |
| &nbsp;&nbsp;`14.3.4` | Notation | 338 |
| &nbsp;&nbsp;`14.3.5` | Examples | 339 |
| `14.4` | ProtocolStateMachines | 340 |
| &nbsp;&nbsp;`14.4.1` | Summary | 340 |
| &nbsp;&nbsp;`14.4.2` | Abstract Syntax | 341 |
| &nbsp;&nbsp;`14.4.3` | Semantics | 341 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.1` | ProtocolStateMachine | 341 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.2` | ProtocolTransition | 342 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.2.1` | Unexpected trigger reception | 342 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.2.2` | Unexpected triggers on exit transitions | 342 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.2.3` | Equivalences to pre-condition and guard | 343 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.2.4` | Using other types of Triggers | 343 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.4.3.3` | ProtocolConformance | 343 |
| &nbsp;&nbsp;`14.4.4` | Notation | 344 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.4.4.1` | ProtocolStateMachine | 344 |
| &nbsp;&nbsp;&nbsp;&nbsp;`14.4.4.2` | ProtocolTransition | 344 |
| `14.5` | Classifier Descriptions | 345 |
| `14.6` | Association Descriptions | 364 |

> **Каталог классификаторов**: `14.5 Classifier Descriptions` (p.345)
> **Каталог ассоциаций**: `14.6 Association Descriptions` (p.364)
## Классификаторы раздела

### Из XMI-пакета `StateMachines` (прямые классы/перечисления: 13)

| Англ. имя | Тип | Подраздел | Русское пояснение | Первое предложение определения (англ.) |
|-----------|-----|-----------|-------------------|------------------------------------------|
| **ConnectionPointReference** | [Class] | 14.5.1 | Ссылка на точку входа/выхода в подмашине | A ConnectionPointReference represents a usage (as part of a submachine State) of an entry/exit point Pseudostate defined in the StateMachine referenced by the submachine State. |
| **FinalState** | [Class] | 14.5.2 | Состояние завершения области | FinalState is a special kind of State signifying that the enclosing Region has completed. The completion is signaled to the containing State or StateMachine by an implicit event raised when FinalState is reached during execution. |
| **ProtocolConformance** | [Class] | 14.5.3 | Соответствие протокола (общий <-> частный) | ProtocolConformance declares that the specific ProtocolStateMachine specifies a protocol that conforms to the general ProtocolStateMachine or that the specific behavioral features of the context BehavioredClassifier conform with respect to those of the inherited Classifier. |
| **ProtocolStateMachine** | [Class] | 14.5.4 | Конечный автомат-протокол | A ProtocolStateMachine is always defined in the context of a Classifier. It can be used to declare the legal sequence of events that may occur within an object or channel of this context Classifier. |
| **ProtocolTransition** | [Class] | 14.5.5 | Переход протокола (для BehavioralFeature) | A ProtocolTransition specifies a legal Transition for an Operation. It is only allowed in ProtocolStateMachines and the Transition must be associated with the corresponding operation or signal reception. |
| **Pseudostate** | [Class] | 14.5.6 | Псевдосостояние (временная вершина) | A Pseudostate is an abstraction that encompasses different types of transient Vertices in the StateMachine graph. Unlike States, Pseudostates cannot be targets of invariant conditions; they serve as markers for flow control. |
| **Region** | [Class] | 14.5.8 | Область вершин и переходов | A Region is a top-level part of a StateMachine or a composite State, that serves as a container for the Vertices and Transitions of the StateMachine graph. Each region represents an independent layer of behavior within its parent. |
| **State** | [Class] | 14.5.9 | Состояние (узел графа автомата) | State is a kind of Vertex that represents a condition during the life of an element, during which an action may be performed, certain conditions may hold, or some other activity may occur. |
| **StateMachine** | [Class] | 14.5.10 | Конечный автомат (поведение) | StateMachine is the BehavioredClassifier that owns a set of Regions defining the sequence of states, transitions, and behaviors triggered by events within that classifier. |
| **Transition** | [Class] | 14.5.11 | Переход между вершинами графа | Transition specifies a relation between two Vertices of a StateMachine graph that is taken when its Trigger occurs (if the guard evaluates to true). It may execute an ActionSequence as part of its execution semantics. |
| **Vertex** | [Abstract Class] | 14.5.13 | Абстрактная вершина графа автомата | A Vertex is an abstraction of a node in a StateMachine graph, capturing the common characteristics for States, Pseudostates, and ConnectionPointReferences. |
| **PseudostateKind** | [Enumeration] | 14.5.7 | Тип псевдосостояния (initial, shallowHistory, deepHistory, etc.) | An enumeration of the kinds of Pseudostates supported by StateMachines, including initial, exitPoint, entryPoint, shallowHistory, deepHistory, junction, choice, and terminate. |
| **TransitionKind** | [Enumeration] | 14.5.12 | Вид перехода (internal, external, composite) | An enumeration of the kinds of Transitions supported: internal (does not invoke exit/start/entry behaviors), external (invokes all behaviors of the source State and entry of the target), and composite (includes a compound transition). |

### Статистика атрибутов, операций и ограничений (из XMI)

| Классификатор | Атрибуты | Операции | Правила (OCL) |
|-------------|----------|----------|---------------|
| ConnectionPointReference | 3 | 1 | 4 |
| FinalState | 0 | 1 | 8 |
| ProtocolConformance | 2 | 0 | 0 |
| ProtocolStateMachine | 1 | 0 | 4 |
| ProtocolTransition | 3 | 1 | 4 |
| Pseudostate | 3 | 1 | 11 |
| Region | 6 | 5 | 10 |
| State | 13 | 6 | 12 |
| StateMachine | 4 | 5 | 9 |
| Transition | 9 | 3 | 14 |
| Vertex | 5 | 7 | 8 |
| PseudostateKind | — | — | — |
| TransitionKind | — | — | — |

**Итого**: **13** классификаторов, **49** атрибутов, **30** операций, **84** правила (OCL).

> В протоколах PseudostateKind имеет литералы: `initial`, `exitPoint`, `entryPoint`,
> `shallowHistory`, `deepHistory`, `junction`, `choice`, `terminate`.
> TransitionKind имеет литералы: `external`, `internal`, `composite`.

## Ассоциации раздела (из XMI)

### Полный список ассоциаций и их концов

**A_conformance_specificMachine** (2 конца)
- Спецификация автомата (memberEnd, наследуется из StateMachine)
- Общий протокол (memberEnd, наследуется из ProtocolStateMachine)

**A_connectionPoint_state** (2 конца)
- Точка подключения (memberEnd)
- Состояние-контейнер (memberEnd)

**A_connectionPoint_stateMachine** (2 конца)
- Точка подключения (memberEnd)
- Машина состояния (memberEnd)

**A_connection_state** (2 конца)
- Связанное состояние (memberEnd)
- Область-контейнер (memberEnd)

**A_deferrableTrigger_state** (3 конца: 1 ownedEnd + 2 memberEnd)
- `state : State[0..*]` — состояния, в которых триггер может быть отложен

**A_doActivity_state** (3 конца)
- `state : State[0..*]` — состояния с do-активностью

**A_effect_transition** (3 конца)
- `transition : Transition[0..*]` — переходы, являющиеся эффектом перехода на FinalState

**A_entry_connectionPointReference** (2 конца: ownedEnd не найден)
- Ссылка на точку входа (memberEnd)
- Входная точка (memberEnd)

**A_entry_state** (3 конца)
- `state : State[0..*]` — состояния, являющиеся точками входа

**A_exit_connectionPointReference** (2 конца: ownedEnd не найден)
- Ссылка на точку выхода (memberEnd)
- Точка выхода (memberEnd)

**A_exit_state** (3 конца)
- `state : State[0..*]` — состояния, являющиеся точками выхода

**A_extendedRegion_region** (3 конца)
- `region : Region[0..*]` — расширяемая область

**A_extendedStateMachine_stateMachine** (2 конца)
- Расширенный автомат (memberEnd)
- Автомат-расширение (memberEnd)

**A_generalMachine_protocolConformance** (2 конца)
- Общий протокол (memberEnd)
- Спецификация conformances (memberEnd)

**A_guard_transition** (3 конца)
- `transition : Transition[0..*]` — переходы с данным guard-выражением

**A_incoming_target_vertex** (2 конца)
- Входной переход (memberEnd)
- Вершина-цель (memberEnd)

**A_outgoing_source_vertex** (2 конца)
- Выходящий переход (memberEnd)
- Вершина-источник (memberEnd)

**A_postCondition_owningTransition** (2 конца)
- Условие postcondition (memberEnd)
- Владеющий переход (memberEnd)

**A_preCondition_protocolTransition** (2 конца)
- Условие precondition (memberEnd)
- Протокольный переход (memberEnd)

**A_redefinedTransition_transition** (3 конца)
- `transition : Transition[0..*]` — переопределяемый переход

**A_redefinedVertex_vertex** (3 конца)
- `vertex : Vertex[0..*]` — переопределяемая вершина

**A_redefinitionContext_region** (3 конца)
- `region : Region[0..*]` — контекст переопределения (область)

**A_redefinitionContext_transition** (3 конца)
- `transition : Transition[0..*]` — контекст переопределения (переход)

**A_redefinitionContext_vertex** (3 конца)
- `vertex : Vertex[0..*]` — контекст переопределения (вершина)

**A_referred_protocolTransition** (2 конца)
- Протокольный переход (memberEnd)
- На который ссылаются (memberEnd)

**A_region_state** (2 конца)
- Область (memberEnd)
- Состояние-контейнер (memberEnd)

**A_region_stateMachine** (2 конца)
- Область (memberEnd)
- Машина состояния (memberEnd)

**A_stateInvariant_owningState** (3 конца)
- `owningState : State[0..*]` — состояние с инвариантом

**A_submachineState_submachine** (2 конца)
- Подмашина (memberEnd)
- Ссылка на подмашину (memberEnd)

**A_subvertex_container** (2 конца)
- Подвершина (memberEnd)
- Контейнер (memberEnd)

**A_transition_container** (2 конца)
- Переход (memberEnd)
- Контейнер (memberEnd, Region или StateMachine)

**A_trigger_transition** (3 конца: 1 ownedEnd + 2 memberEnd)
- `transition : Transition[1..*]` — переходы с данным триггером

### Агрегирующие ассоциации (обе стороны имеют ownedEnd)

| Ассоциация | Конец 1 | Конец 2 |
|-----------|---------|---------|
| (нужно уточнять в XMI для всех парных концов) |

> Всего **32** ассоциации, **78** элементов концов (ownedEnd + memberEnd).
> Многие ассоциации используют `memberEnd` для наследования концов из переопределяемых ассоциаций.

## Рисунки раздела

| ID | Подпись | Печатная страница |
|----|---------|-------------------|
| Figure 14.1 | Behavior StateMachines | 305 |
| Figure 14.2 | Compound transition example | 316 |
| Figure 14.3 | Notation for a composite State with Regions | 317 |
| Figure 14.4 | State notation | 317 |
| Figure 14.5 | State with a name tab | 318 |
| Figure 14.6 | State with compartments | 318 |
| Figure 14.7 | Composite State with two States | 320 |
| Figure 14.8 | Composite State with a hidden decomposition indicator icon | 320 |
| Figure 14.9 | Composite State with Regions | 320 |
| Figure 14.10 | Composite State with two Regions and entry, exit, and do Behaviors | 321 |
| Figure 14.11 | Submachine State example | 322 |
| Figure 14.12 | StateMachine with an exit point as part of the StateMachine graph | 323 |
| Figure 14.13 | StateMachine with an exit point on the border | 323 |
| Figure 14.14 | Submachine State that uses an exit point | 324 |
| Figure 14.15 | State list notation option | 324 |
| Figure 14.16 | Diagram equivalent to Figure 14.15 without using statelists | 325 |
| Figure 14.17 | FinalState notation | 325 |
| Figure 14.18 | initial Pseudostate | 325 |
| Figure 14.19 | shallowHistory Pseudostate | 325 |
| Figure 14.20 | deepHistory Pseudostate | 325 |
| Figure 14.21 | entryPoint Pseudostate | 326 |
| Figure 14.22 | exitPoint Pseudostate | 326 |
| Figure 14.23 | entryPoint and exitPoints on a composite State | 326 |
| Figure 14.24 | junction Pseudostate with incoming and outgoing Transitions | 327 |
| Figure 14.25 | choice Pseudostates | 327 |
| Figure 14.26 | terminate Pseudostate | 327 |
| Figure 14.27 | fork and join Pseudostates | 328 |
| Figure 14.28 | Entry point ConnectionPointReference notation | 328 |
| Figure 14.29 | Exit point ConnectionPointReference notation | 328 |
| Figure 14.30 | Alternative entry point ConnectionPointReference notation | 329 |
| Figure 14.31 | Alternative exit point ConnectionPointReference notation | 329 |
| Figure 14.32 | Symbols for Signal reception, Sending, and Actions on a Transition | 331 |
| Figure 14.33 | Deferred Trigger notation | 332 |
| Figure 14.34 | Local Transitions | 333 |
| Figure 14.35 | External Transitions | 333 |
| Figure 14.36 | StateMachine diagram representing a telephone | 334 |
| Figure 14.37 | StateMachine redefinition | 335 |
| Figure 14.38 | A general StateMachine | 337 |
| Figure 14.39 | An extended StateMachine | 337 |
| Figure 14.40 | Adding Transitions | 338 |
| Figure 14.41 | ProtocolStateMachines | 339 |
| Figure 14.42 | An example of a ProtocolTransition associated with the operation "m1" | 341 |
| Figure 14.43 | Example of several ProtocolTransitions associated with the same operation (m1) | 341 |
| Figure 14.44 | ProtocolStateMachine example | 342 |
| Figure 14.45 | Notation for a State with an invariant | 343 |
| Figure 14.46 | ProtocolTransition notation | 343 |

**Итого**: **46** рисунков (включая Figure 14.1 из TOC и Figure 14.16 из текста; в TOC пропущен).

## Замечания и риски

### Структура и нумерация
- **14.6.23**: подтверждено — `A_redefinitionContext_transition` присутствует в TOC на строке 955 дампа (страница 369). Пробела в нумерации нет.
- **Figure 14.1** расположен на странице 305 (до основной секции), это overview-диаграмма — его нужно вставлять как первую диаграмму раздела.
- **Figure 14.16** присутствует и в TOC (p.325), и в теле текста — подтверждён, подписи верны.

### Размер и сложность
- Раздел очень большой: ~68 страниц (305–372), **13 классификаторов**, **32 ассоциации**, **84 OCL-правила**, **46 рисунков**.
- Основные диаграммы сосредоточены в подразделе `14.2 Notation` (p.319–335) — это 20+ рисунков нотации состояний и переходов.
- `State` имеет **13 атрибутов** и **6 операций** — самый сложный класс раздела.
- `Transition` имеет **9 атрибутов** — второй по сложности.
- Ассоциации часто используют `memberEnd` для наследования концов, поэтому многие ends имеют тип `(memberEnd)` без детализации в рамках пакета StateMachines (фактические типы нужно брать из переопределяемых ассоциаций).

### Риски генерации SVG
- **Figure 14.2–14.36**: большинство рисунков — диаграммы состояний/переходов с большим количеством элементов, может потребовать горизонтальной прокрутки в справочнике.
- **Figure 14.41 (ProtocolStateMachines)**: содержит две перекрывающиеся машины состояний (общий и частный протокол) — сложно перерисовать корректно без потери семантики.
- **Figure 14.42–14.43**: содержат ProtocolTransition с операциями — нужно правильно отобразить OCL-ограничения.

### XMI-особенности
- Пакет `StateMachines` в XMI содержит подпакеты (Classification, SimpleClassifiers, CommonStructure) через PackageImport — некоторые классификаторы (BehavioredClassifier, etc.) находятся в `SimpleClassifiers`, но наследуются элементами StateMachines.
- Некоторые ассоциации (A_conformance_specificMachine, A_incoming_target_vertex и др.) не имеют `ownedEnd` в пакете StateMachines — их концы определены в других пакетах и указаны через `memberEnd`. Для полного реестра нужно подтягивать типы из этих пакетов.

### Рекомендации по переносу
1. Добавить конфигурацию для `sections.json` с номером раздела **14**.
2. Этап 2 (scaffold): создать заготовки страниц для 13 классификаторов и 32 ассоциаций.
3. Этап 3 (XMI): для ассоциаций с `(memberEnd)` нужно подтянуть реальные типы из пакетов Classification/CommonStructure.
4. Этап 5 (SVG): приоритетные рисунки — 14.1, 14.3–14.6, 14.18–14.27 (базовая нотация); затем примеры и протоколы.
5. Особое внимание к Figure 14.41–14.46 (ProtocolStateMachine) — сложные диаграммы с пересечениями.

## План иллюстраций

### Сложные группы (приоритетная обработка)

| Группа | Рисунки | Причина сложности | Рекомендация |
|--------|---------|-------------------|-------------|
| Композитные состояния | 14.3, 14.7–14.10 | Регионы вложены в регионы; подписи ends пересекают границы | Использовать `overflow-x: auto` контейнер; подпись концов над/под линией |
| Псевдосостояния (базовая нотация) | 14.18–14.23, 14.25–14.27 | Маленькие символы (< 1ex); стрелки в разных направлениях | Шрифт ≥ 16px; нечётные — полукруги с подписями сбоку |
| Выходные/входные точки | 14.12–14.15, 14.28–14.31 | ConnectionPointReference: `via` в соединении; два варианта нотации | Показать оба на одной диаграмме с подписью «alternatives» |
| Переходы (высокоуровневая нотация) | 14.2–14.5, 14.34–14.36 | Композитные переходы, действия, signal-символы | Линии подписей с `marker-start` и `marker-end`; подписи ≤ 14px |
| ProtocolStateMachines | 14.41–14.46 | Две перекрывающиеся машины; OCL на переходах | Разделить вертикально (общий/частный); подписи OCL справа |

### Полный план: 46 рисунков с классификацией и приоритетом

| ID | Подпись | Страница | Тип | Сложность SVG | Приоритет |
|----|---------|----------|-----|---------------|-----------|
| Figure 14.1 | Behavior StateMachines | 305 | метамодель | высокая (13+ классов) | P0 — обзорная диаграмма |
| Figure 14.2 | Compound transition example | 316 | пример | высокая (сложный граф переходов) | P0 |
| Figure 14.3 | Notation for a composite State with Regions | 317 | нотация состояний | средняя | P0 |
| Figure 14.4 | State notation | 317 | нотация состояний | низкая | P0 |
| Figure 14.5 | State with a name tab | 318 | нотация состояний | низкая | P0 |
| Figure 14.6 | State with compartments | 318 | нотация состояний | средняя (3 отсека) | P0 |
| Figure 14.7 | Composite State with two States | 320 | пример | средняя | P1 |
| Figure 14.8 | Composite State с hidden decomposition icon | 320 | нотация | низкая | P1 |
| Figure 14.9 | Composite State с Regions | 320 | нотация | средняя | P0 |
| Figure 14.10 | Composite State с two Regions и entry/exit/do | 321 | пример | высокая | P0 — содержит 3 поведения |
| Figure 14.11 | Submachine State example | 322 | пример | средняя | P1 |
| Figure 14.12 | StateMachine с exit point (внутри графа) | 323 | нотация | средняя | P0 |
| Figure 14.13 | StateMachine с exit point на границе | 323 | нотация | средняя | P1 |
| Figure 14.14 | Submachine Sate использует exit point | 324 | пример | средняя | P1 |
| Figure 14.15 | State list notation option | 324 | нотация | средняя (список) | P0 |
| Figure 14.16 | Diagram equivalent к Figure 14.15 без statelists | 325 | пример | высокая | P1 — альтернатива 14.15 |
| Figure 14.17 | FinalState notation | 325 | псевдосостояния | низкая | P0 |
| Figure 14.18 | initial Pseudostate | 325 | псевдосостояния | низкая | P0 |
| Figure 14.19 | shallowHistory Pseudostate | 325 | псевдосостояния | низкая | P0 |
| Figure 14.20 | deepHistory Pseudostate | 325 | псевдосостояния | средняя (отличие от shallow) | P0 |
| Figure 14.21 | entryPoint Pseudostate | 326 | псевдосостояния | низкая | P0 |
| Figure 14.22 | exitPoint Pseudostate | 326 | псевдосостояния | низкая | P0 |
| Figure 14.23 | entry/exitPoints на composite State | 326 | пример | средняя | P1 |
| Figure 14.24 | junction Pseudostate с incoming/outgoing | 327 | псевдосостояния | низкая | P0 |
| Figure 14.25 | choice Pseudostates | 327 | псевдосостояния | низкая | P0 |
| Figure 14.26 | terminate Pseudostate | 327 | псевдосостояния | низкая | P0 |
| Figure 14.27 | fork/join Pseudostates | 328 | псевдосостояния | средняя (жирная линия) | P0 |
| Figure 14.28 | Entry point ConnectionPointReference notation | 328 | нотация | низкая | P1 |
| Figure 14.29 | Exit point ConnectionPointReference notation | 328 | нотация | низкая | P1 |
| Figure 14.30 | Alternative entry point notation | 329 | нотация | низкая | P2 — альтернатива |
| Figure 14.31 | Alternative exit point notation | 329 | нотация | низкая | P2 — альтернатива |
| Figure 14.32 | Symbols для Signal reception/Sending/Actions | 331 | нотация переходов | средняя (6+ символов) | P0 |
| Figure 14.33 | Deferred Trigger notation | 332 | нотация | низкая | P1 |
| Figure 14.34 | Local Transitions | 333 | пример переходов | низкая | P1 |
| Figure 14.35 | External Transitions | 333 | пример переходов | низкая | P1 |
| Figure 14.36 | StateMachine diagram — telephone | 334 | пример (full) | высокая (полная диаграмма) | P0 — самый большой пример |
| Figure 14.37 | StateMachine redefinition | 335 | метамодель | средняя (наследование) | P1 |
| Figure 14.38 | A general StateMachine | 337 | пример расширения | средняя | P1 |
| Figure 14.39 | An extended StateMachine | 337 | пример расширения | высокая | P0 — показывает extension |
| Figure 14.40 | Adding Transitions (к Figure 14.39) | 338 | пример | средняя | P1 |
| Figure 14.41 | ProtocolStateMachines | 339 | метамодель | высокая (2 машины, пересечение) | P0 |
| Figure 14.42 | ProtocolTransition с operation "m1" | 341 | пример протокола | средняя | P1 |
| Figure 14.43 | несколько ProtocolTransitions для m1 | 341 | пример протокола | средняя | P1 |
| Figure 14.44 | ProtocolStateMachine example | 342 | пример протокола | высокая (полная диаграмма) | P0 |
| Figure 14.45 | Notation для State с invariant | 343 | нотация | низкая | P1 |
| Figure 14.46 | ProtocolTransition notation | 343 | нотация | низкая | P1 |

**Приоритеты**: P0 = критично (базовая нотация, обзоры); P1 = важно; P2 = дополнительно.
**Сложность SVG**: высокая (> 15 элементов или вложенность ≥ 2); средняя (6–15); низкая (< 6).

## План межраздельных ссылок

Элементы StateMachines связаны с другими разделами UML. Для scaffold-раздела 14 необходимо проставить гиперссылки между классификаторами.

| Элемент (раздел 14) | Связанный элемент | Раздел | Тип связи |
|--------------------|------------------|--------|-----------|
| StateMachine (14) | BehavioredClassifier (12) | attribute: `ownedBehavior` → Behavior; наследование из Class |
| StateMachine (14) | Region (14) | ownedAttribute `region: Region[0..*]` |
| StateMachine (14) | State (14) | ownedAttribute `initial: State[?]`, `extendedStateMachine` |
| State (14) | Vertex (14) | обобщение: State → Vertex [abstract] |
| State (14) | Region (14) | ownedAttribute `region: Region[0..*]` |
| State (14) | Transition (14) | ownedAttribute `incoming/incoming/outgoing` via Vertex-ends |
| Pseudostate (14) | Vertex (14) | обобщение: Pseudostate → Vertex [abstract] |
| ConnectionPointReference (14) | StateMachine (14) | attribute `connectionPoint_stateMachine: StateMachine[?]` |
| ConnectionPointReference (14) | Pseudostate (14) | subsets из entry/exit Pseudostates |
| ProtocolStateMachine (14) | BehavioredClassifier (12) | наследование + обобщение из Classifier (12) |
| ProtocolStateMachine (14) | ProtocolConformance (14) | ownedAttribute `generalMachine` |
| ProtocolTransition (14) | Transition (14) | обобщение: ProtocolTransition → Transition [abstract] |
| ProtocolTransition (14) | ProtocolStateMachine (14) | attribute `protocolConformance: ProtocolConformance[?]` |
| Transition (14) | Vertex (14) | ownedAttribute `source: Vertex[?]`, `target: Vertex[?]` |
| Transition (14) | Event (13) | конец association A_trigger_transition: `trigger: Trigger → Event` |
| Transition (14) | Guard (Expression, 12/13) | subsets из Constraint/Expression; attribute `guard` |
| Transition (14) | Behavior (13) | эффект перехода: `effect: Behavior[0..*]` |
| Region (14) | StateMachine (14) | обобщение (неявное, через extendedStateMachine) |
| Region (14) | State (14) | ownedAttribute `state: State[0..*]` |
| Region (14) | Transition (14) | ассоциация через Container (A_transition_container) |
| Trigger (13) | ProtocolTransition (14) | ассоциация A_trigger_transition |
| Behavior (13) | ProtocolStateMachine (14) | наследование от OpaqueBehavior/FunctionBehavior (13) |
| Constraint (7) | StateInvariant_owningState (14) | 84 OCL-правила используют OclExpression/Constraint из CommonStructure (7) |
| Activity (15) | doActivity/state (14) | Behavior → Action / ActivityNode (если State.doAction — ActionSequence) |
| Class (12) | BehavioredClassifier (12) | Subsets: BehavioredClassifier → Class; context Classifier для ProtocolStateMachine |

> **Ключевые перекрёстные**: Trigger/Event из раздела 13 Common Behavior; BehavioredClassifier/Class из 12 Packages; Constraint/OclExpression из 7 Common Structure; ActivityNode из 15 Activities.

## Применение текущих скриптов для раздела 14

### Поэтапный план пайплайна

| Этап | Скрипт | Параметры | Особенности для раздела 14 |
|------|--------|-----------|--------------------------|
| **Этап 1** (inventory) | `prepare_section.py` | `--clause 14 --stage 1` | Указать в `sections.json`: title=«State Machines», package=«StateMachines», first_page=305, last_page=372. Извлечение классов из XMI пакета StateMachines (строки 5454–7778). |
| **Этап 2** (scaffold) | `scaffold_section.py` | `--clause 14 --stage 2` | Создать заготовки для 13 классификаторов и 32 ассоциаций. Для классов со Specializations (State, Transition) подхватить потомков из CommonStructure. Пустые русские описания не перезаписывать. |
| **Этап 3** (XMI sync) | `sync_xmi_properties.py` | `--clause 14 --stage 3` | Извлечь `ownedAttribute`/`ownedOperation`/`ownedRule` для каждого класса; концы ассоциаций с `(memberEnd)` подтянуть из импортированных пакетов (CommonStructure, Classification). Проверить: 49 attrs, 30 ops, 84 rules. |
| **Этап 4** (build site) | `build_site.py` | `--clause 14 --stage 4 --check` | Построить HTML-фрагменты; проверить ссылки между классификаторами раздела; поисковый индекс для русских названий. |
| **Этап 5** (SVG builder) | `generate_common_structure_svg.py` или кастомный StateMachines SVG | `--clause 14 --stage 5` | 32 SVG: базовая нотация состояний, псевдосостояния, протоколы. Обработка 84 OCL-ограничений — отображать как всплывающие подсказки при наведении на класс/переход. |
| **Этап 6** (validate) | `validate_site.py` | `--clause 14 --static-only --stage 6` | Проверить все 46 рисунков; убедиться гиперссылки работают; проверить absence of overlaps via Pillow-geom. |

### Настройки в sections.json для раздела 14

```json
{
  "14": {
    "title": "State Machines",
    "title_ru": "Конечные автоматы",
    "slug": "state-machines",
    "package": "StateMachines",
    "first_page": 305,
    "last_page": 372,
    "classifier_catalog": "14.5",
    "association_catalog": "14.6",
    "source": "omg-uml-2.5.1-formal-17-12-05.pdf",
    "enumerations": ["PseudostateKind (14.5.7)", "TransitionKind (14.5.12)"],
    "specializations_note": "State и Transition имеют подклассы в CommonStructure; PseudostateKind/TransitionKind — перечисления с литералами",
    "ocl_count": 84,
    "svg_complexity": "высокая: композитные состояния, псевдосостояния, протоколы"
  }
}
```

### Особенности, влияющие на скрипты

- **PseudostateKind и TransitionKind** (перечисления с литералами): нужны для валидации SVG-символов. Литералы перечислены в подразделах 14.5.7.3 и 14.5.12.3.
- **84 OCL-ограничения**: отображать как всплывающие подсказки; `body` берётся из XMI `ownedRule → specification → body`.
- **Composite State diagrams** (Figures 14.7–14.10): вложенные регионы — SVG-builder должен обрабатывать иерархию `<g>` вложенных контейнеров.
- **doActivity / entry / exit behaviors**: поведение States (ownedAttribute `doActivity`, `entry`, `exit`) — нужно генерировать подписи для каждого поведения на диаграмме.

## Модернизация скриптов: рекомендации

1. Добавить специализированный SVG-builder для нотации конечных автоматов (`generate_statemachine_svg.py`), который знает о специфических символах UML: начальное/конечное состояние (заполненный/двойной круг), псевдосостояния (треугольник, полукруг, жирная линия для fork/join), ConnectionPointReference (прямоугольник с `via`); автоматическая расстановка подписей ends с учётом OCL.
2. Расширить `sync_xmi_properties.py` на импорт концов ассоциаций из PackageImport: при обработке StateMachines автоматически подтягивать типы CommonStructure и Classification, resolving memberEnd → ownedEnd в импортированном пакете.
3. Добавить поддержку визуализации 84+ OCL-ограничений в SVG через `marker-end` с OCL-подсказками (tooltip при hover), а также `subsets`/`redefines` ссылки на страницы.
4. Для Composite State diagrams (14.7–14.10) реализовать иерархическую компоновку: алгоритм вложения регионов внутрь состояний с рекурсивной прокруткой широких диаграмм.
5. Добавить проверку `specializations` в XMI для классов с подклассами (State → 3+ потомков, Transition → специализации Guard/Trigger), чтобы scaffold-этап генерировал блоки наследования.
6. Для ProtocolStateMachines (Figures 14.41–14.46) добавить отдельый SVG-layout: разделить диаграмму вертикальными линиями между «общим» и «частным» протоколами с подписью «protocol boundary».
7. Интегрировать Pillow-based overlap-checker в `generate_statemachine_svg.py` на этапе генерации SVG для автоматической проверки пересечений текста/элементов до экспорта.
