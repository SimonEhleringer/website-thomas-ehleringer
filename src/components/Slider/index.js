import React, { useState, useEffect } from 'react';
import willkommenImages from '../../assets/willkommen-images';
import { SliderContainer, SliderImage } from './style';

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

    const interval = setInterval(nextImage, 10000000);

    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <SliderContainer>
      <SliderImage
        img={willkommenImages[activeImageIndex]}
        alt='test'
      ></SliderImage>
    </SliderContainer>
  );
};

export default Slider;
