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
          <h3>The Technical University of Kenya (TUK)</h3>
          <p>Bachelor of Business Information Technology (BBIT)</p>
          <p>Sept 2024 - Present</p>
        </Card>
        <Card>
          <h3>Moringa School</h3>
          <p>Comprehensive Certificate in Software Engineering</p>
          <p>Feb 2024 - Aug 2024</p>
        </Card>
        <Card>
          <h3>Jomo Kenyatta University of Agriculture and Technology (JKUAT)</h3>
          <p>Bachelor of Science in Actuarial Science</p>
          <p>Sept 2023 - Jan 2024</p>
        </Card>
        <Card>
          <h3>AIRADS College</h3>
          <p>Certificate in Computer Packages</p>
          <p>Feb 2023 - May 2023</p>
        </Card>
        <Card>
          <h3>Baringo High School</h3>
          <p>Kenya Certificate of Secondary Education (KCSE)</p>
          <p>2019 - 2022</p>
        </Card>
        <Card>
          <h3>Sang'alo Central Primary</h3>
          <p>Kenya Certificate of Primary Education (KCPE)</p>
          <p>2010 - 2018</p>
        </Card>
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;
