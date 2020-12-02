import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
`;

export const SliderImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
  transition: 1.5s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SliderImageH1 = styled.h1`
  ${'' /* color: var(--color-white); */}
  font-size: 2.5rem;
`;

export const SliderImageP = styled.p`
  ${'' /* color: var(--color-white); */}
  font-weight: bold;
`;
