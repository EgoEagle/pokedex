import React , {useState , useEffect} from 'react';
import Popup from './Popup';
import axios from 'axios';



export default function PokemonList({id,name,sprite,type,forms,species,stats,abilities,descriptionUrl}){
     const [buttonPopup, setButtonPopup] = useState(false);
     const [description, setDescription] = useState();
     var data = '{"count" : 1, "stack" : "sometext\\n\\n"}';
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
               <p className="type">{type}</p> 
               <img src={sprite}/>
               </div>
               <Popup 
                    trigger={buttonPopup}  
                    id = {id}
                    name = {name}
                    sprite = {sprite}
                    type = {type}
                    text = {description}
               >
               <button onClick={()=> setButtonPopup(false)}> Close </button>     
               </Popup>

          </div>
               


     )


}


