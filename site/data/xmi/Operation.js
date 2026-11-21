window.UML_XMI_DATA.classes["Operation"] = {
  "direct": [
    {
      "id": "Operation-bodyCondition",
      "name": "bodyCondition",
      "signature": "bodyCondition : Constraint [0..1] {subsets ownedRule}",
      "description": "Необязательное ограничение на значения результата вызова операции.",
      "type": "Constraint",
      "association": "A_bodyCondition_bodyContext",
      "owner": "Operation",
      "subsets": [
        "ownedRule"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedRule",
          "name": "ownedRule",
          "type": "Constraint",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-class",
      "name": "class",
      "signature": "class : Class [0..1] {subsets featuringClassifier, namespace, redefinitionContext}",
      "description": "Класс, владеющий этой операцией, если есть.",
      "type": "Class",
      "association": "A_ownedOperation_class",
      "owner": "Operation",
      "subsets": [
        "featuringClassifier",
        "namespace",
        "redefinitionContext"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Feature-featuringClassifier",
          "name": "featuringClassifier",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "Feature"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        },
        {
          "id": "RedefinableElement-redefinitionContext",
          "name": "redefinitionContext",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-datatype",
      "name": "datatype",
      "signature": "datatype : DataType [0..1] {subsets featuringClassifier, namespace, redefinitionContext}",
      "description": "Тип данных, владеющий этой операцией, если есть.",
      "type": "DataType",
      "association": "A_ownedOperation_datatype",
      "owner": "Operation",
      "subsets": [
        "featuringClassifier",
        "namespace",
        "redefinitionContext"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Feature-featuringClassifier",
          "name": "featuringClassifier",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "Feature"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        },
        {
          "id": "RedefinableElement-redefinitionContext",
          "name": "redefinitionContext",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-interface",
      "name": "interface",
      "signature": "interface : Interface [0..1] {subsets featuringClassifier, namespace, redefinitionContext}",
      "description": "Интерфейс, владеющий этой операцией, если есть.",
      "type": "Interface",
      "association": "A_ownedOperation_interface",
      "owner": "Operation",
      "subsets": [
        "featuringClassifier",
        "namespace",
        "redefinitionContext"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Feature-featuringClassifier",
          "name": "featuringClassifier",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "Feature"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        },
        {
          "id": "RedefinableElement-redefinitionContext",
          "name": "redefinitionContext",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-isOrdered",
      "name": "isOrdered",
      "signature": "/isOrdered : Boolean [1..1] {readOnly}",
      "description": "Указывает, является ли возвращаемый параметр упорядоченным, если он есть. Эта информация выводится из возвращаемого результата операции.",
      "type": "Boolean",
      "association": null,
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Operation-isQuery",
      "name": "isQuery",
      "signature": "isQuery : Boolean [1..1] = false",
      "description": "Указывает, оставляет ли выполнение поведенческой характеристики состояние системы неизменным (isQuery = true) или могут ли происходить побочные эффекты (isQuery = false).",
      "type": "Boolean",
      "association": null,
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Operation-isUnique",
      "name": "isUnique",
      "signature": "/isUnique : Boolean [1..1] {readOnly}",
      "description": "Указывает, является ли возвращаемый параметр уникальным, если он есть. Эта информация выводится из возвращаемого результата операции.",
      "type": "Boolean",
      "association": null,
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Operation-lower",
      "name": "lower",
      "signature": "/lower : Integer [0..1] {readOnly}",
      "description": "Нижняя кратность возвращаемого параметра, если он есть. Эта информация выводится из возвращаемого результата операции.",
      "type": "Integer",
      "association": null,
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Operation-ownedParameter",
      "name": "ownedParameter",
      "signature": "ownedParameter : Parameter [0..*] {ordered, redefines ownedParameter}",
      "description": "Параметры, принадлежащие этой операции.",
      "type": "Parameter",
      "association": "A_ownedParameter_operation",
      "owner": "Operation",
      "subsets": [],
      "redefines": [
        "ownedParameter"
      ],
      "subsettedProperties": [],
      "redefinedProperties": [
        {
          "id": "BehavioralFeature-ownedParameter",
          "name": "ownedParameter",
          "type": "Parameter",
          "owner": {
            "type": "classifier",
            "name": "BehavioralFeature"
          }
        }
      ]
    },
    {
      "id": "Operation-postcondition",
      "name": "postcondition",
      "signature": "postcondition : Constraint [0..*] {subsets ownedRule}",
      "description": "Необязательные ограничения на состояние системы после завершения операции.",
      "type": "Constraint",
      "association": "A_postcondition_postContext",
      "owner": "Operation",
      "subsets": [
        "ownedRule"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedRule",
          "name": "ownedRule",
          "type": "Constraint",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-precondition",
      "name": "precondition",
      "signature": "precondition : Constraint [0..*] {subsets ownedRule}",
      "description": "Необязательные ограничения на состояние системы при вызове операции.",
      "type": "Constraint",
      "association": "A_precondition_preContext",
      "owner": "Operation",
      "subsets": [
        "ownedRule"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedRule",
          "name": "ownedRule",
          "type": "Constraint",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-raisedException",
      "name": "raisedException",
      "signature": "raisedException : Type [0..*] {redefines raisedException}",
      "description": "Типы исключений, которые могут возникать при вызове операции.",
      "type": "Type",
      "association": "A_raisedException_operation",
      "owner": "Operation",
      "subsets": [],
      "redefines": [
        "raisedException"
      ],
      "subsettedProperties": [],
      "redefinedProperties": [
        {
          "id": "BehavioralFeature-raisedException",
          "name": "raisedException",
          "type": "Type",
          "owner": {
            "type": "classifier",
            "name": "BehavioralFeature"
          }
        }
      ]
    },
    {
      "id": "Operation-redefinedOperation",
      "name": "redefinedOperation",
      "signature": "redefinedOperation : Operation [0..*] {subsets redefinedElement}",
      "description": "Операции, переопределяемые этой операцией.",
      "type": "Operation",
      "association": "A_redefinedOperation_operation",
      "owner": "Operation",
      "subsets": [
        "redefinedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "RedefinableElement-redefinedElement",
          "name": "redefinedElement",
          "type": "RedefinableElement",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Operation-templateParameter",
      "name": "templateParameter",
      "signature": "templateParameter : OperationTemplateParameter [0..1] {redefines templateParameter}",
      "description": "Параметр шаблона операции, который предоставляет этот элемент как формальный параметр.",
      "type": "OperationTemplateParameter",
      "association": "A_operation_templateParameter_parameteredElement",
      "owner": "Operation",
      "subsets": [],
      "redefines": [
        "templateParameter"
      ],
      "subsettedProperties": [],
      "redefinedProperties": [
        {
          "id": "ParameterableElement-templateParameter",
          "name": "templateParameter",
          "type": "TemplateParameter",
          "owner": {
            "type": "classifier",
            "name": "ParameterableElement"
          }
        }
      ]
    },
    {
      "id": "Operation-type",
      "name": "type",
      "signature": "/type : Type [0..1] {readOnly}",
      "description": "Возвращаемый тип операции, если он есть; выводится из возвращаемого параметра.",
      "type": "Type",
      "association": "A_type_operation",
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Operation-upper",
      "name": "upper",
      "signature": "/upper : UnlimitedNatural [0..1] {readOnly}",
      "description": "Верхняя кратность возвращаемого параметра, если он есть. Эта информация выводится из возвращаемого результата операции.",
      "type": "UnlimitedNatural",
      "association": null,
      "owner": "Operation",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "TemplateableElement-ownedTemplateSignature",
      "name": "ownedTemplateSignature",
      "signature": "ownedTemplateSignature : TemplateSignature [0..1] {subsets ownedElement}",
      "description": "Необязательная подпись, делающая элемент шаблоном.",
      "type": "TemplateSignature",
      "association": "A_ownedTemplateSignature_template",
      "owner": "TemplateableElement",
      "subsets": [
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "TemplateableElement"
    },
    {
      "id": "TemplateableElement-templateBinding",
      "name": "templateBinding",
      "signature": "templateBinding : TemplateBinding [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Необязательные привязки элемента к шаблонам.",
      "type": "TemplateBinding",
      "association": "A_templateBinding_boundElement",
      "owner": "TemplateableElement",
      "subsets": [
        "directedRelationship",
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "type": "DirectedRelationship",
          "owner": {
            "type": "association",
            "name": "A_source_directedRelationship"
          }
        },
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "TemplateableElement"
    },
    {
      "id": "Element-ownedComment",
      "name": "ownedComment",
      "signature": "ownedComment : Comment [0..*] {subsets ownedElement}",
      "description": "Комментарии, принадлежащие элементу.",
      "type": "Comment",
      "association": "A_ownedComment_owningElement",
      "owner": "Element",
      "subsets": [
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Element"
    },
    {
      "id": "Element-ownedElement",
      "name": "ownedElement",
      "signature": "/ownedElement : Element [0..*] {readOnly, union}",
      "description": "Элементы, принадлежащие данному элементу.",
      "type": "Element",
      "association": "A_ownedElement_owner",
      "owner": "Element",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Element"
    },
    {
      "id": "Element-owner",
      "name": "owner",
      "signature": "/owner : Element [0..1] {readOnly, union}",
      "description": "Элемент-владелец.",
      "type": "Element",
      "association": "A_ownedElement_owner",
      "owner": "Element",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Element"
    },
    {
      "id": "ParameterableElement-owningTemplateParameter",
      "name": "owningTemplateParameter",
      "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
      "description": "Формальный параметр, владеющий этим элементом.",
      "type": "TemplateParameter",
      "association": "A_ownedParameteredElement_owningTemplateParameter",
      "owner": "ParameterableElement",
      "subsets": [
        "owner",
        "templateParameter"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Element-owner",
          "name": "owner",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        },
        {
          "id": "ParameterableElement-templateParameter",
          "name": "templateParameter",
          "type": "TemplateParameter",
          "owner": {
            "type": "classifier",
            "name": "ParameterableElement"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "ParameterableElement"
    },
    {
      "id": "BehavioralFeature-concurrency",
      "name": "concurrency",
      "signature": "concurrency : CallConcurrencyKind [1..1] = sequential",
      "description": "Задаёт семантику одновременных вызовов одного и того же пассивного экземпляра (то есть экземпляра, происходящего из Class с isActive = false). Активные экземпляры сами управляют доступом к своим поведенческим характеристикам.",
      "type": "CallConcurrencyKind",
      "association": null,
      "owner": "BehavioralFeature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "BehavioralFeature"
    },
    {
      "id": "BehavioralFeature-isAbstract",
      "name": "isAbstract",
      "signature": "isAbstract : Boolean [1..1] = false",
      "description": "Если true, поведенческая характеристика не имеет реализации, и её должна предоставить более специфичная Classifier. Если false, реализация должна быть в Classifier или унаследована.",
      "type": "Boolean",
      "association": null,
      "owner": "BehavioralFeature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "BehavioralFeature"
    },
    {
      "id": "BehavioralFeature-method",
      "name": "method",
      "signature": "method : Behavior [0..*]",
      "description": "Поведение, реализующее поведенческую характеристику. Для данной пары Classifier (как владельца Behavior) и BehavioralFeature (как спецификации Behavior) может существовать не более одного Behavior.",
      "type": "Behavior",
      "association": "A_method_specification",
      "owner": "BehavioralFeature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "BehavioralFeature"
    },
    {
      "id": "BehavioralFeature-ownedParameterSet",
      "name": "ownedParameterSet",
      "signature": "ownedParameterSet : ParameterSet [0..*] {subsets ownedMember}",
      "description": "Наборы параметров, принадлежащие этой поведенческой характеристике.",
      "type": "ParameterSet",
      "association": "A_ownedParameterSet_behavioralFeature",
      "owner": "BehavioralFeature",
      "subsets": [
        "ownedMember"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "BehavioralFeature"
    },
    {
      "id": "Feature-featuringClassifier",
      "name": "featuringClassifier",
      "signature": "/featuringClassifier : Classifier [0..1] {readOnly, union, subsets memberNamespace}",
      "description": "Классификаторы, характеристикой которых является эта Feature.",
      "type": "Classifier",
      "association": "A_feature_featuringClassifier",
      "owner": "Feature",
      "subsets": [
        "memberNamespace"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_member_memberNamespace-memberNamespace",
          "name": "memberNamespace",
          "type": "Namespace",
          "owner": {
            "type": "association",
            "name": "A_member_memberNamespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Feature"
    },
    {
      "id": "Feature-isStatic",
      "name": "isStatic",
      "signature": "isStatic : Boolean [1..1] = false",
      "description": "Указывает, характеризует ли эта характеристика отдельные экземпляры, классифицированные классификатором (false), или сам классификатор (true).",
      "type": "Boolean",
      "association": null,
      "owner": "Feature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Feature"
    },
    {
      "id": "RedefinableElement-isLeaf",
      "name": "isLeaf",
      "signature": "isLeaf : Boolean [1..1] = false",
      "description": "Указывает, возможно ли дальнейшее переопределение переопределяемого элемента. Если значение true, дальнейшее переопределение невозможно.",
      "type": "Boolean",
      "association": null,
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    },
    {
      "id": "RedefinableElement-redefinedElement",
      "name": "redefinedElement",
      "signature": "/redefinedElement : RedefinableElement [0..*] {readOnly, union}",
      "description": "Переопределяемые элементы, которые переопределяет этот элемент.",
      "type": "RedefinableElement",
      "association": "A_redefinedElement_redefinableElement",
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    },
    {
      "id": "RedefinableElement-redefinitionContext",
      "name": "redefinitionContext",
      "signature": "/redefinitionContext : Classifier [0..*] {readOnly, union}",
      "description": "Контексты, в которых этот элемент может быть переопределён.",
      "type": "Classifier",
      "association": "A_redefinitionContext_redefinableElement",
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    },
    {
      "id": "NamedElement-clientDependency",
      "name": "clientDependency",
      "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
      "description": "Зависимости, в которых элемент выступает клиентом.",
      "type": "Dependency",
      "association": "A_clientDependency_client",
      "owner": "NamedElement",
      "subsets": [
        "directedRelationship"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "type": "DirectedRelationship",
          "owner": {
            "type": "association",
            "name": "A_source_directedRelationship"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "NamedElement-name",
      "name": "name",
      "signature": "name : String [0..1]",
      "description": "Имя элемента.",
      "type": "String",
      "association": null,
      "owner": "NamedElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "NamedElement-nameExpression",
      "name": "nameExpression",
      "signature": "nameExpression : StringExpression [0..1] {subsets ownedElement}",
      "description": "Выражение, определяющее имя элемента.",
      "type": "StringExpression",
      "association": "A_nameExpression_namedElement",
      "owner": "NamedElement",
      "subsets": [
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "NamedElement-namespace",
      "name": "namespace",
      "signature": "/namespace : Namespace [0..1] {readOnly, union, subsets memberNamespace, owner}",
      "description": "Пространство имён, владеющее элементом.",
      "type": "Namespace",
      "association": "A_ownedMember_namespace",
      "owner": "NamedElement",
      "subsets": [
        "memberNamespace",
        "owner"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_member_memberNamespace-memberNamespace",
          "name": "memberNamespace",
          "type": "Namespace",
          "owner": {
            "type": "association",
            "name": "A_member_memberNamespace"
          }
        },
        {
          "id": "Element-owner",
          "name": "owner",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "NamedElement-qualifiedName",
      "name": "qualifiedName",
      "signature": "/qualifiedName : String [0..1] {readOnly}",
      "description": "Имя, построенное по иерархии вложенных пространств имён.",
      "type": "String",
      "association": null,
      "owner": "NamedElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "NamedElement-visibility",
      "name": "visibility",
      "signature": "visibility : VisibilityKind [0..1]",
      "description": "Видимость элемента за пределами владеющего пространства имён.",
      "type": "VisibilityKind",
      "association": null,
      "owner": "NamedElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "NamedElement"
    },
    {
      "id": "Namespace-elementImport",
      "name": "elementImport",
      "signature": "elementImport : ElementImport [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Импорты отдельных элементов, принадлежащие пространству имён.",
      "type": "ElementImport",
      "association": "A_elementImport_importingNamespace",
      "owner": "Namespace",
      "subsets": [
        "directedRelationship",
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "type": "DirectedRelationship",
          "owner": {
            "type": "association",
            "name": "A_source_directedRelationship"
          }
        },
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-importedMember",
      "name": "importedMember",
      "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
      "description": "Члены, добавленные импортом элемента или пакета.",
      "type": "PackageableElement",
      "association": "A_importedMember_namespace",
      "owner": "Namespace",
      "subsets": [
        "member"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-member",
      "name": "member",
      "signature": "/member : NamedElement [0..*] {readOnly, union}",
      "description": "Все различимые по имени члены пространства имён.",
      "type": "NamedElement",
      "association": "A_member_memberNamespace",
      "owner": "Namespace",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-ownedMember",
      "name": "ownedMember",
      "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
      "description": "Члены, непосредственно принадлежащие пространству имён.",
      "type": "NamedElement",
      "association": "A_ownedMember_namespace",
      "owner": "Namespace",
      "subsets": [
        "ownedElement",
        "member"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-ownedRule",
      "name": "ownedRule",
      "signature": "ownedRule : Constraint [0..*] {subsets ownedMember}",
      "description": "Ограничения, принадлежащие пространству имён.",
      "type": "Constraint",
      "association": "A_ownedRule_context",
      "owner": "Namespace",
      "subsets": [
        "ownedMember"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-packageImport",
      "name": "packageImport",
      "signature": "packageImport : PackageImport [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Импорты пакетов, принадлежащие пространству имён.",
      "type": "PackageImport",
      "association": "A_packageImport_importingNamespace",
      "owner": "Namespace",
      "subsets": [
        "directedRelationship",
        "ownedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "type": "DirectedRelationship",
          "owner": {
            "type": "association",
            "name": "A_source_directedRelationship"
          }
        },
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Element"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    }
  ]
};
