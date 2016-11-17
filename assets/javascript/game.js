/*-- Kit Chan
Coding Bootcamp UT-Austin
Oct 2016
Assignment week-4-rpg game*/
crystal = ["assets/images/stones/blue.jpg", "assets/images/stones/green.jpg", "assets/images/stones/orange.jpg", "assets/images/stones/pink.jpg"];

var wins = 0;
var losses = 0;
var userClick = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var orangeCrystal = 0;
var pinkCrystal = 0;

var totalScore = minMaxRandom(19, 120);
createCrystals();

$("#totalScore").text(totalScore);

function winOrLoss(totalScore, userClick) {
    if (totalScore === userClick) {
        $("#status").text("You are the Winner!!!");
        wins++;
        $("#wins").text(wins);
        console.log(wins);
        $("#crystals").empty();
        resetGame();
    } else if (userClick > totalScore) {
      $("#status").text("You are not the Winner!!!");
        losses++;
        $("#losses").text(losses);
        console.log(losses);
        $("#crystals").empty();
        resetGame();
    } else{
      $("#winOrLoss").html("");
    }
}

function minMaxRandom(min, max){
  var ranNumber = Math.floor((Math.random() * (max - min) + min));
  return ranNumber;
}

$("#blueCrystal").on("click", function(){
  userClick += blueCrystal;

  $("#currentScore").text(userClick);
  winOrLoss(totalScore, userClick);
});

$("#greenCrystal").on("click", function(){
  userClick += greenCrystal;

  $("#currentScore").text(userClick);
  winOrLoss(totalScore, userClick);
});

$("#orangeCrystal").on("click", function(){
  userClick += orangeCrystal;

  $("#currentScore").text(userClick);
  winOrLoss(totalScore, userClick);
});

$("#pinkCrystal").on("click", function(){
  userClick += pinkCrystal;

  $("#currentScore").text(userClick);
  winOrLoss(totalScore, userClick);
});

function createCrystals() {
    blueCrystal = minMaxRandom(1, 12);
    greenCrystal = minMaxRandom(1, 12);
    orangeCrystal = minMaxRandom(1, 12);
    pinkCrystal = minMaxRandom(1, 12);
}

function resetGame() {
    userClick = 0;
    totalScore = minMaxRandom(19, 120);
    $("#totalScore").text(totalScore);
    createCrystals();
    var newGame = true;
}
