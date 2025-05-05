import profile from '../data/profile.json';
import styled from 'styled-components';
import {
  tittutAnimationSmall,
  tittutAnimation,
  appearAnimation,
} from '../styles/styled-utils';
import { opacityAppear } from '../styles/styled-utils';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';

const ProfileCardContainer = styled.div`
  position: relative;
  gap: 1rem;
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

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const H3 = styled.h3`
  text-transform: none;
`;

const H2 = styled.h2``;

const P = styled.p`
  max-width: 650px;
`;

const FullWidthSection = styled.section`
  position: relative;
`;

function ProfileCard() {
  return (
    <FullWidthSection>
      <LayoutWrapper>
        <ProfileCardContainer>
          <H3>Hi there I'm, </H3>
          <H2>Casandra</H2>
          <ProfileImage src={profile.image} alt='Picture of Casandra' />

          <H3>Frontend Developer</H3>

          <P>{profile.descriptionShort}</P>
        </ProfileCardContainer>
      </LayoutWrapper>
      <SocialMedia variant='about' />
      <CircleLeft color='var(--color-magenta)' />
    </FullWidthSection>
  );
}

export default ProfileCard;
