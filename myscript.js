
//get random between those 3 options
function getComputerChoice(){
    const randomNumber=Math.random()*10;
    if (randomNumber<3.33){
        return 'rock';
    }else if (randomNumber<6.66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

