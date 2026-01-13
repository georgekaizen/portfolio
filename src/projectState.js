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
      title: "Currency Exchange",
      mainImg: CE,
      secondaryImg: CE2,
      url: "/projects/currency-exchange",
      expertiseAreas: ["api-developer", "qa-engineer"],
      technologies: ["Python", "Flask", "PostgreSQL", "Heroku", "Bootstrap"],
      role: "Full-stack Developer & QA",
      detailDescription: <p> 
        <p> A Python-Flask Application that implements a currency exchange function using a currency conversion API that updates regularly. </p>
        <h3> Setup Instructions </h3>
        <p> Preparation: mkdir currency-exchange Git git init touch .gitignore </p>
        <p> Installations: pip install virtualenv </p>
        <p> Create Virtual Environment called ‘virtual’: virtualenv virtual </p>
        <p> Activate Virtual Environment: source virtual/bin/activate </p>
        <p>
          <ul>
            <li> Install Flask: pip install flask </li>
            <li> Install Requests: pip install requests </li>
            <li> Bootstrap: pip install flask-bootstrap </li>
            <li> Forms: pip install flask-wtf </li>
            <li> Flash Script: pip install flash-script </li>
            <li> Fonts: pip install Flask-FontAwesome </li>
            <li> LogIn: pip install flask-login </li>
            <li> Werkzeug: pip install -U Werkzeug==0.16.0 </li>
            <li> Database Installations: 
              <ul>
                <li> pip install flask-SQLAlchemy </li>
                <li> pip install psycopg2 </li>
              </ul>
            </li>
            <li> Database Migrations: </li>
            <ul>
                <li> pip install Flask-Migrate==2.7.0 </li>
                <li> python3 manage.py db init </li>
                <li> python3 manage.py db migrate -m "Initial Migration </li>
                <li> python3 manage.py db upgrade </li>
              </ul>
            <li> Enable easy run: </li>
            <ul>
                <li> chmod a+x start.sh </li>
                <li> ./start.sh </li>
              </ul>
          </ul>
        </p>
        <h3> API </h3>
        <p> The API chosen for this project is the Free Currency Converter. The API provider offers free web services for developers to convert one currency to another. Currency values are updated every 60 minutes but on the free plan may experience some downtime occasionally. </p>
        <h3> User Authentication. </h3>
        <p> Authentication comprises a log-in, signup, profile and edit profile function that includes the option to update a profile picture and select a default currency. Every user starts with a KES 1000 balance converted into their default currency. </p>
        <h3> Currency Conversion. </h3>
        <p> A user can convert from one currency to the other on request using the “Make Conversion” function. Another way conversion happens is through transactions. For instance, when one user sends money to another user in the same app, in the case that their default currencies are different, conversion happens by default and reaches the receiver wallet in their default currency. The conversions are up to date with the conversion rates which update every hour. Debit and Credit functions can also be performed in any currency by a user to their own wallets and the money is saved to their wallets in their individual currencies. </p>
        <h3> Transactions </h3>
        <p> Transactions are displayed on the transactions page depending on the user where they can view debits and credits that occurred in their accounts as statement of accounts. Time and amount are also included in the report. </p> 
        <h3> Deployment </h3>
        <p> Deployment Deployment has been achieved through Heroku. Heroku is a cloud deployment platform that is able to implement both the application dependencies and the database. 
          <p>
          <ul>
            <li> pip install gunicorn </li>
            <li> pip freeze requirements.txt </li>
            <li> touch Procfile and write the code: web: gunicorn manage:app into the file. </li>
            <li> heroku login </li>
            <li> heroku create currency-exchange-application </li>
            <li> heroku config:set API_KEY='YOUR MOVIE API' </li>
            <li> heroku config:set SECRET_KEY= 'YOUR SECRET KEY' </li>
            <li> heroku addons:create heroku-postgresql </li>
            <li> Alter config.py with: class ProdConfig(Config): SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") </li>
            <li> Alter manage.py: From: app = create_app(‘development’) To: app = create_app(‘production’) </li>
            <li> pip freeze requirements.txt </li>
            <li> Push to App Heroku: git push heroku master </li>
            <li> Deploy Database: heroku run python3 manage.py db upgrade </li>
          </ul>
          </p>
        </p>
        <h3> Future Development </h3>
        <p> As the business grows, the number of requests is expected to increase on the server. To handle an increased number of requests, the application would need to use another API as the one applied here has a limit on the number of responses and requests it can provide and receive per unit time. The future applied API also needs to update the exchange rates instantly as in the exchange market rather than the 60 minute rate provided in this application. </p>
        <h3> Technologies and Frameworks used: </h3>
        <p>
          <ul>
            <li> HTML5 </li>
            <li> CSS3 </li>
            <li> Python3 </li>
            <li> PostgreSQL </li>
            <li> Git </li>
            <li> Bootstrap </li>
            <li> Flask </li>
            <li> Heroku </li>
          </ul>
        </p>
      </p>,
      links: [
        {
          title: "Live Heroku Link",
          description:
            <a href = "https://currency-exchange-application.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">
              <img src= {CEgif} alt="Currency Exchange GIF" />
            </a>
        },
        {
          title: "YouTube Demo",
          description: 
          <div className="youtube">
            <ReactPlayer
              url="https://youtu.be/pzUS_yKeVxI"
            />
          </div>,
        },
        {
          title: "Github Repository Link",
          description:
          <a href = "https://github.com/georgeKaizen/currency-exchange-app" target = "_blank" rel = "noopener noreferrer">
            <img src= {gitrepo} alt="Github Icon" />
          </a>
        },
      ],
    },
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
        technologies: ["JMeter", "K6", "Chaos Engineering", "Performance Testing"],
        role: "Senior SDET Engineer",
        detailDescription: <p>
          <p>Developed comprehensive performance testing frameworks at Safaricom using JMeter and K6 to ensure system resilience and optimal performance under high load.</p>
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Applied Chaos Engineering principles to identify performance bottlenecks</li>
            <li>Designed and executed non-functional tests for performance, security, and scalability</li>
            <li>Built centralized QA metrics repository for data-driven quality tracking</li>
            <li>Developed proactive monitoring strategies to detect issues before user impact</li>
          </ul>
          <h3>Achievements</h3>
          <ul>
            <li><strong>Achieved 33% increase in software resilience</strong> and faster load times</li>
            <li><strong>Improved system efficiency by 35%</strong> through targeted performance monitoring</li>
            <li>Reduced bug fix turnaround time by 12% through improved prioritization at Appcues Inc.</li>
            <li>Automated manual test flows cutting manual testing efforts by 70%</li>
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
