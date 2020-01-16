//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//You do this by rolling four 6-sided dice and record the sum of the largest three dice. You do this six times, once for each ability.
let dice1;
let dice2;
let dice3;
let dice4;
let diceTotal;
let strengthT;
let dexterityT;
let constitutionT;
let intelligenceT;
let wisdomT;
let charismaT;
let strengthB;
let dexterityB;
let constitutionB;
let intelligenceB;
let wisdomB;
let charismaB;
let hitPointT;

//export 

    function fourRandom () {
        dice1=randomPick();
        dice2=randomPick();
        dice3=randomPick();
        dice4=randomPick();
        if(dice1<=dice2&&dice1<=dice3&&dice1<=dice4){
            diceTotal = dice2 + dice3 + dice4;
        }
        if(dice2<=dice1&&dice2<=dice3&&dice2<=dice4){
            diceTotal = dice1 + dice3 + dice4;
        }
        if(dice3<=dice2&&dice3<=dice1&&dice3<=dice4){
            diceTotal = dice2 + dice1 + dice4;
        }
        if(dice4<=dice2&&dice4<=dice1&&dice4<=dice3){
            diceTotal = dice2 + dice1 + dice3;
        }
        return diceTotal
        }
        function randomPick () {
            //this function rolls a dice based on their input and returns it
            let randomNumber = Math.random() * 6 /*"demo" or x or what?*/; 
            //let diceRoll = Math.random() * 6; 
            randomNumber = Math.ceil(randomNumber);
            return randomNumber
            }
        
    
        function output () {
  //throw new Error("Remove this statement and implement this function");
 strengthT= fourRandom();
 console.log("strengthT", strengthT)
 if (strengthT>0){
  if (strengthT==3){
     strengthB= -4
  }
  if (strengthT==4||strengthT==5){
     strengthB= -3
  }
  if (strengthT==6||strengthT==7){
     strengthB= -2
  }
  if (strengthT==8||strengthT==9){
     strengthB= -1
  }
  if (strengthT==10||strengthT==11){
     strengthB= 0
  }
  if (strengthT==12||strengthT==13){
     strengthB= 1
  }
  if (strengthT==14||strengthT==15){
     strengthB= 2
  }
  if (strengthT==16||strengthT==17){
     strengthB= 3
  }
  if (strengthT==18){
     strengthB= 4
  }
 }
 console.log("out11",strengthB)
 dexterityT= fourRandom();
 console.log("dT", dexterityT)
 if (dexterityT>0){
  if (dexterityT==3){
    dexterityB= -4
  }
  if (dexterityT==4||dexterityT==5){
    dexterityB= -3
  }
  if (dexterityT==6||dexterityT==7){
    dexterityB= -2
  }
  if (dexterityT==8||dexterityT==9){
    dexterityB= -1
  }
  if (dexterityT==10||dexterityT==11){
    dexterityB= 0
  }
  if (dexterityT==12||dexterityT==13){
    dexterityB= 1
  }
  if (dexterityT==14||dexterityT==15){
    dexterityB= 2
  }
  if (dexterityT==16||dexterityT==17){
    dexterityB= 3
  }
  if (dexterityT==18){
    dexterityB= 4
  }
 }
 console.log("out22",dexterityB)
 constitutionT= fourRandom();
 if (constitutionT>0){
  if (constitutionT==3){
    constitutionB= -4
  }
  if (constitutionT==4||constitutionT==5){
    constitutionB= -3
  }
  if (constitutionT==6||constitutionT==7){
    constitutionB= -2
  }
  if (constitutionT==8||constitutionT==9){
    constitutionB= -1
  }
  if (constitutionT==10||constitutionT==11){
    constitutionB= 0
  }
  if (constitutionT==12||constitutionT==13){
    constitutionB= 1
  }
  if (constitutionT==14||constitutionT==15){
    constitutionB= 2
  }
  if (constitutionT==16||constitutionT==17){
    constitutionB= 3
  }
  if (constitutionT==18){
    constitutionB= 4
  }
 }
 intelligenceT= fourRandom();
 if (intelligenceT>0){
  if (intelligenceT==3){
    intelligenceB= -4
  }
  if (intelligenceT==4||intelligenceT==5){
    intelligenceB= -3
  }
  if (intelligenceT==6||intelligenceT==7){
    intelligenceB= -2
  }
  if (intelligenceT==8||intelligenceT==9){
    intelligenceB= -1
  }
  if (intelligenceT==10||intelligenceT==11){
    intelligenceB= 0
  }
  if (intelligenceT==12||intelligenceT==13){
    intelligenceB= 1
  }
  if (intelligenceT==14||intelligenceT==15){
    intelligenceB= 2
  }
  if (intelligenceT==16||intelligenceT==17){
    intelligenceB= 3
  }
  if (intelligenceT==18){
    intelligenceB= 4
  }
 }
 wisdomT= fourRandom();
 if (wisdomT>0){
  if (wisdomT==3){
    wisdomB= -4
  }
  if (wisdomT==4||wisdomT==5){
    wisdomB= -3
  }
  if (wisdomT==6||wisdomT==7){
    wisdomB= -2
  }
  if (wisdomT==8||wisdomT==9){
    wisdomB= -1
  }
  if (wisdomT==10||wisdomT==11){
    wisdomB= 0
  }
  if (wisdomT==12||wisdomT==13){
    wisdomB= 1
  }
  if (wisdomT==14||wisdomT==15){
    wisdomB= 2
  }
  if (wisdomT==16||wisdomT==17){
    wisdomB= 3
  }
  if (wisdomT==18){
    wisdomB= 4
  }
 }
 charismaT= fourRandom();
 if (charismaT>0){
  if (charismaT==3){
    charismaB= -4
  }
  if (charismaT==4||charismaT==5){
    charismaB= -3
  }
  if (charismaT==6||charismaT==7){
    charismaB= -2
  }
  if (charismaT==8||charismaT==9){
    charismaB= -1
  }
  if (charismaT==10||charismaT==11){
    charismaB= 0
  }
  if (charismaT==12||charismaT==13){
    charismaB= 1
  }
  if (charismaT==14||charismaT==15){
    charismaB= 2
  }
  if (charismaT==16||charismaT==17){
    charismaB= 3
  }
  if (charismaT==18){
    charismaB= 4
  }
 
 }
 hitPointT= 10 + constitutionB;
    console.log("hit " + hitPointT)
 console.log("charb " + constitutionB)
 let nameI = document.getElementById("nameInput").value;
 let ageI = document.getElementById("ageInput").value;
 let classI = document.getElementById("classInput").value;
 let raceI = document.getElementById("raceInput").value;
 document.getElementById("basicOutputText").innerHTML = "Your basic character information is:" ;
        document.getElementById("nameOutput").innerHTML = "Your name is " + nameI;
        document.getElementById("ageOutput").innerHTML = "Your age is " + ageI;
        document.getElementById("classOutput").innerHTML = "Your class is a " + classI;
        document.getElementById("raceOutput").innerHTML = "Your race is a " + raceI;
        document.getElementById("statOutputText").innerHTML = "Your stats are:";
        document.getElementById("strengthTOutput").innerHTML = `Your strength is ${strengthT}`;
        document.getElementById("strengthBOutput").innerHTML = `Your strength modifier is ${strengthB}`;
        document.getElementById("dexterityTOutput").innerHTML = `Your dexterity is ${dexterityT}`;
        document.getElementById("dexterityBOutput").innerHTML = `Your dexterity modifier is ${dexterityB}`;
        document.getElementById("constitutionTOutput").innerHTML = `Your constitution is ${constitutionT}` ;
        document.getElementById("constitutionBOutput").innerHTML = `Your constitution modifier is ${constitutionB}`;
        document.getElementById("intelligenceTOutput").innerHTML = `Your intelligence is ${intelligenceT}`;
        document.getElementById("intelligenceBOutput").innerHTML = `Your intelligence modifier is ${intelligenceB}`;
        document.getElementById("wisdomTOutput").innerHTML = `Your wisdom is ${wisdomT}`;
        document.getElementById("wisdomBOutput").innerHTML = `Your wisdom modifier is ${wisdomB}`;
        document.getElementById("charismaTOutput").innerHTML = `Your charisma is ${charismaT}`; 
        document.getElementById("charismaBOutput").innerHTML = `Your charisma modifier is ${charismaB}`;
        document.getElementById("hitPointTOutput").innerHTML = `You have ${hitPointT} hitpoints`;
        
        }
        
 

