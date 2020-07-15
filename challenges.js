/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying, roll6NLose, targetScore;
let diceDom = document.querySelector('.dice'); 
let diceDom2 = document.querySelector('.two');



function init() {
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;
    diceDom.style.display = 'none'; // CHANGE TO NONE
    diceDom2.style.display = 'none';
    

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
    const dice2 = Math.floor(Math.random()*6) + 1;


    diceDom.style.display = 'block';
    diceDom2.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    diceDom2.src = 'dice-' + dice2 + '.png';
    if (dice === 6 && dice2 ===6 && roll6NLose === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }
    else if (dice !== 1 && dice2 !== 1) {
         // add score
         roundScore += dice;
         roundScore += dice2
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
         // next player
        nextPlayer();
    }

        
    // if you roll 6 twice in a row you lose
    roll6NLose = dice 
    roll6NLose = dice2
   } 

} )

// ALERT POPUP

document.querySelector('.target-score').addEventListener('click', function() {
    alert('The target score of the game is pre set to 100. You can choose'
        + ' to set the target score to whatever you\'d like in the "Change Target'
        + ' Score" area, otherwise the target score will remain at 100.')
}) 


// HOLD BUTTON FUNCTION


document.querySelector('.btn-hold').addEventListener('click', function () {
    input = document.querySelector('.target-score').value 
    
    if (gamePlaying) {
    

    // add current score to global score
    scores[activePlayer] += roundScore;
    let playerScore = scores[activePlayer] ;

    // update UI

    document.querySelector('#score-' + activePlayer).textContent = playerScore;

    // add your own target score
    if (input) {
        targetScore = input
        console.log('The target score is currently set to ' + targetScore);
    } else {
        targetScore = 100;
        console.log('New target score has not been set so it is currently ' + targetScore);
    }

    // check if player won the game
    if (playerScore >= targetScore) {

        document.getElementById('score-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        diceDom2.style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    
     else {
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
            diceDom2.style.display = 'none';
}















// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>'

// let x = document.querySelector('#score-0').textContent;

// real quick cool functions 

function favMartialArt(martialArt) {
    if (martialArt === 'Muay Thai') {
        return function(name) {
        console.log('Aye ' + name + ', ' + martialArt + ' is badass as hell s\/o apajai');
        }
    } else if (martialArt = 'Karate') {
        return function(name) {
        console.log('Yeah that ' + martialArt + ' is cool and all ' + name + ', but you still can\'t whoop me tho.');
        }
    } else { 
        return function(name) {
        console.log('Geez ' + name + ' you don\'t like fighting?');
        }
    }
}

let muayThai = favMartialArt('Muay Thai');

let karate = favMartialArt('Karate');
karate('KENDO');


