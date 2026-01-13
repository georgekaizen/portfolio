import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../../animation';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../../styles';

const HeroSection = ({ title, tagline, image, summary, keyPoints, id }) => {
    return (
        <StyledHero id={id}>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h1 variants={titleAnim}>{title}</motion.h1>
                    </StyledHide>
                </motion.div>
                <motion.div variants={fade}>
                    <h3>{tagline}</h3>
                </motion.div>
                <motion.p variants={fade}>
                    {summary}
                </motion.p>
                <KeyPoints variants={fade}>
                    {keyPoints.map((point, index) => (
                        <KeyPoint key={index}>
                            <CheckIcon>✓</CheckIcon>
                            <span>{point}</span>
                        </KeyPoint>
                    ))}
                </KeyPoints>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnim} src={image} alt={title} />
            </StyledImage>
        </StyledHero>
    );
};

const StyledHero = styled(StyledAbout)`
    min-height: 90vh;
    padding-top: 5rem;
`;

const KeyPoints = styled(motion.div)`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const KeyPoint = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    span {
        color: #ccc;
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

const CheckIcon = styled.div`
    background: #00BCD4;
    color: white;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 0.2rem;
`;

export default HeroSection;
