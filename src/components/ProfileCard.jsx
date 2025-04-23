import profile from '../data/profile.json';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

function ProfileCard() {
  return (
    <ProfileCardContainer>
      <h2>Hi, I'm Casandra </h2>
      <ProfileImage src={profile.image} alt='Picture of Casandra' />
      <p>{profile.descriptionShort}</p>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
