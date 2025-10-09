import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import AboutMeNew from './components/AboutMeNew';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <IntroSection />
        <AboutMeNew />
        <Skills />
        <Projects />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
};
