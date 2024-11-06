var board = [
    [0,0,0,0,0,1,1,1,10,1,1,1,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,1,1,2,1,1,1,0,0,0,0,0]]

var highlightBoard = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

var specialsBoard = [
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,2,0,3,3,0,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,0,3,3,3,0,0,0,0,0],
    [0,0,0,0,2,2,2,2,0,3,3,3,3,0,0,0,0],
    [0,0,0,2,2,2,2,2,0,3,3,3,3,3,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,3,3,3,3,3,0,2,2,2,2,2,0,0,0],
    [0,0,0,0,3,3,3,3,0,2,2,2,2,0,0,0,0],
    [0,0,0,0,0,3,3,3,0,2,2,2,0,0,0,0,0],
    [0,0,0,0,0,0,3,3,0,2,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]]

var turn = 1

var p1OffBoard = [0,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,9,18,19,20,21]
var p2OffBoard = [0,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,17,22,23,24,25]

var images = ["null","empty","p1RedRose","p1RedChrys","p1RedRho","p1WhiteJas","p1WhiteLily","p1WhiteJade","p1Lotus","p1Orchid","p2RedRose","p2RedChrys","p2RedRho","p2WhiteJas","p2WhiteLily","p2WhiteJade","p2Lotus","p2Orchid","p1Rock","p1Wheel","p1Knotweed","p1Boat","p2Rock","p2Wheel","p2Knotweed","p2Boat"]

/*
BoardMask:
null = 0
emptytile = 1

P1RedRose = 2
P1RedChrys = 3
P1RedRho = 4
P1WhiteJas = 5
P1WhiteLily = 6
P1WhiteJade = 7
P1Lotus = 8
P1Orchid = 9

P2RedRose = 10
P2RedChrys = 11
P2RedRho = 12
P2WhiteJas = 13                    
P2WhiteLily = 14
P2WhiteJade = 15
P2Lotus = 16
P2Orchid = 17

P1Rock = 18
P1Wheel = 19
P1Knotweed = 20
P1Boat = 21

P2Rock = 22
P2Wheel = 23
P2Knotweed = 24
P2Boat = 25
*/

// run on load to initialise all buttons and icons
function createGrid(){
    const svgContent = `
        <svg  width="3650" height="3650" position="absolute" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="boardShape">
                    <circle id="circle2" cx="1850" cy="1850" r="1800" style="fill:black;" /> 
                </clipPath>
                <clipPath id="centerboard">
                    
                    <rect x="1850" y="475" height="1940" width="1940" style="fill:red" transform="rotate(45 1850 475)"" />
                </clipPath>
            </defs>
            
            <g  clip-path="url(#boardShape)" >
                <circle id="circle2" cx="1850" cy="1850" r="1800" style="fill:#9a7b5f;"/>
                <rect x="1850" y="-375" height="600" width="600" style="fill:red" transform="rotate(45 1850 -375)"" />
                <rect x="1850" y="3225" height="600" width="600" style="fill:red" transform="rotate(45 1850 3225)"" />
                <rect x="50" y="1425" height="600" width="600" style="fill:red" transform="rotate(45 50 1425)"" />
                <rect x="3650" y="1425" height="600" width="600" style="fill:red" transform="rotate(45 3650 1425)"" />


                <g clip-path="url(#centerboard)">
                    <rect x="50" y="50" height="1800" width="1800" style="fill:white"/>
                    <rect x="1850" y="1850" height="1800" width="1800" style="fill:white"/>
                    <rect x="1850" y="50" height="1800" width="1800" style="fill:red"/>
                    <rect x="50" y="1850" height="1800" width="1800" style="fill:red"/>
                </g>

                <rect x="50" y="50" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="250" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="450" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="650" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="850" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="1050" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="1250" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="1450" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="1650" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="1850" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="2050" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="2250" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="2450" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="2650" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="2850" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="3050" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="3250" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="3450" height="3" width="3600" style="fill:black"/>
                <rect x="50" y="3650" height="3" width="3600" style="fill:black"/>

                <rect y="50" x="50" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="250" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="450" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="650" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="850" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="1050" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="1250" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="1450" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="1650" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="1850" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="2050" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="2250" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="2450" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="2650" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="2850" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="3050" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="3250" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="3450" height="3600" width="3" style="fill:black"/>
                <rect y="50" x="3650" height="3600" width="3" style="fill:black"/>

            </g>
        </svg >
        `;

        document.getElementById("myDIV").innerHTML += svgContent;
    


    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            if (board[i][j] != 0){
                var  _button = document.createElement("button");
                _button.onclick = () =>
                {
                    makeAction(i,j);
                };
                _button.id = "btn" + i + "," + j
                _button.style.height = '200px';
                _button.style.width = '200px';
                _button.style.position = 'absolute';
                var tp = (200 * i) + 150
                _button.style.top = tp + 'px'
                var lf = (200 * j) + 150
                _button.style.left = lf + 'px'
                _button.style.borderRadius = '50%'
                _button.style.backgroundColor = 'transparent'
                _button.style.borderColor = 'transparent'
                document.getElementById("myDIV").appendChild(_button)
            }
        }
    }   
    
    // create off board buttons
    for (let i = 0; i<24; i++){
        var _button = document.createElement("button");
        _button.id = "p2ob" + i
        _button.style.height = '200px';
        _button.style.width = '200px';
        _button.style.position = 'absolute';
        var tp = (225 * (i % 3)) + 150
        _button.style.top = tp + 'px'
        var lf = (200 * Math.floor(i / 3)) + 3800
        _button.style.left = lf + 'px'
        _button.style.borderRadius = '50%'
        _button.style.backgroundColor = 'transparent'
        _button.style.borderColor = 'transparent'
        document.getElementById("myDIV").appendChild(_button)
    }

    for (let i = 0; i<24; i++){
        var _button = document.createElement("button");
        _button.onclick = () =>
            {
                makeAction(i, -1);
            };
        _button.id = "p1ob" + i
        _button.style.height = '200px';
        _button.style.width = '200px';
        _button.style.position = 'absolute';
        var tp = (225 * (i % 3)) + 1250
        _button.style.top = tp + 'px'
        var lf = (200 * Math.floor(i / 3)) + 3800
        _button.style.left = lf + 'px'
        _button.style.borderRadius = '50%'
        _button.style.backgroundColor = 'transparent'
        _button.style.borderColor = 'transparent'
        document.getElementById("myDIV").appendChild(_button)
    }

    redrawBoard(); 
}

