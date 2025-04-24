import profile from '../data/profile.json';
import styled from 'styled-components';
import { appearAnimation } from '../styles/styled-utils';
import { circleGrowIn } from '../styles/styled-utils';

const ProfileCardContainer = styled.div`
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
`;

const H2 = styled.h2`
  ${appearAnimation}
`;

const P = styled.p`
  ${appearAnimation}
`;

function ProfileCard() {
  return (
    <ProfileCardContainer>
      <H2>Hi, I'm Casandra </H2>
      <ProfileImage src={profile.image} alt='Picture of Casandra' />
      <P>{profile.descriptionShort}</P>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
