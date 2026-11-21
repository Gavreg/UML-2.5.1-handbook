window.UML_XMI_DATA.classes["Generalization"] = {
  "direct": [
    {
      "id": "Generalization-general",
      "name": "general",
      "signature": "general : Classifier [1..1] {subsets target}",
      "description": "Общий классификатор в отношении обобщения.",
      "type": "Classifier",
      "association": "A_general_generalization",
      "owner": "Generalization",
      "subsets": [
        "target"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "DirectedRelationship"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Generalization-generalizationSet",
      "name": "generalizationSet",
      "signature": "generalizationSet : GeneralizationSet [0..*]",
      "description": "Наборы обобщений, членом которых является это обобщение. Обобщение может входить во множество наборов обобщений.",
      "type": "GeneralizationSet",
      "association": "A_generalizationSet_generalization",
      "owner": "Generalization",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Generalization-isSubstitutable",
      "name": "isSubstitutable",
      "signature": "isSubstitutable : Boolean [0..1] = true",
      "description": "Указывает, может ли конкретный классификатор использоваться везде, где может использоваться общий классификатор. Если true, сценарии выполнения конкретного классификатора должны быть надмножеством сценариев выполнения общего классификатора. Если false, такого ограничения на сценарии выполнения нет. Если не задано, моделировщик не указал, существует ли такое ограничение.",
      "type": "Boolean",
      "association": null,
      "owner": "Generalization",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Generalization-specific",
      "name": "specific",
      "signature": "specific : Classifier [1..1] {subsets source, owner}",
      "description": "Конкретный (специализирующий) классификатор в отношении обобщения.",
      "type": "Classifier",
      "association": "A_generalization_specific",
      "owner": "Generalization",
      "subsets": [
        "source",
        "owner"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "DirectedRelationship"
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
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "DirectedRelationship-source",
      "name": "source",
      "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
      "description": "Исходные элементы направленного отношения.",
      "type": "Element",
      "association": "A_source_directedRelationship",
      "owner": "DirectedRelationship",
      "subsets": [
        "relatedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Relationship"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "DirectedRelationship"
    },
    {
      "id": "DirectedRelationship-target",
      "name": "target",
      "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
      "description": "Целевые элементы направленного отношения.",
      "type": "Element",
      "association": "A_target_directedRelationship",
      "owner": "DirectedRelationship",
      "subsets": [
        "relatedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "type": "Element",
          "owner": {
            "type": "classifier",
            "name": "Relationship"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "DirectedRelationship"
    },
    {
      "id": "Relationship-relatedElement",
      "name": "relatedElement",
      "signature": "/relatedElement : Element [1..*] {readOnly, union}",
      "description": "Элементы, связанные этим отношением.",
      "type": "Element",
      "association": "A_relatedElement_relationship",
      "owner": "Relationship",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Relationship"
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
