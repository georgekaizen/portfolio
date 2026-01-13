// Quantifiable achievements organized by expertise area
// Data extracted from George Njau Ngugi's resumes

import { expertiseAreas } from './experienceState';

export const achievements = {
  // All quantifiable metrics from resumes
  metrics: [
    // Engineering Manager Metrics
    { value: "35%", label: "Defect Reduction", expertise: [expertiseAreas.ENGINEERING_MANAGER], category: "quality" },
    { value: "40%", label: "Testing Cost Reduction", expertise: [expertiseAreas.ENGINEERING_MANAGER], category: "efficiency" },
    { value: "90%", label: "Team Retention Rate", expertise: [expertiseAreas.ENGINEERING_MANAGER], category: "leadership" },
    { value: "95%", label: "Sprint Completion Rate", expertise: [expertiseAreas.ENGINEERING_MANAGER], category: "delivery" },
    { value: "$500K", label: "Annual Budget Managed", expertise: [expertiseAreas.ENGINEERING_MANAGER], category: "financial" },

    // QA Engineer Metrics
    { value: "90%", label: "Test Coverage Increase", expertise: [expertiseAreas.QA_ENGINEER], category: "quality" },
    { value: "70%", label: "Regression Testing Time Reduced", expertise: [expertiseAreas.QA_ENGINEER], category: "efficiency" },
    { value: "95%", label: "Test Automation Coverage", expertise: [expertiseAreas.QA_ENGINEER], category: "automation" },
    { value: "80%", label: "Manual Effort Reduction", expertise: [expertiseAreas.QA_ENGINEER], category: "automation" },
    { value: "65%", label: "Production Bug Reduction", expertise: [expertiseAreas.QA_ENGINEER], category: "quality" },
    { value: "3", label: "Mobile Apps Automated", expertise: [expertiseAreas.QA_ENGINEER], category: "delivery" },

    // Data Quality Metrics
    { value: "100TB+", label: "Daily Data Processing", expertise: [expertiseAreas.DATA_QUALITY], category: "scale" },
    { value: "99.9%", label: "Data Accuracy", expertise: [expertiseAreas.DATA_QUALITY], category: "quality" },
    { value: "2TB", label: "User Data Pipeline Daily", expertise: [expertiseAreas.DATA_QUALITY], category: "scale" },

    // API Developer Metrics
    { value: "50K+", label: "Daily Transactions Processed", expertise: [expertiseAreas.API_DEVELOPER], category: "scale" },
    { value: "75%", label: "Deployment Time Reduction", expertise: [expertiseAreas.API_DEVELOPER], category: "efficiency" },
    { value: "10%", label: "Business Process Efficiency Gain", expertise: [expertiseAreas.API_DEVELOPER], category: "efficiency" },
    { value: "200%", label: "User Load Growth Supported", expertise: [expertiseAreas.API_DEVELOPER], category: "scalability" },
    { value: "60%", label: "Page Load Time Reduction", expertise: [expertiseAreas.API_DEVELOPER], category: "performance" },

    // AI Specialist Metrics
    { value: "50%", label: "QA-Dev Collaboration Improvement", expertise: [expertiseAreas.AI_SPECIALIST], category: "collaboration" },
    { value: "MSc", label: "Data Science Degree", expertise: [expertiseAreas.AI_SPECIALIST], category: "education" }
  ],

  // Major highlights organized by expertise
  highlights: {
    [expertiseAreas.ENGINEERING_MANAGER]: [
      {
        title: "Team Leadership Excellence",
        description: "Led and mentored teams of 8-12 engineers with 90% retention rate, fostering professional growth and successful project delivery",
        impact: "Consistent on-time delivery and high team satisfaction"
      },
      {
        title: "Quality Transformation",
        description: "Decreased critical production bugs by 65% through comprehensive, risk-based testing strategies",
        impact: "Significant improvement in customer satisfaction and product stability"
      },
      {
        title: "Budget Optimization",
        description: "Managed annual QA budget of $500K, optimizing tool investments and vendor relationships",
        impact: "40% cost reduction while maintaining quality standards"
      }
    ],

    [expertiseAreas.QA_ENGINEER]: [
      {
        title: "Automation Excellence",
        description: "Automated 3 mobile applications using Appium and Selenium, reducing manual effort by 80%",
        impact: "Faster release cycles and improved test consistency"
      },
      {
        title: "Framework Development",
        description: "Built scalable test automation frameworks increasing coverage by 90% across web and mobile",
        impact: "Comprehensive testing with minimal maintenance overhead"
      },
      {
        title: "Performance Testing Leadership",
        description: "Led performance testing for M-Pesa at Safaricom achieving 35% system performance improvement",
        impact: "Enhanced system stability for millions of users"
      }
    ],

    [expertiseAreas.DATA_QUALITY]: [
      {
        title: "Massive Scale Data Processing",
        description: "Successfully processed over 100TB of data daily maintaining 99.9% accuracy",
        impact: "Reliable data foundation for business decisions"
      },
      {
        title: "Data Pipeline Excellence",
        description: "Designed and implemented ETL pipelines using Apache NiFi for centralized data access",
        impact: "Improved decision-making through accessible, quality data"
      },
      {
        title: "Real-time Monitoring",
        description: "Built real-time QA dashboards monitoring test coverage and bug metrics",
        impact: "Proactive quality management and faster issue resolution"
      }
    ],

    [expertiseAreas.API_DEVELOPER]: [
      {
        title: "Microservices Transformation",
        description: "Spearheaded transformation from monolithic application to scalable microservices architecture",
        impact: "Improved maintainability and deployment flexibility"
      },
      {
        title: "Payment Gateway Success",
        description: "Architected and launched Flexpay Payment Gateway processing 50K+ daily transactions",
        impact: "75% reduction in payment processing errors"
      },
      {
        title: "Infrastructure Modernization",
        description: "Reduced deployment time by 75% through Docker and Kubernetes implementation",
        impact: "Faster feature delivery and improved system reliability"
      }
    ],

    [expertiseAreas.AI_SPECIALIST]: [
      {
        title: "AI-Powered QA Integration",
        description: "Integrated ML techniques into QA processes for predictive defect detection",
        impact: "Proactive bug identification before production"
      },
      {
        title: "BDD Enhancement with ML",
        description: "Implemented Behavior-Driven Development with ML, boosting QA-development collaboration by 50%",
        impact: "Improved communication and shared understanding"
      },
      {
        title: "Academic Excellence",
        description: "Completed MSc Data Science with focus on AI applications in software quality",
        impact: "Cutting-edge knowledge applied to practical QA challenges"
      }
    ]
  },

  // Professional certifications and training
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      area: [expertiseAreas.API_DEVELOPER, expertiseAreas.ENGINEERING_MANAGER]
    },
    {
      name: "Oracle Certified Professional, Java SE Programmer",
      area: [expertiseAreas.API_DEVELOPER]
    },
    {
      name: "Certified Scrum Master (CSM)",
      area: [expertiseAreas.ENGINEERING_MANAGER]
    },
    {
      name: "ISTQB Certified Tester",
      area: [expertiseAreas.QA_ENGINEER]
    }
  ],

  // Career progression timeline
  careerMilestones: [
    { year: 2017, milestone: "Started as Junior Developer at Parity Information Systems" },
    { year: 2018, milestone: "Promoted to Lead Software Quality Analyst at Flexpay" },
    { year: 2019, milestone: "Became Software Automation Engineer at Copia Kenya" },
    { year: 2021, milestone: "Transitioned to Senior QA Engineer role at Appcues (Remote)" },
    { year: 2022, milestone: "Advanced to SDET Performance Engineer at Safaricom PLC" },
    { year: 2023, milestone: "Promoted to QA Manager at Copia Kenya & Started MSc Data Science" },
    { year: 2024, milestone: "Completed MSc Data Science at University of East London" }
  ]
};

// Helper functions
export const getMetricsByExpertise = (expertiseArea) => {
  return achievements.metrics.filter(metric =>
    metric.expertise.includes(expertiseArea)
  );
};

export const getHighlightsByExpertise = (expertiseArea) => {
  return achievements.highlights[expertiseArea] || [];
};

export const getCertificationsByExpertise = (expertiseArea) => {
  return achievements.certifications.filter(cert =>
    cert.area.includes(expertiseArea)
  );
};

export const getAllMetrics = () => {
  return achievements.metrics;
};

export const getCareerMilestones = () => {
  return achievements.careerMilestones;
};
