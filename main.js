console.log ("Hello!");

//challenge 1


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


//challenge 2

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];
  var countryWin = 'Spain'  // should return 9
  var country = 'Portugal'  // should return 1
  var country = 'Russia'  // should return 0
  
  var challenge2 = document.getElementById('challenge2');

  var winnerTotal = 0;
 for (var j = 0; j < winnerList.length; j++){
    if(winnerList[j].country === countryWin){
        winnerTotal ++;
    }
  }
console.log(winnerTotal);
challenge2.innerHTML += "<h3>"+winnerTotal+"</h3>";

//challenge 3

// Given an object containing two numbers and an arithmetic operator, return the appropriate math result.

// The four operators are "add", "subtract", "divide", "multiply".

var test1 = {a: 5, b:2, operator: "add"};  //7
var test1 = {a: 5, b:2, operator: "subtract"}; //3
var test1 = {a: 5, b:2, operator: "multiply"}; //10
var test1 = {a: 5, b:2, operator: "divide"}; //2.5

var challenge3 = document.getElementById('challenge3');
if(test1.operator === "add") {
    var result = test1.a + test1.b;
} else if (test1.operator === "subtract") {
   var result = test1.a - test1.b;
} else if (test1.operator === "multiply") {
    var result = test1.a * test1.b;
} else if (test1.operator === "divide") {
    var result = test1.a / test1.b;
}

console.log(result);
challenge3.innerHTML += "<h3>" + result + "</h3>";