import React, { useRef, useEffect, useState } from 'react';
import ProfileCardNew from './ProfileCardNew';
import Button from './Button';
import styled from 'styled-components';
import Skills from './Skills';
import CircleLeft from './CircleLeft';
import SocialMedia from './SocialMedia';

const AboutSection = styled.section`
  position: relative;
  min-height: 100vh;
`;

const SocialWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  /* Wrappern släpper igenom alla events */
  pointer-events: none;

  /* Endast barn-komponenten (SocialMedia) kan få events när synlig */
  & > * {
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  }
`;

const CornerButtonWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    position: fixed;
    top: 2rem;
    right: 3rem;
    z-index: 1000;
    display: block;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
    transition: opacity 0.5s ease-in-out;
  }
`;

function AboutMeNew() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 0.3; // 30 % av sektionen

    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Beräkna synlig höjd av sektionen:
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(visibleHeight / rect.height, 1));

      // Sätt isVisible = true när ≥ threshold är synligt
      setIsVisible(ratio >= threshold);
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // kör direkt för initial state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AboutSection id='about' ref={sectionRef}>
      <CornerButtonWrapper $visible={isVisible}>
        <Button
          text='Resume here'
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
        />
      </CornerButtonWrapper>

      <SocialWrapper $visible={isVisible}>
        <SocialMedia variant='verticalAbsolute' visibility='desktop' />
      </SocialWrapper>

      <ProfileCardNew />
      <Skills />
      {/* ... */}
    </AboutSection>
  );
}

export default AboutMeNew;
