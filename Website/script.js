// script.js
document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const cardsArray = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "H",
    "H",
  ];

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  function createCard(value) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    card.textContent = value;
    card.addEventListener("click", flipCard);
    return card;
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  let match = 0;
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    match++;
    console.log(match)
    if (match === 8) {
      lauchConfetti();
    }
    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");

      resetBoard();
    }, 1000);
  }

  function lauchConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#00ff00", "#0000ff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ffff00", "#ff00ff", "#00ffff"],
      });

      if(Date.now() < end){
        
        requestAnimationFrame(frame);
      }
    }());
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function initGame() {
    shuffle(cardsArray);
    cardsArray.forEach((value) => {
      const card = createCard(value);
      gameBoard.appendChild(card);
    });
  }

  initGame();
});
