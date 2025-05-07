import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Switch = styled.span`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  background-color: ${({ active }) =>
    active ? 'var(--color-accent)' : '#ccc'};
  border-radius: 34px;
  transition: background-color 0.3s ease;
`;

const Slider = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? 'translateX(22px)' : 'translateX(0)')};
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

function ToggleFontSwitch() {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDyslexic) {
      html.classList.add('dyslexic');
    } else {
      html.classList.remove('dyslexic');
    }
  }, [isDyslexic]);

  return (
    <SwitchContainer aria-label='Toggle read-friendly font'>
      <HiddenCheckbox
        checked={isDyslexic}
        onChange={() => setIsDyslexic((prev) => !prev)}
        aria-pressed={isDyslexic}
      />
      <Switch active={isDyslexic}>
        <Slider active={isDyslexic} />
      </Switch>
      <span>{isDyslexic ? 'Standard font' : 'Read-friendly font'}</span>
    </SwitchContainer>
  );
}

export default ToggleFontSwitch;
