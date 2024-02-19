let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = ()=>{
    const options = ["rock", "paper" ,"scissors"];
    const randId = Math.floor(Math.random()*3);
    return options[randId];
}

const drawGame = () =>{
    msg.innerText = "it is a draw, play again";
    msg.style.backgroundColor = "rgb(80, 80, 166)";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose , ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{

    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("computer",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else
    {
        userWin = true;
        if(userChoice  === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice == "paper"){
            // rock , scissors
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            //paper rock
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin , userChoice ,compChoice);
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choice was clicked")

    });
  });