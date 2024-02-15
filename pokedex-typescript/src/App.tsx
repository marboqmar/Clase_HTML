import axios from 'axios';
import { apiURL, getImage } from './assets/utils';

axios.get(apiURL).then((body) => {
    const pokemon = body.data.results;

    let html = '';
    pokemon.forEach((pokemon, index) => {
        html = html + `<div><p>${pokemon.name}</p><img src="${getImage(index + 1)}"></div>`;
    });

    document.body.innerHTML = html;
});

