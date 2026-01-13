import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

//Import Images
import CE from "./images/CE.png";
import CE2 from "./images/CE-2.png";
import MA from "./images/MA.png";
import MA2 from "./images/MA-2.png";
import DF from "./images/DF.png";
import DF2 from "./images/DF-2.png";
import CEgif from "./images/CEgif.gif"
import gitrepo from "./images/gitrepo.png"
import QAImage from "./images/DataAnalystQA.png";
import ETLImage from "./images/ETL_process.png";
import DockerK8sImage from "./images/docker_kubernetes.png";
import RPAImage from "./images/robotic_process_automation.png";
import DataQualityImage from "./images/FeaturesDataQualityTools.png";


export const ProjectState = () => {
  return [
    {
        title: "Bancassurance Products QA",
        mainImg: QAImage,
        secondaryImg: DataQualityImage,
        url: "/projects/bancassurance-products",
        expertiseAreas: ["qa-engineer", "data-quality"],
        technologies: ["T24", "TurnQuest", "Manual Testing", "Regression Testing", "UAT"],
        role: "Senior QA Engineer",
        detailDescription: <p>
          <p>Led end-to-end quality engineering for Bancassurance products covering Motor Insurance (Third Party & Comprehensive), Personal Accident, and Last Expense products at KCB Bank.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Collaborated with Business Analysts, Underwriters, and Core Banking Teams to validate requirements</li>
            <li>Designed and executed manual, white-box, and black-box test cases</li>
            <li>Validated pricing rules, cover limits, policy schedules, and risk details</li>
            <li>Performed integration, UAT, and regression testing across T24 and TurnQuest systems</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Reduced post-production defects by 45%</strong> through structured test planning and risk-based coverage</li>
            <li><strong>Accelerated policy issuance turnaround time by 30%</strong> by identifying and resolving integration bottlenecks</li>
            <li><strong>Improved regression testing efficiency by 40%</strong> through standardized test case libraries</li>
            <li>Led Motor Comprehensive product rollout ahead of schedule with full regulatory compliance</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "Performance Testing Framework - Safaricom",
        mainImg: RPAImage,
        secondaryImg: QAImage,
        url: "/projects/performance-testing-safaricom",
        expertiseAreas: ["qa-engineer"],
        technologies: ["JMeter", "K6", "Chaos Engineering", "Performance Testing", "Grafana", "InfluxDB"],
        role: "Senior SDET Engineer",
        detailDescription: <p>
          <p>Developed comprehensive performance testing frameworks at Safaricom using Apache JMeter and K6 to ensure system resilience and optimal performance under high load conditions. Led the implementation of modern performance testing infrastructure that could handle millions of concurrent users.</p>

          <h3>Apache JMeter Implementation</h3>
          <ul>
            <li><strong>Load Testing:</strong> Designed and executed load test scenarios simulating up to 100,000 concurrent users accessing M-PESA payment systems</li>
            <li><strong>Stress Testing:</strong> Identified breaking points and system limits by gradually increasing load beyond normal operational capacity</li>
            <li><strong>Spike Testing:</strong> Validated system behavior during sudden traffic surges, simulating flash sales and peak transaction periods</li>
            <li><strong>Endurance Testing:</strong> Conducted 72-hour soak tests to identify memory leaks and performance degradation over time</li>
            <li><strong>Distributed Testing:</strong> Implemented JMeter distributed testing architecture with 10+ slave nodes to generate massive load</li>
            <li><strong>Custom Plugins:</strong> Developed custom JMeter plugins for M-PESA API testing and real-time transaction monitoring</li>
          </ul>

          <h3>K6 Modern Performance Testing</h3>
          <ul>
            <li><strong>JavaScript-Based Tests:</strong> Created modular, maintainable test scripts using modern JavaScript (ES6+)</li>
            <li><strong>Cloud Native:</strong> Integrated K6 with Grafana Cloud for real-time performance metrics visualization</li>
            <li><strong>CI/CD Integration:</strong> Automated performance tests in GitLab CI pipelines with performance thresholds as quality gates</li>
            <li><strong>API Performance:</strong> Validated REST API response times consistently under 200ms for 95th percentile</li>
            <li><strong>Chaos Engineering:</strong> Combined K6 with chaos testing to validate system resilience under failure scenarios</li>
          </ul>

          <h3>Key Responsibilities</h3>
          <ul>
            <li>Applied Chaos Engineering principles to identify performance bottlenecks and system weaknesses</li>
            <li>Designed and executed non-functional tests for performance, security, scalability, and reliability</li>
            <li>Built centralized QA metrics repository using InfluxDB and Grafana for data-driven quality tracking</li>
            <li>Developed proactive monitoring strategies with real-time alerts to detect issues before user impact</li>
            <li>Established performance testing best practices and standards across engineering teams</li>
            <li>Trained 15+ QA engineers on JMeter and K6 performance testing methodologies</li>
          </ul>

          <h3>Technical Stack</h3>
          <ul>
            <li><strong>JMeter:</strong> Version 5.5 with custom plugins, distributed testing, and real-time reporting</li>
            <li><strong>K6:</strong> Modern load testing with JavaScript, Grafana dashboards, and CI/CD integration</li>
            <li><strong>Monitoring:</strong> Grafana, InfluxDB, Prometheus for metrics visualization and analysis</li>
            <li><strong>Infrastructure:</strong> AWS EC2 instances for load generators, Docker containers for test isolation</li>
            <li><strong>Reporting:</strong> Custom HTML reports, Grafana dashboards, and automated Slack notifications</li>
          </ul>

          <h3>Achievements</h3>
          <ul>
            <li><strong>Achieved 33% increase in software resilience</strong> and 40% faster load times through performance optimization</li>
            <li><strong>Improved system efficiency by 35%</strong> through targeted performance monitoring and tuning</li>
            <li><strong>Reduced performance-related incidents by 60%</strong> through proactive testing and monitoring</li>
            <li><strong>Validated system capacity for 5x traffic growth</strong> ensuring readiness for business expansion</li>
            <li><strong>Saved $200K annually</strong> by identifying infrastructure inefficiencies and optimizing resource allocation</li>
            <li>Reduced bug fix turnaround time by 12% through improved prioritization at Appcues Inc.</li>
            <li>Automated manual test flows cutting manual testing efforts by 70%</li>
            <li><strong>99.9% uptime achievement</strong> for critical payment systems during peak loads of 100,000+ concurrent users</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "Microservices Migration & Data Pipeline",
        mainImg: DockerK8sImage,
        secondaryImg: ETLImage,
        url: "/projects/microservices-migration",
        expertiseAreas: ["engineering-manager", "data-quality"],
        technologies: ["Microservices", "Jenkins", "GitLab", "BDD", "Cucumber", "Python"],
        role: "QA Manager",
        detailDescription: <p>
          <p>Led comprehensive QA strategy for Microservices Migration and Enterprise Data Pipeline at Copia Global, managing team of 12 QA engineers.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Introduced BDD (Cucumber + Python) to strengthen QA-development collaboration</li>
            <li>Led CI/CD pipeline enhancements with automated quality gates</li>
            <li>Designed comprehensive QA strategy covering unit, integration, system, and end-to-end testing</li>
            <li>Managed $500K QA budget optimizing vendor relationships and resource allocation</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Reduced critical production bugs by 65%</strong> through risk-based testing</li>
            <li><strong>Improved deployment success rates from 82% to 98%</strong></li>
            <li><strong>Achieved 95% automation coverage</strong> using Jenkins, GitLab, and Appium</li>
            <li><strong>Decreased testing costs by 40%</strong> through tool optimization</li>
            <li>Led recruitment and mentoring achieving 90% team retention</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "Mobile Test Automation with Appium",
        mainImg: RPAImage,
        secondaryImg: QAImage,
        url: "/projects/mobile-automation",
        expertiseAreas: ["qa-engineer"],
        technologies: ["Appium", "Selenium", "Python", "Java", "Robot Framework"],
        role: "Software Automation Engineer",
        detailDescription: <p>
          <p>Created comprehensive Appium framework for automation of 3 mobile applications at Copia Kenya, facilitating regression testing and saving significant testing effort.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Developed automation scripts with Selenium and Katalon Studio</li>
            <li>Designed test-driven and behavior-driven testing frameworks</li>
            <li>Implemented CI/CD pipelines for automated testing integration</li>
            <li>Designed cross-browser testing strategies across Chrome, Firefox, and Safari</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Saved 2 working days in testing effort</strong> through Appium framework</li>
            <li><strong>Improved business process efficiency by 10%</strong></li>
            <li><strong>Reduced deployment time by 75%</strong> through Docker and Kubernetes implementation</li>
            <li>Enhanced system scalability to support 200% increase in user load</li>
            <li>Applied TDD and BDD methodologies to web and mobile testing workflows</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "ETL Pipeline & Data Warehousing",
        mainImg: ETLImage,
        secondaryImg: DataQualityImage,
        url: "/projects/etl-data-warehouse",
        expertiseAreas: ["data-quality", "api-developer"],
        technologies: ["Apache Airflow", "Snowflake", "Apache NiFi", "SQL", "Python"],
        role: "Software Automation Engineer",
        detailDescription: <p>
          <p>Designed and implemented ETL workflows using Apache Airflow and built centralized data warehousing solutions in Snowflake for test results and user metrics at Copia Kenya.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Designed ETL workflows for user behavior analytics</li>
            <li>Built centralized data warehousing solutions for test results and metrics</li>
            <li>Created real-time QA dashboards to monitor test coverage and bug metrics</li>
            <li>Integrated data quality checks into pipelines</li>
            <li>Built ETL pipelines using Apache NiFi to support QE Data Lake</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Ensured 99.9% data accuracy</strong> through integrated quality checks</li>
            <li><strong>Reduced data processing time by 70%</strong> through parallel processing techniques</li>
            <li>Centralized QA data for better decision-making</li>
            <li>Created real-time dashboards for monitoring test coverage</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "Flexpay Payment Gateway",
        mainImg: DataQualityImage,
        secondaryImg: QAImage,
        url: "/projects/flexpay-gateway",
        expertiseAreas: ["qa-engineer", "api-developer"],
        technologies: ["Python", "JMeter", "Selenium", "Katalon Studio", "PostgreSQL"],
        role: "Lead QA Engineer",
        detailDescription: <p>
          <p>Architected and launched the Flexpay Payment Gateway processing 50,000+ daily transactions, with comprehensive performance testing and automation.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Automated critical test cases using Katalon Studio and Selenium</li>
            <li>Led performance testing for high-traffic platforms including Tuskys.com</li>
            <li>Integrated data science techniques into QA processes to predict defects</li>
            <li>Established company-wide OKR/KPI tracking system</li>
            <li>Implemented CI/CD pipeline for deployment automation</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Processing 50,000+ daily transactions</strong> reliably</li>
            <li><strong>Reduced payment processing errors by 75%</strong> through automated testing</li>
            <li><strong>Achieved 99.9% uptime under 100,000 concurrent users</strong></li>
            <li><strong>Reduced regression testing time from 5 days to 8 hours</strong></li>
            <li><strong>Reached 85% test coverage</strong> across payment workflows</li>
            <li>Improved project delivery efficiency by 35% through OKR tracking</li>
            <li>Cut deployment time by 60% with CI/CD implementation</li>
          </ul>
        </p>,
        links: [],
      },
      {
        title: "Healthcare Portals - C.W. William & Pulmonary Clinic",
        mainImg: DataQualityImage,
        secondaryImg: ETLImage,
        url: "/projects/healthcare-portals",
        expertiseAreas: ["api-developer"],
        technologies: ["WordPress", "Bootstrap", "MySQL", "PHP", "Jira"],
        role: "Software Developer & QA",
        detailDescription: <p>
          <p>Developed responsive, enterprise-grade healthcare portals with secure MySQL backends for C.W. William Community Health Care and Pulmonary Clinic.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Developed responsive front-end interfaces using Bootstrap and WordPress</li>
            <li>Architected secure healthcare portals with focus on data protection and compliance</li>
            <li>Engineered custom WordPress plugins to extend platform functionality</li>
            <li>Integrated analytics and monitoring tools to track performance KPIs</li>
            <li>Established Jira boards for structured sprint planning and delivery oversight</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Delivered 60% improvement in page load times</strong> through performance tuning</li>
            <li><strong>Reduced maintenance costs by 40%</strong> through custom plugin development</li>
            <li>Enhanced platform extensibility while maintaining security compliance</li>
            <li>Successfully delivered multiple client healthcare solutions</li>
          </ul>
        </p>,
        links: [
          {
            title: "C.W. Williams Community Health Care",
            description: "https://cwwilliams.org"
          },
          {
            title: "Pulmonary Clinic PC",
            description: "https://pulmonaryclinicpc.com"
          }
        ],
      },
      {
        title: "ERP Microservices Architecture",
        mainImg: DockerK8sImage,
        secondaryImg: ETLImage,
        url: "/projects/erp-microservices",
        expertiseAreas: ["api-developer"],
        technologies: ["Java", "Spring Boot", "Hibernate", "Docker", "Jenkins", "JUnit"],
        role: "Junior Software Developer",
        detailDescription: <p>
          <p>Developed and maintained ERP modules with RESTful Microservices architecture using Spring Boot and containerized deployment at Parity Information Systems.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Developed ERP modules for inventory and customer management</li>
            <li>Designed and implemented RESTful Microservices using Spring Boot and Hibernate</li>
            <li>Containerized services using Docker for improved deployment consistency</li>
            <li>Integrated services through API Gateway and Spring Cloud</li>
            <li>Wrote unit and integration tests using JUnit and Mockito</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Reduced system response time by 40%</strong> through SQL query optimization</li>
            <li>Improved deployment consistency and scalability through Docker containerization</li>
            <li>Enhanced code quality and reduced defects through comprehensive testing</li>
            <li>Gained hands-on experience in Agile development practices</li>
          </ul>
        </p>,
        links: [],
      },
  ];
};
