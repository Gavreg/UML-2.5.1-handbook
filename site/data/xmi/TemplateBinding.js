window.UML_XMI_DATA.classes["TemplateBinding"] = {
  "direct": [
    {
      "id": "TemplateBinding-boundElement",
      "name": "boundElement",
      "signature": "boundElement : TemplateableElement [1..1] {subsets source, owner}",
      "description": "Элемент, к которому применяется привязка.",
      "type": "TemplateableElement",
      "association": "A_templateBinding_boundElement",
      "owner": "TemplateBinding",
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
    },
    {
      "id": "TemplateBinding-parameterSubstitution",
      "name": "parameterSubstitution",
      "signature": "parameterSubstitution : TemplateParameterSubstitution [0..*] {subsets ownedElement}",
      "description": "Подстановки параметров, принадлежащие привязке.",
      "type": "TemplateParameterSubstitution",
      "association": "A_parameterSubstitution_templateBinding",
      "owner": "TemplateBinding",
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
      "id": "TemplateBinding-signature",
      "name": "signature",
      "signature": "signature : TemplateSignature [1..1] {subsets target}",
      "description": "Подпись целевого шаблона.",
      "type": "TemplateSignature",
      "association": "A_signature_templateBinding",
      "owner": "TemplateBinding",
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
