import profile from '../data/profile.json';
import styled from 'styled-components';
import { opacityAppear } from '../styles/styled-utils';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import { slideUpAnimation } from '../styles/styled-utils';
import Button from './Button';

const ProfileCardContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    text-align: left;

    p {
      ${slideUpAnimation}

      font-size: 18px;
    }

    h3 {
      ${slideUpAnimation}
    }
  }
`;

const ProfileImage = styled.img`
  ${slideUpAnimation}
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const TextContainerMobile = styled.h3`
  ${slideUpAnimation}
  text-transform: none;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const TextContainerDesktop = styled.h3`
  ${slideUpAnimation}
  text-transform: none;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const FullWidthSection = styled.section`
  position: relative;
`;

function ProfileCard() {
  return (
    <FullWidthSection>
      <LayoutWrapper>
        <ProfileCardContainer>
          <TextContainerMobile>
            <h3>Hi there I'm Casandra A Frontend Developer</h3>
          </TextContainerMobile>
          <ProfileImage src={profile.image} alt='Picture of Casandra' />
          <TextContainerDesktop>
            <h3>Hi there I'm Casandra A Frontend Developer</h3>
            <p>{profile.descriptionShort}</p>
          </TextContainerDesktop>
          <Button text='Get In Touch' href='#contact' />s
        </ProfileCardContainer>
      </LayoutWrapper>

      {/* <div>
        <H3>Frontend Developer</H3>

        <P>{profile.descriptionShort}</P>
      </div> */}
      <SocialMedia variant='about' />
      <CircleLeft color='var(--color-magenta)' />
    </FullWidthSection>
  );
}

export default ProfileCard;
