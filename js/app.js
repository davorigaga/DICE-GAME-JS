
let score, activePlayer, roundScore, gameStatus, dice, diceDOM, finalScore; 
init();



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameStatus) {
        dice = Math.floor(Math.random() * 6 + 1);
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = `img/dice-${dice}.png`;

        if(dice !== 1) {
            roundScore += dice;
            document.querySelector(`.current-score-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlayer();
        }
    } else {

    }
});







document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameStatus) {
        score[activePlayer] += roundScore;
        document.querySelector(`.score-${activePlayer}`).textContent = score[activePlayer];
        roundScore = 0;

        if(score[activePlayer] >= finalScore) {
            document.querySelector(`.player-${activePlayer}`).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector(`.player-${activePlayer}`).classList.add('winner');
            document.querySelector(`.gameplayer-${activePlayer}`).classList.remove('active');
            gameStatus = false;
        } else {
            nextPlayer();
        }
        
    }
});





document.querySelector('.btn-ngame').addEventListener('click', init);

function init() {
    score = [0, 0]; 
    roundScore = 0; 
    activePlayer = 0;
    gameStatus = true; 

    document.querySelector('.player-0').textContent = 'player 1';
    document.querySelector('.player-1').textContent = 'player 2';
    document.querySelector('.score-0').textContent = 0;
    document.querySelector('.score-1').textContent = 0;
    document.querySelector('.current-score-0').textContent = 0;
    document.querySelector('.current-score-1').textContent = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');

    document.querySelector(`.gameplayer-${activePlayer}`).classList.toggle('active');
}

function nextPlayer() {
    roundScore = 0;
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    let previousPlayer = activePlayer;
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    document.querySelector(`.gameplayer-${previousPlayer}`).classList.remove('active');
    document.querySelector(`.gameplayer-${activePlayer}`).classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    
}


document.querySelector('.setScore').addEventListener('click', set);
function set() {
    finalScore = document.querySelector('#winning-score').value;
    document.querySelector('#winning-score').value = '';
}