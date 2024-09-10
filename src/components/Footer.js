// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Bravin Kibet Nyangusei</p>
    </FooterContainer>
  );
};

export default Footer;
