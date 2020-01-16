var playerOneName="";
var playerTwoName="";
function namesOutput() {
  playerOneName = document.getElementById("player1").value;
  playerTwoName = document.getElementById("player2").value;
  changeStatNames()
}
function changeStatNames() {
  document.getElementById("romanOutputText").innerHTML = playerOneName + "'s Stats are";
  document.getElementById("statHeader1").innerHTML = playerOneName + "'s Stats";
  document.getElementById("tat1").innerHTML = "Input the first stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat2").innerHTML = "Input the second stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat3").innerHTML = "Input the third stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat4").innerHTML = "Input the fourth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat5").innerHTML = "Input the fifth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat6").innerHTML = "Input the sixth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat7").innerHTML = "Input the seventh stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat8").innerHTML = "Input the eighth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat9").innerHTML = "Input the ninth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat10").innerHTML = "Input the tenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat11").innerHTML = "Input the eleventh stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat12").innerHTML = "Input the twelfth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat13").innerHTML = "Input the thirteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat14").innerHTML = "Input the fourteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat15").innerHTML = "Input the fifteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat16").innerHTML = "Input the sixteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat17").innerHTML = "Input the seventeenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat18").innerHTML = "Input the eighteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat19").innerHTML = "Input the nineteenth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("tat20").innerHTML = "Input the twentieth stat of " + playerOneName + ". &nbsp&nbsp";
  document.getElementById("originalOutputText").innerHTML = playerTwoName + "'s Stat Names are";
  document.getElementById("statHeader2").innerHTML = playerTwoName + "'s Stat Names are";
  document.getElementById("tTat1").innerHTML = "Input the first stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat2").innerHTML = "Input the second stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat3").innerHTML = "Input the third stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat4").innerHTML = "Input the fourth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat5").innerHTML = "Input the fifth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat6").innerHTML = "Input the sixth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat7").innerHTML = "Input the seventh stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat8").innerHTML = "Input the eighth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat9").innerHTML = "Input the ninth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat10").innerHTML = "Input the tenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat11").innerHTML = "Input the eleventh stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat12").innerHTML = "Input the twelfth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat13").innerHTML = "Input the thirteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat14").innerHTML = "Input the fourteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat15").innerHTML = "Input the fifteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat16").innerHTML = "Input the sixteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat17").innerHTML = "Input the seventeenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat18").innerHTML = "Input the eighteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat19").innerHTML = "Input the nineteenth stat of " + playerTwoName + ". &nbsp&nbsp";
  document.getElementById("tTat20").innerHTML = "Input the twentieth stat of " + playerTwoName + ". &nbsp&nbsp";
}
function statNames1() {
  var statOneName = document.getElementById("stat1").value;
  var statTwoName = document.getElementById("stat2").value;
  var statThreeName = document.getElementById("stat3").value;
  var statFourName = document.getElementById("stat4").value;
  var statFiveName = document.getElementById("stat5").value;
  var statSixName = document.getElementById("stat6").value;
  var statSevenName = document.getElementById("stat7").value;
  var statEightName = document.getElementById("stat8").value;
  var statNineName = document.getElementById("stat9").value;
  var statTenName = document.getElementById("stat10").value;
  var statElevenName = document.getElementById("stat11").value;
  var statTwelveName = document.getElementById("stat12").value;
  var statThirteenName = document.getElementById("stat13").value;
  var statFourteenName = document.getElementById("stat14").value;
  var statFifteenName = document.getElementById("stat15").value;
  var statSixteenName = document.getElementById("stat16").value;
  var statSeventeenName = document.getElementById("stat17").value;
  var statEighteenName = document.getElementById("stat18").value;
  var statNineteenName = document.getElementById("stat19").value;
  var statTwentyName = document.getElementById("stat20").value;
  if (statOneName=="") {
    statOneName = "Stat One"
  }
  if (statTwoName=="") {
    statTwoName = "Stat Two"
  }
  if (statThreeName=="") {
    statThreeName = "Stat Three"
  }
  if (statFourName=="") {
    statFourName = "Stat Four"
  }
  if (statFiveName=="") {
    statFiveName = "Stat Five"
  }
  if (statSixName=="") {
    statSixName = "Stat Six"
  }
  if (statSevenName=="") {
    statSevenName = "Stat Seven"
  }
  if (statEightName=="") {
    statEightName = "Stat Eight"
  }
  if (statNineName=="") {
    statNineName = "Stat Nine"
  }
  if (statTenName=="") {
    statTenName = "Stat Ten"
  }
  if (statElevenName=="") {
    statElevenName = "Stat Eleven"
  }
  if (statTwelveName=="") {
    statTwelveName = "Stat Twelve"
  }
  if (statThirteenName=="") {
    statThirteenName = "Stat Thirteen"
  }
  if (statFourteenName=="") {
    statFourteenName = "Stat Fourteen"
  }
  if (statFifteenName=="") {
    statFifteenName = "Stat Fifteen"
  }
  if (statSixteenName=="") {
    statSixteenName = "Stat Sixteen"
  }
  if (statSeventeenName=="") {
    statSeventeenName = "Stat Seventeen"
  }
  if (statEighteenName=="") {
    statEighteenName = "Stat Eighteen"
  }
  if (statNineteenName=="") {
    statNineteenName = "Stat Nineteen"
  }
  if (statTwentyName=="") {
    statTwentyName = "Stat Twenty"
  }
  document.getElementById("stat1Name").innerHTML = statOneName;
  document.getElementById("stat2Name").innerHTML = statTwoName;
  document.getElementById("stat3Name").innerHTML = statThreeName;
  document.getElementById("stat4Name").innerHTML = statFourName;
  document.getElementById("stat5Name").innerHTML = statFiveName;
  document.getElementById("stat6Name").innerHTML = statSixName;
  document.getElementById("stat7Name").innerHTML = statSevenName;
  document.getElementById("stat8Name").innerHTML = statEightName;
  document.getElementById("stat9Name").innerHTML = statNineName;
  document.getElementById("stat10Name").innerHTML = statTenName;
  document.getElementById("stat11Name").innerHTML = statElevenName;
  document.getElementById("stat12Name").innerHTML = statTwelveName;
  document.getElementById("stat13Name").innerHTML = statThirteenName;
  document.getElementById("stat14Name").innerHTML = statFourteenName;
  document.getElementById("stat15Name").innerHTML = statFifteenName;
  document.getElementById("stat16Name").innerHTML = statSixteenName;
  document.getElementById("stat17Name").innerHTML = statSeventeenName;
  document.getElementById("stat18Name").innerHTML = statEighteenName;
  document.getElementById("stat19Name").innerHTML = statNineteenName;
  document.getElementById("stat20Name").innerHTML = statTwentyName;
}
function statNames2() {
  var sStatOneName = document.getElementById("sStat1").value;
  var sStatTwoName = document.getElementById("sStat2").value;
  var sStatThreeName = document.getElementById("sStat3").value;
  var sStatFourName = document.getElementById("sStat4").value;
  var sStatFiveName = document.getElementById("sStat5").value;
  var sStatSixName = document.getElementById("sStat6").value;
  var sStatSevenName = document.getElementById("sStat7").value;
  var sStatEightName = document.getElementById("sStat8").value;
  var sStatNineName = document.getElementById("sStat9").value;
  var sStatTenName = document.getElementById("sStat10").value;
  var sStatElevenName = document.getElementById("sStat11").value;
  var sStatTwelveName = document.getElementById("sStat12").value;
  var sStatThirteenName = document.getElementById("sStat13").value;
  var sStatFourteenName = document.getElementById("sStat14").value;
  var sStatFifteenName = document.getElementById("sStat15").value;
  var sStatSixteenName = document.getElementById("sStat16").value;
  var sStatSeventeenName = document.getElementById("sStat17").value;
  var sStatEighteenName = document.getElementById("sStat18").value;
  var sStatNineteenName = document.getElementById("sStat19").value;
  var sStatTwentyName = document.getElementById("sStat20").value;
  if (sStatOneName=="") {
    sStatOneName = "Stat One"
  }
  if (sStatTwoName=="") {
    sStatTwoName = "Stat Two"
  }
  if (sStatThreeName=="") {
    sStatThreeName = "Stat Three"
  }
  if (sStatFourName=="") {
    sStatFourName = "Stat Four"
  }
  if (sStatFiveName=="") {
    sStatFiveName = "Stat Five"
  }
  if (sStatSixName=="") {
    sStatSixName = "Stat Six"
  }
  if (sStatSevenName=="") {
    sStatSevenName = "Stat Seven"
  }
  if (sStatEightName=="") {
    sStatEightName = "Stat Eight"
  }
  if (sStatNineName=="") {
    sStatNineName = "Stat Nine"
  }
  if (sStatTenName=="") {
    sStatTenName = "Stat Ten"
  }
  if (sStatElevenName=="") {
    sStatElevenName = "Stat Eleven"
  }
  if (sStatTwelveName=="") {
    sStatTwelveName = "Stat Twelve"
  }
  if (sStatThirteenName=="") {
    sStatThirteenName = "Stat Thirteen"
  }
  if (sStatFourteenName=="") {
    sStatFourteenName = "Stat Fourteen"
  }
  if (sStatFifteenName=="") {
    sStatFifteenName = "Stat Fifteen"
  }
  if (sStatSixteenName=="") {
    sStatSixteenName = "Stat Sixteen"
  }
  if (sStatSeventeenName=="") {
    sStatSeventeenName = "Stat Seventeen"
  }
  if (sStatEighteenName=="") {
    sStatEighteenName = "Stat Eighteen"
  }
  if (sStatNineteenName=="") {
    sStatNineteenName = "Stat Nineteen"
  }
  if (sStatTwentyName=="") {
    sStatTwentyName = "Stat Twenty"
  }
  document.getElementById("sStat1Name").innerHTML = sStatOneName;
  document.getElementById("sStat2Name").innerHTML = sStatTwoName;
  document.getElementById("sStat3Name").innerHTML = sStatThreeName;
  document.getElementById("sStat4Name").innerHTML = sStatFourName;
  document.getElementById("sStat5Name").innerHTML = sStatFiveName;
  document.getElementById("sStat6Name").innerHTML = sStatSixName;
  document.getElementById("sStat7Name").innerHTML = sStatSevenName;
  document.getElementById("sStat8Name").innerHTML = sStatEightName;
  document.getElementById("sStat9Name").innerHTML = sStatNineName;
  document.getElementById("sStat10Name").innerHTML = sStatTenName;
  document.getElementById("sStat11Name").innerHTML = sStatElevenName;
  document.getElementById("sStat12Name").innerHTML = sStatTwelveName;
  document.getElementById("sStat13Name").innerHTML = sStatThirteenName;
  document.getElementById("sStat14Name").innerHTML = sStatFourteenName;
  document.getElementById("sStat15Name").innerHTML = sStatFifteenName;
  document.getElementById("sStat16Name").innerHTML = sStatSixteenName;
  document.getElementById("sStat17Name").innerHTML = sStatSeventeenName;
  document.getElementById("sStat18Name").innerHTML = sStatEighteenName;
  document.getElementById("sStat19Name").innerHTML = sStatNineteenName;
  document.getElementById("sStat20Name").innerHTML = sStatTwentyName;
}
function statOneAdd() {
  var statOutput1 =  parseInt(document.getElementById("stat1Output").value);
  statOutput1 = statOutput1 + 1;
  document.getElementById("stat1Output").value = statOutput1;
}
function statTwoAdd() {
  var statOutput2 =  parseInt(document.getElementById("stat2Output").value);
  statOutput2 = statOutput2 + 1;
  document.getElementById("stat2Output").value = statOutput2;
}
function statThreeAdd() {
  var statOutput3 =  parseInt(document.getElementById("stat3Output").value);
  statOutput3 = statOutput3 + 1;
  document.getElementById("stat3Output").value = statOutput3;
}
function statFourAdd() {
  var statOutput4 =  parseInt(document.getElementById("stat4Output").value);
  statOutput4 = statOutput4 + 1;
  document.getElementById("stat4Output").value = statOutput4;
}
function statFiveAdd() {
  var statOutput5 =  parseInt(document.getElementById("stat5Output").value);
  statOutput5 = statOutput5 + 1;
  document.getElementById("stat5Output").value = statOutput5;
}
function statSixAdd() {
  var statOutput6 =  parseInt(document.getElementById("stat6Output").value);
  statOutput6 = statOutput6 + 1;
  document.getElementById("stat6Output").value = statOutput6;
}
function statSevenAdd() {
  var statOutput7 =  parseInt(document.getElementById("stat7Output").value);
  statOutput7 = statOutput7 + 1;
  document.getElementById("stat7Output").value = statOutput7;
}
function statEightAdd() {
  var statOutput8 =  parseInt(document.getElementById("stat8Output").value);
  statOutput8 = statOutput8 + 1;
  document.getElementById("stat8Output").value = statOutput8;
}
function statNineAdd() {
  var statOutput9 =  parseInt(document.getElementById("stat9Output").value);
  statOutput9 = statOutput9 + 1;
  document.getElementById("stat9Output").value = statOutput9;
}
function statTenAdd() {
  var statOutput10 =  parseInt(document.getElementById("stat10Output").value);
  statOutput10 = statOutput10 + 1;
  document.getElementById("stat10Output").value = statOutput10;
}
function statElevenAdd() {
  var statOutput11 =  parseInt(document.getElementById("stat11Output").value);
  statOutput11 = statOutput11 + 1;
  document.getElementById("stat11Output").value = statOutput11;
}
function statTwelveAdd() {
  var statOutput12 =  parseInt(document.getElementById("stat12Output").value);
  statOutput12 = statOutput12 + 1;
  document.getElementById("stat12Output").value = statOutput12;
}
function statThirteenAdd() {
  var statOutput13 =  parseInt(document.getElementById("stat13Output").value);
  statOutput13 = statOutput13 + 1;
  document.getElementById("stat13Output").value = statOutput13;
}
function statFourteenAdd() {
  var statOutput14 =  parseInt(document.getElementById("stat14Output").value);
  statOutput14 = statOutput14 + 1;
  document.getElementById("stat14Output").value = statOutput14;
}
function statFifteenAdd() {
  var statOutput15 =  parseInt(document.getElementById("stat15Output").value);
  statOutput15 = statOutput15 + 1;
  document.getElementById("stat15Output").value = statOutput15;
}
function statSixteenAdd() {
  var statOutput16 =  parseInt(document.getElementById("stat16Output").value);
  statOutput16 = statOutput16 + 1;
  document.getElementById("stat16Output").value = statOutput16;
}
function statSeventeenAdd() {
  var statOutput17 =  parseInt(document.getElementById("stat17Output").value);
  statOutput17 = statOutput17 + 1;
  document.getElementById("stat17Output").value = statOutput17;
}
function statEighteenAdd() {
  var statOutput18 =  parseInt(document.getElementById("stat18Output").value);
  statOutput18 = statOutput18 + 1;
  document.getElementById("stat18Output").value = statOutput18;
}
function statNineteenAdd() {
  var statOutput19 =  parseInt(document.getElementById("stat19Output").value);
  statOutput19 = statOutput19 + 1;
  document.getElementById("stat19Output").value = statOutput19;
}
function statTwentyAdd() {
  var statOutput20 =  parseInt(document.getElementById("stat20Output").value);
  statOutput20 = statOutput20 + 1;
  document.getElementById("stat20Output").value = statOutput20;
}
function sStatOneAdd() {
  var sStatOutput1 =  parseInt(document.getElementById("sStat1Output").value);
  sStatOutput1 = sStatOutput1 + 1;
  document.getElementById("sStat1Output").value = sStatOutput1;
}
function sStatTwoAdd() {
  var sStatOutput2 =  parseInt(document.getElementById("sStat2Output").value);
  sStatOutput2 = sStatOutput2 + 1;
  document.getElementById("sStat2Output").value = sStatOutput2;
}
function sStatThreeAdd() {
  var sStatOutput3 =  parseInt(document.getElementById("sStat3Output").value);
  sStatOutput3 = sStatOutput3 + 1;
  document.getElementById("sStat3Output").value = sStatOutput3;
}
function sStatFourAdd() {
  var sStatOutput4 =  parseInt(document.getElementById("sStat4Output").value);
  sStatOutput4 = sStatOutput4 + 1;
  document.getElementById("sStat4Output").value = sStatOutput4;
}
function sStatFiveAdd() {
  var sStatOutput5 =  parseInt(document.getElementById("sStat5Output").value);
  sStatOutput5 = sStatOutput5 + 1;
  document.getElementById("sStat5Output").value = sStatOutput5;
}
function sStatSixAdd() {
  var sStatOutput6 =  parseInt(document.getElementById("sStat6Output").value);
  sStatOutput6 = sStatOutput6 + 1;
  document.getElementById("sStat6Output").value = sStatOutput6;
}
function sStatSevenAdd() {
  var sStatOutput7 =  parseInt(document.getElementById("sStat7Output").value);
  sStatOutput7 = sStatOutput7 + 1;
  document.getElementById("sStat7Output").value = sStatOutput7;
}
function sStatEightAdd() {
  var sStatOutput8 =  parseInt(document.getElementById("sStat8Output").value);
  sStatOutput8 = sStatOutput8 + 1;
  document.getElementById("sStat8Output").value = sStatOutput8;
}
function sStatNineAdd() {
  var sStatOutput9 =  parseInt(document.getElementById("sStat9Output").value);
  sStatOutput9 = sStatOutput9 + 1;
  document.getElementById("sStat9Output").value = sStatOutput9;
}
function sStatTenAdd() {
  var sStatOutput10 =  parseInt(document.getElementById("sStat10Output").value);
  sStatOutput10 = sStatOutput10 + 1;
  document.getElementById("sStat10Output").value = sStatOutput10;
}
function sStatElevenAdd() {
  var sStatOutput11 =  parseInt(document.getElementById("sStat11Output").value);
  sStatOutput11 = sStatOutput11 + 1;
  document.getElementById("sStat11Output").value = sStatOutput11;
}
function sStatTwelveAdd() {
  var sStatOutput12 =  parseInt(document.getElementById("sStat12Output").value);
  sStatOutput12 = sStatOutput12 + 1;
  document.getElementById("sStat12Output").value = sStatOutput12;
}
function sStatThirteenAdd() {
  var sStatOutput13 =  parseInt(document.getElementById("sStat13Output").value);
  sStatOutput13 = sStatOutput13 + 1;
  document.getElementById("sStat13Output").value = sStatOutput13;
}
function sStatFourteenAdd() {
  var sStatOutput14 =  parseInt(document.getElementById("sStat14Output").value);
  sStatOutput14 = sStatOutput14 + 1;
  document.getElementById("sStat14Output").value = sStatOutput14;
}
function sStatFifteenAdd() {
  var sStatOutput15 =  parseInt(document.getElementById("sStat15Output").value);
  sStatOutput15 = sStatOutput15 + 1;
  document.getElementById("sStat15Output").value = sStatOutput15;
}
function sStatSixteenAdd() {
  var sStatOutput16 =  parseInt(document.getElementById("sStat16Output").value);
  sStatOutput16 = sStatOutput16 + 1;
  document.getElementById("sStat16Output").value = sStatOutput16;
}
function sStatSeventeenAdd() {
  var sStatOutput17 =  parseInt(document.getElementById("sStat17Output").value);
  sStatOutput17 = sStatOutput17 + 1;
  document.getElementById("sStat17Output").value = sStatOutput17;
}
function sStatEighteenAdd() {
  var sStatOutput18 =  parseInt(document.getElementById("sStat18Output").value);
  sStatOutput18 = sStatOutput18 + 1;
  document.getElementById("sStat18Output").value = sStatOutput18;
}
function sStatNineteenAdd() {
  var sStatOutput19 =  parseInt(document.getElementById("sStat19Output").value);
  sStatOutput19 = sStatOutput19 + 1;
  document.getElementById("sStat19Output").value = sStatOutput19;
}
function sStatTwentyAdd() {
  var sStatOutput20 =  parseInt(document.getElementById("sStat20Output").value);
  sStatOutput20 = sStatOutput20 + 1;
  document.getElementById("sStat20Output").value = sStatOutput20;
}