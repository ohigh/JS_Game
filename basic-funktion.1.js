function move(yDirection, xDirection) {
    mazeDirection(0, -1, 0, 1, yDirection, xDirection, "moveSound");
    mazeDirection(2, -1, 0, 5, yDirection, xDirection, "extraSound");
    helpPoint(10, yDirection, xDirection);
    minusPoint(2, yDirection, xDirection);
    loseAllPoint(yDirection, xDirection);
    shortcutPoint(yDirection, xDirection);
    winPoint(yDirection, xDirection);
    createMaze(tileSize, maze);
}

function mazeDirection(target, to, from, numberOfPoint, yDirection, xDirection, play) {
    if (maze[yDirection][xDirection] == target) {
        maze[yDirection][xDirection] = to;
        maze[playerPosition.y][playerPosition.x] = from;
        plusPoint(numberOfPoint);
        playSound(play);
        return true
    };
}

// Point system
function resetPoint() {
    playerPoint = 0;
    document.querySelector("#disply-points").innerHTML = playerPoint;
}
resetPoint();

function plusPoint(numberOfPoint) {
    playerPoint = playerPoint + numberOfPoint;
    document.querySelector("#disply-points").innerHTML = playerPoint;
}

function removePoint(numberOfPoint) {
    playerPoint = playerPoint - numberOfPoint;
    document.querySelector("#disply-points").innerHTML = playerPoint;
}

function helpPoint(numberOfPoint, yDirection, xDirection) {
    let locked;
    if (mazeDirection(-2, -1, 0, numberOfPoint, yDirection, xDirection, "lockSound") == true) {
        for (y = 0; y < mazeXLength; y++) {
            for (x = 0; x < mazeYLength; x++) {
                if (maze[y][x] == 31) {
                    tilePosition = { y, x };
                    maze[tilePosition.y][tilePosition.x] = 2;
                }
            }
        }
    }
}

function shortcutPoint(yDirection, xDirection) {
    if (mazeDirection(32, 32, 0, 5, yDirection, xDirection, "shotCutSound") == true) {
        window.setTimeout(function () {
            move(playerPosition.y + 8, playerPosition.x + 3);
        }, 1700);// 
    } else if (mazeDirection(33, 32, 0, 5, yDirection, xDirection, "shotCutSound") == true) {
        window.setTimeout(function () {
            move(playerPosition.y - 8, playerPosition.x - 3);
        }, 1000);
    }
}

function loseAllPoint(yDirection, xDirection) {
    if (mazeDirection(5, 51, 0, 0, yDirection, xDirection, "loseSound") == true) {
        resetPoint();
        clearInterval(time);
        window.setTimeout(function () {
            gameOver();
        }, 1000);
    };
}

function minusPoint(numberOfPoint, yDirection, xDirection) {
    if (mazeDirection(1, 1, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(11, 11, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(12, 12, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(13, 13, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(14, 14, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(15, 15, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(16, 16, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(17, 17, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(18, 18, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(19, 19, -1, 0, yDirection, xDirection, "failSound") ||
        mazeDirection(20, 20, -1, 0, yDirection, xDirection, "failSound") == true) {
        removePoint(numberOfPoint);
    };
}
function winPoint(yDirection, xDirection) {
    if (mazeDirection(4, -1, 0, 50, yDirection, xDirection, "extraSound") == true) {
        gameWon();
    };
}

//  Sounds
function playSound(sound) {
    console.log("Lyd: " + sound);
    switch (sound) {
        case "failSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/SoftFail.mp3");
            break;
        case "extraSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/GameReward.mp3");
            break;
        case "lockSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/CollectItem.mp3");
            break;
        case "loseSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/CrowdReaction.wav");
            break;
        case "winSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/Fanfare.mp3");
            break;
        case "moveSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/Error.mp3");
            break;
        case "shotCutSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/GameAward.mp3");
            break;
        case "winSound":
            sound = document.querySelector("#sound");
            sound.setAttribute("src", "sounds/Fanfare.mp3");
            break;
        default:
            break;
    }
    sound.play();
    document.body.appendChild(sound);
}

function gameOver() {
    document.querySelector(".losegame").style.display = "initial";
    clearInterval(time);
    window.move=function(){return false;};
};

function gameWon() {
    document.querySelector(".wingame").style.display = "initial";
    clearInterval(time);
    playSound("winSound")
    document.querySelector("#all-points").innerHTML = playerPoint;
    document.querySelector('#all-time').innerText = seconds;
    window.move=function(){return false;};
};