import React from "react";
import Display from "./Display";

const[pokelist,setPokemonlist] = React.useState();

let a = document.getElementById("pokemonName")
let b = document.getElementById("display")


React.useEffect(() =>{
     fetch("https://pokeapi.co/api/v2/pokemon/")
          .then(res => res.json())
          .then(data => setPokemonlist(data.name))
},[])



