import styled from 'styled-components';

export const Nav = styled.div`
  background: var(--color-gray);
  height: 5rem;
  display: flex;
  justify-content: center;
  position: sticky;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1500px;
`;

export const NavbarTitle = styled.div`
  padding: 1rem;
  color: var(--color-white);
  font-size: 1.4rem;
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: var(--breakpoint-navbar)) {
    display: none;
  }
`;

export const NavbarLink = styled.div`
  padding: 0.7rem;
  font-size: .9rem;
  color: var(--color-white);
`;

export const NavbarHamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: var(--breakpoint-navbar)) {
    display: block;
  }
`
