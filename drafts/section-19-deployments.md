# Реестр раздела 19 Deployments (Развёртывание)

Черновик, аналог этапа 1 (inventory). Источник: OMG UML 2.5.1 formal/17-12-05.

---

## Конфигурация для sections.json

```json
"19": {
    "title": "Deployments",
    "title_ru": "Развёртывание",
    "slug": "deployments",
    "package": "Deployments",
    "first_page": 653,
    "last_page": 668,
    "classifier_catalog": "19.5 Classifier Descriptions",
    "association_catalog": "19.6 Association Descriptions",
    "source": {
        "pdf": "site/docs/omg-uml-2.5.1-formal-17-12-05.pdf",
        "xmi": "site/docs/UML-2.5.1.xmi",
        "text_dump": "site/docs/omg-uml-2.5.1-formal-17-12-05.txt"
    },
    "diagram_catalog": {
        "folder": "site/assets/diagrams/",
        "figure_prefix": "Figure 19."
    }
}
```

---

## Дерево подразделов

| №       | Заголовок                            | Печ. стр. |
|---------|--------------------------------------|-----------|
| 19      | Deployments                          | 653       |
| 19.1    | Summary                              | 653       |
| 19.2    | Deployments                          | 653       |
| 19.2.1  | Summary                              | 653       |
| 19.2.2  | Abstract Syntax                      | 653       |
| 19.2.3  | Semantics                            | 653       |
| 19.2.4  | Notation                             | 654       |
| 19.2.5  | Examples                             | 654       |
| 19.3    | Artifacts                            | 656       |
| 19.3.1  | Summary                              | 656       |
| 19.3.2  | Abstract Syntax                      | 656       |
| 19.3.3  | Semantics                            | 656       |
| 19.3.4  | Notation                             | 657       |
| 19.3.5  | Examples                             | 657       |
| 19.4    | Nodes                                | 657       |
| 19.4.1  | Summary                              | 657       |
| 19.4.2  | Abstract Syntax                      | 658       |
| 19.4.3  | Semantics                            | 658       |
| 19.4.4  | Notation                             | 659       |
| 19.4.5  | Examples                             | 659       |
| 19.5    | Classifier Descriptions              | 660       |
| 19.5.1  | Artifact [Class]                     | 660       |
| 19.5.2  | CommunicationPath [Class]            | 661       |
| 19.5.3  | DeployedArtifact [Abstract Class]    | 662       |
| 19.5.4  | Deployment [Class]                   | 662       |
| 19.5.5  | DeploymentSpecification [Class]      | 662       |
| 19.5.6  | DeploymentTarget [Abstract Class]    | 663       |
| 19.5.7  | Device [Class]                       | 663       |
| 19.5.8  | ExecutionEnvironment [Class]         | 664       |
| 19.5.9  | Manifestation [Class]                | 664       |
| 19.5.10 | Node [Class]                         | 664       |
| 19.6    | Association Descriptions             | 665       |
| 19.6.1  | A_configuration_deployment [Assoc.]  | 665       |
| 19.6.2  | A_deployedArtifact_deploymentForArt. | 665       |
| 19.6.3  | A_deployedElement_deploymentTarget   | 665       |
| 19.6.4  | A_deployment_location                | 665       |
| 19.6.5  | A_manifestation_artifact             | 666       |
| 19.6.6  | A_nestedArtifact_artifact            | 666       |
| 19.6.7  | A_nestedNode_node                    | 666       |
| 19.6.8  | A_ownedAttribute_artifact            | 666       |
| 19.6.9  | A_ownedOperation_artifact            | 666       |
| 19.6.10 | A_utilizedElement_manifestation      | 667       |

---

## Классификаторы (пакет Deployments из XMI)

