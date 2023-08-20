//grabs entire container of the boxes
const container = document.querySelector(".container");
//player counter
let currentPlayer = "X";
let playerXCounter = 0;
let playerOCounter = 0;
//
const ticTacToe = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
//grabs the x player box
const playerXScore = document.querySelector("#playerXScore");
//grabs the O player box
const playerOScore = document.querySelector("#playerOScore");

// function for a click event on the 'container' element
function handleClick(event) {
  // Check if the clicked element has the 'box' class (a game box)
  // and also check if it doesn't have any content
  if (
    event.target.classList.contains("box") &&
    // not be able to click the same square twice, checks if the box already has an x or o class
    !event.target.classList.contains("x") &&
    !event.target.classList.contains("o")
  ) {
    // event.target.textContent = currentPlayer;
    if (currentPlayer === "X") {
      //adds class to the box to add the X emoji
      event.target.classList.add("x");
    } else if (currentPlayer === "O") {
      //adds class to the box to add the O emoji
      event.target.classList.add("o");
    }
    // toggle players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    //prints who's turn is next

    //grabs the h1 element to display message
    let title = document.querySelector("h1");
    //displays message on who's turn it is
    title.innerText = `${currentPlayer} your turn!`;
    // function that checks if all elements at given indices have a specific class
    function checkWinForIndices(indices, className) {
      // Use the every() method to check if all elements at the given indices have the specified class
      return indices.every((index) =>
        boxes[index].classList.contains(className)
      );
    }
    // function that checks for a win based on a given class name
    function checkForWin(className) {
      // winning combinations based on the index of the boxes
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

      // iterate through winning combinations
      for (const combo of winningCombos) {
        // if the specified class has won based on the current combination
        if (checkWinForIndices(combo, className)) {
          // print the winning message
          let title = document.querySelector("h1");
          // be shown a message when I win, lose or tie
          title.innerText = `Player ${className.toUpperCase()} won!`;

          // should not be able to continue playing once I win, lose, or tie
          // Remove the click event listener once a winner is determined
          container.removeEventListener("click", handleClick);

          if (className == "x") {
            playerXCounter++;
            return (playerXScore.innerText = playerXCounter);
          } else if (className == "o") {
            playerOCounter++;
            return (playerOScore.innerText = playerOCounter);
          }
          return;
        }
      }
    }

    // call the checkForWin function to check for a win by "o" class
    checkForWin("o");

    // call the checkForWin function to check for a win by "x" class
    checkForWin("x");

    //checks every box to see if there is a x or o class
    const allBoxesFilled = Array.from(boxes).every(
      (box) => box.classList.contains("x") || box.classList.contains("o")
    );

    //if all boxes are filled display the draw message
    if (allBoxesFilled) {
      let title = document.querySelector("h1");
      title.innerText = "It's a draw!";
      container.removeEventListener("click", handleClick);
    }
  }
}

// RESET GAME BUTTON

// I should be able to play the game again without refreshing the page
//grabs the reset game button
const resetGame = document.querySelector("#resetGame");

function resetSingleGame() {
  //for each box in the container
  boxes.forEach((box) => {
    //checks if each box has either and o or x class
    if (box.classList.contains("x") || box.classList.contains("o")) {
      //removes the class to remove the x or o displayed on the board
      box.classList.remove("x");
      box.classList.remove("o");
    }
    //resets the title back to original Lets Play Tic Tac Toe
    let title = document.querySelector("h1");
    // be shown a message when I win, lose or tie
    title.innerText = `Lets play Tic-Tac-Toe!`;
  });
  //resets the container to start the game over but saves the rounds
  container.addEventListener("click", handleClick);
  //resets first player to X
  currentPlayer = "X";
}

//Reset the whole board----
//grabs the reset whole board button
const resetWholeGame = document.querySelector("#resetBoard");
function resetWholeGameBoard() {
  //for each box in the container
  boxes.forEach((box) => {
    //checks if each box has either and o or x class
    if (box.classList.contains("x") || box.classList.contains("o")) {
      //removes the class to remove the x or o displayed on the board
      box.classList.remove("x");
      box.classList.remove("o");
    }
    //resets the title back to original Lets Play Tic Tac Toe
    let title = document.querySelector("h1");
    // be shown a message when I win, lose or tie
    title.innerText = `Lets play Tic-Tac-Toe!`;
    //starting number for rounds won
  });
  //resets the round counter
  playerOCounter = 0;
  playerXCounter = 0;
  playerXScore.innerText = playerXCounter;
  playerOScore.innerText = playerOCounter;

  container.addEventListener("click", handleClick);
  //resets first player to X
  currentPlayer = "X";
}

//light dark mode
const toggleSwitch = document.querySelector(".switch");
toggleTheme = () => {
  const checkbox = toggleSwitch.parentElement.querySelector(
    "input[type='checkbox']"
  );
  const scoreboard = document.querySelector(".scoreBorder");
  if (checkbox.checked) {
    // The input is checked
    document.body.style.backgroundColor = "black";
    //changes the scoreboard color
    scoreboard.style.backgroundColor = "black";
    //text of xo and score
    playerOScore.style.color = "white";
    playerXScore.style.color = "white";
    playerO.style.color = "white";
    playerX.style.color = "white";
  } else {
    // The input is not checked
    document.body.style.backgroundColor = ""; // Remove the background color
    scoreboard.style.backgroundColor = "";
    playerOScore.style.color = "black";
    playerXScore.style.color = "black";
    playerO.style.color = "black";
    playerX.style.color = "black";
  }
};

//starting number for rounds won
playerXScore.innerText = playerXCounter;
playerOScore.innerText = playerOCounter;
// Add the click event listener using the defined function
container.addEventListener("click", handleClick);

//Light dark theme button
toggleSwitch.addEventListener("click", toggleTheme);
//listens to click on btn to reset whole game
resetWholeGame.addEventListener("click", resetWholeGameBoard);
//listens for a click to reset the game but not the whole board
resetGame.addEventListener("click", resetSingleGame);
