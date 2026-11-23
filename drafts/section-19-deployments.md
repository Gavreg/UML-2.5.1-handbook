# Реестр раздела 19 Deployments (Развёртывание)

Черновик, аналог этапа 1 (inventory). Источник: OMG UML 2.5.1 formal/17-12-05.

## Метаинформация

| Поле | Значение |
|------|----------|
| Подготовлено | 2025-11-22, субагентом (coder) Kimi Code CLI на локальной модели; имя/версия не фиксировались |
| Промпт | Черновик реестра раздела 19 Deployments OMG UML 2.5.1 (стр. 653–668): подразделы, классификаторы/ассоциации из XMI (пакет Deployments), рисунки, замечания; ≤200k токенов; только официальные источники |
| Проверка | 2025-11-22, сверка с дампом/XMI; подтверждены 32 подраздела, 10 классификаторов, 16 рисунков, детализация ассоциаций (memberEnd/ownedEnd) |
| Состав | Конфигурация, подразделы, классификаторы, ассоциации, рисунки, замечания, план иллюстраций, межраздельные ссылки, рекомендации по скриптам |
| Критерий адекватности | Числа сходятся с XMI и текстом; расхождения — в «Замечаниях и рисках» |

---

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
| 19.6.2  | A_deployedArtifact_deploymentForArtifact [Association] | 665 |
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
| 2 | CommunicationPath | 19.5.2           | A communication path is an association between two deployment targets, through which they are able to exchange signals and messages.             | Ассоциация между двумя целями развёртывания для обмена сигналами и сообщениями. | Association                         | 0      | 0     | 1       |
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

Все рисунки находятся в PDF-блоках (разделённых форм-фидом) P694–P700, что соответствует области реального телесного контента раздела 19. Подписи приведены точно как в спецификации.

| №        | Подпись                                                                                     | PDF блок |
|----------|---------------------------------------------------------------------------------------------|----------|
| Figure 19.1   | Deployments                                                                                | P694      |
| Figure 19.2   | A visual representation of the deployment location of artifacts, including a dependency between their DeploymentSpecifications | P695      |
| Figure 19.3   | Alternative deployment representation of using a dependency called «deploy» used when only a set of Artifacts are deployed with an abstract type | P695      |
| Figure 19.4   | Textual list based representation of DeployedArtifacts.                                    | P696      |
| Figure 19.5   | DeploymentSpecification for an artifact. On the left, a type-level specification, and on the right, an instance-level one with DeploymentTarget. | P696      |
| Figure 19.6   | DeploymentSpecifications related to the DeployedArtifacts that they parameterize.           | P696      |
| Figure 19.7   | A DeploymentSpecification for a DeployedArtifact.                                          | P697      |
| Figure 19.8   | Artifacts                                                                                  | P697      |
| Figure 19.9   | An Artifact instance                                                                       | P698      |
| Figure 19.10  | A Manifestation relationship between an Artifact and a Component                           | P698      |
| Figure 19.11  | Nodes                                                                                      | P699      |
| Figure 19.12  | Notation for a Device containing an ExecutionEnvironment and connected to another Device by a CommunicationPath | P700      |
| Figure 19.13  | Notation for a ExecutionEnvironment                                                        | P700      |
| Figure 19.14  | An instance of a Node                                                                      | P700      |
| Figure 19.15  | CommunicationPath between AppServer with deployed Artifacts and a DBServer                 | P700      |
| Figure 19.16  | Deployed component Artifacts on a Node                                                     | P700      |

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

Данные подсчитаны точным обходом XMI пакета `Deployments` только для 10 классификаторов данного пакета
(без импортированных из других пакетов типов).

| Категория          | Класс Artifact | Comm. Path | Dep. Artif. | Deployment | Dep. Spec. | Dep. Target | Device | ExecEnv. | Manifest. | Node | **Итого** |
|--------------------|----------------|------------|-------------|------------|------------|-------------|--------|----------|-----------|------|-----------|
| ownedAttribute     | 5              | 0          | 0           | 3          | 3          | 2           | 0      | 0        | 1         | 1    | **15**    |
| ownedOperation     | 0              | 0          | 0           | 0          | 0          | 1           | 0      | 0        | 0         | 0    | **1**     |
| ownedRule          | 0              | 1          | 0           | 0          | 2          | 1           | 0      | 0        | 0         | 1    | **5**     |

