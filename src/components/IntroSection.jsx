import Button from './Button';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import HeroAnimation from './HeroAnimation';
import HolaAnimation from './HolaAnimation';
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

function IntroSection() {
  const [showHero, setShowHero] = useState(false);

  return (
    <Section id='intro'>
      <CornerButtonWrapper>
        <Button text='Get In Touch' href='#contact' />
      </CornerButtonWrapper>

      <LayoutWrapper>
        <HolaAnimation onFinished={() => setShowHero(true)} />
        {showHero && <HeroAnimation />}
      </LayoutWrapper>
    </Section>
  );
}

export default IntroSection;
