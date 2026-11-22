"""
Name: sync_xmi_properties.py
Purpose: Generate classifier and association properties from the normative UML 2.5.1 XMI.
Interface: python scripts/sync_xmi_properties.py [--clause N] [--check]
Goal: Keep owned attributes, association ends, inherited properties and signatures consistent with OMG XMI for every clause configured in scripts/sections.json.
Requires: Python 3; site/docs/UML-2.5.1.xmi, scripts/section_config.py with scripts/sections.json and the clause data files listed there.
Usage:
  Run from the repository root after stage-2 data is available or the XMI/translations change.
  python scripts/sync_xmi_properties.py                 regenerate XMI data for all clauses
  python scripts/sync_xmi_properties.py --clause 9      update only Clause 9, preserving others
  python scripts/sync_xmi_properties.py --check         detect stale output without changing files
  Build the site afterwards so pages include the regenerated properties.
"""

from argparse import ArgumentParser
from copy import deepcopy
import json
from pathlib import Path
import re
import xml.etree.ElementTree as ET

from handbook_data import parse_literal
from section_config import data_files, load_sections


ROOT = Path(__file__).resolve().parent.parent
XMI = ROOT / "site" / "docs" / "UML-2.5.1.xmi"
OUTPUT = ROOT / "site" / "data" / "common-structure-xmi.js"
XMI_DIR = ROOT / "site" / "data" / "xmi"
XMI_NS = "{http://www.omg.org/spec/XMI/20131001}"
UML_NS = "{http://www.omg.org/spec/UML/20131001}"

CLASSIFIER_TRANSLATIONS = {
    "Expression": "Узел дерева выражения, который может быть терминальным или нетерминальным. Задаёт символ и, возможно, пустую последовательность операндов — спецификаций значений. При вычислении в контексте обозначает, возможно, пустое множество значений.",
    "BehavioralFeature": "Поведенческая характеристика — это характеристика классификатора, задающая аспект поведения его экземпляров. Она реализуется поведением. Поведенческая характеристика указывает, что классификатор отвечает на заданный запрос вызовом реализующего её метода.",
    "Classifier": "Классификатор представляет классификацию экземпляров по их характеристикам.",
    "ClassifierTemplateParameter": "Параметр шаблона классификатора предоставляет классификатор как формальный параметр шаблона.",
    "Feature": "Характеристика объявляет поведенческую или структурную характеристику классификаторов.",
    "Generalization": "Обобщение — таксономическое отношение между более общим и более конкретным классификаторами. Каждый экземпляр конкретного классификатора является также экземпляром общего классификатора. Конкретный классификатор наследует характеристики более общего классификатора. Обобщение принадлежит конкретному классификатору.",
    "GeneralizationSet": "Набор обобщений — упаковываемый элемент, экземпляры которого представляют множества отношений обобщения.",
    "InstanceSpecification": "Спецификация экземпляра — элемент модели, представляющий экземпляр в моделируемой системе. Она может выступать как цель развёртывания в отношении развёртывания, если представляет экземпляр узла, а также как развёрнутый артефакт, если представляет экземпляр артефакта.",
    "InstanceValue": "Значение экземпляра — это спецификация значения, которая идентифицирует экземпляр.",
    "Operation": "Операция — поведенческая характеристика классификатора, задающая имя, тип, параметры и ограничения для вызова связанного поведения. Операция может вызывать как выполнение поведений-методов, так и другие поведенческие отклики. Операция специализирует TemplateableElement, чтобы поддерживать задание шаблонных операций и связанных операций, и ParameterableElement, чтобы операцию можно было предоставлять как формальный параметр шаблона и передавать как фактический параметр привязки шаблона.",
    "OperationTemplateParameter": "Параметр шаблона операции предоставляет операцию как формальный параметр шаблона.",
    "Parameter": "Параметр — спецификация аргумента, используемого для передачи информации на вход или выход при вызове поведенческой характеристики. Параметры можно рассматривать как соединяемые элементы внутри коопераций.",
    "ParameterSet": "Набор параметров обозначает альтернативные множества входов или выходов, которые поведение может использовать.",
    "Property": "Свойство — структурная характеристика. Свойство, связанное отношением ownedAttribute с классификатором (отличным от ассоциации), представляет атрибут и может также представлять конец ассоциации; оно относит экземпляр классификатора к значению или множеству значений типа атрибута. Свойство, связанное отношением memberEnd с ассоциацией, представляет конец ассоциации; тип свойства является типом конца ассоциации. Свойство может выступать как цель развёртывания в отношении развёртывания, что позволяет моделировать развёртывание на иерархических узлах, чьи свойства выполняют роль внутренних частей. Свойство специализирует ParameterableElement, чтобы его можно было предоставлять как формальный параметр шаблона и передавать как фактический параметр привязки шаблона.",
    "RedefinableElement": "Переопределяемый элемент — элемент, который, будучи определённым в контексте классификатора, может быть переопределён более конкретно или иначе в контексте другого классификатора, специализирующего (прямо или косвенно) контекстный классификатор.",
    "RedefinableTemplateSignature": "Переопределяемая подпись шаблона поддерживает добавление формальных параметров шаблона в специализации шаблонного классификатора.",
    "Slot": "Слот обозначает, что сущность, смоделированная спецификацией экземпляра, имеет значение или значения для конкретной структурной характеристики.",
    "StructuralFeature": "Структурная характеристика — типизированная характеристика классификатора, задающая структуру экземпляров классификатора.",
    "Substitution": "Подстановка — отношение между двумя классификаторами, означающее, что подставляющий классификатор соответствует контракту, заданному классификатором контракта. Это означает, что экземпляры подставляющего классификатора могут подставляться во время выполнения там, где ожидаются экземпляры классификатора контракта.",
}

