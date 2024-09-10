// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
