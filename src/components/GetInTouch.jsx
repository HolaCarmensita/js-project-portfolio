import SocialMedia from './SocialMedia';
import profile from '../data/profile.json';

function GetInTouch() {
  return (
    <section>
      <h2>Get in touch</h2>
      <dl className='contact-info'>
        <dt>Email:</dt>
        <dd>
          <a
            href={`mailto:${profile.email}?subject=Contact from portfolio!`}
            aria-label={`Send an email to ${profile.email}`}
          >
            {profile.email}
          </a>
        </dd>

        <dt>Phone:</dt>
        <dd>
          <a href={`tel:${profile.phone}`} aria-label={`Call ${profile.phone}`}>
            {profile.phone}{' '}
          </a>
        </dd>
      </dl>
      <SocialMedia />
    </section>
  );
}

export default GetInTouch;
