const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const getImage = (number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
}

export {apiUrl, getImage}