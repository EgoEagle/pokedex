
import NavBar from './components/NavBar.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  let flag = false;
  pokemons.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  let cancel

  const getAllPokemons = async () => {
 
    axios.get(nextPageUrl,{
      cancelToken: new axios.CancelToken( c =>  cancel = c)
    }).then(res => {
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
    return () =>  cancel()
    
    
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
            flag = { pokemon.types.length>1 ? true : false}
            type2 = {pokemon.types.length>1 ? pokemon.types[1].type.name : null}
            hp = {pokemon.stats[0].base_stat}
            atk = {pokemon.stats[1].base_stat}
            def = {pokemon.stats[2].base_stat}
            spatk = {pokemon.stats[3].base_stat}
            spdef = {pokemon.stats[4].base_stat}
            spd = {pokemon.stats[5].base_stat}
          

            

            weight={pokemon.weight}
            sprite = {pokemon.sprites.front_default}
            form = {pokemon.forms[0].name}
            species = {pokemon.species.name}
            descriptionUrl = {pokemon.species.url}
            abilities = {pokemon.abilities[0].ability.name}
            />

          )}
          
        
        </div>
        <button className="load" onClick={getAllPokemons}> Load More</button>

      </div>
/////
    );
}

export default App;
