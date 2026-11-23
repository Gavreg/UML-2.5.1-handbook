# Раздел 16: Actions (Действия)
<!-- Метаинформация -->
- Подготовлено: 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия не фиксировались.
- Промпт: черновик реестра раздела 16 Actions OMG UML 2.5.1 (стр. 441–564): подразделы, классификаторы/ассоциации из XMI (Actions), рисунки, замечания; ≤200k токенов; только официальные источники.
- Проверка: 2025-11-22, сверка с дампом/XMI; рисунки 53→56, добавлены 9 подразделов и определения.
- Состав: конфигурация, подразделы, классификаторы, ассоциации, рисунки, замечания, план иллюстраций, межраздельные ссылки, рекомендации по скриптам.
- Критерий адекватности: числа сходятся с XMI и текстом; расхождения — в «Замечаниях и рисках».
## Предлагаемый блок конфигурации для `scripts/sections.json`

```json
{
  "16": {
    "title": "Actions",
    "title_ru": "Действия",
    "slug": "actions",
    "package": "Actions",
    "first_page": 441,
    "last_page": 564,
    "classifier_catalog": "16.14",
    "association_catalog": "16.15",
    "source": {
      "pdf": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf",
      "xmi": "site/docs/UML-2.5.1.xmi",
      "xmi_package": "Actions"
    }
  }
}
```

## Статистика

- Печатные страницы: **441–564** (124 стр.)
- Подразделы (дерево): **247** записей в оглавлении + **878** заголовков в тексте раздела
- Классификаторы: **63** (52 классов + 10 абстрактных + 1 перечисление)
- Ассоциации: **109** (все пронумерованы 16.15.1–16.15.109)
- Рисунки: **56** (Figure 16.1–16.56, все пронумерованы последовательно)
- Атрибуты (ownedAttribute): **135**
- Операции (ownedOperation): **26**
- Ограничения (ownedRule): **155**
- Литералы (ownedLiteral): **3**

## План иллюстраций

| Группа | Диапазон рисунков | Страницы | Тип | Сложность SVG | Приоритет |
|--------|-------------------|----------|-----|---------------|-----------|
| Вводные диаграммы раздела 16.2 | Figure 16.1–16.10 | 440–446 | Нотация Action/Pins | Низкая (базовая) | P1 |
| Вводный обзор: общая диаграмма Actions | Figure 16.1 | 440 | Нотация классов | Низкая | P1 |
| Базовая нотация Action | Figure 16.2 | 444 | Схема наследования | Средняя | P1 |
| Нотация условий и пинов | Figure 16.3–16.6 | 444–445 | Анонции локальных предусловий/постусловий, Pin-нотации | Низкая | P2 |
| Примеры базовых Actions | Figure 16.7–16.9 | 445–446 | Примеры с конкретным синтаксисом | Низкая | P2 |
| Примеры пинов | Figure 16.10 | 446 | Пины с множественными значениями | Средняя | P3 |
| Спецификация поведения ObjectNode на Pinaх | Figure 16.11 | 447 | Диаграмма абстр. синтаксиса | Высокая | P2 |
| Пример ActionInputPins в абстр. синтаксисе | Figure 16.12 | 447 | Схема наследования/ассоциаций | Высокая | P2 |
| Invocation Actions | Figure 16.13–16.17 | 448–452 | Вызов поведения/операции, стрелки с аннотациями | Средняя | P1 |
| Аннотации пинов (exception/effect/stream) | Figure 16.18–16.23 | 452–454 | Нотации модификаторов на пинах | Низкая | P3 |
| Сложные примеры Stream/Exception/Effect-пинов | Figure 16.22–16.29 | 454–455 | Заполненные треугольники, ParameterSet-нотации | Высокая | P3 |
| Примеры отправки сигналов и Pin с эффектами | Figure 16.24–16.28 | 454–455 | Workflow с сигналами | Средняя | P3 |
| Альтернативные вводы/выводы через ParameterSets | Figure 16.29 | 455 | Параметризованный ввод | Высокая | P4 |
| Object Actions (значение/объект) | Figure 16.30–16.32 | 456–459 | ValueSpecificationAction нотация, константы | Низкая | P1 |
| Link End Data / Link Actions | Figure 16.33–16.35 | 459–464 | Структура данных линков и их действия | Средняя | P2 |
| Structural Feature Actions (чтение/запись) | Figure 16.36 | 465 | Атрибуты структурного свойства | Низкая | P1 |
| Variable Actions | Figure 16.37–16.38 | 468–469 | Переменные, AddVariableValueAction | Низкая | P2 |
| Accept Event Actions (включение/ноутация) | Figure 16.39–16.44 | 470–473 | Нотации, implicit/explicit Enable, UnmarshallAction | Средняя | P1 |
| Structured Actions / Expansion Regions | Figure 16.45–16.56 | 474–484 | Структурированные узлы, ExpansionRegion, LoopNode, ConditionalNode | **Высокая** | P1 |

**Детали сложных рисунков:**

- **Figure 16.2 (Action — нотация наследования)**: схема с классами `ExecutableNode → Action → {InvocationAction, LinkAction, ...}` и всеми промежуточными абстрактными узлами. SVG: иерархический layout, связи обобщения (←), подсветка текущего класса.
- **Figure 16.12 (ActionInputPins в абстр. синтаксисе)**: отображение структур `InputPin ↔ Action ↔ Action`, ассоциации `A_fromAction_actionInputPin`. SVG: двусторонние связи с подписями концов.
- **Figure 16.47–16.50 (ExpansionRegion)**: нотация региона-расширения, shorthand notation (один узел в прямоугольнике), множественные вводы/выводы (`InputPin[] → ExpansionRegion → OutputPin[]`), режимы `bounded/fullyDetermined/partiallyDetermined` из `ExpansionKind`. SVG: прямоугольник с рамкой региона, массивные пины-множества.
- **Figure 16.49–16.50 (Shorthand notation)**: упрощённая нотация ExpansionRegion с одним действием внутри — ключевой паттерн для генерации интерактивных диаграмм. SVG: компактный прямоугольник + одно действие, tooltip с режимом.
- **Figure 16.11 (Selection behavior на ObjectFlow/Pins)**: FIFO/ordered/first-out выбор объектов из потока — требует динамического отображения фильтрации. SVG: объект-фильтр, стрелки с предикатами.

## Дерево подразделов

