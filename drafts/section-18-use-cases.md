# Черновик реестра раздела 18 «UseCases» (Варианты использования)

## Метаинформация

- Подготовлено: 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия не фиксировались.
- Промпт: черновик реестра раздела 18 UseCases OMG UML 2.5.1 (стр. 639–652): подразделы, классификаторы/ассоциации из XMI (UseCases), рисунки, замечания; ≤200k токенов; только официальные источники.
- Проверка: 2025-11-22, сверка с дампом/XMI; уточнено дерево подразделов, расширены замечания (OCL Actor-must_have_name, Extend-extension_points).
- Состав: конфигурация, подразделы, классификаторы, ассоциации, рисунки, замечания, план иллюстраций, межраздельные ссылки, рекомендации по скриптам.
- Критерий адекватности: числа сходятся с XMI и текстом; расхождения — в «Замечаниях и рисках».

---

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

## План иллюстраций

| Рисунок | Страница | Тип | Сложность SVG | Приоритет |
|---------|----------|-----|---------------|-----------|
| Figure 18.1 UseCases | 637 | Диаграмма пакета (метамодель) | Низкая — прямоугольники пакетов/классов, связи Package→Element | Высокий (общий обзор) |
| Figure 18.2 Class diagram… | 641 | Метамодель: Package owning UseCases/Actors/Subsystem | Средняя — классификаторы + ассоциации Package/Actor/UseCase/Subsystem | Высокий |
| Figure 18.3 Example Extend | 641 | Диаграмма вариантов использования (пример) | Средняя — 3 UC, 1 Actor, 2Extend с ExtensionPoint и условием | Высокий |
| Figure 18.4 Example Include | 642 | Диаграмма вариантов использования (пример) | Низкая — 2 UC, 1 Include-связь | Высокий |
| Figure 18.5 UseCase using Classifier rectangle notation | 642 | Метамодель: UC как прямоугольник класса | Низкая — один класс с compartment для use cases | Средняя (справочная нотация) |
| Figure 18.6 Actor notation using stick-man | 642 | Нотация актора (иконка-человек) | Низкая — stickman + 1 UC | Средняя |
| Figure 18.7 Actor notation using Class rectangle | 642 | Нотация актора (прямоугольник класса) | Низкая — прямоугольник Actor + 1 UC | Средняя |
| Figure 18.8 Actor notation using icon | 642 | Нотация актора (символ-иконка для нечеловека) | Низкая — иконка + 1 UC (система/устройство) | Средняя |
| Figure 18.9 Notation for UseCase owned by Classifier | 643 | Метамодель: UC внутри Classifier compartment | Средняя — класс с compartment «Use Cases» | Высокий |
| Figure 18.10 Example ATM system… | 643 | Диаграмма вариантов использования (пример) | Высокая — 5+ Actor/UC, Include/Extend связи, 2 Actor-группы | Высокий |
| Figure 18.11 Example UseCases owned by Packages | 644 | Метамодель: Package с OwnedUseCase compartment | Средняя — 2 Package, UC внутри | Высокий |
| Figure 18.12 Example UseCase with associated StateMachine | 644 | Диаграмма: UC с поведением (StateMachine) | Средняя — UC → dependency/stateMachine | Средняя |

**Отдельно:** Figure 18.1 — диаграмма пакета UseCases. Низкая сложность: Package-блок, вложенные Class-блоки (Actor, Extend, ExtensionPoint, Include, UseCase), Association-линии, обобщения к предкам из других пакетов. SVG с кликабельными классами на страницы 18.2.x, ссылка на пакет UseCases (если будет страница пакета).

---

## План межраздельных ссылок

