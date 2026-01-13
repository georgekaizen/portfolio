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
                <li>Software immersive full stack development, implementation, testing and support in: </li>
                <ul>
                  <li>
                    Java: Developing and Securing RESTful APIs and RESTful Web Services with JAX-RS, development of SOAP
                    Web Services with JAX-WS, application of the Spring Framework for Enterprise Java applications.,
                    bootstrapping Spring Applications with Spring Boot MVC, implementation of the Microservice
                    architecture with Spring Boot including communication and service discovery, fault tolerance,
                    resilience and configuration and unit testing with Junit 5.{" "}
                  </li>
                  <li>
                    C#: Web development using the .NET (ASP.NET & ASP.NET Core) MVC framework including deconstruction
                    of regular monolith web applications to micro services and migration to Episerver Content Management
                    Systems (CMS) 11 & 12
                  </li>
                  <li>JavaScript: Client side application development with React JS and Angular JS.</li>
                  <li>Python: End to end application development with Flask and Django.</li>
                </ul>
                <li>
                  {" "}
                  Database Management; an understanding in structured query language (SQL) including PostgreSQL, Oracle
                  and MySQL, knowledge of relational database management, object-oriented database management systems
                  and NoSQL frameworks like Firebase.{" "}
                </li>
                <li>
                  {" "}
                  Information security comprising user authentication, cryptography, white coat ethical hacking, digital
                  forensics, penetration testing, logs management, virtualisation, malware reverse engineering, scanning
                  networks and vulnerability analysis{" "}
                </li>
                <li> Familiarity with the Agile Scrum Methodology in Software development and delivery. </li>
                <li> Version Control Tools, i.e. Git </li>
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
              2021 – to date || <span> Software Engineer </span> || Kenya Airways PLC{" "}
            </h4>
            <p>
              <ul>
                <li>Software development for web applications in C#, Java and JavaScript programming languages.</li>
                <li>Deconstructing large .NET monolith applications to micro services.</li>
                <li>
                  Implementing hybrid cloud infrastructure on Azure Cloud in particular migration of complex
                  infrastructure to Episerver CMS.
                </li>
                <li>Automation of deployment processes by building CI/CD pipelines.</li>
                <li>
                  Application, design and utilisation of third party APIs such the Safaricom Mpesa B2C, B2B and C2B
                  payment API as well as other direct payment option integrations.
                </li>
              </ul>
            </p>

            <h4>
              {" "}
              2019 - 2020 || <span> Software Implementation & Support Engineer </span> || List Fintech Solutions Ltd.{" "}
            </h4>
            <p>
              <ul>
                <li>
                  {" "}
                  Managed Citius Core Banking, Agency Banking, Mobile Banking and Internet Banking system applications
                  in different roles – implementation, testing, migration training etc.{" "}
                </li>
                <li> Oracle Database Management. </li>
                <li>
                  {" "}
                  Applied Citius systems on both Cloud Systems and In-premise data centre systems for List global
                  clients.{" "}
                </li>
                <li>
                  {" "}
                  User Acceptance Testing and training & Citius Digital Banking Solutions development, maintenance and
                  support.{" "}
                </li>
              </ul>
            </p>

            <h4>
              {" "}
              2018 || <span> Software Engineer </span> || Realtime Technologies Ltd.{" "}
            </h4>
            <p>
              <ul>
                <li> Sybase Database Management. </li>
                <li> PowerBuilder Application Development. </li>
                <li> Customer Service. </li>
              </ul>
            </p>

            <h4>
              {" "}
              2016 || <span> IT Support </span> || Kenya Power Company,{" "}
            </h4>
            <p>
              <ul>
                <li> Assisted in contracting of customers. </li>
                <li> Data gathering and processing. </li>
              </ul>
            </p>

            <h4>
              {" "}
              2016 || <span> Management Intern </span> || National Hospital Insurance Fund,{" "}
            </h4>
            <p>
              <ul>
                <li> Capturing of claims, confirming of claims, claims examination and filling. </li>
                <li>
                  {" "}
                  Collaborated with organisation technician that, the computer cluster is functioning efficiently.{" "}
                </li>
                <li> Scanning, merging, and printing cards and photo card dispatch. </li>
                <li> Customer care procedures registration of new members. </li>
                <li> Accounting and audit procedures. </li>
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
