import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fade, lineAnim, photoAnim } from '../../animation';
import { StyledAbout } from '../../styles';

const ProjectsShowcase = ({ projects, id }) => {
    // Filter out projects without images or that don't exist
    const validProjects = projects.filter(project => project && project.mainImg);

    if (validProjects.length === 0) {
        return (
            <StyledProjects id={id}>
                <motion.h2 variants={fade}>Related Projects</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <EmptyState>
                    <p>Projects coming soon! Check out the <Link to="/projects">Projects page</Link> for all work.</p>
                </EmptyState>
            </StyledProjects>
        );
    }

    return (
        <StyledProjects id={id}>
            <motion.h2 variants={fade}>Related Projects</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>

            <ProjectsGrid>
                {validProjects.map((project, index) => (
                    <ProjectCard key={index} to={project.url}>
                        <motion.img
                            variants={photoAnim}
                            src={project.mainImg}
                            alt={project.title}
                        />
                        <ProjectInfo>
                            <h3>{project.title}</h3>
                            {project.technologies && (
                                <Technologies>
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <TechBadge key={i}>{tech}</TechBadge>
                                    ))}
                                </Technologies>
                            )}
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </ProjectsGrid>

            <ViewAllLink to="/projects">
                View All Projects →
            </ViewAllLink>
        </StyledProjects>
    );
};

const StyledProjects = styled(StyledAbout)`
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

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled(Link)`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

const ProjectInfo = styled.div`
    padding: 1.5rem;
    background: #1b1b1b;

    h3 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const TechBadge = styled.span`
    background: #00BCD4;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
`;

const ViewAllLink = styled(Link)`
    display: inline-block;
    margin-top: 3rem;
    color: #00BCD4;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: white;
    }
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 3rem;

    p {
        font-size: 1.2rem;
        color: #ccc;
    }

    a {
        color: #00BCD4;
        font-weight: bold;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default ProjectsShowcase;
