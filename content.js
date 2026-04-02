window.portfolioContent = {
  profile: {
    name: "Alli Ajagbe",
    brandTag: "Data science, analytics, and AI",
    title: "Data Scientist, Analytics Engineer & AI Builder",
    tagline:
      "I build analytics systems, predictive models, and AI workflows that turn operational complexity into measurable business outcomes.",
    bio:
      "I am a data science and analytics professional working across consulting, operations, startup analytics, and social-impact machine learning. I am completing an MS in Business Analytics at Wake Forest after graduating from Plaksha University in Data Science, Economics, and Business.",
    heroSummary:
      "My work spans recommerce optimization, fraud detection, NLP and generative AI evaluation, BI systems, and computer vision research. I care about clean pipelines, rigorous modeling, and communication that helps teams act with confidence.",
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
    quickFacts: ["MSBA Candidate at Wake Forest", "Beta Gamma Sigma", "Full-Ride Scholar"],
    resumeUrl: "AlliAjagbeResume.pdf",
    logoIconUrl: "alliajagbe%20logo/alliajagbe%20logo2.png",
    logoWordmarkUrl: "alliajagbe%20logo/alliajagbe%20logo.png",
    highlights: [
      { value: "0.97", label: "Macro-F1 in Data4Good factuality classification" },
      { value: "$3.6M", label: "Projected annual fraud savings from challenge modeling" },
      { value: "$500", label: "Saved per returned product through routing optimization" }
    ]
  },
  focusCards: [
    {
      icon: "layers",
      title: "Analytics Systems",
      copy: "Reliable pipelines, KPI design, and reporting layers that make business decisions faster."
    },
    {
      icon: "spark",
      title: "Predictive Models",
      copy: "Classification, forecasting, and optimization work tied to measurable operational outcomes."
    },
    {
      icon: "compass",
      title: "AI Workflows",
      copy: "LLM-assisted and ML-powered systems framed around clarity, evaluation, and usefulness."
    }
  ],
  skills: [
    {
      category: "Languages & Development",
      icon: "code",
      items: ["Python", "SQL", "R", "Excel", "Stata", "Git", "Pandas", "NumPy"]
    },
    {
      category: "Machine Learning",
      icon: "brain",
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
      icon: "server",
      items: ["BigQuery", "Vertex AI", "Azure Synapse", "Microsoft Fabric", "AWS S3", "SageMaker"]
    },
    {
      category: "Analytics & Visualization",
      icon: "chart",
      items: ["Tableau", "Power BI", "A/B Testing", "ETL Pipelines", "Data Storytelling", "Predictive Analytics"]
    }
  ],
  experience: [
    {
      role: "Graduate Consultant",
      company: "Castlery | Winston-Salem, NC",
      dates: "Oct 2025 - Present",
      summary: [
        "Architected a data-driven recommerce decision tree integrating cost, vendor performance, and operating constraints.",
        "Reduced cost per returned product by $500 through optimized routing logic.",
        "Built modeling frameworks across two operational stages, reducing customer friction points by 20%."
      ]
    },
    {
      role: "Data Science Tech Analyst",
      company: "Benori Knowledge | Gurgaon, India",
      dates: "Jan 2025 - May 2025",
      summary: [
        "Led an automated dataset-curation pipeline with stronger testing and documentation practices.",
        "Saved 25 hours weekly and generated $20K per month through improved data operations.",
        "Increased model F1-score by 12% while reducing end-of-day processing by 18%."
      ]
    },
    {
      role: "Data Analyst",
      company: "Founder Forward | New York, USA",
      dates: "Jun 2024 - Aug 2024",
      summary: [
        "Built a Python ETL workflow for 5K+ records, improving data reliability by 45%.",
        "Developed four interactive dashboards, reducing time-to-insight by 40%.",
        "Automated six database processes, improving system efficiency by 93%."
      ]
    },
    {
      role: "Data Scientist",
      company: "SBSF Agritech | Berlin, Germany",
      dates: "Jul 2023 - Aug 2023",
      summary: [
        "Built a scalable enrichment pipeline for 22K+ rows supporting growth curve modeling.",
        "Parameterized growth curves for 180 tree species across 40 agro-ecological zones.",
        "Improved model performance by 23% and strengthened species-suitability reliability."
      ]
    }
  ],
  projects: [
    {
      icon: "spark",
      title: "Data4Good Factuality Classification Pipeline",
      shortTitle: "Data4Good NLP Pipeline",
      problem:
        "Classify answer factuality at scale across ambiguous language and complex semantic patterns.",
      approach:
        "Led a pipeline evaluating 12 NLP and generative AI models using sentence embeddings, XGBoost, and LLM ensembles, with supporting infrastructure in Microsoft Fabric and Azure Synapse.",
      tools: ["Python", "Sentence Embeddings", "XGBoost", "LLMs", "Azure Synapse", "Microsoft Fabric"],
      metrics: [
        { value: "0.97", label: "Macro-F1" },
        { value: "120", label: "Teams competed against" }
      ]
    },
    {
      icon: "shield",
      title: "Fraud Detection Modeling Challenge",
      shortTitle: "Fraud Detection Models",
      problem:
        "Detect fraud reliably in large-scale transactional data while maximizing meaningful captures and limiting business exposure.",
      approach:
        "Engineered and compared 10 fraud-detection models, optimizing for capture rate and financial impact instead of headline accuracy alone.",
      tools: ["Python", "Classification", "Feature Engineering", "Model Tuning"],
      metrics: [
        { value: "84%", label: "Capture rate" },
        { value: "$3.6M", label: "Projected annual savings" }
      ]
    },
    {
      icon: "globe",
      title: "PovertyPred HGCN Research Project",
      shortTitle: "PovertyPred HGCN",
      problem:
        "Predict household poverty levels in Kenyan villages using imagery where socioeconomic labels are difficult to collect directly.",
      approach:
        "Built a hierarchical graph convolutional network using 90K street images to model contextual relationships and improve poverty-level prediction accuracy.",
      tools: ["Deep Learning", "Graph Neural Networks", "Computer Vision", "Python"],
      metrics: [
        { value: "91%", label: "Accuracy" },
        { value: "Top 7", label: "Publication-nominated submission" }
      ]
    },
    {
      icon: "route",
      title: "Recommerce Decision Tree Optimization",
      shortTitle: "Recommerce Routing Model",
      problem:
        "Replace manual vendor selection for returned-product routing and reduce inconsistent operational decisions.",
      approach:
        "Designed a recommerce decision model that combined cost logic, vendor performance, and operational constraints into one scalable framework.",
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
        "GPA: 3.96/4.0. Beta Gamma Sigma, Wiseman Scholar, Graduate Student Ambassador, and Center for Analytics Scholar."
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
      description: "East Coast regional placement while competing against 120 teams."
    },
    {
      year: "2025",
      title: "Wiseman Full-Ride Scholarship Recipient",
      description: "Awarded the $85,000 scholarship for the Wake Forest University MSBA program."
    },
    {
      year: "2024",
      title: "Libra Internship Program Select",
      description: "Selected from a global applicant pool with a 2.8% acceptance rate."
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
      icon: "target",
      title: "Analytics Strategy & KPI Design",
      description: "Translate business goals into measurable frameworks and operating metrics teams can use consistently.",
      deliverables: ["KPI definitions", "Measurement plans", "Decision-focused reporting"]
    },
    {
      icon: "chart",
      title: "Predictive Modeling",
      description: "Build and evaluate forecasting, classification, and prioritization models grounded in operating constraints.",
      deliverables: ["Model development", "Validation design", "Business interpretation"]
    },
    {
      icon: "grid",
      title: "Dashboards & BI Systems",
      description: "Create stakeholder-ready dashboards that reduce reporting friction and clarify what matters.",
      deliverables: ["Power BI and Tableau dashboards", "Executive summaries", "Monitoring views"]
    },
    {
      icon: "workflow",
      title: "Analytics Engineering & ETL",
      description: "Design reliable workflows for ingestion, cleaning, transformation, and data quality control.",
      deliverables: ["ETL workflows", "Documentation", "Quality checkpoints"]
    },
    {
      icon: "brain",
      title: "AI / ML Prototyping",
      description: "Prototype practical generative AI and ML systems with clear evaluation criteria and business-use framing.",
      deliverables: ["LLM workflows", "Model prototypes", "Evaluation frameworks"]
    }
  ],
  process: [
    {
      icon: "search",
      title: "Discover",
      copy: "Frame the business question, map the data reality, and define the decision that matters."
    },
    {
      icon: "build",
      title: "Build",
      copy: "Develop a clear analytical workflow, model, or dashboard with quality and usability in mind."
    },
    {
      icon: "share",
      title: "Deliver",
      copy: "Turn outputs into decision-ready communication that stakeholders can trust and use."
    }
  ],
  socials: [
    { platform: "Email", icon: "mail", label: "ajagao25@wfu.edu", url: "mailto:ajagao25@wfu.edu" },
    { platform: "Phone", icon: "phone", label: "+1 743-240-7497", url: "tel:+17432407497" },
    { platform: "LinkedIn", icon: "linkedin", label: "linkedin.com/in/alliajagbe", url: "https://linkedin.com/in/alliajagbe" },
    { platform: "GitHub", icon: "github", label: "github.com/alliajagbe", url: "https://github.com/alliajagbe" },
    { platform: "Resume", icon: "document", label: "Open PDF resume", url: "AlliAjagbeResume.pdf" }
  ]
};
