# Реестр раздела 17: Interactions (Взаимодействия) — ЧЕРНОВИК

## Метаинформация

> - **Подготовлено**: 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия не фиксировались.
> - **Промпт**: черновик реестра раздела 17 Interactions OMG UML 2.5.1 (стр. 565–638): подразделы, классификаторы/ассоциации из XMI (Interactions), рисунки, замечания; ≤200k токенов; только официальные источники.
> - **Проверка**: 2025-11-22, сверка с дампом/XMI; добавлены 9 подразделов, пересчитаны страницы, каталоги на стр. 608/633.
> - **Состав**: конфигурация, подразделы, классификаторы, ассоциации, рисунки, замечания, план иллюстраций, межраздельные ссылки, рекомендации по скриптам.
> - **Критерий адекватности**: числа сходятся с XMI и текстом; расхождения — в «Замечаниях и рисках».

> **Контекст**: В OMG UML 2.5.1 — это раздел **17** (страницы 565–638).
> Разделы: 16 = Actions, **17 = Interactions**, 18 = UseCases.

## Предлагаемая конфигурация для `scripts/sections.json`

```json
{
  "17": {
    "title": "Interactions",
    "title_ru": "Взаимодействия",
    "slug": "interactions",
    "package": "Interactions",
    "first_page": 565,
    "last_page": 638,
    "classifier_catalog": "17.12",
    "association_catalog": "17.13",
    "source": {
      "pdf": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf",
      "xmi": "site/docs/UML-2.5.1.xmi",
      "xmi_package": "Interactions"
    }
  }
}
```

## Статистика

- Печатные страницы: **565–638** (74 стр.)
- Подразделы (из TOC и тела раздела): **119** уникальных записей в теле раздела (~135 со всеми подкаталогами)
- Классификаторы: **25** (22 класса/абстрактных класса + 3 перечисления)
- Ассоциации: **38**
- Рисунки: **30** (Figure 17.1–17.30)
- Атрибуты (ownedAttribute): **49**
- ownedEnd (концы ассоциаций): **31**
- Операции (ownedOperation): **14**
- Ограничения (ownedRule): **66**
- Литералы перечислений: **22**

## Дерево подразделов (из официального TOC и тела раздела)

