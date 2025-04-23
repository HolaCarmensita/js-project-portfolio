import ProfileCard from './ProfileCard';
import SocialMedia from './SocialMedia';
import Button from './Button';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding-top: 5rem;
  position: relative;
  min-height: 100vh;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CornerButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

function AboutMe() {
  return (
    <AboutSection>
      <CornerButtonWrapper>
        <Button
          text='Resume here'
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        />
      </CornerButtonWrapper>

      <ProfileCard />
      <SocialMedia />
    </AboutSection>
  );
}

export default AboutMe;
