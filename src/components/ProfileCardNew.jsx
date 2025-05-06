import profile from '../data/profile.json';
import styled from 'styled-components';
import { opacityAppear } from '../styles/styled-utils';
import SocialMedia from './SocialMedia';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import { slideUpAnimation, appearAnimation } from '../styles/styled-utils';
import Button from './Button';

const ProfileCardContainer = styled.div`
  ${appearAnimation}
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
`;

const TextContainerDesktop = styled.div`
  text-transform: none;
  display: none;

  @media (min-width: 1025px) {
    text-align: left;
    display: block;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      text-transform: none;
    }
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  max-width: fit-content;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  @media (min-width: 1024px) {
    max-width: 40vw;
    height: 500px;
  }
`;

const TextContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h3 {
    text-transform: none;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const TitleContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-transform: none;
  }

  @media (min-width: 1025px) {
    display: none;
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
          <TitleContainerMobile>
            <h3>
              Welcome, I'm
              <a
                href='https://github.com/HolaCarmensita'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                @Holacarmecita
              </a>
              /
            </h3>
            <h2>Casandra</h2>
          </TitleContainerMobile>
          <ProfileImage src={profile.image} alt='Picture of Casandra' />
          <TextContainerDesktop>
            <div>
              <h3>
                Welcome, I'm
                <a
                  href='https://github.com/HolaCarmensita'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @Holacarmecita
                </a>
                /
              </h3>
              <h2>Casandra</h2>
            </div>
            <div>
              <p>{profile.descriptionShort}</p>
              <p>Ready to build increíble things together?</p>
              <ButtonWrapper>
                <Button text='¡Lets talk!' href='#contact' />
              </ButtonWrapper>
            </div>
          </TextContainerDesktop>
          <TextContainerMobile>
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
        </ProfileCardContainer>
      </LayoutWrapper>
      <SocialMedia variant='about' />
      <CircleLeft color='var(--color-magenta)' YPosition='90%' />
    </FullWidthSection>
  );
}

export default ProfileCard;
