import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Navigation Bar
import Nav from './components/Nav'
import ScrollTop from './components/ScrollTop';

//Import Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

//Import Expertise Pages
import EngineeringManager from './pages/EngineeringManager';
import QAEngineer from './pages/QAEngineer';
import DataQuality from './pages/DataQuality';
import APIDeveloper from './pages/APIDeveloper';
import AISpecialist from './pages/AISpecialist';

//Import from Router
import { HashRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

//Animation
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* Home/About Page */}
          <Route path="/" exact>
            <About />
          </Route>

          {/* Expertise Pages */}
          <Route path="/expertise/engineering-manager">
            <EngineeringManager />
          </Route>
          <Route path="/expertise/qa-engineer">
            <QAEngineer />
          </Route>
          <Route path="/expertise/data-quality">
            <DataQuality />
          </Route>
          <Route path="/expertise/api-developer">
            <APIDeveloper />
          </Route>
          <Route path="/expertise/ai-specialist">
            <AISpecialist />
          </Route>

          {/* Projects Pages */}
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>

          {/* Contact Page */}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
