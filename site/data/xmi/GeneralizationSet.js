window.UML_XMI_DATA.classes["GeneralizationSet"] = {
  "direct": [
    {
      "id": "GeneralizationSet-generalization",
      "name": "generalization",
      "signature": "generalization : Generalization [0..*]",
      "description": "Обозначает экземпляры обобщения, являющиеся членами этого набора обобщений.",
      "type": "Generalization",
      "association": "A_generalizationSet_generalization",
      "owner": "GeneralizationSet",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "GeneralizationSet-isCovering",
      "name": "isCovering",
      "signature": "isCovering : Boolean [1..1] = false",
      "description": "Указывает (через связанные обобщения), покрывают ли конкретные классификаторы набора общий классификатор. Если isCovering равен true, каждый экземпляр общего классификатора является также экземпляром хотя бы одного из конкретных классификаторов набора. Если isCovering равен false, существует один или несколько экземпляров общего классификатора, не являющихся экземплярами ни одного из конкретных классификаторов набора.",
      "type": "Boolean",
      "association": null,
      "owner": "GeneralizationSet",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "GeneralizationSet-isDisjoint",
      "name": "isDisjoint",
      "signature": "isDisjoint : Boolean [1..1] = false",
      "description": "Указывает, имеют ли конкретные классификаторы в отношении обобщения общие экземпляры. Если isDisjoint равен true, конкретные классификаторы данного набора не имеют общих элементов, то есть их пересечение пусто. Если isDisjoint равен false, они имеют один или несколько общих элементов, то есть их пересечение не пусто.",
      "type": "Boolean",
      "association": null,
      "owner": "GeneralizationSet",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "GeneralizationSet-powertype",
      "name": "powertype",
      "signature": "powertype : Classifier [0..1]",
      "description": "Обозначает классификатор, определённый как powertype для связанного набора обобщений, если он есть.",
      "type": "Classifier",
      "association": "A_powertypeExtent_powertype",
      "owner": "GeneralizationSet",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "PackageableElement-visibility",
      "name": "visibility",
      "signature": "visibility : VisibilityKind [0..1] = public {redefines visibility}",
      "description": "Видимость элемента; при владении пространством имён она обязательна.",
      "type": "VisibilityKind",
      "association": null,
      "owner": "PackageableElement",
      "subsets": [],
      "redefines": [
        "visibility"
      ],
      "subsettedProperties": [],
      "redefinedProperties": [
        {
          "id": "NamedElement-visibility",
          "name": "visibility",
          "type": "VisibilityKind",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        }
      ],
      "inheritedFrom": "PackageableElement"
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
      "id": "ParameterableElement-templateParameter",
      "name": "templateParameter",
      "signature": "templateParameter : TemplateParameter [0..1]",
      "description": "Параметр шаблона, представляющий этот элемент как формальный параметр.",
      "type": "TemplateParameter",
      "association": "A_parameteredElement_templateParameter",
      "owner": "ParameterableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "ParameterableElement"
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
    }
  ]
};
