import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

export const Nav = styled.div`
  top: 0;
  background: var(--color-gray-dark);
  height: 80px;
  display: flex;
  justify-content: center;
  position: sticky;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1500px;
`;

export const NavbarTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  color: var(--color-white);
  font-size: 1.4rem;
  cursor: pointer;
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  font-size: 0.9rem;
  color: var(--color-white);
  cursor: pointer;
  transition: 0.3s color ease-out;

  &:hover {
    color: var(--color-green);
  }

  &:last-child {
    padding-right: 1.6rem;
  }

  &.active {
    border-bottom: 3px solid var(--color-green);
    border-top: 3px solid transparent;
  }
`;

export const NavbarHamburgerIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80px;
    font-size: 2rem;
    color: var(--color-white);
    cursor: pointer;
  }
`;

export const NavbarHamburgerIcon = styled(FontAwesomeIcon)`
  transform: ${({ ismobilenavopen }) =>
    ismobilenavopen === 'true' ? 'rotate(-90deg)' : undefined};
  transition: 0.3s ease-in-out;
`;

export const MobileNav = styled.div`
  position: fixed;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-darker);
  justify-content: center;
  align-items: center;
  display: flex;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: 1000;
`;

export const MobileNavbarLinks = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileNavbarLink = styled(Link)`
  font-size: 1.5rem;
  color: var(--color-white);
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    color: var(--color-green);
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const MobileCloseIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  ${'' /* padding: 1.2rem 1.2rem 2rem 2rem; */}
  height: 5rem;
  font-size: 2rem;
  width: 5rem;
  color: var(--color-white);
  cursor: pointer;
`;