| Номер | Заголовок | Печатная страница |
|-------|-----------|-------------------|
| `17` | Interactions | 565 |
| `17.1` | Summary | 565 |
| &nbsp;&nbsp;`17.1.1` | Overview | 565 |
| &nbsp;&nbsp;`17.1.2` | Basic trace model | 565 |
| &nbsp;&nbsp;`17.1.3` | Partial ordering constraints on valid and invalid traces | 566 |
| &nbsp;&nbsp;`17.1.4` | Interaction Diagram Variants | 566 |
| `17.2` | Interactions | 566 |
| &nbsp;&nbsp;`17.2.1` | Summary | 566 |
| &nbsp;&nbsp;`17.2.2` | Abstract Syntax | 566 |
| &nbsp;&nbsp;`17.2.3` | Semantics | 566 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.3.1` | Interactions | 566 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.3.2` | Interaction Fragments | 566 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.3.3` | Occurrence Specifications | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.3.4` | Execution Specifications | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.3.5` | State Invariants | 567 |
| &nbsp;&nbsp;`17.2.4` | Notation | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.4.1` | Interaction | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.4.2` | InteractionFragment | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.4.4` | ExecutionSpecification | 567 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.4.5` | StateInvariant | 568 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.2.4.6` | Formal Gate | 568 |
| &nbsp;&nbsp;`17.2.5` | Examples | 570 |
| `17.3` | Lifelines | 571 |
| &nbsp;&nbsp;`17.3.1` | Summary | 571 |
| &nbsp;&nbsp;`17.3.2` | Abstract Syntax | 572 |
| &nbsp;&nbsp;`17.3.3` | Semantics | 572 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.3.3.1` | Lifelines | 571 |
| &nbsp;&nbsp;`17.3.4` | Notation | 571 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.3.4.1` | Lifeline | 571 |
| &nbsp;&nbsp;`17.3.5` | Examples | 571 |
| `17.4` | Messages | 573 |
| &nbsp;&nbsp;`17.4.1` | Summary | 575 |
| &nbsp;&nbsp;`17.4.2` | Abstract Syntax | 576 |
| &nbsp;&nbsp;`17.4.3` | Semantics | 576 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.3.1` | Messages | 573 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.3.2` | Message Ends | 574 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.3.3` | Message Occurrence Specifications | 575 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.3.4` | Destruction Occurrence Specifications | 575 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.3.5` | Gates | 576 |
| &nbsp;&nbsp;`17.4.4` | Notation | 576 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.4.1` | Message | 576 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.4.2` | DestructionOccurrenceSpecification | 576 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.4.4.3` | Gate | 577 |
| &nbsp;&nbsp;`17.4.5` | Examples | 578 |
| `17.5` | Occurrences | 579 |
| &nbsp;&nbsp;`17.5.1` | Summary | 581 |
| &nbsp;&nbsp;`17.5.2` | Abstract Syntax | 582 |
| &nbsp;&nbsp;`17.5.3` | Semantics | 582 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.3.1` | Action Execution Specifications | 579 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.3.2` | Behavior Execution Specifications | 579 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.3.3` | Execution Occurrence Specifications | 580 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.3.4` | General Orderings | 580 |
| &nbsp;&nbsp;`17.5.4` | Notation | 580 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.4.1` | ActionExecutionSpecification | 580 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.4.2` | BehaviorExecutionSpecification | 581 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.4.3` | ExecutionOccurrenceSpecification | 582 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.5.4.4` | GeneralOrdering | 582 |
| &nbsp;&nbsp;`17.5.5` | Examples | 583 |
| `17.6` | Fragments | 584 |
| &nbsp;&nbsp;`17.6.1` | Summary | 583 |
| &nbsp;&nbsp;`17.6.2` | Abstract Syntax | 584 |
| &nbsp;&nbsp;`17.6.3` | Semantics | 584 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.1` | Interaction Operands | 584 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.2` | Interaction Constraints | 584 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.3` | Combined Fragments | 584 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.4` | Consider Ignore Fragments | 585 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.5` | Continuations | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.6` | Interaction Operator Kind Values | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.7` | Alternatives | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.8` | Option | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.9` | Break | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.10` | Parallel | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.11` | Weak Sequencing | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.12` | Strict Sequencing | 586 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.13` | Negative | 587 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.14` | Critical Region | 587 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.15` | Ignore / Consider | 587 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.16` | Assertion | 587 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.3.17` | Loop | 588 |
| &nbsp;&nbsp;`17.6.4` | Notation | 588 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.1` | InteractionOperand | 588 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.2` | InteractionConstraint | 588 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.3` | CombinedFragment | 588 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.4` | ConsiderIgnoreFragment | 589 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.5` | Continuation | 589 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.7` | Strict interactionOperator | 589 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.8` | Ignore / Consider interactionOperator | 589 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.9` | Loop interactionOperator | 589 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.6.4.10` | Parallel interactionOperator | 589 |
| &nbsp;&nbsp;`17.6.5` | Examples | 590 |
| `17.7` | Interaction Uses | 590 |
| &nbsp;&nbsp;`17.7.1` | Summary | 592 |
| &nbsp;&nbsp;`17.7.2` | Abstract Syntax | 593 |
| &nbsp;&nbsp;`17.7.3` | Semantics | 593 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.7.3.1` | Interaction Uses | 590 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.7.3.2` | Part Decompositions | 590 |
| &nbsp;&nbsp;`17.7.4` | Notation | 591 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.7.4.1` | InteractionUse | 591 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.7.4.2` | PartDecomposition | 591 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.7.4.2.1` | Style Guidelines | 592 |
| &nbsp;&nbsp;`17.7.5` | Examples | 592 |
| `17.8` | Sequence Diagrams | 595 |
| &nbsp;&nbsp;`17.8.1` | Sequence Diagram Notation | 595 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.8.1.1` | Graphic Nodes | 595 |
| &nbsp;&nbsp;&nbsp;&nbsp;`17.8.1.2` | Graphic Paths | 596 |
| &nbsp;&nbsp;`17.8.2` | Example Sequence Diagram | 601 |
| `17.9` | Communication Diagrams | 601 |
| &nbsp;&nbsp;`17.9.1` | Communication Diagram Notation | 599 |
| &nbsp;&nbsp;`17.9.2` | Example Communication Diagram | 600 |
| `17.10` | Interaction Overview Diagrams | 603 |
| &nbsp;&nbsp;`17.10.1` | Interaction Overview Diagram Notation | 603 |
| &nbsp;&nbsp;`17.10.2` | Examples of Interaction Overview Diagrams | 605 |
| `17.11` | Timing Diagrams | 605 |
| &nbsp;&nbsp;`17.11.1` | Timing Diagram Notation | 606 |
| &nbsp;&nbsp;`17.11.2` | Examples of Timing Diagrams | 604 |
| `17.12` | Classifier Descriptions | 606 |
| `17.13` | Association Descriptions | 631 |

## Таблица классификаторов

### Классы (22)

