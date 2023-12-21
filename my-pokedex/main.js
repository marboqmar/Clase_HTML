import axios from 'axios';
import { capitalize } from 'lodash';
import { apiUrl, getImage } from "./src/utils.js";

let pokemonModifiedData

axios.get(apiUrl).then((body) => {
   let pokemonOriginalData = body.data.results;
   let html = '';

   pokemonOriginalData.forEach((pokemon, index) => {
      pokemonModifiedData = {...pokemon, id: index + 1, img: getImage(index+1)};

      html = html + `<div class="pokemon"><a href="/src/pokemonDetails/?pokemonId=${pokemonModifiedData.id}"><p class="pokemonName">${capitalize(pokemonModifiedData.name)}</p><img src="${pokemonModifiedData.img}"></div>`
   });

   document.querySelector('.pokemonDisplay').innerHTML = html;
});




