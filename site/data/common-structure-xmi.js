window.UML_XMI_DATA = {
  "source": "OMG UML 2.5.1, formal/17-12-05, UML.xmi (20161101)",
  "classes": {},
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_target_directedRelationship-directedRelationship",
              "name": "directedRelationship",
              "type": "DirectedRelationship",
              "owner": {
                "type": "association",
                "name": "A_target_directedRelationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_target_directedRelationship-directedRelationship",
              "name": "directedRelationship",
              "type": "DirectedRelationship",
              "owner": {
                "type": "association",
                "name": "A_target_directedRelationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          ],
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
          "redefinedProperties": [
            {
              "id": "A_actual_templateParameterSubstitution-templateParameterSubstitution",
              "name": "templateParameterSubstitution",
              "type": "TemplateParameterSubstitution",
              "owner": {
                "type": "association",
                "name": "A_actual_templateParameterSubstitution"
              }
            }
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
          ],
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
          "redefinedProperties": [
            {
              "id": "A_default_templateParameter-templateParameter",
              "name": "templateParameter",
              "type": "TemplateParameter",
              "owner": {
                "type": "association",
                "name": "A_default_templateParameter"
              }
            }
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_target_directedRelationship-directedRelationship",
              "name": "directedRelationship",
              "type": "DirectedRelationship",
              "owner": {
                "type": "association",
                "name": "A_target_directedRelationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_relatedElement_relationship-relationship",
              "name": "relationship",
              "type": "Relationship",
              "owner": {
                "type": "association",
                "name": "A_relatedElement_relationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_target_directedRelationship-directedRelationship",
              "name": "directedRelationship",
              "type": "DirectedRelationship",
              "owner": {
                "type": "association",
                "name": "A_target_directedRelationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_relatedElement_relationship-relationship",
              "name": "relationship",
              "type": "Relationship",
              "owner": {
                "type": "association",
                "name": "A_relatedElement_relationship"
              }
            }
          ],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
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
      ]
    },
    "A_behavior_opaqueExpression": {
      "ends": [
        {
          "id": "OpaqueExpression-behavior",
          "name": "behavior",
          "signature": "behavior : Behavior [0..1]",
          "description": "Поведение UML, задающее вычисление выражения.",
          "type": "Behavior",
          "association": "A_behavior_opaqueExpression",
          "owner": "A_behavior_opaqueExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_behavior_opaqueExpression-opaqueExpression",
          "name": "opaqueExpression",
          "signature": "opaqueExpression : OpaqueExpression [0..*]",
          "description": "Непрозрачное выражение, вычисление которого задаёт поведение.",
          "type": "OpaqueExpression",
          "association": "A_behavior_opaqueExpression",
          "owner": "A_behavior_opaqueExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_event_durationObservation": {
      "ends": [
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "owner": "A_event_durationObservation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_event_durationObservation-durationObservation",
          "name": "durationObservation",
          "signature": "durationObservation : DurationObservation [0..*]",
          "description": "Наблюдения длительности, события которых определяют измеряемую длительность.",
          "type": "DurationObservation",
          "association": "A_event_durationObservation",
          "owner": "A_event_durationObservation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_event_timeObservation": {
      "ends": [
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "owner": "A_event_timeObservation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_event_timeObservation-timeObservation",
          "name": "timeObservation",
          "signature": "timeObservation : TimeObservation [0..*]",
          "description": "Наблюдения времени, события которых определяют наблюдаемое время.",
          "type": "TimeObservation",
          "association": "A_event_timeObservation",
          "owner": "A_event_timeObservation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_expr_duration": {
      "ends": [
        {
          "id": "Duration-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая длительность.",
          "type": "ValueSpecification",
          "association": "A_expr_duration",
          "owner": "A_expr_duration",
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
          "id": "A_expr_duration-duration",
          "name": "duration",
          "signature": "duration : Duration [0..1] {subsets owner}",
          "description": "Длительность, вычисляющая значение Duration.",
          "type": "Duration",
          "association": "A_expr_duration",
          "owner": "A_expr_duration",
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
      ]
    },
    "A_expr_timeExpression": {
      "ends": [
        {
          "id": "TimeExpression-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "ValueSpecification, вычисляющее значение TimeExpression.",
          "type": "ValueSpecification",
          "association": "A_expr_timeExpression",
          "owner": "A_expr_timeExpression",
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
          "id": "A_expr_timeExpression-timeExpression",
          "name": "timeExpression",
          "signature": "timeExpression : TimeExpression [0..1] {subsets owner}",
          "description": "Временное выражение, вычисляющее значение TimeExpression.",
          "type": "TimeExpression",
          "association": "A_expr_timeExpression",
          "owner": "A_expr_timeExpression",
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
      ]
    },
    "A_max_durationInterval": {
      "ends": [
        {
          "id": "DurationInterval-max",
          "name": "max",
          "signature": "max : Duration [1..1] {redefines max}",
          "description": "Длительность, обозначающая максимальное значение диапазона.",
          "type": "Duration",
          "association": "A_max_durationInterval",
          "owner": "A_max_durationInterval",
          "subsets": [],
          "redefines": [
            "max"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "Interval-max",
              "name": "max",
              "type": "ValueSpecification",
              "owner": {
                "type": "classifier",
                "name": "Interval"
              }
            }
          ]
        },
        {
          "id": "A_max_durationInterval-durationInterval",
          "name": "durationInterval",
          "signature": "durationInterval : DurationInterval [0..*] {redefines interval}",
          "description": "Интервал длительности, обозначающий максимальное значение диапазона.",
          "type": "DurationInterval",
          "association": "A_max_durationInterval",
          "owner": "A_max_durationInterval",
          "subsets": [],
          "redefines": [
            "interval"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_max_interval-interval",
              "name": "interval",
              "type": "Interval",
              "owner": {
                "type": "association",
                "name": "A_max_interval"
              }
            }
          ]
        }
      ]
    },
    "A_max_interval": {
      "ends": [
        {
          "id": "Interval-max",
          "name": "max",
          "signature": "max : ValueSpecification [1..1]",
          "description": "Спецификация максимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_max_interval",
          "owner": "A_max_interval",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_max_interval-interval",
          "name": "interval",
          "signature": "interval : Interval [0..*]",
          "description": "Интервал, обозначающий максимальное значение диапазона.",
          "type": "Interval",
          "association": "A_max_interval",
          "owner": "A_max_interval",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_max_timeInterval": {
      "ends": [
        {
          "id": "TimeInterval-max",
          "name": "max",
          "signature": "max : TimeExpression [1..1] {redefines max}",
          "description": "TimeExpression, обозначающее максимальное значение диапазона.",
          "type": "TimeExpression",
          "association": "A_max_timeInterval",
          "owner": "A_max_timeInterval",
          "subsets": [],
          "redefines": [
            "max"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "Interval-max",
              "name": "max",
              "type": "ValueSpecification",
              "owner": {
                "type": "classifier",
                "name": "Interval"
              }
            }
          ]
        },
        {
          "id": "A_max_timeInterval-timeInterval",
          "name": "timeInterval",
          "signature": "timeInterval : TimeInterval [0..*] {redefines interval}",
          "description": "Интервал времени, обозначающий максимальное значение диапазона.",
          "type": "TimeInterval",
          "association": "A_max_timeInterval",
          "owner": "A_max_timeInterval",
          "subsets": [],
          "redefines": [
            "interval"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_max_interval-interval",
              "name": "interval",
              "type": "Interval",
              "owner": {
                "type": "association",
                "name": "A_max_interval"
              }
            }
          ]
        }
      ]
    },
    "A_min_durationInterval": {
      "ends": [
        {
          "id": "DurationInterval-min",
          "name": "min",
          "signature": "min : Duration [1..1] {redefines min}",
          "description": "Длительность, обозначающая минимальное значение диапазона.",
          "type": "Duration",
          "association": "A_min_durationInterval",
          "owner": "A_min_durationInterval",
          "subsets": [],
          "redefines": [
            "min"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "Interval-min",
              "name": "min",
              "type": "ValueSpecification",
              "owner": {
                "type": "classifier",
                "name": "Interval"
              }
            }
          ]
        },
        {
          "id": "A_min_durationInterval-durationInterval",
          "name": "durationInterval",
          "signature": "durationInterval : DurationInterval [0..*] {redefines interval}",
          "description": "Интервал длительности, обозначающий минимальное значение диапазона.",
          "type": "DurationInterval",
          "association": "A_min_durationInterval",
          "owner": "A_min_durationInterval",
          "subsets": [],
          "redefines": [
            "interval"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_min_interval-interval",
              "name": "interval",
              "type": "Interval",
              "owner": {
                "type": "association",
                "name": "A_min_interval"
              }
            }
          ]
        }
      ]
    },
    "A_min_interval": {
      "ends": [
        {
          "id": "Interval-min",
          "name": "min",
          "signature": "min : ValueSpecification [1..1]",
          "description": "Спецификация минимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_min_interval",
          "owner": "A_min_interval",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_min_interval-interval",
          "name": "interval",
          "signature": "interval : Interval [0..*]",
          "description": "Интервал, обозначающий минимальное значение диапазона.",
          "type": "Interval",
          "association": "A_min_interval",
          "owner": "A_min_interval",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_min_timeInterval": {
      "ends": [
        {
          "id": "TimeInterval-min",
          "name": "min",
          "signature": "min : TimeExpression [1..1] {redefines min}",
          "description": "TimeExpression, обозначающее минимальное значение диапазона.",
          "type": "TimeExpression",
          "association": "A_min_timeInterval",
          "owner": "A_min_timeInterval",
          "subsets": [],
          "redefines": [
            "min"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "Interval-min",
              "name": "min",
              "type": "ValueSpecification",
              "owner": {
                "type": "classifier",
                "name": "Interval"
              }
            }
          ]
        },
        {
          "id": "A_min_timeInterval-timeInterval",
          "name": "timeInterval",
          "signature": "timeInterval : TimeInterval [0..*] {redefines interval}",
          "description": "Интервал времени, обозначающий минимальное значение диапазона.",
          "type": "TimeInterval",
          "association": "A_min_timeInterval",
          "owner": "A_min_timeInterval",
          "subsets": [],
          "redefines": [
            "interval"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_min_interval-interval",
              "name": "interval",
              "type": "Interval",
              "owner": {
                "type": "association",
                "name": "A_min_interval"
              }
            }
          ]
        }
      ]
    },
    "A_observation_duration": {
      "ends": [
        {
          "id": "Duration-observation",
          "name": "observation",
          "signature": "observation : Observation [0..*]",
          "description": "Наблюдения, участвующие в вычислении значения Duration.",
          "type": "Observation",
          "association": "A_observation_duration",
          "owner": "A_observation_duration",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_observation_duration-duration",
          "name": "duration",
          "signature": "duration : Duration [0..1]",
          "description": "Длительность, участвующая в наблюдении.",
          "type": "Duration",
          "association": "A_observation_duration",
          "owner": "A_observation_duration",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_observation_timeExpression": {
      "ends": [
        {
          "id": "TimeExpression-observation",
          "name": "observation",
          "signature": "observation : Observation [0..*]",
          "description": "Ссылается на Observations, участвующие в вычислении значения TimeExpression.",
          "type": "Observation",
          "association": "A_observation_timeExpression",
          "owner": "A_observation_timeExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_observation_timeExpression-timeExpression",
          "name": "timeExpression",
          "signature": "timeExpression : TimeExpression [0..1]",
          "description": "Временное выражение, участвующее в наблюдении.",
          "type": "TimeExpression",
          "association": "A_observation_timeExpression",
          "owner": "A_observation_timeExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_operand_expression": {
      "ends": [
        {
          "id": "Expression-operand",
          "name": "operand",
          "signature": "operand : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Упорядоченная последовательность спецификаций значений-операндов.",
          "type": "ValueSpecification",
          "association": "A_operand_expression",
          "owner": "A_operand_expression",
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
          "id": "A_operand_expression-expression",
          "name": "expression",
          "signature": "expression : Expression [0..1] {subsets owner}",
          "description": "Выражение, которому принадлежит операнд.",
          "type": "Expression",
          "association": "A_operand_expression",
          "owner": "A_operand_expression",
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
      ]
    },
    "A_result_opaqueExpression": {
      "ends": [
        {
          "id": "OpaqueExpression-result",
          "name": "result",
          "signature": "/result : Parameter [0..1] {readOnly}",
          "description": "Если OpaqueExpression задано через UML Behavior, относится к возвращаемому Parameter этого Behavior.",
          "type": "Parameter",
          "association": "A_result_opaqueExpression",
          "owner": "A_result_opaqueExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_result_opaqueExpression-opaqueExpression",
          "name": "opaqueExpression",
          "signature": "opaqueExpression : OpaqueExpression [0..*]",
          "description": "Непрозрачное выражение, результат которого задаёт параметр.",
          "type": "OpaqueExpression",
          "association": "A_result_opaqueExpression",
          "owner": "A_result_opaqueExpression",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_specification_durationConstraint": {
      "ends": [
        {
          "id": "DurationConstraint-specification",
          "name": "specification",
          "signature": "specification : DurationInterval [1..1] {redefines specification}",
          "description": "DurationInterval, ограничивающий длительность.",
          "type": "DurationInterval",
          "association": "A_specification_durationConstraint",
          "owner": "A_specification_durationConstraint",
          "subsets": [],
          "redefines": [
            "specification"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "IntervalConstraint-specification",
              "name": "specification",
              "type": "Interval",
              "owner": {
                "type": "classifier",
                "name": "IntervalConstraint"
              }
            }
          ]
        },
        {
          "id": "A_specification_durationConstraint-durationConstraint",
          "name": "durationConstraint",
          "signature": "durationConstraint : DurationConstraint [0..1] {redefines intervalConstraint}",
          "description": "Ограничение длительности, задающее ограничение для DurationInterval.",
          "type": "DurationConstraint",
          "association": "A_specification_durationConstraint",
          "owner": "A_specification_durationConstraint",
          "subsets": [],
          "redefines": [
            "intervalConstraint"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_specification_intervalConstraint-intervalConstraint",
              "name": "intervalConstraint",
              "type": "IntervalConstraint",
              "owner": {
                "type": "association",
                "name": "A_specification_intervalConstraint"
              }
            }
          ]
        }
      ]
    },
    "A_specification_intervalConstraint": {
      "ends": [
        {
          "id": "IntervalConstraint-specification",
          "name": "specification",
          "signature": "specification : Interval [1..1] {redefines specification}",
          "description": "Interval, задающий условие IntervalConstraint.",
          "type": "Interval",
          "association": "A_specification_intervalConstraint",
          "owner": "A_specification_intervalConstraint",
          "subsets": [],
          "redefines": [
            "specification"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "Constraint-specification",
              "name": "specification",
              "type": "ValueSpecification",
              "owner": {
                "type": "classifier",
                "name": "Constraint"
              }
            }
          ]
        },
        {
          "id": "A_specification_intervalConstraint-intervalConstraint",
          "name": "intervalConstraint",
          "signature": "intervalConstraint : IntervalConstraint [0..1] {redefines owningConstraint}",
          "description": "Интервальное ограничение, задающее спецификацию интервала.",
          "type": "IntervalConstraint",
          "association": "A_specification_intervalConstraint",
          "owner": "A_specification_intervalConstraint",
          "subsets": [],
          "redefines": [
            "owningConstraint"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_specification_owningConstraint-owningConstraint",
              "name": "owningConstraint",
              "type": "Constraint",
              "owner": {
                "type": "association",
                "name": "A_specification_owningConstraint"
              }
            }
          ]
        }
      ]
    },
    "A_specification_timeConstraint": {
      "ends": [
        {
          "id": "TimeConstraint-specification",
          "name": "specification",
          "signature": "specification : TimeInterval [1..1] {redefines specification}",
          "description": "TimeInterval, ограничивающий время.",
          "type": "TimeInterval",
          "association": "A_specification_timeConstraint",
          "owner": "A_specification_timeConstraint",
          "subsets": [],
          "redefines": [
            "specification"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "IntervalConstraint-specification",
              "name": "specification",
              "type": "Interval",
              "owner": {
                "type": "classifier",
                "name": "IntervalConstraint"
              }
            }
          ]
        },
        {
          "id": "A_specification_timeConstraint-timeConstraint",
          "name": "timeConstraint",
          "signature": "timeConstraint : TimeConstraint [0..1] {redefines intervalConstraint}",
          "description": "Ограничение времени, задающее ограничение для TimeInterval.",
          "type": "TimeConstraint",
          "association": "A_specification_timeConstraint",
          "owner": "A_specification_timeConstraint",
          "subsets": [],
          "redefines": [
            "intervalConstraint"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_specification_intervalConstraint-intervalConstraint",
              "name": "intervalConstraint",
              "type": "IntervalConstraint",
              "owner": {
                "type": "association",
                "name": "A_specification_intervalConstraint"
              }
            }
          ]
        }
      ]
    },
    "A_subExpression_owningExpression": {
      "ends": [
        {
          "id": "StringExpression-subExpression",
          "name": "subExpression",
          "signature": "subExpression : StringExpression [0..*] {ordered, subsets ownedElement}",
          "description": "Строковые подвыражения, составляющие данное выражение.",
          "type": "StringExpression",
          "association": "A_subExpression_owningExpression",
          "owner": "A_subExpression_owningExpression",
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
          "id": "StringExpression-owningExpression",
          "name": "owningExpression",
          "signature": "owningExpression : StringExpression [0..1] {subsets owner}",
          "description": "Строковое выражение, частью которого является данное StringExpression как subExpression.",
          "type": "StringExpression",
          "association": "A_subExpression_owningExpression",
          "owner": "A_subExpression_owningExpression",
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
      ]
    },
    "A_attribute_classifier": {
      "ends": [
        {
          "id": "Classifier-attribute",
          "name": "attribute",
          "signature": "/attribute : Property [0..*] {ordered, readOnly, union, subsets redefinableElement, feature}",
          "description": "Все свойства, являющиеся прямыми (то есть не унаследованными и не импортированными) атрибутами классификатора.",
          "type": "Property",
          "association": "A_attribute_classifier",
          "owner": "A_attribute_classifier",
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
          "id": "A_attribute_classifier-classifier",
          "name": "classifier",
          "signature": "/classifier : Classifier [0..1] {readOnly, union, subsets featuringClassifier, redefinitionContext}",
          "description": "Классификатор, для которого свойство является атрибутом.",
          "type": "Classifier",
          "association": "A_attribute_classifier",
          "owner": "A_attribute_classifier",
          "subsets": [
            "featuringClassifier",
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
        }
      ]
    },
    "A_bodyCondition_bodyContext": {
      "ends": [
        {
          "id": "Operation-bodyCondition",
          "name": "bodyCondition",
          "signature": "bodyCondition : Constraint [0..1] {subsets ownedRule}",
          "description": "Необязательное ограничение на значения результата вызова операции.",
          "type": "Constraint",
          "association": "A_bodyCondition_bodyContext",
          "owner": "A_bodyCondition_bodyContext",
          "subsets": [
            "ownedRule"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Namespace-ownedRule",
              "name": "ownedRule",
              "type": "Constraint",
              "owner": {
                "type": "classifier",
                "name": "Namespace"
              }
            }
          ],
          "redefinedProperties": []
        },
        {
          "id": "A_bodyCondition_bodyContext-bodyContext",
          "name": "bodyContext",
          "signature": "bodyContext : Operation [0..1] {subsets context}",
          "description": "Операция, задающая условие на значения результата своего вызова.",
          "type": "Operation",
          "association": "A_bodyCondition_bodyContext",
          "owner": "A_bodyCondition_bodyContext",
          "subsets": [
            "context"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Constraint-context",
              "name": "context",
              "type": "Namespace",
              "owner": {
                "type": "classifier",
                "name": "Constraint"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_classifier_instanceSpecification": {
      "ends": [
        {
          "id": "InstanceSpecification-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..*]",
          "description": "Классификатор или классификаторы представленного экземпляра. Если задано несколько классификаторов, экземпляр классифицирован всеми ими.",
          "type": "Classifier",
          "association": "A_classifier_instanceSpecification",
          "owner": "A_classifier_instanceSpecification",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_classifier_instanceSpecification-instanceSpecification",
          "name": "instanceSpecification",
          "signature": "instanceSpecification : InstanceSpecification [0..*]",
          "description": "Спецификации экземпляров, классифицированные этим классификатором.",
          "type": "InstanceSpecification",
          "association": "A_classifier_instanceSpecification",
          "owner": "A_classifier_instanceSpecification",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_classifier_templateParameter_parameteredElement": {
      "ends": [
        {
          "id": "Classifier-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : ClassifierTemplateParameter [0..1] {redefines templateParameter}",
          "description": "Параметр шаблона классификатора, который предоставляет этот элемент как формальный параметр.",
          "type": "ClassifierTemplateParameter",
          "association": "A_classifier_templateParameter_parameteredElement",
          "owner": "A_classifier_templateParameter_parameteredElement",
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
          "id": "ClassifierTemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : Classifier [1..1] {redefines parameteredElement}",
          "description": "Классификатор, предоставляемый этим параметром шаблона классификатора.",
          "type": "Classifier",
          "association": "A_classifier_templateParameter_parameteredElement",
          "owner": "A_classifier_templateParameter_parameteredElement",
          "subsets": [],
          "redefines": [
            "parameteredElement"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "TemplateParameter-parameteredElement",
              "name": "parameteredElement",
              "type": "ParameterableElement",
              "owner": {
                "type": "classifier",
                "name": "TemplateParameter"
              }
            }
          ]
        }
      ]
    },
    "A_collaborationUse_classifier": {
      "ends": [
        {
          "id": "Classifier-collaborationUse",
          "name": "collaborationUse",
          "signature": "collaborationUse : CollaborationUse [0..*] {subsets ownedElement}",
          "description": "Использования кооперации, принадлежащие классификатору.",
          "type": "CollaborationUse",
          "association": "A_collaborationUse_classifier",
          "owner": "A_collaborationUse_classifier",
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
          "id": "A_collaborationUse_classifier-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..1] {subsets owner}",
          "description": "Классификатор, владеющий использованием кооперации.",
          "type": "Classifier",
          "association": "A_collaborationUse_classifier",
          "owner": "A_collaborationUse_classifier",
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
      ]
    },
    "A_condition_parameterSet": {
      "ends": [
        {
          "id": "ParameterSet-condition",
          "name": "condition",
          "signature": "condition : Constraint [0..*] {subsets ownedElement}",
          "description": "Ограничение, определяющее возможность начала или завершения выполнения со значениями параметров набора.",
          "type": "Constraint",
          "association": "A_condition_parameterSet",
          "owner": "A_condition_parameterSet",
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
          "id": "A_condition_parameterSet-parameterSet",
          "name": "parameterSet",
          "signature": "parameterSet : ParameterSet [0..1] {subsets owner}",
          "description": "Набор параметров, владеющий условием.",
          "type": "ParameterSet",
          "association": "A_condition_parameterSet",
          "owner": "A_condition_parameterSet",
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
      ]
    },
    "A_constrainingClassifier_classifierTemplateParameter": {
      "ends": [
        {
          "id": "ClassifierTemplateParameter-constrainingClassifier",
          "name": "constrainingClassifier",
          "signature": "constrainingClassifier : Classifier [0..*]",
          "description": "Классификаторы, ограничивающие аргумент, который может использоваться для параметра. Если атрибут allowSubstitutable равен true, может быть подставлен любой классификатор, совместимый с этим ограничивающим классификатором; иначе это должен быть этот классификатор или одна из его специализаций. Если свойство пусто, ограничений на классификатор, используемый как аргумент, нет.",
          "type": "Classifier",
          "association": "A_constrainingClassifier_classifierTemplateParameter",
          "owner": "A_constrainingClassifier_classifierTemplateParameter",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_constrainingClassifier_classifierTemplateParameter-classifierTemplateParameter",
          "name": "classifierTemplateParameter",
          "signature": "classifierTemplateParameter : ClassifierTemplateParameter [0..*]",
          "description": "Параметры шаблона классификатора, которые ограничивает этот классификатор.",
          "type": "ClassifierTemplateParameter",
          "association": "A_constrainingClassifier_classifierTemplateParameter",
          "owner": "A_constrainingClassifier_classifierTemplateParameter",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_contract_substitution": {
      "ends": [
        {
          "id": "Substitution-contract",
          "name": "contract",
          "signature": "contract : Classifier [1..1] {subsets supplier}",
          "description": "Контракт, которому следует подставляющий классификатор.",
          "type": "Classifier",
          "association": "A_contract_substitution",
          "owner": "A_contract_substitution",
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
          "id": "A_contract_substitution-substitution",
          "name": "substitution",
          "signature": "substitution : Substitution [0..*] {subsets supplierDependency}",
          "description": "Подстановки, контрактом которых служит этот классификатор.",
          "type": "Substitution",
          "association": "A_contract_substitution",
          "owner": "A_contract_substitution",
          "subsets": [
            "supplierDependency"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_supplier_supplierDependency-supplierDependency",
              "name": "supplierDependency",
              "type": "Dependency",
              "owner": {
                "type": "association",
                "name": "A_supplier_supplierDependency"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_defaultValue_owningParameter": {
      "ends": [
        {
          "id": "Parameter-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, используемого, если аргумент параметра не передан.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningParameter",
          "owner": "A_defaultValue_owningParameter",
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
          "id": "A_defaultValue_owningParameter-owningParameter",
          "name": "owningParameter",
          "signature": "owningParameter : Parameter [0..1] {subsets owner}",
          "description": "Параметр, владеющий значением по умолчанию.",
          "type": "Parameter",
          "association": "A_defaultValue_owningParameter",
          "owner": "A_defaultValue_owningParameter",
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
      ]
    },
    "A_defaultValue_owningProperty": {
      "ends": [
        {
          "id": "Property-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningProperty",
          "owner": "A_defaultValue_owningProperty",
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
          "id": "A_defaultValue_owningProperty-owningProperty",
          "name": "owningProperty",
          "signature": "owningProperty : Property [0..1] {subsets owner}",
          "description": "Свойство, владеющее значением по умолчанию.",
          "type": "Property",
          "association": "A_defaultValue_owningProperty",
          "owner": "A_defaultValue_owningProperty",
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
      ]
    },
    "A_definingFeature_slot": {
      "ends": [
        {
          "id": "Slot-definingFeature",
          "name": "definingFeature",
          "signature": "definingFeature : StructuralFeature [1..1]",
          "description": "Структурная характеристика, задающая значения, которые может хранить слот.",
          "type": "StructuralFeature",
          "association": "A_definingFeature_slot",
          "owner": "A_definingFeature_slot",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_definingFeature_slot-slot",
          "name": "slot",
          "signature": "slot : Slot [0..*]",
          "description": "Слоты, значения которых задаёт эта определяющая характеристика.",
          "type": "Slot",
          "association": "A_definingFeature_slot",
          "owner": "A_definingFeature_slot",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_extendedSignature_redefinableTemplateSignature": {
      "ends": [
        {
          "id": "RedefinableTemplateSignature-extendedSignature",
          "name": "extendedSignature",
          "signature": "extendedSignature : RedefinableTemplateSignature [0..*] {subsets redefinedElement}",
          "description": "Подписи шаблонов, расширяемые этой переопределяемой подписью шаблона.",
          "type": "RedefinableTemplateSignature",
          "association": "A_extendedSignature_redefinableTemplateSignature",
          "owner": "A_extendedSignature_redefinableTemplateSignature",
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
          "id": "A_extendedSignature_redefinableTemplateSignature-redefinableTemplateSignature",
          "name": "redefinableTemplateSignature",
          "signature": "redefinableTemplateSignature : RedefinableTemplateSignature [0..*] {subsets redefinableElement}",
          "description": "Переопределяемые подписи шаблонов, расширяемые этой подписью.",
          "type": "RedefinableTemplateSignature",
          "association": "A_extendedSignature_redefinableTemplateSignature",
          "owner": "A_extendedSignature_redefinableTemplateSignature",
          "subsets": [
            "redefinableElement"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_redefinedElement_redefinableElement-redefinableElement",
              "name": "redefinableElement",
              "type": "RedefinableElement",
              "owner": {
                "type": "association",
                "name": "A_redefinedElement_redefinableElement"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_feature_featuringClassifier": {
      "ends": [
        {
          "id": "Classifier-feature",
          "name": "feature",
          "signature": "/feature : Feature [0..*] {readOnly, union, subsets member}",
          "description": "Задаёт каждую характеристику, непосредственно определённую в классификаторе. Члены классификатора типа Feature могут в неё не входить, например унаследованные характеристики.",
          "type": "Feature",
          "association": "A_feature_featuringClassifier",
          "owner": "A_feature_featuringClassifier",
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
          "id": "Feature-featuringClassifier",
          "name": "featuringClassifier",
          "signature": "/featuringClassifier : Classifier [0..1] {readOnly, union, subsets memberNamespace}",
          "description": "Классификаторы, характеристикой которых является эта Feature.",
          "type": "Classifier",
          "association": "A_feature_featuringClassifier",
          "owner": "A_feature_featuringClassifier",
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
        }
      ]
    },
    "A_general_classifier": {
      "ends": [
        {
          "id": "Classifier-general",
          "name": "general",
          "signature": "/general : Classifier [0..*]",
          "description": "Обобщающие классификаторы для этого классификатора.",
          "type": "Classifier",
          "association": "A_general_classifier",
          "owner": "A_general_classifier",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_general_classifier-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..*]",
          "description": "Классификаторы, обобщаемые этим классификатором.",
          "type": "Classifier",
          "association": "A_general_classifier",
          "owner": "A_general_classifier",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_general_generalization": {
      "ends": [
        {
          "id": "Generalization-general",
          "name": "general",
          "signature": "general : Classifier [1..1] {subsets target}",
          "description": "Общий классификатор в отношении обобщения.",
          "type": "Classifier",
          "association": "A_general_generalization",
          "owner": "A_general_generalization",
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
        },
        {
          "id": "A_general_generalization-generalization",
          "name": "generalization",
          "signature": "generalization : Generalization [0..*] {subsets directedRelationship}",
          "description": "Обобщения, общим классификатором которых служит этот классификатор.",
          "type": "Generalization",
          "association": "A_general_generalization",
          "owner": "A_general_generalization",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_target_directedRelationship-directedRelationship",
              "name": "directedRelationship",
              "type": "DirectedRelationship",
              "owner": {
                "type": "association",
                "name": "A_target_directedRelationship"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_generalizationSet_generalization": {
      "ends": [
        {
          "id": "Generalization-generalizationSet",
          "name": "generalizationSet",
          "signature": "generalizationSet : GeneralizationSet [0..*]",
          "description": "Наборы обобщений, членом которых является это обобщение. Обобщение может входить во множество наборов обобщений.",
          "type": "GeneralizationSet",
          "association": "A_generalizationSet_generalization",
          "owner": "A_generalizationSet_generalization",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "GeneralizationSet-generalization",
          "name": "generalization",
          "signature": "generalization : Generalization [0..*]",
          "description": "Обозначает экземпляры обобщения, являющиеся членами этого набора обобщений.",
          "type": "Generalization",
          "association": "A_generalizationSet_generalization",
          "owner": "A_generalizationSet_generalization",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_generalization_specific": {
      "ends": [
        {
          "id": "Classifier-generalization",
          "name": "generalization",
          "signature": "generalization : Generalization [0..*] {subsets directedRelationship, ownedElement}",
          "description": "Отношения обобщения этого классификатора. Эти обобщения ведут к более общим классификаторам в иерархии обобщений.",
          "type": "Generalization",
          "association": "A_generalization_specific",
          "owner": "A_generalization_specific",
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
          "id": "Generalization-specific",
          "name": "specific",
          "signature": "specific : Classifier [1..1] {subsets source, owner}",
          "description": "Конкретный (специализирующий) классификатор в отношении обобщения.",
          "type": "Classifier",
          "association": "A_generalization_specific",
          "owner": "A_generalization_specific",
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
        }
      ]
    },
    "A_inheritedMember_inheritingClassifier": {
      "ends": [
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "owner": "A_inheritedMember_inheritingClassifier",
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
          "id": "A_inheritedMember_inheritingClassifier-inheritingClassifier",
          "name": "inheritingClassifier",
          "signature": "inheritingClassifier : Classifier [0..*] {subsets memberNamespace}",
          "description": "Классификаторы, унаследовавшие этот элемент.",
          "type": "Classifier",
          "association": "A_inheritedMember_inheritingClassifier",
          "owner": "A_inheritedMember_inheritingClassifier",
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
        }
      ]
    },
    "A_inheritedParameter_redefinableTemplateSignature": {
      "ends": [
        {
          "id": "RedefinableTemplateSignature-inheritedParameter",
          "name": "inheritedParameter",
          "signature": "/inheritedParameter : TemplateParameter [0..*] {readOnly, subsets parameter}",
          "description": "Формальные параметры расширяемых сигнатур шаблонов.",
          "type": "TemplateParameter",
          "association": "A_inheritedParameter_redefinableTemplateSignature",
          "owner": "A_inheritedParameter_redefinableTemplateSignature",
          "subsets": [
            "parameter"
          ],
          "redefines": [],
          "subsettedProperties": [
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
          "id": "A_inheritedParameter_redefinableTemplateSignature-redefinableTemplateSignature",
          "name": "redefinableTemplateSignature",
          "signature": "redefinableTemplateSignature : RedefinableTemplateSignature [0..*] {subsets templateSignature}",
          "description": "Переопределяемые подписи шаблонов, унаследовавшие этот формальный параметр.",
          "type": "RedefinableTemplateSignature",
          "association": "A_inheritedParameter_redefinableTemplateSignature",
          "owner": "A_inheritedParameter_redefinableTemplateSignature",
          "subsets": [
            "templateSignature"
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
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_instance_instanceValue": {
      "ends": [
        {
          "id": "InstanceValue-instance",
          "name": "instance",
          "signature": "instance : InstanceSpecification [1..1]",
          "description": "Спецификация экземпляра, представляющая заданное значение.",
          "type": "InstanceSpecification",
          "association": "A_instance_instanceValue",
          "owner": "A_instance_instanceValue",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_instance_instanceValue-instanceValue",
          "name": "instanceValue",
          "signature": "instanceValue : InstanceValue [0..*]",
          "description": "Значения экземпляра, ссылающиеся на эту спецификацию экземпляра.",
          "type": "InstanceValue",
          "association": "A_instance_instanceValue",
          "owner": "A_instance_instanceValue",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_method_specification": {
      "ends": [
        {
          "id": "BehavioralFeature-method",
          "name": "method",
          "signature": "method : Behavior [0..*]",
          "description": "Поведение, реализующее поведенческую характеристику. Для данной пары Classifier (как владельца Behavior) и BehavioralFeature (как спецификации Behavior) может существовать не более одного Behavior.",
          "type": "Behavior",
          "association": "A_method_specification",
          "owner": "A_method_specification",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "Behavior-specification",
          "name": "specification",
          "signature": "specification : BehavioralFeature [0..1]",
          "description": "Обозначает поведенческую характеристику, которую реализует поведение. Она должна принадлежать BehavioredClassifier, владеющему поведением, или быть им унаследована. Параметры поведенческой характеристики и реализующего поведения должны совпадать. Спецификация поведению не обязательна; в этом случае оно либо является classifierBehavior некоторого BehavioredClassifier, либо может вызываться только другим поведением этого классификатора.",
          "type": "BehavioralFeature",
          "association": "A_method_specification",
          "owner": "A_method_specification",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_operation_templateParameter_parameteredElement": {
      "ends": [
        {
          "id": "Operation-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : OperationTemplateParameter [0..1] {redefines templateParameter}",
          "description": "Параметр шаблона операции, который предоставляет этот элемент как формальный параметр.",
          "type": "OperationTemplateParameter",
          "association": "A_operation_templateParameter_parameteredElement",
          "owner": "A_operation_templateParameter_parameteredElement",
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
          "id": "OperationTemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : Operation [1..1] {redefines parameteredElement}",
          "description": "Операция, предоставляемая этим параметром шаблона операции.",
          "type": "Operation",
          "association": "A_operation_templateParameter_parameteredElement",
          "owner": "A_operation_templateParameter_parameteredElement",
          "subsets": [],
          "redefines": [
            "parameteredElement"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "TemplateParameter-parameteredElement",
              "name": "parameteredElement",
              "type": "ParameterableElement",
              "owner": {
                "type": "classifier",
                "name": "TemplateParameter"
              }
            }
          ]
        }
      ]
    },
    "A_opposite_property": {
      "ends": [
        {
          "id": "Property-opposite",
          "name": "opposite",
          "signature": "/opposite : Property [0..1]",
          "description": "Когда свойство является одним из концов бинарной ассоциации, даёт другой её конец.",
          "type": "Property",
          "association": "A_opposite_property",
          "owner": "A_opposite_property",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_opposite_property-property",
          "name": "property",
          "signature": "property : Property [0..1]",
          "description": "Свойства, для которых это свойство является противоположным концом.",
          "type": "Property",
          "association": "A_opposite_property",
          "owner": "A_opposite_property",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_ownedParameterSet_behavioralFeature": {
      "ends": [
        {
          "id": "BehavioralFeature-ownedParameterSet",
          "name": "ownedParameterSet",
          "signature": "ownedParameterSet : ParameterSet [0..*] {subsets ownedMember}",
          "description": "Наборы параметров, принадлежащие этой поведенческой характеристике.",
          "type": "ParameterSet",
          "association": "A_ownedParameterSet_behavioralFeature",
          "owner": "A_ownedParameterSet_behavioralFeature",
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
          "id": "A_ownedParameterSet_behavioralFeature-behavioralFeature",
          "name": "behavioralFeature",
          "signature": "behavioralFeature : BehavioralFeature [0..1] {subsets namespace}",
          "description": "Поведенческая характеристика, владеющая набором параметров.",
          "type": "BehavioralFeature",
          "association": "A_ownedParameterSet_behavioralFeature",
          "owner": "A_ownedParameterSet_behavioralFeature",
          "subsets": [
            "namespace"
          ],
          "redefines": [],
          "subsettedProperties": [
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
        }
      ]
    },
    "A_ownedParameter_operation": {
      "ends": [
        {
          "id": "Operation-ownedParameter",
          "name": "ownedParameter",
          "signature": "ownedParameter : Parameter [0..*] {ordered, redefines ownedParameter}",
          "description": "Параметры, принадлежащие этой операции.",
          "type": "Parameter",
          "association": "A_ownedParameter_operation",
          "owner": "A_ownedParameter_operation",
          "subsets": [],
          "redefines": [
            "ownedParameter"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "BehavioralFeature-ownedParameter",
              "name": "ownedParameter",
              "type": "Parameter",
              "owner": {
                "type": "classifier",
                "name": "BehavioralFeature"
              }
            }
          ]
        },
        {
          "id": "Parameter-operation",
          "name": "operation",
          "signature": "operation : Operation [0..1] {subsets ownerFormalParam}",
          "description": "Операция, владеющая этим параметром.",
          "type": "Operation",
          "association": "A_ownedParameter_operation",
          "owner": "A_ownedParameter_operation",
          "subsets": [
            "ownerFormalParam"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_ownedParameter_ownerFormalParam-ownerFormalParam",
              "name": "ownerFormalParam",
              "type": "BehavioralFeature",
              "owner": {
                "type": "association",
                "name": "A_ownedParameter_ownerFormalParam"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_ownedParameter_ownerFormalParam": {
      "ends": [
        {
          "id": "BehavioralFeature-ownedParameter",
          "name": "ownedParameter",
          "signature": "ownedParameter : Parameter [0..*] {ordered, subsets ownedMember}",
          "description": "Упорядоченное множество формальных параметров этой поведенческой характеристики.",
          "type": "Parameter",
          "association": "A_ownedParameter_ownerFormalParam",
          "owner": "A_ownedParameter_ownerFormalParam",
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
          "id": "A_ownedParameter_ownerFormalParam-ownerFormalParam",
          "name": "ownerFormalParam",
          "signature": "ownerFormalParam : BehavioralFeature [0..1] {subsets namespace}",
          "description": "Поведенческая характеристика, владеющая формальным параметром.",
          "type": "BehavioralFeature",
          "association": "A_ownedParameter_ownerFormalParam",
          "owner": "A_ownedParameter_ownerFormalParam",
          "subsets": [
            "namespace"
          ],
          "redefines": [],
          "subsettedProperties": [
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
        }
      ]
    },
    "A_ownedTemplateSignature_classifier": {
      "ends": [
        {
          "id": "Classifier-ownedTemplateSignature",
          "name": "ownedTemplateSignature",
          "signature": "ownedTemplateSignature : RedefinableTemplateSignature [0..1] {subsets redefinableElement, redefines ownedTemplateSignature}",
          "description": "Необязательная переопределяемая подпись шаблона, задающая формальные параметры шаблона.",
          "type": "RedefinableTemplateSignature",
          "association": "A_ownedTemplateSignature_classifier",
          "owner": "A_ownedTemplateSignature_classifier",
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
          "id": "RedefinableTemplateSignature-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [1..1] {subsets redefinitionContext, redefines template}",
          "description": "Классификатор, владеющий этой переопределяемой подписью шаблона.",
          "type": "Classifier",
          "association": "A_ownedTemplateSignature_classifier",
          "owner": "A_ownedTemplateSignature_classifier",
          "subsets": [
            "redefinitionContext"
          ],
          "redefines": [
            "template"
          ],
          "subsettedProperties": [
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
          "redefinedProperties": [
            {
              "id": "TemplateSignature-template",
              "name": "template",
              "type": "TemplateableElement",
              "owner": {
                "type": "classifier",
                "name": "TemplateSignature"
              }
            }
          ]
        }
      ]
    },
    "A_ownedUseCase_classifier": {
      "ends": [
        {
          "id": "Classifier-ownedUseCase",
          "name": "ownedUseCase",
          "signature": "ownedUseCase : UseCase [0..*] {subsets ownedMember}",
          "description": "Варианты использования, принадлежащие этому классификатору.",
          "type": "UseCase",
          "association": "A_ownedUseCase_classifier",
          "owner": "A_ownedUseCase_classifier",
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
          "id": "A_ownedUseCase_classifier-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..1] {subsets namespace}",
          "description": "Классификатор, владеющий вариантом использования.",
          "type": "Classifier",
          "association": "A_ownedUseCase_classifier",
          "owner": "A_ownedUseCase_classifier",
          "subsets": [
            "namespace"
          ],
          "redefines": [],
          "subsettedProperties": [
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
        }
      ]
    },
    "A_parameterSet_parameter": {
      "ends": [
        {
          "id": "Parameter-parameterSet",
          "name": "parameterSet",
          "signature": "parameterSet : ParameterSet [0..*]",
          "description": "Наборы параметров, содержащие этот параметр. См. ParameterSet.",
          "type": "ParameterSet",
          "association": "A_parameterSet_parameter",
          "owner": "A_parameterSet_parameter",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "ParameterSet-parameter",
          "name": "parameter",
          "signature": "parameter : Parameter [1..*]",
          "description": "Параметры в наборе параметров.",
          "type": "Parameter",
          "association": "A_parameterSet_parameter",
          "owner": "A_parameterSet_parameter",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_postcondition_postContext": {
      "ends": [
        {
          "id": "Operation-postcondition",
          "name": "postcondition",
          "signature": "postcondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения на состояние системы после завершения операции.",
          "type": "Constraint",
          "association": "A_postcondition_postContext",
          "owner": "A_postcondition_postContext",
          "subsets": [
            "ownedRule"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Namespace-ownedRule",
              "name": "ownedRule",
              "type": "Constraint",
              "owner": {
                "type": "classifier",
                "name": "Namespace"
              }
            }
          ],
          "redefinedProperties": []
        },
        {
          "id": "A_postcondition_postContext-postContext",
          "name": "postContext",
          "signature": "postContext : Operation [0..1] {subsets context}",
          "description": "Операция, задающая постусловие.",
          "type": "Operation",
          "association": "A_postcondition_postContext",
          "owner": "A_postcondition_postContext",
          "subsets": [
            "context"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Constraint-context",
              "name": "context",
              "type": "Namespace",
              "owner": {
                "type": "classifier",
                "name": "Constraint"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_powertypeExtent_powertype": {
      "ends": [
        {
          "id": "Classifier-powertypeExtent",
          "name": "powertypeExtent",
          "signature": "powertypeExtent : GeneralizationSet [0..*]",
          "description": "Наборы обобщений, для которых этот классификатор является powertype.",
          "type": "GeneralizationSet",
          "association": "A_powertypeExtent_powertype",
          "owner": "A_powertypeExtent_powertype",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "GeneralizationSet-powertype",
          "name": "powertype",
          "signature": "powertype : Classifier [0..1]",
          "description": "Обозначает классификатор, определённый как powertype для связанного набора обобщений, если он есть.",
          "type": "Classifier",
          "association": "A_powertypeExtent_powertype",
          "owner": "A_powertypeExtent_powertype",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_precondition_preContext": {
      "ends": [
        {
          "id": "Operation-precondition",
          "name": "precondition",
          "signature": "precondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения на состояние системы при вызове операции.",
          "type": "Constraint",
          "association": "A_precondition_preContext",
          "owner": "A_precondition_preContext",
          "subsets": [
            "ownedRule"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Namespace-ownedRule",
              "name": "ownedRule",
              "type": "Constraint",
              "owner": {
                "type": "classifier",
                "name": "Namespace"
              }
            }
          ],
          "redefinedProperties": []
        },
        {
          "id": "A_precondition_preContext-preContext",
          "name": "preContext",
          "signature": "preContext : Operation [0..1] {subsets context}",
          "description": "Операция, задающая предусловие.",
          "type": "Operation",
          "association": "A_precondition_preContext",
          "owner": "A_precondition_preContext",
          "subsets": [
            "context"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "Constraint-context",
              "name": "context",
              "type": "Namespace",
              "owner": {
                "type": "classifier",
                "name": "Constraint"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_qualifier_associationEnd": {
      "ends": [
        {
          "id": "Property-qualifier",
          "name": "qualifier",
          "signature": "qualifier : Property [0..*] {ordered, subsets ownedElement}",
          "description": "Необязательный упорядоченный список атрибутов-квалификаторов конца.",
          "type": "Property",
          "association": "A_qualifier_associationEnd",
          "owner": "A_qualifier_associationEnd",
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
          "id": "Property-associationEnd",
          "name": "associationEnd",
          "signature": "associationEnd : Property [0..1] {subsets owner}",
          "description": "Обозначает необязательный конец ассоциации, владеющий атрибутом-квалификатором.",
          "type": "Property",
          "association": "A_qualifier_associationEnd",
          "owner": "A_qualifier_associationEnd",
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
      ]
    },
    "A_raisedException_behavioralFeature": {
      "ends": [
        {
          "id": "BehavioralFeature-raisedException",
          "name": "raisedException",
          "signature": "raisedException : Type [0..*]",
          "description": "Типы исключений, которые могут возникать при вызове поведенческой характеристики.",
          "type": "Type",
          "association": "A_raisedException_behavioralFeature",
          "owner": "A_raisedException_behavioralFeature",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_raisedException_behavioralFeature-behavioralFeature",
          "name": "behavioralFeature",
          "signature": "behavioralFeature : BehavioralFeature [0..*]",
          "description": "Поведенческие характеристики, при вызове которых может возникнуть это исключение.",
          "type": "BehavioralFeature",
          "association": "A_raisedException_behavioralFeature",
          "owner": "A_raisedException_behavioralFeature",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_raisedException_operation": {
      "ends": [
        {
          "id": "Operation-raisedException",
          "name": "raisedException",
          "signature": "raisedException : Type [0..*] {redefines raisedException}",
          "description": "Типы исключений, которые могут возникать при вызове операции.",
          "type": "Type",
          "association": "A_raisedException_operation",
          "owner": "A_raisedException_operation",
          "subsets": [],
          "redefines": [
            "raisedException"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "BehavioralFeature-raisedException",
              "name": "raisedException",
              "type": "Type",
              "owner": {
                "type": "classifier",
                "name": "BehavioralFeature"
              }
            }
          ]
        },
        {
          "id": "A_raisedException_operation-operation",
          "name": "operation",
          "signature": "operation : Operation [0..*] {subsets behavioralFeature}",
          "description": "Операции, при вызове которых может возникнуть это исключение.",
          "type": "Operation",
          "association": "A_raisedException_operation",
          "owner": "A_raisedException_operation",
          "subsets": [
            "behavioralFeature"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_raisedException_behavioralFeature-behavioralFeature",
              "name": "behavioralFeature",
              "type": "BehavioralFeature",
              "owner": {
                "type": "association",
                "name": "A_raisedException_behavioralFeature"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_redefinedClassifier_classifier": {
      "ends": [
        {
          "id": "Classifier-redefinedClassifier",
          "name": "redefinedClassifier",
          "signature": "redefinedClassifier : Classifier [0..*] {subsets redefinedElement}",
          "description": "Классификаторы, переопределяемые этим классификатором.",
          "type": "Classifier",
          "association": "A_redefinedClassifier_classifier",
          "owner": "A_redefinedClassifier_classifier",
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
          "id": "A_redefinedClassifier_classifier-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..*] {subsets redefinableElement}",
          "description": "Классификаторы, переопределяемые этим классификатором.",
          "type": "Classifier",
          "association": "A_redefinedClassifier_classifier",
          "owner": "A_redefinedClassifier_classifier",
          "subsets": [
            "redefinableElement"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_redefinedElement_redefinableElement-redefinableElement",
              "name": "redefinableElement",
              "type": "RedefinableElement",
              "owner": {
                "type": "association",
                "name": "A_redefinedElement_redefinableElement"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_redefinedElement_redefinableElement": {
      "ends": [
        {
          "id": "RedefinableElement-redefinedElement",
          "name": "redefinedElement",
          "signature": "/redefinedElement : RedefinableElement [0..*] {readOnly, union}",
          "description": "Переопределяемые элементы, которые переопределяет этот элемент.",
          "type": "RedefinableElement",
          "association": "A_redefinedElement_redefinableElement",
          "owner": "A_redefinedElement_redefinableElement",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_redefinedElement_redefinableElement-redefinableElement",
          "name": "redefinableElement",
          "signature": "/redefinableElement : RedefinableElement [0..*] {readOnly, union}",
          "description": "Переопределяемые элементы, которые переопределяет этот элемент.",
          "type": "RedefinableElement",
          "association": "A_redefinedElement_redefinableElement",
          "owner": "A_redefinedElement_redefinableElement",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_redefinedOperation_operation": {
      "ends": [
        {
          "id": "Operation-redefinedOperation",
          "name": "redefinedOperation",
          "signature": "redefinedOperation : Operation [0..*] {subsets redefinedElement}",
          "description": "Операции, переопределяемые этой операцией.",
          "type": "Operation",
          "association": "A_redefinedOperation_operation",
          "owner": "A_redefinedOperation_operation",
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
          "id": "A_redefinedOperation_operation-operation",
          "name": "operation",
          "signature": "operation : Operation [0..*] {subsets redefinableElement}",
          "description": "Операции, переопределяемые этой операцией.",
          "type": "Operation",
          "association": "A_redefinedOperation_operation",
          "owner": "A_redefinedOperation_operation",
          "subsets": [
            "redefinableElement"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_redefinedElement_redefinableElement-redefinableElement",
              "name": "redefinableElement",
              "type": "RedefinableElement",
              "owner": {
                "type": "association",
                "name": "A_redefinedElement_redefinableElement"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_redefinedProperty_property": {
      "ends": [
        {
          "id": "Property-redefinedProperty",
          "name": "redefinedProperty",
          "signature": "redefinedProperty : Property [0..*] {subsets redefinedElement}",
          "description": "Свойства, переопределяемые этим свойством, если есть.",
          "type": "Property",
          "association": "A_redefinedProperty_property",
          "owner": "A_redefinedProperty_property",
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
          "id": "A_redefinedProperty_property-property",
          "name": "property",
          "signature": "property : Property [0..*] {subsets redefinableElement}",
          "description": "Свойства, переопределяемые этим свойством.",
          "type": "Property",
          "association": "A_redefinedProperty_property",
          "owner": "A_redefinedProperty_property",
          "subsets": [
            "redefinableElement"
          ],
          "redefines": [],
          "subsettedProperties": [
            {
              "id": "A_redefinedElement_redefinableElement-redefinableElement",
              "name": "redefinableElement",
              "type": "RedefinableElement",
              "owner": {
                "type": "association",
                "name": "A_redefinedElement_redefinableElement"
              }
            }
          ],
          "redefinedProperties": []
        }
      ]
    },
    "A_redefinitionContext_redefinableElement": {
      "ends": [
        {
          "id": "RedefinableElement-redefinitionContext",
          "name": "redefinitionContext",
          "signature": "/redefinitionContext : Classifier [0..*] {readOnly, union}",
          "description": "Контексты, в которых этот элемент может быть переопределён.",
          "type": "Classifier",
          "association": "A_redefinitionContext_redefinableElement",
          "owner": "A_redefinitionContext_redefinableElement",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_redefinitionContext_redefinableElement-redefinableElement",
          "name": "redefinableElement",
          "signature": "/redefinableElement : RedefinableElement [0..*] {readOnly, union}",
          "description": "Переопределяемые элементы, контекстом переопределения которых служит этот классификатор.",
          "type": "RedefinableElement",
          "association": "A_redefinitionContext_redefinableElement",
          "owner": "A_redefinitionContext_redefinableElement",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_representation_classifier": {
      "ends": [
        {
          "id": "Classifier-representation",
          "name": "representation",
          "signature": "representation : CollaborationUse [0..1] {subsets collaborationUse}",
          "description": "Использование кооперации, указывающее кооперацию, которая представляет этот классификатор.",
          "type": "CollaborationUse",
          "association": "A_representation_classifier",
          "owner": "A_representation_classifier",
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
          "id": "A_representation_classifier-classifier",
          "name": "classifier",
          "signature": "classifier : Classifier [0..1] {redefines classifier}",
          "description": "Классификатор, представление которого задаёт это использование кооперации.",
          "type": "Classifier",
          "association": "A_representation_classifier",
          "owner": "A_representation_classifier",
          "subsets": [],
          "redefines": [
            "classifier"
          ],
          "subsettedProperties": [],
          "redefinedProperties": [
            {
              "id": "A_collaborationUse_classifier-classifier",
              "name": "classifier",
              "type": "Classifier",
              "owner": {
                "type": "association",
                "name": "A_collaborationUse_classifier"
              }
            }
          ]
        }
      ]
    },
    "A_slot_owningInstance": {
      "ends": [
        {
          "id": "InstanceSpecification-slot",
          "name": "slot",
          "signature": "slot : Slot [0..*] {subsets ownedElement}",
          "description": "Слот, задающий значение или значения структурной характеристики экземпляра. Спецификация экземпляра может иметь один слот на каждую структурную характеристику своих классификаторов, включая унаследованные характеристики. Необязательно моделировать слот для каждой структурной характеристики; в этом случае спецификация экземпляра является частичным описанием.",
          "type": "Slot",
          "association": "A_slot_owningInstance",
          "owner": "A_slot_owningInstance",
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
          "id": "Slot-owningInstance",
          "name": "owningInstance",
          "signature": "owningInstance : InstanceSpecification [1..1] {subsets owner}",
          "description": "Спецификация экземпляра, владеющая этим слотом.",
          "type": "InstanceSpecification",
          "association": "A_slot_owningInstance",
          "owner": "A_slot_owningInstance",
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
      ]
    },
    "A_specification_owningInstanceSpec": {
      "ends": [
        {
          "id": "InstanceSpecification-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация способа вычисления, вывода или построения экземпляра.",
          "type": "ValueSpecification",
          "association": "A_specification_owningInstanceSpec",
          "owner": "A_specification_owningInstanceSpec",
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
          "id": "A_specification_owningInstanceSpec-owningInstanceSpec",
          "name": "owningInstanceSpec",
          "signature": "owningInstanceSpec : InstanceSpecification [0..1] {subsets owner}",
          "description": "Спецификация экземпляра, владеющая этой спецификацией значения.",
          "type": "InstanceSpecification",
          "association": "A_specification_owningInstanceSpec",
          "owner": "A_specification_owningInstanceSpec",
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
      ]
    },
    "A_subsettedProperty_property": {
      "ends": [
        {
          "id": "Property-subsettedProperty",
          "name": "subsettedProperty",
          "signature": "subsettedProperty : Property [0..*]",
          "description": "Свойства, подмножеством которых это свойство ограничено быть, если есть.",
          "type": "Property",
          "association": "A_subsettedProperty_property",
          "owner": "A_subsettedProperty_property",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_subsettedProperty_property-property",
          "name": "property",
          "signature": "property : Property [0..*]",
          "description": "Свойства, подмножествами которых являются эти свойства.",
          "type": "Property",
          "association": "A_subsettedProperty_property",
          "owner": "A_subsettedProperty_property",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_substitution_substitutingClassifier": {
      "ends": [
        {
          "id": "Classifier-substitution",
          "name": "substitution",
          "signature": "substitution : Substitution [0..*] {subsets ownedElement, clientDependency}",
          "description": "Подстановки, принадлежащие этому классификатору.",
          "type": "Substitution",
          "association": "A_substitution_substitutingClassifier",
          "owner": "A_substitution_substitutingClassifier",
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
          "id": "Substitution-substitutingClassifier",
          "name": "substitutingClassifier",
          "signature": "substitutingClassifier : Classifier [1..1] {subsets client, owner}",
          "description": "Экземпляры подставляющего классификатора могут подставляться во время выполнения там, где ожидаются экземпляры классификатора контракта.",
          "type": "Classifier",
          "association": "A_substitution_substitutingClassifier",
          "owner": "A_substitution_substitutingClassifier",
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
      ]
    },
    "A_type_operation": {
      "ends": [
        {
          "id": "Operation-type",
          "name": "type",
          "signature": "/type : Type [0..1] {readOnly}",
          "description": "Возвращаемый тип операции, если он есть; выводится из возвращаемого параметра.",
          "type": "Type",
          "association": "A_type_operation",
          "owner": "A_type_operation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        },
        {
          "id": "A_type_operation-operation",
          "name": "operation",
          "signature": "operation : Operation [0..*]",
          "description": "Операции, возвращаемым типом которых служит этот тип.",
          "type": "Operation",
          "association": "A_type_operation",
          "owner": "A_type_operation",
          "subsets": [],
          "redefines": [],
          "subsettedProperties": [],
          "redefinedProperties": []
        }
      ]
    },
    "A_value_owningSlot": {
      "ends": [
        {
          "id": "Slot-value",
          "name": "value",
          "signature": "value : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Значение или значения, хранящиеся в слоте.",
          "type": "ValueSpecification",
          "association": "A_value_owningSlot",
          "owner": "A_value_owningSlot",
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
          "id": "A_value_owningSlot-owningSlot",
          "name": "owningSlot",
          "signature": "owningSlot : Slot [0..1] {subsets owner}",
          "description": "Слот, владеющий этим значением.",
          "type": "Slot",
          "association": "A_value_owningSlot",
          "owner": "A_value_owningSlot",
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
      ]
    }
  },
  "generalizations": {
    "Abstraction": [
      "Dependency"
    ],
    "BehavioralFeature": [
      "Feature",
      "Namespace"
    ],
    "Classifier": [
      "Namespace",
      "Type",
      "TemplateableElement",
      "RedefinableElement"
    ],
    "ClassifierTemplateParameter": [
      "TemplateParameter"
    ],
    "Comment": [
      "Element"
    ],
    "ConnectableElement": [
      "TypedElement",
      "ParameterableElement"
    ],
    "Constraint": [
      "PackageableElement"
    ],
    "Dependency": [
      "DirectedRelationship",
      "PackageableElement"
    ],
    "DeployedArtifact": [
      "NamedElement"
    ],
    "DeploymentTarget": [
      "NamedElement"
    ],
    "DirectedRelationship": [
      "Relationship"
    ],
    "Duration": [
      "ValueSpecification"
    ],
    "DurationConstraint": [
      "IntervalConstraint"
    ],
    "DurationInterval": [
      "Interval"
    ],
    "DurationObservation": [
      "Observation"
    ],
    "Element": [],
    "ElementImport": [
      "DirectedRelationship"
    ],
    "Expression": [
      "ValueSpecification"
    ],
    "Feature": [
      "RedefinableElement"
    ],
    "Generalization": [
      "DirectedRelationship"
    ],
    "GeneralizationSet": [
      "PackageableElement"
    ],
    "InstanceSpecification": [
      "DeploymentTarget",
      "PackageableElement",
      "DeployedArtifact"
    ],
    "InstanceValue": [
      "ValueSpecification"
    ],
    "Interval": [
      "ValueSpecification"
    ],
    "IntervalConstraint": [
      "Constraint"
    ],
    "LiteralBoolean": [
      "LiteralSpecification"
    ],
    "LiteralInteger": [
      "LiteralSpecification"
    ],
    "LiteralNull": [
      "LiteralSpecification"
    ],
    "LiteralReal": [
      "LiteralSpecification"
    ],
    "LiteralSpecification": [
      "ValueSpecification"
    ],
    "LiteralString": [
      "LiteralSpecification"
    ],
    "LiteralUnlimitedNatural": [
      "LiteralSpecification"
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
    "Observation": [
      "PackageableElement"
    ],
    "OpaqueExpression": [
      "ValueSpecification"
    ],
    "Operation": [
      "TemplateableElement",
      "ParameterableElement",
      "BehavioralFeature"
    ],
    "OperationTemplateParameter": [
      "TemplateParameter"
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
    "Parameter": [
      "MultiplicityElement",
      "ConnectableElement"
    ],
    "ParameterSet": [
      "NamedElement"
    ],
    "ParameterableElement": [
      "Element"
    ],
    "Property": [
      "ConnectableElement",
      "DeploymentTarget",
      "StructuralFeature"
    ],
    "Realization": [
      "Abstraction"
    ],
    "RedefinableElement": [
      "NamedElement"
    ],
    "RedefinableTemplateSignature": [
      "RedefinableElement",
      "TemplateSignature"
    ],
    "Relationship": [
      "Element"
    ],
    "Slot": [
      "Element"
    ],
    "StringExpression": [
      "TemplateableElement",
      "Expression"
    ],
    "StructuralFeature": [
      "MultiplicityElement",
      "TypedElement",
      "Feature"
    ],
    "Substitution": [
      "Realization"
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
    "TimeConstraint": [
      "IntervalConstraint"
    ],
    "TimeExpression": [
      "ValueSpecification"
    ],
    "TimeInterval": [
      "Interval"
    ],
    "TimeObservation": [
      "Observation"
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
    "BehavioralFeature": "Поведенческая характеристика — это характеристика классификатора, задающая аспект поведения его экземпляров. Она реализуется поведением. Поведенческая характеристика указывает, что классификатор отвечает на заданный запрос вызовом реализующего её метода.",
    "Classifier": "Классификатор представляет классификацию экземпляров по их характеристикам.",
    "ClassifierTemplateParameter": "Параметр шаблона классификатора предоставляет классификатор как формальный параметр шаблона.",
    "Comment": "A Comment is a textual annotation that can be attached to a set of Elements.",
    "ConnectableElement": "ConnectableElement is an abstract metaclass representing a set of instances that play roles of a StructuredClassifier. ConnectableElements may be joined by attached Connectors and specify configurations of linked instances to be created within an instance of the containing StructuredClassifier.",
    "Constraint": "A Constraint is a condition or restriction expressed in natural language text or in a machine readable language for the purpose of declaring some of the semantics of an Element or set of Elements.",
    "Dependency": "A Dependency is a Relationship that signifies that a single model Element or a set of model Elements requires other model Elements for their specification or implementation. This means that the complete semantics of the client Element(s) are either semantically or structurally dependent on the definition of the supplier Element(s).",
    "DeployedArtifact": "A deployed artifact is an artifact or artifact instance that has been deployed to a deployment target.",
    "DeploymentTarget": "A deployment target is the location for a deployed artifact.",
    "DirectedRelationship": "A DirectedRelationship represents a relationship between a collection of source model Elements and a collection of target model Elements.",
    "Duration": "A Duration is a ValueSpecification that specifies the temporal distance between two time instants.",
    "DurationConstraint": "A DurationConstraint is a Constraint that refers to a DurationInterval.",
    "DurationInterval": "A DurationInterval defines the range between two Durations.",
    "DurationObservation": "A DurationObservation is a reference to a duration during an execution. It points out the NamedElement(s) in the model to observe and whether the observations are when this NamedElement is entered or when it is exited.",
    "Element": "An Element is a constituent of a model. As such, it has the capability of owning other Elements.",
    "ElementImport": "An ElementImport identifies a NamedElement in a Namespace other than the one that owns that NamedElement and allows the NamedElement to be referenced using an unqualified name in the Namespace owning the ElementImport.",
    "Expression": "Узел дерева выражения, который может быть терминальным или нетерминальным. Задаёт символ и, возможно, пустую последовательность операндов — спецификаций значений. При вычислении в контексте обозначает, возможно, пустое множество значений.",
    "Feature": "Характеристика объявляет поведенческую или структурную характеристику классификаторов.",
    "Generalization": "Обобщение — таксономическое отношение между более общим и более конкретным классификаторами. Каждый экземпляр конкретного классификатора является также экземпляром общего классификатора. Конкретный классификатор наследует характеристики более общего классификатора. Обобщение принадлежит конкретному классификатору.",
    "GeneralizationSet": "Набор обобщений — упаковываемый элемент, экземпляры которого представляют множества отношений обобщения.",
    "InstanceSpecification": "Спецификация экземпляра — элемент модели, представляющий экземпляр в моделируемой системе. Она может выступать как цель развёртывания в отношении развёртывания, если представляет экземпляр узла, а также как развёрнутый артефакт, если представляет экземпляр артефакта.",
    "InstanceValue": "Значение экземпляра — это спецификация значения, которая идентифицирует экземпляр.",
    "Interval": "An Interval defines the range between two ValueSpecifications.",
    "IntervalConstraint": "An IntervalConstraint is a Constraint that is specified by an Interval.",
    "LiteralBoolean": "A LiteralBoolean is a specification of a Boolean value.",
    "LiteralInteger": "A LiteralInteger is a specification of an Integer value.",
    "LiteralNull": "A LiteralNull specifies the lack of a value.",
    "LiteralReal": "A LiteralReal is a specification of a Real value.",
    "LiteralSpecification": "A LiteralSpecification identifies a literal constant being modeled.",
    "LiteralString": "A LiteralString is a specification of a String value.",
    "LiteralUnlimitedNatural": "A LiteralUnlimitedNatural is a specification of an UnlimitedNatural number.",
    "MultiplicityElement": "A multiplicity is a definition of an inclusive interval of non-negative integers beginning with a lower bound and ending with a (possibly infinite) upper bound. A MultiplicityElement embeds this information to specify the allowable cardinalities for an instantiation of the Element.",
    "NamedElement": "A NamedElement is an Element in a model that may have a name. The name may be given directly and/or via the use of a StringExpression.",
    "Namespace": "A Namespace is an Element in a model that owns and/or imports a set of NamedElements that can be identified by name.",
    "Observation": "Observation specifies a value determined by observing an event or events that occur relative to other model Elements.",
    "OpaqueExpression": "An OpaqueExpression is a ValueSpecification that specifies the computation of a collection of values either in terms of a UML Behavior or based on a textual statement in a language other than UML",
    "Operation": "Операция — поведенческая характеристика классификатора, задающая имя, тип, параметры и ограничения для вызова связанного поведения. Операция может вызывать как выполнение поведений-методов, так и другие поведенческие отклики. Операция специализирует TemplateableElement, чтобы поддерживать задание шаблонных операций и связанных операций, и ParameterableElement, чтобы операцию можно было предоставлять как формальный параметр шаблона и передавать как фактический параметр привязки шаблона.",
    "OperationTemplateParameter": "Параметр шаблона операции предоставляет операцию как формальный параметр шаблона.",
    "Package": "A package can have one or more profile applications to indicate which profiles have been applied. Because a profile is a package, it is possible to apply a profile not only to packages, but also to profiles.\nPackage specializes TemplateableElement and PackageableElement specializes ParameterableElement to specify that a package can be used as a template and a PackageableElement as a template parameter.\nA package is used to group elements, and provides a namespace for the grouped elements.",
    "PackageImport": "A PackageImport is a Relationship that imports all the non-private members of a Package into the Namespace owning the PackageImport, so that those Elements may be referred to by their unqualified names in the importingNamespace.",
    "PackageableElement": "A PackageableElement is a NamedElement that may be owned directly by a Package. A PackageableElement is also able to serve as the parameteredElement of a TemplateParameter.",
    "Parameter": "Параметр — спецификация аргумента, используемого для передачи информации на вход или выход при вызове поведенческой характеристики. Параметры можно рассматривать как соединяемые элементы внутри коопераций.",
    "ParameterSet": "Набор параметров обозначает альтернативные множества входов или выходов, которые поведение может использовать.",
    "ParameterableElement": "A ParameterableElement is an Element that can be exposed as a formal TemplateParameter for a template, or specified as an actual parameter in a binding of a template.",
    "Property": "Свойство — структурная характеристика. Свойство, связанное отношением ownedAttribute с классификатором (отличным от ассоциации), представляет атрибут и может также представлять конец ассоциации; оно относит экземпляр классификатора к значению или множеству значений типа атрибута. Свойство, связанное отношением memberEnd с ассоциацией, представляет конец ассоциации; тип свойства является типом конца ассоциации. Свойство может выступать как цель развёртывания в отношении развёртывания, что позволяет моделировать развёртывание на иерархических узлах, чьи свойства выполняют роль внутренних частей. Свойство специализирует ParameterableElement, чтобы его можно было предоставлять как формальный параметр шаблона и передавать как фактический параметр привязки шаблона.",
    "Realization": "Realization is a specialized Abstraction relationship between two sets of model Elements, one representing a specification (the supplier) and the other represents an implementation of the latter (the client). Realization can be used to model stepwise refinement, optimizations, transformations, templates, model synthesis, framework composition, etc.",
    "RedefinableElement": "Переопределяемый элемент — элемент, который, будучи определённым в контексте классификатора, может быть переопределён более конкретно или иначе в контексте другого классификатора, специализирующего (прямо или косвенно) контекстный классификатор.",
    "RedefinableTemplateSignature": "Переопределяемая подпись шаблона поддерживает добавление формальных параметров шаблона в специализации шаблонного классификатора.",
    "Relationship": "Relationship is an abstract concept that specifies some kind of relationship between Elements.",
    "Slot": "Слот обозначает, что сущность, смоделированная спецификацией экземпляра, имеет значение или значения для конкретной структурной характеристики.",
    "StringExpression": "A StringExpression is an Expression that specifies a String value that is derived by concatenating a sequence of operands with String values or a sequence of subExpressions, some of which might be template parameters.",
    "StructuralFeature": "Структурная характеристика — типизированная характеристика классификатора, задающая структуру экземпляров классификатора.",
    "Substitution": "Подстановка — отношение между двумя классификаторами, означающее, что подставляющий классификатор соответствует контракту, заданному классификатором контракта. Это означает, что экземпляры подставляющего классификатора могут подставляться во время выполнения там, где ожидаются экземпляры классификатора контракта.",
    "TemplateBinding": "A TemplateBinding is a DirectedRelationship between a TemplateableElement and a template. A TemplateBinding specifies the TemplateParameterSubstitutions of actual parameters for the formal parameters of the template.",
    "TemplateParameter": "A TemplateParameter exposes a ParameterableElement as a formal parameter of a template.",
    "TemplateParameterSubstitution": "A TemplateParameterSubstitution relates the actual parameter to a formal TemplateParameter as part of a template binding.",
    "TemplateSignature": "A Template Signature bundles the set of formal TemplateParameters for a template.",
    "TemplateableElement": "A TemplateableElement is an Element that can optionally be defined as a template and bound to other templates.",
    "TimeConstraint": "A TimeConstraint is a Constraint that refers to a TimeInterval.",
    "TimeExpression": "A TimeExpression is a ValueSpecification that represents a time value.",
    "TimeInterval": "A TimeInterval defines the range between two TimeExpressions.",
    "TimeObservation": "A TimeObservation is a reference to a time instant during an execution. It points out the NamedElement in the model to observe and whether the observation is when this NamedElement is entered or when it is exited.",
    "Type": "A Type constrains the values represented by a TypedElement.",
    "TypedElement": "A TypedElement is a NamedElement that may have a Type specified for it.",
    "Usage": "A Usage is a Dependency in which the client Element requires the supplier Element (or set of Elements) for its full implementation or operation.",
    "ValueSpecification": "A ValueSpecification is the specification of a (possibly empty) set of values. A ValueSpecification is a ParameterableElement that may be exposed as a formal TemplateParameter and provided as the actual parameter in the binding of a template."
  }
};
