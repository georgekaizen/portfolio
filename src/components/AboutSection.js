import React from "react";
import about from "../images/about.jpg";
import styled from "styled-components";

//import Icons for Core Competencies
import ETL from "../images/ETL_process.png";
import DockerK8s from "../images/docker_kubernetes.png";
import RPA from "../images/robotic_process_automation.png";
import QA from "../images/DataAnalystQA.png";

//Styled Components
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <>
      <StyledAbout>
        <StyledDescription>
          <motion.div className="title">
            <StyledHide>
              <motion.h2 variants={titleAnim}>Hello, I'm George Njau Ngugi</motion.h2>
            </StyledHide>
            <StyledHide>
              <motion.h2 variants={titleAnim}>
                <span>Senior SDET & QA Engineering Leader</span>
              </motion.h2>
            </StyledHide>
            <StyledHide>
              <motion.h2 variants={titleAnim}>Data Scientist | Test Automation Architect</motion.h2>
            </StyledHide>
          </motion.div>
          <motion.p variants={fade}>
            <p>
              I am a passionate <strong>Data-driven QA Engineer and QA Lead</strong> with <strong>8+ years of experience</strong> ensuring
              software quality across web, API, and data-intensive systems. I specialize in <strong>Data QA</strong>, validating ETL pipelines,
              data accuracy, data consistency, and data integrity using Python and SQL to analyze test results, identify quality risks, and
              improve testing efficiency.
              <br />
              <br />
              Guided by <strong>Kaizen</strong> - the principle of continuous improvement - I leverage data analytics and automation to
              optimize test coverage, reduce defects, and drive excellence. As a <strong>QA Lead/Manager</strong>, I have led teams, defined
              QA strategies, and collaborated with developers, product managers, and DevOps teams in Agile environments. My expertise spans
              Python, SQL, Docker, Kubernetes, AWS, CI/CD pipelines, API testing, and test automation frameworks.
              <br />
              <br />
              Beyond technology, I serve as <strong>Founder and Chairman of Manyaham Limited</strong> (since 2022), leading community
              initiatives that demonstrate my commitment to strategic leadership and people development. I'm passionate about motivating
              teams, driving results, and solving complex IT challenges in the modern AI-driven world.
              <br />
              <br />
              <strong>My aspiration:</strong> To serve as a <strong>CTO or CEO</strong> where I can leverage my technical depth, leadership
              experience, and people-first approach to solve complex IT problems, drive innovation, and inspire teams to achieve excellence
              in the AI era.
            </p>
          </motion.p>
        </StyledDescription>
        <StyledImage>
          <motion.img variants={photoAnim} src={about} alt="George Njau Ngugi is a portrait" />
        </StyledImage>
        <Wave />
      </StyledAbout>

      <CoreCompetenciesSection>
        <h2>Core <span>Competencies</span></h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={ETL} height="100" alt="Data Engineering" />
              <h3>Data Eng</h3>
            </div>
            <p>ETL Pipelines & Data Quality</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={QA} height="100" alt="QA Leadership" />
              <h3>QA Lead</h3>
            </div>
            <p>Quality Assurance & Testing</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={DockerK8s} height="100" alt="Leadership" />
              <h3>Leadership</h3>
            </div>
            <p>Team Development & Strategy</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={RPA} height="100" alt="Results Oriented" />
              <h3>Results</h3>
            </div>
            <p>Automation & Optimization</p>
          </StyledCard>
        </StyledCards>
      </CoreCompetenciesSection>
    </>
  );
};

const CoreCompetenciesSection = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 10rem;
  color: white;

  h2 {
    font-size: 3rem;
    padding-bottom: 3rem;

    span {
      color: #9b59b6;
    }
  }

  @media (max-width: 1300px) {
    padding: 2rem 2rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  padding: 3rem;

  p {
    font-size: large;
    font-weight: 300;
    text-align: center;
  }

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default AboutSection;
