/*
Rock paper scissors contains 2 players and 3 items and only 1 player can win. 
Rock beats scissors.
Scissors beats paper.
Paper beats rock. 
If both players uses the same item, its a draw.
*/

let player1Name = prompt(`What is your name challenger?`)

//add possible states
const states = ['won', 'lost', 'tied'];
//add possible choices player can select from
const choices = ['rock', 'paper', 'scissors'];

//random Integer Generator Function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

while (true) {
    //ask for users input for rock paper or scissors
    let pick = prompt(`Alright, ${player1Name}. Pick rock, paper or scissors`).toLowerCase().trim();
    console.log(`You entered ${pick}`)
    //if player wants to quit, let them
    if (pick === "q") {
        console.log("You are now quitting the game")
        break;
    }
    //error handle if player selects a choice not in choices
    if (!(choices.includes(pick))) {
        console.log(`${pick} is not valid choice`);
        continue;
    }
    //have computer select a random input
    let randomInteger = getRandomInt(3)
    let computerChoice = choices[randomInteger]
    //log what the computer selects from choices
    console.log(`Computers choice is ${computerChoice}`)

    if (pick === computerChoice) {
        console.log(`Its a tie`)
    } else if (pick === "rock") {
        if (computerChoice === "scissors") {
            console.log(`Rock beats scissors`)
        } else {
            console.log(`Paper beats rock`)
        }
    } else if (pick === "paper") {
        if (computerChoice === "rock") {
            console.log(`Paper beats rock`)
        } else {
            console.log(`Scissors beats paper`)
        }
    } else if (pick === "scissors") {
        if (computerChoice === "paper") {
            console.log(`Scissors beats paper`)
        } else {
            console.log(`Rock beats scissors`)
        }
    }
}
