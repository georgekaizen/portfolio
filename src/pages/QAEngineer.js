import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { experienceData, expertiseAreas } from '../data/experienceState';
import { ProjectState } from '../projectState';
import HeroSection from '../components/expertise/HeroSection';
import AchievementsSection from '../components/expertise/AchievementsSection';
import SkillsToolsSection from '../components/expertise/SkillsToolsSection';
import ExperienceSection from '../components/expertise/ExperienceSection';
import ProjectsShowcase from '../components/expertise/ProjectsShowcase';
import SectionNavigation from '../components/expertise/SectionNavigation';

const QAEngineer = () => {
    const data = experienceData[expertiseAreas.QA_ENGINEER];
    const allProjects = ProjectState();
    const relatedProjects = allProjects.filter(project =>
        project.expertiseAreas && project.expertiseAreas.includes(expertiseAreas.QA_ENGINEER)
    );

    const sections = [
        { id: 'hero', label: 'Overview' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'skills', label: 'Skills & Tools' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' }
    ];

    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <SectionNavigation sections={sections} />

            <HeroSection
                id="hero"
                title={data.title}
                tagline={data.tagline}
                image={data.hero.image}
                summary={data.hero.summary}
                keyPoints={data.hero.keyPoints}
            />

            <AchievementsSection
                id="achievements"
                achievements={data.achievements}
            />

            <SkillsToolsSection
                id="skills"
                skills={data.skills}
            />

            <ExperienceSection
                id="experience"
                experience={data.experience}
            />

            <ProjectsShowcase
                id="projects"
                projects={relatedProjects}
            />
        </motion.div>
    );
};

export default QAEngineer;
