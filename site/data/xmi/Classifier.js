window.UML_XMI_DATA.classes["Classifier"] = {
  "direct": [
    {
      "id": "Classifier-attribute",
      "name": "attribute",
      "signature": "/attribute : Property [0..*] {ordered, readOnly, union, subsets redefinableElement, feature}",
      "description": "Все свойства, являющиеся прямыми (то есть не унаследованными и не импортированными) атрибутами классификатора.",
      "type": "Property",
      "association": "A_attribute_classifier",
      "owner": "Classifier",
      "subsets": [
        "redefinableElement",
        "feature"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_redefinitionContext_redefinableElement-redefinableElement",
          "name": "redefinableElement",
          "type": "RedefinableElement",
          "owner": {
            "type": "association",
            "name": "A_redefinitionContext_redefinableElement"
          }
        },
        {
          "id": "Classifier-feature",
          "name": "feature",
          "type": "Feature",
          "owner": {
            "type": "classifier",
            "name": "Classifier"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-collaborationUse",
      "name": "collaborationUse",
      "signature": "collaborationUse : CollaborationUse [0..*] {subsets ownedElement}",
      "description": "Использования кооперации, принадлежащие классификатору.",
      "type": "CollaborationUse",
      "association": "A_collaborationUse_classifier",
      "owner": "Classifier",
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
      "id": "Classifier-feature",
      "name": "feature",
      "signature": "/feature : Feature [0..*] {readOnly, union, subsets member}",
      "description": "Задаёт каждую характеристику, непосредственно определённую в классификаторе. Члены классификатора типа Feature могут в неё не входить, например унаследованные характеристики.",
      "type": "Feature",
      "association": "A_feature_featuringClassifier",
      "owner": "Classifier",
      "subsets": [
        "member"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-general",
      "name": "general",
      "signature": "/general : Classifier [0..*]",
      "description": "Обобщающие классификаторы для этого классификатора.",
      "type": "Classifier",
      "association": "A_general_classifier",
      "owner": "Classifier",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-generalization",
      "name": "generalization",
      "signature": "generalization : Generalization [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Отношения обобщения этого классификатора. Эти обобщения ведут к более общим классификаторам в иерархии обобщений.",
      "type": "Generalization",
      "association": "A_generalization_specific",
      "owner": "Classifier",
      "subsets": [
        "directedRelationship",
        "ownedElement"
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
        },
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
      "id": "Classifier-inheritedMember",
      "name": "inheritedMember",
      "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
      "description": "Элементы, унаследованные классификатором от общих классификаторов.",
      "type": "NamedElement",
      "association": "A_inheritedMember_inheritingClassifier",
      "owner": "Classifier",
      "subsets": [
        "member"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-isAbstract",
      "name": "isAbstract",
      "signature": "isAbstract : Boolean [1..1] = false",
      "description": "Если true, Classifier может быть создан только созданием одной из его специализаций. Абстрактный Classifier предназначен для использования другими классификаторами, например как цель ассоциаций или обобщений.",
      "type": "Boolean",
      "association": null,
      "owner": "Classifier",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-isFinalSpecialization",
      "name": "isFinalSpecialization",
      "signature": "isFinalSpecialization : Boolean [1..1] = false",
      "description": "Если true, Classifier не может иметь специализаций.",
      "type": "Boolean",
      "association": null,
      "owner": "Classifier",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-ownedTemplateSignature",
      "name": "ownedTemplateSignature",
      "signature": "ownedTemplateSignature : RedefinableTemplateSignature [0..1] {subsets redefinableElement, redefines ownedTemplateSignature}",
      "description": "Необязательная переопределяемая подпись шаблона, задающая формальные параметры шаблона.",
      "type": "RedefinableTemplateSignature",
      "association": "A_ownedTemplateSignature_classifier",
      "owner": "Classifier",
      "subsets": [
        "redefinableElement"
      ],
      "redefines": [
        "ownedTemplateSignature"
      ],
      "subsettedProperties": [
        {
          "id": "A_redefinitionContext_redefinableElement-redefinableElement",
          "name": "redefinableElement",
          "type": "RedefinableElement",
          "owner": {
            "type": "association",
            "name": "A_redefinitionContext_redefinableElement"
          }
        }
      ],
      "redefinedProperties": [
        {
          "id": "TemplateableElement-ownedTemplateSignature",
          "name": "ownedTemplateSignature",
          "type": "TemplateSignature",
          "owner": {
            "type": "classifier",
            "name": "TemplateableElement"
          }
        }
      ]
    },
    {
      "id": "Classifier-ownedUseCase",
      "name": "ownedUseCase",
      "signature": "ownedUseCase : UseCase [0..*] {subsets ownedMember}",
      "description": "Варианты использования, принадлежащие этому классификатору.",
      "type": "UseCase",
      "association": "A_ownedUseCase_classifier",
      "owner": "Classifier",
      "subsets": [
        "ownedMember"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-powertypeExtent",
      "name": "powertypeExtent",
      "signature": "powertypeExtent : GeneralizationSet [0..*]",
      "description": "Наборы обобщений, для которых этот классификатор является powertype.",
      "type": "GeneralizationSet",
      "association": "A_powertypeExtent_powertype",
      "owner": "Classifier",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-redefinedClassifier",
      "name": "redefinedClassifier",
      "signature": "redefinedClassifier : Classifier [0..*] {subsets redefinedElement}",
      "description": "Классификаторы, переопределяемые этим классификатором.",
      "type": "Classifier",
      "association": "A_redefinedClassifier_classifier",
      "owner": "Classifier",
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
      "id": "Classifier-representation",
      "name": "representation",
      "signature": "representation : CollaborationUse [0..1] {subsets collaborationUse}",
      "description": "Использование кооперации, указывающее кооперацию, которая представляет этот классификатор.",
      "type": "CollaborationUse",
      "association": "A_representation_classifier",
      "owner": "Classifier",
      "subsets": [
        "collaborationUse"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Classifier-collaborationUse",
          "name": "collaborationUse",
          "type": "CollaborationUse",
          "owner": {
            "type": "classifier",
            "name": "Classifier"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Classifier-substitution",
      "name": "substitution",
      "signature": "substitution : Substitution [0..*] {subsets ownedElement, clientDependency}",
      "description": "Подстановки, принадлежащие этому классификатору.",
      "type": "Substitution",
      "association": "A_substitution_substitutingClassifier",
      "owner": "Classifier",
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
      "redefinedProperties": []
    },
    {
      "id": "Classifier-templateParameter",
      "name": "templateParameter",
      "signature": "templateParameter : ClassifierTemplateParameter [0..1] {redefines templateParameter}",
      "description": "Параметр шаблона классификатора, который предоставляет этот элемент как формальный параметр.",
      "type": "ClassifierTemplateParameter",
      "association": "A_classifier_templateParameter_parameteredElement",
      "owner": "Classifier",
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
      ]
    },
    {
      "id": "Classifier-useCase",
      "name": "useCase",
      "signature": "useCase : UseCase [0..*]",
      "description": "Варианты использования, субъектом которых является этот классификатор.",
      "type": "UseCase",
      "association": "A_subject_useCase",
      "owner": "Classifier",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    }
  ],
  "inherited": [
    {
      "id": "Namespace-elementImport",
      "name": "elementImport",
      "signature": "elementImport : ElementImport [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Импорты отдельных элементов, принадлежащие пространству имён.",
      "type": "ElementImport",
      "association": "A_elementImport_importingNamespace",
      "owner": "Namespace",
      "subsets": [
        "directedRelationship",
        "ownedElement"
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
        },
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
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-importedMember",
      "name": "importedMember",
      "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
      "description": "Члены, добавленные импортом элемента или пакета.",
      "type": "PackageableElement",
      "association": "A_importedMember_namespace",
      "owner": "Namespace",
      "subsets": [
        "member"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-member",
      "name": "member",
      "signature": "/member : NamedElement [0..*] {readOnly, union}",
      "description": "Все различимые по имени члены пространства имён.",
      "type": "NamedElement",
      "association": "A_member_memberNamespace",
      "owner": "Namespace",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-ownedMember",
      "name": "ownedMember",
      "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
      "description": "Члены, непосредственно принадлежащие пространству имён.",
      "type": "NamedElement",
      "association": "A_ownedMember_namespace",
      "owner": "Namespace",
      "subsets": [
        "ownedElement",
        "member"
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
          "id": "Namespace-member",
          "name": "member",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-ownedRule",
      "name": "ownedRule",
      "signature": "ownedRule : Constraint [0..*] {subsets ownedMember}",
      "description": "Ограничения, принадлежащие пространству имён.",
      "type": "Constraint",
      "association": "A_ownedRule_context",
      "owner": "Namespace",
      "subsets": [
        "ownedMember"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "type": "NamedElement",
          "owner": {
            "type": "classifier",
            "name": "Namespace"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Namespace"
    },
    {
      "id": "Namespace-packageImport",
      "name": "packageImport",
      "signature": "packageImport : PackageImport [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Импорты пакетов, принадлежащие пространству имён.",
      "type": "PackageImport",
      "association": "A_packageImport_importingNamespace",
      "owner": "Namespace",
      "subsets": [
        "directedRelationship",
        "ownedElement"
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
        },
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
      "inheritedFrom": "Namespace"
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
      "id": "Type-package",
      "name": "package",
      "signature": "package : Package [0..1] {subsets owningPackage}",
      "description": "Пакет, владеющий типом, если он задан.",
      "type": "Package",
      "association": "A_ownedType_package",
      "owner": "Type",
      "subsets": [
        "owningPackage"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "A_packagedElement_owningPackage-owningPackage",
          "name": "owningPackage",
          "type": "Package",
          "owner": {
            "type": "association",
            "name": "A_packagedElement_owningPackage"
          }
        }
      ],
      "redefinedProperties": [],
      "inheritedFrom": "Type"
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
      "id": "TemplateableElement-templateBinding",
      "name": "templateBinding",
      "signature": "templateBinding : TemplateBinding [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Необязательные привязки элемента к шаблонам.",
      "type": "TemplateBinding",
      "association": "A_templateBinding_boundElement",
      "owner": "TemplateableElement",
      "subsets": [
        "directedRelationship",
        "ownedElement"
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
        },
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
      "inheritedFrom": "TemplateableElement"
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
