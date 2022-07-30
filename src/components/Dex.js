import React , {useState , useEffect} from 'react';
import Popup from './Popup';
import axios from 'axios';



export default function PokemonList({id,name,sprite,type,type2,hp,atk,def,spatk,spdef,spd,abilities,descriptionUrl,flag}){
     const [buttonPopup, setButtonPopup] = useState(false);
     const [description, setDescription] = useState();
     const style = `${type}`

     useEffect( ()=> {
          axios.get(descriptionUrl)
          .then (res => {
               let json = JSON.stringify(res.data.flavor_text_entries[7].flavor_text);
               json = json.replace(/\\f|\\n/g, ' ');
   
               setDescription(json);
          })
     },[description])

     

     return(
          <div className={`dex ${style}`} key={id}>
               <div onClick={() => setButtonPopup(true)}>
               <p className="id">#{id}</p>    
               <p className="name">{name}</p> 
               <div className="typeBox"> 
                    <p className="type">{type}</p> 
                    {flag && <p className="type">{type2}</p>}
               </div>
               
               <img src={sprite}/>
               </div>
               <Popup  
                    trigger={buttonPopup}  
                    id = {id}
                    name = {name}
                    sprite = {sprite}
                    type = {type}
                    type2 = {type2}
                    text = {description}
                    abilities = {abilities}
                    flag = {flag}
                    setState = {setButtonPopup}
                    hp = {hp}
                    atk = {atk}
                    def = {def}
                    spatk = {spatk}
                    spdef = {spdef}
                    spd = {spd}
               >
                 <button className="close" onClick={()=> setButtonPopup(false)}> Close </button>
               </Popup>

          </div>
               


     )


}


