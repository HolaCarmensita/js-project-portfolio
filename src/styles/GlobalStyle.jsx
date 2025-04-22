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
    --font-main: 'Belgrano', serif;

    ${'' /* --font-main: 'Aileron Regular', sans-serif; */}
    --font-display: 'TAN-Rosebud', serif;
    --font-alt: 'Lexend', sans-serif;

    --color-bg: #ffffff;
    --color-text: #1e1e1e;
    --color-accent: #e91e63;
    
  }

  /* Global Reset & Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%; /*Vet ej om jag behöver denna men ev vid sticky footer etc*/
    font-family: var(--font-main);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
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


/* Style */
section {
  min-height: 100vh;
}


  /* Accessibilty*/

html.dyslexic {
  --font-main: var(--font-alt);
}
  
`;

export default GlobalStyle;
