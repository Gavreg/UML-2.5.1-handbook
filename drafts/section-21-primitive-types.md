# Реестр раздела 21 PrimitiveTypes (Примитивные типы)

Черновик, аналог этапа 1 (inventory). Источник: OMG UML 2.5.1 formal/17-12-05.

---

## Конфигурация для sections.json

```json
"21": {
    "title": "PrimitiveTypes",
    "title_ru": "Примитивные типы",
    "slug": "primitive-types",
    "package": "PrimitiveTypes",
    "first_page": 677,
    "last_page": 678,
    "classifier_catalog": "21.2",
    "association_catalog": null,
    "source": {
        "pdf": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf",
        "xmi": "site/docs/UML-2.5.1.xmi",
        "text_dump": "site/docs/omg-uml-2.5.1-formal-17-12-05.txt"
    },
    "diagram_catalog": {
        "folder": "site/assets/diagrams/",
        "figure_prefix": "Figure 21."
    }
}
```

---

## Дерево подразделов

| № | Заголовок | Печ. стр. |
|---|-----------|-----------|
| 21 | Primitive Types | 677 |
| 21.1 | Summary | 677 |
| 21.2 | Semantics | 677 |
| 21.3 | Notation | 677 |
| 21.4 | Examples | 677 |

**Итого подразделов: 5** (включая главный раздел и подразделы первого уровня; **нет вложенных подразделов второго/третьего уровня**)

---

## Классификаторы (пакет PrimitiveTypes из XMI)

### Конфигурационное замечание

Пакет `PrimitiveTypes` в OMG UML 2.5.1 имеет особую структуру. В отличие от других разделов, где классификаторы — это отдельные классы XMI с собственными атрибутами и операциями, здесь:

- `PrimitiveType` (XMI id = `PrimitiveType`) — **единственный** классификатор пакета, абстрактный `uml:Class`, наследующийся от `DataType`.
- Пять конкретных примитивных типов (**Integer**, **Boolean**, **String**, **UnlimitedNatural**, **Real**) — это **экземпляры (instance/literals) PrimitiveType**, определяемые во внешнем файле `PrimitiveTypes.xmi` и ссылаемые в основном XMI через `href`. В локальном файле `UML-2.5.1.xmi` они **не представлены** как отдельные `packagedElement` класса/перечисления.

Это означает, что классификатором раздела является только **PrimitiveType**, а пять примитивных типов — его специализированные домены (семантические значения).

### Классификаторы XMI (1 шт.)

| # | Англ. имя | Подраздел | Тип XMI | Определение (англ., 1-е предложение) | Пояснение (рус.) |
|---|-----------|-----------|---------|----------------------------------------|------------------|
| 1 | **PrimitiveType** | 21.2 (Table 21.1 domain source) | Class (абстрактный) | "A PrimitiveType defines a predefined DataType, without any substructure. A PrimitiveType may have an algebra and operations defined outside of UML, for example, mathematically." | Базовый абстрактный класс метамодели для всех предопределённых примитивных типов без внутренней структуры. Аксиоматические свойства (алгебра, операции) определяются вне UML, обычно математически. |

**Итого классификаторов: 1** (PrimitiveType — абстрактный Class).

### Пять доменов PrimitiveType (из таблицы спецификации)

В таблице 21.1 раздела 21.2 описаны **домены** (semantics) примитивных типов. В XMI они не являются отдельными классификаторами, но представляют собой фактические типы в метамодели UML:

| # | Англ. имя | Семантика (англ.) | Пояснение (рус.) |
|---|-----------|---------------------|------------------|
| 1 | **Integer** | "An instance of Integer is a value in the (infinite) set of integers (-2, -1, 0, 1, 2, ...)." | Бесконечное множество целых чисел. Используется для атрибутов-счётчиков и индексации. |
| 2 | **Boolean** | "An instance of Boolean is one of the predefined values true and false." | Двоичное значение: true или false. Основа логики UML (например, флаги isAbstract). |
| 3 | **String** | "An instance of String defines a sequence of characters. Character sets may include non-Roman alphabets." | Последовательность символов, включая непанлафавитные наборы. Используется для комментариев, выражений OCL и т.д. |
| 4 | **UnlimitedNatural** | "An instance of UnlimitedNatural is a value in the (infinite) set of natural numbers (0, 1, 2, ...) plus unlimited." | Натуральные числа плюс значение «неограничено» (*). Применяется для указания кратности без верхней границы. |
| 5 | **Real** | "An instance of Real is a value in the (infinite) set of real numbers. Typically an implementation will internally represent Real numbers using a floating point standard such as ISO/IEC/IEEE 60559:2011." | Бесконечное множество действительных чисел; реализации обычно используют IEEE 754 с плавающей запятой. |

### Наследование (из XMI)

