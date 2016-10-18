

// Returns a random integer between min (inclusive) and max (inclusive)
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Makes sure the inputs are either "rock", "paper" or "scissors"
// If not, it will return false, and will keep asking user until they type a valid choice
function userInputValidate (userChoice) {
	return (
		userChoice.toLowerCase() === "rock" ||
		userChoice.toLowerCase() === "paper" ||
		userChoice.toLowerCase() === "scissors"
	);
}

function playRockPaperScissors () {
	do {
			var userInput = prompt("Do you choose rock, paper or scissors?");
	} while (!userInputValidate(userInput))


	// Picks a random number from 1 to 3, each number corresponding to rock, paper or scissors respectively
	var computerInput = getRandomInt(1, 3);

	switch(computerInput){
		case 1:
			computerInput = "rock";
			break;
		case 2:
			computerInput = "paper";
			break;
		default:
			computerInput = "scissors";
	}

	var result = whoWins(userInput.toLowerCase(), computerInput);
	console.log(userInput.toLowerCase(), computerInput);
	return result;
}


// Returns 1 to add to user's score, if user wins the round
var whoWins = function (userChoice , computerChoice) {
	// compares user choice to computer choice
	// First switch case takes care of ties, other cases handles who wins
	switch(userChoice) {
		case computerChoice:
			alert("The result is a tie!");
			return -1;
		case "paper":
			if (computerChoice === "scissors") {
				alert("(Paper vs Scissors) Computer's scissors wins");
				return 0;
			} else {
				alert("(Paper vs Rock) User's paper wins");
				return 1
			}
		case "scissors":
			if (computerChoice === "rock") {
				alert("(Scissors vs Rock) Computer's rock wins");
				return 0;
			} else {
				alert("(Scissors vs Paper) User's scissors wins");
				return 1;
			}
		case "rock":
			if (computerChoice === "paper") {
				alert("(Rock vs Paper) Computer's paper wins");
				return 0;
			} else {
				alert("(Rock vs Scissors) User's rock wins");
				return 1;
			}
		default:
			alert("You must make a choice");
			return;
	}
}

// Consists of 5 rounds of Rock Paper Scissors, each round adding the points up to the total score.
function bestOutOfFive () {
		alert("Play best out of five rounds");
		var userTotalScore = 0;
		var userRoundScore = 0;
		var numberRounds = 5;

		// Play until 5 rounds is up
		while (numberRounds > 0) {
			console.log('Rounds ', numberRounds, ' Left');
			// If game results in a tie, play again
			do {
					userRoundScore = playRockPaperScissors();
			} while (userRoundScore < 0)

			userTotalScore += userRoundScore;
			if (userRoundScore > 0) {
				console.log('Win!', userTotalScore);
			}
			numberRounds--;
		}

		alert('userscore: ' + userTotalScore + ' out of 5');

}

bestOutOfFive();
