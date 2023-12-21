import { pokemonModifiedData } from "./src/pokemonData.js";



let html = '';

pokemonModifiedData.forEach((pokemon, index) => {
   console.log(pokemonModifiedData.name)
   html = html + `<div class="pokemon">
       <a href="/src/pokemonDetails/pokemonDetails.html?pokemonId=${pokemonModifiedData[index].id}">
       <p>${pokemonModifiedData[index].name}</p>
       <img src="${pokemonModifiedData[index].img}">
    </div>`
});

document.querySelector('.pokemonDisplay').innerHTML = html;



