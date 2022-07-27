import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({id,name,sprite}){

     
     

     return(
          <div key={id}>

               <p>{name}</p>
               <img src={sprite}/>
 

          </div>


     )


}