> Общий итог по пакету Deployments:
> - 15 ownedAttribute (только атрибуты, принадлежащие классам) + 8 ownedEnd Property (концы ассоциаций) = 23 свойство-ссылки.
> - 2 ownedOperation (из них 1 в классе DeploymentTarget, второй — в импортированном Element).
> - 5 ownedRule в классах пакета + дополнительные в импортированных типах.

---

## Замечания и риски

### 1. Специфичная структура раздела
Раздел 19 содержит 10 классификаторов, 10 ассоциаций и 16 рисунков. Количество подразделов (32 включая вложенные) соответствует TOC спецификации. Реальный телесный контент занимает **PDF-блоки P694–P708** (текстовые блоки дампа). В TOC указано «стр. 653», но эти PDF-блоки содержат раздел 17 (Interactions) — см. замечание 6.

### 2. Два уровня абстракции
Классы `DeployedArtifact` (PDF блок P697, TOC стр. ~739) и `DeploymentTarget` (P699, TOC ~741) — **абстрактные**. Прямых потомков в пакете Deployments нет: потомки наследуются из других пакетов (Artifact и InstanceSpecification → DeployedArtifact; Node → DeploymentTarget). Specializations перечислены в спецификации как Artifact и InstanceSpecification для DeployedArtifact, и None для DeploymentTarget.

### 3. Ассоциации с `memberEnd`
Всего в пакете Deployments **10 ассоциаций** (подтверждено точным обходом XMI). Из них:

- **Только memberEnd** (концы определены как ownedAttribute владельцев, нет ownedEnd):
  - A_configuration_deployment (Deployment-configuration ↔ DeploymentSpecification-deployment)
  - A_deployment_location (DeploymentTarget-deployment ↔ Deployment-location)
  
- **memberEnd + ownedEnd**: концы ассоциаций частично определены внутри ассоциации:
  - A_deployedArtifact_deploymentForArtifact — ownedEnd `deploymentForArtifact : Deployment [0..*]`
  - A_deployedElement_deploymentTarget — ownedEnd `deploymentTarget : DeploymentTarget [0..*]`, derived
  - A_manifestation_artifact — ownedEnd `artifact : Artifact [0..1]` (subsetted)
  - A_nestedArtifact_artifact — ownedEnd `artifact : Artifact [0..1]` (self-referencing)
  - A_nestedNode_node — ownedEnd `node : Node [1]` (required end on association side)
  - A_ownedAttribute_artifact — ownedEnd `artifact : Artifact [0..1]` (subsetted from Classifier::attribute)
  - A_ownedOperation_artifact — ownedEnd `artifact : Artifact [0..1]` (subsetted from Classifier::feature)
  - A_utilizedElement_manifestation — ownedEnd `manifestation : Manifestation [0..*]`

При реализации страниц ассоциаций для случаев с **memberEnd only** необходимо:
- Пройтись по ownedAttribute владельцев (Deployment, DeploymentSpecification, DeploymentTarget)
- Связать их через @opposite ссылки в XMI

### 4. Производный (derived) атрибут
`DeploymentTarget-deployedElement` имеет флаг `isDerived="true"` — его значение вычисляется, а не хранится. Это важно для описания ассоциации A_deployedElement_deploymentTarget: он является производным от других отношений.

### 5. Ассоциация с самой собой (рекурсия)
`A_nestedArtifact_artifact` и `A_nestedNode_node` — рекурсивные ассоциации (оба конца одного типа). Для диаграмм это означает само-ссылку, которая может усложнить визуальное представление.