| Номер | Заголовок | Страница | Тип |
|-------|-----------|----------|-----|
| `16.1` | Summary | 441 | ─ Подраздел |
| `16.2` | Actions | 442 | ─ Подраздел |
| `16.2.1` | Summary | 442 | ── Подраздел |
| `16.2.2` | Abstract Syntax | 442 | ── Подраздел |
| `16.2.3` | Semantics | 443 | ── Подраздел |
| `16.2.4` | Notation | 446 | ── Подраздел |
| `16.2.5` | Examples | 447 | ── Подраздел |
| `16.3` | Invocation Actions | 450 | ─ Подраздел |
| `16.3.1` | Summary | 450 | ── Подраздел |
| `16.3.2` | Abstract Syntax | 450 | ── Подраздел |
| `16.3.3` | Semantics | 450 | ── Подраздел |
| `16.3.4` | Notation | 453 | ── Подраздел |
| `16.3.5` | Examples | 456 | ── Подраздел |
| `16.4` | Object Actions | 458 | ─ Подраздел |
| `16.4.1` | Summary | 458 | ── Подраздел |
| `16.4.2` | Abstract Syntax | 458 | ── Подраздел |
| `16.4.3` | Semantics | 458 | ── Подраздел |
| `16.4.4` | Notation | 460 | ── Подраздел |
| `16.4.5` | Examples | 460 | ── Подраздел |
| `16.5` | Link End Data | 461 | ─ Подраздел |
| `16.5.1` | Summary | 461 | ── Подраздел |
| `16.5.2` | Abstract Syntax | 461 | ── Подраздел |
| `16.5.3` | Semantics | 461 | ── Подраздел |
| `16.5.4` | Notation | 462 | ── Подраздел |
| `16.5.5` | Examples | 462 | ── Подраздел |
| `16.6` | Link Actions | 462 | ─ Подраздел |
| `16.6.1` | Summary | 462 | ── Подраздел |
| `16.6.2` | Abstract Syntax | 463 | ── Подраздел |
| `16.6.3` | Semantics | 463 | ── Подраздел |
| `16.6.4` | Notation | 465 | ── Подраздел |
| `16.6.5` | Examples | 465 | ── Подраздел |
| `16.7` | Link Object Actions | 465 | ─ Подраздел |
| `16.7.1` | Summary | 465 | ── Подраздел |
| `16.7.2` | Abstract Syntax | 466 | ── Подраздел |
| `16.7.3` | Semantics | 466 | ── Подраздел |
| `16.7.4` | Notation | 467 | ── Подраздел |
| `16.7.5` | Examples | 467 | ── Подраздел |
| `16.8` | Structural Feature Actions | 467 | ─ Подраздел |
| `16.8.1` | Summary | 467 | ── Подраздел |
| `16.8.2` | Abstract Syntax | 467 | ── Подраздел |
| `16.8.3` | Semantics | 467 | ── Подраздел |
| `16.8.4` | Notation | 469 | ── Подраздел |
| `16.8.5` | Examples | 469 | ── Подраздел |
| `16.9` | Variable Actions | 469 | ─ Подраздел |
| `16.9.1` | Summary | 469 | ── Подраздел |
| `16.9.2` | Abstract Syntax | 470 | ── Подраздел |
| `16.9.3` | Semantics | 470 | ── Подраздел |
| `16.9.4` | Notation | 471 | ── Подраздел |
| `16.9.5` | Examples | 472 | ── Подраздел |
| `16.10` | Accept Event Actions | 472 | ─ Подраздел |
| `16.10.1` | Summary | 472 | ── Подраздел |
| `16.10.2` | Abstract Syntax | 472 | ── Подраздел |
| `16.10.3` | Semantics | 472 | ── Подраздел |
| `16.10.4` | Notation | 474 | ── Подраздел |
| `16.10.5` | Examples | 474 | ── Подраздел |
| `16.11` | Structured Actions | 475 | ─ Подраздел |
| `16.11.1` | Summary | 475 | ── Подраздел |
| `16.11.2` | Abstract Syntax | 476 | ── Подраздел |
| `16.11.3` | Semantics | 476 | ── Подраздел |
| `16.11.4` | Notation | 480 | ── Подраздел |
| `16.11.5` | Examples | 480 | ── Подраздел |
| `16.12` | Expansion Regions | 480 | ─ Подраздел |
| `16.12.1` | Summary | 480 | ── Подраздел |
| `16.12.2` | Abstract Syntax | 480 | ── Подраздел |
| `16.12.3` | Semantics | 481 | ── Подраздел |
| `16.12.4` | Notation | 482 | ── Подраздел |
| `16.12.5` | Examples | 484 | ── Подраздел |
| `16.13` | Other Actions | 486 | ─ Подраздел |
| `16.13.1` | Summary | 486 | ── Подраздел |
| `16.13.2` | Abstract Syntax | 486 | ── Подраздел |
| `16.13.3` | Semantics | 486 | ── Подраздел |
| `16.13.4` | Notation | 487 | ── Подраздел |
| `16.13.5` | Examples | 487 | ── Подраздел |
| `16.14` | Classifier Descriptions | 488 | 📦 Каталог классификаторов |
| `16.14.1` | AcceptCallAction [Class] | 488 | ── Подраздел |
| `16.14.2` | AcceptEventAction [Class] | 489 | ── Подраздел |
| `16.14.3` | Action [Abstract Class] | 490 | ── Подраздел |
| `16.14.4` | ActionInputPin [Class] | 492 | ── Подраздел |
| `16.14.5` | AddStructuralFeatureValueAction [Class] | 492 | ── Подраздел |
| `16.14.6` | AddVariableValueAction [Class] | 493 | ── Подраздел |
| `16.14.7` | BroadcastSignalAction [Class] | 494 | ── Подраздел |
| `16.14.8` | CallAction [Abstract Class] | 495 | ── Подраздел |
| `16.14.9` | CallBehaviorAction [Class] | 496 | ── Подраздел |
| `16.14.10` | CallOperationAction [Class] | 497 | ── Подраздел |
| `16.14.11` | Clause [Class] | 498 | ── Подраздел |
| `16.14.12` | ClearAssociationAction [Class] | 499 | ── Подраздел |
| `16.14.13` | ClearStructuralFeatureAction [Class] | 499 | ── Подраздел |
| `16.14.14` | ClearVariableAction [Class] | 500 | ── Подраздел |
| `16.14.15` | ConditionalNode [Class] | 500 | ── Подраздел |
| `16.14.16` | CreateLinkAction [Class] | 502 | ── Подраздел |
| `16.14.17` | CreateLinkObjectAction [Class] | 502 | ── Подраздел |
| `16.14.18` | CreateObjectAction [Class] | 503 | ── Подраздел |
| `16.14.19` | DestroyLinkAction [Class] | 504 | ── Подраздел |
| `16.14.20` | DestroyObjectAction [Class] | 504 | ── Подраздел |
| `16.14.21` | ExpansionKind [Enumeration] | 505 | ── Подраздел |
| `16.14.22` | ExpansionNode [Class] | 505 | ── Подраздел |
| `16.14.23` | ExpansionRegion [Class] | 506 | ── Подраздел |
| `16.14.40` | ReadLinkObjectEndQualifierAction [Class] | 521 | ── Подраздел |
| `16.14.24` | InputPin [Class] | 506 | ── Подраздел |
| `16.14.25` | InvocationAction [Abstract Class] | 507 | ── Подраздел |
| `16.14.26` | LinkAction [Abstract Class] | 507 | ── Подраздел |
| `16.14.27` | LinkEndCreationData [Class] | 508 | ── Подраздел |
| `16.14.28` | LinkEndData [Class] | 509 | ── Подраздел |
| `16.14.29` | LinkEndDestructionData [Class] | 510 | ── Подраздел |
| `16.14.30` | LoopNode [Class] | 511 | ── Подраздел |
| `16.14.31` | OpaqueAction [Class] | 514 | ── Подраздел |
| `16.14.32` | OutputPin [Class] | 515 | ── Подраздел |
| `16.14.33` | Pin [Abstract Class] | 515 | ── Подраздел |
| `16.14.34` | QualifierValue [Class] | 516 | ── Подраздел |
| `16.14.35` | RaiseExceptionAction [Class] | 516 | ── Подраздел |
| `16.14.36` | ReadExtentAction [Class] | 517 | ── Подраздел |
| `16.14.37` | ReadIsClassifiedObjectAction [Class] | 517 | ── Подраздел |
| `16.14.38` | ReadLinkAction [Class] | 518 | ── Подраздел |
| `16.14.39` | ReadLinkObjectEndAction [Class] | 520 | ── Подраздел |
| `16.14.41` | ReadSelfAction [Class] | 522 | ── Подраздел |
| `16.14.42` | ReadStructuralFeatureAction [Class] | 523 | ── Подраздел |
| `16.14.43` | ReadVariableAction [Class] | 523 | ── Подраздел |
| `16.14.44` | ReclassifyObjectAction [Class] | 524 | ── Подраздел |
| `16.14.45` | ReduceAction [Class] | 525 | ── Подраздел |
| `16.14.46` | RemoveStructuralFeatureValueAction [Class] | 526 | ── Подраздел |
| `16.14.47` | RemoveVariableValueAction [Class] | 527 | ── Подраздел |
| `16.14.48` | ReplyAction [Class] | 527 | ── Подраздел |
| `16.14.49` | SendObjectAction [Class] | 528 | ── Подраздел |
| `16.14.50` | SendSignalAction [Class] | 529 | ── Подраздел |
| `16.14.51` | SequenceNode [Class] | 530 | ── Подраздел |
| `16.14.52` | StartClassifierBehaviorAction [Class] | 530 | ── Подраздел |
| `16.14.53` | StartObjectBehaviorAction [Class] | 531 | ── Подраздел |
| `16.14.54` | StructuralFeatureAction [Abstract Class] | 532 | ── Подраздел |
| `16.14.55` | StructuredActivityNode [Class] | 533 | ── Подраздел |
| `16.14.56` | TestIdentityAction [Class] | 535 | ── Подраздел |
| `16.14.57` | UnmarshallAction [Class] | 536 | ── Подраздел |
| `16.14.58` | ValuePin [Class] | 537 | ── Подраздел |
| `16.14.59` | ValueSpecificationAction [Class] | 538 | ── Подраздел |
| `16.14.60` | VariableAction [Abstract Class] | 538 | ── Подраздел |
| `16.14.61` | WriteLinkAction [Abstract Class] | 539 | ── Подраздел |
| `16.14.62` | WriteStructuralFeatureAction [Abstract Class] | 539 | ── Подраздел |
| `16.14.63` | WriteVariableAction [Abstract Class] | 540 | ── Подраздел |
| `16.15` | Association Descriptions | 541 | 🔗 Каталог ассоциаций |
| `16.15.1` | A_argument_invocationAction [Association] | 541 | ── Подраздел |
| `16.15.2` | A_association_clearAssociationAction [Association] | 541 | ── Подраздел |
| `16.15.3` | A_behavior_callBehaviorAction [Association] | 541 | ── Подраздел |
| `16.15.4` | A_bodyOutput_clause [Association] | 542 | ── Подраздел |
| `16.15.5` | A_bodyOutput_loopNode [Association] | 542 | ── Подраздел |
| `16.15.6` | A_bodyPart_loopNode [Association] | 542 | ── Подраздел |
| `16.15.7` | A_body_clause [Association] | 542 | ── Подраздел |
| `16.15.8` | A_classifier_createObjectAction [Association] | 542 | ── Подраздел |
| `16.15.9` | A_classifier_readExtentAction [Association] | 543 | ── Подраздел |
| `16.15.10` | A_classifier_readIsClassifiedObjectAction [Association] | 543 | ── Подраздел |
| `16.15.11` | A_clause_conditionalNode [Association] | 543 | ── Подраздел |
| `16.15.12` | A_collection_reduceAction [Association] | 543 | ── Подраздел |
| `16.15.13` | A_context_action [Association] | 543 | ── Подраздел |
| `16.15.14` | A_decider_clause [Association] | 544 | ── Подраздел |
| `16.15.15` | A_decider_loopNode [Association] | 544 | ── Подраздел |
| `16.15.16` | A_destroyAt_linkEndDestructionData [Association] | 544 | ── Подраздел |
| `16.15.17` | A_edge_inStructuredNode [Association] | 544 | ── Подраздел |
| `16.15.18` | A_endData_createLinkAction [Association] | 544 | ── Подраздел |
| `16.15.19` | A_endData_destroyLinkAction [Association] | 545 | ── Подраздел |
| `16.15.20` | A_endData_linkAction [Association] | 545 | ── Подраздел |
| `16.15.21` | A_end_linkEndData [Association] | 545 | ── Подраздел |
| `16.15.22` | A_end_readLinkObjectEndAction [Association] | 545 | ── Подраздел |
| `16.15.23` | A_exception_raiseExceptionAction [Association] | 546 | ── Подраздел |
| `16.15.24` | A_executableNode_sequenceNode [Association] | 546 | ── Подраздел |
| `16.15.25` | A_first_testIdentityAction [Association] | 546 | ── Подраздел |
| `16.15.26` | A_fromAction_actionInputPin [Association] | 546 | ── Подраздел |
| `16.15.27` | A_inputElement_regionAsInput [Association] | 546 | ── Подраздел |
| `16.15.28` | A_inputValue_linkAction [Association] | 547 | ── Подраздел |
| `16.15.29` | A_inputValue_opaqueAction [Association] | 547 | ── Подраздел |
| `16.15.30` | A_input_action [Association] | 547 | ── Подраздел |
| `16.15.31` | A_insertAt_addStructuralFeatureValueAction [Association] | 547 | ── Подраздел |
| `16.15.32` | A_insertAt_addVariableValueAction [Association] | 547 | ── Подраздел |
| `16.15.33` | A_insertAt_linkEndCreationData [Association] | 548 | ── Подраздел |
| `16.15.34` | A_localPostcondition_action [Association] | 548 | ── Подраздел |
| `16.15.35` | A_localPrecondition_action [Association] | 548 | ── Подраздел |
| `16.15.36` | A_loopVariableInput_loopNode [Association] | 548 | ── Подраздел |
| `16.15.37` | A_loopVariable_loopNode [Association] | 548 | ── Подраздел |
| `16.15.38` | A_newClassifier_reclassifyObjectAction [Association] | 549 | ── Подраздел |
| `16.15.39` | A_node_inStructuredNode [Association] | 549 | ── Подраздел |
| `16.15.40` | A_object_clearAssociationAction [Association] | 549 | ── Подраздел |
| `16.15.41` | A_object_readIsClassifiedObjectAction [Association] | 549 | ── Подраздел |
| `16.15.42` | A_object_readLinkObjectEndAction [Association] | 549 | ── Подраздел |
| `16.15.43` | A_object_readLinkObjectEndQualifierAction [Association] | 550 | ── Подраздел |
| `16.15.44` | A_object_reclassifyObjectAction [Association] | 550 | ── Подраздел |
| `16.15.45` | A_object_startClassifierBehaviorAction [Association] | 550 | ── Подраздел |
| `16.15.46` | A_object_startObjectBehaviorAction [Association] | 550 | ── Подраздел |
| `16.15.47` | A_object_structuralFeatureAction [Association] | 550 | ── Подраздел |
| `16.15.48` | A_object_unmarshallAction [Association] | 551 | ── Подраздел |
| `16.15.49` | A_oldClassifier_reclassifyObjectAction [Association] | 551 | ── Подраздел |
| `16.15.50` | A_onPort_invocationAction [Association] | 551 | ── Подраздел |
| `16.15.51` | A_operation_callOperationAction [Association] | 551 | ── Подраздел |
| `16.15.52` | A_outputElement_regionAsOutput [Association] | 551 | ── Подраздел |
| `16.15.53` | A_outputValue_opaqueAction [Association] | 552 | ── Подраздел |
| `16.15.54` | A_output_action [Association] | 552 | ── Подраздел |
| `16.15.55` | A_predecessorClause_successorClause [Association] | 552 | ── Подраздел |
| `16.15.56` | A_qualifier_linkEndData [Association] | 552 | ── Подраздел |
| `16.15.57` | A_qualifier_qualifierValue [Association] | 552 | ── Подраздел |
| `16.15.58` | A_qualifier_readLinkObjectEndQualifierAction [Association] | 553 | ── Подраздел |
| `16.15.59` | A_reducer_reduceAction [Association] | 553 | ── Подраздел |
| `16.15.60` | A_removeAt_removeStructuralFeatureValueAction [Association] | 553 | ── Подраздел |
| `16.15.61` | A_removeAt_removeVariableValueAction [Association] | 553 | ── Подраздел |
| `16.15.62` | A_replyToCall_replyAction [Association] | 553 | ── Подраздел |
| `16.15.63` | A_replyValue_replyAction [Association] | 554 | ── Подраздел |
| `16.15.64` | A_request_sendObjectAction [Association] | 554 | ── Подраздел |
| `16.15.65` | A_result_acceptEventAction [Association] | 554 | ── Подраздел |
| `16.15.66` | A_result_callAction [Association] | 554 | ── Подраздел |
| `16.15.67` | A_result_clearStructuralFeatureAction [Association] | 554 | ── Подраздел |
| `16.15.68` | A_result_conditionalNode [Association] | 555 | ── Подраздел |
| `16.15.69` | A_result_createLinkObjectAction [Association] | 555 | ── Подраздел |
| `16.15.70` | A_result_createObjectAction [Association] | 555 | ── Подраздел |
| `16.15.71` | A_result_loopNode [Association] | 555 | ── Подраздел |
| `16.15.72` | A_result_readExtentAction [Association] | 556 | ── Подраздел |
| `16.15.73` | A_result_readIsClassifiedObjectAction [Association] | 556 | ── Подраздел |
| `16.15.74` | A_result_readLinkAction [Association] | 556 | ── Подраздел |
| `16.15.75` | A_result_readLinkObjectEndAction [Association] | 556 | ── Подраздел |
| `16.15.76` | A_result_readLinkObjectEndQualifierAction [Association] | 556 | ── Подраздел |
| `16.15.77` | A_result_readSelfAction [Association] | 557 | ── Подраздел |
| `16.15.78` | A_result_readStructuralFeatureAction [Association] | 557 | ── Подраздел |
| `16.15.79` | A_result_readVariableAction [Association] | 557 | ── Подраздел |
| `16.15.80` | A_result_reduceAction [Association] | 557 | ── Подраздел |
| `16.15.81` | A_result_testIdentityAction [Association] | 557 | ── Подраздел |
| `16.15.82` | A_result_unmarshallAction [Association] | 558 | ── Подраздел |
| `16.15.83` | A_result_valueSpecificationAction [Association] | 558 | ── Подраздел |
| `16.15.84` | A_result_writeStructuralFeatureAction [Association] | 558 | ── Подраздел |
| `16.15.85` | A_returnInformation_acceptCallAction [Association] | 558 | ── Подраздел |
| `16.15.86` | A_returnInformation_replyAction [Association] | 558 | ── Подраздел |
| `16.15.87` | A_second_testIdentityAction [Association] | 559 | ── Подраздел |
| `16.15.88` | A_setupPart_loopNode [Association] | 559 | ── Подраздел |
| `16.15.89` | A_signal_broadcastSignalAction [Association] | 559 | ── Подраздел |
| `16.15.90` | A_signal_sendSignalAction [Association] | 559 | ── Подраздел |
| `16.15.91` | A_structuralFeature_structuralFeatureAction [Association] | 559 | ── Подраздел |
| `16.15.92` | A_structuredNodeInput_structuredActivityNode [Association] | 560 | ── Подраздел |
| `16.15.93` | A_structuredNodeOutput_structuredActivityNode [Association] | 560 | ── Подраздел |
| `16.15.94` | A_target_callOperationAction [Association] | 560 | ── Подраздел |
| `16.15.95` | A_target_destroyObjectAction [Association] | 560 | ── Подраздел |
| `16.15.96` | A_target_sendObjectAction [Association] | 560 | ── Подраздел |
| `16.15.97` | A_target_sendSignalAction [Association] | 561 | ── Подраздел |
| `16.15.98` | A_test_clause [Association] | 561 | ── Подраздел |
| `16.15.99` | A_test_loopNode [Association] | 561 | ── Подраздел |
| `16.15.100` | A_trigger_acceptEventAction [Association] | 561 | ── Подраздел |
| `16.15.101` | A_unmarshallType_unmarshallAction [Association] | 561 | ── Подраздел |
| `16.15.102` | A_value_linkEndData [Association] | 562 | ── Подраздел |
| `16.15.103` | A_value_qualifierValue [Association] | 562 | ── Подраздел |
| `16.15.104` | A_value_valuePin [Association] | 562 | ── Подраздел |
| `16.15.105` | A_value_valueSpecificationAction [Association] | 562 | ── Подраздел |
| `16.15.106` | A_value_writeStructuralFeatureAction [Association] | 562 | ── Подраздел |
| `16.15.107` | A_value_writeVariableAction [Association] | 563 | ── Подраздел |
| `16.15.108` | A_variable_scope [Association] | 563 | ── Подраздел |
| `16.15.109` | A_variable_variableAction [Association] | 563 | ── Подраздел |

