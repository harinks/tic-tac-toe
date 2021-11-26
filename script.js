const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;

const drawBoard = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} wins!!`;
      return;
    }
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
  }
}

const hasPlayerWon = (player) => {
  //from top left, check across, down, and diagonal
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      return true;
    }
  }
  //from bottom check up and across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      return true;
    }
    if (spaces[2] === player && spaces[6] === player) {
        return true;
      }
  }
};

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerHTML = `TIC TAC TOE`;

  currentPlayer = X_TEXT;
});

drawBoard();
