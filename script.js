'use strict';

const generateSecretNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

const setSecretNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const playGame = () => {
  let secretNumber = generateSecretNumber();
  let score = 20;
  let highScore = 0;

  setScore(score);

  // Check the guess number compared to the secret number
  document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    // When there is no input entered
    if (!guessNumber) {
      displayMessage('⛔ No number entered!');

      // When player wins
    } else if (guessNumber === secretNumber) {
      displayMessage('🎉 Correct Number!');
      setSecretNumber(secretNumber);

      setBackgroundColor('#60b347');
      document.querySelector('.number').style.width = '30rem';

      // Assign new highscore if the final score is higher than the highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // When guess wrong
    } else if (guessNumber !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guessNumber > secretNumber
            ? '📈 Too HIGH! Try again.'
            : '📉 Too LOW! Try again.'
        );
        score--;
        setScore(score);
      } else {
        displayMessage('💥 You lost the game!');
        setScore(0);
      }
    }
  });

  // Play again
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = generateSecretNumber();
    score = 20;
    setScore(score);
    setBackgroundColor('#222');
    setSecretNumber('?');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
  });
};

playGame();
