window.UML_STRUCTURED_CLASSIFIERS_DATA = (() => {
  const sections = [
  {
    "id": "11.1",
    "title": "Обзор",
    "en": "Summary",
    "page": 183,
    "summary": "Структурированные классификаторы — это классификаторы, которые могут иметь внутреннюю структуру, включающую сеть связанных ролей (которые сами могут быть экземплярами структурированных классификаторов), и внешнюю структуру, состоящую из одного или нескольких портов. Порты инкапсулированных классификаторов действуют как локальные представители удалённых участников взаимодействия, позволяя инкапсулированным классификаторам различать их, не будучи напрямую связанными с ними. Классы, компоненты, ассоциации и кооперации — конкретные метаклассы, использующие эти возможности.",
    "figures": []
  },
  {
    "id": "11.2",
    "title": "Структурированные классификаторы",
    "en": "Structured Classifiers",
    "page": 183,
    "summary": "Структурированные классификаторы могут содержать внутреннюю структуру связанных элементов, каждый из которых играет роль в общем поведении, моделируемом структурированным классификатором. Этот подраздел полезно читать вместе с подразделом 11.5 «Ассоциации».",
    "figures": [
      "11.1",
      "11.2",
      "11.3",
      "11.4",
      "11.5",
      "11.6",
      "11.7",
      "11.8",
      "11.9"
    ]
  },
  {
    "id": "11.3",
    "title": "Инкапсулированные классификаторы",
    "en": "Encapsulated Classifiers",
    "page": 189,
    "summary": "Инкапсулированный классификатор расширяет структурированный классификатор возможностью владеть портами — механизмом изоляции инкапсулированного классификатора от его окружения.",
    "figures": [
      "11.10",
      "11.11",
      "11.12",
      "11.13",
      "11.14"
    ]
  },
  {
    "id": "11.4",
    "title": "Классы",
    "en": "Classes",
    "page": 194,
    "summary": "Класс — конкретная реализация инкапсулированного классификатора и классификатора с поведением. Назначение класса — задать классификацию объектов и определить характеристики, описывающие структуру и поведение этих объектов.",
    "figures": [
      "11.15",
      "11.16",
      "11.17",
      "11.18",
      "11.19",
      "11.20",
      "11.21",
      "11.22",
      "11.23",
      "11.24"
    ]
  },
  {
    "id": "11.5",
    "title": "Ассоциации",
    "en": "Associations",
    "page": 199,
    "summary": "Ассоциация классифицирует множество кортежей, представляющих связи между типизированными экземплярами. Класс ассоциации одновременно является ассоциацией и классом.",
    "figures": [
      "11.25",
      "11.26",
      "11.27",
      "11.28",
      "11.29",
      "11.30",
      "11.31",
      "11.32",
      "11.33",
      "11.34",
      "11.35",
      "11.36",
      "11.37"
    ]
  },
  {
    "id": "11.6",
    "title": "Компоненты",
    "en": "Components",
    "page": 208,
    "summary": "Подраздел специфицирует набор конструкций, которые могут использоваться для определения программных систем произвольного размера и сложности. В частности, он специфицирует компонент как модульную единицу с чётко определёнными интерфейсами, заменяемую в своём окружении. Концепция компонента относится к области компонентно-ориентированной разработки и компонентно-ориентированной структуризации систем, где компонент моделируется на протяжении всего жизненного цикла разработки и последовательно уточняется до развёртывания и времени выполнения.",
    "figures": [
      "11.38",
      "11.39",
      "11.40",
      "11.41",
      "11.42",
      "11.43",
      "11.44",
      "11.45",
      "11.46",
      "11.47",
      "11.48"
    ]
  },
  {
    "id": "11.7",
    "title": "Кооперации",
    "en": "Collaborations",
    "page": 215,
    "summary": "Основное назначение коопераций — объяснить, как система взаимодействующих элементов коллективно выполняет определённую задачу или набор задач, не включая обязательно детали, несущественные для объяснения. Кооперации — один из способов использования UML для фиксации шаблонов проектирования. Использование кооперации представляет применение шаблона, описанного кооперацией, к конкретной ситуации с конкретными элементами, играющими её роли.",
    "figures": [
      "11.49",
      "11.50",
      "11.51",
      "11.52",
      "11.53",
      "11.54"
    ]
  },
  {
    "id": "11.8",
    "title": "Описания классификаторов",
    "en": "Classifier Descriptions",
    "page": 219,
    "summary": "Справочные описания 15 классификаторов раздела Structured Classifiers: определения, наследование, атрибуты, концы ассоциаций, операции и ограничения.",
    "figures": []
  },
  {
    "id": "11.9",
    "title": "Описания ассоциаций",
    "en": "Association Descriptions",
    "page": 233,
    "summary": "Справочные описания 34 ассоциаций раздела Structured Classifiers и их концов.",
    "figures": []
  }
];
  const classifiers = [
  {
    "name": "Association",
    "ru": "Ассоциация",
    "kind": "Class",
    "section": "11.8.1",
    "page": 219,
    "definition": "Связь (link) — это кортеж значений, ссылающихся на типизированные объекты. Ассоциация классифицирует множество связей, каждая из которых является экземпляром ассоциации. Каждое значение в связи ссылается на экземпляр типа соответствующего конца ассоциации.",
    "generalizations": [
      "Relationship",
      "Classifier"
    ],
    "specializations": [
      "AssociationClass",
      "CommunicationPath",
      "Extension"
    ],
    "operations": [
      {
        "signature": "endType() : Type [1..*]",
        "description": "Производная от типов концов-членов (memberEnd).",
        "body": "memberEnd->collect(type)->asSet()"
      }
    ],
    "constraints": [
      {
        "name": "specialized_end_number",
        "description": "Ассоциация, специализирующая другую ассоциацию, имеет то же число концов, что и та другая ассоциация.",
        "ocl": "inv: parents()->select(oclIsKindOf(Association)).oclAsType(Association)->forAll(p |\np.memberEnd->size() = self.memberEnd->size())"
      },
      {
        "name": "specialized_end_types",
        "description": "Когда ассоциация специализирует другую ассоциацию, каждый конец конкретной ассоциации соответствует концу общей ассоциации, и конкретный конец достигает того же типа или подтипа соответствующего общего конца.",
        "ocl": "inv: Sequence{1..memberEnd->size()}->\nforAll(i | general->select(oclIsKindOf(Association)).oclAsType(Association)->\nforAll(ga | self.memberEnd->at(i).type.conformsTo(ga.memberEnd->at(i).type)))"
      },
      {
        "name": "binary_associations",
        "description": "Только бинарные ассоциации могут быть агрегациями.",
        "ocl": "inv: memberEnd->exists(aggregation <> AggregationKind::none) implies (memberEnd->size() = 2\nand memberEnd->exists(aggregation = AggregationKind::none))"
      },
      {
        "name": "association_ends",
        "description": "Концы ассоциаций с более чем двумя концами должны принадлежать самой ассоциации.",
        "ocl": "inv: memberEnd->size() > 2 implies ownedEnd->includesAll(memberEnd)"
      },
      {
        "name": "ends_must_be_typed",
        "description": "Каждый конец-член ассоциации должен иметь тип.",
        "ocl": "inv: memberEnd->forAll(type->notEmpty())"
      }
    ],
    "literals": [],
    "diagrams": [
      "Structured Classifiers",
      "Associations",
      "Profiles",
      "Nodes",
      "Properties",
      "Link Actions"
    ]
  },
  {
    "name": "Connector",
    "ru": "Коннектор",
    "kind": "Class",
    "section": "11.8.10",
    "page": 227,
    "definition": "Коннектор специфицирует связи, обеспечивающие коммуникацию между двумя или более экземплярами. В отличие от ассоциаций, которые специфицируют связи между любыми экземплярами связанных классификаторов, коннекторы специфицируют связи только между экземплярами, играющими соединённые части (parts).",
    "generalizations": [
      "Feature"
    ],
    "specializations": [],
    "operations": [
      {
        "signature": "kind() : ConnectorKind",
        "description": "Вид коннектора; производная: коннектор с одним или более концами, присоединёнными к порту, который не находится на части и не является поведенческим портом, — делегирующий (delegation), иначе — сборочный (assembly).",
        "body": "if end->exists(\nrole.oclIsKindOf(Port)\nand partWithPort->isEmpty()\nand not role.oclAsType(Port).isBehavior)\nthen ConnectorKind::delegation\nelse ConnectorKind::assembly\nendif"
      }
    ],
    "constraints": [
      {
        "name": "types",
        "description": "Типы соединяемых элементов, к которым присоединены концы коннектора, должны соответствовать (conform) типам концов ассоциации, типизирующей коннектор, если таковая есть.",
        "ocl": "inv: type<>null implies\n  let noOfEnds : Integer = end->size() in\n  (type.memberEnd->size() = noOfEnds) and Sequence{1..noOfEnds}->forAll(i | end->at(i).role.type.conformsTo(type.memberEnd->at(i).type))"
      },
      {
        "name": "roles",
        "description": "Соединяемые элементы, присоединённые как роли к каждому принадлежащему коннектору концу коннектора, должны быть собственными или унаследованными ролями классификатора, владеющего коннектором, или портами таких ролей.",
        "ocl": "inv: structuredClassifier <> null\nand\n  end->forAll( e | structuredClassifier.allRoles()->includes(e.role)\nor\n  e.role.oclIsKindOf(Port) and structuredClassifier.allRoles()->includes(e.partWithPort))"
      }
    ],
    "literals": [],
    "diagrams": [
      "Structured Classifiers",
      "Messages",
      "Information Flows"
    ]
  },
  {
    "name": "ConnectorEnd",
    "ru": "Конец коннектора",
    "kind": "Class",
    "section": "11.8.11",
    "page": 228,
    "definition": "Конец коннектора — это конечная точка коннектора, которая присоединяет коннектор к соединяемому элементу.",
    "generalizations": [
      "MultiplicityElement"
    ],
    "specializations": [],
    "operations": [
      {
        "signature": "definingEnd() : Property [0..1]",
        "description": "Производная для ConnectorEnd::/definingEnd.",
        "body": "if connector.type = null\nthen\n  null\nelse\n  let index : Integer = connector.end->indexOf(self) in\n    connector.type.memberEnd->at(index)\nendif"
      }
    ],
    "constraints": [
      {
        "name": "role_and_part_with_port",
        "description": "Если конец коннектора ссылается на partWithPort, то роль должна быть портом, определённым или унаследованным типом partWithPort.",
        "ocl": "inv: partWithPort->notEmpty() implies\n  (role.oclIsKindOf(Port) and partWithPort.type.oclAsType(Namespace).member->includes(role))"
      },
      {
        "name": "part_with_port_empty",
        "description": "Если конец коннектора присоединён к порту содержащего классификатора, partWithPort будет пустым.",
        "ocl": "inv: (role.oclIsKindOf(Port) and role.owner = connector.owner) implies partWithPort->isEmpty()"
      },
      {
        "name": "multiplicity",
        "description": "Кратность конца коннектора не может быть более общей, чем кратность соответствующего конца ассоциации, типизирующей владеющий коннектор, если таковая есть.",
        "ocl": "inv: self.compatibleWith(definingEnd)"
      },
      {
        "name": "self_part_with_port",
        "description": "Свойство, содержащееся в self.partWithPort, не должно быть портом.",
        "ocl": "inv: partWithPort->notEmpty() implies not partWithPort.oclIsKindOf(Port)"
      }
    ],
    "literals": [],
    "diagrams": [
      "Encapsulated Classifiers",
      "Structured Classifiers"
    ]
  },
  {
    "name": "ConnectorKind",
    "ru": "Вид коннектора",
    "kind": "Enumeration",
    "section": "11.8.12",
    "page": 229,
    "definition": "Перечисление, определяющее, является ли коннектор сборочным (assembly) или делегирующим (delegation).",
    "generalizations": [],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [
      {
        "name": "assembly",
        "description": "Указывает, что коннектор является сборочным коннектором."
      },
      {
        "name": "delegation",
        "description": "Указывает, что коннектор является делегирующим коннектором."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "EncapsulatedClassifier",
    "ru": "Инкапсулированный классификатор",
    "kind": "Abstract Class",
    "section": "11.8.13",
    "page": 230,
    "definition": "Инкапсулированный классификатор может владеть портами, задающими типизированные точки взаимодействия.",
    "generalizations": [
      "StructuredClassifier"
    ],
    "specializations": [
      "Class"
    ],
    "operations": [
      {
        "signature": "ownedPort() : Port [0..*] {ordered}",
        "description": "Производная для EncapsulatedClassifier::/ownedPort.",
        "body": "ownedAttribute->select(oclIsKindOf(Port))->collect(oclAsType(Port))->asOrderedSet()"
      }
    ],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Encapsulated Classifiers",
      "Classes"
    ]
  },
  {
    "name": "Port",
    "ru": "Порт",
    "kind": "Class",
    "section": "11.8.14",
    "page": 230,
    "definition": "Порт — это свойство инкапсулированного классификатора, задающее отдельную точку взаимодействия между этим инкапсулированным классификатором и его окружением или между (поведением) инкапсулированного классификатора и его внутренними частями. Порты соединяются со свойствами инкапсулированного классификатора коннекторами, через которые могут делаться запросы на вызов поведенческих характеристик. Порт может специфицировать сервисы, которые инкапсулированный классификатор предоставляет (предлагает) своему окружению, а также сервисы, которые инкапсулированный классификатор ожидает (требует) от своего окружения. Порт может иметь связанную протокольную машину состояний (ProtocolStateMachine).",
    "generalizations": [
      "Property"
    ],
    "specializations": [],
    "operations": [
      {
        "signature": "provided() : Interface [0..*]",
        "description": "Производная для Port::/provided.",
        "body": "if isConjugated then basicRequired() else basicProvided() endif"
      },
      {
        "signature": "required() : Interface [0..*]",
        "description": "Производная для Port::/required.",
        "body": "if isConjugated then basicProvided() else basicRequired() endif"
      },
      {
        "signature": "basicProvided() : Interface [0..*]",
        "description": "Объединение множеств интерфейсов, реализуемых типом порта и его супертипами, или непосредственно тип порта, если порт типизирован интерфейсом.",
        "body": "if type.oclIsKindOf(Interface)\nthen type.oclAsType(Interface)->asSet()\nelse type.oclAsType(Classifier).allRealizedInterfaces()\nendif"
      },
      {
        "signature": "basicRequired() : Interface [0..*]",
        "description": "Объединение множеств интерфейсов, используемых типом порта и его супертипами.",
        "body": "type.oclAsType(Classifier).allUsedInterfaces()"
      }
    ],
    "constraints": [
      {
        "name": "port_aggregation",
        "description": "Агрегация порта должна быть композитной.",
        "ocl": "inv: aggregation = AggregationKind::composite"
      },
      {
        "name": "default_value",
        "description": "Значение по умолчанию для порта не может быть задано, когда тип порта — интерфейс.",
        "ocl": "inv: type.oclIsKindOf(Interface) implies defaultValue->isEmpty()"
      },
      {
        "name": "encapsulated_owner",
        "description": "Все порты принадлежат инкапсулированному классификатору.",
        "ocl": "inv: owner = encapsulatedClassifier"
      }
    ],
    "literals": [],
    "diagrams": [
      "Encapsulated Classifiers",
      "Events",
      "Invocation Actions"
    ]
  },
  {
    "name": "StructuredClassifier",
    "ru": "Структурированный классификатор",
    "kind": "Abstract Class",
    "section": "11.8.15",
    "page": 232,
    "definition": "Структурированные классификаторы могут содержать внутреннюю структуру связанных элементов, каждый из которых играет роль в общем поведении, моделируемом структурированным классификатором.",
    "generalizations": [
      "Classifier"
    ],
    "specializations": [
      "Collaboration",
      "EncapsulatedClassifier"
    ],
    "operations": [
      {
        "signature": "part() : Property [0..*]",
        "description": "Производная для StructuredClassifier::/part.",
        "body": "ownedAttribute->select(isComposite)"
      },
      {
        "signature": "allRoles() : ConnectableElement [0..*]",
        "description": "Все характеристики типа ConnectableElement, что эквивалентно всем прямым и унаследованным ролям.",
        "body": "allFeatures()->select(oclIsKindOf(ConnectableElement))->collect(oclAsType(ConnectableElement))->asSet()"
      }
    ],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Encapsulated Classifiers",
      "Structured Classifiers",
      "Collaborations"
    ]
  },
  {
    "name": "AssociationClass",
    "ru": "Класс ассоциации",
    "kind": "Class",
    "section": "11.8.2",
    "page": 220,
    "definition": "Элемент модели, обладающий одновременно свойствами ассоциации и класса. Класс ассоциации можно рассматривать как ассоциацию, которая также имеет свойства класса, или как класс, который также имеет свойства ассоциации. Он не только соединяет множество классификаторов, но и определяет набор характеристик, принадлежащих самой ассоциации, а не какому-либо из связанных классификаторов.",
    "generalizations": [
      "Class",
      "Association"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [
      {
        "name": "cannot_be_defined",
        "description": "Класс ассоциации не может быть определён между самим собой и чем-либо ещё.",
        "ocl": "inv: self.endType()->excludes(self) and self.endType()->collect(et|et.oclAsType(Classifier).allParents())->flatten()->excludes(self)"
      },
      {
        "name": "disjoint_attributes_ends",
        "description": "Собственные атрибуты и собственные концы класса ассоциации не пересекаются.",
        "ocl": "inv: ownedAttribute->intersection(ownedEnd)->isEmpty()"
      }
    ],
    "literals": [],
    "diagrams": [
      "Associations"
    ]
  },
  {
    "name": "Class",
    "ru": "Класс",
    "kind": "Class",
    "section": "11.8.3",
    "page": 221,
    "definition": "Класс классифицирует множество объектов и специфицирует характеристики, описывающие структуру и поведение этих объектов. Класс может иметь внутреннюю структуру и порты.",
    "generalizations": [
      "BehavioredClassifier",
      "EncapsulatedClassifier"
    ],
    "specializations": [
      "AssociationClass",
      "Behavior",
      "Component",
      "Node",
      "Stereotype"
    ],
    "operations": [
      {
        "signature": "extension() : Extension [0..*]",
        "description": "Вывод для Class::/extension.",
        "body": "Extension.allInstances()->select(ext |\n  let endTypes : Sequence(Classifier) = ext.memberEnd->collect(type.oclAsType(Classifier))\n  in\n  endTypes->includes(self) or endTypes.allParents()->includes(self) )"
      },
      {
        "signature": "superClass() : Class [0..*]",
        "description": "Вывод для Class::/superClass.",
        "body": "self.general()->select(oclIsKindOf(Class))->collect(oclAsType(Class))->asSet()"
      }
    ],
    "constraints": [
      {
        "name": "passive_class",
        "description": "Только активный класс может владеть приёмами сигналов (Receptions) и иметь поведение классификатора (classifierBehavior).",
        "ocl": "inv: not isActive implies (ownedReception->isEmpty() and classifierBehavior = null)"
      }
    ],
    "literals": [],
    "diagrams": [
      "Classes",
      "Associations",
      "Components",
      "Profiles",
      "Nodes",
      "Behaviors",
      "Properties",
      "Operations"
    ]
  },
  {
    "name": "Collaboration",
    "ru": "Кооперация",
    "kind": "Class",
    "section": "11.8.4",
    "page": 222,
    "definition": "Кооперация описывает структуру сотрудничающих элементов (ролей), каждый из которых выполняет специализированную функцию, которые в совокупности достигают некоторой требуемой функциональности.",
    "generalizations": [
      "StructuredClassifier",
      "BehavioredClassifier"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Collaborations"
    ]
  },
  {
    "name": "CollaborationUse",
    "ru": "Использование кооперации",
    "kind": "Class",
    "section": "11.8.5",
    "page": 223,
    "definition": "Использование кооперации применяется, чтобы задать применение шаблона, специфицированного кооперацией, к конкретной ситуации.",
    "generalizations": [
      "NamedElement"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [
      {
        "name": "client_elements",
        "description": "Все клиентские элементы привязки ролей (roleBinding) находятся в одном классификаторе, и все поставляющие элементы привязки ролей находятся в одной кооперации.",
        "ocl": "inv: roleBinding->collect(client)->forAll(ne1, ne2 |\n  ne1.oclIsKindOf(ConnectableElement) and ne2.oclIsKindOf(ConnectableElement) and\n    let ce1 : ConnectableElement = ne1.oclAsType(ConnectableElement), ce2 : ConnectableElement = ne2.oclAsType(ConnectableElement) in\n      ce1.structuredClassifier = ce2.structuredClassifier)\nand\n  roleBinding->collect(supplier)->forAll(ne1, ne2 |\n  ne1.oclIsKindOf(ConnectableElement) and ne2.oclIsKindOf(ConnectableElement) and\n    let ce1 : ConnectableElement = ne1.oclAsType(ConnectableElement), ce2 : ConnectableElement = ne2.oclAsType(ConnectableElement) in\n      ce1.collaboration = ce2.collaboration)"
      },
      {
        "name": "every_role",
        "description": "Каждая роль кооперации привязана в данном использовании кооперации.",
        "ocl": "inv: type.collaborationRole->forAll(role | roleBinding->exists(rb | rb.supplier->includes(role)))"
      },
      {
        "name": "connectors",
        "description": "Коннекторы в кооперации, типизирующей использование кооперации, должны иметь соответствующие коннекторы между элементами, привязанными в контекстном классификаторе, и эти соответствующие коннекторы должны иметь тот же или более общий тип, чем коннекторы кооперации.",
        "ocl": "inv: type.ownedConnector->forAll(connector |\n  let rolesConnectedInCollab : Set(ConnectableElement) = connector.end.role->asSet(),\n        relevantBindings : Set(Dependency) = roleBinding->select(rb | rb.supplier->intersection(rolesConnectedInCollab)->notEmpty()),\n        boundRoles : Set(ConnectableElement) = relevantBindings->collect(client.oclAsType(ConnectableElement))->asSet(),\n        contextClassifier : StructuredClassifier = boundRoles->any(true).structuredClassifier->any(true) in\n          contextClassifier.ownedConnector->exists( correspondingConnector |\n              correspondingConnector.end.role->forAll( role | boundRoles->includes(role) )\n              and (connector.type->notEmpty() and correspondingConnector.type->notEmpty()) implies connector.type->forAll(conformsTo(correspondingConnector.type)) )\n)"
      }
    ],
    "literals": [],
    "diagrams": [
      "Collaborations",
      "Classifiers"
    ]
  },
  {
    "name": "Component",
    "ru": "Компонент",
    "kind": "Class",
    "section": "11.8.6",
    "page": 224,
    "definition": "Компонент представляет собой модульную часть системы, которая инкапсулирует своё содержимое и чья манифестация заменяема в её окружении.",
    "generalizations": [
      "Class"
    ],
    "specializations": [],
    "operations": [
      {
        "signature": "provided() : Interface [0..*]",
        "description": "Вывод для Component::/provided.",
        "body": "let\nris : Set(Interface) = allRealizedInterfaces(),\n        realizingClassifiers : Set(Classifier) = self.realization.realizingClassifier->union(self.allParents()->collect(realization.realizingClassifier))->asSet(),\n        allRealizingClassifiers : Set(Classifier) = realizingClassifiers->union(realizingClassifiers.allParents())->asSet(),\n        realizingClassifierInterfaces : Set(Interface) = allRealizingClassifiers->iterate(c;\nrci : Set(Interface) = Set{} | rci->union(c.allRealizedInterfaces())),\n        ports : Set(Port) = self.ownedPort->union(allParents()->collect(ownedPort))->asSet(),\n        providedByPorts : Set(Interface) = ports.provided->asSet()\nin ris->union(realizingClassifierInterfaces)->union(providedByPorts)->asSet()"
      },
      {
        "signature": "required() : Interface [0..*]",
        "description": "Вывод для Component::/required.",
        "body": "let\nuis : Set(Interface) = allUsedInterfaces(),\n        realizingClassifiers : Set(Classifier) = self.realization.realizingClassifier->union(self.allParents()->collect(realization.realizingClassifier))->asSet(),\n        allRealizingClassifiers : Set(Classifier) = realizingClassifiers->union(realizingClassifiers.allParents())->asSet(),\n        realizingClassifierInterfaces : Set(Interface) = allRealizingClassifiers->iterate(c;\nrci : Set(Interface) = Set{} | rci->union(c.allUsedInterfaces())),\n        ports : Set(Port) = self.ownedPort->union(allParents()->collect(ownedPort))->asSet(),\n        usedByPorts : Set(Interface) = ports.required->asSet()\nin uis->union(realizingClassifierInterfaces)->union(usedByPorts)->asSet()"
      }
    ],
    "constraints": [
      {
        "name": "no_nested_classifiers",
        "description": "Компонент не может вкладывать классификаторы.",
        "ocl": "inv: nestedClassifier->isEmpty()"
      },
      {
        "name": "no_packaged_elements",
        "description": "Компонент, вложенный в класс, не может иметь упакованных элементов.",
        "ocl": "inv: nestingClass <> null implies packagedElement->isEmpty()"
      }
    ],
    "literals": [],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "ComponentRealization",
    "ru": "Реализация компонента",
    "kind": "Class",
    "section": "11.8.7",
    "page": 225,
    "definition": "Realization специализируется, чтобы (дополнительно) определить классификаторы, реализующие контракт, предлагаемый компонентом в терминах его предоставляемых и требуемых интерфейсов. Компонент образует абстракцию от этих различных классификаторов.",
    "generalizations": [
      "Realization"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "ConnectableElement",
    "ru": "Соединяемый элемент",
    "kind": "Abstract Class",
    "section": "11.8.8",
    "page": 226,
    "definition": "Соединяемый элемент — абстрактный метакласс, представляющий множество экземпляров, играющих роли структурированного классификатора. Соединяемые элементы могут соединяться присоединёнными коннекторами и специфицируют конфигурации связанных экземпляров, создаваемых внутри экземпляра содержащего структурированного классификатора.",
    "generalizations": [
      "TypedElement",
      "ParameterableElement"
    ],
    "specializations": [
      "Parameter",
      "Property",
      "Variable"
    ],
    "operations": [
      {
        "signature": "end() : ConnectorEnd [0..*]",
        "description": "Вывод для ConnectableElement::/end.",
        "body": "ConnectorEnd.allInstances()->select(role = self)"
      }
    ],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Structured Classifiers",
      "Collaborations",
      "Activities",
      "Lifelines",
      "Features",
      "Properties"
    ]
  },
  {
    "name": "ConnectableElementTemplateParameter",
    "ru": "Параметр шаблона соединяемого элемента",
    "kind": "Class",
    "section": "11.8.9",
    "page": 226,
    "definition": "Параметр шаблона соединяемого элемента предоставляет соединяемый элемент как формальный параметр шаблона.",
    "generalizations": [
      "TemplateParameter"
    ],
    "specializations": [],
    "operations": [],
    "constraints": [],
    "literals": [],
    "diagrams": [
      "Structured Classifiers"
    ]
  }
];
  const associations = [
  {
    "name": "A_collaborationRole_collaboration",
    "ru": "Роли кооперации",
    "section": "11.9.1",
    "page": 233,
    "definition": "Связывает роли кооперации collaborationRole с владеющей кооперацией Collaboration; специализация A_role_structuredClassifier.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "collaborationRole",
        "signature": "collaborationRole : ConnectableElement",
        "type": "ConnectableElement",
        "owner": "Collaboration",
        "association": "A_collaborationRole_collaboration",
        "description": "Представляет участников кооперации. Подмножества StructuredClassifier::role."
      },
      {
        "name": "collaboration",
        "signature": "collaboration : Collaboration",
        "type": "Collaboration",
        "owner": "A_collaborationRole_collaboration",
        "association": "A_collaborationRole_collaboration",
        "description": "Кооперация, участниками которой являются данные соединяемые элементы. Подмножества A_role_structuredClassifier::structuredClassifier."
      }
    ],
    "diagrams": [
      "Collaborations"
    ]
  },
  {
    "name": "A_contract_connector",
    "ru": "Контракты коннектора",
    "section": "11.9.3",
    "page": 234,
    "definition": "Связывает контракты — Behavior — с коннектором Connector, задавая допустимые образцы взаимодействия через коннектор.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "contract",
        "signature": "contract : Behavior",
        "type": "Behavior",
        "owner": "Connector",
        "association": "A_contract_connector",
        "description": "Множество поведений, специфицирующих допустимые образцы взаимодействия через коннектор."
      },
      {
        "name": "connector",
        "signature": "connector : Connector",
        "type": "Connector",
        "owner": "A_contract_connector",
        "association": "A_contract_connector",
        "description": "Коннекторы, для которых данное поведение задаёт контракт взаимодействия."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_definingEnd_connectorEnd",
    "ru": "Задающий конец конца коннектора",
    "section": "11.9.4",
    "page": 234,
    "definition": "Связывает производный задающий конец definingEnd конца коннектора с концами коннектора ConnectorEnd.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "definingEnd",
        "signature": "definingEnd : Property",
        "type": "Property",
        "owner": "ConnectorEnd",
        "association": "A_definingEnd_connectorEnd",
        "description": "Производное свойство, ссылающееся на соответствующий конец ассоциации, типизирующей коннектор, владеющий данным концом коннектора, если таковая есть. Выводится выбором конца на том же месте в упорядочении концов ассоциации, что и данный конец коннектора."
      },
      {
        "name": "connectorEnd",
        "signature": "connectorEnd : ConnectorEnd",
        "type": "ConnectorEnd",
        "owner": "A_definingEnd_connectorEnd",
        "association": "A_definingEnd_connectorEnd",
        "description": "Концы коннектора, задающий конец которых ссылается на данное свойство."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_endType_association",
    "ru": "Типы концов ассоциации",
    "section": "11.9.5",
    "page": 234,
    "definition": "Связывает производные типы концов endType с ассоциацией Association.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "endType",
        "signature": "endType : Type",
        "type": "Type",
        "owner": "Association",
        "association": "A_endType_association",
        "description": "Классификаторы, используемые как типы концов ассоциации. Подмножества Relationship::relatedElement."
      },
      {
        "name": "association",
        "signature": "association : Association",
        "type": "Association",
        "owner": "A_endType_association",
        "association": "A_endType_association",
        "description": "Ассоциации, типы концов которых задаются данным классификатором. Подмножества A_relatedElement_relationship::relationship."
      }
    ],
    "diagrams": [
      "Associations"
    ]
  },
  {
    "name": "A_end_connector",
    "ru": "Концы коннектора",
    "section": "11.9.6",
    "page": 234,
    "definition": "Связывает принадлежащие концы коннектора end с владеющим коннектором Connector.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "end",
        "signature": "end : ConnectorEnd",
        "type": "ConnectorEnd",
        "owner": "Connector",
        "association": "A_end_connector",
        "description": "Концы коннектора; у коннектора есть не менее двух концов, каждый представляет участие экземпляров классификаторов, типизирующих присоединённые соединяемые элементы. Множество концов упорядочено. Подмножества Element::ownedElement."
      },
      {
        "name": "connector",
        "signature": "connector : Connector",
        "type": "Connector",
        "owner": "A_end_connector",
        "association": "A_end_connector",
        "description": "Коннектор, владеющий данным концом. Подмножества Element::owner."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_end_role",
    "ru": "Концы роли",
    "section": "11.9.7",
    "page": 234,
    "definition": "Связывает соединяемые элементы ConnectableElement с концами коннектора ConnectorEnd, присоединёнными к ним.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "end",
        "signature": "end : ConnectorEnd",
        "type": "ConnectorEnd",
        "owner": "ConnectableElement",
        "association": "A_end_role",
        "description": "Множество концов коннектора, присоединённых к данному соединяемому элементу."
      },
      {
        "name": "role",
        "signature": "role : ConnectableElement",
        "type": "ConnectableElement",
        "owner": "ConnectorEnd",
        "association": "A_end_role",
        "description": "Соединяемый элемент, присоединённый к данному концу коннектора. Когда создаётся экземпляр содержащего классификатора, может (в зависимости от кратностей) создаваться связь к экземпляру классификатора, типизирующего этот соединяемый элемент."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_extension_metaclass",
    "ru": "Расширения метакласса",
    "section": "11.9.8",
    "page": 235,
    "definition": "Связывает расширения Extension с метаклассом Class; концы ассоциации — Class::extension и Extension::metaclass.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "extension",
        "signature": "extension : Extension",
        "type": "Extension",
        "owner": "Class",
        "association": "A_extension_metaclass",
        "description": "Используется, когда класс выступает метаклассом. Ссылается на расширения, задающие дополнительные свойства метакласса. Свойство производно от расширений, концы-члены которых типизированы данным классом."
      },
      {
        "name": "metaclass",
        "signature": "metaclass : Class",
        "type": "Class",
        "owner": "Extension",
        "association": "A_extension_metaclass",
        "description": "Метакласс, который расширяет данное Extension."
      }
    ],
    "diagrams": [
      "Classes",
      "Profiles"
    ]
  },
  {
    "name": "A_memberEnd_association",
    "ru": "Концы-члены ассоциации",
    "section": "11.9.9",
    "page": 235,
    "definition": "Связывает концы-члены memberEnd ассоциации Association со свойствами Property.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "memberEnd",
        "signature": "memberEnd : Property",
        "type": "Property",
        "owner": "Association",
        "association": "A_memberEnd_association",
        "description": "Каждый конец представляет участие экземпляров присоединённого концу классификатора в связях ассоциации. Подмножества Namespace::member."
      },
      {
        "name": "association",
        "signature": "association : Association",
        "type": "Association",
        "owner": "Property",
        "association": "A_memberEnd_association",
        "description": "Ассоциация, концом-членом которой является данное свойство. Подмножества A_member_memberNamespace::memberNamespace."
      }
    ],
    "diagrams": [
      "Associations",
      "Properties"
    ]
  },
  {
    "name": "A_navigableOwnedEnd_association",
    "ru": "Принадлежащие навигационные концы ассоциации",
    "section": "11.9.10",
    "page": 235,
    "definition": "Связывает принадлежащие навигационные концы navigableOwnedEnd с ассоциацией Association.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "navigableOwnedEnd",
        "signature": "navigableOwnedEnd : Property",
        "type": "Property",
        "owner": "Association",
        "association": "A_navigableOwnedEnd_association",
        "description": "Навигационные концы, принадлежащие самой ассоциации. Подмножества Association::ownedEnd."
      },
      {
        "name": "association",
        "signature": "association : Association",
        "type": "Association",
        "owner": "A_navigableOwnedEnd_association",
        "association": "A_navigableOwnedEnd_association",
        "description": "Ассоциация, владеющая данным навигационным концом. Подмножества Property::owningAssociation."
      }
    ],
    "diagrams": [
      "Associations"
    ]
  },
  {
    "name": "A_nestedClassifier_nestingClass",
    "ru": "Вложенные классификаторы владеющего класса",
    "section": "11.9.11",
    "page": 235,
    "definition": "Связывает вложенные классификаторы nestedClassifier класса Class с владеющим классом nestingClass.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "nestedClassifier",
        "signature": "nestedClassifier : Classifier",
        "type": "Classifier",
        "owner": "Class",
        "association": "A_nestedClassifier_nestingClass",
        "description": "Классификаторы, принадлежащие классу, которые не являются ownedBehaviors. Подмножества A_redefinitionContext_redefinableElement::redefinableElement и Namespace::ownedMember."
      },
      {
        "name": "nestingClass",
        "signature": "nestingClass : Class",
        "type": "Class",
        "owner": "A_nestedClassifier_nestingClass",
        "association": "A_nestedClassifier_nestingClass",
        "description": "Класс, в котором вложен данный классификатор. Подмножества NamedElement::namespace и RedefinableElement::redefinitionContext."
      }
    ],
    "diagrams": [
      "Classes"
    ]
  },
  {
    "name": "A_ownedAttribute_class",
    "ru": "Атрибуты класса",
    "section": "11.9.12",
    "page": 236,
    "definition": "Связывает атрибуты ownedAttribute класса Class с владеющим классом; специализация A_ownedAttribute_structuredClassifier.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedAttribute",
        "signature": "ownedAttribute : Property",
        "type": "Property",
        "owner": "Class",
        "association": "A_ownedAttribute_class",
        "description": "Атрибуты (то есть свойства), принадлежащие классу. Подмножества Classifier::attribute и Namespace::ownedMember; переопределяет StructuredClassifier::ownedAttribute."
      },
      {
        "name": "class",
        "signature": "class : Class",
        "type": "Class",
        "owner": "Property",
        "association": "A_ownedAttribute_class",
        "description": "Класс, владеющий данным атрибутом, если есть. Подмножества A_attribute_classifier::classifier, A_ownedAttribute_structuredClassifier::structuredClassifier и NamedElement::namespace."
      }
    ],
    "diagrams": [
      "Classes",
      "Properties"
    ]
  },
  {
    "name": "A_ownedAttribute_structuredClassifier",
    "ru": "Атрибуты структурированного классификатора",
    "section": "11.9.13",
    "page": 236,
    "definition": "Связывает атрибуты ownedAttribute структурированного классификатора StructuredClassifier с владеющим классификатором; специализация A_role_structuredClassifier.",
    "generalizations": [
      "A_role_structuredClassifier"
    ],
    "specializations": [],
    "ends": [
      {
        "name": "ownedAttribute",
        "signature": "ownedAttribute : Property",
        "type": "Property",
        "owner": "StructuredClassifier",
        "association": "A_ownedAttribute_structuredClassifier",
        "description": "Свойства, принадлежащие структурированному классификатору. Подмножества Classifier::attribute, StructuredClassifier::role и Namespace::ownedMember."
      },
      {
        "name": "structuredClassifier",
        "signature": "structuredClassifier : StructuredClassifier",
        "type": "StructuredClassifier",
        "owner": "A_ownedAttribute_structuredClassifier",
        "association": "A_ownedAttribute_structuredClassifier",
        "description": "Структурированный классификатор, владеющий данным атрибутом. Подмножества NamedElement::namespace и A_attribute_classifier::classifier; переопределяет A_role_structuredClassifier::structuredClassifier."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_ownedConnector_structuredClassifier",
    "ru": "Коннекторы структурированного классификатора",
    "section": "11.9.14",
    "page": 236,
    "definition": "Связывает принадлежащие коннекторы ownedConnector структурированного классификатора StructuredClassifier с владеющим классификатором.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedConnector",
        "signature": "ownedConnector : Connector",
        "type": "Connector",
        "owner": "StructuredClassifier",
        "association": "A_ownedConnector_structuredClassifier",
        "description": "Коннекторы, принадлежащие структурированному классификатору. Подмножества Classifier::feature, A_redefinitionContext_redefinableElement::redefinableElement и Namespace::ownedMember."
      },
      {
        "name": "structuredClassifier",
        "signature": "structuredClassifier : StructuredClassifier",
        "type": "StructuredClassifier",
        "owner": "A_ownedConnector_structuredClassifier",
        "association": "A_ownedConnector_structuredClassifier",
        "description": "Структурированный классификатор, владеющий данным коннектором. Подмножества Feature::featuringClassifier, NamedElement::namespace и RedefinableElement::redefinitionContext."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_ownedEnd_owningAssociation",
    "ru": "Принадлежащие концы владеющей ассоциации",
    "section": "11.9.15",
    "page": 236,
    "definition": "Связывает принадлежащие концы ownedEnd ассоциации Association с концом владеющей ассоциации owningAssociation.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedEnd",
        "signature": "ownedEnd : Property",
        "type": "Property",
        "owner": "Association",
        "association": "A_ownedEnd_owningAssociation",
        "description": "Концы, принадлежащие самой ассоциации. Подмножества Classifier::feature, A_redefinitionContext_redefinableElement::redefinableElement, Association::memberEnd и Namespace::ownedMember."
      },
      {
        "name": "owningAssociation",
        "signature": "owningAssociation : Association",
        "type": "Association",
        "owner": "Property",
        "association": "A_ownedEnd_owningAssociation",
        "description": "Ассоциация, владеющая данным концом. Подмножества Feature::featuringClassifier, NamedElement::namespace, Property::association и RedefinableElement::redefinitionContext."
      }
    ],
    "diagrams": [
      "Associations",
      "Properties"
    ]
  },
  {
    "name": "A_ownedOperation_class",
    "ru": "Операции класса",
    "section": "11.9.16",
    "page": 237,
    "definition": "Связывает принадлежащие операции ownedOperation класса Class с владеющим классом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedOperation",
        "signature": "ownedOperation : Operation",
        "type": "Operation",
        "owner": "Class",
        "association": "A_ownedOperation_class",
        "description": "Операции, принадлежащие классу. Подмножества Classifier::feature, A_redefinitionContext_redefinableElement::redefinableElement и Namespace::ownedMember."
      },
      {
        "name": "class",
        "signature": "class : Class",
        "type": "Class",
        "owner": "Operation",
        "association": "A_ownedOperation_class",
        "description": "Класс, владеющий данной операцией. Подмножества Feature::featuringClassifier, NamedElement::namespace и RedefinableElement::redefinitionContext."
      }
    ],
    "diagrams": [
      "Classes",
      "Operations"
    ]
  },
  {
    "name": "A_ownedPort_encapsulatedClassifier",
    "ru": "Порты инкапсулированного классификатора",
    "section": "11.9.17",
    "page": 237,
    "definition": "Связывает производные порты ownedPort инкапсулированного классификатора EncapsulatedClassifier с владеющим классификатором.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedPort",
        "signature": "ownedPort : Port",
        "type": "Port",
        "owner": "EncapsulatedClassifier",
        "association": "A_ownedPort_encapsulatedClassifier",
        "description": "Порты, принадлежащие инкапсулированному классификатору. Подмножества StructuredClassifier::ownedAttribute."
      },
      {
        "name": "encapsulatedClassifier",
        "signature": "encapsulatedClassifier : EncapsulatedClassifier",
        "type": "EncapsulatedClassifier",
        "owner": "A_ownedPort_encapsulatedClassifier",
        "association": "A_ownedPort_encapsulatedClassifier",
        "description": "Инкапсулированный классификатор, владеющий данным портом. Подмножества A_ownedAttribute_structuredClassifier::structuredClassifier."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_ownedReception_class",
    "ru": "Приёмы сигналов класса",
    "section": "11.9.18",
    "page": 237,
    "definition": "Связывает приёмы сигналов ownedReception класса Class с владеющим классом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "ownedReception",
        "signature": "ownedReception : Reception",
        "type": "Reception",
        "owner": "Class",
        "association": "A_ownedReception_class",
        "description": "Приёмы сигналов, принадлежащие классу. Подмножества Classifier::feature и Namespace::ownedMember."
      },
      {
        "name": "class",
        "signature": "class : Class",
        "type": "Class",
        "owner": "A_ownedReception_class",
        "association": "A_ownedReception_class",
        "description": "Класс, владеющий данным приёмом сигнала. Подмножества Feature::featuringClassifier и NamedElement::namespace."
      }
    ],
    "diagrams": [
      "Classes"
    ]
  },
  {
    "name": "A_packagedElement_component",
    "ru": "Упакованные элементы компонента",
    "section": "11.9.19",
    "page": 237,
    "definition": "Связывает упакованные элементы packagedElement компонента Component с владеющим компонентом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "packagedElement",
        "signature": "packagedElement : PackageableElement",
        "type": "PackageableElement",
        "owner": "Component",
        "association": "A_packagedElement_component",
        "description": "Множество упакованных элементов, которыми владеет компонент. В пространстве имён компонента могут принадлежать или явно импортироваться все элементы модели, участвующие в его определении или связанные с ним. Это могут быть, например, классы, интерфейсы, компоненты, пакеты, варианты использования, зависимости (например, отображения) и артефакты. Подмножества Namespace::ownedMember."
      },
      {
        "name": "component",
        "signature": "component : Component",
        "type": "Component",
        "owner": "A_packagedElement_component",
        "association": "A_packagedElement_component",
        "description": "Компонент, владеющий данным упакованным элементом. Подмножества NamedElement::namespace."
      }
    ],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "A_partWithPort_connectorEnd",
    "ru": "Часть с портом конца коннектора",
    "section": "11.9.20",
    "page": 237,
    "definition": "Связывает часть с портом partWithPort конца коннектора ConnectorEnd с концами коннектора.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "partWithPort",
        "signature": "partWithPort : Property",
        "type": "Property",
        "owner": "ConnectorEnd",
        "association": "A_partWithPort_connectorEnd",
        "description": "Указывает роль внутренней структуры классификатора с портом, к которому присоединён конец коннектора."
      },
      {
        "name": "connectorEnd",
        "signature": "connectorEnd : ConnectorEnd",
        "type": "ConnectorEnd",
        "owner": "A_partWithPort_connectorEnd",
        "association": "A_partWithPort_connectorEnd",
        "description": "Концы коннектора, присоединённые к порту на данной части."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_part_structuredClassifier",
    "ru": "Части структурированного классификатора",
    "section": "11.9.21",
    "page": 238,
    "definition": "Связывает производные части part структурированного классификатора StructuredClassifier с владеющим классификатором.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "part",
        "signature": "part : Property",
        "type": "Property",
        "owner": "StructuredClassifier",
        "association": "A_part_structuredClassifier",
        "description": "Свойства, задающие экземпляры, которыми структурированный классификатор владеет композицией. Эта коллекция производна: выбираются те принадлежащие свойства, у которых isComposite = true."
      },
      {
        "name": "structuredClassifier",
        "signature": "structuredClassifier : StructuredClassifier",
        "type": "StructuredClassifier",
        "owner": "A_part_structuredClassifier",
        "association": "A_part_structuredClassifier",
        "description": "Структурированный классификатор, частями которого являются данные свойства."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_protocol_port",
    "ru": "Протокол порта",
    "section": "11.9.22",
    "page": 238,
    "definition": "Связывает протокольную машину состояний ProtocolStateMachine протокола с портом Port, имеющим этот протокол.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "protocol",
        "signature": "protocol : ProtocolStateMachine",
        "type": "ProtocolStateMachine",
        "owner": "Port",
        "association": "A_protocol_port",
        "description": "Необязательная протокольная машина состояний, описывающая допустимые взаимодействия в этой точке взаимодействия."
      },
      {
        "name": "port",
        "signature": "port : Port",
        "type": "Port",
        "owner": "A_protocol_port",
        "association": "A_protocol_port",
        "description": "Порты, протоколом которых является данная протокольная машина состояний."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_provided_component",
    "ru": "Предоставляемые интерфейсы компонента",
    "section": "11.9.23",
    "page": 238,
    "definition": "Связывает производные предоставляемые интерфейсы provided компонента Component с компонентом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "provided",
        "signature": "provided : Interface",
        "type": "Interface",
        "owner": "Component",
        "association": "A_provided_component",
        "description": "Интерфейсы, которые компонент предоставляет своему окружению. Эти интерфейсы могут реализоваться компонентом или любым из его realizingClassifiers, или это могут быть интерфейсы, предоставляемые его общедоступными портами."
      },
      {
        "name": "component",
        "signature": "component : Component",
        "type": "Component",
        "owner": "A_provided_component",
        "association": "A_provided_component",
        "description": "Компоненты, предоставляющие данный интерфейс."
      }
    ],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "A_provided_port",
    "ru": "Предоставляемые интерфейсы порта",
    "section": "11.9.24",
    "page": 238,
    "definition": "Связывает производные предоставляемые интерфейсы provided порта Port с портом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "provided",
        "signature": "provided : Interface",
        "type": "Interface",
        "owner": "Port",
        "association": "A_provided_port",
        "description": "Интерфейсы, задающие множество операций и приёмов, которые инкапсулированный классификатор предлагает своему окружению через этот порт и которые он будет обрабатывать либо непосредственно, либо перенаправляя во внутреннюю структуру. Ассоциация производна в зависимости от значения isConjugated. Если isConjugated = false, provided выводится как объединение множеств интерфейсов, реализуемых типом порта и его супертипами, или непосредственно из типа порта, если порт типизирован интерфейсом. Если isConjugated = true, выводится как объединение множеств интерфейсов, используемых типом порта и его супертипами."
      },
      {
        "name": "port",
        "signature": "port : Port",
        "type": "Port",
        "owner": "A_provided_port",
        "association": "A_provided_port",
        "description": "Порты, предоставляющие данный интерфейс."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_realization_abstraction_component",
    "ru": "Реализации абстракции компонента",
    "section": "11.9.25",
    "page": 238,
    "definition": "Связывает принадлежащие реализации realization компонента Component с абстракцией abstraction реализации компонента ComponentRealization.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "realization",
        "signature": "realization : ComponentRealization",
        "type": "ComponentRealization",
        "owner": "Component",
        "association": "A_realization_abstraction_component",
        "description": "Множество реализаций, принадлежащих компоненту. Реализации ссылаются на классификаторы, абстракцией которых является компонент, то есть реализующие его поведение. Подмножества Element::ownedElement и A_supplier_supplierDependency::supplierDependency."
      },
      {
        "name": "abstraction",
        "signature": "abstraction : Component",
        "type": "Component",
        "owner": "ComponentRealization",
        "association": "A_realization_abstraction_component",
        "description": "Компонент, владеющий данной реализацией компонента и который реализуется его реализующими классификаторами. Подмножества Dependency::supplier и Element::owner."
      }
    ],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "A_realizingClassifier_componentRealization",
    "ru": "Реализующие классификаторы реализации компонента",
    "section": "11.9.26",
    "page": 239,
    "definition": "Связывает реализующие классификаторы realizingClassifier реализации компонента ComponentRealization с реализациями.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "realizingClassifier",
        "signature": "realizingClassifier : Classifier",
        "type": "Classifier",
        "owner": "ComponentRealization",
        "association": "A_realizingClassifier_componentRealization",
        "description": "Классификаторы, участвующие в реализации компонента, владеющего данной реализацией. Подмножества Dependency::client."
      },
      {
        "name": "componentRealization",
        "signature": "componentRealization : ComponentRealization",
        "type": "ComponentRealization",
        "owner": "A_realizingClassifier_componentRealization",
        "association": "A_realizingClassifier_componentRealization",
        "description": "Реализации компонента, реализующими классификаторами которых являются данные классификаторы. Подмножества NamedElement::clientDependency."
      }
    ],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "A_redefinedConnector_connector",
    "ru": "Переопределяемые коннекторы коннектора",
    "section": "11.9.27",
    "page": 239,
    "definition": "Связывает переопределяемые коннекторы redefinedConnector коннектора Connector с переопределяющими коннекторами.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "redefinedConnector",
        "signature": "redefinedConnector : Connector",
        "type": "Connector",
        "owner": "Connector",
        "association": "A_redefinedConnector_connector",
        "description": "Коннектор может переопределяться при специализации содержащего его классификатора. Переопределяющий коннектор может иметь тип, специализирующий тип переопределяемого коннектора. Типы концов переопределяющего коннектора могут специализировать типы концов переопределяемого коннектора. Свойства концов переопределяющего коннектора могут заменяться. Подмножества RedefinableElement::redefinedElement."
      },
      {
        "name": "connector",
        "signature": "connector : Connector",
        "type": "Connector",
        "owner": "A_redefinedConnector_connector",
        "association": "A_redefinedConnector_connector",
        "description": "Коннекторы, переопределяющие данный коннектор. Подмножества A_redefinedElement_redefinableElement::redefinableElement."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_redefinedPort_port",
    "ru": "Переопределяемые порты порта",
    "section": "11.9.28",
    "page": 239,
    "definition": "Связывает переопределяемые порты redefinedPort порта Port с переопределяющими портами.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "redefinedPort",
        "signature": "redefinedPort : Port",
        "type": "Port",
        "owner": "Port",
        "association": "A_redefinedPort_port",
        "description": "Порт может переопределяться при специализации содержащего его инкапсулированного классификатора. Переопределяющий порт может иметь дополнительные интерфейсы к тем, что связаны с переопределяемым портом, или может заменить интерфейс одним из его подтипов. Подмножества Property::redefinedProperty."
      },
      {
        "name": "port",
        "signature": "port : Port",
        "type": "Port",
        "owner": "A_redefinedPort_port",
        "association": "A_redefinedPort_port",
        "description": "Порты, переопределяющие данный порт. Подмножества A_redefinedProperty_property::property."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_required_component",
    "ru": "Требуемые интерфейсы компонента",
    "section": "11.9.29",
    "page": 239,
    "definition": "Связывает производные требуемые интерфейсы required компонента Component с компонентом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "required",
        "signature": "required : Interface",
        "type": "Interface",
        "owner": "Component",
        "association": "A_required_component",
        "description": "Интерфейсы, которые компонент требует от других компонентов в своём окружении, чтобы иметь возможность предлагать полный набор своей функциональности. Эти интерфейсы могут использоваться компонентом или любым из его realizingClassifiers, или это могут быть интерфейсы, требуемые его общедоступными портами."
      },
      {
        "name": "component",
        "signature": "component : Component",
        "type": "Component",
        "owner": "A_required_component",
        "association": "A_required_component",
        "description": "Компоненты, требующие данный интерфейс."
      }
    ],
    "diagrams": [
      "Components"
    ]
  },
  {
    "name": "A_required_port",
    "ru": "Требуемые интерфейсы порта",
    "section": "11.9.30",
    "page": 239,
    "definition": "Связывает производные требуемые интерфейсы required порта Port с портом.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "required",
        "signature": "required : Interface",
        "type": "Interface",
        "owner": "Port",
        "association": "A_required_port",
        "description": "Интерфейсы, задающие множество операций и приёмов, которые инкапсулированный классификатор ожидает, что его окружение будет обрабатывать через этот порт. Ассоциация производна в зависимости от значения isConjugated. Если isConjugated = false, required выводится как объединение множеств интерфейсов, используемых типом порта и его супертипами. Если isConjugated = true, выводится как объединение множеств интерфейсов, реализуемых типом порта и его супертипами, или непосредственно из типа порта, если порт типизирован интерфейсом."
      },
      {
        "name": "port",
        "signature": "port : Port",
        "type": "Port",
        "owner": "A_required_port",
        "association": "A_required_port",
        "description": "Порты, требующие данный интерфейс."
      }
    ],
    "diagrams": [
      "Encapsulated Classifiers"
    ]
  },
  {
    "name": "A_roleBinding_collaborationUse",
    "ru": "Привязки ролей использования кооперации",
    "section": "11.9.31",
    "page": 240,
    "definition": "Связывает привязки ролей roleBinding использования кооперации CollaborationUse с владеющим использованием.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "roleBinding",
        "signature": "roleBinding : Dependency",
        "type": "Dependency",
        "owner": "CollaborationUse",
        "association": "A_roleBinding_collaborationUse",
        "description": "Отображение между характеристиками кооперации и характеристиками владеющего классификатора. Это отображение указывает, какой соединяемый элемент классификатора играет какую (какие) роль в кооперации. Соединяемый элемент может быть привязан к нескольким ролям в одном использовании кооперации (то есть он может играть несколько ролей). Подмножества Element::ownedElement."
      },
      {
        "name": "collaborationUse",
        "signature": "collaborationUse : CollaborationUse",
        "type": "CollaborationUse",
        "owner": "A_roleBinding_collaborationUse",
        "association": "A_roleBinding_collaborationUse",
        "description": "Использование кооперации, владеющее данной привязкой ролей. Подмножества Element::owner."
      }
    ],
    "diagrams": [
      "Collaborations"
    ]
  },
  {
    "name": "A_role_structuredClassifier",
    "ru": "Роли структурированного классификатора",
    "section": "11.9.32",
    "page": 240,
    "definition": "Связывает производные роли role структурированного классификатора StructuredClassifier с классификатором; обобщается в A_ownedAttribute_structuredClassifier.",
    "generalizations": [],
    "specializations": [
      "A_ownedAttribute_structuredClassifier"
    ],
    "ends": [
      {
        "name": "role",
        "signature": "role : ConnectableElement",
        "type": "ConnectableElement",
        "owner": "StructuredClassifier",
        "association": "A_role_structuredClassifier",
        "description": "Роли, которые экземпляры могут играть в данном структурированном классификаторе. Подмножества Namespace::member."
      },
      {
        "name": "structuredClassifier",
        "signature": "structuredClassifier : StructuredClassifier",
        "type": "StructuredClassifier",
        "owner": "A_role_structuredClassifier",
        "association": "A_role_structuredClassifier",
        "description": "Структурированные классификаторы, ролями которых являются данные соединяемые элементы. Подмножества A_member_memberNamespace::memberNamespace."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  },
  {
    "name": "A_superClass_class",
    "ru": "Суперклассы класса",
    "section": "11.9.33",
    "page": 240,
    "definition": "Связывает производные суперклассы superClass класса Class с классами.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "superClass",
        "signature": "superClass : Class",
        "type": "Class",
        "owner": "Class",
        "association": "A_superClass_class",
        "description": "Суперклассы класса, производные от его обобщений. Переопределяет Classifier::general."
      },
      {
        "name": "class",
        "signature": "class : Class",
        "type": "Class",
        "owner": "A_superClass_class",
        "association": "A_superClass_class",
        "description": "Классы, суперклассом которых является данный класс. Подмножества A_general_classifier::classifier."
      }
    ],
    "diagrams": [
      "Classes"
    ]
  },
  {
    "name": "A_type_collaborationUse",
    "ru": "Тип использования кооперации",
    "section": "11.9.34",
    "page": 240,
    "definition": "Связывает тип type использования кооперации CollaborationUse с использованиями кооперации.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "type",
        "signature": "type : Collaboration",
        "type": "Collaboration",
        "owner": "CollaborationUse",
        "association": "A_type_collaborationUse",
        "description": "Кооперация, используемая в данном использовании кооперации. Кооперация определяет сотрудничество между своими ролями, которые отображаются на соединяемые элементы, относящиеся к классификатору, владеющему использованием кооперации."
      },
      {
        "name": "collaborationUse",
        "signature": "collaborationUse : CollaborationUse",
        "type": "CollaborationUse",
        "owner": "A_type_collaborationUse",
        "association": "A_type_collaborationUse",
        "description": "Использования кооперации, типом которых является данная кооперация."
      }
    ],
    "diagrams": [
      "Collaborations"
    ]
  },
  {
    "name": "A_type_connector",
    "ru": "Тип коннектора",
    "section": "11.9.35",
    "page": 240,
    "definition": "Связывает тип type коннектора Connector с коннекторами; тип — необязательная ассоциация, классифицирующая связи, соответствующие коннектору.",
    "generalizations": [],
    "specializations": [],
    "ends": [
      {
        "name": "type",
        "signature": "type : Association",
        "type": "Association",
        "owner": "Connector",
        "association": "A_type_connector",
        "description": "Необязательная ассоциация, классифицирующая связи, соответствующие данному коннектору."
      },
      {
        "name": "connector",
        "signature": "connector : Connector",
        "type": "Connector",
        "owner": "A_type_connector",
        "association": "A_type_connector",
        "description": "Коннекторы, типизированные данной ассоциацией."
      }
    ],
    "diagrams": [
      "Structured Classifiers"
    ]
  }
];
  const diagrams = [
  {
    "id": "11.1",
    "name": "Structured Classifiers",
    "title": "Структурированные классификаторы",
    "en": "Structured Classifiers",
    "section": "11.2",
    "page": 183,
    "related": [
      "Association",
      "Connector",
      "ConnectorEnd",
      "StructuredClassifier",
      "ConnectableElement",
      "ConnectableElementTemplateParameter"
    ],
    "associations": [
      "A_contract_connector",
      "A_definingEnd_connectorEnd",
      "A_end_connector",
      "A_end_role",
      "A_ownedAttribute_structuredClassifier",
      "A_ownedConnector_structuredClassifier",
      "A_part_structuredClassifier",
      "A_redefinedConnector_connector",
      "A_role_structuredClassifier",
      "A_type_connector"
    ]
  },
  {
    "id": "11.2",
    "name": "Parts and roles",
    "title": "Части и роли",
    "en": "Parts and roles",
    "section": "11.2",
    "page": 186,
    "related": [],
    "associations": []
  },
  {
    "id": "11.3",
    "name": "Parts and roles with Ports",
    "title": "Части и роли с портами",
    "en": "Parts and roles with Ports",
    "section": "11.2",
    "page": 186,
    "related": [],
    "associations": []
  },
  {
    "id": "11.4",
    "name": "Alternative notations for connecting parts and roles with Ports",
    "title": "Альтернативные обозначения для соединения частей и ролей с портами",
    "en": "Alternative notations for connecting parts and roles with Ports",
    "section": "11.2",
    "page": 187,
    "related": [],
    "associations": []
  },
  {
    "id": "11.5",
    "name": "Associations compared with Connectors",
    "title": "Ассоциации в сравнении с коннекторами",
    "en": "Associations compared with Connectors",
    "section": "11.2",
    "page": 187,
    "related": [],
    "associations": []
  },
  {
    "id": "11.6",
    "name": "\"Star\" Connector pattern",
    "title": "Шаблон коннектора «звезда» (Star)",
    "en": "\"Star\" Connector pattern",
    "section": "11.2",
    "page": 188,
    "related": [],
    "associations": []
  },
  {
    "id": "11.7",
    "name": "\"Array\" Connector pattern",
    "title": "Шаблон коннектора «массив» (Array)",
    "en": "\"Array\" Connector pattern",
    "section": "11.2",
    "page": 188,
    "related": [],
    "associations": []
  },
  {
    "id": "11.8",
    "name": "An assembly Connector maps a simple Port of a Component to a matching simple Port of another Component.",
    "title": "Сборочный коннектор отображает простой порт одного компонента на соответствующий простой порт другого компонента.",
    "en": "An assembly Connector maps a simple Port of a Component to a matching simple Port of another Component.",
    "section": "11.2",
    "page": 189,
    "related": [],
    "associations": []
  },
  {
    "id": "11.9",
    "name": "An n-ary Connector that assembles four simple Ports using channeled ball-and-socket notation.",
    "title": "n-арный коннектор, соединяющий четыре простых порта с помощью канализованной нотации «шарик-гнездо».",
    "en": "An n-ary Connector that assembles four simple Ports using channeled ball-and-socket notation.",
    "section": "11.2",
    "page": 189,
    "related": [],
    "associations": []
  },
  {
    "id": "11.10",
    "name": "Encapsulated Classifiers",
    "title": "Инкапсулированные классификаторы",
    "en": "Encapsulated Classifiers",
    "section": "11.3",
    "page": 190,
    "related": [
      "ConnectorEnd",
      "EncapsulatedClassifier",
      "Port",
      "StructuredClassifier"
    ],
    "associations": [
      "A_ownedPort_encapsulatedClassifier",
      "A_partWithPort_connectorEnd",
      "A_protocol_port",
      "A_provided_port",
      "A_redefinedPort_port",
      "A_required_port"
    ]
  },
  {
    "id": "11.11",
    "name": "Port notation",
    "title": "Нотация порта",
    "en": "Port notation",
    "section": "11.3",
    "page": 192,
    "related": [],
    "associations": []
  },
  {
    "id": "11.12",
    "name": "Behavior Port notation",
    "title": "Нотация поведенческого порта",
    "en": "Behavior Port notation",
    "section": "11.3",
    "page": 192,
    "related": [],
    "associations": []
  },
  {
    "id": "11.13",
    "name": "Port notation showing multiple provided Interfaces",
    "title": "Нотация порта с несколькими предоставляемыми интерфейсами",
    "en": "Port notation showing multiple provided Interfaces",
    "section": "11.3",
    "page": 193,
    "related": [],
    "associations": []
  },
  {
    "id": "11.14",
    "name": "Port examples",
    "title": "Примеры портов",
    "en": "Port examples",
    "section": "11.3",
    "page": 193,
    "related": [],
    "associations": []
  },
  {
    "id": "11.15",
    "name": "Classes",
    "title": "Классы",
    "en": "Classes",
    "section": "11.4",
    "page": 194,
    "related": [
      "EncapsulatedClassifier",
      "Class"
    ],
    "associations": [
      "A_extension_metaclass",
      "A_nestedClassifier_nestingClass",
      "A_ownedAttribute_class",
      "A_ownedOperation_class",
      "A_ownedReception_class",
      "A_superClass_class"
    ]
  },
  {
    "id": "11.16",
    "name": "Class notation variants",
    "title": "Варианты нотации класса",
    "en": "Class notation variants",
    "section": "11.4",
    "page": 196,
    "related": [],
    "associations": []
  },
  {
    "id": "11.17",
    "name": "Class notation: attributes and Operations grouped according to visibility",
    "title": "Нотация класса: атрибуты и операции, сгруппированные по видимости",
    "en": "Class notation: attributes and Operations grouped according to visibility",
    "section": "11.4",
    "page": 196,
    "related": [],
    "associations": []
  },
  {
    "id": "11.18",
    "name": "Active Class",
    "title": "Активный класс",
    "en": "Active Class",
    "section": "11.4",
    "page": 196,
    "related": [],
    "associations": []
  },
  {
    "id": "11.19",
    "name": "Connectors and Parts",
    "title": "Коннекторы и части",
    "en": "Connectors and Parts",
    "section": "11.4",
    "page": 197,
    "related": [],
    "associations": []
  },
  {
    "id": "11.20",
    "name": "Connectors and Parts in a structure diagram using multiplicities",
    "title": "Коннекторы и части на диаграмме структуры с кратностями",
    "en": "Connectors and Parts in a structure diagram using multiplicities",
    "section": "11.4",
    "page": 197,
    "related": [],
    "associations": []
  },
  {
    "id": "11.21",
    "name": "An Instance of the Car Class",
    "title": "Экземпляр класса Car",
    "en": "An Instance of the Car Class",
    "section": "11.4",
    "page": 197,
    "related": [],
    "associations": []
  },
  {
    "id": "11.22",
    "name": "InstanceSpecification indicating a constructor",
    "title": "InstanceSpecification, указывающая конструктор",
    "en": "InstanceSpecification indicating a constructor",
    "section": "11.4",
    "page": 198,
    "related": [],
    "associations": []
  },
  {
    "id": "11.23",
    "name": "A constructor for the Car Class",
    "title": "Конструктор класса Car",
    "en": "A constructor for the Car Class",
    "section": "11.4",
    "page": 198,
    "related": [],
    "associations": []
  },
  {
    "id": "11.24",
    "name": "Showing that the extended Class is a metaclass",
    "title": "Показано, что расширяемый класс является метаклассом",
    "en": "Showing that the extended Class is a metaclass",
    "section": "11.4",
    "page": 198,
    "related": [],
    "associations": []
  },
  {
    "id": "11.25",
    "name": "Associations",
    "title": "Ассоциации",
    "en": "Associations",
    "section": "11.5",
    "page": 199,
    "related": [
      "Association",
      "AssociationClass",
      "Class"
    ],
    "associations": [
      "A_endType_association",
      "A_memberEnd_association",
      "A_navigableOwnedEnd_association",
      "A_ownedEnd_owningAssociation"
    ]
  },
  {
    "id": "11.26",
    "name": "Graphic notation indicating exactly one Association end owned by the Association",
    "title": "Графическое обозначение ровно одного конца ассоциации, принадлежащего ассоциации",
    "en": "Graphic notation indicating exactly one Association end owned by the Association",
    "section": "11.5",
    "page": 202,
    "related": [],
    "associations": []
  },
  {
    "id": "11.27",
    "name": "Binary and ternary Associations",
    "title": "Бинарные и тернарные ассоциации",
    "en": "Binary and ternary Associations",
    "section": "11.5",
    "page": 204,
    "related": [],
    "associations": []
  },
  {
    "id": "11.28",
    "name": "Association ends with various adornments",
    "title": "Концы ассоциации с различными украшениями",
    "en": "Association ends with various adornments",
    "section": "11.5",
    "page": 204,
    "related": [],
    "associations": []
  },
  {
    "id": "11.29",
    "name": "Examples of navigable association-owned ends",
    "title": "Примеры принадлежащих ассоциации навигационных концов",
    "en": "Examples of navigable association-owned ends",
    "section": "11.5",
    "page": 205,
    "related": [],
    "associations": []
  },
  {
    "id": "11.30",
    "name": "Examples of class-owned ends",
    "title": "Примеры принадлежащих классу концов",
    "en": "Examples of class-owned ends",
    "section": "11.5",
    "page": 206,
    "related": [],
    "associations": []
  },
  {
    "id": "11.31",
    "name": "Example of attribute notation for navigable end owned by an end Class",
    "title": "Пример атрибутной нотации для навигационного конца, принадлежащего классу конца",
    "en": "Example of attribute notation for navigable end owned by an end Class",
    "section": "11.5",
    "page": 206,
    "related": [],
    "associations": []
  },
  {
    "id": "11.32",
    "name": "Derived supersets (union)",
    "title": "Производные надмножества (объединение)",
    "en": "Derived supersets (union)",
    "section": "11.5",
    "page": 206,
    "related": [],
    "associations": []
  },
  {
    "id": "11.33",
    "name": "Composite aggregation is depicted as a black diamond",
    "title": "Композитная агрегация изображается закрашенным ромбом",
    "en": "Composite aggregation is depicted as a black diamond",
    "section": "11.5",
    "page": 207,
    "related": [],
    "associations": []
  },
  {
    "id": "11.34",
    "name": "Composite aggregation sharing a source segment",
    "title": "Композитная агрегация с общим исходным сегментом",
    "en": "Composite aggregation sharing a source segment",
    "section": "11.5",
    "page": 207,
    "related": [],
    "associations": []
  },
  {
    "id": "11.35",
    "name": "Example AssociationClass Job, which is defined between the two Classes Person and Company",
    "title": "Пример класса ассоциации Job, определённого между двумя классами Person и Company",
    "en": "Example AssociationClass Job, which is defined between the two Classes Person and Company",
    "section": "11.5",
    "page": 207,
    "related": [],
    "associations": []
  },
  {
    "id": "11.36",
    "name": "Example AssociationClass using diamond symbol",
    "title": "Пример класса ассоциации с символом ромба",
    "en": "Example AssociationClass using diamond symbol",
    "section": "11.5",
    "page": 208,
    "related": [],
    "associations": []
  },
  {
    "id": "11.37",
    "name": "Qualified associations",
    "title": "Квалифицированные ассоциации",
    "en": "Qualified associations",
    "section": "11.5",
    "page": 208,
    "related": [],
    "associations": []
  },
  {
    "id": "11.38",
    "name": "Components",
    "title": "Компоненты",
    "en": "Components",
    "section": "11.6",
    "page": 209,
    "related": [
      "Class",
      "Component",
      "ComponentRealization"
    ],
    "associations": [
      "A_packagedElement_component",
      "A_provided_component",
      "A_realization_abstraction_component",
      "A_realizingClassifier_componentRealization",
      "A_required_component"
    ]
  },
  {
    "id": "11.39",
    "name": "Example of an overview diagram showing Components and their general Dependencies",
    "title": "Пример обзорной диаграммы с компонентами и их общими зависимостями",
    "en": "Example of an overview diagram showing Components and their general Dependencies",
    "section": "11.6",
    "page": 211,
    "related": [],
    "associations": []
  },
  {
    "id": "11.40",
    "name": "A Component with two provided and three required Interfaces",
    "title": "Компонент с двумя предоставляемыми и тремя требуемыми интерфейсами",
    "en": "A Component with two provided and three required Interfaces",
    "section": "11.6",
    "page": 211,
    "related": [],
    "associations": []
  },
  {
    "id": "11.41",
    "name": "Black box notation showing a listing of provided and required interfaces",
    "title": "Нотация «чёрный ящик» со списком предоставляемых и требуемых интерфейсов",
    "en": "Black box notation showing a listing of provided and required interfaces",
    "section": "11.6",
    "page": 212,
    "related": [],
    "associations": []
  },
  {
    "id": "11.42",
    "name": "Optional “white-box” representation of a Component",
    "title": "Необязательное представление «белый ящик» компонента",
    "en": "Optional “white-box” representation of a Component",
    "section": "11.6",
    "page": 212,
    "related": [],
    "associations": []
  },
  {
    "id": "11.43",
    "name": "Explicit representation of provided and required Interfaces using Dependency notation.",
    "title": "Явное представление предоставляемых и требуемых интерфейсов с помощью нотации зависимостей.",
    "en": "Explicit representation of provided and required Interfaces using Dependency notation.",
    "section": "11.6",
    "page": 212,
    "related": [],
    "associations": []
  },
  {
    "id": "11.44",
    "name": "A representation of the realization of a complex Component",
    "title": "Представление реализации сложного компонента",
    "en": "A representation of the realization of a complex Component",
    "section": "11.6",
    "page": 213,
    "related": [],
    "associations": []
  },
  {
    "id": "11.45",
    "name": "An alternative nested representation of a complex Component",
    "title": "Альтернативное вложенное представление сложного компонента",
    "en": "An alternative nested representation of a complex Component",
    "section": "11.6",
    "page": 213,
    "related": [],
    "associations": []
  },
  {
    "id": "11.46",
    "name": "Example model of a Component, its provided and required Interfaces, and wiring through Dependencies",
    "title": "Пример модели компонента, его предоставляемых и требуемых интерфейсов и соединения через зависимости",
    "en": "Example model of a Component, its provided and required Interfaces, and wiring through Dependencies",
    "section": "11.6",
    "page": 214,
    "related": [],
    "associations": []
  },
  {
    "id": "11.47",
    "name": "Internal structure of a Component",
    "title": "Внутренняя структура компонента",
    "en": "Internal structure of a Component",
    "section": "11.6",
    "page": 214,
    "related": [],
    "associations": []
  },
  {
    "id": "11.48",
    "name": "Delegation Connectors connect externally provided Interfaces to the parts that realize or require them.",
    "title": "Делегирующие коннекторы соединяют внешне предоставляемые интерфейсы с частями, которые их реализуют или требуют.",
    "en": "Delegation Connectors connect externally provided Interfaces to the parts that realize or require them.",
    "section": "11.6",
    "page": 215,
    "related": [],
    "associations": []
  },
  {
    "id": "11.49",
    "name": "Collaborations",
    "title": "Кооперации",
    "en": "Collaborations",
    "section": "11.7",
    "page": 215,
    "related": [
      "StructuredClassifier",
      "Collaboration",
      "CollaborationUse",
      "ConnectableElement"
    ],
    "associations": [
      "A_collaborationRole_collaboration",
      "A_roleBinding_collaborationUse",
      "A_type_collaborationUse"
    ]
  },
  {
    "id": "11.50",
    "name": "The internal structure of the Observer Collaboration",
    "title": "Внутренняя структура кооперации Observer",
    "en": "The internal structure of the Observer Collaboration",
    "section": "11.7",
    "page": 217,
    "related": [],
    "associations": []
  },
  {
    "id": "11.51",
    "name": "Alternative notation for the parts of the Observer Collaboration.",
    "title": "Альтернативная нотация для частей кооперации Observer.",
    "en": "Alternative notation for the parts of the Observer Collaboration.",
    "section": "11.7",
    "page": 218,
    "related": [],
    "associations": []
  },
  {
    "id": "11.52",
    "name": "The Sale Collaboration",
    "title": "Кооперация Sale",
    "en": "The Sale Collaboration",
    "section": "11.7",
    "page": 218,
    "related": [],
    "associations": []
  },
  {
    "id": "11.53",
    "name": "The BrokeredSale Collaboration",
    "title": "Кооперация BrokeredSale",
    "en": "The BrokeredSale Collaboration",
    "section": "11.7",
    "page": 218,
    "related": [],
    "associations": []
  },
  {
    "id": "11.54",
    "name": "A subset of the BrokeredSale Collaboration using «occurrence» and Dependency arrows",
    "title": "Подмножество кооперации BrokeredSale с использованием «occurrence» и стрелок зависимостей",
    "en": "A subset of the BrokeredSale Collaboration using «occurrence» and Dependency arrows",
    "section": "11.7",
    "page": 219,
    "related": [],
    "associations": []
  }
];
  return { sections, classifiers, associations, diagrams };
})();
