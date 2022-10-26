
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
        divDraw.innerText='draw';
        document.body.appendChild(divDraw);
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
const divFinal=document.createElement('div');
const div=document.createElement('div');
const divDraw=document.createElement('div');
divDraw.className='divDraw';


rockButton.addEventListener('click', function(){
    playerSelection=rockButton.innerHTML.toLowerCase();
    divDraw.innerText='';
    playRound();
    div.innerText='You '+playerScore+' Computer '+computerScore;
    document.body.appendChild(div);
    if(computerScore+playerScore==5){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }else if(playerScore==3||computerScore==3){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }
});
paperButton.addEventListener('click', function(){
    playerSelection=paperButton.innerHTML.toLowerCase();
    divDraw.innerText='';
    playRound();
    div.innerText='You '+playerScore+' Computer '+computerScore;
    document.body.appendChild(div);
    if(computerScore+playerScore==5){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }else if(playerScore==3||computerScore==3){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }
});
scissorsButton.addEventListener('click', function(){
    playerSelection=scissorsButton.innerHTML.toLowerCase();
    divDraw.innerText='';
    playRound();
    div.innerText='You '+playerScore+' Computer '+computerScore;
    document.body.appendChild(div);
    if(computerScore+playerScore==5){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }else if(playerScore==3||computerScore==3){
        if(playerScore>computerScore){
            divFinal.innerText='You win!';
            document.body.appendChild(divFinal);
        }else{
            divFinal.innerText='You lose!';
            document.body.appendChild(divFinal);
        }
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
    }
});