# Черновик реестра раздела 12: Packages (Пакеты)

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

---

*Черновик сгенерирован автоматически по XMI (`UML-2.5.1.xmi`) и PDF спецификации.*
