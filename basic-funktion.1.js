function move(yDirection, xDirection) {
    mazeDirection(0, -1, 0, 1, yDirection, xDirection);
    mazeDirection(2, -1, 0, 5, yDirection, xDirection);
    helpPoint(10, yDirection, xDirection)
    minusPoint(2, yDirection, xDirection);
    loseAllPoint(yDirection, xDirection);
    createMaze();
}

function mazeDirection(target, to, from, numberOfPoint, yDirection, xDirection) {
    if (maze[yDirection][xDirection] == target) {
        maze[yDirection][xDirection] = to;
        maze[playerPosition.y][playerPosition.x] = from;
        plusPoint(numberOfPoint);
        return true
    };
    console.log(target);
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
    console.log("her kommer point" + playerPoint);
}

function removePoint(numberOfPoint) {
    playerPoint = playerPoint - numberOfPoint;
    document.querySelector("#disply-points").innerHTML = playerPoint;
}

function helpPoint(numberOfPoint, yDirection, xDirection) {
    let locked;
    if (mazeDirection(-2, -1, 0, numberOfPoint, yDirection, xDirection) == true) {
        for (y = 0; y < mazeXLength; y++) {
            for (x = 0; x < mazeYLength; x++) {
                if (maze[y][x] == 3) {
                    tilePosition = { y, x };
                    maze[tilePosition.y][tilePosition.x] = 2;
                }
            }

        }
    }
}

function exstraPoint(numberOfPoint, yDirection, xDirection) {
    mazeDirection(2, -1, 0, numberOfPoint, yDirection, xDirection);
}

function loseAllPoint(yDirection, xDirection) {
    if (mazeDirection(5, 5, -1, 0, yDirection, xDirection) == true) {
        resetPoint();
    };
}
function minusPoint(numberOfPoint, yDirection, xDirection) {
    if (mazeDirection(1, 1, -1, 0, yDirection, xDirection) == true) {
        removePoint(numberOfPoint);
        playSound(failSound);
    };
}

//  Sounds
function playSound(sound) {
    if(sound == failSound){
        // if (failSound == 0) {
            sound = document.querySelector("#sound");
            sound.setAttribute("class", "failSound");
            sound.setAttribute("src", "sounds/SoftFail.mp3");
            sound.play();
        document.body.appendChild(sound);  
        }
    }
