import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import AboutMeNew from './components/AboutMeNew';

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
        <AboutMeNew />

        <Projects />

        <GetInTouch />
      </main>
      <Footer />
    </>
  );
};