## Таблица классификаторов

| Имя | Тип | Подраздел | Атрибуты | Операции | Обобщения | Определение (EN/RU) |
|-----|-----|-----------|----------|----------|-----------|---------------------|
| `AcceptCallAction` | Class | 16.14.1 | returnInformation | — | AcceptEventAction |
| `AcceptEventAction` | Class | 16.14.2 | isUnmarshall, result, trigger | — | Action | An AcceptEventAction is an Action that waits for the occurrence of one or more specific Events. / Действие ожидания одного или более событий |
| `Action` | Abstract Class | 16.2 | context, input, isLocallyReentrant, localPostcondition, localPrecondition, output | context, allActions, allOwnedNodes, containingBehavior | ExecutableNode | An Action is the fundamental unit of executable functionality. / Базовый исполняемый элемент активности |
| `ActionInputPin` | Class | 16.14.4 | fromAction | — | InputPin |
| `AddStructuralFeatureValueAction` | Class | 16.14.5 | insertAt, isReplaceAll | — | WriteStructuralFeatureAction |
| `AddVariableValueAction` | Class | 16.14.6 | insertAt, isReplaceAll | — | WriteVariableAction |
| `BroadcastSignalAction` | Class | 16.14.7 | signal | — | InvocationAction |
| `CallAction` | Abstract Class | 16.14.8 | isSynchronous, result | inputParameters, outputParameters | InvocationAction | CallAction is an abstract class for Actions that invoke a Behavior with given argument values. / Абстрактный класс действий вызова поведения с аргументами |
| `CallBehaviorAction` | Class | 16.14.9 | behavior | outputParameters, inputParameters | CallAction |
| `CallOperationAction` | Class | 16.14.10 | operation, target | outputParameters, inputParameters | CallAction |
| `Clause` | Class | 16.14.11 | body, bodyOutput, decider, predecessorClause, successorClause, test | — | Element |
| `ClearAssociationAction` | Class | 16.14.12 | association, object | — | Action |
| `ClearStructuralFeatureAction` | Class | 16.14.13 | result | — | StructuralFeatureAction |
| `ClearVariableAction` | Class | 16.14.14 | — | — | VariableAction |
| `ConditionalNode` | Class | 16.14.15 | clause, isAssured, isDeterminate, result | allActions | StructuredActivityNode |
| `CreateLinkAction` | Class | 16.14.16 | endData | — | WriteLinkAction |
| `CreateLinkObjectAction` | Class | 16.14.17 | result | — | CreateLinkAction |
| `CreateObjectAction` | Class | 16.14.18 | classifier, result | — | Action |
| `DestroyLinkAction` | Class | 16.14.19 | endData | — | WriteLinkAction |
| `DestroyObjectAction` | Class | 16.14.20 | isDestroyLinks, isDestroyOwnedObjects, target | — | Action |
| `ExpansionKind` | Enumeration | 16.14.21 | — | — | — |
| `ExpansionNode` | Class | 16.14.22 | regionAsInput, regionAsOutput | — | ObjectNode |
| `ExpansionRegion` | Class | 16.14.23 | inputElement, mode, outputElement | — | StructuredActivityNode | An ExpansionRegion is a StructuredActivityNode that executes its content multiple times corresponding to elements of a collection. / Узел с многократным выполнением содержимого для каждого элемента коллекции |
| `InputPin` | Class | 16.14.4 | — | — | Pin |
| `InvocationAction` | Abstract Class | 16.14.25 | argument, onPort | — | Action |
| `LinkAction` | Abstract Class | 16.14.16 | endData, inputValue | association | Action |
| `LinkEndCreationData` | Class | 16.14.27 | insertAt, isReplaceAll | allPins | LinkEndData |
| `LinkEndData` | Class | 16.14.28 | end, qualifier, value | allPins | Element |
| `LinkEndDestructionData` | Class | 16.14.29 | destroyAt, isDestroyDuplicates | allPins | LinkEndData |
| `LoopNode` | Class | 16.14.30 | bodyOutput, bodyPart, decider, isTestedFirst, loopVariable, loopVariableInput, result, setupPart, test | allActions, sourceNodes | StructuredActivityNode | A LoopNode is a StructuredActivityNode that represents an iterative loop with setup, test, and body sections. / Узел-цикл с настройкой, проверкой и телом |
| `OpaqueAction` | Class | 16.14.31 | body, inputValue, language, outputValue | — | Action |
| `OutputPin` | Class | 16.14.32 | — | — | Pin |
| `Pin` | Abstract Class | 16.14.4 | isControl | — | ObjectNode, MultiplicityElement |
| `QualifierValue` | Class | 16.14.34 | qualifier, value | — | Element |
| `RaiseExceptionAction` | Class | 16.14.35 | exception | — | Action |
| `ReadExtentAction` | Class | 16.14.36 | classifier, result | — | Action |
| `ReadIsClassifiedObjectAction` | Class | 16.14.37 | classifier, isDirect, object, result | — | Action |
| `ReadLinkAction` | Class | 16.14.38 | result | openEnd | LinkAction |
| `ReadLinkObjectEndAction` | Class | 16.14.39 | end, object, result | — | Action |
| `ReadLinkObjectEndQualifierAction` | Class | 16.14.40 | object, qualifier, result | — | Action | A ReadLinkObjectEndQualifierAction is an Action that retrieves a qualifier end value from a link object. / Получение значения квалификатора конца линка объекта |
| `ReadSelfAction` | Class | 16.14.41 | result | — | Action |
| `ReadStructuralFeatureAction` | Class | 16.14.42 | result | — | StructuralFeatureAction |
| `ReadVariableAction` | Class | 16.14.43 | result | — | VariableAction |
| `ReclassifyObjectAction` | Class | 16.14.44 | isReplaceAll, newClassifier, object, oldClassifier | — | Action |
| `ReduceAction` | Class | 16.14.45 | collection, isOrdered, reducer, result | — | Action |
| `RemoveStructuralFeatureValueAction` | Class | 16.14.46 | isRemoveDuplicates, removeAt | — | WriteStructuralFeatureAction |
| `RemoveVariableValueAction` | Class | 16.14.47 | isRemoveDuplicates, removeAt | — | WriteVariableAction |
| `ReplyAction` | Class | 16.14.48 | replyToCall, replyValue, returnInformation | — | Action |
| `SendObjectAction` | Class | 16.14.49 | request, target | — | InvocationAction |
| `SendSignalAction` | Class | 16.14.50 | signal, target | — | InvocationAction |
| `SequenceNode` | Class | 16.14.51 | executableNode | — | StructuredActivityNode |
| `StartClassifierBehaviorAction` | Class | 16.14.52 | object | — | Action |
| `StartObjectBehaviorAction` | Class | 16.14.53 | object | outputParameters, inputParameters, behavior | CallAction |
| `StructuralFeatureAction` | Abstract Class | 16.14.54 | object, structuralFeature | — | Action |
| `StructuredActivityNode` | Class | 16.14.55 | activity, edge, mustIsolate, node, structuredNodeInput, structuredNodeOutput, variable | allActions, allOwnedNodes, sourceNodes, targetNodes, containingActivity | Namespace, ActivityGroup, Action |
| `TestIdentityAction` | Class | 16.14.56 | first, result, second | — | Action |
| `UnmarshallAction` | Class | 16.14.57 | object, result, unmarshallType | — | Action |
| `ValuePin` | Class | 16.14.58 | value | — | InputPin | A ValuePin is an InputPin that provides a value by evaluating a ValueSpecification. / Входной пин с конкретным вычисленным значением |
| `ValueSpecificationAction` | Class | 16.14.59 | result, value | — | Action |
| `VariableAction` | Abstract Class | 16.14.14 | variable | — | Action |
| `WriteLinkAction` | Abstract Class | 16.14.61 | — | — | LinkAction |
| `WriteStructuralFeatureAction` | Abstract Class | 16.14.62 | result, value | — | StructuralFeatureAction |
| `WriteVariableAction` | Abstract Class | 16.14.63 | value | — | VariableAction |

