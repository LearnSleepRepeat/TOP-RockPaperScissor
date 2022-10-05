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
        //alert('Even round');
        ++numberRounds;
    }
    else if (x === 1) {
        //alert('You win this round!');
        ++myScore;
        ++numberRounds;
    }
    else {
        //alert('Computer wins this round!');
        ++pcScore;
        ++numberRounds;
        }
    roundText.textContent = `Number of Rounds: ${numberRounds}`;
    scoreMe.textContent = `My Score: ${myScore}`;
    scorePc.textContent = `Computer Score: ${pcScore}`;
    if (myScore === 5 || pcScore === 5) {
        gameOver()};
}


gameButton.addEventListener('click', () => {singleGame()})

function gameOver() {
    if (myScore > pcScore) {
        alert('You won!');
    }
    else {
        alert('The computer won!');
    }
}