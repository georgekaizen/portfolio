// Central data source for all expertise areas
// Extracted from George Njau Ngugi's resumes

export const expertiseAreas = {
  ENGINEERING_MANAGER: 'engineering-manager',
  QA_ENGINEER: 'qa-engineer',
  DATA_QUALITY: 'data-quality',
  API_DEVELOPER: 'api-developer',
  AI_SPECIALIST: 'ai-specialist'
};

export const experienceData = {
  [expertiseAreas.ENGINEERING_MANAGER]: {
    title: "Software Engineering Manager",
    tagline: "Leading teams to deliver quality software with DevOps excellence",
    hero: {
      image: "/images/expertise/engineering-manager.png",
      summary: "I am an accomplished IT professional with 7 years of experience in Software Engineering, DevOps, Quality Assurance, and team management. Skilled in Docker, Kubernetes, and CI/CD, I lead and mentor engineering teams to achieve objectives and ensure software quality. As an Engineering Manager, I drive performance and foster continuous improvement.",
      keyPoints: [
        "Led teams of 8-12 engineers with 90% retention rate",
        "Achieved 35% defect reduction through comprehensive test strategies",
        "Reduced testing costs by 40% without compromising quality",
        "95% average sprint completion rate as Assistant Scrum Master"
      ]
    },
    achievements: [
      { metric: "35%", description: "Defect Reduction", detail: "Through comprehensive test strategies" },
      { metric: "40%", description: "Cost Reduction", detail: "Optimized testing without compromising quality" },
      { metric: "8-12", description: "Team Members Led", detail: "With 90% retention rate" },
      { metric: "95%", description: "Sprint Completion", detail: "Average rate across 3 agile teams" },
      { metric: "$500K", description: "Annual Budget Managed", detail: "Optimized tool investments and vendor relationships" }
    ],
    skills: {
      leadership: [
        "Team Management",
        "Agile/Scrum",
        "Performance Reviews",
        "Mentoring & Coaching",
        "Resource Allocation",
        "Budget Management",
        "Cross-functional Collaboration"
      ],
      technical: [
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Jenkins",
        "GitLab CI",
        "DevSecOps",
        "Chaos Engineering"
      ],
      methodologies: [
        "DevOps Practices",
        "Risk-based Testing",
        "Performance Engineering",
        "Quality Assurance",
        "Project Management",
        "OKR/KPI Tracking"
      ]
    },
    experience: [
      {
        company: "Copia Kenya",
        role: "QA Manager",
        period: "March 2023 - May 2024",
        achievements: [
          "Developed and implemented comprehensive test strategy reducing defects by 35%",
          "Led and mentored team of 8 QA engineers, delivering major projects on time",
          "Designed and implemented automated testing frameworks, improving coverage by 90%",
          "Established defect tracking system enhancing bug fix tracking and software quality",
          "Developed risk-based testing approach to prioritize fixes and meet customer expectations",
          "Conducted performance reviews and provided feedback fostering professional growth"
        ],
        technologies: ["Jenkins", "GitLab", "Selenium", "Appium", "Robot Framework", "JMeter"]
      },
      {
        company: "Safaricom PLC",
        role: "SDET Performance Engineer",
        period: "August 2022 - March 2023",
        achievements: [
          "Improved system performance by 35% through monitoring and issue resolution",
          "Identified and resolved performance bottlenecks using Chaos Engineering",
          "Led QA/QC team to successfully complete company-wide quality audit",
          "Performed performance testing for M-Pesa using K6 and JMeter",
          "Developed proactive performance monitoring strategies"
        ],
        technologies: ["K6", "JMeter", "Chaos Engineering", "Performance Testing"]
      },
      {
        company: "Appcues Inc",
        role: "Senior QA Engineer (Remote)",
        period: "June 2021 - June 2022",
        achievements: [
          "Automated Chrome extension testing using Rainforest QA",
          "Created robust QA process delivering quality features on time",
          "Developed QA checklist serving as testing benchmark for all teams",
          "Led bug triaging process ensuring timely resolution",
          "Trained QA team members in new processes and best practices"
        ],
        technologies: ["Rainforest QA", "Chrome Extension Testing", "UI/UX Testing"]
      }
    ],
    notableProjects: []
  },

  [expertiseAreas.QA_ENGINEER]: {
    title: "Senior QA Engineer",
    tagline: "Expert in Manual, Automation & Performance Testing",
    hero: {
      image: "/images/expertise/qa-engineer.png",
      summary: "Comprehensive QA expertise spanning manual testing, automation frameworks (Selenium, Appium, Robot Framework, Playwright), and performance testing (JMeter, K6). Proven track record of 90% test coverage increase and 70% regression testing time reduction.",
      keyPoints: [
        "95% test automation coverage across web and mobile platforms",
        "70% reduction in regression testing cycle time",
        "80% reduction in manual testing effort through automation",
        "Automated 3 mobile applications using Appium and Selenium"
      ]
    },
    achievements: [
      { metric: "90%", description: "Test Coverage Increase", detail: "Through automated testing frameworks" },
      { metric: "70%", description: "Regression Time Reduced", detail: "Via scalable automation frameworks" },
      { metric: "95%", description: "Automation Coverage", detail: "Across web and mobile platforms" },
      { metric: "80%", description: "Manual Effort Reduced", detail: "Through comprehensive automation" },
      { metric: "3", description: "Mobile Apps Automated", detail: "Using Appium and Selenium" }
    ],
    skills: {
      automation: [
        "Selenium WebDriver",
        "Appium",
        "Robot Framework",
        "Playwright",
        "Katalon Studio",
        "Rainforest QA",
        "Cucumber (BDD)"
      ],
      performance: [
        "Apache JMeter",
        "K6 Performance Testing",
        "Load Testing",
        "Stress Testing",
        "Chaos Engineering"
      ],
      cicd: [
        "Jenkins",
        "GitLab CI/CD",
        "Docker",
        "GitHub Actions",
        "Quality Gates"
      ],
      methodologies: [
        "Test-Driven Development (TDD)",
        "Behavior-Driven Development (BDD)",
        "Exploratory Testing",
        "Risk-based Testing",
        "Regression Testing"
      ],
      tools: [
        "JIRA",
        "Confluence",
        "TestRail",
        "SonarQube",
        "Postman"
      ]
    },
    experience: [
      {
        company: "Copia Kenya",
        role: "Software Automation Engineer",
        period: "September 2019 - January 2023",
        achievements: [
          "Automated test cases for 3 mobile applications using Appium and Selenium",
          "Developed TDD and BDD testing frameworks using Python and Robot Framework",
          "Established CI/CD pipelines automating the GO LIVE process",
          "Created integrated automation platform improving business efficiency by 10%",
          "Recruited and trained junior QA engineers for the Quality Engineering team",
          "Wrote SQL stored procedures to automate manual verification tasks"
        ],
        technologies: ["Selenium", "Appium", "Katalon Studio", "Python", "Java", "Robot Framework", "Jenkins"]
      },
      {
        company: "Appcues Inc",
        role: "Senior QA Engineer (Remote)",
        period: "June 2021 - June 2022",
        achievements: [
          "Automated Chrome extension testing with Rainforest, reducing manual tests",
          "Performed functional tests for new features (Pins, Buttons, Flow builder)",
          "Conducted UI/UX tests ensuring site meets established standards",
          "Created robust and efficient QA process for quality delivery",
          "Developed QA checklist as testing benchmark for all teams"
        ],
        technologies: ["Rainforest QA", "Chrome Extension Testing", "UI/UX Testing"]
      },
      {
        company: "Flexpay Technology Ltd",
        role: "Lead Software Quality Analyst",
        period: "January 2018 - August 2019",
        achievements: [
          "Led performance testing for Tuskys.com and Flexpay platforms using JMeter",
          "Automated test cases using Katalon Studio and Selenium reaching 85% coverage",
          "Reduced regression testing time from 5 days to 8 hours",
          "Integrated data science techniques into QA for predictive defect detection",
          "Led project management ensuring achievement of company objectives via OKR/KPI"
        ],
        technologies: ["JMeter", "Katalon Studio", "Selenium", "Data Science QA"]
      }
    ],
    notableProjects: []
  },

  [expertiseAreas.DATA_QUALITY]: {
    title: "Data Quality Analyst",
    tagline: "Ensuring data integrity across ETL pipelines and data warehouses",
    hero: {
      image: "/images/expertise/data-quality.png",
      summary: "Data engineering expertise with focus on quality, integrity, and accuracy. Experience processing 100TB+ of data daily with 99.9% accuracy through comprehensive validation frameworks and ETL pipeline monitoring.",
      keyPoints: [
        "Processed 100TB+ data daily with 99.9% accuracy",
        "Built centralized data warehousing solutions in Snowflake",
        "Designed ETL pipelines using Apache NiFi and Airflow",
        "Implemented real-time data quality monitoring dashboards"
      ]
    },
    achievements: [
      { metric: "100TB+", description: "Daily Data Processing", detail: "Maintained high efficiency at scale" },
      { metric: "99.9%", description: "Data Accuracy", detail: "Through integrated quality checks" },
      { metric: "2TB", description: "User Data Pipeline", detail: "Processed daily for analytics" },
      { metric: "Real-time", description: "QA Dashboards", detail: "For test coverage and bug metrics" }
    ],
    skills: {
      tools: [
        "Apache NiFi",
        "Apache Airflow",
        "Snowflake",
        "Rudderstack",
        "Snowplow",
        "dbt (data build tool)"
      ],
      databases: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Oracle Database",
        "Snowflake Data Warehouse"
      ],
      languages: [
        "SQL",
        "Python",
        "PL/SQL"
      ],
      practices: [
        "Data Validation",
        "ETL Design & Optimization",
        "Data Warehousing",
        "Data Pipeline Monitoring",
        "Data Quality Metrics",
        "Schema Design"
      ]
    },
    experience: [
      {
        company: "Andela Inc",
        role: "Data Engineer",
        period: "August 2017 - Present",
        achievements: [
          "Processed over 100TB of data daily with maintained efficiency",
          "Developed and deployed data services using Rudderstack/Snowplow and Snowflake",
          "Prepared and presented reports and analysis to executives",
          "Designed best practices for continuous process automation",
          "Increased efficiency of data pipelines processing massive scale data"
        ],
        technologies: ["Rudderstack", "Snowplow", "Snowflake", "Python", "ETL"]
      },
      {
        company: "Appcues Inc",
        role: "Data Engineer",
        period: "June 2021 - June 2022",
        achievements: [
          "Designed and implemented data solutions for customer needs",
          "Provided leadership recommending right technologies for use cases",
          "Developed updated ETL System using Python 3.10",
          "Completed SDLC experience including design, testing and deployment",
          "Explored new technologies to uncover better problem-solving approaches"
        ],
        technologies: ["Python 3.10", "ETL", "Data Solutions"]
      },
      {
        company: "Copia Kenya",
        role: "Database Administrator",
        period: "September 2019 - January 2023",
        achievements: [
          "Provided technical support for database management systems issues",
          "Developed automated scripts to maintain database consistency and accuracy",
          "Installed, configured, and maintained database servers with minimal downtime",
          "Ensured database integrity through data validation checks implementation",
          "Worked closely with third parties and IT partners to resolve issues"
        ],
        technologies: ["PostgreSQL", "MySQL", "Database Administration", "SQL"]
      }
    ],
    notableProjects: []
  },

  [expertiseAreas.API_DEVELOPER]: {
    title: "Python/Java API & ETL Developer",
    tagline: "Building robust APIs and scalable ETL pipelines",
    hero: {
      image: "/images/expertise/api-developer.png",
      summary: "Full-stack development expertise specializing in backend API development with Python and Java. Experience building microservices, RESTful APIs, and ETL pipelines that process 50K+ daily transactions with 75% deployment time reduction.",
      keyPoints: [
        "50K+ daily transactions processed through custom APIs",
        "75% deployment time reduction via Docker and Kubernetes",
        "10% business process efficiency gain through automation",
        "200% user load increase supported through scalable architecture"
      ]
    },
    achievements: [
      { metric: "50K+", description: "Daily Transactions", detail: "Processed via Flexpay Payment Gateway" },
      { metric: "75%", description: "Deployment Time Cut", detail: "Through Docker and Kubernetes" },
      { metric: "10%", description: "Efficiency Increase", detail: "Business process automation" },
      { metric: "200%", description: "User Load Growth", detail: "Supported through scalability" }
    ],
    skills: {
      languages: [
        "Python",
        "Java",
        "JavaScript",
        "SQL"
      ],
      frameworks: [
        "Spring Boot",
        "Django",
        "Flask",
        "React",
        "Angular",
        "Express.js"
      ],
      databases: [
        "PostgreSQL",
        "MySQL",
        "MongoDB"
      ],
      tools: [
        "Git",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Postman",
        "Swagger/OpenAPI"
      ],
      practices: [
        "RESTful API Design",
        "Microservices Architecture",
        "API Documentation",
        "Test-Driven Development",
        "CI/CD Integration",
        "API Security Best Practices"
      ]
    },
    experience: [
      {
        company: "Copia Kenya",
        role: "Software Automation Engineer",
        period: "September 2019 - January 2023",
        achievements: [
          "Developed RESTful APIs to extend Odoo functionality (ordering, SMS modules)",
          "Enhanced customer-centric ordering processes through API development",
          "Wrote SQL stored procedures to automate manual verification tasks",
          "Collaborated in Agile environment ensuring timely feature delivery",
          "Built integrated software platform automating business processes (+10% efficiency)"
        ],
        technologies: ["Python", "Odoo", "RESTful APIs", "SQL", "Agile"]
      },
      {
        company: "Appcues Inc",
        role: "Data Engineer",
        period: "June 2021 - June 2022",
        achievements: [
          "Developed updated ETL system using Python 3.10",
          "Designed and implemented data solutions for customer needs",
          "Completed full SDLC including design, documentation, implementation, testing",
          "Recommended right technologies and solutions for specific use cases",
          "Continuously explored new technologies for better problem solving"
        ],
        technologies: ["Python 3.10", "ETL", "Data Engineering", "SDLC"]
      },
      {
        company: "Flexpay Technology Ltd",
        role: "Lead QA Engineer",
        period: "January 2018 - August 2019",
        achievements: [
          "Architected and launched Flexpay Payment Gateway (50K+ daily transactions)",
          "Reduced payment processing errors by 75% through testing and monitoring",
          "Implemented CI/CD pipeline cutting deployment time by 60%",
          "Led cross-functional teams of 20+ across development, QA, and business units",
          "Established company-wide OKR/KPI tracking system (+35% delivery efficiency)"
        ],
        technologies: ["Payment Gateway", "CI/CD", "Java", "Python"]
      },
      {
        company: "C.W. William Community Health Care",
        role: "Software Engineer and Designer",
        period: "May 2018 - August 2018",
        achievements: [
          "Created system wireframes and mockups for client projects",
          "Designed front-end using Bootstrap and WordPress",
          "Developed back-end solutions using MySQL ensuring data integrity",
          "Set up Jira boards for time and project tracking",
          "Developed plugins for site portability and extended functionality"
        ],
        technologies: ["Bootstrap", "WordPress", "MySQL", "JavaScript", "PHP"]
      }
    ],
    notableProjects: []
  },

  [expertiseAreas.AI_SPECIALIST]: {
    title: "AI/RAG & AI Agents Specialist",
    tagline: "Leveraging AI for QA, Testing & DevOps automation",
    hero: {
      image: "/images/expertise/ai-specialist.png",
      summary: "MSc Data Science graduate with expertise in applying AI and Machine Learning to software quality assurance, testing automation, and DevOps processes. Specialized in RAG implementations, AI agents for QA, and predictive defect detection.",
      keyPoints: [
        "MSc Data Science from University of East London (2023-2024)",
        "Integrated ML techniques into QA for predictive defect detection",
        "50% improvement in QA-development collaboration via BDD with ML",
        "AI-powered testing strategies for enhanced quality assurance"
      ]
    },
    achievements: [
      { metric: "MSc", description: "Data Science Degree", detail: "University of East London" },
      { metric: "AI/ML", description: "QA Process Integration", detail: "Predictive defect detection" },
      { metric: "50%", description: "Collaboration Boost", detail: "QA-dev via BDD and ML" },
      { metric: "Predictive", description: "Defect Detection", detail: "Data-driven QA methodologies" }
    ],
    skills: {
      ai_ml: [
        "Machine Learning",
        "Data Science",
        "RAG (Retrieval-Augmented Generation)",
        "AI Agents Development",
        "Natural Language Processing",
        "Predictive Analytics"
      ],
      tools: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Jupyter Notebooks"
      ],
      applications: [
        "Predictive Testing",
        "Automated Test Analysis",
        "Data-Driven QA",
        "Quality Metrics Prediction",
        "Intelligent Test Case Generation"
      ],
      focus: [
        "QA Automation with AI",
        "Testing Optimization",
        "DevOps Intelligence",
        "AI-powered CI/CD",
        "ML for Performance Testing"
      ]
    },
    experience: [
      {
        company: "University of East London",
        role: "MSc Data Science Student",
        period: "February 2023 - June 2024",
        achievements: [
          "Completed advanced coursework in Machine Learning and Data Science",
          "Thesis focused on AI applications in software quality assurance",
          "Researched predictive models for defect detection in software systems",
          "Explored RAG and AI agents for test automation",
          "Graduated with focus on practical AI implementations"
        ],
        technologies: ["Python", "Machine Learning", "Data Science", "AI/ML"]
      },
      {
        company: "Flexpay Technology Ltd",
        role: "Lead QA Engineer",
        period: "January 2018 - August 2019",
        achievements: [
          "Integrated data science techniques into QA for predictive defect detection",
          "Collaborated with data science teams to align initiatives with QA processes",
          "Mentored team in data-driven QA methodologies and practices",
          "Conducted data analysis to identify and optimize performance bottlenecks",
          "Developed metrics to assess QA process effectiveness using data insights"
        ],
        technologies: ["Data Science", "Machine Learning", "QA Integration", "Python"]
      },
      {
        company: "Copia Kenya",
        role: "QA Manager",
        period: "March 2023 - May 2024",
        achievements: [
          "Implemented BDD using Cucumber and Python boosting collaboration by 50%",
          "Applied ML techniques for test case prioritization",
          "Developed data-driven testing strategies for quality improvement",
          "Created automated test reporting with ML-based insights",
          "Leveraged predictive analytics for risk-based testing approach"
        ],
        technologies: ["BDD", "Cucumber", "Python", "Machine Learning", "Data Analytics"]
      }
    ],
    notableProjects: []
  }
};

// Helper function to get data for a specific expertise area
export const getExpertiseData = (area) => {
  return experienceData[area] || null;
};

// Get all expertise area keys
export const getAllExpertiseAreas = () => {
  return Object.values(expertiseAreas);
};

// Get expertise title by area key
export const getExpertiseTitle = (area) => {
  return experienceData[area]?.title || '';
};
