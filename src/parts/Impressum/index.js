import React from 'react';
import impressum from '../../assets/impressum';
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { ImpressumH2, ImpressumH3, ImpressumParagraph } from './style';

const Impressum = () => {
  const { id, heading, points } = impressum;

  return (
    <Wrapper id={id}>
      <Container>
        <Heading>{heading}</Heading>

        {points.map((point) => {
          const { heading, texts, subPoints } = point;

          return (
            <>
              <ImpressumH2>{heading}</ImpressumH2>
              {texts.map((text) => {
                return (
                  <ImpressumParagraph
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></ImpressumParagraph>
                );
              })}

              {subPoints.map((subPoint) => {
                const { heading, texts } = subPoint;

                return (
                  <>
                    <ImpressumH3>{heading}</ImpressumH3>
                    {texts.map((text) => {
                      return (
                        <ImpressumParagraph
                          dangerouslySetInnerHTML={{ __html: text }}
                        ></ImpressumParagraph>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Impressum;
