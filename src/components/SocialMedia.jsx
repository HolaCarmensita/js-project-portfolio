import profile from '../data/profile.json';
import styled from 'styled-components';

const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

function SocialMedia() {
  return (
    <SocialMediaList>
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
    </SocialMediaList>
  );
}

export default SocialMedia;
