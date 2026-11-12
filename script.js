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
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="4.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m9.5 13 1.2 6L12 17.5 13.3 19l1.2-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 16 16 8m0 0H9.5M16 8v6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5.5 12.5 4.2 4.2 8.8-9.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9"/></svg>',
  copy:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="10" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M15 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.400 6.500 11 6.500 11Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/><circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
  terminal:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m7.500 10 2.500 2.200-2.500 2.200M12.500 14.500h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.600 5.600 7 7m10 10 1.400 1.400M5.600 18.400 7 17M17 7l1.400-1.400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.500A8 8 0 0 1 9.500 4a8 8 0 1 0 10.500 10.500Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>'
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

function setTheme(theme, origin) {
  const root = document.documentElement;
  const apply = () => {
    root.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      // Storage can be unavailable (private mode); the theme still switches.
    }
    updateThemeToggle(theme);
  };

  if (prefersReducedMotion || !document.startViewTransition) {
    apply();
    return;
  }

  // Reveal the new theme as a circle growing from the click point.
  const x = origin ? origin.x : window.innerWidth / 2;
  const y = origin ? origin.y : 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  root.style.setProperty("--vt-x", `${x}px`);
  root.style.setProperty("--vt-y", `${y}px`);
  root.style.setProperty("--vt-r", `${radius}px`);
  root.dataset.vt = "theme";
  document.startViewTransition(apply).finished.finally(() => {
    delete root.dataset.vt;
  });
}

function updateThemeToggle(theme) {
  const toggle = document.querySelector("#theme-toggle");
  const label = document.querySelector("#theme-toggle-label");
  if (!toggle) {
    return;
  }

  const isDark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Activate light mode" : "Activate dark mode");
  if (label) {
    label.textContent = isDark ? "Dark" : "Light";
  }
}

function setupThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) {
    return;
  }

  updateThemeToggle(document.documentElement.dataset.theme || "light");
  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const rect = toggle.getBoundingClientRect();
    setTheme(currentTheme === "dark" ? "light" : "dark", {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
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

/* ─── UI primitives (vanilla ports of beui.dev motion patterns) ─── */

const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const arrowChip = `<span class="be-btn__arrow" aria-hidden="true">${icon("arrow")}</span>`;

// A single indicator that glides between the items of a group (nav, tabs, menu rows).
function createGlide(container, { itemSelector, hover = false } = {}) {
  const indicator = document.createElement("span");
  indicator.className = "be-glide";
  indicator.setAttribute("aria-hidden", "true");
  container.prepend(indicator);

  const move = (target, instant = false) => {
    if (!target) {
      container.classList.remove("is-ready");
      return;
    }

    const wasHidden = !container.classList.contains("is-ready");
    if (instant || wasHidden) {
      indicator.style.transition = "none";
    }
    indicator.style.setProperty("--x", `${target.offsetLeft}px`);
    indicator.style.setProperty("--y", `${target.offsetTop}px`);
    indicator.style.setProperty("--w", `${target.offsetWidth}px`);
    indicator.style.setProperty("--h", `${target.offsetHeight}px`);
    if (instant || wasHidden) {
      void indicator.offsetWidth;
      indicator.style.transition = "";
    }
    container.classList.add("is-ready");
  };

  const sync = (instant = false) => move(container.querySelector(`${itemSelector}.is-active`), instant);

  if (hover && canHover) {
    container.addEventListener("pointerover", (event) => {
      const item = event.target.closest(itemSelector);
      if (item) {
        move(item);
      }
    });
    container.addEventListener("pointerleave", () => sync());
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => sync(true)).observe(container);
  }
  window.addEventListener("load", () => sync(true));
  document.fonts?.ready.then(() => sync(true));

  return { move, sync };
}

// Single-select group (tabs / radios) with a gliding indicator and arrow-key support.
function createSelectGroup(container, { itemSelector, ariaAttr = "aria-selected", onSelect }) {
  const glide = createGlide(container, { itemSelector });
  const items = () => [...container.querySelectorAll(itemSelector)];

  const select = (value, { instant = false, focus = false } = {}) => {
    items().forEach((item) => {
      const isActive = item.dataset.value === String(value);
      item.classList.toggle("is-active", isActive);
      item.setAttribute(ariaAttr, String(isActive));
      item.tabIndex = isActive ? 0 : -1;
      if (isActive && focus) {
        item.focus();
      }
    });
    glide.sync(instant);
  };

  const choose = (item, focus = false) => {
    if (!item || item.classList.contains("is-active")) {
      return;
    }
    select(item.dataset.value, { focus });
    if (container.scrollWidth > container.clientWidth) {
      item.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
    onSelect(item.dataset.value);
  };

  container.addEventListener("click", (event) => choose(event.target.closest(itemSelector)));

  container.addEventListener("keydown", (event) => {
    const list = items();
    const current = list.indexOf(document.activeElement);
    if (current < 0) {
      return;
    }

    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    let next = null;
    if (step) {
      next = list[(current + step + list.length) % list.length];
    } else if (event.key === "Home") {
      next = list[0];
    } else if (event.key === "End") {
      next = list[list.length - 1];
    }

    if (next) {
      event.preventDefault();
      choose(next, true);
      next.focus();
    }
  });

  return { select };
}

function revealElement(element) {
  element.classList.add("is-visible");
}

const revealObserver =
  prefersReducedMotion || !("IntersectionObserver" in window)
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
      );

// Reveal [data-animate] children as they scroll into view.
function observeReveal(nodes) {
  nodes.filter(Boolean).forEach((node) => {
    node.querySelectorAll("[data-animate]:not(.is-visible)").forEach((element) => {
      if (revealObserver) {
        revealObserver.observe(element);
      } else {
        revealElement(element);
      }
    });
  });
}

// Horizontal timeline: cards ride a track centred on a playhead. The focused card is full size,
// its neighbours shrink and dim. Drag, flick, horizontal wheel, click, and arrow keys all move it.
function createTimeline(stage, { cards, years, onChange }) {
  const SPRING = { stiffness: 120, damping: 24 };
  const SIDE_SCALE = 0.72;
  const SIDE_DIM = 0.45;
  const DRAG_THRESHOLD = 4;
  const last = cards.length - 1;

  stage.innerHTML = `
    <div class="be-timeline__years" aria-hidden="true">
      ${years.map((year) => `<span data-index="${year.index}">${year.label}</span>`).join("")}
    </div>
    <span class="be-timeline__playhead" aria-hidden="true"></span>
    <div class="be-timeline__ticks" aria-hidden="true">
      ${cards.slice(1).map(() => "<span><i></i><i></i><i></i><i></i><i></i></span>").join("")}
    </div>
    <ul class="be-timeline__track">
      ${cards
        .map(
          (card, index) => `
            <li class="be-timeline__item">
              <div class="be-timeline__card">${card.html}</div>
              <button class="be-timeline__hit" type="button" data-index="${index}" aria-label="${card.label}"></button>
            </li>
          `
        )
        .join("")}
    </ul>
  `;

  const items = [...stage.querySelectorAll(".be-timeline__item")];
  const hits = items.map((item) => item.querySelector(".be-timeline__hit"));
  const tickGroups = [...stage.querySelectorAll(".be-timeline__ticks span")];
  const yearLabels = [...stage.querySelectorAll(".be-timeline__years span")];

  let cardWidth = 320;
  let step = 300;
  let position = 0;
  let target = 0;
  let velocity = 0;
  let active = -1;
  let frame = null;
  let lastTime = 0;

  const clamp = (value) => Math.max(0, Math.min(value, last));
  const scaleAt = (offset) => 1 - (1 - SIDE_SCALE) * Math.min(Math.abs(offset), 1);

  const render = () => {
    items.forEach((item, index) => {
      const offset = index - position;
      item.style.transform = `translate(-50%, -50%) translateX(${(offset * step).toFixed(2)}px) scale(${scaleAt(offset).toFixed(4)})`;
      item.style.zIndex = String(100 - Math.round(Math.abs(offset) * 10));
      item.style.setProperty("--dim", (SIDE_DIM * Math.min(Math.abs(offset), 1)).toFixed(3));
    });

    // Ruler ticks sit in whatever space is free between two neighbouring cards.
    tickGroups.forEach((group, index) => {
      const leftOffset = index - position;
      const rightOffset = leftOffset + 1;
      const leftEdge = leftOffset * step + (cardWidth * scaleAt(leftOffset)) / 2;
      const rightEdge = rightOffset * step - (cardWidth * scaleAt(rightOffset)) / 2;
      const free = rightEdge - leftEdge;
      group.style.width = `${Math.max(free * 0.7, 0).toFixed(2)}px`;
      group.style.transform = `translate(-50%, -50%) translateX(${((leftEdge + rightEdge) / 2).toFixed(2)}px)`;
      group.style.opacity = free > 16 ? "1" : "0";
    });

    // Year numerals drift slower than the track.
    yearLabels.forEach((label) => {
      const offset = Number(label.dataset.index) - position;
      label.style.transform = `translateX(-50%) translateX(${(offset * step * 0.6).toFixed(2)}px)`;
    });
  };

  const setActive = (index, notify) => {
    if (index === active) {
      return;
    }
    active = index;
    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("is-active", isActive);
      hits[itemIndex].tabIndex = isActive ? 0 : -1;
      if (isActive) {
        hits[itemIndex].setAttribute("aria-current", "step");
      } else {
        hits[itemIndex].removeAttribute("aria-current");
      }
    });
    if (notify) {
      onChange(index);
    }
  };

  const stop = () => {
    if (frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  };

  const tick = (now) => {
    const delta = Math.min((now - lastTime) / 1000, 0.032);
    lastTime = now;
    velocity += (-SPRING.stiffness * (position - target) - SPRING.damping * velocity) * delta;
    position += velocity * delta;

    if (Math.abs(position - target) < 0.001 && Math.abs(velocity) < 0.01) {
      position = target;
      velocity = 0;
      frame = null;
    } else {
      frame = requestAnimationFrame(tick);
    }
    render();
  };

  const glideTo = (index, { instant = false, notify = true, startVelocity = 0 } = {}) => {
    target = clamp(Math.round(index));
    setActive(target, notify);
    stop();
    if (instant || prefersReducedMotion) {
      position = target;
      velocity = 0;
      render();
      return;
    }
    velocity = startVelocity;
    lastTime = performance.now();
    frame = requestAnimationFrame(tick);
  };

  const measure = () => {
    const width = stage.clientWidth;
    if (!width) {
      return;
    }
    cardWidth = Math.min(320, width * (width < 640 ? 0.58 : 0.36));
    const gap = Math.max(40, Math.min(cardWidth * 0.22, 72));
    step = cardWidth * SIDE_SCALE + gap;
    stage.style.setProperty("--card-w", `${cardWidth.toFixed(1)}px`);
    render();
  };

  /* Drag + flick */

  let pointerId = null;
  let startX = 0;
  let startPosition = 0;
  let dragging = false;
  let suppressClick = false;
  let lastMoveX = 0;
  let lastMoveTime = 0;
  let dragVelocity = 0;

  stage.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }
    pointerId = event.pointerId;
    startX = event.clientX;
    startPosition = position;
    dragging = false;
    lastMoveX = event.clientX;
    lastMoveTime = performance.now();
    dragVelocity = 0;
  });

  stage.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }
    const deltaX = event.clientX - startX;
    if (!dragging) {
      if (Math.abs(deltaX) < DRAG_THRESHOLD) {
        return;
      }
      dragging = true;
      stop();
      stage.setPointerCapture(pointerId);
      stage.classList.add("is-dragging");
    }

    const now = performance.now();
    if (now > lastMoveTime) {
      dragVelocity = -((event.clientX - lastMoveX) / step) / ((now - lastMoveTime) / 1000);
    }
    lastMoveX = event.clientX;
    lastMoveTime = now;

    // Rubber-band past either end.
    const raw = startPosition - deltaX / step;
    const bounded = clamp(raw);
    position = bounded + (raw - bounded) * 0.3;
    render();
    setActive(Math.round(bounded), true);
  });

  const endDrag = (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }
    pointerId = null;
    if (!dragging) {
      return;
    }
    dragging = false;
    suppressClick = true;
    window.setTimeout(() => {
      suppressClick = false;
    }, 0);
    stage.classList.remove("is-dragging");

    const settled = performance.now() - lastMoveTime > 80 ? 0 : dragVelocity;
    const throwDistance = Math.max(-4, Math.min(settled * 0.3, 4));
    glideTo(position + throwDistance, { startVelocity: settled });
  };

  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  stage.addEventListener(
    "click",
    (event) => {
      if (suppressClick) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      const hit = event.target.closest(".be-timeline__hit");
      if (hit) {
        glideTo(Number(hit.dataset.index));
      }
    },
    true
  );

  /* Horizontal wheel / trackpad */

  let wheelTimer = null;
  stage.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return;
      }
      event.preventDefault();
      stop();
      position = clamp(position + event.deltaX / step);
      render();
      setActive(Math.round(position), true);
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => glideTo(position), 140);
    },
    { passive: false }
  );

  /* Keyboard */

  stage.addEventListener("keydown", (event) => {
    const next = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: last
    }[event.key];
    if (next === undefined) {
      return;
    }
    event.preventDefault();
    glideTo(next);
    hits[active].focus({ preventScroll: true });
  });

  // Focusing an off-centre card must not scroll the clipped stage.
  stage.addEventListener("scroll", () => {
    stage.scrollLeft = 0;
    stage.scrollTop = 0;
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(measure).observe(stage);
  }
  measure();

  return {
    select: (index, { instant = false } = {}) => glideTo(index, { instant, notify: false })
  };
}

