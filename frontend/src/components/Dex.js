import React from "react";
import Display from "./Display";



export default function PokemonList({pokemon}){
     return(
          <div>
               {pokemon.map(p => (
                    
                    <div key={p}> {p} </div>

               ))}

          </div>


     )


}


