let seconds = 0;
var el = document.getElementById('disply-time');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds + " seconds.";
}
document.querySelector('#disply-time');

setInterval(incrementSeconds, 1000);
let playerPoint = 0;
let failSound = 0;
let moveSound = 0;
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let maze = [
    [-1, 0, 1, 1, -2, 0, 0, 0, 0, 5],
    [1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 1, 5, 0, 0, 1, 1, 3],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [-2, 1, 0, 2, 1, 1, 0, 1, 0, 0],
    [0, 1, 5, 0, 0, 1, 0, 3, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 1, 1, 0],
    [2, 0, 0, 1, 0, 1, 1, 4, 0, 0]
]

let x = 0;
let y = 0;

let player = -1;
let playerPosition;
let tileSize = 50;

let mazeXLength = maze.length;
let mazeYLength = maze[y].length;
createMaze(tileSize);

function createMaze() {
    for (y = 0; y < mazeXLength; y++) {
        for (x = 0; x < mazeYLength; x++) {
            if (maze[y][x] == 1) {
                ctx.fillStyle = "red";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == player) {
                playerPosition = {y,x};
                console.log(playerPosition.y + " " + playerPosition.x);
                ctx.fillStyle = "blue";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 2) {
                ctx.fillStyle = "green";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 3) {
                // tilePosition = {y, x};
                ctx.fillStyle = "purple";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 4) {
                ctx.fillStyle = "yellow";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 5) {
                ctx.fillStyle = "black";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 0) {
                ctx.fillStyle = "beige";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }  else if (maze[y][x] == -2) {
                ctx.fillStyle = "orange";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

window.addEventListener("keydown", function (event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37: //Key Left
        move(playerPosition.y, playerPosition.x -1);
        // moveLeft();
            break;
        case 38: //Key Up
        move(playerPosition.y -1, playerPosition.x);
        // moveUp();
            break;
        case 39: //Key right
        move(playerPosition.y, playerPosition.x +1);
        // moveRight();
            break;
        // case 40: //Key Down
        // moveDown();
        //     break;
            case 40: //Key Down
            move(playerPosition.y +1, playerPosition.x);
                break;
        default:
        defaultPosition();
            break;
    }
})

