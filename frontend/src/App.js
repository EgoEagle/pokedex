import Display from './components/Display.js';
import Dex from './components/Dex.js';
import React , {useState} from 'react';


function App() {
  const[pokemon, setPokemon] = useState(["charmander","bulbasaur"]);

    return(
      <div>
        <Dex pokemon = {pokemon} />
      </div>

    )
}

export default App;
