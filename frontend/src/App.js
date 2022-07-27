import Pagination from './components/Pagination.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  let pokemonArray = [];


  const getAllPokemons = async () => {
 
    axios.get(nextPageUrl).then(res => {
      setNextPageUrl(res.data.next)
      
      function createPokemonObject (pokemons){
        
        pokemons.forEach( async (pokemon) => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then (res => {
             
             setPokemons(currentList =>[...currentList,res.data])
             setPokemons.sort((a, b) => a.id > b.id ? 1 : -1)
          })
        })
      }
      createPokemonObject(res.data.results)
      

    })
    
    
  }
  console.log(nextPageUrl)
 

  

  useEffect(() => {
    getAllPokemons()

    
   }, [])

console.log(pokemons)

    return(
      <div>
         <div className="display">
          {
            pokemons.map((pokemon, index) =>
            <Dex
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            sprite = {pokemon.sprites.front_default}
            />

          )}
        
          
        </div>
        <button onClick={getAllPokemons}> Load More</button>

      </div>

    );
}

export default App;
