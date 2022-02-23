function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    randomInt = getRandomInt();
    if (randomInt === 0) return 'rock';
    else if (randomInt === 1) return 'paper'; 
    else return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        paraRound.textContent = "Draw!";
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
            || (playerSelection === "paper" && computerSelection === "rock")
            || (playerSelection === "scissors" && computerSelection === "paper")) {
                paraRound.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        return 1;
    } else {
        paraRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return 2;
    }
}

function countScore(score) {
    if (score === 1) playerScore +=1;
    if (score === 2) computerScore +=1;
    paraScore.textContent = `FINAL SCORE: You - ${playerScore}, Computer - ${computerScore}`;
}

function play() {
    const score = playRound(this.id, computerPlay());
    countScore(score);  
};

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.button');
const game = document.querySelector('.game');
const paraScore = document.createElement('p');
const paraRound = document.createElement('p');
game.append(paraRound, paraScore);

buttons.forEach(button => {
    button.addEventListener('click', play)
});