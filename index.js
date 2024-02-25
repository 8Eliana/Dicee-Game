
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let imageName1 = "images/dice-six-faces-"+randomNumber1 + ".png";
let imageName2 = "images/dice-six-faces-"+randomNumber2 + ".png";

let imagePlayer1 = document.querySelector('.image_player1');
let imagePlayer2 = document.querySelector('.image_player2');

document.querySelector('.image_player1').setAttribute('src',imageName1);
document.querySelector('.image_player2').setAttribute('src',imageName2);


function logicTitleDiceeGame(){
    if(randomNumber1 === randomNumber2){
        document.querySelector('.title-text').innerHTML = "Equality";
    }
    else if(randomNumber1 > randomNumber2){
        document.querySelector('.title-text').innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector('.title-text').innerHTML = "Player 2 Wins!";
    }
}

logicTitleDiceeGame();