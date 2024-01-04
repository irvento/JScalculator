let result = 0;

let valueholder = "0";
let firstNumber = "0";
let secondNumber = "0";

let condition = 0;

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



    function plus(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " +";
        valueholder = "0";
        condition = 1;
    }
    function minus(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " -";
        valueholder = "0";
        condition = 2;
    }
    function divide(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " %";
        valueholder = "0";
        condition = 3;
    }
    function multiply(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " x";
        valueholder = "0";
        condition = 4;
    }



    function equals(){

        secondNumber = Number(valueholder);

            switch(condition){
                case 1 : 
                    result = firstNumber + secondNumber;
                    break;
                case 2 : 
                    result = firstNumber - secondNumber;
                    break;
                case 3 : 
                    result = firstNumber / secondNumber;
                    break;
                case 4 : 
                    result = firstNumber * secondNumber;
                    break;
            }

        document.getElementById("textfield").innerHTML = result;
        valueholder = result;
    }