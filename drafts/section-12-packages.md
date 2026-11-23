# Черновик реестра раздела 12: Packages (Пакеты)

> **Метаинформация о черновике**
> - **Подготовлено:** 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия модели не фиксировались.
> - **Исходная задача:** черновик реестра раздела 12 *Packages* OMG UML 2.5.1 (стр. 241–284; включает Packages 12.1–12.2 и Profiles 12.3) для переноса в справочник: подразделы, классификаторы/ассоциации из XMI, рисунки, замечания; ≤200k токенов; только официальные источники.
> - **Проверка:** 2025-11-22 — сверка с дампом текста (regex `^(\d+\.\d+(?:\.\d+)*)\s+(.+?)\.{3,}\s+(\d{3})$`) и XMI; исправлены last_page 326→284, рисунки 27→30, удалены ошибочные упоминания «Dependencies» как раздела.
> - **Состав:** конфигурация `sections.json`, дерево подразделов (37 заголовков), классификаторы (9), ассоциации (14), рисунки (30), замечания и риски, план иллюстраций, план межраздельных ссылок, рекомендации по скриптам.
> - **Критерий адекватности:** числа должны сходиться с XMI и текстом спецификации; расхождения отмечены в «Замечаниях и рисках».

Спецификация: OMG UML 2.5.1, formal/17-12-05
Диапазон печатных страниц: **241–284** (PDF p283–p326)

## Блок конфигурации для `scripts/sections.json`

```json
{
  "title": "Packages",
  "title_ru": "Пакеты",
  "slug": "packages",
  "package": "Packages",
  "first_page": 241,
  "last_page": 284,
  "classifier_catalog": "12.4",
  "association_catalog": "12.5",
  "source": "site/docs/omg-uml-2.5.1-formal-17-12-05.txt"
}
```

## Дерево подразделов

| Номер | Заголовок | Печатная страница |
|-------|-----------|-------------------|
| **12.1** | **Summary** | 241 |
| **12.2** | **Packages** | 241 |
| **12.3** | **Profiles** | 252 |
| **12.4** | **Classifier Descriptions** | 273 |
| **12.5** | **Association Descriptions** | 281 |

### Вложенные подразделы 12.2 (Packages) и 12.3 (Profiles)

| Номер | Заголовок | Печатная страница |
|-------|-----------|-------------------|
| 12.2.1 |   Summary | 241 |
| 12.2.2 |   Abstract Syntax | 241 |
| 12.2.3 |   Semantics | 241 |
| 12.2.3.1 |     Package | 241 |
| 12.2.3.2 |     PackageMerge | 242 |
| 12.2.3.3 |     General Package Merge Rules | 244 |
| 12.2.3.4 |     Package Rules | 245 |
| 12.2.3.5 |     Class and DataType Rules | 245 |
| 12.2.3.6 |     Property Rules | 246 |
| 12.2.3.7 |     Association Rules | 246 |
| 12.2.3.8 |     Operation Rules | 247 |
| 12.2.3.9 |     Enumeration Rules | 247 |
| 12.2.3.10 |     Constraint Rules | 247 |
| 12.2.3.11 |     Model | 247 |
| 12.2.4 |   Notation | 248 |
| 12.2.5 |   Examples | 249 |
| 12.3.1 |   Summary | 252 |
| 12.3.1.1 |     Positioning Profiles versus Metamodels, MOF and UML | 252 |
| 12.3.2 |   Abstract Syntax | 253 |
| 12.3.3 |   Semantics | 253 |
| 12.3.3.1 |     Profiles | 253 |
| 12.3.3.1.1 |       Restricting Availability of UML Elements | 253 |
| 12.3.3.1.2 |       Integrating and Extending Profiles | 255 |
| 12.3.3.1.3 |       MOF-Equivalent Semantics | 255 |
| 12.3.3.2 |     Defining Profiles for Non-UML Metamodels | 258 |
| 12.3.3.3 |     ProfileApplication | 259 |
| 12.3.3.4 |     Stereotypes | 259 |
| 12.3.3.5 |     Images | 260 |
| 12.3.3.6 |     Extensions | 260 |
| 12.3.3.7 |     ExtensionEnd | 262 |
| 12.3.4 |   Notation | 262 |
| 12.3.4.1 |     Icon presentation | 263 |
| 12.3.5 |   Examples | 264 |

