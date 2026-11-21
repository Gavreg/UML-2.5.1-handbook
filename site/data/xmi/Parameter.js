window.UML_XMI_DATA.classes["Parameter"] = {
  "direct": [
    {
      "id": "Parameter-default",
      "name": "default",
      "signature": "/default : String [0..1]",
      "description": "Строка, представляющая значение, используемое, когда для параметра не передан аргумент.",
      "type": "String",
      "association": null,
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-defaultValue",
      "name": "defaultValue",
      "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
      "description": "Спецификация значения, используемого, если аргумент параметра не передан.",
      "type": "ValueSpecification",
      "association": "A_defaultValue_owningParameter",
      "owner": "Parameter",
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
      "redefinedProperties": []
    },
    {
      "id": "Parameter-direction",
      "name": "direction",
      "signature": "direction : ParameterDirectionKind [1..1] = in",
      "description": "Указывает, передаётся ли параметр в поведенческий элемент или из него.",
      "type": "ParameterDirectionKind",
      "association": null,
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-effect",
      "name": "effect",
      "signature": "effect : ParameterEffectKind [0..1]",
      "description": "Задаёт эффект, который выполнения владельца параметра оказывают на объекты, передаваемые через параметр на вход или выход.",
      "type": "ParameterEffectKind",
      "association": null,
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-isException",
      "name": "isException",
      "signature": "isException : Boolean [1..1] = false",
      "description": "Показывает, может ли выходной параметр выдать значение с исключением остальных выходов.",
      "type": "Boolean",
      "association": null,
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-isStream",
      "name": "isStream",
      "signature": "isStream : Boolean [1..1] = false",
      "description": "Указывает, может ли входной параметр принимать значения во время выполнения своего поведения, а выходной — выдавать значения во время выполнения поведения.",
      "type": "Boolean",
      "association": null,
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-operation",
      "name": "operation",
      "signature": "operation : Operation [0..1] {subsets ownerFormalParam}",
      "description": "Операция, владеющая этим параметром.",
      "type": "Operation",
      "association": "A_ownedParameter_operation",
      "owner": "Parameter",
      "subsets": [
        "ownerFormalParam"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_ownedParameter_ownerFormalParam-ownerFormalParam",
          "name": "ownerFormalParam",
          "type": "BehavioralFeature",
          "owner": {
            "type": "association",
            "name": "A_ownedParameter_ownerFormalParam"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Parameter-parameterSet",
      "name": "parameterSet",
      "signature": "parameterSet : ParameterSet [0..*]",
      "description": "Наборы параметров, содержащие этот параметр. См. ParameterSet.",
      "type": "ParameterSet",
      "association": "A_parameterSet_parameter",
      "owner": "Parameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "MultiplicityElement-isOrdered",
      "name": "isOrdered",
      "signature": "isOrdered : Boolean [1..1] = false",
      "description": "Определяет последовательный порядок значений многозначной кратности.",
      "type": "Boolean",
      "association": null,
      "owner": "MultiplicityElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "MultiplicityElement-isUnique",
      "name": "isUnique",
      "signature": "isUnique : Boolean [1..1] = true",
      "description": "Определяет уникальность значений многозначной кратности.",
      "type": "Boolean",
      "association": null,
      "owner": "MultiplicityElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "MultiplicityElement-lower",
      "name": "lower",
      "signature": "/lower : Integer [1..1]",
      "description": "Нижняя граница интервала кратности.",
      "type": "Integer",
      "association": null,
      "owner": "MultiplicityElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "MultiplicityElement-lowerValue",
      "name": "lowerValue",
      "signature": "lowerValue : ValueSpecification [0..1] {subsets ownedElement}",
      "description": "Спецификация нижней границы.",
      "type": "ValueSpecification",
      "association": "A_lowerValue_owningLower",
      "owner": "MultiplicityElement",
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
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "MultiplicityElement-upper",
      "name": "upper",
      "signature": "/upper : UnlimitedNatural [1..1]",
      "description": "Верхняя граница интервала кратности.",
      "type": "UnlimitedNatural",
      "association": null,
      "owner": "MultiplicityElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "MultiplicityElement-upperValue",
      "name": "upperValue",
      "signature": "upperValue : ValueSpecification [0..1] {subsets ownedElement}",
      "description": "Спецификация верхней границы.",
      "type": "ValueSpecification",
      "association": "A_upperValue_owningUpper",
      "owner": "MultiplicityElement",
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
      "inheritedFrom": "MultiplicityElement"
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
      "id": "ConnectableElement-end",
      "name": "end",
      "signature": "/end : ConnectorEnd [0..*] {readOnly}",
      "description": "Множество концов соединителей, присоединённых к этому соединяемому элементу.",
      "type": "ConnectorEnd",
      "association": "A_end_role",
      "owner": "ConnectableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "ConnectableElement"
    },
    {
      "id": "ConnectableElement-templateParameter",
      "name": "templateParameter",
      "signature": "templateParameter : ConnectableElementTemplateParameter [0..1] {redefines templateParameter}",
      "description": "Параметр шаблона соединяемого элемента для этого параметра ConnectableElement.",
      "type": "ConnectableElementTemplateParameter",
      "association": "A_connectableElement_templateParameter_parameteredElement",
      "owner": "ConnectableElement",
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
      ],
      "inheritedFrom": "ConnectableElement"
    },
    {
      "id": "TypedElement-type",
      "name": "type",
      "signature": "type : Type [0..1]",
      "description": "Тип элемента.",
      "type": "Type",
      "association": "A_type_typedElement",
      "owner": "TypedElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "TypedElement"
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
    }
  ]
};
