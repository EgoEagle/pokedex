import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({pokemon}){

     
     

     return(
          <div>


               {pokemon.map(p => (
                    
                    <div key={p} > 
                         <p>{p.name}  </p>
                         <p>{p.base_experience}  </p>
                    
                    </div>
                    

               ))}
              

          </div>


     )


}


