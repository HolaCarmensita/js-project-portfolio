import Button from './Button';

function ProfileCard() {
  return (
    <div>
      <img src='/path-to-img.jpg' alt='Your Name' />
      <h3>Your Name</h3>
      <p>Short intro about yourself</p>
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
