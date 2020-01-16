var team1Score=0;
var team2Score=0;
var team1Server=2;
var team2Server=3;
var winner=0;
var sideoutCounter=0;
var teamOneName="";
var teamTwoName="";
function namesOutput() {
  teamOneName = document.getElementById("input1").value;
  teamTwoName = document.getElementById("input2").value;
}
function point() {
 if (winner==0) {
 if (team1Server<=2) {
  team1Score = team1Score + 1;
 }
 if (team2Server<=2) {
  team2Score = team2Score + 1;
 }
}
 display();
}
function noPoint() {
if (winner == 0) {
if (team1Server<=2) {
  if (team1Server==2) {
    team2Server=1;
  }
  team1Server = team1Server + 1;
}
  if (team2Server==2) {
    team1Server=1;
  }
  team2Server = team2Server + 1;
}
if (team1Server==1 || team2Server==1) {
  sideoutCounter = sideoutCounter + 1;
}
display();
}
function whoWon() {
  if (team1Score >= 11 && team1Score-team2Score >= 2) {
    document.getElementById("h6").innerHTML = teamOneName + " beat " + teamTwoName + " " + team1Score + " to " + team2Score + "! The First Team won with " + sideoutCounter + " sideout(s)" ;
    winner=1;
  }
  if ((team1Score >= 11 && team1Score-team2Score >= 2) && sideoutCounter == 0) {
    document.getElementById("h6").innerHTML = teamOneName + " beat " + teamTwoName + " " + team1Score + " to " + team2Score + "! The First Team won with no sideouts!" ;
    winner=1;
  }
  if (team2Score >= 11 && team2Score-team1Score >= 2) {
    document.getElementById("h6").innerHTML = teamTwoName + " beat " + teamOneName + " " + team2Score + " to " + team1Score + "! The Second Team won with " + sideoutCounter + " sideout(s)" ;
    winner=1;
  }
}
function display() {
  document.getElementById("originalOutput").innerHTML = team1Score;
  document.getElementById("romanOutput").innerHTML = team2Score;
  if (winner==0) {
  if (team1Server==1) {
    document.getElementById("h6").innerHTML = "It is " + teamOneName + "'s first serve. &nbsp&nbsp" + team1Score + "-" + team2Score + "-" + team1Server;
  }
  if (team1Server==2) {
    document.getElementById("h6").innerHTML = "It is " + teamOneName + "'s second serve. &nbsp&nbsp" + team1Score + "-" + team2Score + "-" + team1Server;
  }
  if (team2Server==1) {
    document.getElementById("h6").innerHTML =  "It is " + teamTwoName + "'s first serve. &nbsp&nbsp" + team2Score + "-" + team1Score + "-" + team2Server;
  }
  if (team2Server==2) {
    document.getElementById("h6").innerHTML =  "It is " + teamTwoName + "'s first serve. &nbsp&nbsp" + team2Score + "-" + team1Score + "-" + team2Server;
  }
  whoWon()
}
}

var player1Score=0;
var player2Score=0;
var player1Server=1;
var player2Server=2;
var winner1=0;
var sideoutCounter1=0;
var playerOneName;
var playerTwoName;
function namesOutput1() {
  playerOneName = document.getElementById("input11").value;
  playerTwoName = document.getElementById("input22").value;
}
function point1() {
 if (winner1==0) {
 if (player1Server<=1) {
  player1Score = player1Score + 1;
 }
 if (player2Server<=1) {
  player2Score = player2Score + 1;
 }
}
 display1();
}
function noPoint1() {
if (winner1==0) {
  if (player1Server==1) {
    player2Server=1;
    player1Server = player1Server + 1;
  }
  else{
    player1Server=1;
    player2Server = player2Server + 1;
  }
  sideoutCounter1 = sideoutCounter1 + 1;
display1();
}
}
function whoWon1() {
  if (player1Score >= 11 && player1Score-player2Score >= 2) {
    document.getElementById("h61").innerHTML = playerOneName +" beats " + playerTwoName + " " + player1Score + " to " + player2Score + "! The First Player won with " + sideoutCounter1 + " sideout(s)" ;
    winner1=1;
  }
  if ((player1Score >= 11 && player1Score-player2Score >= 2) && sideoutCounter1 == 0) {
    document.getElementById("h61").innerHTML = playerOneName +" beats " + playerTwoName + " " + player1Score + " to " + player2Score + "! The First Player won with no sideouts!" ;
    winner1=1;
  }
  if (player2Score >= 11 && player2Score-player1Score >= 2) {
    document.getElementById("h61").innerHTML = playerTwoName +" beats " + playerOneName + " " + player2Score + " to " + player1Score + "! The Second Player won with " + sideoutCounter1 + " sideout(s)" ;
    winner1=1;
  }
}
function display1() {
  document.getElementById("originalOutput1").innerHTML = player1Score;
  document.getElementById("romanOutput1").innerHTML = player2Score;
  if (winner1==0) {
  if (player1Server==1) {
    document.getElementById("h61").innerHTML = "It is " + playerOneName +  "'s serve. " + player1Score + "-" + player2Score;
  }
  if (player2Server==1) {
    document.getElementById("h61").innerHTML = "It is " + playerTwoName +  "'s serve. " + player2Score + "-" + player1Score ;
  }
  whoWon1()
}
}