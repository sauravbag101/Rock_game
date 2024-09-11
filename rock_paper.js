let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".selection");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice =() =>{
const option = ['rock', 'paper', 'scissor'];
const randIdx = Math.floor(Math.random() * 3); //randon number choose in 3
return option[randIdx];
}
const drawGame = ()=>{
    console.log("game was draw")
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "black"

}
const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        userScore++
        userScorepara.innerText = userScore
        console.log("you win");
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++
        compScorepara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user ki pasand", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else//(userChoice === "scissor")
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        }
    };


choice.forEach((choice)=>{
    console.log("print")
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
    // console.log("fullu print", userChoice)
    playGame(userChoice);
    });
})