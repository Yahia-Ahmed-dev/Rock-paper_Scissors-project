

  function playGame() {

    function getHumanChoice() {
      let Choice = prompt("Choice : rock , paper , or scissors ?").toLowerCase();
      if (Choice != "rock" && Choice != "paper" && Choice != "scissors") {
        alert('wrong choice! try again');
        return getHumanChoice();
      }

      return Choice;
    }

    function getComputerChoice() {
      let Choices = ["rock", "paper", "scissors"];
      let ChoicesRandom = [Math.floor(Math.random() * Choices.length)];
      return Choices[ChoicesRandom];
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      console.log("your choice : " + humanChoice);
      console.log("computer's choice :" + computerChoice)

      if (humanChoice === computerChoice) {
        console.log("draw!")
      }

      else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("you win! 🎉");
        humanScore++;
      }

      else {
        console.log("you lose! 😢")
        computerScore++;
      }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    for (let i = 1; i <= 5; i++) {
      console.log("** Round  : " + i + "**");
      playRound(getHumanChoice(), getComputerChoice());
    }


    console.log("the Final Result : ");
    if (humanScore > computerScore) {
      console.log(`** you win (${humanScore}) - (${computerScore}) **`);
    }

    else if (computerScore > humanScore) {
      console.log(`** computer win (${computerScore}) - (${humanScore}) ** `)
    }

    else {
      console.log("draw!");
    }

    let playAgain = confirm("Do you Want to play again?")

    if (playAgain) {
      console.log("Cool! let's Get started!");
      playGame();
    }

    else {
      console.log(" I hope you enjoy");
    }

  }

  playGame();