import Navigation from './components/navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
      <div className='p-10 bg-yellow-200 text-center'>
        <h1 className='text-4xl font-bold underline text-pink-700 font-rosebud'>
          Tailwind works! WOHOOO!!!
        </h1>
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
