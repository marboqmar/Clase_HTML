function startGame() {
  const availableClasses = [
    'josemi--t',
    'josemi--b',
    'josemi--corner-bl',
    'josemi--corner-br',
    'josemi--corner-tl',
    'josemi--corner-tr'
  ];
  const availableTimers = [4000];
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

const gameTime = 4000;
const gameTimeSeconds = gameTime / 1000;

const ctaStart = document.querySelector('.cta--start');
const ctaContinue = document.querySelector('.cta--continue');
const timer = document.querySelector('#time')


ctaStart.addEventListener('click', function () {
  startTimer(gameTimeSeconds, timer);
  totalPointsNode.innerText = 0;
  const gameIntervalId = startGame();
  ctaStart.style.display = 'none';
  clearInterval(fireworksIntervalId);
  document.querySelector('.instructions').innerText = 'Cada vez que veas una versión de Josemi, dale con el ratón para sumar un punto. Los josemis soleados valen doble!';

  setTimeout(() => {
    clearInterval(gameIntervalId);
    ctaStart.style.display = 'inline-block';
    ctaContinue.style.display = 'inline-block';
    timer.style.display = 'none';
    fireworks()
    document.querySelector('.instructions').innerText = '¡Enhorabuena! Has acabado el juego';
    clearInterval(timerIntervalId);
  }, gameTime);
});

ctaContinue.addEventListener('click', function () {
  startTimer(gameTimeSeconds, timer);
  const gameIntervalId = startGame();
  ctaStart.style.display = 'none';
  ctaContinue.style.display = 'none';
  clearInterval(fireworksIntervalId);
  document.querySelector('.instructions').innerText = 'Cada vez que veas una versión de Josemi, dale con el ratón para sumar un punto. Los josemis soleados valen doble!';

  setTimeout(() => {
    clearInterval(gameIntervalId);
    ctaStart.style.display = 'inline-block';
    ctaContinue.style.display = 'inline-block';
    timer.style.display = 'none';
    fireworks()
    document.querySelector('.instructions').innerText = '¡Enhorabuena! Has acabado el juego';
    clearInterval(timerIntervalId);
  }, gameTime);
});

const fireworks = () => {
  const container = document.querySelector('.fireworks');
  const fireworks = new Fireworks.default(container);
  fireworks.start();
}

const fireworksIntervalId = setInterval(fireworks, 1000000);

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


let timerIntervalId;
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  timerIntervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}


/*
const changesWhenGameStarts = (isStart) => {
  startTimer(gameTimeSeconds, timer);
  const gameIntervalId = startGame();
  ctaStart.style.display = 'none';
  clearInterval(fireworksIntervalId);
  document.querySelector('.instructions').innerText = 'Cada vez que veas una versión de Josemi, dale con el ratón para sumar un punto. Los josemis soleados valen doble!';

  if (isStart === true) {
    totalPointsNode.innerText = 0;
  }

  setTimeout(() => {
    clearInterval(gameIntervalId);
    ctaStart.style.display = 'inline-block';
    ctaContinue.style.display = 'inline-block';
    timer.style.display = 'none';
    fireworks()
    document.querySelector('.instructions').innerText = '¡Enhorabuena! Has acabado el juego';
    clearInterval(timerIntervalId);
  }, gameTime);
};

ctaStart.addEventListener('click', changesWhenGameStarts(true));

ctaContinue.addEventListener('click', changesWhenGameStarts(false));
 */


/*
Hacer que los fuegos artificiales paren cuando le das a iniciar el juego otra vez (una vez haya terminado).
Hacer que el texto cambie cuando acabe el juego con un mensaje a vuestra elección.
Poner una cuenta atrás visual que indique cuántos segundos quedan para que termine la ronda de juego.
Poner un botón de continuar que aparezca al lado de "empezar" y solamente cuando acabe el juego y que te permita
empezar otra vez manteniendo la puntuación que tuvieras. Es decir, la idea es que cuando acabe una ronda puedas
elegir o continuar o empezar de nuevo.
 */