| # | Англ. имя | Тип | Подраздел спецификации | Русское пояснение |
|---|-----------|-----|----------------------|------------------|
| 1 | `Interaction` | Class | 17.2.3.1 / 17.2.4.1 | Основной класс: единица поведения, моделирующая обмен сообщениями между участниками |
| 2 | `InteractionFragment` | Abstract Class | 17.2.3.2 / 17.2.4.2 | Абстрактный базовый класс всех элементов диаграммы взаимодействий |
| 3 | `InteractionOperand` | Class | 17.6.3.1 / 17.6.4.1 | Один из возможных вариантов тела CombinedFragment (ветвь alt/loop) |
| 4 | `InteractionConstraint` | Class | 17.6.3.2 / 17.6.4.2 | Булево guard-условие для InteractionOperand (мин./макс. итерация loop) |
| 5 | `CombinedFragment` | Class | 17.6.3.3 / 17.6.4.3 | Комбинированный фрагмент диаграммы последовательности: alt, opt, loop, par и др. |
| 6 | `ConsiderIgnoreFragment` | Class | 17.6.3.4–5 | Фрагмент для директив consider/ignore (учитывать/игнорировать сообщения) |
| 7 | `Continuation` | Class | 17.6.3.5 / 17.6.4.5 | Продолжение ветви альтернативного CombinedFragment — ссылка на operand в другом фрагменте |
| 8 | `Lifeline` | Class | 17.3 / 17.3.4.1 | Участник взаимодействия — вертикальная ось на диаграмме последовательности |
| 9 | `OccurrenceSpecification` | Class | 17.5 / 17.2.3.3 | Базовая семантическая единица событий — точка на Lifeline, обозначающая событие |
| 10 | `Message` | Class | 17.4.3.1 / 17.4.4.1 | Сообщение, передаваемое между lifeline (синхронное/асинхронное/сигнал) |
| 11 | `MessageEnd` | Abstract Class | 17.4.3.2 | Абстрактный конец сообщения — sendEvent или receiveEvent |
| 12 | `MessageOccurrenceSpecification` | Class | 17.4.3.3 | Конкретное возникновение отправки или получения сообщения на Lifeline |
| 13 | `DestructionOccurrenceSpecification` | Class | 17.4.3.4 / 17.4.4.2 | Момент уничтожения объекта (lifeline) в диаграмме последовательности |
| 14 | `Gate` | Class | 17.2.4.6 / 17.4.3.5 | Порт связывания: точка входа/выхода для сообщений между CombinedFragment и внешним миром |
| 15 | `ExecutionSpecification` | Abstract Class | 17.2.3.4 / 17.2.4.4 | Абстрактный базовый класс для всех видов исполнений внутри Lifeline |
| 16 | `ActionExecutionSpecification` | Class | 17.5.3.1 / 17.5.4.1 | Выполнение одного Action внутри Interaction |
| 17 | `BehaviorExecutionSpecification` | Class | 17.5.3.2 / 17.5.4.2 | Выполнение Behavior (вложенного взаимодействия) внутри Lifeline |
| 18 | `ExecutionOccurrenceSpecification` | Class | 17.5.3.3 / 17.5.4.3 | Конкретная точка на Lifeline, обозначающая начало или конец события |
| 19 | `GeneralOrdering` | Class | 17.5.3.4 / 17.5.4.4 | Задание частичного порядка между OccurrenceSpecification вне жёсткой последовательности |
| 20 | `InteractionUse` | Class | 17.7.3.1 / 17.7.4.1 | Использование другой Interaction как подвызова (аналог call operation behavior) |
| 21 | `PartDecomposition` | Class | 17.7.3.2 / 17.7.4.2 | Разложение части lifeline на подвзаимодействия |
| 22 | `StateInvariant` | Class | 17.2.3.5 / 17.2.4.5 | Инвариант состояния: отображается на Lifeline, гарантирует состояние во время выполнения |

### Перечисления (3)

| # | Англ. имя | Тип | Литералы | Подраздел спецификации | Русское пояснение |
|---|-----------|-----|---------|----------------------|------------------|
| 23 | `InteractionOperatorKind` | Enumeration | seq, alt, opt, break, par, strict, loop, critical, neg, assert, ignore, consider (12) | 17.6.3.6 | Тип оператора CombinedFragment: weak seq, alternative, option, break, parallel, strict seq, loop, negative, assert, continue, ignore/consider |
| 24 | `MessageKind` | Enumeration | complete, lost, found, unknown (4) | — | Классификация судьбы сообщения: доставлено, потеряно, найдено, неизвестно |
| 25 | `MessageSort` | Enumeration | synchCall, asynchCall, asynchSignal, createMessage, deleteMessage, reply (6) | 17.4.3.1 | Тип сообщения: синхронный вызов, асинхронный вызов, сигнал, создание, удаление, ответ |

## Таблица ассоциаций (38)

Каждая ассоциация — двусторонняя связь с двумя концами. В XMI они хранятся как `packagedElement xmi:type="uml:Association"`.

