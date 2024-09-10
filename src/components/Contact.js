// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/c4/fb/19/c4fb1911393e2f611d26e7f68b89c03a.jpg');
  background-size: cover;
  background-position: center;
  color: black;
`;

const ContactContent = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <h2>Contact Me</h2>
        <p>Email: bravink599@gmail.com</p>
        <p>Phone: 0741937056</p>
        <p>GitHub: <a href="https://github.com/Bravinkibet" style={{ color: 'blue' }}>Bravinkibet</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/bravin-kibet-1a4077328/" style={{ color: 'blue' }}>Bravin Kibet Nyangusei</a></p>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
