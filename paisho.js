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

function redrawBoard(){
    console.log("drawing")

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

function removeAllHighlights(){
    for (let i = 0; i < 17; i++){
        for (let j = 0; j < 17; j++){
            highlightBoard[i][j] = 0
        }
    }
}

function addHighlight(xc, yc){
    highlightBoard[xc][yc] = 1
}

function getColourOfCoord(x, y){
    // return 0 for brown / gate, 1 for red, and 2 for white
}

function determineBoardValue(passedBoard){
    // heuristic = sum of personal harmonies - sum of opponent harmonies
    // if game end from either side and AI wins, score is 100 for AI
    // if game end from either side and HUMAN wins, score is -100 for AI
    // further heuristics may be added later, but i've literally never played this game before.


}

function identifyPossibleMoves(passedBoard, player){
    // return a list of board states which are possible from this position by the given user
}

function minimaxStep(depth, maxdepth, boardstate, player){
    // to implement ab pruning too.
    if (depth != maxdepth){
        validMoves = identifyPossibleMoves(boardstate)
        validMoves.forEach((element) => minimaxStep(depth + 1, maxdepth, move, (player + 1) % 2))
    }
}

var queuedMove = [0,0,0]
// 0 : type (1 = move, 2 = place)
// 1 : xcoord of source
// 2 : ycoord of source (-1 for place)

function makeAction(xcoord, ycoord) {
    console.log(xcoord + "," + ycoord)
    if (turn == 1){
        // lets start with off boards
        if (ycoord == -1){
            if (p1OffBoard[xcoord] >=18){
                removeAllHighlights()
                redrawBoard()
                queuedMove = [2, xcoord, ycoord]
                // in this case it's a special tile so we need to do special things
                for (let i = 0; i < 17; i++){
                    for (let j = 0; j < 17; j++){
                        if (!((i == 0 && j == 8) || (i == 8 && j == 0) || (i == 8 && j == 16) || ( i == 16 && j == 8))){
                            if (board[i][j] == 1){
                                addHighlight(i,j)
                            }
                        }
                    }
                }
                
            }
            else if (board[0][8] != 1 && board[8][0] != 1 && board[8][16] != 1 && board[16][8] != 1){
                console.log ("invalid move : all gates are currently full")
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

        // now we check on boards
        else{
            
            if (board[xcoord][ycoord] == 1){
                // this means we're actually making the move
                if (queuedMove[0] != 0){
                    // this means we actually had a move queued
                    if (highlightBoard[xcoord][ycoord] == 1){
                        // this means we've got a valid move to make.
                        if (queuedMove[0] == 1){
                            // this is a movement option
                            board[xcoord][ycoord] = board[queuedMove[1]][queuedMove[2]]
                            board[queuedMove[1]][queuedMove[2]] = 1
                            queuedMove = [0,0,0]
                            removeAllHighlights()
                        }
                        else{
                            board[xcoord][ycoord] = p1OffBoard[queuedMove[1]]
                            p1OffBoard[queuedMove[1]] = 0
                            queuedMove = [0,0,0]
                            removeAllHighlights()
                        }

                        // TRIGGER AI, TURN = 0

                    }   
                    else{
                        removeAllHighlights()
                        redrawBoard()
                    } 
                }
                else{
                    // do nothing. not a tile and no queued move.
                }
            }
            else{
                removeAllHighlights()
                redrawBoard()
                if (board[xcoord][ycoord] >=2 && board[xcoord][ycoord] <= 9){
                    queuedMove = [1, xcoord, ycoord]
                    // in this case you've selected a tile you own. Let's find the moves.
                    var distance = 4
                    if (board[xcoord][ycoord] == 8){
                        distance = 2
                    }
                    if (board[xcoord][ycoord] == 9){
                        distance = 6
                    }

                    for (let x = (distance * -1); x <= distance; x++){
                        for (let y = (distance - Math.abs(x)) * -1; y <= (distance-Math.abs(x)); y++){
                            nx = xcoord + x
                            ny = ycoord + y
                            if (nx >= 0 && nx <= 16 && ny >= 0 && ny <= 16){

                                // filter so that coloured flowers remain in coloured gardens

                                if (board[nx][ny] == 1){
                                    addHighlight(nx,ny)
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
