import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Nav = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavWrapper = styled.nav`
  position: fixed;
  left: 2rem;
  top: ${({ sticky }) => (sticky ? '3rem' : '80vh')};
  transition: top 2s ease-in-out;
  z-index: 1000;
`;

function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavWrapper sticky={isSticky}>
      <Nav>
        <ul>
          <li>
            <a href='#intro' aria-label='Go to the intro section'>
              Hola!
            </a>
          </li>
          <li>
            <a href='#about' aria-label='Go to about me section'>
              About me
            </a>
          </li>
          <li>
            <a href='#projects' aria-label='Go to featured projects section'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' aria-label='Go to get in touch section'>
              Get in touch
            </a>
          </li>
        </ul>
      </Nav>
    </NavWrapper>
  );
}

export default Navigation;
