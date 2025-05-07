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
    top: 3rem;
    right: 3rem;
  }
`;

const Section = styled.section`
  scroll-snap-align: start;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

function IntroSection() {
  const [showHero, setShowHero] = useState(false);

  return (
    <Section id='intro'>
      <AccessibilityWrapper>
        <Accessibility></Accessibility>
      </AccessibilityWrapper>

      <CornerButtonWrapper>
        <Button text='Get In Touch' href='#contact' />
      </CornerButtonWrapper>
      <LayoutWrapper>
        <HeroAnimationConatiner>
          <HolaAnimation onFinished={() => setShowHero(true)} />
          {showHero && <HeroAnimation />}
        </HeroAnimationConatiner>
      </LayoutWrapper>
    </Section>
  );
}

export default IntroSection;
