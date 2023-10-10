let choices = ["Rock", "Paper", "Scissors"];

// Generates computer choice
function getComputerChoice() {
    let x = Math.floor(Math.random() * choices.length);
    return choices[x];
};

// Gather user input
function getUserChoice() {
    alert("Hi! Are you ready to play Rock Paper Scissors?");
    alert("Enter your choice in 3...2...1...");
    return prompt("Please enter R for Rock, P for Paper, or S for Scissors:");
};

// Translate user input to a game choice
function translateUserInput(input) {
    temp = input.toUpperCase();
    switch (temp) {
        case "R":
            return "Rock";
            break;
        case "P":
            return "Paper";
            break;
        case "S":
            return "Scissors";
            break;
        default:
            alert("Invalid input - please try again!");    
            return "undefined";
    }
};

// Returns result of game given user and computer choices
function playGame(user, comp) {
    // make sure both inputs are one of the choices
    if (user != "Rock" && user != "Paper" && user != "Scissors"){
        return "error";
    }
    if (comp != "Rock" && comp != "Paper" && comp != "Scissors"){
        return "error";
    }
    
    // compare user and computer choices
    if (user==comp){
        return "tie";
    } else if (user == "Rock") {
        if (comp == "Scissors"){
            return "win";
        } else {
            return "loss";
        }
    } else if (user == "Paper") {
        if (comp == "Scissors"){
            return "loss";
        } else {
            return "win";
        }
    } else {
        if (comp == "Rock"){
            return "loss";
        } else {
            return "win";
        }
    }
};

//Display game results
function displayResults(user, comp, outcome) {
    if (outcome == "error"){
        console.log("Please refresh and enter a valid choice!")
        return;
    }

    console.log("Okay, let's see what we have here...");
    console.log("Your Choice: " + user);
    console.log("The computer's choice: " + comp);
    console.log(" ");
    if (outcome == "tie") {
        console.log("It's a tie!");
    } else if (outcome == "win") {
        console.log("Congratulations! You win.");
    } else {
        console.log("Oh no! You've lost.");
    }
    console.log(" ");
    console.log("Thanks for playing! Refresh the page to go again.");
};

// ------------------------------------------------------------------------
// Gather user input
let user_choice = translateUserInput(getUserChoice());

// Generate computer choice
let comp_choice = getComputerChoice();

// Compare choices to decide game result
let result = playGame(user_choice, comp_choice);

displayResults(user_choice, comp_choice, result);

