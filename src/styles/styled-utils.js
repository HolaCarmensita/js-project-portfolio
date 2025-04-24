import { css } from 'styled-components';

export const appearAnimation = css`
  opacity: 0;
  animation: appearAnimation linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;

  @keyframes appearAnimation {
    from {
      opacity: 0;
      scale: 0.9;
      clip-path: inset(0 0 100% 0); /* 👈 klipper BORT allt utom toppen */
      transform-origin: top;
    }
    to {
      opacity: 1;
      scale: 1;
      clip-path: inset(0 0 0 0);
    }
  }
`;

export const circleGrowIn = css`
  opacity: 0;
  transform: scale(0.2);
  animation: circleGrowIn 0.8s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;

  @keyframes circleGrowIn {
    0% {
      opacity: 0;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
