
let playerPoint = 0;

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
// let seconds = 0;
let maze = [
    [12, -1, 11, 18, 11, 11, 11, 11, 18, 11, 11, 11, 11, 13],
    [1, 0, 0, 1, 0, 0, 0, 0, 31, 0, 0, 0, 2, 1],
    [16, 11, 0, 1, -2, 1, 5, 0, 16, 11, 0, 11, 11, 17],
    [32, 0, 0, 16, 11, 14, 0, 0, 1, 0, 0, 0, 0, 1],
    [16, 11, 0, 0, 0, 0, 0, 12, 14, 0, 12, 13, 0, 1],
    [1, 0, 0, 16, 11, 11, 11, 17, 0, 0, 16, 14, 0, 1],
    [1, 0, 11, 19, 18, 11, 11, 17, 0, 12, 14, 0, 0, 1],
    [1, 0, 0, 0, 01, 0, 0, 31, 0, 1, 0, 0, 5, 1],
    [16, 11, 13, 2, 0, 0, 12, 14, 0, 1, 0, 11, 11, 17],
    [1, -2, 15, 13, 0, 12, 14, 0, 0, 1, 0, 0, 2, 1],
    [1, 0, 0, 1, 0, 1, 5, 0, 11, 17, 0, 11, 11, 17],
    [1, 5, 0, 0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 1],
    [15, 11, 11, 11, 33, 15, 11, 11, 11, 19, 11, 11, 4, 14]
]
let x = 0;
let y = 0;

let player = -1;
let playerPosition;
let tileSize = 50;

let mazeXLength = maze.length;
let mazeYLength = maze[y].length;

// Tiles

let wall_l = new Image();
wall_l.src = 'tiles/wall_l.gif';

let wall_h = new Image();
wall_h.src = 'tiles/wall_h.gif';

let wall_ol = new Image();
wall_ol.src = 'tiles/wall_ol.gif';

let wall_or = new Image();
wall_or.src = 'tiles/wall_or.gif';

let wall_nl = new Image();
wall_nl.src = 'tiles/wall_nl.gif';

let wall_nr = new Image();
wall_nr.src = 'tiles/wall_nr.gif';

let wall_ml = new Image();
wall_ml.src = 'tiles/wall_ml.gif';

let wall_mr = new Image();
wall_mr.src = 'tiles/wall_mr.gif';

let wall_mo = new Image();
wall_mo.src = 'tiles/wall_mo.gif';

let wall_mn = new Image();
wall_mn.src = 'tiles/wall_mn.gif';

let wall_x = new Image();
wall_x.src = 'tiles/wall_x.gif';

let parth = new Image();
parth.src = 'tiles/parth.gif';

let player_1 = new Image();
player_1.src = 'tiles/player_1.gif';

let lock_l = new Image();
lock_l.src = 'tiles/lock_l.gif';

let diamond = new Image();
diamond.src = 'tiles/diamond.gif';

let key = new Image();
key.src = 'tiles/key.gif';

let bomb = new Image();
bomb.src = 'tiles/bomb.gif';

let dead = new Image();
dead.src = 'tiles/dead.gif';

let shortcut = new Image();
shortcut.src = 'tiles/shortcut.gif';

let chest = new Image();
chest.src = 'tiles/chest.gif';

document.querySelector("#start").addEventListener('click', function () { startGame(); });
document.querySelector("#restart").addEventListener('click', function () { location.reload(); });
document.querySelector("#startAgain").addEventListener('click', function () { location.reload(); });

createMaze(tileSize, maze);

function createMaze(tileSize, maze) {
    for (y = 0; y < mazeXLength; y++) {
        for (x = 0; x < mazeYLength; x++) {
            if (maze[y][x] == 1) {
                ctx.drawImage(wall_l, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 11) {
                ctx.drawImage(wall_h, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 12) {
                ctx.drawImage(wall_ol, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 13) {
                ctx.drawImage(wall_or, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 12) {
                ctx.drawImage(wall_nl, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 14) {
                ctx.drawImage(wall_nr, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 15) {
                ctx.drawImage(wall_nl, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 16) {
                ctx.drawImage(wall_ml, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 17) {
                ctx.drawImage(wall_mr, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 18) {
                ctx.drawImage(wall_mo, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 19) {
                ctx.drawImage(wall_mn, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 20) {
                ctx.drawImage(wall_x, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == player) {
                playerPosition = { y, x };
                ctx.drawImage(player_1, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 2) {
                ctx.drawImage(diamond, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 31) {
                ctx.drawImage(lock_l, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 32) {
                ctx.drawImage(shortcut, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 33) {
                ctx.drawImage(shortcut, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 4) {
                ctx.drawImage(chest, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 5) {
                ctx.drawImage(bomb, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 51) {
                ctx.drawImage(dead, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == 0) {
                ctx.drawImage(parth, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] == -2) {
                ctx.drawImage(key, x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

window.addEventListener("keydown", function (event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37: //Key Left
            move(playerPosition.y, playerPosition.x - 1);
            break;
        case 38: //Key Up
            move(playerPosition.y - 1, playerPosition.x);
            break;
        case 39: //Key right
            move(playerPosition.y, playerPosition.x + 1);
            break;
        case 40: //Key Down
            move(playerPosition.y + 1, playerPosition.x);
            break;
        default:
            break;
    }
})

window.addEventListener("load", createMaze(tileSize, maze));
function startGame() {
    let seconds = 0;
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".losegame").style.display = "none";
    // document.querySelector(".wingame").style.display = "none";
    document.querySelector(".game").style.display = "initial";
    createMaze(tileSize, maze);
    time = setInterval(function () {
        seconds += 1;
        document.querySelector('#disply-time').innerText = seconds + " seconds.";
        if (seconds >= 30) {
            gameOver();
            playSound("loseSound")
        };
        document.querySelector('#all-time').innerText = seconds;
    }, 1000);
    
};

