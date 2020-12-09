import React from 'react';
import referenzen from '../../assets/referenzen';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import SubSection from '../../components/SubSection';
import SubSectionParagraph from '../../components/SubSectionParagraph';
import BulletPointsContainer from '../../components/BulletPointsContainer';
import BulletPoint from '../../components/BulletPoint';

const Referenzen = () => {
  const { heading, texts, projects } = referenzen;

  return (
    <Wrapper>
      <Container>
        <Heading>{heading}</Heading>

        {texts.firstText.map((paragraph, index) => {
          return <Paragraph key={index}>{paragraph}</Paragraph>;
        })}
      </Container>

      <SubSection>
        <Container>
          {projects.text.map((paragraph, index) => {
            return (
              <SubSectionParagraph key={index}>{paragraph}</SubSectionParagraph>
            );
          })}
          <BulletPointsContainer>
            {projects.bulletPoints.map((bulletPoint, index) => {
              return <BulletPoint key={index}>{bulletPoint}</BulletPoint>;
            })}
          </BulletPointsContainer>
        </Container>
      </SubSection>
    </Wrapper>
  );
};

export default Referenzen;
