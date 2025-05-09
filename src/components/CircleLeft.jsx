import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  width: 30vw;
  max-width: 250px;
  position: absolute;
  top: ${({ $YPosition }) => $YPosition};
  transform: translate(-50%, -50%);

  /* Default visibility logic */
  display: ${({ $mobile }) => ($mobile === false ? 'none' : 'inline-block')};

  /* Mobile adjustments (show it only on mobile if $mobile is true) */
  @media (max-width: 768px) {
    display: ${({ $mobile }) =>
      $mobile === true
        ? 'inline-block'
        : 'none'}; /* Show on mobile, hide on desktop */
  }

  /* Desktop adjustments */
  @media (min-width: 768px) {
    display: ${({ $mobile }) =>
      $mobile === true
        ? 'none'
        : 'inline-block'}; /* Hide on mobile, show on desktop */
  }
`;

// OBS USE LIKE THIS <CircleLeft color="#584793" /> or <CircleLeft color="hsl(168, 90%, 52%)" /> or <CircleLeft color="rebeccapurple" <CircleLeft visibility="mobile" <CircleLeft visibility="desktop" />
function CircleLeft({
  color = '#34EDB3',
  YPosition = '50%',
  visibility = 'all',
  $mobile = true,
}) {
  return (
    <SvgWrapper
      $YPosition={YPosition}
      $visibility={visibility}
      $mobile={$mobile}
    >
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

export default CircleLeft;