## Классификаторы раздела (каталог **12.4** — Classifier Descriptions)

| N | Англ. имя | Тип | Подраздел | Стр. | Attr | Ops | Rules | Обобщения | Краткое описание (ru) |
|---|-----------|-----|-----------|------|------|-----|-------|-----------|------------------------|
| 1 | `Extension` | Class | 12.4.1 | 273 | 3 | 3 | 2 | Association | Определяет расширение стереотипа на метакласс; создаёт связь между Stereotype и типом расширени |
| 2 | `ExtensionEnd` | Class | 12.4.2 | 274 | 2 | 1 | 2 | Property | Конец расширения; указывает тип (Stereotype), к которому применяется stereotype. |
| 3 | `Image` | Class | 12.4.3 | 275 | 3 | 0 | 0 | Element | Изображение для визуального представления stereotype в нотации. |
| 4 | `Model` | Class | 12.4.4 | 275 | 1 | 0 | 0 | Package | Специализация Package, представляющая модель как контейнер пакетированных элементов. |
| 5 | `Package` | Class | 12.4.5 | 276 | 8 | 8 | 1 | PackageableElement, TemplateableElement, Namespace | Базовая единица организации; содержит элементы и поддерживает package merge/import. |
| 6 | `PackageMerge` | Class | 12.4.6 | 278 | 2 | 0 | 0 | DirectedRelationship | Направленная связь: объединяет содержимое mergedPackage в receivingPackage по правилам. |
| 7 | `Profile` | Class | 12.4.7 | 278 | 2 | 0 | 2 | Package | Расширение UML для добавления доменно-специфичной метамодели (стереотипы, др.). |
| 8 | `ProfileApplication` | Class | 12.4.8 | 279 | 3 | 0 | 0 | DirectedRelationship | Применение Profile к Package; указывает, что стереотипы должны быть применены. |
| 9 | `Stereotype` | Class | 12.4.9 | 280 | 2 | 2 | 7 | Class | Механизм расширения метамодели; определяет новый метакласс как specialization Class. |

## Ассоциации раздела (каталог **12.5** — Association Descriptions)

| N | Англ. имя | Конец 1 | Конец 2 | Описание (ru) |
|---|-----------|---------|---------|---------------|
| 1 | `A_appliedProfile_profileApplication` | appliedProfile: Profile | profileApplication: ProfileApplication | Применённый Profile и его application-запись. |
| 2 | `A_icon_stereotype` | icon: Image | stereotype: Stereotype | Иконка (Image), ассоциированная со Stereotype. |
| 3 | `A_mergedPackage_packageMerge` | mergedPackage: Package | packageMerge: PackageMerge | Слитый Package и запись PackageMerge. |
| 4 | `A_metaclassReference_profile` | metaclassReference: ElementImport | profile: Profile | Импортированный метакласс в Profile. |
| 5 | `A_metamodelReference_profile` | metamodelReference: PackageImport | profile: Profile | Импортируемый метамодельный Package в Profile. |
| 6 | `A_nestedPackage_nestingPackage` | nestedPackage: Package | nestingPackage: Package | Вложенные пакеты и их владелец. |
| 7 | `A_ownedEnd_extension` | ownedEnd: ExtensionEnd | extension: Extension | Конец ownedEnd (ExtensionEnd) и его родительский Extension. |
| 8 | `A_ownedStereotype_owningPackage` | ownedStereotype: Stereotype | owningPackage: Package | Стереотипы, определённые в Package. |
| 9 | `A_ownedType_package` | ownedType: Type | package: Package | Типы, владеемые Package. |
| 10 | `A_packageMerge_receivingPackage` | packageMerge: PackageMerge | receivingPackage: Package | Результат слияния (receivingPackage) и запись merge. |
| 11 | `A_packagedElement_owningPackage` | packagedElement: PackageableElement | owningPackage: Package | Пакетированные элементы и их владелец Package. |
| 12 | `A_profileApplication_applyingPackage` | profileApplication: ProfileApplication | applyingPackage: Package | Package, к которому применён ProfileApplication. |
| 13 | `A_profile_stereotype` | profile: Profile | stereotype: Stereotype | Profile, владеющий Stereotype. |
| 14 | `A_type_extensionEnd` | type: Stereotype | extensionEnd: ExtensionEnd | Тип (Stereotype) для ExtensionEnd. |

