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

**Итого:** 3 раздела/подраздела первого уровня (18, 18.1–18.3), 5 классификаторов (18.2.x), 8 ассоциаций (18.3.x). Всего подразделов в оглавлении: 17 позиций (18 + 5 подпунктов 18.1 + 5 классификаторов + 8 ассоциаций минус само 18.3 = итого по TOC: строки 1493, 1495, 1497–1501, 1503, 1505–1509, 1511, 1513–1520).

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

**Замечание по нумерации:** Figure 18.1 находится на странице 637 (PDF-индекс 679), что на 2 страницы раньше начала текста раздела 18 (639, PDF-индекс 680). Это общая диаграмма пакета UseCases, размещённая впереди — типичная практика OMG. Страница 637 входит в каталог рисунков TOC, но не в тело раздела 18 (639–652). При генерации SVG-диаграммы потребуется ссылка на страницу пакета (если будет создана) или на раздел общего каркаса.

---

## Замечания и риски

### Особенности структуры
1. **Ассоциационные классы:** `Extend` и `Include` — это одновременно классификаторы (с атрибутами) и стереотипы ассоциаций. В XMI они представлены дважды: как `uml:Class` (в пакете UseCases) и как элементы `type="Extend"`/`type="Include"` в концах ассоциаций. При реализации на странице справочника нужно показать и их атрибуты, и концы ассоциации (ownedEnd).
2. **Figure 18.1** находится на странице 637 (PDF-индекс 679), до начала раздела 18. Это диаграмма пакета UseCases — показывает структуру пакета, включая все contained элементы. При генерации SVG потребует ссылки на страницу пакета.
3. **Рисунок 18.12** ссылается на `StateMachine` (раздел 14) — ссылка должна вести в раздел 14.
4. **Нумерация TOC:** В текстовом дампе подразделы 18.1 и 18.2 имеют одинаковый уровень отступа (строки 1493–1495), но по смыслу это родитель и подчинённые элементы. Фактически 18 → 18.1/18.2/18.3 — три под-раздела первого уровня после заголовка.

### Нотация Actors (Figure 18.6–18.8)
Три варианта нотации акторов: stick-man, прямоугольник класса, иконка-символ. Все три нужно перерисовать как интерактивные SVG с поддержкой кликов по ссылкам. Figure 18.8 — иконка для нечеловеческих акторов (системы, устройства).

### Ключевые ограничения (OCL)
- `Actor-associations`: Актер может взаимодействовать только с UseCase, Component и Class; все ассоциации бинарны (`a.memberEnd->size() = 2`).
- `Actor-must_have_name`: Имя актера обязательно (`name->notEmpty()`).
- `Extend-extension_points`: ExtensionPoints из Extend должны принадлежать extendedUseCase.
- `UseCase-spec` (allIncludedUseCases): Query возвращает транзитивное замыкание всех включённых вариантов использования.

### Страницы диапазона (проверено по TOC и PDF)
- Печатные страницы: **639–652** (14 страниц, TOC строки 1493–1520)
- PDF-индексы: **680–693** (сдвиг +41: print_page + 41 = pdf_index; раздел 18 начинается с PDF 680 заголовком "18", заканчивается перед PDF 694 где нач. раздел 19)
- Раздел 19 (Deployments) начинается на странице 653 (PDF-индекс 694).

### Потенциальные проблемы реализации
- `Extend` и `Include` атрибуты дублируются: как ownedAttribute класса и как концы ассоциации. Нужно аккуратно разделять в описании.
- Ассоциация `A_subject_useCase` имеет тип конца `Classifier` (обобщение), а не конкретный класс — работает для Class, Component, Interface и др.
- `A_extensionPoint_useCase` и `A_include_includingCase` имеют короткие блоки ownedEnd в XMI (концы определены вне пакета UseCases через memberEnd). Фактические типы: ExtensionPoint/UseCase и Include/UseCase соответственно.
