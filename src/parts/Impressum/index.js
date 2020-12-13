import React, { Fragment } from 'react';
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

        {points.map((point, pointIndex) => {
          const { heading, texts, subPoints } = point;

          return (
            <Fragment key={pointIndex}>
              <ImpressumH2 key={pointIndex}>{heading}</ImpressumH2>
              {texts.map((text, pointTextIndex) => {
                return (
                  <ImpressumParagraph
                    key={pointTextIndex}
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></ImpressumParagraph>
                );
              })}

              {subPoints.map((subPoint, subPointIndex) => {
                const { heading, texts } = subPoint;

                return (
                  <Fragment key={subPointIndex}>
                    <ImpressumH3 key={subPointIndex}>{heading}</ImpressumH3>
                    {texts.map((text, subPointTextIndex) => {
                      return (
                        <ImpressumParagraph
                          key={subPointTextIndex}
                          dangerouslySetInnerHTML={{ __html: text }}
                        ></ImpressumParagraph>
                      );
                    })}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Impressum;
