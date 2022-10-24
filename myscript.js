
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

const playerSelection=prompt('Enter selection').toLocaleLowerCase();
const computerSelection=getComputerChoice();


//all combination for win and lose
function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        console.log('draw');
    }else if(playerSelection==rock&&computerSelection==paper){
        console.log('You lose');
    }else if(playerSelection==rock&&computerSelection==scissors){
            console.log('You win');
    }else if(playerSelection==paper&&computerSelection==scissors){
        console.log('You lose');
    }else if(playerSelection==paper&&computerSelection==rock){
        console.log('You win');
    }else if (playerSelection==scissors&&computerSelection==rock){
        console.log('You lose');
    }else if(playerSelection==scissors&&computerSelection==paper){
        console.log('You win');
    }else{
        console.log('insert the right word')
    }
}

console.log(playRound(playerSelection, computerSelection));
