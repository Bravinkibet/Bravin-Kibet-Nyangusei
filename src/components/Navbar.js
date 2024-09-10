// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1 style={{ color: 'white' }}>Bravin Kibet</h1>
      <div>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
