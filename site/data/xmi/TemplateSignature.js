window.UML_XMI_DATA.classes["TemplateSignature"] = {
  "direct": [
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
      "redefinedProperties": []
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
      "redefinedProperties": []
    },
    {
      "id": "TemplateSignature-template",
      "name": "template",
      "signature": "template : TemplateableElement [1..1] {subsets owner}",
      "description": "Элемент-шаблон, владеющий подписью.",
      "type": "TemplateableElement",
      "association": "A_ownedTemplateSignature_template",
      "owner": "TemplateSignature",
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
