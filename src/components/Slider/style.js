import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

export const SliderImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: opacity(${({ show }) => (show ? '100%' : '0%')});
  transition: filter 1.5s ease-in;
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
    align-items: flex-end;
    justify-content: center;
    left: 0;
    right: 0;
  }
`;

export const SliderImageTextWrapper = styled.div`
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

export const SliderImageText = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  color: var(--color-gray-dark);
  color: dark-grey;
  font-weight: normal;
  font-style: italic;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
