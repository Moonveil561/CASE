/* =========================================================
   PROJECTS
   Отсюда строятся карточки на главной, страница проектов
   и страницы кейсов (case.html?id=<slug>).

   Чтобы добавить проект: добавьте объект в массив
   и положите скриншот в папку images/.
========================================================= */

const PROJECTS = [
  {
    slug: "olimp",
    title: "Олимп — строительная компания",
    description:
      "Концепт корпоративного сайта строительной компании с услугами, проектами, процессом работы и формой заявки.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/olimp.jpg",
    url: "https://moonveil561.github.io/olimp-site/",
    featured: true,
    task:
      "Представить строительную компанию премиум-класса: с первого экрана показать масштаб и специализацию и провести посетителя от знакомства с компанией до заявки.",
    solution:
      "Тёмная тема с золотыми акцентами и крупной антиквой задаёт ощущение статуса. За главным экраном с цифрами компании идут услуги, проекты, процесс работы и отзывы, а завершает страницу форма заявки.",
    features: [
      "Главный экран с оффером и ключевыми цифрами",
      "Разделы: о компании, услуги, проекты, процесс, отзывы",
      "Форма заявки",
      "Кастомный курсор и появление блоков при прокрутке",
      "Адаптивная вёрстка"
    ]
  },

  {
    slug: "velour",
    title: "Velour — fashion",
    description:
      "Концепт премиального fashion-магазина с коллекцией, каталогом, карточкой товара и корзиной.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/velour.jpg",
    url: "https://moonveil561.github.io/velour-site/",
    featured: true,
    task:
      "Показать, как может выглядеть интернет-магазин одежды премиального бренда — от настроения коллекции до корзины.",
    solution:
      "Тёмная палитра с фиолетовым акцентом и контрастная антиква в заголовках. Посетитель видит коллекцию и лукбук, открывает карточку товара и добавляет вещи в корзину без перезагрузки страницы.",
    features: [
      "Главный экран с коллекцией сезона",
      "Каталог и карточка товара",
      "Корзина на JavaScript без перезагрузки страницы",
      "Лукбук и блок о бренде",
      "Кастомный курсор и плавные анимации"
    ]
  },

  {
    slug: "hvoiniy-les",
    title: "Хвойный лес — кофейня",
    description:
      "Сайт кофейни с атмосферой бренда, меню, информацией о заведении и контактами.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/hvoiniy-les.jpg",
    url: "https://moonveil561.github.io/hvoiniy-les/",
    task:
      "Передать атмосферу кофейни и дать гостю всё необходимое: меню, информацию о заведении и контакты.",
    solution:
      "Тёплая кофейная палитра и выразительная типографика создают настроение с первого экрана. Дальше — разделы о кофейне, меню, атмосфера и контакты.",
    features: [
      "Атмосферный главный экран",
      "Меню кофейни",
      "Разделы «О нас» и «Атмосфера»",
      "Контакты заведения",
      "Анимации появления и кастомный курсор"
    ]
  },

  {
    slug: "streakup",
    title: "StreakUp",
    description:
      "Концепт сервиса для формирования привычек с описанием возможностей и тарифами.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/streakup.jpg",
    url: "https://moonveil561.github.io/StreakUP/",
    task:
      "Презентовать сервис для формирования привычек: объяснить идею, показать возможности и подвести к выбору тарифа.",
    solution:
      "Лендинг в тёмной гамме с тёплым акцентом. Главный экран с названием и призывом, затем рассказ о сервисе и привычках, тарифные планы и контакты.",
    features: [
      "Главный экран с призывом к действию",
      "Описание возможностей сервиса",
      "Тарифные планы",
      "Блок контактов",
      "Анимации и кастомный курсор"
    ]
  },

  {
    slug: "drivepro",
    title: "DRIVEPRO — автосервис",
    description:
      "Коммерческий сайт автосервиса с услугами, ценами, этапами работы, отзывами, FAQ и формой записи.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/drivepro.jpg",
    url: "https://moonveil561.github.io/DRIVEPRO/",
    featured: true,
    task:
      "Сделать сайт автосервиса, который отвечает на главные вопросы клиента — что чинят, сколько стоит и как записаться — и приводит к заявке.",
    solution:
      "Контрастный дизайн с лаймовым акцентом и крупными заголовками. На первом экране — оффер и экспресс-запись, далее услуги с ценами, этапы работы, отзывы и ответы на вопросы.",
    features: [
      "Оффер и экспресс-запись на первом экране",
      "Услуги и цены",
      "Этапы работы",
      "Отзывы и FAQ",
      "Форма записи на сервис",
      "Адаптивная вёрстка"
    ]
  },

  {
    slug: "weather-bot",
    title: "Погодный Telegram-бот",
    description:
      "Telegram-бот на Python, который получает название города и показывает текущую погоду через OpenWeather API.",
    category: "bot",
    tags: ["Python", "Telegram", "API"],
    image: "images/weather-bot.png",
    portrait: true,
    url: "https://t.me/ITProgerv_Telegram_Bot",
    task:
      "Дать пользователю быстрый способ узнать погоду, не выходя из Telegram.",
    solution:
      "Бот на Python принимает название города, запрашивает данные в OpenWeather API и отвечает сообщением с текущей погодой.",
    features: [
      "Запрос погоды по названию города",
      "Интеграция с OpenWeather API",
      "Ответ с текущей погодой в чате",
      "Работает прямо в Telegram"
    ]
  },

  {
    slug: "eravel",
    title: "Éravel Haute Horlogerie",
    description:
    "Концепт сайта премиального часового бренда с акцентом на анимации и подачу продукта.",
    category: "site",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "images/eravel.png",
    url: "https://moonveil561.github.io/eravel/",
    task:
    "Показать, как анимации и плавные переходы работают на подачу дорогого продукта — часов премиум-класса.",
    solution:
    "Сдержанный премиальный дизайн, в котором главное — сами часы. Блоки появляются при прокрутке, а анимации ведут взгляд от первого экрана к моделям.",
    features: [
    "Главный экран с презентацией бренда",
    "Витрина моделей часов",
    "Анимации появления при прокрутке",
    "Плавные hover-эффекты и переходы",
    "Адаптивная вёрстка"
    ]
  },
/*
    {
    slug: "",
    title: "",
    description:
      "",
    category: "",
    tags: [""],
    image: "",
    url: "",
    task:
      "",
    solution:
      "",
    features: [
      "",
    ]
  }*/
];


