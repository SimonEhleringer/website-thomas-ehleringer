import React, { useState } from 'react';
import leistungsangebot from '../../assets/leistungsangebot';
import {
  LeistungsangebotWrapper,
  LeistungsangebotContainer,
  LeistungsangebotHeading,
} from './style';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

const Leistungsangebot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalHeading, setModalHeading] = useState('');
  const [modalText, setModalText] = useState('');

  const { heading, leistungsangebote } = leistungsangebot;

  const handleCardClick = (index) => {
    const { image, heading, description } = leistungsangebote[index];

    setModalImage(image);
    setModalHeading(heading);
    setModalText(description);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LeistungsangebotWrapper>
        <LeistungsangebotHeading>{heading}</LeistungsangebotHeading>

        <LeistungsangebotContainer>
          {leistungsangebote.map((leistung, index) => {
            const { heading, image } = leistung;

            return (
              <Card
                key={index}
                image={image}
                heading={heading}
                onClick={() => handleCardClick(index)}
              ></Card>
            );
          })}
        </LeistungsangebotContainer>
      </LeistungsangebotWrapper>

      <Modal
        image={modalImage}
        heading={modalHeading}
        text={modalText}
        isOpen={isModalOpen}
        closeModal={closeModal}
      ></Modal>
    </>
  );
};

export default Leistungsangebot;
