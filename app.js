// player one obj
const playerOne = {
    score: 0,
    playerScore: document.querySelector('#playOne'),
    incPlayOne: document.querySelector('#plusPlayOne')
}

// player two obj
const playerTwo = {
    score: 0,
    playerScore: document.querySelector('#playTwo'),
    incPlayTwo: document.querySelector('#plusPlayTwo')
}

//Max Score
const scoreGoalFind = document.querySelector('#gameMax');
let scoreVal = 5;

//Buttons
const remove = document.querySelectorAll('.incrementBtn');
const reset = document.querySelector('#reset');

let increment = function(player, opponent){
    player.score++;
    player.playerScore.innerText = player.score;
}

playerOne.incPlayOne.addEventListener('click', function(){
    increment(playerOne, playerTwo);
    checkEndScore();
})

playerTwo.incPlayTwo.addEventListener('click', function(){
    increment(playerTwo, playerOne);
    checkEndScore();
})

resetButton = () => {
    for(let p of [playerOne, playerTwo]){
        p.score = 0;
        p.playerScore.innerText = p.score;
        p.playerScore.classList.remove('has-text-success', 'has-text-danger');
    }
    for(let i = 0; i < 2; i++){
        remove[i].disabled = false;    
    }
}

reset.addEventListener('click', resetButton);

scoreGoalFind.addEventListener('change', function(){
    scoreVal = parseInt(this.value);
    resetButton();
})

checkEndScore = () => {
    if(scoreVal == playerOne.score || scoreVal == playerTwo.score){
        for(let i = 0; i < 2; i++){
        remove[i].disabled = true;
        if(scoreVal == playerOne.score){
            playerOne.playerScore.classList.add('has-text-success');
            playerTwo.playerScore.classList.add('has-text-danger');
        } else {
            playerOne.playerScore.classList.add('has-text-danger');
            playerTwo.playerScore.classList.add('has-text-success');
        }
        }
    }
}