## Рисунки раздела 12 (Figures)

| N | ID рисунка | Подпись | Стр. |
|---|------------|---------|------|
| 1 | Figure 12.1 | Packages | p 241 |
| 2 | Figure 12.2 | Illustration of the Meaning of Package Merge | p 242 |
| 3 | Figure 12.3 | Conceptual View of the Package Merge Semantics | p 243 |
| 4 | Figure 12.4 | Notation for Package Merge | p 249 |
| 5 | Figure 12.5 | Examples of a Package with Members | p 249 |
| 6 | Figure 12.6 | Simple Example of Package Merge | p 250 |
| 7 | Figure 12.7 | Simple Example of Transformed Packages Following the Merges | p 250 |
| 8 | Figure 12.8 | Introducing Additional Package Merges | p 251 |
| 9 | Figure 12.9 | Result of the Additional Package Merges | p 251 |
| 10 | Figure 12.10 | Three Models Representing Parts of a System | p 251 |
| 11 | Figure 12.11 | Two Views of One System Collected in a Container Model | p 252 |
| 12 | Figure 12.12 | Profiles | p 253 |
| 13 | Figure 12.13 | Using the HomeExample Profile to Extend a Model | p 257 |
| 14 | Figure 12.14 | Specification of an Available Metaclass | p 259 |
| 15 | Figure 12.15 | MOF Model Equivalent to Extending "Interface" by the "Home" Stereotype | p 261 |
| 16 | Figure 12.16 | Example of Multiple Metaclass Extension | p 261 |
| 17 | Figure 12.17 | MOF Model Equivalent to Multiple Metaclass Extension | p 262 |
| 18 | Figure 12.18 | The Notation for an Extension | p 262 |
| 19 | Figure 12.19 | Example of Using an Extension | p 264 |
| 20 | Figure 12.20 | Example of a Required Extension | p 262 |
| 21 | Figure 12.21 | Defining a Simple EJB Profile | p 265 |
| 22 | Figure 12.22 | Importing a Package from a Profile | p 265 |
| 23 | Figure 12.23 | Profiles Applied to a Package | p 266 |
| 24 | Figure 12.24 | Defining a Stereotype | p 266 |
| 25 | Figure 12.25 | Presentation Options for an Extended Class | p 266 |
| 26 | Figure 12.26 | An Instance Diagram when Defining a Stereotype | p 266 |
| 27 | Figure 12.27 | Defining Multiple Stereotypes on Multiple Stereotypes | p 267 |
| 28 | Figure 12.28 | Using a Stereotype | p 267 |
| 29 | Figure 12.30 | Using Stereotypes and Showing Values | p 267 |
| 30 | Figure 12.33 | Diagram example of applying a profile defining Classes and Associations and of creating inst... | p 272 |

## План иллюстраций (30 рисунков)

Каждый рисунок раздела 12 требует интерактивной SVG-диаграммы с ссылками на страницы классификаторов. Ниже — каталог с категоризацией и приоритетами.

