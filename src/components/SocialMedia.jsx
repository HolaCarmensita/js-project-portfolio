import profile from '../data/profile.json';

function SocialMedia() {
  return (
    <ul className='social-media-list'>
      {Object.entries(profile.socialMedia).map(([key, media]) => (
        <li key={key}>
          <a
            href={media.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={key}
            title={key}
          >
            <img src={media.icon} alt='' />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
