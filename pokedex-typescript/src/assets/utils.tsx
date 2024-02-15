export const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getImage = (pokemonNumber: number): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
};