let userScore = 0;
let compScore  = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userPoints = document.querySelector(".user-score");
const compPoints = document.querySelector(".comp-score");



const drawGame = () =>{
    msg.innerText="Game Was Graw. Play Again";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText=`Hurry You Win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor= "green";
    
    }
    else{
        compScore++;
        compPoints.innerText = compScore;
        msg.innerText=`You Lose.  ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor= "red";
       
    }
}

const generateComputerChoice = ()=>{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const playGame = (userChoice) =>{
    console.log("userChoice= ",userChoice);
    // Generate computer choice
    const computerChoice = generateComputerChoice();
    console.log("computerChoice= ",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor ,paper
           userWin = computerChoice === "paper"?false : true;
        }else if(userChoice === "paper"){
            // scissor,rock
           userWin = computerChoice === "scissor"?false:true;
        }else{
            // rock,paper
            userWin = computerChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
    


}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})