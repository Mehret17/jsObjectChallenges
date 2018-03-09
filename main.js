console.log ("Hello!");

//challenge 1

//challenge 1

// challenge 1

var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }, {name: "Rick Sanchez", scores:[99,0]}]; // Displays "Bill"

//declare flag variables
var maxTotal = 0;
var winner;

var challenge1 = document.getElementById('challenge1');

// loop through players array
for (var p = 0; p < players.length; p++) {
  
  // set "total" value key
  players[p].total = 0;

  //sum scores and add players total value
  for (var s = 0; s < players[p].scores.length; s++){
    players[p].total += players[p].scores[s];
  }
  // if score is under 100 AND if players total > maxTotal, declare winner;
  if (players[p].total <= 100 && players[p].total > maxTotal){
    
    //declare winner
    maxTotal = players[p].total;
    winner = players[p].name;

  }
}

// maxTotal is never set, there is no winner
if (maxTotal === 0) {
  winner = false;
}

challenge1.innerHTML += "<h3>"+winner+"</h3>";
