import styled from 'styled-components';

const LayoutWrapper = styled.div`
  max-width: 100%; /* Fulll bredd på mobila enheter */
  padding-inline: 2rem;
  padding-block: 2rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 550px; /* Sätter max-bredd för mindre tablet-enheter (iPad) */
    padding-inline: 3rem;
    padding-block: 3rem;
    margin: 0 auto;
  }

  @media (min-width: 820px) and (max-width: 1024px) {
    max-width: 590px; /* Sätter max-bredd för större tablet-enheter (iPad) */
  }

  @media (min-width: 1025px) {
    max-width: 1000px; /* Större max-bredd för desktop */
    padding-inline: 4rem;
    padding-block: 4rem;
    margin: 0 auto;
  }
`;

export default LayoutWrapper;
