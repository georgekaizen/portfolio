import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../../animation';

const MetricCard = ({ metric, description, detail }) => {
    return (
        <Card variants={fade}>
            <MetricNumber>{metric}</MetricNumber>
            <Description>{description}</Description>
            {detail && <Detail>{detail}</Detail>}
        </Card>
    );
};

const Card = styled(motion.div)`
    background: #282828;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-5px);
        border-color: #00BCD4;
        box-shadow: 0 10px 30px rgba(35, 217, 151, 0.2);
    }
`;

const MetricNumber = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    color: #00BCD4;
    margin-bottom: 1rem;

    @media (max-width: 700px) {
        font-size: 2.5rem;
    }
`;

const Description = styled.h4`
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: lighter;
`;

const Detail = styled.p`
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.4;
`;

export default MetricCard;
