//makes genNum and makes it's scope all encompassing
var genNum;
//First button shoots off a function that generates a random number and sets what the top number is
function mainThing()    {
    outOf()
    genNum= generatedNumber(); 
}
//Second button shoots off a function that gets user's guess and returns results based on their input
function diceRoll(){
    guessUser()
    highLow()
    lucky()
}
function generatedNumber() {
    //captures their answer
    let x = document.getElementById("outOfNumber").value;
    //goes to function diceRandom and assigns a random number
    let generateNum=diceRandom(x);
    //this outputs the result as I'd like and is good
    return generateNum;
}
function outOf() {
    //captures the out of number
    let outOfNum = document.getElementById("outOfNumber").value;
    //prints the out of number where I want it
    document.getElementById("outOfLocation").innerHTML = "Out of " + outOfNum;
    //if they don't put in a number this error handling try catch will output an error and not break the game
    try {
        if(outOfNum == "") throw "empty";
        if(isNaN(outOfNum)) throw "not a number";
        }
      catch(err) {
        document.getElementById("outOfLocation").innerHTML = "Your out of input is " + err;
        }
}
function guessUser(){
    //captures their guess
    let userGuess = document.getElementById("userGuess").value;
    //prints their guess
    document.getElementById("guessLocation").innerHTML = "You Guessed " + userGuess;
    //if they don't put in a number this error handling try catch will output an error and not break the game
    try {
        if(userGuess == "") throw "empty";
        if(isNaN(userGuess)) throw "not a number";
        }
      catch(err) {
        document.getElementById("guessLocation").innerHTML = "Your guess is " + err;
        }
    return userGuess;
}
function highLow(){ 
    //goes in here if these parameters are met (Won)
    if (guessUser()==genNum&&guessUser()!=0&&genNum!=0){
        //finds a random number then prints a random response based on the number
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Sick! You just won a spaceship!";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "Golly! You just won a giraffe!";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Ciao! You just won a trip to Italy!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "Calories! You just won unlimited chocolate!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "Great! You just won a genie!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "Oh Wow! You just won a best actor Oscar!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Prestigious! You just won a pokemon!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "Tubular! You just won Thor's hammer!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Fabulous! You just won a pretty penny!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Amazing! You just won a pet zombie!";
        }
    }
    //goes in here if these parameters are met (Higher)
    if (guessUser()>genNum){
        //finds a random number then prints a random response based on the number
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Come and get HIGHer kissing my lips.";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "It's over user you have the HIGH ground!";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Are you a bird? Cause you are HIGH!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "It may be legal to be HIGH in Col. This isn't col!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "YOU ARE TOO high!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "You might as well name your child HIGH!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Are you on Mount Everest right now? You're HIGH!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "This guess is too HIGH!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Are you not guessing too HIGH!?!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Congrats! You just guessed too HIGH! Fail!";
        }
    }
    //goes in here if these parameters are met (Lower)
    if (guessUser()<genNum){
        //finds a random number then prints a random response based on the number
        let responseChoice = Math.random() * 10;
        responseChoice = Math.ceil(responseChoice)
        if (responseChoice==1) {
            document.getElementById("highLowLocation").innerHTML = "Pull the LOWer. Wrong lower.";
        }
        if (responseChoice==2) {
            document.getElementById("highLowLocation").innerHTML = "How LOW can you go?";
        }
        if (responseChoice==3) {
            document.getElementById("highLowLocation").innerHTML = "Don't be a LOW!"; 
        }
        if (responseChoice==4) {
            document.getElementById("highLowLocation").innerHTML = "The depths to which you stoop are so LOW!";
        }
        if (responseChoice==5) {
            document.getElementById("highLowLocation").innerHTML = "YOU ARE TOO low!";
        }
        if (responseChoice==6) {
            document.getElementById("highLowLocation").innerHTML = "You might as well name your child LOW!";
        }
        if (responseChoice==7) {
            document.getElementById("highLowLocation").innerHTML = "Are you in a submarine? You're LOW!";
        }
        if (responseChoice==8) {
            document.getElementById("highLowLocation").innerHTML = "This guess is too LOW!";
        }
        if (responseChoice==9) {
            document.getElementById("highLowLocation").innerHTML = "Are you not guessing too LOW!?!";
        }
        if (responseChoice==10) {
            document.getElementById("highLowLocation").innerHTML = "Congrats! You just guessed too LOW! Fail!";
        }
    }
}
var clicks = 0;
function lucky() {
    //if they click the button this will add to their guess count as long as they put in valid numbers
    if(guessUser()!=0&&genNum!=0){
    document.getElementById("clicksSpace").innerHTML = clicks;
    clicks=clicks+1;
    }
    document.getElementById("clicksSpace").innerHTML = clicks;
        //prints this if they win the game
        if (guessUser()==genNum&&guessUser()!=0&&genNum!=0){
            document.getElementById("luckyLocation").innerHTML = `Congratulations! You are a champion and won the game in ${clicks} guess(es)!`;
        }
        //otherwise it prints that they have not yet won the game
        else {
            document.getElementById("luckyLocation").innerHTML = "Give up? You'll never guess the right number!";
        }
}
function diceRandom (num) {
    //this function rolls a dice based on their input and returns it
    let diceRoll = Math.random() * num; 
    diceRoll = Math.ceil(diceRoll);
    return diceRoll
    }