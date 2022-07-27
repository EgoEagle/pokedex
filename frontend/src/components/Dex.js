import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({id,name,base_experience}){

     
     

     return(
          <div key={id}>

               {name}  {base_experience}  
 

          </div>


     )


}


