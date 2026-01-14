import React from "react";

//Styles
import styled from "styled-components";
import { StyledAbout } from "../styles";

import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";
//import { useScroll } from "./useScroll";

const QuestionsSection = () => {
  //const [element, controls] = useScroll();

  return (
    <StyledQuestions
    // variants = { scrollReveal }
    // ref = { element }
    // animate = { controls }
    // initial = "hidden"
    >
      <h2>
        {" "}
        Any Questions? <span> FAQs </span>{" "}
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is George Njau Ngugi's TechStack and Skillset?">
          <div className="answer">
            <p>
              <ul>
                <li><strong>API Development & Backend Engineering:</strong></li>
                <ul>
                  <li>
                    <strong>Java Spring Boot:</strong> Building RESTful APIs and microservices using Spring Boot, Spring MVC,
                    Spring Security, and Hibernate. Experience with service discovery, fault tolerance, and unit testing with JUnit 5.
                  </li>
                  <li>
                    <strong>Python Development:</strong> Backend development with Flask and Django, scripting for automation,
                    and building ETL pipelines for data processing.
                  </li>
                </ul>
                <li><strong>Data Analysis & Data Engineering:</strong></li>
                <ul>
                  <li>
                    <strong>Python Data Stack:</strong> NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis,
                    visualization, and machine learning applications.
                  </li>
                  <li>
                    <strong>Spatial Data Analysis:</strong> Experience working with geospatial data, location-based analytics,
                    and GIS-related data processing.
                  </li>
                  <li>
                    <strong>ETL Pipelines & Data Quality:</strong> Designing and implementing ETL workflows using Apache Airflow,
                    Apache NiFi, and Snowflake. Strong focus on data validation, integrity checks, and quality assurance.
                  </li>
                </ul>
                <li><strong>Test Automation & Quality Engineering:</strong></li>
                <ul>
                  <li>
                    <strong>Selenium WebDriver:</strong> Web application automation, cross-browser testing, and integration with CI/CD pipelines.
                  </li>
                  <li>
                    <strong>Robot Framework:</strong> Keyword-driven test automation for web, API, and database testing.
                  </li>
                  <li>
                    <strong>Appium:</strong> Mobile application automation for Android and iOS platforms.
                  </li>
                  <li>
                    <strong>Performance Testing:</strong> Load and stress testing using JMeter and K6.
                  </li>
                </ul>
                <li><strong>Leadership & Strategic Vision:</strong></li>
                <ul>
                  <li>
                    <strong>Team Leadership:</strong> Led and mentored teams of 8-12 engineers, achieving 90% retention rate
                    and fostering professional growth through coaching and performance reviews.
                  </li>
                  <li>
                    <strong>Strategic Planning:</strong> Defining QA strategies, roadmaps, and OKR/KPI frameworks aligned
                    with business objectives.
                  </li>
                  <li>
                    <strong>Vision Carrier:</strong> Driving organizational excellence through continuous improvement (Kaizen),
                    innovation, and data-driven decision making.
                  </li>
                </ul>
                <li><strong>DevOps & Infrastructure:</strong> Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS</li>
                <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Oracle, Snowflake</li>
                <li><strong>Methodologies:</strong> Agile/Scrum, BDD (Cucumber), TDD, Risk-based Testing</li>
              </ul>
            </p>
          </div>
        </Toggle>
        <Toggle title="What is George Njau Ngugi's Education Background?">
          <div className="answer">
            <h4>
              {" "}
              2023 - 2026 (Ongoing) || <span> University of East London </span> || Master of Science (MSc.) Data Science - Remote{" "}
            </h4>
            <h4>
              {" "}
              2013 - 2017 || <span> Technical University of Kenya </span> || Bachelor of Technology in Computer Technology (Second-class upper Division){" "}
            </h4>
            <h4>
              {" "}
              <span> St. Paul's University </span> || Certificate in Psychology (Graduated with Distinction - Team leadership and management){" "}
            </h4>
            <h4>
              {" "}
              2009 - 2012 || <span> Muhoho High School, Kiambu </span> || Kenya Certificate of Secondary Education (Mean grade: B+){" "}
            </h4>
          </div>
        </Toggle>
        <Toggle title="What Professional Certifications does George Njau Ngugi hold?">
          <div className="answer">
            <ul>
              <li><strong>ISTQB Certified Tester</strong> - International Software Testing Qualifications Board</li>
              <li><strong>Kubernetes LS250 Engineer</strong> - Container Orchestration and DevOps</li>
              <li><strong>Project Management Certification</strong> - Agile and Scrum methodologies</li>
              <li><strong>AWS Data Analysis and Engineering</strong> - Cloud-based data solutions</li>
              <li><strong>Data Engineering Certificate</strong> - ETL pipelines and data quality</li>
              <li><strong>AI and SAP Integration Certificate</strong> - Enterprise AI solutions</li>
              <li><strong>Climate Risk Management Certificate</strong> - Sustainable technology practices</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title="Where has George Njau Ngugi worked?">
          <div className="answer">
            <h4>
              {" "}
              April 2024 – Present || <span> Senior QA Engineer </span> || KCB Bank Assurance{" "}
            </h4>
            <p>
              <ul>
                <li>Led end-to-end quality engineering for Bancassurance products (Motor Insurance, Personal Accident, Last Expense)</li>
                <li>Designed and executed manual, white-box, and black-box test cases across underwriting, policy issuance, claims, and renewals</li>
                <li>Validated pricing rules, cover limits, and policy schedules for regulatory compliance</li>
                <li>Performed integration, UAT, and regression testing across T24 and TurnQuest systems</li>
                <li><strong>Achievement:</strong> Reduced post-production defects by 45% and accelerated policy issuance by 30%</li>
              </ul>
            </p>

            <h4>
              {" "}
              June 2023 – March 2024 || <span> Senior SDET Engineer </span> || Andela Inc{" "}
            </h4>
            <p>
              <ul>
                <li>Led QA initiatives covering manual, white-box, and black-box testing for system stability</li>
                <li>Applied Chaos Engineering principles to identify performance bottlenecks and improve system resilience</li>
                <li>Built centralized QA metrics repository for data-driven quality tracking</li>
                <li>Designed non-functional tests using JMeter, K6, and security scanning tools</li>
                <li><strong>Achievement:</strong> Improved system efficiency by 35% and software resilience by 33% at Safaricom</li>
              </ul>
            </p>

            <h4>
              {" "}
              November 2022 – June 2023 || <span> QA Manager </span> || Copia Global{" "}
            </h4>
            <p>
              <ul>
                <li>Led quality strategy and managed team of 12 QA engineers driving test automation and CI/CD integration</li>
                <li>Introduced BDD (Cucumber + Python) to strengthen QA-development collaboration</li>
                <li>Achieved 95% automation coverage using Jenkins, GitLab, and Appium for mobile testing</li>
                <li>Designed comprehensive QA strategy covering unit, integration, system, and performance testing</li>
                <li><strong>Achievement:</strong> Reduced critical bugs by 65%, testing costs by 40%, and improved deployment success from 82% to 98%</li>
              </ul>
            </p>

            <h4>
              {" "}
              September 2019 – October 2022 || <span> Software Automation Engineer </span> || Copia Kenya{" "}
            </h4>
            <p>
              <ul>
                <li>Developed automation scripts with Selenium and Katalon Studio for functional and regression tests</li>
                <li>Implemented CI/CD pipelines and managed automated testing integration</li>
                <li>Created Appium framework for mobile app automation across 3 applications</li>
                <li>Built ETL workflows using Apache Airflow and data warehousing in Snowflake</li>
                <li><strong>Achievement:</strong> Improved efficiency by 10%, reduced deployment time by 75%, and data processing time by 70%</li>
              </ul>
            </p>

            <h4>
              {" "}
              September 2018 – August 2019 || <span> Lead QA Engineer </span> || Flexpay Technology Ltd{" "}
            </h4>
            <p>
              <ul>
                <li>Automated critical test cases using Katalon Studio and Selenium, reaching 85% test coverage</li>
                <li>Reduced regression testing time from 5 days to 8 hours through automation strategies</li>
                <li>Integrated data science techniques into QA processes to predict defects</li>
                <li>Led performance testing for Tuskys.com achieving 99.9% uptime under 100,000 concurrent users</li>
                <li><strong>Achievement:</strong> Launched Flexpay Payment Gateway processing 50,000+ daily transactions with 75% fewer errors</li>
              </ul>
            </p>

            <h4>
              {" "}
              January 2018 – August 2018 || <span> Software Developer & QA </span> || Tezza{" "}
            </h4>
            <p>
              <ul>
                <li>Developed responsive front-end interfaces using Bootstrap and WordPress</li>
                <li>Architected secure healthcare portals backed by MySQL with focus on data protection</li>
                <li>Engineered custom WordPress plugins to extend platform functionality</li>
                <li>Established Jira boards for structured sprint planning and delivery oversight</li>
                <li><strong>Achievement:</strong> Delivered 60% improvement in page load times and reduced maintenance costs by 40%</li>
              </ul>
            </p>

            <h4>
              {" "}
              June 2017 – December 2017 || <span> Junior Software Developer </span> || Parity Information Systems{" "}
            </h4>
            <p>
              <ul>
                <li>Developed ERP modules for inventory and customer management using Java and Spring Framework</li>
                <li>Designed RESTful Microservices using Spring Boot and Hibernate</li>
                <li>Containerized services using Docker, improving deployment consistency</li>
                <li>Wrote unit and integration tests using JUnit and Mockito</li>
                <li><strong>Achievement:</strong> Reduced system response time by 40% through SQL optimization and code refactoring</li>
              </ul>
            </p>
          </div>
        </Toggle>

        <Toggle title="What are George Njau Ngugi's Career Aspirations?">
          <div className="answer">
            <p>
              <strong>My aspiration is to serve as a CTO (Chief Technology Officer) or CEO (Chief Executive Officer)</strong> where I can leverage
              my 8+ years of technical depth, leadership experience, and people-first approach to drive organizational excellence.
            </p>
            <p>
              I'm passionate about <strong>solving complex IT problems in the modern AI-driven world</strong>, where data quality, automation,
              and continuous improvement are critical to business success. I believe in:
            </p>
            <ul>
              <li><strong>Strategic Leadership:</strong> Setting technical vision and aligning technology with business goals</li>
              <li><strong>People Development:</strong> Building, mentoring, and motivating high-performing teams</li>
              <li><strong>Innovation & AI:</strong> Leveraging AI, machine learning, and data engineering to solve real-world problems</li>
              <li><strong>Results-Oriented Approach:</strong> Driving measurable outcomes through quality, automation, and efficiency</li>
              <li><strong>Kaizen Philosophy:</strong> Fostering a culture of continuous improvement and excellence</li>
            </ul>
            <p>
              Beyond technology, as <strong>Founder and Chairman of Manyaham Limited</strong> (since 2022), I demonstrate my commitment to
              community leadership, strategic decision-making, and creating social impact through technology.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledQuestions>
  );
};

const StyledQuestions = styled(StyledAbout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem 2rem 10rem;
        display: block;
        h4 {
            font-weight: lighter;
            padding-bottom: 0rem;
            span {
                display: inline-block;
                font-weight: lighter;
            }
        p {
            padding: 0rem 0rem;
        }
        ul {
            padding: 2rem;
            li {
            font-size: 1.5rem;
        }
        

        }
    }
`;

export default QuestionsSection;
