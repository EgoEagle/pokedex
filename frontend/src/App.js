import Display from './components/Display.js';
import Dex from './components/Dex.js';
import React , {useState , useEffect} from 'react';
import axios from 'axios'


function App() {
  const[pokemon, setPokemon] = useState([]);
  const[currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const[nextPageUrl, setNextPageUrl] = useState()
  const[prevPageUrl, setPrevPageUrl] = useState()
  const[loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setLoading(false)
      setPokemon(res.data.results.map(p => p.name))
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.prev);
  })

},[currentPageUrl])


    return(
      <div>
        <Dex pokemon = {pokemon} />
      </div>

    )
}

export default App;
