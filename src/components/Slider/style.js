import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
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
