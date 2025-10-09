import { css, keyframes } from 'styled-components';

//////////////
// COMPATIBLE ANIMATIONS - Works in all browsers
// These animations use a combination of modern CSS and fallback support
//////////////

export const slideUpAnimation = css`
  /* Start fully transparent and shifted down */
  opacity: 0;
  transform: translateY(200px);

  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    animation: slideUp 2.5s ease forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  /* Fallback for browsers without view-timeline support */
  @supports not (animation-timeline: view()) {
    transition: opacity 0.8s ease, transform 0.8s ease;

    &.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideUpAnimationFast = css`
  /* Start fully transparent and shifted down */
  opacity: 0;
  transform: translateY(200px);

  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    animation: slideUpFast 2.5s ease forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 20%;
  }

  /* Fallback for browsers without view-timeline support */
  @supports not (animation-timeline: view()) {
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }

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

  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    animation: appearAnimation 1s linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  /* Fallback for browsers without view-timeline support */
  @supports not (animation-timeline: view()) {
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.in-view {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes appearAnimation {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const opacityAppear = css`
  opacity: 0;

  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    animation: opacityAppear 1s linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 10%;
  }

  /* Fallback for browsers without view-timeline support */
  @supports not (animation-timeline: view()) {
    transition: opacity 0.6s ease;

    &.in-view {
      opacity: 1;
    }
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
`;

export const tittutAnimation = css`
  clip-path: inset(0 0 100% 0);
  transform-origin: top;

  /* Modern browsers with view-timeline support */
  @supports (animation-timeline: view()) {
    animation: tittutAnimation linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 50%;
  }

  /* Fallback for browsers without view-timeline support */
  @supports not (animation-timeline: view()) {
    transition: clip-path 0.8s ease;

    &.in-view {
      clip-path: inset(0 0 0 0);
    }
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
