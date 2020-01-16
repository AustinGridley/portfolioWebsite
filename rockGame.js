//when one clicks on the button to input what they choose this function shoots off
function mainThing() {
    gamePlay()
}
//this function is the actual calculations and output of the game and could be used in multiple places
function gamePlay() {
    //this function takes their input and prints it approriately and changes it to a number for calculations
    youPicked()
    //this function randomly generates a choice of rock paper or scissors by the computer and prints it appriately
    computerPicks()
    //this function takes what the user picked and what the computer generated and finds out who won and prints it
    whoWon()
    //this function keeps track and prints how many wins / ties / and losses the user and computer have
    lucky()
}
//sets this var with a huge scope which I want
var userChoiceGlobal;
//this function takes their input and prints it approriately and changes it to a number for calculations
function youPicked() {
//this function captures their response and prints their response appropriately
    let userChoice = document.getElementById("inputText").value;
    userChoice = userChoice.toLowerCase();
     userChoiceGlobal = userChoice;
     
     if (userChoice=="rock") {
        userChoiceGlobal=1;
    }
    if (userChoice=="paper") {
        userChoiceGlobal=2;
    }
    if (userChoice=="scissors") {
        userChoiceGlobal=3;
    }
//this if statement will catch if they don't input rock paper or scissors and output an error message
    if(userChoice != "rock" && userChoice != "paper" && userChoice != "scissors"){
        document.getElementById("printUserOutput").innerHTML = `Your input is ${userChoice}. You need to input either rock, paper, or scissors.`;
        }
//if there are no errors this else statement will print out their choice
    else {
            document.getElementById("printUserOutput").innerHTML = "You picked " + userChoice;
    }
}
var computerChoiceGlobal;
//this function randomly generates a choice of rock paper or scissors by the computer and prints it appriately
function computerPicks() {
    let computerOutput;
//generates a random number between 1-3 and assigns it
    let computerChoice=randomPick()
//assigns an output approriate to which number was generated
    if (computerChoice==1) {
        computerOutput="rock";
    }
//assigns an output approriate to which number was generated
    if (computerChoice==2) {
        computerOutput="paper";
    }
//assigns an output approriate to which number was generated
    if (computerChoice==3) {
        computerOutput="scissors";
    }
    computerChoiceGlobal=computerChoice
//prints what the computer picked
    document.getElementById("printOpponentOutput").innerHTML = `Your worthy opponent picked ${computerOutput}`;
}
//declares these variables to keep count of the stats and will be used in the next function
var winsCount=0;
var lossCount=0;
var tiedCount=0;
//this function takes what the user picked and what the computer generated and finds out who won and prints it
function whoWon(){
//finds out if it is a tie and adds to the counter and prints an output appriately
    if ((userChoiceGlobal==2&&computerChoiceGlobal==2)||(userChoiceGlobal==3&&computerChoiceGlobal==3)||(userChoiceGlobal==1&&computerChoiceGlobal==1)) {
        tiedCount=tiedCount+1;
        document.getElementById("printOutcome").innerHTML = `It's a Tie!`;
    }
//finds out if it is a win and adds to the counter and prints an output appriately
    if ((userChoiceGlobal==1&&computerChoiceGlobal==3)||(userChoiceGlobal==2&&computerChoiceGlobal==1)||(userChoiceGlobal==3&&computerChoiceGlobal==2)) {
        winsCount=winsCount+1;
        document.getElementById("printOutcome").innerHTML = `You Won!`;
    }
//finds out if it is a loss and adds to the counter and prints an output appriately
    if ((userChoiceGlobal==3&&computerChoiceGlobal==1)||(userChoiceGlobal==2&&computerChoiceGlobal==3)||(userChoiceGlobal==1&&computerChoiceGlobal==2)) {
        lossCount=lossCount+1;
        document.getElementById("printOutcome").innerHTML = `You Lost!`;
    }
}
//this function keeps track and prints how many wins / ties / and losses the user and computer have
function lucky()    {
        document.getElementById("luckyLocation").innerHTML = `You have won ${winsCount} game(s), lost ${lossCount} game(s), and tied ${tiedCount} game(s)!`;   
}
//this function generates a random number between 1-3
function randomPick () {
    let randomNumber = Math.random() * 3; 
    randomNumber = Math.ceil(randomNumber);
    return randomNumber
}