import Button from './Button';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import HeroAnimation from './heroAnimation';

const CornerButtonWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
`;

const Section = styled.section`
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
  return (
    <Section id='intro'>
      <CornerButtonWrapper>
        <Button text='Get In Touch' href='#contact' />
      </CornerButtonWrapper>
      <LayoutWrapper>
        <HeroAnimation />
      </LayoutWrapper>
    </Section>
  );
}

export default IntroSection;