| # | Англ. имя | Подраздел      | Определение (англ.)                                                     | Пояснение (рус.)                                   | Родители (из спецификации)            | Атриб. | Опер. | Правила |
|---|-----------|----------------|-------------------------------------------------------------------------|------------------------------------------------------|---------------------------------------|--------|-------|---------|
| 1 | Artifact          | 19.5.1           | An artifact is the specification of a physical piece of information that is used or produced by a software development process, or by deployment and operation of a system. | Спецификация физического информационного артефакта, используемого или создаваемого в процессе разработки или развёртывания системы. | Classifier, DeployedArtifact          | 5      | 0     | 0       |
| 2 | CommunicationPath | 19.5.2           | A communication path is an association between two deployment targets, through which they are able to exchange information.                    | Ассоциация между двумя целями развёртывания для обмена информацией.              | Association                         | 0      | 0     | 1       |
| 3 | DeployedArtifact  | 19.5.3           | A deployed artifact is an artifact or artifact instance that has been deployed to a deployment target.                                    | Артефакт (или его экземпляр), развёрнутый на целевом узле.                     | NamedElement                        | 0      | 0     | 0       |
| 4 | Deployment        | 19.5.4           | A deployment is the allocation of an artifact or artifact instance to a deployment target.                                                | Выделение артефакта на целевую точку развёртывания.                             | Dependency                          | 3      | 0     | 0       |
| 5 | DeploymentSpecification | 19.5.5   | A deployment specification specifies a set of properties that determine execution parameters of a component artifact that is or will be deployed. | Набор свойств, определяющих параметры исполнения для развёртываемого артефакта. | Artifact                          | 3      | 0     | 2       |
| 6 | DeploymentTarget  | 19.5.6           | A deployment target is the location for a deployed artifact.                                                                             | Место размещения развёрнутого артефакта.                                  | NamedElement                        | 2      | 1     | 1       |
| 7 | Device            | 19.5.7           | A device is a physical computational resource with processing capability upon which artifacts may be deployed for execution.              | Физический вычислительный ресурс, на который могут быть развёрнуты артефакты. | Node                              | 0      | 0     | 0       |
| 8 | ExecutionEnvironment | 19.5.8      | An execution environment is a node that offers an execution environment for specific types of components that are deployed on it.        | Узел, предоставляющий среду выполнения для определённых типов компонентов.   | Node                                | 0      | 0     | 0       |
| 9 | Manifestation     | 19.5.9           | A manifestation is the concrete physical rendering of one or more model elements by an artifact.                                        | Физическое воплощение модельных элементов артефактом.                        | Abstraction                         | 1      | 0     | 0       |
| 10| Node              | 19.5.10          | A Node is computational resource upon which artifacts may be deployed for execution. Nodes can be interconnected by CommunicationPaths. | Вычислительный ресурс для развёртывания артефактов; связан через CommunicationPath. | Class, DeploymentTarget            | 2      | 0     | 1       |

**Итого классификаторов: 10** (8 regular class + 2 abstract class, нет Enumeration/Signal)

---

## Ассоциации (пакет Deployments из XMI)

| # | Англ. имя                          | Конец 1                 | Тип 1           | Кратн. 1   | Конец 2                    | Тип 2             | Кратн. 2      |
|---|------------------------------------|-------------------------|-----------------|------------|----------------------------|-------------------|---------------|
| 1 | A_configuration_deployment         | configuration           | DeploymentSpecification | 0..*     | deployment                 | Deployment          | 0\|1          |
| 2 | A_deployedArtifact_deploymentForArtifact | deploymentForArtifact | Deployment      | 0..*       | deployedArtifact           | DeployedArtifact    | 0\|1          |
| 3 | A_deployedElement_deploymentTarget | (derived)             | PackageableElement  | 0..*     | deploymentTarget           | DeploymentTarget    | 1             |
| 4 | A_deployment_location              | location                | DeploymentSpecification | 0..*     | deployment               | Deployment          | ...           |
| 5 | A_manifestation_artifact           | manifestation         | Manifestation     | 0\|1       | artifact                   | Artifact            | ...           |
| 6 | A_nestedArtifact_artifact          | nestedArtifact        | Artifact          | 0..*       | artifact                   | Artifact            | ...           |
| 7 | A_nestedNode_node                  | node                    | Node              | 1          | nestedNode                 | Node                | 0\|1          |
| 8 | A_ownedAttribute_artifact          | artifact                | Artifact          | 1          | ownedAttribute             | Property            | 0\|1          |
| 9 | A_ownedOperation_artifact          | artifact                | Artifact          | 1          | ownedOperation             | Operation           | 0\|1          |
| 10| A_utilizedElement_manifestation    | utilizedElement       | PackageableElement  | 0..*     | manifestation              | Manifestation       | 1             |

