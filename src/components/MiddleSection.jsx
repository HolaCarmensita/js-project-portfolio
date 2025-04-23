import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem;
  overflow: hidden;
  line-height: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Shape = styled.img`
  min-width: 50vw;
  display: block;
  height: auto;
`;

function MiddleSection({ shapeSrc }) {
  return (
    <Wrapper>
      <Shape src={shapeSrc} alt='' aria-hidden='true' />
    </Wrapper>
  );
}

export default MiddleSection;
