import styled from 'styled-components';

// BestellungVereidigungWrapper,
//   BestellungVereidigungContainer,
//   BestellungVereidigungHeading,
//   BestellungVereidigungParagraph,
//   BestellungVereidigungTopics,
//   BestellungVereidigungBulletPoint,

export const BestellungVereidigungWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestellungVereidigungContainer = styled.div`
  padding: 1.5rem 1.6rem;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestellungVereidigungHeading = styled.p`
  padding: 0.5rem 0;
  font-size: 2rem;
  border-bottom: 2px solid var(--color-green);
  margin-bottom: 0.5rem;
  color: var(--color-gray-darker);
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const BestellungVereidigungParagraph = styled.p`
  text-align: justify;
  padding: 0.5rem 0;
  font-size: 1.1rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const BestellungVereidigungTopics = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-gray-light);
  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);
`;

export const BestellungVereidigungTopicsParagraph = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  font-style: italic;

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const BestellungVereridigungBulletPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
`;

export const BestellungVereidigungBulletPoint = styled.p`
  padding: 0.2rem;
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const BestellungVereidigungUrkundeDownload = styled.div`
  padding: 0.5rem 0;
  font-style: italic;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const BestellungVereidigungUrkundeDownloadSpan = styled.span``;

export const BestellungVereidigungUrkundeDownloadA = styled.a`
  color: var(--color-gray-dark);
`;
