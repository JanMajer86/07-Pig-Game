'use strict';

// Selecting Elements //

// scores
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Variables

// main score - player 0 : player 1
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// Initializing Game
const initGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};

// Rolling a Dice
const rollDice = function () {
  // 1. Generating a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;

  // 3. Check for rolled 1
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

btnRollDice.addEventListener('click', rollDice);
btnNew.addEventListener('click', initGame);

initGame();