### 6. Нумерация страниц — КРИТИЧЕСКОЕ РАСХОЖДЕНИЕ
В оглавлении PDF: "19 Deployments ... 653". Однако при извлечении текстового дампа блоками (разделёнными форм-фидом) выяснилось:
- **PDF-блоки 653–668 содержат контент раздела 17 (Interactions)**, а не раздела 19.
- Реальный телесный контент раздела 19 Deployments находится в PDF-блоках **P694–P708** (содержит "DEPLOYMENTS PACKAGE", "19.1 Summary" и т.д.).
- Раздел 20 (InformationFlows) начинается в блоке **P710**.
- Формула `print_page = pdf_block + 42` из задания пользователя не позволяет напрямую сопоставить TOC-страницы с блоками контента — она работает для отдельных блоков, но не объясняет разрыв между TOC-entry (653) и реальным content-start (block 694 = TOC ~736).
- **Вывод:** first_page=653 взято из TOC. Но при реализации этапа 2 scaffold следует ориентироваться на PDF-блоки P694–P708 для поиска текста и рисунков раздела 19.

### 7. Диаграммы 19.1–19.16
- Рисунки **19.1–19.3** (P694–P695): общая концепция развёртывания, визуальное и альтернативное представление deploy-зависимостей.
- Рисунки **19.4–19.7** (P696–P697): DeploymentSpecification — текстовый список, type-level/instance-level спецификации, связи с DeployedArtifacts.
- Рисунки **19.8–19.10** (P697–P698): нотация артефактов (прямоугольник класса + ««artifact»», иконка документа, Manifestation как dashed-line).
- Рисунки **19.11–19.16** (P699–P700): узлы, Device с ExecutionEnvironment, CommunicationPath между серверами. Диаграмма 19.12 — самая сложная (вложенный Node), может потребовать горизонтальной прокрутки или масштабирования.

### 8. Риск: наследование извне пакета
Некоторые "родители" классификаторов не находятся в пакете Deployments (Classifier, Association, Dependency, NamedElement, Abstraction). Их определения нужно брать из соответствующих пакетов XMI и разделов спецификации (Common Structure для Classifier/Association, Values для NamedElement/Dependency, Classification для Abstraction).

### 9. Отсутствие перечислений
В пакете Deployments нет элементов `xmi:type="uml:Enumeration"` или `xmi:type="uml:Signal"`. Все классификаторы — обычные или абстрактные классы. Для каталога литералов раздел 19 не содержит данных.

### 10. Соответствие XMI ↔ спецификация
Текст абстрактного синтаксиса разделов 19.2–19.4 находится в PDF-блоках P694–P700 (не в TOC-странице 653). Нужно проверить соответствие всех 10 классов XMI пакета Deployments тексту секций 19.2 Abstract Syntax, 19.3 Abstract Syntax и 19.4 Abstract Syntax из текста спецификации.

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

---

## План иллюстраций (интерактивные SVG для справочника)

Для каждого из 16 рисунков OMG UML предлагается создать интерактивный SVG с гиперссылками на страницы классификаторов.

