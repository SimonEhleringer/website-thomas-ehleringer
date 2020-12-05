import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

export const SliderImageTextsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.2rem;

  @media screen and (max-width: 1500px) {
    left: 10%;
    right: 10%;
  }

  @media screen and (max-width: 1000px) {
    left: 15%;
    right: 15%;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    ${'' /* flex-direction: column; */}
    align-items: flex-end;
    justify-content: center;
    left: 0;
    right: 0;
  }
`;

export const SliderImageTextWrapper = styled.div`
  ${'' /* background-color: var(--color-gray-light); */}
  position: absolute;
  top: ${({ positionY }) => positionY}%;
  left: ${({ positionX }) => positionX}%;
  background-color: var(--color-white);
  padding: 0.6rem 1.6rem;
  opacity: ${({ show }) => (show ? '0.8' : '0')};
  transition: opacity 1.5s ease-in;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 500px) {
    position: static;
    padding: 0.4rem 0.7rem;
    margin: 0.2rem;
    transform: translate(0, 0);
  }
`;

export const SliderImageText = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: var(--color-gray-dark);
  color: dark-grey;
  font-family: 'Dancing Script';
  font-weight: 700;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
