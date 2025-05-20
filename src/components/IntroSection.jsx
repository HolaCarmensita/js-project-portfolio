import Button from './Button';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import HeroAnimation from './HeroAnimation';
import HolaAnimation from './HolaAnimation';
import Accessibility from './Accessibility';
import { useState } from 'react';

const CornerButtonWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline;
    position: absolute;
    top: 2rem;
    right: 3rem;
  }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

const HeroAnimationConatiner = styled.div`
  width: 100%;

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    max-width: 60%;
    padding-top: 2rem;
  }

  @media (min-width: 1366px) {
    max-width: 850px;
  }
`;

const AccessibilityWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline;
    position: absolute;
    top: 3rem;
    left: 3rem;
  }
`;

const ArrowButton = styled.button`
  all: unset; /* Nollställ standard-knapp-stilar */
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #584793; /* Ändra färg via CSS */
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  bottom: 4rem;

  @media (min-width: 768px) {
    bottom: 5rem;
  }

  @media (min-width: 1366px) {
    bottom: 6rem;
  }

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }

  svg {
    width: 3rem;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus {
    color: #7a5bbf;
  }

  &:hover svg,
  &:focus svg {
    transform: translateY(0.25rem);
  }
`;

function IntroSection() {
  const [showHero, setShowHero] = useState(false);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id='hola'>
      {/* <AccessibilityWrapper>
        <Accessibility></Accessibility>
      </AccessibilityWrapper> */}

      <CornerButtonWrapper>
        <Button text='Get In Touch' href='#contact' />
      </CornerButtonWrapper>
      <LayoutWrapper>
        <HeroAnimationConatiner>
          <HolaAnimation onFinished={() => setShowHero(true)} />
          {showHero && <HeroAnimation />}
        </HeroAnimationConatiner>
        <ArrowButton
          type='button'
          onClick={scrollToAbout}
          aria-label='Scroll to about section'
        >
          <p>Get to know me</p>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
            <path
              d='M480-200 240-440l46.67-46.67 193.33 193 193.33-193L720-440 480-200Zm0-248.67-240-240 46.67-46.66 193.33 193 193.33-193L720-688.67l-240 240Z'
              fill='currentColor'
            />
          </svg>
        </ArrowButton>
      </LayoutWrapper>
    </Section>
  );
}

export default IntroSection;
