import React from 'react';
import styled from 'styled-components';

const SkillCard = ({ name }) => {
    return (
        <Card>
            {name}
        </Card>
    );
};

const Card = styled.div`
    background: #1b1b1b;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    border: 2px solid #00BCD4;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
        background: #00BCD4;
        color: #1b1b1b;
        transform: scale(1.05);
    }

    @media (max-width: 700px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`;

export default SkillCard;
