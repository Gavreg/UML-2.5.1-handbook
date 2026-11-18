window.UML_XMI_DATA = {
  "source": "OMG UML 2.5.1, formal/17-12-05, UML.xmi (20161101)",
  "classes": {
    "Element": {
      "direct": [
        {
          "id": "Element-ownedComment",
          "name": "ownedComment",
          "signature": "ownedComment : Comment [0..*] {subsets ownedElement}",
          "description": "Комментарии, принадлежащие элементу.",
          "type": "Comment",
          "association": "A_ownedComment_owningElement",
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
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
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": []
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": []
        }
      ],
      "inherited": []
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
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
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
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
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Comment",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Element-ownedComment",
          "name": "ownedComment",
          "signature": "ownedComment : Comment [0..*] {subsets ownedElement}",
          "description": "Комментарии, принадлежащие элементу.",
          "type": "Comment",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Comment",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "A_annotatedElement_comment-comment",
          "name": "comment",
          "signature": "comment : Comment [0..*]",
          "description": "Комментарии, присоединённые к элементу.",
          "type": "Comment",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateParameter",
          "subsets": [
            "templateSignature",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "TemplateSignature-ownedParameter",
          "name": "ownedParameter",
          "signature": "ownedParameter : TemplateParameter [0..*] {ordered, subsets ownedElement, parameter}",
          "description": "Формальные параметры, принадлежащие подписи.",
          "type": "TemplateParameter",
          "association": "A_ownedParameter_signature",
          "inverse": true,
          "owner": "TemplateParameter",
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
          "inverse": true,
          "owner": "TemplateParameter",
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
          "inverse": true,
          "owner": "TemplateParameter",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_ownedDefault_templateParameter-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : TemplateParameter [0..1] {subsets owner, redefines templateParameter}",
          "description": "Параметр шаблона, владеющий значением по умолчанию.",
          "type": "TemplateParameter",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "TemplateParameter",
          "subsets": [
            "owner"
          ],
          "redefines": [
            "templateParameter"
          ]
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "TemplateParameter",
          "subsets": [
            "owner",
            "templateParameter"
          ],
          "redefines": []
        },
        {
          "id": "A_default_templateParameter-templateParameter",
          "name": "templateParameter",
          "signature": "templateParameter : TemplateParameter [0..*]",
          "description": "Параметры шаблона, для которых элемент задан как значение по умолчанию.",
          "type": "TemplateParameter",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "TemplateParameter",
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
          "inverse": true,
          "owner": "TemplateParameter",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "RedefinableTemplateSignature-inheritedParameter",
          "name": "inheritedParameter",
          "signature": "/inheritedParameter : TemplateParameter [0..*] {readOnly, subsets parameter}",
          "description": "Формальные параметры расширяемых сигнатур шаблонов.",
          "type": "TemplateParameter",
          "association": "A_inheritedParameter_redefinableTemplateSignature",
          "inverse": true,
          "owner": "TemplateParameter",
          "subsets": [
            "parameter"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateSignature",
          "subsets": [
            "owner"
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
          "inverse": true,
          "owner": "TemplateSignature",
          "subsets": [
            "templateSignature",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "A_parameter_templateSignature-templateSignature",
          "name": "templateSignature",
          "signature": "templateSignature : TemplateSignature [0..*]",
          "description": "Подписи, включающие параметр шаблона.",
          "type": "TemplateSignature",
          "association": "A_parameter_templateSignature",
          "inverse": true,
          "owner": "TemplateSignature",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "TemplateBinding-signature",
          "name": "signature",
          "signature": "signature : TemplateSignature [1..1] {subsets target}",
          "description": "Подпись целевого шаблона.",
          "type": "TemplateSignature",
          "association": "A_signature_templateBinding",
          "inverse": true,
          "owner": "TemplateSignature",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "TemplateableElement-ownedTemplateSignature",
          "name": "ownedTemplateSignature",
          "signature": "ownedTemplateSignature : TemplateSignature [0..1] {subsets ownedElement}",
          "description": "Необязательная подпись, делающая элемент шаблоном.",
          "type": "TemplateSignature",
          "association": "A_ownedTemplateSignature_template",
          "inverse": true,
          "owner": "TemplateSignature",
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateableElement",
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
          "inverse": true,
          "owner": "TemplateableElement",
          "subsets": [
            "source",
            "owner"
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
          "inverse": true,
          "owner": "TemplateableElement",
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
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
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": []
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
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
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": []
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateBinding",
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
          "inverse": true,
          "owner": "TemplateBinding",
          "subsets": [
            "directedRelationship"
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
          "inverse": true,
          "owner": "TemplateBinding",
          "subsets": [
            "owner"
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
          "inverse": true,
          "owner": "TemplateBinding",
          "subsets": [
            "directedRelationship",
            "ownedElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateParameterSubstitution",
          "subsets": [
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "A_actual_templateParameterSubstitution-templateParameterSubstitution",
          "name": "templateParameterSubstitution",
          "signature": "templateParameterSubstitution : TemplateParameterSubstitution [0..*]",
          "description": "Подстановки, в которых элемент выступает фактическим параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "TemplateParameterSubstitution",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_ownedActual_owningTemplateParameterSubstitution-owningTemplateParameterSubstitution",
          "name": "owningTemplateParameterSubstitution",
          "signature": "owningTemplateParameterSubstitution : TemplateParameterSubstitution [0..1] {subsets owner, redefines templateParameterSubstitution}",
          "description": "Подстановка, владеющая фактическим параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "TemplateParameterSubstitution",
          "subsets": [
            "owner"
          ],
          "redefines": [
            "templateParameterSubstitution"
          ]
        },
        {
          "id": "A_formal_templateParameterSubstitution-templateParameterSubstitution",
          "name": "templateParameterSubstitution",
          "signature": "templateParameterSubstitution : TemplateParameterSubstitution [0..*]",
          "description": "Подстановки, в которых параметр выступает формальным параметром.",
          "type": "TemplateParameterSubstitution",
          "association": "A_formal_templateParameterSubstitution",
          "inverse": true,
          "owner": "TemplateParameterSubstitution",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "TemplateBinding-parameterSubstitution",
          "name": "parameterSubstitution",
          "signature": "parameterSubstitution : TemplateParameterSubstitution [0..*] {subsets ownedElement}",
          "description": "Подстановки параметров, принадлежащие привязке.",
          "type": "TemplateParameterSubstitution",
          "association": "A_parameterSubstitution_templateBinding",
          "inverse": true,
          "owner": "TemplateParameterSubstitution",
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Namespace",
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
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "source",
            "owner"
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
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "memberNamespace",
            "owner"
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
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "namespace"
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
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "A_member_memberNamespace-memberNamespace",
          "name": "memberNamespace",
          "signature": "/memberNamespace : Namespace [0..*] {readOnly, union}",
          "description": "Пространства имён, членом которых является элемент.",
          "type": "Namespace",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_importedMember_namespace-namespace",
          "name": "namespace",
          "signature": "namespace : Namespace [0..*] {subsets memberNamespace}",
          "description": "Пространства имён, в которые элемент добавлен импортом.",
          "type": "Namespace",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "memberNamespace"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": []
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
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
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
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
          "inverse": true,
          "owner": "NamedElement",
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
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        }
      ]
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "ElementImport",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Profile-metaclassReference",
          "name": "metaclassReference",
          "signature": "metaclassReference : ElementImport [0..*] {subsets elementImport}",
          "description": "Импорт метакласса, который может быть расширен профилем.",
          "type": "ElementImport",
          "association": "A_metaclassReference_profile",
          "inverse": true,
          "owner": "ElementImport",
          "subsets": [
            "elementImport"
          ],
          "redefines": []
        },
        {
          "id": "Namespace-elementImport",
          "name": "elementImport",
          "signature": "elementImport : ElementImport [0..*] {subsets directedRelationship, ownedElement}",
          "description": "Импорты отдельных элементов, принадлежащие пространству имён.",
          "type": "ElementImport",
          "association": "A_elementImport_importingNamespace",
          "inverse": true,
          "owner": "ElementImport",
          "subsets": [
            "directedRelationship",
            "ownedElement"
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
          "inverse": true,
          "owner": "ElementImport",
          "subsets": [
            "directedRelationship"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "PackageImport",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Profile-metamodelReference",
          "name": "metamodelReference",
          "signature": "metamodelReference : PackageImport [0..*] {subsets packageImport}",
          "description": "Импорт пакета, содержащего прямо или косвенно расширяемые метаклассы.",
          "type": "PackageImport",
          "association": "A_metamodelReference_profile",
          "inverse": true,
          "owner": "PackageImport",
          "subsets": [
            "packageImport"
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
          "inverse": true,
          "owner": "PackageImport",
          "subsets": [
            "directedRelationship"
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
          "inverse": true,
          "owner": "PackageImport",
          "subsets": [
            "directedRelationship",
            "ownedElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ]
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
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
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": []
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": []
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": []
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": []
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
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "StringExpression",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "NamedElement-nameExpression",
          "name": "nameExpression",
          "signature": "nameExpression : StringExpression [0..1] {subsets ownedElement}",
          "description": "Выражение, определяющее имя элемента.",
          "type": "StringExpression",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateableElement",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "TemplateableElement"
        },
        {
          "id": "TemplateBinding-boundElement",
          "name": "boundElement",
          "signature": "boundElement : TemplateableElement [1..1] {subsets source, owner}",
          "description": "Элемент, к которому применяется привязка.",
          "type": "TemplateableElement",
          "association": "A_templateBinding_boundElement",
          "inverse": true,
          "owner": "TemplateableElement",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "TemplateableElement"
        },
        {
          "id": "TemplateSignature-template",
          "name": "template",
          "signature": "template : TemplateableElement [1..1] {subsets owner}",
          "description": "Элемент-шаблон, владеющий подписью.",
          "type": "TemplateableElement",
          "association": "A_ownedTemplateSignature_template",
          "inverse": true,
          "owner": "TemplateableElement",
          "subsets": [
            "owner"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Expression",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Expression"
        },
        {
          "id": "A_operand_expression-expression",
          "name": "expression",
          "signature": "expression : Expression [0..1] {subsets owner}",
          "description": "Выражение, которому принадлежит операнд.",
          "type": "Expression",
          "association": "A_operand_expression",
          "inverse": true,
          "owner": "Expression",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Expression"
        },
        {
          "id": "ObjectNode-upperBound",
          "name": "upperBound",
          "signature": "upperBound : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число маркеров в узле объектов; при достижении границы новые маркеры не поступают, а при её отсутствии ограничения нет.",
          "type": "ValueSpecification",
          "association": "A_upperBound_objectNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "JoinNode-joinSpec",
          "name": "joinSpec",
          "signature": "joinSpec : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Условие, при котором узел слияния предлагает маркер на исходящем ребре; по умолчанию требуются маркеры на всех входящих рёбрах.",
          "type": "ValueSpecification",
          "association": "A_joinSpec_joinNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ActivityEdge-weight",
          "name": "weight",
          "signature": "weight : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число маркеров, которые должны одновременно проходить по ребру; по умолчанию равно 1.",
          "type": "ValueSpecification",
          "association": "A_weight_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ActivityEdge-guard",
          "name": "guard",
          "signature": "guard : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, определяющая, может ли маркер проходить по ребру деятельности; при её отсутствии прохождение не ограничено.",
          "type": "ValueSpecification",
          "association": "A_guard_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "TimeExpression-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая значение временного выражения.",
          "type": "ValueSpecification",
          "association": "A_expr_timeExpression",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Interval-max",
          "name": "max",
          "signature": "max : ValueSpecification [1..1]",
          "description": "Спецификация максимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_max_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Interval-min",
          "name": "min",
          "signature": "min : ValueSpecification [1..1]",
          "description": "Спецификация минимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_min_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Duration-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая длительность.",
          "type": "ValueSpecification",
          "association": "A_expr_duration",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Message-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Аргументы сообщения.",
          "type": "ValueSpecification",
          "association": "A_argument_message",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Lifeline-selector",
          "name": "selector",
          "signature": "selector : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Если соединяемый элемент многозначен, задаёт конкретную часть внутри этого множества.",
          "type": "ValueSpecification",
          "association": "A_selector_lifeline",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionUse-returnValue",
          "name": "returnValue",
          "signature": "returnValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Значение выполненного взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_returnValue_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionUse-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Фактические аргументы взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_argument_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionConstraint-minint",
          "name": "minint",
          "signature": "minint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_minint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionConstraint-maxint",
          "name": "maxint",
          "signature": "maxint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_maxint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "MultiplicityElement-lowerValue",
          "name": "lowerValue",
          "signature": "lowerValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация нижней границы.",
          "type": "ValueSpecification",
          "association": "A_lowerValue_owningLower",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "MultiplicityElement-upperValue",
          "name": "upperValue",
          "signature": "upperValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация верхней границы.",
          "type": "ValueSpecification",
          "association": "A_upperValue_owningUpper",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Constraint-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Условие, которое должно быть истинным для выполнения ограничения.",
          "type": "ValueSpecification",
          "association": "A_specification_owningConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ChangeEvent-changeExpression",
          "name": "changeExpression",
          "signature": "changeExpression : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Логическая спецификация значения; событие изменения происходит при смене её значения с false на true.",
          "type": "ValueSpecification",
          "association": "A_changeExpression_changeEvent",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Slot-value",
          "name": "value",
          "signature": "value : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Значение или значения, хранящиеся в слоте.",
          "type": "ValueSpecification",
          "association": "A_value_owningSlot",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Property-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningProperty",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Parameter-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, используемого, если аргумент параметра не передан.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningParameter",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InstanceSpecification-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация способа вычисления, вывода или построения экземпляра.",
          "type": "ValueSpecification",
          "association": "A_specification_owningInstanceSpec",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ValuePin-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляемого для получения значения контакта значения.",
          "type": "ValueSpecification",
          "association": "A_value_valuePin",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ValueSpecificationAction-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, которое требуется вычислить.",
          "type": "ValueSpecification",
          "association": "A_value_valueSpecificationAction",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "TypedElement-type",
          "name": "type",
          "signature": "type : Type [0..1]",
          "description": "Тип элемента.",
          "type": "Type",
          "association": "A_type_typedElement",
          "inverse": false,
          "owner": "TypedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "TypedElement"
        },
        {
          "id": "A_type_typedElement-typedElement",
          "name": "typedElement",
          "signature": "typedElement : TypedElement [0..*]",
          "description": "Типизированные элементы, для которых задан этот тип.",
          "type": "TypedElement",
          "association": "A_type_typedElement",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Extend-condition",
          "name": "condition",
          "signature": "condition : Constraint [0..1] {subsets ownedElement}",
          "description": "Условие, которое должно выполняться при достижении первой точки расширения; без него расширение безусловно.",
          "type": "Constraint",
          "association": "A_condition_extend",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Transition-guard",
          "name": "guard",
          "signature": "guard : Constraint [0..1] {subsets ownedRule}",
          "description": "Ограничение-сторож, управляющее срабатыванием перехода; оно вычисляется без побочных эффектов.",
          "type": "Constraint",
          "association": "A_guard_transition",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "State-stateInvariant",
          "name": "stateInvariant",
          "signature": "stateInvariant : Constraint [0..1] {subsets ownedRule}",
          "description": "Условия, которые всегда истинны, пока это состояние является текущим.",
          "type": "Constraint",
          "association": "A_stateInvariant_owningState",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "ProtocolTransition-preCondition",
          "name": "preCondition",
          "signature": "preCondition : Constraint [0..1] {subsets guard}",
          "description": "Предусловие перехода, проверяемое перед его срабатыванием.",
          "type": "Constraint",
          "association": "A_preCondition_protocolTransition",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "guard"
          ],
          "redefines": []
        },
        {
          "id": "ProtocolTransition-postCondition",
          "name": "postCondition",
          "signature": "postCondition : Constraint [0..1] {subsets ownedRule}",
          "description": "Постусловие перехода, которое должно выполняться после его срабатывания и входит в постусловие связанной операции.",
          "type": "Constraint",
          "association": "A_postCondition_owningTransition",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "StateInvariant-invariant",
          "name": "invariant",
          "signature": "invariant : Constraint [1..1] {subsets ownedElement}",
          "description": "Ограничение, которое должно выполняться во время выполнения для этого инварианта состояния.",
          "type": "Constraint",
          "association": "A_invariant_stateInvariant",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
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
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedMember"
          ],
          "redefines": []
        },
        {
          "id": "A_constrainedElement_constraint-constraint",
          "name": "constraint",
          "signature": "constraint : Constraint [0..*]",
          "description": "Ограничения, применяемые к элементу.",
          "type": "Constraint",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_specification_owningConstraint-owningConstraint",
          "name": "owningConstraint",
          "signature": "owningConstraint : Constraint [0..1] {subsets owner}",
          "description": "Ограничение, владеющее спецификацией условия.",
          "type": "Constraint",
          "association": "A_specification_owningConstraint",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "Behavior-precondition",
          "name": "precondition",
          "signature": "precondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения, которые должны выполняться перед вызовом поведения.",
          "type": "Constraint",
          "association": "A_precondition_behavior",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "Behavior-postcondition",
          "name": "postcondition",
          "signature": "postcondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения, выполняемые после завершения поведения, если перед вызовом были выполнены предусловия.",
          "type": "Constraint",
          "association": "A_postcondition_behavior",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "ParameterSet-condition",
          "name": "condition",
          "signature": "condition : Constraint [0..*] {subsets ownedElement}",
          "description": "Ограничение, определяющее возможность начала или завершения выполнения со значениями параметров набора.",
          "type": "Constraint",
          "association": "A_condition_parameterSet",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Operation-bodyCondition",
          "name": "bodyCondition",
          "signature": "bodyCondition : Constraint [0..1] {subsets ownedRule}",
          "description": "Необязательное ограничение на значения результата вызова операции.",
          "type": "Constraint",
          "association": "A_bodyCondition_bodyContext",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "Operation-postcondition",
          "name": "postcondition",
          "signature": "postcondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения на состояние системы после завершения операции.",
          "type": "Constraint",
          "association": "A_postcondition_postContext",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "Operation-precondition",
          "name": "precondition",
          "signature": "precondition : Constraint [0..*] {subsets ownedRule}",
          "description": "Необязательные ограничения на состояние системы при вызове операции.",
          "type": "Constraint",
          "association": "A_precondition_preContext",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedRule"
          ],
          "redefines": []
        },
        {
          "id": "Action-localPrecondition",
          "name": "localPrecondition",
          "signature": "localPrecondition : Constraint [0..*] {subsets ownedElement}",
          "description": "Ограничение, которое должно выполняться перед началом выполнения действия.",
          "type": "Constraint",
          "association": "A_localPrecondition_action",
          "inverse": true,
          "owner": "Constraint",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Action-localPostcondition",
          "name": "localPostcondition",
          "signature": "localPostcondition : Constraint [0..*] {subsets ownedElement}",
          "description": "Ограничение, которое должно выполняться после завершения выполнения действия.",
          "type": "Constraint",
          "association": "A_localPostcondition_action",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Package",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "PackageMerge-mergedPackage",
          "name": "mergedPackage",
          "signature": "mergedPackage : Package [1..1] {subsets target}",
          "description": "Пакет, содержимое которого объединяется с принимающим пакетом.",
          "type": "Package",
          "association": "A_mergedPackage_packageMerge",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "A_packagedElement_owningPackage-owningPackage",
          "name": "owningPackage",
          "signature": "owningPackage : Package [0..1] {subsets namespace}",
          "description": "Пакет, владеющий упаковываемым элементом.",
          "type": "Package",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "namespace"
          ],
          "redefines": []
        },
        {
          "id": "PackageMerge-receivingPackage",
          "name": "receivingPackage",
          "signature": "receivingPackage : Package [1..1] {subsets source, owner}",
          "description": "Пакет, расширяемый содержимым объединяемого пакета.",
          "type": "Package",
          "association": "A_packageMerge_receivingPackage",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "ProfileApplication-applyingPackage",
          "name": "applyingPackage",
          "signature": "applyingPackage : Package [1..1] {subsets source, owner}",
          "description": "Пакет, владеющий применением профиля.",
          "type": "Package",
          "association": "A_profileApplication_applyingPackage",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": []
        },
        {
          "id": "Type-package",
          "name": "package",
          "signature": "package : Package [0..1] {subsets owningPackage}",
          "description": "Пакет, владеющий типом, если он задан.",
          "type": "Package",
          "association": "A_ownedType_package",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "owningPackage"
          ],
          "redefines": []
        },
        {
          "id": "A_ownedStereotype_owningPackage-owningPackage",
          "name": "owningPackage",
          "signature": "owningPackage : Package [1..1] {redefines owningPackage}",
          "description": "Пакет, владеющий стереотипом.",
          "type": "Package",
          "association": "A_ownedStereotype_owningPackage",
          "inverse": true,
          "owner": "Package",
          "subsets": [],
          "redefines": [
            "owningPackage"
          ]
        },
        {
          "id": "PackageImport-importedPackage",
          "name": "importedPackage",
          "signature": "importedPackage : Package [1..1] {subsets target}",
          "description": "Пакет, члены которого импортируются.",
          "type": "Package",
          "association": "A_importedPackage_packageImport",
          "inverse": true,
          "owner": "Package",
          "subsets": [
            "target"
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
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
          "inverse": false,
          "owner": "TemplateableElement",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "TemplateableElement"
        },
        {
          "id": "TemplateBinding-boundElement",
          "name": "boundElement",
          "signature": "boundElement : TemplateableElement [1..1] {subsets source, owner}",
          "description": "Элемент, к которому применяется привязка.",
          "type": "TemplateableElement",
          "association": "A_templateBinding_boundElement",
          "inverse": true,
          "owner": "TemplateableElement",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "TemplateableElement"
        },
        {
          "id": "TemplateSignature-template",
          "name": "template",
          "signature": "template : TemplateableElement [1..1] {subsets owner}",
          "description": "Элемент-шаблон, владеющий подписью.",
          "type": "TemplateableElement",
          "association": "A_ownedTemplateSignature_template",
          "inverse": true,
          "owner": "TemplateableElement",
          "subsets": [
            "owner"
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
          "inverse": false,
          "owner": "Namespace",
          "subsets": [
            "directedRelationship",
            "ownedElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Namespace",
          "subsets": [
            "directedRelationship",
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Namespace"
        },
        {
          "id": "ElementImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_elementImport_importingNamespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Namespace"
        },
        {
          "id": "Constraint-context",
          "name": "context",
          "signature": "context : Namespace [0..1] {subsets namespace}",
          "description": "Пространство имён, владеющее ограничением.",
          "type": "Namespace",
          "association": "A_ownedRule_context",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "namespace"
          ],
          "redefines": [],
          "inheritedFrom": "Namespace"
        },
        {
          "id": "PackageImport-importingNamespace",
          "name": "importingNamespace",
          "signature": "importingNamespace : Namespace [1..1] {subsets source, owner}",
          "description": "Пространство имён, выполняющее импорт.",
          "type": "Namespace",
          "association": "A_packageImport_importingNamespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "source",
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Namespace"
        },
        {
          "id": "A_member_memberNamespace-memberNamespace",
          "name": "memberNamespace",
          "signature": "/memberNamespace : Namespace [0..*] {readOnly, union}",
          "description": "Пространства имён, членом которых является элемент.",
          "type": "Namespace",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Namespace"
        },
        {
          "id": "A_importedMember_namespace-namespace",
          "name": "namespace",
          "signature": "namespace : Namespace [0..*] {subsets memberNamespace}",
          "description": "Пространства имён, в которые элемент добавлен импортом.",
          "type": "Namespace",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "Namespace",
          "subsets": [
            "memberNamespace"
          ],
          "redefines": [],
          "inheritedFrom": "Namespace"
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
          "inverse": false,
          "owner": "Type",
          "subsets": [
            "owningPackage"
          ],
          "redefines": []
        },
        {
          "id": "Association-endType",
          "name": "endType",
          "signature": "/endType : Type [1..*] {readOnly, subsets relatedElement}",
          "description": "Классификаторы, используемые как типы концов ассоциации.",
          "type": "Type",
          "association": "A_endType_association",
          "inverse": true,
          "owner": "Type",
          "subsets": [
            "relatedElement"
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
          "inverse": true,
          "owner": "Type",
          "subsets": [
            "packagedElement"
          ],
          "redefines": []
        },
        {
          "id": "TypedElement-type",
          "name": "type",
          "signature": "type : Type [0..1]",
          "description": "Тип элемента.",
          "type": "Type",
          "association": "A_type_typedElement",
          "inverse": true,
          "owner": "Type",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Operation-type",
          "name": "type",
          "signature": "/type : Type [0..1] {readOnly}",
          "description": "Возвращаемый тип операции, если он есть; выводится из возвращаемого параметра.",
          "type": "Type",
          "association": "A_type_operation",
          "inverse": true,
          "owner": "Type",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Operation-raisedException",
          "name": "raisedException",
          "signature": "raisedException : Type [0..*] {redefines raisedException}",
          "description": "Типы исключений, которые могут возникать при вызове операции.",
          "type": "Type",
          "association": "A_raisedException_operation",
          "inverse": true,
          "owner": "Type",
          "subsets": [],
          "redefines": [
            "raisedException"
          ]
        },
        {
          "id": "BehavioralFeature-raisedException",
          "name": "raisedException",
          "signature": "raisedException : Type [0..*]",
          "description": "Типы исключений, которые могут возникать при вызове поведенческой характеристики.",
          "type": "Type",
          "association": "A_raisedException_behavioralFeature",
          "inverse": true,
          "owner": "Type",
          "subsets": [],
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
          "owner": "TypedElement",
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
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "MultiplicityElement",
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
          "inverse": true,
          "owner": "MultiplicityElement",
          "subsets": [
            "owner"
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
          "inverse": true,
          "owner": "MultiplicityElement",
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        }
      ]
    },
    "ValueSpecification": {
      "direct": [
        {
          "id": "ObjectNode-upperBound",
          "name": "upperBound",
          "signature": "upperBound : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число маркеров в узле объектов; при достижении границы новые маркеры не поступают, а при её отсутствии ограничения нет.",
          "type": "ValueSpecification",
          "association": "A_upperBound_objectNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "JoinNode-joinSpec",
          "name": "joinSpec",
          "signature": "joinSpec : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Условие, при котором узел слияния предлагает маркер на исходящем ребре; по умолчанию требуются маркеры на всех входящих рёбрах.",
          "type": "ValueSpecification",
          "association": "A_joinSpec_joinNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ActivityEdge-weight",
          "name": "weight",
          "signature": "weight : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число маркеров, которые должны одновременно проходить по ребру; по умолчанию равно 1.",
          "type": "ValueSpecification",
          "association": "A_weight_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ActivityEdge-guard",
          "name": "guard",
          "signature": "guard : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, определяющая, может ли маркер проходить по ребру деятельности; при её отсутствии прохождение не ограничено.",
          "type": "ValueSpecification",
          "association": "A_guard_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "TimeExpression-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая значение временного выражения.",
          "type": "ValueSpecification",
          "association": "A_expr_timeExpression",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Interval-max",
          "name": "max",
          "signature": "max : ValueSpecification [1..1]",
          "description": "Спецификация максимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_max_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Interval-min",
          "name": "min",
          "signature": "min : ValueSpecification [1..1]",
          "description": "Спецификация минимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_min_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Expression-operand",
          "name": "operand",
          "signature": "operand : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Упорядоченная последовательность спецификаций значений-операндов.",
          "type": "ValueSpecification",
          "association": "A_operand_expression",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Duration-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая длительность.",
          "type": "ValueSpecification",
          "association": "A_expr_duration",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Message-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Аргументы сообщения.",
          "type": "ValueSpecification",
          "association": "A_argument_message",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Lifeline-selector",
          "name": "selector",
          "signature": "selector : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Если соединяемый элемент многозначен, задаёт конкретную часть внутри этого множества.",
          "type": "ValueSpecification",
          "association": "A_selector_lifeline",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "InteractionUse-returnValue",
          "name": "returnValue",
          "signature": "returnValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Значение выполненного взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_returnValue_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "InteractionUse-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Фактические аргументы взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_argument_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "InteractionConstraint-minint",
          "name": "minint",
          "signature": "minint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_minint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "InteractionConstraint-maxint",
          "name": "maxint",
          "signature": "maxint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_maxint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "MultiplicityElement-lowerValue",
          "name": "lowerValue",
          "signature": "lowerValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация нижней границы.",
          "type": "ValueSpecification",
          "association": "A_lowerValue_owningLower",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "MultiplicityElement-upperValue",
          "name": "upperValue",
          "signature": "upperValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация верхней границы.",
          "type": "ValueSpecification",
          "association": "A_upperValue_owningUpper",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
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
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ChangeEvent-changeExpression",
          "name": "changeExpression",
          "signature": "changeExpression : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Логическая спецификация значения; событие изменения происходит при смене её значения с false на true.",
          "type": "ValueSpecification",
          "association": "A_changeExpression_changeEvent",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Slot-value",
          "name": "value",
          "signature": "value : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Значение или значения, хранящиеся в слоте.",
          "type": "ValueSpecification",
          "association": "A_value_owningSlot",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Property-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningProperty",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "Parameter-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, используемого, если аргумент параметра не передан.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningParameter",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "InstanceSpecification-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация способа вычисления, вывода или построения экземпляра.",
          "type": "ValueSpecification",
          "association": "A_specification_owningInstanceSpec",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ValuePin-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляемого для получения значения контакта значения.",
          "type": "ValueSpecification",
          "association": "A_value_valuePin",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "ValueSpecificationAction-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, которое требуется вычислить.",
          "type": "ValueSpecification",
          "association": "A_value_valueSpecificationAction",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
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
          "inverse": false,
          "owner": "TypedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "TypedElement"
        },
        {
          "id": "A_type_typedElement-typedElement",
          "name": "typedElement",
          "signature": "typedElement : TypedElement [0..*]",
          "description": "Типизированные элементы, для которых задан этот тип.",
          "type": "TypedElement",
          "association": "A_type_typedElement",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Dependency",
          "subsets": [
            "target"
          ],
          "redefines": []
        },
        {
          "id": "CollaborationUse-roleBinding",
          "name": "roleBinding",
          "signature": "roleBinding : Dependency [0..*] {subsets ownedElement}",
          "description": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
          "type": "Dependency",
          "association": "A_roleBinding_collaborationUse",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        },
        {
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, в которых элемент выступает клиентом.",
          "type": "Dependency",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
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
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        }
      ]
    },
    "Abstraction": {
      "direct": [
        {
          "id": "Abstraction-mapping",
          "name": "mapping",
          "signature": "mapping : OpaqueExpression [0..1] {subsets ownedElement}",
          "description": "Необязательное выражение, уточняющее отношение между поставщиками и клиентами.",
          "type": "OpaqueExpression",
          "association": "A_mapping_abstraction",
          "inverse": false,
          "owner": "Abstraction",
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
          "inverse": true,
          "owner": "Abstraction",
          "subsets": [
            "owner"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Dependency",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "CollaborationUse-roleBinding",
          "name": "roleBinding",
          "signature": "roleBinding : Dependency [0..*] {subsets ownedElement}",
          "description": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
          "type": "Dependency",
          "association": "A_roleBinding_collaborationUse",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, в которых элемент выступает клиентом.",
          "type": "Dependency",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "A_supplier_supplierDependency-supplierDependency",
          "name": "supplierDependency",
          "signature": "supplierDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, которые ссылаются на элемент как на поставщика.",
          "type": "Dependency",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "NamedElement-name",
          "name": "name",
          "signature": "name : String [0..1]",
          "description": "Имя элемента.",
          "type": "String",
          "association": null,
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
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
          "inverse": false,
          "owner": "Abstraction",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Abstraction"
        },
        {
          "id": "A_mapping_abstraction-abstraction",
          "name": "abstraction",
          "signature": "abstraction : Abstraction [0..1] {subsets owner}",
          "description": "Абстрагирование, которому принадлежит выражение отображения.",
          "type": "Abstraction",
          "association": "A_mapping_abstraction",
          "inverse": true,
          "owner": "Abstraction",
          "subsets": [
            "owner"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Dependency",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "CollaborationUse-roleBinding",
          "name": "roleBinding",
          "signature": "roleBinding : Dependency [0..*] {subsets ownedElement}",
          "description": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
          "type": "Dependency",
          "association": "A_roleBinding_collaborationUse",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, в которых элемент выступает клиентом.",
          "type": "Dependency",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "A_supplier_supplierDependency-supplierDependency",
          "name": "supplierDependency",
          "signature": "supplierDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, которые ссылаются на элемент как на поставщика.",
          "type": "Dependency",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "NamedElement-name",
          "name": "name",
          "signature": "name : String [0..1]",
          "description": "Имя элемента.",
          "type": "String",
          "association": null,
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Dependency",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "CollaborationUse-roleBinding",
          "name": "roleBinding",
          "signature": "roleBinding : Dependency [0..*] {subsets ownedElement}",
          "description": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
          "type": "Dependency",
          "association": "A_roleBinding_collaborationUse",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "NamedElement-clientDependency",
          "name": "clientDependency",
          "signature": "/clientDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, в которых элемент выступает клиентом.",
          "type": "Dependency",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
          ],
          "redefines": [],
          "inheritedFrom": "Dependency"
        },
        {
          "id": "A_supplier_supplierDependency-supplierDependency",
          "name": "supplierDependency",
          "signature": "supplierDependency : Dependency [0..*] {subsets directedRelationship}",
          "description": "Зависимости, которые ссылаются на элемент как на поставщика.",
          "type": "Dependency",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "Dependency",
          "subsets": [
            "directedRelationship"
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
          "inverse": false,
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
          "inverse": false,
          "owner": "DirectedRelationship",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_source_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является источником.",
          "type": "DirectedRelationship",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
          ],
          "redefines": [],
          "inheritedFrom": "DirectedRelationship"
        },
        {
          "id": "A_target_directedRelationship-directedRelationship",
          "name": "directedRelationship",
          "signature": "/directedRelationship : DirectedRelationship [0..*] {readOnly, union, subsets relationship}",
          "description": "Направленные отношения, для которых элемент является целью.",
          "type": "DirectedRelationship",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "DirectedRelationship",
          "subsets": [
            "relationship"
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
          "inverse": false,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "InformationFlow-realization",
          "name": "realization",
          "signature": "realization : Relationship [0..*]",
          "description": "Отношения, реализующие указанный информационный поток.",
          "type": "Relationship",
          "association": "A_realization_abstraction_flow",
          "inverse": true,
          "owner": "Relationship",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Relationship"
        },
        {
          "id": "A_relatedElement_relationship-relationship",
          "name": "relationship",
          "signature": "/relationship : Relationship [0..*] {readOnly, union}",
          "description": "Отношения, в которых участвует элемент.",
          "type": "Relationship",
          "association": "A_relatedElement_relationship",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "NamedElement-name",
          "name": "name",
          "signature": "name : String [0..1]",
          "description": "Имя элемента.",
          "type": "String",
          "association": null,
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_result_opaqueExpression-opaqueExpression",
          "name": "opaqueExpression",
          "signature": "opaqueExpression : OpaqueExpression [0..*]",
          "description": "Непрозрачное выражение, результат которого задаёт параметр.",
          "type": "OpaqueExpression",
          "association": "A_result_opaqueExpression",
          "inverse": true,
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "A_behavior_opaqueExpression-opaqueExpression",
          "name": "opaqueExpression",
          "signature": "opaqueExpression : OpaqueExpression [0..*]",
          "description": "Непрозрачное выражение, вычисление которого задаёт поведение.",
          "type": "OpaqueExpression",
          "association": "A_behavior_opaqueExpression",
          "inverse": true,
          "owner": "OpaqueExpression",
          "subsets": [],
          "redefines": []
        },
        {
          "id": "Abstraction-mapping",
          "name": "mapping",
          "signature": "mapping : OpaqueExpression [0..1] {subsets ownedElement}",
          "description": "Необязательное выражение, уточняющее отношение между поставщиками и клиентами.",
          "type": "OpaqueExpression",
          "association": "A_mapping_abstraction",
          "inverse": true,
          "owner": "OpaqueExpression",
          "subsets": [
            "ownedElement"
          ],
          "redefines": []
        }
      ],
      "inherited": [
        {
          "id": "ObjectNode-upperBound",
          "name": "upperBound",
          "signature": "upperBound : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число маркеров в узле объектов; при достижении границы новые маркеры не поступают, а при её отсутствии ограничения нет.",
          "type": "ValueSpecification",
          "association": "A_upperBound_objectNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "JoinNode-joinSpec",
          "name": "joinSpec",
          "signature": "joinSpec : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Условие, при котором узел слияния предлагает маркер на исходящем ребре; по умолчанию требуются маркеры на всех входящих рёбрах.",
          "type": "ValueSpecification",
          "association": "A_joinSpec_joinNode",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ActivityEdge-weight",
          "name": "weight",
          "signature": "weight : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число маркеров, которые должны одновременно проходить по ребру; по умолчанию равно 1.",
          "type": "ValueSpecification",
          "association": "A_weight_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ActivityEdge-guard",
          "name": "guard",
          "signature": "guard : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, определяющая, может ли маркер проходить по ребру деятельности; при её отсутствии прохождение не ограничено.",
          "type": "ValueSpecification",
          "association": "A_guard_activityEdge",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "TimeExpression-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая значение временного выражения.",
          "type": "ValueSpecification",
          "association": "A_expr_timeExpression",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Interval-max",
          "name": "max",
          "signature": "max : ValueSpecification [1..1]",
          "description": "Спецификация максимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_max_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Interval-min",
          "name": "min",
          "signature": "min : ValueSpecification [1..1]",
          "description": "Спецификация минимального значения интервала.",
          "type": "ValueSpecification",
          "association": "A_min_interval",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Expression-operand",
          "name": "operand",
          "signature": "operand : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Упорядоченная последовательность спецификаций значений-операндов.",
          "type": "ValueSpecification",
          "association": "A_operand_expression",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Duration-expr",
          "name": "expr",
          "signature": "expr : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляющая длительность.",
          "type": "ValueSpecification",
          "association": "A_expr_duration",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Message-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Аргументы сообщения.",
          "type": "ValueSpecification",
          "association": "A_argument_message",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Lifeline-selector",
          "name": "selector",
          "signature": "selector : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Если соединяемый элемент многозначен, задаёт конкретную часть внутри этого множества.",
          "type": "ValueSpecification",
          "association": "A_selector_lifeline",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionUse-returnValue",
          "name": "returnValue",
          "signature": "returnValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Значение выполненного взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_returnValue_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionUse-argument",
          "name": "argument",
          "signature": "argument : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Фактические аргументы взаимодействия.",
          "type": "ValueSpecification",
          "association": "A_argument_interactionUse",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionConstraint-minint",
          "name": "minint",
          "signature": "minint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Минимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_minint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InteractionConstraint-maxint",
          "name": "maxint",
          "signature": "maxint : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Максимальное число итераций цикла.",
          "type": "ValueSpecification",
          "association": "A_maxint_interactionConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "MultiplicityElement-lowerValue",
          "name": "lowerValue",
          "signature": "lowerValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация нижней границы.",
          "type": "ValueSpecification",
          "association": "A_lowerValue_owningLower",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "MultiplicityElement-upperValue",
          "name": "upperValue",
          "signature": "upperValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация верхней границы.",
          "type": "ValueSpecification",
          "association": "A_upperValue_owningUpper",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Constraint-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Условие, которое должно быть истинным для выполнения ограничения.",
          "type": "ValueSpecification",
          "association": "A_specification_owningConstraint",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ChangeEvent-changeExpression",
          "name": "changeExpression",
          "signature": "changeExpression : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Логическая спецификация значения; событие изменения происходит при смене её значения с false на true.",
          "type": "ValueSpecification",
          "association": "A_changeExpression_changeEvent",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Slot-value",
          "name": "value",
          "signature": "value : ValueSpecification [0..*] {ordered, subsets ownedElement}",
          "description": "Значение или значения, хранящиеся в слоте.",
          "type": "ValueSpecification",
          "association": "A_value_owningSlot",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Property-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningProperty",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "Parameter-defaultValue",
          "name": "defaultValue",
          "signature": "defaultValue : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация значения, используемого, если аргумент параметра не передан.",
          "type": "ValueSpecification",
          "association": "A_defaultValue_owningParameter",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "InstanceSpecification-specification",
          "name": "specification",
          "signature": "specification : ValueSpecification [0..1] {subsets ownedElement}",
          "description": "Спецификация способа вычисления, вывода или построения экземпляра.",
          "type": "ValueSpecification",
          "association": "A_specification_owningInstanceSpec",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ValuePin-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, вычисляемого для получения значения контакта значения.",
          "type": "ValueSpecification",
          "association": "A_value_valuePin",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "ValueSpecificationAction-value",
          "name": "value",
          "signature": "value : ValueSpecification [1..1] {subsets ownedElement}",
          "description": "Спецификация значения, которое требуется вычислить.",
          "type": "ValueSpecification",
          "association": "A_value_valueSpecificationAction",
          "inverse": true,
          "owner": "ValueSpecification",
          "subsets": [
            "ownedElement"
          ],
          "redefines": [],
          "inheritedFrom": "ValueSpecification"
        },
        {
          "id": "TypedElement-type",
          "name": "type",
          "signature": "type : Type [0..1]",
          "description": "Тип элемента.",
          "type": "Type",
          "association": "A_type_typedElement",
          "inverse": false,
          "owner": "TypedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "TypedElement"
        },
        {
          "id": "A_type_typedElement-typedElement",
          "name": "typedElement",
          "signature": "typedElement : TypedElement [0..*]",
          "description": "Типизированные элементы, для которых задан этот тип.",
          "type": "TypedElement",
          "association": "A_type_typedElement",
          "inverse": true,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "TimeObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..1]",
          "description": "Событие входа или выхода, по которому определяется наблюдение времени.",
          "type": "NamedElement",
          "association": "A_event_timeObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "DurationObservation-event",
          "name": "event",
          "signature": "event : NamedElement [1..2] {ordered}",
          "description": "События входа или выхода, между которыми измеряется длительность.",
          "type": "NamedElement",
          "association": "A_event_durationObservation",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Message-signature",
          "name": "signature",
          "signature": "signature : NamedElement [0..1]",
          "description": "Спецификация содержимого сообщения: операция или сигнал.",
          "type": "NamedElement",
          "association": "A_signature_message",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "ConsiderIgnoreFragment-message",
          "name": "message",
          "signature": "message : NamedElement [0..*]",
          "description": "Сообщения, применимые к этому фрагменту взаимодействия.",
          "type": "NamedElement",
          "association": "A_message_considerIgnoreFragment",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationSource",
          "name": "informationSource",
          "signature": "informationSource : NamedElement [1..*] {subsets source}",
          "description": "Источник, из которого исходят передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationSource_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "InformationFlow-informationTarget",
          "name": "informationTarget",
          "signature": "informationTarget : NamedElement [1..*] {subsets target}",
          "description": "Цель, которой направляются передаваемые информационные элементы.",
          "type": "NamedElement",
          "association": "A_informationTarget_informationFlow",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-ownedMember",
          "name": "ownedMember",
          "signature": "/ownedMember : NamedElement [0..*] {readOnly, union, subsets ownedElement, member}",
          "description": "Члены, непосредственно принадлежащие пространству имён.",
          "type": "NamedElement",
          "association": "A_ownedMember_namespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "ownedElement",
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Namespace-member",
          "name": "member",
          "signature": "/member : NamedElement [0..*] {readOnly, union}",
          "description": "Все различимые по имени члены пространства имён.",
          "type": "NamedElement",
          "association": "A_member_memberNamespace",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "A_nameExpression_namedElement-namedElement",
          "name": "namedElement",
          "signature": "namedElement : NamedElement [0..1] {subsets owner}",
          "description": "Именованный элемент, имя которого задаёт выражение.",
          "type": "NamedElement",
          "association": "A_nameExpression_namedElement",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-client",
          "name": "client",
          "signature": "client : NamedElement [1..*] {subsets source}",
          "description": "Элементы, зависящие от поставщиков.",
          "type": "NamedElement",
          "association": "A_clientDependency_client",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "source"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Dependency-supplier",
          "name": "supplier",
          "signature": "supplier : NamedElement [1..*] {subsets target}",
          "description": "Элементы, от которых зависят клиенты.",
          "type": "NamedElement",
          "association": "A_supplier_supplierDependency",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "NamedElement"
        },
        {
          "id": "Classifier-inheritedMember",
          "name": "inheritedMember",
          "signature": "/inheritedMember : NamedElement [0..*] {readOnly, subsets member}",
          "description": "Элементы, унаследованные классификатором от общих классификаторов.",
          "type": "NamedElement",
          "association": "A_inheritedMember_inheritingClassifier",
          "inverse": true,
          "owner": "NamedElement",
          "subsets": [
            "member"
          ],
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "ActivityPartition-represents",
          "name": "represents",
          "signature": "represents : Element [0..1]",
          "description": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
          "type": "Element",
          "association": "A_represents_activityPartition",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Relationship-relatedElement",
          "name": "relatedElement",
          "signature": "/relatedElement : Element [1..*] {readOnly, union}",
          "description": "Элементы, связанные этим отношением.",
          "type": "Element",
          "association": "A_relatedElement_relationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "A_ownedComment_owningElement-owningElement",
          "name": "owningElement",
          "signature": "owningElement : Element [0..1] {subsets owner}",
          "description": "Элемент, владеющий комментарием.",
          "type": "Element",
          "association": "A_ownedComment_owningElement",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "owner"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-source",
          "name": "source",
          "signature": "/source : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Исходные элементы направленного отношения.",
          "type": "Element",
          "association": "A_source_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "DirectedRelationship-target",
          "name": "target",
          "signature": "/target : Element [1..*] {readOnly, union, subsets relatedElement}",
          "description": "Целевые элементы направленного отношения.",
          "type": "Element",
          "association": "A_target_directedRelationship",
          "inverse": true,
          "owner": "Element",
          "subsets": [
            "relatedElement"
          ],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Constraint-constrainedElement",
          "name": "constrainedElement",
          "signature": "constrainedElement : Element [0..*] {ordered}",
          "description": "Упорядоченное множество элементов, к которым применяется ограничение.",
          "type": "Element",
          "association": "A_constrainedElement_constraint",
          "inverse": true,
          "owner": "Element",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "Element"
        },
        {
          "id": "Comment-annotatedElement",
          "name": "annotatedElement",
          "signature": "annotatedElement : Element [0..*]",
          "description": "Элементы, к которым относится комментарий.",
          "type": "Element",
          "association": "A_annotatedElement_comment",
          "inverse": true,
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
          "inverse": false,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [
            "visibility"
          ],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Component-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие компоненту.",
          "type": "PackageableElement",
          "association": "A_packagedElement_component",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Package-packagedElement",
          "name": "packagedElement",
          "signature": "packagedElement : PackageableElement [0..*] {subsets ownedMember}",
          "description": "Упаковываемые элементы, принадлежащие пакету.",
          "type": "PackageableElement",
          "association": "A_packagedElement_owningPackage",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "ownedMember"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Manifestation-utilizedElement",
          "name": "utilizedElement",
          "signature": "utilizedElement : PackageableElement [1..1] {subsets supplier}",
          "description": "Элемент модели, используемый при воплощении в артефакте.",
          "type": "PackageableElement",
          "association": "A_utilizedElement_manifestation",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "supplier"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "DeploymentTarget-deployedElement",
          "name": "deployedElement",
          "signature": "/deployedElement : PackageableElement [0..*] {readOnly}",
          "description": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
          "type": "PackageableElement",
          "association": "A_deployedElement_deploymentTarget",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "Namespace-importedMember",
          "name": "importedMember",
          "signature": "/importedMember : PackageableElement [0..*] {readOnly, subsets member}",
          "description": "Члены, добавленные импортом элемента или пакета.",
          "type": "PackageableElement",
          "association": "A_importedMember_namespace",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "member"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ElementImport-importedElement",
          "name": "importedElement",
          "signature": "importedElement : PackageableElement [1..1] {subsets target}",
          "description": "Элемент, имя которого добавляется в пространство имён.",
          "type": "PackageableElement",
          "association": "A_importedElement_import",
          "inverse": true,
          "owner": "PackageableElement",
          "subsets": [
            "target"
          ],
          "redefines": [],
          "inheritedFrom": "PackageableElement"
        },
        {
          "id": "ParameterableElement-owningTemplateParameter",
          "name": "owningTemplateParameter",
          "signature": "owningTemplateParameter : TemplateParameter [0..1] {subsets owner, templateParameter}",
          "description": "Формальный параметр, владеющий этим элементом.",
          "type": "TemplateParameter",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": false,
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
          "inverse": false,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-actual",
          "name": "actual",
          "signature": "actual : ParameterableElement [1..1]",
          "description": "Фактический параметр подстановки.",
          "type": "ParameterableElement",
          "association": "A_actual_templateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameterSubstitution-ownedActual",
          "name": "ownedActual",
          "signature": "ownedActual : ParameterableElement [0..1] {subsets ownedElement, actual}",
          "description": "Принадлежащий подстановке фактический параметр.",
          "type": "ParameterableElement",
          "association": "A_ownedActual_owningTemplateParameterSubstitution",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "actual"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedDefault",
          "name": "ownedDefault",
          "signature": "ownedDefault : ParameterableElement [0..1] {subsets ownedElement, default}",
          "description": "Принадлежащее параметру значение по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_ownedDefault_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "default"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-ownedParameteredElement",
          "name": "ownedParameteredElement",
          "signature": "ownedParameteredElement : ParameterableElement [0..1] {subsets ownedElement, parameteredElement}",
          "description": "Принадлежащий параметру параметризуемый элемент.",
          "type": "ParameterableElement",
          "association": "A_ownedParameteredElement_owningTemplateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [
            "ownedElement",
            "parameteredElement"
          ],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-default",
          "name": "default",
          "signature": "default : ParameterableElement [0..1]",
          "description": "Значение формального параметра по умолчанию.",
          "type": "ParameterableElement",
          "association": "A_default_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
        },
        {
          "id": "TemplateParameter-parameteredElement",
          "name": "parameteredElement",
          "signature": "parameteredElement : ParameterableElement [1..1]",
          "description": "Элемент, представленный параметром шаблона.",
          "type": "ParameterableElement",
          "association": "A_parameteredElement_templateParameter",
          "inverse": true,
          "owner": "ParameterableElement",
          "subsets": [],
          "redefines": [],
          "inheritedFrom": "ParameterableElement"
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
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
          "inverse": false,
          "owner": "A_upperValue_owningUpper",
          "subsets": [
            "owner"
          ],
          "redefines": []
        }
      ]
    }
  }
};
