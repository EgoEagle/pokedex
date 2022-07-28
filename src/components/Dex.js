import React , {useState , useEffect} from 'react';
import Popup from './Popup';
import axios from 'axios'




export default function PokemonList({id,name,sprite,type}){
     const [buttonPopup, setButtonPopup] = useState(false);
     const style = `${type}`
     

     return(
          <div className={`dex ${style}`} key={id}>
               <p className="id">#{id}</p>    
               <p className="name">{name}</p> 
               <p className="type">{type}</p> 
               <img onClick={() => setButtonPopup(true)} src={sprite}/>
               <Popup trigger={buttonPopup}></Popup>

 

          </div>


     )


}


