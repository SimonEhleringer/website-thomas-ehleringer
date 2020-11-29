import {
  Nav,
  NavbarContainer,
  NavbarTitle,
  NavbarLinks,
  NavbarLink,
} from './style';
import React from 'react';
import navbarLinks from '../../assets/navbar-links';

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
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
