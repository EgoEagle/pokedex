import Pagination from './components/Pagination.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios'


function App() {
  const [pokemon, setPokemon] = useState([])
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
      setPokemon(res.data.results.map(p => p.url))
      
      function createPokemonObject(result){
        result.forEach( async (pokemon) => {
          axios.get(pokemon)
          .then(res => {
            setPokemonData(currentList =>[...currentList,res.data])
          })

        })


      }
      createPokemonObject(pokemon)

    })

    return () => cancel()
  }, [currentPageUrl])

 


  


function gotoNextPage(){
  setCurrentPageUrl(nextPageUrl)

}

function gotoPrevPage(){
  setCurrentPageUrl(prevPageUrl)

}



  if(loading) return "Loading...."

    return(
      <div>
        <Dex pokemon = {pokemondata} />
        <Pagination 
          gotoNextPage = {nextPageUrl ? gotoNextPage : null}
          gotoPrevPage = {prevPageUrl ? gotoPrevPage: null}
        />

      </div>

    )
}

export default App;
