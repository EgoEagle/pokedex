import React from "react";
import title from "../images/title.png";
import icon from "../images/icon.png";
//////
export default function NavBar(){

     return (
          <div className="NavBar">
               <header className="header">
                    <img className="icon" src={icon}/> 
                    <img className="title" src={title}/> 
                    
               </header>
          
          </div>

     )


}
