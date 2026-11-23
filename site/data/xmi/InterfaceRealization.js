window.UML_XMI_DATA.classes["InterfaceRealization"] = {
  "direct": [
    {
      "id": "InterfaceRealization-contract",
      "name": "contract",
      "signature": "contract : Interface [1..1] {subsets supplier}",
      "description": "Интерфейс, задающий контракт соответствия.",
      "type": "Interface",
      "association": "A_contract_interfaceRealization",
      "owner": "InterfaceRealization",
      "subsets": [
        "supplier"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Dependency"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "InterfaceRealization-implementingClassifier",
      "name": "implementingClassifier",
      "signature": "implementingClassifier : BehavioredClassifier [1..1] {subsets client, owner}",
      "description": "Классификатор с поведением, владеющий этой реализацией интерфейса и реализующий интерфейс, на который она ссылается.",
      "type": "BehavioredClassifier",
      "association": "A_interfaceRealization_implementingClassifier",
      "owner": "InterfaceRealization",
      "subsets": [
        "client",
        "owner"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Dependency-client",
          "name": "client",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Dependency"
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
      "id": "Abstraction-mapping",
      "name": "mapping",
      "signature": "mapping : OpaqueExpression [0..1] {subsets ownedElement}",
      "description": "Необязательное выражение, уточняющее отношение между поставщиками и клиентами.",
      "type": "OpaqueExpression",
      "association": "A_mapping_abstraction",
      "owner": "Abstraction",
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
      "inheritedFrom": "Abstraction"
    },
    {
      "id": "Dependency-client",
      "name": "client",
      "signature": "client : NamedElement [1..*] {subsets source}",
      "description": "Элементы, зависящие от поставщиков.",
      "type": "NamedElement",
      "association": "A_clientDependency_client",
      "owner": "Dependency",
      "subsets": [
        "source"
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
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Dependency"
    },
    {
      "id": "Dependency-supplier",
      "name": "supplier",
      "signature": "supplier : NamedElement [1..*] {subsets target}",
      "description": "Элементы, от которых зависят клиенты.",
      "type": "NamedElement",
      "association": "A_supplier_supplierDependency",
      "owner": "Dependency",
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
      "redefinedProperties": [],
      "inheritedFrom": "Dependency"
    },
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
    },
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
