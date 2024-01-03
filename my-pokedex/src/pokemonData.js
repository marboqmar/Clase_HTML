import axios from 'axios';
import { capitalize } from 'lodash';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const getImage = (number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
}

async function gettingData() {
    let pokemonGettingData = await axios.get(apiUrl)
    let pokemonOriginalData = pokemonGettingData.data.results;
    return pokemonOriginalData.map((pokemon, index) => {
        pokemon.name = capitalize(pokemon.name)
        return {...pokemon, id: index + 1, img: getImage(index + 1)};
    });
}

// let normalisedPokemonData = await gettingData();
//
// export { normalisedPokemonData };

export { gettingData };


