import ProfileCard from './ProfileCard';
import SocialMedia from './SocialMedia';
import Button from './Button';
import styled from 'styled-components';
import Skills from './Skills';

const AboutSection = styled.section`
  position: relative;
  width: 100%;
`;

const CornerButtonWrapper = styled.div`
  position: static; /* default för mobil */
  float: right;
  z-index: 1000;
  padding-right: 2rem;

  @media (min-width: 768px) {
    position: sticky;
    top: 3rem;
    right: 3rem;
    padding-right: 0;
  }
`;

function AboutMe() {
  return (
    <AboutSection id='about'>
      <CornerButtonWrapper>
        <Button
          text='Resume here'
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        />
      </CornerButtonWrapper>
      <ProfileCard />
      <Skills />
    </AboutSection>
  );
}

export default AboutMe;