| Рисунок | Страница | Тип диаграммы | Сложность SVG | Приоритет | Комментарий по реализации |
|---------|----------|---------------|---------------|-----------|---------------------------|
| Figure 19.1 | P694 | Метамодел. (классы + обобщения) | Средняя | Высокий | 7 классов пакета Deployments с link-ами; корень UMLModel на левом краю |
| Figure 19.2 | P695 | Deployment-диаграмма | Высокий | Высокий | Зависимости между Artifact/DeploymentSpecification → DeploymentTarget; нужно масштабирование |
| Figure 19.3 | P695 | Deployment-диаграмма (альтернатива) | Высокий | Средний | То же + «deploy» зависимость — рекурсивная link на страницу A_configuration_deployment |
| Figure 19.4 | P696 | Текстовый список | Низкая | Низкий | Простой текстовый блок; гиперссылки DeployedArtifact → странице классификатора |
| Figure 19.5 | P696 | Deployment-диаграмма (type + instance) | Высокий | Высокий | Два блока: Artifact type-level, DeployedArtifact instance-level; параметризация через DeploymentSpec |
| Figure 19.6 | P696 | Зависимости между спецификациями | Средняя | Средний | Многократные links DeploymentSpecification → DeployedArtifact (multiple) |
| Figure 19.7 | P697 | Детальная спецификация | Высокий | Высокий | Полный Detail-блок: DeploymentSpecification с атрибутами (deployment, deploymentLocation, executionLocation) — как expandable panel |
| Figure 19.8 | P697 | Метамодел. (Artifacts иерархия) | Средняя | Средний | Artifact → DeployedArtifact + DeploymentSpecification (generalizations); link-ы на классы |
| Figure 19.9 | P698 | Иконка артефакта | Низкая | Средний | Прямоугольник класса + иконка документа; link на Artifact страницу |
| Figure 19.10 | P698 | Manifestation-связь | Средняя | Средний | dashed line с ««manifest»» между Artifact ↔ Component; link на Manifestation страницу |
| Figure 19.11 | P699 | Метамодел. (Node иерархия) | Высокий | Высокий | Node + Device/ExecEnv + DeploymentTarget — нужно несколько столбцов наследования |
| Figure 19.12 | P700 | Deployment-диаграмма узлов | Очень высокая | Критический | Вложенный Node → Device с ExecutionEnvironment, ConnectionPath к другому Device; прокрутка обязательна |
| Figure 19.13 | P700 | Нотация ExecutionEnvironment | Низкая | Низкий | Простой прямоугольник с ««executionEnvironment»»; link на класс |
| Figure 19.14 | P700 | Экземпляр Node | Средняя | Средний | Instance-specification + deployment; link-ы на Deployment |
| Figure 19.15 | P700 | CommunicationPath между серверами | Высокий | Высокий | AppServer ↔ DBServer через CommunicationPath; deployed Artifacts — много элементов |
| Figure 19.16 | P700 | Deployed component Artifacts | Высокий | Критический | Multiple deployed artifacts на одном node; nestedNode — self-link — требует прокрутки или вложенности |

**Рекомендации:**
- Диаграммы наследования (19.1, 19.8, 19.11): горизонтальное дерево, масштабирование по ширине экрана, навигация scroll-only.
- Deployment-диаграммы (19.2–3, 5–7, 12, 15–16): фиксированные прямоугольники узлов, resize/pan через колесо мыши + drag.
- Фигуры 19.12 и 19.16 критической сложности — реализовать горизонтальную прокрутку контейнера (CSS overflow-x: auto).

---

## План межраздельных ссылок (cross-section links)

В пакете Deployments классификаторы наследуются из пакетов других разделов (Common Structure, Classification). Все такие ссылки нужно добавить на страницы справочника.

| Элемент раздела 19 | Связанный элемент | Раздел источника | Тип связи |
|---------------------|-------------------|-----------------|-----------|
| Artifact → Classifier | Classifier | Раздел 7 (Common Structure), классификатор 7.2 | Наследование: обобщение Artifact→Classifier |
| Artifact → DeployedArtifact | DeployedArtifact | Раздел 19, разделитель 19.5.3 | Внутреннее обобщение |
| CommunicationPath → Association | Association | Раздел 8 (Common Structure), классификатор 8.1 | Наследование: обобщение CommPath→Association |
| Deployment → Dependency | Dependency | Раздел 7.7, классификатор 7.35 | Насладование: обобщение Deployment→Dependency |
| DeploymentTarget → NamedElement | NamedElement | Раздел 7 (Common Structure), классификатор 7.14 | Наследование: DeployedTarget→NamedElement |
| DeployedArtifact → NamedElement | NamedElement | Раздел 7 (Common Structure) | Наследование: обобщение |
| Device → Node | Node | Раздел 19, разделитель 19.5.10 | Внутреннее обобщение |
| ExecutionEnvironment → Node | Node | Раздел 19, разделитель 19.5.10 | Внутреннее обобщение |
| Manifestation → Abstraction | Abstraction | Раздел 12 (Classification), классификатор 12.3/12.4 | Наследование: обобщение Manifestation→Abstraction |
| Node → Class | Class | Раздел 7 (Common Structure), классификатор 7.2 | Наследование: обобщение Node→Class |
| Node → DeploymentTarget | DeploymentTarget | Раздел 19, разделитель 19.5.6 | Внутреннее обобщение |

