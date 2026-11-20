window.UML_XMI_DATA.classes["TemplateParameter"] = {
  "direct": [
    {
      "id": "TemplateParameter-default",
      "name": "default",
      "signature": "default : ParameterableElement [0..1]",
      "description": "Значение формального параметра по умолчанию.",
      "type": "ParameterableElement",
      "association": "A_default_templateParameter",
      "owner": "TemplateParameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameter-ownedDefault",
      "name": "ownedDefault",
      "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
      "description": "Принадлежащее параметру значение по умолчанию.",
      "type": "ParameterableElement",
      "association": "A_ownedDefault_templateParameter",
      "owner": "TemplateParameter",
      "subsets": [
        "ownedElement",
        "default"
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
          "id": "TemplateParameter-default",
          "name": "default",
          "type": "ParameterableElement",
          "owner": {
            "type": "classifier",
            "name": "TemplateParameter"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameter-ownedParameteredElement",
      "name": "ownedParameteredElement",
      "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
      "description": "Принадлежащий параметру параметризуемый элемент.",
      "type": "ParameterableElement",
      "association": "A_ownedParameteredElement_owningTemplateParameter",
      "owner": "TemplateParameter",
      "subsets": [
        "ownedElement",
        "parameteredElement"
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
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "type": "ParameterableElement",
          "owner": {
            "type": "classifier",
            "name": "TemplateParameter"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameter-parameteredElement",
      "name": "parameteredElement",
      "signature": "parameteredElement : ParameterableElement [1..1]",
      "description": "Элемент, представленный параметром шаблона.",
      "type": "ParameterableElement",
      "association": "A_parameteredElement_templateParameter",
      "owner": "TemplateParameter",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "TemplateParameter-signature",
      "name": "signature",
      "signature": "signature : TemplateSignature [1..1] {subsets templateSignature, owner}",
      "description": "Подпись, владеющая параметром.",
      "type": "TemplateSignature",
      "association": "A_ownedParameter_signature",
      "owner": "TemplateParameter",
      "subsets": [
        "templateSignature",
        "owner"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_parameter_templateSignature-templateSignature",
          "name": "templateSignature",
          "type": "TemplateSignature",
          "owner": {
            "type": "association",
            "name": "A_parameter_templateSignature"
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
