const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log(`You didn't enter a valid input please enter rock, paper or scissor`);
    }
}

const getComputerChoice = () => {
    numRandom = Math.floor(Math.random() * 3)
    console.log(numRandom)
    switch(numRandom){
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:
            return 'scissors';
    }
}

    // Si les 2 joueurs ont la même valeur
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return `It's a tie game`;
    }

    // Si l'user à taper rock
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'The computer won';
        } else {
            return 'The user won';
        }
    }
    // Si l'user à taper paper
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'The computer won';
        } else {
            return 'The user won';
        }
    }
    // Si l'user à taper scissors
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'The computer won';
        } else {
            return 'The user won';
        }
    }

    // Si l'user à taper bomb
    if(userChoice === 'bomb'){
        return 'The user won'
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice= getComputerChoice();

    console.log('You choice ' + userChoice);
    console.log('The computer choice '+computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();