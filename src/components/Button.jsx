//Done together with ChatGPT and the helo of "https://css-shape.com/wavy-line/" and @riklomas codepen https://codepen.io/riklomas/pen/erKJoN

import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import styled from 'styled-components';

const STROKE_WIDTH = 3;
const AMPLITUDE = 3;
const BASELINE = AMPLITUDE + STROKE_WIDTH / 2;
const WAVELENGTH = 30;
const ANG_FREQ = (2 * Math.PI) / WAVELENGTH;

const LinkWrapper = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding-bottom: ${STROKE_WIDTH * 2}px;
`;
const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  background: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
`;
const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
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
  const wrapperRef = useRef();
  const pathRef = useRef();
  const [width, setWidth] = useState(0);
  const t = useRef(0);
  const rafId = useRef();
  const animating = useRef(false);

  // draw one frame
  const drawWave = () => {
    if (!width || !pathRef.current) return;
    const pts = Array.from({ length: Math.ceil(width) }, (_, i) => {
      const y = BASELINE + AMPLITUDE * Math.sin(ANG_FREQ * i + t.current);
      return `${i},${y}`;
    }).join(' L');
    pathRef.current.setAttribute('d', `M${pts}`);
  };

  // animation loop
  const animate = () => {
    if (!animating.current) return;
    drawWave();
    t.current += 0.1;
    rafId.current = requestAnimationFrame(animate);
  };

  const enter = () => {
    if (!animating.current) {
      animating.current = true;
      animate();
    }
  };
  const leave = () => {
    animating.current = false;
  };

  // measure size after layout, and whenever it changes
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    const measure = (entry) => {
      setWidth(entry.contentRect.width);
    };
    const ro = new ResizeObserver((entries) => entries.forEach(measure));
    ro.observe(wrapperRef.current);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // redraw instantly if width updates
  useEffect(drawWave, [width]);

  const viewBoxH = AMPLITUDE * 2 + STROKE_WIDTH;

  const Wrapper = href ? LinkWrapper : ButtonWrapper;
  const props = href ? { href, target, rel } : { onClick, type };

  return (
    <Wrapper
      {...props}
      ref={wrapperRef}
      aria-label={ariaLabel}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {text}
      <WaveSvg
        viewBox={`0 0 ${width} ${viewBoxH}`}
        style={{ height: viewBoxH }}
      >
        <path
          ref={pathRef}
          stroke='#FF7300'
          strokeWidth={STROKE_WIDTH}
          fill='none'
          strokeLinecap='round'
        />
      </WaveSvg>
    </Wrapper>
  );
}
