import { css, keyframes } from 'styled-components';
//////////////
export const slideUpAnimation = css`
  /* start fully transparent and shifted down */
  opacity: 0;
  transform: translateY(200px);

  /* hook up your keyframes on the view-timeline */
  animation: slideUp 2.5s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideUpAnimationFast = css`
  /* start fully transparent and shifted down */
  opacity: 0;
  transform: translateY(200px);

  /* hook up your keyframes on the view-timeline */
  animation: slideUpFast 2.5s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 20%;

  @keyframes slideUpFast {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

////////////////////
export const appearAnimation = css`
  opacity: 0;
  transform: scale(0.9);
  transform-origin: center center;

  animation: appearAnimation 1s linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;

  @keyframes appearAnimation {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const opacityAppear = css`
  opacity: 0;
  animation: opacityAppear 1s linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 10%;

  @keyframes opacityAppear {
    from {
      opacity: 0;
      transform-origin: center center;
    }
    to {
      opacity: 1;
    }
  }
`;

export const tittutAnimation = css`
  animation: tittutAnimation linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;

  @keyframes tittutAnimation {
    from {
      clip-path: inset(0 0 100% 0); /* 👈 klipper BORT allt utom toppen */
      transform-origin: top;
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
`;

export const tittutAnimationSmall = css`
  clip-path: inset(0 0 100% 0);
  transform-origin: top;

  /* Scroll-timed animation, nu klar redan vid cover 30% */
  animation: tittutAnimationSmall linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 20%;

  @keyframes tittutAnimationSmall {
    to {
      clip-path: inset(0 0 0 0);
    }
  }
`;

export const circleGrowIn = css`
  opacity: 0;
  transform: scale(0.2);
  animation: circleGrowIn ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 50%;

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

// Smooth scale-on-hover
export const hoverScale = css`
  /* apply a smooth scale transform on hover or focus */
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
