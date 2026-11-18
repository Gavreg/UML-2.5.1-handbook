window.UML_XMI_DATA = {
  "source": "OMG UML 2.5.1, formal/17-12-05, UML.xmi (20161101)",
  "classes": {
    "Abstraction": {
      "direct": [
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
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "Comment": {
      "direct": [
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "owner": "Comment",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Comment-body",
          "name": "body",
          "signature": "body : String [0..1]",
          "description": "Текст комментария.",
          "type": "String",
          "association": null,
          "owner": "Comment",
          "subsets": [],
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Constraint": {
      "direct": [
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "owner": "Constraint",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Constraint-context",
          "name": "context",
          "signature": "context : Namespace [0..1] {subsets namespace}",
          "description": "Пространство имён, владеющее ограничением.",
          "type": "Namespace",
          "association": "A_ownedRule_context",
          "owner": "Constraint",
          "subsets": [
            "namespace"
          ],
          "redefines": []
        },
        {
          "id": "Constraint-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Условие, которое должно быть истинным для выполнения ограничения.",
          "type": "ValueSpecification",
          "association": "A_specification_owningConstraint",
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "Dependency": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "DirectedRelationship": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Element": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
        }
      ],
      "inherited": []
    },
    "ElementImport": {
      "direct": [
        {
          "id": "ElementImport-alias",
          "name": "alias",
          "signature": "alias : String [0..1]",
          "description": "Альтернативное имя импортированного элемента; по умолчанию псевдоним не используется.",
          "type": "String",
          "association": null,
          "owner": "ElementImport",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "owner": "ElementImport",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "ElementImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_elementImport_importingNamespace",
          "owner": "ElementImport",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "ElementImport-visibility",
          "name": "visibility",
          "signature": "visibility : VisibilityKind [1..1] = public",
          "description": "Видимость импортированного элемента внутри и за пределами импортирующего пространства имён.",
          "type": "VisibilityKind",
          "association": null,
          "owner": "ElementImport",
          "subsets": [],
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "MultiplicityElement": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "NamedElement": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Namespace": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "PackageImport": {
      "direct": [
        {
          "id": "PackageImport-importedPackage",
          "name": "importedPackage",
          "signature": "importedPackage : Package [1..1] {subsets target}",
          "description": "Пакет, члены которого импортируются.",
          "type": "Package",
          "association": "A_importedPackage_packageImport",
          "owner": "PackageImport",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "PackageImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_packageImport_importingNamespace",
          "owner": "PackageImport",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "PackageImport-visibility",
          "name": "visibility",
          "signature": "visibility : VisibilityKind [1..1] = public",
          "description": "Определяет, будут ли импортированные элементы видимы за пределами импортирующего пространства имён.",
          "type": "VisibilityKind",
          "association": null,
          "owner": "PackageImport",
          "subsets": [],
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "PackageableElement": {
      "direct": [
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
          ]
        }
      ],
      "inherited": [
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "ParameterableElement": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Realization": {
      "direct": [],
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "Relationship": {
      "direct": [
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "owner": "Relationship",
          "subsets": [],
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "TemplateBinding": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "TemplateParameter": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "TemplateParameterSubstitution": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "TemplateSignature": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "TemplateableElement": {
      "direct": [
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Type": {
      "direct": [
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
          "redefines": []
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "TypedElement": {
      "direct": [
        {
          "id": "TypedElement-type",
          "name": "type",
          "signature": "type : Type [0..1]",
          "description": "Тип элемента.",
          "type": "Type",
          "association": "A_type_typedElement",
          "owner": "TypedElement",
          "subsets": [],
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "Element"
        }
      ]
    },
    "Usage": {
      "direct": [],
      "inherited": [
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
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "Expression": {
      "direct": [
        {
          "id": "Expression-operand",
          "name": "operand",
          "signature": "operand : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Упорядоченная последовательность спецификаций значений-операндов.",
          "type": "ValueSpecification",
          "association": "A_operand_expression",
          "owner": "Expression",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Expression-symbol",
          "name": "symbol",
          "signature": "symbol : String [0..1]",
          "description": "Символ, связанный с этим узлом дерева выражения.",
          "type": "String",
          "association": null,
          "owner": "Expression",
          "subsets": [],
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "ParameterableElement"
        }
      ]
    },
    "OpaqueExpression": {
      "direct": [
        {
          "id": "OpaqueExpression-behavior",
          "name": "behavior",
          "signature": "behavior : Behavior [0..1]",
          "description": "Поведение UML, задающее вычисление выражения.",
          "type": "Behavior",
          "association": "A_behavior_opaqueExpression",
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "OpaqueExpression-body",
          "name": "body",
          "signature": "body : String [0..*] {ordered, nonunique}",
          "description": "Текстовое определение поведения выражения, возможно на нескольких языках.",
          "type": "String",
          "association": null,
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "OpaqueExpression-language",
          "name": "language",
          "signature": "language : String [0..*] {ordered}",
          "description": "Языки текстовых определений; порядок языков соответствует порядку строк body. Если языки не указаны, они могут следовать из выражения или контекста.",
          "type": "String",
          "association": null,
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "OpaqueExpression-result",
          "name": "result",
          "signature": "/result : Parameter [0..1] {readOnly}",
          "description": "Единственный возвращаемый параметр поведения, значения которого являются результатом вычисления выражения.",
          "type": "Parameter",
          "association": "A_result_opaqueExpression",
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "ParameterableElement"
        }
      ]
    },
    "StringExpression": {
      "direct": [
        {
          "id": "StringExpression-owningExpression",
          "name": "owningExpression",
          "signature": "owningExpression : StringExpression [0..1] {subsets owner}",
          "description": "Строковое выражение, частью которого является данное подвыражение.",
          "type": "StringExpression",
          "association": "A_subExpression_owningExpression",
          "owner": "StringExpression",
          "subsets": [
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "StringExpression-subExpression",
          "name": "subExpression",
          "signature": "subExpression : StringExpression [0..*] {ordered, subsets ownedElement}",
          "description": "Строковые подвыражения, образующие данное выражение.",
          "type": "StringExpression",
          "association": "A_subExpression_owningExpression",
          "owner": "StringExpression",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        }
      ],
      "inherited": [
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
          "inheritedFrom": "TemplateableElement"
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
          "inheritedFrom": "Element"
        },
        {
          "id": "Expression-operand",
          "name": "operand",
          "signature": "operand : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Упорядоченная последовательность спецификаций значений-операндов.",
          "type": "ValueSpecification",
          "association": "A_operand_expression",
          "owner": "Expression",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Expression"
        },
        {
          "id": "Expression-symbol",
          "name": "symbol",
          "signature": "symbol : String [0..1]",
          "description": "Символ, связанный с этим узлом дерева выражения.",
          "type": "String",
          "association": null,
          "owner": "Expression",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Expression"
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
          "inheritedFrom": "NamedElement"
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
          "inheritedFrom": "ParameterableElement"
        }
      ]
    },
    "ValueSpecification": {
      "direct": [],
      "inherited": [
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
          "inheritedFrom": "ParameterableElement"
        }
      ]
    },
    "Package": {
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "redefines": []
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
          "inheritedFrom": "Namespace"
        }
      ]
    }
  },
  "associations": {
    "A_actual_templateParameterSubstitution": {
      "ends": [
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "owner": "A_actual_templateParameterSubstitution",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_actual_templateParameterSubstitution-templateParameterSubstitution",
          "name": "templateParameterSubstitution",
          "signature": "templateParameterSubstitution : TemplateParameterSubstitution [0..*]",
          "description": "Подстановки, в которых элемент выступает фактическим параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_actual_templateParameterSubstitution",
          "owner": "A_actual_templateParameterSubstitution",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_annotatedElement_comment": {
      "ends": [
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "owner": "A_annotatedElement_comment",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_annotatedElement_comment-comment",
          "name": "comment",
          "signature": "comment : Comment [0..*]",
          "description": "Комментарии, присоединённые к элементу.",
          "type": "Comment",
          "association": "A_annotatedElement_comment",
          "owner": "A_annotatedElement_comment",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_clientDependency_client": {
      "ends": [
        {
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, в которых элемент выступает клиентом.",
          "type": "Dependency",
          "association": "A_clientDependency_client",
          "owner": "A_clientDependency_client",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": []
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "owner": "A_clientDependency_client",
          "subsets": [
            "source"
          ],
          "redefines": []
        }
      ]
    },
    "A_constrainedElement_constraint": {
      "ends": [
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "owner": "A_constrainedElement_constraint",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_constrainedElement_constraint-constraint",
          "name": "constraint",
          "signature": "constraint : Constraint [0..*]",
          "description": "Ограничения, применяемые к элементу.",
          "type": "Constraint",
          "association": "A_constrainedElement_constraint",
          "owner": "A_constrainedElement_constraint",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_default_templateParameter": {
      "ends": [
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "owner": "A_default_templateParameter",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_default_templateParameter-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : TemplateParameter [0..*]",
          "description": "Параметры шаблона, для которых элемент задан как значение по умолчанию.",
          "type": "TemplateParameter",
          "association": "A_default_templateParameter",
          "owner": "A_default_templateParameter",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_elementImport_importingNamespace": {
      "ends": [
        {
          "id": "Namespace-elementImport",
          "name": "elementImport",
          "signature": "elementImport : ElementImport [0..*] {subsets directedRelationship, ownedElement}",
          "description": "Импорты отдельных элементов, принадлежащие пространству имён.",
          "type": "ElementImport",
          "association": "A_elementImport_importingNamespace",
          "owner": "A_elementImport_importingNamespace",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ElementImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_elementImport_importingNamespace",
          "owner": "A_elementImport_importingNamespace",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_formal_templateParameterSubstitution": {
      "ends": [
        {
          "id": "TemplateParameterSubstitution-formal",
          "name": "formal",
          "signature": "formal : TemplateParameter [1..1]",
          "description": "Соответствующий формальный параметр.",
          "type": "TemplateParameter",
          "association": "A_formal_templateParameterSubstitution",
          "owner": "A_formal_templateParameterSubstitution",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_formal_templateParameterSubstitution-templateParameterSubstitution",
          "name": "templateParameterSubstitution",
          "signature": "templateParameterSubstitution : TemplateParameterSubstitution [0..*]",
          "description": "Подстановки, в которых параметр выступает формальным параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_formal_templateParameterSubstitution",
          "owner": "A_formal_templateParameterSubstitution",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_importedElement_import": {
      "ends": [
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "owner": "A_importedElement_import",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "A_importedElement_import-import",
          "name": "import",
          "signature": "import : ElementImport [0..*] {subsets directedRelationship}",
          "description": "Импорты, добавляющие элемент в пространство имён.",
          "type": "ElementImport",
          "association": "A_importedElement_import",
          "owner": "A_importedElement_import",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_importedMember_namespace": {
      "ends": [
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "owner": "A_importedMember_namespace",
          "subsets": [
            "member"
          ],
          "redefines": []
        },
        {
          "id": "A_importedMember_namespace-namespace",
          "name": "namespace",
          "signature": "namespace : Namespace [0..*] {subsets memberNamespace}",
          "description": "Пространства имён, в которые элемент добавлен импортом.",
          "type": "Namespace",
          "association": "A_importedMember_namespace",
          "owner": "A_importedMember_namespace",
          "subsets": [
            "memberNamespace"
          ],
          "redefines": []
        }
      ]
    },
    "A_importedPackage_packageImport": {
      "ends": [
        {
          "id": "PackageImport-importedPackage",
          "name": "importedPackage",
          "signature": "importedPackage : Package [1..1] {subsets target}",
          "description": "Пакет, члены которого импортируются.",
          "type": "Package",
          "association": "A_importedPackage_packageImport",
          "owner": "A_importedPackage_packageImport",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "A_importedPackage_packageImport-packageImport",
          "name": "packageImport",
          "signature": "packageImport : PackageImport [0..*] {subsets directedRelationship}",
          "description": "Импорты, добавляющие членов пакета в пространство имён.",
          "type": "PackageImport",
          "association": "A_importedPackage_packageImport",
          "owner": "A_importedPackage_packageImport",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_lowerValue_owningLower": {
      "ends": [
        {
          "id": "MultiplicityElement-lowerValue",
          "name": "lowerValue",
          "signature": "lowerValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация нижней границы.",
          "type": "ValueSpecification",
          "association": "A_lowerValue_owningLower",
          "owner": "A_lowerValue_owningLower",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_lowerValue_owningLower-owningLower",
          "name": "owningLower",
          "signature": "owningLower : MultiplicityElement [0..1] {subsets owner}",
          "description": "Элемент кратности, которому принадлежит спецификация нижней границы.",
          "type": "MultiplicityElement",
          "association": "A_lowerValue_owningLower",
          "owner": "A_lowerValue_owningLower",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_mapping_abstraction": {
      "ends": [
        {
          "id": "Abstraction-mapping",
          "name": "mapping",
          "signature": "mapping : OpaqueExpression [0..1] {subsets ownedElement}",
          "description": "Необязательное выражение, уточняющее отношение между поставщиками и клиентами.",
          "type": "OpaqueExpression",
          "association": "A_mapping_abstraction",
          "owner": "A_mapping_abstraction",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_mapping_abstraction-abstraction",
          "name": "abstraction",
          "signature": "abstraction : Abstraction [0..1] {subsets owner}",
          "description": "Абстрагирование, которому принадлежит выражение отображения.",
          "type": "Abstraction",
          "association": "A_mapping_abstraction",
          "owner": "A_mapping_abstraction",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_member_memberNamespace": {
      "ends": [
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "owner": "A_member_memberNamespace",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_member_memberNamespace-memberNamespace",
          "name": "memberNamespace",
          "signature": "/memberNamespace : Namespace [0..*] {readOnly, union}",
          "description": "Пространства имён, членом которых является элемент.",
          "type": "Namespace",
          "association": "A_member_memberNamespace",
          "owner": "A_member_memberNamespace",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_nameExpression_namedElement": {
      "ends": [
        {
          "id": "NamedElement-nameExpression",
          "name": "nameExpression",
          "signature": "nameExpression : StringExpression [0..1] {subsets ownedElement}",
          "description": "Выражение, определяющее имя элемента.",
          "type": "StringExpression",
          "association": "A_nameExpression_namedElement",
          "owner": "A_nameExpression_namedElement",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "owner": "A_nameExpression_namedElement",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedActual_owningTemplateParameterSubstitution": {
      "ends": [
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "owner": "A_ownedActual_owningTemplateParameterSubstitution",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": []
        },
        {
          "id": "A_ownedActual_owningTemplateParameterSubstitution-owningTemplateParameterSubstitution",
          "name": "owningTemplateParameterSubstitution",
          "signature": "owningTemplateParameterSubstitution : TemplateParameterSubstitution [0..1] {subsets owner, redefines templateParameterSubstitution}",
          "description": "Подстановка, владеющая фактическим параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "owner": "A_ownedActual_owningTemplateParameterSubstitution",
          "subsets": [
            "owner"
          ],
          "redefines": [
            "templateParameterSubstitution"
          ]
        }
      ]
    },
    "A_ownedComment_owningElement": {
      "ends": [
        {
          "id": "Element-ownedComment",
          "name": "ownedComment",
          "signature": "ownedComment : Comment [0..*] {subsets ownedElement}",
          "description": "Комментарии, принадлежащие элементу.",
          "type": "Comment",
          "association": "A_ownedComment_owningElement",
          "owner": "A_ownedComment_owningElement",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "owner": "A_ownedComment_owningElement",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedDefault_templateParameter": {
      "ends": [
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "owner": "A_ownedDefault_templateParameter",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": []
        },
        {
          "id": "A_ownedDefault_templateParameter-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : TemplateParameter [0..1] {subsets owner, redefines templateParameter}",
          "description": "Параметр шаблона, владеющий значением по умолчанию.",
          "type": "TemplateParameter",
          "association": "A_ownedDefault_templateParameter",
          "owner": "A_ownedDefault_templateParameter",
          "subsets": [
            "owner"
          ],
          "redefines": [
            "templateParameter"
          ]
        }
      ]
    },
    "A_ownedElement_owner": {
      "ends": [
        {
          "id": "Element-ownedElement",
          "name": "ownedElement",
          "signature": "/ownedElement : Element [0..*] {readOnly, union}",
          "description": "Элементы, принадлежащие данному элементу.",
          "type": "Element",
          "association": "A_ownedElement_owner",
          "owner": "A_ownedElement_owner",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Element-owner",
          "name": "owner",
          "signature": "/owner : Element [0..1] {readOnly, union}",
          "description": "Элемент-владелец.",
          "type": "Element",
          "association": "A_ownedElement_owner",
          "owner": "A_ownedElement_owner",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_ownedMember_namespace": {
      "ends": [
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "owner": "A_ownedMember_namespace",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": []
        },
        {
          "id": "NamedElement-namespace",
          "name": "namespace",
          "signature": "/namespace : Namespace [0..1] {readOnly, union, subsets memberNamespace, owner}",
          "description": "Пространство имён, владеющее элементом.",
          "type": "Namespace",
          "association": "A_ownedMember_namespace",
          "owner": "A_ownedMember_namespace",
          "subsets": [
            "memberNamespace",
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedParameter_signature": {
      "ends": [
        {
          "id": "TemplateSignature-ownedParameter",
          "name": "ownedParameter",
          "signature": "ownedParameter : TemplateParameter [0..*] {ordered, subsets ownedElement, parameter}",
          "description": "Формальные параметры, принадлежащие подписи.",
          "type": "TemplateParameter",
          "association": "A_ownedParameter_signature",
          "owner": "A_ownedParameter_signature",
          "subsets": [
            "ownedElement",
            "parameter"
          ],
          "redefines": []
        },
        {
          "id": "TemplateParameter-signature",
          "name": "signature",
          "signature": "signature : TemplateSignature [1..1] {subsets templateSignature, owner}",
          "description": "Подпись, владеющая параметром.",
          "type": "TemplateSignature",
          "association": "A_ownedParameter_signature",
          "owner": "A_ownedParameter_signature",
          "subsets": [
            "templateSignature",
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedParameteredElement_owningTemplateParameter": {
      "ends": [
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "owner": "A_ownedParameteredElement_owningTemplateParameter",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": []
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "owner": "A_ownedParameteredElement_owningTemplateParameter",
          "subsets": [
            "owner",
            "templateParameter"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedRule_context": {
      "ends": [
        {
          "id": "Namespace-ownedRule",
          "name": "ownedRule",
          "signature": "ownedRule : Constraint [0..*] {subsets ownedMember}",
          "description": "Ограничения, принадлежащие пространству имён.",
          "type": "Constraint",
          "association": "A_ownedRule_context",
          "owner": "A_ownedRule_context",
          "subsets": [
            "ownedMember"
          ],
          "redefines": []
        },
        {
          "id": "Constraint-context",
          "name": "context",
          "signature": "context : Namespace [0..1] {subsets namespace}",
          "description": "Пространство имён, владеющее ограничением.",
          "type": "Namespace",
          "association": "A_ownedRule_context",
          "owner": "A_ownedRule_context",
          "subsets": [
            "namespace"
          ],
          "redefines": []
        }
      ]
    },
    "A_ownedTemplateSignature_template": {
      "ends": [
        {
          "id": "TemplateableElement-ownedTemplateSignature",
          "name": "ownedTemplateSignature",
          "signature": "ownedTemplateSignature : TemplateSignature [0..1] {subsets ownedElement}",
          "description": "Необязательная подпись, делающая элемент шаблоном.",
          "type": "TemplateSignature",
          "association": "A_ownedTemplateSignature_template",
          "owner": "A_ownedTemplateSignature_template",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "TemplateSignature-template",
          "name": "template",
          "signature": "template : TemplateableElement [1..1] {subsets owner}",
          "description": "Элемент-шаблон, владеющий подписью.",
          "type": "TemplateableElement",
          "association": "A_ownedTemplateSignature_template",
          "owner": "A_ownedTemplateSignature_template",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_packageImport_importingNamespace": {
      "ends": [
        {
          "id": "Namespace-packageImport",
          "name": "packageImport",
          "signature": "packageImport : PackageImport [0..*] {subsets directedRelationship, ownedElement}",
          "description": "Импорты пакетов, принадлежащие пространству имён.",
          "type": "PackageImport",
          "association": "A_packageImport_importingNamespace",
          "owner": "A_packageImport_importingNamespace",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "PackageImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_packageImport_importingNamespace",
          "owner": "A_packageImport_importingNamespace",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_parameterSubstitution_templateBinding": {
      "ends": [
        {
          "id": "TemplateBinding-parameterSubstitution",
          "name": "parameterSubstitution",
          "signature": "parameterSubstitution : TemplateParameterSubstitution [0..*] {subsets ownedElement}",
          "description": "Подстановки параметров, принадлежащие привязке.",
          "type": "TemplateParameterSubstitution",
          "association": "A_parameterSubstitution_templateBinding",
          "owner": "A_parameterSubstitution_templateBinding",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "TemplateParameterSubstitution-templateBinding",
          "name": "templateBinding",
          "signature": "templateBinding : TemplateBinding [1..1] {subsets owner}",
          "description": "Привязка, владеющая подстановкой.",
          "type": "TemplateBinding",
          "association": "A_parameterSubstitution_templateBinding",
          "owner": "A_parameterSubstitution_templateBinding",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_parameter_templateSignature": {
      "ends": [
        {
          "id": "TemplateSignature-parameter",
          "name": "parameter",
          "signature": "parameter : TemplateParameter [1..*] {ordered}",
          "description": "Упорядоченное множество всех формальных параметров.",
          "type": "TemplateParameter",
          "association": "A_parameter_templateSignature",
          "owner": "A_parameter_templateSignature",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_parameter_templateSignature-templateSignature",
          "name": "templateSignature",
          "signature": "templateSignature : TemplateSignature [0..*]",
          "description": "Подписи, включающие параметр шаблона.",
          "type": "TemplateSignature",
          "association": "A_parameter_templateSignature",
          "owner": "A_parameter_templateSignature",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_parameteredElement_templateParameter": {
      "ends": [
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "owner": "A_parameteredElement_templateParameter",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "ParameterableElement-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : TemplateParameter [0..1]",
          "description": "Параметр шаблона, представляющий этот элемент как формальный параметр.",
          "type": "TemplateParameter",
          "association": "A_parameteredElement_templateParameter",
          "owner": "A_parameteredElement_templateParameter",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_relatedElement_relationship": {
      "ends": [
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "owner": "A_relatedElement_relationship",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "owner": "A_relatedElement_relationship",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_signature_templateBinding": {
      "ends": [
        {
          "id": "TemplateBinding-signature",
          "name": "signature",
          "signature": "signature : TemplateSignature [1..1] {subsets target}",
          "description": "Подпись целевого шаблона.",
          "type": "TemplateSignature",
          "association": "A_signature_templateBinding",
          "owner": "A_signature_templateBinding",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "A_signature_templateBinding-templateBinding",
          "name": "templateBinding",
          "signature": "templateBinding : TemplateBinding [0..*] {subsets directedRelationship}",
          "description": "Привязки, использующие подпись целевого шаблона.",
          "type": "TemplateBinding",
          "association": "A_signature_templateBinding",
          "owner": "A_signature_templateBinding",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_source_directedRelationship": {
      "ends": [
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "owner": "A_source_directedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "owner": "A_source_directedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_specification_owningConstraint": {
      "ends": [
        {
          "id": "Constraint-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Условие, которое должно быть истинным для выполнения ограничения.",
          "type": "ValueSpecification",
          "association": "A_specification_owningConstraint",
          "owner": "A_specification_owningConstraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_specification_owningConstraint-owningConstraint",
          "name": "owningConstraint",
          "signature": "owningConstraint : Constraint [0..1] {subsets owner}",
          "description": "Ограничение, владеющее спецификацией условия.",
          "type": "Constraint",
          "association": "A_specification_owningConstraint",
          "owner": "A_specification_owningConstraint",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_supplier_supplierDependency": {
      "ends": [
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "owner": "A_supplier_supplierDependency",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "A_supplier_supplierDependency-supplierDependency",
          "name": "supplierDependency",
          "signature": "supplierDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, которые ссылаются на элемент как на поставщика.",
          "type": "Dependency",
          "association": "A_supplier_supplierDependency",
          "owner": "A_supplier_supplierDependency",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_target_directedRelationship": {
      "ends": [
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "owner": "A_target_directedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "owner": "A_target_directedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": []
        }
      ]
    },
    "A_templateBinding_boundElement": {
      "ends": [
        {
          "id": "TemplateableElement-templateBinding",
          "name": "templateBinding",
          "signature": "templateBinding : TemplateBinding [0..*] {subsets directedRelationship, ownedElement}",
          "description": "Необязательные привязки элемента к шаблонам.",
          "type": "TemplateBinding",
          "association": "A_templateBinding_boundElement",
          "owner": "A_templateBinding_boundElement",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "TemplateBinding-boundElement",
          "name": "boundElement",
          "signature": "boundElement : TemplateableElement [1..1] {subsets source, owner}",
          "description": "Элемент, к которому применяется привязка.",
          "type": "TemplateableElement",
          "association": "A_templateBinding_boundElement",
          "owner": "A_templateBinding_boundElement",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        }
      ]
    },
    "A_type_typedElement": {
      "ends": [
        {
          "id": "TypedElement-type",
          "name": "type",
          "signature": "type : Type [0..1]",
          "description": "Тип элемента.",
          "type": "Type",
          "association": "A_type_typedElement",
          "owner": "A_type_typedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_type_typedElement-typedElement",
          "name": "typedElement",
          "signature": "typedElement : TypedElement [0..*]",
          "description": "Типизированные элементы, для которых задан этот тип.",
          "type": "TypedElement",
          "association": "A_type_typedElement",
          "owner": "A_type_typedElement",
          "subsets": [],
          "redefines": []
        }
      ]
    },
    "A_upperValue_owningUpper": {
      "ends": [
        {
          "id": "MultiplicityElement-upperValue",
          "name": "upperValue",
          "signature": "upperValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация верхней границы.",
          "type": "ValueSpecification",
          "association": "A_upperValue_owningUpper",
          "owner": "A_upperValue_owningUpper",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_upperValue_owningUpper-owningUpper",
          "name": "owningUpper",
          "signature": "owningUpper : MultiplicityElement [0..1] {subsets owner}",
          "description": "Элемент кратности, которому принадлежит спецификация верхней границы.",
          "type": "MultiplicityElement",
          "association": "A_upperValue_owningUpper",
          "owner": "A_upperValue_owningUpper",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    }
  },
  "generalizations": {
    "Abstraction": [
      "Dependency"
    ],
    "Comment": [
      "Element"
    ],
    "Constraint": [
      "PackageableElement"
    ],
    "Dependency": [
      "DirectedRelationship",
      "PackageableElement"
    ],
    "DirectedRelationship": [
      "Relationship"
    ],
    "Element": [],
    "ElementImport": [
      "DirectedRelationship"
    ],
    "Expression": [
      "ValueSpecification"
    ],
    "MultiplicityElement": [
      "Element"
    ],
    "NamedElement": [
      "Element"
    ],
    "Namespace": [
      "NamedElement"
    ],
    "OpaqueExpression": [
      "ValueSpecification"
    ],
    "Package": [
      "PackageableElement",
      "TemplateableElement",
      "Namespace"
    ],
    "PackageImport": [
      "DirectedRelationship"
    ],
    "PackageableElement": [
      "ParameterableElement",
      "NamedElement"
    ],
    "ParameterableElement": [
      "Element"
    ],
    "Realization": [
      "Abstraction"
    ],
    "Relationship": [
      "Element"
    ],
    "StringExpression": [
      "TemplateableElement",
      "Expression"
    ],
    "TemplateBinding": [
      "DirectedRelationship"
    ],
    "TemplateParameter": [
      "Element"
    ],
    "TemplateParameterSubstitution": [
      "Element"
    ],
    "TemplateSignature": [
      "Element"
    ],
    "TemplateableElement": [
      "Element"
    ],
    "Type": [
      "PackageableElement"
    ],
    "TypedElement": [
      "NamedElement"
    ],
    "Usage": [
      "Dependency"
    ],
    "ValueSpecification": [
      "TypedElement",
      "PackageableElement"
    ]
  },
  "classifierDefinitions": {
    "Abstraction": "An Abstraction is a Relationship that relates two Elements or sets of Elements that represent the same concept at different levels of abstraction or from different viewpoints.",
    "Comment": "A Comment is a textual annotation that can be attached to a set of Elements.",
    "Constraint": "A Constraint is a condition or restriction expressed in natural language text or in a machine readable language for the purpose of declaring some of the semantics of an Element or set of Elements.",
    "Dependency": "A Dependency is a Relationship that signifies that a single model Element or a set of model Elements requires other model Elements for their specification or implementation. This means that the complete semantics of the client Element(s) are either semantically or structurally dependent on the definition of the supplier Element(s).",
    "DirectedRelationship": "A DirectedRelationship represents a relationship between a collection of source model Elements and a collection of target model Elements.",
    "Element": "An Element is a constituent of a model. As such, it has the capability of owning other Elements.",
    "ElementImport": "An ElementImport identifies a NamedElement in a Namespace other than the one that owns that NamedElement and allows the NamedElement to be referenced using an unqualified name in the Namespace owning the ElementImport.",
    "Expression": "Узел дерева выражения, который может быть терминальным или нетерминальным. Задаёт символ и, возможно, пустую последовательность операндов — спецификаций значений. При вычислении в контексте обозначает, возможно, пустое множество значений.",
    "MultiplicityElement": "A multiplicity is a definition of an inclusive interval of non-negative integers beginning with a lower bound and ending with a (possibly infinite) upper bound. A MultiplicityElement embeds this information to specify the allowable cardinalities for an instantiation of the Element.",
    "NamedElement": "A NamedElement is an Element in a model that may have a name. The name may be given directly and/or via the use of a StringExpression.",
    "Namespace": "A Namespace is an Element in a model that owns and/or imports a set of NamedElements that can be identified by name.",
    "OpaqueExpression": "An OpaqueExpression is a ValueSpecification that specifies the computation of a collection of values either in terms of a UML Behavior or based on a textual statement in a language other than UML",
    "Package": "A package can have one or more profile applications to indicate which profiles have been applied. Because a profile is a package, it is possible to apply a profile not only to packages, but also to profiles.\nPackage specializes TemplateableElement and PackageableElement specializes ParameterableElement to specify that a package can be used as a template and a PackageableElement as a template parameter.\nA package is used to group elements, and provides a namespace for the grouped elements.",
    "PackageImport": "A PackageImport is a Relationship that imports all the non-private members of a Package into the Namespace owning the PackageImport, so that those Elements may be referred to by their unqualified names in the importingNamespace.",
    "PackageableElement": "A PackageableElement is a NamedElement that may be owned directly by a Package. A PackageableElement is also able to serve as the parameteredElement of a TemplateParameter.",
    "ParameterableElement": "A ParameterableElement is an Element that can be exposed as a formal TemplateParameter for a template, or specified as an actual parameter in a binding of a template.",
    "Realization": "Realization is a specialized Abstraction relationship between two sets of model Elements, one representing a specification (the supplier) and the other represents an implementation of the latter (the client). Realization can be used to model stepwise refinement, optimizations, transformations, templates, model synthesis, framework composition, etc.",
    "Relationship": "Relationship is an abstract concept that specifies some kind of relationship between Elements.",
    "StringExpression": "A StringExpression is an Expression that specifies a String value that is derived by concatenating a sequence of operands with String values or a sequence of subExpressions, some of which might be template parameters.",
    "TemplateBinding": "A TemplateBinding is a DirectedRelationship between a TemplateableElement and a template. A TemplateBinding specifies the TemplateParameterSubstitutions of actual parameters for the formal parameters of the template.",
    "TemplateParameter": "A TemplateParameter exposes a ParameterableElement as a formal parameter of a template.",
    "TemplateParameterSubstitution": "A TemplateParameterSubstitution relates the actual parameter to a formal TemplateParameter as part of a template binding.",
    "TemplateSignature": "A Template Signature bundles the set of formal TemplateParameters for a template.",
    "TemplateableElement": "A TemplateableElement is an Element that can optionally be defined as a template and bound to other templates.",
    "Type": "A Type constrains the values represented by a TypedElement.",
    "TypedElement": "A TypedElement is a NamedElement that may have a Type specified for it.",
    "Usage": "A Usage is a Dependency in which the client Element requires the supplier Element (or set of Elements) for its full implementation or operation.",
    "ValueSpecification": "A ValueSpecification is the specification of a (possibly empty) set of values. A ValueSpecification is a ParameterableElement that may be exposed as a formal TemplateParameter and provided as the actual parameter in the binding of a template."
  }
};
