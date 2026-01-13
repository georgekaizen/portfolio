import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineItem = ({ company, role, period, achievements, technologies, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Item>
            <TimelineDot />
            <Content onClick={() => setIsExpanded(!isExpanded)}>
                <Header>
                    <div>
                        <Company>{company}</Company>
                        <Role>{role}</Role>
                        <Period>{period}</Period>
                    </div>
                    <ExpandButton isExpanded={isExpanded}>
                        {isExpanded ? '−' : '+'}
                    </ExpandButton>
                </Header>

                <AnimatePresence>
                    {isExpanded && (
                        <Details
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AchievementsList>
                                {achievements.map((achievement, index) => (
                                    <Achievement key={index}>
                                        <BulletPoint>•</BulletPoint>
                                        {achievement}
                                    </Achievement>
                                ))}
                            </AchievementsList>

                            {technologies && technologies.length > 0 && (
                                <Technologies>
                                    <TechLabel>Technologies:</TechLabel>
                                    <TechList>
                                        {technologies.map((tech, index) => (
                                            <TechBadge key={index}>{tech}</TechBadge>
                                        ))}
                                    </TechList>
                                </Technologies>
                            )}
                        </Details>
                    )}
                </AnimatePresence>
            </Content>
        </Item>
    );
};

const Item = styled.div`
    position: relative;
    padding-left: 5rem;
    padding-bottom: 3rem;

    @media (max-width: 700px) {
        padding-left: 3rem;
    }
`;

const TimelineDot = styled.div`
    position: absolute;
    left: 1.4rem;
    top: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
    background: #00BCD4;
    border-radius: 50%;
    border: 3px solid #1b1b1b;

    @media (max-width: 700px) {
        left: 0.4rem;
    }
`;

const Content = styled.div`
    background: #282828;
    padding: 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #333;
        box-shadow: 0 5px 20px rgba(35, 217, 151, 0.1);
    }

    @media (max-width: 700px) {
        padding: 1.5rem;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
`;

const Company = styled.h3`
    color: #00BCD4;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 700px) {
        font-size: 1.2rem;
    }
`;

const Role = styled.h4`
    color: white;
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0.3rem;

    @media (max-width: 700px) {
        font-size: 1rem;
    }
`;

const Period = styled.p`
    color: #ccc;
    font-size: 0.9rem;
`;

const ExpandButton = styled.div`
    background: #00BCD4;
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const Details = styled(motion.div)`
    overflow: hidden;
    margin-top: 1.5rem;
`;

const AchievementsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Achievement = styled.li`
    color: #ccc;
    font-size: 1rem;
    line-height: 1.6;
    display: flex;
    gap: 0.8rem;
    align-items: flex-start;
`;

const BulletPoint = styled.span`
    color: #00BCD4;
    font-size: 1.5rem;
    line-height: 1;
`;

const Technologies = styled.div`
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #444;
`;

const TechLabel = styled.div`
    color: #00BCD4;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
`;

const TechList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const TechBadge = styled.span`
    background: #1b1b1b;
    color: #00BCD4;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid #00BCD4;
`;

export default TimelineItem;