// call to re-draw grid with current global "board" state
function redrawBoard(){
    // draw the main board
    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            if (board[i][j] != 0){
                if (board[i][j] == 1){
                    document.getElementById("btn" + i + "," + j).style.backgroundColor = "transparent"
                    document.getElementById("btn" + i + "," + j).style.background = "transparent"
                }
                else{
                    document.getElementById("btn" + i + "," + j).style.background = "url('resources/" + images[board[i][j]] + ".png')"
                    document.getElementById("btn" + i + "," + j).style.backgroundSize = 'cover'
                }
            }    
            if (highlightBoard[i][j] == 1){
                document.getElementById("btn" + i + "," + j).style.borderColor = 'green'
            }
            else{
                if (board[i][j] != 0){
                    document.getElementById("btn" + i + "," + j).style.borderColor = 'transparent'
                }
            }
            
        }
    }

    // draw the off board
    for (let i = 0; i < 24; i++){
        if (p1OffBoard[i] != 0){
            document.getElementById("p1ob"+i).style.background = "url('resources/" + images[p1OffBoard[i]] + ".png')"
            document.getElementById("p1ob"+i).style.backgroundSize = 'cover'
        }
        else{
            document.getElementById("p1ob" + i).style.background = "transparent"
            document.getElementById("p1ob" + i).style.backgroundColor = "transparent"
        }
        if (p2OffBoard[i] != 0){
            document.getElementById("p2ob"+i).style.background = "url('resources/" + images[p2OffBoard[i]] + ".png')"
            document.getElementById("p2ob"+i).style.backgroundSize = 'cover'
        }
        else{
            document.getElementById("p2ob" + i).style.backgroundColor = "transparent"
            document.getElementById("p2ob" + i).style.background = "transparent"
        }
    }
}

// reset highlight grid to 0
function removeAllHighlights(){
    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            highlightBoard[i][j] = 0
        }
    }
}

// set highlight grid at given position to 1
function addHighlight(xc, yc){
    highlightBoard[xc][yc] = 1
}

// returns 3 for red, 2 for white, 1 for accent, and 0 for special tiles
function getColourOfTile(x){
    if ([2,3,4,10,11,12].indexOf(x) >= 0){
        //console.log("red tile")
        return 3
    }
    if ([5,6,7,13,14,15].indexOf(x) >= 0){
        //console.log("white tile")
        return 2
    }
    if (x >= 18 && x <= 25){
        return 1 // i.e. rock boat 
    }
    else { return 0 } // i.e. lotus orchid
}

