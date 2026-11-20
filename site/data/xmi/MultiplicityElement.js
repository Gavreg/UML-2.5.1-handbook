window.UML_XMI_DATA.classes["MultiplicityElement"] = {
  "direct": [
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
      "redefinedProperties": []
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
