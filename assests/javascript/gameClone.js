var stateNames = ["alabama", "alaska", "arizona", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virgina", "washington", "west virgina", "wisconsin", "wyoming"];

var guesses = 0;
var wins = 0;
var losses = 0;
var randomPick;
var replaceWithDash;
var incorrectGuesses = [];

function gameSetup() {
	randomPick = stateNames[Math.floor(Math.random() * stateNames.length)];

	replaceWithDash = randomPick.replace(/[^ ]/g,'-');
	replaceWithDash = replaceWithDash.split("");

	$().

}
