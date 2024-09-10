// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff6347;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1 style={{ color: 'white', margin: 0 }}>Bravin Kibet</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/work-experience">Work Experience</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
