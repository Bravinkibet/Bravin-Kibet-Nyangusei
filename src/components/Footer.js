// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Bravin Kibet Nyangusei. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
