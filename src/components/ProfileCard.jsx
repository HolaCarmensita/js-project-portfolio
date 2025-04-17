import Button from './Button';
import profile from '../data/profile.json';

function ProfileCard() {
  return (
    <div>
      <img
        src={profile.image}
        alt='Picture of Casandra'
        style={{ width: '450px', height: '300px', objectFit: 'cover' }}
      />
      <h3>Casandra Gustafsson</h3>
      <p>{profile.descriptionShort}</p>
      <Button
        text='Resume'
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
      />
    </div>
  );
}

export default ProfileCard;
