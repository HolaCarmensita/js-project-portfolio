import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import {
  tittutAnimation,
  opacityAppear,
  appearAnimation,
  tittutAnimationSmall,
} from '../styles/styled-utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-bottom: 5rem;
  p {
    ${opacityAppear}
  }

  h3 {
    ${tittutAnimationSmall}
  }
`;

const Shape = styled.svg`
  ${appearAnimation}
  height: auto;
`;

const Title = styled.h1`
  ${tittutAnimation}
  font-size: 5rem;
  align-self: flex-end;
  text-transform: none;

  &:nth-of-type(1) {
  }
  &:nth-of-type(2) {
  }
  &:nth-of-type(3) {
    /* styling for the 2nd Title */
  }
`;

const TitleConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
`;

function MiddleSection({ shapeSrc }) {
  return (
    <Wrapper>
      <LayoutWrapper>
        <TitleConatiner>
          <h3>Welcome to my portfolio</h3>

          {/* <h3>From thoughtful design to inclusive code</h3> */}

          <Title>Creativo</Title>
          <Title>Interactivo</Title>
          <Title>Inclusivo</Title>
        </TitleConatiner>
        <Shape
          viewBox='0 0 173 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 5.5C6.7037 10.1667 11.4074 10.1667 16.1111 5.5C20.8148 0.833333 25.5185 0.833333 30.2222 5.5C34.9259 10.1667 39.6296 10.1667 44.3333 5.5C49.037 0.833333 53.7407 0.833333 58.4444 5.5C63.1482 10.1667 67.8519 10.1667 72.5556 5.5C77.2593 0.833333 81.963 0.833333 86.6667 5.5C91.3704 10.1667 96.0741 10.1667 100.778 5.5C105.481 0.833333 110.185 0.833333 114.889 5.5C119.593 10.1667 124.296 10.1667 129 5.5'
            stroke='#FF7300'
            stroke-width='3'
          />
          <path
            d='M129 5.5C133.704 0.833333 138.407 0.833333 143.111 5.5C147.815 10.1667 152.519 10.1667 157.222 5.5C161.926 0.833333 166.63 0.833333 171.333 5.5'
            stroke='#FF7300'
            stroke-width='3'
          />
        </Shape>
      </LayoutWrapper>
    </Wrapper>
  );
}

export default MiddleSection;