PROPERTY_TRANSLATIONS = {
    "A_actual_templateParameterSubstitution-templateParameterSubstitution": "Подстановки, в которых элемент выступает фактическим параметром.",
    "A_annotatedElement_comment-comment": "Комментарии, присоединённые к элементу.",
    "A_constrainedElement_constraint-constraint": "Ограничения, применяемые к элементу.",
    "A_default_templateParameter-templateParameter": "Параметры шаблона, для которых элемент задан как значение по умолчанию.",
    "A_formal_templateParameterSubstitution-templateParameterSubstitution": "Подстановки, в которых параметр выступает формальным параметром.",
    "A_importedElement_import-import": "Импорты, добавляющие элемент в пространство имён.",
    "A_importedMember_namespace-namespace": "Пространства имён, в которые элемент добавлен импортом.",
    "A_importedPackage_packageImport-packageImport": "Импорты, добавляющие членов пакета в пространство имён.",
    "A_lowerValue_owningLower-owningLower": "Элемент кратности, которому принадлежит спецификация нижней границы.",
    "A_mapping_abstraction-abstraction": "Абстрагирование, которому принадлежит выражение отображения.",
    "A_member_memberNamespace-memberNamespace": "Пространства имён, членом которых является элемент.",
    "A_nameExpression_namedElement-namedElement": "Именованный элемент, имя которого задаёт выражение.",
    "A_ownedActual_owningTemplateParameterSubstitution-owningTemplateParameterSubstitution": "Подстановка, владеющая фактическим параметром.",
    "A_ownedComment_owningElement-owningElement": "Элемент, владеющий комментарием.",
    "A_ownedDefault_templateParameter-templateParameter": "Параметр шаблона, владеющий значением по умолчанию.",
    "A_parameter_templateSignature-templateSignature": "Подписи, включающие параметр шаблона.",
    "A_relatedElement_relationship-relationship": "Отношения, в которых участвует элемент.",
    "A_signature_templateBinding-templateBinding": "Привязки, использующие подпись целевого шаблона.",
    "A_source_directedRelationship-directedRelationship": "Направленные отношения, для которых элемент является источником.",
    "A_specification_owningConstraint-owningConstraint": "Ограничение, владеющее спецификацией условия.",
    "A_supplier_supplierDependency-supplierDependency": "Зависимости, которые ссылаются на элемент как на поставщика.",
    "A_target_directedRelationship-directedRelationship": "Направленные отношения, для которых элемент является целью.",
    "A_type_typedElement-typedElement": "Типизированные элементы, для которых задан этот тип.",
    "A_upperValue_owningUpper-owningUpper": "Элемент кратности, которому принадлежит спецификация верхней границы.",
    "Expression-operand": "Упорядоченная последовательность спецификаций значений-операндов.",
    "Expression-symbol": "Символ, связанный с этим узлом дерева выражения.",
    "OpaqueExpression-behavior": "Поведение UML, задающее вычисление выражения.",
    "OpaqueExpression-body": "Текстовое определение поведения выражения, возможно на нескольких языках.",
    "OpaqueExpression-language": "Языки текстовых определений; порядок языков соответствует порядку строк body. Если языки не указаны, они могут следовать из выражения или контекста.",
    "OpaqueExpression-result": "Единственный возвращаемый параметр поведения, значения которого являются результатом вычисления выражения.",
    "Package-URI": "Идентификатор пакета, соответствующий правилам синтаксиса URI.",
    "Package-nestedPackage": "Вложенные пакеты, принадлежащие этому пакету.",
    "Package-nestingPackage": "Пакет, владеющий этим пакетом.",
    "Package-ownedStereotype": "Стереотипы, принадлежащие пакету.",
    "Package-ownedType": "Типы, принадлежащие пакету.",
    "Package-packageMerge": "Операции слияния пакетов, принадлежащие этому пакету.",
    "Package-packagedElement": "Упаковываемые элементы, принадлежащие пакету.",
    "Package-profileApplication": "Применения профилей, показывающие, какие профили применены к пакету.",
    "StringExpression-owningExpression": "Строковое выражение, частью которого является данное подвыражение.",
    "StringExpression-subExpression": "Строковые подвыражения, образующие данное выражение.",
    "A_behavior_opaqueExpression-opaqueExpression": "Непрозрачное выражение, вычисление которого задаёт поведение.",
    "A_operand_expression-expression": "Выражение, которому принадлежит операнд.",
    "A_ownedStereotype_owningPackage-owningPackage": "Пакет, владеющий стереотипом.",
    "A_packagedElement_owningPackage-owningPackage": "Пакет, владеющий упаковываемым элементом.",
    "A_result_opaqueExpression-opaqueExpression": "Непрозрачное выражение, результат которого задаёт параметр.",
    "Action-localPostcondition": "Ограничение, которое должно выполняться после завершения выполнения действия.",
    "Action-localPrecondition": "Ограничение, которое должно выполняться перед началом выполнения действия.",
    "ActivityEdge-guard": "Спецификация значения, определяющая, может ли маркер проходить по ребру деятельности; при её отсутствии прохождение не ограничено.",
    "ActivityEdge-weight": "Минимальное число маркеров, которые должны одновременно проходить по ребру; по умолчанию равно 1.",
    "ActivityPartition-represents": "Элемент, представленный функциональностью, моделируемой внутри раздела деятельности.",
    "Association-endType": "Классификаторы, используемые как типы концов ассоциации.",
    "Behavior-postcondition": "Необязательные ограничения, выполняемые после завершения поведения, если перед вызовом были выполнены предусловия.",
    "Behavior-precondition": "Необязательные ограничения, которые должны выполняться перед вызовом поведения.",
    "BehavioralFeature-raisedException": "Типы исключений, которые могут возникать при вызове поведенческой характеристики.",
    "ChangeEvent-changeExpression": "Логическая спецификация значения; событие изменения происходит при смене её значения с false на true.",
    "Classifier-inheritedMember": "Элементы, унаследованные классификатором от общих классификаторов.",
    "CollaborationUse-roleBinding": "Соответствие характеристик кооперации характеристикам владеющего классификатора, определяющее роли соединяемых элементов.",
    "Component-packagedElement": "Упаковываемые элементы, принадлежащие компоненту.",
    "ConsiderIgnoreFragment-message": "Сообщения, применимые к этому фрагменту взаимодействия.",
    "DeploymentTarget-deployedElement": "Элементы, представленные в артефакте, развёрнутом на цели развёртывания.",
    "Duration-expr": "Спецификация значения, вычисляющая длительность.",
    "DurationObservation-event": "События входа или выхода, между которыми измеряется длительность.",
    "Extend-condition": "Условие, которое должно выполняться при достижении первой точки расширения; без него расширение безусловно.",
    "InformationFlow-informationSource": "Источник, из которого исходят передаваемые информационные элементы.",
    "InformationFlow-informationTarget": "Цель, которой направляются передаваемые информационные элементы.",
    "InformationFlow-realization": "Отношения, реализующие указанный информационный поток.",
    "InstanceSpecification-specification": "Спецификация способа вычисления, вывода или построения экземпляра.",
    "InteractionConstraint-maxint": "Максимальное число итераций цикла.",
    "InteractionConstraint-minint": "Минимальное число итераций цикла.",
    "InteractionUse-argument": "Фактические аргументы взаимодействия.",
    "InteractionUse-returnValue": "Значение выполненного взаимодействия.",
    "Interval-max": "Спецификация максимального значения интервала.",
    "Interval-min": "Спецификация минимального значения интервала.",
    "JoinNode-joinSpec": "Условие, при котором узел слияния предлагает маркер на исходящем ребре; по умолчанию требуются маркеры на всех входящих рёбрах.",
    "Lifeline-selector": "Если соединяемый элемент многозначен, задаёт конкретную часть внутри этого множества.",
    "Manifestation-utilizedElement": "Элемент модели, используемый при воплощении в артефакте.",
    "Message-argument": "Аргументы сообщения.",
    "Message-signature": "Спецификация содержимого сообщения: операция или сигнал.",
    "ObjectNode-upperBound": "Максимальное число маркеров в узле объектов; при достижении границы новые маркеры не поступают, а при её отсутствии ограничения нет.",
    "Operation-bodyCondition": "Необязательное ограничение на значения результата вызова операции.",
    "Operation-postcondition": "Необязательные ограничения на состояние системы после завершения операции.",
    "Operation-precondition": "Необязательные ограничения на состояние системы при вызове операции.",
    "Operation-raisedException": "Типы исключений, которые могут возникать при вызове операции.",
    "Operation-type": "Возвращаемый тип операции, если он есть; выводится из возвращаемого параметра.",
    "PackageMerge-mergedPackage": "Пакет, содержимое которого объединяется с принимающим пакетом.",
    "PackageMerge-receivingPackage": "Пакет, расширяемый содержимым объединяемого пакета.",
    "Parameter-defaultValue": "Спецификация значения, используемого, если аргумент параметра не передан.",
    "ParameterSet-condition": "Ограничение, определяющее возможность начала или завершения выполнения со значениями параметров набора.",
    "Profile-metaclassReference": "Импорт метакласса, который может быть расширен профилем.",
    "Profile-metamodelReference": "Импорт пакета, содержащего прямо или косвенно расширяемые метаклассы.",
    "ProfileApplication-applyingPackage": "Пакет, владеющий применением профиля.",
    "Property-defaultValue": "Спецификация значения по умолчанию свойства при создании экземпляра владеющего классификатора.",
    "ProtocolTransition-postCondition": "Постусловие перехода, которое должно выполняться после его срабатывания и входит в постусловие связанной операции.",
    "ProtocolTransition-preCondition": "Предусловие перехода, проверяемое перед его срабатыванием.",
    "RedefinableTemplateSignature-inheritedParameter": "Формальные параметры расширяемых сигнатур шаблонов.",
    "Slot-value": "Значение или значения, хранящиеся в слоте.",
    "State-stateInvariant": "Условия, которые всегда истинны, пока это состояние является текущим.",
    "StateInvariant-invariant": "Ограничение, которое должно выполняться во время выполнения для этого инварианта состояния.",
    "TimeExpression-expr": "Спецификация значения, вычисляющая значение временного выражения.",
    "TimeObservation-event": "Событие входа или выхода, по которому определяется наблюдение времени.",
    "Transition-guard": "Ограничение-сторож, управляющее срабатыванием перехода; оно вычисляется без побочных эффектов.",
    "ValuePin-value": "Спецификация значения, вычисляемого для получения значения контакта значения.",
    "ValueSpecificationAction-value": "Спецификация значения, которое требуется вычислить.",
    "A_event_durationObservation-durationObservation": "Наблюдения длительности, события которых определяют измеряемую длительность.",
    "A_event_timeObservation-timeObservation": "Наблюдения времени, события которых определяют наблюдаемое время.",
    "A_expr_duration-duration": "Длительность, вычисляющая значение Duration.",
    "A_expr_timeExpression-timeExpression": "Временное выражение, вычисляющее значение TimeExpression.",
    "A_max_durationInterval-durationInterval": "Интервал длительности, обозначающий максимальное значение диапазона.",
    "A_max_interval-interval": "Интервал, обозначающий максимальное значение диапазона.",
    "A_max_timeInterval-timeInterval": "Интервал времени, обозначающий максимальное значение диапазона.",
    "A_min_durationInterval-durationInterval": "Интервал длительности, обозначающий минимальное значение диапазона.",
    "A_min_interval-interval": "Интервал, обозначающий минимальное значение диапазона.",
    "A_min_timeInterval-timeInterval": "Интервал времени, обозначающий минимальное значение диапазона.",
    "A_observation_duration-duration": "Длительность, участвующая в наблюдении.",
    "A_observation_timeExpression-timeExpression": "Временное выражение, участвующее в наблюдении.",
    "A_specification_durationConstraint-durationConstraint": "Ограничение длительности, задающее ограничение для DurationInterval.",
    "A_specification_intervalConstraint-intervalConstraint": "Интервальное ограничение, задающее спецификацию интервала.",
    "A_specification_timeConstraint-timeConstraint": "Ограничение времени, задающее ограничение для TimeInterval.",
    "Duration-observation": "Наблюдения, участвующие в вычислении значения Duration.",
    "DurationConstraint-firstEvent": "Значение первого события наблюдения входа/выхода.",
    "DurationConstraint-specification": "DurationInterval, ограничивающий длительность.",
    "DurationInterval-max": "Длительность, обозначающая максимальное значение диапазона.",
    "DurationInterval-min": "Длительность, обозначающая минимальное значение диапазона.",
    "DurationObservation-firstEvent": "Значение первого события наблюдения входа/выхода для каждого event.",
    "IntervalConstraint-specification": "Interval, задающий условие IntervalConstraint.",
    "TimeConstraint-specification": "TimeInterval, ограничивающий время.",
    "TimeExpression-observation": "Наблюдения, участвующие в вычислении значения TimeExpression.",
    "TimeInterval-max": "TimeExpression, обозначающее максимальное значение диапазона.",
    "TimeInterval-min": "TimeExpression, обозначающее минимальное значение диапазона.",
    "Behavior-specification": "Обозначает поведенческую характеристику, которую реализует поведение. Она должна принадлежать BehavioredClassifier, владеющему поведением, или быть им унаследована. Параметры поведенческой характеристики и реализующего поведения должны совпадать. Спецификация поведению не обязательна; в этом случае оно либо является classifierBehavior некоторого BehavioredClassifier, либо может вызываться только другим поведением этого классификатора.",
    "BehavioralFeature-concurrency": "Задаёт семантику одновременных вызовов одного и того же пассивного экземпляра (то есть экземпляра, происходящего из Class с isActive = false). Активные экземпляры сами управляют доступом к своим поведенческим характеристикам.",
    "BehavioralFeature-isAbstract": "Если true, поведенческая характеристика не имеет реализации, и её должна предоставить более специфичная Classifier. Если false, реализация должна быть в Classifier или унаследована.",
    "BehavioralFeature-method": "Поведение, реализующее поведенческую характеристику. Для данной пары Classifier (как владельца Behavior) и BehavioralFeature (как спецификации Behavior) может существовать не более одного Behavior.",
    "BehavioralFeature-ownedParameter": "Упорядоченное множество формальных параметров этой поведенческой характеристики.",
    "BehavioralFeature-ownedParameterSet": "Наборы параметров, принадлежащие этой поведенческой характеристике.",
    "Classifier-isAbstract": "Если true, Classifier может быть создан только созданием одной из его специализаций. Абстрактный Classifier предназначен для использования другими классификаторами, например как цель ассоциаций или обобщений.",
    "Classifier-isFinalSpecialization": "Если true, Classifier не может иметь специализаций.",
    "Classifier-attribute": "Все свойства, являющиеся прямыми (то есть не унаследованными и не импортированными) атрибутами классификатора.",
    "Classifier-collaborationUse": "Использования кооперации, принадлежащие классификатору.",
    "Classifier-feature": "Задаёт каждую характеристику, непосредственно определённую в классификаторе. Члены классификатора типа Feature могут в неё не входить, например унаследованные характеристики.",
    "Classifier-general": "Обобщающие классификаторы для этого классификатора.",
    "Classifier-generalization": "Отношения обобщения этого классификатора. Эти обобщения ведут к более общим классификаторам в иерархии обобщений.",
    "Classifier-ownedTemplateSignature": "Необязательная переопределяемая подпись шаблона, задающая формальные параметры шаблона.",
    "Classifier-ownedUseCase": "Варианты использования, принадлежащие этому классификатору.",
    "Classifier-powertypeExtent": "Наборы обобщений, для которых этот классификатор является powertype.",
    "Classifier-redefinedClassifier": "Классификаторы, переопределяемые этим классификатором.",
    "Classifier-representation": "Использование кооперации, указывающее кооперацию, которая представляет этот классификатор.",
    "Classifier-substitution": "Подстановки, принадлежащие этому классификатору.",
    "Classifier-templateParameter": "Параметр шаблона классификатора, который предоставляет этот элемент как формальный параметр.",
    "Classifier-useCase": "Варианты использования, субъектом которых является этот классификатор.",
    "ClassifierTemplateParameter-allowSubstitutable": "Ограничивает требуемое отношение между фактическим параметром и parameteredElement этого формального параметра.",
    "ClassifierTemplateParameter-constrainingClassifier": "Классификаторы, ограничивающие аргумент, который может использоваться для параметра. Если атрибут allowSubstitutable равен true, может быть подставлен любой классификатор, совместимый с этим ограничивающим классификатором; иначе это должен быть этот классификатор или одна из его специализаций. Если свойство пусто, ограничений на классификатор, используемый как аргумент, нет.",
    "ClassifierTemplateParameter-parameteredElement": "Классификатор, предоставляемый этим параметром шаблона классификатора.",
    "ConnectableElement-end": "Множество концов соединителей, присоединённых к этому соединяемому элементу.",
    "ConnectableElement-templateParameter": "Параметр шаблона соединяемого элемента для этого параметра ConnectableElement.",
    "DeploymentTarget-deployment": "Множество развёртываний для этой цели развёртывания.",
    "Feature-isStatic": "Указывает, характеризует ли эта характеристика отдельные экземпляры, классифицированные классификатором (false), или сам классификатор (true).",
    "Feature-featuringClassifier": "Классификаторы, характеристикой которых является эта Feature.",
    "Generalization-isSubstitutable": "Указывает, может ли конкретный классификатор использоваться везде, где может использоваться общий классификатор. Если true, сценарии выполнения конкретного классификатора должны быть надмножеством сценариев выполнения общего классификатора. Если false, такого ограничения на сценарии выполнения нет. Если не задано, моделировщик не указал, существует ли такое ограничение.",
    "Generalization-general": "Общий классификатор в отношении обобщения.",
    "Generalization-generalizationSet": "Наборы обобщений, членом которых является это обобщение. Обобщение может входить во множество наборов обобщений.",
    "Generalization-specific": "Конкретный (специализирующий) классификатор в отношении обобщения.",
    "GeneralizationSet-isCovering": "Указывает (через связанные обобщения), покрывают ли конкретные классификаторы набора общий классификатор. Если isCovering равен true, каждый экземпляр общего классификатора является также экземпляром хотя бы одного из конкретных классификаторов набора. Если isCovering равен false, существует один или несколько экземпляров общего классификатора, не являющихся экземплярами ни одного из конкретных классификаторов набора.",
    "GeneralizationSet-isDisjoint": "Указывает, имеют ли конкретные классификаторы в отношении обобщения общие экземпляры. Если isDisjoint равен true, конкретные классификаторы данного набора не имеют общих элементов, то есть их пересечение пусто. Если isDisjoint равен false, они имеют один или несколько общих элементов, то есть их пересечение не пусто.",
    "GeneralizationSet-generalization": "Обозначает экземпляры обобщения, являющиеся членами этого набора обобщений.",
    "GeneralizationSet-powertype": "Обозначает классификатор, определённый как powertype для связанного набора обобщений, если он есть.",
    "InstanceSpecification-classifier": "Классификатор или классификаторы представленного экземпляра. Если задано несколько классификаторов, экземпляр классифицирован всеми ими.",
    "InstanceSpecification-slot": "Слот, задающий значение или значения структурной характеристики экземпляра. Спецификация экземпляра может иметь один слот на каждую структурную характеристику своих классификаторов, включая унаследованные характеристики. Необязательно моделировать слот для каждой структурной характеристики; в этом случае спецификация экземпляра является частичным описанием.",
    "InstanceValue-instance": "Спецификация экземпляра, представляющая заданное значение.",
    "Operation-class": "Класс, владеющий этой операцией, если есть.",
    "Operation-datatype": "Тип данных, владеющий этой операцией, если есть.",
    "Operation-interface": "Интерфейс, владеющий этой операцией, если есть.",
    "Operation-isOrdered": "Указывает, является ли возвращаемый параметр упорядоченным, если он есть. Эта информация выводится из возвращаемого результата операции.",
    "Operation-isQuery": "Указывает, оставляет ли выполнение поведенческой характеристики состояние системы неизменным (isQuery = true) или могут ли происходить побочные эффекты (isQuery = false).",
    "Operation-isUnique": "Указывает, является ли возвращаемый параметр уникальным, если он есть. Эта информация выводится из возвращаемого результата операции.",
    "Operation-lower": "Нижняя кратность возвращаемого параметра, если он есть. Эта информация выводится из возвращаемого результата операции.",
    "Operation-upper": "Верхняя кратность возвращаемого параметра, если он есть. Эта информация выводится из возвращаемого результата операции.",
    "Operation-ownedParameter": "Параметры, принадлежащие этой операции.",
    "Operation-redefinedOperation": "Операции, переопределяемые этой операцией.",
    "Operation-templateParameter": "Параметр шаблона операции, который предоставляет этот элемент как формальный параметр.",
    "OperationTemplateParameter-parameteredElement": "Операция, предоставляемая этим параметром шаблона операции.",
    "Parameter-default": "Строка, представляющая значение, используемое, когда для параметра не передан аргумент.",
    "Parameter-direction": "Указывает, передаётся ли параметр в поведенческий элемент или из него.",
    "Parameter-effect": "Задаёт эффект, который выполнения владельца параметра оказывают на объекты, передаваемые через параметр на вход или выход.",
    "Parameter-isException": "Показывает, может ли выходной параметр выдать значение с исключением остальных выходов.",
    "Parameter-isStream": "Указывает, может ли входной параметр принимать значения во время выполнения своего поведения, а выходной — выдавать значения во время выполнения поведения.",
    "Parameter-operation": "Операция, владеющая этим параметром.",
    "Parameter-parameterSet": "Наборы параметров, содержащие этот параметр. См. ParameterSet.",
    "ParameterSet-parameter": "Параметры в наборе параметров.",
    "Property-aggregation": "Задаёт вид агрегирования, применимый к свойству.",
    "Property-isComposite": "Если isComposite равен true, объект, содержащий атрибут, является контейнером для объекта или значения, содержащихся в атрибуте. Это выводимое значение, показывающее, является ли агрегирование свойства композицией.",
    "Property-isDerived": "Указывает, является ли свойство выводимым, то есть могут ли его значения вычисляться из другой информации.",
    "Property-isDerivedUnion": "Указывает, выводится ли свойство как объединение всех свойств, которые ограничены быть его подмножествами.",
    "Property-isID": "True указывает, что это свойство может использоваться для однозначной идентификации экземпляра содержащего его класса.",
    "Property-association": "Ассоциация, членом которой является это свойство, если есть.",
    "Property-associationEnd": "Обозначает необязательный конец ассоциации, владеющий атрибутом-квалификатором.",
    "Property-class": "Класс, владеющий этим свойством, если есть.",
    "Property-datatype": "Тип данных, владеющий этим свойством, если есть.",
    "Property-interface": "Интерфейс, владеющий этим свойством, если есть.",
    "Property-opposite": "Когда свойство является одним из концов бинарной ассоциации, даёт другой её конец.",
    "Property-owningAssociation": "Владеющая ассоциация этого свойства, если есть.",
    "Property-qualifier": "Необязательный упорядоченный список атрибутов-квалификаторов конца.",
    "Property-redefinedProperty": "Свойства, переопределяемые этим свойством, если есть.",
    "Property-subsettedProperty": "Свойства, подмножеством которых это свойство ограничено быть, если есть.",
    "RedefinableElement-isLeaf": "Указывает, возможно ли дальнейшее переопределение переопределяемого элемента. Если значение true, дальнейшее переопределение невозможно.",
    "RedefinableElement-redefinedElement": "Переопределяемые элементы, которые переопределяет этот элемент.",
    "RedefinableElement-redefinitionContext": "Контексты, в которых этот элемент может быть переопределён.",
    "RedefinableTemplateSignature-classifier": "Классификатор, владеющий этой переопределяемой подписью шаблона.",
    "RedefinableTemplateSignature-extendedSignature": "Подписи шаблонов, расширяемые этой переопределяемой подписью шаблона.",
    "Slot-definingFeature": "Структурная характеристика, задающая значения, которые может хранить слот.",
    "Slot-owningInstance": "Спецификация экземпляра, владеющая этим слотом.",
    "StructuralFeature-isReadOnly": "Если isReadOnly равен true, структурную характеристику нельзя изменять после инициализации.",
    "Substitution-contract": "Контракт, которому следует подставляющий классификатор.",
    "Substitution-substitutingClassifier": "Экземпляры подставляющего классификатора могут подставляться во время выполнения там, где ожидаются экземпляры классификатора контракта.",
    "A_attribute_classifier-classifier": "Классификатор, для которого свойство является атрибутом.",
    "A_bodyCondition_bodyContext-bodyContext": "Операция, задающая условие на значения результата своего вызова.",
    "A_classifier_instanceSpecification-instanceSpecification": "Спецификации экземпляров, классифицированные этим классификатором.",
    "A_collaborationUse_classifier-classifier": "Классификатор, владеющий использованием кооперации.",
    "A_condition_parameterSet-parameterSet": "Набор параметров, владеющий условием.",
    "A_constrainingClassifier_classifierTemplateParameter-classifierTemplateParameter": "Параметры шаблона классификатора, которые ограничивает этот классификатор.",
    "A_contract_substitution-substitution": "Подстановки, контрактом которых служит этот классификатор.",
    "A_defaultValue_owningParameter-owningParameter": "Параметр, владеющий значением по умолчанию.",
    "A_defaultValue_owningProperty-owningProperty": "Свойство, владеющее значением по умолчанию.",
    "A_definingFeature_slot-slot": "Слоты, значения которых задаёт эта определяющая характеристика.",
    "A_extendedSignature_redefinableTemplateSignature-redefinableTemplateSignature": "Переопределяемые подписи шаблонов, расширяемые этой подписью.",
    "A_general_classifier-classifier": "Классификаторы, обобщаемые этим классификатором.",
    "A_general_generalization-generalization": "Обобщения, общим классификатором которых служит этот классификатор.",
    "A_inheritedMember_inheritingClassifier-inheritingClassifier": "Классификаторы, унаследовавшие этот элемент.",
    "A_inheritedParameter_redefinableTemplateSignature-redefinableTemplateSignature": "Переопределяемые подписи шаблонов, унаследовавшие этот формальный параметр.",
    "A_instance_instanceValue-instanceValue": "Значения экземпляра, ссылающиеся на эту спецификацию экземпляра.",
    "A_opposite_property-property": "Свойства, для которых это свойство является противоположным концом.",
    "A_ownedParameterSet_behavioralFeature-behavioralFeature": "Поведенческая характеристика, владеющая набором параметров.",
    "A_ownedParameter_ownerFormalParam-ownerFormalParam": "Поведенческая характеристика, владеющая формальным параметром.",
    "A_ownedUseCase_classifier-classifier": "Классификатор, владеющий вариантом использования.",
    "A_postcondition_postContext-postContext": "Операция, задающая постусловие.",
    "A_precondition_preContext-preContext": "Операция, задающая предусловие.",
    "A_raisedException_behavioralFeature-behavioralFeature": "Поведенческие характеристики, при вызове которых может возникнуть это исключение.",
    "A_raisedException_operation-operation": "Операции, при вызове которых может возникнуть это исключение.",
    "A_redefinedClassifier_classifier-classifier": "Классификаторы, переопределяемые этим классификатором.",
    "A_redefinedElement_redefinableElement-redefinableElement": "Переопределяемые элементы, которые переопределяет этот элемент.",
    "A_redefinedOperation_operation-operation": "Операции, переопределяемые этой операцией.",
    "A_redefinedProperty_property-property": "Свойства, переопределяемые этим свойством.",
    "A_redefinitionContext_redefinableElement-redefinableElement": "Переопределяемые элементы, контекстом переопределения которых служит этот классификатор.",
    "A_representation_classifier-classifier": "Классификатор, представление которого задаёт это использование кооперации.",
    "A_specification_owningInstanceSpec-owningInstanceSpec": "Спецификация экземпляра, владеющая этой спецификацией значения.",
    "A_subsettedProperty_property-property": "Свойства, подмножествами которых являются эти свойства.",
    "A_type_operation-operation": "Операции, возвращаемым типом которых служит этот тип.",
    "A_value_owningSlot-owningSlot": "Слот, владеющий этим значением.",
}


