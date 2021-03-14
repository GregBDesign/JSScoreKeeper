//Score display
const playOneScore = document.querySelector('#playOne');
const playTwoScore = document.querySelector('#playTwo');

//Max Score
const scoreGoalFind = document.querySelector('#gameMax');
let scoreVal = 5;

//Buttons
const incPlayOne = document.querySelector('#plusPlayOne');
const incPlayTwo = document.querySelector('#plusPlayTwo');
const remove = document.querySelectorAll('.incrementBtn');
const reset = document.querySelector('#reset');

var oneScore = 0;
var twoScore = 0;

increment = (val) => {
    val++;
    return val;
}

incPlayOne.addEventListener('click', function(){
    oneScore = increment(oneScore);
    playOneScore.innerText = oneScore;
    checkEndScore();
})

incPlayTwo.addEventListener('click', function(){
    twoScore = increment(twoScore);
    playTwoScore.innerText = twoScore;
    checkEndScore();
})

resetButton = () => {
    oneScore = 0;
    twoScore = 0;
    playOneScore.innerText = oneScore;
    playTwoScore.innerText = twoScore;
    playOneScore.classList.remove('has-text-success', 'has-text-danger');
    playTwoScore.classList.remove('has-text-success', 'has-text-danger');
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
    if(scoreVal == oneScore || scoreVal == twoScore){
        for(let i = 0; i < 2; i++){
        remove[i].disabled = true;
        if(scoreVal == oneScore){
            playOneScore.classList.add('has-text-success');
            playTwoScore.classList.add('has-text-danger');
        } else {
            playOneScore.classList.add('has-text-danger');
            playTwoScore.classList.add('has-text-success');
        }
        }
    }
}