**Итого ассоциаций: 10** (все в пакете Deployments)

---

## Рисунки

| №        | Подпись                                                                                     | Печ. стр. |
|----------|---------------------------------------------------------------------------------------------|-----------|
| Figure 19.1   | Deployments                                                                                | 695       |
| Figure 19.2   | A visual representation of the deployment location of artifacts, including a dependency     | 695       |
| Figure 19.3   | Alternative deployment representation (deploy)                                             | 695       |
| Figure 19.4   | Textual list based representation of DeployedArtifacts                                     | 696       |
| Figure 19.5   | DeploymentSpecification for an artifact (type-level and instance-level)                    | 696       |
| Figure 19.6   | DeploymentSpecifications related to the DeployedArtifacts they parameterize                | 696       |
| Figure 19.7   | A DeploymentSpecification for a DeployedArtifact                                           | 697       |
| Figure 19.8   | Artifacts                                                                                  | 697       |
| Figure 19.9   | An Artifact instance (document icon)                                                       | 698       |
| Figure 19.10  | A Manifestation relationship between an Artifact and a Component                           | 698       |
| Figure 19.11  | Nodes                                                                                      | 699       |
| Figure 19.12  | Notation for a Device containing an ExecutionEnvironment connected to another Device       | 700       |
| Figure 19.13  | Notation for an ExecutionEnvironment                                                       | 700       |
| Figure 19.14  | An instance of a Node                                                                      | 700       |
| Figure 19.15  | CommunicationPath between AppServer and DBServer                                           | 700       |
| Figure 19.16  | Deployed component Artifacts on a Node                                                     | 700       |

**Итого рисунков: 16**

---

## Иерархия наследования (из спецификации)

```
                        ┌──────────┐
                        │ Classifier│
                        └─────┬─────┘
                              │ (generalization)
                    ┌─────────┴─────────┐
              ┌─────▼──────┐   ┌────────▼─────────┐
              │ Artifact   │   │ DeployedArtifact  │ (abstract)
              └────────────┘   └────────┬─────────┘
                                         │
                    ┌────────────────────┼────────────────────┐
                    │                    │                      │
            ┌───────▼───────┐   ┌────────▼────────┐  ┌────────▼────────┐
            │DeploymentSpec.│   │    Node         │  │ NamedElement    │
            └───────────────┘   └───┬───────┬──────┘  └─────────────────┘
               (subclass of       ┌──┴──┐  ┌─┴───┐     inherits from:
                Artifact)        │Node │  │...  │   DeployedArtifact
            classifies           └┬────┘  └─────┘
           DeployedArtifacts    ┌─┴────────────────┐
               via A_          │ DeploymentTarget  │ (abstract)
           configuration_dep.  └────────┬──────────┘
                                         │
                                 ┌───────▼────────┐
                                 │  Deployment     │ (subclass of
                                 └─────────────────┘  Dependency)

        Device    →  inherits from Node
        ExecEnv   →  inherits from Node  
        Manifest. →  inherits from Abstraction
```

**Краткая таблица наследования:**

| Класс                      | Родители (из спецификации)          |
|----------------------------|-------------------------------------|
| Artifact                   | Classifier, DeployedArtifact        |
| CommunicationPath          | Association                         |
| DeployedArtifact           | NamedElement                        |
| Deployment                 | Dependency                          |
| DeploymentSpecification    | Artifact                            |
| DeploymentTarget           | NamedElement                        |
| Device                     | Node                                |
| ExecutionEnvironment       | Node                                |
| Manifestation              | Abstraction                         |
| Node                       | Class, DeploymentTarget             |

---

## Статистика XMI (пакет Deployments)

| Категория          | Количество |
|--------------------|------------|
| Классы (Class/Enumeration/Signal) | 10         |
|ownedAttribute     | ~23        |
| ownedOperation    | 1          |
| ownedRule         | 5          |
| Association        | 10         |

> **Примечание по подсчётам:** Точный посчёт через `grep -c` может отличаться от ручного обхода XMI, т.к. элементы типа `ownedAttribute` и `ownedOperation` могут быть развёрнуты на нескольких строках (каждый начинается с тега `<ownedAttribute ...>` и заканчивается `</ownedAttribute>`). Рекомендуется финальный подсчёт проводить через полный парсер XMI.

