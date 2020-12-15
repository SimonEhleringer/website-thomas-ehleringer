import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
  SliderWrapper,
  SliderContent,
  Slide,
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

  useEffect(() => {
    const nextImage = () => {
      if (activeImageIndex === images.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(activeImageIndex + 1);
      }
    };

    setTimeout(nextImage, 7000);

    setShowTexts(false);
    setTimeout(() => setShowTexts(true), 1);
    setTimeout(() => setShowTexts(false), 5450);
  }, [activeImageIndex, images.length]);

  useEffect(() => {
    // setShowTexts(false);
    // setTimeout(() => setShowTexts(true), 1);
    // setTimeout(() => setShowTexts(false), 5490);
  }, [activeImageIndex]);

  // const getWidth = () => window.innerWidth;

  // const firstSlide = slides[0];
  // const secondSlide = slides[1];
  // const lastSlide = slides[slides.length - 1];

  // const [state, setState] = useState({
  //   activeSlide: 0,
  //   translate: getWidth(),
  //   transition: transitionDuration,
  //   _slides: [lastSlide, firstSlide, secondSlide],
  // });

  // const { translate, transition, activeSlide, _slides } = state;
  // const autoPlayRef = useRef();
  // const transitionRef = useRef();
  // const resizeRef = useRef();

  // useEffect(() => {
  //   autoPlayRef.current = nextSlide;
  //   transitionRef.current = smoothTransition;
  //   resizeRef.current = handleResize;
  // });

  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current();
  //   };

  //   const smooth = () => {
  //     transitionRef.current();
  //   };

  //   const resize = () => {
  //     resizeRef.current();
  //   };

  //   let timer = null;
  //   const transitionEnd = window.addEventListener('transitionend', smooth);
  //   const onResize = window.addEventListener('resize', resize);

  //   if (interval) {
  //     timer = setInterval(play, interval);
  //   }

  //   return () => {
  //     window.removeEventListener('transitionend', transitionEnd);
  //     window.removeEventListener('resize', onResize);
  //     if (interval) {
  //       clearInterval(timer);
  //     }
  //   };
  // }, [interval]);

  // useEffect(() => {
  //   if (transition === 0) {
  //     setState({ ...state, transition: transitionDuration });
  //   }
  // }, [transition]);

  // const handleResize = () => {
  //   setState({ ...state, translate: getWidth(), transition: 0 });
  // };

  // const smoothTransition = () => {
  //   let _slides = [];

  //   if (activeSlide === slides.length - 1) {
  //     _slides = [slides[slides.length - 2], lastSlide, firstSlide];
  //   } else if (activeSlide === 0) {
  //     _slides = [lastSlide, firstSlide, secondSlide];
  //   } else {
  //     _slides = slides.slice(activeSlide - 1, activeSlide + 2);
  //   }

  //   setState({
  //     ...state,
  //     _slides,
  //     transition: 0,
  //     translate: getWidth(),
  //   });
  // };

  // const nextSlide = () => {
  //   setState({
  //     ...state,
  //     translate: translate + getWidth(),
  //     activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
  //   });
  // };

  return (
    <SliderWrapper>
      {/* <SliderContent
        id='SliderContent'
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((slide, index) => {
          return (
            <Slide key={index} content={slide.path}>
              <SliderImageTextsWrapper translate={translate} width={getWidth()}>
                {slide.texts.map((textObj, index) => {
                  const { text, positionX, positionY } = textObj;

                  return (
                    <SliderImageTextWrapper
                      key={index}
                      positionX={positionX}
                      positionY={positionY}
                    >
                      <SliderImageText>{text}</SliderImageText>
                    </SliderImageTextWrapper>
                  );
                })}
              </SliderImageTextsWrapper>
            </Slide>
          );
        })}
      </SliderContent> */}
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
    </SliderWrapper>
  );
};

export default Slider;
