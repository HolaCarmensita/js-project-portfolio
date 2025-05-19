import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  /* border: 1px solid black; */
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-block: clamp(1rem, 10vw, 3rem);
  padding-inline: clamp(1rem, 5vw, 3rem);

  /* max-width: clamp(375px, 90vw, 1180px); */

  /* Största desktop */
  max-width: 1180px;

  /* LANDSCAPE – max-width 1024px, bara i landskapsläge */
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    max-width: 768px;
  }

  /* PORTRAIT – max-width 1024px, bara i stående portrait-läge */
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    max-width: 600px; /* eller vad du vill för portrait */
  }

  /* PORTRAIT – max-width 1024px, bara i stående portrait-läge */
  @media screen and (min-width: 1025px) and (max-width: 1366px) and (orientation: landscape) {
    max-width: 820px; /* eller vad du vill för portrait */
  }

  /* Tablet/tablet-stor mobil (oavsett orientation, men under 768px bredd) */
  @media (max-width: 768px) {
    max-width: 600px;
  }

  /* Mindre mobiler */
  @media (max-width: 480px) {
    max-width: 375px;
  }
`;

export default LayoutWrapper;
