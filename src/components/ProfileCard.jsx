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

const SvgWrapper = styled.div`
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

      <SvgWrapper>
        <svg
          width='245'
          height='245'
          viewBox='0 0 245 245'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M122.5 245C190.155 245 245 190.155 245 122.5C245 54.8451 190.155 0 122.5 0C54.8451 0 0 54.8451 0 122.5C0 190.155 54.8451 245 122.5 245ZM122.5 196C163.093 196 196 163.093 196 122.5C196 81.9071 163.093 49 122.5 49C81.9071 49 49 81.9071 49 122.5C49 163.093 81.9071 196 122.5 196Z'
            fill='#34EDB3'
          />
        </svg>
      </SvgWrapper>
    </FullWidthSection>
  );
}

export default ProfileCard;
