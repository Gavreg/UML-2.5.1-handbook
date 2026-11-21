window.UML_XMI_DATA.classes["BehavioralFeature"] = {
  "direct": [
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
    },
    {
      "id": "BehavioralFeature-ownedParameter",
      "name": "ownedParameter",
      "signature": "ownedParameter : Parameter [0..*] {ordered, subsets ownedMember}",
      "description": "Упорядоченное множество формальных параметров этой поведенческой характеристики.",
      "type": "Parameter",
      "association": "A_ownedParameter_ownerFormalParam",
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
      "redefinedProperties": []
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
      "redefinedProperties": []
    },
    {
      "id": "BehavioralFeature-raisedException",
      "name": "raisedException",
      "signature": "raisedException : Type [0..*]",
      "description": "Типы исключений, которые могут возникать при вызове поведенческой характеристики.",
      "type": "Type",
      "association": "A_raisedException_behavioralFeature",
      "owner": "BehavioralFeature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
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
