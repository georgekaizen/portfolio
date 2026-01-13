import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilterBar = ({ filters, activeFilter, onFilterChange }) => {
    const filterLabels = {
        'all': 'All Projects',
        'engineering-manager': 'Engineering Manager',
        'qa-engineer': 'QA Engineer',
        'data-quality': 'Data Quality',
        'api-developer': 'API Developer',
        'ai-specialist': 'AI Specialist'
    };

    return (
        <FilterContainer>
            <FilterButton
                onClick={() => onFilterChange('all')}
                className={activeFilter === 'all' ? 'active' : ''}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {filterLabels['all']}
            </FilterButton>

            {filters.map((filter) => (
                <FilterButton
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={activeFilter === filter ? 'active' : ''}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {filterLabels[filter] || filter}
                </FilterButton>
            ))}
        </FilterContainer>
    );
};

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    justify-content: center;

    @media (max-width: 1300px) {
        gap: 0.5rem;
    }
`;

const FilterButton = styled(motion.button)`
    background: transparent;
    color: white;
    border: 2px solid #00BCD4;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;

    &:hover {
        background: rgba(35, 217, 151, 0.1);
    }

    &.active {
        background: #00BCD4;
        color: #1b1b1b;
        font-weight: bold;
    }

    @media (max-width: 1300px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
`;

export default FilterBar;
