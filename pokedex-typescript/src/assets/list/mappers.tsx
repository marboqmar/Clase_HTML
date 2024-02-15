import { getImage } from '../utils';
import { capitalize } from 'lodash';

export const mapPokemonApiToPokemonView = (pokemon) => {
    return pokemon.map((pokemonItem, index) => {
        return {
            name: capitalize(pokemonItem.name),
            imageUrl: getImage(index + 1),
            id: index + 1
        };
    });
};
