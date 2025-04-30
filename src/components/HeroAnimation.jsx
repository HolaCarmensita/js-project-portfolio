// HeroAnimation.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideRotateInRight = keyframes`
  from {
    transform: translateX(100%) rotate(90deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`;

const slideRotateInLeft = keyframes`
  from {
    transform: translateX(-100%) rotate(-90deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
`;

const pop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const revealLeftToRight = keyframes`
  from { clip-path: inset(0 0 0 100%); }
  to   { clip-path: inset(0 0 0 0); }
`;
const revealRightToLeft = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`;
const revealTopToBottom = keyframes`
  from { clip-path: inset(100% 0 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`;
const revealBottomToTop = keyframes`
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0 0); }
`;

// 2) StyledSVG med animationer på children
const StyledSVG = styled.svg`
  width: 853px;
  height: 381px;
  overflow: visible;

  /* 2) Gör så att barnen kan roteras i 3D */
  transform-style: preserve-3d;
  perspective: 400px;

  /* Klassberoende animationer */

  path.fadeIn {
    opacity: 0;
    animation: ${fadeIn} 2s ease-out both;
  }

  path.revealLeft {
    clip-path: inset(0 0 0 100%);
    animation: ${revealLeftToRight} 2s ease-out forwards;
  }
  path.revealRight {
    clip-path: inset(0 100% 0 0);
    animation: ${revealRightToLeft} 2s ease-out forwards;
  }
  path.revealDown {
    clip-path: inset(100% 0 0 0);
    animation: ${revealTopToBottom} 2s ease-out forwards;
  }
  path.revealUp {
    clip-path: inset(0 0 100% 0);
    animation: ${revealBottomToTop} 2s ease-out forwards;
  }

  path.pop {
    transform-origin: center center; /* relativt mittpunkten */
    animation: ${pop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    /* cubic-bezier ger lite extra “studs” i slutet */
  }

  path.slideRotateInRight {
    /* Se till att procent-baserad translate tar pathens bbox som referens */
    transform-box: fill-box;
    transform-origin: center center;
    /* Startläge */
    transform: translateX(100%) rotate(90deg);
    opacity: 0;
    /* Animation */
    animation: ${slideRotateInRight} 2s ease-out forwards;
  }

  path.slideRotateInLeft {
    transform-box: fill-box; /* procent-translate mot eget bbox */
    transform-origin: center center;
    /* Startläge: utanför till vänster + roterad -90° */
    transform: translateX(-100%) rotate(-90deg);
    opacity: 0;
    /* Animation: 1s, ease-out, behåll slutläge */
    animation: ${slideRotateInLeft} 2s ease-out forwards;
  }

  /* Rektangeln med fill="#391D75" dyker upp först */
  rect[fill='#391D75'] {
    opacity: 1;
    animation: ${revealTopToBottom} 2s ease-out forwards;
    animation-delay: 0s;
  }

  /* Stegvis delay för varje path */
  path.BlueOverRed {
    animation-delay: 2.5s;
  }
  path.YellowCub {
    animation-delay: 2s;
  }
  path.BlueCircleInYellowCub {
    animation-delay: 2.5s;
    transform: translateY(15px);
  }
  path.Wave {
    animation-delay: 4s;
  }
  path.RedCube {
    animation-delay: 2s;
  }
  path.mustardCube {
    animation-delay: 1s;
  }
  path.blueCircleRedYellow {
    animation-delay: 2.5s;
  }
  path.yellowHalfCircle {
    animation-delay: 2.5s;
  }
  path.blueHalfCircleUnderYellowCircle {
    animation-delay: 2.5s;
  }
  /* path:nth-of-type(10) {
    //halvcurkel blå under gul
    animation-delay: 4s;
  } */
`;

const HeroAnimation = () => (
  <StyledSVG viewBox='0 0 853 381' xmlns='http://www.w3.org/2000/svg'>
    <path
      className='BlueOverRed fadeIn'
      d='M541 150.5C443.5 150.5 497.348 150.5 443.5 150.5C389.652 150.5 443.5 150.5 346 150.5C346 96.6523 389.652 53 443.5 53C497.348 53 541 96.6522 541 150.5Z'
      fill='#34EDB3'
    />
    <path
      className='YellowCub slideRotateInRight'
      d='M587 0H853V177C853 215.108 822.108 246 784 246H587V0Z'
      fill='#F8FFC7'
    />

    <path
      className='BlueCircleInYellowCub fadeIn'
      d='M853 149.5C755.5 149.5 809.348 149.5 755.5 149.5C701.652 149.5 755.5 149.5 658 149.5C658 95.6522 701.652 52 755.5 52C809.348 52 853 95.6522 853 149.5Z'
      fill='#34EDB3'
    />

    <path
      className='Wave revealLeft'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M212.6 341.5C212.6 319.685 230.285 302 252.1 302C273.915 302 291.6 319.685 291.6 341.5L275.8 341.5C275.8 328.411 265.189 317.8 252.1 317.8C239.011 317.8 228.4 328.411 228.4 341.5C228.4 363.315 210.715 381 188.9 381C167.085 381 149.4 363.315 149.4 341.5H165.2C165.2 354.589 175.811 365.2 188.9 365.2C201.989 365.2 212.6 354.589 212.6 341.5L212.6 341.5ZM378.667 302C356.852 302 339.167 319.685 339.167 341.5L339.168 341.5C339.168 354.589 328.557 365.2 315.468 365.2C302.378 365.2 291.768 354.589 291.768 341.5H275.967C275.967 363.315 293.652 381 315.467 381C335.919 381 352.74 365.457 354.763 345.539C354.898 344.211 354.967 342.863 354.967 341.5C354.967 328.411 365.578 317.8 378.667 317.8C391.756 317.8 402.367 328.411 402.367 341.5L418.167 341.5C418.167 319.685 400.483 302 378.667 302ZM505.067 302C483.252 302 465.567 319.685 465.567 341.5L481.367 341.5C481.367 328.411 491.978 317.8 505.067 317.8C518.156 317.8 528.767 328.411 528.767 341.5L544.567 341.5C544.567 319.685 526.883 302 505.067 302ZM465.567 341.5C465.567 354.589 454.956 365.2 441.867 365.2C428.778 365.2 418.167 354.589 418.167 341.5H402.367C402.367 363.315 420.052 381 441.867 381C463.682 381 481.367 363.315 481.367 341.5L465.567 341.5ZM607.851 341.5C607.851 363.315 590.166 381 568.351 381C546.536 381 528.851 363.315 528.851 341.5H544.651C544.651 354.589 555.262 365.2 568.351 365.2C581.44 365.2 592.051 354.589 592.051 341.5H607.851V341.392L607.851 341.5Z'
      fill='#34EDB3'
      fillOpacity='0.7'
    />
    <path
      className='RedCube slideRotateInLeft'
      d='M356 101H587V295H356V101Z'
      fill='#FF7300'
    />
    <path
      className='mustardCube revealUp'
      d='M587 177H786V376H587V177Z'
      fill='#FFBF00'
    />
    <path
      className='blueCircleRedYellow fadeIn'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M693 177C687.745 224.54 647.441 261.516 598.5 261.516C549.56 261.516 509.255 224.54 504 177L539.339 177C544.023 205.039 568.4 226.409 597.769 226.409C627.137 226.409 651.515 205.039 656.199 177L693 177Z'
      fill='#34EDB3'
    />
    <path
      className='yellowHalfCircle fadeIn'
      d='M382 165.5C284.5 165.5 338.348 165.5 284.5 165.5C230.652 165.5 284.5 165.5 187 165.5C187 111.652 230.652 68 284.5 68C338.348 68 382 111.652 382 165.5Z'
      fill='#F8FFC7'
    />

    <path
      className='blueHalfCircleUnderYellowCircle fadeIn'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M284.5 177L187 177C187 230.848 230.652 274.5 284.5 274.5C338.348 274.5 382 230.848 382 177L284.5 177ZM285 237C318.137 237 345 210.137 345 177L285 177L225 177C225 210.137 251.863 237 285 237Z'
      fill='#34EDB3'
    />

    <rect y='149' width='853' height='28' fill='#391D75' />
  </StyledSVG>
);

export default HeroAnimation;
