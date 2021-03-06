function computerPlay() {
    randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) return 'rock';
    if (randomInt === 1) return 'paper'; 
    else return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        paraRound.textContent = `A tie! ${playerSelection} and ${computerSelection}`;
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
    if (rounds > 4) {
        playAgainBtn.style.display = '';
        paraRound.textContent = '';
        disableBtns();
    }
    if (score === 1) playerScore +=1;
    if (score === 2) computerScore +=1;
    roundCount.textContent = `Round: ${rounds}`;
    paraScore.textContent = `SCORE: You - ${playerScore}, Computer - ${computerScore}`;
}

function play(e) {
    const score = playRound(e.target.id, computerPlay());
    rounds++;
    countScore(score);  
};

function disableBtns() {
    buttons.forEach(button => {
        button.disabled = !button.disabled;
    })
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const buttons = document.querySelectorAll('.button');
const game = document.querySelector('.game');
const roundCount = document.createElement('p');
const paraScore = document.createElement('p');
const paraRound = document.createElement('p');
game.append(roundCount, paraRound, paraScore);
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play again?'
playAgainBtn.style.display = 'none';
game.appendChild(playAgainBtn);


buttons.forEach(button => {
    button.addEventListener('click', play)
});

playAgainBtn.addEventListener('click', (e) => {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    paraScore.textContent = '';
    roundCount.textContent = '';
    playAgainBtn.style.display = 'none';
    disableBtns();
})