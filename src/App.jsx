import Navigation from './components/navigation';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import ToggleFontButton from './components/ToggleFontButton';
import MiddleSection from './components/MiddleSection';

import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div>
        <ToggleFontButton />
      </div> */}

      <Navigation />

      <main>
        <IntroSection />

        <MiddleSection shapeSrc='/shapes/waveOrange.svg' />

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