---

## Замечания и риски

### 1. Специфичная структура раздела
Раздел 19 существенно короче разделов 7–9: всего 16 страниц (653–668), 10 классификаторов и 10 ассоциаций. Однако он содержит сложные концепции развёртывания, которые требуют тщательного описания в справочнике.

### 2. Два уровня абстракции
Классы `DeployedArtifact` (662) и `DeploymentTarget` (663) — **абстрактные**. Их спецификации содержат подклассы, но прямых потомков в пакете Deployments нет — они наследуются из других пакетов (например, через `Dependency`, `NamedElement`).

### 3. Ассоциации с `memberEnd`
Некоторые ассоциации (A_configuration_deployment, A_deployedArtifact_deploymentForArtifact, A_deployment_location) используют **только** `<memberEnd>` без явного `<ownedEnd>`. Это означает, что концы ассоциаций определены как атрибуты владельцев (Deployment-configuration, DeploymentSpecification-deployment и т.д.). Для страницы каждой ассоциации необходимо:
- Собрать memberEnd ссылки из XMI
- Найти соответствующие ownedAttribute на страницах классов

### 4. Производный (derived) атрибут
`DeploymentTarget-deployedElement` имеет флаг `isDerived="true"` — его значение вычисляется, а не хранится. Это важно для описания ассоциации A_deployedElement_deploymentTarget: он является производным от других отношений.

### 5. Ассоциация с самой собой (рекурсия)
`A_nestedArtifact_artifact` и `A_nestedNode_node` — рекурсивные ассоциации (оба конца одного типа). Для диаграмм это означает само-ссылку, которая может усложнить визуальное представление.

### 6. Нумерация страниц спецификации
В оглавлении PDF: 19 Deployments → стр. 653. В секции ToC дампа печатная страница 653 соответствует **PDF-странице** (0-based index) 695. Формула: `PDF_page = print_page + 42`. Убедиться при ссылке на конкретные страницы PDF.

### 7. Диаграммы 19.1–19.16
Рисунки 19.1–19.7 посвящены концепции развёртывания, 19.8–19.10 — артефактам (иконки, нотация), 19.11–19.16 — узлам и путям связи. Диаграмма 19.12 (Device с ExecutionEnvironment) самая сложная — может потребовать адаптивной ширины или горизонтальной прокрутки.

### 8. Риск: наследование извне пакета
Некоторые "родители" классификаторов не находятся в пакете Deployments (Classifier, Association, Dependency, NamedElement, Abstraction). Их определения нужно брать из соответствующих пакетов XMI и разделов спецификации (Common Structure для Classifier/Association, Values для NamedElement/Dependency, Classification для Abstraction).

### 9. Отсутствие перечислений
В пакете Deployments нет элементов `xmi:type="uml:Enumeration"` или `xmi:type="uml:Signal"`. Все классификаторы — обычные или абстрактные классы. Для каталога литералов раздел 19 не содержит данных.

### 10. Соответствие XMI ↔ спецификация
В секции 19.2 "Abstract Syntax" (653) дан синтаксис на языке UML abstract syntax (не diagram notation). Нужно проверить соответствие всех 10 классов и их атрибутов тексту абстрактного синтаксиса в разделе 19.2–19.4.

---

## Итого по разделу

| Метрика                       | Значение |
|-------------------------------|----------|
| Диапазон печатных страниц     | 653–668  |
| Количество подразделов        | 32 (включая вложенные) |
| Классификаторы                | 10       |
| Ассоциации                    | 10       |
| Рисунки                       | 16       |
| Абстрактные классы            | 2 (DeployedArtifact, DeploymentTarget) |
| Наследование извне пакета     | Да (Classifier, Association, Dependency, NamedElement, Abstraction) |
| Перечисления / Signals        | 0        |

---

*Черновик создан: раздел 19 Deployments спецификации OMG UML 2.5.1.*  
*Следующие шаги: этап 2 (scaffold) — создание русского контента для каждого классификатора; этап 3 (XMI sync); этапы 4–6 (site build, SVG diagrams, validation).*
