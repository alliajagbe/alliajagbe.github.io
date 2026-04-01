const portfolioContent = {
  profile: {
    name: "Alli Ajagbe",
    brandTag: "Data science, analytics, and AI",
    title: "Data Scientist, Analytics Engineer & AI Builder",
    tagline:
      "I build analytics systems, predictive models, and AI workflows that turn operational complexity into measurable business outcomes.",
    bio:
      "I am a data science and analytics professional with experience across consulting, operations, startup analytics, and social-impact machine learning. Currently completing an MS in Business Analytics at Wake Forest after graduating from Plaksha University in Data Science, Economics, and Business, I enjoy translating ambiguous business questions into practical data products and decision systems.",
    heroSummary:
      "My work spans recommerce optimization, fraud detection, NLP and generative AI evaluation, business intelligence, and computer vision for development research. I care about end-to-end execution: clean data pipelines, rigorous modeling, and storytelling that helps stakeholders act with confidence.",
    location: "Winston-Salem, NC",
    phone: "+1 743-240-7497",
    email: "ajagao25@wfu.edu",
    availability: "Open to data science, analytics, and AI/ML opportunities.",
    focusAreas: [
      "Analytics engineering",
      "Machine learning",
      "BI dashboards",
      "Experimentation",
      "Generative AI"
    ],
    resumeUrl: "AlliAjagbeResume.pdf",
    logoIconUrl: "alliajagbe%20logo/alliajagbe%20logo2.png",
    logoWordmarkUrl: "alliajagbe%20logo/alliajagbe%20logo.png",
    highlights: [
      { value: "0.97", label: "Macro-F1 on factuality classification in the Data4Good competition" },
      { value: "$3.6M", label: "Projected annual fraud savings from challenge modeling work" },
      { value: "$500", label: "Cost reduction per returned product through recommerce routing" }
    ]
  },
  skills: [
    {
      category: "Languages & Development",
      items: ["Python", "SQL", "R", "Excel", "Stata", "Git", "Pandas", "NumPy"]
    },
    {
      category: "Machine Learning",
      items: [
        "XGBoost",
        "Transformers",
        "Time Series",
        "Decision Trees",
        "Statistical Modeling",
        "Scikit-learn"
      ]
    },
    {
      category: "Data Platforms & Cloud",
      items: ["BigQuery", "Vertex AI", "Azure Synapse", "Microsoft Fabric", "AWS S3", "SageMaker"]
    },
    {
      category: "Analytics & Visualization",
      items: ["Tableau", "Power BI", "A/B Testing", "ETL Pipelines", "Data Storytelling", "Predictive Analytics"]
    }
  ],
  experience: [
    {
      role: "Graduate Consultant",
      company: "Castlery | Winston-Salem, NC",
      dates: "Oct 2025 - Present",
      summary: [
        "Architected a data-driven recommerce decision tree that integrated cost, vendor performance, and operational constraints to replace manual vendor selection.",
        "Reduced cost per returned product by $500 through optimized routing logic and more consistent operational decisioning.",
        "Developed end-to-end modeling frameworks across two core operational stages, reducing customer friction points by 20%."
      ]
    },
    {
      role: "Data Science Tech Analyst",
      company: "Benori Knowledge | Gurgaon, India",
      dates: "Jan 2025 - May 2025",
      summary: [
        "Led an analytics engineering cycle to deploy an automated dataset-curation pipeline with stronger testing and documentation practices.",
        "Saved 25 hours weekly and generated $20K per month through improved data operations and more reliable downstream workflows.",
        "Enhanced feature engineering and ML pipeline logic, increasing model F1-score by 12% while reducing end-of-day processing by 18%."
      ]
    },
    {
      role: "Data Analyst",
      company: "Founder Forward | New York, USA",
      dates: "Jun 2024 - Aug 2024",
      summary: [
        "Built a Python-based ETL workflow to clean, transform, and load 5K+ records, improving data reliability by 45%.",
        "Developed four interactive dashboards in Tableau and Python, reducing time-to-insight by 40% for decision-makers.",
        "Automated six database processes with JavaScript, improving system efficiency by 93%."
      ]
    },
    {
      role: "Data Scientist",
      company: "SBSF Agritech | Berlin, Germany (Remote)",
      dates: "Jul 2023 - Aug 2023",
      summary: [
        "Ingested and preprocessed 22K+ rows to build a scalable data-enrichment pipeline for growth curve modeling.",
        "Parameterized growth curves for 180 tree species across 40 agro-ecological zones, achieving a mean R-squared of 0.86.",
        "Optimized ML models through agile sprint cycles, improving performance by 23% and increasing species-suitability reliability."
      ]
    }
  ],
  projects: [
    {
      title: "Data4Good Factuality Classification Pipeline",
      problem:
        "Competition teams needed a robust way to classify answer factuality at scale across ambiguous language and complex semantic patterns.",
      approach:
        "Led an end-to-end pipeline that evaluated 12 NLP and generative AI models using sentence embeddings, XGBoost, and LLM ensembles, while building supporting analytics infrastructure in Microsoft Fabric and Azure Synapse.",
      tools: ["Python", "Sentence Embeddings", "XGBoost", "LLMs", "Azure Synapse", "Microsoft Fabric"],
      metrics: [
        { value: "0.97", label: "Macro-F1" },
        { value: "120", label: "Teams competed against" }
      ]
    },
    {
      title: "Fraud Detection Modeling Challenge",
      problem:
        "Detect fraud reliably in large-scale transactional data while maximizing meaningful captures and minimizing business exposure.",
      approach:
        "Engineered and compared 10 high-performance fraud-detection models, tuned for capture rate and financial impact rather than only headline accuracy.",
      tools: ["Python", "Classification", "Feature Engineering", "Model Tuning"],
      metrics: [
        { value: "84%", label: "Capture rate" },
        { value: "$3.6M", label: "Projected annual savings" }
      ]
    },
    {
      title: "PovertyPred HGCN Research Project",
      problem:
        "Predict household poverty levels in Kenyan villages using large-scale imagery where socioeconomic labels are difficult to collect directly.",
      approach:
        "Built a hierarchical graph convolutional network using 90K street images to model contextual relationships and improve poverty-level prediction accuracy.",
      tools: ["Deep Learning", "Graph Neural Networks", "Computer Vision", "Python"],
      metrics: [
        { value: "91%", label: "Accuracy" },
        { value: "Top 7", label: "Publication-nominated submission" }
      ]
    },
    {
      title: "Recommerce Decision Tree Optimization",
      problem:
        "Returned-product routing relied on manual two-vendor selection, creating inconsistent decisions, unnecessary cost, and poor customer experience.",
      approach:
        "Designed a recommerce decision framework that combined cost logic, vendor performance, and operational constraints into a scalable decision model.",
      tools: ["Decision Modeling", "Operations Analytics", "Python", "Business Rules"],
      metrics: [
        { value: "$500", label: "Saved per returned product" },
        { value: "-20%", label: "Customer friction points" }
      ]
    }
  ],
  education: [
    {
      credential: "MS - Business Analytics",
      institution: "Wake Forest School of Business | NC, USA",
      dates: "May 2026",
      description:
        "GPA: 3.96/4.0. Honors and leadership include Beta Gamma Sigma, Wiseman Scholar, Graduate Student Ambassador, and Center for Analytics Scholar."
    },
    {
      credential: "BTech - Data Science, Economics & Business",
      institution: "Plaksha University | Punjab, India",
      dates: "May 2025",
      description:
        "GPA: 3.69/4.0. Full Ride Scholar, Student Ambassador, and Pioneer Student Election Committee Member."
    }
  ],
  achievements: [
    {
      year: "2026",
      title: "First Runner-Up, DataCamp Data4Good Analytics Competition",
      description: "East Coast regional placement while competing against 120 teams in the 4th annual analytics competition."
    },
    {
      year: "2025",
      title: "Wiseman Full-Ride Scholarship Recipient",
      description: "Awarded the $85,000 scholarship for the Wake Forest University MSBA program."
    },
    {
      year: "2024",
      title: "Libra Internship Program Select",
      description: "Selected from a global applicant pool with a 2.8% acceptance rate for a New York summer internship."
    },
    {
      year: "2024",
      title: "Top 1% in NPTEL Database Management Systems",
      description: "Placed in the top 1% of 7,134 students in the course cohort."
    },
    {
      year: "2022",
      title: "Diana Award Recipient",
      description: "Recognized in England for social impact through technology."
    },
    {
      year: "2020",
      title: "25Under25 Leadership Gamechangers in Africa",
      description: "Selected at a 3% rate and recognized as the youngest recipient."
    }
  ],
  services: [
    {
      title: "Analytics Strategy & KPI Design",
      description: "Translate business goals into measurable frameworks, operating metrics, and analysis plans that teams can use consistently.",
      deliverables: ["KPI definitions", "Measurement plans", "Decision-focused reporting"]
    },
    {
      title: "Predictive Modeling",
      description: "Build and evaluate forecasting, classification, and prioritization models grounded in real operational constraints.",
      deliverables: ["Model development", "Validation design", "Business interpretation"]
    },
    {
      title: "Dashboards & BI Systems",
      description: "Create stakeholder-ready dashboards that reduce reporting friction and make the right numbers easy to trust.",
      deliverables: ["Power BI and Tableau dashboards", "Executive summaries", "Monitoring views"]
    },
    {
      title: "Analytics Engineering & ETL",
      description: "Design reliable data workflows for ingestion, cleaning, transformation, and quality control across analytics pipelines.",
      deliverables: ["ETL workflows", "Documentation", "Data quality checkpoints"]
    },
    {
      title: "AI / ML Prototyping",
      description: "Prototype practical generative AI and ML applications with clear evaluation criteria and business-use framing.",
      deliverables: ["LLM workflows", "Model prototypes", "Evaluation frameworks"]
    }
  ],
  recommendations: [],
  socials: [
    { platform: "Email", label: "ajagao25@wfu.edu", url: "mailto:ajagao25@wfu.edu" },
    { platform: "Phone", label: "+1 743-240-7497", url: "tel:+17432407497" },
    { platform: "LinkedIn", label: "linkedin.com/in/alliajagbe", url: "https://linkedin.com/in/alliajagbe" },
    { platform: "GitHub", label: "github.com/alliajagbe", url: "https://github.com/alliajagbe" },
    { platform: "Resume", label: "Open PDF resume", url: "AlliAjagbeResume.pdf" }
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
  const brandTag = document.querySelector("#brand-tag");
  const footerName = document.querySelector("#footer-name");
  const footerYearName = document.querySelector("#footer-year-name");
  const footerMeta = document.querySelector("#footer-meta");
  const footerNote = document.querySelector("#footer-note");
  const footerResumeLink = document.querySelector("#footer-resume-link");
  const brandLogo = document.querySelector("#brand-logo");
  const footerWordmark = document.querySelector("#footer-wordmark");

  document.title = `${profile.name} | ${profile.title}`;
  brandName.textContent = profile.name;
  brandTag.textContent = profile.brandTag;
  footerName.textContent = profile.name;
  footerYearName.textContent = profile.name;
  footerMeta.textContent = "Analytics engineering, machine learning, and decision-focused data products.";
  footerNote.textContent = profile.bio;
  footerResumeLink.href = profile.resumeUrl;
  footerResumeLink.textContent = "View / download resume";
  brandLogo.src = profile.logoIconUrl;
  footerWordmark.src = profile.logoWordmarkUrl;

  heroContent.innerHTML = `
    <p class="section-label">Portfolio</p>
    <h1>${profile.name}</h1>
    <p class="hero-role">${profile.title}</p>
    <p class="hero-tagline">${profile.tagline}</p>
    <p class="hero-summary">${profile.heroSummary}</p>
    <div class="hero-actions">
      <a class="button button--primary" href="#projects">View projects</a>
      <a class="button button--secondary" href="${profile.resumeUrl}" target="_blank" rel="noreferrer">View resume</a>
    </div>
    <div class="hero-meta">
      <span>${profile.location}</span>
      <span>${profile.email}</span>
      <span>${profile.phone}</span>
      <span>${profile.availability}</span>
    </div>
  `;

  heroHighlights.innerHTML = `
    <div class="panel-brand">
      <div class="panel-logo-shell">
        <img class="panel-logo" src="${profile.logoIconUrl}" alt="${profile.name} logo" />
      </div>
      <div>
        <p class="section-label">Impact Snapshot</p>
        <h3>Recent outcomes across analytics and ML work</h3>
      </div>
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
      Selected results from consulting, competition, and product-focused analytics work.
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
    <div class="skill-tags">
      ${profile.focusAreas.map((item) => `<span class="tag">${item}</span>`).join("")}
    </div>
    <div class="hero-meta">
      <span><strong>Location:</strong> ${profile.location}</span>
      <span><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></span>
      <span><strong>Phone:</strong> <a href="tel:+17432407497">${profile.phone}</a></span>
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

  if (!recommendations.length) {
    recommendationsGrid.innerHTML = `
      <article class="recommendation-card recommendation-card--empty" data-animate>
        <p class="section-label">Ready for future updates</p>
        <h3>Recommendations can be added when you have formal testimonials to share.</h3>
        <p class="recommendation-quote">
          This version of the portfolio is populated from your resume and logo assets, so no collaborator quotes have been invented.
        </p>
      </article>
    `;
    return;
  }

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
    <h2>Let's build something decision-ready.</h2>
    <p class="contact-description">
      I am interested in opportunities across data science, analytics, business intelligence, and applied AI. The fastest way to reach me is by email or LinkedIn, and my resume is linked below.
    </p>
    <div class="hero-meta">
      <span>${profile.location}</span>
      <span>${profile.phone}</span>
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
    <a href="#education">Education</a>
    <a href="#achievements-panel">Achievements</a>
    <a href="#recommendations">Recommendations</a>
    <a href="${profile.resumeUrl}" target="_blank" rel="noreferrer">Resume</a>
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
