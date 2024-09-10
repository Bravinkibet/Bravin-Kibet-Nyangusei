// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:bravink599@gmail.com">bravink599@gmail.com</a></p>
      <p>Phone: <a href="tel:0741937056">0741937056</a></p>
      <p>Twitter: <a href="https://twitter.com/_the_jocker" style={{ color: 'lightblue' }}>@_the_jocker</a></p>
      <p>GitHub: <a href="https://github.com/Bravinkibet" style={{ color: 'lightblue' }}>Bravinkibet</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/bravin-kibet-1a4077328/" style={{ color: 'lightblue' }}>Bravin Kibet Nyangusei</a></p>
    </ContactContainer>
  );
};

export default Contact;
