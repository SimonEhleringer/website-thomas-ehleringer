import styled from 'styled-components';

export const KontaktContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const KontaktImgWrapper = styled.div`
  width: 100%;
  padding-top: 65%;
  position: relative;
`;

export const KontaktImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const KontaktAddressJobtitleContainer = styled.div`
  ${'' /* padding: 1rem; */}
  display: grid;
  grid-template-colums: 1fr;
  align-items: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`;

export const KontaktAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const KontaktAddressLine = styled.p`
  font-size: 1.3rem;
  padding: 0.2rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const KontaktJobTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const KontaktJobTitle = styled.p`
  text-align: center;
  max-width: 300px;
  font-style: italic;

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// max-width: 300px;
//   text-align: center;
//   font-style: italic;

//   @media screen and (max-width: 400px) {
//     font-size: 0.9rem;
//   }
