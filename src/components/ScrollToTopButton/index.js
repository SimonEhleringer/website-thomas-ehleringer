import React, { useState, useEffect } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollToTopButtonWrapper } from './style';
import { animateScroll as scroll } from 'react-scroll';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleWindowScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
  });

  return (
    <ScrollToTopButtonWrapper
      isVisible={isVisible}
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
    </ScrollToTopButtonWrapper>
  );
};

export default ScrollToTopButton;
