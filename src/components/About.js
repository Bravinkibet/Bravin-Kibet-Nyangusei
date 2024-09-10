// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/564x/cd/6f/a6/cd6fa65a8169e04861fa06c9923ad6c9.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>Hi, I'm Bravin Kibet, a software developer specializing in Python and JavaScript...</p>
    </AboutContainer>
  );
};

export default About;
