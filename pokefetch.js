/* 
fetch("https://pokeapi.co/api/v2/pokemon/absol")
.then(response =>  {
    if(!response.ok) {
        throw new Error ("could not fetch resource"); 
      }
      return response.json();
//response.json converts response to json and returns a promise
})   
.then(data => console.log(data.id))
.catch(error => { 
  console.error(error)
});
*/

import { clearvalue } from "./js-workshop/1 Interactive Counter - Temperature Converter/function.js";

let pokelement = document.getElementById("pokename");
const img = document.getElementById("pokesprite");
const search = document.getElementById("fetch"); 

search.addEventListener("click", fetchData);

async function fetchData(){
  try{
    const pokeName = pokelement.value.toLowerCase();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);    

    if(!response.ok) {
        throw new Error ("could not fetch resource"); 
      }
    const data = await response.json();
    const pokeSprite = data.sprites.front_default; 
    
    img.src = pokeSprite;
    img.style.display = "block" ; 

    clearvalue(pokelement);
  } 
  catch(error){
    console.error(error);
  }
}

// add on click so when u click on textbox again if it already has some text the image dissapears 

/*
document.getElementById("pokename").addEventListener("click", () => {
      if (pokeName != '')
      {img.style.display = "none" ; }
    })
*/