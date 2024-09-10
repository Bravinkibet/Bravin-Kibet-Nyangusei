import React from 'react';
import styled from 'styled-components';
import homeGif from '../Assets/one.gif'; // Import the gif
import techBackground from '../Assets/tech.png'; // Import the new background image

// Container that uses the tech.png as the background
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${techBackground}); // Set the tech image as background for the entire container
  background-size: cover;
  background-position: center;
`;

const ProjectsContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  gap: 20px; // Add space between the cards
`;

const Card = styled.a`
  background-image: url(${homeGif}); // Set the gif as background for each card
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Optional: Add some shadow to cards for a nice effect
  text-decoration: none; // Remove underline from links

  p {
    position: relative; // Position relative for the bullet
    padding-left: 20px; // Space for the bullet
    
    &::before {
      content: '•'; // Bullet character
      position: absolute; // Position absolute to place the bullet
      left: 0; // Align bullet to the left
      color: white; // Color of the bullet
    }
  }

  &:hover {
    cursor: pointer; // Change cursor to pointer on hover
    opacity: 0.9; // Slightly fade the card on hover
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
          <h3>Babu Enterprices</h3>
          <p>Babu enterprises is an online platform that offers products and services to its customers.</p>
          <p>It is designed to help customers onlinely shop for goods and services.</p>
        </Card>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
