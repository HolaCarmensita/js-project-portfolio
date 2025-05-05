import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Custom font */
  @font-face {
    font-family: 'TAN-Rosebud';
    src: url('/fonts/TAN-Rosebud.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* CSS Variables */
  :root {
    font-size: 16px;
    --font-main: 'Belgrano', serif;
    ${'' /* --font-main: 'Aileron Regular', sans-serif; */}
    --font-display: 'TAN-Rosebud', serif;
    --font-alt: 'Lexend', sans-serif;
    --color-bg: #FAFBF4;
    --color-text: #584793;
    --color-accent: #FF7300;
    --color-purple: #584793;
    --color-magenta: #34EDB3;
    --color-mustard: #FFBF00;
    --link-color: #584793;
    --link-hover-color: #FFBF00;
  }

  /* Global Reset & Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

    html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%; /*Vet ej om jag behöver denna men ev vid sticky footer etc*/
    font-family: var(--font-main);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
      overflow-x: clip;

  }

  #root {
    isolation: isolate;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

h1 {
  font-size: 3rem; //48px om vi har basic font på 16px
  text-transform: uppercase;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

}

h2{
  font-size: 2rem;
      text-transform: uppercase;
            font-weight: 300;
  @media (min-width: 768px) {
    font-size: 4rem;
  }

}


h3{
  font-size: 1.5rem;
      text-transform: uppercase;
            font-weight: 300;
 @media (min-width: 768px) {
    font-size: 2rem;
  }

}


  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  a, button {
    cursor: pointer;
  }

  a {
  color: var(--link-color);
}

  a:hover {
  font-weight: 600;
}

  a:visited {
  color: var(--link-color);
}


/* Style */



  /* Accessibilty*/

html.dyslexic {
  --font-main: var(--font-alt);
}

`;

export default GlobalStyle;
