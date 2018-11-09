// For animation
"use strict";

// Declare variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var userGuessesSoFar = [];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// Initialize variables to the HTML elements
function updateScores() {
    document.getElementById("total-wins").innerHTML = wins;
    document.getElementById("total-losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = numberOfGuesses;
    document.getElementById("user-guess").innerHTML = userGuessesSoFar;
}
// Load and display
updateScores();

// When user presses the key, starts the game
document.onkeyup = function (event) {

    // Get user's input.
    var userGuess = event.key.toLowerCase();

    // If user's input letter doesn't exist, store it
    if (!userGuessesSoFar.includes(userGuess)) {
        userGuessesSoFar.push(userGuess);

        // If user's guess is the same as the computer's guess
        if (userGuess === computerGuess) {
            wins++;
            winHeartAnimation()
            updateScores();
            resetGame();

        // If user's guess is not the same as the computer's guess
        } else {
            numberOfGuesses--;
            updateScores();
            if (numberOfGuesses === 0) {
                losses++;
                resetGame();
                updateScores();
                lossHeartAnimation()
            }
        }
    }
}

// The Win Heart animation
function winHeartAnimation() {
    var winHeart = document.getElementById("win-heart");
    winHeart.classList.remove("shake");
    void winHeart.offsetWidth;
    winHeart.classList.add("shake");
}

// The Loss Heart animation
function lossHeartAnimation() {
    var lossHeart = document.getElementById("loss-heart");
    lossHeart.classList.remove("shake");
    void lossHeart.offsetWidth;
    lossHeart.classList.add("shake");
}

// Declare the reset function for the game
function resetGame() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    numberOfGuesses = 9;
    userGuessesSoFar = [];
}