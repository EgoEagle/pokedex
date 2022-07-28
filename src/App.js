
import NavBar from './components/NavBar.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  let pokemonArray = [];
  pokemons.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))


  const getAllPokemons = async () => {
 
    axios.get(nextPageUrl).then(res => {
      setNextPageUrl(res.data.next)
      
      function createPokemonObject (pokemons){
        
        pokemons.forEach( async (pokemon) => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then (res => {
            pokemons.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            setPokemons(currentList =>[...currentList,res.data])

          })

          pokemons.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        })
        

      }

      createPokemonObject(res.data.results)
      

    })
    
    
  }


  useEffect(() => {
    getAllPokemons()

    
   }, [])

    return(
      <div className="displayDiv">
        <NavBar/>
         <div className="display">
          {
            pokemons.map((pokemon, index) =>
            <Dex
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            weight={pokemon.weight}
            sprite = {pokemon.sprites.front_default}
            form = {pokemon.forms[0].name}
            species = {pokemon.species.name}
            descriptionUrl = {pokemon.species.url}
            />

          )}
        
          
        </div>
        <button className="load" onClick={getAllPokemons}> Load More</button>

      </div>

    );
}

export default App;
