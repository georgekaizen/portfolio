import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, lineAnim } from '../../animation';
import { StyledAbout } from '../../styles';
import MetricCard from '../shared/MetricCard';

const AchievementsSection = ({ achievements, id }) => {
    return (
        <StyledAchievements id={id}>
            <motion.h2 variants={fade}>Key Achievements</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <AchievementsGrid>
                {achievements.map((achievement, index) => (
                    <MetricCard
                        key={index}
                        metric={achievement.metric}
                        description={achievement.description}
                        detail={achievement.detail}
                    />
                ))}
            </AchievementsGrid>
        </StyledAchievements>
    );
};

const StyledAchievements = styled(StyledAbout)`
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

const AchievementsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export default AchievementsSection;
