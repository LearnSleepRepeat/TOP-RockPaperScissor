/* this is a clusterfuck, but a good learning. needs to be restructured from the ground up. do that when it's time for the GUI! 

script works and gives the correct results (& console logs). but: main problem are the nested functions who create like 6 layers of "parent-functions" when running... see pythontutor to see the effect clearly!

learnings so far:
- keep the structure clean. plan it on paper properly beforehand!
- what goes into the function, what comes out of it? 
- NO "overlapping" functions. get in, do the stuff, go out. 
- keep necessary variables global. enter it into function if necessary, get result back, adjust the variable globally!
- think about the structure in advance. what do i need to keep track of globally, what can be solved inside the function
*/

function playSingleRound(myScore,computerScore,rounds) {

console.log('this is round: '+ rounds); 


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
        doEvaluate(playerSelection, computerSelection);
    }
    }





function doEvaluate(playerSelection,computerSelection) {
    let winner=''
    if (playerSelection === computerSelection) {console.log('You both picked the same choice. Go again.'); }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {console.log('You win. Rock beats scissor'); winner = 'you'; ++myScore; ++rounds; }
    else if (playerSelection === 'scissor' && computerSelection === 'rock')  {console.log('You lose. Rock loses against scissor'); winner = 'computer'; ++computerScore; ++rounds; }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {console.log('You win. Scissor beats paper'); winner='you'; myScore += 1; ++myScore; ++rounds; }
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {console.log('You lose. Paper loses against scissor'); winner='computer'; ++computerScore; ++rounds; }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {console.log('You win. Paper beats rock'); winner='you'; ++myScore; ++rounds; }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {console.log('You lose. Rock loses against paper'); winner='computer'; ++computerScore; ++rounds; }
    else console.log('something went wrong. not a valid pairing.' + 'myselection:' + playerSelection)
    console.log(winner)
    console.log('number of round: ' + rounds + '; My score :' + myScore + '. computerScore: ' + computerScore)
    

if (rounds < 6) playSingleRound(myScore,computerScore,rounds);
}


console.log('Final Score is ' + myScore); 
console.log('we should be done now, but probably are not');

}

playSingleRound(0,0,1)

console.log('dooooooooooooone!')

