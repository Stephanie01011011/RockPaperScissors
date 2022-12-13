var playerWin = 0;
var computerWin = 0;
var rockButton = document.querySelector("#rock");
var paperButton = document.querySelector("#paper");
var scissorsButton = document.querySelector("#scissors");
const display = document.querySelector("#display");
const scoreDisplay = document.querySelector("#scoreDisplay");
const ps = document.querySelector("#playerScore");
const cs = document.querySelector("#computerScore");

function getComputerChoice(){ 
    computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function play(playerSelection, computerSelection){
    const playerScore = document.createElement('p');
    playerScore.innerText = "Player Score: ";
    const computerScore = document.createElement('p');
    computerScore.innerText = "Computer Score: ";
    console.log("Player chooses: " + playerSelection)
    console.log("Computer Chooses: " + computerSelection)
    if (playerSelection == computerSelection){
        const p = document.createElement('p');
        p.innerText = `You tied. You both chose ${playerSelection}.`
        display.appendChild(p);
        playerWin += 1;
        computerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;

    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        const p = document.createElement('p');
        p.innerText = "Computer wins. Paper covers rock."
        display.appendChild(p);
        computerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    if (playerSelection == "rock" && computerSelection == "scissors"){
        const p = document.createElement('p');
        p.innerText = "You win. Rock smashes scissors."
        display.appendChild(p);
        playerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        const p = document.createElement('p');
        p.innerText = "You win. Paper covers rock."
        display.appendChild(p);
        playerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    if (playerSelection == "paper" && computerSelection == "scissors"){
        const p = document.createElement('p');
        p.innerText = "Computer wins. Scissors cut paper."
        display.appendChild(p);
        computerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    if (playerSelection == "scissors" && computerSelection == "rock"){
        const p = document.createElement('p');
        p.innerText = "Computer wins. Rock smashes scissors."
        display.appendChild(p);
        computerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        const p = document.createElement('p');
        p.innerText = "You win. Scissors cut paper."
        display.appendChild(p);
        playerWin += 1;
        ps.innerText = `Player Score: ${playerWin}`;
        cs.innerText = `Computer Score: ${computerWin}`;
    }
    
    return playerWin, computerWin;
}




function scoreChecker(playerWin, computerWin){
    console.log(playerWin, computerWin)
    if(playerWin == 5){
        const winner = document.createElement('h2');
        winner.innerText = "Player wins 5 rounds";
        scoreDisplay.insertBefore(winner, ps);
    } else if(computerWin == 5){
        const winner = document.createElement('h2');
        winner.innerText = "Computer wins 5 rounds";
        scoreDisplay.insertBefore(winner, ps);
    } else {
        return 0;
    }
    

}

document.getElementById("rock").onclick = function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    play(playerSelection, computerSelection);
    scoreChecker(playerWin, computerWin);
   
}

document.getElementById("paper").onclick = function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    play(playerSelection, computerSelection);
    scoreChecker(playerWin, computerWin);
}
document.getElementById("scissors").onclick = function() {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    play(playerSelection, computerSelection);
    scoreChecker(playerWin, computerWin);
}

