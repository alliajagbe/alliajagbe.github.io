const portfolioContent = {
  profile: {
    name: "Your Name",
    title: "Data Science & Analytics Professional",
    tagline: "Turning complex datasets into clear decisions, scalable models, and measurable business outcomes.",
    bio: "Use this space for a concise personal introduction covering your domain focus, preferred problem types, and the perspective you bring to analytics, machine learning, and business storytelling.",
    heroSummary:
      "Replace this placeholder with a sharper value proposition that explains who you help, what kinds of data problems you solve, and the outcomes you typically drive.",
    location: "City, Country",
    email: "your.email@example.com",
    availability: "Available for analytics, modeling, dashboarding, and advisory work.",
    resumeUrl: "resume-placeholder.txt",
    highlights: [
      { value: "12+", label: "Placeholder analytics initiatives delivered" },
      { value: "35%", label: "Sample efficiency or revenue improvement metric" },
      { value: "5x", label: "Example reporting speed or workflow acceleration" }
    ]
  },
  skills: [
    {
      category: "Analytics",
      items: ["SQL", "Python", "A/B Testing", "Forecasting", "Experiment Design"]
    },
    {
      category: "Visualization",
      items: ["Power BI", "Tableau", "Looker Studio", "Executive Reporting"]
    },
    {
      category: "Machine Learning",
      items: ["Classification", "Regression", "Feature Engineering", "Model Evaluation"]
    },
    {
      category: "Data Engineering",
      items: ["ETL Pipelines", "Data Cleaning", "Automation", "Quality Monitoring"]
    }
  ],
  experience: [
    {
      role: "Senior Data Analyst / Data Scientist",
      company: "Company Name",
      dates: "2023 - Present",
      summary: [
        "Replace with a strong summary of ownership areas, business stakeholders, and the scale of analytics or ML work delivered.",
        "Add a concrete example of how you translated ambiguous business needs into dashboards, predictive models, or data-driven recommendations."
      ]
    },
    {
      role: "Data Analyst",
      company: "Previous Organization",
      dates: "2021 - 2023",
      summary: [
        "Describe a representative mix of reporting, KPI design, experimentation, and process improvement work.",
        "Mention one high-visibility initiative where your analysis influenced product, operations, finance, or growth decisions."
      ]
    },
    {
      role: "Analytics Intern / Early Career Role",
      company: "Earlier Experience",
      dates: "2019 - 2021",
      summary: [
        "Use this placeholder to show foundational experience in querying, cleaning data, and delivering stakeholder-friendly insights.",
        "Include an example of learning fast, automating manual tasks, or building first-generation reporting."
      ]
    }
  ],
  projects: [
    {
      title: "Customer Retention Prediction",
      problem:
        "Summarize the business challenge here, such as reducing churn, identifying at-risk users, or prioritizing retention outreach.",
      approach:
        "Describe the workflow: data preparation, feature engineering, model selection, validation, and communication of findings.",
      tools: ["Python", "scikit-learn", "SQL", "Tableau"],
      metrics: [
        { value: "+18%", label: "Precision lift" },
        { value: "-11%", label: "Churn reduction" }
      ]
    },
    {
      title: "Executive KPI Dashboard",
      problem:
        "Use this placeholder to explain a fragmented reporting environment, slow manual updates, or missing cross-functional visibility.",
      approach:
        "Describe how you defined KPIs, standardized business logic, automated refreshes, and made the dashboard useful for decision-makers.",
      tools: ["Power BI", "SQL", "Excel", "Data Modeling"],
      metrics: [
        { value: "8 hrs", label: "Saved weekly" },
        { value: "1 source", label: "Unified reporting layer" }
      ]
    },
    {
      title: "Demand Forecasting Pipeline",
      problem:
        "Frame a forecasting challenge involving inventory, staffing, sales planning, or operational capacity.",
      approach:
        "Show how you evaluated historical patterns, seasonality, external drivers, and forecast monitoring.",
      tools: ["Python", "Pandas", "Statsmodels", "Automation"],
      metrics: [
        { value: "-22%", label: "Forecast error" },
        { value: "24 hrs", label: "Planning time saved" }
      ]
    },
    {
      title: "Experimentation & Conversion Analysis",
      problem:
        "Placeholder for a funnel optimization project focused on conversion, activation, or product engagement.",
      approach:
        "Outline hypothesis framing, test design, segment analysis, and recommendation delivery.",
      tools: ["SQL", "Python", "A/B Testing", "Visualization"],
      metrics: [
        { value: "+9.4%", label: "Conversion increase" },
        { value: "3 teams", label: "Stakeholder groups aligned" }
      ]
    }
  ],
  education: [
    {
      credential: "M.S. / Advanced Degree Placeholder",
      institution: "University Name",
      dates: "20XX - 20XX",
      description: "Replace with your degree focus, thesis topic, capstone, or specialized coursework."
    },
    {
      credential: "B.S. / Undergraduate Degree Placeholder",
      institution: "University Name",
      dates: "20XX - 20XX",
      description: "Use this line for academic strengths, relevant coursework, honors, or interdisciplinary work."
    },
    {
      credential: "Professional Certification",
      institution: "Issuing Organization",
      dates: "20XX",
      description: "Add certification name, specialization, or practical focus area."
    },
    {
      credential: "Additional Credential",
      institution: "Platform or Institution",
      dates: "20XX",
      description: "Use for a course, bootcamp, or domain-specific certification."
    }
  ],
  achievements: [
    {
      year: "20XX",
      title: "Award or Recognition Placeholder",
      description: "Add a notable recognition, competition result, speaker invitation, or internal performance milestone."
    },
    {
      year: "20XX",
      title: "Leadership or Community Milestone",
      description: "Use this for mentoring, leading a data initiative, publishing content, or contributing to a community."
    },
    {
      year: "20XX",
      title: "Business Impact Milestone",
      description: "Highlight a standout metric, a major rollout, or a program-level contribution."
    }
  ],
  services: [
    {
      title: "Data Analysis",
      description: "Exploratory analysis, KPI design, segmentation, and insight generation that support faster decisions.",
      deliverables: ["Stakeholder-ready reports", "Decision-focused analysis", "Metric frameworks"]
    },
    {
      title: "Predictive Modeling",
      description: "Build and evaluate predictive models for forecasting, classification, churn, and prioritization use cases.",
      deliverables: ["Feature engineering", "Model evaluation", "Business interpretation"]
    },
    {
      title: "Dashboards",
      description: "Create elegant dashboards that clarify operational performance and reduce reporting friction.",
      deliverables: ["Executive dashboards", "Self-serve reporting", "KPI monitoring"]
    },
    {
      title: "Consulting",
      description: "Partner with teams to shape data strategy, define success metrics, and improve decision workflows.",
      deliverables: ["Analytics audits", "Roadmaps", "Measurement plans"]
    },
    {
      title: "AI / ML",
      description: "Support practical machine learning use cases with careful framing, experimentation, and deployment guidance.",
      deliverables: ["Use-case scoping", "Model prototypes", "Evaluation strategy"]
    }
  ],
  recommendations: [
    {
      quote:
        "Add a short recommendation here from a colleague, mentor, or supervisor that speaks to rigor, communication, and business impact.",
      person: "Colleague Name",
      role: "Role, Company"
    },
    {
      quote:
        "Use this placeholder for a testimonial about problem-solving, ownership, stakeholder collaboration, or analytical depth.",
      person: "Mentor or Manager",
      role: "Role, Organization"
    },
    {
      quote:
        "Replace this text with a recommendation that highlights calm execution, clarity under ambiguity, or end-to-end delivery.",
      person: "Supervisor Name",
      role: "Role, Company"
    }
  ],
  socials: [
    { platform: "Email", label: "your.email@example.com", url: "mailto:your.email@example.com" },
    { platform: "LinkedIn", label: "linkedin.com/in/your-profile", url: "https://www.linkedin.com/" },
    { platform: "GitHub", label: "github.com/your-handle", url: "https://github.com/" },
    { platform: "Portfolio", label: "Schedule a conversation", url: "#" }
  ]
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sectionsForNav = ["about", "projects", "services", "contact"];

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
  const toggle = document.querySelector("#theme-toggle");
  const label = document.querySelector("#theme-toggle-label");
  const isDark = theme === "dark";

  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Activate light mode" : "Activate dark mode");
  label.textContent = isDark ? "Dark" : "Light";
}

