// src/components/WorkExperience.js
import React from 'react';
import styled from 'styled-components';

const WorkExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/c4/fb/19/c4fb1911393e2f611d26e7f68b89c03a.jpg');
  background-size: cover;
  background-position: center;
  color: black;
  text-align: center;
`;

const WorkExperienceContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
`;

const WorkExperience = () => {
  return (
    <WorkExperienceContainer>
      <WorkExperienceContent>
        <Card>
          <h3>Kesses Cyber Eldoret</h3>
          <p>Cyber Attendant (May 2023 - Present)</p>
        </Card>
      </WorkExperienceContent>
    </WorkExperienceContainer>
  );
};

export default WorkExperience;
