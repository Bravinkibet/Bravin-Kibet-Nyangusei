// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Bravin Kibet Nyangusei</h1>
      <h2>Software Developer</h2>
      <p>Experienced in Python (Flask) and JavaScript.</p>
    </HeroContainer>
  );
};

export default Hero;
