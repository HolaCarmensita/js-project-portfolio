import SocialMedia from './SocialMedia';
import profile from '../data/profile.json';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const GetInTouchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--color-purple);
  color: white;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function GetInTouch() {
  return (
    <LayoutWrapper>
      <GetInTouchSection id='contact'>
        <h2>Get in touch</h2>
        <LinkContainer>
          <a
            href={`mailto:${profile.email}?subject=Contact from portfolio!`}
            aria-label={`Send an email to ${profile.email}`}
          >
            {profile.email}
          </a>

          <a href={`tel:${profile.phone}`} aria-label={`Call ${profile.phone}`}>
            {profile.phone}{' '}
          </a>
        </LinkContainer>
        <SocialMedia />
      </GetInTouchSection>
    </LayoutWrapper>
  );
}

export default GetInTouch;
