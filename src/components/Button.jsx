// Button.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// Skapa X‐värden 0…173 för att täcka hela viewBox‐bredden
const xs = Array.from({ length: 174 }, (_, i) => i);

// Parametrar från din waveOrange.svg
const BASELINE = 5.5; // mittlinje
const AMPLITUDE = 4.6667; // ±4.6667px
const DIVISOR = 173 / (2 * Math.PI * 4.5);

// Styled Components
const LinkWrapper = styled.a`
  position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;
  padding-bottom: 12px; /* ger plats åt vågen */
`;

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 8px 16px;
  padding-bottom: 12px;
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 11px; /* matchar SVG‐höjden */
  pointer-events: none;
`;

export default function Button({
  text,
  onClick,
  href,
  type = 'button',
  target,
  rel,
  ariaLabel,
}) {
  const pathRef = useRef(null);
  const t = useRef(0);
  const rafId = useRef(0);
  const animating = useRef(false);

  // Ritar vågen utifrån BASELINE, AMPLITUDE, DIVISOR och aktuell t
  const drawWave = () => {
    const d = xs
      .map((x) => {
        const y = BASELINE + AMPLITUDE * Math.sin((x + t.current) / DIVISOR);
        return `${x},${y}`;
      })
      .join(' L');
    if (pathRef.current) {
      pathRef.current.setAttribute('d', `M${d}`);
    }
  };

  // Loop‐funktion
  const animate = () => {
    if (!animating.current) return;
    drawWave();
    t.current += 0.6; // justera hastighet om du vill
    rafId.current = requestAnimationFrame(animate);
  };

  // Startar animation på hover
  const handleMouseEnter = () => {
    if (!animating.current) {
      animating.current = true;
      animate();
    }
  };
  // Stoppar animation när musen lämnar
  const handleMouseLeave = () => {
    animating.current = false;
    // t.current = 0; drawWave(); // om du vill nollställa vågen
  };

  // Initialritning + städning
  useEffect(() => {
    drawWave();
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // Välj wrapper beroende på om det är en länk eller knapp
  const Wrapper = href ? LinkWrapper : ButtonWrapper;
  const wrapperProps = href ? { href, target, rel } : { type, onClick };

  return (
    <Wrapper
      {...wrapperProps}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <WaveSvg viewBox='0 0 173 11' xmlns='http://www.w3.org/2000/svg'>
        <path
          ref={pathRef}
          stroke='#FF7300'
          strokeWidth='6'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </WaveSvg>
    </Wrapper>
  );
}
