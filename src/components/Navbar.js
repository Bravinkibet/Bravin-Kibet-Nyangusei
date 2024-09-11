import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.visible ? '0' : '-100px')}; // Hide navbar by moving it upwards when not visible
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: top 0.3s ease; // Smooth transition for showing/hiding
`;

const NavLinkContainer = styled.div`
  display: flex;
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

const ToggleButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1100; // Higher than the navbar
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #ff4500;
  }
`;

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NavbarContainer visible={isVisible}>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/work-experience">Work Experience</NavLink>
        </NavLinkContainer>
      </NavbarContainer>
      <ToggleButton onClick={toggleNavbar}>
        {isVisible ? 'Navbar' : 'Navbar'}
      </ToggleButton>
    </>
  );
};

export default Navbar;