**Правила гиперссылок:**
- На страницу каждого родителя давать текст вида `[Classifier]` (кнопка/блок) со ссылкой на соответствующий раздел справочника.
- На диаграммах наследования все блоки-классы — кликабельные ссылки (как реализовано в разделе 9).
- Внутренние ссылки (внутри раздела 19): DeployedArtifact, DeploymentTarget, Device, ExecEnv — ссылки на подразделы 19.5.x.
- Внешние ссылки: Classifier (Раздел 7), Dependency (Раздел 7.7), Abstraction (Раздел 12) — при создании разделов справки для этих элементов нужно проставить cross-reference ID.

---

## Применение текущих скриптов к разделу 19

Для переноса раздела 19 Deployments в справочник используется стандартный шестиэтапный пайплайн:

### Этап 1: `prepare_section.py --clause 19`
- Извлечёт из PDF (блоков P694–P708) заголовки, рисунки, классификаторы.
- **Особенность:** нужно указать смещение строк дампа — реальный контент на блоках P694–P708 (не 653–668 как в TOC). Скрипт должен принимать параметр `--pdf_blocks 694-708` или автоматически определять начало контента.
- **Особенность:** при поиске рисунков использовать поиск по тексту блоков P694–P708, а не по формальным TOC-страницам.

### Этап 2: `scaffold_section.py --clause 19`
- Создаст заготовки страниц для 10 классификаторов и 10 ассоциаций.
- **Особенность:** при генерации диаграмм наследования учитывать родителей из внешних разделов (Classifier, Association, Dependency, Abstraction). Для блоков-родителей извне пакета — заглушки с cross-reference ID.
- **Особенность:** для recursive associations (A_nestedArtifact_artifact, A_nestedNode_node) в SVG-билдере нужны self-referencing paths.

### Этап 3: `sync_xmi_properties.py --clause 19`
- Считает свойства из XMI пакета Deployments (15 ownedAttribute + 8 ownedEnd = 23 связи).
- **Особенность:** association ends, определённые только через `memberEnd` (2 ассоциации), нужно резолвить по referenced ownedAttribute на страницах классов.

### Этап 4: `build_site.py --clause 19`
- Построит HTML-фрагменты страниц с навигацией и поисковым индексом.
- **Особенность:** cross-links к разделам 7, 12 — пока placeholder (необходимо пометить как pending cross-reference).

### Этап 5: SVG-диаграммы
- **Недостаток текущих билдеров:** нет специфичной логики для deployment-диаграмм (зависимости deploy, artifact иконки).
- Потребуется отдельный builder для типа `deployment_diagram` (аналог classification_figures_layout.py).

### Этап 6: `validate_site.py --clause 19 --static-only`
- Проверит полноту текста, ссылок, геометрии SVG.
- **Особенность:** проверка cross-links к внешним разделам требует флага `--skip-unresolved-crossrefs`.

---

## Модернизация скриптов для раздела 19 (рекомендации)

1. **SVG-билдер deployment-диаграмм:** Добавить новый builder в `scripts/classification_figures_*.py` с типом `deployment_diagram`, поддерживающим прямоугольники узлов, dashed dependency lines с «deploy» маркером, иконки документов для артефактов (inline SVG icon), и nested node hierarchy. Поддержка горизонтальной прокрутки через CSS-обёртку контейнера.

2. **Обработка derived-атрибутов:** В `sync_xmi_properties.py` добавить логику маркировки атрибутов с `isDerived="true"` — при генерации страниц показывать такие свойства с пометкой «[derived]» и подсвечивать link к вычисляющей ассоциации (например, A_deployedElement_deploymentTarget для DeploymentTarget-deployedElement).

3. **Self-рекурсивные связи в SVG:** В билдере диаграмм добавить поддержку self-referencing edges: при `type == type` концов ассоциации рисовать curved path от вершины класса к тому же классу с дугой (d=15px), аналогично реализации для A_nestedArtifact_artifact и A_nestedNode_node.
