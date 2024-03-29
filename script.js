let currentPlayer = "Ravi";
let cells = document.querySelectorAll(".cell");

function placeSymbol(index) {
  if (!cells[index].textContent) {
    var claping = new Audio("claps.mp3");
    claping.play();

    cells[index].textContent = currentPlayer === "Ravi" ? "❤️" : "➡️";
    if (checkWin()) {
      alert("Congratulations " + currentPlayer + "😎😎😎 you  win the game");
      var audio = new Audio("ipl.mp3");
      audio.play();

      setTimeout(() => {
        resetGame();
      }, 2000);
    } else if (isBoardFull()) {
      var audio = new Audio("aipaye.mp3");
      audio.play();

      alert("Hoo! Game is Tie😔😔😔. Play Again in two seconds");
      setTimeout(() => {
        resetGame();
      }, 2000);
    } else {
      currentPlayer = currentPlayer === "Ravi" ? "Jay" : "Ravi";
    }
  }
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "Ravi";
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function isBoardFull() {
  return [...cells].every((cell) => cell.textContent !== "");
}