// bool. true if clash between two tile IDs.
function isClash(t1, t2){
    if (t2 > 9){t2 -= 8}
    if (t1 > 9){t1 -= 8}
    if ((t1 == 5 && t2 == 2)   
        || (t1 == 2 && t2 == 5)  
        || (t1 == 3 && t2 == 6)
        || (t1 == 6 && t2 == 3)
        || (t1 == 4 && t2 == 7)
        || (t1 == 7 && t2 == 4)){
        //console.log("clash between " + images[t1] + " and " + images[t2])
        return true
    }
    else {return false}
}

// bool. true if harmony between two tile IDs
function isHarmony(t1, t2){
    if (t2 > 9){t2 -= 8}
    if (t1 > 9){t1 -= 8}
    if (t1 == 8 || t2 == 8) { return true} // white lotus
    if ((t1 == 2 && t2 == 3)   
        || (t1 == 3 && t2 == 2)  
        || (t1 == 3 && t2 == 4)
        || (t1 == 4 && t2 == 3)
        || (t1 == 4 && t2 == 5)
        || (t1 == 5 && t2 == 4)
        || (t1 == 5 && t2 == 6)  
        || (t1 == 6 && t2 == 5)
        || (t1 == 6 && t2 == 7)
        || (t1 == 7 && t2 == 6)
        || (t1 == 7 && t2 == 2)
        || (t1 == 2 && t2 == 7)){
        return true
    }
    else {return false}
}

// bool. true if lotus is active
function isEitherLotusBlooming(board){
    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            if (board[i][j] == 8 || board[i][j] == 16){
                if (specialsBoard[i][j] != 1){ return true }
            }
        }
    }
}

// bool. true if capture valud
function isValidCapture(t1,t2,board){
    if (tileBelongsToPlayer(t1,1) != tileBelongsToPlayer(t2,1)){ // check if they both belong to p1, if this matches, they both belong to same player(i.e. 2 trues or 2 falses)
        // then this is an attempted capture
        if (isEitherLotusBlooming(board)){
            return true
        }
        else { return isClash(t1,t2) }

    }
    else {
        // this pair is not a capture
        return false
    }
}

// takes tile ID, returns integer
function getMoveDistance(tileID){
    if ([8,16].indexOf(tileID) >= 0){
        return 2
    }
    if ([2,5,10,13].indexOf(tileID) >= 0){
        return 3
    }
    if ([3,6,11,14].indexOf(tileID) >= 0){
        return 4
    }
    if ([4,7,12,15].indexOf(tileID) >= 0){
        return 5
    }
    if ([9,17].indexOf(tileID) >= 0){
        return 6
    }
    else{
        // not sure why this would happen, but worth putting in a failsafe
        return 0
    }
}

// bool. true if clash detected in row or column
function checkForClashes(movingTileID, board, nx, ny){
    for (let x = 0; x<17; x++){
        if (x != nx){ //prevents a clash being reported against a captured tile
            if (board[x][ny] != 0 && board[x][ny] != 1){
                if (isClash(board[x][ny], movingTileID)){return true}
            }
        }
        if (x != ny){ //prevents a clash being reported against a captured tile
            if (board[nx][x] != 0 && board[nx][x] != 1){
                if (isClash(board[nx][x], movingTileID)){return true}
            }
        }
    }
    return false //no clashes
}

// takes board state input and returns integer
function determineBoardValue(passedBoard){
    // heuristic = sum of personal harmonies - sum of opponent harmonies
    // if game end from either side and AI wins, score is 100 for AI
    // if game end from either side and HUMAN wins, score is -100 for AI
    // further heuristics may be added later, but i've literally never played this game before.

    // method for calculating heuristic:
    // 1. create list of all tiles belonging to player
    // 2. for x in range(0,len-1)
    // 3. for y in range(1,len)
    // 4. check if harmony
    // 5. if harmony >= 4 (possible win)
    // 6. check for 4 harmonies in a square
        // 1. we'll get to this

    var p1tiles = []
    var p2tiles = []

    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            if (specialsBoard[i][j] == 1){continue}
            if (passedBoard[i][j] >= 2 && passedBoard[i][j] <= 9){
                p1tiles.push([i,j,passedBoard[i][j]])
            }
            if (passedBoard[i][j] >= 10 && passedBoard[i][j] <= 17){
                p2tiles.push([i,j,passedBoard[i][j]])
            }
        }
    }

    var boardValue = 0

    function goThroughTiles(playerTiles){
        var harmonies = 0
        for (let i = 0; i < playerTiles.length - 1; i++){
            for (let j = i + 1; j < playerTiles.length; j++){
                if (playerTiles[i][0] == playerTiles[j][0] || playerTiles[i][1] == playerTiles[j][1]){
                    if (isHarmony(playerTiles[i][2], playerTiles[j][2])){harmonies += 1}
                }
            }
        }
        return harmonies
    }
   
    var harmonies = goThroughTiles(p2tiles)
    // if harmonies >= 4 game may be over
    boardValue += harmonies

    harmonies = goThroughTiles(p1tiles)
    // if harmonies >= 4 game may be over
    boardValue -= harmonies

    return boardValue
}

