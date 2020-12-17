import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
  SliderWrapper,
  SliderImage,
  SliderImageTextsWrapper,
  SliderImageTextWrapper,
  SliderImageText,
} from './style';

const Slider = ({ images, showText }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showTexts, setShowTexts] = useState(true);
  // const [areTextsFadingOut, setAreTextsFadingOut] = useState(false);

  const nextImage = () => {
    if (activeImageIndex === images.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextImage;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   const nextImage = () => {
  //     if (activeImageIndex === images.length - 1) {
  //       setActiveImageIndex(0);
  //     } else {
  //       setActiveImageIndex(activeImageIndex + 1);
  //     }
  //   };

  //   setTimeout(nextImage, 7000);

  //   setShowTexts(false);
  //   setTimeout(() => setShowTexts(true), 1);
  //   setTimeout(() => setShowTexts(false), 5450);
  // }, [activeImageIndex, images.length]);

  // useEffect(() => {
  //   // setShowTexts(false);
  //   // setTimeout(() => setShowTexts(true), 1);
  //   // setTimeout(() => setShowTexts(false), 5490);
  // }, [activeImageIndex]);



  return (
    <SliderWrapper>
      {images.map((image, index) => {
        return <>
          <SliderImage key={index} img={image.path} show={index === activeImageIndex}></SliderImage>

          {showText && (
            <SliderImageTextsWrapper>
              {images[activeImageIndex].texts.map((textObj, index) => {
                const { text, positionX, positionY } = textObj;

                return (
                  <SliderImageTextWrapper
                    key={index}
                    show={false}
                    positionX={positionX}
                    positionY={positionY}
                  >
                    <SliderImageText>{text}</SliderImageText>
                  </SliderImageTextWrapper>
                );
              })}
            </SliderImageTextsWrapper>
          )}
        </>
      })}
      {/* <SliderImage img={images[activeImageIndex].path}></SliderImage>

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
      )} */}
    </SliderWrapper>
  );
};

export default Slider;
