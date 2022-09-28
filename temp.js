getPlayerChoice();

    function getPlayerChoice() {
    let playerSelection = prompt('Please make your choice').toLowerCase();
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor')) {
        alert('Please only enter "Rock", "Paper" or "Scissor".'); 
    getPlayerChoice();
    }
    else {
        console.log(playerSelection); 
    }
    }
