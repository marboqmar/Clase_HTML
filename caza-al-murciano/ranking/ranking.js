const playerName = localStorage.getItem("playerName");
const playerScore = localStorage.getItem("playerScore");
const newPlayer = {name: playerName, score: Number(playerScore)};
const previousRankingJson = localStorage.getItem("currentRanking");


const ranking = previousRankingJson ? JSON.parse(previousRankingJson) : [
    { name: 'pepito', score: 1 },
    { name: 'pepito2', score: 2 },
    { name: 'pepito3', score: 3 },
    { name: 'pepito4', score: 4 },
    { name: 'marta', score: 1 },
]

const index = ranking.findIndex(player => player.name === newPlayer.name);

if (index === -1) {
    ranking.push(newPlayer);
} else {
    let existingPlayer = ranking.filter(function (player) {
       return player.name === newPlayer.name
    });
    if (existingPlayer[0].score < newPlayer.score) {
        ranking.forEach(user => {
            if (user.name === newPlayer.name) {
                user.score = newPlayer.score;
            }
        });
    }
}

const orderedRanking = _.orderBy(ranking, ['score'], ['desc'])

localStorage.setItem("currentRanking", JSON.stringify(orderedRanking));

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

