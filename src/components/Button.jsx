function Button({
  text,
  onClick,
  href,
  type = 'button',
  target,
  rel,
  ariaLabel,
}) {
  // Om det finns en href, för mitt resume tex
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className='button'
      ></a>
    );
  }

  // Annars rendera som vanlig <button>  med en onlick-funktion, för mitt önskade dark-mode eller accessibility-button
  return (
    <button
      type={type}
      onClick={onClick}
      className='button'
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}

export default Button;
