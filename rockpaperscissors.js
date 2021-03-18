const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
  
  }
  //console.log(getUserChoice('Paper'));
  //console.log(getUserChoice('fork'));
  
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3); {
      if(randomNum === 0) {
        console.log('rock');
      } else if (randomNum === 1) {
        console.log('paper');
      } else if (randomNum === 2) {
        console.log('scissors');
      } else {
        console.log('Error!')
      }
     
  
    }
  } 
  //console.log(getComputerChoice());
  //console.log(getComputerChoice());
  //console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice) {
  


  if (userChoice === computerChoice) {
    return 'The Game is a Draw!';
  } if (userChoice === 'rock') {

    if (computerChoice === 'paper') {
      return 'The computer has kicked your arse!';
    } else {
      return 'You bummed the computer!';
    };

    if (userChoice === 'paper') {

      if (computerChoice === 'scissors') {
        return 'The computer has just cut yir genitals aff!';
      } else {
        return 'Just beware!';
      };
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Snap!';
        } else {
          return ':P';
        }


      }


    }
  }


  console.log(determineWinner('paper', 'scissors'));
}
  
  
  
  
  
  
  
  
  
  