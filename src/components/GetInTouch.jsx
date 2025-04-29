import SocialMedia from './SocialMedia';
import profile from '../data/profile.json';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const Background = styled.div`
  background-color: var(--color-purple);
  color: white;
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
  a {
    color: white;
    text-decoration: none;
  }
`;

function GetInTouch() {
  return (
    <Background>
      <LayoutWrapper>
        <GetInTouchSection id='contact'>
          <h2>Get in touch!</h2>
          <LinkContainer>
            <a
              href={`mailto:${profile.email}?subject=Contact from portfolio!`}
              aria-label={`Send an email to ${profile.email}`}
            >
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone}`}
              aria-label={`Call ${profile.phone}`}
            >
              {profile.phone}
            </a>
          </LinkContainer>
          <SocialMedia />
        </GetInTouchSection>
      </LayoutWrapper>
    </Background>
  );
}

export default GetInTouch;
