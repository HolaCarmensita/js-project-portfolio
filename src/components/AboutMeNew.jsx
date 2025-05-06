import ProfileCardNew from './ProfileCardNew';
import SocialMedia from './SocialMedia';
import Button from './Button';
import styled from 'styled-components';
import Skills from './Skills';

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
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

function AboutMeNew() {
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
      <ProfileCardNew />
      <Skills />
    </AboutSection>
  );
}

export default AboutMeNew;
