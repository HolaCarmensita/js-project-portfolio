import Button from './Button';

function Hero() {
  return (
    <section>
      <h1>Welcome!</h1>
      <p>This is my portfolio</p>
      {/* Get in touch knapp här*/}
      <Button text='Get In Touch' href='#contact' />
    </section>
  );
}

export default Hero;
