import Button from './Button';
import styled from 'styled-components';

const CornerButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  background-color: var(--color-bg);
  color: var(--color-text);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
`;

function IntroSection() {
  return (
    <Section id='intro'>
      <CornerButtonWrapper>
        <Button text='Get In Touch' href='#contact' />
      </CornerButtonWrapper>

      <Title>Hi, I'm Casandra 👋</Title>
      <Subtitle>
        A creative frontend developer with a design background, passionate about
        clean code and delightful user experiences.
      </Subtitle>
    </Section>
  );
}

export default IntroSection;
