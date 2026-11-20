window.UML_XMI_DATA.classes["TemplateParameterSubstitution"] = {
  "direct": [
    {
      "id": "TemplateParameterSubstitution-actual",
      "name": "actual",
      "signature": "actual : ParameterableElement [1..1]",
      "description": "Фактический параметр подстановки.",
      "type": "ParameterableElement",
      "association": "A_actual_templateParameterSubstitution",
      "owner": "TemplateParameterSubstitution",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameterSubstitution-formal",
      "name": "formal",
      "signature": "formal : TemplateParameter [1..1]",
      "description": "Соответствующий формальный параметр.",
      "type": "TemplateParameter",
      "association": "A_formal_templateParameterSubstitution",
      "owner": "TemplateParameterSubstitution",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameterSubstitution-ownedActual",
      "name": "ownedActual",
      "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
      "description": "Принадлежащий подстановке фактический параметр.",
      "type": "ParameterableElement",
      "association": "A_ownedActual_owningTemplateParameterSubstitution",
      "owner": "TemplateParameterSubstitution",
      "subsets": [
        "ownedElement",
        "actual"
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
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "type": "ParameterableElement",
          "owner": {
            "type": "classifier",
            "name": "TemplateParameterSubstitution"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameterSubstitution-templateBinding",
      "name": "templateBinding",
      "signature": "templateBinding : TemplateBinding [1..1] {subsets owner}",
      "description": "Привязка, владеющая подстановкой.",
      "type": "TemplateBinding",
      "association": "A_parameterSubstitution_templateBinding",
      "owner": "TemplateParameterSubstitution",
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
