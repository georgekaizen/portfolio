import React from 'react';

//Animations
import {motion} from "framer-motion";
import { pageAnimation, titleAnim } from '../animation';

import styled from 'styled-components';
import background from '../images/background.jpg';


const Contact = () => {
    return(
        <StyledContact 
            exit= "exit"
            variants = { pageAnimation } 
            initial = "hidden" 
            animate = "show" 
            //style = {{ background: "#fff" }}
            >
            <StyledTitle>
                <Hide>
                    <motion.h2 variants = { titleAnim }> Get in touch. </motion.h2>
                </Hide>
                <div>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <a href="mailto:georgenjau023@gmail.com">
                                <h2>georgenjau023@gmail.com</h2>
                            </a>
                        </Social>
                   </Hide>
                   <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <a href="tel:+254720022933">
                                <h2>+254 (0)720 022 933</h2>
                            </a>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <a href="https://www.linkedin.com/in/george-njau-ngugi/" target="_blank" rel="noopener noreferrer">
                                <h2>LinkedIn Profile</h2>
                            </a>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <a href="https://github.com/georgekaizen" target="_blank" rel="noopener noreferrer">
                                <h2>GitHub: @georgekaizen</h2>
                            </a>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <a href="https://georgekaizen.github.io/portfolio" target="_blank" rel="noopener noreferrer">
                                <h2>View Portfolio</h2>
                            </a>
                        </Social>
                    </Hide>
                </div>
            </StyledTitle>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div) `
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px){
      padding: 2rem;
      font-style: 1rem;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 4rem;
    color: white;
    @media (max-width: 1300px){
        margin-top: 5rem;        
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    a {
        text-decoration: none;
        color: white;
        transition: color 0.3s ease;
        &:hover {
            color: #9b59b6;
        }
    }
`

export default Contact; 