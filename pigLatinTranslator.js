function toRoman(originalWord)  {
  var wordOutput = originalWord;
  var wordInputLength = wordOutput.length;
  var char0=wordOutput.charAt(0);
  var char1=wordOutput.charAt(1);
  var char2=wordOutput.charAt(2);
if (wordInputLength!=1){
    if((char0=="a"||char0=="e"||char0=="i"||char0=="u"||char0=="o"||(char0=="x" && char1=="r")||(char0=="y" && char1=="t")) ||
    ((char0=="c" && char1=="h")||(char0=="q" && char1=="u")||(char0=="t" && char1=="h")||(char0=="r" && char1=="h")) ||
    ((char0=="t" && char1=="h" && char2=="r")||(char0=="s" && char1=="c" && char2=="h")) ||
    ((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="q" && char2=="u")) ||
    ((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="s" && char2=="q"))
    ){
    if(char0=="a"||char0=="e"||char0=="i"||char0=="u"||char0=="o"||(char0=="x" && char1=="r")||(char0=="y" && char1=="t")){
      wordOutput = wordOutput + "ay";
    }
    if(char1=="q" && char2=="u"){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
    }
    if((char0=="t" && char1=="h" && char2=="r")||(char0=="s" && char1=="c" && char2=="h")){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
    }
    if((char0=="c" && char1=="h")||(char0=="q" && char1=="u")||(char0=="t" && char1=="h")||(char0=="r" && char1=="h")){
      wordOutput = wordOutput.slice(2) + char0 + char1 + "ay";
    }
    if((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="s" && char2=="q")){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
    }
  }
    else
    {
        wordOutput = wordOutput.slice(1) + char0 + "ay";
      }
    }
    else{
      wordOutput= wordOutput + "ay"
    }
    return wordOutput;
}
function translate() {
//this will map and translate multiple words if they input multiple words otherwise it would only translate one word 
// this also will make it so it translates one word at a time so that the words don't get tangled together
var originalWord = document.getElementById("input").value;
return originalWord.split(' ').map(toRoman).join(' ');
}
function output() {
var originalWord = document.getElementById("input").value;
document.getElementById("originalOutputText").innerHTML = "The english you want translated is:" ;
document.getElementById("originalOutput").innerHTML = originalWord;
document.getElementById("romanOutputText").innerHTML = "The translation of your english to Pig Latin:";
document.getElementById("romanOutput").innerHTML = translate();
}
