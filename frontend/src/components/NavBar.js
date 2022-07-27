import React from "react";
import title from "../images/title.png";
import icon from "../images/icon.png";

export default function NavBar(){

     return (
          <div className="NavBar">
               <nav>
                    <img src={title}> </img>
                    <img src={icon}> </img>
               </nav>
          
          </div>

     )


}