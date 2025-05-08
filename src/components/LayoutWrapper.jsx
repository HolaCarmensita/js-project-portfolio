import styled from 'styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: clamp(1rem, 5vw, 3rem);

  /* fluid between 320px and 1366px,
     scaling with 90vw as the “ideal” in-between */
  max-width: clamp(375px, 80vw, 1366px);
`;

export default LayoutWrapper;
