import React from 'react';
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

const Modal = ({
  heading,
  text,
  image,
  isOpen,
  closeModal,
  isCloseIconWhite,
}) => {
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
            <ModalImage src={process.env.PUBLIC_URL + image}></ModalImage>
          </ModalImageContainer>

          <ModalCloseIconContainer
            onClick={closeModal}
            isCloseIconWhite={isCloseIconWhite}
          >
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </ModalCloseIconContainer>
        </ModalContainer>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
