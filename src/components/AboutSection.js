import React from "react";
import about from "../images/about.jpg";

import { Link } from "react-router-dom";

//Styled Components
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnim}>Hello, I am George Njau Ngugi</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              <span>Data-Driven QA Leader</span> &
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>Software Quality Strategist</motion.h2>
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
        <motion.button variants={fade}>
          {" "}
          <Link to="/projects">View Projects</Link>
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={about} alt="George Njau Ngugi is a portrait" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