function renderHero(profile) {
  const heroContent = document.querySelector("#hero-content");
  const heroHighlights = document.querySelector("#hero-highlights");
  const brandName = document.querySelector("#brand-name");
  const footerName = document.querySelector("#footer-name");
  const footerYearName = document.querySelector("#footer-year-name");
  const footerMeta = document.querySelector("#footer-meta");
  const footerNote = document.querySelector("#footer-note");
  const footerResumeLink = document.querySelector("#footer-resume-link");

  brandName.textContent = profile.name;
  footerName.textContent = profile.name;
  footerYearName.textContent = profile.name;
  footerMeta.textContent = `${profile.title} based in ${profile.location}.`;
  footerNote.textContent = profile.bio;
  footerResumeLink.href = profile.resumeUrl;

  heroContent.innerHTML = `
    <p class="section-label">Data Portfolio</p>
    <h1>${profile.name}</h1>
    <p class="hero-role">${profile.title}</p>
    <p class="hero-tagline">${profile.tagline}</p>
    <p class="hero-summary">${profile.heroSummary}</p>
    <div class="hero-actions">
      <a class="button button--primary" href="#projects">View projects</a>
      <a class="button button--secondary" href="${profile.resumeUrl}" download>View resume</a>
    </div>
    <div class="hero-meta">
      <span>${profile.location}</span>
      <span>${profile.email}</span>
      <span>${profile.availability}</span>
    </div>
  `;

  heroHighlights.innerHTML = `
    <div class="panel-heading">
      <p class="section-label">Impact Snapshot</p>
      <h3>Room for your strongest numbers</h3>
    </div>
    ${profile.highlights
      .map(
        (item, index) => `
          <article class="highlight-card" data-animate style="--delay: ${index * 0.08}s">
            <div class="highlight-value">${item.value}</div>
            <p class="highlight-label">${item.label}</p>
          </article>
        `
      )
      .join("")}
    <p class="panel-note">
      Replace these placeholders with 2-3 metrics that immediately communicate your analytical impact.
    </p>
  `;
}

