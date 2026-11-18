window.UML_DATA = (() => {
  const sections = [
    {
      id: "7.1",
      title: "Обзор",
      en: "Summary",
      page: 21,
      summary: "Раздел определяет базовые понятия моделирования, лежащие в основе всего структурного моделирования в UML. Многие описанные здесь метаклассы абстрактны и служат основой для конкретных классов следующих разделов.",
      figures: []
    },
    {
      id: "7.2",
      title: "Корневые понятия",
      en: "Root",
      page: 21,
      summary: "Корневые понятия Element и Relationship образуют основу всех остальных понятий моделирования UML.",
      semantics: "Element — составная часть модели и может владеть другими элементами. Relationship задаёт отношение между элементами, а DirectedRelationship выделяет источники и цели отношения. Comment добавляет пояснение, не изменяя семантику модели.",
      notation: "Для Element, Relationship и DirectedRelationship общего обозначения нет. Comment изображается примечанием с загнутым верхним правым углом и соединяется штриховой линией с комментируемыми элементами.",
      figures: ["7.1", "7.2"]
    },
    {
      id: "7.3",
      title: "Шаблоны",
      en: "Templates",
      page: 22,
      summary: "Шаблоны — элементы модели, параметризованные другими элементами. Здесь определяются общие понятия TemplateableElement, TemplateSignature, TemplateParameter, TemplateBinding и TemplateParameterSubstitution.",
      semantics: "TemplateSignature объединяет формальные параметры шаблона. TemplateBinding связывает TemplateableElement с шаблоном и задаёт подстановки фактических параметров вместо формальных.",
      notation: "Подпись шаблона отображается в пунктирном прямоугольнике у правого верхнего угла символа. Привязка показывается штриховой стрелкой с ключевым словом «bind»; параметры могут перечисляться в скобках или в отдельном примечании.",
      figures: ["7.3", "7.4"]
    },
    {
      id: "7.4",
      title: "Пространства имён",
      en: "Namespaces",
      page: 27,
      summary: "Namespace — элемент модели, содержащий NamedElements, которые можно различать по именам. Пространства имён могут владеть членами, наследовать их или импортировать из других пространств имён.",
      semantics: "NamedElement может иметь простое и квалифицированное имя. ElementImport добавляет в пространство имён отдельный PackageableElement, а PackageImport — все незакрытые члены пакета. Псевдоним позволяет задать импортированному элементу другое имя.",
      notation: "Квалифицированное имя записывается через разделитель ::. Импорт элемента и пакета обозначается штриховыми стрелками с «import»; открытие и закрытие видимости различаются по правилам спецификации.",
      figures: ["7.5", "7.6", "7.7", "7.8", "7.9"]
    },
    {
      id: "7.5",
      title: "Типы и кратность",
      en: "Types and Multiplicity",
      page: 32,
      summary: "Типы и кратность используются в объявлениях элементов, содержащих значения: они ограничивают вид и допустимое количество этих значений.",
      semantics: "Type задаёт множество допустимых значений для TypedElement. MultiplicityElement определяет включительный интервал неотрицательных целых чисел от нижней до верхней границы; верхняя граница может быть неограниченной.",
      notation: "Кратность записывается как lower..upper или одним значением, если границы совпадают. Символ * обозначает неограниченную верхнюю границу; упорядоченность и уникальность могут уточняться в фигурных скобках.",
      figures: ["7.10", "7.11", "7.12"]
    },
    {
      id: "7.6",
      title: "Ограничения",
      en: "Constraints",
      page: 35,
      summary: "Constraint — утверждение, задающее ограничение, которое должно выполняться для любой корректной реализации модели.",
      semantics: "Условие ограничения задаётся ValueSpecification и должно вычисляться в логическое значение без побочных эффектов. Контекст определяет пространство имён, владеющее ограничением, а constrainedElement — элементы, к которым оно применяется.",
      notation: "Ограничение заключается в фигурные скобки. Его можно поместить в примечание, рядом с текстовым обозначением элемента или на штриховой линии между несколькими элементами.",
      figures: ["7.13", "7.14", "7.15", "7.16"]
    },
    {
      id: "7.7",
      title: "Зависимости",
      en: "Dependencies",
      page: 37,
      summary: "Dependency выражает отношение поставщика и клиента: изменение поставщика может повлиять на клиента. Раздел также определяет Usage, Abstraction и Realization.",
      semantics: "Семантика клиентов Dependency неполна без поставщиков. Usage показывает потребность в поставщике для реализации или работы; Abstraction связывает представления одного понятия на разных уровнях; Realization связывает спецификацию и её реализацию.",
      notation: "Dependency изображается штриховой стрелкой от клиента к поставщику. Realization использует штриховую линию с треугольным наконечником у реализуемого элемента.",
      figures: ["7.17", "7.18", "7.19", "7.20", "7.21"]
    },
    {
      id: "7.8",
      title: "Описания классификаторов",
      en: "Classifier Descriptions",
      page: 40,
      summary: "Справочные описания 24 классификаторов раздела Common Structure: определения, наследование, атрибуты, концы ассоциаций, операции, ограничения и литералы.",
      figures: []
    },
    {
      id: "7.9",
      title: "Описания ассоциаций",
      en: "Association Descriptions",
      page: 61,
      summary: "Справочные описания 36 ассоциаций раздела Common Structure и их концов.",
      figures: []
    }
  ];

  const classifiers = [
    {
      name: "Abstraction",
      ru: "Абстрагирование",
      kind: "Class",
      section: "7.8.1",
      page: 40,
      definition: "Relationship, связывающий два элемента или множества элементов, которые представляют одно понятие на разных уровнях абстракции или с разных точек зрения.",
      generalizations: ["Dependency"],
      specializations: ["Realization", "Manifestation"],
      ends: [{ signature: "mapping : OpaqueExpression [0..1]", description: "Необязательное выражение, уточняющее отношение между поставщиками и клиентами." }],
      figures: ["7.17"]
    },
    {
      name: "Comment",
      ru: "Комментарий",
      kind: "Class",
      section: "7.8.2",
      page: 40,
      definition: "Текстовая аннотация, которую можно присоединить к множеству элементов.",
      generalizations: ["Element"],
      attributes: [{ signature: "body : String [0..1]", description: "Текст комментария." }],
      ends: [{ signature: "annotatedElement : Element [0..*]", description: "Элементы, к которым относится комментарий." }],
      figures: ["7.1", "7.2"]
    },
    {
      name: "Constraint",
      ru: "Ограничение",
      kind: "Class",
      section: "7.8.3",
      page: 41,
      definition: "Условие или ограничение, записанное на естественном или машинно-читаемом языке и объявляющее часть семантики элемента или множества элементов.",
      generalizations: ["PackageableElement"],
      specializations: ["IntervalConstraint", "InteractionConstraint"],
      ends: [
        { signature: "constrainedElement : Element [0..*] {ordered}", description: "Упорядоченное множество элементов, к которым применяется ограничение." },
        { signature: "context : Namespace [0..1]", description: "Пространство имён, владеющее ограничением." },
        { signature: "specification : ValueSpecification [1..1]", description: "Условие, которое должно быть истинным для выполнения ограничения." }
      ],
      constraints: [
        { name: "boolean_value", description: "ValueSpecification ограничения должно вычисляться в значение Boolean." },
        { name: "no_side_effects", description: "Вычисление условия не должно иметь побочных эффектов." },
        { name: "not_apply_to_self", description: "Ограничение не может применяться к самому себе." }
      ],
      figures: ["7.5", "7.13", "7.14", "7.15", "7.16"]
    },
    {
      name: "Dependency",
      ru: "Зависимость",
      kind: "Class",
      section: "7.8.4",
      page: 42,
      definition: "Relationship, показывающий, что элемент или множество элементов-клиентов нуждается в других элементах-поставщиках для своей спецификации или реализации.",
      generalizations: ["DirectedRelationship", "PackageableElement"],
      specializations: ["Abstraction", "Usage", "Deployment"],
      ends: [
        { signature: "client : NamedElement [1..*]", description: "Элементы, зависящие от поставщиков." },
        { signature: "supplier : NamedElement [1..*]", description: "Элементы, от которых зависят клиенты." }
      ],
      figures: ["7.17", "7.18", "7.19", "7.20"]
    },
    {
      name: "DirectedRelationship",
      ru: "Направленное отношение",
      kind: "Abstract Class",
      section: "7.8.5",
      page: 42,
      definition: "Отношение между множеством исходных элементов модели и множеством целевых элементов модели.",
      generalizations: ["Relationship"],
      specializations: ["Dependency", "ElementImport", "PackageImport", "TemplateBinding", "Extend", "Include", "ProtocolConformance", "PackageMerge", "ProfileApplication", "InformationFlow", "Generalization"],
      ends: [
        { signature: "/source : Element [1..*] {union}", description: "Исходные элементы направленного отношения." },
        { signature: "/target : Element [1..*] {union}", description: "Целевые элементы направленного отношения." }
      ],
      figures: ["7.1", "7.4", "7.5", "7.17"]
    },
    {
      name: "Element",
      ru: "Элемент",
      kind: "Abstract Class",
      section: "7.8.6",
      page: 43,
      definition: "Составная часть модели, способная владеть другими элементами.",
      specializations: ["Comment", "MultiplicityElement", "NamedElement", "ParameterableElement", "Relationship", "TemplateableElement", "TemplateParameter", "TemplateParameterSubstitution", "TemplateSignature", "ExceptionHandler", "Image", "Slot", "Clause", "LinkEndData", "QualifierValue"],
      ends: [
        { signature: "ownedComment : Comment [0..*]", description: "Комментарии, принадлежащие элементу." },
        { signature: "/ownedElement : Element [0..*] {union}", description: "Элементы, принадлежащие данному элементу." },
        { signature: "/owner : Element [0..1] {union}", description: "Элемент-владелец." }
      ],
      operations: [
        { signature: "allOwnedElements() : Element [0..*]", description: "Возвращает все прямые и косвенно принадлежащие элементы." },
        { signature: "mustBeOwned() : Boolean", description: "Определяет, обязан ли элемент данного типа иметь владельца." }
      ],
      constraints: [
        { name: "has_owner", description: "Элемент, который обязан быть чьим-либо владением, должен иметь владельца." },
        { name: "not_own_self", description: "Элемент не может прямо или косвенно владеть самим собой." }
      ],
      figures: ["7.1", "7.3", "7.4", "7.5", "7.10", "7.13", "7.17"]
    },
    {
      name: "ElementImport",
      ru: "Импорт элемента",
      kind: "Class",
      section: "7.8.7",
      page: 44,
      definition: "Позволяет ссылаться на NamedElement из другого пространства имён по неквалифицированному имени внутри пространства имён, владеющего импортом.",
      generalizations: ["DirectedRelationship"],
      attributes: [
        { signature: "alias : String [0..1]", description: "Альтернативное имя импортированного элемента; по умолчанию псевдоним не используется." },
        { signature: "visibility : VisibilityKind [1..1] = public", description: "Видимость импортированного элемента внутри и за пределами импортирующего пространства имён." }
      ],
      ends: [
        { signature: "importedElement : PackageableElement [1..1]", description: "Элемент, имя которого добавляется в пространство имён." },
        { signature: "importingNamespace : Namespace [1..1]", description: "Пространство имён, выполняющее импорт." }
      ],
      operations: [{ signature: "getName() : String", description: "Возвращает псевдоним либо исходное имя импортированного элемента." }],
      constraints: [
        { name: "imported_element_is_public", description: "Импортированный элемент должен быть открытым или не иметь заданной видимости." },
        { name: "visibility_public_or_private", description: "Видимость импорта может быть только public или private." }
      ],
      figures: ["7.5", "7.7", "7.8"]
    },
    {
      name: "MultiplicityElement",
      ru: "Элемент с кратностью",
      kind: "Abstract Class",
      section: "7.8.8",
      page: 45,
      definition: "Содержит определение включительного интервала неотрицательных целых чисел и задаёт допустимые кардинальности для экземпляра элемента.",
      generalizations: ["Element"],
      specializations: ["Variable", "ConnectorEnd", "Parameter", "StructuralFeature", "Pin"],
      attributes: [
        { signature: "isOrdered : Boolean [1..1] = false", description: "Определяет последовательный порядок значений многозначной кратности." },
        { signature: "isUnique : Boolean [1..1] = true", description: "Определяет уникальность значений многозначной кратности." },
        { signature: "/lower : Integer [1..1]", description: "Нижняя граница интервала кратности." },
        { signature: "/upper : UnlimitedNatural [1..1]", description: "Верхняя граница интервала кратности." }
      ],
      ends: [
        { signature: "lowerValue : ValueSpecification [0..1]", description: "Спецификация нижней границы." },
        { signature: "upperValue : ValueSpecification [0..1]", description: "Спецификация верхней границы." }
      ],
      operations: [
        { signature: "compatibleWith(other : MultiplicityElement) : Boolean", description: "Проверяет, что другая кратность такая же или шире." },
        { signature: "includesMultiplicity(M : MultiplicityElement) : Boolean", description: "Проверяет включение всех кардинальностей указанной кратности." },
        { signature: "is(lowerbound : Integer, upperbound : UnlimitedNatural) : Boolean", description: "Проверяет совпадение границ с указанными значениями." },
        { signature: "isMultivalued() : Boolean", description: "Проверяет, что верхняя граница больше единицы." },
        { signature: "lower() : Integer [0..1]", description: "Возвращает производное значение нижней границы." },
        { signature: "lowerBound() : Integer [1..1]", description: "Возвращает нижнюю границу; по умолчанию она равна 1." },
        { signature: "upper() : UnlimitedNatural [0..1]", description: "Возвращает производное значение верхней границы." },
        { signature: "upperBound() : UnlimitedNatural [1..1]", description: "Возвращает верхнюю границу; по умолчанию она равна 1." }
      ],
      constraints: [
        { name: "upper_ge_lower", description: "Верхняя граница не меньше нижней." },
        { name: "lower_ge_0", description: "Нижняя граница неотрицательна." },
        { name: "value_specification_no_side_effects", description: "Вычисление нелитеральных границ не имеет побочных эффектов." },
        { name: "value_specification_constant", description: "Нелитеральные границы должны быть константными выражениями." },
        { name: "lower_is_integer", description: "Заданная нижняя граница имеет значение Integer." },
        { name: "upper_is_unlimitedNatural", description: "Заданная верхняя граница имеет значение UnlimitedNatural." }
      ],
      figures: ["7.10", "7.11", "7.12"]
    },
    {
      name: "NamedElement",
      ru: "Именованный элемент",
      kind: "Abstract Class",
      section: "7.8.9",
      page: 47,
      definition: "Элемент модели, который может иметь имя, заданное непосредственно или через StringExpression.",
      generalizations: ["Element"],
      specializations: ["Namespace", "PackageableElement", "TypedElement", "ActivityGroup", "Trigger", "Extend", "Include", "CollaborationUse", "Vertex", "GeneralOrdering", "InteractionFragment", "Lifeline", "Message", "MessageEnd", "DeployedArtifact", "DeploymentTarget", "ParameterSet", "RedefinableElement"],
      attributes: [
        { signature: "name : String [0..1]", description: "Имя элемента." },
        { signature: "/qualifiedName : String [0..1]", description: "Имя, построенное по иерархии вложенных пространств имён." },
        { signature: "visibility : VisibilityKind [0..1]", description: "Видимость элемента за пределами владеющего пространства имён." }
      ],
      ends: [
        { signature: "/clientDependency : Dependency [0..*]", description: "Зависимости, в которых элемент выступает клиентом." },
        { signature: "nameExpression : StringExpression [0..1]", description: "Выражение, определяющее имя элемента." },
        { signature: "/namespace : Namespace [0..1] {union}", description: "Пространство имён, владеющее элементом." }
      ],
      operations: [
        { signature: "allNamespaces() : Namespace [0..*] {ordered}", description: "Возвращает последовательность вмещающих пространств имён." },
        { signature: "allOwningPackages() : Package [0..*]", description: "Возвращает вмещающие пакеты." },
        { signature: "isDistinguishableFrom(n : NamedElement, ns : Namespace) : Boolean", description: "Проверяет возможность различения двух элементов в пространстве имён." },
        { signature: "qualifiedName() : String", description: "Вычисляет квалифицированное имя, если доступны все имена в иерархии." },
        { signature: "separator() : String", description: "Возвращает разделитель ::." },
        { signature: "clientDependency() : Dependency [0..*]", description: "Возвращает зависимости, где элемент является клиентом." }
      ],
      constraints: [
        { name: "visibility_needs_ownership", description: "Элемент, принадлежащий не пространству имён, не имеет видимости." },
        { name: "has_qualified_name", description: "Квалифицированное имя строится, если заданы имена элемента и всех вмещающих пространств имён." },
        { name: "has_no_qualified_name", description: "Если какое-либо имя в иерархии отсутствует, квалифицированное имя отсутствует." }
      ],
      figures: ["7.5", "7.10", "7.17", "7.18"]
    },
    {
      name: "Namespace",
      ru: "Пространство имён",
      kind: "Abstract Class",
      section: "7.8.10",
      page: 50,
      definition: "Элемент модели, который владеет именованными элементами и/или импортирует их, обеспечивая идентификацию по имени.",
      generalizations: ["NamedElement"],
      specializations: ["Region", "State", "Transition", "Package", "InteractionOperand", "BehavioralFeature", "Classifier", "StructuredActivityNode"],
      ends: [
        { signature: "elementImport : ElementImport [0..*]", description: "Импорты отдельных элементов, принадлежащие пространству имён." },
        { signature: "/importedMember : PackageableElement [0..*]", description: "Члены, добавленные импортом элемента или пакета." },
        { signature: "/member : NamedElement [0..*] {union}", description: "Все различимые по имени члены пространства имён." },
        { signature: "/ownedMember : NamedElement [0..*] {union}", description: "Члены, непосредственно принадлежащие пространству имён." },
        { signature: "ownedRule : Constraint [0..*]", description: "Ограничения, принадлежащие пространству имён." },
        { signature: "packageImport : PackageImport [0..*]", description: "Импорты пакетов, принадлежащие пространству имён." }
      ],
      operations: [
        { signature: "excludeCollisions(imps : PackageableElement [0..*]) : PackageableElement [0..*]", description: "Исключает элементы, которые нельзя различить внутри пространства имён." },
        { signature: "getNamesOfMember(element : NamedElement) : String [0..*]", description: "Возвращает имена члена с учётом импортов и псевдонимов." },
        { signature: "importMembers(imps : PackageableElement [0..*]) : PackageableElement [0..*]", description: "Определяет фактически импортируемые элементы без скрытых конфликтов." },
        { signature: "importedMember() : PackageableElement [0..*]", description: "Вычисляет членов, полученных через ElementImport и PackageImport." },
        { signature: "membersAreDistinguishable() : Boolean", description: "Проверяет различимость всех членов пространства имён." }
      ],
      constraints: [
        { name: "members_distinguishable", description: "Все члены пространства имён различимы внутри него." },
        { name: "cannot_import_self", description: "Пространство имён не может импортировать само себя." },
        { name: "cannot_import_ownedMembers", description: "Пространство имён не может импортировать собственные ownedMembers." }
      ],
      figures: ["7.5", "7.7", "7.8", "7.9", "7.13"]
    },
    {
      name: "PackageImport",
      ru: "Импорт пакета",
      kind: "Class",
      section: "7.8.11",
      page: 52,
      definition: "Relationship, импортирующий все незакрытые члены пакета в пространство имён, чтобы на них можно было ссылаться по неквалифицированным именам.",
      generalizations: ["DirectedRelationship"],
      attributes: [{ signature: "visibility : VisibilityKind [1..1] = public", description: "Определяет, будут ли импортированные элементы видимы за пределами импортирующего пространства имён." }],
      ends: [
        { signature: "importedPackage : Package [1..1]", description: "Пакет, члены которого импортируются." },
        { signature: "importingNamespace : Namespace [1..1]", description: "Пространство имён, выполняющее импорт." }
      ],
      constraints: [{ name: "public_or_private", description: "Видимость импорта пакета может быть только public или private." }],
      figures: ["7.5", "7.9"]
    },
    {
      name: "PackageableElement",
      ru: "Упаковываемый элемент",
      kind: "Abstract Class",
      section: "7.8.12",
      page: 52,
      definition: "NamedElement, который может непосредственно принадлежать пакету и выступать parameteredElement для TemplateParameter.",
      generalizations: ["ParameterableElement", "NamedElement"],
      specializations: ["Constraint", "Dependency", "Type", "Event", "Observation", "ValueSpecification", "Package", "InformationFlow", "GeneralizationSet", "InstanceSpecification"],
      attributes: [{ signature: "visibility : VisibilityKind [0..1] = public", description: "Видимость элемента; при владении пространством имён она обязательна." }],
      constraints: [{ name: "namespace_needs_visibility", description: "Элемент, принадлежащий пространству имён, должен иметь видимость." }],
      figures: ["7.5", "7.10", "7.13", "7.17"]
    },
    {
      name: "ParameterableElement",
      ru: "Параметризуемый элемент",
      kind: "Abstract Class",
      section: "7.8.13",
      page: 53,
      definition: "Элемент, который может быть представлен как формальный TemplateParameter шаблона или указан как фактический параметр при привязке шаблона.",
      generalizations: ["Element"],
      specializations: ["PackageableElement", "ConnectableElement", "Operation"],
      ends: [
        { signature: "owningTemplateParameter : TemplateParameter [0..1]", description: "Формальный параметр, владеющий этим элементом." },
        { signature: "templateParameter : TemplateParameter [0..1]", description: "Параметр шаблона, представляющий этот элемент как формальный параметр." }
      ],
      operations: [
        { signature: "isCompatibleWith(p : ParameterableElement) : Boolean", description: "Проверяет совместимость с другим параметризуемым элементом." },
        { signature: "isTemplateParameter() : Boolean", description: "Проверяет, представлен ли элемент как формальный параметр шаблона." }
      ],
      figures: ["7.3", "7.4", "7.5"]
    },
    {
      name: "Realization",
      ru: "Реализация",
      kind: "Class",
      section: "7.8.14",
      page: 54,
      definition: "Специализированное отношение Abstraction между спецификацией-поставщиком и её реализацией-клиентом.",
      generalizations: ["Abstraction"],
      specializations: ["ComponentRealization", "InterfaceRealization", "Substitution"],
      figures: ["7.17", "7.21"]
    },
    {
      name: "Relationship",
      ru: "Отношение",
      kind: "Abstract Class",
      section: "7.8.15",
      page: 54,
      definition: "Абстрактное понятие, задающее некоторый вид отношения между элементами.",
      generalizations: ["Element"],
      specializations: ["DirectedRelationship", "Association"],
      ends: [{ signature: "/relatedElement : Element [1..*] {union}", description: "Элементы, связанные этим отношением." }],
      figures: ["7.1"]
    },
    {
      name: "TemplateBinding",
      ru: "Привязка шаблона",
      kind: "Class",
      section: "7.8.16",
      page: 55,
      definition: "DirectedRelationship между TemplateableElement и шаблоном, задающий подстановки фактических параметров вместо формальных.",
      generalizations: ["DirectedRelationship"],
      ends: [
        { signature: "boundElement : TemplateableElement [1..1]", description: "Элемент, к которому применяется привязка." },
        { signature: "parameterSubstitution : TemplateParameterSubstitution [0..*]", description: "Подстановки параметров, принадлежащие привязке." },
        { signature: "signature : TemplateSignature [1..1]", description: "Подпись целевого шаблона." }
      ],
      constraints: [
        { name: "parameter_substitution_formal", description: "Каждая подстановка ссылается на формальный параметр целевой подписи." },
        { name: "one_parameter_substitution", description: "Для каждого формального параметра существует не более одной подстановки." }
      ],
      figures: ["7.4"]
    },
    {
      name: "TemplateParameter",
      ru: "Параметр шаблона",
      kind: "Class",
      section: "7.8.17",
      page: 55,
      definition: "Представляет ParameterableElement как формальный параметр шаблона.",
      generalizations: ["Element"],
      specializations: ["ConnectableElementTemplateParameter", "ClassifierTemplateParameter", "OperationTemplateParameter"],
      ends: [
        { signature: "default : ParameterableElement [0..1]", description: "Значение формального параметра по умолчанию." },
        { signature: "ownedDefault : ParameterableElement [0..1]", description: "Принадлежащее параметру значение по умолчанию." },
        { signature: "ownedParameteredElement : ParameterableElement [0..1]", description: "Принадлежащий параметру параметризуемый элемент." },
        { signature: "parameteredElement : ParameterableElement [1..1]", description: "Элемент, представленный параметром шаблона." },
        { signature: "signature : TemplateSignature [1..1]", description: "Подпись, владеющая параметром." }
      ],
      constraints: [{ name: "must_be_compatible", description: "Значение по умолчанию должно быть совместимо с формальным параметром." }],
      figures: ["7.3", "7.4"]
    },
    {
      name: "TemplateParameterSubstitution",
      ru: "Подстановка параметра шаблона",
      kind: "Class",
      section: "7.8.18",
      page: 56,
      definition: "Связывает фактический параметр с формальным TemplateParameter в рамках привязки шаблона.",
      generalizations: ["Element"],
      ends: [
        { signature: "actual : ParameterableElement [1..1]", description: "Фактический параметр подстановки." },
        { signature: "formal : TemplateParameter [1..1]", description: "Соответствующий формальный параметр." },
        { signature: "ownedActual : ParameterableElement [0..1]", description: "Принадлежащий подстановке фактический параметр." },
        { signature: "templateBinding : TemplateBinding [1..1]", description: "Привязка, владеющая подстановкой." }
      ],
      constraints: [{ name: "must_be_compatible", description: "Фактический параметр должен быть совместим с формальным." }],
      figures: ["7.4"]
    },
    {
      name: "TemplateSignature",
      ru: "Подпись шаблона",
      kind: "Class",
      section: "7.8.19",
      page: 57,
      definition: "Объединяет множество формальных TemplateParameters шаблона.",
      generalizations: ["Element"],
      specializations: ["RedefinableTemplateSignature"],
      ends: [
        { signature: "ownedParameter : TemplateParameter [0..*] {ordered}", description: "Формальные параметры, принадлежащие подписи." },
        { signature: "parameter : TemplateParameter [1..*] {ordered}", description: "Упорядоченное множество всех формальных параметров." },
        { signature: "template : TemplateableElement [1..1]", description: "Элемент-шаблон, владеющий подписью." }
      ],
      constraints: [
        { name: "own_elements", description: "Параметризуемые элементы принадлежат параметрам либо самому шаблону." },
        { name: "unique_parameters", description: "Имена параметров подписи уникальны." }
      ],
      figures: ["7.3", "7.4"]
    },
    {
      name: "TemplateableElement",
      ru: "Шаблонизируемый элемент",
      kind: "Abstract Class",
      section: "7.8.20",
      page: 58,
      definition: "Элемент, который может быть определён как шаблон и привязан к другим шаблонам.",
      generalizations: ["Element"],
      specializations: ["StringExpression", "Package", "Classifier", "Operation"],
      ends: [
        { signature: "ownedTemplateSignature : TemplateSignature [0..1]", description: "Необязательная подпись, делающая элемент шаблоном." },
        { signature: "templateBinding : TemplateBinding [0..*]", description: "Необязательные привязки элемента к шаблонам." }
      ],
      operations: [
        { signature: "isTemplate() : Boolean", description: "Проверяет наличие ownedTemplateSignature." },
        { signature: "parameterableElements() : ParameterableElement [0..*]", description: "Возвращает элементы, допустимые как параметры этого шаблона." }
      ],
      figures: ["7.3", "7.4"]
    },
    {
      name: "Type",
      ru: "Тип",
      kind: "Abstract Class",
      section: "7.8.21",
      page: 59,
      definition: "Ограничивает значения, представляемые TypedElement.",
      generalizations: ["PackageableElement"],
      specializations: ["Classifier"],
      ends: [{ signature: "package : Package [0..1]", description: "Пакет, владеющий типом, если он задан." }],
      operations: [{ signature: "conformsTo(other : Type) : Boolean", description: "Проверяет соответствие другому типу; базовая реализация возвращает false и переопределяется для конкретных случаев." }],
      figures: ["7.10"]
    },
    {
      name: "TypedElement",
      ru: "Типизированный элемент",
      kind: "Abstract Class",
      section: "7.8.22",
      page: 59,
      definition: "NamedElement, для которого может быть задан Type.",
      generalizations: ["NamedElement"],
      specializations: ["ObjectNode", "ValueSpecification", "ConnectableElement", "StructuralFeature"],
      ends: [{ signature: "type : Type [0..1]", description: "Тип элемента." }],
      figures: ["7.10"]
    },
    {
      name: "Usage",
      ru: "Использование",
      kind: "Class",
      section: "7.8.23",
      page: 60,
      definition: "Dependency, в которой элемент-клиент нуждается в элементе-поставщике или множестве поставщиков для своей полной реализации или работы.",
      generalizations: ["Dependency"],
      figures: ["7.17", "7.20"]
    },
    {
      name: "VisibilityKind",
      ru: "Вид видимости",
      kind: "Enumeration",
      section: "7.8.24",
      page: 60,
      definition: "Перечисление, литералы которого определяют видимость элементов в модели.",
      literals: [
        { name: "public", description: "Элемент виден всем, кто имеет доступ к содержимому владеющего пространства имён." },
        { name: "private", description: "Элемент виден только внутри владеющего пространства имён." },
        { name: "protected", description: "Элемент виден элементам, связанным с владеющим пространством имён отношением обобщения." },
        { name: "package", description: "Элемент виден внутри ближайшего вмещающего пакета при соблюдении видимости остальных владельцев." }
      ],
      figures: ["7.5"]
    },
    {
      name: "OpaqueExpression",
      ru: "Непрозрачное выражение",
      kind: "Class",
      section: "8.6.16",
      page: 86,
      definition: "ValueSpecification, задающее вычисление набора значений через UML Behavior или текстовое выражение на языке, отличном от UML.",
      generalizations: ["ValueSpecification"],
      figures: ["7.17"]
    },
    {
      name: "StringExpression",
      ru: "Строковое выражение",
      kind: "Class",
      section: "8.6.17",
      page: 88,
      definition: "Expression, задающее строковое значение путём конкатенации последовательности строковых операндов или подвыражений, некоторые из которых могут быть параметрами шаблона.",
      generalizations: ["Expression", "TemplateableElement"],
      figures: ["7.5"]
    },
    {
      name: "ValueSpecification",
      ru: "Спецификация значения",
      kind: "Abstract Class",
      section: "8.6.22",
      page: 91,
      definition: "Спецификация возможно пустого множества значений; ParameterableElement, который может выступать формальным параметром шаблона или фактическим параметром при его привязке.",
      generalizations: ["TypedElement", "PackageableElement"],
      figures: ["7.10", "7.13"]
    },
    {
      name: "Package",
      ru: "Пакет",
      kind: "Class",
      section: "12.4.5",
      page: 276,
      definition: "Элемент для группировки других элементов и предоставления им пространства имён; может использоваться как шаблон и применять профили.",
      generalizations: ["PackageableElement", "TemplateableElement", "Namespace"],
      figures: ["7.5", "7.10"]
    }
  ];

  const associations = [
    {
      name: "A_actual_templateParameterSubstitution", ru: "Фактический параметр подстановки", section: "7.9.1", page: 61,
      definition: "Связывает TemplateParameterSubstitution с фактическим ParameterableElement.",
      diagrams: ["Template Bindings"], specializations: ["A_ownedActual_owningTemplateParameterSubstitution"],
      ends: ["TemplateParameterSubstitution::actual", "templateParameterSubstitution : TemplateParameterSubstitution [0..*]"]
    },
    {
      name: "A_annotatedElement_comment", ru: "Комментарии аннотированного элемента", section: "7.9.2", page: 61,
      definition: "Связывает аннотированный Element с присоединёнными Comments.",
      diagrams: ["Root"], ends: ["Element::annotatedElement", "comment : Comment [0..*]"]
    },
    {
      name: "A_clientDependency_client", ru: "Зависимости клиента", section: "7.9.3", page: 61,
      definition: "Связывает NamedElement-клиента с его Dependencies.",
      diagrams: ["Dependencies"], ends: ["NamedElement::clientDependency", "Dependency::client"]
    },
    {
      name: "A_constrainedElement_constraint", ru: "Ограничения элемента", section: "7.9.4", page: 61,
      definition: "Связывает constrainedElement с применяемыми Constraints.",
      diagrams: ["Constraints"], ends: ["Element::constrainedElement", "constraint : Constraint [0..*]"]
    },
    {
      name: "A_default_templateParameter", ru: "Параметр по умолчанию", section: "7.9.5", page: 61,
      definition: "Связывает значение ParameterableElement по умолчанию с TemplateParameter.",
      diagrams: ["Templates"], specializations: ["A_ownedDefault_templateParameter"],
      ends: ["TemplateParameter::default", "templateParameter : TemplateParameter [0..*]"]
    },
    {
      name: "A_elementImport_importingNamespace", ru: "Импортирующее пространство имён", section: "7.9.6", page: 62,
      definition: "Связывает Namespace с принадлежащими ему ElementImports.",
      diagrams: ["Namespaces"], ends: ["Namespace::elementImport", "ElementImport::importingNamespace"]
    },
    {
      name: "A_formal_templateParameterSubstitution", ru: "Формальный параметр подстановки", section: "7.9.7", page: 62,
      definition: "Связывает TemplateParameterSubstitution с формальным TemplateParameter.",
      diagrams: ["Template Bindings"], ends: ["TemplateParameterSubstitution::formal", "templateParameterSubstitution : TemplateParameterSubstitution [0..*]"]
    },
    {
      name: "A_importedElement_import", ru: "Импорт импортированного элемента", section: "7.9.8", page: 62,
      definition: "Связывает импортированный PackageableElement с ElementImport.",
      diagrams: ["Namespaces"], ends: ["PackageableElement::importedElement", "import : ElementImport [0..*]"]
    },
    {
      name: "A_importedMember_namespace", ru: "Пространство имён импортированного члена", section: "7.9.9", page: 62,
      definition: "Связывает импортированный PackageableElement с Namespace, членом которого он стал.",
      diagrams: ["Namespaces"], ends: ["Namespace::importedMember", "namespace : Namespace [0..*]"]
    },
    {
      name: "A_importedPackage_packageImport", ru: "Импорт импортированного пакета", section: "7.9.10", page: 63,
      definition: "Связывает импортированный Package с PackageImport.",
      diagrams: ["Namespaces"], ends: ["Package::importedPackage", "packageImport : PackageImport [0..*]"]
    },
    {
      name: "A_lowerValue_owningLower", ru: "Владелец нижней границы", section: "7.9.11", page: 63,
      definition: "Связывает ValueSpecification нижней границы с владеющим MultiplicityElement.",
      diagrams: ["Types"], ends: ["MultiplicityElement::lowerValue", "owningLower : MultiplicityElement [0..1]"]
    },
    {
      name: "A_mapping_abstraction", ru: "Отображение абстрагирования", section: "7.9.12", page: 63,
      definition: "Связывает OpaqueExpression отображения с владеющим Abstraction.",
      diagrams: ["Dependencies"], ends: ["Abstraction::mapping", "abstraction : Abstraction [0..1]"]
    },
    {
      name: "A_member_memberNamespace", ru: "Пространства имён члена", section: "7.9.13", page: 63,
      definition: "Связывает NamedElement с пространствами имён, членом которых он является.",
      diagrams: ["Namespaces"], ends: ["Namespace::member", "/memberNamespace : Namespace [0..*] {union}"]
    },
    {
      name: "A_nameExpression_namedElement", ru: "Именованный элемент выражения имени", section: "7.9.14", page: 63,
      definition: "Связывает StringExpression с NamedElement, имя которого оно определяет.",
      diagrams: ["Namespaces"], ends: ["NamedElement::nameExpression", "namedElement : NamedElement [0..1]"]
    },
    {
      name: "A_ownedActual_owningTemplateParameterSubstitution", ru: "Владеющая подстановка фактического параметра", section: "7.9.15", page: 64,
      definition: "Специализация A_actual_templateParameterSubstitution для фактического параметра, принадлежащего подстановке.",
      diagrams: ["Template Bindings"], generalizations: ["A_actual_templateParameterSubstitution"],
      ends: ["TemplateParameterSubstitution::ownedActual", "owningTemplateParameterSubstitution : TemplateParameterSubstitution [0..1]"]
    },
    {
      name: "A_ownedComment_owningElement", ru: "Владеющий элемент комментария", section: "7.9.16", page: 64,
      definition: "Связывает ownedComment с Element, которому принадлежит комментарий.",
      diagrams: ["Root"], ends: ["Element::ownedComment", "owningElement : Element [0..1]"]
    },
    {
      name: "A_ownedDefault_templateParameter", ru: "Владеющий параметр значения по умолчанию", section: "7.9.17", page: 64,
      definition: "Специализация A_default_templateParameter для значения, принадлежащего TemplateParameter.",
      diagrams: ["Templates"], generalizations: ["A_default_templateParameter"],
      ends: ["TemplateParameter::ownedDefault", "templateParameter : TemplateParameter [0..1]"]
    },
    {
      name: "A_ownedElement_owner", ru: "Владелец элемента", section: "7.9.18", page: 64,
      definition: "Связывает Element с его владельцем и принадлежащими ему элементами.",
      diagrams: ["Root"], ends: ["Element::ownedElement", "Element::owner"]
    },
    {
      name: "A_ownedMember_namespace", ru: "Пространство имён собственного члена", section: "7.9.19", page: 65,
      definition: "Связывает Namespace с непосредственно принадлежащими ему NamedElements.",
      diagrams: ["Namespaces"], ends: ["Namespace::ownedMember", "NamedElement::namespace"]
    },
    {
      name: "A_ownedParameter_signature", ru: "Подпись собственного параметра", section: "7.9.20", page: 65,
      definition: "Связывает TemplateSignature с принадлежащими ему TemplateParameters.",
      diagrams: ["Templates"], ends: ["TemplateSignature::ownedParameter", "TemplateParameter::signature"]
    },
    {
      name: "A_ownedParameteredElement_owningTemplateParameter", ru: "Владеющий параметр параметризуемого элемента", section: "7.9.21", page: 65,
      definition: "Связывает TemplateParameter с принадлежащим ему ParameterableElement.",
      diagrams: ["Templates"], ends: ["TemplateParameter::ownedParameteredElement", "ParameterableElement::owningTemplateParameter"]
    },
    {
      name: "A_ownedRule_context", ru: "Контекст собственного правила", section: "7.9.22", page: 65,
      definition: "Связывает Namespace с принадлежащими ему Constraints и их контекстом.",
      diagrams: ["Namespaces", "Constraints"], ends: ["Namespace::ownedRule", "Constraint::context"]
    },
    {
      name: "A_ownedTemplateSignature_template", ru: "Шаблон собственной подписи", section: "7.9.23", page: 65,
      definition: "Связывает TemplateableElement с принадлежащей ему TemplateSignature.",
      diagrams: ["Templates"], ends: ["TemplateableElement::ownedTemplateSignature", "TemplateSignature::template"]
    },
    {
      name: "A_packageImport_importingNamespace", ru: "Импортирующее пространство пакета", section: "7.9.24", page: 66,
      definition: "Связывает Namespace с принадлежащими ему PackageImports.",
      diagrams: ["Namespaces"], ends: ["Namespace::packageImport", "PackageImport::importingNamespace"]
    },
    {
      name: "A_parameterSubstitution_templateBinding", ru: "Привязка подстановки параметра", section: "7.9.25", page: 66,
      definition: "Связывает TemplateBinding с принадлежащими ему TemplateParameterSubstitutions.",
      diagrams: ["Template Bindings"], ends: ["TemplateBinding::parameterSubstitution", "TemplateParameterSubstitution::templateBinding"]
    },
    {
      name: "A_parameter_templateSignature", ru: "Подпись параметра", section: "7.9.26", page: 66,
      definition: "Связывает TemplateParameter с TemplateSignature, к которой он относится.",
      diagrams: ["Templates"], ends: ["TemplateSignature::parameter", "templateSignature : TemplateSignature [0..*]"]
    },
    {
      name: "A_parameteredElement_templateParameter", ru: "Параметр параметризуемого элемента", section: "7.9.27", page: 66,
      definition: "Связывает ParameterableElement с представляющим его TemplateParameter.",
      diagrams: ["Templates"], ends: ["TemplateParameter::parameteredElement", "ParameterableElement::templateParameter"]
    },
    {
      name: "A_relatedElement_relationship", ru: "Отношения связанного элемента", section: "7.9.28", page: 67,
      definition: "Связывает Element с Relationships, в которых он участвует.",
      diagrams: ["Root"], ends: ["Relationship::relatedElement", "/relationship : Relationship [0..*] {union}"]
    },
    {
      name: "A_signature_templateBinding", ru: "Привязки подписи шаблона", section: "7.9.29", page: 67,
      definition: "Связывает TemplateSignature целевого шаблона с TemplateBindings.",
      diagrams: ["Template Bindings"], ends: ["TemplateBinding::signature", "templateBinding : TemplateBinding [0..*]"]
    },
    {
      name: "A_source_directedRelationship", ru: "Направленные отношения источника", section: "7.9.30", page: 67,
      definition: "Связывает исходный Element с DirectedRelationships.",
      diagrams: ["Root"], ends: ["DirectedRelationship::source", "/directedRelationship : DirectedRelationship [0..*] {union}"]
    },
    {
      name: "A_specification_owningConstraint", ru: "Владеющее ограничение спецификации", section: "7.9.31", page: 67,
      definition: "Связывает ValueSpecification с Constraint, которому принадлежит условие.",
      diagrams: ["Constraints"], specializations: ["A_specification_intervalConstraint"],
      ends: ["Constraint::specification", "owningConstraint : Constraint [0..1]"]
    },
    {
      name: "A_supplier_supplierDependency", ru: "Зависимости поставщика", section: "7.9.32", page: 67,
      definition: "Связывает NamedElement-поставщика с Dependencies, которые на него ссылаются.",
      diagrams: ["Dependencies"], ends: ["Dependency::supplier", "supplierDependency : Dependency [0..*]"]
    },
    {
      name: "A_target_directedRelationship", ru: "Направленные отношения цели", section: "7.9.33", page: 68,
      definition: "Связывает целевой Element с DirectedRelationships.",
      diagrams: ["Root"], ends: ["DirectedRelationship::target", "/directedRelationship : DirectedRelationship [0..*] {union}"]
    },
    {
      name: "A_templateBinding_boundElement", ru: "Привязки связываемого элемента", section: "7.9.34", page: 68,
      definition: "Связывает TemplateableElement с его TemplateBindings.",
      diagrams: ["Template Bindings"], ends: ["TemplateableElement::templateBinding", "TemplateBinding::boundElement"]
    },
    {
      name: "A_type_typedElement", ru: "Типизированные элементы типа", section: "7.9.35", page: 68,
      definition: "Связывает Type с TypedElements, для которых он задан.",
      diagrams: ["Types"], ends: ["TypedElement::type", "typedElement : TypedElement [0..*]"]
    },
    {
      name: "A_upperValue_owningUpper", ru: "Владелец верхней границы", section: "7.9.36", page: 68,
      definition: "Связывает ValueSpecification верхней границы с владеющим MultiplicityElement.",
      diagrams: ["Types"], ends: ["MultiplicityElement::upperValue", "owningUpper : MultiplicityElement [0..1]"]
    }
  ];

  const diagrams = [
    { id: "7.1", title: "Корневые понятия", en: "Root", section: "7.2", page: 21, related: ["Element", "Relationship", "DirectedRelationship", "Comment"] },
    { id: "7.2", title: "Обозначение комментария", en: "Comment notation", section: "7.2", page: 22, related: ["Comment"] },
    { id: "7.3", title: "Шаблоны", en: "Templates", section: "7.3", page: 23, related: ["TemplateParameter", "TemplateSignature", "TemplateableElement", "ParameterableElement", "Element"] },
    { id: "7.4", title: "Привязки шаблонов", en: "Template bindings", section: "7.3", page: 23, related: ["TemplateBinding", "TemplateParameterSubstitution", "TemplateParameter", "ParameterableElement", "TemplateableElement", "TemplateSignature", "DirectedRelationship", "Element"] },
    { id: "7.5", title: "Пространства имён", en: "Namespaces", section: "7.4", page: 27, related: ["Namespace", "NamedElement", "ElementImport", "PackageImport", "PackageableElement", "ParameterableElement", "VisibilityKind", "DirectedRelationship", "Element", "StringExpression", "Constraint", "Package"] },
    { id: "7.6", title: "Пакет-шаблон со строковыми параметрами", en: "Template package with string parameters", section: "7.4", page: 31, related: ["TemplateParameter", "TemplateBinding"] },
    { id: "7.7", title: "Пример импорта элемента", en: "Example of element import", section: "7.4", page: 31, related: ["ElementImport"] },
    { id: "7.8", title: "Импорт элемента с псевдонимом", en: "Example of element import with aliasing", section: "7.4", page: 32, related: ["ElementImport"] },
    { id: "7.9", title: "Открытый и закрытый импорт пакетов", en: "Examples of public and private package imports", section: "7.4", page: 32, related: ["PackageImport"] },
    { id: "7.10", title: "Абстрактный синтаксис типов и кратности", en: "Abstract syntax of types and multiplicity elements", section: "7.5", page: 33, related: ["Type", "TypedElement", "MultiplicityElement", "NamedElement", "PackageableElement", "Element", "ValueSpecification", "Package"] },
    { id: "7.11", title: "Кратность в текстовой спецификации", en: "Multiplicity within a textual specification", section: "7.5", page: 35, related: ["MultiplicityElement"] },
    { id: "7.12", title: "Кратность как дополнение к обозначению", en: "Multiplicity as an adornment to a symbol", section: "7.5", page: 35, related: ["MultiplicityElement"] },
    { id: "7.13", title: "Абстрактный синтаксис ограничений", en: "Abstract Syntax of Constraints", section: "7.6", page: 36, related: ["Constraint", "Namespace", "PackageableElement", "Element", "ValueSpecification"] },
    { id: "7.14", title: "Ограничение в примечании", en: "Constraint in a note symbol", section: "7.6", page: 37, related: ["Constraint"] },
    { id: "7.15", title: "Ограничение, связанное с атрибутом", en: "Constraint attached to an attribute", section: "7.6", page: 37, related: ["Constraint"] },
    { id: "7.16", title: "Ограничение {xor}", en: "{xor} constraint", section: "7.6", page: 37, related: ["Constraint"] },
    { id: "7.17", title: "Абстрактный синтаксис зависимостей", en: "Abstract syntax of dependencies", section: "7.7", page: 38, related: ["Dependency", "DirectedRelationship", "PackageableElement", "Abstraction", "Realization", "Usage", "NamedElement", "OpaqueExpression"] },
    { id: "7.18", title: "Dependency между двумя элементами", en: "Notation for a Dependency between two elements", section: "7.7", page: 39, related: ["Dependency", "NamedElement"] },
    { id: "7.19", title: "Пример зависимости «Instantiate»", en: "An example of an «Instantiate» Dependency", section: "7.7", page: 39, related: ["Dependency"] },
    { id: "7.20", title: "Пример зависимости «use»", en: "An example of a «use» Dependency", section: "7.7", page: 39, related: ["Usage"] },
    { id: "7.21", title: "Пример зависимости Realization", en: "An example of a realization Dependency", section: "7.7", page: 40, related: ["Realization"] }
  ].map(diagram => ({
    ...diagram,
    image: `assets/diagrams/figure-${diagram.id.replace(".", "-")}.png`
  }));

  return { sections, classifiers, associations, diagrams };
})();