/* =========================================================
   НАСТРОЙКИ
========================================================= */

/* Адрес формы Formspree: сюда уходят заявки из модального окна
   и со страницы контактов */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljrkveo";

const FILTERS = [
  { key: "all", label: "Все" },
  { key: "site", label: "Сайты" },
  { key: "bot", label: "Telegram-боты" }
];

const CATEGORY_LABELS = {
  site: "Сайт",
  bot: "Telegram-бот"
};

/* Варианты в поле «Что нужно сделать» */
const SERVICES = [
  "Создание сайта",
  "Telegram-бот",
  "Сайт + Telegram-бот",
  "Другое"
];


/* =========================================================
   ВСПОМОГАТЕЛЬНОЕ
========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* plural(5, ["проект", "проекта", "проектов"]) → "проектов" */
function plural(number, forms) {
  const lastTwo = number % 100;
  const last = number % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return forms[2];
  if (last === 1) return forms[0];
  if (last >= 2 && last <= 4) return forms[1];
  return forms[2];
}

function icon(name, extraClass = "") {
  return `<svg class="ico ${extraClass}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function caseUrl(project) {
  return `case.html?id=${encodeURIComponent(project.slug)}`;
}

function prettyUrl(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function categoryLabel(project) {
  return CATEGORY_LABELS[project.category] || "Проект";
}

function liveLabel(project) {
  return project.category === "bot" ? "Открыть бота" : "Открыть сайт";
}


/* =========================================================
   ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ
========================================================= */

let revealObserver = null;

function showRevealed(element) {
  element.classList.add("is-in");

  /* После анимации классы снимаются, чтобы у карточек и кнопок
     снова работали их собственные transition (hover и т. п.) */
  const delay = parseFloat(element.style.getPropertyValue("--d")) || 0;

  setTimeout(() => {
    element.classList.remove("reveal", "is-in");
    element.style.removeProperty("--d");
  }, delay + 1100);
}

function watchReveal(root = document) {
  const items = $$(".reveal:not(.is-in)", root);

  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.remove("reveal"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          revealObserver.unobserve(entry.target);
          showRevealed(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
  }

  items.forEach(item => revealObserver.observe(item));
}


/* =========================================================
   КАРТОЧКИ ПРОЕКТОВ
========================================================= */

function projectPlaceholder(project, className = "pcard__ph") {
  return `
    <span class="${className}">
      ${icon(project.category === "bot" ? "bot" : "window")}
      <span>Скриншот готовится</span>
    </span>
  `;
}

function projectCard(project, index) {
  const href = caseUrl(project);

  const media = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="" loading="${index < 3 ? "eager" : "lazy"}" decoding="async" data-fallback="${escapeHtml(project.slug)}">`
    : projectPlaceholder(project);

  const live = project.url
    ? `<a class="link link--ext link--muted" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${liveLabel(project)} ${icon("arrow-ur")}</a>`
    : `<span class="link link--off">Демо пока нет</span>`;

  return `
    <article class="card card--hover pcard reveal" style="--d:${(index % 3) * 90}ms">
      <a class="pcard__media" href="${href}" tabindex="-1" aria-hidden="true">
        ${media}
        <span class="pcard__badge">${categoryLabel(project)}</span>
      </a>

      <div class="pcard__body">
        <h3><a href="${href}">${escapeHtml(project.title)}</a></h3>
        <p>${escapeHtml(project.description)}</p>

        <ul class="tags">
          ${project.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join("")}
        </ul>

        <div class="pcard__foot">
          <a class="link" href="${href}">Смотреть кейс ${icon("arrow")}</a>
          ${live}
        </div>
      </div>
    </article>
  `;
}

