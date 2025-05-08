import profile from '../data/profile.json';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import {
  slideUpAnimation,
  opacityAppear,
  slideUpAnimationFast,
} from '../styles/styled-utils';
import Button from './Button';

const ProfileCardContainerMobile = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleContainerMobile = styled.div`
  ${slideUpAnimation}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-transform: none;
  }
`;

const TextContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 40ch;
  padding-bottom: 2rem;

  h3 {
    ${slideUpAnimation}
    text-transform: none;
  }

  p {
    ${slideUpAnimationFast}
  }
`;

const ProfileCardContainerDesktop = styled.div`
  ${slideUpAnimation}

  display: none;

  @media (min-width: 1367px) {
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: stretch;
    > * {
      flex: 1 1 0%;
      min-width: 0;
    }
  }
`;

const TextContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding-block: 1rem;
  max-width: 50ch;

  h3 {
    text-transform: none;
  }
`;

const ButtonWrapper = styled.div`
  max-width: fit-content;
`;

const ProfileImage = styled.div`
  ${opacityAppear}
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
`;

const HideOnDesktop = styled.div`
  display: block;
  @media (min-width: 1367px) {
    display: none;
  }
`;

const HideOnMobile = styled.div`
  display: none;
  @media (min-width: 1367px) {
    display: block;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TitleDesktop = styled.div`
  display: none;

  @media (min-width: 1367px) {
    ${slideUpAnimation}
    display: flex;
    flex-direction: column;
    text-align: left;
    h3 {
      text-transform: none;
    }
  }
`;

function ProfileCard() {
  return (
    <FullWidthSection>
      <HideOnDesktop>
        <LayoutWrapper>
          <ProfileCardContainerMobile>
            <TitleContainerMobile>
              <h3>Hola! I'm</h3>
              <h2>Casandra</h2>
              <p>@Github HolaCarmensita</p>
            </TitleContainerMobile>
            <ProfileImage aria-label='Picture of Casandra' />
            <TextContainerMobile>
              <h3>Frontend developer with an eye for design</h3>
              <p>{profile.descriptionShort}</p>
              <ButtonWrapper>
                <Button
                  text='Resume here'
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                />
              </ButtonWrapper>
            </TextContainerMobile>
          </ProfileCardContainerMobile>
        </LayoutWrapper>
      </HideOnDesktop>

      <HideOnMobile>
        <LayoutWrapper>
          <ProfileCardContainerDesktop>
            <ProfileImage aria-label='Picture of Casandra' />
            <TextContainerDesktop>
              <TitleDesktop>
                <h3>Hola! I'm</h3>
                <h1>Casandra</h1>
                <p>@Github HolaCarmensita</p>
              </TitleDesktop>
              <p>{profile.descriptionShort}</p>
              <p>Ready to build increíble things together?</p>
              <ButtonWrapper>
                <Button text='¡Lets talk!' href='#contact' />
              </ButtonWrapper>
            </TextContainerDesktop>
          </ProfileCardContainerDesktop>
        </LayoutWrapper>
      </HideOnMobile>
      <SocialMedia variant='about' />

      <CircleLeft color='var(--color-magenta)' YPosition='90%' />
    </FullWidthSection>
  );
}

export default ProfileCard;
