export default function GifOption({ onChange, text }) {
  return (
    <label>
      <input type="radio" name="tipo" onChange={onChange} /> {text}
    </label>
  );
}
