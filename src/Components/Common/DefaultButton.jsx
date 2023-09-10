function DefaultButton({ text, onClick, style, className }) {
  return (
    <button onClick={onClick} style={style} className={className}>
      {text}
    </button>
  );
}

export default DefaultButton;
