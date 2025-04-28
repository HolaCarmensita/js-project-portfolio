import ProfileCard from './ProfileCard';
import SocialMedia from './SocialMedia';
import Button from './Button';
import styled from 'styled-components';
import Skills from './Skills';
import LayoutWrapper from './LayoutWrapper';

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CornerButtonWrapper = styled.div`
  position: static; /* default för mobil */
  z-index: 1000;
  align-self: flex-end;
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
      {/* {      <Circle src='/shapes/circle.svg' alt='' aria-hidden='true' /> */}
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
