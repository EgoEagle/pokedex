import Pagination from './components/Pagination.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios'


function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [pokemondata, setPokemonData] = useState([])





  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
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
    return () => cancel()
  }, [currentPageUrl])

  console.log(pokemons)
 


  


function gotoNextPage(){
  setCurrentPageUrl(nextPageUrl)

}

function gotoPrevPage(){
  setCurrentPageUrl(prevPageUrl)

}



  if(loading) return "Loading...."

    return(
      <div>
         <div>
          {
            pokemons.map((pokemon, index) =>
            <Dex pokemon  
            id={pokemon.id}
            name={pokemon.name}
            base_experience={pokemon.base_experience}
            />

          )}
        
          
        </div>
        <Pagination 
          gotoNextPage = {nextPageUrl ? gotoNextPage : null}
          gotoPrevPage = {prevPageUrl ? gotoPrevPage: null}
        />

      </div>

    )
}

export default App;
