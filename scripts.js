function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    randomInt = getRandomInt();
    if (randomInt === 0) return 'Rock';
    else if (randomInt === 1) return 'Paper'; 
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw");
        return 0;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
            || (playerSelection === "Paper" && computerSelection === "Rock")
            || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let score = playRound(computerPlay(), computerPlay());
        if (score === 1) playerScore +=1;
        if (score === 2) computerScore +=1;
    }
    console.log(`FINAL SCORE: Player - ${playerScore}, Computer - ${computerScore}`);
}

game();