let 
canvas,
ctx,
posX = 0,
posY = 0,
snakeX = 0,
snakeY = 0,
foodX = 10,
foodY = 10,
tailLength = 5,
trail = [],
tileSize = 30,
gridSize = 30,
score = 0;

window.onload = function(){  
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');
document.addEventListener("keydown", changeDirection);
    
    let framesPerSecond = 10;
    setInterval(function(){
    drawEverything();
    }, 1000/framesPerSecond);
}

function drawEverything(){
ctx.fillStyle = "#06A506";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "#ffffff";
ctx.lineWidth   = 4;
ctx.strokeRect(0,0, canvas.width, canvas.height);

ctx.fillStyle = "#ffffff";
ctx.font = "20px Arial";
ctx.fillText(score, 20 , 575);

//SNAKE
ctx.fillStyle = "blue";
for(let i = 0; i < trail.length; i++){
ctx.strokeRect(
       trail[i].x * tileSize,
       trail[i].y * tileSize, 
       tileSize,
       tileSize
);

if(trail[i].x == snakeX && trail[i].y == snakeY){
 tailLength = 3;
score = 0;
}
}

ctx.fillStyle = "#000000";
ctx.strokeRect(foodX * tileSize, foodY * tileSize, tileSize, tileSize);

trail.push({x: snakeX, y: snakeY})
while(trail.length > tailLength){
trail.shift();
}

if(snakeX == foodX && snakeY == foodY){
 tailLength++;
 score++;
 foodX = Math.floor(Math.random() * gridSize / 2);
 foodY = Math.floor(Math.random() * gridSize / 2);
}

snakeX += posX;
snakeY += posY;

 if(snakeX < 0) {
     snakeX = gridSize - 1;
    }
 if (snakeX > gridSize - 1) {
     snakeX = 0;
    }

if (snakeY < 0) {
        snakeY = gridSize - 1;
    }
if (snakeY > gridSize - 1) {
        snakeY = 0;
    }
}

function changeDirection(e) {
    switch (e.keyCode) {
        case 37:
            posX = -1
            posY = 0
            break
        case 38:
            posX = 0
            posY = -1
            break
        case 39:
            posX = 1
            posY = 0
            break
        case 40:
            posX = 0
            posY = 1
            break
    }
}