function renderAbout(profile, skills, experience) {
  const aboutContent = document.querySelector("#about-content");
  const skillsContent = document.querySelector("#skills-content");
  const experienceTimeline = document.querySelector("#experience-timeline");

  aboutContent.innerHTML = `
    <div class="panel-heading">
      <p class="section-label">About</p>
      <h3>Professional summary</h3>
    </div>
    <p class="about-text">${profile.bio}</p>
    <div class="hero-meta">
      <span><strong>Focus:</strong> Analytics, machine learning, and business intelligence</span>
      <span><strong>Location:</strong> ${profile.location}</span>
      <span><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></span>
    </div>
  `;

  skillsContent.innerHTML = `
    <div class="panel-heading">
      <p class="section-label">Skills</p>
      <h3>Core toolkit</h3>
    </div>
    ${skills
      .map(
        (group) => `
          <div class="skills-group">
            <p class="skill-category">${group.category}</p>
            <div class="skill-tags">
              ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
          </div>
        `
      )
      .join("")}
  `;

  experienceTimeline.innerHTML = experience
    .map(
      (item, index) => `
        <article class="timeline-item" data-animate style="--delay: ${index * 0.08}s">
          <div class="timeline-header">
            <div>
              <h4>${item.role}</h4>
              <p class="timeline-company">${item.company}</p>
            </div>
            <p class="timeline-dates">${item.dates}</p>
          </div>
          <ul class="timeline-points">
            ${item.summary.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProjects(projects) {
  const projectsGrid = document.querySelector("#projects-grid");

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card" data-animate style="--delay: ${index * 0.08}s">
          <div class="project-card-header">
            <div>
              <p class="section-label">Project ${String(index + 1).padStart(2, "0")}</p>
              <h3>${project.title}</h3>
            </div>
          </div>
          <p class="project-summary"><strong>Problem:</strong> ${project.problem}</p>
          <p class="project-summary"><strong>Approach:</strong> ${project.approach}</p>
          <div class="project-tools">
            ${project.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
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
        </article>
      `
    )
    .join("");
}