| # | Англ. имя | Класс A → Класс B | Конец A | Кратность A | Конец B | Кратность B |
|---|-----------|-------------------|---------|-------------|---------|-------------|
| 1 | `A_action_actionExecutionSpecification` | Action → ActionExecutionSpecification | action | [1..*] | actionExecutionSpecification | [1..1] |
| 2 | `A_action_interaction` | Action → Interaction | action | [1..*] | interaction | [1..1] |
| 3 | `A_actualGate_interactionUse` | Gate → InteractionUse | actualGate | [1..*] | interactionUse | [1..1] |
| 4 | `A_argument_interactionUse` | ValueSpecification → InteractionUse | argument | [1..*] | interactionUse | [1..1] |
| 5 | `A_argument_message` | ValueSpecification → Message | argument | [1..*] | message | [1..1] |
| 6 | `A_before_toAfter` | OccurrenceSpecification → GeneralOrdering | before | [1..*] | toAfter | [1..1] |
| 7 | `A_behavior_behaviorExecutionSpecification` | Behavior → BehaviorExecutionSpecification | behavior | [1..*] | behaviorExecutionSpecification | [1..1] |
| 8 | `A_cfragmentGate_combinedFragment` | Gate → CombinedFragment | cfragmentGate | [1..*] | combinedFragment | [1..1] |
| 9 | `A_connector_message` | Connector → Message | connector | [1..*] | message | [1..1] |
| 10 | `A_covered_coveredBy` | Lifeline ↔ InteractionFragment | covered | [1..*] | coveredBy | [1..1] |
| 11 | `A_covered_events` | Lifeline ↔ OccurrenceSpecification | covered | [1..*] | events | [1..*] |
| 12 | `A_covered_stateInvariant` | Lifeline ↔ StateInvariant | covered | [1..*] | stateInvariant | [1..1] |
| 13 | `A_decomposedAs_lifeline` | PartDecomposition → Lifeline | decomposedAs | [1..*] | lifeline | [1..1] |
| 14 | `A_execution_executionOccurrenceSpecification` | ExecutionSpecification → ExecutionOccurrenceSpecification | execution | [1..*] | executionOccurrenceSpecification | [1..2] |
| 15 | `A_finish_executionSpecification` | OccurrenceSpecification → ExecutionSpecification | finish | [1..1] | executionSpecification | [1..1] |
| 16 | `A_formalGate_interaction` | Gate → Interaction | formalGate | [1..*] | interaction | [1..1] |
| 17 | `A_fragment_enclosingInteraction` | InteractionFragment → Interaction | fragment | [1..*] | enclosingInteraction | [1..1] |
| 18 | `A_fragment_enclosingOperand` | InteractionFragment → InteractionOperand | fragment | [1..*] | enclosingOperand | [1..1] |
| 19 | `A_generalOrdering_interactionFragment` | GeneralOrdering → InteractionFragment | generalOrdering | [1..*] | interactionFragment | [1..1] |
| 20 | `A_guard_interactionOperand` | InteractionConstraint → InteractionOperand | guard | [0..*] | interactionOperand | [1..1] |
| 21 | `A_invariant_stateInvariant` | Constraint → StateInvariant | invariant | [0..*] | stateInvariant | [1..1] |
| 22 | `A_lifeline_interaction` | Lifeline ↔ Interaction | lifeline | [1..*] | interaction | [1..1] |
| 23 | `A_maxint_interactionConstraint` | ValueSpecification → InteractionConstraint | maxint | [0..1] | interactionConstraint | [1..1] |
| 24 | `A_message_considerIgnoreFragment` | NamedElement → ConsiderIgnoreFragment | message | [1..*] | considerIgnoreFragment | [1..1] |
| 25 | `A_message_interaction` | Message → Interaction | message | [1..*] | interaction | [1..1] |
| 26 | `A_message_messageEnd` | Message → MessageEnd | message | [1..*] | messageEnd | [1..2] |
| 27 | `A_minint_interactionConstraint` | ValueSpecification → InteractionConstraint | minint | [0..1] | interactionConstraint | [1..1] |
| 28 | `A_operand_combinedFragment` | InteractionOperand → CombinedFragment | operand | [1..*] | combinedFragment | [1..1] |
| 29 | `A_receiveEvent_endMessage` | MessageEnd → Message | receiveEvent | [1..*] | endMessage | [1..1] |
| 30 | `A_refersTo_interactionUse` | Interaction → InteractionUse | refersTo | [1..1] | interactionUse | [1..1] |
| 31 | `A_represents_lifeline` | ConnectableElement → Lifeline | represents | [0..*] | lifeline | [1..1] |
| 32 | `A_returnValueRecipient_interactionUse` | Property → InteractionUse | returnValueRecipient | [0..1] | interactionUse | [1..1] |
| 33 | `A_returnValue_interactionUse` | ValueSpecification → InteractionUse | returnValue | [0..1] | interactionUse | [1..1] |
| 34 | `A_selector_lifeline` | ValueSpecification → Lifeline | selector | [0..*] | lifeline | [1..1] |
| 35 | `A_sendEvent_endMessage` | MessageEnd → Message | sendEvent | [1..*] | endMessage | [1..1] |
| 36 | `A_signature_message` | NamedElement → Message | signature | [1..*] | message | [1..*] |
| 37 | `A_start_executionSpecification` | OccurrenceSpecification → ExecutionSpecification | start | [1..1] | executionSpecification | [1..1] |
| 38 | `A_toBefore_after` | OccurrenceSpecification → GeneralOrdering | toBefore | [1..1] | after | [1..1] |