### Рисунок | Страница | Тип | Сложность SVG | Приоритет
|---------|----------|-----|---------------|-----------
| Figure 12.1 | p 241 | Profiles (общий вид) | Средняя: один Package с Application | **Высокий** — вводный рисунок раздела
| Figure 12.2 | p 242 | Package Merge (семантика) | **Высокая**: три пакета P1/P2/P3 со связями merge, стрелки направления
| Figure 12.3 | p 243 | Package Merge (концепт.) | **Высокая**: концептуальная диаграмма семантики, не UML; требует специального оформления
| Figure 12.4 | p 249 | Package Merge (нотация) | Средняя: стрелка с полупустым треугольником merge-стрелки
| Figure 12.5 | p 249 | Package (пример) | Низкая: Package с двумя элементами A, B
| Figure 12.6 | p 250 | Package Merge (пример) | **Высокая**: P1 ∪ P2 = R; требует аннотаций слияния
| Figure 12.7 | p 250 | Package Merge (трансформ.) | Высокая: концептуальные пакеты до/после merge
| Figure 12.8 | p 251 | Package Merge (дополнит.) | Средняя: добавление T в R, S
| Figure 12.9 | p 251 | Package Merge (результат) | Высокая: итоговый пакет с объединёнными элементами
| Figure 12.10 | p 251 | Profiles (системный обзор) | Низкая: три пакета — системные части
| Figure 12.11 | p 252 | Profiles (контейнер.) | **Высокий** — ключевой вводный рисунок Profiles: ContainerModel с двумя видами
| Figure 12.12 | p 253 | Profiles (общий вид) | Высокая: Profile, Stereotype, Application и связанные классы
| Figure 12.13 | p 275 | Profiles/стереотипов (пример) | **Высокая**: HomeExample профиль, Interface с стереотипом, значения стереотипа
| Figure 12.14 | p 279 | Profiles (метакласс) | Средняя: Profile P1 импортирует P2, метакласс-ссылка
| Figure 12.15 | p 281 | Profiles/стереотипов (MOF) | **Высокая**: MOF-эквивалент — Package → PackageableElement → NamedElement иерархия
| Figure 12.16 | p 281 | Profiles/стереотипов (пример) | Высокая: multiple metaclass extension (Interface + Property → Stereotype)
| Figure 12.17 | p 282 | Profiles (MOF-эквивалент) | Высокая: MOF Package для multiple extension
| Figure 12.18 | p 262 | Extension (нотация) | Низкая: стрелка extension с мульт. 0..1 / 0..*
| Figure 12.19 | p 264 | Profiles/стереотипов (пример) | Высокая: Stereotype Home extends Interface — требует XMI-эквивалента
| Figure 12.20 | p 262 | Extension (обязат.) | Средняя: Required Extension, компонент Component
| Figure 12.21 | p 265 | Profiles/стереотипов (пример) | **Высокая**: EJB профиль — Bean stereotypes на Component metaclass
| Figure 12.22 | p 265 | Profiles (импорт пакета) | Средняя: Package Types импортируется Profile
| Figure 12.23 | p 266 | Profiles/стереотипов (пример) | Высокая: профиль наложен на Package, stereotype values visible
| Figure 12.24 | p 266 | Profiles/стереотипов (определение) | Высокая: Clock Stereotype — определение с属性和 stereotypes
| Figure 12.25 | p 266 | Нотация (представление) | Низкая: варианты отображения extended class
| Figure 12.26 | p 266 | Profiles/стереотипов (instance) | **Высокая**: instance diagram stereotype definitions — метауровень
| Figure 12.27 | p 267 | Profiles/стереотипов (multiple) | Высокая: Clock + Creator на Component и Property одновременно
| Figure 12.28 | p 267 | Profiles/стереотипов (применение) | Высокая: Stereotype Clock applied to StopWatch class
| Figure 12.29 | p 267 | Profiles/стереотипов (семантика) | **Высокая**: семантика application — link instances метауровня
| Figure 12.30 | p 267 | Нотация (варианты) | Средняя: альтернативные нотации stereotype values
| Figure 12.31 | p 268 | Нотация (альтернативы) | Низкая: другие формы stereotype values
| Figure 12.32 | p 270 | Profiles/стереотипов (классы+асс.) | **Высокая**: профиль определяет классы и бинарные ассоциации — сложный diagram
| Figure 12.33 | p 272 | Profiles/стереотипов (пример) | **Высокая**: применение профиля с созданием instances — многострочная подпись

