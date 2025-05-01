import styled from 'styled-components';
import { useEffect, useState } from 'react';

const NavWrapper = styled.nav`
  position: fixed;
  left: 3rem;
  top: 3rem;
  transform: ${({ $sticky }) =>
    $sticky ? 'translateY(0)' : 'translateY(calc(100vh - 13rem))'};
  transition: transform 1.5s ease-in-out;
  z-index: 1000;

  @media (max-width: 767px) {
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

  // stick nav in when scrolling past 100px
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // observe only elements with IDs
  useEffect(() => {
    const sectionIds = ['intro', 'about', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -99% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <NavWrapper $sticky={isSticky}>
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
    </NavWrapper>
  );
}

export default Navigation;
