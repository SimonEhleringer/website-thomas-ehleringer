import React from 'react';
import bestellungVereidigung from '../../assets/bestellung-vereidigung';
import {
  BestellungVereidigungWrapper,
  BestellungVereidigungContainer,
  BestellungVereidigungHeading,
  BestellungVereidigungParagraph,
  BestellungVereidigungTopics,
  BestellungVereidigungTopicsParagraph,
  BestellungVereridigungBulletPointsContainer,
  BestellungVereidigungBulletPoint,
  BestellungVereidigungUrkundeDownload,
  BestellungVereidigungUrkundeDownloadSpan,
  BestellungVereidigungUrkundeDownloadA,
} from './style';

const BestellungVereidigung = () => {
  const { heading, texts, topics, urkunde } = bestellungVereidigung;

  return (
    <BestellungVereidigungWrapper>
      <BestellungVereidigungContainer>
        <BestellungVereidigungHeading>{heading}</BestellungVereidigungHeading>

        {texts.firstText.map((paragraph, index) => {
          return (
            <BestellungVereidigungParagraph key={index}>
              {paragraph}
            </BestellungVereidigungParagraph>
          );
        })}
      </BestellungVereidigungContainer>
      <BestellungVereidigungTopics>
        <BestellungVereidigungContainer>
          {topics.text.map((paragraph, index) => {
            return (
              <BestellungVereidigungTopicsParagraph key={index}>
                {paragraph}
              </BestellungVereidigungTopicsParagraph>
            );
          })}
          <BestellungVereridigungBulletPointsContainer>
            {topics.bulletPoints.map((bulletPoint, index) => {
              return (
                <BestellungVereidigungBulletPoint key={index}>
                  {bulletPoint}
                </BestellungVereidigungBulletPoint>
              );
            })}
          </BestellungVereridigungBulletPointsContainer>

          <BestellungVereidigungUrkundeDownload>
            <BestellungVereidigungUrkundeDownloadSpan>
              Klicken Sie{' '}
            </BestellungVereidigungUrkundeDownloadSpan>
            <BestellungVereidigungUrkundeDownloadA
              href={urkunde}
              target='_blank'
            >
              hier
            </BestellungVereidigungUrkundeDownloadA>
            <BestellungVereidigungUrkundeDownloadSpan>
              , um die Urkunde über meine öffentliche Bestellung als
              Sachverständiger einzusehen.
            </BestellungVereidigungUrkundeDownloadSpan>
          </BestellungVereidigungUrkundeDownload>
        </BestellungVereidigungContainer>
      </BestellungVereidigungTopics>

      <BestellungVereidigungContainer>
        {texts.secondText.map((paragraph, index) => {
          return (
            <BestellungVereidigungParagraph key={index}>
              {paragraph}
            </BestellungVereidigungParagraph>
          );
        })}
      </BestellungVereidigungContainer>
    </BestellungVereidigungWrapper>
  );
};

export default BestellungVereidigung;
