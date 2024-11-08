function getComputerChoice() {
    const a = Math.floor(Math.random() * 3);
    let decision = "Problem";
    if (a == 0){
        decision = "rock"
    }
    else if(a == 1){
        decision = "paper"
    }
    else if (a == 2){
        decision = "scissors"
    }
    return decision    
};

function getHumanChoice(){
    let possibilities = ["rock", "paper", "scissors"];
    let choice = prompt("Your choice?").toLowerCase();
    if (possibilities.includes(choice)){
        return choice
    }
    else {
        return "Problem"
    }

};

function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + humanSelection);

    if (humanSelection == computerSelection){
        console.log("It's a draw");
        computerScore += 1
        humanScore += 1
    }
    else if(humanSelection != computerSelection){
        // rock beats scissors
        // scissors beats paper
        // paper beats rock
        if (humanSelection == "rock"){
            if (computerSelection == "scissors"){
                console.log("You win this round")
                humanScore += 1
            }
            else {
                console.log("You loose this round")
                computerScore += 1
            }
        }
        else if (humanSelection == "scissors"){
            if (computerSelection == "paper"){
                console.log("You win this round")
                humanScore += 1
            }
            else {
                console.log("You loose this round")
                computerScore += 1
            }
        }
        else if (humanSelection == "paper"){
            if (computerSelection == "rock"){
                console.log("You win this round")
                humanScore += 1
            }
            else {
                console.log("You loose this round")
                computerScore += 1
            }
    
        }
    }
    else{console.log("Problem")}
};

function playGame(rounds=0){
    let maxRounds=4
    if (rounds <= maxRounds){
        console.log("Round: " + rounds)
        console.log("Score: "+ computerScore+" for computer " + humanScore + " for you.")
        playRound()
        console.log("Score: "+ computerScore+" for computer " + humanScore + " for you.")
        rounds += 1
        playGame(rounds)
    }
    else{
        console.log("The final score is: " + humanScore + " for you, and: "+ computerScore + " for computer.")
    }
}

let humanScore = 0
let computerScore = 0
wrap_around()

function wrap_around (){
    willingness = prompt("Do you want to play? YES/NO").toUpperCase()
    if (willingness == "YES"){
        humanScore = 0
        computerScore = 0
        playGame()
        wrap_around()
    }
    else{
        console.log("What now?")
    }
}
