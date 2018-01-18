var stateNames = ["alabama", "alaska", "arizona", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virgina", "washington", "west virgina", "wisconsin", "wyoming"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numGuesses = 20;
var wins = 0; 
var losses = 0;
var randomPick;
var replaceWithDash;
var incorrectGuesses = [];
var wordSplit = [];


function beginGame() {
	randomPick = stateNames[Math.floor(Math.random() * stateNames.length)];

	replaceWithDash = randomPick.replace(/[^ ]/g,'-'); 
	replaceWithDash = replaceWithDash.split("");

	var html =
          "<p>Number of Guesses: " + numGuesses + "</p>" +
          "<p>Number of Wins: " + wins + "</p>" +
          "<p>Number of Losses: " + losses + "</p>" 

  document.querySelector("#gameStatus").innerHTML = html;        
  document.querySelector("#word").innerHTML = "<p>" + replaceWithDash + "</p>";        

	// console.log(randomPick);
	// console.log(replaceWithDash);
}

function compareLetter(letter) {
 for (i = 0; i < randomPick.length; i++) {
		if (randomPick[i] === letter) {
			var letterCheck = true
		}
	}
	if (letterCheck) {
		for (i = 0; i < randomPick.length; i++) {
			if (randomPick[i] === letter) {
				replaceWithDash[i] = letter;
			}
		}
	} 
	else {
		incorrectGuesses.push(letter);
		numGuesses--; 
	}
	// console.log(replaceWithDash);
	// console.log(numGuesses);
	// console.log(incorrectGuesses);
}
// compareLetter("a");

function endGame() {
	var html =
          "<p>Number of Guesses: " + numGuesses + "</p>" +
          "<p>Number of Wins: " + wins + "</p>" +
          "<p>Number of Losses: " + losses + "</p>" 

  document.querySelector("#gameStatus").innerHTML = html;        
  document.querySelector("#word").innerHTML = "<p>" + replaceWithDash + "</p>";

  var word = randomPick.split('');
  wordSplit.push(word);

  if (wordSplit.toString() === replaceWithDash.toString()) {
  	wins++;
  document.querySelector("#wins").innerHTML = "<p>Number of Wins: " + wins + "</p>";
  }
	else {
		if (numGuesses = 0) {
		losses++;
	  }
	}


	document.querySelector("#losses").innerHTML = "<p>Number of Wins: " + losses + "</p>";		
		beginGame();
	}

	beginGame();

	document.onkeyup = function(event) {
		var playerGuess = event.key;
		compareLetter(playerGuess);
		endGame();
	}






