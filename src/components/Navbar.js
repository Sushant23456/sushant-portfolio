import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  color: white;
  padding: 20px 30px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-out;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 0 15px;
  cursor: pointer;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4dd0e1;
    text-decoration: none;
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #4dd0e1;
  }
  100% {
    box-shadow: 0 0 20px #4dd0e1;
  }
`;

const ToggleSlider = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
  margin-right: 70px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
  display: flex;
  justify-content: ${props => (props.nightMode ? 'flex-end' : 'flex-start')};
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${props => (props.nightMode ? 'translateX(36px)' : 'none')};
  }

  // Glow effect for the slider
  animation: ${props => props.nightMode ? glowAnimation : ''} 1.5s alternate infinite;
`;

const SunIcon = styled(FaSun)`
  color: #f39c12;
  position: absolute;
  left: 8px;
  transition: opacity 0.3s ease;
  opacity: ${props => (props.nightMode ? 0 : 1)};
`;

const MoonIcon = styled(FaMoon)`
  color: #f1c40f;
  position: absolute;
  right: 8px;
  transition: opacity 0.3s ease;
  opacity: ${props => (props.nightMode ? 1 : 0)};
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + ${Slider} {
    background-color: #4dd0e1;
  }
  
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #4dd0e1;
  }
  
  &:checked + ${Slider}:before {
    transform: translateX(36px);
  }
`;

const Navbar = ({ sections, toggleNightMode, nightMode }) => {
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <Nav nightMode={nightMode}>
      <NavLinksContainer>
        {sections.map((section) => (
          <NavLink key={section.label} onClick={() => scrollToSection(section.ref)}>
            {section.label}
          </NavLink>
        ))}
      </NavLinksContainer>
      <ToggleSlider>
        <Checkbox
          type="checkbox"
          checked={nightMode}
          onChange={toggleNightMode}
          id="nightModeCheckbox"
        />
        <Slider nightMode={nightMode}>
          <SunIcon nightMode={nightMode} />
          <MoonIcon nightMode={nightMode} />
        </Slider>
      </ToggleSlider>
    </Nav>
  );
};

export default Navbar;
