var stateNames = ["alabama", "alaska", "arizona", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virgina", "washington", "west virgina", "wisconsin", "wyoming"];

var numGuesses = 0;
var wins = 0; 
var losses = 0;
var randomPick;
var replaceWithDash;
var incorrectGuesses = [];
var wordSplit = [];
// var letterCheck = false; 


function beginGame() {
	numGuesses = 20;
	randomPick = stateNames[Math.floor(Math.random() * stateNames.length)];

	replaceWithDash = randomPick.replace(/[^ ]/g,'-'); 
	replaceWithDash = replaceWithDash.split("");
	// console.log(replaceWithDash)

	var html =
          "<p>Number of Guesses: " + numGuesses + "</p>" +
          "<p>Number of Wins: " + wins + "</p>" +
          "<p>Number of Losses: " + losses + "</p>" 

  document.querySelector("#gameStatus").innerHTML = html;        
  document.querySelector("#word").innerHTML = "<p>" + replaceWithDash + "</p>";        

	console.log(randomPick);
	console.log(replaceWithDash);
}



function compareLetter(letter) {
 	for (var i=0; i<randomPick.length; i++) {
		if (randomPick[i] == letter) {
			var letterCheck = true;
		}
	}

		if (letterCheck) {
			for (var i = 0; i < randomPick.length; i++) {
				if (randomPick[i] === letter) {
				replaceWithDash[i] = letter;
			}
		}
	} 

	else {
		incorrectGuesses.push(letter);
		numGuesses--;
	}
}

function endGame() {
	var html =
          "<p>Number of Guesses: " + numGuesses + "</p>" +
          "<p>Number of Wins: " + wins + "</p>" +
          "<p>Number of Losses: " + losses + "</p>" 

  document.querySelector("#gameStatus").innerHTML = html;        
  document.querySelector("#word").innerHTML = "<p>" + replaceWithDash + "</p>";

  // var word = randomPick.split('');
  // wordSplit.push(word);

  if (wordSplit.toString() === replaceWithDash.toString()) {
  	wins++;
  document.querySelector("#gameStatus").innerHTML = "<p>Number of Wins: " + wins + "</p>";
  beginGame();
  }
	else {
		if (numGuesses === 0) {
		losses++;
		beginGame();
	  }
	}
}
// beginGame()
// endGame();	
// beginGame()

beginGame();
document.onkeyup = function(event) {
		var playerGuess = event.key;

		compareLetter(playerGuess);
		endGame();
}








