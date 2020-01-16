/* Ask how many dice would you like to use?
Capture said dice number with x
*/

//can I do multiple java sheets for the same website. is this effective or do I just need to make it work? do I plug it in the same way that one does with html? does this work with css?
// can functions not go in each other?
//on click this function makes these other two functions happen
function mainThing()    {
    diceRoll()
    lucky()
    // startOver()
}
function diceRoll(){
    desiredRoll()
    diceRolled=youRolled()
    outOf()
}
function desiredRoll(){
    let desiredDice = document.getElementById("desiredDiceCapture").value;
    document.getElementById("printDesiredLocation").innerHTML = `You wanted to roll a(n) ${desiredDice}`;
    try {
        if(desiredDice == "") throw "empty";
        if(isNaN(desiredDice)) throw "not a number";
        }
      catch(err) {
        document.getElementById("printDesiredLocation").innerHTML = "Your desired dice roll is " + err;
        }
    //goes to function diceRandom and assigns a random number
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    return desiredDice
}
function youRolled() {
    //captures their answer
    let x = document.getElementById("diceSidesCapture").value;
    //goes to function diceRandom and assigns a random number
    let diceRolls=diceRandom(x)
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    document.getElementById("printRollResult").innerHTML = `You Rolled a ${diceRolls}`;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        }
      catch(err) {
        document.getElementById("printRollResult").innerHTML = "Enter a number to what kind of a dice you'd like to roll.";
        }
    return diceRolls;
}
function outOf() {
    //this function captures their response and prints their response appropriately
    let x = document.getElementById("diceSidesCapture").value;
    document.getElementById("printOutOfLocation").innerHTML = "Out of " + x;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        }
      catch(err) {
        document.getElementById("printOutOfLocation").innerHTML = "Your dice sides specification is " + err;
        }
}
function lucky()    {
    if (desiredRoll()==diceRolled) {
        document.getElementById("luckyLocation").innerHTML =  "What fabulous luck! You are a champion!";
    } else {
        document.getElementById("luckyLocation").innerHTML = "Rotten luck! Try again!";
    }
}
function diceRandom (num) {
    //this function rolls a dice based on their input and returns it
    let diceRoll = Math.random() * num/*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    diceRoll = Math.ceil(diceRoll);
    return diceRoll
    }