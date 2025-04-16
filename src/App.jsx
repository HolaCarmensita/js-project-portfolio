import Navigation from './components/navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';

export const App = () => {
  return (
    <>
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
    </>
  );
};