## Таблица ассоциаций

| Имя | Конец 1 | Тип 1 | Конец 2 | Тип 2 |
|-----|---------|-------|---------|-------|
| `A_argument_invocationAction` | `argument` | InputPin | `invocationAction` | InvocationAction |
| `A_association_clearAssociationAction` | `association` | Association | `clearAssociationAction` | ClearAssociationAction |
| `A_behavior_callBehaviorAction` | `behavior` | Behavior | `callBehaviorAction` | CallBehaviorAction |
| `A_bodyOutput_clause` | `bodyOutput` | OutputPin | `clause` | Clause |
| `A_bodyOutput_loopNode` | `bodyOutput` | OutputPin | `loopNode` | LoopNode |
| `A_bodyPart_loopNode` | `bodyPart` | ExecutableNode | `loopNode` | LoopNode |
| `A_body_clause` | `body` | ExecutableNode | `clause` | Clause |
| `A_classifier_createObjectAction` | `classifier` | Classifier | `createObjectAction` | CreateObjectAction |
| `A_classifier_readExtentAction` | `classifier` | Classifier | `readExtentAction` | ReadExtentAction |
| `A_classifier_readIsClassifiedObjectAction` | `classifier` | Classifier | `readIsClassifiedObjectAction` | ReadIsClassifiedObjectAction |
| `A_clause_conditionalNode` | `clause` | Clause | `conditionalNode` | ConditionalNode |
| `A_collection_reduceAction` | `collection` | InputPin | `reduceAction` | ReduceAction |
| `A_context_action` | `context` | Classifier | `action` | Action |
| `A_decider_clause` | `decider` | OutputPin | `clause` | Clause |
| `A_decider_loopNode` | `decider` | OutputPin | `loopNode` | LoopNode |
| `A_destroyAt_linkEndDestructionData` | `destroyAt` | InputPin | `linkEndDestructionData` | LinkEndDestructionData |
| `A_edge_inStructuredNode` | `edge` | ActivityEdge | `inStructuredNode` | StructuredActivityNode |
| `A_endData_createLinkAction` | `endData` | LinkEndCreationData | `createLinkAction` | CreateLinkAction |
| `A_endData_destroyLinkAction` | `endData` | LinkEndDestructionData | `destroyLinkAction` | DestroyLinkAction |
| `A_endData_linkAction` | `endData` | LinkEndData | `linkAction` | LinkAction |
| `A_end_linkEndData` | `end` | Property | `linkEndData` | LinkEndData |
| `A_end_readLinkObjectEndAction` | `end` | Property | `readLinkObjectEndAction` | ReadLinkObjectEndAction |
| `A_exception_raiseExceptionAction` | `exception` | InputPin | `raiseExceptionAction` | RaiseExceptionAction |
| `A_executableNode_sequenceNode` | `executableNode` | ExecutableNode | `sequenceNode` | SequenceNode |
| `A_first_testIdentityAction` | `first` | InputPin | `testIdentityAction` | TestIdentityAction |
| `A_fromAction_actionInputPin` | `fromAction` | Action | `actionInputPin` | ActionInputPin |
| `A_inputElement_regionAsInput` | `inputElement` | ExpansionNode | `regionAsInput` | ExpansionRegion |
| `A_inputValue_linkAction` | `inputValue` | InputPin | `linkAction` | LinkAction |
| `A_inputValue_opaqueAction` | `inputValue` | InputPin | `opaqueAction` | OpaqueAction |
| `A_input_action` | `input` | InputPin | `action` | Action |
| `A_insertAt_addStructuralFeatureValueAction` | `insertAt` | InputPin | `addStructuralFeatureValueAction` | AddStructuralFeatureValueAction |
| `A_insertAt_addVariableValueAction` | `insertAt` | InputPin | `addVariableValueAction` | AddVariableValueAction |
| `A_insertAt_linkEndCreationData` | `insertAt` | InputPin | `linkEndCreationData` | LinkEndCreationData |
| `A_localPostcondition_action` | `localPostcondition` | Constraint | `action` | Action |
| `A_localPrecondition_action` | `localPrecondition` | Constraint | `action` | Action |
| `A_loopVariableInput_loopNode` | `loopVariableInput` | InputPin | `loopNode` | LoopNode |
| `A_loopVariable_loopNode` | `loopVariable` | OutputPin | `loopNode` | LoopNode |
| `A_newClassifier_reclassifyObjectAction` | `newClassifier` | Classifier | `reclassifyObjectAction` | ReclassifyObjectAction |
| `A_node_inStructuredNode` | `node` | ActivityNode | `inStructuredNode` | StructuredActivityNode |
| `A_object_clearAssociationAction` | `object` | InputPin | `clearAssociationAction` | ClearAssociationAction |
| `A_object_readIsClassifiedObjectAction` | `object` | InputPin | `readIsClassifiedObjectAction` | ReadIsClassifiedObjectAction |
| `A_object_readLinkObjectEndAction` | `object` | InputPin | `readLinkObjectEndAction` | ReadLinkObjectEndAction |
| `A_object_readLinkObjectEndQualifierAction` | `object` | InputPin | `readLinkObjectEndQualifierAction` | ReadLinkObjectEndQualifierAction |
| `A_object_reclassifyObjectAction` | `object` | InputPin | `reclassifyObjectAction` | ReclassifyObjectAction |
| `A_object_startClassifierBehaviorAction` | `object` | InputPin | `startClassifierBehaviorAction` | StartClassifierBehaviorAction |
| `A_object_startObjectBehaviorAction` | `object` | InputPin | `startObjectBehaviorAction` | StartObjectBehaviorAction |
| `A_object_structuralFeatureAction` | `object` | InputPin | `structuralFeatureAction` | StructuralFeatureAction |
| `A_object_unmarshallAction` | `object` | InputPin | `unmarshallAction` | UnmarshallAction |
| `A_oldClassifier_reclassifyObjectAction` | `oldClassifier` | Classifier | `reclassifyObjectAction` | ReclassifyObjectAction |
| `A_onPort_invocationAction` | `onPort` | Port | `invocationAction` | InvocationAction |
| `A_operation_callOperationAction` | `operation` | Operation | `callOperationAction` | CallOperationAction |
| `A_outputElement_regionAsOutput` | `outputElement` | ExpansionNode | `regionAsOutput` | ExpansionRegion |
| `A_outputValue_opaqueAction` | `outputValue` | OutputPin | `opaqueAction` | OpaqueAction |
| `A_output_action` | `output` | OutputPin | `action` | Action |
| `A_predecessorClause_successorClause` | `predecessorClause` | Clause | `successorClause` | Clause |
| `A_qualifier_linkEndData` | `qualifier` | QualifierValue | `linkEndData` | LinkEndData |
| `A_qualifier_qualifierValue` | `qualifier` | Property | `qualifierValue` | QualifierValue |
| `A_qualifier_readLinkObjectEndQualifierAction` | `qualifier` | Property | `readLinkObjectEndQualifierAction` | ReadLinkObjectEndQualifierAction |
| `A_reducer_reduceAction` | `reducer` | Behavior | `reduceAction` | ReduceAction |
| `A_removeAt_removeStructuralFeatureValueAction` | `removeAt` | InputPin | `removeStructuralFeatureValueAction` | RemoveStructuralFeatureValueAction |
| `A_removeAt_removeVariableValueAction` | `removeAt` | InputPin | `removeVariableValueAction` | RemoveVariableValueAction |
| `A_replyToCall_replyAction` | `replyToCall` | Trigger | `replyAction` | ReplyAction |
| `A_replyValue_replyAction` | `replyValue` | InputPin | `replyAction` | ReplyAction |
| `A_request_sendObjectAction` | `request` | InputPin | `sendObjectAction` | SendObjectAction |
| `A_result_acceptEventAction` | `result` | OutputPin | `acceptEventAction` | AcceptEventAction |
| `A_result_callAction` | `result` | OutputPin | `callAction` | CallAction |
| `A_result_clearStructuralFeatureAction` | `result` | OutputPin | `clearStructuralFeatureAction` | ClearStructuralFeatureAction |
| `A_result_conditionalNode` | `result` | OutputPin | `conditionalNode` | ConditionalNode |
| `A_result_createLinkObjectAction` | `result` | OutputPin | `createLinkObjectAction` | CreateLinkObjectAction |
| `A_result_createObjectAction` | `result` | OutputPin | `createObjectAction` | CreateObjectAction |
| `A_result_loopNode` | `result` | OutputPin | `loopNode` | LoopNode |
| `A_result_readExtentAction` | `result` | OutputPin | `readExtentAction` | ReadExtentAction |
| `A_result_readIsClassifiedObjectAction` | `result` | OutputPin | `readIsClassifiedObjectAction` | ReadIsClassifiedObjectAction |
| `A_result_readLinkAction` | `result` | OutputPin | `readLinkAction` | ReadLinkAction |
| `A_result_readLinkObjectEndAction` | `result` | OutputPin | `readLinkObjectEndAction` | ReadLinkObjectEndAction |
| `A_result_readLinkObjectEndQualifierAction` | `result` | OutputPin | `readLinkObjectEndQualifierAction` | ReadLinkObjectEndQualifierAction |
| `A_result_readSelfAction` | `result` | OutputPin | `readSelfAction` | ReadSelfAction |
| `A_result_readStructuralFeatureAction` | `result` | OutputPin | `readStructuralFeatureAction` | ReadStructuralFeatureAction |
| `A_result_readVariableAction` | `result` | OutputPin | `readVariableAction` | ReadVariableAction |
| `A_result_reduceAction` | `result` | OutputPin | `reduceAction` | ReduceAction |
| `A_result_testIdentityAction` | `result` | OutputPin | `testIdentityAction` | TestIdentityAction |
| `A_result_unmarshallAction` | `result` | OutputPin | `unmarshallAction` | UnmarshallAction |
| `A_result_valueSpecificationAction` | `result` | OutputPin | `valueSpecificationAction` | ValueSpecificationAction |
| `A_result_writeStructuralFeatureAction` | `result` | OutputPin | `writeStructuralFeatureAction` | WriteStructuralFeatureAction |
| `A_returnInformation_acceptCallAction` | `returnInformation` | OutputPin | `acceptCallAction` | AcceptCallAction |
| `A_returnInformation_replyAction` | `returnInformation` | InputPin | `replyAction` | ReplyAction |
| `A_second_testIdentityAction` | `second` | InputPin | `testIdentityAction` | TestIdentityAction |
| `A_setupPart_loopNode` | `setupPart` | ExecutableNode | `loopNode` | LoopNode |
| `A_signal_broadcastSignalAction` | `signal` | Signal | `broadcastSignalAction` | BroadcastSignalAction |
| `A_signal_sendSignalAction` | `signal` | Signal | `sendSignalAction` | SendSignalAction |
| `A_structuralFeature_structuralFeatureAction` | `structuralFeature` | StructuralFeature | `structuralFeatureAction` | StructuralFeatureAction |
| `A_structuredNodeInput_structuredActivityNode` | `structuredNodeInput` | InputPin | `structuredActivityNode` | StructuredActivityNode |
| `A_structuredNodeOutput_structuredActivityNode` | `structuredNodeOutput` | OutputPin | `structuredActivityNode` | StructuredActivityNode |
| `A_target_callOperationAction` | `target` | InputPin | `callOperationAction` | CallOperationAction |
| `A_target_destroyObjectAction` | `target` | InputPin | `destroyObjectAction` | DestroyObjectAction |
| `A_target_sendObjectAction` | `target` | InputPin | `sendObjectAction` | SendObjectAction |
| `A_target_sendSignalAction` | `target` | InputPin | `sendSignalAction` | SendSignalAction |
| `A_test_clause` | `test` | ExecutableNode | `clause` | Clause |
| `A_test_loopNode` | `test` | ExecutableNode | `loopNode` | LoopNode |
| `A_trigger_acceptEventAction` | `trigger` | Trigger | `acceptEventAction` | AcceptEventAction |
| `A_unmarshallType_unmarshallAction` | `unmarshallType` | Classifier | `unmarshallAction` | UnmarshallAction |
| `A_value_linkEndData` | `value` | InputPin | `linkEndData` | LinkEndData |
| `A_value_qualifierValue` | `value` | InputPin | `qualifierValue` | QualifierValue |
| `A_value_valuePin` | `value` | ValueSpecification | `valuePin` | ValuePin |
| `A_value_valueSpecificationAction` | `value` | ValueSpecification | `valueSpecificationAction` | ValueSpecificationAction |
| `A_value_writeStructuralFeatureAction` | `value` | InputPin | `writeStructuralFeatureAction` | WriteStructuralFeatureAction |
| `A_value_writeVariableAction` | `value` | InputPin | `writeVariableAction` | WriteVariableAction |
| `A_variable_scope` | `variable` | Variable | `scope` | StructuredActivityNode |
| `A_variable_variableAction` | `variable` | Variable | `variableAction` | VariableAction |

