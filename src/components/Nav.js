import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
    const { pathname } = useLocation();
    const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

    const expertiseLinks = [
        { path: '/expertise/engineering-manager', label: 'Engineering Manager' },
        { path: '/expertise/qa-engineer', label: 'QA Engineer' },
        { path: '/expertise/data-quality', label: 'Data Quality Analyst' },
        { path: '/expertise/api-developer', label: 'API & ETL Developer' },
        { path: '/expertise/ai-specialist', label: 'AI/RAG Specialist' }
    ];

    const isExpertisePath = pathname.startsWith('/expertise');

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Portfolio</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">ABOUT</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>

                <ExpertiseDropdown
                    onMouseEnter={() => setIsExpertiseOpen(true)}
                    onMouseLeave={() => setIsExpertiseOpen(false)}
                >
                    <DropdownToggle>
                        EXPERTISE ▼
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: '0%' }}
                            animate={{ width: isExpertisePath ? '50%' : '0%' }}
                        />
                    </DropdownToggle>

                    <AnimatePresence>
                        {isExpertiseOpen && (
                            <DropdownMenu
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {expertiseLinks.map((link) => (
                                    <DropdownItem
                                        key={link.path}
                                        to={link.path}
                                        className={pathname === link.path ? 'active' : ''}
                                    >
                                        {link.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        )}
                    </AnimatePresence>
                </ExpertiseDropdown>

                <li>
                    <Link to="/projects">PROJECTS</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/projects' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        color: white;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 500;
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
    }

    #logo {
        font-size: 2.2rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        width: 100%;

        #logo {
            display: inline-block;
            margin: 1rem;
        }

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            flex-wrap: wrap;

            li {
                padding: 1rem 1rem 0rem 0rem;
            }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #00BCD4;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;

    @media (max-width: 1300px) {
        left: 0%;
    }
`;

const ExpertiseDropdown = styled.li`
    position: relative;
    padding-left: 10rem;

    @media (max-width: 1300px) {
        padding: 1rem 1rem 0rem 0rem;
    }
`;

const DropdownToggle = styled.div`
    cursor: pointer;
    position: relative;
    user-select: none;
`;

const DropdownMenu = styled(motion.div)`
    position: absolute;
    top: 100%;
    left: 0;
    background: #1b1b1b;
    min-width: 250px;
    border-radius: 8px;
    padding: 1rem 0;
    margin-top: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1300px) {
        position: relative;
        margin-top: 0.5rem;
        width: 100%;
    }
`;

const DropdownItem = styled(Link)`
    display: block;
    padding: 0.8rem 1.5rem;
    color: white;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    font-weight: 400;

    &:hover {
        background: #282828;
        color: #00BCD4;
        padding-left: 2rem;
    }

    &.active {
        color: #00BCD4;
        font-weight: bold;
        background: #282828;
    }

    @media (max-width: 1300px) {
        padding: 0.6rem 1rem;
        font-size: 1rem;
    }
`;

export default Nav;
