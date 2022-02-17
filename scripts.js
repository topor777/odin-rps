function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    randomInt = getRandomInt();
    if (randomInt === 0) return 'Rock';
    else if (randomInt === 1) return 'Paper'; 
    else return 'Scissors';
}

function playerPlay() {
    let attemps = 0;
    while (true) {
        let str = prompt('Type: Rock, Paper or Scissors');
        str = str.toLowerCase();
        str = str.replace(str[0], str[0].toUpperCase());
        switch (str) {
            case 'Rock': return str;
            case 'Paper': return str;
            case 'Scissors': return str;
            default: 
                attemps++;
                if (attemps > 2) {
                    str = computerPlay();
                    alert(`You're hopeless, I chose for you: "${str}"`);
                    return str;
                }
                alert("Please, enter only one word: Rock OR Paper OR Scissors");
        }
    }
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
        let score = playRound(playerPlay(), computerPlay());
        if (score === 1) playerScore +=1;
        if (score === 2) computerScore +=1;
    }
    console.log(`FINAL SCORE: You - ${playerScore}, Computer - ${computerScore}`);
}

game();