let result = 0;

let valueholder = "0";
let firstNumber = "0";
let secondNumber = "0";

document.getElementById("textfield").innerHTML = firstNumber;

function one(){
    valueholder += "1";
    document.getElementById("textfield").innerHTML = valueholder;
}
function two(){
    valueholder += "2";
    document.getElementById("textfield").innerHTML = valueholder;
}
function three(){
    valueholder += "3";
    document.getElementById("textfield").innerHTML = valueholder;
}
function four(){
    valueholder += "4";
    document.getElementById("textfield").innerHTML = valueholder;
}
function five(){
    valueholder += "5";
    document.getElementById("textfield").innerHTML = valueholder;
}
function six(){
    valueholder += "6";
    document.getElementById("textfield").innerHTML = valueholder;
}
function seven(){
    valueholder += "7";
    document.getElementById("textfield").innerHTML = valueholder;
}
function eight(){
    valueholder += "8";
    document.getElementById("textfield").innerHTML = valueholder;
}
function nine(){
    valueholder += "9";
    document.getElementById("textfield").innerHTML = valueholder;
}
function zero(){
    valueholder += "0";
    document.getElementById("textfield").innerHTML = valueholder;
}


function eraseall(){
    valueholder = "0";
    document.getElementById("textfield").innerHTML = valueholder;
}
function erase(){
    valueholder = valueholder.slice(0, -1);
    document.getElementById("textfield").innerHTML = valueholder;
}
function equals(){
    document.getElementById("textfield").innerHTML = result;
}
function plus(){
    
}
function minus(){
    
}
function divide(){
    
}
function multiply(){
    
}