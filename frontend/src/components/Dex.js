import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({id,name,sprite,type}){

     const style = `${type}`
     

     return(
          <div className={`dex ${style}`} key={id}>
               <p>{id}</p>
               <p>{type}</p>
               <p>{name}</p>
               <img src={sprite}/>
 

          </div>


     )


}


