const ranking = [
    { name: 'pepito', score: 1 },
    { name: 'pepito2', score: 2 },
    { name: 'pepito3', score: 3 },
    { name: 'pepito4', score: 4 },
    { name: 'pepito5', score: 5 },
]

const orderedRanking = _.orderBy(ranking, ['score'], ['desc'])

const rankingNode = document.querySelector('#ranking');
let rankingHtml = '';

orderedRanking.forEach(positionInfo => {
    const pointsLabel = positionInfo.score === 1 ? 'punto' : 'puntos';
    rankingHtml += `<div class="ranking__item">
    <h3>${orderedRanking.indexOf(positionInfo) + 1}.</h3>
    <h3>${positionInfo.name}</h3>
    <h3 class="points">${positionInfo.score} ${pointsLabel}</h3> 
</div>`
});

rankingNode.innerHTML = rankingHtml;

document.querySelector('.searchBar__input').value

