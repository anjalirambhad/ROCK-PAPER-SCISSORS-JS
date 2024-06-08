let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userMsg = document.querySelector("#uwin");
let compMsg = document.querySelector("#cwin");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    let ch = Math.floor(Math.random() * 3);
    return options[ch];

}
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "GAME WAS DRAW!"
    msg.style.backgroundColor = "blue";
}

const showMsg = (userChoice,compChoice) => {
    userMsg.innerText = `You selected "${userChoice}"`;
    compMsg.innerText = `Computer Selected "${compChoice}"`;
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("User Wins!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer Wins");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("User choice - ", userChoice);
    //Generate Computer choice - 
    const compChoice = genCompChoice();
    console.log("Computer choice - ", compChoice);
    if (userChoice === compChoice) {
        //Draw Game
        showMsg(userChoice,compChoice);
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? true : false;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showMsg(userChoice,compChoice);
        showWinner(userWin);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});