| Элемент | Связанный элемент | Раздел | Тип связи |
|---------|-------------------|--------|-----------|
| Actor | BehavioredClassifier | 11 | Наследование (generalization) |
| Actor | Classifier | 9 | A_subject_useCase.end `subject` (тип Classifier) |
| UseCase | BehavioredClassifier | 11 | Наследование (generalization) |
| UseCase | NamedElement | 9 | inherited через BehavioredClassifier |
| Extend | Association | 9.1 | Стереотип association-class; наследуёт Association properties |
| Extend | RedefinableElement | 9 | inherited через DirectedRelationship/NamedElement (через Association) |
| Include | Association | 9.1 | Стереотип association-class |
| Include | RedefinableElement | 9 | inherited как Extend |
| ExtensionPoint | NamedElement | 9 | direct; must_have_name constraint |
| A_extensionPoint_useCase | — | общий | ends: extensionPoint:ExtensionPoint[0..*], useCase:UseCase[0..*] |
| A_include_includingCase | — | общий | ends: include:Include[0..*], includingCase:UseCase[0..*] |
| Figure 18.2 Subsystem stereotype | Component | 22 (Components) | Stereotype «Subsystem» на Class → Component |
| Figure 18.12 StateMachine | BehaviorState / ProtocolState | 14 | dependency/useCase::ownedBehavior:StateMachine |
| UseCase.allIncludedUseCases() | Activity | 13 | behavior of UseCase (OCL specification в секции Semantics) |

**Примечание:** Extend и Include — ассоциационные классы, наследующие свойства `Association` из раздела 9.1: `source`, `target`, `name`, `visibility`, `isReadOnly`, `isSpecializable`, `memberEnd`, `navMemberEnd`, `isDerivedAll`, `subsettedProperty`, `redefinedProperty`, `isNonUnique`, `isOrdered`, `isChangeable`.

---

## Применение текущих скриптов для раздела 18

### Пайплайн этапов
1. **Этап 1 (prepare):** `python scripts/section_pipeline.py --clause 18 --stage 1` — извлечение заголовков, объектов XMI, рисунков, маршрутов и плана интеграции в `site/docs/uml-2.5.1-use-cases-inventory.json`.
2. **Этап 2 (scaffold):** `python scripts/section_pipeline.py --clause 18 --stage 2` + ручной ввод русских описаний из черновика — `drafts/section-18-use-cases.md`.
3. **Этап 3 (XMI sync):** `python scripts/section_pipeline.py --clause 18 --stage 3`: `scripts/sync_xmi_properties.py` для файлов классов Actor, Extend, ExtensionPoint, Include, UseCase в `site/data/xmi/`.
4. **Этап 4 (build):** `python scripts/section_pipeline.py --clause 18 --stage 4`: `scripts/build_site.py` для генерации страниц и поискового индекса.
5. **Этап 5 (SVG render):** `scripts/generate_classification_svg.py` для 12 рисунков; SVG-билдеры должны поддерживать `association-class` (Extend/Include с атрибутами).
6. **Этап 6 (validate):** `python scripts/section_pipeline.py --clause 18 --stage 6`: `scripts/validate_site.py --clause 18 --static-only`.

### Особенности конфигурации sections.json
- Ключ: `"18"`, classifier_catalog = `"18.2"`, association_catalog = `"18.3"`.
- Первый классификатор (Actor) на стр. 647, но раздел начинается с 639 — это нормально, TOC уже содержит номер стартовой страницы.
- Figure 18.1 находится вне диапазона страниц раздела (стр. 637 vs 639–652): в SVG-билдере нужно предусмотреть ссылку на страницу пакета или общий каркас, а не на раздел 18.

### Модернизация скриптов
1. **scaffold_section.py:** поддержка ассоциационных классов — при создании страницы для `Extend`/`Include` выводить два блока: атрибуты класса и концы ассоциации (ownedEnd), сгенерированные из соответствующих XMI-блоков.
2. **generate_classification_svg.py / SVG-билдеры:** добавить параметр `association_class=True`, чтобы при рендеринге классов-ассоциаций рисовать не только прямоугольник класса, но и подписи концов ассоциации (как для Association), с пересечением атрибутов/кратностей.
3. **Обработка внедиапазонных рисунков:** в пайплайне этапа 1 при обнаружении `Figure N.x` на странице < first_page или > last_page автоматически помечать его как «вне диапазона» и генерировать ссылку-заглушку (например, на страницу пакета или раздел общего каркаса).
4. **cross_references в pages-фрагментах:** `build_site.py` должен автоматически добавлять межраздельные ссылки из Generalization и Dependency элементов XMI при формировании HTML-страниц классификаторов.

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
