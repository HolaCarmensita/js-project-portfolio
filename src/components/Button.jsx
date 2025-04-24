// Button.jsx
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

// ========= KONSTANTER FÖR VÅGEN =========
const STROKE_WIDTH = 3; // tjocklek på linjen
const AMPLITUDE = 3; // halva våghöjden i px (justera för högre/lägre toppar)
const BASELINE = AMPLITUDE + STROKE_WIDTH / 2;
// mittlinjen, så vågen är centrerad i viewBox
const WAVELENGTH = 30; // avstånd i px mellan två vågtoppar (justera för fler/färre vågor)
const ANGULAR_FREQ = (2 * Math.PI) / WAVELENGTH;

// ========= STYLADE COMPONENTS =========
const LinkWrapper = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding-bottom: ${STROKE_WIDTH * 2}px; /* utrymme för vågen */
`;

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  padding: 8px 16px;
  padding-bottom: ${STROKE_WIDTH * 2}px;
  cursor: pointer;
  font: inherit;
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

// ========= KOMPLETT COMPONENT =========
export default function Button({
  text,
  onClick,
  href,
  type = 'button',
  target,
  rel,
  ariaLabel,
}) {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
  const [widthPx, setWidthPx] = useState(0);
  const t = useRef(0);
  const rafId = useRef(null);
  const animating = useRef(false);

  // Ritar vågen inuti SVG:en
  const drawWave = () => {
    if (!widthPx || !pathRef.current) return;

    // Sampla varje px längs bredden
    const coords = Array.from({ length: Math.ceil(widthPx) }, (_, i) => {
      const y = BASELINE + AMPLITUDE * Math.sin(ANGULAR_FREQ * i + t.current);
      return `${i},${y}`;
    }).join(' L');

    pathRef.current.setAttribute('d', `M${coords}`);
  };

  // Animeringsloop
  const animate = () => {
    if (!animating.current) return;
    drawWave();
    t.current += 0.3; // hastighet
    rafId.current = requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    if (!animating.current) {
      animating.current = true;
      animate();
    }
  };
  const handleMouseLeave = () => {
    animating.current = false;
  };

  // Mät knappens bredd vid mount och rita första vågen
  useEffect(() => {
    const { width } = wrapperRef.current.getBoundingClientRect();
    setWidthPx(width);
    drawWave();
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // Rita om om bredden ändras (sällan efter första mount)
  useEffect(() => {
    drawWave();
  }, [widthPx]);

  // Räkna ut viewBox-höjden så att hela vågen + stroke får plats
  const viewBoxHeight = AMPLITUDE * 2 + STROKE_WIDTH;

  // Välj rätt wrapper (länk vs knapp)
  const Wrapper = href ? LinkWrapper : ButtonWrapper;
  const wrapperProps = href ? { href, target, rel } : { type, onClick };

  return (
    <Wrapper
      {...wrapperProps}
      ref={wrapperRef}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <WaveSvg
        viewBox={`0 0 ${widthPx} ${viewBoxHeight}`}
        style={{ height: `${viewBoxHeight}px` }}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          ref={pathRef}
          stroke='#FF7300'
          strokeWidth={STROKE_WIDTH}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </WaveSvg>
    </Wrapper>
  );
}
