import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';
import { ProjectState } from '../projectState';
import { getAllExpertiseAreas } from '../data/experienceState';
import FilterBar from '../components/shared/FilterBar';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const allProjects = ProjectState();
    const expertiseAreas = getAllExpertiseAreas();

    // Filter projects based on active filter
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') {
            return allProjects;
        }
        return allProjects.filter(project =>
            project.expertiseAreas && project.expertiseAreas.includes(activeFilter)
        );
    }, [activeFilter, allProjects]);

    return (
        <StyledProjects
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <ProjectsHeader>
                <motion.h1 variants={fade}>My Projects</motion.h1>
                <motion.p variants={fade}>
                    Explore my work across different areas of expertise
                </motion.p>
            </ProjectsHeader>

            <FilterBar
                filters={expertiseAreas}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />

            <AnimatePresence mode="wait">
                <ProjectsGrid key={activeFilter}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <StyledProject key={project.url}>
                                <motion.h2 variants={fade}>{project.title}</motion.h2>
                                <motion.div variants={lineAnim} className="line"></motion.div>

                                {project.role && (
                                    <Role variants={fade}>{project.role}</Role>
                                )}

                                <Link to={project.url}>
                                    <Hide>
                                        <motion.img
                                            variants={photoAnim}
                                            src={project.mainImg}
                                            alt={`${project.title} screenshot`}
                                        />
                                    </Hide>
                                </Link>

                                {project.technologies && project.technologies.length > 0 && (
                                    <Technologies variants={fade}>
                                        {project.technologies.slice(0, 4).map((tech, i) => (
                                            <TechBadge key={i}>{tech}</TechBadge>
                                        ))}
                                    </Technologies>
                                )}
                            </StyledProject>
                        ))
                    ) : (
                        <EmptyState>
                            <motion.p variants={fade}>
                                No projects found for this expertise area yet.
                            </motion.p>
                        </EmptyState>
                    )}
                </ProjectsGrid>
            </AnimatePresence>
        </StyledProjects>
    );
};

const StyledProjects = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;

    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;

const ProjectsHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;

    h1 {
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        color: #ccc;
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

const ProjectsGrid = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;

const StyledProject = styled(motion.div)`
    flex: 1;
    flex-basis: 30rem;
    min-width: 300px;

    h2 {
        padding: 1rem 0rem;
        font-size: 2rem;
        color: white;
    }

    .line {
        height: 0.5rem;
        background: #00BCD4;
        margin-bottom: 1.5rem;
        width: 70%;
    }

    img {
        width: 100%;
        height: 300px;
        object-fit: contain;
        background: #0d1117;
        border-radius: 8px;
        transition: transform 0.3s ease;
        cursor: pointer;
        padding: 1rem;

        &:hover {
            transform: scale(1.02);
        }
    }

    @media (max-width: 700px) {
        flex-basis: 100%;
        min-width: 100%;

        .line {
            width: 100%;
        }
    }
`;

const Hide = styled.div`
    overflow: hidden;
    margin-bottom: 1.5rem;
`;

const Role = styled(motion.p)`
    color: #00BCD4;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
`;

const Technologies = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const TechBadge = styled.span`
    background: transparent;
    border: 1px solid #00BCD4;
    color: #00BCD4;
    padding: 0.4rem 1rem;
    border-radius: 15px;
    font-size: 0.85rem;
    transition: all 0.3s ease;

    &:hover {
        background: #00BCD4;
        color: #1b1b1b;
    }
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 5rem 2rem;
    width: 100%;

    p {
        font-size: 1.5rem;
        color: #ccc;
    }
`;

export default Projects;
