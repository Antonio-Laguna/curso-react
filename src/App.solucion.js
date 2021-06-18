import { useState } from 'react';
import GifOption from './GifOption';

const gifs = {
  cage: 'https://media4.giphy.com/media/12A3hKKsewxtGE/giphy.gif',
  cats: 'https://media3.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
  dogs: 'https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
  other: 'https://media0.giphy.com/media/3RBctIB0FOiHe/giphy.gif'
};

function App() {
  const [image, setImage] = useState(gifs.dogs);

  return (
    <div>
      <form>
        <h1>¡Alégrate el día!</h1>

        <div className="fields">
          <GifOption checked text="Gatos" onChange={() => setImage(gifs.cats)} />
          <GifOption text="Perros" onChange={() => setImage(gifs.dogs)} />
          <GifOption text="Nicholas Cage" onChange={() => setImage(gifs.cage)} />
          <GifOption text="Otro" onChange={() => setImage(gifs.other)} />
        </div>
        {image && (<img src={image} alt="" />)}
      </form>
    </div>
  );
}

export default App;
