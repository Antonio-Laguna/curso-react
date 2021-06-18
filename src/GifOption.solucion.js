export default function GifOption({ onChange, text, checked }) {
  return (
    <label>
      <input type="radio" name="tipo" checked={checked} onChange={onChange} /> {text}
    </label>
  );
}

GifOption.defaultProps = {
  checked: false
}
