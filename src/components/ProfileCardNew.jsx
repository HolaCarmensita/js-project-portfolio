import profile from '../data/profile.json';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import { slideUpAnimation } from '../styles/styled-utils';
import Button from './Button';
import { useState } from 'react';

const FullWidthSection = styled.section`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //Viktig för sociala media komponenten och cirklarna
`;

const ProfileCardContainer = styled.div`
  ${slideUpAnimation}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 1366px) {
    max-width: 320px;
  }
`;

const ProfileImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${profile.image}) center/cover no-repeat;
  border-radius: 50%;
  transition: opacity 0.6s ease-in-out, transform 0.6s ease;
  opacity: ${({ $isHovered }) => ($isHovered ? 0 : 1)};

  /* Lägg till en subtle zoom på hover */
  transform: ${({ $isHovered }) => ($isHovered ? 'scale(1.05)' : 'scale(1)')};
`;

const ProfileImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${profile.hoverImg}) center/cover no-repeat;
  border-radius: 50%;
  transition: opacity 0.6s ease-in-out, transform 0.6s ease;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};

  /* Lägg till en subtle zoom på hover */
  transform: ${({ $isHovered }) => ($isHovered ? 'scale(1.05)' : 'scale(1)')};
`;

const ProfileTitle = styled.div`
  text-align: center;

  h4 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  p {
    padding-top: 0.5rem;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-transform: none;
  text-align: center;
  max-width: 500px;

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  @media (min-width: 1366px) {
    max-width: 650px;
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FullWidthSection>
      <LayoutWrapper>
        <ProfileCardContainer>
          <ProfileTitle>
            <h4>Hola! I'm</h4>
            <h1>Casandra</h1>
            <p>@Github HolaCarmensita</p>
          </ProfileTitle>
          <ProfileImageContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role='img'
            aria-label='Picture of Casandra'
          >
            <ProfileImage $isHovered={isHovered} />
            <ProfileImageHover $isHovered={isHovered} />
          </ProfileImageContainer>
          <ProfileText>
            <h3>Frontend Developer with a background in digital design</h3>
            <p>{profile.descriptionShort}</p>
            <Test>
              {/* <p>Ready to build increíble things together?</p> */}
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
            <SocialMedia visibility='mobile' />
          </ProfileText>
        </ProfileCardContainer>
      </LayoutWrapper>
    </FullWidthSection>
  );
}

export default ProfileCard;
