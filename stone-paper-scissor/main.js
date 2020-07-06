var letsplay = document.getElementsByClassName('lets-play')[0];
var btn = document.getElementsByClassName('play')[0];
var game = document.getElementsByClassName('game')[0];
var endbtn = document.getElementsByClassName('endgame')[0];
var exitbtn = document.querySelector('.winner button');
var winner = document.getElementsByClassName('winner')[0];

var playerscore=0;
var computerscore = 0;

btn.addEventListener('click',()=>{
    letsplay.style.transition =  'all 1s ease' ;
    game.style.transition =  'all 1s 1s ease';
    winner.style.transition = 'all 1s .5s ease';
    letsplay.classList.toggle('fadeout');
    game.classList.toggle('fadein');
})

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissor');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var rockpath = "assets/rock.png";
var paperpath = "assets/paper.png";
var scissorpath = "assets/scissors.png";
var array = [rockpath,paperpath,scissorpath];

var btns = document.querySelectorAll('.options button');
var pse = document.querySelector('.player-score p');
var cse = document.querySelector('.computer-score p');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        if(i==0){
            img1.src = `${rockpath}`;
        } else if(i==1){
            img1.src = `${paperpath}`;
        } else{
            img1.src = `${scissorpath}`;
        }
        img2.src = `${array[Math.floor(Math.random() * array.length)]}`;

        if(img1.src.includes(rockpath)){
            if(img2.src.includes(scissorpath))
            playerscore++;
            else if(img2.src.includes(paperpath))
            computerscore++;
        } else if(img1.src.includes(paperpath)){
            if(img2.src.includes(scissorpath))
            computerscore++;
            else if(img2.src.includes(rockpath))
            playerscore++;
        } else if(img1.src.includes(scissorpath)){
            if(img2.src.includes(rockpath))
            computerscore++;
            else if(img2.src.includes(paperpath))
            playerscore++;
        }
        
        pse.innerText = `${playerscore}`;
        cse.innerText = `${computerscore}`;
    })
}

endbtn.addEventListener('click',()=>{
    game.style.transition = 'all 1s ease';
    game.classList.toggle('fadein');
    winner.classList.toggle('fadein');
    let winnername = document.getElementsByClassName('winner-name')[0];
    if(playerscore>computerscore){
        winnername.innerText = `Winner is Player`;
    } else if(playerscore<computerscore){
        winnername.innerText = `Winner is Computer`;
    } else{
        winnername.innerText = `Match Tie !!!`
    }
}) 

exitbtn.addEventListener('click',()=>{
    winner.style.transition = 'all 1s ease';
    winner.classList.toggle('fadein');
    letsplay.style.transition = 'all 1s .5s ease';
    letsplay.classList.toggle('fadeout');
    playerscore=0;
    computerscore=0;
    pse.innerText = `${playerscore}`;
    cse.innerText = `${computerscore}`;
    img1.src = `${rockpath}`;
    img2.src = `${rockpath}`;
})