/* Если скриншот не загрузился, вместо него показывается заглушка */
document.addEventListener(
  "error",
  event => {
    const image = event.target;

    if (!(image instanceof HTMLImageElement) || !image.dataset.fallback) return;

    const project = PROJECTS.find(item => item.slug === image.dataset.fallback);
    const isCase = Boolean(image.closest(".browser"));

    image.insertAdjacentHTML(
      "afterend",
      projectPlaceholder(project || {}, isCase ? "browser__ph" : "pcard__ph")
    );
    image.remove();
  },
  true
);

/* Блоки вида <div data-projects="featured" data-limit="3"> */
function renderProjectBlocks() {
  $$("[data-projects]").forEach(block => {
    let list = block.dataset.projects === "featured"
      ? PROJECTS.filter(project => project.featured)
      : PROJECTS;

    const limit = Number(block.dataset.limit);

    if (limit) list = list.slice(0, limit);

    block.innerHTML = list.map(projectCard).join("");
  });
}


/* =========================================================
   СТРАНИЦА ПРОЕКТОВ: ФИЛЬТРЫ
========================================================= */

const pfGrid = document.getElementById("pfGrid");
const pfFilters = document.getElementById("pfFilters");
const pfCount = document.getElementById("pfCount");

let currentFilter = "all";

function getVisibleProjects() {
  if (currentFilter === "all") return PROJECTS;

  return PROJECTS.filter(project => project.category === currentFilter);
}

function renderFilters() {
  if (!pfFilters) return;

  pfFilters.innerHTML = FILTERS.map(filter => `
    <button
      class="filter ${filter.key === currentFilter ? "is-active" : ""}"
      type="button"
      data-filter="${filter.key}"
      aria-pressed="${filter.key === currentFilter}"
    >${filter.label}</button>
  `).join("");
}

function renderProjects() {
  if (!pfGrid) return;

  const projects = getVisibleProjects();

  if (pfCount) {
    pfCount.textContent =
      `${projects.length} ${plural(projects.length, ["проект", "проекта", "проектов"])}`;
  }

  pfGrid.innerHTML = projects.map(projectCard).join("");
  watchReveal(pfGrid);
}

if (pfFilters) {
  pfFilters.addEventListener("click", event => {
    const button = event.target.closest(".filter");

    if (!button || button.dataset.filter === currentFilter) return;

    currentFilter = button.dataset.filter;

    renderFilters();
    renderProjects();
  });
}


/* =========================================================
   СТРАНИЦА КЕЙСА
========================================================= */

