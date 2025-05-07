import profile from '../data/profile.json';
import styled from 'styled-components';
import { slideUpAnimationFast } from '../styles/styled-utils';

const StyledSocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;

  @media (min-width: 1024px) {
    gap: 3rem;
  }

  li a {
    display: inline-block;
    transition: transform 0.3s ease, filter 0.3s ease;

    @media (min-width: 1024px) {
      scale: 1.1;
    }
  }

  li a:hover,
  li a:focus {
    transform: scale(1.2);
    filter: brightness(1.2);
  }

  ${({ $variant }) =>
    $variant === 'about' &&
    `
    // @media (min-width: 1024px) {
    // position: absolute;
    // float: right; 
    // top: 50%;
    // right: 5rem;
    // gap: 3rem;
    // transform: translateY(-50%);
    // flex-direction: column;
    // align-items: center;
    //  }

          @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      }

  
  `}
`;

function SocialMedia({ variant }) {
  return (
    <StyledSocialWrapper $variant={variant}>
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
