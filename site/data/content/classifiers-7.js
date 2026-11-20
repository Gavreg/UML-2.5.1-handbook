Object.assign(window.UML_CONTENT.classifiers, {
    Abstraction: {
  properties: {
    mapping: "OpaqueExpression, выражающее отношение абстрагирования между поставщиками и клиентами. В некоторых случаях, например при derivation, оно обычно формально и однонаправленно; в других случаях, например при trace, обычно неформально и двунаправленно. Выражение отображения необязательно и может быть опущено, если точное отношение между Elements не задано."
  }
},
Comment: {
  properties: {
    body: "Задаёт строку, являющуюся текстом комментария.",
    annotatedElement: "Ссылается на комментируемые Elements."
  }
},
Constraint: {
  properties: {
    constrainedElement: "Упорядоченный набор Elements, на которые ссылается этот Constraint.",
    context: "Задаёт Namespace, владеющий Constraint.",
    specification: "Условие, которое при вычислении должно быть истинным, чтобы Constraint выполнялся."
  },
  constraints: {
    boolean_value: {
      description: "ValueSpecification для Constraint должно вычисляться в значение Boolean.",
      ocl: "Не выражается на OCL."
    },
    no_side_effects: {
      description: "Вычисление ValueSpecification для Constraint не должно иметь побочных эффектов.",
      ocl: "Не выражается на OCL."
    },
    not_apply_to_self: {
      description: "Constraint не может применяться к самому себе.",
      ocl: "inv: not constrainedElement->includes(self)"
    }
  }
},
Dependency: {
  definition: "Dependency — это Relationship, показывающий, что один Element модели или набор model Elements нуждается в других model Elements для своей спецификации или реализации. Это означает, что полная семантика клиентских Elements семантически или структурно зависит от определения Elements-поставщиков.",
  properties: {
    client: "Elements, зависящие от Elements-поставщиков. В некоторых случаях, например для trace Abstraction, назначение направления, то есть выбор клиентского Element, остаётся на усмотрение разработчика модели и является условным.",
    supplier: "Elements, от которых клиентские Elements зависят в некотором отношении. Разработчик модели может задать направление Dependency, подходящее для своей предметной области."
  }
},
DirectedRelationship: {
  properties: {
    source: "Задаёт исходные Elements DirectedRelationship.",
    target: "Задаёт целевые Elements DirectedRelationship."
  }
},
Element: {
  properties: {
    ownedComment: "Comments, принадлежащие этому Element.",
    ownedElement: "Elements, принадлежащие этому Element.",
    owner: "Element, владеющий этим Element."
  },
  operations: {
    "allOwnedElements() : Element [0..*]": {
      description: "Запрос allOwnedElements() возвращает все прямые и косвенные ownedElements Element.",
      body: "ownedElement->union(ownedElement->collect(e | e.allOwnedElements()))->asSet()"
    },
    "mustBeOwned() : Boolean": {
      description: "Запрос mustBeOwned() определяет, должны ли Elements этого типа иметь владельца. Подклассы Element, не требующие владельца, должны переопределять эту операцию.",
      body: "true"
    }
  },
  constraints: {
    has_owner: {
      description: "Elements, которые должны иметь владельца, должны иметь владельца.",
      ocl: "inv: mustBeOwned() implies owner->notEmpty()"
    },
    not_own_self: {
      description: "Element не может прямо или косвенно владеть самим собой.",
      ocl: "inv: not allOwnedElements()->includes(self)"
    }
  }
},
ElementImport: {
  properties: {
    alias: "Задаёт имя, которое должно быть добавлено в импортирующий Namespace вместо имени импортированного PackageableElement. Псевдоним не должен конфликтовать ни с одним другим членом импортирующего Namespace. По умолчанию псевдоним не используется.",
    visibility: "Задаёт видимость импортированного PackageableElement внутри importingNamespace, то есть будет ли importedElement в свою очередь виден другим Namespaces. Если ElementImport открыт, importedElement будет виден вне importingNamespace; если ElementImport закрыт, не будет.",
    importedElement: "Задаёт PackageableElement, чьё имя должно быть добавлено в Namespace.",
    importingNamespace: "Задаёт Namespace, импортирующий PackageableElement из другого Namespace."
  },
  operations: {
    "getName() : String": {
      description: "Запрос getName() возвращает имя, под которым импортированный PackageableElement будет известен в импортирующем Namespace.",
      body: "if alias->notEmpty() then\n  alias\nelse\n  importedElement.name\nendif"
    }
  },
  constraints: {
    imported_element_is_public: {
      description: "importedElement имеет либо открытую видимость, либо вообще не имеет видимости.",
      ocl: "inv: importedElement.visibility <> null implies importedElement.visibility =\n  VisibilityKind::public"
    },
    visibility_public_or_private: {
      description: "visibility ElementImport может быть только public или private.",
      ocl: "inv: visibility = VisibilityKind::public or visibility = VisibilityKind::private"
    }
  }
},
MultiplicityElement: {
  properties: {
    isOrdered: "Для многозначной кратности определяет, упорядочены ли последовательно значения в инстанцировании этого MultiplicityElement.",
    isUnique: "Для многозначной кратности определяет, уникальны ли значения в инстанцировании этого MultiplicityElement.",
    lower: "Нижняя граница интервала кратности.",
    upper: "Верхняя граница интервала кратности.",
    lowerValue: "Спецификация нижней границы для этой кратности.",
    upperValue: "Спецификация верхней границы для этой кратности."
  },
  operations: {
    "compatibleWith(other : MultiplicityElement) : Boolean": {
      description: "Операция compatibleWith принимает другую кратность как входной параметр. Возвращает true, если другая кратность шире текущей или совпадает с ней.",
      body: "(other.lowerBound() <= self.lowerBound()) and ((other.upperBound() = *) or\n  (self.upperBound() <= other.upperBound()))"
    },
    "includesMultiplicity(M : MultiplicityElement) : Boolean": {
      description: "Запрос includesMultiplicity() проверяет, включает ли эта кратность все кардинальности, допускаемые указанной кратностью.",
      pre: "self.upperBound()->notEmpty() and self.lowerBound()->notEmpty() and\n  M.upperBound()->notEmpty() and M.lowerBound()->notEmpty()",
      body: "(self.lowerBound() <= M.lowerBound()) and (self.upperBound() >= M.upperBound())"
    },
    "is(lowerbound : Integer, upperbound : UnlimitedNatural) : Boolean": {
      description: "Операция is определяет, совпадают ли верхняя и нижняя границы диапазона с заданными.",
      body: "lowerbound = self.lowerBound() and upperbound = self.upperBound()"
    },
    "isMultivalued() : Boolean": {
      description: "Запрос isMultivalued() проверяет, имеет ли эта кратность верхнюю границу больше единицы.",
      pre: "upperBound()->notEmpty()",
      body: "upperBound() > 1"
    },
    "lower() : Integer [0..1]": {
      description: "Производный атрибут lower должен быть равен lowerBound.",
      body: "lowerBound()"
    },
    "lowerBound() : Integer [1..1]": {
      description: "Запрос lowerBound() возвращает нижнюю границу кратности как целое число: integerValue из lowerValue, если оно задано, и 1 в противном случае.",
      body: "if (lowerValue = null or lowerValue.integerValue() = null) then 1 else\n  lowerValue.integerValue()\nendif"
    },
    "upper() : UnlimitedNatural [0..1]": {
      description: "Производный атрибут upper должен быть равен upperBound.",
      body: "upperBound()"
    },
    "upperBound() : UnlimitedNatural [1..1]": {
      description: "Запрос upperBound() возвращает верхнюю границу ограниченной кратности как UnlimitedNatural: unlimitedNaturalValue из upperValue, если оно задано, и 1 в противном случае.",
      body: "if (upperValue = null or upperValue.unlimitedValue() = null) then 1 else\n  upperValue.unlimitedValue()\nendif"
    }
  },
  constraints: {
    upper_ge_lower: {
      description: "Верхняя граница должна быть больше нижней или равна ей.",
      ocl: "inv: upperBound() >= lowerBound()"
    },
    lower_ge_0: {
      description: "Нижняя граница должна быть неотрицательным целочисленным литералом.",
      ocl: "inv: lowerBound() >= 0"
    },
    value_specification_no_side_effects: {
      description: "Если для lowerValue или upperValue используется нелитеральное ValueSpecification, вычисление этой спецификации не должно иметь побочных эффектов.",
      ocl: "Не выражается на OCL."
    },
    value_specification_constant: {
      description: "Если для lowerValue или upperValue используется нелитеральное ValueSpecification, эта спецификация должна быть константным выражением.",
      ocl: "Не выражается на OCL."
    },
    lower_is_integer: {
      description: "Если lowerValue задано, оно должно иметь значение Integer.",
      ocl: "inv: lowerValue <> null implies lowerValue.integerValue() <> null"
    },
    upper_is_unlimitedNatural: {
      description: "Если upperValue задано, оно должно иметь значение UnlimitedNatural.",
      ocl: "inv: upperValue <> null implies upperValue.unlimitedValue() <> null"
    }
  }
},
NamedElement: {
  properties: {
    name: "Имя NamedElement.",
    qualifiedName: "Имя, позволяющее идентифицировать NamedElement в иерархии вложенных Namespaces. Строится из имён содержащих Namespaces, начиная с корня иерархии и заканчивая именем самого NamedElement.",
    visibility: "Определяет, виден ли NamedElement вне владеющего Namespace и как именно.",
    clientDependency: "Указывает Dependencies, которые ссылаются на этот NamedElement как на клиента.",
    nameExpression: "StringExpression, используемое для определения имени этого NamedElement.",
    namespace: "Задаёт Namespace, владеющий NamedElement."
  },
  operations: {
    "allNamespaces() : Namespace [0..*] {ordered}": {
      description: "Запрос allNamespaces() возвращает последовательность Namespaces, в которые вложен NamedElement, двигаясь наружу.",
      body: "if owner.oclIsKindOf(TemplateParameter) and\n  owner.oclAsType(TemplateParameter).signature.template.oclIsKindOf(Namespace) then\n    let enclosingNamespace : Namespace =\n      owner.oclAsType(TemplateParameter).signature.template.oclAsType(Namespace) in\n        enclosingNamespace.allNamespaces()->prepend(enclosingNamespace)\nelse\n  if namespace->isEmpty()\n    then OrderedSet{}\n  else\n    namespace.allNamespaces()->prepend(namespace)\n  endif\nendif"
    },
    "allOwningPackages() : Package [0..*]": {
      description: "Запрос allOwningPackages() возвращает набор всех вмещающих Namespaces этого NamedElement, двигаясь наружу, которые являются Packages, вплоть до первого Namespace, не являющегося Package, но не включая его.",
      body: "if namespace.oclIsKindOf(Package)\nthen\n  let owningPackage : Package = namespace.oclAsType(Package) in\n    owningPackage->union(owningPackage.allOwningPackages())\nelse\n  null\nendif"
    },
    "isDistinguishableFrom(n : NamedElement, ns : Namespace) : Boolean": {
      description: "Запрос isDistinguishableFrom() определяет, могут ли два NamedElements логически сосуществовать внутри Namespace. По умолчанию два именованных элемента различимы, если их типы не являются видами друг друга либо если у них разные имена.",
      body: "(self.oclIsKindOf(n.oclType()) or n.oclIsKindOf(self.oclType())) implies\n  ns.getNamesOfMember(self)->intersection(ns.getNamesOfMember(n))->isEmpty()"
    },
    "qualifiedName() : String": {
      description: "Когда NamedElement имеет имя и все содержащие его Namespaces имеют имена, qualifiedName строится из имени NamedElement и имён содержащих Namespaces.",
      body: "if self.name <> null and self.allNamespaces()->select(ns | ns.name = null)->isEmpty()\nthen\n  self.allNamespaces()->iterate(ns : Namespace; agg : String = self.name |\n    ns.name.concat(self.separator()).concat(agg))\nelse\n  null\nendif"
    },
    "separator() : String": {
      description: "Запрос separator() возвращает строку, используемую для разделения имён при построении qualifiedName.",
      body: "'::'"
    },
    "clientDependency() : Dependency [0..*]": {
      body: "Dependency.allInstances()->select(d | d.client->includes(self))"
    }
  },
  constraints: {
    visibility_needs_ownership: {
      description: "Если NamedElement принадлежит чему-либо, отличному от Namespace, он не имеет visibility. Element, не принадлежащий ничему, — а следовательно, должен быть Package, поскольку только этот вид NamedElement переопределяет mustBeOwned(), — может иметь visibility.",
      ocl: "inv: (namespace = null and owner <> null) implies visibility = null"
    },
    has_qualified_name: {
      description: "Когда имя задано и все содержащие Namespaces имеют имена, qualifiedName строится из имени NamedElement и имён содержащих Namespaces.",
      ocl: "inv: (name <> null and allNamespaces()->select(ns | ns.name = null)->isEmpty()) implies\n  qualifiedName = allNamespaces()->iterate(ns : Namespace; agg : String = name |\n    ns.name.concat(self.separator()).concat(agg))"
    },
    has_no_qualified_name: {
      description: "Если имя отсутствует или один из содержащих Namespaces не имеет имени, qualifiedName отсутствует.",
      ocl: "inv: name = null or allNamespaces()->select(ns | ns.name = null)->notEmpty() implies\n  qualifiedName = null"
    }
  }
},
Namespace: {
  properties: {
    elementImport: "Ссылается на ElementImports, принадлежащие Namespace.",
    importedMember: "Ссылается на PackageableElements, которые являются членами этого Namespace в результате PackageImports или ElementImports.",
    member: "Коллекция NamedElements, идентифицируемых внутри Namespace вследствие владения, импорта или наследования.",
    ownedMember: "Коллекция NamedElements, принадлежащих Namespace.",
    ownedRule: "Задаёт набор Constraints, принадлежащих этому Namespace.",
    packageImport: "Ссылается на PackageImports, принадлежащие Namespace."
  },
  operations: {
    "excludeCollisions(imps : PackageableElement [0..*]) : PackageableElement [0..*]": {
      description: "Запрос excludeCollisions() исключает из набора PackageableElements те, которые не были бы различимы друг с другом в этом Namespace.",
      body: "imps->reject(imp1 | imps->exists(imp2 | not imp1.isDistinguishableFrom(imp2, self)))"
    },
    "getNamesOfMember(element : NamedElement) : String [0..*]": {
      description: "Запрос getNamesOfMember() возвращает набор всех имён, которые член имел бы в Namespace с учётом импорта. В общем случае член может иметь несколько имён в Namespace, если импортирован более одного раза с разными псевдонимами.",
      body: "if self.ownedMember->includes(element)\nthen Set{element.name}\nelse let elementImports : Set(ElementImport) = self.elementImport->select(ei |\n  ei.importedElement = element) in\n  if elementImports->notEmpty()\n  then\n    elementImports->collect(el | el.getName())->asSet()\n  else\n    self.packageImport->select(pi |\n      pi.importedPackage.visibleMembers().oclAsType(NamedElement)->includes(element))\n      ->collect(pi | pi.importedPackage.getNamesOfMember(element))->asSet()\n  endif\nendif"
    },
    "importMembers(imps : PackageableElement [0..*]) : PackageableElement [0..*]": {
      description: "Запрос importMembers() определяет, какие из набора PackageableElements фактически импортируются в Namespace. Исключаются скрытые элементы, чьи имена конфликтуют с именами ownedMembers, а также PackageableElements, которые после импорта имели бы неразличимые имена.",
      body: "self.excludeCollisions(imps)->select(imp | self.ownedMember->forAll(mem |\n  imp.isDistinguishableFrom(mem, self)))"
    },
    "importedMember() : PackageableElement [0..*]": {
      description: "Свойство importedMember выводится как PackageableElements, являющиеся членами этого Namespace в результате PackageImports или ElementImports.",
      body: "self.importMembers(elementImport.importedElement->asSet()\n  ->union(packageImport.importedPackage->collect(p | p.visibleMembers()))->asSet())"
    },
    "membersAreDistinguishable() : Boolean": {
      description: "Логический запрос membersAreDistinguishable() определяет, различимы ли все члены Namespace внутри него.",
      body: "member->forAll(memb |\n  member->excluding(memb)->forAll(other |\n    memb.isDistinguishableFrom(other, self)))"
    }
  },
  constraints: {
    members_distinguishable: {
      description: "Все члены Namespace различимы внутри него.",
      ocl: "inv: membersAreDistinguishable()"
    },
    cannot_import_self: {
      description: "Namespace не может иметь PackageImport к самому себе.",
      ocl: "inv: packageImport.importedPackage.oclAsType(Namespace)->excludes(self)"
    },
    cannot_import_ownedMembers: {
      description: "Namespace не может иметь ElementImport к одному из своих ownedMembers.",
      ocl: "inv: elementImport.importedElement.oclAsType(Element)->excludesAll(ownedMember)"
    }
  }
},
PackageImport: {
  properties: {
    visibility: "Задаёт видимость импортированных PackageableElements внутри importingNamespace, то есть будут ли импортированные Elements в свою очередь видны другим Namespaces. Если PackageImport открыт, импортированные Elements видны вне importingNamespace; если PackageImport закрыт, не видны.",
    importedPackage: "Задаёт Package, чьи члены импортируются в Namespace.",
    importingNamespace: "Задаёт Namespace, импортирующий члены из Package."
  },
  constraints: {
    public_or_private: {
      description: "visibility PackageImport может быть только public или private.",
      ocl: "inv: visibility = VisibilityKind::public or visibility = VisibilityKind::private"
    }
  }
},
PackageableElement: {
  properties: {
    visibility: "PackageableElement должен иметь заданную visibility, если принадлежит Namespace. Видимость по умолчанию — public."
  },
  constraints: {
    namespace_needs_visibility: {
      description: "PackageableElement, принадлежащий Namespace, должен иметь visibility.",
      ocl: "inv: visibility = null implies namespace = null"
    }
  }
},
ParameterableElement: {
  properties: {
    owningTemplateParameter: "Формальный TemplateParameter, владеющий этим ParameterableElement.",
    templateParameter: "TemplateParameter, представляющий этот ParameterableElement как формальный параметр."
  },
  operations: {
    "isCompatibleWith(p : ParameterableElement) : Boolean": {
      description: "Запрос isCompatibleWith() определяет, совместим ли этот ParameterableElement с указанным ParameterableElement. По умолчанию этот ParameterableElement совместим с другим ParameterableElement p, если вид этого ParameterableElement совпадает с видом p или является его подтипом. Подклассы ParameterableElement должны переопределять эту операцию для задания других ограничений совместимости.",
      body: "self.oclIsKindOf(p.oclType())"
    },
    "isTemplateParameter() : Boolean": {
      description: "Запрос isTemplateParameter() определяет, представлен ли этот ParameterableElement как формальный TemplateParameter.",
      body: "templateParameter->notEmpty()"
    }
  }
},
Relationship: {
  properties: {
    relatedElement: "Задаёт Elements, связанные Relationship."
  }
},
TemplateBinding: {
  properties: {
    boundElement: "TemplateableElement, привязываемый этой TemplateBinding.",
    parameterSubstitution: "TemplateParameterSubstitutions, принадлежащие этой TemplateBinding.",
    signature: "TemplateSignature шаблона, являющегося целью этой TemplateBinding."
  },
  constraints: {
    parameter_substitution_formal: {
      description: "Каждая parameterSubstitution должна ссылаться на формальный TemplateParameter целевой TemplateSignature.",
      ocl: "inv: parameterSubstitution->forAll(b | signature.parameter->includes(b.formal))"
    },
    one_parameter_substitution: {
      description: "TemplateBinding содержит не более одной TemplateParameterSubstitution для каждого формального TemplateParameter целевой TemplateSignature.",
      ocl: "inv: signature.parameter->forAll(p | parameterSubstitution->select(b | b.formal = p)->size()\n  <= 1)"
    }
  }
},
TemplateParameter: {
  properties: {
    default: "ParameterableElement, являющийся значением по умолчанию для этого формального TemplateParameter.",
    ownedDefault: "ParameterableElement, принадлежащий этому TemplateParameter для предоставления значения по умолчанию.",
    ownedParameteredElement: "ParameterableElement, принадлежащий этому TemplateParameter для представления его как parameteredElement.",
    parameteredElement: "ParameterableElement, представляемый этим TemplateParameter.",
    signature: "TemplateSignature, владеющая этим TemplateParameter."
  },
  constraints: {
    must_be_compatible: {
      description: "Значение по умолчанию должно быть совместимо с формальным TemplateParameter.",
      ocl: "inv: default <> null implies default.isCompatibleWith(parameteredElement)"
    }
  }
},
TemplateParameterSubstitution: {
  properties: {
    actual: "ParameterableElement, являющийся фактическим параметром для этой TemplateParameterSubstitution.",
    formal: "Формальный TemplateParameter, связанный с этой TemplateParameterSubstitution.",
    ownedActual: "ParameterableElement, принадлежащий этой TemplateParameterSubstitution как её фактический параметр.",
    templateBinding: "TemplateBinding, владеющая этой TemplateParameterSubstitution."
  },
  constraints: {
    must_be_compatible: {
      description: "Фактический ParameterableElement должен быть совместим с формальным TemplateParameter; например, фактический ParameterableElement для Class TemplateParameter должен быть Class.",
      ocl: "inv: actual->forAll(a | a.isCompatibleWith(formal.parameteredElement))"
    }
  }
},
TemplateSignature: {
  properties: {
    ownedParameter: "Формальные параметры, принадлежащие этой TemplateSignature.",
    parameter: "Упорядоченный набор всех формальных TemplateParameters для этой TemplateSignature.",
    template: "TemplateableElement, владеющий этой TemplateSignature."
  },
  constraints: {
    own_elements: {
      description: "Параметры должны владеть ParameterableElements, которые они параметризуют, либо эти ParameterableElements должны принадлежать TemplateableElement, превращаемому в шаблон.",
      ocl: "inv: template.ownedElement->includesAll(parameter.parameteredElement->asSet() -\n  parameter.ownedParameteredElement->asSet())"
    },
    unique_parameters: {
      description: "Имена параметров TemplateSignature уникальны.",
      ocl: "inv: parameter->forAll(p1, p2 | (p1 <> p2 and\n  p1.parameteredElement.oclIsKindOf(NamedElement) and\n  p2.parameteredElement.oclIsKindOf(NamedElement)) implies\n    p1.parameteredElement.oclAsType(NamedElement).name <>\n    p2.parameteredElement.oclAsType(NamedElement).name)"
    }
  }
},
TemplateableElement: {
  properties: {
    ownedTemplateSignature: "Необязательная TemplateSignature, задающая формальные TemplateParameters для этого TemplateableElement. Если TemplateableElement имеет TemplateSignature, он является шаблоном.",
    templateBinding: "Необязательные TemplateBindings от этого TemplateableElement к одному или нескольким шаблонам."
  },
  operations: {
    "isTemplate() : Boolean": {
      description: "Запрос isTemplate() определяет, действительно ли этот TemplateableElement является шаблоном.",
      body: "ownedTemplateSignature <> null"
    },
    "parameterableElements() : ParameterableElement [0..*]": {
      description: "Запрос parameterableElements() возвращает набор ParameterableElements, которые могут использоваться как parameteredElements для TemplateParameter этого TemplateableElement. По умолчанию набор включает все ownedElements. Подклассы могут переопределять эту операцию, если необходимо ограничить набор ParameterableElements.",
      body: "self.allOwnedElements()\n  ->select(oclIsKindOf(ParameterableElement)).oclAsType(ParameterableElement)->asSet()"
    }
  }
},
Type: {
  properties: {
    package: "Задаёт владеющий Package этого Type, если он есть."
  },
  operations: {
    "conformsTo(other : Type) : Boolean": {
      description: "Запрос conformsTo() возвращает true для Type, соответствующего другому Type. По умолчанию два Types не соответствуют друг другу. Этот запрос предназначен для переопределения в конкретных ситуациях соответствия.",
      body: "false"
    }
  }
},
TypedElement: {
  properties: {
    type: "Тип TypedElement."
  }
},
VisibilityKind: {
  literals: {
    public: "NamedElement с открытой видимостью виден всем элементам, которые имеют доступ к содержимому владеющего Namespace.",
    private: "NamedElement с закрытой видимостью виден только внутри владеющего Namespace.",
    protected: "NamedElement с защищённой видимостью виден Elements, имеющим отношение обобщения к владеющему Namespace.",
    package: "NamedElement с пакетной видимостью виден всем Elements внутри ближайшего вмещающего Package при условии, что другие владеющие Elements имеют соответствующую видимость. Вне ближайшего вмещающего Package NamedElement с пакетной видимостью не виден. Пакетная видимость может назначаться только NamedElements, не принадлежащим Packages."
  }
},
});