### Примечания к иллюстрациям:
- **Рисунки Package Merge (Figs 12.2–12.9, особенно 12.3):** требуют особой SVG-логики для отображения семантики слияния пакетов; Figure 12.3 — концептуальная диаграмма (не UML), нуждается в специальном стиле оформления.
- **Рисунки Profiles/стереотипов (Figs 12.15, 12.16, 12.26, 12.29, 12.32):** метауровень (моเดล → метамодель) требует визуального разделения слоёв; рекомендуется цветовая кодировка: синий — модельный уровень, зелёный — метамодельный, оранжевый — stereotype-расширения.
- **Figure 12.11:** ключевой для понимания концепции ContainerModel — приоритет высокой SVG-качества.

## Статистика (по страницам 241–284)

| Метрика | Значение |
|---------|----------|
| Заголовков подразделов всего (включая вложенные) | 37 |
| Классификаторов в каталоге 12.4 | 9 |
| Ассоциаций в каталоге 12.5 | 14 |
| Рисунков (Figure 12.*) | 30 |
| Всего атрибутов (ownedAttribute) | 26 |
| Всего операций (ownedOperation) | 14 |
| Всего ограничений (ownedRule) | 14 |
| Количество NOTE | 10 |

## План межраздельных ссылок (cross-references)

Элементы раздела 12 опираются на классификаторы из других разделов UML. Ниже — таблица всех связей, необходимых для навигации в справочнике.

| Элемент раздела 12 | Связанный элемент | Раздел источника | Тип связи |
|-------------------|-------------------|-----------------|-----------|
| `Package` | `PackageableElement` | 7 (CommonStructure) | наследование: Package ⊂ PackageableElement |
| `Package` | `Namespace` | 7 (CommonStructure) | наследование: Package ⊂ Namespace |
| `Package` | `TemplateableElement` | 7 (CommonStructure) | наследование: Package ⊂ TemplateableElement |
| `Profile` | `Package` | 12.4.5 | наследование: Profile ⊂ Package |
| `Stereotype` | `Class` | 9 (Classification) | наследование: Stereotype ⊂ Class |
| `Extension` | `Association` | 7/9 | наследование: Extension ⊂ Association |
| `ExtensionEnd` | `Property` | 7 (CommonStructure) | наследование: ExtensionEnd ⊂ Property |
| `Image` | `Element` | 7 (CommonStructure) | наследование: Image ⊂ Element |
| `Model` | `Package` | 12.4.5 | наследование: Model ⊂ Package |
| `ProfileApplication` | `DirectedRelationship` | 7 (CommonStructure) | наследование: ProfileApplication ⊂ DirectedRelationship |
| `PackageMerge` | `DirectedRelationship` | 7 (CommonStructure) | наследование: PackageMerge ⊂ DirectedRelationship |
| `A_ownedStereotype_owningPackage` | `ownedStereotype` | 12.4.9 Stereotype | ownedEnd: Stereotype-icon |
| `A_metaclassReference_profile` | `ElementImport` | 7 (CommonStructure) | ассоциация конца: метакласс-ссылка |
| `A_metamodelReference_profile` | `PackageImport` | 7/9 | ассоциация конца: пакетный импорт |
| `A_packagedElement_owningPackage` | `PackageableElement` | 12.4 / 7 | наследование: PackageableElement ⊂ Element |
| `Type` (ассоциация A_ownedType) | `Class` | 9 (Classification) | тип — классификатор |
| `Stereotype`-механизм | `Class` (метакласс) | 9 (Classification) | механизм расширения: Stereotype extends Class |

