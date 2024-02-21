import axios from 'axios';
import { apiURL } from '../utils';
import { mapPokemonApiToPokemonView } from './mappers';

let pokemon: any;

const renderPokemonList = (pokemonToRender: any) => {
    let html = '';

    pokemonToRender.forEach((pokemon: any) => {
        html =
            html +
            `<div class="pokemon">
                <a href="/src/assets/details/?pokemonId=${pokemon.id}">
                    <p>${pokemon.name}</p>
                    <img src="${pokemon.imageUrl}">
                </a>
                <i class="fa-solid fa-heart" style={color: pokemon.isFav ? 'red' : 'black'} ></i>
            </div>`;
    });

    document.querySelector('.pokemons').innerHTML = html;
};

axios.get(apiURL).then((body) => {
    pokemon = mapPokemonApiToPokemonView(body.data.results);

    renderPokemonList(pokemon);
});

document.querySelector('.search').addEventListener('input', (event) => {
    const filteredPokemon = pokemon.filter((pokemonItem: any) => {
        return pokemonItem.name.includes(event.target.value);
    });

    renderPokemonList(filteredPokemon);
});

axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((body) => {
    console.log(body.data);
});


