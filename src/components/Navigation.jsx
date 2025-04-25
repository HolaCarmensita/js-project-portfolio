import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Nav = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavWrapper = styled.nav`
  position: fixed;
  left: 3rem;
  top: ${({ sticky }) => (sticky ? '3rem' : 'calc(100vh - 10rem)')};
  transition: top 1.5s ease-in-out;
  z-index: 1000;
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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // triggers när mitten av sektionen är synlig
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <NavWrapper sticky={isSticky}>
      <Nav>
        <NavList>
          <li>
            <NavLink
              href='#intro'
              aria-label='Go to the intro section'
              className={activeId === 'intro' ? 'active' : ''}
            >
              Hola!
            </NavLink>
          </li>
          <li>
            <NavLink
              href='#about'
              aria-label='Go to about me section'
              className={activeId === 'about' ? 'active' : ''}
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              href='#projects'
              aria-label='Go to featured projects section'
              className={activeId === 'projects' ? 'active' : ''}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              href='#contact'
              aria-label='Go to get in touch section'
              className={activeId === 'contact' ? 'active' : ''}
            >
              Get in touch
            </NavLink>
          </li>
        </NavList>
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;
