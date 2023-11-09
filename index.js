// 1. Buscar y guardar en una variable todos los elementos img de mi web.

const myImgs = document.querySelectorAll('img')


// Si solo hay un tag, en vez de .querySelectorAll usa .querySelector (busca y utiliza solo el primer elemento que coincide con el criterio).

// 2. Recorrer todos los elementos encontrados y cambiarles el src. 
/*
myImgs.forEach(imgNode => {
    imgNode.src = 'https://image.petmd.com/files/styles/978x550/public/2023-04/kitten-development.jpeg?w=1080&q=75'
});
*/
// ejemplos con otros tags

const myDivs = document.querySelectorAll('div')

const myNav = document.querySelectorAll('nav')

// ejemplos con clases en vez de tags
const logo = document.querySelector('.logo')