def array_slice(text, start_marker, end_marker):
    """Slice of text between two array markers, or None if the start marker is absent."""
    if start_marker not in text:
        return None
    block = text.split(start_marker, 1)[1]
    return block.split(end_marker, 1)[0] if end_marker in block else block


def classifier_blocks(text):
    block = array_slice(text, "const classifiers = [", "const associations = [")
    if block is None:
        return
    # Matches both the multi-line entries of common-structure.js and the
    # compact single-line entries of classification.js.
    starts = list(re.finditer(r'^    \{\s*name: "([A-Za-z]+)",\s*ru:', block, re.MULTILINE))
    for index, match in enumerate(starts):
        end = starts[index + 1].start() if index + 1 < len(starts) else len(block)
        yield match.group(1), block[match.start():end]


def curated_descriptions(text):
    result = {}
    for classifier, block in classifier_blocks(text):
        for signature, description in re.findall(
            r'\{ signature: "([^"]+)", description: "([^"]*)" \}', block
        ):
            name = signature.split(":", 1)[0].strip().lstrip("/")
            if "(" not in name:
                result[f"{classifier}-{name}"] = description
    return result


def value(element, default):
    if element is None:
        return default
    return element.get("value", default)


def property_type(prop):
    if prop.get("type"):
        return prop.get("type")
    type_element = prop.find("type")
    if type_element is not None:
        return type_element.get("href", "").rsplit("#", 1)[-1]
    raise ValueError(f"Property {prop.get(XMI_NS + 'id')} has no type")


