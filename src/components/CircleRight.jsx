import React from 'react';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  width: 30vw;
  max-width: 250px;
  position: absolute;
  top: ${({ $YPosition }) => $YPosition};
  right: 0;
  transform: translate(50%, -50%);

  /* Default mobil */
  display: ${({ $visibility }) =>
    $visibility === 'desktop' ? 'none' : 'inline-block'};

  /* Desktop skriver över */
  @media (min-width: 768px) {
    display: ${({ $visibility }) =>
      $visibility === 'mobile' ? 'none' : 'inline-block'};
    width: 15vw;
    max-width: 250px;
  }
`;

// color(default: '#34EDB3')
// YPosition: CSS value for top (default: '50%')
// visibility: 'all' | 'mobile' | 'desktop' (default: 'all')
function CircleRight({
  color = '#34EDB3',
  YPosition = '50%',
  visibility = 'all',
}) {
  return (
    <SvgWrapper $YPosition={YPosition} $visibility={visibility}>
      <svg
        width='245'
        height='245'
        viewBox='0 0 245 245'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M122.5 245C190.155 245 245 190.155 245 122.5C245 54.8451 190.155 0 122.5 0C54.8451 0 0 54.8451 0 122.5C0 190.155 54.8451 245 122.5 245ZM122.5 196C163.093 196 196 163.093 196 122.5C196 81.9071 163.093 49 122.5 49C81.9071 49 49 81.9071 49 122.5C49 163.093 81.9071 196 122.5 196Z'
          fill={color}
        />
      </svg>
    </SvgWrapper>
  );
}

export default CircleRight;
