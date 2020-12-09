import React from 'react';
import referenzen from '../../assets/referenzen';
import {
  ReferenzenWrapper,
  ReferenzenContainer,
  ReferenzenHeading,
  ReferenzenParagraph,
  ReferenzenProjects,
  ReferenzenProjectsParagraph,
  ReferenzenBulletPointsContainer,
  ReferenzenBulletPoint,
} from './style';

const Referenzen = () => {
  const { heading, texts, projects } = referenzen;

  return (
    <ReferenzenWrapper>
      <ReferenzenContainer>
        <ReferenzenHeading>{heading}</ReferenzenHeading>

        {texts.firstText.map((paragraph, index) => {
          return (
            <ReferenzenParagraph key={index}>
              {paragraph}
            </ReferenzenParagraph>
          );
        })}
      </ReferenzenContainer>

      <ReferenzenProjects>
        <ReferenzenContainer>
          {projects.text.map((paragraph, index) => {
            return (
              <ReferenzenProjectsParagraph key={index}>
                {paragraph}
              </ReferenzenProjectsParagraph>
            );
          })}
          <ReferenzenBulletPointsContainer>
            {projects.bulletPoints.map((bulletPoint, index) => {
              return (
                <ReferenzenBulletPoint key={index}>
                  {bulletPoint}
                </ReferenzenBulletPoint>
              );
            })}
          </ReferenzenBulletPointsContainer>
        </ReferenzenContainer>
      </ReferenzenProjects>
    </ReferenzenWrapper>
  );
};

export default Referenzen;
