# Реестр раздела State Machines (Конечные автоматы) — ЧЕРНОВИК

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

## Дерево подразделов (из официального TOC)

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
- **Пропуск в TOC**: раздел `14.6.23` отсутствует в оглавлении (прыжок от `.22` к `.24`). Нужно проверить, действительно ли ассоциация `.23` не существует или это ошибка оригинала.
- **Figure 14.1** расположен на странице 305 (до основной секции), это overview-диаграмма — его нужно вставлять как первую диаграмму раздела.
- **Figure 14.16** не занесён в TOC, но существует в теле текста (p.325). Его нужно включать.

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