function renderCase() {
  const root = document.getElementById("caseRoot");

  if (!root) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const index = PROJECTS.findIndex(project => project.slug === id);

  if (index === -1) {
    root.innerHTML = `
      <section class="phero">
        <div class="container">
          <div class="empty">
            <span class="kicker">Кейс не найден</span>
            <h1 class="phero__title">Такого проекта <span class="grad">нет</span></h1>
            <p>Возможно, ссылка устарела. Посмотрите все работы в портфолио.</p>
            <a class="btn btn--primary" href="projects.html">Все проекты ${icon("arrow", "ico--move")}</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const project = PROJECTS[index];
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const label = categoryLabel(project);
  const title = escapeHtml(project.title);

  document.title = `${project.title} — кейс Moonveil`;
  $('meta[name="description"]')?.setAttribute("content", project.description);

  const liveButton = project.url
    ? `<a class="btn btn--primary" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${liveLabel(project)} ${icon("arrow-ur", "ico--move")}</a>`
    : "";

  const shot = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="Скриншот проекта «${title}»" decoding="async" data-fallback="${escapeHtml(project.slug)}">`
    : projectPlaceholder(project, "browser__ph");

  const demo = project.url
    ? `<a class="link link--ext" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(prettyUrl(project.url))} ${icon("arrow-ur")}</a>`
    : `<span class="text-muted">Демо пока нет</span>`;

  root.innerHTML = `
    <section class="phero">
      <div class="phero__decor" aria-hidden="true">
        <span class="ring ring--thin"></span>
        <span class="ring"></span>
        <i class="spark" style="right:9%;top:30%;--s:20px"></i>
        <i class="spark" style="right:35%;top:66%;--s:13px;--dl:-2s"></i>
      </div>

      <div class="container">
        <nav class="crumbs reveal" aria-label="Хлебные крошки">
          <a href="index.html">Главная</a><span>/</span><a href="projects.html">Проекты</a><span>/</span><span>${title}</span>
        </nav>

        <span class="kicker reveal">${label}</span>
        <h1 class="phero__title reveal" style="--d:80ms">${title}</h1>
        <p class="lead reveal" style="--d:160ms">${escapeHtml(project.description)}</p>

        <div class="phero__actions reveal" style="--d:240ms">
          ${liveButton}
          <a class="btn btn--ghost" href="projects.html">Все проекты</a>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <figure class="browser reveal ${project.portrait ? "browser--narrow" : ""}">
          <div class="browser__bar">
            <i></i><i></i><i></i>
            <span class="browser__url">${project.url ? escapeHtml(prettyUrl(project.url)) : "демо пока нет"}</span>
          </div>
          ${shot}
        </figure>

        <div class="case">
          <div class="case__main">
            <section class="reveal">
              <h2>Задача</h2>
              <p>${escapeHtml(project.task || project.description)}</p>
            </section>

            ${project.solution ? `
              <section class="reveal">
                <h2>Решение</h2>
                <p>${escapeHtml(project.solution)}</p>
              </section>
            ` : ""}

            ${project.features && project.features.length ? `
              <section class="reveal">
                <h2>Что сделано</h2>
                <ul class="checks">
                  ${project.features.map(item => `<li>${icon("check")}<span>${escapeHtml(item)}</span></li>`).join("")}
                </ul>
              </section>
            ` : ""}
          </div>

          <aside class="card case__aside reveal" style="--d:120ms">
            <dl class="meta">
              <div>
                <dt>Тип проекта</dt>
                <dd>${label}</dd>
              </div>
              <div>
                <dt>Технологии</dt>
                <dd><ul class="tags">${project.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join("")}</ul></dd>
              </div>
              <div>
                <dt>Демо</dt>
                <dd>${demo}</dd>
              </div>
            </dl>

            <button class="btn btn--primary btn--full js-open-modal" type="button" data-service="${project.category === "bot" ? "Telegram-бот" : "Создание сайта"}">
              Хочу похожий проект
              ${icon("arrow", "ico--move")}
            </button>
          </aside>
        </div>

        <nav class="case-nav" aria-label="Другие проекты">
          <a class="card card--hover reveal" href="${caseUrl(previous)}">
            <small>${icon("arrow", "ico--back")} Предыдущий</small>
            <b>${escapeHtml(previous.title)}</b>
          </a>
          <a class="card card--hover reveal" style="--d:90ms" href="${caseUrl(next)}">
            <small>Следующий ${icon("arrow")}</small>
            <b>${escapeHtml(next.title)}</b>
          </a>
        </nav>
      </div>
    </section>
  `;
}


/* =========================================================
   ШАПКА И МОБИЛЬНОЕ МЕНЮ
========================================================= */

const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

function updateHeader() {
  if (!header) return;

  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function setMenu(open) {
  if (!burger) return;

  document.body.classList.toggle("menu-open", open);
  document.body.classList.toggle("is-locked", open);

  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
}

if (burger && nav) {
  burger.addEventListener("click", () => {
    setMenu(!document.body.classList.contains("menu-open"));
  });

  nav.addEventListener("click", event => {
    if (event.target.closest("a")) setMenu(false);
  });

  /* При возврате к широкому экрану меню закрывается само */
  window.matchMedia("(min-width: 1161px)").addEventListener("change", event => {
    if (event.matches) setMenu(false);
  });
}


/* =========================================================
   ФОРМА ЗАЯВКИ
========================================================= */

function leadFormHtml(prefix) {
  return `
    <form class="form js-lead-form" novalidate>
      <input type="hidden" name="_subject" value="Новая заявка с сайта Moonveil">
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" hidden>

      <div class="field">
        <label for="${prefix}-name">Ваше имя</label>
        <input id="${prefix}-name" name="name" type="text" placeholder="Как к вам обращаться?" autocomplete="name" required>
      </div>

      <div class="field">
        <label for="${prefix}-contact">Телефон или Telegram</label>
        <input id="${prefix}-contact" name="contact" type="text" placeholder="+7 или @username" autocomplete="tel" required>
      </div>

      <div class="field field--full">
        <label for="${prefix}-service">Что нужно сделать</label>
        <select id="${prefix}-service" name="service">
          ${SERVICES.map(service => `<option>${escapeHtml(service)}</option>`).join("")}
        </select>
      </div>

      <div class="field field--full">
        <label for="${prefix}-project">Расскажите о проекте</label>
        <textarea id="${prefix}-project" name="project" placeholder="Что необходимо разработать?" required></textarea>
      </div>

      <button class="btn btn--primary" type="submit">
        Отправить заявку
        ${icon("arrow", "ico--move")}
      </button>

      <p class="form__note">Нажимая кнопку, вы отправляете заявку на обсуждение проекта.</p>

      <div class="form__msg" role="status" aria-live="polite"></div>
    </form>
  `;
}

function showFormMessage(form, message, isError = false) {
  const box = $(".form__msg", form);

  if (!box) return;

  box.textContent = message;
  box.classList.toggle("is-error", isError);
  box.classList.add("is-shown");
}

function hideFormMessage(form) {
  $(".form__msg", form)?.classList.remove("is-shown", "is-error");
}

async function submitLeadForm(form) {
  const submitButton = $('button[type="submit"]', form);
  const formData = new FormData(form);

  /* Проверка */
  const emptyField = ["name", "contact", "project"].find(
    name => !String(formData.get(name) || "").trim()
  );

  if (emptyField) {
    showFormMessage(form, "Заполните все поля.", true);
    form.elements[emptyField]?.focus();
    return;
  }

  /* Блокируем кнопку */
  const originalButton = submitButton ? submitButton.innerHTML : "";

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Отправка...";
  }

  hideFormMessage(form);

  try {
    /* Отправка в Formspree */
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      showFormMessage(form, "Заявка отправлена. Я свяжусь с вами для обсуждения проекта.");
      form.reset();

      if (form.closest(".modal")) {
        setTimeout(() => {
          closeModal();
          hideFormMessage(form);
        }, 2600);
      }
    } else {
      let errorText = "Не удалось отправить заявку.";

      try {
        const data = await response.json();

        if (data.errors && data.errors.length) {
          errorText = data.errors.map(error => error.message).join(", ");
        }
      } catch (error) {
        console.error("Ошибка чтения ответа Formspree:", error);
      }

      showFormMessage(form, errorText, true);
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);
    showFormMessage(form, "Ошибка соединения. Проверьте интернет и попробуйте ещё раз.", true);
  }

  /* Возвращаем кнопку */
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButton;
  }
}

