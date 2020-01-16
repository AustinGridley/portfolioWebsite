function mainThing()    {
    
    diceRoll()
    lucky()
}
function diceRoll(){
    youRolled()
    outOf()
}
function youRolled() {
    //captures their answer
    let x = document.getElementById("diceSidesLocation").value;
    try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    }
  catch(err) {
    document.getElementById("demo").innerHTML = "Your input is " + err;
  }
    //goes to function diceRandom and assigns a random number
    let diceRolls=diceRandom(x)
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    document.getElementById("orgRoll").innerHTML = `You Rolled a(n) ${diceRolls}`;
}
function outOf() {
    //this function captures their response and prints their response appropriately
    let x = document.getElementById("diceSidesLocation").value;
    document.getElementById("peace").innerHTML = "Out of " + x;
}
function lucky()    {

    let unlucky = Math.random() * 2;
    unlucky = Math.ceil(unlucky)
    if (unlucky==1) {
        document.getElementById("youLucky").innerHTML = "Rotten luck! Try again!"
    } else {
        document.getElementById("youLucky").innerHTML = "What fabulous luck! You are a champion!"
    }
    return unlucky
}
function diceRandom (num) {
    //this function rolls a dice based on their input and returns it
    let diceRoll = Math.random() * num/*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    diceRoll = Math.ceil(diceRoll);
    return diceRoll
    }