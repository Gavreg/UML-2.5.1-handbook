window.UML_XMI_DATA.classes["RedefinableTemplateSignature"] = {
  "direct": [
    {
      "id": "RedefinableTemplateSignature-classifier",
      "name": "classifier",
      "signature": "classifier : Classifier [1..1] {subsets redefinitionContext, redefines template}",
      "description": "Классификатор, владеющий этой переопределяемой подписью шаблона.",
      "type": "Classifier",
      "association": "A_ownedTemplateSignature_classifier",
      "owner": "RedefinableTemplateSignature",
      "subsets": [
        "redefinitionContext"
      ],
      "redefines": [
        "template"
      ],
      "subsettedProperties": [
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
      "redefinedProperties": [
        {
          "id": "TemplateSignature-template",
          "name": "template",
          "type": "TemplateableElement",
          "owner": {
            "type": "classifier",
            "name": "TemplateSignature"
          }
        }
      ]
    },
    {
      "id": "RedefinableTemplateSignature-extendedSignature",
      "name": "extendedSignature",
      "signature": "extendedSignature : RedefinableTemplateSignature [0..*] {subsets redefinedElement}",
      "description": "Подписи шаблонов, расширяемые этой переопределяемой подписью шаблона.",
      "type": "RedefinableTemplateSignature",
      "association": "A_extendedSignature_redefinableTemplateSignature",
      "owner": "RedefinableTemplateSignature",
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
      "id": "RedefinableTemplateSignature-inheritedParameter",
      "name": "inheritedParameter",
      "signature": "/inheritedParameter : TemplateParameter [0..*] {readOnly, subsets parameter}",
      "description": "Формальные параметры расширяемых сигнатур шаблонов.",
      "type": "TemplateParameter",
      "association": "A_inheritedParameter_redefinableTemplateSignature",
      "owner": "RedefinableTemplateSignature",
      "subsets": [
        "parameter"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "TemplateSignature-parameter",
          "name": "parameter",
          "type": "TemplateParameter",
          "owner": {
            "type": "classifier",
            "name": "TemplateSignature"
          }
        }
      ],
      "redefinedProperties": []
    }
  ],
  "inherited": [
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
      "id": "TemplateSignature-ownedParameter",
      "name": "ownedParameter",
      "signature": "ownedParameter : TemplateParameter [0..*] {ordered, subsets ownedElement, parameter}",
      "description": "Формальные параметры, принадлежащие подписи.",
      "type": "TemplateParameter",
      "association": "A_ownedParameter_signature",
      "owner": "TemplateSignature",
      "subsets": [
        "ownedElement",
        "parameter"
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
          "id": "TemplateSignature-parameter",
          "name": "parameter",
          "type": "TemplateParameter",
          "owner": {
            "type": "classifier",
            "name": "TemplateSignature"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "TemplateSignature"
    },
    {
      "id": "TemplateSignature-parameter",
      "name": "parameter",
      "signature": "parameter : TemplateParameter [1..*] {ordered}",
      "description": "Упорядоченное множество всех формальных параметров.",
      "type": "TemplateParameter",
      "association": "A_parameter_templateSignature",
      "owner": "TemplateSignature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "TemplateSignature"
    }
  ]
};
