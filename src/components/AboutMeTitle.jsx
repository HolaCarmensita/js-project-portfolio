import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const TitleDesktop = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 6rem;
  h3 {
    text-transform: none;
  }
`;

function AboutMeTitle() {
  return (
    <TitleDesktop>
      <h3>Hola! I'm</h3>
      <h1>Casandra</h1>
      <p>@Github HolaCarmensita</p>
    </TitleDesktop>
  );
}

export default AboutMeTitle;
