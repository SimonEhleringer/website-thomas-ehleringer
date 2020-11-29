import styled from 'styled-components';

export const Nav = styled.div`
  background: var(--color-gray);
  height: 5rem;
  display: flex;
  position: sticky;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavbarTitle = styled.div`
  padding: 1rem;
  color: var(--color-white);
  font-size: 1.3rem;
`;

export const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLink = styled.div`
  padding: 0.9rem;
  color: var(--color-white);
`;