function renderEducation(education, achievements) {
  const educationGrid = document.querySelector("#education-grid");
  const achievementsList = document.querySelector("#achievements-list");

  educationGrid.innerHTML = education
    .map(
      (item, index) => `
        <article class="education-card" data-animate style="--delay: ${index * 0.06}s">
          <div class="education-card-header">
            <div>
              <h4>${item.credential}</h4>
              <p class="education-institution">${item.institution}</p>
            </div>
            <p class="timeline-dates">${item.dates}</p>
          </div>
          <p class="education-description">${item.description}</p>
        </article>
      `
    )
    .join("");

  achievementsList.innerHTML = achievements
    .map(
      (item, index) => `
        <article class="achievement-item" data-animate style="--delay: ${index * 0.06}s">
          <div>
            <h4>${item.title}</h4>
            <p class="achievement-copy">${item.description}</p>
          </div>
          <span class="achievement-year">${item.year}</span>
        </article>
      `
    )
    .join("");
}

function renderServices(services) {
  const servicesGrid = document.querySelector("#services-grid");

  servicesGrid.innerHTML = services
    .map(
      (service, index) => `
        <article class="service-card" data-animate style="--delay: ${index * 0.07}s">
          <div>
            <p class="section-label">Service</p>
            <h3>${service.title}</h3>
          </div>
          <p class="project-summary">${service.description}</p>
          <div>
            <span class="service-deliverables-title">Common deliverables</span>
            <div class="service-deliverables">
              ${service.deliverables.map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRecommendations(recommendations) {
  const recommendationsGrid = document.querySelector("#recommendations-grid");

  recommendationsGrid.innerHTML = recommendations
    .map(
      (item, index) => `
        <article class="recommendation-card" data-animate style="--delay: ${index * 0.07}s">
          <p class="recommendation-quote">"${item.quote}"</p>
          <div class="recommendation-meta">
            <div>
              <h4>${item.person}</h4>
              <p class="recommendation-role">${item.role}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderContact(profile, socials) {
  const contactContent = document.querySelector("#contact-content");
  const contactLinks = document.querySelector("#contact-links");
  const secondaryLinks = document.querySelector("#footer-secondary-links");
  const footerSocials = document.querySelector("#footer-socials");

  contactContent.innerHTML = `
    <p class="contact-label">Contact</p>
    <h2>Let's turn data into decisions.</h2>
    <p class="contact-description">
      Use this section to invite hiring managers, collaborators, or clients to reach out. In this v1
      version, contact stays intentionally simple with direct links and social profiles.
    </p>
    <div class="hero-meta">
      <span>${profile.location}</span>
      <span>${profile.availability}</span>
    </div>
  `;

  contactLinks.innerHTML = socials
    .map(
      (item) => `
        <a class="link-pill" href="${item.url}" ${item.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
          <span>${item.platform}</span>
          <strong>${item.label}</strong>
        </a>
      `
    )
    .join("");

  secondaryLinks.innerHTML = `
    <a href="#education-panel">Education</a>
    <a href="#achievements-panel">Achievements</a>
    <a href="#recommendations">Recommendations</a>
    <a href="${profile.resumeUrl}" download>Resume</a>
  `;

  footerSocials.innerHTML = socials
    .map(
      (item) => `
        <a href="${item.url}" ${item.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
          ${item.platform}
        </a>
      `
    )
    .join("");
}

function setupThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");

  updateThemeToggle(document.documentElement.dataset.theme || "light");

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

function setupSectionReveal() {
  const animatedElements = document.querySelectorAll("[data-animate]");

  if (prefersReducedMotion) {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  animatedElements.forEach((element) => revealObserver.observe(element));
}

function setupActiveNavigation() {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const observedSections = sectionsForNav
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const updateActiveLink = (activeId) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("is-active", isActive);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  };

  updateActiveLink("about");

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (!visibleEntries.length) {
        return;
      }

      visibleEntries.sort((first, second) => second.intersectionRatio - first.intersectionRatio);
      updateActiveLink(visibleEntries[0].target.id);
    },
    {
      threshold: [0.25, 0.45, 0.65],
      rootMargin: "-24% 0px -52% 0px"
    }
  );

  observedSections.forEach((section) => navObserver.observe(section));
}

function renderPortfolio() {
  renderHero(portfolioContent.profile);
  renderAbout(portfolioContent.profile, portfolioContent.skills, portfolioContent.experience);
  renderProjects(portfolioContent.projects);
  renderEducation(portfolioContent.education, portfolioContent.achievements);
  renderServices(portfolioContent.services);
  renderRecommendations(portfolioContent.recommendations);
  renderContact(portfolioContent.profile, portfolioContent.socials);
}

function init() {
  renderPortfolio();
  setupThemeToggle();
  setupSectionReveal();
  setupActiveNavigation();
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

init();
