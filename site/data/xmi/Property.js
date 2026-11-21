window.UML_XMI_DATA.classes["Property"] = {
  "direct": [
    {
      "id": "Property-aggregation",
      "name": "aggregation",
      "signature": "aggregation : AggregationKind [1..1] = none",
      "description": "Задаёт вид агрегирования, применимый к свойству.",
      "type": "AggregationKind",
      "association": null,
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-association",
      "name": "association",
      "signature": "association : Association [0..1] {subsets memberNamespace}",
      "description": "Ассоциация, членом которой является это свойство, если есть.",
      "type": "Association",
      "association": "A_memberEnd_association",
      "owner": "Property",
      "subsets": [
        "memberNamespace"
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
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-associationEnd",
      "name": "associationEnd",
      "signature": "associationEnd : Property [0..1] {subsets owner}",
      "description": "Обозначает необязательный конец ассоциации, владеющий атрибутом-квалификатором.",
      "type": "Property",
      "association": "A_qualifier_associationEnd",
      "owner": "Property",
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
      "id": "Property-class",
      "name": "class",
      "signature": "class : Class [0..1] {subsets classifier, structuredClassifier, namespace}",
      "description": "Класс, владеющий этим свойством, если есть.",
      "type": "Class",
      "association": "A_ownedAttribute_class",
      "owner": "Property",
      "subsets": [
        "classifier",
        "structuredClassifier",
        "namespace"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_attribute_classifier-classifier",
          "name": "classifier",
          "type": "Classifier",
          "owner": {
            "type": "association",
            "name": "A_attribute_classifier"
          }
        },
        {
          "id": "A_ownedAttribute_structuredClassifier-structuredClassifier",
          "name": "structuredClassifier",
          "type": "StructuredClassifier",
          "owner": {
            "type": "association",
            "name": "A_ownedAttribute_structuredClassifier"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-datatype",
      "name": "datatype",
      "signature": "datatype : DataType [0..1] {subsets classifier, namespace}",
      "description": "Тип данных, владеющий этим свойством, если есть.",
      "type": "DataType",
      "association": "A_ownedAttribute_datatype",
      "owner": "Property",
      "subsets": [
        "classifier",
        "namespace"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_attribute_classifier-classifier",
          "name": "classifier",
          "type": "Classifier",
          "owner": {
            "type": "association",
            "name": "A_attribute_classifier"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-defaultValue",
      "name": "defaultValue",
      "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
      "description": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
      "type": "ValueSpecification",
      "association": "A_defaultValue_owningProperty",
      "owner": "Property",
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
      "id": "Property-interface",
      "name": "interface",
      "signature": "interface : Interface [0..1] {subsets classifier, namespace}",
      "description": "Интерфейс, владеющий этим свойством, если есть.",
      "type": "Interface",
      "association": "A_ownedAttribute_interface",
      "owner": "Property",
      "subsets": [
        "classifier",
        "namespace"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_attribute_classifier-classifier",
          "name": "classifier",
          "type": "Classifier",
          "owner": {
            "type": "association",
            "name": "A_attribute_classifier"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-isComposite",
      "name": "isComposite",
      "signature": "/isComposite : Boolean [1..1] = false",
      "description": "Если isComposite равен true, объект, содержащий атрибут, является контейнером для объекта или значения, содержащихся в атрибуте. Это выводимое значение, показывающее, является ли агрегирование свойства композицией.",
      "type": "Boolean",
      "association": null,
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-isDerived",
      "name": "isDerived",
      "signature": "isDerived : Boolean [1..1] = false",
      "description": "Указывает, является ли свойство выводимым, то есть могут ли его значения вычисляться из другой информации.",
      "type": "Boolean",
      "association": null,
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-isDerivedUnion",
      "name": "isDerivedUnion",
      "signature": "isDerivedUnion : Boolean [1..1] = false",
      "description": "Указывает, выводится ли свойство как объединение всех свойств, которые ограничены быть его подмножествами.",
      "type": "Boolean",
      "association": null,
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-isID",
      "name": "isID",
      "signature": "isID : Boolean [1..1] = false",
      "description": "True указывает, что это свойство может использоваться для однозначной идентификации экземпляра содержащего его класса.",
      "type": "Boolean",
      "association": null,
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-opposite",
      "name": "opposite",
      "signature": "/opposite : Property [0..1]",
      "description": "Когда свойство является одним из концов бинарной ассоциации, даёт другой её конец.",
      "type": "Property",
      "association": "A_opposite_property",
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Property-owningAssociation",
      "name": "owningAssociation",
      "signature": "owningAssociation : Association [0..1] {subsets featuringClassifier, namespace, association, redefinitionContext}",
      "description": "Владеющая ассоциация этого свойства, если есть.",
      "type": "Association",
      "association": "A_ownedEnd_owningAssociation",
      "owner": "Property",
      "subsets": [
        "featuringClassifier",
        "namespace",
        "association",
        "redefinitionContext"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Feature-featuringClassifier",
          "name": "featuringClassifier",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "Feature"
          }
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "type": "Namespace",
          "owner": {
            "type": "classifier",
            "name": "NamedElement"
          }
        },
        {
          "id": "Property-association",
          "name": "association",
          "type": "Association",
          "owner": {
            "type": "classifier",
            "name": "Property"
          }
        },
        {
          "id": "RedefinableElement-redefinitionContext",
          "name": "redefinitionContext",
          "type": "Classifier",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-qualifier",
      "name": "qualifier",
      "signature": "qualifier : Property [0..*] {ordered, subsets ownedElement}",
      "description": "Необязательный упорядоченный список атрибутов-квалификаторов конца.",
      "type": "Property",
      "association": "A_qualifier_associationEnd",
      "owner": "Property",
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
      "id": "Property-redefinedProperty",
      "name": "redefinedProperty",
      "signature": "redefinedProperty : Property [0..*] {subsets redefinedElement}",
      "description": "Свойства, переопределяемые этим свойством, если есть.",
      "type": "Property",
      "association": "A_redefinedProperty_property",
      "owner": "Property",
      "subsets": [
        "redefinedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "RedefinableElement-redefinedElement",
          "name": "redefinedElement",
          "type": "RedefinableElement",
          "owner": {
            "type": "classifier",
            "name": "RedefinableElement"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Property-subsettedProperty",
      "name": "subsettedProperty",
      "signature": "subsettedProperty : Property [0..*]",
      "description": "Свойства, подмножеством которых это свойство ограничено быть, если есть.",
      "type": "Property",
      "association": "A_subsettedProperty_property",
      "owner": "Property",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "ConnectableElement-end",
      "name": "end",
      "signature": "/end : ConnectorEnd [0..*] {readOnly}",
      "description": "Множество концов соединителей, присоединённых к этому соединяемому элементу.",
      "type": "ConnectorEnd",
      "association": "A_end_role",
      "owner": "ConnectableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "ConnectableElement"
    },
    {
      "id": "ConnectableElement-templateParameter",
      "name": "templateParameter",
      "signature": "templateParameter : ConnectableElementTemplateParameter [0..1] {redefines templateParameter}",
      "description": "Параметр шаблона соединяемого элемента для этого параметра ConnectableElement.",
      "type": "ConnectableElementTemplateParameter",
      "association": "A_connectableElement_templateParameter_parameteredElement",
      "owner": "ConnectableElement",
      "subsets": [],
      "redefines": [
        "templateParameter"
      ],
      "subsettedProperties": [],
      "redefinedProperties": [
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
      "inheritedFrom": "ConnectableElement"
    },
    {
      "id": "TypedElement-type",
      "name": "type",
      "signature": "type : Type [0..1]",
      "description": "Тип элемента.",
      "type": "Type",
      "association": "A_type_typedElement",
      "owner": "TypedElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "TypedElement"
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
      "id": "NamedElement-visibility",
      "name": "visibility",
      "signature": "visibility : VisibilityKind [0..1]",
      "description": "Видимость элемента за пределами владеющего пространства имён.",
      "type": "VisibilityKind",
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
      "id": "StructuralFeature-isReadOnly",
      "name": "isReadOnly",
      "signature": "isReadOnly : Boolean [1..1] = false",
      "description": "Если isReadOnly равен true, структурную характеристику нельзя изменять после инициализации.",
      "type": "Boolean",
      "association": null,
      "owner": "StructuralFeature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "StructuralFeature"
    },
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
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
      "redefinedProperties": [],
      "inheritedFrom": "MultiplicityElement"
    },
    {
      "id": "Feature-featuringClassifier",
      "name": "featuringClassifier",
      "signature": "/featuringClassifier : Classifier [0..1] {readOnly, union, subsets memberNamespace}",
      "description": "Классификаторы, характеристикой которых является эта Feature.",
      "type": "Classifier",
      "association": "A_feature_featuringClassifier",
      "owner": "Feature",
      "subsets": [
        "memberNamespace"
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
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Feature"
    },
    {
      "id": "Feature-isStatic",
      "name": "isStatic",
      "signature": "isStatic : Boolean [1..1] = false",
      "description": "Указывает, характеризует ли эта характеристика отдельные экземпляры, классифицированные классификатором (false), или сам классификатор (true).",
      "type": "Boolean",
      "association": null,
      "owner": "Feature",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Feature"
    },
    {
      "id": "RedefinableElement-isLeaf",
      "name": "isLeaf",
      "signature": "isLeaf : Boolean [1..1] = false",
      "description": "Указывает, возможно ли дальнейшее переопределение переопределяемого элемента. Если значение true, дальнейшее переопределение невозможно.",
      "type": "Boolean",
      "association": null,
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    },
    {
      "id": "RedefinableElement-redefinedElement",
      "name": "redefinedElement",
      "signature": "/redefinedElement : RedefinableElement [0..*] {readOnly, union}",
      "description": "Переопределяемые элементы, которые переопределяет этот элемент.",
      "type": "RedefinableElement",
      "association": "A_redefinedElement_redefinableElement",
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    },
    {
      "id": "RedefinableElement-redefinitionContext",
      "name": "redefinitionContext",
      "signature": "/redefinitionContext : Classifier [0..*] {readOnly, union}",
      "description": "Контексты, в которых этот элемент может быть переопределён.",
      "type": "Classifier",
      "association": "A_redefinitionContext_redefinableElement",
      "owner": "RedefinableElement",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "RedefinableElement"
    }
  ]
};
