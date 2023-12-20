import axios from 'axios';
import { capitalize } from 'lodash';
import { apiUrl, getImage } from "./src/utils.js";

axios.get(apiUrl).then((body) => {
   let pokemonData = body.data.results;
   let html = '';

   pokemonData.forEach((pokemon, index) => {
      html = html + `<div class="pokemon"><a href="/src/views/details/?pokemonId=${pokemon.id}"><p class="pokemonName">${capitalize(pokemon.name)}</p><img src="${getImage(index + 1)}"></div>`
   });

   document.querySelector('.pokemonDisplay').innerHTML = html;
});


