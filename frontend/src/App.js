import Pagination from './components/Pagination.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios'


function App() {
  const [pokemons, setPokemons] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const [loading, setLoading] = useState(true)




const getAllPokemons = async () => {
 

    axios.get(nextPageUrl
      .then(res => {
      setNextPageUrl(res.data.next)
      setPokemons(res.data.results.map(p => p))
      
      function createPokemonObject(pokemons){
        pokemons.forEach( async (pokemon) => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then(res => {
            setPokemons(currentList =>[...currentList,res.data])
          })

        })


      }
      createPokemonObject(pokemons)

    })

 
}

 


  




  if(loading) return "Loading...."

    return(
      <div>
         <div>
          {
            pokemons.map((pokemon, index) =>
            <Dex
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            base_experience={pokemon.base_experience}
            />

          )}
        
          
        </div>
        <button onClick={getAllPokemons()}> </button>

      </div>

    )
}

export default App;
