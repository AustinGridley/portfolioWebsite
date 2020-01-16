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