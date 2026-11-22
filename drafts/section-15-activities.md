# Черновик реестра раздела 15: Activities

> **Цель:** подготовить ЧЕРНОВИК реестра (этап 1) для будущего переноса раздела «Activities» в справочник UML 2.5.1.
> **Источник:** OMG UML 2.5.1, formal/17-12-05

## Предлагаемый блок конфигурации для `scripts/sections.json`

```json
{
  "clause": "15",
  "title": "Activities",
  "title_ru": "Деятельности",
  "slug": "activities",
  "package": "Activities",
  "first_page": 373,
  "last_page": 439,
  "classifier_catalog": "15.7",
  "association_catalog": "15.8",
  "source": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf"
}
```

## Дерево подразделов

| № подраздела | Заголовок | Печатная страница |
|-------------|-----------|-----------------|
| 15.1 | Summary | 373 |
| 15.2 | Activities | 373 |
| 15.2.1 | Summary | 373 |
| 15.2.2 | Abstract Syntax | 374 |
| 15.2.3 | Semantics | 374 |
| 15.2.3.1 | Activities | 374 |
| 15.2.3.2 | Activity Nodes | 375 |
| 15.2.3.3 | Activity Edges | 375 |
| 15.2.3.4 | Object Flows | 376 |
| 15.2.3.5 | Variables | 377 |
| 15.2.3.6 | Activity Execution | 378 |
| 15.2.3.7 | Activity Generalization | 379 |
| 15.2.4 | Notation | 379 |
| 15.2.5 | Examples | 382 |
| 15.3 | Control Nodes | 387 |
| 15.3.1 | Summary | 387 |
| 15.3.2 | Abstract Syntax | 387 |
| 15.3.3 | Semantics | 387 |
| 15.3.3.1 | Initial Node | 387 |
| 15.3.3.2 | Final Nodes | 388 |
| 15.3.3.3 | Fork Nodes | 388 |
| 15.3.3.4 | Join Nodes | 389 |
| 15.3.3.5 | Merge Nodes | 389 |
| 15.3.3.6 | Decision Nodes | 390 |
| 15.3.4 | Notation | 391 |
| 15.3.4.1 | Initial and Final Nodes | 391 |
| 15.3.4.2 | Fork and Join Nodes | 391 |
| 15.3.4.3 | Merge Nodes and Decision Nodes | 392 |
| 15.3.5 | Examples | 392 |
| 15.3.5.1 | Initial Nodes | 392 |
| 15.3.5.2 | Fork and Join Nodes | 392 |
| 15.3.5.3 | Merge and Decision Nodes | 393 |
| 15.3.5.4 | Final Nodes | 394 |
| 15.3.5.5 | Various Control Nodes | 395 |
| 15.4 | Object Nodes | 396 |
| 15.4.1 | Summary | 396 |
| 15.4.2 | Abstract Syntax | 396 |
| 15.4.3 | Semantics | 397 |
| 15.4.3.1 | Object Nodes | 397 |
| 15.4.3.2 | Activity Parameter Nodes | 398 |
| 15.4.3.3 | Central Buffer Nodes | 398 |
| 15.4.3.4 | Data Store Nodes | 399 |
| 15.4.4 | Notation | 399 |
| 15.4.4.1 | Object Nodes | 399 |
| 15.4.4.2 | Activity Parameter Nodes | 400 |
| 15.4.4.3 | Central Buffer and Data Store Nodes | 401 |
| 15.4.5 | Examples | 401 |
| 15.4.5.1 | Activity Parameter Nodes | 401 |
| 15.4.5.2 | Central Buffer and Data Store Nodes | 402 |
| 15.5 | Executable Nodes | 403 |
| 15.5.1 | Summary | 403 |
| 15.5.2 | Abstract Syntax | 403 |
| 15.5.3 | Semantics | 403 |
| 15.5.3.1 | Executable Nodes | 403 |
| 15.5.3.2 | Exceptions and Exception Handlers | 404 |
| 15.5.4 | Notation | 404 |
| 15.5.4.1 | Executable Nodes | 404 |
| 15.5.4.2 | Exception Handlers | 404 |
| 15.5.5 | Examples | 405 |
| 15.6 | Activity Groups | 405 |
| 15.6.1 | Summary | 405 |
| 15.6.2 | Abstract Syntax | 406 |
| 15.6.3 | Semantics | 406 |
| 15.6.3.1 | Activity Partitions | 406 |
| 15.6.3.2 | Interruptible Activity Regions | 407 |
| 15.6.4 | Notation | 408 |
| 15.6.4.1 | Activity Partitions | 408 |
| 15.6.4.2 | Interruptible Activity Regions | 409 |
| 15.6.5 | Examples | 409 |
| 15.6.5.1 | Activity Partitions | 409 |
| 15.6.5.2 | Interruptible Activity Regions | 411 |
| 15.7 | Classifier Descriptions | 411 |
| 15.7.1 | Activity | 411 |
| 15.7.1.1 | Description | 411 |
| 15.7.1.2 | Diagrams | 412 |
| 15.7.1.3 | Generalizations | 412 |
| 15.7.1.4 | Attributes | 412 |
| 15.7.1.5 | Association Ends | 412 |
| 15.7.1.6 | Constraints | 412 |
| 15.7.2 | ActivityEdge | 413 |
| 15.7.2.1 | Description | 413 |
| 15.7.2.2 | Diagrams | 413 |
| 15.7.2.3 | Generalizations | 413 |
| 15.7.2.4 | Specializations | 413 |
| 15.7.2.5 | Attributes | 413 |
| 15.7.2.6 | Association Ends | 413 |
| 15.7.2.7 | Operations | 414 |
| 15.7.2.8 | Constraints | 414 |
| 15.7.3 | ActivityFinalNode | 414 |
| 15.7.3.1 | Description | 414 |
| 15.7.3.2 | Diagrams | 414 |
| 15.7.3.3 | Generalizations | 414 |
| 15.7.4 | ActivityGroup | 414 |
| 15.7.4.1 | Description | 414 |
| 15.7.4.2 | Diagrams | 414 |
| 15.7.4.3 | Generalizations | 414 |
| 15.7.4.4 | Specializations | 415 |
| 15.7.4.5 | Association Ends | 415 |
| 15.7.4.6 | Operations | 415 |
| 15.7.4.7 | Constraints | 415 |
| 15.7.5 | ActivityNode | 415 |
| 15.7.5.1 | Description | 415 |
| 15.7.5.2 | Diagrams | 416 |
| 15.7.5.3 | Generalizations | 416 |
| 15.7.5.4 | Specializations | 416 |
| 15.7.5.5 | Attributes | 416 |
| 15.7.5.6 | Association Ends | 416 |
| 15.7.5.7 | Operations | 416 |
| 15.7.6 | ActivityParameterNode | 417 |
| 15.7.6.1 | Description | 417 |
| 15.7.6.2 | Diagrams | 417 |
| 15.7.6.3 | Generalizations | 417 |
| 15.7.6.4 | Association Ends | 417 |
| 15.7.6.5 | Constraints | 417 |
| 15.7.7 | ActivityPartition | 418 |
| 15.7.7.1 | Description | 418 |
| 15.7.7.2 | Diagrams | 418 |
| 15.7.7.3 | Generalizations | 418 |
| 15.7.7.4 | Attributes | 418 |
| 15.7.7.5 | Association Ends | 418 |
| 15.7.7.6 | Constraints | 418 |
| 15.7.8 | CentralBufferNode | 419 |
| 15.7.8.1 | Description | 419 |
| 15.7.8.2 | Diagrams | 419 |
| 15.7.8.3 | Generalizations | 419 |
| 15.7.8.4 | Specializations | 420 |
| 15.7.9 | ControlFlow | 420 |
| 15.7.9.1 | Description | 420 |
| 15.7.9.2 | Diagrams | 420 |
| 15.7.9.3 | Generalizations | 420 |
| 15.7.9.4 | Constraints | 420 |
| 15.7.10 | ControlNode | 420 |
| 15.7.10.1 | Description | 420 |
| 15.7.10.2 | Diagrams | 420 |
| 15.7.10.3 | Generalizations | 420 |
| 15.7.10.4 | Specializations | 420 |
| 15.7.11 | DataStoreNode | 420 |
| 15.7.11.1 | Description | 420 |
| 15.7.11.2 | Diagrams | 420 |
| 15.7.11.3 | Generalizations | 420 |
| 15.7.12 | DecisionNode | 421 |
| 15.7.12.1 | Description | 421 |
| 15.7.12.2 | Diagrams | 421 |
| 15.7.12.3 | Generalizations | 421 |
| 15.7.12.4 | Association Ends | 421 |
| 15.7.12.5 | Constraints | 421 |
| 15.7.13 | ExceptionHandler | 422 |
| 15.7.13.1 | Description | 422 |
| 15.7.13.2 | Diagrams | 422 |
| 15.7.13.3 | Generalizations | 422 |
| 15.7.13.4 | Association Ends | 422 |
| 15.7.13.5 | Constraints | 423 |
| 15.7.14 | ExecutableNode | 424 |
| 15.7.14.1 | Description | 424 |
| 15.7.14.2 | Diagrams | 424 |
| 15.7.14.3 | Generalizations | 424 |
| 15.7.14.4 | Specializations | 424 |
| 15.7.14.5 | Association Ends | 424 |
| 15.7.15 | FinalNode | 424 |
| 15.7.15.1 | Description | 424 |
| 15.7.15.2 | Diagrams | 424 |
| 15.7.15.3 | Generalizations | 424 |
| 15.7.15.4 | Specializations | 424 |
| 15.7.15.5 | Constraints | 424 |
| 15.7.16 | FlowFinalNode | 424 |
| 15.7.16.1 | Description | 424 |
| 15.7.16.2 | Diagrams | 425 |
| 15.7.16.3 | Generalizations | 425 |
| 15.7.17 | ForkNode | 425 |
| 15.7.17.1 | Description | 425 |
| 15.7.17.2 | Diagrams | 425 |
| 15.7.17.3 | Generalizations | 425 |
| 15.7.17.4 | Constraints | 425 |
| 15.7.18 | InitialNode | 425 |
| 15.7.18.1 | Description | 425 |
| 15.7.18.2 | Diagrams | 425 |
| 15.7.18.3 | Generalizations | 425 |
| 15.7.18.4 | Constraints | 425 |
| 15.7.19 | InterruptibleActivityRegion | 426 |
| 15.7.19.1 | Description | 426 |
| 15.7.19.2 | Diagrams | 426 |
| 15.7.19.3 | Generalizations | 426 |
| 15.7.19.4 | Association Ends | 426 |
| 15.7.19.5 | Constraints | 426 |
| 15.7.20 | JoinNode | 426 |
| 15.7.20.1 | Description | 426 |
| 15.7.20.2 | Diagrams | 426 |
| 15.7.20.3 | Generalizations | 426 |
| 15.7.20.4 | Attributes | 427 |
| 15.7.20.5 | Association Ends | 427 |
| 15.7.20.6 | Constraints | 427 |
| 15.7.21 | MergeNode | 427 |
| 15.7.21.1 | Description | 427 |
| 15.7.21.2 | Diagrams | 427 |
| 15.7.21.3 | Generalizations | 427 |
| 15.7.21.4 | Constraints | 427 |
| 15.7.22 | ObjectFlow | 428 |
| 15.7.22.1 | Description | 428 |
| 15.7.22.2 | Diagrams | 428 |
| 15.7.22.3 | Generalizations | 428 |
| 15.7.22.4 | Attributes | 428 |
| 15.7.22.5 | Association Ends | 428 |
| 15.7.22.6 | Constraints | 428 |
| 15.7.23 | ObjectNode | 429 |
| 15.7.23.1 | Description | 429 |
| 15.7.23.2 | Diagrams | 429 |
| 15.7.23.3 | Generalizations | 429 |
| 15.7.23.4 | Specializations | 429 |
| 15.7.23.5 | Attributes | 430 |
| 15.7.23.6 | Association Ends | 430 |
| 15.7.23.7 | Constraints | 430 |
| 15.7.24 | ObjectNodeOrderingKind | 430 |
| 15.7.24.1 | Description | 430 |
| 15.7.24.2 | Diagrams | 431 |
| 15.7.24.3 | Literals | 431 |
| 15.7.25 | Variable | 431 |
| 15.7.25.1 | Description | 431 |
| 15.7.25.2 | Diagrams | 431 |
| 15.7.25.3 | Generalizations | 431 |
| 15.7.25.4 | Attributes | 431 |
| 15.7.25.5 | Association Ends | 431 |
| 15.7.25.6 | Operations | 431 |
| 15.8 | Association Descriptions | 432 |
| 15.8.1 | A_containedEdge_inGroup | 432 |
| 15.8.1.1 | Diagrams | 432 |
| 15.8.1.2 | Member Ends | 432 |
| 15.8.2 | A_containedNode_inGroup | 432 |
| 15.8.2.1 | Diagrams | 432 |
| 15.8.2.2 | Member Ends | 432 |
| 15.8.3 | A_decisionInputFlow_decisionNode | 432 |
| 15.8.3.1 | Diagrams | 432 |
| 15.8.3.2 | Owned Ends | 432 |
| 15.8.4 | A_decisionInput_decisionNode | 432 |
| 15.8.4.1 | Diagrams | 432 |
| 15.8.4.2 | Owned Ends | 432 |
| 15.8.5 | A_edge_activity | 432 |
| 15.8.5.1 | Diagrams | 432 |
| 15.8.5.2 | Member Ends | 433 |
| 15.8.6 | A_edge_inPartition | 433 |
| 15.8.6.1 | Diagrams | 433 |
| 15.8.6.2 | Member Ends | 433 |
| 15.8.7 | A_exceptionInput_exceptionHandler | 433 |
| 15.8.7.1 | Diagrams | 433 |
| 15.8.7.2 | Owned Ends | 433 |
| 15.8.8 | A_exceptionType_exceptionHandler | 433 |
| 15.8.8.1 | Diagrams | 433 |
| 15.8.8.2 | Owned Ends | 433 |
| 15.8.9 | A_group_inActivity | 433 |
| 15.8.9.1 | Diagrams | 433 |
| 15.8.9.2 | Member Ends | 433 |
| 15.8.10 | A_guard_activityEdge | 434 |
| 15.8.10.1 | Diagrams | 434 |
| 15.8.10.2 | Owned Ends | 434 |
| 15.8.11 | A_handlerBody_exceptionHandler | 434 |
| 15.8.11.1 | Diagrams | 434 |
| 15.8.11.2 | Owned Ends | 434 |
| 15.8.12 | A_handler_protectedNode | 434 |
| 15.8.12.1 | Diagrams | 434 |
| 15.8.12.2 | Member Ends | 434 |
| 15.8.13 | A_inInterruptibleRegion_node | 434 |
| 15.8.13.1 | Diagrams | 434 |
| 15.8.13.2 | Member Ends | 434 |
| 15.8.14 | A_inPartition_node | 434 |
| 15.8.14.1 | Diagrams | 434 |
| 15.8.14.2 | Member Ends | 434 |
| 15.8.15 | A_inState_objectNode | 435 |
| 15.8.15.1 | Diagrams | 435 |
| 15.8.15.2 | Owned Ends | 435 |
| 15.8.16 | A_incoming_target_node | 435 |
| 15.8.16.1 | Diagrams | 435 |
| 15.8.16.2 | Member Ends | 435 |
| 15.8.17 | A_interruptingEdge_interrupts | 435 |
| 15.8.17.1 | Diagrams | 435 |
| 15.8.17.2 | Member Ends | 435 |
| 15.8.18 | A_joinSpec_joinNode | 435 |
| 15.8.18.1 | Diagrams | 435 |
| 15.8.18.2 | Owned Ends | 435 |
| 15.8.19 | A_node_activity | 435 |
| 15.8.19.1 | Diagrams | 435 |
| 15.8.19.2 | Member Ends | 436 |
| 15.8.20 | A_outgoing_source_node | 436 |
| 15.8.20.1 | Diagrams | 436 |
| 15.8.20.2 | Member Ends | 436 |
| 15.8.21 | A_parameter_activityParameterNode | 436 |
| 15.8.21.1 | Diagrams | 436 |
| 15.8.21.2 | Owned Ends | 436 |
| 15.8.22 | A_partition_activity | 436 |
| 15.8.22.1 | Diagrams | 436 |
| 15.8.22.2 | Owned Ends | 436 |
| 15.8.23 | A_redefinedEdge_activityEdge | 436 |
| 15.8.23.1 | Diagrams | 436 |
| 15.8.23.2 | Owned Ends | 436 |
| 15.8.24 | A_redefinedNode_activityNode | 437 |
| 15.8.24.1 | Diagrams | 437 |
| 15.8.24.2 | Owned Ends | 437 |
| 15.8.25 | A_represents_activityPartition | 437 |
| 15.8.25.1 | Diagrams | 437 |
| 15.8.25.2 | Owned Ends | 437 |
| 15.8.26 | A_selection_objectFlow | 437 |
| 15.8.26.1 | Diagrams | 437 |
| 15.8.26.2 | Owned Ends | 437 |
| 15.8.27 | A_selection_objectNode | 437 |
| 15.8.27.1 | Diagrams | 437 |
| 15.8.27.2 | Owned Ends | 437 |
| 15.8.28 | A_structuredNode_activity | 437 |
| 15.8.28.1 | Diagrams | 437 |
| 15.8.28.2 | Member Ends | 437 |
| 15.8.29 | A_subgroup_superGroup | 438 |
| 15.8.29.1 | Diagrams | 438 |
| 15.8.29.2 | Member Ends | 438 |
| 15.8.30 | A_subpartition_superPartition | 438 |
| 15.8.30.1 | Diagrams | 438 |
| 15.8.30.2 | Member Ends | 438 |
| 15.8.31 | A_transformation_objectFlow | 438 |
| 15.8.31.1 | Diagrams | 438 |
| 15.8.31.2 | Owned Ends | 438 |
| 15.8.32 | A_upperBound_objectNode | 438 |
| 15.8.32.1 | Diagrams | 438 |
| 15.8.32.2 | Owned Ends | 438 |
| 15.8.33 | A_variable_activityScope | 438 |
| 15.8.33.1 | Diagrams | 438 |
| 15.8.33.2 | Member Ends | 438 |
| 15.8.34 | A_weight_activityEdge | 439 |
| 15.8.34.1 | Diagrams | 439 |
| 15.8.34.2 | Owned Ends | 439 |

