import React, { useState, useEffect } from 'react';
import willkommenImages from '../../assets/willkommen-images';
import {
  SliderContainer,
  SliderImage,
  SliderImageTextContainer,
  SliderImageH1,
  SliderImageP,
} from './style';

const Slider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      if (activeImageIndex === willkommenImages.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(activeImageIndex + 1);
      }
    };

    const interval = setInterval(nextImage, 5000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <SliderContainer>
      <SliderImage img={willkommenImages[activeImageIndex]} alt='test'>
        <SliderImageTextContainer>
          <SliderImageH1>Das hier ist ein Beispieltext...</SliderImageH1>
          <SliderImageP>Noch einer </SliderImageP>
        </SliderImageTextContainer>
      </SliderImage>
      {/* <img src='IMG_Willkommen_1.jpg' alt='test' /> */}
      {/* <button onClick={nextImage}>Next</button> */}
      {/* <button onClick={prevImage}>Prev</button> */}
    </SliderContainer>
  );
};

export default Slider;