function setupTilt(root, max = 4) {
  if (!canHover || prefersReducedMotion) {
    return;
  }

  root.querySelectorAll("[data-tilt]:not([data-tilt-ready])").forEach((element) => {
    element.dataset.tiltReady = "true";
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      element.classList.add("is-tilting");
      element.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
      element.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
    });
    element.addEventListener("pointerleave", () => {
      element.classList.remove("is-tilting");
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
    });
  });
}

function announce(message) {
  let region = document.querySelector("#be-live-region");
  if (!region) {
    region = document.createElement("div");
    region.id = "be-live-region";
    region.className = "sr-only";
    region.setAttribute("role", "status");
    document.body.appendChild(region);
  }
  region.textContent = "";
  requestAnimationFrame(() => {
    region.textContent = message;
  });
}

function showToast(message, iconName = "check") {
  let region = document.querySelector(".be-toast-region");
  if (!region) {
    region = document.createElement("div");
    region.className = "be-toast-region";
    document.body.appendChild(region);
  }

  const toast = document.createElement("div");
  toast.className = "be-toast";
  toast.innerHTML = icon(iconName);
  toast.append(message);
  region.replaceChildren(toast);
  announce(message);

  requestAnimationFrame(() => toast.classList.add("is-visible"));
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 400);
  }, 2400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
}