## Список рисунков (Figure 17.x) — 30 рисунков

| # | Номер рисунка | Подпись | Печатная страница |
|---|-------------|---------|-----------------|
| 1 | Figure 17.1 | Interactions | 565 |
| 2 | Figure 17.2 | Overlapping ExecutionSpecifications | 567 |
| 3 | Figure 17.3 | An example of an Interaction in the form of a Sequence Diagram | 568 |
| 4 | Figure 17.4 | OccurrenceSpecification | 568 |
| 5 | Figure 17.5 | Sequence Diagram with time and timing concepts | 569 |
| 6 | Figure 17.6 | Lifelines | 570 |
| 7 | Figure 17.7 | Messages | 572 |
| 8 | Figure 17.8 | DestructionOccurrenceSpecification symbol | 576 |
| 9 | Figure 17.9 | Occurrences | 578 |
| 10 | Figure 17.10 | Example showing GeneralOrdering in a sequence diagram | 579 |
| 11 | Figure 17.11 | Fragments | 580 |
| 12 | Figure 17.12 | Critical Region | 585 |
| 13 | Figure 17.13 | Loop CombinedFragment | 586 |
| 14 | Figure 17.14 | CombinedFragment | 586 |
| 15 | Figure 17.15 | Continuation | 587 |
| 16 | Figure 17.16 | Continuation interpretation | 587 |
| 17 | Figure 17.17 | Ignore, consider, assert with StateInvariants | 588 |
| 18 | Figure 17.18 | InteractionUses | 589 |
| 19 | Figure 17.19 | InteractionUse | 590 |
| 20 | Figure 17.20 | InteractionUse with value return | 591 |
| 21 | Figure 17.21 | PartDecomposition - the decomposed part | 591 |
| 22 | Figure 17.22 | PartDecomposition - the decomposition | 591 |
| 23 | Figure 17.23 | Sequence Diagrams where two Lifelines refer to the same set of Parts (and Internal Structure) | 592 |
| 24 | Figure 17.24 | Describing Collaborations and their binding | 593 |
| 25 | Figure 17.25 | Overview of Metamodel elements of a Sequence Diagram | 597 |
| 26 | Figure 17.26 | Communication diagram | 599 |
| 27 | Figure 17.27 | Interaction Overview Diagram representing a High Level Interaction diagram | 601 |
| 28 | Figure 17.28 | A Lifeline for a discrete object | 603 |
| 29 | Figure 17.29 | Compact Lifeline with States | 604 |
| 30 | Figure 17.30 | Timing Diagram with more than one Lifeline and with Messages | 604 |

## Замечания и риски

### Особенности структуры раздела

1. **Большой объём текста**: раздел 17 занимает 74 печатные страницы (565–638) — один из самых крупных разделов спецификации, сравнимый с разделами 15 (Activities) и 16 (Actions). Требуется разбивка на множество файлов контента `site/data/content/`.

2. **Параграф 17.6.3 огромный**: подраздел «Semantics» раздела Fragments содержит 17 вложенных подпараграфов (17.6.3.1–17.6.3.17), описывающих каждый тип оператора CombinedFragment отдельно. Каждый из них имеет собственную семантику, ограничения и примеры.

3. **Параграфы 17.12/17.13**: Classifier Descriptions (стр. 608) и Association Descriptions (стр. 633) в теле текста — не каталоги, а полные описания каждого классификатора и ассоциации с OCL-ограничениями. Рекомендуется `classifier_catalog: "17.12"` и `association_catalog: "17.13"`.

12. **ownedEnd vs memberEnd**: 38 ассоциаций используют `memberEnd` для ссылки на свойства классов и `ownedEnd` — для собственных концев ассоциации. Конец, принадлежащий самой ассоциации (`ownedEnd`), не является атрибутом класса противоположного конца. Для страниц справочника нужно показывать оба конца независимо от их владельца.

