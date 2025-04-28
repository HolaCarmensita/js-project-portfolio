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
  @media (min-width: 768px) {
    max-width: 650px;
  }
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

const H2 = styled.h2`
  ${appearAnimation}
`;

const P = styled.p`
  ${appearAnimation}
`;

const TextWrapper = styled.div`
  max-width: 650px;
`;

function ProfileCard() {
  return (
    <ProfileCardContainer>
      <H2>Hi, I'm Casandra </H2>
      <ProfileImage src={profile.image} alt='Picture of Casandra' />
      <TextWrapper>
        <P>{profile.descriptionShort}</P>
      </TextWrapper>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
