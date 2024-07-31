const body = document.body;

const pScore = document.getElementById('pScore');
let pVal = 0;
pScore.textContent = pVal;

const rScore = document.getElementById('rScore');
let rVal = 0;
rScore.textContent = rVal;

const pImg = document.getElementById('pImg');
const rImg = document.getElementById('rImg');

const result = document.getElementById('result');
const gameCount = document.getElementById('count');
let count = 0;

const winningAudio = new Audio("win.mp3");
const losingAudio = new Audio("lose.mp3");
const boring = new Audio("boring.mp3")

function compareRP(player){
    let robot = Math.floor(Math.random() * 3 + 1);
    console.log("changes");
    changeRobot(robot);
    if(robot == 1 && player ==3 || robot>player){
        rVal++;
        rScore.textContent = rVal;
        result.textContent = "You lost :(";
        losingAudio.play();
    }
    else if(player == 1 && robot == 3 || player>robot){
        pVal++;
        pScore.textContent = pVal;
        result.textContent = "You WON!!";
        winningAudio.play();
    }
    else{
        result.textContent = "Draw!";
        boring.play();
    }
    count++;
    gameCount.textContent = "Games Played: " + count;
}
function changeRobot(robot){
    console.log("changes", robot);
    if(robot == 1){
        document.getElementById('rImg').src='./rock.jpg';
    }
    if(robot == 2){
        document.getElementById('rImg').src='./paper.jpg';
    }
    if(robot == 3){
        document.getElementById('rImg').src='./scissors.jpg';
    }
}

const rRockBtn = document.getElementById('rock');
rRockBtn.addEventListener('click', function(){
    document.getElementById('pImg').src='./rock.jpg'
    setTimeout(() => {
        compareRP(1)
    }, 1000);

})

const rPaperBtn = document.getElementById('paper');
rPaperBtn.addEventListener('click', function(){
    document.getElementById('pImg').src='./paper.jpg'
    setTimeout(() =>{
        compareRP(2)
    }, 1000);
})

const rScissorsBtn = document.getElementById('scissors');
rScissorsBtn.addEventListener('click', function(){
    document.getElementById('pImg').src='./scissors.jpg'
    setTimeout(() => {
        compareRP(3)
    }, 1000);
});