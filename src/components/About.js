// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/af/dc/37/afdc3709e84cd1abda8d153bc0249bb7.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>Hi, I'm Bravin Kibet, a software developer specializing in Python and JavaScript</p>
      <p>Specialising in both Frontend and Backend development</p>
    </AboutContainer>
  );
};

export default About;