document.addEventListener("submit", event => {
  const form = event.target.closest(".js-lead-form");

  if (!form) return;

  event.preventDefault();
  submitLeadForm(form);
});

/* Форма на странице контактов: <div data-lead-form="page"> */
function renderLeadForms() {
  $$("[data-lead-form]").forEach(holder => {
    holder.innerHTML = leadFormHtml(holder.dataset.leadForm || "page");
  });
}


/* =========================================================
   МОДАЛЬНОЕ ОКНО
   Открывается любой кнопкой с классом .js-open-modal.
   Атрибут data-service заранее выбирает услугу в форме.
========================================================= */

let modal = null;
let lastFocused = null;

function ensureModal() {
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "leadModal";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="leadModalTitle">
      <button class="modal__close js-close-modal" type="button" aria-label="Закрыть">
        ${icon("close")}
      </button>

      <span class="kicker">Обсуждение проекта</span>
      <h2 id="leadModalTitle">Расскажите о вашей задаче</h2>
      <p>Опишите проект, а я свяжусь с вами для обсуждения деталей.</p>

      ${leadFormHtml("modal")}
    </div>
  `;

  modal.addEventListener("click", event => {
    if (event.target === modal || event.target.closest(".js-close-modal")) {
      closeModal();
    }
  });

  document.body.appendChild(modal);

  return modal;
}

function openModal(service) {
  const box = ensureModal();

  lastFocused = document.activeElement;
  setMenu(false);

  if (service) {
    const select = $('select[name="service"]', box);

    if (select && SERVICES.includes(service)) select.value = service;
  }

  /* Кадр паузы, чтобы сработала анимация появления только что созданного окна */
  requestAnimationFrame(() => {
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");

    setTimeout(() => $("input:not([hidden]):not([type='hidden'])", box)?.focus(), 250);
  });
}

function closeModal() {
  if (!modal || !modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");

  if (lastFocused instanceof HTMLElement) lastFocused.focus();
}

document.addEventListener("click", event => {
  const opener = event.target.closest(".js-open-modal");

  if (!opener) return;

  event.preventDefault();
  openModal(opener.dataset.service);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
    setMenu(false);
    return;
  }

  /* Tab не выходит за пределы открытого окна */
  if (event.key === "Tab" && modal && modal.classList.contains("is-open")) {
    const focusable = $$("button, input:not([hidden]):not([type='hidden']), select, textarea, a[href]", modal);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});


/* =========================================================
   ЭФФЕКТЫ
========================================================= */

/* Блик на стеклянных карточках следует за курсором */
if (finePointer) {
  document.addEventListener(
    "pointermove",
    event => {
      const card = event.target instanceof Element ? event.target.closest(".card") : null;

      if (!card) return;

      const rect = card.getBoundingClientRect();

      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    { passive: true }
  );
}

/* Лёгкий параллакс 3D-графики на главном экране: data-parallax="сила в px" */
function initParallax() {
  const items = $$("[data-parallax]");

  if (!items.length || !finePointer || reduceMotion) return;

  let frame = 0;

  window.addEventListener(
    "pointermove",
    event => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;

        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        items.forEach(item => {
          const power = Number(item.dataset.parallax) || 10;

          item.style.transform =
            `translate3d(${(-x * power).toFixed(1)}px, ${(-y * power).toFixed(1)}px, 0)`;
        });
      });
    },
    { passive: true }
  );
}

/* Наклон 3D-сцены с карточками вслед за курсором */
function initTilt() {
  if (!finePointer || reduceMotion) return;

  $$("[data-tilt]").forEach(stage => {
    const area = stage.parentElement;

    area.addEventListener("pointermove", event => {
      const rect = area.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      stage.style.transform =
        `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg)`;
    });

    area.addEventListener("pointerleave", () => {
      stage.style.transform = "";
    });
  });
}

/* Бегущая строка: содержимое дублируется для бесшовной прокрутки */
function initMarquee() {
  $$(".marquee").forEach(marquee => {
    const track = $(".marquee__track", marquee);

    if (!track || reduceMotion) return;

    track.innerHTML += track.innerHTML;
    marquee.classList.add("is-ready");
  });
}

/* В блоке FAQ одновременно открыт только один вопрос */
document.addEventListener(
  "toggle",
  event => {
    const item = event.target;

    if (!(item instanceof HTMLDetailsElement) || !item.open) return;

    const list = item.closest(".faq");

    if (!list) return;

    $$("details[open]", list).forEach(other => {
      if (other !== item) other.open = false;
    });
  },
  true
);


/* =========================================================
   СЧЁТЧИКИ И ГОД
========================================================= */

function fillCounters() {
  const total = PROJECTS.length;

  $$("[data-projects-count]").forEach(node => {
    node.textContent = total;
  });

  $$("[data-projects-total]").forEach(node => {
    node.textContent =
      `${total} ${plural(total, ["готовый проект", "готовых проекта", "готовых проектов"])}`;
  });

  $$("[data-year]").forEach(node => {
    node.textContent = new Date().getFullYear();
  });
}


/* =========================================================
   ЗАПУСК
========================================================= */

renderProjectBlocks();
renderFilters();
renderProjects();
renderCase();
renderLeadForms();
fillCounters();

initParallax();
initTilt();
initMarquee();

watchReveal();

/* Сигнал для скрипта в <head>: страница инициализирована */
window.MOONVEIL_READY = true;
