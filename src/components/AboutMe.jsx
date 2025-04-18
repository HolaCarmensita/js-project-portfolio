import ProfileCard from './ProfileCard';
import SocialMedia from './SocialMedia';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <h1 className='text-4xl font-rosebud text-center'>
        Nu borde Tailwind använda Rosebud! ✨
      </h1>
      <ProfileCard />
      <SocialMedia />
    </section>
  );
}

export default AboutMe;
