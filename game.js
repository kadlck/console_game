function getComputerChoice() {
    const a = Math.floor(Math.random() * 3);
    let decision = "Problem";
    if (a == 0){
        decision = "ROCK"
    }
    else if(a == 1){
        decision = "PAPER"
    }
    else if (a == 2){
        decision = "SCISSORS"
    }
    return decision    
};

function playRound(click){
    const humanSelection = click;
    const computerSelection = getComputerChoice();
    printText(("Computer chose: " + computerSelection));
    printText(("You chose: " + humanSelection));

    if (humanSelection == computerSelection){
        printText("It's a draw");
        computerScore += 1;
        humanScore += 1;
    }
    else if(humanSelection != computerSelection){
        // rock beats scissors
        // scissors beats paper
        // paper beats rock
        if (humanSelection == "ROCK"){
            if (computerSelection == "SCISSORS"){
                printText("You win this round");
                humanScore += 1;
            }
            else {
                printText("You loose this round");
                computerScore += 1;
            }
        }
        else if (humanSelection == "SCISSORS"){
            if (computerSelection == "PAPER"){
                printText("You win this round");
                humanScore += 1;
            }
            else {
                printText("You loose this round");
                computerScore += 1;
            }
        }
        else if (humanSelection == "PAPER"){
            if (computerSelection == "ROCK"){
                printText("You win this round");
                humanScore += 1;
            }
            else {
                printText("You loose this round");
                computerScore += 1;
            }
        }
    }
    resume()
};

function resume(){}

async function playGame(rounds=0, maxRounds=4){
    if (rounds < maxRounds ) {
        var promise = new Promise((resolve) => {
            resume = () => resolve()
          });
        await promise
        printText(("Round " + rounds + " is " + computerScore + " for computer " + humanScore + " for you."));
        rounds += 1
        playGame(rounds)
    }
    else if (rounds == maxRounds){
        const second = document.querySelector(".second");        
        //second.replaceChildren();
        const finalMessage = document.createElement("p");
        finalMessage.textContent = "The final score is: " + humanScore +
         " for you, and: "+ computerScore + " for computer.";
        second.appendChild(finalMessage)
        getSecondClick()
    }
}

function wrap_around (decision){
    if (decision == "YES"){
        humanScore = 0
        computerScore = 0
        playGame()
        new_buttons()
    }else{
        const second = document.querySelector(".second");        
        second.replaceChildren();
        const secondsecondtext = document.createElement("p");
        secondsecondtext.textContent = "Yeah. No. Click YES"
        second.appendChild(secondsecondtext);
        getSecondClick();
    }
}

let humanScore = 0
let computerScore = 0
let decision = "Problem"
const first = document.querySelector(".first");
const startBtn = document.createElement("button");
startBtn.classList.add("start");
startBtn.textContent = "Click me baby!";
startBtn.addEventListener("click", function together(){
    first.removeChild(startBtn);
    getSecondClick();
});
first.appendChild(startBtn);

function getSecondClick(){
    const second = document.querySelector(".second");
    const quest = document.createElement("p");
    quest.textContent = "Do you want to play?"
    const firstBtns1 = document.createElement("button");
    firstBtns1.textContent = "YES";
    firstBtns1.addEventListener("click", function exectute(){
        wrap_around("YES")});
    const firstBtns2 = document.createElement("button");
    firstBtns2.textContent = "NO";
    firstBtns2.addEventListener("click", function exectute(){
        wrap_around("NO")});
    second.appendChild(quest)
    second.appendChild(firstBtns1)
    second.appendChild(firstBtns2)
}

function printText(text){
    const second = document.querySelector(".second");
    const textIwant = document.createElement("p")
    textIwant.textContent = text
    second.appendChild(textIwant)
}

function new_buttons(){
    const second = document.querySelector(".second");
    second.replaceChildren();
    generateButtons()
}

function generateButtons(){
    const second = document.querySelector(".second");
    const rock = document.createElement("button");
    rock.textContent = "ROCK";
    rock.addEventListener("click", function exectute(){
        playRound("ROCK")});
    const paper = document.createElement("button");
    paper.textContent = "PAPER";
    paper.addEventListener("click", function exectute(){
    playRound("PAPER")});
    const scissors = document.createElement("button");
    scissors.textContent = "SCISSORS";
    scissors.addEventListener("click", function exectute(){
        playRound("SCISSORS")});
    second.appendChild(rock)
    second.appendChild(paper)
    second.appendChild(scissors)
}
