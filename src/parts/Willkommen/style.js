import styled from 'styled-components';

export const WillkommenWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    height: 110vh;
  }

  @media screen and (max-width: 350px) {
    height: 130vh;
  }
`;
