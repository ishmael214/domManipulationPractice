/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying, diceRollScore;
let diceDom = document.querySelector('.dice'); 

function init() {
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;
    diceDom.style.display = 'none';

    document.getElementById('score-0').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

}

init();
// DICE ROLL FUNCTION


document.querySelector('.btn-roll').addEventListener('click', function () {
   if (gamePlaying) {
    const dice = Math.floor(Math.random()*6) + 1;


    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
 
    if (dice !== 1) {
         // add score
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
         // next player
        nextPlayer();
    }

   } 

} )


// HOLD BUTTON FUNCTION


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {


    // add current score to global score
    scores[activePlayer] += roundScore;
    let playerScore = scores[activePlayer] ;

    // update UI

    document.querySelector('#score-' + activePlayer).textContent = playerScore;

    // check if player won the game
    if (playerScore >= 5) {
        document.getElementById('score-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }

    }
 
})


// NEW GAME BUTTON

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {

            // next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
            // this is the same as
            /* if (activePlayer === 0) {
                activePlayer = 1
            } else {
                activePlayer = 0;
            }  */
            

            roundScore = 0;
    
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display = 'none';
            console.log(scores);
}





// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>'

// let x = document.querySelector('#score-0').textContent;
