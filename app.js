var squares = document.querySelectorAll(".square");
var reset = document.querySelector("button");
var cross = true;
var win = false;

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click", function(){
        if(win===false){
            if(cross){
                this.style.backgroundImage = "url('x.svg')";
                this.style.backgroundRepeat = "no-repeat";
                this.style.backgroundPosition = "center" ;
                this.style.backgroundSize = "cover";
                checkCrossWin();
                if(win){
                    document.querySelector("#result").textContent ="Player 1 wins!";
                }
            } else {
                this.style.backgroundImage = "url('circle.svg')";
                this.style.backgroundRepeat = "no-repeat";
                this.style.backgroundPosition = "center" ;
                this.style.backgroundSize = "cover";
                checkCircleWin();
                if(win){
                    document.querySelector("#result").textContent = "Player 2 wins!";
                }
            }
            checkDraw();
            cross = !cross;
        }
    });
}

function checkDraw(){
    var draw = true;
    if(win===false){
        for(var j=0; j<squares.length; j++){
            if(squares[j].style.backgroundImage!=="url(" + "\"" + "x.svg" + "\"" + ")" && squares[j].style.backgroundImage!=="url(" + "\"" + "circle.svg" + "\"" + ")"){
                draw = false;
            }
        }
        if(draw){
            document.querySelector("#result").textContent = "Draw";
            win = true;
        }
    }
}
    
function checkCrossWin(){
    if(squares[0].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[1].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[2].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[3].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[5].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[6].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[7].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[0].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[3].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[6].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[1].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[7].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[2].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[5].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[0].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[2].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")" && squares[6].style.backgroundImage == "url(" + "\"" + "x.svg" + "\"" + ")"){
        win = true;
    }
}

function checkCircleWin(){
    if(squares[0].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[1].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[2].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[3].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[5].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[6].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[7].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[0].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[3].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[6].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[1].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[7].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[2].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[5].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[0].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[8].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
    else if(squares[2].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[4].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")" && squares[6].style.backgroundImage == "url(" + "\"" + "circle.svg" + "\"" + ")"){
        win = true;
    }
}

reset.addEventListener("click", function(){
    cross = true;
    win = false;
    for(var k=0; k<squares.length; k++){
        squares[k].style.background = "white";
    }
    document.querySelector("#result").textContent = "";
})