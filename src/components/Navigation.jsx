import styled from 'styled-components';
import { useEffect, useState } from 'react';

//Done together with ChatGPT

const NavWrapper = styled.nav`
  position: fixed;
  left: 3rem;
  top: 2.1rem;
  transform: ${({ $sticky }) =>
    $sticky ? 'translateY(0)' : 'translateY(calc(100vh - 11rem))'};
  transition: transform 1.5s ease-in-out;
  z-index: 1000;

  @media (max-width: 767px) {
    display: none;
  }

  @media only screen and (max-width: 1000px) and (orientation: landscape) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
  }
`;

function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeId, setActiveId] = useState('');

  // 1) On mount: grab any #hash, set active, strip it from URL
  useEffect(() => {
    const rawHash = window.location.hash.replace('#', '');
    if (rawHash) {
      setActiveId(rawHash);
      window.history.replaceState(null, '', rawHash);
      // optional: scroll into view if you need it
      // document.getElementById(rawHash)?.scrollIntoView({ block: 'start' });
    }
  }, []);

  // 2) Show nav when scrolling past 100px
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3) Observe sections to update URL & active link
  useEffect(() => {
    const ids = ['hola', 'about', 'projects', 'contact'];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
            window.history.replaceState(null, '', id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Render
  return (
    <NavWrapper $sticky={isSticky}>
      <NavList>
        {['hola', 'about', 'projects', 'contact'].map((id) => (
          <li key={id}>
            <NavLink
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault(); // stop the #hash jump
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.replaceState(null, '', id);
                setActiveId(id);
              }}
              className={activeId === id ? 'active' : ''}
            >
              {id === 'hola'
                ? 'Hola!'
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </NavLink>
          </li>
        ))}
      </NavList>
    </NavWrapper>
  );
}

export default Navigation;
