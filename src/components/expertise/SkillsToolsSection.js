import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, lineAnim } from '../../animation';
import { StyledAbout } from '../../styles';
import SkillCard from '../shared/SkillCard';

const SkillsToolsSection = ({ skills, id }) => {
    return (
        <StyledSkills id={id}>
            <motion.h2 variants={fade}>Skills & Tools</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>

            <SkillsContainer>
                {Object.entries(skills).map(([category, skillList]) => (
                    <SkillCategory key={category}>
                        <CategoryTitle>{formatCategoryName(category)}</CategoryTitle>
                        <SkillsGrid>
                            {skillList.map((skill, index) => (
                                <SkillCard key={index} name={skill} />
                            ))}
                        </SkillsGrid>
                    </SkillCategory>
                ))}
            </SkillsContainer>
        </StyledSkills>
    );
};

// Helper function to format category names
const formatCategoryName = (category) => {
    return category
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const StyledSkills = styled(StyledAbout)`
    min-height: 70vh;
    display: block;
    padding: 5rem 10rem;
    background: #282828;

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

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
`;

const SkillCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const CategoryTitle = styled.h3`
    color: #00BCD4;
    font-size: 1.8rem;
    font-weight: lighter;
    margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export default SkillsToolsSection;
