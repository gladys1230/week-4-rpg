/*-- Kit Chan
Coding Bootcamp UT-Austin
Oct 2016
Assignment week-4-rpg game*/
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber;

function clickhandler()
{
	console.log("click");
	var crystalValue = ($(this).data("crystalvalue"));

	counter += crystalvalue;

	if(counter === targetNumber)
	{
		wins++;
		document.getElementById('statusMsg').innerHTML = ("You win!");
    setup();
  }

  else if (counter >= targetNumber) 
  {
    losses++;
    document.getElementById('statusMsg').innerHTML = ("You lose!");
    setup();
  }

  //updates score on click
  document.getElementById('losses').innerHTML = losses;
  document.getElementById('wins').innerHTML = wins;
  document.getElementById('totalscore').innerHTML =  (counter);
}

function setup()
{
	document.getElementById('losses').innerHTML = 0;
  document.getElementById('wins').innerHTML = 0;
  document.getElementById('totalscore').innerHTML = 0;
  
  counter = 0;
  //Variable to hold number total to guess
  targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
  $("#numberToGuess").text(targetNumber);

  var numberOptions = [];
  for(var i = 0, x = 12; i < 4; i++)
  {
  	numberOptions.push(Math.floor(Math.random() *x) +1)
  };

  $("#crystals").empty();

  for(var i = 0; i < numberOptions.length; i++)
  {
  	var imageCrystal =$("<img>");

  	imageCrystal.attr("src", "assets/imges/stones" + (i+1) + ".jpg");

  	imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  	$("#crystals").append(imageCrystal);

  }

  $(".imageCrystal").on("click", clickhandler);

}

window.onload = setup();


