//Made with ChatGPT

import React from 'react';
import styled, { keyframes } from 'styled-components';

const liftVerySmooth = keyframes`
  0% {
    transform: translateY(100%) scale(0.95);
    opacity: 0;
  }
  80% {
    transform: translateY(-2%) scale(1.02);
    opacity: 1;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    top: 43%;
  }
  to {
    top: 3rem;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translateX(-50%);
  animation: ${slideUp} 2.5s cubic-bezier(0.645, 0.045, 0.355, 1)
    ${({ $slideDelay }) => $slideDelay}s forwards;
  pointer-events: none;
`;

const WordMask = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 2rem;
  line-height: 2rem;
`;

//Didn't find any other way to get the feel of rising up from the ground then putting a item infront???? Tried clip-path in several diffrent ways, nothing gave the same feel. Dont like this solution, very non resposive.
const Letter = styled.span`
  display: inline-block;
  font-size: 2rem;
  transform-origin: bottom center;
  opacity: 0;
  animation: ${liftVerySmooth} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const HolaAnimation = ({ onFinished }) => {
  const text = '!Hola!';
  const letters = Array.from(text);

  const letterDelay = 0.2;
  const letterDuration = 1.5;
  const totalLetters = letters.length;
  const slideDelay = (totalLetters - 1) * letterDelay + letterDuration;

  return (
    <Container $slideDelay={slideDelay}>
      <WordMask>
        {letters.map((char, i) => (
          <Letter
            key={i}
            $delay={i * letterDelay}
            onAnimationEnd={() => {
              if (i === totalLetters - 1 && onFinished) {
                onFinished();
              }
            }}
          >
            {char}
          </Letter>
        ))}
      </WordMask>
    </Container>
  );
};

export default HolaAnimation;
