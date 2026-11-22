# Черновик реестра раздела 18 «UseCases» (Варианты использования)

## Блок конфигурации для `scripts/sections.json`

```json
"18": {
    "title": "UseCases",
    "title_ru": "Варианты использования",
    "slug": "use-cases",
    "package": "UseCases",
    "first_page": 639,
    "last_page": 652,
    "classifier_catalog": "18.2",
    "association_catalog": "18.3",
    "source": "omg-uml-2.5.1-formal-17-12-05.pdf",
    "xmi_source": "UML-2.5.1.xmi"
}
```

---

## Дерево подразделов

| Подраздел        | Заголовок                        | Страница |
|------------------|----------------------------------|----------|
| 18               | UseCases                         | 639      |
| 18.1             | Use Cases                        | 639      |
| 18.1.1         | Summary                          | 639      |
| 18.1.2         | Abstract Syntax                  | 639      |
| 18.1.3         | Semantics                        | 639      |
| 18.1.4         | Notation                         | 641      |
| 18.1.5         | Examples                         | 643      |
| 18.2             | Classifier Descriptions          | 647      |
| 18.2.1         | Actor [Class]                    | 647      |
| 18.2.2         | Extend [Class]                   | 647      |
| 18.2.3         | ExtensionPoint [Class]           | 648      |
| 18.2.4         | Include [Class]                  | 648      |
| 18.2.5         | UseCase [Class]                  | 649      |
| 18.3             | Association Descriptions         | 650      |
| 18.3.1           | A_addition_include               | 650      |
| 18.3.2           | A_condition_extend               | 650      |
| 18.3.3           | A_extend_extension               | 651      |
| 18.3.4           | A_extendedCase_extend            | 651      |
| 18.3.5           | A_extensionLocation_extension    | 651      |
| 18.3.6           | A_extensionPoint_useCase         | 651      |
| 18.3.7           | A_include_includingCase          | 651      |
| 18.3.8           | A_subject_useCase                | 652      |

**Итого:** 1 раздел, 5 подразделов первого уровня, 5 подподразделов второго уровня (классификаторы), 8 подподразделов третьего уровня (ассоциации).

---

## Классификаторы

Все классификаторы находятся в XMI-пакете `UseCases`. Перечисления в этом пакете отсутствуют.

| #  | Англ. имя        | Подраздел  | Определение (англ., первое предложение)                                                                                                     | Краткое описание на русском                                                                                     | Атрибуты              | Операции             | Ограничения                          |
|----|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------------|---------------------|-------------------------------------|
| 1  | Actor            | 18.2.1     | An Actor specifies a role played by a user or any other system that interacts with the subject.                                               | Роль пользователя или другой системы, взаимодействующей с предметом варианта использования.                   | —                    | —                   | `associations`, `must_have_name`    |
| 2  | Extend           | 18.2.2     | A relationship from an extending UseCase to an extended UseCase that specifies how and when the behavior defined in the extending UseCase can be inserted into the behavior defined in the extended UseCase. | Стереотип ассоциации, обозначающей расширение: как и когда поведение расширяющего варианта вставляется в поведение расширяемого. | `condition`, `extendedCase`, `extension`, `extensionLocation` | —                   | `extension_points`                  |
| 3  | ExtensionPoint   | 18.2.3     | An ExtensionPoint identifies a point in the behavior of a UseCase where that behavior can be extended by the behavior of some other (extending) UseCase, as specified by an Extend relationship.                           | Точка в поведении варианта использования, где поведение может быть расширено другим вариантом.                | `useCase`            | —                   | `must_have_name`                    |
| 4  | Include          | 18.2.4     | An Include relationship specifies that a UseCase contains the behavior defined in another UseCase.                                            | Стереотип ассоциации, обозначающей включение: один вариант содержит поведение другого варианта.               | `addition`, `includingCase` | —                   | —                                   |
| 5  | UseCase          | 18.2.5     | A UseCase specifies a set of actions performed by its subjects, which yields an observable result that is of value for one or more Actors or other stakeholders of each subject.                              | Набор действий, выполняемых субъектом, дающий наблюдаемый результат, ценный для актора или стейкхолдера.    | `extend`, `extensionPoint`, `include`, `subject` | `allIncludedUseCases()` | `binary_associations`, `no_association_to_use_case`, `cannot_include_self`, `must_have_name`, `spec` |

**Суммарно по пакету:**
- Классификаторов (Class): **5**
- Атрибутов (ownedAttribute): **11** (Actor:0, Extend:4, ExtensionPoint:1, Include:2, UseCase:4)
- Операций (ownedOperation): **1** (`allIncludedUseCases` у UseCase)
- Ограничений (ownedRule): **9** (Actor:2, Extend:1, ExtensionPoint:1, Include:0, UseCase:5)

---

