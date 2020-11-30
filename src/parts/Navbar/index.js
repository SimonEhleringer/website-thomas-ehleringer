import {
  Nav,
  NavbarContainer,
  NavbarTitle,
  NavbarLinks,
  NavbarLink,
  NavbarHamburgerIconWrapper,
  NavbarHamburgerIcon,
  MobileNav,
  MobileNavbarLinks,
  MobileNavbarLink,
  MobileCloseIcon,
} from './style';
import React, { useState } from 'react';
import navbarLinks from '../../assets/navbar-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileNavbarShown, setIsMobileNavbarShown] = useState(false);

  const toggleIsMobileNavbarShown = () => {
    setIsMobileNavbarShown(!isMobileNavbarShown);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarTitle>THOMAS EHLERINGER</NavbarTitle>
          <NavbarLinks>
            {navbarLinks.map((navbarLink) => {
              const { name } = navbarLink;

              return <NavbarLink>{name}</NavbarLink>;
            })}
          </NavbarLinks>

          <NavbarHamburgerIconWrapper onClick={toggleIsMobileNavbarShown}>
            <NavbarHamburgerIcon
              isMobileNavOpen={isMobileNavbarShown}
              icon={faBars}
            />
          </NavbarHamburgerIconWrapper>
        </NavbarContainer>
      </Nav>

      <MobileNav isOpen={isMobileNavbarShown}>
        <MobileCloseIcon onClick={toggleIsMobileNavbarShown}>
          <FontAwesomeIcon icon={faTimes} />
        </MobileCloseIcon>

        <MobileNavbarLinks>
          {navbarLinks.map((navbarLink) => {
            const { name } = navbarLink;

            return <MobileNavbarLink>{name}</MobileNavbarLink>;
          })}
        </MobileNavbarLinks>
      </MobileNav>
    </>
  );
};

export default Navbar;
