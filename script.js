const portfolioContent = window.portfolioContent;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const icons = {
  layers:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 4 8l8 4 8-4-8-4Zm-8 8 8 4 8-4M4 16l8 4 8-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm6 11 1 2.5L21.5 17 19 18l-1 2.5L17 18l-2.5-1 2.5-1 1-2.5ZM6 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  compass:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-5-9-2 10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  brain:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0V7Zm0 2a2.5 2.5 0 0 0-3 2.4v4.2A2.5 2.5 0 0 0 9 18m6-9a2.5 2.5 0 0 1 3 2.4v4.2A2.5 2.5 0 0 1 15 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  server:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="14" width="16" height="5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 7.5h.01M8 16.5h.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.2"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V5m0 14h14M9 15v-3m5 3V8m5 7V11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 6 6.5v5.8c0 3.6 2.4 6.8 6 7.7 3.6-.9 6-4.1 6-7.7V6.5L12 4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 4.3A13.5 13.5 0 0 0 8 12c0 2.8.8 5.4 2.2 7.7m5.3-15.4A13.5 13.5 0 0 1 16 12c0 2.8-.8 5.4-2.2 7.7M4 12h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  route:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9.2 6H12a4 4 0 0 1 4 4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/><path d="m13 12 3 3 3-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 4.5V2.5m0 19v-2m7.5-7.5h2m-19 0h2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  grid:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
  workflow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="5" height="5" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="15" y="5" width="5" height="5" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.7"/><rect x="9.5" y="14" width="5" height="5" rx="1.1" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 7.5h6m-3 0V14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.8" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m19 19-3.4-3.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  build:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6.5 3 3-7.8 7.8H6.7v-3L14.5 6.5Zm1.4-1.4 1.6-1.6a1.5 1.5 0 0 1 2.1 0l1 1a1.5 1.5 0 0 1 0 2.1L19 8.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  share:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10m0 0-3-3m3 3-3 3M7 5h6M7 19h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m5.5 8 6.5 5 6.5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 5h2.4l1.2 4-1.8 1.8a15 15 0 0 0 4.2 4.2l1.8-1.8 4 1.2v2.4c0 .7-.6 1.2-1.2 1.2A14.8 14.8 0 0 1 6 6.2C6 5.6 6.5 5 7.2 5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9v8M7 7.1v.1M11 17V9h4.5a2.5 2.5 0 0 1 2.5 2.5V17m-7 0h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18c-4 1.2-4-2-6-2m12 4v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-5.8a4.5 4.5 0 0 0-1.2-3.1 4.1 4.1 0 0 0-.1-3.1s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.8 2.5 5.8 2.8 5.8 2.8a4.1 4.1 0 0 0-.1 3.1 4.5 4.5 0 0 0-1.2 3.1c0 4.5 2.8 5.5 5.5 5.8a2.7 2.7 0 0 0-.8 2.1V20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  document:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h6l4 4v12H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/><path d="M14 4v4h4M9 13h6M9 17h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m-11 4h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  graduation:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 9 8-4 8 4-8 4-8-4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/><path d="M7 10.5v4.3c0 .7 2.2 2.2 5 2.2s5-1.5 5-2.2v-4.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  award:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="4.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m9.5 13 1.2 6L12 17.5 13.3 19l1.2-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>'
};

function icon(name) {
  return icons[name] || icons.spark;
}

function externalAttrs(url) {
  return url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : "";
}

function renderIconBadge(name, label) {
  return `<span class="icon-badge" aria-hidden="true">${icon(name)}</span>${label ? `<span>${label}</span>` : ""}`;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
  const toggle = document.querySelector("#theme-toggle");
  const label = document.querySelector("#theme-toggle-label");
  if (!toggle || !label) {
    return;
  }

  const isDark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Activate light mode" : "Activate dark mode");
  label.textContent = isDark ? "Dark" : "Light";
}

function setupThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) {
    return;
  }

  updateThemeToggle(document.documentElement.dataset.theme || "light");
  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("#mobile-nav-toggle");
  const nav = document.querySelector(".site-nav");
  const actions = document.querySelector(".header-actions");

  if (!header || !toggle || !nav) {
    return;
  }

  const closeNav = () => {
    header.classList.remove("is-open");
    document.body.classList.remove("mobile-nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    header.classList.add("is-open");
    document.body.classList.add("mobile-nav-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    if (header.classList.contains("is-open")) {
      closeNav();
      return;
    }

    openNav();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  actions?.querySelectorAll("a, button").forEach((control) => {
    if (control === toggle) {
      return;
    }

    control.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

function setSharedBranding() {
  const { profile, socials } = portfolioContent;
  const brandName = document.querySelector("#brand-name");
  const brandTag = document.querySelector("#brand-tag");
  const brandLogo = document.querySelector("#brand-logo");
  const footerWordmark = document.querySelector("#footer-wordmark");
  const footerName = document.querySelector("#footer-name");
  const footerNote = document.querySelector("#footer-note");
  const footerMeta = document.querySelector("#footer-meta");
  const footerYearName = document.querySelector("#footer-year-name");
  const footerResumeLink = document.querySelector("#footer-resume-link");
  const footerSecondaryLinks = document.querySelector("#footer-secondary-links");
  const footerSocials = document.querySelector("#footer-socials");
  const currentYear = document.querySelector("#current-year");

  if (brandName) brandName.textContent = profile.name;
  if (brandTag) brandTag.textContent = profile.brandTag;
  if (brandLogo) brandLogo.src = profile.logoIconUrl;
  if (footerWordmark) footerWordmark.src = profile.logoWordmarkUrl;
  if (footerName) footerName.textContent = profile.name;
  if (footerNote) footerNote.textContent = profile.bio;
  if (footerMeta) footerMeta.textContent = "Analytics engineering, machine learning, and decision-focused data products.";
  if (footerYearName) footerYearName.textContent = profile.name;
  if (footerResumeLink) {
    footerResumeLink.href = profile.resumeUrl;
    footerResumeLink.textContent = "View / download resume";
  }
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  if (footerSecondaryLinks) {
    footerSecondaryLinks.innerHTML = `
      <a href="/about/">About</a>
      <a href="/projects/">Projects</a>
      <a href="/expertise/">Areas of Expertise</a>
      <a href="/contact/">Contact</a>
    `;
  }

  if (footerSocials) {
    footerSocials.innerHTML = socials
      .map(
        (item) => `
          <a href="${item.url}" ${externalAttrs(item.url)}>
            ${item.platform}
          </a>
        `
      )
      .join("");
  }
}

function setupActiveNav() {
  const currentPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkPage = link.dataset.page;
    const isActive = linkPage === currentPage;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupReveal() {
  const animatedElements = document.querySelectorAll("[data-animate]");
  if (prefersReducedMotion) {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
  );

  animatedElements.forEach((element) => observer.observe(element));
}

function renderHome() {
  const hero = document.querySelector("#home-hero-copy");
  if (!hero) {
    return;
  }

  const {
    profile,
    homeModes,
    experience,
    projects,
    education,
    socials,
    achievements
  } = portfolioContent;
  const aboutCopy = document.querySelector("#home-about-copy");
  const aboutAside = document.querySelector("#home-about-aside");
  const aboutTech = document.querySelector("#home-about-tech");
  const educationList = document.querySelector("#home-education-list");
  const experienceTabs = document.querySelector("#home-experience-tabs");
  const experiencePanel = document.querySelector("#home-experience-panel");
  const featuredWork = document.querySelector("#home-featured-work");
  const moreWork = document.querySelector("#home-more-work");
  const workToggle = document.querySelector("#home-work-toggle");
  const achievementTabs = document.querySelector("#home-achievement-tabs");
  const achievementPanel = document.querySelector("#home-achievement-panel");
  const contactCopy = document.querySelector("#home-contact-copy");
  const socialRail = document.querySelector("#home-social-rail");
  const emailRail = document.querySelector("#home-email-rail");
  const modeLaunch = document.querySelector("#mode-launch");
  const brandIntro = document.querySelector("#brand-intro");
  const modeLaunchGrid = document.querySelector("#mode-launch-grid");
  const modeButton = document.querySelector("#home-mode-button");
  const resumeButton = document.querySelector("#home-resume-button");
  if (
    !aboutCopy ||
    !aboutAside ||
    !aboutTech ||
    !educationList ||
    !experienceTabs ||
    !experiencePanel ||
    !featuredWork ||
    !moreWork ||
    !workToggle ||
    !achievementTabs ||
    !achievementPanel ||
    !contactCopy ||
    !socialRail ||
    !emailRail ||
    !modeLaunch ||
    !brandIntro ||
    !modeLaunchGrid ||
    !modeButton ||
    !resumeButton
  ) {
    return;
  }

  document.title = `${profile.name} | ${profile.title}`;

  aboutCopy.innerHTML = profile.aboutParagraphs
    .map((paragraph, index) => `<p data-animate style="--delay: ${index * 0.06}s">${paragraph}</p>`)
    .join("");

  aboutAside.innerHTML = `
    <article class="home-aside-card" data-animate>
      <div class="home-aside-card__portrait">
        <img src="${profile.headshotUrl}" alt="${profile.name} headshot" />
      </div>
    </article>
  `;

  const modeMap = new Map(homeModes.map((mode) => [mode.id, mode]));
  let activeMode = modeMap.get(profile.defaultModeId) || homeModes[0];

  const renderEducationList = () => {
    educationList.innerHTML = education
      .map(
        (item, index) => `
          <article class="editor-home__education-card" data-animate style="--delay: ${index * 0.05}s">
            <p class="editor-home__education-meta">${item.institution}</p>
            <h3>${item.credential}</h3>
            <p class="editor-home__experience-meta">${item.location}</p>
          </article>
        `
      )
      .join("");
    revealRenderedContent([educationList]);
  };

  const renderLaunchCards = (activeModeId) =>
    homeModes
      .map(
        (mode) => `
          <button
            class="mode-launch__card${mode.id === activeModeId ? " is-active" : ""}"
            type="button"
            data-launch-mode="${mode.id}"
            aria-pressed="${mode.id === activeModeId ? "true" : "false"}"
          >
            <span class="mode-launch__icon">${icon(mode.icon)}</span>
            <span class="mode-launch__label">${mode.label}</span>
            ${mode.id === profile.defaultModeId ? '<span class="mode-launch__default">Default</span>' : ""}
          </button>
        `
      )
      .join("");

  const renderExperienceTabs = (selectedCompany) => {
    experienceTabs.innerHTML = experience
      .map(
        (item, index) => `
          <button
            class="editor-home__tab${item.company === selectedCompany ? " is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${item.company === selectedCompany ? "true" : "false"}"
            data-home-experience="${index}"
          >
            ${item.company}
          </button>
        `
      )
      .join("");
  };

  const renderExperiencePanel = (index) => {
    const item = experience[index];
    if (!item) {
      return;
    }

    experiencePanel.innerHTML = `
      <article class="editor-home__experience-card" data-animate>
        <h3>${item.role} <span>@ ${item.company}</span></h3>
        <p class="editor-home__experience-meta">${item.dates} / ${item.location}</p>
        ${item.summary.length
          ? `
            <div class="editor-home__experience-notes">
              ${item.summary
                .slice(0, 3)
                .map((note) => `<p>${note}</p>`)
                .join("")}
            </div>
          `
          : ""}
      </article>
    `;
    revealRenderedContent([experiencePanel]);
  };

  const achievementYears = [...new Set(achievements.map((item) => item.year))]
    .sort((first, second) => Number(second) - Number(first));
  const achievementGroups = [];
  for (let index = 0; index < achievementYears.length; index += 3) {
    const years = achievementYears.slice(index, index + 3);
    achievementGroups.push({
      id: years.join("-"),
      label: years.length === 1 ? years[0] : `${years[0]}-${years[years.length - 1]}`,
      years
    });
  }

  const renderAchievementTabs = (selectedGroupId) => {
    achievementTabs.innerHTML = achievementGroups
      .map(
        (group) => `
          <button
            class="editor-home__tab${group.id === selectedGroupId ? " is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${group.id === selectedGroupId ? "true" : "false"}"
            data-home-achievement-group="${group.id}"
          >
            ${group.label}
          </button>
        `
      )
      .join("");
  };

  const renderAchievementPanel = (selectedGroupId, selectedYear) => {
    const activeGroup = achievementGroups.find((group) => group.id === selectedGroupId) || achievementGroups[0];
    const resolvedYear = activeGroup.years.includes(selectedYear) ? selectedYear : activeGroup.years[0];
    achievementPanel.innerHTML = `
      <article class="editor-home__experience-card editor-home__experience-card--compact" data-animate>
        <div class="editor-home__year-pills">
          ${activeGroup.years
            .map(
              (year) => `
                <button
                  class="editor-home__year-pill${year === resolvedYear ? " is-active" : ""}"
                  type="button"
                  data-home-achievement-year="${year}"
                  aria-pressed="${year === resolvedYear ? "true" : "false"}"
                >
                  ${year}
                </button>
              `
            )
            .join("")}
        </div>
        <h3>${resolvedYear}</h3>
        <div class="editor-home__experience-notes">
          ${achievements
            .filter((item) => item.year === resolvedYear)
            .map((item) => `<p>${item.title}</p>`)
            .join("")}
        </div>
      </article>
    `;
    revealRenderedContent([achievementPanel]);
  };

  const setTools = (mode) => {
    aboutTech.innerHTML = mode.toolItems
      .map(
        (item, index) => `
          <div class="editor-home__tech-item" data-animate style="--delay: ${index * 0.04}s">
            <span class="editor-home__tech-bullet">${icon("share")}</span>
            <span>${item}</span>
          </div>
        `
      )
      .join("");
    revealRenderedContent([aboutTech]);
  };

  const setProjects = (mode) => {
    const featuredProjects = mode.projectIds
      .map((projectId) => projects.find((project) => project.id === projectId))
      .filter(Boolean);
    const extraProjects = projects.filter((project) => !mode.projectIds.includes(project.id));

    featuredWork.innerHTML = featuredProjects
      .map((project, index) => renderHomeFeaturedProject(project, index))
      .join("");

    moreWork.innerHTML = `
      <div class="editor-home__more-grid">
        ${extraProjects
          .map(
            (project, index) => `
              <article class="editor-home__mini-project" data-animate style="--delay: ${index * 0.05}s">
                <p class="section-label">${project.categories.join(" / ")}</p>
                <h3>${project.shortTitle}</h3>
                <p>${project.problem}</p>
                <div class="editor-home__mini-metrics">
                  ${project.metrics
                    .slice(0, 2)
                    .map((metric) => `<span>${metric.value} ${metric.label}</span>`)
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;

    moreWork.hidden = true;
    workToggle.setAttribute("aria-expanded", "false");
    workToggle.textContent = "Show More";
    workToggle.hidden = !extraProjects.length;
    revealRenderedContent([featuredWork]);
  };

  const setHero = (mode) => {
    hero.innerHTML = `
      <p class="editor-home__intro" data-animate>${profile.homeIntro}</p>
      <h1 id="home-title" data-animate>${profile.name}</h1>
      <h2 class="editor-home__statement" data-animate>${mode.statement}</h2>
      <p class="editor-home__summary" data-animate>
        ${mode.summary}
      </p>
      <div class="editor-home__meta" data-animate>
        <span>${profile.location}</span>
        <span>${profile.relocation}</span>
        <span>${profile.availability}</span>
      </div>
      <div class="editor-home__hero-actions" data-animate>
        <a class="ghost-button ghost-button--filled" href="#work">View work</a>
        <a class="ghost-button" href="${mode.resumeUrl}" target="_blank" rel="noreferrer">Open ${mode.label} resume</a>
      </div>
    `;
    revealRenderedContent([hero]);
  };

  const setContact = (mode) => {
    contactCopy.innerHTML = `
      <p class="editor-home__contact-eyebrow" data-animate>06. What's next?</p>
      <h2 id="contact-title" data-animate>Get In Touch</h2>
      <p class="editor-home__contact-summary" data-animate>${profile.contactBlurb}</p>
      <div class="editor-home__contact-actions" data-animate>
        <a class="ghost-button ghost-button--filled" href="mailto:${profile.email}">Say Hello</a>
        <a class="ghost-button" href="${mode.resumeUrl}" target="_blank" rel="noreferrer">Open ${mode.label} resume</a>
      </div>
    `;
    revealRenderedContent([contactCopy]);
  };

  const applyMode = (modeId) => {
    const nextMode = modeMap.get(modeId) || modeMap.get(profile.defaultModeId) || homeModes[0];
    activeMode = nextMode;

    modeButton.textContent = nextMode.label;
    resumeButton.href = nextMode.resumeUrl;
    resumeButton.textContent = "Resume";

    setHero(nextMode);
    setTools(nextMode);
    setProjects(nextMode);
    setContact(nextMode);

    const defaultExperienceIndex = experience.findIndex((item) => item.company === nextMode.experienceCompany);
    const resolvedExperienceIndex = defaultExperienceIndex >= 0 ? defaultExperienceIndex : 0;
    renderExperienceTabs(experience[resolvedExperienceIndex].company);
    renderExperiencePanel(resolvedExperienceIndex);

    modeLaunchGrid.innerHTML = renderLaunchCards(nextMode.id);
  };

  workToggle.addEventListener("click", () => {
    const isExpanded = workToggle.getAttribute("aria-expanded") === "true";
    moreWork.hidden = isExpanded;
    workToggle.setAttribute("aria-expanded", String(!isExpanded));
    workToggle.textContent = isExpanded ? "Show More" : "Show Less";
    if (!isExpanded) {
      revealRenderedContent([moreWork]);
    }
  });

  experienceTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-home-experience]");
    if (!tab) {
      return;
    }

    const nextIndex = Number(tab.dataset.homeExperience);
    experienceTabs.querySelectorAll("[data-home-experience]").forEach((button, buttonIndex) => {
      const isActive = buttonIndex === nextIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    renderExperiencePanel(nextIndex);
  });

  achievementTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-home-achievement-group]");
    if (!tab) {
      return;
    }

    const selectedGroupId = tab.dataset.homeAchievementGroup;
    const nextGroup = achievementGroups.find((group) => group.id === selectedGroupId) || achievementGroups[0];
    achievementTabs.querySelectorAll("[data-home-achievement-group]").forEach((button) => {
      const isActive = button.dataset.homeAchievementGroup === selectedGroupId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    renderAchievementPanel(nextGroup.id, nextGroup.years[0]);
  });

  achievementPanel.addEventListener("click", (event) => {
    const pill = event.target.closest("[data-home-achievement-year]");
    if (!pill) {
      return;
    }

    const activeGroupButton = achievementTabs.querySelector(".is-active[data-home-achievement-group]");
    const selectedGroupId = activeGroupButton?.dataset.homeAchievementGroup || achievementGroups[0]?.id;
    renderAchievementPanel(selectedGroupId, pill.dataset.homeAchievementYear);
  });

  const railLinks = socials.filter((item) => ["GitHub", "LinkedIn", "Email"].includes(item.platform));
  socialRail.innerHTML = `
    <div class="edge-rail__links">
      ${railLinks
        .map(
          (item) => `
            <a href="${item.url}" ${externalAttrs(item.url)} aria-label="${item.platform}">
              ${icon(item.icon)}
            </a>
          `
        )
        .join("")}
    </div>
    <span class="edge-rail__line" aria-hidden="true"></span>
  `;

  emailRail.innerHTML = `
    <a class="edge-rail__email" href="mailto:${profile.email}">${profile.email}</a>
    <span class="edge-rail__line" aria-hidden="true"></span>
  `;

  const showLauncher = () => {
    modeLaunch.classList.remove("is-hidden");
    document.body.classList.add("mode-launch-open");
    modeLaunchGrid.innerHTML = renderLaunchCards(activeMode.id);
  };

  const hideLauncher = () => {
    modeLaunch.classList.add("is-hidden");
    document.body.classList.remove("mode-launch-open");
  };

  const playBrandIntro = () => {
    document.body.classList.add("brand-intro-open");
    requestAnimationFrame(() => {
      brandIntro.classList.add("is-active");
    });

    const exitDelay = prefersReducedMotion ? 180 : 900;
    const totalDuration = prefersReducedMotion ? 420 : 1450;

    window.setTimeout(() => {
      brandIntro.classList.add("is-exiting");
    }, exitDelay);

    window.setTimeout(() => {
      brandIntro.classList.add("is-hidden");
      document.body.classList.remove("brand-intro-open");
      showLauncher();
    }, totalDuration);
  };

  modeLaunchGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-launch-mode]");
    if (!card) {
      return;
    }

    applyMode(card.dataset.launchMode);
    hideLauncher();
  });

  modeButton.addEventListener("click", () => {
    showLauncher();
  });

  applyMode(profile.defaultModeId);
  renderEducationList();
  renderAchievementTabs(achievementGroups[0].id);
  renderAchievementPanel(achievementGroups[0].id, achievementGroups[0].years[0]);
  playBrandIntro();
  revealRenderedContent([aboutAside, aboutCopy, socialRail, emailRail]);
}

function renderHomeFeaturedProject(project, index) {
  const isReversed = index % 2 === 1;
  return `
    <article class="editor-home__feature${isReversed ? " is-reversed" : ""}" data-animate style="--delay: ${index * 0.08}s">
      <div class="editor-home__feature-visual">
        <div class="editor-home__feature-screen">
          <p class="editor-home__feature-kicker">${project.categories.join(" / ")}</p>
          <h3>${project.shortTitle}</h3>
          <div class="editor-home__feature-bars">
            ${project.metrics
              .slice(0, 3)
              .map(
                (metric, metricIndex) => `
                  <div class="editor-home__feature-bar" style="--bar-width: ${78 - metricIndex * 14}%">
                    <span>${metric.value}</span>
                    <small>${metric.label}</small>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
      <div class="editor-home__feature-copy">
        <p class="editor-home__eyebrow">Featured Project</p>
        <h3>${project.title}</h3>
        <div class="editor-home__feature-card">
          <p>${project.approach}</p>
        </div>
        <div class="editor-home__feature-tools">
          ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
        </div>
        <div class="editor-home__feature-actions">
          ${project.githubUrl ? `<a class="text-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderHomeModeCards(modes) {
  return modes
    .map(
      (mode, index) => `
        <button
          class="home-choice-card"
          type="button"
          data-home-mode="${mode.id}"
          data-animate
          style="--delay: ${index * 0.06}s"
          role="tab"
          aria-selected="false"
        >
          <span class="home-choice-card__icon">${icon(mode.icon)}</span>
          <span class="home-choice-card__label">${mode.label}</span>
        </button>
      `
    )
    .join("");
}

function renderHomeSelectedSummary(mode, profile, modes) {
  return `
    <div class="home-selected-summary__topline" data-animate>
      <p class="section-label">${profile.name}</p>
      <button class="text-link text-link--button" type="button" data-home-reset>All views</button>
    </div>
    <div class="editorial-heading" data-animate>
      <h1 id="home-mode-title">${mode.heroTitle}</h1>
    </div>
    <p class="hero-tagline home-selected-summary__tagline" data-animate>${mode.tagline}</p>
    <div class="home-selected-summary__modes" data-animate>
      ${modes
        .map(
          (item) => `
            <button
              class="home-mode-pill${item.id === mode.id ? " is-active" : ""}"
              type="button"
              data-home-mode="${item.id}"
              aria-pressed="${item.id === mode.id ? "true" : "false"}"
            >
              ${item.label}
            </button>
          `
        )
        .join("")}
    </div>
    <div class="chip-list" data-animate>
      ${mode.accents.map((item) => `<span class="tag">${item}</span>`).join("")}
    </div>
    <div class="editorial-meta" data-animate>
      <span>${profile.location}</span>
      <span>${profile.relocation}</span>
      <span>${profile.availability}</span>
    </div>
    <div class="hero-actions" data-animate>
      <a class="button button--primary" href="/projects/">Explore projects</a>
      <a class="button button--secondary" href="${profile.resumeUrl}" target="_blank" rel="noreferrer">View resume</a>
    </div>
  `;
}

function renderOutcomeRows(items) {
  return items
    .map(
      (item, index) => `
        <article class="outcome-row" data-animate style="--delay: ${index * 0.08}s">
          <div class="outcome-value">${item.value}</div>
          <p class="outcome-label">${item.label}</p>
        </article>
      `
    )
    .join("");
}

function renderHomeExpertise(items) {
  return `
    <div class="editorial-list">
      ${items
        .map(
          (item, index) => `
            <article class="editorial-entry" data-animate style="--delay: ${index * 0.06}s">
              <div class="feature-icon">${icon(item.icon)}</div>
              <div class="editorial-entry__body">
                <h3>${item.title}</h3>
                <p>${item.copy}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderHomeProjects(mode, projects) {
  const selectedProjects = mode.projectIds
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean)
    .slice(0, 3);

  return `
    <div class="home-project-list">
      ${selectedProjects
        .map(
          (project, index) => `
            <article class="home-project-item" data-animate style="--delay: ${index * 0.08}s">
              <div class="card-topline">
                <span class="inline-icon">${icon(project.icon)}</span>
                <p class="section-label">${project.timeframe || mode.label}</p>
              </div>
              <h3>${project.shortTitle}</h3>
              <p class="project-summary">${project.problem}</p>
              <div class="project-metrics project-metrics--compact">
                ${project.metrics
                  .slice(0, 2)
                  .map(
                    (metric) => `
                      <div class="metric-pill">
                        <span class="metric-value">${metric.value}</span>
                        <span class="metric-label">${metric.label}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
        )
        .join("")}
      <article class="editorial-note editorial-note--inline" data-animate style="--delay: 0.24s">
        <p class="section-label">More work</p>
        <h3>See the full project archive.</h3>
        <a class="text-link" href="/projects/">View all projects</a>
      </article>
    </div>
  `;
}

function populateHomeSections(mode, projects, experience, education, profile) {
  const impact = document.querySelector("#home-impact");
  const focus = document.querySelector("#home-focus");
  const projectPreview = document.querySelector("#home-project-preview");
  const snapshot = document.querySelector("#home-snapshot");
  const cta = document.querySelector("#home-cta");
  if (!impact || !focus || !projectPreview || !snapshot || !cta) {
    return;
  }

  impact.hidden = false;
  focus.hidden = false;
  projectPreview.hidden = false;
  snapshot.hidden = false;
  cta.hidden = false;

  impact.innerHTML = `
    <section class="home-stack-section" data-animate>
      <div class="home-stack-heading">
        <div class="panel-brand panel-brand--compact">
          <div class="panel-logo-shell panel-logo-shell--compact">
            <img class="panel-logo" src="${profile.logoIconUrl}" alt="${profile.name} logo" />
          </div>
          <div>
            <p class="section-label" id="home-impact-mode">${mode.label}</p>
            <h2>Selected outcomes</h2>
          </div>
        </div>
      </div>
      <div class="outcome-list" id="home-outcome-list">
        ${renderOutcomeRows(mode.highlights)}
      </div>
    </section>
  `;

  focus.innerHTML = `
    <section class="home-stack-section" data-animate>
      <div class="home-stack-heading">
        <div>
          <p class="section-label">Core focus</p>
          <h2>What this view emphasizes.</h2>
        </div>
      </div>
      <div id="home-expertise-list">
        ${renderHomeExpertise(mode.expertise)}
      </div>
    </section>
  `;

  projectPreview.innerHTML = `
    <section class="home-stack-section" data-animate>
      <div class="home-stack-heading">
        <div>
          <p class="section-label">Featured projects</p>
          <h2>Work in this lens.</h2>
        </div>
        <p class="home-stack-meta" id="home-project-count">${Math.min(mode.projectIds.length, 3)} projects</p>
      </div>
      <div id="home-project-list">
        ${renderHomeProjects(mode, projects)}
      </div>
    </section>
  `;

  snapshot.innerHTML = `
    <section class="home-stack-section" data-animate>
      <div class="home-stack-heading">
        <div>
          <p class="section-label">Right now</p>
          <h2>Work and study.</h2>
        </div>
      </div>
      <div class="home-record-list">
          <article class="editorial-record" data-animate>
            <div class="card-topline">
              <span class="inline-icon">${icon("briefcase")}</span>
              <p class="section-label">Current work</p>
            </div>
            <h3>${experience[0].role}</h3>
            <p class="snapshot-meta">${experience[0].company} / ${experience[0].location}</p>
            <p class="snapshot-copy">${experience[0].dates}</p>
            <a class="text-link" href="/about/">View experience</a>
          </article>
          <article class="editorial-record" data-animate style="--delay: 0.08s">
            <div class="card-topline">
              <span class="inline-icon">${icon("graduation")}</span>
              <p class="section-label">Education</p>
            </div>
            <h3>${education[0].credential}</h3>
            <p class="snapshot-meta">${education[0].institution}</p>
            <p class="snapshot-copy">${education[0].location}</p>
            <a class="text-link" href="/about/">See background</a>
          </article>
      </div>
    </section>
  `;

  cta.innerHTML = `
    <section class="home-connect" data-animate>
      <p class="section-label">Connect</p>
      <h2>Open to roles, collaborations, and thoughtful builds.</h2>
      <div class="cta-actions">
        <a class="button button--primary" href="/contact/">Get in touch</a>
        <a class="button button--secondary" href="/expertise/">View expertise</a>
      </div>
    </section>
  `;

  revealRenderedContent([impact, focus, projectPreview, snapshot, cta]);
}

function setupLensSwitcher(modes) {
  const buttons = document.querySelectorAll(".lens-button");
  const panel = document.querySelector("#lens-panel");
  if (!buttons.length || !panel) {
    return;
  }

  const renderMode = (mode) => {
    panel.innerHTML = `
      <div class="feature-icon">${icon(mode.icon)}</div>
      <div class="lens-panel__content">
        <h3>${mode.title}</h3>
        <p>${mode.copy}</p>
        <div class="chip-list">
          ${mode.accents.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    `;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextMode = modes.find((mode) => mode.id === button.dataset.lens);
      if (!nextMode) {
        return;
      }

      buttons.forEach((currentButton) => {
        const isActive = currentButton === button;
        currentButton.classList.toggle("is-active", isActive);
        currentButton.setAttribute("aria-selected", String(isActive));
      });

      renderMode(nextMode);
    });
  });
}

function setupHomeModes(modes, projects) {
  const hero = document.querySelector("#home-hero");
  const summary = document.querySelector("#home-selected-summary");
  const choiceGrid = document.querySelector("#home-choice-grid");
  const homeDocument = document.querySelector(".home-document");
  if (!hero || !summary) {
    return;
  }

  const getButtons = () => hero.querySelectorAll("[data-home-mode]");

  const syncModeButtons = (activeModeId) => {
    getButtons().forEach((button) => {
      const isActive = button.dataset.homeMode === activeModeId;
      button.classList.toggle("is-active", isActive);
      if (button.classList.contains("home-choice-card")) {
        button.setAttribute("aria-selected", String(isActive));
      } else {
        button.setAttribute("aria-pressed", String(isActive));
      }
    });
  };

  const resetView = () => {
    summary.hidden = true;
    summary.innerHTML = "";
    if (choiceGrid) {
      choiceGrid.hidden = false;
    }

    [
      document.querySelector("#home-impact"),
      document.querySelector("#home-focus"),
      document.querySelector("#home-project-preview"),
      document.querySelector("#home-snapshot"),
      document.querySelector("#home-cta")
    ].forEach((section) => {
      if (section) {
        section.hidden = true;
        section.innerHTML = "";
      }
    });

    syncModeButtons("");
    if (homeDocument) {
      homeDocument.classList.add("home-document--chooser");
    }

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const renderMode = (mode) => {
    if (choiceGrid) {
      choiceGrid.hidden = true;
    }
    summary.hidden = false;
    summary.innerHTML = renderHomeSelectedSummary(mode, portfolioContent.profile, modes);
    populateHomeSections(mode, projects, portfolioContent.experience, portfolioContent.education, portfolioContent.profile);
    revealRenderedContent([summary]);
    if (homeDocument) {
      homeDocument.classList.remove("home-document--chooser");
    }
    syncModeButtons(mode.id);
  };

  hero.addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-home-reset]");
    if (resetButton) {
      resetView();
      return;
    }

    const modeButton = event.target.closest("[data-home-mode]");
    if (!modeButton) {
      return;
    }

    const nextMode = modes.find((mode) => mode.id === modeButton.dataset.homeMode);
    if (!nextMode) {
      return;
    }

    renderMode(nextMode);
  });
}

function revealRenderedContent(nodes) {
  nodes
    .filter(Boolean)
    .forEach((node) => {
      node.querySelectorAll("[data-animate]").forEach((element) => {
        element.classList.add("is-visible");
      });
    });
}

function setupHomeAccordions() {
  const accordions = document.querySelectorAll("[data-home-accordion]");
  accordions.forEach((accordion) => {
    const button = accordion.querySelector(".home-accordion__button");
    if (!button) {
      return;
    }

    const setOpen = (isOpen) => {
      accordion.classList.toggle("is-open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
    };

    setOpen(accordion.classList.contains("is-open"));

    button.addEventListener("click", () => {
      setOpen(!accordion.classList.contains("is-open"));
    });
  });
}

function renderAbout() {
  const overview = document.querySelector("#about-overview");
  if (!overview) {
    return;
  }

  const { profile, skills, experience, education, achievements } = portfolioContent;
  const skillsGrid = document.querySelector("#about-skills-grid");
  const timeline = document.querySelector("#about-timeline");
  const educationGrid = document.querySelector("#about-education-grid");
  const achievementsList = document.querySelector("#about-achievements-list");

  overview.innerHTML = `
    <article class="detail-card" data-animate>
      <div class="card-topline">
        <span class="inline-icon">${icon("spark")}</span>
        <p class="section-label">Summary</p>
      </div>
      <h2>${profile.title}</h2>
      <p class="detail-copy">${profile.bio}</p>
      <div class="hero-signals">
        ${profile.focusAreas.map((item) => `<span class="signal-pill">${item}</span>`).join("")}
      </div>
    </article>
    <article class="detail-card" data-animate style="--delay: 0.08s">
      <div class="card-topline">
        <span class="inline-icon">${icon("award")}</span>
        <p class="section-label">Quick facts</p>
      </div>
      <div class="facts-list">
        <div class="fact-item">${renderIconBadge("graduation", "MSBA Candidate at Wake Forest")}</div>
        <div class="fact-item">${renderIconBadge("briefcase", "Based in Winston-Salem, NC")}</div>
        <div class="fact-item">${renderIconBadge("spark", `Interests: ${profile.interests.slice(0, 2).join(" / ")}`)}</div>
        <div class="fact-item">${renderIconBadge("compass", `Interests: ${profile.interests.slice(2).join(" / ")}`)}</div>
      </div>
    </article>
  `;

  skillsGrid.innerHTML = skills
    .map(
      (group, index) => `
        <article class="feature-card feature-card--skill" data-animate style="--delay: ${index * 0.06}s">
          <div class="feature-icon">${icon(group.icon)}</div>
          <h3>${group.category}</h3>
          <div class="chip-list">
            ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  timeline.innerHTML = experience
    .map(
      (item, index) => `
        <article class="timeline-item" data-animate style="--delay: ${index * 0.06}s">
          <div class="timeline-head">
            <div>
              <h3>${item.role}</h3>
              <p class="timeline-company">${item.company}</p>
              <p class="timeline-location">${item.location}</p>
            </div>
            <p class="timeline-dates">${item.dates}</p>
          </div>
        </article>
      `
    )
    .join("");

  educationGrid.innerHTML = education
    .map(
      (item, index) => `
        <article class="snapshot-card" data-animate style="--delay: ${index * 0.06}s">
          <div class="card-topline">
            <span class="inline-icon">${icon("graduation")}</span>
          </div>
          <h3>${item.credential}</h3>
          <p class="snapshot-meta">${item.institution}</p>
          <p class="snapshot-copy">${item.location}</p>
        </article>
      `
    )
    .join("");

  achievementsList.innerHTML = achievements
    .map(
      (item, index) => `
        <article class="achievement-card" data-animate style="--delay: ${index * 0.04}s">
          <span class="achievement-year">${item.year}</span>
          <h3>${item.title}</h3>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const metricsGrid = document.querySelector("#projects-metrics");
  if (!metricsGrid) {
    return;
  }

  const { profile, projects, projectMethods, projectFilters } = portfolioContent;
  const projectsGrid = document.querySelector("#projects-grid");
  const toolkitGrid = document.querySelector("#projects-toolkit");
  const filters = document.querySelector("#projects-filters");

  metricsGrid.innerHTML = profile.highlights
    .map(
      (item, index) => `
        <article class="metric-card" data-animate style="--delay: ${index * 0.06}s">
          <div class="metric-value">${item.value}</div>
          <p class="metric-copy">${item.label}</p>
        </article>
      `
    )
    .join("");

  if (filters) {
    filters.innerHTML = `
      <div class="filter-bar" data-animate>
        ${projectFilters
          .map(
            (filter, index) => `
              <button
                class="filter-chip${index === 0 ? " is-active" : ""}"
                type="button"
                data-filter="${filter}"
                aria-pressed="${index === 0 ? "true" : "false"}"
              >
                ${filter}
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card project-card--interactive" data-project-card data-categories="${project.categories.join(",")}" data-animate style="--delay: ${index * 0.06}s">
          <div class="card-topline">
            <span class="inline-icon">${icon(project.icon)}</span>
            <p class="section-label">Project ${String(index + 1).padStart(2, "0")}</p>
          </div>
          <h3>${project.title}</h3>
          <p class="project-summary"><strong>Problem:</strong> ${project.problem}</p>
          <div class="chip-list">
            ${project.categories.map((category) => `<span class="tag">${category}</span>`).join("")}
          </div>
          <div class="project-metrics">
            ${project.metrics
              .map(
                (metric) => `
                  <div class="metric-pill">
                    <span class="metric-value">${metric.value}</span>
                    <span class="metric-label">${metric.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <button class="project-toggle" type="button" aria-expanded="false">
            Open case
          </button>
          <div class="project-detail">
            <p class="project-summary"><strong>Approach:</strong> ${project.approach}</p>
            <div class="chip-list">
              ${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  toolkitGrid.innerHTML = projectMethods
    .map(
      (group, index) => `
        <article class="feature-card feature-card--skill" data-animate style="--delay: ${index * 0.06}s">
          <div class="feature-icon">${icon(group.icon)}</div>
          <h3>${group.title}</h3>
          <p>${group.copy}</p>
        </article>
      `
    )
    .join("");

  setupProjectFilters();
  setupProjectToggles();
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll("[data-project-card]");
  if (!filterButtons.length || !projectCards.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((currentButton) => {
        const isActive = currentButton === button;
        currentButton.classList.toggle("is-active", isActive);
        currentButton.setAttribute("aria-pressed", String(isActive));
      });

      projectCards.forEach((card) => {
        const categories = (card.dataset.categories || "").split(",");
        const shouldShow = filter === "All" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

function setupProjectToggles() {
  const cards = document.querySelectorAll("[data-project-card]");
  cards.forEach((card) => {
    const button = card.querySelector(".project-toggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("is-expanded");
      button.setAttribute("aria-expanded", String(isExpanded));
      button.textContent = isExpanded ? "Close case" : "Open case";
    });
  });
}

function renderServices() {
  const servicesGrid = document.querySelector("#services-grid");
  if (!servicesGrid) {
    return;
  }

  const { services, process } = portfolioContent;
  const processGrid = document.querySelector("#services-process");
  const fitGrid = document.querySelector("#services-fit");

  servicesGrid.innerHTML = services
    .map(
      (service, index) => `
        <article class="feature-card feature-card--service" data-animate style="--delay: ${index * 0.06}s">
          <div class="feature-icon">${icon(service.icon)}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="chip-list">
            ${service.deliverables.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  processGrid.innerHTML = process
    .map(
      (step, index) => `
        <article class="flow-step" data-animate style="--delay: ${index * 0.06}s">
          <div class="flow-step__badge">
            <div class="flow-step__count">0${index + 1}</div>
          </div>
          <div class="flow-step__content">
            <div class="flow-step__header">
              <div class="feature-icon feature-icon--flow">${icon(step.icon)}</div>
              <div class="flow-step__heading">
                <p class="flow-step__label">Step ${index + 1}</p>
                <h3>${step.title}</h3>
              </div>
            </div>
            <p>${step.copy}</p>
          </div>
        </article>
      `
    )
    .join("");

  fitGrid.innerHTML = `
    <article class="detail-card" data-animate>
      <div class="card-topline">
        <span class="inline-icon">${icon("mail")}</span>
        <p class="section-label">Next step</p>
      </div>
      <h2>Start with a short note, a data problem, or a rough brief.</h2>
      <p class="detail-copy">
        If you already know the problem, I can help shape the analysis, workflow, or model path from there.
      </p>
      <div class="cta-actions">
        <a class="button button--primary" href="/contact/">Contact me</a>
        <a class="button button--secondary" href="/AlliAjagbeResume.pdf" target="_blank" rel="noreferrer">View resume</a>
      </div>
    </article>
  `;
}

function renderContact() {
  const contactGrid = document.querySelector("#contact-grid");
  if (!contactGrid) {
    return;
  }

  const { profile, socials } = portfolioContent;
  const contactIntro = document.querySelector("#contact-intro");
  const contactAside = document.querySelector("#contact-aside");

  contactIntro.innerHTML = `
    <div class="detail-card" data-animate>
      <div class="card-topline">
        <span class="inline-icon">${icon("mail")}</span>
        <p class="section-label">Let's connect</p>
      </div>
      <h2>Reach out.</h2>
      <p class="detail-copy">
        I am interested in opportunities across data science, analytics, business intelligence, and applied AI. The fastest way to reach me is by email or LinkedIn.
      </p>
      <div class="hero-signals">
        ${profile.quickFacts.map((item) => `<span class="signal-pill">${item}</span>`).join("")}
      </div>
    </div>
  `;

  contactGrid.innerHTML = socials
    .map(
      (item, index) => `
        <a class="contact-method" href="${item.url}" ${externalAttrs(item.url)} data-animate style="--delay: ${index * 0.05}s">
          <span class="feature-icon">${icon(item.icon)}</span>
          <span class="contact-method__meta">
            <span class="contact-method__label">${item.platform}</span>
            <strong>${item.label}</strong>
          </span>
        </a>
      `
    )
    .join("");

  contactAside.innerHTML = `
    <article class="snapshot-card" data-animate>
      <div class="card-topline">
        <span class="inline-icon">${icon("briefcase")}</span>
        <p class="section-label">Availability</p>
      </div>
      <h3>${profile.availability}</h3>
      <p class="snapshot-copy">Based in ${profile.location}. ${profile.relocation}. Open to full-time roles, project collaborations, and conversations around analytics and applied AI.</p>
    </article>
  `;
}

function init() {
  setSharedBranding();
  setupMobileNav();
  setupThemeToggle();
  setupActiveNav();
  renderHome();
  renderAbout();
  renderProjects();
  renderServices();
  renderContact();
  setupReveal();
}

init();
