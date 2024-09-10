// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 50px;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ul>
        <li><a href="https://github.com/Bravinkibet/TeenSpace" style={{ color: 'lightblue' }}>Teen Space</a></li>
        <li><a href="https://github.com/Bravinkibet/OneStopShop" style={{ color: 'lightblue' }}>OneStopShop</a></li>
        <li><a href="https://github.com/Bravinkibet/MyAdventureQuest" style={{ color: 'lightblue' }}>My Adventure Quest</a></li>
        <li><a href="https://github.com/Bravinkibet/Project2" style={{ color: 'lightblue' }}>Project 2</a></li>
      </ul>
    </ProjectsContainer>
  );
};

export default Projects;
