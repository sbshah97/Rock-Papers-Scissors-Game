var userChoice = prompt("Do you choose rock, paper or scissors?"); // Prompt the user for his/her choice
var computerChoice = Math.floor((Math.random*3)+1); // Randomly pick a number between 1 and 3

// Make computer selection based on the randomly generated number
switch(computerChoice){
	case 1:
		computerChoice = "rock";
		break;
	case 2:
		computerChoice = "paper";
		break;
	default:
		computerChoice = "scissors";
		break;
}

// Compare the User's choice and the Computer's choice
compare(userChoice,computerChoice);

var compare = function (choice1 , choice2)
{
    if(choice1===choice2)
        return "The result is a tie!";  // If they both are the same, it is a tie
    else if(choice1 === "rock")         // If the user picks `rock`  
    {
        if(choice2 === "scissors")      // And the computer picks `scissors`
            return "rock wins";         // Then the user wins
            
        else 
            return "paper wins";        // If not, the computer wins
        
    }
    
    else if(choice1 === "paper")        // If the user pics `paper`
    {
        if(choice2 ===" scissors")      // And the computer pics `scissors`
            return "scissors wins";     // Then the computer wins
        else 
            return "paper wins";        // If not, the user wins
    }
    
    else                                // If the user picks `scissors`
    {
        if(choice2 === "rock")          // And the computer picks `rock`
            return "rock wins";         // Computer wins
        else
            return "scissors wins";     // If not, user wins
    }
}
