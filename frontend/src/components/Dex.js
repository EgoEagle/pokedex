import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({pokemon}){
    /* const[pokemonlist, setPokemonlist ] = useState();
     useEffect(() => {
          axios.get(currentPageUrl).then(res => {
      

        })

      
      },[{pokemon}])     */

 

     return(
          <div>


               {pokemon.map(p => (
                    
                    <div key={p.name} > {p.name}  </div>
                    

               ))}
              

          </div>


     )


}