## Классификаторы (из XMI, пакет Activities)

| Англ. имя | Тип | Подраздел | Страница | Атрибуты | Операции |
|-----------|-----|-----------|----------|----------|----------|
| Activity | Class | 15.7.1 | 411 | 8 | 0 |
| ActivityEdge | Class | 15.7.2 | 413 | 10 | 1 |
| ActivityFinalNode | Class | 15.7.3 | 414 | 0 | 0 |
| ActivityGroup | Class | 15.7.4 | 414 | 5 | 1 |
| ActivityNode | Class | 15.7.5 | 415 | 8 | 2 |
| ActivityParameterNode | Class | 15.7.6 | 417 | 1 | 0 |
| ActivityPartition | Class | 15.7.7 | 418 | 7 | 0 |
| CentralBufferNode | Class | 15.7.8 | 419 | 0 | 0 |
| ControlFlow | Class | 15.7.9 | 420 | 0 | 0 |
| ControlNode | Class | 15.7.10 | 420 | 0 | 0 |
| DataStoreNode | Class | 15.7.11 | 420 | 0 | 0 |
| DecisionNode | Class | 15.7.12 | 421 | 2 | 0 |
| ExceptionHandler | Class | 15.7.13 | 422 | 4 | 0 |
| ExecutableNode | Class | 15.7.14 | 424 | 1 | 0 |
| FinalNode | Class | 15.7.15 | 424 | 0 | 0 |
| FlowFinalNode | Class | 15.7.16 | 424 | 0 | 0 |
| ForkNode | Class | 15.7.17 | 425 | 0 | 0 |
| InitialNode | Class | 15.7.18 | 425 | 0 | 0 |
| InterruptibleActivityRegion | Class | 15.7.19 | 426 | 2 | 0 |
| JoinNode | Class | 15.7.20 | 426 | 2 | 0 |
| MergeNode | Class | 15.7.21 | 427 | 0 | 0 |
| ObjectFlow | Class | 15.7.22 | 428 | 4 | 0 |
| ObjectNode | Class | 15.7.23 | 429 | 5 | 0 |
| ObjectNodeOrderingKind | Enum | 15.7.24 | 430 | 0 | 0 |
| Variable | Class | 15.7.25 | 431 | 2 | 1 |

