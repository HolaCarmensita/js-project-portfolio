import profile from '../data/profile.json';
import styled from 'styled-components';
import { appearAnimation } from '../styles/styled-utils';
import { circleGrowIn } from '../styles/styled-utils';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';

const ProfileCardContainer = styled.div`
  min-height: 100vh;
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
  width: 100vw; /* Full viewport-bredd */
  height: 100vh; /* Full höjd */
  background-color: lightblue;
`;

const AbsoluteElement = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: coral;
  width: 100px;
  height: 100px;
`;
function ProfileCard() {
  return (
    <ProfileCardContainer>
      <h1>Hi, I'm Casandra </h1>
      <ProfileImage src={profile.image} alt='Picture of Casandra' />
      <P>{profile.descriptionShort}</P>

      <SocialMedia variant='about' />
    </ProfileCardContainer>
  );
}

export default ProfileCard;
