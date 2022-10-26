
//get random between those 3 options
const rock='rock';
const paper='paper';
const scissors='scissors';

function getComputerChoice(){
    const randomNumber=Math.random()*10;
    if (randomNumber<3.33){
        return rock;
    }else if (randomNumber<6.66){
        return paper;
    } else {
        return scissors;
    }
}

let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;


//all combination for win and lose
function playRound(){
    computerSelection=getComputerChoice();
    if (playerSelection==computerSelection){
        console.log('draw');
    }else if(playerSelection==rock&&computerSelection==paper){
        return computerScore++;
    }else if(playerSelection==rock&&computerSelection==scissors){
            return playerScore++;
    }else if(playerSelection==paper&&computerSelection==scissors){
        return computerScore++;
    }else if(playerSelection==paper&&computerSelection==rock){
        return playerScore++;
    }else if (playerSelection==scissors&&computerSelection==rock){
        return computerScore++;
    }else if(playerSelection==scissors&&computerSelection==paper){
        return playerScore++;
    }else{
        console.log ('something is wrong');
    }
}

const rockButton=document.querySelector('#rock');
const paperButton=document.querySelector('#paper');
const scissorsButton=document.querySelector('#scissors');


rockButton.addEventListener('click', function(){
    playerSelection=rockButton.innerHTML.toLowerCase();
    playRound();
    console.log('You '+playerScore+' Computer '+computerScore);
    if(computerScore+playerScore==5){
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    if(playerScore==3){
        playerScore=5;
    }else if(computerScore==3){
        computerScore=5;
    }else{
        playerScore=playerScore;
    }
    if(playerScore>computerScore){
        console.log('You win!');
    }else{
        console.log('You lose');
    }
}
});
paperButton.addEventListener('click', function(){
    playerSelection=paperButton.innerHTML.toLowerCase();
    playRound();
    console.log('You '+playerScore+' Computer '+computerScore);
    if(computerScore+playerScore==5){
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    if(playerScore==3){
        playerScore=5;
    }else if(computerScore==3){
        computerScore=5;
    }else{
        playerScore=playerScore;
    }
    if(playerScore>computerScore){
        console.log('You win!');
    }else{
        console.log('You lose');
    }
}
});
scissorsButton.addEventListener('click', function(){
    playerSelection=scissorsButton.innerHTML.toLowerCase();
    playRound();
    console.log('You '+playerScore+' Computer '+computerScore);
    if(computerScore+playerScore==5){
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    if(playerScore==3){
        playerScore=5;
    }else if(computerScore==3){
        computerScore=5;
    }else{
        playerScore=playerScore;
    }
    if(playerScore>computerScore){
        console.log('You win!');
    }else{
        console.log('You lose');
    }
}
});




//best out of 5, display at the end the result


function game(){

for (let i=0; i<5; i=playerScore+computerScore){
    computerSelection=getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log('You '+playerScore+' Computer '+computerScore);
    if(playerScore==3){
        playerScore=5;
    }else if(computerScore==3){
        computerScore=5;
    }else{
        playerScore=playerScore;
    }
    }
    if(playerScore>computerScore){
        console.log('You win!');
    }else{
        console.log('You lose');
    }
}
