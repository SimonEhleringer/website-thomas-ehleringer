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
import React, { useState, useEffect } from 'react';
import navbarLinks from '../../assets/navbar-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMobileNavbarShown, setIsMobileNavbarShown] = useState(false);

  const toggleIsMobileNavbarShown = () => {
    setIsMobileNavbarShown(!isMobileNavbarShown);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarTitle
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            THOMAS EHLERINGER
          </NavbarTitle>
          <NavbarLinks>
            {navbarLinks.map((navbarLink) => {
              const { name, to } = navbarLink;

              return (
                <NavbarLink
                  key={name}
                  activeClass='active'
                  to={to}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  spy={true}
                >
                  {name}
                </NavbarLink>
              );
            })}
          </NavbarLinks>

          <NavbarHamburgerIconWrapper onClick={toggleIsMobileNavbarShown}>
            <NavbarHamburgerIcon
              ismobilenavopen={isMobileNavbarShown.toString()}
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
            const { name, to } = navbarLink;

            return (
              <MobileNavbarLink
                onClick={toggleIsMobileNavbarShown}
                key={name}
                to={to}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {name}
              </MobileNavbarLink>
            );
          })}
        </MobileNavbarLinks>
      </MobileNav>
    </>
  );
};

export default Navbar;
