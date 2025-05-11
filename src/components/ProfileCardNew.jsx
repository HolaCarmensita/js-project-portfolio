import profile from '../data/profile.json';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import { slideUpAnimation } from '../styles/styled-utils';
import Button from './Button';

const ProfileCardContainer = styled.div`
  ${slideUpAnimation}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1367px) {
    flex-direction: row;
    align-items: stretch;
    > * {
      flex: 1 1 0%;
      min-width: 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  max-width: fit-content;
  /* Hide on mobile when $mobile is false */
  display: ${({ $mobile }) => ($mobile === false ? 'none' : 'flex')};

  /* Mobile adjustments (when $mobile is true, show it only on mobile) */
  @media (max-width: 768px) {
    display: ${({ $mobile }) =>
      $mobile === true ? 'flex' : 'none'}; /* Show on mobile, hide on desktop */
  }

  /* Desktop adjustments */
  @media (min-width: 768px) {
    display: ${({ $mobile }) =>
      $mobile === true ? 'none' : 'flex'}; /* Hide on mobile, show on desktop */
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  max-width: 400px;
  background-image: url(${profile.image});
  background: url(${profile.image}) center/cover no-repeat;
  aspect-ratio: 1 / 1;

  /* smooth transition */
  transition: background-image 1s ease-in-out, transform 1s ease;

  &:hover {
    background-image: url(${profile.hoverImg});
    /* optional extra effect */
    transform: scale(1.05);
  }

  @media (min-width: 1367px) {
    /* DESKTOP: let flex sizing take over */
    flex: 1 1 0%;
    min-width: 0; /* allow it to shrink if needed */
    width: auto;
  }
`;

const FullWidthSection = styled.section`
  position: relative;

  @media (min-width: 1367px) {
    padding-bottom: 0rem;
  }
`;

const ProfileCardWrapper = styled.div`
  width: 100%;

  @media (min-width: 1367px) {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

const TitleMobile = styled.div`
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    text-transform: none;
  }

  @media (min-width: 1367px) {
    display: none;
  }
`;

const TitleDesktop = styled.div`
  display: none;

  @media (min-width: 1367px) {
    display: block;
    text-align: left;

    h3 {
      text-transform: none;
    }
  }
`;

const ProfileText = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 70ch;
  text-transform: none;
  text-align: center;

  @media (min-width: 1367px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

function ProfileCard() {
  return (
    <FullWidthSection>
      <ProfileCardWrapper>
        <LayoutWrapper>
          <ProfileCardContainer>
            <TitleMobile>
              <h3>Hola! I'm</h3>
              <h1>Casandra</h1>
              <p>@Github HolaCarmensita</p>
            </TitleMobile>
            <ProfileImage aria-label='Picture of Casandra' />
            <ProfileText>
              <TitleDesktop>
                <h3>Hola! I'm</h3>
                <h1>Casandra,</h1>
                <h3>a Frontend Developer</h3>
              </TitleDesktop>
              <SocialMedia visibility='mobile' />

              <p>{profile.descriptionShort}</p>
              <Test>
                <p>Ready to build increíble things together?</p>
                <ButtonWrapper $mobile={false}>
                  <Button text='¡Lets talk!' href='#contact' />
                </ButtonWrapper>
              </Test>
              <ButtonWrapper $mobile={true}>
                <Button
                  text='Resume here'
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                />
              </ButtonWrapper>
            </ProfileText>
          </ProfileCardContainer>
        </LayoutWrapper>
      </ProfileCardWrapper>

      <SocialMedia variant='verticalAbsolute' visibility='desktop' />
      <CircleLeft
        color='var(--color-magenta)'
        YPosition='90%'
        visibility='desktop'
      />
    </FullWidthSection>
  );
}

export default ProfileCard;
