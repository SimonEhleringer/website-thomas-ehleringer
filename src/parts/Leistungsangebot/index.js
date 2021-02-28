import React, { useState } from 'react';
import leistungsangebot from '../../assets/leistungsangebot';
import Heading from '../../components/Heading';
import { LeistungsangebotWrapper, LeistungsangebotContainer } from './style';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

const Leistungsangebot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalHeading, setModalHeading] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalIsCloseIconWhite, setModalIsCloseIconWhite] = useState(false);

  const { id, heading, leistungsangebote } = leistungsangebot;

  const handleCardClick = (index) => {
    const { image, heading, description, isCloseIconWhite } = leistungsangebote[
      index
    ];

    setModalImage(image);
    setModalHeading(heading);
    setModalText(description);
    setModalIsCloseIconWhite(isCloseIconWhite);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LeistungsangebotWrapper id={id}>
        <Heading>{heading}</Heading>

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
        isCloseIconWhite={modalIsCloseIconWhite}
        isOpen={isModalOpen}
        closeModal={closeModal}
      ></Modal>
    </>
  );
};

export default Leistungsangebot;
