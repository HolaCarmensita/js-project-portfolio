import { css, keyframes } from 'styled-components';

//////////////
// COMPATIBLE ANIMATIONS - Works in all browsers
// These animations use a combination of modern CSS and fallback support
//////////////

export const slideUpAnimation = css`
  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    opacity: 0;
    transform: translateY(200px);
    animation: slideUp 2.5s ease forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  /* Fallback - simple animation for older browsers */
  @supports not (animation-timeline: view()) {
    animation: slideUpFallback 0.8s ease forwards;
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUpFallback {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideUpAnimationFast = css`
  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    opacity: 0;
    transform: translateY(200px);
    animation: slideUpFast 2.5s ease forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 20%;
  }

  /* Fallback - simple animation for older browsers */
  @supports not (animation-timeline: view()) {
    animation: slideUpFastFallback 0.6s ease forwards;
  }

  @keyframes slideUpFast {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUpFastFallback {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

////////////////////
export const appearAnimation = css`
  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    opacity: 0;
    transform: scale(0.9);
    transform-origin: center center;
    animation: appearAnimation 1s linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  /* Fallback - simple animation for older browsers */
  @supports not (animation-timeline: view()) {
    animation: appearAnimationFallback 0.6s ease forwards;
  }

  @keyframes appearAnimation {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes appearAnimationFallback {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const opacityAppear = css`
  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    opacity: 0;
    animation: opacityAppear 1s linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 10%;
  }

  /* Fallback - simple animation for older browsers */
  @supports not (animation-timeline: view()) {
    animation: opacityAppearFallback 0.6s ease forwards;
  }

  @keyframes opacityAppear {
    from {
      opacity: 0;
      transform-origin: center center;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes opacityAppearFallback {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const tittutAnimation = css`
  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    clip-path: inset(0 0 100% 0);
    transform-origin: top;
    animation: tittutAnimation linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 50%;
  }

  /* Fallback - simple animation for older browsers */
  @supports not (animation-timeline: view()) {
    animation: tittutAnimationFallback 0.8s ease forwards;
  }

  @keyframes tittutAnimation {
    from {
      clip-path: inset(0 0 100% 0); /* 👈 klipper BORT allt utom toppen */
      transform-origin: top;
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes tittutAnimationFallback {
    from {
      clip-path: inset(0 0 100% 0);
    }
    to {
      clip-path: inset(0 0 0 0);
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
