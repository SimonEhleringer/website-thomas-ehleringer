import React from 'react';
import bestellungVereidigung from '../../assets/bestellung-vereidigung';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import SubSection from '../../components/SubSection';
import SubSectionParagraph from '../../components/SubSectionParagraph';
import BulletPointsContainer from '../../components/BulletPointsContainer';
import BulletPoint from '../../components/BulletPoint';
import {
  BestellungVereidigungUrkundeDownload,
  BestellungVereidigungUrkundeDownloadSpan,
  BestellungVereidigungUrkundeDownloadA,
} from './style';

const BestellungVereidigung = () => {
  const { id, heading, texts, topics, urkunde } = bestellungVereidigung;

  return (
    <Wrapper id={id}>
      <Container>
        <Heading>{heading}</Heading>

        {texts.firstText.map((paragraph, index) => {
          return <Paragraph key={index}>{paragraph}</Paragraph>;
        })}
      </Container>
      <SubSection>
        <Container>
          {topics.text.map((paragraph, index) => {
            return (
              <SubSectionParagraph key={index}>{paragraph}</SubSectionParagraph>
            );
          })}
          <BulletPointsContainer>
            {topics.bulletPoints.map((bulletPoint, index) => {
              return <BulletPoint key={index}>{bulletPoint}</BulletPoint>;
            })}
          </BulletPointsContainer>

          <BestellungVereidigungUrkundeDownload>
            <BestellungVereidigungUrkundeDownloadSpan>
              Klicken Sie{' '}
            </BestellungVereidigungUrkundeDownloadSpan>
            <BestellungVereidigungUrkundeDownloadA
              href={process.env.PUBLIC_URL + urkunde}
              target='_blank'
            >
              hier
            </BestellungVereidigungUrkundeDownloadA>
            <BestellungVereidigungUrkundeDownloadSpan>
              , um die Urkunde über meine öffentliche Bestellung als
              Sachverständiger einzusehen.
            </BestellungVereidigungUrkundeDownloadSpan>
          </BestellungVereidigungUrkundeDownload>
        </Container>
      </SubSection>

      <Container>
        {texts.secondText.map((paragraph, index) => {
          return <Paragraph key={index}>{paragraph}</Paragraph>;
        })}
      </Container>
    </Wrapper>
  );
};

export default BestellungVereidigung;
