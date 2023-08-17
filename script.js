//8 possible ways to win
//1 row1,box 1, row2, box 1, row3, box 1
//2 row1,box 2, row2, box 2, row3,box 2
//3 row1,box 3, row2, box 3, row3,box 3
//4 row1,box 1, row2, box 2, row3,box 3
//5 row1,box 3, row2, box 2, row3,box 1
//6 row 1,box 1, box 2, box3
//7 row 2,box 1, box 2, box3
//8 row 3,box 1, box 2, box3

//there are 9 boxes so only 9 turns or until they reach the possible ways of winning

//grabs entire container of the boxes
const container = document.querySelector(".container");
//player counter
let currentPlayer = "X";

const ticTacToe = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");

// listen for a click event on the 'container' element
container.addEventListener("click", function (event) {
  // Check if the clicked element has the 'box' class (a game box)
  // and also check if it doesn't have any content (text)
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

      // Iterate through winning combinations
      for (const combo of winningCombos) {
        // If the specified class has won based on the current combination
        if (checkWinForIndices(combo, className)) {
          // Print the winning message
          console.log(`Player ${className.toUpperCase()} won!`);
          return;
        }
      }
    }

    // Call the checkForWin function to check for a win by "o" class
    checkForWin("o");

    // Call the checkForWin function to check for a win by "x" class
    checkForWin("x");
  }
});

// be shown a message when I win, lose or tie

// should not be able to continue playing once I win, lose, or tie

// RESET GAME BUTTON

// I should be able to play the game again without refreshing the page