## Межраздельные ссылки (периодические элементы)

| Элемент | Связанный элемент | Раздел | Тип связи |
|---------|-------------------|--------|-----------|
| Action | ExecutableNode | 15 | обобщение |
| InvocationAction | Action | 16 | обобщение (внутр. раздела) |
| CallAction | InvocationAction | 16 | обобщение (внутр. раздела) |
| LinkAction | Action | 16 | обобщение (внутр. раздела) |
| StructuralFeatureAction | Action | 16 | обобщение (внутр. раздела) |
| WriteLinkAction | LinkAction | 16 | обобщение (внутр. раздела) |
| WriteStructuralFeatureAction | StructuralFeatureAction | 16 | обобщение (внутр. раздела) |
| VariableAction | Action | 16 | обобщение (внутр. раздела) |
| Pin | ObjectNode | 15 | обобщение |
| Pin | MultiplicityElement | 9 | обобщение |
| InputPin | Pin | 16 | обобщение (внутр. раздела) |
| OutputPin | Pin | 16 | обобщение (внутр. раздела) |
| ActionInputPin | InputPin | 16 | обобщение (внутр. раздела) |
| ValuePin | InputPin | 16 | обобщение (внутр. раздела) |
| AcceptEventAction | Action | 16 | обобщение (внутр. раздела) |
| AcceptCallAction | AcceptEventAction | 16 | обобщение (внутр. раздела) |
| StructuredActivityNode | Namespace, ActivityGroup, Action | 15/9/16 | множественное обобщение |
| ExpansionRegion | StructuredActivityNode | 16 | обобщение (внутр. раздела) |
| LoopNode | StructuredActivityNode | 16 | обобщение (внутр. раздела) |
| ConditionalNode | StructuredActivityNode | 16 | обобщение (внутр. раздела) |
| SequenceNode | StructuredActivityNode | 16 | обобщение (внутр. раздела) |
| ExpansionNode | ObjectNode | 15 | обобщение |
| Clause | Element | 9 | обобщение |
| SendSignalAction / BroadcastSignalAction | Signal | 13/17 | ассоциация (тип) |
| AcceptEventAction.trigger | Trigger | 13 | ассоциация A_trigger_acceptEventAction |
| ValueSpecification.value | ValueSpecification | 8 | ассоциация A_value_valueSpecificationAction |

