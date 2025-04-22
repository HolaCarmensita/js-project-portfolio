import Navigation from './components/navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import ToggleFontButton from './components/ToggleFontButton';

export const App = () => {
  return (
    <>
      <div>
        <h1>HOLA WELCOME</h1>
        <ToggleFontButton />
        <p>Den här texten växlar font med knappen ovan 👆</p>
      </div>

      <Navigation />

      <main>
        <section id='intro'>
          <Hero />
        </section>

        <section id='about'>
          <AboutMe />
        </section>

        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='contact'>
          <GetInTouch />
        </section>
      </main>
      <Footer />
    </>
  );
};
