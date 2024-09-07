let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard=document.querySelector("#userScore");
const compScoreBoard=document.querySelector("#compScore");
const resetBtn = document.querySelector(".reset");

const reset=()=>{
    userScore = 0;
    compScore = 0;
    userScoreBoard.innerText=userScore;
    compScoreBoard.innerText=compScore;

}

reset();

const drawGame=()=>{
    msg.innerText = "game was draw.Play again";
    msg.style.backgroundColor ="black";
    
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreBoard.innerText=userScore;
        msg.style.width="60vh";
        msg.innerText = `you win! your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor ="green";
        
    }else{
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.style.width="60vh";
        msg.innerText = `you lost. ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
    
};

const genCompUser=()=>{
    const option=["rock","paper","scissor"];
    const rndIdx = Math.floor(Math.random() * 3);
    return option[rndIdx];
};

const playGame =(userChoice)=>{
    console.log("user chice =",userChoice);
    const compChoice=genCompUser();
    console.log("pc choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if (userChoice==="paper"){
            userWin = compChoice==="scissor"? false: true;
        }else{
            userWin = compChoice==="rock"? false: true;
        }
        showWinner(userWin,compChoice,userChoice);
        
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    
    });

});

resetBtn.addEventListener("click",()=>{
    msg.innerText= "game reset. start playing";
    msg.style.backgroundColor ="";
    reset();
})