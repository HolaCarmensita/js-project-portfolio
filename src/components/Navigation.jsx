import styled from 'styled-components';

const Nav = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }
`;

function Navigation() {
  return (
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
  );
}

export default Navigation;
