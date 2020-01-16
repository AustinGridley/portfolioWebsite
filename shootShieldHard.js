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
    //this function captures their response and prints their response appropriately
    let userChoice = document.getElementById("inputText").value;
    userChoice = userChoice.toLowerCase();
     userChoiceGlobal = userChoice;
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
    if(userChoice != "shoot" && userChoice != "shield" && userChoice !=  "reload" && userChoice !=  "super shot"){
        document.getElementById("printUserOutput").innerHTML = `Your input is ${userChoice}. You need to input either shoot, shield, reload, or super shot.`;
    }
    else {
        document.getElementById("printUserOutput").innerHTML = "You picked " + userChoice;
    }
}
var computerChoiceGlobal;
function computerPicks() {
    //captures their answer
    //goes to function diceRandom and assigns a random number
    let computerOutput;
    let x=0;
    if(computerBulletCount==0) {
        x=2;
        if(computerBulletCount==0&&userBulletCount==0) {
            x=1;
        }
    }
    
    else{
        x=3;

    }
     computerChoice=randomPick(x)
    if (computerBulletCount==3) {
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
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    computerChoiceGlobal=computerChoice
    document.getElementById("printOpponentOutput").innerHTML = `Your worthy opponent picked ${computerOutput}`;
}
function whoWon(){
    if (userChoiceGlobal==4||computerChoiceGlobal==4) {
        if (computerChoiceGlobal!=4&&userChoiceGlobal==4) {
            userBulletCount=userBulletCount-5;
            winStatus=1;
            document.getElementById("printOutcome").innerHTML = `You used a super shot and crushed your opponent. You just won!`;
        }
        if (userChoiceGlobal!=4&&computerChoiceGlobal==4) {
            computerBulletCount=computerBulletCount-5;
            lossStatus=1;
            document.getElementById("printOutcome").innerHTML = `Your opponent just crushed you with a super shot. You just lost!`;
        }
        if (userChoiceGlobal==4&&computerChoiceGlobal==4) {
            userBulletCount=userBulletCount-5;
            computerBulletCount=computerBulletCount-3;
            document.getElementById("printOutcome").innerHTML = `You both used a super shot. You both lost bullets!`;
        }
    } else {
        if (userChoiceGlobal==3&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            userBulletCount=userBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You both shot. You both lost a bullet!`;
        }
        if (userChoiceGlobal==3&&computerChoiceGlobal==2) {
            userBulletCount=userBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You shot and your opponent shielded. You lost a bullet!`;
        }
        if (userChoiceGlobal==3&&computerChoiceGlobal==1) {
            userBulletCount=userBulletCount-1;
            winStatus=1;
            document.getElementById("printOutcome").innerHTML = `You shot and your opponent reloaded. You just won the game!`;
        }
        if (userChoiceGlobal==2&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            document.getElementById("printOutcome").innerHTML = `You shielded and your opponent shot. Your opponent lost a bullet!`;
           
        }
        if (userChoiceGlobal==2&&computerChoiceGlobal==2) {
            document.getElementById("printOutcome").innerHTML = `You both shielded. You both were protected!`;
        }
        if (userChoiceGlobal==2&&computerChoiceGlobal==1) {
            computerBulletCount=computerBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You shielded and your opponent reloaded. Your opponent has one more bullet!`;
        }
        if (userChoiceGlobal==1&&computerChoiceGlobal==3) {
            computerBulletCount=computerBulletCount-1;
            lossStatus=1;
            document.getElementById("printOutcome").innerHTML = `You reloaded and your opponent shot. You just lost!`;
        }
        if (userChoiceGlobal==1&&computerChoiceGlobal==2) {
            userBulletCount=userBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You reloaded and your opponent shielded. You have one more bullet!`;
        }
        if (userChoiceGlobal==1&&computerChoiceGlobal==1) {
            userBulletCount=userBulletCount+1;
            computerBulletCount=computerBulletCount+1;
            document.getElementById("printOutcome").innerHTML = `You both reloaded. You both have one more bullet!`;
        }
    }
}
function lucky()    {
    if (lossStatus>=1) { document.getElementById("luckyLocation").innerHTML = `You have lost the game! Please reload the page to play again.`;
    }
    else{
        document.getElementById("luckyLocation").innerHTML = `You have ${userBulletCount} bullet(s). Your opponent has ${computerBulletCount} bullet(s)!`;
    
    }
    if (lossStatus>=1||winStatus>=1) {
        if (winStatus>=1) { document.getElementById("luckyLocation").innerHTML = `You have won the game! Please reload the page to play again.`;
        }
        if (lossStatus>=1) {document.getElementById("luckyLocation").innerHTML = `You have lost the game! Please reload the page to play again.`
            
        }
    }
    else{
        document.getElementById("luckyLocation").innerHTML = `You have ${userBulletCount} bullet(s). Your opponent has ${computerBulletCount} bullet(s)!`;
    }
}
function randomPick (num) {
    //this function rolls a dice based on their input and returns it
    let randomNumber = Math.random() * num /*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    randomNumber = Math.ceil(randomNumber);
    return randomNumber
    }