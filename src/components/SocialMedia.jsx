import profile from '../data/profile.json';
import styled, { css } from 'styled-components';
import { slideUpAnimationFast } from '../styles/styled-utils';

const StyledSocialWrapper = styled.ul`
  // (mobile)
  display: ${({ visibility }) => (visibility === 'desktop' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 1.5rem;

  //Vertikal, absolut-variant
  ${({ $variant }) =>
    $variant === 'verticalAbsolute' &&
    css`
      flex-direction: column;
      position: absolute;
      top: 50%;
      right: 5rem;
      gap: 3rem;
      transform: translateY(-50%);
    `}

  //Desktop-skriver över
  @media (min-width: 1024px) {
    display: ${({ visibility }) => (visibility === 'mobile' ? 'none' : 'flex')};
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li a {
    transition: transform 0.3s ease, filter 0.3s ease;
    display: inline-block;
  }

  li a:hover,
  li a:focus {
    transform: scale(1.2);
    filter: brightness(1.2);
  }
`;

function SocialMedia({ variant = 'horizontal', visibility = 'all' }) {
  return (
    <StyledSocialWrapper $variant={variant} visibility={visibility}>
      {Object.entries(profile.socialMedia).map(([key, media]) => (
        <li key={key}>
          <a
            href={media.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Link to my ${key} profile`}
            title={key}
          >
            <img src={media.icon} alt='' />
          </a>
        </li>
      ))}
    </StyledSocialWrapper>
  );
}

export default SocialMedia;
