


function playSingleRound() {

    let computerSelection = getComputerChoice();


    function getComputerChoice() {
        const choice = ['rock', 'paper', 'scissor']
        const random = Math.floor(Math.random() * choice.length);
        let computerSelection = (random, choice[random]);
        console.log('Computer picks ' + computerSelection)
        return computerSelection;
        }

    let playerSelection = getPlayerChoice();

    function getPlayerChoice() {
    let playerSelection = prompt('Please make your choice', 'Enter "Rock" "Paper" or "Scissor"').toLowerCase();
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor')) {
        alert('Please only enter "Rock", "Paper" or "Scissor".'); 
        getPlayerChoice();
    }
    else {
        console.log("You pick " + playerSelection); 
        doEvaluate(playerSelection, computerSelection)
    }
    }





function doEvaluate(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) console.log('You both picked the same choice. Go again.')
    else if (playerSelection === 'rock' && computerSelection === 'scissor') console.log('You win. Rock beats scissor');
    else if (playerSelection === 'scissor' && computerSelection === 'rock') console.log('You lose. Rock loses against scissor');
    else if (playerSelection === 'scissor' && computerSelection === 'paper') console.log('You win. Scissor beats paper');
    else if (playerSelection === 'paper' && computerSelection === 'scissor') console.log('You lose. Paper loses against scissor');
    else if (playerSelection === 'paper' && computerSelection === 'rock') console.log('You win. Paper beats rock');
    else if (playerSelection === 'rock' && computerSelection === 'paper') console.log('You lose. Rock loses against paper');
    else console.log('something went wrong. not a valid pairing.' + 'myselection:' + playerSelection)
}
}

playSingleRound()



// rock beats scissor
// scissor beats paper
// paper beats rock