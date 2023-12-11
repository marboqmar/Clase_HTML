const ranking = [
    { position: 1, name: 'pepito', score: 5 },
    { position: 2, name: 'pepito2', score: 4 },
    { position: 3, name: 'pepito3', score: 3 },
    { position: 4, name: 'pepito4', score: 2 },
    { position: 5, name: 'pepito5', score: 1 },
]

const rankingNode = document.querySelector('#ranking');
let rankingHtml = '';

ranking.forEach(positionInfo => {
    const pointsLabel = positionInfo.score === 1 ? 'punto' : 'puntos';
    rankingHtml += `<div class="ranking__item">
    <h3>${positionInfo.position}.</h3>
    <h3>${positionInfo.name}</h3>
    <h3 class="points">${positionInfo.score} ${pointsLabel}</h3> 
</div>`
});

rankingNode.innerHTML = rankingHtml;

document.querySelector('.searchBar__input').value