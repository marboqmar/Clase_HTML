export const mapPokemonDetailsApiToView = (pokemon) => {
    return {
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_shiny,
        weight: pokemon.weight,
        height: pokemon.height
    };
};