window.UML_SIMPLE_CLASSIFIERS_DATA = (() => {
  const sections = [
  {
    "id": "10.1",
    "title": "Обзор",
    "en": "Summary",
    "page": 167,
    "summary": "Раздел специфицирует различные виды Classifier, не имеющие сложной внутренней структуры.",
    "figures": []
  },
  {
    "id": "10.2",
    "title": "Типы данных",
    "en": "DataTypes",
    "page": 167,
    "summary": "DataTypes моделируют Types, экземпляры которых различаются только своим значением. DataType отличается от Class тем, что его экземпляры идентифицируются только значением: экземпляры с одинаковым значением считаются равными. Специализации — PrimitiveType без подструктуры и Enumeration со значениями-литералами.",
    "figures": [
      "10.1",
      "10.2",
      "10.3",
      "10.4"
    ]
  },
  {
    "id": "10.3",
    "title": "Сигналы",
    "en": "Signals",
    "page": 169,
    "summary": "Signals и Receptions используются для моделирования асинхронного взаимодействия между объектами. Signal специфицирует вид взаимодействия, при котором реакция в получателе асинхронно инициируется без ответа, а Reception объявляет, что владеющий Class или Interface готов реагировать на приём сигнала.",
    "figures": [
      "10.5",
      "10.6"
    ]
  },
  {
    "id": "10.4",
    "title": "Интерфейсы",
    "en": "Interfaces",
    "page": 170,
    "summary": "Interfaces объявляют согласованные сервисы, которые реализуются BehavioredClassifiers, реализующими интерфейсы через InterfaceRealizations.",
    "figures": [
      "10.7",
      "10.8",
      "10.9",
      "10.10",
      "10.11",
      "10.12"
    ]
  },
  {
    "id": "10.5",
    "title": "Описания классификаторов",
    "en": "Classifier Descriptions",
    "page": 174,
    "summary": "Справочные описания 9 классификаторов раздела Simple Classifiers: определения, наследование, атрибуты, концы ассоциаций, операции и ограничения.",
    "figures": []
  },
  {
    "id": "10.6",
    "title": "Описания ассоциаций",
    "en": "Association Descriptions",
    "page": 179,
    "summary": "Справочные описания 16 ассоциаций раздела Simple Classifiers и их концов.",
    "figures": []
  }
];
  const classifiers = [
  {
    "name": "BehavioredClassifier",
    "ru": "Классификатор с поведением",
    "kind": "Abstract Class",
    "section": "10.5.1",
    "page": 174,
    "definition": "Классификатор с поведением может иметь InterfaceRealizations и владеет набором Behaviors, одно из которых может специфицировать поведение самого классификатора с поведением.",
    "generalizations": [
      "Classifier"
    ],
    "specializations": [
      "Actor",
      "Class",
      "Collaboration",
      "UseCase"
    ],
    "operations": [],
    "constraints": [
      {
        "name": "class_behavior",
        "description": "Если поведение является поведением классификатора, оно не имеет спецификации.",
        "ocl": "inv: classifierBehavior->notEmpty() implies classifierBehavior.specification->isEmpty()"
      }
    ],
    "literals": [],
    "diagrams": [
      "Interfaces",
      "Use Cases",
      "Classes",
      "Collaborations",
      "Behaviors"
    ]
  },
  {
    "name": "DataType",
    "ru": "Тип данных",
    "kind": "Class",
    "section": "10.5.2",
    "page": 174,
    "definition": "Тип, экземпляры которого идентифицируются только своим значением.",
    "generalizations": [
      "Classifier"
    ],
    "specializations": [
      "Enumeration",
      "PrimitiveType"
    ],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "DataTypes",
      "Properties",
      "Operations"
    ]
  },
  {
    "name": "Enumeration",
    "ru": "Перечисление",
    "kind": "Class",
    "section": "10.5.3",
    "page": 175,
    "definition": "Тип данных, значения которого перечислены в модели как литералы перечисления (EnumerationLiterals).",
    "generalizations": [
      "DataType"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [
      {
        "name": "immutable",
        "description": "Все атрибуты Enumeration должны быть только для чтения.",
        "ocl": "inv: ownedAttribute->forAll(isReadOnly)"
      }
    ],
    "literals": [],
    "diagrams": [
      "DataTypes"
    ]
  },
  {
    "name": "EnumerationLiteral",
    "ru": "Литерал перечисления",
    "kind": "Class",
    "section": "10.5.4",
    "page": 175,
    "definition": "Пользовательское значение данных для перечисления.",
    "generalizations": [
      "InstanceSpecification"
    ],
    "specializations": [],
    "operations": [
      {
        "signature": "classifier() : Enumeration",
        "description": "Деривация Enumeration::/classifier.",
        "body": "result = (enumeration)"
      }
    ],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "DataTypes"
    ]
  },
  {
    "name": "Interface",
    "ru": "Интерфейс",
    "kind": "Class",
    "section": "10.5.5",
    "page": 176,
    "definition": "Интерфейсы объявляют согласованные сервисы, которые реализуются BehavioredClassifiers, реализующими интерфейсы через InterfaceRealizations.",
    "generalizations": [
      "Classifier"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [
      {
        "name": "visibility",
        "description": "Видимость всех Features, принадлежащих Interface, должна быть public.",
        "ocl": "inv: feature->forAll(visibility = VisibilityKind::public)"
      }
    ],
    "literals": [],
    "diagrams": [
      "Interfaces",
      "Encapsulated Classifiers",
      "Components",
      "Properties",
      "Operations"
    ]
  },
  {
    "name": "InterfaceRealization",
    "ru": "Реализация интерфейса",
    "kind": "Class",
    "section": "10.5.6",
    "page": 177,
    "definition": "Специализированное отношение реализации между BehavioredClassifier и Interface. Это отношение означает, что реализующий классификатор с поведением соответствует контракту, заданному интерфейсом.",
    "generalizations": [
      "Realization"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "PrimitiveType",
    "ru": "Примитивный тип",
    "kind": "Class",
    "section": "10.5.7",
    "page": 177,
    "definition": "Задаёт предопределённый тип данных без какой-либо подструктуры. PrimitiveType может иметь алгебру и операции, определённые вне UML, например математически.",
    "generalizations": [
      "DataType"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "DataTypes"
    ]
  },
  {
    "name": "Reception",
    "ru": "Приём сигнала",
    "kind": "Class",
    "section": "10.5.8",
    "page": 178,
    "definition": "Объявление о том, что классификатор готов реагировать на приём сигнала.",
    "generalizations": [
      "BehavioralFeature"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [
      {
        "name": "same_name_as_signal",
        "description": "Имя Reception совпадает с именем его сигнала.",
        "ocl": "inv: name = signal.name"
      },
      {
        "name": "same_structure_as_signal",
        "description": "Параметры Reception по имени, типу и кратности совпадают с ownedAttributes его сигнала.",
        "ocl": "inv: signal.ownedAttribute->size() = ownedParameter->size() and\nSequence{1..signal.ownedAttribute->size()}->forAll( i |\n    ownedParameter->at(i).direction = ParameterDirectionKind::_'in' and\n    ownedParameter->at(i).name = signal.ownedAttribute->at(i).name and\n    ownedParameter->at(i).type = signal.ownedAttribute->at(i).type and\n    ownedParameter->at(i).lowerBound() = signal.ownedAttribute->at(i).lowerBound() and\n    ownedParameter->at(i).upperBound() = signal.ownedAttribute->at(i).upperBound()\n)"
      }
    ],
    "literals": [],
    "diagrams": [
      "Signals",
      "Interfaces",
      "Classes"
    ]
  },
  {
    "name": "Signal",
    "ru": "Сигнал",
    "kind": "Class",
    "section": "10.5.9",
    "page": 178,
    "definition": "Спецификация вида взаимодействия между объектами, при котором реакция в получателе асинхронно инициируется без ответа.",
    "generalizations": [
      "Classifier"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Signals",
      "Events",
      "Invocation Actions"
    ]
  }
];
  const associations = [
  {
    "name": "A_classifierBehavior_behavioredClassifier",
    "ru": "Поведение классификатора",
    "section": "10.6.1",
    "page": 179,
    "definition": "Связывает поведение classifierBehavior с классификатором с поведением; специализация A_ownedBehavior_behavioredClassifier.",
    "generalizations": [
      "A_ownedBehavior_behavioredClassifier"
    ],
    "specializations": [],
    "ends": [
      {
        "name": "classifierBehavior",
        "signature": "classifierBehavior : Behavior",
        "type": "Behavior",
        "owner": "BehavioredClassifier",
        "association": "A_classifierBehavior_behavioredClassifier",
        "description": "Поведение, специфицирующее поведение самого классификатора с поведением."
      },
      {
        "name": "behavioredClassifier",
        "signature": "behavioredClassifier : BehavioredClassifier",
        "type": "BehavioredClassifier",
        "owner": "A_classifierBehavior_behavioredClassifier",
        "association": "A_classifierBehavior_behavioredClassifier",
        "description": "Классификатор с поведением, поведение которого специфицирует classifierBehavior. Переопределяет A_ownedBehavior_behavioredClassifier::behavioredClassifier."
      }
    ],
    "diagrams": [
      "Interfaces",
      "Behaviors"
    ]
  },
  {
    "name": "A_classifier_enumerationLiteral",
    "ru": "Классификатор литерала перечисления",
    "section": "10.6.2",
    "page": 179,
    "definition": "Связывает литерал перечисления с его классификатором — Enumeration; специализация A_classifier_instanceSpecification.",
    "generalizations": [
      "A_classifier_instanceSpecification"
    ],
    "specializations": [],
    "ends": [
      {
        "name": "classifier",
        "signature": "classifier : Enumeration",
        "type": "Enumeration",
        "owner": "EnumerationLiteral",
        "association": "A_classifier_enumerationLiteral",
        "description": "Классификатор данного литерала перечисления, производный и равный его Enumeration."
      },
      {
        "name": "enumerationLiteral",
        "signature": "enumerationLiteral : EnumerationLiteral",
        "type": "EnumerationLiteral",
        "owner": "A_classifier_enumerationLiteral",
        "association": "A_classifier_enumerationLiteral",
        "description": "Литералы перечисления, классификатором которых является данный Enumeration. Переопределяет A_classifier_instanceSpecification::instanceSpecification."
      }
    ],
    "diagrams": [
      "DataTypes"
    ]
  },
  {
    "name": "A_contract_interfaceRealization",
    "ru": "Контракт реализации интерфейса",
    "section": "10.6.3",
    "page": 179,
    "definition": "Связывает контракт — Interface — с реализациями интерфейса InterfaceRealization, ссылающимися на этот контракт.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "contract",
        "signature": "contract : Interface",
        "type": "Interface",
        "owner": "InterfaceRealization",
        "association": "A_contract_interfaceRealization",
        "description": "Интерфейс, задающий контракт соответствия."
      },
      {
        "name": "interfaceRealization",
        "signature": "interfaceRealization : InterfaceRealization",
        "type": "InterfaceRealization",
        "owner": "A_contract_interfaceRealization",
        "association": "A_contract_interfaceRealization",
        "description": "Реализации интерфейса, ссылающиеся на данный контракт. Подмножество A_supplier_supplierDependency::supplierDependency."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_interfaceRealization_implementingClassifier",
    "ru": "Реализация интерфейса реализующего классификатора",
    "section": "10.6.4",
    "page": 179,
    "definition": "Связывает BehavioredClassifier с принадлежащими ему реализациями интерфейсов InterfaceRealization.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "interfaceRealization",
        "signature": "interfaceRealization : InterfaceRealization",
        "type": "InterfaceRealization",
        "owner": "BehavioredClassifier",
        "association": "A_interfaceRealization_implementingClassifier",
        "description": "Множество принадлежащих BehavioredClassifier реализаций интерфейса; реализации интерфейсов, которыми данный классификатор с поведением является реализацией."
      },
      {
        "name": "implementingClassifier",
        "signature": "implementingClassifier : BehavioredClassifier",
        "type": "BehavioredClassifier",
        "owner": "InterfaceRealization",
        "association": "A_interfaceRealization_implementingClassifier",
        "description": "BehavioredClassifier, владеющий данной InterfaceRealization, то есть классификатор с поведением, реализующий интерфейс, на который она ссылается."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_nestedClassifier_interface",
    "ru": "Вложенные классификаторы интерфейса",
    "section": "10.6.5",
    "page": 180,
    "definition": "Связывает вложенные классификаторы Interface с владеющим ими интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "nestedClassifier",
        "signature": "nestedClassifier : Classifier",
        "type": "Classifier",
        "owner": "Interface",
        "association": "A_nestedClassifier_interface",
        "description": "Все классификаторы, определённые (вложенные) внутри данного Interface."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "A_nestedClassifier_interface",
        "association": "A_nestedClassifier_interface",
        "description": "Интерфейс, в котором вложен данный классификатор. Подмножества NamedElement::namespace и RedefinableElement::redefinitionContext."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_ownedAttribute_datatype",
    "ru": "Атрибуты типа данных",
    "section": "10.6.6",
    "page": 180,
    "definition": "Связывает атрибуты DataType с владеющим ими типом данных.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedAttribute",
        "signature": "ownedAttribute : Property",
        "type": "Property",
        "owner": "DataType",
        "association": "A_ownedAttribute_datatype",
        "description": "Атрибуты, принадлежащие DataType."
      },
      {
        "name": "datatype",
        "signature": "datatype : DataType",
        "type": "DataType",
        "owner": "Property",
        "association": "A_ownedAttribute_datatype",
        "description": "Тип данных, владеющий данным свойством, если есть."
      }
    ],
    "diagrams": [
      "DataTypes",
      "Properties"
    ]
  },
  {
    "name": "A_ownedAttribute_interface",
    "ru": "Атрибуты интерфейса",
    "section": "10.6.7",
    "page": 180,
    "definition": "Связывает атрибуты Interface с владеющим ими интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedAttribute",
        "signature": "ownedAttribute : Property",
        "type": "Property",
        "owner": "Interface",
        "association": "A_ownedAttribute_interface",
        "description": "Атрибуты (то есть свойства), принадлежащие Interface."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "Property",
        "association": "A_ownedAttribute_interface",
        "description": "Интерфейс, владеющий данным свойством, если есть."
      }
    ],
    "diagrams": [
      "Interfaces",
      "Properties"
    ]
  },
  {
    "name": "A_ownedAttribute_owningSignal",
    "ru": "Атрибуты владеющего сигнала",
    "section": "10.6.8",
    "page": 180,
    "definition": "Связывает атрибуты Signal с владеющим ими сигналом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedAttribute",
        "signature": "ownedAttribute : Property",
        "type": "Property",
        "owner": "Signal",
        "association": "A_ownedAttribute_owningSignal",
        "description": "Атрибуты, принадлежащие Signal."
      },
      {
        "name": "owningSignal",
        "signature": "owningSignal : Signal",
        "type": "Signal",
        "owner": "A_ownedAttribute_owningSignal",
        "association": "A_ownedAttribute_owningSignal",
        "description": "Сигнал, владеющий данным атрибутом. Подмножества NamedElement::namespace и A_attribute_classifier::classifier."
      }
    ],
    "diagrams": [
      "Signals"
    ]
  },
  {
    "name": "A_ownedBehavior_behavioredClassifier",
    "ru": "Поведения классификатора с поведением",
    "section": "10.6.9",
    "page": 180,
    "definition": "Связывает поведения BehavioredClassifier с владеющим ими классификатором с поведением.",
    "generalizations": [],
    "specializations": [
      "A_classifierBehavior_behavioredClassifier"
    ],
    "ends": [
      {
        "name": "ownedBehavior",
        "signature": "ownedBehavior : Behavior",
        "type": "Behavior",
        "owner": "BehavioredClassifier",
        "association": "A_ownedBehavior_behavioredClassifier",
        "description": "Поведения, принадлежащие классификатору с поведением."
      },
      {
        "name": "behavioredClassifier",
        "signature": "behavioredClassifier : BehavioredClassifier",
        "type": "BehavioredClassifier",
        "owner": "A_ownedBehavior_behavioredClassifier",
        "association": "A_ownedBehavior_behavioredClassifier",
        "description": "Классификатор с поведением, владеющий данным поведением. Подмножество NamedElement::namespace."
      }
    ],
    "diagrams": [
      "Interfaces",
      "Behaviors"
    ]
  },
  {
    "name": "A_ownedLiteral_enumeration",
    "ru": "Литералы перечисления",
    "section": "10.6.10",
    "page": 181,
    "definition": "Связывает литералы Enumeration с владеющим ими перечислением.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedLiteral",
        "signature": "ownedLiteral : EnumerationLiteral",
        "type": "EnumerationLiteral",
        "owner": "Enumeration",
        "association": "A_ownedLiteral_enumeration",
        "description": "Упорядоченное множество литералов, принадлежащих данному Enumeration."
      },
      {
        "name": "enumeration",
        "signature": "enumeration : Enumeration",
        "type": "Enumeration",
        "owner": "EnumerationLiteral",
        "association": "A_ownedLiteral_enumeration",
        "description": "Перечисление, членом которого является данный литерал перечисления."
      }
    ],
    "diagrams": [
      "DataTypes"
    ]
  },
  {
    "name": "A_ownedOperation_datatype",
    "ru": "Операции типа данных",
    "section": "10.6.11",
    "page": 181,
    "definition": "Связывает операции DataType с владеющим ими типом данных.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedOperation",
        "signature": "ownedOperation : Operation",
        "type": "Operation",
        "owner": "DataType",
        "association": "A_ownedOperation_datatype",
        "description": "Операции, принадлежащие DataType."
      },
      {
        "name": "datatype",
        "signature": "datatype : DataType",
        "type": "DataType",
        "owner": "Operation",
        "association": "A_ownedOperation_datatype",
        "description": "Тип данных, владеющий данной операцией, если есть."
      }
    ],
    "diagrams": [
      "DataTypes",
      "Operations"
    ]
  },
  {
    "name": "A_ownedOperation_interface",
    "ru": "Операции интерфейса",
    "section": "10.6.12",
    "page": 181,
    "definition": "Связывает операции Interface с владеющим ими интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedOperation",
        "signature": "ownedOperation : Operation",
        "type": "Operation",
        "owner": "Interface",
        "association": "A_ownedOperation_interface",
        "description": "Операции, принадлежащие Interface."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "Operation",
        "association": "A_ownedOperation_interface",
        "description": "Интерфейс, владеющий данной операцией, если есть."
      }
    ],
    "diagrams": [
      "Interfaces",
      "Operations"
    ]
  },
  {
    "name": "A_ownedReception_interface",
    "ru": "Приёмы сигналов интерфейса",
    "section": "10.6.13",
    "page": 181,
    "definition": "Связывает приёмы сигналов Interface с владеющим ими интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedReception",
        "signature": "ownedReception : Reception",
        "type": "Reception",
        "owner": "Interface",
        "association": "A_ownedReception_interface",
        "description": "Приёмы сигналов, которые объекты, предоставляющие данный Interface, готовы принимать."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "A_ownedReception_interface",
        "association": "A_ownedReception_interface",
        "description": "Интерфейс, владеющий данным приёмом сигнала. Подмножества Feature::featuringClassifier и NamedElement::namespace."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_protocol_interface",
    "ru": "Протокол интерфейса",
    "section": "10.6.14",
    "page": 182,
    "definition": "Связывает ProtocolStateMachine протокола с владеющим им интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "protocol",
        "signature": "protocol : ProtocolStateMachine",
        "type": "ProtocolStateMachine",
        "owner": "Interface",
        "association": "A_protocol_interface",
        "description": "Ссылается на ProtocolStateMachine, задающую допустимые последовательности вызовов поведенческих характеристик, описанных в Interface."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "A_protocol_interface",
        "association": "A_protocol_interface",
        "description": "Задаёт пространство имён, в котором определена протокольная машина состояний."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_redefinedInterface_interface",
    "ru": "Переопределяемые интерфейсы интерфейса",
    "section": "10.6.15",
    "page": 182,
    "definition": "Связывает переопределяемые интерфейсы Interface с переопределяющим их интерфейсом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "redefinedInterface",
        "signature": "redefinedInterface : Interface",
        "type": "Interface",
        "owner": "Interface",
        "association": "A_redefinedInterface_interface",
        "description": "Все интерфейсы, переопределяемые данным Interface."
      },
      {
        "name": "interface",
        "signature": "interface : Interface",
        "type": "Interface",
        "owner": "A_redefinedInterface_interface",
        "association": "A_redefinedInterface_interface",
        "description": "Интерфейсы, переопределяющие данный интерфейс. Подмножество A_redefinedClassifier_classifier::classifier."
      }
    ],
    "diagrams": [
      "Interfaces"
    ]
  },
  {
    "name": "A_signal_reception",
    "ru": "Приёмы сигнала",
    "section": "10.6.16",
    "page": 182,
    "definition": "Связывает сигнал Signal с приёмами сигналов Reception, которые его обрабатывают.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "signal",
        "signature": "signal : Signal",
        "type": "Signal",
        "owner": "Reception",
        "association": "A_signal_reception",
        "description": "Сигнал, который обрабатывает данный приём."
      },
      {
        "name": "reception",
        "signature": "reception : Reception",
        "type": "Reception",
        "owner": "A_signal_reception",
        "association": "A_signal_reception",
        "description": "Приёмы сигналов, обрабатывающие данный сигнал."
      }
    ],
    "diagrams": [
      "Signals"
    ]
  }
];
  const diagrams = [
  {
    "id": "10.1",
    "name": "DataTypes",
    "title": "Типы данных",
    "en": "DataTypes",
    "section": "10.2",
    "page": 167,
    "related": [
      "DataType",
      "Enumeration",
      "EnumerationLiteral",
      "PrimitiveType"
    ],
    "associations": [
      "A_classifier_enumerationLiteral",
      "A_ownedAttribute_datatype",
      "A_ownedLiteral_enumeration",
      "A_ownedOperation_datatype"
    ]
  },
  {
    "id": "10.2",
    "name": "PrimitiveType Notation",
    "title": "Нотация PrimitiveType",
    "en": "PrimitiveType Notation",
    "section": "10.2",
    "page": 168,
    "related": [],
    "associations": []
  },
  {
    "id": "10.3",
    "name": "DataType Notation",
    "title": "Нотация DataType",
    "en": "DataType Notation",
    "section": "10.2",
    "page": 168,
    "related": [],
    "associations": []
  },
  {
    "id": "10.4",
    "name": "Enumeration Notation",
    "title": "Нотация Enumeration",
    "en": "Enumeration Notation",
    "section": "10.2",
    "page": 169,
    "related": [],
    "associations": []
  },
  {
    "id": "10.5",
    "name": "Signals",
    "title": "Сигналы",
    "en": "Signals",
    "section": "10.3",
    "page": 169,
    "related": [
      "Reception",
      "Signal"
    ],
    "associations": [
      "A_ownedAttribute_owningSignal",
      "A_signal_reception"
    ]
  },
  {
    "id": "10.6",
    "name": "Reception Notation",
    "title": "Нотация Reception",
    "en": "Reception Notation",
    "section": "10.3",
    "page": 170,
    "related": [],
    "associations": []
  },
  {
    "id": "10.7",
    "name": "Interfaces",
    "title": "Интерфейсы",
    "en": "Interfaces",
    "section": "10.4",
    "page": 171,
    "related": [
      "BehavioredClassifier",
      "Interface",
      "InterfaceRealization",
      "Reception"
    ],
    "associations": [
      "A_classifierBehavior_behavioredClassifier",
      "A_contract_interfaceRealization",
      "A_interfaceRealization_implementingClassifier",
      "A_nestedClassifier_interface",
      "A_ownedAttribute_interface",
      "A_ownedBehavior_behavioredClassifier",
      "A_ownedOperation_interface",
      "A_ownedReception_interface",
      "A_protocol_interface",
      "A_redefinedInterface_interface"
    ]
  },
  {
    "id": "10.8",
    "name": "ISensor is a provided Interface of ProximitySensor",
    "title": "ISensor — предоставляемый интерфейс ProximitySensor",
    "en": "ISensor is a provided Interface of ProximitySensor",
    "section": "10.4",
    "page": 172,
    "related": [],
    "associations": []
  },
  {
    "id": "10.9",
    "name": "ISensor, a provided Interface of ProximitySensor, is shown as inherited by CapacitiveSensor",
    "title": "ISensor, предоставляемый интерфейс ProximitySensor, показан как унаследованный CapacitiveSensor",
    "en": "ISensor, a provided Interface of ProximitySensor, is shown as inherited by CapacitiveSensor",
    "section": "10.4",
    "page": 173,
    "related": [],
    "associations": []
  },
  {
    "id": "10.10",
    "name": "ISensor is a required Interface of TheftAlarm",
    "title": "ISensor — требуемый интерфейс TheftAlarm",
    "en": "ISensor is a required Interface of TheftAlarm",
    "section": "10.4",
    "page": 173,
    "related": [],
    "associations": []
  },
  {
    "id": "10.11",
    "name": "Alternative notation for required and provided Interface",
    "title": "Альтернативная нотация для требуемого и предоставляемого интерфейсов",
    "en": "Alternative notation for required and provided Interface",
    "section": "10.4",
    "page": 173,
    "related": [],
    "associations": []
  },
  {
    "id": "10.12",
    "name": "A set of collaborating Interfaces",
    "title": "Набор взаимодействующих интерфейсов",
    "en": "A set of collaborating Interfaces",
    "section": "10.4",
    "page": 173,
    "related": [],
    "associations": []
  }
];
  return { sections, classifiers, associations, diagrams };
})();
