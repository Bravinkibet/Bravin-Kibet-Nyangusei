// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import homeGif from '../Assets/one.gif'; 

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${homeGif}); // Using the imported gif as background
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
   h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 30px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Bravin Kibet Nyangusei</h1>
      <h2>Software Developer specializing in Python and JavaScript</h2>
    </HeroContainer>
  );
};

export default Hero;
