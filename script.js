let gameOn = false;
const colors = ['#e25a44', '#ffe876', '#6fc57a', 'white'];

const emojis = ['&#128522;', '&#128512;', '&#128512;', '&#128521;']

const left = document.getElementById('leftPart');

const right = document.getElementById('rightPart');

const button = document.getElementById('switcher');

const emoji = document.getElementById('emoji');

const player = document.getElementById('audio');

emoji.innerHTML = emojis[0];

button.addEventListener('click', clickHandler);

let timer;

function clickHandler () {
  if (gameOn) {
    gameOn = false;
    switcher.innerHTML = 'Почали!'
    player.pause();
    resetColor();
    
    clearInterval(timer);

  } else {
    gameOn = true;
    const initialColor = colors[randomUpTo(3)];
    left.style.background = initialColor;
    right.style.background = initialColor;
    switcher.innerHTML = 'Стоп!'
    player.play();
    timer = setInterval(changeColor, 4000);
  }
}

function changeColor () {
  console.log('changeColor');
  const color = randomUpTo(3);
  left.style.background = colors[color]

  if (color < 2) {
    right.style.background = colors[color]
  } else {
  right.style.background = colors[randomUpTo(3)];    
  }
  
  const emojiNum = randomUpTo(3);
  emoji.innerHTML = emojis[emojiNum];
}

function resetColor () {
  left.style.background = colors[3];
  right.style.background = colors[3];
  emoji.innerHTML = emojis[0];
}

function randomUpTo (num) {
  switch (num) {
    case 3:
      return Math.floor(Math.random() * 10 / 3.5);      
      break;
    case 5: 
      return Math.floor(Math.random() * 10 / 2);
      break;
    default: 
      return 0;
  }
}

