import profile from '../data/profile.json';
import styled from 'styled-components';
import { appearAnimation } from '../styles/styled-utils';
import { circleGrowIn } from '../styles/styled-utils';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';

const ProfileCardContainer = styled.div`
  position: relative;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  ${circleGrowIn}
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const H1 = styled.h2`
  ${appearAnimation}
`;

const P = styled.p`
  ${appearAnimation}
  max-width: 650px;
`;

const FullWidthSection = styled.section`
  position: relative;
`;

const Circle = styled.img`
  width: 15vw;
  max-width: 250px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function ProfileCard() {
  return (
    <FullWidthSection>
      <LayoutWrapper>
        <ProfileCardContainer>
          <h1>Hi, I'm Casandra </h1>
          <ProfileImage src={profile.image} alt='Picture of Casandra' />
          <P>{profile.descriptionShort}</P>
        </ProfileCardContainer>
      </LayoutWrapper>
      <SocialMedia variant='about' />
      <Circle src='/shapes/circle.svg' alt='' aria-hidden='true'></Circle>
    </FullWidthSection>
  );
}

export default ProfileCard;
