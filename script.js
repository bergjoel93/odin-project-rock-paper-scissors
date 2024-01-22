

 let playerScore = 0;
 let computerScore = 0;

// Add event listener to each button that call playRound function with the correct playerSelection everytime a button is clicked. 
let playerChoice = null;
// let rockBtn = document.querySelector(".rock");
// let paperBtn = document.querySelector(".paper");
// let scissorsBtn = document.querySelector(".scissors");

let buttons = document.querySelectorAll("button");
// Iterate over each button and add a click event listener
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        playerChoice = this.value;
        console.log('The Player Chose: ' + playerChoice);
        playRound(playerChoice, getComputerChoice());
        playerChoice = '';
        updateScores();
    });
})

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1: return 'ROCK';
        break;
        case 2: return 'PAPER';
        break;
        case 3: return 'SCISSORS';
        break;
        default: 
        console.log('Error');
        break;
    }

}

function playRound(playerSelection, computerSelection) {
    //Check for a tie
    console.log("Computer Chose: "+ computerSelection)
    while(playerSelection == computerSelection){
        console.log("Tie");
        computerSelection = getComputerChoice();
        console.log("Computer: "+computerSelection);
    }
    if(playerSelection=='ROCK'){
        if(computerSelection==='SCISSORS'){
            playerScore++;
            console.log("You win! Rock crushes scissors")
            return "You win! Rock crushes scissors";
        }
        else if (computerSelection=='PAPER'){
            computerScore++;
            console.log("You Lose! Paper covers rock")
            return "You Lose! Paper covers rock";
        } 
        else return "ERROR";
    } 
    if(playerSelection==='PAPER'){
        if(computerSelection==='ROCK'){
            playerScore++;
            console.log("You win! Paper covers rock")
            return "You win! Paper covers rock";
        }
        else if(computerSelection=='SCISSORS'){
            computerScore++;
            console.log("You Lose! Scissors beats paper")
            return "You Lose! Scissors beats paper";
        } 
        else return "ERROR";
    } 
    if(playerSelection==='SCISSORS'){
        if(computerSelection==='PAPER'){
            playerScore++;
            console.log("You win! Scissors beats paper")
            return "You win! Scissors beats paper";
        }
        else if (computerSelection=='ROCK'){
            computerScore++;
            console.log("You win! Scissors beats paper")
            return "You Lose! Rock crushes scissors";
        }
        else return "ERROR";
    }
}

function updateScores (){
    if(playerScore >= 5 ) {
        document.querySelector('#playerScore').textContent = playerScore;
        alert("You Win!"+ "\n\nPlayer Score: " + playerScore + "\nComputer Score: " + computerScore);
        resetGame();
    }
    if(computerScore >= 5) {
        document.querySelector('#computerScore').textContent = computerScore;
        alert("You Computer Won!"+ "\n\nPlayer Score: " + playerScore + "\nComputer Score: " + computerScore);
        resetGame();
    }
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".winner").textContent = "";
}
