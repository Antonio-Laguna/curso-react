# Guía de React con Hooks para principiantes

Código que acompaña a [éste artículo](https://antonio.laguna.es/posts/guia-react-para-principiantes-con-hooks/?utm_source=GitHub&utm_medium=Rama+Curso+React) y a [éste vídeo](https://www.youtube.com/watch?v=H_3IkTklcX8).

Creamos una pequeña aplicación con Create React App para seleccionar un gif de entre cuatro opciones.

```bash
$ npm install
$ npm start
```

## Reto 

¿Puedes hacer que la primera opción esté seleccionada y muestre el gif por defecto?

[Ver la solución en vídeo](https://www.youtube.com/watch?v=RZ6EVaxmtN4&t=1620s).

<details>
 <summary>Ver la solución en código</summary>

En App.js

```diff
function App() {
-  const [image, setImage] = useState(null);
+  const [image, setImage] = useState(gifs.dogs);

  return (
    <div>
      <form>
        <h1>¡Alégrate el día!</h1>

        <div className="fields">
-         <GifOption text="Gatos" onChange={() => setImage(gifs.cats)} />
+         <GifOption checked text="Gatos" onChange={() => setImage(gifs.cats)} />
          <GifOption text="Perros" onChange={() => setImage(gifs.dogs)} />
          <GifOption text="Nicholas Cage" onChange={() => setImage(gifs.cage)} />
          <GifOption text="Otro" onChange={() => setImage(gifs.other)} />
        </div>
        {image && (<img src={image} alt="" />)}
      </form>
    </div>
```

En GifOption.js

```diff
- export default function GifOption({ onChange, text }) {
+ export default function GifOption({ onChange, text, checked }) {
  return (
    <label>
-      <input type="radio" name="tipo" onChange={onChange} /> {text}
+      <input type="radio" name="tipo" checked={checked} onChange={onChange} /> {text}
    </label>
  );
}

GifOption.defaultProps = {
  checked: false
}
```
</details>

[Ir al inicio](https://github.com/Antonio-Laguna/curso-react)
