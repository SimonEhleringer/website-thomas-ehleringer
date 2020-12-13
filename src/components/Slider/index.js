import React, { useState, useEffect } from 'react';
import {
  SliderContainer,
  SliderImage,
  SliderImageTextsWrapper,
  SliderImageTextWrapper,
  SliderImageText,
} from './style';

const Slider = ({ images, showText }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showTexts, setShowTexts] = useState(true);
  // const [areTextsFadingOut, setAreTextsFadingOut] = useState(false);

  useEffect(() => {
    const nextImage = () => {
      if (activeImageIndex === images.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(activeImageIndex + 1);
      }
    };

    setTimeout(nextImage, 7000);
    //const interval = setInterval(nextImage, 7000);

    //return () => clearInterval(interval);

    setShowTexts(false);
    setTimeout(() => setShowTexts(true), 1);
    setTimeout(() => setShowTexts(false), 5450);
  }, [activeImageIndex, images.length]);

  // useEffect(() => {
  //   // setShowTexts(false);
  //   // setTimeout(() => setShowTexts(true), 1);
  //   // setTimeout(() => setShowTexts(false), 5490);
  // }, [activeImageIndex]);

  return (
    <SliderContainer>
      <SliderImage img={images[activeImageIndex].path}></SliderImage>

      {showText && (
        <SliderImageTextsWrapper>
          {images[activeImageIndex].texts.map((textObj, index) => {
            const { text, positionX, positionY } = textObj;

            return (
              <SliderImageTextWrapper
                key={index}
                show={showTexts}
                positionX={positionX}
                positionY={positionY}
              >
                <SliderImageText>{text}</SliderImageText>
              </SliderImageTextWrapper>
            );
          })}
        </SliderImageTextsWrapper>
      )}
    </SliderContainer>
  );
};

export default Slider;
