//clicking on submit shoots of this function that accesses what happens based on the user's input and chance
function mainThing()    {
    diceRoll()
}
//this function accesses the user's choice and generates what the computer chooses and then finds out who wins
function diceRoll(){
    //captures what the user picked and prints off an error if appropriate
    youPicked()
    //randomly the computer picks
    computerPicks()
    //based on what the user and computer pick the game continues or shows who won
    whoWon()
    //shows in game statistics and if the game finishes or someone wins it will show that as well
    lucky()
}
//vars that keep track of how many bullets are in the game and if someone has won
var computerBulletCount=0;
var userBulletCount=0;
var winStatus=0;
var lossStatus=0;
var userChoiceGlobal;
//captures what the user picked and prints off an error if appropriate
function youPicked() {
//this captures their response
    let userChoice = document.getElementById("inputText").value;
//fixes if there are uppercase letters
    userChoice = userChoice.toLowerCase();
     userChoiceGlobal = userChoice;
//these if statements convert their choice to a number, and 
//don't allow the user to pick super shot or shot if they don't have the approriate amount of bullets
     if (userChoice=="shoot"&&userBulletCount==0) {
         userChoice="shield";
     }
     if (userChoice=="shoot") {
        userChoiceGlobal=3;
    }
    if (userChoice=="shield") {
        userChoiceGlobal=2;
    }
    if (userChoice=="reload") {
        userChoiceGlobal=1;
    }
    if (userChoice=="super shot" && userBulletCount<5) {
        userChoiceGlobal=2;
    }
    if (userChoice=="super shot"&&userBulletCount>=5) {
        userChoiceGlobal=4;
    }
//if they don't input valid input this if else pauses the game and makes them input valid input
    if(userChoice != "shoot" && userChoice != "shield" && userChoice !=  "reload" && userChoice !=  "super shot"){
        document.getElementById("printUserOutput").innerHTML = `Your input is ${userChoice}. You need to input either shoot, shield, reload, or super shot.`;
    }
//if they input correctly then the game proceeds and prints their choice
    else {
        document.getElementById("printUserOutput").innerHTML = "You picked " + userChoice;
    }
}
var computerChoiceGlobal;
//randomly the computer picks
function computerPicks() {
    let computerOutput;
//makes x or the number of choices the computer has
    let x=0;
//if the computer has no bullets this gives the computer the option to either shield or reload, the computer can't shoot if they have no bullets
    if(computerBulletCount==0) {
        x=2;
    }
//if the computer has bullets they can shoot, shield, or reload
    else{
        x=3;
    }
//if the computer has 4 bullets this overrides if the computer was going to shoot, 
//shield or reload and makes the computer win the game with a super shot
     computerChoice=randomPick(x)
    if (computerBulletCount==4) {
        computerChoice=4;
        computerOutput="super shot";
    }
    if (computerChoice==3) {
        computerOutput="shoot";
    }
    if (computerChoice==2) {
        computerOutput="shield";
    }
    if (computerChoice==1) {
        computerOutput="reload";
    }
    computerChoiceGlobal=computerChoice
//this outputs what the computer picked
    document.getElementById("printOpponentOutput").innerHTML = `Your worthy opponent picked ${computerOutput}`;
}
//based on what the user and computer pick the game continues or shows who won
function whoWon(){
    if (userChoiceGlobal==4||computerChoiceGlobal==4) {
//if the user super shots and the computer doesn't this if statement handles that and prints that the computer won the game
        if (userChoiceGlobal==4&&computerChoiceGlobal!=4) {
            userBulletCount=userBulletCount-5;
            winStatus=1;
            document.getElementById("printOutcome").innerHTML = `You used a super shot and crushed your opponent. You just won!`;
        }
//if the computer super shots and the user doesn't this if statement handles that and prints that the computer won the game
        if (userChoiceGlobal!=4&&computerChoiceGlobal==4) {
            computerBulletCount=computerBulletCount-5;
            lossStatus=1;
            document.getElementById("printOutcome").innerHTML = `Your opponent just crushed you with a super shot. You just lost!`;
        }
//if the user and computer super shot they both lose bullets and the game continues and this if statement handles all that
        else {
            userBulletCount=userBulletCount-5;
            computerBulletCount=computerBulletCount-4;
            document.getElementById("printOutcome").innerHTML = `You both used a super shot. You both lost bullets!`;
        }
//if no one super shots then we continue with what could possibly happen
    } else {
//if both the user and computer shoot they both lose bullets and this if statement handles that and prints it
        if (userChoiceGlobal==3&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            userBulletCount=userBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You both shot. You both lost a bullet!`;
        }
//if the user shoots and computer shields the user loses a bullet and the game goes on
        if (userChoiceGlobal==3&&computerChoiceGlobal==2) {
            userBulletCount=userBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You shot and your opponent shielded. You lost a bullet!`;
        }
//if the user shoots and the computer reloads the user wins the game
        if (userChoiceGlobal==3&&computerChoiceGlobal==1) {
            userBulletCount=userBulletCount-1;
            winStatus=1;
            document.getElementById("printOutcome").innerHTML = `You shot and your opponent reloaded. You just won the game!`;
        }
//if the user shields and the computer shoots the computer loses a bullet
        if (userChoiceGlobal==2&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You shielded and your opponent shot. Your opponent lost a bullet!`;   
        }
//if the user and computer shield they both were safe that turn and game continues
        if (userChoiceGlobal==2&&computerChoiceGlobal==2) {
            document.getElementById("printOutcome").innerHTML = `You both shielded. You both were protected!`;
        }
//if the user shields and the computer reloads the computer gains a bullet and the user was safe
        if (userChoiceGlobal==2&&computerChoiceGlobal==1) {
            computerBulletCount=computerBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You shielded and your opponent reloaded. Your opponent has one more bullet!`;
        }
//if the user reloads and the computer shoots the computer wins the game
        if (userChoiceGlobal==1&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            lossStatus=1;
            document.getElementById("printOutcome").innerHTML = `You reloaded and your opponent shot. You just lost!`;
        }
//if the user reloads and the computer shields the user gains a bullet and the computer was safe
        if (userChoiceGlobal==1&&computerChoiceGlobal==2) {
            userBulletCount=userBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You reloaded and your opponent shielded. You have one more bullet!`;
        }
//if the user and computer shoot they both lose a bullet
        if (userChoiceGlobal==1&&computerChoiceGlobal==1) {
            userBulletCount=userBulletCount+1;
            computerBulletCount=computerBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You both reloaded. You both have one more bullet!`;
        }
    }
}
//shows in game statistics and if the game finishes or someone wins it will show that as well
function lucky()    {
//this prints if the user loses the game
    if (lossStatus>=1) { document.getElementById("luckyLocation").innerHTML = `You have lost the game! Please reload the page to play again.`;
    }
//if the user does not lose this prints off statistics of the game
    else{
        document.getElementById("luckyLocation").innerHTML = `You have ${userBulletCount} bullet(s). Your opponent has ${computerBulletCount} bullet(s)!`;
    
    }
//goes into this if if the user or computer win
    if (lossStatus>=1||winStatus>=1) {
//if the user wins the user is notified and the game is over
        if (winStatus>=1) { document.getElementById("luckyLocation").innerHTML = `You have won the game! Please reload the page to play again.`;
        }
//if the computer wins the user is notified and the game is over
        if (lossStatus>=1) {document.getElementById("luckyLocation").innerHTML = `You have lost the game! Please reload the page to play again.`       
        }
    }
//if no one wins this prints off statistics of the game
    else{
        document.getElementById("luckyLocation").innerHTML = `You have ${userBulletCount} bullet(s). Your opponent has ${computerBulletCount} bullet(s)!`;
    }
}
//this function randomly selects what the computer will do based on what is available to the computer
function randomPick (num) {
    let randomNumber = Math.random() * num; 
    randomNumber = Math.ceil(randomNumber);
    return randomNumber
    }



    