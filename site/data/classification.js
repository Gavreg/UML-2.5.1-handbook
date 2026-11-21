window.UML_CLASSIFICATION_DATA = (() => {
  const sections = [
    {
      id: "9.1",
      title: "Обзор",
      en: "Summary",
      page: 99,
      summary: "Классификация — важная техника организации модели. Раздел задаёт понятия, относящиеся к классификации. Центральное понятие — Classifier, абстрактный метакласс, конкретные подклассы которого используются для классификации различных видов значений. Остальные метаклассы раздела представляют составные части классификаторов, модели их экземпляров через InstanceSpecifications и различные отношения между этими понятиями.",
      figures: []
    },
    {
      id: "9.2",
      title: "Классификаторы",
      en: "Classifiers",
      page: 99,
      summary: "Classifier представляет классификацию экземпляров по их Features. Классификаторы организуются в иерархии с помощью Generalizations; RedefinableElements могут переопределяться в контексте иерархий обобщений.",
      semantics: "Классификатор имеет множество Features, некоторые из которых — Properties, называемые атрибутами классификатора. Экземпляр классификатора также является (косвенным) экземпляром каждого из его обобщений и наследует их членов, кроме закрытых. Classifier является Type и соответствует сам себе и всем своим обобщениям; isAbstract=true означает отсутствие прямых экземпляров. RedefinableElement может быть переопределён в специализирующем классификаторе вместо наследования; isLeaf запрещает переопределения. Substitution связывает классификаторы, чьи экземпляры взаимозаменяемы во время выполнения на основе соответствия контракту, без наследования структуры.",
      notation: "Обозначение классификатора по умолчанию — прямоугольник с именем и секциями, разделёнными горизонтальными линиями; обязательные секции attributes и operations располагаются одна над другой. Имя абстрактного классификатора выделяется курсивом или пометкой {abstract}; ключевые слова и стереотипы записываются в кавычках-ёлочках над именем. Обобщение изображается линией с незакрашенным треугольником у общего классификатора; допускаются стили separate target и shared target. Substitution изображается зависимостью с ключевым словом «substitute». Унаследованные члены могут показываться со значком '^' перед обозначением.",
      figures: ["9.1", "9.2", "9.3"]
    },
    {
      id: "9.3",
      title: "Шаблоны классификаторов",
      en: "Classifier Templates",
      page: 104,
      summary: "Classifier является TemplateableElement, поэтому классификатор может быть параметризован. Через PackageableElement он также является ParameterableElement: классификатор может выступать формальным параметром шаблона и задаваться как фактический параметр при привязке. Общая семантика шаблонов определена в 7.3.",
      semantics: "Классификатор с RedefinableTemplateSignature называется шаблонным, а с одной или несколькими TemplateBindings — связанным (bound). Семантика привязки эквивалентна вставке анонимного связанного классификатора — промежуточного результата для каждой привязки — и специализации всех этих промежуточных результатов связанным классификатором. RedefinableTemplateSignature специализирует TemplateSignature и RedefinableElement, позволяя добавлять формальные параметры в специализации шаблонного классификатора: все параметры расширяемых (переопределённых) подписей включаются в расширяющую подпись. ClassifierTemplateParameter представляет классификатор как формальный параметр; его constrainingClassifier ограничивает допустимые аргументы, а allowSubstitutable=true дополнительно разрешает подстановку по контракту.",
      notation: "Общая нотация шаблонов определена для TemplateableElement. Параметр классификатора записывается в виде <имя-параметра> [': ' <вид-параметра>] ['>' <ограничение>] ['=' <значение-по-умолчанию>], где <ограничение> задаёт constrainingClassifiers, а пометка {contract} указывает allowSubstitutable = true. Вид параметра может быть опущен, если это Class. Если связанный классификатор используется непосредственно как тип свойства, имя параметра шаблона выступает в роли типа свойства.",
      figures: ["9.4", "9.5", "9.6", "9.7", "9.8"]
    },
    {
      id: "9.4",
      title: "Характеристики",
      en: "Features",
      page: 107,
      summary: "Features представляют структурные и поведенческие характеристики классификаторов: StructuralFeatures задают структуру экземпляров, BehavioralFeatures — поведенческие аспекты. Подраздел также определяет Parameter, ParameterSet и перечисления видов параллелизма, направления и эффекта параметров.",
      semantics: "Каждая Feature связана с классификатором featuringClassifier; isStatic определяет, относится характеристика к отдельным экземплярам (false) или к самому классификатору (true). Для каждого экземпляра классификателя существуют значения всех прямых и унаследованных нестатических атрибутов; isReadOnly запрещает изменение после присваивания начального значения. BehavioralFeature специфицирует реакцию экземпляра на вызов: порядок, типы и направления параметров, возможные исключения (raisedException) и реализующие методы; isAbstract=true означает отсутствие реализации, а concurrency задаёт семантику параллельных вызовов. Parameter описывает передачу значений вовнутрь и наружу вызова: направление direction, кратность, значение по умолчанию, эффект effect, isException и isStream. ParameterSet объединяет альтернативные наборы входов или выходов одной поведенческой характеристики.",
      notation: "Общего обозначения Feature нет; его подклассы задают собственную нотацию. Статические характеристики подчёркиваются, {readOnly} помечает характеристику только для чтения, переопределения могут указываться строкой {redefines <x>}. Параметр записывается как [<направление>] <имя> ':' <тип> ['[' кратность ']'] ['=' <значение-по-умолчанию>] [{<свойство-parameter>}], направление по умолчанию — in. Наборы параметров имеют нотацию только на диаграммах деятельности (16.3.4).",
      figures: ["9.9"]
    },
    {
      id: "9.5",
      title: "Свойства",
      en: "Properties",
      page: 111,
      summary: "Properties — StructuralFeatures, представляющие атрибуты классификаторов, концы ассоциаций memberEnds и части StructuredClassifiers.",
      semantics: "Property может представлять атрибут классификатора (ownedAttribute), конец ассоциации (memberEnd) или, для бинарной ассоциации, оба одновременно. Значение defaultValue вычисляется при создании экземпляра и становится начальным значением свойства. isDerived отмечает вычисляемое из другой информации свойство, isDerivedUnion — строгий union всех свойств-подмножеств, isID — участие в идентификаторе экземпляра. Вид агрегации задаётся перечислением AggregationKind: composite требует, чтобы часть входила не более чем в один композитный объект и удалялась вместе с ним. Свойство может быть подмножеством других свойств (subsettedProperty), может переопределяться; производные union-свойства должны быть только для чтения.",
      notation: "Свойство записывается как [<видимость>] ['/'] <имя> [':' <тип>] ['[' <кратность> ']'] ['=' <значение-по-умолчанию>] [{<модификатор-свойства>}], где '/' означает derived, а модификаторы включают readOnly, union, subsets, redefines, ordered, unique, seq, id и ограничения. Нотации квалификаторов и агрегации определены в 11.5 Associations. Атрибут может изображаться в нотации, подобной ассоциации, с полым или закрашенным ромбом на хвосте стрелки; свойства атрибута могут показываться столбцами.",
      figures: ["9.10", "9.11", "9.12"]
    },
    {
      id: "9.6",
      title: "Операции",
      en: "Operations",
      page: 116,
      summary: "Operation — BehavioralFeature, которой может владеть Interface, DataType или Class. Операции также могут быть шаблонными и использоваться как параметры шаблонов.",
      semantics: "Операция специфицирует имя, тип, параметры и ограничения вызова поведения; тип операции совпадает с типом возвращаемого параметра, если он есть. Предусловия должны выполняться при вызове; постусловия должны выполняться при успешном завершении, если предусловия были истинны. bodyCondition ограничивает возвращаемый результат вычисляемым значением и, в отличие от постусловий, может переопределяться. Операция может возбуждать исключения (raisedException) и переопределяться в специализации featuringClassifier; isQuery=true запрещает изменение состояния. Шаблонная операция должна принадлежать классификатору; OperationTemplateParameter представляет операцию как формальный параметр шаблона, а её значение по умолчанию должно иметь те же типы, направления и кратности параметров.",
      notation: "Операция записывается как [<видимость>] <имя> '(' [<список-параметров>] ')' [':' [<тип-результата>] ['[' <кратность> ']'] [{<свойство-операции>]}], где свойства включают redefines <имя>, query, ordered, unique, seq и ограничения. Формальные параметры шаблонной операции указываются в списке между именем операции и её параметрами, а привязки — в двойных угловых скобках. Параметры исключений и потоковые параметры помечаются ключевыми словами «exception» и «stream» в строке свойств.",
      figures: ["9.13"]
    },
    {
      id: "9.7",
      title: "Наборы обобщений",
      en: "Generalization Sets",
      page: 119,
      summary: "GeneralizationSet объединяет обобщения в ортогональные измерения иерархий классификации. Набор обобщений может быть связан с классификатором — powertype.",
      semantics: "Все обобщения одного набора имеют один и тот же общий классификатор. isCovering=true означает, что каждый экземпляр общего классификатора является экземпляром хотя бы одного из специальных классификаторов набора; isDisjoint=true означает, что специальные классификаторы не имеют общих экземпляров. Оба свойства по умолчанию равны false. Powertype — необязательный классификатор, экземпляры которого находятся во взаимно однозначном соответствии со специализациями набора и семантически им эквивалентны.",
      notation: "Набор обозначается общим именем у линий обобщений, общим наконечником (shared target) или пунктирной линией, пересекающей стрелки с отдельными наконечниками; имя может опускаться. Свойства набора записываются аннотациями {complete, disjoint}, {incomplete, disjoint}, {complete, overlapping} или {incomplete, overlapping}; по умолчанию {incomplete, overlapping}, порядок аннотаций не значим. Powertype указывается именем классификатора с предшествующим двоеточием рядом с набором; имя набора, ограничения и powertype могут присутствовать в любой комбинации.",
      figures: ["9.14", "9.15", "9.16", "9.17", "9.18", "9.19", "9.20", "9.21", "9.22", "9.23", "9.24", "9.25", "9.26"]
    },
    {
      id: "9.8",
      title: "Экземпляры",
      en: "Instances",
      page: 126,
      summary: "InstanceSpecifications представляют экземпляры классификаторов в моделируемой системе. Они часто используются для моделирования примеров конфигураций экземпляров и могут быть частичными или полными представлениями соответствующих экземпляров.",
      semantics: "InstanceSpecification описывает фактическое или возможное существование экземпляров, их классификацию одним или несколькими классификаторами (любой из которых может быть абстрактным), вид экземпляра по его классификаторам и значения структурных характеристик в слотах. Slot задаёт значения ValueSpecifications для StructuralFeature, относящейся к классификатору экземпляра; не для всех характеристик нужны слоты, поэтому описание может быть частичным. Необязательная specification определяет, как вычислить или сконструировать экземпляр. InstanceValue — ValueSpecification, чьё значение задаётся InstanceSpecification; каждое вычисление даёт новый экземпляр, соответствующий спецификации, при этом InstanceSpecification не принадлежит значению.",
      notation: "InstanceSpecification изображается обозначением, подобным классификатору, но вместо имени классификатора подчёркивается сочетание имени экземпляра (если есть), двоеточия и имён классификаторов, разделённых запятыми; стандартное обозначение анонимного экземпляра безымянного классификатора — подчёркнутое двоеточие. Спецификация-значение показывается после знака '=' или ниже имени. Слоты записываются как имя характеристики, знак '=' и спецификация значения. InstanceValue может показываться текстом (имя, возможно квалифицированное) или графически; слот со InstanceValue может изображаться сплошной линией от владельца к значению с именем атрибута у целевого конца.",
      figures: ["9.27", "9.28", "9.29", "9.30", "9.31", "9.32"]
    },
    {
      id: "9.9",
      title: "Описания классификаторов",
      en: "Classifier Descriptions",
      page: 129,
      summary: "Справочные описания 22 классификаторов раздела Classification: определения, наследование, атрибуты, концы ассоциаций, операции, ограничения и литералы.",
      figures: []
    },
    {
      id: "9.10",
      title: "Описания ассоциаций",
      en: "Association Descriptions",
      page: 157,
      summary: "Справочные описания 47 ассоциаций раздела Classification и их концов.",
      figures: []
    }
  ];

  const classifiers = [
    {
      name: "AggregationKind",
      ru: "Вид агрегирования",
      kind: "Enumeration",
      section: "9.9.1",
      page: 129,
      definition: "Перечисление для задания вида агрегации Property.",
      literals: [
        { name: "none", description: "Указывает, что Property не имеет агрегации." },
        { name: "shared", description: "Указывает, что Property имеет разделяемую агрегацию." },
        { name: "composite", description: "Указывает, что Property агрегирована композитно, то есть композитный объект отвечает за существование и хранение составных объектов (частей)." }
      ]
    },
    {
      name: "BehavioralFeature",
      ru: "Поведенческая характеристика",
      kind: "Abstract Class",
      section: "9.9.2",
      page: 130,
      definition: "Характеристика классификатора, специфицирующая аспект поведения его экземпляров. BehavioralFeature реализуется (осуществляется) Behavior; она указывает, что классификатор ответит на обозначенный запрос вызовом реализующего метода.",
      generalizations: ["Feature", "Namespace"],
      specializations: ["Operation", "Reception"],
      operations: [
        { signature: "isDistinguishableFrom(n : NamedElement, ns : Namespace) : Boolean {redefines NamedElement::isDistinguishableFrom()}", description: "Запрос isDistinguishableFrom() определяет, могут ли две BehavioralFeatures сосуществовать в одном Namespace; для этого у них должны различаться сигнатуры.", body: "result = ((n.oclIsKindOf(BehavioralFeature) and ns.getNamesOfMember(self)->intersection(ns.getNamesOfMember(n))->notEmpty()) implies\n  Set{self}->including(n.oclAsType(BehavioralFeature))->isUnique(ownedParameter->collect(p|\n  Tuple { name=p.name, type=p.type,effect=p.effect,direction=p.direction,isException=p.isException,\n              isStream=p.isStream,isOrdered=p.isOrdered,isUnique=p.isUnique,lower=p.lower, upper=p.upper }))\n  )" },
        { signature: "inputParameters() : Parameter [0..*] {ordered}", description: "ownedParameters с направлениями in и inout.", body: "result = (ownedParameter->select(direction=ParameterDirectionKind::_'in' or direction=ParameterDirectionKind::inout))" },
        { signature: "outputParameters() : Parameter [0..*] {ordered}", description: "ownedParameters с направлениями out, inout или return.", body: "result = (ownedParameter->select(direction=ParameterDirectionKind::out or direction=ParameterDirectionKind::inout or direction=ParameterDirectionKind::return))" }
      ],
      constraints: [
        { name: "abstract_no_method", description: "Когда isAbstract равно true, методов нет.", ocl: "inv: isAbstract implies method->isEmpty()" }
      ]
    },
    {
      name: "CallConcurrencyKind",
      ru: "Вид параллелизма вызова",
      kind: "Enumeration",
      section: "9.9.3",
      page: 131,
      definition: "Перечисление, задающее семантику параллельных вызовов BehavioralFeature.",
      literals: [
        { name: "sequential", description: "Механизм управления параллелизмом не связан с BehavioralFeature, поэтому возможны конфликты параллелизма. Экземпляры, вызывающие BehavioralFeature, должны координироваться так, чтобы к цели одной BehavioralFeature одновременно происходил только один вызов." },
        { name: "guarded", description: "Несколько вызовов BehavioralFeature, перекрывающихся во времени, могут происходить к одному экземпляру, но начать разрешено только одному. Остальные блокируются, пока исполнение текущей BehavioralFeature не завершится; проектировщик системы отвечает за отсутствие взаимных блокировок." },
        { name: "concurrent", description: "Несколько вызовов BehavioralFeature, перекрывающихся во времени, могут происходить к одному экземпляру, и все они могут выполняться параллельно." }
      ]
    },
    {
      name: "Classifier",
      ru: "Классификатор",
      kind: "Abstract Class",
      section: "9.9.4",
      page: 132,
      definition: "Представляет классификацию экземпляров по их Features.",
      generalizations: ["Namespace", "Type", "TemplateableElement", "RedefinableElement"],
      specializations: ["Association", "StructuredClassifier", "BehavioredClassifier", "DataType", "Interface", "Signal", "InformationItem", "Artifact"],
      operations: [
        { signature: "allFeatures() : Feature [0..*]", description: "Запрос allFeatures() возвращает все Features в пространстве имён классификатора; в общем случае, благодаря таким механизмам как наследование, это множество шире, чем feature.", body: "result = (member->select(oclIsKindOf(Feature))->collect(oclAsType(Feature))->asSet())" },
        { signature: "allParents() : Classifier [0..*]", description: "Запрос allParents() возвращает всех прямых и косвенных предков обобщающегося классификатора.", body: "result = (parents()->union(parents()->collect(allParents())->asSet()))" },
        { signature: "conformsTo(other : Type) : Boolean {redefines Type::conformsTo()}", description: "Запрос conformsTo() возвращает true для классификатора, задающего тип, соответствующий другому; используется, например, при спецификации соответствия сигнатур операций.", body: "result = (if other.oclIsKindOf(Classifier) then\n  let otherClassifier : Classifier = other.oclAsType(Classifier) in\n    self = otherClassifier or allParents()->includes(otherClassifier)\nelse\n  false\nendif)" },
        { signature: "general() : Classifier [0..*]", description: "Общие классификаторы — те, на которые ссылаются отношения Generalization.", body: "result = (parents())" },
        { signature: "hasVisibilityOf(n : NamedElement) : Boolean", description: "Запрос hasVisibilityOf() определяет, виден ли NamedElement внутри классификатора. Не закрытые (non-private) члены видимы. Вызывается только для элементов, принадлежащих родителю.", pre: "allParents()->including(self)->collect(member)->includes(n)", body: "result = (n.visibility <> VisibilityKind::private)" },
        { signature: "inherit(inhs : NamedElement [0..*]) : NamedElement [0..*]", description: "Запрос inherit() задаёт способ наследования переданного множества элементов; исключает переопределённые элементы из результата.", body: "result = (inhs->reject(inh |\n  inh.oclIsKindOf(RedefinableElement) and\n  ownedMember->select(oclIsKindOf(RedefinableElement))->\n    select(redefinedElement->includes(inh.oclAsType(RedefinableElement)))\n       ->notEmpty()))" },
        { signature: "inheritableMembers(c : Classifier) : NamedElement [0..*]", description: "Запрос inheritableMembers() возвращает всех членов классификатора, которые могут быть унаследованы в одном из его потомков, с учётом действующих ограничений видимости.", pre: "c.allParents()->includes(self)", body: "result = (member->select(m | c.hasVisibilityOf(m)))" },
        { signature: "inheritedMember() : NamedElement [0..*]", description: "Ассоциация inheritedMember выводится наследованием наследуемых членов родителей.", body: "result = (inherit(parents()->collect(inheritableMembers(self))->asSet()))" },
        { signature: "isTemplate() : Boolean {redefines TemplateableElement::isTemplate()}", description: "Запрос isTemplate() возвращает, является ли данный классификатор шаблоном.", body: "result = (ownedTemplateSignature <> null or general->exists(g | g.isTemplate()))" },
        { signature: "maySpecializeType(c : Classifier) : Boolean", description: "Запрос maySpecializeType() определяет, может ли данный классификатор иметь отношение обобщения к классификаторам указанного типа. По умолчанию классификатор может специализировать классификаторы того же или более общего типа; предполагается переопределение классификаторами с иными ограничениями специализации.", body: "result = (self.oclIsKindOf(c.oclType()))" },
        { signature: "parents() : Classifier [0..*]", description: "Запрос parents() возвращает всех непосредственных предков обобщающегося классификатора.", body: "result = (generalization.general->asSet())" },
        { signature: "directlyRealizedInterfaces() : Interface [0..*]", description: "Интерфейсы, реализуемые данным классификатором напрямую.", body: "result = ((clientDependency->\n  select(oclIsKindOf(Realization) and supplier->forAll(oclIsKindOf(Interface))))->\n      collect(supplier.oclAsType(Interface))->asSet())" },
        { signature: "directlyUsedInterfaces() : Interface [0..*]", description: "Интерфейсы, используемые данным классификатором напрямую.", body: "result = ((supplierDependency->\n  select(oclIsKindOf(Usage) and client->forAll(oclIsKindOf(Interface))))->\n    collect(client.oclAsType(Interface))->asSet())" },
        { signature: "allRealizedInterfaces() : Interface [0..*]", description: "Интерфейсы, реализуемые данным классификатором и всеми его обобщениями.", body: "result = (directlyRealizedInterfaces()->union(self.allParents()->collect(directlyRealizedInterfaces()))->asSet())" },
        { signature: "allUsedInterfaces() : Interface [0..*]", description: "Интерфейсы, используемые данным классификатором и всеми его обобщениями.", body: "result = (directlyUsedInterfaces()->union(self.allParents()->collect(directlyUsedInterfaces()))->asSet())" },
        { signature: "isSubstitutableFor(contract : Classifier) : Boolean", description: "Проверяет, что контракт включён в контракты подстановок данного классификатора.", body: "result = (substitution.contract->includes(contract))" },
        { signature: "allAttributes() : Property [0..*] {ordered}", description: "Запрос allAttributes возвращает упорядоченное множество всех собственных и унаследованных атрибутов классификатора. Собственные атрибуты предшествуют унаследованным, атрибуты, унаследованные от более специального родительского классификатора, предшествуют атрибутам более общего родительского классификатора. Если у классификатора несколько непосредственных родителей, относительный порядок наборов атрибутов этих родителей не определён.", body: "result = (attribute->asSequence()->union(parents()->asSequence().allAttributes())->select(p | member->includes(p))->asOrderedSet())" },
        { signature: "allSlottableFeatures() : StructuralFeature [0..*]", description: "Все StructuralFeatures, относящиеся к классификатору и могущие иметь слоты: прямые атрибуты, унаследованные атрибуты, закрытые атрибуты в обобщениях и memberEnds ассоциаций, за исключением переопределённых StructuralFeatures.", body: "result = (member->select(oclIsKindOf(StructuralFeature))->\n  collect(oclAsType(StructuralFeature))->\n   union(self.inherit(self.allParents()->collect(p | p.attribute)->asSet())->\n     collect(oclAsType(StructuralFeature)))->asSet())" }
      ],
      constraints: [
        { name: "specialize_type", description: "Классификатор может специализировать только классификаторы допустимого типа.", ocl: "inv: parents()->forAll(c | self.maySpecializeType(c))" },
        { name: "maps_to_generalization_set", description: "Классификатор, отображаемый в набор обобщений, не может быть ни специальным, ни общим классификатором ни в одном из отношений Generalization этого набора. Иначе говоря, powertype не может быть экземпляром самого себя, а его экземпляры не могут быть его подклассами.", ocl: "inv: powertypeExtent->forAll( gs | \n  gs.generalization->forAll( gen | \n    not (gen.general = self) and not gen.general.allParents()->includes(self) and not (gen.specific = self) and not self.allParents()->includes(gen.specific) \n  ))" },
        { name: "non_final_parents", description: "Родители классификатора не должны быть финальными.", ocl: "inv: parents()->forAll(not isFinalSpecialization)" },
        { name: "no_cycles_in_generalization", description: "Иерархии обобщения должны быть направленными и ациклическими: классификатор не может быть одновременно транзитивно общим и транзитивно специальным классификатором одного и того же классификатора.", ocl: "inv: not allParents()->includes(self)" }
      ]
    },
    {
      name: "ClassifierTemplateParameter",
      ru: "Параметр шаблона классификатора",
      kind: "Class",
      section: "9.9.5",
      page: 136,
      definition: "Представляет Classifier как формальный параметр шаблона.",
      generalizations: ["TemplateParameter"],
      constraints: [
        { name: "has_constraining_classifier", description: "Если allowSubstitutable равно true, должен существовать constrainingClassifier.", ocl: "inv: allowSubstitutable implies constrainingClassifier->notEmpty()" },
        { name: "parametered_element_no_features", description: "parameteredElement не имеет непосредственных характеристик, а если constrainingClassifier пуст, не имеет обобщений.", ocl: "inv: parameteredElement.feature->isEmpty() and (constrainingClassifier->isEmpty() implies  parameteredElement.allParents()->isEmpty())" },
        { name: "matching_abstract", description: "Если parameteredElement не абстрактен, используемый как аргумент классификатор не должен быть абстрактным.", ocl: "inv: (not parameteredElement.isAbstract) implies templateParameterSubstitution.actual->forAll(a | not a.oclAsType(Classifier).isAbstract)" },
        { name: "actual_is_classifier", description: "Аргумент ClassifierTemplateParameter является классификатором.", ocl: "inv: templateParameterSubstitution.actual->forAll(a | a.oclIsKindOf(Classifier))" },
        { name: "constraining_classifiers_constrain_args", description: "Если заданы constrainingClassifiers, каждый аргумент должен совпадать с ними или быть их специализацией; если allowSubstitutable равно true, допускается и подстановка.", ocl: "inv: templateParameterSubstitution.actual->forAll( a |\n  let arg : Classifier = a.oclAsType(Classifier) in\n    constrainingClassifier->forAll(\n      cc |  \n         arg = cc or arg.conformsTo(cc) or (allowSubstitutable and arg.isSubstitutableFor(cc))\n      )\n)" },
        { name: "constraining_classifiers_constrain_parametered_element", description: "Если заданы constrainingClassifiers, parameteredElement должен совпадать с ними или быть их специализацией; если allowSubstitutable равно true, допускается и подстановка.", ocl: "inv: constrainingClassifier->forAll(\n     cc |  parameteredElement = cc or parameteredElement.conformsTo(cc) or (allowSubstitutable and parameteredElement.isSubstitutableFor(cc))\n)" }
      ]
    },
    {
      name: "Feature",
      ru: "Характеристика",
      kind: "Abstract Class",
      section: "9.9.6",
      page: 138,
      definition: "Объявляет поведенческую или структурную характеристику классификаторов.",
      generalizations: ["RedefinableElement"],
      specializations: ["BehavioralFeature", "StructuralFeature", "Connector"]
    },
    {
      name: "Generalization",
      ru: "Обобщение",
      kind: "Class",
      section: "9.9.7",
      page: 138,
      definition: "Таксономическое отношение между более общим и более специальным классификаторами. Каждый экземпляр специального классификатора также является экземпляром общего классификатора; специальный классификатор наследует характеристики более общего. Обобщение принадлежит специальному классификатору.",
      generalizations: ["DirectedRelationship"]
    },
    {
      name: "GeneralizationSet",
      ru: "Набор обобщений",
      kind: "Class",
      section: "9.9.8",
      page: 139,
      definition: "PackageableElement, экземпляры которого представляют множества отношений Generalization.",
      generalizations: ["PackageableElement"],
      constraints: [
        { name: "generalization_same_classifier", description: "Каждое обобщение, связанное с конкретным набором обобщений, должно иметь один и тот же общий классификатор.", ocl: "inv: generalization->collect(general)->asSet()->size() <= 1" },
        { name: "maps_to_generalization_set", description: "Классификатор, отображаемый в набор обобщений, не может быть ни специальным, ни общим классификатором ни в одном из отношений Generalization этого набора. Иначе говоря, powertype не может быть экземпляром самого себя, а его экземпляры не могут быть его подклассами.", ocl: "inv: powertype <> null implies generalization->forAll( gen | \n    not (gen.general = powertype) and not gen.general.allParents()->includes(powertype) and not (gen.specific = powertype) and not powertype.allParents()->includes(gen.specific)\n  )" }
      ]
    },
    {
      name: "InstanceSpecification",
      ru: "Спецификация экземпляра",
      kind: "Class",
      section: "9.9.9",
      page: 140,
      definition: "Элемент модели, представляющий экземпляр в моделируемой системе. InstanceSpecification может выступать DeploymentTarget в отношении Deployment, если представляет экземпляр Node. Он может также выступать DeployedArtifact, если представляет экземпляр Artifact.",
      generalizations: ["DeploymentTarget", "PackageableElement", "DeployedArtifact"],
      specializations: ["EnumerationLiteral"],
      constraints: [
        { name: "deployment_artifact", description: "InstanceSpecification может выступать DeployedArtifact, если представляет экземпляр Artifact.", ocl: "inv: deploymentForArtifact->notEmpty() implies classifier->exists(oclIsKindOf(Artifact))" },
        { name: "structural_feature", description: "Не более одного слота InstanceSpecification может иметь один и тот же definingFeature.", ocl: "inv: classifier->forAll(c | (c.allSlottableFeatures()->forAll(f | slot->select(s | s.definingFeature = f)->size() <= 1)))" },
        { name: "defining_feature", description: "definingFeature каждого слота — StructuralFeature, относящаяся к классификатору InstanceSpecification: прямой или унаследованный атрибут, закрытый атрибут в обобщениях или memberEnd ассоциации, за исключением переопределённых StructuralFeatures.", ocl: "inv: slot->forAll(s | classifier->exists (c | c.allSlottableFeatures()->includes (s.definingFeature)))" },
        { name: "deployment_target", description: "InstanceSpecification может выступать DeploymentTarget, если представляет экземпляр Node и функционирует как часть во внутренней структуре объемлющего Node.", ocl: "inv: deployment->notEmpty() implies classifier->exists(node | node.oclIsKindOf(Node) and Node.allInstances()->exists(n | n.part->exists(p | p.type = node)))" }
      ]
    },
    {
      name: "InstanceValue",
      ru: "Значение экземпляра",
      kind: "Class",
      section: "9.9.10",
      page: 141,
      definition: "ValueSpecification, идентифицирующая экземпляр.",
      generalizations: ["ValueSpecification"]
    },
    {
      name: "Operation",
      ru: "Операция",
      kind: "Class",
      section: "9.9.11",
      page: 141,
      definition: "BehavioralFeature классификатора, специфицирующая имя, тип, параметры и ограничения для вызова связанного поведения. Операция может вызывать исполнение методов-поведений, а также другие поведенческие отклики. Operation специализирует TemplateableElement, чтобы поддерживать спецификацию шаблонных и связанных операций. Operation специализирует ParameterableElement, чтобы операцию можно было представить как формальный параметр шаблона и указать как фактический параметр при привязке шаблона.",
      generalizations: ["TemplateableElement", "ParameterableElement", "BehavioralFeature"],
      operations: [
        { signature: "isConsistentWith(redefiningElement : RedefinableElement) : Boolean {redefines RedefinableElement::isConsistentWith()}", description: "Запрос isConsistentWith() для любых двух операций в контексте, где возможно переопределение, определяет, было бы переопределение согласованным. Переопределяющая операция согласована с переопределённой, если она имеет то же число owned parameters и для каждого параметра выполняется: направление, упорядоченность и уникальность совпадают; соответствующие типы ковариантны, контравариантны или инвариантны; кратности совместимы в зависимости от направления параметра.", pre: "redefiningElement.isRedefinitionContextValid(self)", body: "result = (redefiningElement.oclIsKindOf(Operation) and\nlet op : Operation = redefiningElement.oclAsType(Operation) in\n\tself.ownedParameter->size() = op.ownedParameter->size() and\n\tSequence{1..self.ownedParameter->size()}->\n\t\tforAll(i |  \n\t\t  let redefiningParam : Parameter = op.ownedParameter->at(i),\n               redefinedParam : Parameter = self.ownedParameter->at(i) in\n                 (redefiningParam.isUnique = redefinedParam.isUnique) and\n                 (redefiningParam.isOrdered = redefinedParam. isOrdered) and\n                 (redefiningParam.direction = redefinedParam.direction) and\n                 (redefiningParam.type.conformsTo(redefinedParam.type) or\n                     redefinedParam.type.conformsTo(redefiningParam.type)) and\n                 (redefiningParam.direction = ParameterDirectionKind::inout implies\n                         (redefinedParam.compatibleWith(redefiningParam) and\n                         redefiningParam.compatibleWith(redefinedParam))) and\n                 (redefiningParam.direction = ParameterDirectionKind::_'in' implies\n                         redefinedParam.compatibleWith(redefiningParam)) and\n                 ((redefiningParam.direction = ParameterDirectionKind::out or\n                      redefiningParam.direction = ParameterDirectionKind::return) implies\n                         redefiningParam.compatibleWith(redefinedParam))\n\t\t))" },
        { signature: "isOrdered() : Boolean", description: "Если у операции есть возвращаемый параметр, isOrdered равно значению isOrdered этого параметра; иначе isOrdered равно false.", body: "result = (if returnResult()->notEmpty() then returnResult()-> exists(isOrdered) else false endif)" },
        { signature: "isUnique() : Boolean", description: "Если у операции есть возвращаемый параметр, isUnique равно значению isUnique этого параметра; иначе isUnique равно true.", body: "result = (if returnResult()->notEmpty() then returnResult()->exists(isUnique) else true endif)" },
        { signature: "lower() : Integer", description: "Если у операции есть возвращаемый параметр, lower равно значению lower этого параметра; иначе lower не имеет значения.", body: "result = (if returnResult()->notEmpty() then returnResult()->any(true).lower else null endif)" },
        { signature: "returnResult() : Parameter [0..*]", description: "Запрос returnResult() возвращает множество, содержащее возвращаемый параметр операции, если он есть; иначе возвращается пустое множество.", body: "result = (ownedParameter->select (direction = ParameterDirectionKind::return))" },
        { signature: "type() : Type", description: "Если у операции есть возвращаемый параметр, type равно значению type этого параметра; иначе type не имеет значения.", body: "result = (if returnResult()->notEmpty() then returnResult()->any(true).type else null endif)" },
        { signature: "upper() : UnlimitedNatural", description: "Если у операции есть возвращаемый параметр, upper равно значению upper этого параметра; иначе upper не имеет значения.", body: "result = (if returnResult()->notEmpty() then returnResult()->any(true).upper else null endif)" }
      ],
      constraints: [
        { name: "at_most_one_return", description: "Операция может иметь не более одного возвращаемого параметра, то есть owned parameter с направлением 'return'.", ocl: "inv: self.ownedParameter->select(direction = ParameterDirectionKind::return)->size() <= 1" },
        { name: "only_body_for_query", description: "bodyCondition может быть задано только для query-операции.", ocl: "inv: bodyCondition <> null implies isQuery" }
      ]
    },
    {
      name: "OperationTemplateParameter",
      ru: "Параметр шаблона операции",
      kind: "Class",
      section: "9.9.12",
      page: 144,
      definition: "Представляет Operation как формальный параметр шаблона.",
      generalizations: ["TemplateParameter"],
      constraints: [
        { name: "match_default_signature", description: "Значение по умолчанию OperationTemplateParameter должно быть операцией с теми же типами, направлениями и кратностями параметров, что и представленная операция.", ocl: "inv: default->notEmpty() implies (default.oclIsKindOf(Operation) and (let defaultOp : Operation = default.oclAsType(Operation) in \n    defaultOp.ownedParameter->size() = parameteredElement.ownedParameter->size() and\n    Sequence{1.. defaultOp.ownedParameter->size()}->forAll( ix | \n        let p1: Parameter = defaultOp.ownedParameter->at(ix), p2 : Parameter = parameteredElement.ownedParameter->at(ix) in\n          p1.type = p2.type and p1.upper = p2.upper and p1.lower = p2.lower and p1.direction = p2.direction and p1.isOrdered = p2.isOrdered and p1.isUnique = p2.isUnique)))" }
      ]
    },
    {
      name: "Parameter",
      ru: "Параметр",
      kind: "Class",
      section: "9.9.13",
      page: 145,
      definition: "Спецификация аргумента, используемого для передачи информации вовнутрь или наружу вызова BehavioralFeature. Параметры могут рассматриваться как ConnectableElements внутри Collaborations.",
      generalizations: ["MultiplicityElement", "ConnectableElement"],
      operations: [
        { signature: "default() : String [0..1]", description: "Деривация для Parameter::/default.", body: "result = (if self.type = String then defaultValue.stringValue() else null endif)" }
      ],
      constraints: [
        { name: "in_and_out", description: "Эффект delete могут иметь только параметры in и inout; эффект create — только параметры out, inout и return.", ocl: "inv: (effect = ParameterEffectKind::delete implies (direction = ParameterDirectionKind::_'in' or direction = ParameterDirectionKind::inout))\nand\n(effect = ParameterEffectKind::create implies (direction = ParameterDirectionKind::out or direction = ParameterDirectionKind::inout or direction = ParameterDirectionKind::return))" },
        { name: "not_exception", description: "Входной параметр не может быть исключением.", ocl: "inv: isException implies (direction <> ParameterDirectionKind::_'in' and direction <> ParameterDirectionKind::inout)" },
        { name: "connector_end", description: "Параметр может быть связан с концом Connector только в контексте Collaboration.", ocl: "inv: end->notEmpty() implies collaboration->notEmpty()" },
        { name: "reentrant_behaviors", description: "Реентерабельные поведения не могут иметь потоковые параметры.", ocl: "inv: (isStream and behavior <> null) implies not behavior.isReentrant" },
        { name: "stream_and_exception", description: "Параметр не может одновременно быть потоковым и исключением.", ocl: "inv: not (isException and isStream)" },
        { name: "object_effect", description: "Параметры, типизированные DataTypes, не могут иметь эффекта.", ocl: "inv: (type.oclIsKindOf(DataType)) implies (effect = null)" }
      ]
    },
    {
      name: "ParameterDirectionKind",
      ru: "Вид направления параметра",
      kind: "Enumeration",
      section: "9.9.14",
      page: 147,
      definition: "Перечисление, задающее литералы для спецификации направления параметров.",
      literals: [
        { name: "in", description: "Значения параметра передаются вызывающим." },
        { name: "inout", description: "Значения параметра передаются вызывающим, а (возможно, другие) значения передаются наружу вызывающему." },
        { name: "out", description: "Значения параметра передаются наружу вызывающему." },
        { name: "return", description: "Значения параметра передаются как возвращаемые значения обратно вызывающему." }
      ]
    },
    {
      name: "ParameterEffectKind",
      ru: "Вид эффекта параметра",
      kind: "Enumeration",
      section: "9.9.15",
      page: 147,
      definition: "Перечисление, задающее эффект поведения на значения, передаваемые в параметры или из них.",
      literals: [
        { name: "create", description: "Поведение создаёт значения." },
        { name: "read", description: "Объекты, являющиеся значениями параметра, имеют значения свойств, связи, в которых они участвуют, или их классификаторы, извлечённые во время исполнений поведения." },
        { name: "update", description: "Объекты, являющиеся значениями параметра, имеют значения свойств, связи, в которых они участвуют, или их классификация, изменённые во время исполнений поведения." },
        { name: "delete", description: "Объекты, являющиеся значениями параметра, не существуют после завершения исполнений поведения." }
      ]
    },
    {
      name: "ParameterSet",
      ru: "Набор параметров",
      kind: "Class",
      section: "9.9.16",
      page: 148,
      definition: "Обозначает альтернативные множества входов или выходов, которые может использовать Behavior.",
      generalizations: ["NamedElement"],
      constraints: [
        { name: "same_parameterized_entity", description: "Параметры набора должны быть все входами или все выходами одного параметризованного элемента, и набор принадлежит этому элементу.", ocl: "inv: parameter->forAll(p1, p2 | self.owner = p1.owner and self.owner = p2.owner and p1.direction = p2.direction)" },
        { name: "input", description: "Если параметризованный элемент имеет входные параметры в наборе, любые входы вне наборов должны быть потоковыми; то же для выходных параметров.", ocl: "inv: ((parameter->exists(direction = ParameterDirectionKind::_'in')) implies \n    behavioralFeature.ownedParameter->select(p | p.direction = ParameterDirectionKind::_'in' and p.parameterSet->isEmpty())->forAll(isStream))\n    and\n((parameter->exists(direction = ParameterDirectionKind::out)) implies \n    behavioralFeature.ownedParameter->select(p | p.direction = ParameterDirectionKind::out and p.parameterSet->isEmpty())->forAll(isStream))" },
        { name: "two_parameter_sets", description: "Два набора параметров не могут состоять из одного и того же множества параметров.", ocl: "inv: parameter->forAll(parameterSet->forAll(s1, s2 | s1->size() = s2->size() implies s1.parameter->exists(p | not s2.parameter->includes(p))))" }
      ]
    },
    {
      name: "Property",
      ru: "Свойство",
      kind: "Class",
      section: "9.9.17",
      page: 149,
      definition: "StructuralFeature. Property, связанная отношением ownedAttribute с классификатором (кроме ассоциации), представляет атрибут и может также представлять конец ассоциации; она связывает экземпляр классификатора со значением или множеством значений типа атрибута. Property, связанная отношением memberEnd с Association, представляет конец ассоциации; тип Property — тип конца ассоциации. Property может выступать DeploymentTarget в отношении Deployment, что позволяет моделировать развёртывание на иерархических узлах со свойствами в роли внутренних частей. Property специализирует ParameterableElement, чтобы свойство можно было представить как формальный параметр шаблона и указать как фактический параметр при привязке шаблона.",
      generalizations: ["ConnectableElement", "DeploymentTarget", "StructuralFeature"],
      specializations: ["Port", "ExtensionEnd"],
      operations: [
        { signature: "isAttribute() : Boolean", description: "Запрос isAttribute() равен true, если Property определена как атрибут некоторого классификатора.", body: "result = (not classifier->isEmpty())" },
        { signature: "isCompatibleWith(p : ParameterableElement) : Boolean {redefines ParameterableElement::isCompatibleWith()}", description: "Запрос isCompatibleWith() определяет, совместимо ли данное Property с указанным ParameterableElement. Property совместимо с p, если вид данного Property тот же или подвид вида p; кроме того, если p — TypedElement, тип данного Property должен соответствовать типу p.", body: "result = (self.oclIsKindOf(p.oclType()) and (p.oclIsKindOf(TypeElement) implies\nself.type.conformsTo(p.oclAsType(TypedElement).type)))" },
        { signature: "isComposite() : Boolean", description: "Значение isComposite равно true только тогда, когда aggregation равно composite.", body: "result = (aggregation = AggregationKind::composite)" },
        { signature: "isConsistentWith(redefiningElement : RedefinableElement) : Boolean {redefines RedefinableElement::isConsistentWith()}", description: "Запрос isConsistentWith() для любых двух Properties в контексте, где возможно переопределение, определяет, было бы переопределение логически согласованным. Переопределяющее Property согласовано с переопределённым, если тип переопределяющего Property соответствует типу переопределённого, а кратность переопределяющего Property (если задана) содержится в кратности переопределённого.", pre: "redefiningElement.isRedefinitionContextValid(self)", body: "result = (redefiningElement.oclIsKindOf(Property) and \n  let prop : Property = redefiningElement.oclAsType(Property) in \n  (prop.type.conformsTo(self.type) and \n  ((prop.lowerBound()->notEmpty() and self.lowerBound()->notEmpty()) implies prop.lowerBound() >= self.lowerBound()) and \n  ((prop.upperBound()->notEmpty() and self.upperBound()->notEmpty()) implies prop.lowerBound() <= self.lowerBound()) and \n  (self.isComposite implies prop.isComposite)))" },
        { signature: "isNavigable() : Boolean", description: "Запрос isNavigable() показывает, возможна ли навигация через свойство.", body: "result = (not classifier->isEmpty() or association.navigableOwnedEnd->includes(self))" },
        { signature: "opposite() : Property", description: "Если данное свойство — memberEnd бинарной ассоциации, opposite возвращает другой конец.", body: "result = (if association <> null and association.memberEnd->size() = 2\nthen\n    association.memberEnd->any(e | e <> self)\nelse\n    null\nendif)" },
        { signature: "subsettingContext() : Type [0..*]", description: "Запрос subsettingContext() возвращает контекст для принадлежности к подмножеству: для атрибута — соответствующий классификатор, для конца ассоциации — все классификаторы на других концах.", body: "result = (if association <> null\nthen association.memberEnd->excluding(self)->collect(type)->asSet()\nelse \n  if classifier<>null\n  then classifier->asSet()\n  else Set{} \n  endif\nendif)" }
      ],
      constraints: [
        { name: "subsetting_context_conforms", description: "Принадлежность к подмножеству возможна только когда контекст свойства-подмножества соответствует контексту свойства, которому оно принадлежит.", ocl: "inv: subsettedProperty->notEmpty() implies\n  (subsettingContext()->notEmpty() and subsettingContext()->forAll (sc |\n    subsettedProperty->forAll(sp |\n      sp.subsettingContext()->exists(c | sc.conformsTo(c)))))" },
        { name: "derived_union_is_read_only", description: "Производный union доступен только для чтения.", ocl: "inv: isDerivedUnion implies isReadOnly" },
        { name: "multiplicity_of_composite", description: "Кратность композитного конца композитной агрегации не должна иметь верхнюю границу больше 1.", ocl: "inv: isComposite and association <> null implies opposite.upperBound() <= 1" },
        { name: "redefined_property_inherited", description: "Переопределённое Property должно быть унаследовано от более общего классификатора.", ocl: "inv: (redefinedProperty->notEmpty()) implies\n  (redefinitionContext->notEmpty() and\n      redefinedProperty->forAll(rp|\n        ((redefinitionContext->collect(fc|\n          fc.allParents()))->asSet())->collect(c| c.allFeatures())->asSet()->includes(rp)))" },
        { name: "subsetting_rules", description: "Property-подмножество может усиливать тип свойства, которому оно принадлежит, а его верхняя граница может быть меньше.", ocl: "inv: subsettedProperty->forAll(sp |\n  self.type.conformsTo(sp.type) and\n    ((self.upperBound()->notEmpty() and sp.upperBound()->notEmpty()) implies\n      self.upperBound() <= sp.upperBound() ))" },
        { name: "binding_to_attribute", description: "Привязка PropertyTemplateParameter, представляющего атрибут, должна производиться к атрибуту.", ocl: "inv: (self.isAttribute()\nand (templateParameterSubstitution->notEmpty())\nimplies (templateParameterSubstitution->forAll(ts |\n    ts.formal.oclIsKindOf(Property)\n    and ts.formal.oclAsType(Property).isAttribute())))" },
        { name: "derived_union_is_derived", description: "Производный union является производным.", ocl: "inv: isDerivedUnion implies isDerived" },
        { name: "deployment_target", description: "Property может быть DeploymentTarget, если является видом Node и функционирует как часть во внутренней структуре объемлющего Node.", ocl: "inv: deployment->notEmpty() implies owner.oclIsKindOf(Node) and Node.allInstances()->exists(n | n.part->exists(p | p = self))" },
        { name: "subsetted_property_names", description: "Property не может быть подмножеством Property с тем же именем.", ocl: "inv: subsettedProperty->forAll(sp | sp.name <> name)" },
        { name: "type_of_opposite_end", description: "Если Property — принадлежащий классификатору конец бинарной ассоциации, его владелец должен быть типом противоположного конца.", ocl: "inv: (opposite->notEmpty() and owningAssociation->isEmpty()) implies classifier = opposite.type" },
        { name: "qualified_is_association_end", description: "Все квалифицированные Properties должны быть концами ассоциаций.", ocl: "inv: qualifier->notEmpty() implies association->notEmpty()" }
      ]
    },
    {
      name: "RedefinableElement",
      ru: "Переопределяемый элемент",
      kind: "Abstract Class",
      section: "9.9.18",
      page: 153,
      definition: "Элемент, который, будучи определённым в контексте классификатора, может быть переопределён более конкретно или иначе в контексте другого классификатора, специализирующего (напрямую или косвенно) контекстный классификатор.",
      generalizations: ["NamedElement"],
      specializations: ["Classifier", "Feature", "RedefinableTemplateSignature", "ActivityEdge", "ActivityNode", "ExtensionPoint", "Region", "State", "Transition"],
      operations: [
        { signature: "isConsistentWith(redefiningElement : RedefinableElement) : Boolean", description: "Запрос isConsistentWith() для любых двух RedefinableElements в контексте, где возможно переопределение, определяет, было бы переопределение логически согласованным. По умолчанию равен false; операция должна быть переопределена в подклассах RedefinableElement, чтобы задать условия согласованности.", pre: "redefiningElement.isRedefinitionContextValid(self)", body: "result = (false)" },
        { signature: "isRedefinitionContextValid(redefinedElement : RedefinableElement) : Boolean", description: "Запрос isRedefinitionContextValid() определяет, правильно ли связаны контексты переопределения данного RedefinableElement с контекстами переопределения указанного RedefinableElement, чтобы данный элемент мог переопределить другой. По умолчанию хотя бы один из контекстов переопределения данного элемента должен быть специализацией хотя бы одного из контекстов переопределения указанного элемента.", body: "result = (redefinitionContext->exists(c | c.allParents()->includesAll(redefinedElement.redefinitionContext)))" }
      ],
      constraints: [
        { name: "redefinition_consistent", description: "Переопределяющий элемент должен быть согласован с каждым переопределённым элементом.", ocl: "inv: redefinedElement->forAll(re | re.isConsistentWith(self))" },
        { name: "non_leaf_redefinition", description: "RedefinableElement может переопределять только не конечные (non-leaf) RedefinableElements.", ocl: "inv: redefinedElement->forAll(re | not re.isLeaf)" },
        { name: "redefinition_context_valid", description: "Хотя бы один из контекстов переопределения переопределяющего элемента должен быть специализацией хотя бы одного из контекстов переопределения каждого переопределённого элемента.", ocl: "inv: redefinedElement->forAll(re | self.isRedefinitionContextValid(re))" }
      ]
    },
    {
      name: "RedefinableTemplateSignature",
      ru: "Переопределяемая подпись шаблона",
      kind: "Class",
      section: "9.9.19",
      page: 154,
      definition: "Поддерживает добавление формальных параметров шаблона в специализации шаблонного классификатора.",
      generalizations: ["RedefinableElement", "TemplateSignature"],
      operations: [
        { signature: "inheritedParameter() : TemplateParameter [0..*]", description: "Деривация для RedefinableTemplateSignature::/inheritedParameter.", body: "result = (if extendedSignature->isEmpty() then Set{} else extendedSignature.parameter->asSet() endif)" },
        { signature: "isConsistentWith(redefiningElement : RedefinableElement) : Boolean {redefines RedefinableElement::isConsistentWith()}", description: "Запрос isConsistentWith() для любых двух RedefinableTemplateSignatures в контексте, где возможно переопределение, определяет, было бы переопределение логически согласованным. Переопределяющая подпись шаблона всегда согласована с переопределённой, так как переопределение только добавляет новые формальные параметры.", pre: "redefiningElement.isRedefinitionContextValid(self)", body: "result = (redefiningElement.oclIsKindOf(RedefinableTemplateSignature))" }
      ],
      constraints: [
        { name: "redefines_parents", description: "Если какой-либо из родительских классификаторов является шаблоном, extendedSignature должен включать подпись этого классификатора.", ocl: "inv: classifier.allParents()->forAll(c | c.ownedTemplateSignature->notEmpty() implies self->closure(extendedSignature)->includes(c.ownedTemplateSignature))" }
      ]
    },
    {
      name: "Slot",
      ru: "Слот",
      kind: "Class",
      section: "9.9.20",
      page: 155,
      definition: "Указывает, что сущность, смоделированная InstanceSpecification, имеет значение или значения для конкретной StructuralFeature.",
      generalizations: ["Element"]
    },
    {
      name: "StructuralFeature",
      ru: "Структурная характеристика",
      kind: "Abstract Class",
      section: "9.9.21",
      page: 156,
      definition: "Типизированная характеристика классификатора, специфицирующая структуру экземпляров классификатора.",
      generalizations: ["MultiplicityElement", "TypedElement", "Feature"],
      specializations: ["Property"]
    },
    {
      name: "Substitution",
      ru: "Подстановка",
      kind: "Class",
      section: "9.9.22",
      page: 156,
      definition: "Отношение между двумя классификаторами, означающее, что подставляющий классификатор соответствует контракту, заданному классификатором контракта. Это означает, что экземпляры подставляющего классификатора взаимозаменяемы во время выполнения там, где ожидаются экземпляры классификатора контракта.",
      generalizations: ["Realization"]
    }
  ];

  const associations = [
    { name: "A_attribute_classifier", ru: "Атрибуты классификатора", section: "9.10.1", page: 157, definition: "Связывает атрибут классификатора с владеющим им классификатором." },
    { name: "A_bodyCondition_bodyContext", ru: "Условие тела и его контекст", section: "9.10.2", page: 157, definition: "Связывает условие тела операции с владеющей ею операцией." },
    { name: "A_classifier_instanceSpecification", ru: "Классификаторы спецификации экземпляра", section: "9.10.3", page: 157, definition: "Связывает классификатор со спецификациями экземпляров, которые им классифицированы." },
    { name: "A_classifier_templateParameter_parameteredElement", ru: "Параметр шаблона классификатора", section: "9.10.4", page: 157, definition: "Связывает классификатор с параметром шаблона классификатора, представляющим его как формальный параметр шаблона." },
    { name: "A_collaborationUse_classifier", ru: "Использования кооперации классификатора", section: "9.10.5", page: 157, definition: "Связывает использование кооперации с владеющим им классификатором." },
    { name: "A_condition_parameterSet", ru: "Условия набора параметров", section: "9.10.6", page: 158, definition: "Связывает условие набора параметров с владеющим им набором." },
    { name: "A_constrainingClassifier_classifierTemplateParameter", ru: "Ограничивающие классификаторы параметра шаблона", section: "9.10.7", page: 158, definition: "Связывает ограничивающий классификатор с параметрами шаблона классификатора, которые им ограничиваются." },
    { name: "A_contract_substitution", ru: "Контракт подстановки", section: "9.10.8", page: 158, definition: "Связывает контракт подстановки с подстановками, ссылающимися на этот контракт." },
    { name: "A_defaultValue_owningParameter", ru: "Значение параметра по умолчанию", section: "9.10.9", page: 158, definition: "Связывает значение параметра по умолчанию с владеющим им параметром." },
    { name: "A_defaultValue_owningProperty", ru: "Значение свойства по умолчанию", section: "9.10.10", page: 159, definition: "Связывает значение свойства по умолчанию с владеющим им свойством." },
    { name: "A_definingFeature_slot", ru: "Определяющая характеристика слота", section: "9.10.11", page: 159, definition: "Связывает определяющую характеристику со слотами, которые она определяет." },
    { name: "A_extendedSignature_redefinableTemplateSignature", ru: "Расширенные подписи переопределяемой подписи", section: "9.10.12", page: 159, definition: "Связывает расширенные подписи с переопределяемой подписью шаблона, которая их расширяет." },
    { name: "A_feature_featuringClassifier", ru: "Характеристики классификатора", section: "9.10.13", page: 159, definition: "Связывает характеристику с классификаторами, для которых она является характеристикой." },
    { name: "A_general_classifier", ru: "Общие классификаторы классификатора", section: "9.10.14", page: 159, definition: "Связывает общий классификатор с классификаторами, для которых он является общим." },
    { name: "A_general_generalization", ru: "Общий классификатор обобщения", section: "9.10.15", page: 160, definition: "Связывает общий классификатор с обобщениями, ссылающимися на него как на общий классификатор." },
    { name: "A_generalizationSet_generalization", ru: "Набор обобщений", section: "9.10.16", page: 160, definition: "Связывает обобщение с наборами обобщений, в которые оно входит." },
    { name: "A_generalization_specific", ru: "Обобщения конкретного классификатора", section: "9.10.17", page: 160, definition: "Связывает обобщение с конкретным (специальным) классификатором, которому оно принадлежит." },
    { name: "A_inheritedMember_inheritingClassifier", ru: "Унаследованные члены классификатора", section: "9.10.18", page: 160, definition: "Связывает унаследованного члена с классификаторами, унаследовавшими его." },
    { name: "A_inheritedParameter_redefinableTemplateSignature", ru: "Унаследованные параметры подписи шаблона", section: "9.10.19", page: 160, definition: "Связывает унаследованный параметр подписи шаблона с переопределяемыми подписями шаблона, в которых он унаследован." },
    { name: "A_instance_instanceValue", ru: "Экземпляр значения экземпляра", section: "9.10.20", page: 161, definition: "Связывает спецификацию экземпляра со значениями экземпляра, которые на неё ссылаются." },
    { name: "A_method_specification", ru: "Методы спецификации", section: "9.10.21", page: 161, definition: "Связывает поведенческую характеристику с поведениями, реализующими её как методы." },
    { name: "A_operation_templateParameter_parameteredElement", ru: "Параметр шаблона операции", section: "9.10.22", page: 161, definition: "Связывает операцию с параметром шаблона операции, представляющим её как формальный параметр шаблона." },
    { name: "A_opposite_property", ru: "Противоположные свойства", section: "9.10.23", page: 161, definition: "Связывает свойство с противоположным концом той же бинарной ассоциации." },
    { name: "A_ownedParameterSet_behavioralFeature", ru: "Наборы параметров поведенческой характеристики", section: "9.10.24", page: 162, definition: "Связывает набор параметров с владеющей им поведенческой характеристикой." },
    { name: "A_ownedParameter_operation", ru: "Параметры операции", section: "9.10.25", page: 162, definition: "Связывает параметр с владеющей им операцией." },
    { name: "A_ownedParameter_ownerFormalParam", ru: "Параметры владельца формальных параметров", section: "9.10.26", page: 162, definition: "Связывает формальный параметр с владеющей им поведенческой характеристикой." },
    { name: "A_ownedTemplateSignature_classifier", ru: "Подпись шаблона классификатора", section: "9.10.27", page: 162, definition: "Связывает переопределяемую подпись шаблона с владеющим ею классификатором." },
    { name: "A_ownedUseCase_classifier", ru: "Варианты использования классификатора", section: "9.10.28", page: 162, definition: "Связывает вариант использования с владеющим им классификатором." },
    { name: "A_parameterSet_parameter", ru: "Наборы параметров параметра", section: "9.10.29", page: 163, definition: "Связывает параметр с наборами параметров, в которые он входит." },
    { name: "A_postcondition_postContext", ru: "Постусловия контекста", section: "9.10.30", page: 163, definition: "Связывает постусловие с владеющей им операцией." },
    { name: "A_powertypeExtent_powertype", ru: "Область powertype", section: "9.10.31", page: 163, definition: "Связывает классификатор-powertype с наборами обобщений, для которых он является powertype." },
    { name: "A_precondition_preContext", ru: "Предусловия контекста", section: "9.10.32", page: 163, definition: "Связывает предусловие с владеющей им операцией." },
    { name: "A_qualifier_associationEnd", ru: "Квалификаторы конца ассоциации", section: "9.10.33", page: 163, definition: "Связывает квалификатор конца ассоциации с концом ассоциации, которому он принадлежит." },
    { name: "A_raisedException_behavioralFeature", ru: "Исключения поведенческой характеристики", section: "9.10.34", page: 164, definition: "Связывает тип исключения с поведенческими характеристиками, которые могут его возбуждать." },
    { name: "A_raisedException_operation", ru: "Исключения операции", section: "9.10.35", page: 164, definition: "Связывает тип исключения с операциями, которые могут его возбуждать." },
    { name: "A_redefinedClassifier_classifier", ru: "Переопределённые классификаторы", section: "9.10.36", page: 164, definition: "Связывает переопределённый классификатор с классификаторами, которые его переопределяют." },
    { name: "A_redefinedElement_redefinableElement", ru: "Переопределённые элементы", section: "9.10.37", page: 164, definition: "Связывает переопределённый элемент с переопределяемыми элементами, которые его переопределяют." },
    { name: "A_redefinedOperation_operation", ru: "Переопределённые операции", section: "9.10.38", page: 164, definition: "Связывает переопределённую операцию с операциями, которые её переопределяют." },
    { name: "A_redefinedProperty_property", ru: "Переопределённые свойства", section: "9.10.39", page: 165, definition: "Связывает переопределённое свойство со свойствами, которые его переопределяют." },
    { name: "A_redefinitionContext_redefinableElement", ru: "Контексты переопределения", section: "9.10.40", page: 165, definition: "Связывает контекст переопределения с переопределяемыми элементами, которые могут в нём переопределяться." },
    { name: "A_representation_classifier", ru: "Представление классификатора", section: "9.10.41", page: 165, definition: "Связывает использование кооперации как представление классификатора с классификатором, который оно представляет." },
    { name: "A_slot_owningInstance", ru: "Слоты экземпляра", section: "9.10.42", page: 165, definition: "Связывает слот со спецификацией экземпляра, которой он принадлежит." },
    { name: "A_specification_owningInstanceSpec", ru: "Спецификация экземпляра", section: "9.10.43", page: 166, definition: "Связывает спецификацию значения со спецификацией экземпляра, которой она принадлежит." },
    { name: "A_subsettedProperty_property", ru: "Подмножества свойств", section: "9.10.44", page: 166, definition: "Связывает свойство-подмножество со свойствами, которыми оно ограничивается как подмножество." },
    { name: "A_substitution_substitutingClassifier", ru: "Подстановки классификатора", section: "9.10.45", page: 166, definition: "Связывает подстановку с подставляющим классификатором, которому она принадлежит." },
    { name: "A_type_operation", ru: "Тип операции", section: "9.10.46", page: 166, definition: "Связывает тип с операциями, чей возвращаемый параметр им типизирован." },
    { name: "A_value_owningSlot", ru: "Значения слота", section: "9.10.47", page: 166, definition: "Связывает значение слота со слотом, которому оно принадлежит." }
  ];

  const diagrams = [
    { id: "9.1", name: "Classifiers", title: "Классификаторы", en: "Classifiers", section: "9.2", page: 99,
      related: ["Classifier", "Generalization", "GeneralizationSet", "Substitution", "RedefinableElement", "Feature", "Property", "Namespace", "Type", "TemplateableElement", "DirectedRelationship", "NamedElement", "Realization", "CollaborationUse", "UseCase"],
      associations: ["A_attribute_classifier", "A_collaborationUse_classifier", "A_contract_substitution", "A_feature_featuringClassifier", "A_general_classifier", "A_general_generalization", "A_generalizationSet_generalization", "A_generalization_specific", "A_inheritedMember_inheritingClassifier", "A_ownedUseCase_classifier", "A_powertypeExtent_powertype", "A_redefinedClassifier_classifier", "A_redefinedElement_redefinableElement", "A_redefinitionContext_redefinableElement", "A_representation_classifier", "A_substitution_substitutingClassifier"] },
    { id: "9.2", title: "Нотация обобщения с раздельными и общими наконечниками", en: "Generalization notation showing different target styles", section: "9.2", page: 103, related: ["Generalization"] },
    { id: "9.3", title: "Пример нотации подстановки", en: "Example of Substitution notation", section: "9.2", page: 103, related: ["Substitution"] },
    { id: "9.4", name: "Classifier Templates", title: "Шаблоны классификаторов", en: "Classifier Templates", section: "9.3", page: 104,
      related: ["Classifier", "ClassifierTemplateParameter", "RedefinableTemplateSignature", "RedefinableElement", "TemplateSignature", "TemplateParameter", "TemplateableElement"],
      associations: ["A_classifier_templateParameter_parameteredElement", "A_constrainingClassifier_classifierTemplateParameter", "A_extendedSignature_redefinableTemplateSignature", "A_inheritedParameter_redefinableTemplateSignature", "A_ownedTemplateSignature_classifier"] },
    { id: "9.5", title: "Шаблонный и связанный классы", en: "Template Class and Bound Class", section: "9.3", page: 106, related: ["ClassifierTemplateParameter", "TemplateBinding"] },
    { id: "9.6", title: "Анонимный связанный класс", en: "Anonymous Bound Class", section: "9.3", page: 106, related: ["ClassifierTemplateParameter", "TemplateBinding"] },
    { id: "9.7", title: "Шаблонный класс с ограниченным параметром класса", en: "Template Class with constrained Class parameter", section: "9.3", page: 106, related: ["ClassifierTemplateParameter"] },
    { id: "9.8", title: "Связанный класс", en: "Bound Class", section: "9.3", page: 107, related: ["ClassifierTemplateParameter", "TemplateBinding"] },
    { id: "9.9", name: "Features", title: "Характеристики", en: "Features", section: "9.4", page: 107,
      related: ["Feature", "StructuralFeature", "BehavioralFeature", "Parameter", "ParameterSet", "Classifier", "RedefinableElement", "CallConcurrencyKind", "ParameterDirectionKind", "ParameterEffectKind", "TypedElement", "MultiplicityElement", "Namespace", "ConnectableElement", "Type", "Behavior", "Constraint", "ValueSpecification"],
      associations: ["A_condition_parameterSet", "A_defaultValue_owningParameter", "A_feature_featuringClassifier", "A_method_specification", "A_ownedParameterSet_behavioralFeature", "A_ownedParameter_ownerFormalParam", "A_parameterSet_parameter", "A_raisedException_behavioralFeature"] },
    { id: "9.10", name: "Properties", title: "Свойства", en: "Properties", section: "9.5", page: 111,
      related: ["Property", "AggregationKind", "StructuralFeature", "ParameterableElement", "ConnectableElement", "DeploymentTarget", "Interface", "DataType", "Class", "Association", "ValueSpecification"],
      associations: ["A_defaultValue_owningProperty", "A_opposite_property", "A_qualifier_associationEnd", "A_redefinedProperty_property", "A_subsettedProperty_property"] },
    { id: "9.11", title: "Примеры атрибутов", en: "Examples of attributes", section: "9.5", page: 115, related: ["Property"] },
    { id: "9.12", title: "Обозначение атрибутов в виде ассоциации", en: "Association-like notation for attributes", section: "9.5", page: 116, related: ["Property"] },
    { id: "9.13", name: "Operations", title: "Операции", en: "Operations", section: "9.6", page: 116,
      related: ["Operation", "OperationTemplateParameter", "BehavioralFeature", "TemplateableElement", "ParameterableElement", "Parameter", "Constraint", "Type", "Interface", "DataType", "Class", "TemplateParameter"],
      associations: ["A_bodyCondition_bodyContext", "A_operation_templateParameter_parameteredElement", "A_ownedParameter_operation", "A_postcondition_postContext", "A_precondition_preContext", "A_raisedException_operation", "A_redefinedOperation_operation", "A_type_operation"] },
    { id: "9.14", name: "Generalization Sets", title: "Наборы обобщений", en: "Generalization Sets", section: "9.7", page: 119,
      related: ["GeneralizationSet", "Generalization", "Classifier", "PackageableElement"],
      associations: ["A_generalizationSet_generalization", "A_powertypeExtent_powertype"] },
    { id: "9.15", title: "Наборы обобщений, обозначенные именами", en: "GeneralizationSets designated by name", section: "9.7", page: 120, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.16", title: "Наборы обобщений с общим наконечником", en: "GeneralizationSets designated by shared target", section: "9.7", page: 120, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.17", title: "Набор обобщений, обозначенный пунктирной линией", en: "GeneralizationSet designated by dashed line spanning Generalization arrows", section: "9.7", page: 121, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.18", title: "Ограничения наборов обобщений с общим наконечником", en: "GeneralizationSet constraint notation with shared target style", section: "9.7", page: 121, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.19", title: "Ограничения наборов обобщений с пунктирной линией", en: "GeneralizationSet constraint notation with dashed line style", section: "9.7", page: 122, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.20", title: "Нотация powertype с общим наконечником", en: "Power type notation with shared target style", section: "9.7", page: 122, related: ["GeneralizationSet", "Generalization", "Classifier"] },
    { id: "9.21", title: "Нотация powertype с пунктирной линией", en: "Power type notation with dashed line style", section: "9.7", page: 122, related: ["GeneralizationSet", "Generalization", "Classifier"] },
    { id: "9.22", title: "Варианты нотации наборов обобщений", en: "GeneralizationSet notation options", section: "9.7", page: 123, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.23", title: "Наборы обобщений и ограничения", en: "GeneralizationSets and constraints", section: "9.7", page: 123, related: ["GeneralizationSet", "Generalization"] },
    { id: "9.24", title: "Пример powertype", en: "Power type example", section: "9.7", page: 124, related: ["GeneralizationSet", "Generalization", "Classifier"] },
    { id: "9.25", title: "Дополнительные примеры powertype", en: "More power type examples", section: "9.7", page: 125, related: ["GeneralizationSet", "Generalization", "Classifier"] },
    { id: "9.26", title: "Более одного powertype", en: "More than one powertype", section: "9.7", page: 126, related: ["GeneralizationSet", "Generalization", "Classifier"] },
    { id: "9.27", name: "Instances", title: "Экземпляры", en: "Instances", section: "9.8", page: 126,
      related: ["InstanceSpecification", "Slot", "InstanceValue", "Classifier", "StructuralFeature", "ValueSpecification", "PackageableElement", "Element", "DeploymentTarget", "DeployedArtifact"],
      associations: ["A_classifier_instanceSpecification", "A_definingFeature_slot", "A_instance_instanceValue", "A_slot_owningInstance", "A_specification_owningInstanceSpec", "A_value_owningSlot"] },
    { id: "9.28", title: "Спецификация экземпляра String", en: "Specification of an Instance of String", section: "9.8", page: 129, related: ["InstanceSpecification", "LiteralString"] },
    { id: "9.29", title: "Слоты со значениями", en: "Slots with values", section: "9.8", page: 129, related: ["InstanceSpecification", "Slot"] },
    { id: "9.30", title: "Два объекта, соединённые связью", en: "InstanceSpecifications representing two objects connected by a link", section: "9.8", page: 129, related: ["InstanceSpecification"] },
    { id: "9.31", title: "Текстовое представление InstanceValue", en: "InstanceValue represented textually", section: "9.8", page: 129, related: ["InstanceSpecification", "InstanceValue", "Slot"] },
    { id: "9.32", title: "Графическое представление InstanceValue", en: "InstanceValue represented graphically", section: "9.8", page: 129, related: ["InstanceSpecification", "InstanceValue", "Slot"] }
  ];

  return { sections, classifiers, associations, diagrams };
})();