def default_value(prop):
    default = prop.find("defaultValue")
    if default is None:
        return None
    if default.get("value") is not None:
        return default.get("value")
    if default.get("instance"):
        return default.get("instance").rsplit("-", 1)[-1]
    default_types = {
        "uml:LiteralBoolean": "false",
        "uml:LiteralInteger": "0",
        "uml:LiteralUnlimitedNatural": "1",
    }
    return default_types.get(default.get(XMI_NS + "type"))


class XmiModel:
    def __init__(self, path):
        self.root = ET.parse(path).getroot()
        self.elements = {
            element.get(XMI_NS + "id"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "id")
        }
        self.classes = {
            element.get("name"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "type") == "uml:Class"
        }
        self.associations = {
            element.get("name"): element
            for element in self.root.iter()
            if element.get(XMI_NS + "type") == "uml:Association"
        }
        self.property_owners = {
            prop.get(XMI_NS + "id"): {"type": "classifier", "name": name}
            for name, classifier in self.classes.items()
            for prop in classifier.findall("ownedAttribute")
        }
        self.property_owners.update({
            prop.get(XMI_NS + "id"): {"type": "association", "name": name}
            for name, association in self.associations.items()
            for prop in association.findall("ownedEnd")
        })
        self.missing_descriptions = []

    def property_name(self, element_id):
        return self.elements[element_id].get("name")

    def property_references(self, prop, tag):
        return [
            {
                "id": item.get(XMI_NS + "idref"),
                "name": self.property_name(item.get(XMI_NS + "idref")),
                "type": property_type(self.elements[item.get(XMI_NS + "idref")]),
                "owner": self.property_owners.get(item.get(XMI_NS + "idref")),
            }
            for item in prop.findall(tag)
        ]

    def modifiers(self, prop):
        result = []
        if prop.get("isOrdered") == "true":
            result.append("ordered")
        if prop.get("isUnique") == "false":
            result.append("nonunique")
        if prop.get("isReadOnly") == "true":
            result.append("readOnly")
        if prop.get("isDerivedUnion") == "true":
            result.append("union")
        subsets = [self.property_name(item.get(XMI_NS + "idref")) for item in prop.findall("subsettedProperty")]
        redefines = [self.property_name(item.get(XMI_NS + "idref")) for item in prop.findall("redefinedProperty")]
        if subsets:
            result.append("subsets " + ", ".join(subsets))
        if redefines:
            result.append("redefines " + ", ".join(redefines))
        return result, subsets, redefines

    def signature(self, prop):
        name = prop.get("name")
        if prop.get("isDerived") == "true":
            name = "/" + name
        lower_element = prop.find("lowerValue")
        upper_element = prop.find("upperValue")
        lower = value(lower_element, "0" if lower_element is not None else "1")
        upper = value(upper_element, "1")
        signature = f"{name} : {property_type(prop)} [{lower}..{upper}]"
        default = default_value(prop)
        if default is not None:
            signature += f" = {default}"
        modifiers, _, _ = self.modifiers(prop)
        if modifiers:
            signature += " {" + ", ".join(modifiers) + "}"
        return signature

    def property(self, prop, descriptions, owner):
        prop_id = prop.get(XMI_NS + "id")
        description = descriptions.get(prop_id) or PROPERTY_TRANSLATIONS.get(prop_id)
        if not description:
            self.missing_descriptions.append(prop_id)
            description = ""
        _, subsets, redefines = self.modifiers(prop)
        return {
            "id": prop_id,
            "name": prop.get("name"),
            "signature": self.signature(prop),
            "description": description,
            "type": property_type(prop),
            "association": prop.get("association"),
            "owner": owner,
            "subsets": subsets,
            "redefines": redefines,
            "subsettedProperties": self.property_references(prop, "subsettedProperty"),
            "redefinedProperties": self.property_references(prop, "redefinedProperty"),
        }

    def direct_properties(self, class_name, descriptions):
        classifier = self.classes[class_name]
        return [
            self.property(prop, descriptions, class_name)
            for prop in classifier.findall("ownedAttribute")
        ]

    def classifier_definition(self, class_name):
        if class_name in CLASSIFIER_TRANSLATIONS:
            return CLASSIFIER_TRANSLATIONS[class_name]
        comment = self.classes[class_name].find("ownedComment")
        return comment.get("body", "") if comment is not None else ""

    def generalizations(self, class_name):
        return [
            item.get("general")
            for item in self.classes[class_name].findall("generalization")
        ]

    def inherited_properties(self, class_name, direct_by_class):
        inherited = []
        seen = set()
        redefined_ids = set()

        def collect_redefinitions(name):
            for prop in self.classes[name].findall("ownedAttribute"):
                redefined_ids.update(
                    item.get(XMI_NS + "idref")
                    for item in prop.findall("redefinedProperty")
                )
            for parent in self.generalizations(name):
                collect_redefinitions(parent)

        collect_redefinitions(class_name)

        def visit(parent):
            for prop in direct_by_class[parent]:
                if prop["id"] in redefined_ids or prop["id"] in seen:
                    continue
                item = deepcopy(prop)
                item["inheritedFrom"] = parent
                inherited.append(item)
                seen.add(prop["id"])
            for grandparent in self.generalizations(parent):
                visit(grandparent)

        for parent in self.generalizations(class_name):
            visit(parent)
        return inherited

    def association_ends(self, association_name, descriptions):
        association = self.associations[association_name]
        result = []
        for end_ref in association.findall("memberEnd"):
            prop = self.elements[end_ref.get(XMI_NS + "idref")]
            result.append(self.property(prop, descriptions, association_name))
        return result