## Список рисунков

| Рисунок | Подпись | Страница |
|---------|---------|----------|
| Figure 16.1 | Actions | 440 |
| Figure 16.2 | Action | 444 |
| Figure 16.3 | Local pre- and post-conditions | 444 |
| Figure 16.4 | Pin notations | 444 |
| Figure 16.5 | Pin notations, with arrows | 445 |
| Figure 16.6 | Standalone Pin notations | 445 |
| Figure 16.7 | Examples of Actions | 445 |
| Figure 16.8 | Example of action using a tool-specific concrete syntax | 445 |
| Figure 16.9 | Example of an action with local pre- and post-conditions | 446 |
| Figure 16.10 | Pin examples | 446 |
| Figure 16.11 | Specifying selection behavior on an ObjectFlow | 447 |
| Figure 16.12 | Example abstract syntax model showing the use of ActionInputPins | 447 |
| Figure 16.13 | Invocation Actions | 448 |
| Figure 16.14 | Calling a Behavior | 452 |
| Figure 16.15 | Calling an Activity | 452 |
| Figure 16.16 | Calling an Operation | 452 |
| Figure 16.17 | Calling an Operation, showing the owner name | 452 |
| Figure 16.18 | Sending a Signal | 453 |
| Figure 16.19 | Exception Pin annotations | 453 |
| Figure 16.20 | Effect Pin annotations | 453 |
| Figure 16.21 | Stream Pin annotations | 453 |
| Figure 16.22 | Stream Pin annotations, with filled arrows and rectangles | 454 |
| Figure 16.23 | Alternative input/outputs using ParameterSet notation | 454 |
| Figure 16.24 | Invoking an Activity | 454 |
| Figure 16.25 | Sending Signals | 455 |
| Figure 16.26 | Streaming Pin examples | 455 |
| Figure 16.27 | Exception Pin examples | 455 |
| Figure 16.28 | Pin example with effects | 455 |
| Figure 16.29 | Alternative input/outputs using ParameterSets | 455 |
| Figure 16.30 | Object Actions | 456 |
| Figure 16.31 | ValueSpecificationAction notation | 458 |
| Figure 16.32 | ValueSpecificationActions | 459 |
| Figure 16.33 | Link End Data | 459 |
| Figure 16.34 | Link Actions | 461 |
| Figure 16.35 | Link Object Actions | 464 |
| Figure 16.36 | Structural Feature Actions | 465 |
| Figure 16.37 | Variable Actions | 468 |
| Figure 16.38 | Presentation option for AddVariableValueAction | 469 |
| Figure 16.39 | Accept Event Actions | 470 |
| Figure 16.40 | AcceptEventAction notations | 472 |
| Figure 16.41 | Implicitly enabled AcceptEventAction | 473 |
| Figure 16.42 | Explicitly enabled AcceptEventAction | 473 |
| Figure 16.43 | Repetitive time event | 473 |
| Figure 16.44 | UnmarshallAction | 473 |
| Figure 16.45 | Structured Actions | 474 |
| Figure 16.46 | Notation for StructuredActivityNode | 478 |
| Figure 16.47 | Expansion Regions | 478 |
| Figure 16.48 | Expansion Region | 481 |
| Figure 16.49 | Shorthand notation for expansion region containing single node | 481 |
| Figure 16.50 | Full form of previous shorthand notation | 481 |
| Figure 16.51 | Notation for expansion region with one behavior invocation | 481 |
| Figure 16.52 | Expansion region with two inputs and one output | 482 |
| Figure 16.53 | Expansion Region | 483 |
| Figure 16.54 | Examples of expansion region shorthand | 483 |
| Figure 16.55 | Shorthand notation for expansion region | 484 |
| Figure 16.56 | Other Actions | 484 |

