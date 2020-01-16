//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function toRoman()  {
  var  printRomanNumber = "";
  let numberInput = document.getElementById("input").value;
  var originalNumber = numberInput;
  let I=1;
  let IV=4;
  let V=5;
  let IX=9;
  let X=10;
  let XL=40;
  let L=50;
  let XC=90;
  let C=100;
  let CD=400;
  let D=500;
  let CM=900;
  let M=1000;
  if (numberInput<99999999) {
  if(numberInput==0){
    printRomanNumber = "You entered a zero! Please enter a number greater than zero!"

  }
 if(numberInput>=M){ 
do
{
  numberInput = numberInput - M;
    printRomanNumber = printRomanNumber + "M";
}
while (numberInput>=M);
 }
 if(numberInput>=CM){ 
  do
  {
    numberInput = numberInput - CM;
      printRomanNumber = printRomanNumber + "CM";
  }
  while (numberInput>=CM);
   }
 if(numberInput>=D){ 
do
{
  numberInput = numberInput - D;
    printRomanNumber = printRomanNumber + "D";
}
while (numberInput>=D);
}
if(numberInput>=CD){ 
  do
  {
    numberInput = numberInput - CD;
      printRomanNumber = printRomanNumber + "CD";
  }
  while (numberInput>=CD);
  }
if(numberInput>=C){ 
do
{
  numberInput = numberInput - C;
    printRomanNumber = printRomanNumber + "C";
}
while (numberInput>=C);
}
if(numberInput>=XC){ 
  do
  {
    numberInput = numberInput - XC;
      printRomanNumber = printRomanNumber + "XC";
  }
  while (numberInput>=XC);
  }
if(numberInput>=L){ 
do
{
  numberInput = numberInput - L;
    printRomanNumber = printRomanNumber + "L";
}
while (numberInput>=L);
}
if(numberInput>=XL){ 
  do
  {
    numberInput = numberInput - XL;
      printRomanNumber = printRomanNumber + "XL";
  }
  while (numberInput>=XL);
  }
if(numberInput>=X){ 
do
{
  numberInput = numberInput - X;
    printRomanNumber = printRomanNumber + "X";
}
while (numberInput>=X);
}
if(numberInput>=IX){ 
  do
  {
    numberInput = numberInput - IX;
      printRomanNumber = printRomanNumber + "IX";
  }
  while (numberInput>=IX);
  }
if(numberInput>=V){
do
{
  numberInput = numberInput - V;
    printRomanNumber = printRomanNumber + "V";
}
while (numberInput>=V);
}
if(numberInput>=IV){ 
  do
  {
    numberInput = numberInput - IV;
      printRomanNumber = printRomanNumber + "IV";
  }
  while (numberInput>=IV);
  }
if(numberInput>=I){ 
do
{
  numberInput = numberInput - I;
    printRomanNumber = printRomanNumber + "I";
}
while (numberInput>=I);
}
if(numberInput<0)
{
  printRomanNumber = "You entered a negative number! Please enter a number greater than zero!"

}
document.getElementById("originalOutputText").innerHTML = "The number you want translated is:" ;
document.getElementById("originalOutput").innerHTML = originalNumber;
document.getElementById("romanOutputText").innerHTML = "The translation of your number to a Roman Numeral is:";
document.getElementById("romanOutput").innerHTML = printRomanNumber;
} 
else 
{document.getElementById("romanOutput").innerHTML = "Too big of a number! Try a smaller number!";
}
}
function toNumber()  {
  var  printNumber=0;
  let romanInput = document.getElementById("inputNumber").value;
  var originalRoman = romanInput.toUpperCase();
  romanInput=romanInput.toUpperCase();
  let num=0;
  let num1=num+1;
  if(romanInput[num]=="M"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 1000;
    }
    while (romanInput[num]=="M");
     }
     if(romanInput[num]=="C"&&romanInput[num1]=="M"){ 
      do
      {
        num=num+1;
        num1=num+1;
      printNumber = printNumber + 900;
      }
      while (romanInput[num]=="C"&&romanInput[num1]=="M");
       }
     if(romanInput[num]=="D"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 500;
    }
    while (romanInput[num]=="D");
    }
    if(romanInput[num]=="C"&&romanInput[num1]=="D"){ 
      do
      {
        num=num+1;
        num1=num+1;
        printNumber = printNumber + 400;
      }
      while (romanInput[num]=="C"&&romanInput[num1]=="D");
      }
    if(romanInput[num]=="C"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 100;
    }
    while (romanInput[num]=="C");
    }
    if(romanInput[num]=="X"&&romanInput[num1]=="C"){ 
      do
      {
        num=num+1;
        num1=num+1;
        printNumber = printNumber + 90;
      }
      while (romanInput[num]=="X"&&romanInput[num1]=="C");
      }
    if(romanInput[num]=="L"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 50;
    }
    while (romanInput[num]=="L");
    }
    if(romanInput[num]=="X"&&romanInput[num1]=="L"){ 
      do
      {
        num=num+1;
        num1=num+1;
        printNumber = printNumber + 40;
      }
      while (romanInput[num]=="X"&&romanInput[num1]=="L");
      }
    if(romanInput[num]=="X"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 10;
    }
    while (romanInput[num]=="X");
    }
    if(romanInput[num]=="I"&&romanInput[num1]=="X"){ 
      do
      {
        num=num+1;
        num1=num+1;
        printNumber = printNumber + 9;
      }
      while (romanInput[num]=="I"&&romanInput[num1]=="X");
      }
    if(romanInput[num]=="V"){
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 5;
    }
    while (romanInput[num]=="V");
    }
    if(romanInput[num]=="I"&&romanInput[num1]=="V"){ 
      do
      {
        num=num+1;
        num1=num+1;
        printNumber = printNumber + 4;
      }
      while (romanInput[num]=="I"&&romanInput[num1]=="V");
      }
    if(romanInput[num]=="I"){ 
    do
    {
      num=num+1;
      num1=num+1;
      printNumber = printNumber + 1;
    }
    while (romanInput[num]=="I");
    }
    document.getElementById("originalOutputText1").innerHTML = "The Roman Numeral you want translated is:" ;
    document.getElementById("originalOutput1").innerHTML = originalRoman;
    document.getElementById("romanOutputText1").innerHTML = "The translation of your Roman Numeral to a Number is:";
    document.getElementById("romanOutput1").innerHTML = printNumber;
    
}
  //  toRoman()
  //  console.log("h ", printRomanNumber);
   
  