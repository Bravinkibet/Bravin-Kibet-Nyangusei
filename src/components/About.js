// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>Self-confident, enthusiastic, physically fit, computer literate, and have excellent interpersonal skills.</p>
      <h3>Skills</h3>
      <ul>
        <li>Python, JavaScript</li>
        <li>Flask, React</li>
        <li>SQL, PostgreSQL, MySQL</li>
        <li>Git, Docker, Heroku, AWS</li>
      </ul>
    </AboutContainer>
  );
};

export default About;
