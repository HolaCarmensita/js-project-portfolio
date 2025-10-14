import SocialMedia from './SocialMedia';
import profile from '../data/profile.json';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const GetInTouchSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmailLink = styled.a`
  color: var(--link-color);
  text-decoration: underline;
  text-decoration-color: var(--link-color);
  text-decoration-thickness: 2px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: text-decoration-color 0.3s ease;

  &:hover {
    text-decoration-color: var(--color-accent);
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

function GetInTouch() {
  return (
    <Background id='contact'>
      <LayoutWrapper>
        <GetInTouchSection>
          <h2>Get in touch! / ¡Hablemos!</h2>
          <LinkContainer>
            <EmailLink
              href={`mailto:${profile.email}?subject=Contact from portfolio!`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Send an email to ${profile.email}`}
            >
              {profile.email}
            </EmailLink>

            {/* <a
              href={`tel:${profile.phone}`}
              aria-label={`Call ${profile.phone}`}
            >
              {profile.phone}
            </a> */}
          </LinkContainer>
          <SocialMedia />
        </GetInTouchSection>
      </LayoutWrapper>
    </Background>
  );
}

export default GetInTouch;
