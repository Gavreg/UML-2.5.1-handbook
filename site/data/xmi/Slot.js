window.UML_XMI_DATA.classes["Slot"] = {
  "direct": [
    {
      "id": "Slot-definingFeature",
      "name": "definingFeature",
      "signature": "definingFeature : StructuralFeature [1..1]",
      "description": "Структурная характеристика, задающая значения, которые может хранить слот.",
      "type": "StructuralFeature",
      "association": "A_definingFeature_slot",
      "owner": "Slot",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Slot-owningInstance",
      "name": "owningInstance",
      "signature": "owningInstance : InstanceSpecification [1..1] {subsets owner}",
      "description": "Спецификация экземпляра, владеющая этим слотом.",
      "type": "InstanceSpecification",
      "association": "A_slot_owningInstance",
      "owner": "Slot",
      "subsets": [
        "owner"
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
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Slot-value",
      "name": "value",
      "signature": "value : ValueSpecification [0..*] {ordered, subsets ownedElement}",
      "description": "Значение или значения, хранящиеся в слоте.",
      "type": "ValueSpecification",
      "association": "A_value_owningSlot",
      "owner": "Slot",
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
    }
  ],
  "inherited": [
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
