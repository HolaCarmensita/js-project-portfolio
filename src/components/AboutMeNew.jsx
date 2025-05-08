import ProfileCardNew from './ProfileCardNew';
import Button from './Button';
import styled from 'styled-components';
import Skills from './Skills';
import AboutMeTitle from './AboutMeTitle';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const CornerButtonWrapper = styled.div`
  display: none;

  @media (min-width: 1367px) {
    z-index: 1000;
    float: right;
    display: block;
    position: sticky;
    top: 3rem;
    right: 3rem;
    padding-right: 0;
  }
`;

const SocialMediaWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    z-index: 1000;
    float: right;
    display: block;
    position: sticky;
    top: 3rem; /* halfway down the screen */
    right: 3rem; /* 3rem in from the right */
    transform: translateY(50%); /* truly center vertically?? */
  }
`;

const TitleDesktop = styled.div`
  display: none;

  @media (min-width: 1367px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

      <SocialMediaWrapper>
        <SocialMedia variant='about' />
      </SocialMediaWrapper>

      <ProfileCardNew />
      <Skills />
    </AboutSection>
  );
}

export default AboutMeNew;