function setupCommandPalette({ trigger, getCommands }) {
  const palette = document.createElement("div");
  palette.className = "be-palette";
  palette.hidden = true;
  palette.innerHTML = `
    <button class="be-palette__backdrop" type="button" tabindex="-1" aria-label="Close command menu"></button>
    <div class="be-palette__panel" role="dialog" aria-modal="true" aria-label="Command menu">
      <div class="be-palette__search">
        ${icon("search")}
        <input
          class="be-palette__input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="be-palette-list"
          aria-autocomplete="list"
          aria-label="Search sections, views, and actions"
          placeholder="Search sections, views, actions…"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
        <kbd class="be-kbd">esc</kbd>
      </div>
      <div class="be-palette__list" id="be-palette-list" role="listbox" aria-label="Commands"></div>
      <div class="be-palette__footer" aria-hidden="true">
        <span><kbd class="be-kbd">↑</kbd><kbd class="be-kbd">↓</kbd> navigate</span>
        <span><kbd class="be-kbd">↵</kbd> select</span>
      </div>
    </div>
  `;
  document.body.appendChild(palette);

  const input = palette.querySelector(".be-palette__input");
  const list = palette.querySelector(".be-palette__list");
  const backdrop = palette.querySelector(".be-palette__backdrop");
  let glide = null;
  let results = [];
  let activeIndex = 0;
  let closeTimer = null;

  const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  const score = (command, tokens) => {
    const label = normalize(command.label);
    const extra = normalize(`${command.group} ${command.keywords || ""}`);
    let total = 0;
    for (const token of tokens) {
      const words = label.split(" ");
      if (words.includes(token)) total += 140;
      else if (words.some((word) => word.startsWith(token))) total += 120;
      else if (extra.split(" ").some((word) => word.startsWith(token))) total += 60;
      else return 0;
    }
    return total;
  };

  const setActive = (index, { scroll = true, instant = false } = {}) => {
    const rows = [...list.querySelectorAll(".be-palette__row")];
    activeIndex = Math.max(0, Math.min(index, rows.length - 1));
    rows.forEach((row, rowIndex) => {
      const isActive = rowIndex === activeIndex;
      row.classList.toggle("is-active", isActive);
      row.setAttribute("aria-selected", String(isActive));
      if (isActive) {
        input.setAttribute("aria-activedescendant", row.id);
        if (scroll) {
          row.scrollIntoView({ block: "nearest" });
        }
      }
    });
    glide.sync(instant);
  };

  const render = () => {
    const tokens = normalize(input.value).split(" ").filter(Boolean);
    const commands = getCommands();
    results = tokens.length
      ? commands
          .map((command, order) => ({ command, order, value: score(command, tokens) }))
          .filter((entry) => entry.value > 0)
          .sort((first, second) => second.value - first.value || first.order - second.order)
          .map((entry) => entry.command)
      : commands;

    if (!results.length) {
      list.innerHTML = '<p class="be-palette__empty">No matches. Try “work”, “resume”, or “dark”.</p>';
      input.removeAttribute("aria-activedescendant");
      glide = createGlide(list, { itemSelector: ".be-palette__row" });
      return;
    }

    let lastGroup = null;
    list.innerHTML = results
      .map((command, index) => {
        const heading =
          !tokens.length && command.group !== lastGroup
            ? `<p class="be-palette__group" aria-hidden="true">${command.group}</p>`
            : "";
        lastGroup = command.group;
        return `
          ${heading}
          <button class="be-palette__row" id="be-palette-row-${index}" type="button" role="option" tabindex="-1" data-index="${index}">
            ${icon(command.icon)}
            <span class="be-palette__row-label">${command.label}</span>
            ${command.hint ? `<span class="be-palette__row-hint">${command.hint}</span>` : ""}
          </button>
        `;
      })
      .join("");
    glide = createGlide(list, { itemSelector: ".be-palette__row" });
    list.scrollTop = 0;
    setActive(0, { scroll: false, instant: true });
  };

  const isOpen = () => !palette.hidden && palette.classList.contains("is-open");

  const close = ({ restoreFocus = true } = {}) => {
    if (palette.hidden) {
      return;
    }
    palette.classList.remove("is-open");
    document.body.classList.remove("palette-open");
    trigger?.setAttribute("aria-expanded", "false");
    closeTimer = window.setTimeout(() => {
      palette.hidden = true;
    }, 160);
    if (restoreFocus) {
      trigger?.focus({ preventScroll: true });
    }
  };

  const open = () => {
    window.clearTimeout(closeTimer);
    input.value = "";
    palette.hidden = false;
    render();
    document.body.classList.add("palette-open");
    trigger?.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => {
      palette.classList.add("is-open");
      input.focus();
    });
  };

  const run = (index) => {
    const command = results[index];
    if (!command) {
      return;
    }
    close({ restoreFocus: false });
    command.run();
  };

  input.addEventListener("input", render);

  palette.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(activeIndex - 1);
    } else if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      run(activeIndex);
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  });

  list.addEventListener("pointermove", (event) => {
    const row = event.target.closest(".be-palette__row");
    if (row && Number(row.dataset.index) !== activeIndex) {
      setActive(Number(row.dataset.index), { scroll: false });
    }
  });

  list.addEventListener("click", (event) => {
    const row = event.target.closest(".be-palette__row");
    if (row) {
      run(Number(row.dataset.index));
    }
  });

  backdrop.addEventListener("click", () => close());
  trigger?.addEventListener("click", open);

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      if (document.body.classList.contains("mode-launch-open") || document.body.classList.contains("brand-intro-open")) {
        return;
      }
      event.preventDefault();
      if (isOpen()) {
        close();
      } else {
        open();
      }
    }
  });

  return { open, close };
}

