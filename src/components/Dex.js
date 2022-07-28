import React , {useState , useEffect} from 'react';
import axios from 'axios'




export default function PokemonList({id,name,sprite,type}){

     const style = `${type}`
     

     return(
          <div className={`dex ${style}`} key={id}>
               <p className="id">#{id}</p>    
               <p className="name">{name}</p> 
               <p className="type">{type}</p> 
               <img src={sprite}/>
 

          </div>


     )


}


