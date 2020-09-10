alert('Instructions ==>you must enter the final score first.then roll the dice.if you anyone get 1 on any dice.he will lose his chance and no score will add to him.if he hold after rolled dice  that score will added to his total.if hold without roll he will lose his chance.And finally who first scored the target is the winner.');



 var finalScore;
int();
document.querySelector('.btn-roll').addEventListener('click', function () {
    if(againPlaying)
    { 

    var dice1,dice2,sort;
    sort = document.querySelector('.dice-1');
    sort.style.display = 'block';
    document.querySelector('.dice-2').style.display='block';
    dice1 = Math.floor(Math.random() * 6 )+ 1;
    dice2 = Math.floor(Math.random() * 6 )+ 1;
    
    sort.src = 'dice-' + dice1 + '.png';
    document.querySelector('.dice-2').src = 'dice-' + dice2 + '.png';
    if (dice1 !== 1 && dice2 !==1) {
      
        roundScore += dice1 + dice2;
        
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } 
    else {
        nextPlayer();
       }
       }});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    };
    document.querySelector('.btn-hold').addEventListener('click', function () {
    finalScore = document.querySelector('.final-score').value;
    if(againPlaying)
    { 
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    if (score[activePlayer] >= finalScore)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.dice-2').style.display = 'none';
       document.querySelector('.dice-1').style.display = 'none';
        againPlaying=false;
      
        }
     else{
    nextPlayer();}}
    });

document.querySelector('.btn-new').addEventListener('click', int);
function int() {
    roundScore = 0, activePlayer = 0, score=[0,0],againPlaying=true;
    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent = 'Player2';
   document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
  
};