function setupTopbar() {
  const topbar = document.querySelector("#topbar");
  const nav = document.querySelector("#primary-navigation");
  const menuButton = document.querySelector("#topbar-menu");
  const progressBar = document.querySelector("#scroll-progress-bar");
  if (!topbar || !nav || !menuButton) {
    return;
  }

  const links = [...nav.querySelectorAll(".topbar__link")];
  const sections = links.map((link) => document.getElementById(link.dataset.section)).filter(Boolean);
  const glide = createGlide(nav, { itemSelector: ".topbar__link", hover: true });

  const setMenu = (isOpen) => {
    topbar.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  menuButton.addEventListener("click", () => setMenu(!topbar.classList.contains("is-open")));
  links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });
  document.addEventListener("click", (event) => {
    if (!topbar.contains(event.target)) {
      setMenu(false);
    }
  });

  let activeId = null;
  let ticking = false;

  const update = () => {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar?.style.setProperty("--progress", progress.toFixed(4));

    const marker = window.innerHeight * 0.4;
    let current = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) {
        current = section.id;
      }
    });
    if (scrollable > 0 && window.scrollY >= scrollable - 4 && sections.length) {
      current = sections[sections.length - 1].id;
    }

    if (current === activeId) {
      return;
    }
    activeId = current;
    links.forEach((link) => {
      const isActive = link.dataset.section === current;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    if (!nav.matches(":hover")) {
      glide.sync();
    }
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

/* ─── Home page ─── */

function renderHome() {
  const hero = document.querySelector("#home-hero-copy");
  if (!hero) {
    return;
  }

  const { profile, homeModes, experience, projects, education, socials, achievements } = portfolioContent;
  const find = (selector) => document.querySelector(selector);
  const modeTabs = find("#home-mode-tabs");
  const aboutCopy = find("#home-about-copy");
  const aboutAside = find("#home-about-aside");
  const aboutTech = find("#home-about-tech");
  const educationList = find("#home-education-list");
  const experienceTimeline = find("#home-experience-timeline");
  const experiencePanel = find("#home-experience-panel");
  const featuredWork = find("#home-featured-work");
  const moreWork = find("#home-more-work");
  const moreWorkInner = find("#home-more-work-inner");
  const workToggle = find("#home-work-toggle");
  const workToggleLabel = find("#home-work-toggle-label");
  const achievementTabs = find("#home-achievement-tabs");
  const achievementPanel = find("#home-achievement-panel");
  const contactCopy = find("#home-contact-copy");
  const socialRail = find("#home-social-rail");
  const emailRail = find("#home-email-rail");
  const modeLaunch = find("#mode-launch");
  const brandIntro = find("#brand-intro");
  const modeLaunchGrid = find("#mode-launch-grid");
  const resumeButton = find("#home-resume-button");
  const required = [
    modeTabs, aboutCopy, aboutAside, aboutTech, educationList, experienceTimeline, experiencePanel,
    featuredWork, moreWork, moreWorkInner, workToggle, workToggleLabel, achievementTabs, achievementPanel,
    contactCopy, socialRail, emailRail, modeLaunch, brandIntro, modeLaunchGrid, resumeButton
  ];
  if (required.some((element) => !element)) {
    return;
  }

  document.title = `${profile.name} | ${profile.title}`;

  const modeMap = new Map(homeModes.map((mode) => [mode.id, mode]));
  let storedModeId = null;
  try {
    storedModeId = localStorage.getItem("portfolio-mode");
  } catch (error) {
    storedModeId = null;
  }
  const isReturningVisitor = modeMap.has(storedModeId);
  let activeMode = modeMap.get(storedModeId) || modeMap.get(profile.defaultModeId) || homeModes[0];

  const railSocials = socials.filter((item) => ["GitHub", "LinkedIn", "Email"].includes(item.platform));

  /* Static sections */

  aboutCopy.innerHTML = profile.aboutParagraphs
    .map((paragraph, index) => `<p data-animate style="--delay: ${index * 0.06}s">${paragraph}</p>`)
    .join("");

  aboutAside.innerHTML = `
    <div class="home-aside-card" data-animate>
      <div class="home-aside-card__portrait be-tilt" data-tilt>
        <img src="${profile.headshotUrl}" alt="${profile.name} headshot" loading="lazy" />
      </div>
    </div>
  `;

  educationList.innerHTML = education
    .map(
      (item, index) => `
        <div data-animate style="--delay: ${index * 0.06}s">
          <article class="editor-home__education-card">
            <p class="editor-home__education-meta">${item.institution}</p>
            <h3>${item.credential}</h3>
            <p class="editor-home__experience-meta">${item.location}</p>
          </article>
        </div>
      `
    )
    .join("");

  socialRail.innerHTML = `
    <div class="edge-rail__links">
      ${railSocials
        .map(
          (item) => `
            <a href="${item.url}" ${externalAttrs(item.url)} aria-label="${item.platform}" data-tooltip="${item.platform}" data-tooltip-side="right">
              ${icon(item.icon)}
            </a>
          `
        )
        .join("")}
    </div>
    <span class="edge-rail__line" aria-hidden="true"></span>
  `;

  emailRail.innerHTML = `<a class="edge-rail__email" href="mailto:${profile.email}">${profile.email}</a>`;

  /* Experience timeline (oldest on the left, newest on the right) */

  const renderExperiencePanel = (index) => {
    const item = experience[index];
    if (!item) {
      return;
    }

    experiencePanel.innerHTML = `
      <ul class="editor-home__notes be-stagger" aria-label="${item.role} at ${item.company}">
        ${item.summary
          .slice(0, 3)
          .map((note, noteIndex) => `<li style="--i: ${noteIndex}">${note}</li>`)
          .join("")}
      </ul>
    `;
  };

  const startYear = (item) => (item.dates.match(/\d{4}/) || [""])[0];
  const chronological = experience.map((item, index) => ({ item, index })).reverse();
  const timelineYears = [];
  chronological.forEach(({ item }, position) => {
    const year = startYear(item);
    if (year && !timelineYears.some((entry) => entry.label === year)) {
      timelineYears.push({ index: position, label: year });
    }
  });

  const experienceTimelineControl = createTimeline(experienceTimeline, {
    years: timelineYears,
    cards: chronological.map(({ item }) => ({
      label: `${item.role} at ${item.company}, ${item.dates}`,
      html: `
        <p class="be-timeline__date">${item.dates}</p>
        <h3>${item.role}</h3>
        <p class="be-timeline__org">${item.company}</p>
        <p class="be-timeline__place">${item.location}</p>
      `
    })),
    onChange: (position) => renderExperiencePanel(chronological[position].index)
  });

  const selectExperience = (index, options) => {
    experienceTimelineControl.select(
      chronological.findIndex((entry) => entry.index === index),
      options
    );
    renderExperiencePanel(index);
  };

  /* Achievements by year */

  const achievementYears = [...new Set(achievements.map((item) => item.year))].sort(
    (first, second) => Number(second) - Number(first)
  );

  const renderAchievementPanel = (year) => {
    achievementPanel.setAttribute("aria-labelledby", `home-achievement-tab-${year}`);
    achievementPanel.innerHTML = `
      <ul class="editor-home__achievement-list be-stagger">
        ${achievements
          .filter((item) => item.year === year)
          .map((item, index) => `<li style="--i: ${index}">${item.title}</li>`)
          .join("")}
      </ul>
    `;
  };

  achievementTabs.innerHTML = achievementYears
    .map(
      (year) => `
        <button
          class="be-tabs__tab"
          id="home-achievement-tab-${year}"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="home-achievement-panel"
          data-value="${year}"
        >
          ${year}
        </button>
      `
    )
    .join("");

  const achievementGroup = createSelectGroup(achievementTabs, {
    itemSelector: ".be-tabs__tab",
    onSelect: renderAchievementPanel
  });

  /* Mode-dependent sections */

  const setHero = (mode, options = {}) => {
    const startEmpty = options.animateIntro && !prefersReducedMotion;
    hero.innerHTML = `
      <p class="editor-home__intro" data-animate>
        <span id="home-intro-text">${startEmpty ? "" : profile.homeIntro}</span>
      </p>
      <h1 id="home-title" data-animate style="--delay: 0.04s"><span id="home-name-text">${startEmpty ? "" : profile.name}</span></h1>
      <h2 class="editor-home__statement" data-animate style="--delay: 0.08s"><span id="home-statement-text">${startEmpty ? "" : mode.statement}</span></h2>
      <p class="editor-home__summary" data-animate style="--delay: 0.12s">${mode.summary}</p>
      <div class="editor-home__meta" data-animate style="--delay: 0.16s">
        <span class="be-badge"><span class="be-badge__dot" aria-hidden="true"></span>${profile.availability.replace(/\.$/, "")}</span>
        <span class="editor-home__meta-item">${icon("pin")}${profile.location}</span>
        <span class="editor-home__meta-item">${profile.relocation}</span>
      </div>
      <div class="editor-home__hero-actions" data-animate style="--delay: 0.2s">
        <a class="be-btn be-btn--primary be-btn--arrow" href="#work">View work ${arrowChip}</a>
        <a class="be-btn" href="${mode.resumeUrl}" target="_blank" rel="noreferrer">${icon("document")}${mode.label} resume</a>
      </div>
    `;

    observeReveal([hero]);
  };

  const setTools = (mode) => {
    aboutTech.innerHTML = mode.toolItems
      .map((item, index) => `<span class="be-chip" data-animate style="--delay: ${index * 0.04}s">${item}</span>`)
      .join("");
    observeReveal([aboutTech]);
  };

  const renderProjectLinks = (project) => {
    const links = [
      project.githubUrl ? `<a class="work-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub${icon("external")}</a>` : "",
      project.writeupUrl ? `<a class="work-link" href="${project.writeupUrl}" target="_blank" rel="noreferrer">Write-up${icon("external")}</a>` : ""
    ].join("");
    return links ? `<div class="work-links">${links}</div>` : "";
  };

  const setWorkExpanded = (isExpanded) => {
    moreWork.classList.toggle("is-open", isExpanded);
    moreWork.inert = !isExpanded;
    workToggle.setAttribute("aria-expanded", String(isExpanded));
    workToggleLabel.textContent = isExpanded ? "Show fewer projects" : "Show more projects";
    if (isExpanded) {
      observeReveal([moreWork]);
    }
  };

  const setProjects = (mode) => {
    const featuredProjects = mode.projectIds
      .map((projectId) => projects.find((project) => project.id === projectId))
      .filter(Boolean);
    const extraProjects = projects.filter((project) => !mode.projectIds.includes(project.id));

    featuredWork.innerHTML = featuredProjects
      .map(
        (project, index) => `
          <article class="work-feature${index % 2 === 1 ? " is-reversed" : ""}" data-animate>
            <div class="work-feature__visual">
              <div class="work-panel be-tilt" data-tilt>
                <p class="work-panel__top" aria-hidden="true">${String(index + 1).padStart(2, "0")}</p>
                <p class="work-panel__title">${project.shortTitle}</p>
                <div class="work-panel__metrics">
                  ${project.metrics
                    .slice(0, 3)
                    .map(
                      (metric) => `
                        <div class="work-panel__metric">
                          <strong>${metric.value}</strong>
                          <span>${metric.label}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            </div>
            <div class="work-feature__copy">
              <p class="editor-home__eyebrow">${project.categories.join(" / ")}</p>
              <h3>${project.title}</h3>
              <dl class="work-feature__detail">
                <div><dt>Problem</dt><dd>${project.problem}</dd></div>
                <div><dt>Approach</dt><dd>${project.approach}</dd></div>
              </dl>
              <div class="be-chips">
                ${project.tools.map((tool) => `<span class="be-chip">${tool}</span>`).join("")}
              </div>
              ${renderProjectLinks(project)}
            </div>
          </article>
        `
      )
      .join("");

    moreWorkInner.innerHTML = `
      <div class="editor-home__more-grid">
        ${extraProjects
          .map(
            (project, index) => `
              <div data-animate style="--delay: ${index * 0.05}s">
                <article class="be-card be-card--hover editor-home__mini-project">
                  <p class="editor-home__mini-top">${project.categories.join(" / ")}</p>
                  <h3>${project.shortTitle}</h3>
                  <p>${project.problem}</p>
                  <div class="editor-home__mini-metrics">
                    ${project.metrics
                      .slice(0, 2)
                      .map((metric) => `<span class="be-chip"><strong>${metric.value}</strong>${metric.label}</span>`)
                      .join("")}
                  </div>
                  ${renderProjectLinks(project)}
                </article>
              </div>
            `
          )
          .join("")}
      </div>
    `;

    setWorkExpanded(false);
    workToggle.hidden = !extraProjects.length;
    setupTilt(featuredWork);
    observeReveal([featuredWork]);
  };

  const setContact = (mode) => {
    contactCopy.innerHTML = `
      <p class="editor-home__contact-eyebrow" data-animate>06. What's next?</p>
      <h2 id="contact-title" data-animate>Get In Touch</h2>
      <p class="editor-home__contact-summary" data-animate>${profile.contactBlurb}</p>
      <div class="editor-home__contact-actions" data-animate>
        <a class="be-btn be-btn--primary be-btn--arrow" href="mailto:${profile.email}">Say hello ${arrowChip}</a>
        <button class="be-btn be-swap" type="button" data-copy-email>
          <span class="be-swap__item" data-state="idle">${icon("copy")}Copy email</span>
          <span class="be-swap__item" data-state="done" aria-hidden="true">${icon("check")}Copied</span>
        </button>
        <a class="be-btn" href="${mode.resumeUrl}" target="_blank" rel="noreferrer">${icon("document")}${mode.label} resume</a>
      </div>
      <div class="editor-home__contact-socials" data-animate>
        ${railSocials
          .map(
            (item) => `
              <a class="be-icon-btn be-icon-btn--outline" href="${item.url}" ${externalAttrs(item.url)} aria-label="${item.platform}" data-tooltip="${item.platform}">
                ${icon(item.icon)}
              </a>
            `
          )
          .join("")}
      </div>
    `;
    observeReveal([contactCopy]);
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

  /* View switching */

  modeTabs.innerHTML = homeModes
    .map(
      (mode) => `
        <button class="be-tabs__tab" type="button" role="radio" aria-checked="false" data-value="${mode.id}">
          ${mode.label}
        </button>
      `
    )
    .join("");

  const applyMode = (modeId, options = {}) => {
    const nextMode = modeMap.get(modeId) || modeMap.get(profile.defaultModeId) || homeModes[0];
    activeMode = nextMode;

    if (options.persist) {
      try {
        localStorage.setItem("portfolio-mode", nextMode.id);
      } catch (error) {
        // Storage can be unavailable (private mode); the view still switches.
      }
    }

    modeGroup.select(nextMode.id, { instant: options.instant });
    resumeButton.href = nextMode.resumeUrl;

    setHero(nextMode, options);
    setTools(nextMode);
    setProjects(nextMode);
    setContact(nextMode);

    const experienceIndex = Math.max(
      experience.findIndex((item) => item.company === nextMode.experienceCompany),
      0
    );
    selectExperience(experienceIndex, { instant: options.instant });

    modeLaunchGrid.innerHTML = renderLaunchCards(nextMode.id);
  };

  const modeGroup = createSelectGroup(modeTabs, {
    itemSelector: ".be-tabs__tab",
    ariaAttr: "aria-checked",
    onSelect: (modeId) => applyMode(modeId, { persist: true })
  });

  workToggle.addEventListener("click", () => {
    setWorkExpanded(workToggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-email]");
    if (!button) {
      return;
    }

    if (await copyText(profile.email)) {
      button.classList.add("is-done");
      announce("Email address copied");
      window.setTimeout(() => button.classList.remove("is-done"), 2000);
    } else {
      showToast(profile.email, "mail");
    }
  });

  /* Hero typewriter */

  const typeInto = (element, fullText, speed) =>
    new Promise((resolve) => {
      element.textContent = "";
      let charIndex = 0;
      const typeNextChar = () => {
        charIndex += 1;
        element.textContent = fullText.slice(0, charIndex);
        if (charIndex < fullText.length) {
          setTimeout(typeNextChar, speed);
        } else {
          resolve();
        }
      };
      setTimeout(typeNextChar, speed);
    });

  const playHeroTypewriter = async (mode) => {
    if (prefersReducedMotion) {
      return;
    }

    const introText = document.querySelector("#home-intro-text");
    const nameText = document.querySelector("#home-name-text");
    const statementText = document.querySelector("#home-statement-text");
    if (!introText || !nameText || !statementText) {
      return;
    }

    const pause = () => new Promise((resolve) => setTimeout(resolve, 150));

    await typeInto(introText, profile.homeIntro, 32);
    await pause();
    if (!nameText.isConnected) return;
    await typeInto(nameText, profile.name, 45);
    await pause();
    if (!statementText.isConnected) return;
    await typeInto(statementText, mode.statement, 22);
  };

  /* Intro + launcher (first visit only) */

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
      showLauncher();
      brandIntro.classList.add("is-exiting");
    }, exitDelay);

    window.setTimeout(() => {
      brandIntro.classList.add("is-hidden");
      document.body.classList.remove("brand-intro-open");
    }, totalDuration);
  };

  modeLaunchGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-launch-mode]");
    if (!card) {
      return;
    }

    applyMode(card.dataset.launchMode, { animateIntro: true, persist: true, instant: true });
    hideLauncher();
    playHeroTypewriter(activeMode);
  });

  /* Command menu */

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const paletteTrigger = find("#palette-trigger");
  const shortcutLabel = find("#palette-shortcut");
  if (shortcutLabel && !/Mac|iPhone|iPad/.test(navigator.platform)) {
    shortcutLabel.textContent = "Ctrl K";
  }

  setupCommandPalette({
    trigger: paletteTrigger,
    getCommands: () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      return [
        ...[
          ["about", "About", "compass", "bio background"],
          ["education", "Education", "graduation", "degree school university"],
          ["experience", "Experience", "briefcase", "jobs roles career"],
          ["work", "Selected work", "grid", "projects portfolio case"],
          ["achievements", "Achievements", "award", "awards honors"],
          ["contact", "Contact", "mail", "email reach hire"]
        ].map(([id, label, iconName, keywords]) => ({
          group: "Go to",
          label,
          icon: iconName,
          keywords,
          run: () => scrollToSection(id)
        })),
        ...homeModes.map((mode) => ({
          group: "View as",
          label: mode.label,
          icon: mode.icon,
          keywords: "view mode lens switch",
          hint: mode.id === activeMode.id ? "Current" : "",
          run: () => {
            applyMode(mode.id, { persist: true });
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }
        })),
        {
          group: "Actions",
          label: isDark ? "Switch to light mode" : "Switch to dark mode",
          icon: isDark ? "sun" : "moon",
          keywords: "theme dark light appearance",
          run: () => setTheme(isDark ? "light" : "dark")
        },
        {
          group: "Actions",
          label: `Open ${activeMode.label} resume`,
          icon: "document",
          keywords: "resume cv pdf download",
          run: () => window.open(activeMode.resumeUrl, "_blank", "noopener")
        },
        {
          group: "Actions",
          label: "Copy email address",
          icon: "copy",
          keywords: "email contact clipboard",
          run: async () => {
            const copied = await copyText(profile.email);
            showToast(copied ? "Email copied to clipboard" : profile.email, copied ? "check" : "mail");
          }
        },
        {
          group: "Actions",
          label: "Open terminal",
          icon: "terminal",
          keywords: "terminal shell cli console",
          run: () => {
            const widget = document.querySelector("#terminal-widget");
            if (widget?.hidden) {
              document.querySelector("#terminal-fab")?.click();
            }
          }
        },
        ...railSocials.map((item) => ({
          group: "Links",
          label: item.platform === "Email" ? "Send an email" : item.platform,
          icon: item.icon,
          keywords: `social profile ${item.label}`,
          run: () => {
            if (item.url.startsWith("http")) {
              window.open(item.url, "_blank", "noopener");
            } else {
              window.location.href = item.url;
            }
          }
        }))
      ];
    }
  });

  /* Boot */

  setupTopbar();
  achievementGroup.select(achievementYears[0], { instant: true });
  renderAchievementPanel(achievementYears[0]);

  if (isReturningVisitor) {
    brandIntro.classList.add("is-hidden");
    applyMode(activeMode.id, { animateIntro: true, instant: true });
    playHeroTypewriter(activeMode);
  } else {
    applyMode(activeMode.id, { instant: true });
    playBrandIntro();
  }

  setupTilt(aboutAside);
  observeReveal([aboutAside, aboutCopy, educationList]);
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
        <div class="fact-item">${renderIconBadge("graduation", "Wake Forest MSBA, with Distinction")}</div>
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

function renderTerminal() {
  const fab = document.querySelector("#terminal-fab");
  const widget = document.querySelector("#terminal-widget");
  if (!fab || !widget) return;

  const { profile, skills, experience, projects, education, socials } = portfolioContent;

  const COMMANDS = {
    help: () => [
      "available commands:",
      "",
      "  about      — who I am",
      "  skills     — tools and languages",
      "  projects   — selected work",
      "  experience — where I've worked",
      "  education  — where I studied",
      "  contact    — how to reach me",
      "  ls         — site sections",
      "  clear      — clear terminal",
    ],
    about: () => [profile.name, profile.title, "", ...profile.aboutParagraphs],
    whoami: () => [profile.name, profile.title, `${profile.location} · ${profile.relocation}`, profile.availability],
    skills: () => skills.flatMap(group => [`[${group.category}]`, `  ${group.items.join(", ")}`, ""]),
    projects: () => projects.map((p, i) => `${String(i + 1).padStart(2, "0")}  ${p.shortTitle}`),
    experience: () => experience.map(e => `${e.role} @ ${e.company}  (${e.dates})`),
    education: () => education.flatMap(e => [e.credential, `    ${e.institution} · ${e.location}`, ""]),
    contact: () => socials.filter(s => s.platform !== "Resume").map(s => `${s.platform.padEnd(12)}${s.label}`),
    ls: () => ["about/  education/  experience/  work/  achievements/  contact/"],
    pwd: () => [`/home/${profile.name.toLowerCase().replace(" ", "")}/portfolio`],
    date: () => [new Date().toDateString()],
    hire: () => ["smart move."],
    "sudo hire": () => [`permission granted. → ${profile.email}`],
  };

  widget.innerHTML = `
    <div class="terminal">
      <div class="terminal__chrome">
        <span class="terminal__dot terminal__dot--red" aria-hidden="true"></span>
        <span class="terminal__dot terminal__dot--yellow" aria-hidden="true"></span>
        <span class="terminal__dot terminal__dot--green" aria-hidden="true"></span>
        <span class="terminal__title">alli@portfolio ~</span>
        <button class="terminal__close" type="button" id="terminal-close" aria-label="Close terminal">✕</button>
      </div>
      <div class="terminal__body" id="terminal-body">
        <div class="terminal__output" id="terminal-output">
          <p class="terminal__line terminal__line--muted">Type <span class="terminal__kbd">help</span> to see available commands.</p>
        </div>
        <label class="terminal__input-line" for="terminal-input">
          <span class="terminal__prompt" aria-hidden="true">❯</span>
          <input
            class="terminal__input"
            id="terminal-input"
            type="text"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            aria-label="Terminal command input"
            placeholder="enter command"
          />
        </label>
      </div>
    </div>
  `;

  const outputEl = widget.querySelector("#terminal-output");
  const inputEl = widget.querySelector("#terminal-input");
  const bodyEl = widget.querySelector("#terminal-body");
  const closeBtn = widget.querySelector("#terminal-close");

  const print = (cmd, lines) => {
    const cmdEl = document.createElement("p");
    cmdEl.className = "terminal__line terminal__line--cmd";
    cmdEl.textContent = `❯ ${cmd}`;
    outputEl.appendChild(cmdEl);
    lines.forEach(line => {
      const el = document.createElement("p");
      el.className = "terminal__line";
      el.textContent = line;
      outputEl.appendChild(el);
    });
    bodyEl.scrollTop = bodyEl.scrollHeight;
  };

  const cmdHistory = [];
  let histIdx = -1;

  inputEl.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx < cmdHistory.length - 1) { histIdx++; inputEl.value = cmdHistory[histIdx]; }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      histIdx > 0 ? (histIdx--, inputEl.value = cmdHistory[histIdx]) : (histIdx = -1, inputEl.value = "");
      return;
    }
    if (e.key !== "Enter") return;
    const raw = inputEl.value.trim();
    if (!raw) return;
    cmdHistory.unshift(raw);
    histIdx = -1;
    inputEl.value = "";
    const cmd = raw.toLowerCase();
    if (cmd === "clear") { outputEl.innerHTML = ""; return; }
    const handler = COMMANDS[cmd];
    print(raw, handler ? handler() : [`command not found: ${cmd}  (try 'help')`]);
  });

  bodyEl.addEventListener("click", () => inputEl.focus());

  const openTerminal = () => {
    widget.hidden = false;
    fab.setAttribute("aria-expanded", "true");
    inputEl.focus();
  };

  const closeTerminal = () => {
    widget.hidden = true;
    fab.setAttribute("aria-expanded", "false");
    fab.focus();
  };

  fab.addEventListener("click", () => widget.hidden ? openTerminal() : closeTerminal());
  closeBtn.addEventListener("click", closeTerminal);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !widget.hidden) closeTerminal(); });
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
  renderTerminal();
  setupReveal();
}

init();
