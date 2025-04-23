//Done with ChatGPT and @riklomas codepen: Making an animated wave

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const xs = Array.from({ length: 501 }, (_, i) => i);

const LinkWrapper = styled.a`
  position: relative;
  display: inline-block;
  color: var(--color-text);
  text-decoration: none;
  padding-bottom: 60px; /* ge plats åt högre våg */
`;

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  color: var(--color-accent);
  font: inherit;
  padding: 12px 24px;
  cursor: pointer;
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* gör SVG:en högre */
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
  const rafId = useRef(null);
  const animating = useRef(false);

  // Konstanter för större våg
  const SVG_HEIGHT = 100; // px
  const BASELINE = SVG_HEIGHT / 2; // mitten = 50px
  const AMPLITUDE = 16; // våghöjd = ±30px
  const SPEED = 1; // kan justeras

  const drawWave = () => {
    const points = xs
      .map((x) => {
        const y = BASELINE + AMPLITUDE * Math.sin((x + t.current) / 24);
        return `${x},${y}`;
      })
      .join(' L');
    pathRef.current.setAttribute('d', `M${points}`);
  };

  const animate = () => {
    if (!animating.current) return;
    drawWave();
    t.current += SPEED;
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

  useEffect(() => {
    drawWave();
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const Wrapper = href ? LinkWrapper : ButtonWrapper;

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      type={type}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ paddingBottom: `${SVG_HEIGHT * 0.6}px` }} // dynamisk padding
    >
      {text}
      <WaveSvg viewBox={`0 0 500 ${SVG_HEIGHT}`}>
        <path
          ref={pathRef}
          stroke='var(--color-accent)'
          strokeWidth='16'
          fill='none'
          strokeLinecap='round'
        />
      </WaveSvg>
    </Wrapper>
  );
}
