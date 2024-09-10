// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/c4/fb/19/c4fb1911393e2f611d26e7f68b89c03a.jpg');
  background-size: cover;
  background-position: center;
`;

const ProjectsContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const Card = styled.div`
  background-image: url('https://i.pinimg.com/564x/cd/6f/a6/cd6fa65a8169e04861fa06c9923ad6c9.jpg');
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <Card>
          <h3>Teen Space</h3>
          <p>Social platform for teenagers</p>
        </Card>
        <Card>
          <h3>OneStopShop</h3>
          <p>E-commerce platform</p>
        </Card>
        <Card>
          <h3>My Adventure Quest</h3>
          <p>Fun adventure game</p>
        </Card>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
