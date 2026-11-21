window.UML_XMI_DATA.classes["InstanceSpecification"] = {
  "direct": [
    {
      "id": "InstanceSpecification-classifier",
      "name": "classifier",
      "signature": "classifier : Classifier [0..*]",
      "description": "Классификатор или классификаторы представленного экземпляра. Если задано несколько классификаторов, экземпляр классифицирован всеми ими.",
      "type": "Classifier",
      "association": "A_classifier_instanceSpecification",
      "owner": "InstanceSpecification",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "InstanceSpecification-slot",
      "name": "slot",
      "signature": "slot : Slot [0..*] {subsets ownedElement}",
      "description": "Слот, задающий значение или значения структурной характеристики экземпляра. Спецификация экземпляра может иметь один слот на каждую структурную характеристику своих классификаторов, включая унаследованные характеристики. Необязательно моделировать слот для каждой структурной характеристики; в этом случае спецификация экземпляра является частичным описанием.",
      "type": "Slot",
      "association": "A_slot_owningInstance",
      "owner": "InstanceSpecification",
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
      "id": "InstanceSpecification-specification",
      "name": "specification",
      "signature": "specification : ValueSpecification [0..1] {subsets ownedElement}",
      "description": "Спецификация способа вычисления, вывода или построения экземпляра.",
      "type": "ValueSpecification",
      "association": "A_specification_owningInstanceSpec",
      "owner": "InstanceSpecification",
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
      "id": "DeploymentTarget-deployedElement",
      "name": "deployedElement",
      "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
      "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
      "type": "PackageableElement",
      "association": "A_deployedElement_deploymentTarget",
      "owner": "DeploymentTarget",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "DeploymentTarget"
    },
    {
      "id": "DeploymentTarget-deployment",
      "name": "deployment",
      "signature": "deployment : Deployment [0..*] {subsets ownedElement, clientDependency}",
      "description": "Множество развёртываний для этой цели развёртывания.",
      "type": "Deployment",
      "association": "A_deployment_location",
      "owner": "DeploymentTarget",
      "subsets": [
        "ownedElement",
        "clientDependency"
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
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "type": "Dependency",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "DeploymentTarget"
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
    }
  ]
};
