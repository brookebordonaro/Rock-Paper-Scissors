
// Generate computer choice
let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let x = Math.floor(Math.random() * choices.length);
    return choices[x];
};

let comp_choice = getComputerChoice();

// Gather user input
alert("Hi! Are you ready to play Rock Paper Scissors?");
alert("Enter your choice in 3...2...1...");
let user_input = prompt("Please enter R for Rock, P for Paper, or S for Scissors:");

// Translate user input to a game choice
let user_choice;
switch (user_input) {
    case "R":
        user_choice = "Rock";
        break;
    case "P":
        user_choice = "Paper";
        break;
    case "S":
        user_choice = "Scissors";
        break;
    default:
        user_choice = "Undefined";
        alert("Invalid input - please try again!");
}

// Compare choices to decide game result
let result;

if (!user_choice) {
    result = "undefined";
} else if (user_choice == comp_choice) {
    result = "tie";
} else if (user_choice == "Rock") {
    if (comp_choice == "Scissors"){
        result = "win";
    } else {
        result = "loss";
    }
} else if (user_choice == "Paper") {
    if (comp_choice == "Scissors"){
        result = "loss";
    } else {
        result = "win";
    }
} else {
    if (comp_choice == "Rock"){
        result = "loss";
    } else {
        result = "win";
    }
}

// Display results
console.log("Okay, let's see what we have here...");
console.log("Your Choice: " + user_choice);
console.log("The computer's choice: " + comp_choice);
console.log(" ");

if (result == "undefined"){
    console.log("Please enter a valid choice!")
} else if (result == "tie") {
    console.log("It's a tie!");
} else if (result == "win") {
    console.log("Congratulations! You win.");
} else {
    console.log("Oh no! You've lost.");
}

console.log(" ");
console.log("Thanks for playing! Refresh the page to go again.");