import { useEffect, useState } from 'react';

function ToggleFontButton() {
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
    <button
      onClick={() => setIsDyslexic((prev) => !prev)}
      className='px-4 py-2 border rounded font-bold'
      aria-pressed={isDyslexic}
      aria-label='Toggle dyslexia-friendly font'
    >
      {isDyslexic ? 'Standard font' : 'Dyslexia-friendly font'}
    </button>
  );
}

export default ToggleFontButton;