### Примечания к ссылкам:
- Класс `Stereotype` из раздела 12 — наследник `Class` из раздела 9 (Classification). В справочнике навигация должна идти от Stereotype → Class.
- Ассоциация `A_ownedStereotype_owningPackage` и `A_profile_stereotype` связывают Stereotype с Profile; в XMI Stereotype-icon — ownedEnd, а не ассоциация.
- PackageableElement (12.4.11) ссылается на метакласс из CommonStructure; ссылка должна вести на страницу #/classifier/PackageableElement.

## Замечания и риски

### 1. Структура раздела

Раздел 12 состоит из пяти подразделов: Summary, Packages (семантика package merge),
Profiles (расширение UML), Classifier Descriptions (9 классов) и Association Descriptions
(14 ассоциаций). Подраздел Profiles (12.3) занимает ~50 страниц из 86.

### 2. Глубокая вложенность подразделов

Иерархия подразделов Profiles достигает глубины `12.3.3.1.N` (напр., `12.3.3.1.2`).
Это усложняет навигацию при создании справочника.

### 3. Figure 12.3 — не UML-диаграмма

В спецификации указано: `NB: this is not a UML diagram`. Это концептуальная диаграмма
семантики слияния пакетов.

### 4. Неполные подписи рисунков при извлечении из TOC

Фигуры 12.32 и 12.33 имеют многострочные подписи в оригинале.
В черновике приведены обрезанные варианты; для финальной версии требуется ручная проверка.

### 5. Отсутствие перечислений в пакете Packages

Все 9 классификаторов — обычные или абстрактные классы. Enumeration отсутствуют.

### 6. Внешние зависимости из XMI
| Элемент | Источник |
|---------|----------|
| `Association` | Common Structure / Classification |
| `Class` | Common Structure / Classification |
| `DirectedRelationship` | Common Structure / Classification |
| `Element` | Common Structure / Classification |
| `ElementImport` | Common Structure / Classification |
| `Namespace` | Common Structure / Classification |
| `PackageImport` | Common Structure / Classification |
| `PackageableElement` | Common Structure / Classification |
| `Property` | Common Structure / Classification |
| `TemplateableElement` | Common Structure / Classification |
| `Type` | Common Structure / Classification |

### 7. Page 284 — последний раздел каталога

На странице 284 завершается описание ассоциации `A_type_extensionEnd` (12.5.14).
Страница 285 начинается подраздел `13.1 Summary` раздела Common Behavior.

## План пайплайна для раздела 12

Согласно AGENTS.md, перенос раздела следует шестиэтапному плану. Ниже — поэтапный план с учётом специфики раздела 12 Packages.

### Этап 1: prepare_section.py
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 1`
- **Действие:** извлечение текста PDF pp 241–284, регистр заголовков, XMI-пакет `Packages`, список классификаторов/ассоциаций.
- **Особенность:** раздел 12 содержит два логических подпакета — `Packages` (семантика PackageMerge) и `Profiles` (стереотипы). Подготовить реестр для обоих.

### Этап 2: scaffold_section.py
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 2`
- **Действие:** создание заготовок HTML-страниц из реестра.
- **Особенность:** классификаторы Package, Profile, Stereotype требуют навигации к разделам 7 и 9; в заглушках проставить placeholder'ы ссылок `#/classifier/Package`, `#/classifier/Class`.

### Этап 3: sync_xmi_properties.py
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 3`
- **Действие:** синхронизация XMI-свойств (attrs, ops, constraints) и генерация отдельных файлов `site/data/xmi/<Class>.js`.
- **Особенность:** Association `A_ownedStereotype_owningPackage` — ownedEnd vs memberEnd; Extension наследует от Association.

### Этап 4: build_site.py
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 4`
- **Действие:** построение HTML, маршрутов, навигации и поискового индекса.
- **Особенность:** маршруты должны включать ссылки на связанные разделы (7, 9, 11, 21) для cross-references.