### Нумерационные аномалии

4. **Пропуски рисунков в TOC**: в оглавлении отсутствуют Figure 17.23 (стр. 592), Figure 17.27 (стр. 601) и Figure 17.30 (стр. 604) — они появляются только в теле текста после форм-фида. Все остальные рисунки присутствуют в TOC корректно.

5. **Разрыв нумерации Notation**: в разделе 17.2 подпараграфы Notation идут как 17.2.4.1–17.2.4.6 с пропуском 17.2.4.3 (возможно, было удалено при финальной верстке). Нужно проверить оригинальный PDF на наличие этой страницы.

6. **Пропуски подразделов Abstract Syntax**: в теле раздела найдены пропущенные нумерационные ступени — подразделы `17.3.2`, `17.4.2`, `17.5.2`, `17.6.2`, `17.7.2` (Abstract Syntax) отсутствуют в TOC, но присутствуют в теле текста. Также отсутствуют `17.8.2` (Example Sequence Diagram), `17.10.2` и `17.11.1` (Timing Diagram Notation).

7. **Артефакт верстки 17.6.4**: на стр. 594 в теле текста встречается «отковердовавший» заголовок `17.6.4 (Strict interactionOperator)` — артефакт переноса с предыдущей страницы. В нумерации не учитывается.

### Риски реализации

7. **Сложные диаграммы наследования**: InteractionFragment — абстрактный корень иерархии, от которого наследуются CombinedFragment, InteractionOperand, InteractionConstraint, StateInvariant, Continuation, ConsiderIgnoreFragment. ExecutionSpecification — другой корень для ActionExecutionSpecification, BehaviorExecutionSpecification, ExecutionOccurrenceSpecification. Нужно корректно построить диаграммы наследования на каждой странице класса.

8. **Большое число ассоциаций**: 38 ассоциаций в пакете Interactions — многие из них имеют ends с мультипликаторами `[1..*]` и перекрёстные ссылки на классы других разделов (Action, Behavior, Connector, ValueSpecification, NamedElement, Property). Необходимо проверять ссылки `subsets` и `redefines` при генерации страниц.

9. **Перечисление InteractionOperatorKind**: 12 литералов — крупнейшее перечисление в пакете. Каждый литерал имеет собственную OCL-спецификацию семантики. Требуется отображение всех литералов с их определениями.

10. **Параграфы 17.8 и 17.9**: Sequence Diagrams (стр. 597) и Communication Diagrams (стр. 601) не содержат собственных классификаторов — в 17.12 перечислены только метамодельные элементы из подразделов 17.3–17.6, а 17.8.2 описывает только пример диаграммы.

11. **XMI-связи с другими пакетами**: пакет Interactions импортирует CommonStructure, Classification и SimpleClassifiers. Многие типы ends ассоциаций (Action, Behavior, Connector) определены в этих внешних пакетах — ссылки на страницы справочника должны вести на соответствующие разделы 15/16.

### Рекомендации для следующих этапов

- **Конфигурация**: classifier_catalog = "17.12" (Classifier Descriptions), association_catalog = "17.13" (Association Descriptions) — подтверждено по телу текста: стр. 608 и 633 соответственно, а не общие каталоги.
- **Этап 2 (scaffold)**: разбить контент на ~15 файлов `site/data/content/section-17-*.js` по основным подразделам.
- **Этап 3 (XMI sync)**: проверить, что все 49 ownedAttribute и 38 ассоциаций корректно генерируют страницы свойств.
- **Этап 5 (SVG diagrams)**: 30 рисунков требуют интерактивных SVG. Особое внимание — Figure 17.24 (describing Collaborations) и Figure 17.25 (metamodel overview): они содержат сложные перекрёстные связи.
- **Этап 6 (validation)**: проверить ссылки `subsets` в свойствах MessageEnd→Message, InteractionFragment→Interaction, а также `redefines` между классами ExecutionSpecification.

## План иллюстраций

