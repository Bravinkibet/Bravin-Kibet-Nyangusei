// src/components/Education.js
import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/c4/fb/19/c4fb1911393e2f611d26e7f68b89c03a.jpg');
  background-size: cover;
  background-position: center;
`;

const EducationContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
`;

const Education = () => {
  return (
    <EducationContainer>
      <EducationContent>
        <Card>
          <h3>Moringa School</h3>
          <p>Software Engineering (2024)</p>
        </Card>
        <Card>
          <h3>JKUAT</h3>
          <p>Actuarial Science (2023)</p>
        </Card>
        <Card>
          <h3>AIRADS</h3>
          <p>Computer Packages (2023)</p>
        </Card>
        <Card>
          <h3>Baringo High School</h3>
          <p>KCSE (2019-2022)</p>
        </Card>
        <Card>
          <h3>Sang'alo Central Primary</h3>
          <p>KCPE (2010-2018)</p>
        </Card>
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;
