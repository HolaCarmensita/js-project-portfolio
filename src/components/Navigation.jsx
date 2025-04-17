function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navigation;
