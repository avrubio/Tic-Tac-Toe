# Project: Tic-Tac-Toe

## Installation:

None needed, it is live via : Link is **\_**

## Wireframe:

![Screenshot](TicTacToeWireframe.jpg)

## Preview

This is a game of tic tac toe, with scoreboard counter and light and dark theme mode:

## Technology used:

Vanilla JavaScript
HTML
CSS

## Approach:

The main approach to the game is using an event clicker on the container that holds the table element for the Tic Tac Toe board. This listens to when the user clicks on a certain box to put down a x or o and adds the respective class name to each box to display the X or O. I used an if else statement to be able to determine which class to add to a box depending who the current player is.

It is also letting you know who's turn it is to click on a box, while listening for winning combinations to then announce the winner - I accomplished this creating an array that holds winning combinations indices of the boxes, to then have a for of loop run through the array of arrays checking for winning indices with matching classes for x or o, so it can then displaying a winner message at the top of the board.

Scoreboard-

New Game Button-

Main features:
Responsive Design-desktop and mobile
Rounds Won- persists and knows how many rounds won by either x or o
Theme Change-Dark/light Mode

## User Stories

As a user, I should be able to start a new tic tac toe game
As a user, I should be able to click on a square to add X first and then O, and so on
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
As a user, I should not be able to click the same square twice
As a user, I should be shown a message when I win, lose or tie
As a user, I should not be able to continue playing once I win, lose, or tie
As a user, I should be able to play the game again without refreshing the page

## What can be improved?

UI Design could be cleaner, will work on this later on.