def generate(clause=None):
    model = XmiModel(XMI)
    clause_paths = data_files(None if clause is None else [clause])
    if clause is not None and not clause_paths:
        raise ValueError(f"No data files found for clause {clause}; create the clause data file first")
    # Curated Russian descriptions are shared reference data: inherited properties
    # of clause classifiers are owned by ancestor classes from other clauses.
    descriptions = {}
    for path in data_files():
        descriptions.update(curated_descriptions(path.read_text(encoding="utf-8")))
    parsed_names = []
    association_list = []
    for path in clause_paths:
        text = path.read_text(encoding="utf-8")
        objects = {}
        for key in ("classifiers", "associations"):
            marker = f"const {key} ="
            objects[key] = parse_literal(text, text.index(marker) + len(marker))
        names = [
            item["name"] for item in objects["classifiers"]
            if clause is None or item["section"].split(".")[0] == clause
        ]
        if not names:
            raise ValueError(f"No classifiers parsed from {path.relative_to(ROOT)}")
        parsed_names.extend(names)
        association_list.extend(
            item["name"] for item in objects["associations"]
            if clause is None or item["section"].split(".")[0] == clause
        )

    enumeration_names = {
        element.get("name")
        for element in model.root.iter()
        if element.get(XMI_NS + "type") == "uml:Enumeration"
    }
    missing_classes = [
        name for name in parsed_names
        if name not in model.classes and name not in enumeration_names
    ]
    if missing_classes:
        raise ValueError(f"Diagram classifiers absent from XMI: {missing_classes}")
    class_names = [name for name in parsed_names if name in model.classes]
    missing_associations = [name for name in association_list if name not in model.associations]
    if missing_associations:
        raise ValueError(f"Associations absent from XMI: {missing_associations}")

    required_classes = set()

    def require_with_ancestors(name):
        if name in required_classes:
            return
        required_classes.add(name)
        for parent in model.generalizations(name):
            require_with_ancestors(parent)

    for name in class_names:
        require_with_ancestors(name)
    direct_by_class = {
        name: model.direct_properties(name, descriptions)
        for name in required_classes
    }
    classes = {}
    for name in class_names:
        classes[name] = {
            "direct": direct_by_class[name],
            "inherited": model.inherited_properties(name, direct_by_class),
        }
    associations = {
        name: {"ends": model.association_ends(name, descriptions)}
        for name in association_list
    }
    if model.missing_descriptions:
        missing = sorted(set(model.missing_descriptions))
        raise ValueError("Missing Russian property descriptions:\n" + "\n".join(missing))
    payload = {
        "source": "OMG UML 2.5.1, formal/17-12-05, UML.xmi (20161101)",
        "classes": {},
        "associations": associations,
        "generalizations": {
            name: model.generalizations(name)
            for name in sorted(required_classes)
        },
        "classifierDefinitions": {
            name: model.classifier_definition(name)
            for name in sorted(required_classes)
        },
    }
    class_entries = [(name, classes[name]) for name in class_names if name in required_classes]
    return payload, class_entries, parsed_names


