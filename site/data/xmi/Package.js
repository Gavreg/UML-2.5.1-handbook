window.UML_XMI_DATA.classes["Package"] = {
  "direct": [
    {
      "id": "Package-URI",
      "name": "URI",
      "signature": "URI : String [0..1]",
      "description": "Идентификатор пакета, соответствующий правилам синтаксиса URI.",
      "type": "String",
      "association": null,
      "owner": "Package",
      "subsets": [],
      "redefines": [],
      "subsettedProperties": [],
      "redefinedProperties": []
    },
    {
      "id": "Package-nestedPackage",
      "name": "nestedPackage",
      "signature": "/nestedPackage : Package [0..*] {subsets packagedElement}",
      "description": "Вложенные пакеты, принадлежащие этому пакету.",
      "type": "Package",
      "association": "A_nestedPackage_nestingPackage",
      "owner": "Package",
      "subsets": [
        "packagedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "type": "PackageableElement",
          "owner": {
            "type": "classifier",
            "name": "Package"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Package-nestingPackage",
      "name": "nestingPackage",
      "signature": "nestingPackage : Package [0..1] {subsets owningPackage}",
      "description": "Пакет, владеющий этим пакетом.",
      "type": "Package",
      "association": "A_nestedPackage_nestingPackage",
      "owner": "Package",
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
      "redefinedProperties": []
    },
    {
      "id": "Package-ownedStereotype",
      "name": "ownedStereotype",
      "signature": "/ownedStereotype : Stereotype [0..*] {readOnly, subsets packagedElement}",
      "description": "Стереотипы, принадлежащие пакету.",
      "type": "Stereotype",
      "association": "A_ownedStereotype_owningPackage",
      "owner": "Package",
      "subsets": [
        "packagedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "type": "PackageableElement",
          "owner": {
            "type": "classifier",
            "name": "Package"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Package-ownedType",
      "name": "ownedType",
      "signature": "/ownedType : Type [0..*] {subsets packagedElement}",
      "description": "Типы, принадлежащие пакету.",
      "type": "Type",
      "association": "A_ownedType_package",
      "owner": "Package",
      "subsets": [
        "packagedElement"
      ],
      "redefines": [],
      "subsettedProperties": [
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "type": "PackageableElement",
          "owner": {
            "type": "classifier",
            "name": "Package"
          }
        }
      ],
      "redefinedProperties": []
    },
    {
      "id": "Package-packageMerge",
      "name": "packageMerge",
      "signature": "packageMerge : PackageMerge [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Операции слияния пакетов, принадлежащие этому пакету.",
      "type": "PackageMerge",
      "association": "A_packageMerge_receivingPackage",
      "owner": "Package",
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
      "id": "Package-packagedElement",
      "name": "packagedElement",
      "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
      "description": "Упаковываемые элементы, принадлежащие пакету.",
      "type": "PackageableElement",
      "association": "A_packagedElement_owningPackage",
      "owner": "Package",
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
      "id": "Package-profileApplication",
      "name": "profileApplication",
      "signature": "profileApplication : ProfileApplication [0..*] {subsets directedRelationship, ownedElement}",
      "description": "Применения профилей, показывающие, какие профили применены к пакету.",
      "type": "ProfileApplication",
      "association": "A_profileApplication_applyingPackage",
      "owner": "Package",
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
    }
  ],
  "inherited": [
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
      "id": "TemplateableElement-ownedTemplateSignature",
      "name": "ownedTemplateSignature",
      "signature": "ownedTemplateSignature : TemplateSignature [0..1] {subsets ownedElement}",
      "description": "Необязательная подпись, делающая элемент шаблоном.",
      "type": "TemplateSignature",
      "association": "A_ownedTemplateSignature_template",
      "owner": "TemplateableElement",
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
      "inheritedFrom": "TemplateableElement"
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
    }
  ]
};
