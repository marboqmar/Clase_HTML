import axios from 'axios';
import { mapPokemonDetailsApiToView } from './mappers';
import { capitalize } from 'lodash';

let params = new URLSearchParams(window.location.search);
let pokemonId = params.get('pokemonId');

const renderPokemonList = (pokemon) => {
    document.querySelector('.details').innerHTML = `
  <div class="pokemon">
  
  <p>${capitalize(pokemon.name)}</p>
  <img src="${pokemon.imageUrl}">
  <p>Height: ${pokemon.height}</p>
  <p>Weith: ${pokemon.weight}</p>
  </div>`;
};

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((body) => {
    renderPokemonList(mapPokemonDetailsApiToView(body.data));
});