// bool. true if tileID provided belongs to playerID provided
function tileBelongsToPlayer(tileID, playerID){
    if (tileID < 2) {return false} // this board spot is empty. Tile ID isn't real
    if (tileID <= 9){ return (playerID == 1) } // belongs to p1, true if p1 was requested
    if (tileID <= 17){ return (playerID == 2) } // belongs to p2, true if p2 was requested
                                                // because we already checked 1-9, 10-17 will be p2
    else{
        return false // remained of tiles are accents which can't be moved and make no player impact
    }
}

// return a list of board states which are possible from a given position by a given user
function identifyPossibleMoves(passedBoard, passedOffBoard, player){
    var allMovements = []
    // for each spot on the board 
    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            // if the tile belongs to the player:
            if (tileBelongsToPlayer(passedBoard[i][j],player)){
                // in this case you've selected a tile you own. Let's find the moves.
                var distance = getMoveDistance(passedBoard[i][j])
                for (let x = (distance * -1); x <= distance; x++){
                    for (let y = (distance - Math.abs(x)) * -1; y <= (distance-Math.abs(x)); y++){
                        nx = i + x
                        ny = j + y
                        if (nx >= 0 && nx <= 16 && ny >= 0 && ny <= 16){
                            // FIRST we need to confirm that this move wouldn't cause a clash.
                            if (!checkForClashes(passedBoard[i][j], passedBoard, nx, ny)){
                                // THEN filter so that coloured flowers remain in coloured gardens
                                if (specialsBoard[nx][ny] == 0 || specialsBoard[nx][ny] == getColourOfTile(passedBoard[i][j]) || (specialsBoard != 1 && (passedBoard[i][j] == 8 || passedBoard[i][j] == 16))){
                                    // General Movement
                                    if (passedBoard[nx][ny] == 1 || isValidCapture(passedBoard[nx][ny],passedBoard[i][j],passedBoard)){
                                        var tempBoard = passedBoard.map(function(arr) {
                                            return arr.slice();
                                        });
                                        tempBoard[nx][ny] = tempBoard[i][j]
                                        tempBoard[i][j] = 1
                                        allMovements.push([tempBoard, passedOffBoard])
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // for each tile on the off board
    for (let i = 0; i < passedOffBoard.length; i++){
        // if standard tile, append placement on each empty gate
        if (passedOffBoard[i] >= 2 && passedOffBoard[i] <= 17 ){
            if (passedBoard[8][0] == 1){
                // gate empty. Valid placement.
                var tempBoard = passedBoard.map(function(arr) {
                    return arr.slice();
                });
                var tempOffBoard = passedOffBoard.map(function(arr) {
                    return arr
                });
                tempBoard[8][0] = tempOffBoard[i]
                tempOffBoard[i] = 0
                allMovements.push([tempBoard, tempOffBoard])
            }
            if (passedBoard[0][8] == 1){
                // gate empty. Valid placement.
                var tempBoard = passedBoard.map(function(arr) {
                    return arr.slice();
                });
                var tempOffBoard = passedOffBoard.map(function(arr) {
                    return arr
                });
                tempBoard[0][8] = tempOffBoard[i]
                tempOffBoard[i] = 0
                allMovements.push([tempBoard, tempOffBoard])
            }
            if (passedBoard[8][16] == 1){
                // gate empty. Valid placement.
                var tempBoard = passedBoard.map(function(arr) {
                    return arr.slice();
                });
                var tempOffBoard = passedOffBoard.map(function(arr) {
                    return arr
                });
                tempBoard[8][16] = tempOffBoard[i]
                tempOffBoard[i] = 0
                allMovements.push([tempBoard, tempOffBoard])
            }
            if (passedBoard[16][8] == 1){
                // gate empty. Valid placement.
                var tempBoard = passedBoard.map(function(arr) {
                    return arr.slice();
                });
                var tempOffBoard = passedOffBoard.map(function(arr) {
                    return arr
                });
                tempBoard[16][8] = tempOffBoard[i]
                tempOffBoard[i] = 0
                allMovements.push([tempBoard, tempOffBoard])
            }
        }

        // we'll do accents later
    }

    return(allMovements)
        
}

function minimaxStep(depth, maxdepth, boardstate, p1offboardState, p2offboardState, player, alpha, beta){    
    // the first minimax step
    if (depth == 1){
        console.log("AI Thinking: Layer 1")
        if (player == 1){
            var boardstates = identifyPossibleMoves(boardstate, p1offboardState, player)
        }
        else if (player == 2){
            var boardstates = identifyPossibleMoves(boardstate, p2offboardState, player)
        }

        var bestScore = -100
        var bestBoard = []

        for (const element of boardstates){
            var tempBoard = element.map(function(arr) {
                return arr.slice();
            });
            if (player == 1){
                var nextLayer = minimaxStep(depth + 1, maxdepth, tempBoard[0], tempBoard[1], p2OffBoard, 2, alpha, beta)
                beat = nextLayer[3]
            }
            else {
                var nextLayer = minimaxStep(depth + 1, maxdepth, tempBoard[0], p1OffBoard, tempBoard[1], 1, alpha, beta)
                alpha = nextLayer[3]
            }

            var boardVal = nextLayer[0]

            if (bestScore == -100){
                bestScore = boardVal
                bestBoard = tempBoard
            }
            else if (player == 1){
                if (boardVal <= bestScore){ // p1 aims for the lowest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore < beta){
                    beta = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
            else if (player == 2){
                if (boardVal >= bestScore){ // p2 aims for the highest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore > alpha){
                    alpha = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
        }
        if (player == 1){
            return (bestBoard)
        }
        else{
            return (bestBoard)

        }

    }

    // the last minimax step
    else if (depth >= maxdepth){
        console.log("AI Thinking: Layer " + depth)
        if (player == 1){
            var boardstates = identifyPossibleMoves(boardstate, p1offboardState, player)
        }
        else if (player == 2){
            var boardstates = identifyPossibleMoves(boardstate, p2offboardState, player)
        }

        var bestScore = -100
        var bestBoard = []

        for (const element of boardstates){
            var boardVal = determineBoardValue(element[0])
            if (bestScore == -100){
                bestScore = boardVal
                bestBoard = element
            }
            else if (player == 1){
                if (boardVal <= bestScore){ // p1 aims for the lowest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore < beta){
                    beta = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
            else if (player == 2){
                if (boardVal >= bestScore){ // p2 aims for the highest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore > alpha){
                    alpha = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
        }
        if (player == 1){
            return ([bestScore, bestBoard, beta])
        }
        else{
            return ([bestScore, bestBoard, alpha])

        }

    
    }

    // the middle minimax step(s)
    else{
        console.log("AI Thinking: Layer " + depth)
        if (player == 1){
            var boardstates = identifyPossibleMoves(boardstate, p1offboardState, player)
        }
        else if (player == 2){
            var boardstates = identifyPossibleMoves(boardstate, p2offboardState, player)
        }

        var bestScore = -100
        var bestBoard = []

        for (const element of boardstates){
            var tempBoard = element.map(function(arr) {
                return arr.slice();
            });
            if (player == 1){
                var nextLayer = minimaxStep(depth + 1, maxdepth, tempBoard[0], tempBoard[1], p2OffBoard, 2, alpha, beta)
                beat = nextLayer[3]
            }
            else {
                var nextLayer = minimaxStep(depth + 1, maxdepth, tempBoard[0], p1OffBoard, tempBoard[1], 1, alpha, beta)
                alpha = nextLayer[3]
            }

            var boardVal = nextLayer[0]

            if (bestScore == -100){
                bestScore = boardVal
                bestBoard = tempBoard
            }
            else if (player == 1){
                if (boardVal <= bestScore){ // p1 aims for the lowest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore < beta){
                    beta = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
            else if (player == 2){
                if (boardVal >= bestScore){ // p2 aims for the highest score
                    bestScore = boardVal
                    bestBoard = tempBoard
                }
                if (bestScore > alpha){
                    alpha = bestScore
                }
                if (alpha >= beta){
                    break
                }
            }
        }
        if (player == 1){
            return ([bestScore, bestBoard, beta])
        }
        else{
            return ([bestScore, bestBoard, alpha])
        }
    }
}

var queuedMove = [0,0,0]
// 0 : type (1 = move, 2 = place)
// 1 : xcoord of source
// 2 : ycoord of source (-1 for place)

function makeAction(xcoord, ycoord) {
    //console.log(xcoord + "," + ycoord)
    if (turn == 1){
        // lets start with off-boards
        if (ycoord == -1){
            if (p1OffBoard[xcoord] != 0){
                if (p1OffBoard[xcoord] >=18){
                    removeAllHighlights()
                    redrawBoard()
                    queuedMove = [2, xcoord, ycoord]
                    // in this case it's a special tile so we need to do special things
                    for (let i = 0; i < 17; i++){
                        for (let j = 0; j < 17; j++){
                            if (specialsBoard[i][j] != "1" && board[i][j] == 1){
                                addHighlight(i,j)
                            }
                        }
                    }
                    
                }
                else if (board[0][8] != 1 && board[8][0] != 1 && board[8][16] != 1 && board[16][8] != 1){
                    //console.log ("invalid move : all gates are currently full")
                    queuedMove = [0,0,0]
                }
                else{
                    removeAllHighlights()
                    redrawBoard()
                    queuedMove = [2, xcoord, ycoord]
                    if (board[0][8] == 1){
                        addHighlight(0,8)
                    }
                    if (board[8][0] == 1){
                        addHighlight(8,0)
                    }
                    if (board[8][16] == 1){
                        addHighlight(8,16)
                    }
                    if (board[16][8] == 1){
                        addHighlight(16,8)
                    }
                }
            }
            else{
                removeAllHighlights()
                redrawBoard()
                queuedMove = [0,0,0]
            }
        }

        // now we check on boards
        else{
            
            if (highlightBoard[xcoord][ycoord] == 1){
                // clicked move is higlighted, so move time
                // this means we've got a valid move to make.
                if (queuedMove[0] == 1){
                    // this is a movement option
                    board[xcoord][ycoord] = board[queuedMove[1]][queuedMove[2]]
                    board[queuedMove[1]][queuedMove[2]] = 1
                    queuedMove = [0,0,0]
                    removeAllHighlights()
                }
                else{
                    // this means it's a placement option
                    board[xcoord][ycoord] = p1OffBoard[queuedMove[1]]
                    p1OffBoard[queuedMove[1]] = 0
                    queuedMove = [0,0,0]
                    removeAllHighlights()
                }
                redrawBoard()
                
                player = 2
                var AIReturn = minimaxStep(1, 4, board, p1OffBoard, p2OffBoard, player, -100, 100)
                console.log(AIReturn)

                board = AIReturn[0]
                p2OffBoard = AIReturn[1]
                player = 1
                redrawBoard()
                
                

            }
            else{
                removeAllHighlights()
                redrawBoard()
                if (tileBelongsToPlayer(board[xcoord][ycoord],1)){
                    queuedMove = [1, xcoord, ycoord]
                    // in this case you've selected a tile you own. Let's find the moves.
                    var distance = getMoveDistance(board[xcoord][ycoord])
                    for (let x = (distance * -1); x <= distance; x++){
                        for (let y = (distance - Math.abs(x)) * -1; y <= (distance-Math.abs(x)); y++){
                            nx = xcoord + x
                            ny = ycoord + y
                            if (nx >= 0 && nx <= 16 && ny >= 0 && ny <= 16){
                                // FIRST we need to confirm that this move wouldn't cause a clash.
                                if (!checkForClashes(board[xcoord][ycoord], board, nx, ny)){
                                    // THEN filter so that coloured flowers remain in coloured gardens
                                    if (specialsBoard[nx][ny] == 0 || specialsBoard[nx][ny] == getColourOfTile(board[xcoord][ycoord]) || (specialsBoard != 1 && board[xcoord][ycoord] == 8)){
                                        // General Movement
                                        if (board[nx][ny] == 1){
                                            addHighlight(nx,ny)
                                        }
                                        // captures
                                        // if moving piece is orchid and target square has an enemy piece and you have the lotus out
                                        else if (isValidCapture(board[nx][ny],board[xcoord][ycoord],board)){
                                            addHighlight(nx,ny)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    redrawBoard()
}