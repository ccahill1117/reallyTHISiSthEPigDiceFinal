// Business Logic for Dice Game
function Game() {
  this.players = [],
  this.roll = 0,
  this.temp = 0,
  this.total = 0,
  this.turn = ""
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}
// }
//
// Game.prototype.assignID = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

function RollDice() {
  return Math.floor(Math.random()*6)+1;
}

Game.prototype.Roll = function(Roll) {
  if (Roll > 1 && Roll <= 6) {
    this.roll = Roll;
  }
  else if (Roll = 1) {
    this.roll = 0;
    this.temp = 0;
    // this.turn = "it's not your turn!"
  }
  return this.roll;
}

Game.prototype.Temp = function(roll) {
  if (this.roll > 1 && this.roll <= 6) {
    this.temp += this.roll;
  }
  else if (this.roll === 1) {
    this.temp = 0;
    this.roll = 0;
  }
  return this.temp;
}

Game.prototype.Hold = function() {
  this.total = this.temp;
  this.roll = 0;
  this.temp = 0;
  return this.total;
}

Game.prototype.NewGame = function() {
  this.players.score = 0;
  this.temp = 0;
  this.total = 0;
  this.turn = "";
}

function Player(Name, id) {
  this.name = Name,
  this.score = 0,
  this.id = id
}

Player.prototype.CheckForHundred = function(){
  if(this.total >= 100){
    alert("This Player is the winner");
  }
}

function displayPlayerDetails(playersToDisplay) {
  var playersList = $("div#playersHere");
  var htmlForPlayerInfo = "";
  playersToDisplay.players.forEach(function(player) {
    htmlForPlayerInfo += "<div><p>" + "name:" + player.name + "<br>" + "total score:" + player.score + "<br>" + player.turn + "</p></div>";
  })
  playersList.html(htmlForPlayerInfo);
};

function whoseTurnFirst() {
  for (i = 0; i < players.players.length; i++)
    if (players.players[i].id === players.players[players.players.length-1].id)
    return players.players[i].name;

}


function changeTurns() {
  for (i = 0; i < players.players.length; i++)
    if (players.players[i].name === players.turn)
    {
      if (players.players[i].id === players.players.length)

      {return players.players[0].name}

      else
      {return players.players[i+1].name;}
    }
}
//
function giveScores(rollTotal) {
  for (i=0; i < players.players.length; i++)
    if (players.turn === players.players[i].name) {
    players.players[i].score += rollTotal;
    players.total = 0;
  }
}

var rollTemp = 0;
var players = new Game;

$(document).ready(function() {

  $("#newPlayer").submit(function(event) {
    event.preventDefault();
    var inputtedPlayerName = $("input#newName").val();
    var inputtedPlayerNumber = parseInt($("input#newNumber").val());
    $("input#newName").val("");
    $("input#newNumber").val("");

    var newPlayer = new Player(inputtedPlayerName,inputtedPlayerNumber);
    players.addPlayer(newPlayer);
    displayPlayerDetails(players);
    console.log(players);

  });


  $("#rollButton").click(function(event) {
    var rollInit = players.Roll(RollDice());
    var rollTemp = players.Temp();
    if (rollInit === 0) {
      players.turn = changeTurns();
    } else {
      }
      $("#playersTurn").text(players.turn);
      displayPlayerDetails(players);

    console.log(players);
    console.log(rollInit);
    console.log(rollTemp);
    console.log(players.roll);

 });

  $("#holdButton").click(function(event) {
    var rollTotal = players.Hold();
    giveScores(rollTotal);
    players.turn = changeTurns();
    $("#playersTurn").text(players.turn);
    displayPlayerDetails(players);


    console.log(players);
    console.log(rollTotal);

  });



  $("#startGame").click(function(event) {
    // yourTurn = whoseTurnFirst();
    players.turn = whoseTurnFirst();
    $("#playersTurn").text(players.turn);

    console.log(players);

  });

  $("#PlayerTwoHold").click(function(event) {

  });

  $("#newGame").click(function(event) {

  })


})