## Ассоциации (из XMI, пакет Activities)

| Англ. имя | Подраздел | Страница | Концов | Концы |
|-----------|-----------|----------|--------|-------|
| A_containedEdge_inGroup | 15.8.1 | 432 | 2 | containedEdge, inGroup |
| A_containedNode_inGroup | 15.8.2 | 432 | 2 | containedNode, inGroup |
| A_decisionInputFlow_decisionNode | 15.8.3 | 432 | 2 | decisionInputFlow, decisionNode |
| A_decisionInput_decisionNode | 15.8.4 | 432 | 2 | decisionInput, decisionNode |
| A_edge_activity | 15.8.5 | 432 | 2 | edge, activity |
| A_edge_inPartition | 15.8.6 | 433 | 2 | edge, inPartition |
| A_exceptionInput_exceptionHandler | 15.8.7 | 433 | 2 | exceptionInput, exceptionHandler |
| A_exceptionType_exceptionHandler | 15.8.8 | 433 | 2 | exceptionType, exceptionHandler |
| A_group_inActivity | 15.8.9 | 433 | 2 | group, inActivity |
| A_guard_activityEdge | 15.8.10 | 434 | 2 | guard, activityEdge |
| A_handlerBody_exceptionHandler | 15.8.11 | 434 | 2 | handlerBody, exceptionHandler |
| A_handler_protectedNode | 15.8.12 | 434 | 2 | handler, protectedNode |
| A_inInterruptibleRegion_node | 15.8.13 | 434 | 2 | inInterruptibleRegion, node |
| A_inPartition_node | 15.8.14 | 434 | 2 | inPartition, node |
| A_inState_objectNode | 15.8.15 | 435 | 2 | inState, objectNode |
| A_incoming_target_node | 15.8.16 | 435 | 2 | incoming, target |
| A_interruptingEdge_interrupts | 15.8.17 | 435 | 2 | interruptingEdge, interrupts |
| A_joinSpec_joinNode | 15.8.18 | 435 | 2 | joinSpec, joinNode |
| A_node_activity | 15.8.19 | 435 | 2 | node, activity |
| A_outgoing_source_node | 15.8.20 | 436 | 2 | outgoing, source |
| A_parameter_activityParameterNode | 15.8.21 | 436 | 2 | parameter, activityParameterNode |
| A_partition_activity | 15.8.22 | 436 | 2 | partition, activity |
| A_redefinedEdge_activityEdge | 15.8.23 | 436 | 2 | redefinedEdge, activityEdge |
| A_redefinedNode_activityNode | 15.8.24 | 437 | 2 | redefinedNode, activityNode |
| A_represents_activityPartition | 15.8.25 | 437 | 2 | represents, activityPartition |
| A_selection_objectFlow | 15.8.26 | 437 | 2 | selection, objectFlow |
| A_selection_objectNode | 15.8.27 | 437 | 2 | selection, objectNode |
| A_structuredNode_activity | 15.8.28 | 437 | 2 | structuredNode, activity |
| A_subgroup_superGroup | 15.8.29 | 438 | 2 | subgroup, superGroup |
| A_subpartition_superPartition | 15.8.30 | 438 | 2 | subpartition, superPartition |
| A_transformation_objectFlow | 15.8.31 | 438 | 2 | transformation, objectFlow |
| A_upperBound_objectNode | 15.8.32 | 438 | 2 | upperBound, objectNode |
| A_variable_activityScope | 15.8.33 | 438 | 2 | variable, activityScope |
| A_weight_activityEdge | 15.8.34 | 439 | 2 | weight, activityEdge |

