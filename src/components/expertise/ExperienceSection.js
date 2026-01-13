import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, lineAnim } from '../../animation';
import { StyledAbout } from '../../styles';
import TimelineItem from '../shared/TimelineItem';

const ExperienceSection = ({ experience, id }) => {
    return (
        <StyledExperience id={id}>
            <motion.h2 variants={fade}>Professional Experience</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>

            <Timeline>
                {experience.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        period={exp.period}
                        achievements={exp.achievements}
                        technologies={exp.technologies}
                        isLast={index === experience.length - 1}
                    />
                ))}
            </Timeline>
        </StyledExperience>
    );
};

const StyledExperience = styled(StyledAbout)`
    min-height: 70vh;
    display: block;
    padding: 5rem 10rem;

    h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    .line {
        height: 0.5rem;
        background: #00BCD4;
        margin-bottom: 3rem;
        width: 50%;
    }

    @media (max-width: 1300px) {
        padding: 2rem 2rem;

        h2 {
            font-size: 2rem;
        }

        .line {
            width: 100%;
        }
    }
`;

const Timeline = styled.div`
    position: relative;
    margin-top: 3rem;

    &::before {
        content: '';
        position: absolute;
        left: 2rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #00BCD4;
    }

    @media (max-width: 700px) {
        &::before {
            left: 1rem;
        }
    }
`;

export default ExperienceSection;
