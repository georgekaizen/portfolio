import React from "react";

//import Icons
import ETL from "../images/ETL_process.png";
import DockerK8s from "../images/docker_kubernetes.png";
import RPA from "../images/robotic_process_automation.png";
import QA from "../images/DataAnalystQA.png";

//import images
import Interests from "../images/interests.jpg"

//Styled Components
import styled from 'styled-components';

//Styles
import {StyledAbout, StyledDescription, StyledImage } from "../styles";

//import { useScroll } from "./useScroll";
//import { scrollReveal } from "../animation";


const InterestsSection = () => {

    //const [element, controls] = useScroll();

    return (
        <StyledInterests 
            // variants = { scrollReveal } 
            // ref = { element } 
            // animate = { controls } 
            // initial = "hidden"
        >
            <StyledImage>
                <img src= {Interests} height = "600" alt="Interests Section" />
            </StyledImage>
            <StyledDescription>
                <h2>Core <span> Competencies </span> </h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src= {ETL} height="100" alt="Data Engineering" />
                            <h3>Data Eng</h3>
                        </div>
                        <p>ETL Pipelines & Data Quality</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {QA} height="100" alt="QA Leadership" />
                            <h3>QA Lead</h3>
                        </div>
                        <p>Quality Assurance & Testing</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {DockerK8s} height="100" alt="Leadership" />
                            <h3>Leadership</h3>
                        </div>
                        <p>Team Development & Strategy</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src= {RPA} height="100" alt="Results Oriented" />
                            <h3>Results</h3>
                        </div>
                        <p>Automation & Optimization</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            
        </StyledInterests>
    )
}

const StyledInterests = styled(StyledAbout) `
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1000px){
        justify-content: center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    padding: 3rem;
    P {
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

export default InterestsSection;