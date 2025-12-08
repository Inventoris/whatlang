let score = 0;
let record = parseInt(localStorage.getItem('whatlangRecord') || '0', 10);
let used = new Set();
let roundsLimit = 0;
let roundsLeft = Infinity;

const scoreEl = document.getElementById('score');
const recordEl = document.getElementById('record');
const resultEl = document.getElementById('result');
const photoEl = document.getElementById('photo');
const nextBtn = document.getElementById('next');
const roundsSel = document.getElementById('rounds-select');
const roundsCounter = document.getElementById('rounds-counter');

recordEl.value = record;

let pool = [...questions].sort(() => Math.random() - 0.5);
let index = 0;


// ------------------------------------------------------------
// Restart the game
// ------------------------------------------------------------
function restartGame() {
  score = 0;
  used.clear();
  scoreEl.value = 0;

  roundsLimit = parseInt(roundsSel.value, 10);
  roundsLeft = roundsLimit === 0 ? Infinity : roundsLimit;

  roundsCounter.textContent = roundsLimit === 0 ? '∞' : `1 / ${roundsLimit}`;

  index = 0;
  pool = [...questions].sort(() => Math.random() - 0.5);

  showQuestion();
}


// ------------------------------------------------------------
// Show a question
// ------------------------------------------------------------
function showQuestion() {
  let q;
  let safety = 0;

  while (true) {
    q = pool[index++];

    if (index >= pool.length) index = 0;

    if (!used.has(q.lang)) break;

    if (++safety > pool.length * 2) break;
  }

  const opts = [...q.options].sort(() => Math.random() - 0.5);

  photoEl.src = q.img;
  resultEl.textContent = '';
  document.getElementById('game-footer').style.visibility = 'hidden';

  document.querySelectorAll('.game-answers__answer').forEach((btn, i) => {
    btn.className = 'game-answers__answer';
    btn.textContent = opts[i];
    btn.onclick = () => checkAnswer(opts[i], q.lang, btn);
  });
}


// ------------------------------------------------------------
// Check the answer
// ------------------------------------------------------------
function checkAnswer(ans, correct, btn) {
  document.querySelectorAll('.game-answers__answer').forEach(b => b.onclick = null);

  if (ans === correct) {
    score++;
    used.add(correct);
    scoreEl.value = score;
    btn.classList.add('correct');
    resultEl.textContent = 'Correct!';

    if (score > record) {
      record = score;
      recordEl.value = record;
      localStorage.setItem('whatlangRecord', record);
    }
  } else {
    score = 0;
    scoreEl.value = 0;
    btn.classList.add('wrong');
    resultEl.innerHTML = `Wrong<br>This is <strong>${correct}</strong>`;

    document.querySelectorAll('.game-answers__answer').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
  }

  document.getElementById('game-footer').style.visibility = 'visible';
}


// ------------------------------------------------------------
// Next button
// ------------------------------------------------------------
nextBtn.onclick = () => {
  if (roundsLimit !== 0) {
    roundsLeft--;

    const played = roundsLimit - roundsLeft + 1;
    roundsCounter.textContent = `${played} / ${roundsLimit}`;

    if (roundsLeft <= 0) {
      restartGame();

      return;
    }
  }

  showQuestion();
};


// ------------------------------------------------------------
// Change rounds selection
// ------------------------------------------------------------
roundsSel.onchange = restartGame;

restartGame();
