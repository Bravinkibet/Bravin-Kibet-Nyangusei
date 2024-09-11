import React from 'react';
import styled from 'styled-components';
import homeGif from '../Assets/one.gif'; // Import the gif
import techBackground from '../Assets/tech.png'; // Import the new background image

// Container that uses the tech.png as the background
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; // Align items to the top so it allows scrolling
  min-height: 100vh;
  background-image: url(${techBackground});
  background-size: cover;
  background-position: center;
  padding: 20px; // Padding for better spacing on smaller screens
  overflow-y: auto; // Enable vertical scrolling if content overflows
`;

// Flex container for the project cards
const ProjectsContent = styled.div`
  display: flex;
  flex-wrap: wrap; // Wrap cards to a new row when needed
  justify-content: space-around;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; // Stack cards vertically on smaller screens
    align-items: center;
  }
`;

// Individual card styles
const Card = styled.a`
  background-image: url(${homeGif});
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none; // Remove underline from links
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.05); // Slight zoom effect on hover
  }

  p {
    position: relative;
    padding-left: 20px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%; // Make the card full-width on smaller screens
    max-width: 350px;
  }

  @media (max-width: 480px) {
    width: 90%; // Reduce width slightly on mobile screens
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <Card href="https://github.com/Bravinkibet/Teen_Space" title="Click to go to the Teen Space app">
          <h3>Teen Space</h3>
          <p>A dynamic social platform designed for teenagers, fostering connections and community engagement.</p>
          <p>This innovative platform empowers youth to explore various social clubs and join those that resonate with their interests.</p>
          <p>By facilitating online interactions, we create an accessible alternative to traditional physical gatherings.</p>
        </Card>
        <Card href="https://github.com/Bravinkibet/OneStopShop-Frontend" title="Click to go to the OneStopShop app">
          <h3>OneStopShop</h3>
          <p>An integrated e-commerce platform that streamlines the buying and selling of products in a digital marketplace.</p>
          <p>This user-centric platform revolutionizes the shopping experience, making it more efficient than conventional brick-and-mortar stores.</p>
          <p>With an intuitive interface, users can navigate and transact with ease, ensuring a seamless experience.</p>
        </Card>
        <Card href="https://github.com/Bravinkibet/my-adventure-quest-project-phase3" title="Click to go to the My Adventure Quest app">
          <h3>My Adventure Quest</h3>
          <p>An engaging adventure game crafted to captivate the minds of teenagers, promoting creativity and exploration.</p>
          <p>This interactive experience offers an escape from the mundane, providing stimulating challenges that foster cognitive engagement.</p>
          <p>Every participant deserves moments of joy and fulfillment through immersive gameplay.</p>
        </Card>
        <Card href="https://github.com/Bravinkibet/project-2" title="Click to go to Project 2 app">
          <h3>Babu Enterprises</h3>
          <p>Babu Enterprises is an online platform that offers products and services to its customers.</p>
          <p>It is designed to help customers conveniently shop for goods and services online.</p>
        </Card>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
