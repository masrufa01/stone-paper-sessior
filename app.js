let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice= () =>{
const option =[ "rock", "paper","scissors"];
const randIdx =Math.floor(Math.random() * 3);
return options[randIdx];
};

const dreawGame = () => {
msg.innertext="Game was draw. play again.";
msg.style.backgroundcolor ="#081b31";
};

const showWinner=(userWin, userChoice, comChice)=>{
if (userwin){
    userscore++;
    userscorepara.innertext=userscore;
    msg.innerText=`you win!your ${userchoice}beat ${compchoice};`
    msg.style.backgroundcolor="green";

}else{
    compscore++;
    compscorepara.innerText.text=compscore;
  msg.innerText=`you lost.${compchoice}beats your ${userchoice}`;
  msg.style.backgroundcolor="red";  
}
};

const playGame=(userchoice)=>{
    //generate computer choice
const compchoice= gencompchoice();

if (userchoice=== compchoice){
    //draw game
    dreawGame();
}else{
    let userwin=true;
    if (userchoice==="rock"){
        //scissors, paper
        userwin=compchoice==="paper"?false:true;
    }else if (userchoice=== " paper"){
     //rock, scissors
     userwin = compchoice==="scissors"? false: true;
    }else{
        //rock,paper
        userwin=compchoice ==="rock"?false:true;
    }   
       showwinner(userwin,userchoice,compchoice);
} 
    };

    choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
       const userchoice=choice.getAttribute("id");
       playGame(userchoice); 
    });    
    });