## Ассоциации

Все 8 ассоциаций находятся в пакете `UseCases`. Две из них (`A_extensionPoint_useCase` и `A_include_includingCase`) имеют короткие блоки в XMI — их концы (ownedEnd) определены в других пакетах, но они по-прежнему принадлежат пакету UseCases.

| #  | Англ. имя                        | Конец 1                          | Конец 2                                |
|----|-----------------------------------|----------------------------------|----------------------------------------|
| 1  | A_extensionPoint_useCase         | `extensionPoint` : ExtensionPoint [0..*] | `useCase` : UseCase [0..*]             |
| 2  | A_include_includingCase          | `include` : Include [0..*]       | `includingCase` : UseCase [0..*]       |
| 3  | A_subject_useCase                | `subject` : Classifier [0..*]    | `useCase` : UseCase [0..*]             |
| 4  | A_extend_extension               | `extend` : Extend [0..*]         | `extension` : UseCase [0..*]           |
| 5  | A_addition_include               | `addition` : UseCase [0..*]      | `include` : Include [0..*]             |
| 6  | A_extensionLocation_extension    | `extensionLocation` : ExtensionPoint [0..*] | `extension` : Extend [0..*]        |
| 7  | A_condition_extend               | `condition` : Constraint [0..*]  | `extend` : Extend [0..*]               |
| 8  | A_extendedCase_extend            | `extendedCase` : UseCase [0..*]  | `extend` : Extend [0..*]               |

**Примечание:** Ассоциации `Extend` и `Include` являются **ассоциационными классами** (association classes) — они одновременно являются классификаторами с атрибутами и ассоциациями с концами. В XMI пакете UseCases присутствуют и как `uml:Class`, и как `uml:Association`.

---

## Рисунки

| №    | Подпись                                                           | Страница |
|------|-------------------------------------------------------------------|----------|
| Figure 18.1 | UseCases                                                  | 637      |
| Figure 18.2 | Class diagram of a Package owning a set of UseCases, Actors, and a Subsystem | 641 |
| Figure 18.3 | Example Extend                                              | 641      |
| Figure 18.4 | Example Include                                             | 642      |
| Figure 18.5 | UseCase using Classifier rectangle notation                 | 642      |
| Figure 18.6 | Actor notation using stick-man                              | 642      |
| Figure 18.7 | Actor notation using Class rectangle                        | 642      |
| Figure 18.8 | Actor notation using icon                                   | 642      |
| Figure 18.9 | Notation for UseCase owned by Classifier                    | 643      |
| Figure 18.10 | Example ATM system with UseCases and Actors                | 643      |
| Figure 18.11 | Example UseCases owned by Packages                         | 644      |
| Figure 18.12 | Example UseCase with associated StateMachine               | 644      |

**Итого:** **12 рисунков**.

**Замечание по нумерации:** Figure 18.1 находится на странице 637, что на 2 страницы раньше начала раздела (639). В OMG-спецификациях диаграммы часто размещаются впереди текста, к которому они относятся. При генерации SVG необходимо учитывать этот сдвиг.

---

## Замечания и риски

### Особенности структуры
1. **Ассоциационные классы:** `Extend` и `Include` — это одновременно и классификаторы (с атрибутами), и стереотипы ассоциаций. При реализации на странице справочника нужно показать и их атрибуты, и концы ассоциации.
2. **Figure 18.1** находится на странице 637 (до начала раздела). Это общая диаграмма пакета UseCases, размещённая впереди — типичная практика OMG. При генерации SVG-диаграммы потребуется ссылка на страницу, которая ещё не существует.
3. **Рисунок 18.12** ссылается на `StateMachine` (раздел 14), который находится за пределами раздела 18. Ссылка должна вести на раздел 14.

### Нотация Actors (Figure 18.6–18.8)
Три варианта нотации акторов: stick-man, прямоугольник класса, иконка-символ. Все три нужно перерисовать как интерактивные SVG с поддержкой кликов по ссылкам.

### Ключевые ограничения (OCL)
- `Actor-associations`: Актер может взаимодействовать только с UseCase, Component и Class, все ассоциации бинарны.
- `UseCase-spec`: Query `allIncludedUseCases()` возвращает транзитивное замыкание всех включённых вариантов.

### Страницы диапазона
- Печатные страницы: **639–652** (14 страниц)
- PDF-страницы: **681–694** (сдвиг +42)
- Раздел 19 (Deployments) начинается на странице 653.

### Потенциальные проблемы реализации
- При переносе в справочник нужно аккуратно разделять свойства `Extend` и `Include` как атрибуты класса и как концы ассоциации — они дублируются в XMI.
- Ассоциация `A_subject_useCase` имеет тип конца `Classifier`, а не конкретный класс — это обобщение, которое должно работать для Class, Component, Interface и др.