## Применение текущих скриптов для раздела 16

| Этап | Скрипт | Команда | Особенности для раздела 16 |
|------|--------|---------|---------------------------|
| 1 | `prepare_section.py` | `python scripts/prepare_section.py --clause 16` | Выведит inventory.json с 63 классификаторами, 109 ассоциациями; сверка XMI/PDF обязательна из-за большого числа элементов. |
| 2 | `scaffold_section.py` | `python scripts/scaffold_section.py --clause 16` | Создаст заготовки всех 63 страниц классификаторов — больше любого предыдущего раздела (max ранее: ~32 для раздела 9). |
| 3 | `sync_xmi_properties.py` | `python scripts/sync_xmi_properties.py --clause 16 --check` | Обработка 135 атрибутов, 109 ассоциаций; нужно особое внимание концам пинов (InputPin/OutputPin) с кратностью. |
| 4 | `build_site.py` | `python scripts/build_site.py --clause 16` | ~600+ новых маршрутов (#/classifier/..., #/association/...); проверка дубликатов критична при множественных абстрактных классах-промежутках. |
| 5 | SVG-генератор (section_config) | Зависит от sections.json | Для раздела 16 потребуются builders для pin-диаграмм, нотаций ExpansionRegion и схем наследования Actions. |
| 6 | `validate_site.py` | `python scripts/validate_site.py --clause 16 --static-only` | Проверка всех маршрутов, OCL-ограничений (155), геометрии диаграмм пинов (критичные размеры подписей). |

**Ключевая особенность**: раздел 16 содержит самый большой каталог классификаторов в спецификации (63 элемента). Скрипты prepare_section и scaffold должны корректно обрабатывать множественное наследование StructuredActivityNode (Namespace + ActivityGroup + Action) и перекрёстные типы из раздела 15/9/13.

## Модернизация скриптов

1. **Генерация каталога из XMI без ручной сверки**: подготовить `sync_xmi_properties.py` с автоматическим поиском пакетов по имени (`packagedElement/@name == "Actions"`) и расширением поиска наследников (рекурсивный обход `generalization` в полном XMI), чтобы не зависеть от ручного сопоставления TOC.

2. **Массовая обработка OCL-ограничений**: автоматический извлечение всех `ownedRule` для каждого классификатора с разбивкой на отдельные файлы `rules/<ClassName>.js`, поддержка парсинга OCL-invariant (inv:) в машиночитаемую структуру — 155 правил раздела 16 не помещаются в один JS-файл.

3. **Шаблоны для pin-диаграмм**: генератор SVG с параметризуемой нотацией пинов (InputPin/OutputPin, стрелки модификаторов, подписи кратности) — единый builder вместо уникального кода для каждой диаграммы пинов (16.4–16.6, 16.10, 16.19–16.22).

4. **Группировка ассоциаций по ends**: автоматическая проверка парности концов каждой ассоциации в XMI с подсветкой односторонних связей и отсутствующих типов — полезно при обработке 109 ассоциаций раздела 16, где большинство концов связывает пины с действиями.

## Замечания и риски

### Особенности спецификации

1. **Большой объём**: 124 печатные страницы, 63 классификатора, 109 ассоциаций — раздел один из самых крупных.
2. **Вложенная иерархия**: Много уровней абстракции (Action → InvocationAction → CallAction → CallBehaviorAction/CallOperationAction, LinkAction → WriteLinkAction, StructuralFeatureAction → WriteStructuralFeatureAction и т.д.).
3. **Обобщения из других пакетов**: Action наследуется от ExecutableNode (раздел 15), Pin — от ObjectNode и MultiplicityElement (разделы 15 и 9). При переносе потребуются ссылки на внешние классификаторы.
4. **Специфические модели поведения**: ExpansionRegion, ConditionalNode и LoopNode добавляют сложную структуру узлов активности с условиями и циклами.
5. **Множество рисунков (56)**: значительная часть диаграмм — схемы абстрактного синтаксиса (Figure 16.2, 16.12) или нотации объектов/пинов; их нужно корректно перевести в интерактивные SVG с сохранением структуры наследования.

### Риски

- **Пересечения с разделом 15 (Activities)**: многие классы Actions (Action, Pin, StructuredActivityNode) имеют связи с элементами Activities. Необходима чёткая граница между разделами.
- **Сложные диаграммы абстрактного синтаксиса**: Figure 16.2 и связанные содержат схемы наследования классов, которые нужно корректно перевести в интерактивные SVG.
- **Множество ограничений OCL**: 155 ownedRule — значительное количество OCL-ограничений для перевода и проверки.
- **Нумерация TOC**: в оригинальном TOC текста пропущены Figure 16.12 (стр. 447) и Figure 16.49 (стр. 481), но они присутствуют в теле спецификации — при извлечении по регулярным выражениям легко потерять.
- **109 ассоциаций**: подавляющее большинство концов связывают пины с действиями (`* → InputPin/OutputPin`); при генерации таблиц нужно чётко разделять ends и их типы.
