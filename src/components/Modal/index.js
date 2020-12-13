import React, { useEffect } from 'react';
import {
  ModalBackground,
  ModalWrapper,
  ModalContainer,
  ModalTextSectionContainer,
  ModalHeading,
  ModalTextContainer,
  ModalText,
  ModalImageContainer,
  ModalImage,
  ModalCloseIconContainer,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ heading, text, image, isOpen, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalWrapper isOpen={isOpen}>
        <ModalContainer>
          <ModalTextSectionContainer>
            <ModalHeading>{heading}</ModalHeading>

            <ModalTextContainer>
              <ModalText>{text}</ModalText>
            </ModalTextContainer>
          </ModalTextSectionContainer>

          <ModalImageContainer>
            <ModalImage src={image}></ModalImage>
          </ModalImageContainer>

          <ModalCloseIconContainer onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </ModalCloseIconContainer>
        </ModalContainer>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