```
                    ┌──────────┐
                    │ DataType │ (пакет Classification)
                    └─────┬────┘
                          │ generalization
                    ┌─────▼─────┐
                    │Primitive │ ← единственный классификатор
                    │  Type    │   раздела PrimitiveTypes
                    └──────────┘
```

- **Родитель:** `DataType` (из пакета `Classification`)
- **Дети (specializations):** В локальном XMI — нет; пять примитивных типов являются **экземплярами** (instance of) PrimitiveType, а не подклассами. В метамодели UML они обозначаются через стереотип `«primitive»` на диаграммах.

---

## Ассоциации (пакет PrimitiveTypes из XMI)

**Ассоциаций в пакете PrimitiveTypes: 0.**

В пакете PrimitiveTypes не определено ни одной ассоциации (`Association`). Все ссылки на примитивные типы других элементов модели (например, `+ type : PrimitiveType` у атрибута `Property`) реализуются через внешнюю связь между классом `Property` и классификатором `PrimitiveType`, но эти связи находятся в **других** пакетах XMI.

---

## Рисунки (Figures)

Из содержимого раздела (PDF страницы 719–720 = печатные 677–678):

| № | Подпись | Печ. стр. | Содержание |
|---|---------|-----------|------------|
| Figure 21.1 | Primitive Types | 677 | Диаграмма пакетного содержимого: пять классов/типов с stereotype «primitive»: Integer, UnlimitedNatural, String, Boolean, Real. Абстрактный синтаксис пакета PrimitiveTypes. |
| Figure 21.2 | An Integer used as a type for an attribute, with a default value | 677 | Пример: атрибут с типом Integer и значением по умолчанию (например, `count : Integer = 0`). |
| Figure 21.3 | A Boolean used as a type for an attribute, with a default value | 678 | Пример: атрибут с типом Boolean и значением по умолчанию (например, `flag : Boolean = true`). |
| Figure 21.4 | A String used as a type for an attribute, with a default value | 678 | Пример: атрибут с типом String и строковым значением по умолчанию (например, `name : String = "default"`). |
| Figure 21.5 | An UnlimitedNatural used as an upper bound for a multiplicity | 678 | Пример: кратность с неограниченной верхней границей (например, `0..*` где `*` обозначается символом asterisk). |
| Figure 21.6 | Two attributes with type Real | 678 | Пример: два атрибута с типом Real (действительные числа). |

**Итого рисунков: 6** (Figure 21.1–21.6)

> **Примечание по TOC:** В оглавлении PDF Figure 21.1 может быть указан с ошибкой (аналогично разделу 20), так как рисунки 21.x расположены внутри самого раздела на страницах 677–678.

---

## Статистика XMI (пакет PrimitiveTypes)

| Категория | Количество |
|-----------|------------|
| Классы в пакете (Class/Enumeration) | 1 (только PrimitiveType) |
| ownedAttribute в PrimitiveType | 0 |
| ownedOperation в PrimitiveType | 0 |
| ownedRule в PrimitiveType | 0 |
| Association в пакете | 0 |
| ownedEnd (обратные стороны) | 0 |
| Примитивные типы-домены (из текста спецификации) | 5 (Integer, Boolean, String, UnlimitedNatural, Real) |

> **Примечание по подсчётам:** PrimitiveType не имеет ни собственных атрибутов, ни операций, ни ограничений. Его функция в метамодели — быть абстрактным базовым классом для всех примитивных типов. Пять конкретных примитивных типов определяются через семантику (Table 21.1) и обозначаются на диаграммах stereotype `«primitive»`.

---

## Замечания и риски

### 1. Раздел из двух страниц — самый короткий нормативный раздел
Раздел 21 — **один из самых коротких** в OMG UML 2.5.1: всего **2 страницы** (677–678), **1 классификатор** и **0 ассоциаций**. Это означает минимальный объём русского контента, но требует точной передачи семантики примитивных типов.

### 2. PrimitiveType не имеет собственных атрибутов/операций
В отличие от большинства разделов справочника, где каждый классификатор описывается через ownedAttribute, ownedOperation и ownedRule — PrimitiveType **не содержит ни одного из них**. Его определение полностью содержится в comment (body): "A PrimitiveType defines a predefined DataType, without any substructure." Это особенность метамодели: PrimitiveType — атомарная абстракция.

### 3. Пять примитивных типов — не классы XMI
Это ключевое отличие раздела 21 от всех предыдущих разделов. В других разделах (10, 20) каждый классификатор представлен в XMI как `packagedElement` с типом `uml:Class` или `uml:Enumeration`. Примитивные типы (Integer, Boolean, String, UnlimitedNatural, Real) — это **экземпляры PrimitiveType**, определяемые во внешнем файле `PrimitiveTypes.xmi` (ссылка `href="http://www.omg.org/spec/UML/20131001/PrimitiveTypes.xmi#Boolean"` и т.д.). В локальном XMI они присутствуют только как ссылки, не как определения.

