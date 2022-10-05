let numberRounds = 0
let myScore = 0
let pcScore = 0

const roundText = document.getElementById('numberRounds')
const gameButton = document.getElementById('playRound')
const scoreMe = document.getElementById('scoreMe')
const scorePc = document.getElementById('scorePc')

function pickRandomWinner() {
    return Math.floor(Math.random()*3);
}

function singleGame() {
    let x = pickRandomWinner();
    if (x === 0) {
        alert('Even Game');
        numberRounds += 1;
        console.log(numberRounds)
        roundText.textContent = `Number of Rounds: ${numberRounds}`;
    }
    else if (x === 1) {
        alert('You win!');
        myScore += 1;
        numberRounds += 1;
        console.log(numberRounds)
        roundText.textContent = `Number of Rounds: ${numberRounds}`;
        scoreMe.textContent = `My Score: ${myScore}`;
        scorePc.textContent = `Computer Score: ${pcScore}`;
    }
    else if (x === 2) {
        alert('Computer wins!');
        pcScore += 1;
        numberRounds += 1;
        console.log(numberRounds)
        roundText.textContent = `Number of Rounds: ${numberRounds}`;
        scoreMe.textContent = `My Score: ${myScore}`;
        scorePc.textContent = `Computer Score: ${pcScore}`;
        }
}

gameButton.addEventListener('click', () => {singleGame()})



roundText.textContent = `Number of Rounds: ${numberRounds}`;
myScore.textContent = `${myScore}`;
pcScore.textContent = `${pcScore}`;