$(document).ready(function(){
 
   
    $("p").hide();
  
});


alert('Instructions ==>you must enter the final score first.then roll the dice.if you anyone get 1 on any dice.he will lose his chance and no score will add to him.if he hold after rolled dice  that score will added to his total.if hold without roll he will lose his chance.And finally who first scored the target is the winner.');

const x = document.getElementById("myAudio"); 
            
function playAudio() { 
 
   x.pause();
   x.currentTime = 0;

  x.play(); 
  
}
function stop(){
   const x = document.getElementById("myAudio");
  const y =document.getElementById("intrest");
  const z =document.getElementById("vivekam");
x.pause();
x.currentTime = 0;
y.pause();
y.currentTime = 0;
z.pause();
z.currentTime = 0;
const a = document.getElementById("winners"); 
a.pause();
a.currentTime=0;
}




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
        const x = document.getElementById("intrest"); 
        stop();
        x.currentTime = 0;     
      
        x.play();   
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
        const x = document.getElementById("winners"); 
         stop();
        x.play();
        
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.dice-2').style.display = 'none';
        $(document).ready(function(){
            $("p").show();
        });
       document.querySelector('.dice-1').style.display = 'none';
        againPlaying=false;
      
        }
     else{
        const x = document.getElementById("vivekam"); 
       
        stop();
        x.currentTime = 0;
     x.play();
       
    nextPlayer();}}
    });

document.querySelector('.btn-new').addEventListener('click', int);
function int() {
    roundScore = 0, activePlayer = 0, score=[0,0],againPlaying=true;
    $(document).ready(function(){
 
   
        $("p").hide();
      
    });
   stop();
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
