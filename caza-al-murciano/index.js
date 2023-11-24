function startGame() {
  const availableClasses = [
    'josemi--t',
    'josemi--b',
    'josemi--corner-bl',
    'josemi--corner-br',
    'josemi--corner-tl',
    'josemi--corner-tr'
  ];
  const availableTimers = [1000, 1200, 1500, 2000, 2500, 3000];

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
    const randomTimerIndex = getRandomInt(0, availableTimers.length - 1);
    const timerToUse = availableTimers[randomTimerIndex];
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
      //este es el código que se va a ejecutar cuando se cumpla el tiempo del timeout
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
    }, timerToUse);
  }

  pickJosemi();

  return setInterval(pickJosemi, 1000);
}

const ctaButton = document.querySelector('.cta--start');
ctaButton.addEventListener('click', function () {
  totalPointsNode.innerText = 0;
  const gameIntervalId = startGame();
  ctaButton.style.display = 'none';

  setTimeout(() => {
    clearInterval(gameIntervalId);
    ctaButton.style.display = 'inline-block';
    const container = document.querySelector('.fireworks');
    const fireworks = new Fireworks.default(container);
    fireworks.start();
  }, 5000);
});

const totalPointsNode = document.querySelector('#totalPoints');

document.querySelectorAll('.josemi').forEach((josemiNode) => {
  josemiNode.addEventListener('click', () => {
    const pointsToAdd = josemiNode.classList.contains('josemi--sm') ? 2 : 1; // Operadores ternarios

    let totalPoints = Number(totalPointsNode.innerText) + pointsToAdd;

    totalPointsNode.innerText = totalPoints;
  });
});

const hammerNode = document.querySelector('.hammer');

document.addEventListener('mousemove', (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;

  hammerNode.style.top = clientY;
  hammerNode.style.left = clientX;
});

document.addEventListener('mousedown', () => {
  hammerNode.classList.add('hammer--pressed');
});

document.addEventListener('mouseup', () => {
  hammerNode.classList.remove('hammer--pressed');
});
