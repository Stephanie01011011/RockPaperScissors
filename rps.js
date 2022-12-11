var playerWin = 0;
var computerWin = 0;


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
    
    console.log("Player chooses: " + playerSelection)
    console.log("Computer Chooses: " + computerSelection)
    if (playerSelection == computerSelection){
        console.log("tie")
        playerWin += 1;
        computerWin += 1;
    }
    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("computer wins");
        computerWin += 1;
    }
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Player wins");
        playerWin += 1;
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player wins");
        playerWin += 1;
    }
    if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Computer wins");
        computerWin += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("Computer wins");
        computerWin += 1;
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Player wins");
        playerWin += 1;
    }
}

function game(){
    i = 1
    while(i <= 5){
        var playerSelection = prompt("rock, paper, or scissors?");
        computerSelection = getComputerChoice();
        play(playerSelection, computerSelection);
        i += 1;
    }
    if (playerWin > computerWin){
        console.log("Player wins the game");
    } 
    if(computerWins > playerWins){
        console.log("Computer wins the game");
    }
    else {
        console.log("There has been a tie")
    }
}



game();


