'use strict';

const playGame = () => {
  let secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log('secret number = ', secretNumber);

  let score = 5;
  let highScore = 0;

  document.querySelector('.score').textContent = score;
  console.log('SCORE = ', score);

  document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    // When there is no input entered
    if (!guessNumber) {
      document.querySelector('.message').textContent = '⛔ No number entered!';

      // When player wins
    } else if (guessNumber === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // Check highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // When guess wrong
    } else if (guessNumber !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guessNumber > secretNumber
            ? '📈 Too HIGH! Try again.'
            : '📉 Too LOW! Try again.';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log('secret number = ', secretNumber);
    score = 5;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
  });
};

playGame();
