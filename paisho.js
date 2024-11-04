var board = [
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
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
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0]]

/*
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

Rock = 18
Wheel = 19
Knotweed = 20
Boat = 21

Temple = 22
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
                _button.id = "btn" + i + j
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
                document.getElementById("myDIV").appendChild(_button); 
            }
        }
    }  
}


function makeAction(xcoord, ycoord) {
    console.log(xcoord)
    console.log(ycoord)
}