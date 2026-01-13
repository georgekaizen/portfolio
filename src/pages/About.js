import React from 'react';

//Page Components
import AboutSection from '../components/AboutSection';
import InterestsSection from '../components/InterestsSection';
import QuestionsSection from '../components/QuestionsSection';

//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animation';


const About = () => {
    return (
        <motion.div exit = "exit" variants = { pageAnimation } initial = "hidden" animate = "show">
            < AboutSection />
            < InterestsSection />
            < QuestionsSection />
        </motion.div>
    )
}

export default About;