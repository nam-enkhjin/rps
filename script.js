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

function compareRP(player){
    let robot = Math.random() * 3 + 1;
    console.log("changes");
    changeRobot(robot);
    if(robot == 1 && player ==3 || robot>player){
        lose();
    }
    if(player == 1 && robot == 3 || player>robot){
       win();
    }
    count++;
    gameCount.textContent = "Games Played: " + count;
}
function changeRobot(robot){
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

function win(){
    pVal++;
    pScore.textContent = pVal;
    result.textContent = "You WON!!";
}
function lose(){
    rVal++;
    rScore.textContent = rVal;
    result.textContent = "You lost :(";
}
function draw(){
    result.textContent = "Draw!";
}