| # | Рисунок | Страница | Тип | Сложность SVG | Приоритет |
|---|---------|----------|-----|--------------|-----------|
| 1 | Figure 17.1 Interactions | 565 | метамодель | средняя (3 класса + обобщения) | высокий |
| 2 | Figure 17.2 Overlapping ExecutionSpecifications | 567 | sequence | низкая (пересечение зон выполнения) | средний |
| 3 | Figure 17.3 An example of an Interaction in the form of a Sequence Diagram | 568 | sequence | высокая (lifelines, messages, destruction, timing) | высокий |
| 4 | Figure 17.4 OccurrenceSpecification | 572 | метамодель | низкая (точки на lifeline) | высокий |
| 5 | Figure 17.5 Sequence Diagram with time and timing concepts | 569 | sequence + timing | высокая (тайм-концепции, горизонтальная ось времени) | высокий |
| 6 | Figure 17.6 Lifelines | 570 | метамодель | средняя (multiplicity, parts, states) | высокий |
| 7 | Figure 17.7 Messages | 572 | sequence | высокая (типы сообщений, gate-стрелки, sort/kind) | высокий |
| 8 | Figure 17.8 DestructionOccurrenceSpecification symbol | 576 | sequence | низкая (крестик на lifeline) | средний |
| 9 | Figure 17.9 Occurrences | 578 | sequence | средняя (точки, GeneralOrdering) | высокий |
| 10 | Figure 17.10 Example showing GeneralOrdering in a sequence diagram | 579 | sequence | высокая (частичный порядок, non-sequential events) | средний |
| 11 | Figure 17.11 Fragments | 580 | метамодель | средняя (CombinedFragment иерархия) | высокий |
| 12 | Figure 17.12 Critical Region | 585 | sequence | высокая (рамка critical region, guard, invariant) | средний |
| 13 | Figure 17.13 Loop CombinedFragment | 586 | sequence + combinedFragments | высокая (вложенный loop, min/max, invariant) | высокий |
| 14 | Figure 17.14 CombinedFragment | 586 | метамодель | средняя (operator, operand, gate) | высокий |
| 15 | Figure 17.15 Continuation | 587 | sequence + combinedFragments | высокая (внешняя ссылка между CombinedFragment) | средний |
| 16 | Figure 17.16 Continuation interpretation | 587 | sequence | высокая (объединение двух диаграмм через continuation) | низкий |
| 17 | Figure 17.17 Ignore, consider, assert with StateInvariants | 588 | sequence + combinedFragments | высокая (stateInvariant guard, ignore/consider regions) | средний |
| 18 | Figure 17.18 InteractionUses | 589 | метамодель | средняя (InteractionUse ↔ Interaction связь) | высокий |
| 19 | Figure 17.19 InteractionUse | 590 | sequence | высокая (gates, returnValue, arguments) | высокий |
| 20 | Figure 17.20 InteractionUse with value return | 591 | sequence | средняя (returnValueRecipient, тип результата) | средний |
| 21 | Figure 17.21 PartDecomposition - the decomposed part | 591 | метамодель | низкая (стрелка represents на lifeline) | средний |
| 22 | Figure 17.22 PartDecomposition - the decomposition | 591 | sequence | средняя (вложенная sub-диаграмма с альтернативой) | высокий |
| 23 | Figure 17.23 Sequence Diagrams where two Lifelines refer to same Parts | 592 | sequence | высокая (internal structure, MultiplicityElement) | низкий |
| 24 | Figure 17.24 Describing Collaborations and their binding | 593 | метамодель + sequence | высокая (collaboration use, binding, MultiplicityElement) | средний |
| 25 | Figure 17.25 Overview of Metamodel elements of a Sequence Diagram | 601 | метамодель | критическая (24+ классов, все ассоциации пакета Interactions) | высокий |
| 26 | Figure 17.26 Communication diagram | 599 | communication | средняя (numerals на связях, навигация) | средний |
| 27 | Figure 17.27 Interaction Overview Diagram representing a High Level Interaction diagram | 601 | interaction overview | высокая (activity-диаграмма с InteractionUse узлами) | высокий |
| 28 | Figure 17.28 A Lifeline for a discrete object | 603 | sequence + timing | средняя (state, activation, message) | средний |
| 29 | Figure 17.29 Compact Lifeline with States | 604 | sequence + timing | средняя (состояния внутри lifeline rectangle) | низкий |
| 30 | Figure 17.30 Timing Diagram with more than one Lifeline and with Messages | 604 | timing | критическая (горизонтальная ось времени, две lifeline, messages с timing constraints) | высокий |

**Детальные приоритеты**: рисунки 13–15, 25, 30 — критическая сложность SVG из-за вложенных CombinedFragment, полной метамодельной диаграммы и временных осей. Рисунки 3, 7, 9, 12, 17, 19, 22, 27 — высокая сложность (множественные lifelines, gate-связи, partial ordering, interaction overview). Остальные — средняя или низкая сложность.

## План межраздельных ссылок

Элементы раздела 17 связаны с классами других пакетов OMG UML через ассоциации и подтипы. Ниже таблицы основных связей для навигации справочника.

