import  { normalisedPokemonData } from '../pokemonData.js'
import axios from 'axios';
import { capitalize } from 'lodash';

const searchParams = new URLSearchParams(window.location.search);
const pokemonId = searchParams.get('pokemonId')
const pokemonDisplayNode = document.querySelector(".pokemonDetailsDisplay")
const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
const pokemonName = normalisedPokemonData[pokemonId - 1].name
const pokemonImage = normalisedPokemonData[pokemonId - 1].img

document.querySelector('title').innerHTML = pokemonName

axios.get(apiUrl).then((body) => {
    let types = [];
    let abilities = [];

    body.data.types.forEach((typeObject) => {
       types = [...types, capitalize(typeObject.type.name)]
    });

    body.data.abilities.forEach((abilityObject) => {
        abilities = [...abilities, capitalize(abilityObject.ability.name)];
    });

    abilities = abilities.toString().replace(",", ", ")

    types = types.toString().replace(",", ", ")

    pokemonDisplayNode.innerHTML = `<h1>${pokemonName}</h1>
    <img src="${pokemonImage}">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png">
    <h2>Type</h2>
    <p>${types}</p>
    <h2>Abilities</h2>
    <p>${abilities}</p>`
})


