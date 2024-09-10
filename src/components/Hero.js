// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.pinimg.com/originals/c4/fb/19/c4fb1911393e2f611d26e7f68b89c03a.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 48px;
    margin: 0;
  }

  h2 {
    font-size: 32px;
    margin: 10px 0;
  }

  p {
    font-size: 20px;
    max-width: 600px;
  }

  .arrow {
    margin-top: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #ff6347;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(2px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Bravin Kibet Nyangusei</h1>
      <h2>Software Developer</h2>
      <p>Experienced in Python (Flask) and JavaScript.</p>
      <Link to="/about" className="arrow">↓</Link>
      <Link to="/projects" className="arrow">↓</Link>
    </HeroContainer>
  );
};

export default Hero;
