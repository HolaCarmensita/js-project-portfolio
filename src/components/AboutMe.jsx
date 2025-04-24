import ProfileCard from './ProfileCard';
import SocialMedia from './SocialMedia';
import Button from './Button';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 3rem 3rem 3rem 3rem;
  position: relative;
  min-height: 100vh;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const Circle = styled.img`
//   position: absolute;
//   top: 50%; /* centrerar vertikalt */
//   left: -50px; /* skjuter ut cirkeln utanför viewporten */
//   transform: translateY(-50%);
//   width: 100px;
//   height: auto;
//   pointer-events: none; /* så att den inte blockar klick */
//   z-index: 0; /* om du har andra lager */
// `;

const CornerButtonWrapper = styled.div`
  position: sticky;
  top: 2rem;
  align-self: flex-end;
  z-index: 1000;
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
      <SocialMedia />
    </AboutSection>
  );
}

export default AboutMe;
