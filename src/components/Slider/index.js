import React, { useState, useRef, Fragment } from 'react';
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

  return (
    <SliderWrapper>
      {images.map((image, imageIndex) => {
        const show = imageIndex === activeImageIndex;

        return (
          <Fragment key={imageIndex}>
            <SliderImage
              img={process.env.PUBLIC_URL + image.path}
              show={show}
            ></SliderImage>

            {showText && (
              <SliderImageTextsWrapper>
                {image.texts.map((textObj, textIndex) => {
                  const { text, positionX, positionY } = textObj;

                  return (
                    <SliderImageTextWrapper
                      key={textIndex}
                      show={show}
                      positionX={positionX}
                      positionY={positionY}
                    >
                      <SliderImageText>{text}</SliderImageText>
                    </SliderImageTextWrapper>
                  );
                })}
              </SliderImageTextsWrapper>
            )}
          </Fragment>
        );
      })}
    </SliderWrapper>
  );
};

export default Slider;