### Этап 5: SVG-generators
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 5`
- **Действие:** генерация 30 интерактивных SVG диаграмм.
- **Особенность:** 
  - Нужен новый билдер для PackageMerge-диаграмм (стрелки merge-направленности).
  - Существующий `generate_classification_svg.py` поддерживает Stereotype; расширить для Profile-application нотации.
  - Figure 12.3 требует специального SVG-стиля (не UML).

### Этап 6: validate_site.py
- **Команда:** `python scripts/section_pipeline.py --clause 12 --stage 6 --static-only`
- **Действие:** проверка SVG, ссылок, полноты текста.
- **Особенность:** проверить корректность cross-references к разделам 7, 9, 11, 21.

### Обновление `sections.json` (новое вхождение):
```json
{
  "title": "Packages",
  "title_ru": "Пакеты",
  "slug": "packages",
  "package": "Packages",
  "first_page": 241,
  "last_page": 284,
  "classifier_catalog": "12.4",
  "association_catalog": "12.5",
  "source": "site/docs/omg-uml-2.5.1-formal-17-12-05.txt",
  "data": "site/data/packages.js",
  "svg_generator": "generate_classification_svg.py",
  "expected": {
    "headings": 37,
    "classifiers": 9,
    "associations": 14,
    "figures": 30,
    "attributes": 26,
    "operations": 14,
    "constraints": 14,
    "notes": 10
  }
}
```

## Рекомендации по модернизации скриптов

### 1. SVG-билдер: поддержка Extension / Stereotype нотации
Существующий `generate_classification_svg.py` рисует обобщения и ассоциации в едином стиле. Для раздела 12 необходимо добавить:
- Стилизованные стрелки extension (от ExtensionEnd к Stereotype с мульт. 0..1).
- Подпись stereotype-icon как отдельный элемент подсказки (Image-объект).
- Валидацию: проверять `ownedEnd` vs `memberEnd` для каждого конца ассоциации при генерации SVG.

### 2. Новый билдер диаграмм PackageMerge
PackageMerge требует специфической визуализации:
- Направление merge от mergedPackage к receivingPackage (стиль стрелки, аналогичный DirectedRelationship, но с дополнительной аннотацией).
- Три пакета в каждой фигуре: P_merged, P_receiving, P_result.
- Рекомендация: добавить `scripts/classification_figures_packagemerge.py` как отдельный builder с методами layout и highlight.

### 3. Ecore / MOF-профили для SVG
Фигуры 12.15–12.17 содержат MOF-эквиваленты — диаграммы метауровня:
- Добавить визуальную рамку «MOF layer» в SVG-билдеры (пунктирная граница + лейбл).
- Двухцветная схема: синий = модельный уровень, зелёный = метамодельный.

### 4. Расширение validate_site.py для cross-references
Добавить проверку:
- Все элементы, наследуемые из других разделов (PackageableElement, Namespace, Class, Property, ElementImport), имеют рабочие ссылки `#/classifier/<Name>`.
- Проверяется присутствие каждой ссылки в генерируемом поисковом индексе.

### 5. Поддержка многострочных подписей рисунков
Для Figure 12.32 и 12.33 (многострочные TOC-подписи):
- Добавить в SVG-билдер парсер multi-line captions с автоматическим переносом текста в SVG `<text>` блоках.
- Использовать `textLength` и `lengthAdjust="spacing"` для точного выравнивания.

### 6. Генерация кросс-референсов из XMI автоматически
Скрипт `sync_xmi_properties.py` может автоматически:
- Собирать все внешние типы (через `generalization.general` и ассоциативные `type`).
- Сопоставлять их с разделами по имени пакета XMI.
- Вставлять markdown-ссылки в генерируемые страницы.

### 7. Поддержка stereotype application notation в SVG
Для рисунков 12.23, 12.26, 12.29 — нотация «stereotype applied to class»:
- Добавить в билдер отрисовку `{«stereotype»}` над классом (как в UML-ноутбуке).
- Отдельный слой `g.stereotype-values` для отображения property values стереотипа.

---

*Черновик сгенерирован автоматически по XMI (`UML-2.5.1.xmi`) и PDF спецификации.*