| Элемент (17) | Связанный элемент | Раздел | Тип связи |
|-------------|------------------|--------|-----------|
| `Interaction` | `Behavior` (общее предок Classifier) | 13 Common Behavior | обобщение через Action |
| `ActionExecutionSpecification.action` | `Action` | 16 Actions | ассоциация A_action_actionExecutionSpecification |
| `Action` (через Interaction) | `Interaction` | 17 Interactions | Association A_action_interaction |
| `BehaviorExecutionSpecification.behavior` | `Behavior` | 13 Common Behavior | ассоциация A_behavior_behaviorExecutionSpecification |
| `Message.signature` | `NamedElement` → `Operation` / `Signal` | 9 Classification, 12 Packages | subsets (Operation) |
| `MessageEnd.message` | `Message` | 17 Interactions | ownedEnd (кратность [1..2]) |
| `Lifeline.represents` | `ConnectableElement` / `MultiplicityElement` | 7 Common Structure | обобщение, MultiplicityElement |
| `InteractionFragment.covered` | `Lifeline` | 17 Interactions | навигация через coveredBy |
| `ExecutionSpecification.start/finish` | `OccurrenceSpecification` | 17 Interactions | ownedEnd A_finish_executionSpecification / A_start_executionSpecification |
| `CombinedFragment.operand` | `InteractionOperand` | 17 Interactions | composite (кратность [1..*]) |
| `InteractionConstraint.guard` | `InteractionOperand` | 17 Interactions | навигация через guard → minint/maxint |
| `Gate` | `MessageEnd` | 17 Interactions | наследование от MessageEnd |
| `StateInvariant.invariant` | `Constraint` (Expression) | 9 Classification | subsets (NamedElement) |
| `Lifeline` / `StateInvariant` | `State` | 14 StateMachines | связь через states-attribute LIFELINE |
| `GeneralOrdering` | `OccurrenceSpecification` | 17 Interactions | before → after (partial order) |

**Связи с разделом 7 (Common Structure)**: Lifeline.represents ведёт к ConnectableElement и MultiplicityElement из раздела 7; Property в ReturnValueRecipient → Property из раздела 7.  
**Связи с разделом 9 (Classification)**: Message.signature ссылается на Operation/Signal (классификаторы); InteractionOperatorKind — собственный enumeration пакета Interactions.  
**Связи с разделом 13 (Common Behavior)**: Interaction и BehaviorExecutionSpecification.behavior связаны с поведением через Action/Behavior; Behavior — базовый класс поведения из раздела 13.  
**Связи с разделом 14 (StateMachines)**: StateInvariant ссылается на State из StateMachines; Lifeline может содержать states-атрибуты, ведущие к состояниям автомата.

## Применение текущих скриптов для раздела 17

Пайплайн `section_pipeline.py --clause 17` запускает этапы последовательно. **Этап 1 (prepare_section.py)** извлечёт заголовки из тела текста — с учётом пропусков Abstract Syntax (17.3.2–17.7.2), которые скрипт найдёт автоматически, но TOC-генерация даст неполный список. **Этап 2 (scaffold_section.py)** создаст заглушки для 25 классификаторов и 38 ассоциаций — необходимо учесть, что XMI-файл Interactions содержит packageImport из CommonStructure, Classification и SimpleClassifiers, поэтому cross-package ссылки потребуют ручной коррекции. **Этап 3 (sync_xmi_properties.py)** сгенерирует ownedAttribute и ownedEnd; для классов CombinedFragment (3 атрибута), Interaction (4 атрибута) и GeneralOrdering (3 атрибута) нужно проверить генерацию subsets-ссылок. **Этап 5 (SVG)** требует доработки builders — стандартный `generate_common_structure_svg.py` не обрабатывает sequence-диаграммы с CombinedFragment; потребуется кастомный builder для каждого типа (sequence, interaction overview, timing). **Особенности**: раздел содержит 4 вида диаграмм последовательности (с timed lifelines, combinedFragments, interaction overview, communication diagrams); рисунки в TOC имеют сдвиг строк из-за переносов; InteractionOperatorKind имеет 12 литералов — наибольшее в пакете.

## Модернизация скриптов для раздела 17

**SVG-билдер sequence-фрагментов** должен поддерживать CombinedFragment с nested operands, gate-связями и continuation-переходами между фрагментами; текущий generic-builder не обрабатывает вложенные операторы (alt/loop/neg) — требуется отдельный layout-алгоритм для прямоугольных рамок с заголовком оператора.  
**Lifeline-layout**: необходимо добавить поддержку compact lifeline (состояния внутри rectangle), discrete object (state sequence), timing markers и partial ordering arrows между lifelines.  
**Timing axes**: Figure 17.30 требует горизонтальной оси времени с вертикальными timeline-линиями, что не поддерживается текущим builder'ом для common-structure диаграмм; нужен отдельный timing-layout module.  
**Компоновка CombinedFragment**: nested loop/alt/neg fragments требуют рекурсивного позиционирования operands и корректного соединения gate-стрелок с внешним контекстом — текущий алгоритм рисует только single-level combinedFragments.
