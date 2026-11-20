window.UML_XMI_DATA.classes["Namespace"] = {
  "direct": [
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
    }
  ],
  "inherited": [
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
    }
  ]
};
