window.UML_XMI_DATA.classes["DirectedRelationship"] = {
  "direct": [
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
      "redefinedProperties": []
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
      "redefinedProperties": []
    }
  ],
  "inherited": [
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
