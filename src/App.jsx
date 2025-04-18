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
      <div className='p-10 bg-yellow-200 text-center'>
        <h1 className='text-4xl font-bold underline text-pink-700 font-rosebud'>
          Tailwind works! WOHOOO!!!
        </h1>
        <h1 className="text-4xl font-['TAN-Rosebud'] text-center">
          Nu använder vi TAN Rosebud direkt ✨
        </h1>
        <ToggleFontButton />
        <p className='font-(family-name:--font-main)'>
          Den här texten växlar font med knappen ovan 👆
        </p>
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