BASE_PREFIX = "window.UML_XMI_DATA = "


def serialize_base(payload):
    return BASE_PREFIX + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"


def load_base_payload():
    """Parsed content of the shared base file, or None if it does not exist yet."""
    if not OUTPUT.is_file():
        return None
    text = OUTPUT.read_text(encoding="utf-8")
    if not text.startswith(BASE_PREFIX) or not text.rstrip().endswith(";"):
        raise ValueError(f"Cannot parse existing base file {OUTPUT.relative_to(ROOT)}")
    return json.loads(text[len(BASE_PREFIX):].rstrip()[:-1])


def merge_base(payload, existing):
    """Overlay freshly generated clause records onto the existing base file content."""
    if not existing:
        return payload
    merged = dict(existing)
    merged["source"] = payload["source"]
    merged["classes"] = payload["classes"]
    for key in ("associations", "generalizations", "classifierDefinitions"):
        section = dict(existing.get(key) or {})
        section.update(payload[key])
        merged[key] = section
    return merged


def fragment_content(name, data):
    return f'window.UML_XMI_DATA.classes["{name}"] = ' + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--clause", choices=sorted(load_sections()), help="Limit generation and checks to one handbook clause")
    parser.add_argument("--check", action="store_true", help="Check that the generated file is up to date")
    args = parser.parse_args()
    payload, class_entries, parsed_names = generate(args.clause)
    if args.check:
        ok = True
        if args.clause is None:
            if not OUTPUT.is_file() or OUTPUT.read_text(encoding="utf-8") != serialize_base(payload):
                print(f"Base file {OUTPUT.relative_to(ROOT)} is out of date")
                ok = False
        else:
            existing = load_base_payload()
            merged = merge_base(payload, existing)
            if existing is None or OUTPUT.read_text(encoding="utf-8") != serialize_base(merged):
                print(f"Base file {OUTPUT.relative_to(ROOT)} is out of date for clause {args.clause}")
                ok = False
        for name, data in class_entries:
            fpath = XMI_DIR / f"{name}.js"
            if not fpath.is_file() or fpath.read_text(encoding="utf-8") != fragment_content(name, data):
                print(f"Fragment {fpath.relative_to(ROOT)} is out of date")
                ok = False
        if args.clause is None:
            candidates = sorted(XMI_DIR.glob("*.js"))
        else:
            candidates = [XMI_DIR / f"{name}.js" for name in parsed_names]
        required = {name for name, _ in class_entries}
        for fpath in candidates:
            if fpath.stem not in required and (args.clause is None or fpath.is_file()):
                print(f"Stale fragment to remove: {fpath.relative_to(ROOT)}")
                ok = False
        if not ok:
            raise SystemExit("XMI data is out of date; run python scripts/sync_xmi_properties.py")
        print("XMI property data: OK")
        return
    XMI_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(serialize_base(merge_base(payload, load_base_payload()) if args.clause else payload), encoding="utf-8")
    for name, data in class_entries:
        (XMI_DIR / f"{name}.js").write_text(fragment_content(name, data), encoding="utf-8")
    existing = {f.stem for f in XMI_DIR.glob("*.js")}
    required = {name for name, _ in class_entries}
    stale = existing - required
    if args.clause is not None:
        stale &= set(parsed_names)
    for stem in stale:
        (XMI_DIR / f"{stem}.js").unlink()
    print(f"Generated {OUTPUT.relative_to(ROOT)} + {len(class_entries)} fragments in {XMI_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()