**Следствие для справочника:** страница каждого примитивного типа будет содержать:
- ссылку на PrimitiveType (страница 10.5.7)
- семантику из таблицы 21.1 спецификации
- примеры из рисунков 21.2–21.6

### 4. Нет Notation — нотация перенесена в раздел 8
Согласно подразделу 21.3: "There is no notation for PrimitiveTypes. There is notation for literal values of PrimitiveTypes; this notation is covered in sub clause 8.2." Это означает, что SVG-диаграмма раздела должна отображать только Figure 21.1 (пакетное содержимое), а примеры нотации литералов берутся из раздела 8.

### 5. Родитель PrimitiveType — DataType из пакета Classification
На странице класса PrimitiveType нужно показать наследование от `DataType`. Сам `DataType` определён в разделе **10.5.2** (Simple Classifiers). Диаграмма наследования: `Classifier → NestedClassifier → NamedElement → Element → DataType → PrimitiveType`.

### 6. Риски при генерации SVG диаграмм
- **Figure 21.1**: компактная диаграмма пакета с 5 элементами. Не требует сложного позиционирования, но нужно корректно передать stereotype `«primitive»` над каждым элементом. Все элементы — ссылки на страницы справочника (PrimitiveType → 10.5.7, Integer/Boolean/String/UnlimitedNatural/Real → страницы раздела 21).
- **Figure 21.2–21.6**: примеры использования примитивных типов в атрибутах. Небольшие фрагменты классов с указанием типа и значения по умолчанию. Могут потребовать увеличения масштаба для читаемости подписей.

### 7. Структура справочника: стоит ли отображать PrimitiveType повторно?
PrimitiveType уже определён в разделе 10 (10.5.7). В справочнике нужно решить:
- **Вариант А**: страница PrimitiveType в разделе 21 — дублирует 10.5.7 с добавленной информацией о доменах (Table 21.1) и рисунках. Ссылка на оригинальную страницу + дополнительная секция "Примитивные домены".
- **Вариант Б**: страница PrimitiveType в разделе 21 — перенаправляет на 10.5.7, а раздел 21 содержит только страницы для пяти примитивных типов (Integer, Boolean, String, UnlimitedNatural, Real) с собственным контентом.

Рекомендую **Вариант Б**: PrimitiveType уже описан в разделе 10; раздел 21 должен содержать пять страниц конкретных примитивных типов, каждая из которых ссылается на PrimitiveType (10.5.7).

### 8. Смысл раздела 22 Standard Profile как отдельного раздела справочника
Раздел 22 начинается на **печатной странице 679** и заканчивается перед Annex A (страница 683), то есть занимает страницы **679–682** (4 страницы).

**Аргументы ЗА выделение раздела 22:**
- Раздел 22 содержит уникальную структуру: `StandardProfile` с ~24 stereotypes.
- Каждый stereotype имеет имя, область применения (Applies to) и описание (Description).
- Это самостоятельный профиль с собственным XMI-пакетом.

**Аргументы ПРОТИВ:**
- Раздел 22 очень короткий (4 страницы) и по структуре отличается от разделов 7–10 (профили, а не метамодель).
- Stereotypes Standard Profile могут быть включены в отдельный раздел "Profiles" позже.

**Рекомендация**: выделить **отдельным разделом 22** с конфигурацией `"first_page": 679, "last_page": 682`, `"classifier_catalog": "22.3"` (раздел Standard Stereotypes), пакет `StandardProfile` из XMI. Структура:
- 22 Standard Profile
- 22.1 Summary
- 22.2 Model (Figure 22.1)
- 22.3 Standard Stereotypes (~24 stereotypes, каждый — страница)

---

## Итого по разделу

| Метрика | Значение |
|---------|----------|
| Диапазон печатных страниц | 677–678 (2 страницы) |
| PDF-страницы (0-based) | 719–720 |
| Количество подразделов | 5 (21, 21.1–21.4) |
| Классификаторы XMI | 1 (PrimitiveType) |
| Атрибуты классификаторов | 0 |
| Ассоциации | 0 |
| ownedEnd (обратные стороны) | 0 |
| Ограничения (ownedRule) | 0 |
| Операции | 0 |
| Примитивные домены (из текста) | 5 (Integer, Boolean, String, UnlimitedNatural, Real) |
| Рисунки | 6 (Figure 21.1–21.6) |
| Родитель PrimitiveType | DataType (раздел 10.5.2) |
| Абстрактные классы | 1 (PrimitiveType) |

---

*Черновик создан: раздел 21 PrimitiveTypes спецификации OMG UML 2.5.1.*  
*Следующие шаги: этап 2 (scaffold) — создание русских описаний для PrimitiveType и 5 доменов; этап 3 (XMI sync, не требуется — XMI пуст); этап 4 (site build); этап 5 (SVG-диаграммы, 6 рисунков); этап 6 (validation).*
