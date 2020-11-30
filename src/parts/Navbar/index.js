import {
  Nav,
  NavbarContainer,
  NavbarTitle,
  NavbarLinks,
  NavbarLink,
  NavbarHamburgerIcon
} from './style';
import React from 'react';
import navbarLinks from '../../assets/navbar-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarTitle>THOMAS EHLERINGER</NavbarTitle>
        <NavbarLinks>
          {navbarLinks.map((navbarLink) => {
            const { name } = navbarLink;

            return <NavbarLink>{name}</NavbarLink>;
          })}
        </NavbarLinks>
        
        <NavbarHamburgerIcon>
          <FontAwesomeIcon icon={faBars}/>
        </NavbarHamburgerIcon>
        
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
