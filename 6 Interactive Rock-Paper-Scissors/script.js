/*
    ALGORITHM: Rock-Paper-Scissors (with Autoplay & LocalStorage)

    1. SETUP:
       - Load `score` object from LocalStorage (`wins`, `losses`, `ties`).
       - If null, set default score `{ wins: 0, losses: 0, ties: 0 }`.
       - Get the score, result, and moves display elements.
       - Declare state variables: `isAutoPlaying = false`, `intervalId = null`.

    2. HELPER FUNCTIONS:
       - `pickComputerMove()`:
           - Generate `Math.random()`.
           - If 0 to <1/3 return 'rock'; if 1/3 to <2/3 return 'paper'; else return 'scissors'.
       - `updateScoreElement()`:
           - Update DOM text with current wins, losses, and ties.
       - `saveScore()`:
           - Save `score` object to LocalStorage via `JSON.stringify()`.

    3. GAME LOGIC (`playGame(playerMove)`):
       - Call `pickComputerMove()` to get computer choice.
       - Compare `playerMove` with computer move to determine result ('You win.', 'You lose.', or 'Tie.').
       - Update `score` object properties accordingly.
       - Save updated score to LocalStorage.
       - Update result display, moves display (icons/text), and call `updateScoreElement()`.

    4. AUTOPLAY & CONTROLS:
       - `autoPlay()`:
           - If `!isAutoPlaying`, set `intervalId = setInterval(() => { playGame(pickComputerMove()); }, 1000)` and set `isAutoPlaying = true`.
           - Else, `clearInterval(intervalId)` and set `isAutoPlaying = false`.
       - Add event listeners for buttons ("Rock", "Paper", "Scissors", "Reset Score", "Autoplay").
       - Add `keydown` event listener to `document.body` for keyboard shortcuts (`r`, `p`, `s`, `a`, `Backspace`).
*/

// WRITE YOUR CODE BELOW:


let score =  JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
  /* {wins: 0, 
  losses: 0,
  ties: 0}  */

/*if (!score) { 
  score = { wins: 0, losses: 0, ties: 0 };
} */

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() { 
  if (!isAutoPlaying) {
  intervalId = setInterval(() => { 
  let playerMove = pickComputerMove();
  playGame(playerMove);
}, 2000);
  isAutoPlaying = true;
} else {
  clearInterval(intervalId);
  isAutoPlaying = false;
}
}

document.querySelector('.js-rock-button').addEventListener('click', () => {playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {playGame('scissors');
});
document.querySelector('.js-auto-play-button').addEventListener('click', () => {autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key==='r'){
    playGame('rock');
  } else if (event.key==='p') {
    playGame('paper');
  } else if (event.key==='s') {
    playGame('scissors');
  } 
});


function playGame(playerMove) { 
 computerMove = pickComputerMove();
  result = ' ';
  if (playerMove === 'rock') { 
        if (computerMove ==='rock')
      { result = 'tie';}
      else if (computerMove ==='paper') { 
        result = 'lose';
      }
      else if (computerMove ==='scissors') { 
        result = 'win';
  } }
  else if (playerMove === 'paper') { 
        if (computerMove ==='rock')
      { result = 'win';}
      else if (computerMove ==='paper') { 
        result = 'tie';
      }
      else if (computerMove ==='scissors') { 
        result = 'lose';
    }  }
  else if (playerMove === 'scissors') {
  if (computerMove ==='rock')
  { result = 'lose';}
  else if (computerMove ==='paper') { 
    result = 'win';
  }
  else if (computerMove ==='scissors') { 
    result = 'tie';
  }
}

if (result === 'win') { 
  score.wins++;
}
else if (result === 'lose') { 
  score.losses++;
}
else if (result === 'tie') { 
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML =  `You <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    Computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;

/*`you picked ${playerMove}. computer picked ${computerMove}.`;*/

} 

function updateScoreElement() { 
document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}` ;

}
function pickComputerMove() { 
  const randomNumber = Math.random(); 
  let computerMove = '';
  if (randomNumber >=0 && randomNumber < 1/3) { 
     computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) { 
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) { 
    computerMove = 'scissors';
  }

  return computerMove; }


