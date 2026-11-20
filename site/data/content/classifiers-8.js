Object.assign(window.UML_CONTENT.classifiers, {
    Duration: {
  definition: "Duration — это ValueSpecification, задающее временное расстояние между двумя моментами времени.",
  properties: {
    expr: "ValueSpecification, вычисляемое в значение Duration.",
    observation: "Ссылается на Observations, участвующие в вычислении значения Duration."
  },
  constraints: {
    no_expr_requires_observation: {
      description: "Если Duration не имеет expr, оно должно иметь единственное observation, являющееся DurationObservation.",
      ocl: "inv: expr = null implies (observation->size() = 1 and observation->forAll(oclIsKindOf(DurationObservation)))"
    }
  }
},
DurationConstraint: {
  definition: "DurationConstraint — это Constraint, ссылающееся на DurationInterval.",
  properties: {
    firstEvent: "Значение firstEvent[i] связано с constrainedElement[i] (где i равно 1 или 2). Если firstEvent[i] истинно, соответствующее наблюдаемое событие — первый момент времени, когда выполнение входит в constrainedElement[i]. Если firstEvent[i] ложно, соответствующее наблюдаемое событие — последний момент времени, когда выполнение находится внутри constrainedElement[i].",
    specification: "DurationInterval, ограничивающий длительность."
  },
  constraints: {
    first_event_multiplicity: {
      description: "Кратность firstEvent должна быть равна 2, если кратность constrainedElement равна 2. В противном случае кратность firstEvent равна 0.",
      ocl: "inv: if (constrainedElement->size() = 2)\n  then (firstEvent->size() = 2) else (firstEvent->size() = 0)\nendif"
    },
    has_one_or_two_constrainedElements: {
      description: "DurationConstraint имеет один или два constrainedElements.",
      ocl: "inv: constrainedElement->size() = 1 or constrainedElement->size()=2"
    }
  }
},
DurationInterval: {
  definition: "DurationInterval определяет диапазон между двумя Durations.",
  properties: {
    max: "Ссылается на Duration, обозначающее максимальное значение диапазона.",
    min: "Ссылается на Duration, обозначающее минимальное значение диапазона."
  }
},
DurationObservation: {
  definition: "DurationObservation — это ссылка на длительность во время выполнения. Оно указывает NamedElement(s) модели, за которыми следует наблюдать, и должно ли наблюдение происходить при входе в этот NamedElement или при выходе из него.",
  properties: {
    firstEvent: "Значение firstEvent[i] связано с event[i] (где i равно 1 или 2). Если firstEvent[i] истинно, соответствующее наблюдаемое событие — первый момент времени, когда выполнение входит в event[i]. Если firstEvent[i] ложно, соответствующее наблюдаемое событие — момент времени, когда выполнение выходит из event[i].",
    event: "DurationObservation определяется как длительность между входом в один event Element или выходом из него во время выполнения либо между входом/выходом одного event Element и входом/выходом второго."
  },
  constraints: {
    first_event_multiplicity: {
      description: "Кратность firstEvent должна быть равна 2, если кратность event равна 2. В противном случае кратность firstEvent равна 0.",
      ocl: "inv: if (event->size() = 2)\n  then (firstEvent->size() = 2) else (firstEvent->size() = 0)\nendif"
    }
  }
},
Expression: {
  definition: "Expression представляет узел дерева выражения, который может быть нетерминальным или терминальным. Оно определяет symbol и имеет возможно пустую последовательность operands, являющихся ValueSpecifications. При вычислении в контексте оно обозначает (возможно пустое) множество значений.",
  properties: {
    symbol: "Символ, связанный с этим узлом в дереве выражения.",
    operand: "Задаёт последовательность operand ValueSpecifications."
  }
},
Interval: {
  definition: "Interval определяет диапазон между двумя ValueSpecifications.",
  properties: {
    max: "Ссылается на ValueSpecification, обозначающее максимальное значение диапазона.",
    min: "Ссылается на ValueSpecification, обозначающее минимальное значение диапазона."
  }
},
IntervalConstraint: {
  definition: "IntervalConstraint — это Constraint, задаваемое Interval.",
  properties: {
    specification: "Interval, задающий условие IntervalConstraint."
  }
},
LiteralBoolean: {
  definition: "LiteralBoolean — это спецификация значения Boolean.",
  properties: {
    value: "Заданное значение Boolean."
  },
  operations: {
    "booleanValue() : Boolean {redefines ValueSpecification::booleanValue()}": {
      description: "Запрос booleanValue() возвращает значение.",
      body: "value"
    },
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    }
  }
},
LiteralInteger: {
  definition: "LiteralInteger — это спецификация значения Integer.",
  properties: {
    value: "Заданное значение Integer."
  },
  operations: {
    "integerValue() : Integer {redefines ValueSpecification::integerValue()}": {
      description: "Запрос integerValue() возвращает значение.",
      body: "value"
    },
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    }
  }
},
LiteralNull: {
  definition: "LiteralNull задаёт отсутствие значения.",
  operations: {
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    },
    "isNull() : Boolean {redefines ValueSpecification::isNull()}": {
      description: "Запрос isNull() возвращает true.",
      body: "true"
    }
  }
},
LiteralReal: {
  definition: "LiteralReal — это спецификация значения Real.",
  properties: {
    value: "Заданное значение Real."
  },
  operations: {
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    },
    "realValue() : Real {redefines ValueSpecification::realValue()}": {
      description: "Запрос realValue() возвращает значение.",
      body: "value"
    }
  }
},
LiteralSpecification: {
  definition: "LiteralSpecification идентифицирует моделируемую литеральную константу."
},
LiteralString: {
  definition: "LiteralString — это спецификация значения String.",
  properties: {
    value: "Заданное значение String."
  },
  operations: {
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    },
    "stringValue() : String {redefines ValueSpecification::stringValue()}": {
      description: "Запрос stringValue() возвращает значение.",
      body: "value"
    }
  }
},
LiteralUnlimitedNatural: {
  definition: "LiteralUnlimitedNatural — это спецификация числа UnlimitedNatural.",
  properties: {
    value: "Заданное значение UnlimitedNatural."
  },
  operations: {
    "isComputable() : Boolean {redefines ValueSpecification::isComputable()}": {
      description: "Запрос isComputable() переопределён как true.",
      body: "true"
    },
    "unlimitedValue() : UnlimitedNatural {redefines ValueSpecification::unlimitedValue()}": {
      description: "Запрос unlimitedValue() возвращает значение.",
      body: "value"
    }
  }
},
Observation: {
  definition: "Observation задаёт значение, определяемое наблюдением за событием или событиями, происходящими относительно других Elements модели."
},
OpaqueExpression: {
  definition: "OpaqueExpression — это ValueSpecification, задающее вычисление коллекции значений либо с помощью UML Behavior, либо на основе текстового оператора на языке, отличном от UML.",
  properties: {
    body: "Текстовое определение поведения OpaqueExpression, возможно, на нескольких языках.",
    language: "Задаёт языки, используемые для выражения текстовых тел OpaqueExpression. Языки сопоставляются body Strings по порядку. Интерпретация body зависит от языков. Если языки не указаны, они могут быть неявно определены телом выражения или контекстом.",
    behavior: "Задаёт поведение OpaqueExpression как UML Behavior.",
    result: "Если OpaqueExpression задано с помощью UML Behavior, это свойство ссылается на единственный обязательный возвращаемый Parameter этого Behavior. Когда Behavior завершает выполнение, значения этого Parameter дают результат вычисления OpaqueExpression."
  },
  operations: {
    "isIntegral() : Boolean": {
      description: "Запрос isIntegral() определяет, предназначено ли выражение для получения Integer.",
      body: "false"
    },
    "isNonNegative() : Boolean": {
      description: "Запрос isNonNegative() определяет, имеет ли целочисленное выражение неотрицательное значение.",
      pre: "self.isIntegral()",
      body: "false"
    },
    "isPositive() : Boolean": {
      description: "Запрос isPositive() определяет, имеет ли целочисленное выражение положительное значение.",
      pre: "self.isIntegral()",
      body: "false"
    },
    "result() : Parameter [0..1]": {
      description: "Деривация для OpaqueExpression::/result.",
      body: "if behavior = null then\nnull\nelse\nbehavior.ownedParameter->first()\nendif"
    },
    "value() : Integer": {
      description: "Запрос value() возвращает целочисленное значение для выражения, предназначенного для его получения.",
      pre: "self.isIntegral()",
      body: "0"
    }
  },
  constraints: {
    language_body_size: {
      description: "Если атрибут language не пуст, размеры массивов body и language должны совпадать.",
      ocl: "inv: language->notEmpty() implies (_'body'->size() = language->size())"
    },
    one_return_result_parameter: {
      description: "behavior должно иметь ровно один возвращаемый результат-параметр.",
      ocl: "inv: behavior <> null implies\n   behavior.ownedParameter->select(direction=ParameterDirectionKind::return)->size() = 1"
    },
    only_in_or_return_parameters: {
      description: "behavior может иметь только непотоковые входные или возвращаемые параметры.",
      ocl: "inv: behavior <> null implies behavior.ownedParameter->forAll(not isStream and\n(direction=ParameterDirectionKind::in or direction=ParameterDirectionKind::return))"
    }
  }
},
StringExpression: {
  definition: "StringExpression — это Expression, задающее значение String, получаемое конкатенацией последовательности operands со значениями String или последовательности subExpressions, некоторые из которых могут быть параметрами шаблона.",
  properties: {
    owningExpression: "StringExpression, для которого это StringExpression является subExpression.",
    subExpression: "StringExpressions, составляющие это StringExpression."
  },
  operations: {
    "stringValue() : String {redefines ValueSpecification::stringValue()}": {
      description: "Запрос stringValue() возвращает String, полученную конкатенацией в заданном порядке всех компонентных значений String всех operands или subExpressions, входящих в StringExpression.",
      body: "if subExpression->notEmpty()\nthen subExpression->iterate(se; stringValue: String = '' | \nstringValue.concat(se.stringValue()))\nelse operand->iterate(op; stringValue: String = '' | stringValue.concat(op.stringValue()))\nendif"
    }
  },
  constraints: {
    operands: {
      description: "Все operands StringExpression должны быть LiteralStrings.",
      ocl: "inv: operand->forAll (oclIsKindOf (LiteralString))"
    },
    subexpressions: {
      description: "Если StringExpression имеет подвыражения, оно не может иметь operands, и наоборот (это позволяет избежать необходимости определять порядок сопоставления между operands и subexpressions).",
      ocl: "inv: if subExpression->notEmpty() then operand->isEmpty() else operand->notEmpty() endif"
    }
  }
},
TimeConstraint: {
  definition: "TimeConstraint — это Constraint, ссылающееся на TimeInterval.",
  properties: {
    firstEvent: "Значение firstEvent связано с constrainedElement. Если firstEvent истинно, соответствующее наблюдаемое событие — первый момент времени, когда выполнение входит в constrainedElement. Если firstEvent ложно, соответствующее наблюдаемое событие — последний момент времени, когда выполнение находится внутри constrainedElement.",
    specification: "TimeInterval, ограничивающий длительность."
  },
  constraints: {
    has_one_constrainedElement: {
      description: "TimeConstraint имеет один constrainedElement.",
      ocl: "inv: constrainedElement->size() = 1"
    }
  }
},
TimeExpression: {
  definition: "TimeExpression — это ValueSpecification, представляющее значение времени.",
  properties: {
    expr: "ValueSpecification, вычисляемое в значение TimeExpression.",
    observation: "Ссылается на Observations, участвующие в вычислении значения TimeExpression."
  },
  constraints: {
    no_expr_requires_observation: {
      description: "Если TimeExpression не имеет expr, оно должно иметь единственное observation, являющееся TimeObservation.",
      ocl: "inv: expr = null implies (observation->size() = 1 and observation->forAll(oclIsKindOf(TimeObservation)))"
    }
  }
},
TimeInterval: {
  definition: "TimeInterval определяет диапазон между двумя TimeExpressions.",
  properties: {
    max: "Ссылается на TimeExpression, обозначающее максимальное значение диапазона.",
    min: "Ссылается на TimeExpression, обозначающее минимальное значение диапазона."
  }
},
TimeObservation: {
  definition: "TimeObservation — это ссылка на момент времени во время выполнения. Оно указывает NamedElement модели, за которым следует наблюдать, и должно ли наблюдение происходить при входе в этот NamedElement или при выходе из него.",
  properties: {
    firstEvent: "Значение firstEvent связано с event. Если firstEvent истинно, соответствующее наблюдаемое событие — первый момент времени, когда выполнение входит в event Element. Если firstEvent ложно, соответствующее наблюдаемое событие — момент времени, когда выполнение выходит из event Element.",
    event: "TimeObservation определяется входом в event Element или выходом из него во время выполнения."
  }
},
ValueSpecification: {
  definition: "ValueSpecification — это спецификация (возможно пустого) множества значений. ValueSpecification является ParameterableElement, который может быть представлен как формальный TemplateParameter и предоставлен как фактический параметр при привязке шаблона.",
  operations: {
    "booleanValue() : Boolean [0..1]": {
      description: "Запрос booleanValue() возвращает единственное значение Boolean, если его можно вычислить.",
      body: "null"
    },
    "integerValue() : Integer [0..1]": {
      description: "Запрос integerValue() возвращает единственное значение Integer, если его можно вычислить.",
      body: "null"
    },
    "isCompatibleWith(p : ParameterableElement) : Boolean {redefines ParameterableElement::isCompatibleWith()}": {
      description: "Запрос isCompatibleWith() определяет, совместимо ли это ValueSpecification с указанным ParameterableElement. Это ValueSpecification совместимо с ParameterableElement p, если вид этого ValueSpecification совпадает с видом p или является его подтипом. Кроме того, если p является TypedElement, тип этого ValueSpecification должен соответствовать типу p.",
      body: "self.oclIsKindOf(p.oclType()) and (p.oclIsKindOf(TypedElement) implies\nself.type.conformsTo(p.oclAsType(TypedElement).type))"
    },
    "isComputable() : Boolean": {
      description: "Запрос isComputable() определяет, может ли спецификация значения быть вычислена в модели. Эта операция не может быть полностью определена на OCL. Ожидается, что соответствующая спецификации реализация возвращает true для этой операции для всех ValueSpecifications, которые она может вычислить, и вычисляет все те, для которых операция истинна. Ожидается, что соответствующая спецификации реализация может вычислить по меньшей мере значения всех LiteralSpecifications.",
      body: "false"
    },
    "isNull() : Boolean": {
      description: "Запрос isNull() возвращает true, если можно вычислить, что значение равно null.",
      body: "false"
    },
    "realValue() : Real [0..1]": {
      description: "Запрос realValue() возвращает единственное значение Real, если его можно вычислить.",
      body: "null"
    },
    "stringValue() : String [0..1]": {
      description: "Запрос stringValue() возвращает единственное значение String, если его можно вычислить.",
      body: "null"
    },
    "unlimitedValue() : UnlimitedNatural [0..1]": {
      description: "Запрос unlimitedValue() возвращает единственное значение UnlimitedNatural, если его можно вычислить.",
      body: "null"
    }
  }
}
});
