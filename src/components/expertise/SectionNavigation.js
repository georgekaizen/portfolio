import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionNavigation = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <NavContainer>
            {sections.map((section) => (
                <NavItem
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={activeSection === section.id ? 'active' : ''}
                >
                    {section.label}
                    {activeSection === section.id && (
                        <ActiveLine
                            layoutId="activeLine"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </NavItem>
            ))}
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    position: fixed;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 100;

    @media (max-width: 1300px) {
        position: sticky;
        top: 10vh;
        right: auto;
        transform: none;
        flex-direction: row;
        justify-content: center;
        background: #282828;
        padding: 1rem;
        margin: 0;
        gap: 1rem;
        overflow-x: auto;
    }
`;

const NavItem = styled.div`
    color: #ccc;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    position: relative;
    transition: color 0.3s ease;
    white-space: nowrap;

    &:hover {
        color: #00BCD4;
    }

    &.active {
        color: #00BCD4;
        font-weight: bold;
    }

    @media (max-width: 1300px) {
        font-size: 0.8rem;
        padding: 0.5rem 0.8rem;
    }
`;

const ActiveLine = styled(motion.div)`
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    height: 0.5rem;
    background: #00BCD4;
    border-radius: 50%;

    @media (max-width: 1300px) {
        right: auto;
        top: auto;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 3rem;
        height: 0.3rem;
        border-radius: 2px;
    }
`;

export default SectionNavigation;
