function JosemisHunter() {
  let gameIntervalId;
  const availableClasses = [
    'josemi--t',
    'josemi--b',
    'josemi--corner-bl',
    'josemi--corner-br',
    'josemi--corner-tl',
    'josemi--corner-tr'
  ];
  const availablecountDowns = [4000];
  // 1000, 1200, 1500, 2000, 2500, 3000

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pickJosemi() {
    if (!availableClasses.length) {
      return;
    }

    const randomIndex = getRandomInt(0, availableClasses.length - 1);
    const randomcountDownIndex = getRandomInt(0, availablecountDowns.length - 1);
    const countDownToUse = availablecountDowns[randomcountDownIndex];
    const classToUse = availableClasses.splice(randomIndex, 1)[0];
    const josemiNode = document.querySelector('.josemi:not(.josemi--selected)');

    if (!josemiNode) {
      return;
    }

    josemiNode.classList.add('josemi--selected');
    josemiNode.classList.add(classToUse);

    const clickListener = josemiNode.addEventListener('click', () => {
      josemiNode.classList.remove('josemi--show');
    });

    setTimeout(() => {
      josemiNode.classList.add('josemi--show');
    }, 400);

    setTimeout(() => {
      josemiNode.classList.remove('josemi--show');

      setTimeout(() => {
        josemiNode.classList.remove('josemi--selected');
        josemiNode.classList.remove(classToUse);
        availableClasses.push(classToUse);
        josemiNode.removeEventListener('click', clickListener);
      }, 400);
    }, countDownToUse);
  }

  this.start = () => {
    pickJosemi();
    return setInterval(pickJosemi, 1000);
  };

  this.stop = () => {
    clearInterval(gameIntervalId);
  };
};

const josemisGame = new JosemisHunter()





let fireworksController;
const gameTime = 4000;
const gameTimeSeconds = gameTime / 1000;

const allJosemisNode = document.querySelectorAll('.josemi');
const ctaStartNode = document.querySelector('.cta--start');
const ctaContinueNode = document.querySelector('.cta--continue');
const ctaScoreNode = document.querySelector('.cta--score');
const countDownNode = document.querySelector('#time');
const usernameInputNode = document.querySelector('.username-input');

const changesWhenGameStarts = (isStart) => {
  startCountdown(gameTimeSeconds, countDownNode);
  josemisGame.start();
  ctaStartNode.style.display = 'none';
  ctaContinueNode.style.display = 'none';
  ctaScoreNode.style.display = 'none'
  countDownNode.style.display = 'inline-block';
  document.querySelector('.instructions').innerText = 'Cada vez que veas una versión de Josemi, dale con el ratón para sumar un punto. Los josemis soleados valen doble!';

  if (fireworksController) {
    fireworksController.stop()
  }

  if (isStart) {
    totalPointsNode.innerText = 0;
    localStorage.setItem('playerName', usernameInputNode.value);
  }

  setTimeout(() => {
    josemisGame.stop();
    ctaStartNode.style.display = 'inline-block';
    ctaContinueNode.style.display = 'inline-block';
    ctaScoreNode.style.display = 'inline-block';
    countDownNode.style.display = 'none';
    fireworks()
    document.querySelector('.instructions').innerText = '¡Enhorabuena! Has acabado el juego';
    allJosemisNode.forEach((josemi) => {
      josemi.classList.remove('josemi--show');
    });
    clearInterval(countDownIntervalId);
  }, gameTime);
};


ctaStartNode.addEventListener('click', function () {
  changesWhenGameStarts(true)
});

ctaContinueNode.addEventListener('click', function () {
  changesWhenGameStarts(false)
});

const fireworks = () => {
  if (!fireworksController) {
    const container = document.querySelector('.fireworks');
    fireworksController = new Fireworks.default(container);
  }
  fireworksController.start();
}

const totalPointsNode = document.querySelector('#totalPoints');

document.querySelectorAll('.josemi').forEach((josemiNode) => {
  josemiNode.addEventListener('click', () => {
    const pointsToAdd = josemiNode.classList.contains('josemi--sm') ? 2 : 1;

    let totalPoints = Number(totalPointsNode.innerText) + pointsToAdd;

    totalPointsNode.innerText = totalPoints;
  });
});

const hammerNode = document.querySelector('.hammer');

document.addEventListener('mousemove', (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;

  hammerNode.style.top = event.clientY;
  hammerNode.style.left = event.clientX;
});

document.addEventListener('mousedown', () => {
  hammerNode.classList.add('hammer--pressed');
});

document.addEventListener('mouseup', () => {
  hammerNode.classList.remove('hammer--pressed');
});


let countDownIntervalId;
function startCountdown(duration, displayNode) {
  let countDown = duration

  const updateTimer = () => {
    let minutes = parseInt(countDown / 60, 10);
    let seconds = parseInt(countDown % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayNode.textContent = minutes + ":" + seconds;

    if (--countDown < 0) {
      countDown = duration;
    }
  };

  countDownIntervalId = setInterval(updateTimer, 1000);
  updateTimer()
}

usernameInputNode.addEventListener('input', function(event) {
  ctaStartNode.disabled = !event.target.value;
});

usernameInputNode.value = localStorage.getItem('playerName');
ctaStartNode.disabled = !usernameInputNode.value;


// function startGame() {
//   const availableClasses = [
//     'josemi--t',
//     'josemi--b',
//     'josemi--corner-bl',
//     'josemi--corner-br',
//     'josemi--corner-tl',
//     'josemi--corner-tr'
//   ];
//   const availablecountDowns = [4000];
//   // 1000, 1200, 1500, 2000, 2500, 3000
//
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//
//   function pickJosemi() {
//     if (!availableClasses.length) {
//       return;
//     }
//
//     const randomIndex = getRandomInt(0, availableClasses.length - 1);
//     const randomcountDownIndex = getRandomInt(0, availablecountDowns.length - 1);
//     const countDownToUse = availablecountDowns[randomcountDownIndex];
//     const classToUse = availableClasses.splice(randomIndex, 1)[0];
//     const josemiNode = document.querySelector('.josemi:not(.josemi--selected)');
//
//     if (!josemiNode) {
//       return;
//     }
//
//     josemiNode.classList.add('josemi--selected');
//     josemiNode.classList.add(classToUse);
//
//     const clickListener = josemiNode.addEventListener('click', () => {
//       josemiNode.classList.remove('josemi--show');
//     });
//
//     setTimeout(() => {
//       josemiNode.classList.add('josemi--show');
//     }, 400);
//
//     setTimeout(() => {
//       josemiNode.classList.remove('josemi--show');
//
//       setTimeout(() => {
//         josemiNode.classList.remove('josemi--selected');
//         josemiNode.classList.remove(classToUse);
//         availableClasses.push(classToUse);
//         josemiNode.removeEventListener('click', clickListener);
//       }, 400);
//     }, countDownToUse);
//   }
//
//   pickJosemi();
//
//   return setInterval(pickJosemi, 1000);
// }