## Рисунки (Figures)

| № рисунка | Подпись | Страница | Подраздел |
|-----------|---------|----------|-----------|
| 15.1 | Activities | 374 | - |
| 15.2 | Activity notation | 379 | - |
| 15.3 | Activity class notation | 380 | - |
| 15.4 | ActivityNode notation | 380 | - |
| 15.5 | ActivityEdge notation | 376 | - |
| 15.6 | ActivityEdge connector notation | 380 | - |
| 15.7 | in | 377 | - |
| 15.8 | ControlFlow notation | 381 | - |
| 15.9 | ObjectFlow notations | 381 | - |
| 15.10 | Specifying selection behavior on an ObjectFlow | 381 | - |
| 15.11 | Eliding objects flowing on the edge | 382 | - |
| 15.12 | Activity node example (where the arrowed lines are the only non-activity node sy | 382 | - |
| 15.13 | ActivityEdge examples | 382 | - |
| 15.14 | ObjectFlow example | 382 | - |
| 15.15 | Eliding objects flowing on the edge | 383 | - |
| 15.16 | Specifying selection and transformation Behaviors on an ObjectFlow | 383 | - |
| 15.17 | Linking a class diagram to an object node | 383 | - |
| 15.18 | Specifying multicast and multireceive on the edge | 383 | - |
| 15.19 | ActivityEdge connector example | 384 | - |
| 15.20 | Equivalent model | 384 | - |
| 15.21 | ActivityEdge weight examples | 384 | - |
| 15.22 | Example of an activity with input parameter | 385 | - |
| 15.23 | Part selection workflow example | 385 | - |
| 15.24 | Trouble ticket workflow example | 386 | - |
| 15.25 | Activity with attributes and operations | 386 | - |
| 15.26 | Control Nodes | 387 | - |
| 15.27 | InitialNode notation | 391 | - |
| 15.28 | FinalNode notation | 391 | - |
| 15.29 | ForkNode and JoinNode notation | 391 | - |
| 15.30 | joinSpec notation | 391 | - |
| 15.31 | Combined JoinNode/ ForkNode notation | 391 | - |
| 15.32 | MergeNode notation | 392 | - |
| 15.33 | DecisionNode notation | 392 | - |
| 15.34 | Combined MergeNode/DecisionNode notation | 392 | - |
| 15.35 | InitialNode example | 392 | - |
| 15.36 | ForkNode example | 392 | - |
| 15.37 | JoinNode example | 393 | - |
| 15.38 | joinSpec example | 393 | - |
| 15.39 | MergeNode example | 393 | - |
| 15.40 | DecisionNode example | 393 | - |
| 15.41 | DecisionNode example with decisionInput | 394 | - |
| 15.42 | ActivityFinalNode example | 394 | - |
| 15.43 | ActivityFinalNode example | 394 | - |
| 15.44 | ActivityFinalNode example | 395 | - |
| 15.45 | FlowFinalNode example | 395 | - |
| 15.46 | FlowFinalNode and ActivityFinalNode example | 395 | - |
| 15.47 | ControlNode examples (with accompanying actions and control flows) | 395 | - |
| 15.48 | Object Nodes | 396 | - |
| 15.49 | ObjectNode notations | 399 | - |
| 15.50 | ObjectNode annotations | 399 | - |
| 15.51 | Specifying selection behavior on an ObjectNode | 400 | - |
| 15.52 | Notation for stream and exception parameters | 400 | - |
| 15.53 | Presentation option for flows between pins and parameter nodes | 401 | - |
| 15.54 | Optional CentralBufferNode notation | 401 | - |
| 15.55 | DataStoreNode notation | 401 | - |
| 15.56 | Example of ActivityParameterNodes for regular and exception Parameters | 401 | - |
| 15.57 | Example of ActivityParameterNodes for streaming Parameters | 401 | - |
| 15.58 | CentralBufferNode example | 402 | - |
| 15.59 | DataStoreNode example | 376 | - |
| 15.60 | Executable Nodes | 403 | - |
| 15.61 | ExecutableNode notation | 404 | - |
| 15.62 | ExceptionHandler notation | 404 | - |
| 15.63 | Alternative ExceptionHandler notation | 405 | - |
| 15.64 | ExceptionHandler example | 405 | - |
| 15.65 | ActivityGroups | 406 | - |
| 15.66 | ActivityPartition notations | 408 | - |
| 15.67 | ActivityPartition notations | 408 | - |
| 15.68 | InterruptableActivityRegion | 409 | - |
| 15.69 | InterruptableActivityRegion alternative notation | 409 | - |
| 15.70 | ActivityPartitions using swimlane notation | 409 | - |
| 15.71 | ActivityPartitions using annotation | 410 | - |
| 15.72 | ActivityPartitions using multidimensional swimlane notation | 411 | - |
| 15.73 | InterruptableActivityRegion example | 411 | - |

## Статистика из XMI

- **Суммарно атрибутов (ownedAttribute) в классификаторах:** 61
- **Суммарно операций (ownedOperation) в классификаторах:** 5
- **Суммарно ограничений (ownedRule) в классификаторах:** 50
- **Суммарно литералов (ownedLiteral) в перечислениях:** 4

## Замечания и риски

### Нумерация рисунков

- Рисунки идут последовательно от `15.1` до `15.73` без пропусков.

### Особенности диаграмм

- **ActivityPartition (swimlanes) — сложные многомерные диаграммы:**
  - `15.66`: ActivityPartition notations
  - `15.67`: ActivityPartition notations
  - `15.70`: ActivityPartitions using swimlane notation
  - `15.71`: ActivityPartitions using annotation
  - `15.72`: ActivityPartitions using multidimensional swimlane notation

### Риски переноса

- Раздел очень большой (~68 печатных страниц, 325 заголовков, 73 рисунка).
- Диаграммы ActivityPartition (swimlanes) сложной геометрии — потребуют special handling при SVG-генерации.
- Многие классы наследуются из других разделов: Behavior (раздел 13), StructuredNode, ActionInput и др.
- Некоторые рисунки могут иметь подтипы (a/b/c) в оригинальном PDF — это нужно учитывать при обработке.

## Сводка

- **Диапазон печатных страниц:** 373–439
- **Диапазон PDF-страниц:** 415–481
- **Число заголовков подразделов:** 325
- **Число классификаторов (классы + перечисления):** 25
- **Число ассоциаций:** 34
- **Число рисунков:** 73

