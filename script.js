let result = 0;

let valueholder = "0";
let firstNumber = "0";
let secondNumber = "0";

let condition = 0;


document.getElementById("textfield").innerHTML = firstNumber;

function effects(element){
    element.classList.toggle("highlight");
        setTimeout(function() {
            element.classList.remove("highlight");
        }, 300);
}

    function one(){
        valueholder += "1";
        document.getElementById("textfield").innerHTML = valueholder;
        
        var element = document.getElementById("one");
        effects(element);
        
    }
    function two(){
        valueholder += "2";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("two");
        effects(element);
    }
    function three(){
        valueholder += "3";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("three");
        effects(element);
    }
    function four(){
        valueholder += "4";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("four");
        effects(element);
    }
    function five(){
        valueholder += "5";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("five");
        effects(element);
    }
    function six(){
        valueholder += "6";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("six");
        effects(element);
    }
    function seven(){
        valueholder += "7";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("seven");
        effects(element);
    }
    function eight(){
        valueholder += "8";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("eight");
        effects(element);
    }
    function nine(){
        valueholder += "9";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("nine");
        effects(element);
    }
    function zero(){
        valueholder += "0";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("zero");
        effects(element);
    }


    function eraseall(){
        valueholder = "0";
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("eraseall");
        effects(element);
    }
    function erase(){
        valueholder = valueholder.slice(0, -1);
        document.getElementById("textfield").innerHTML = valueholder;

        var element = document.getElementById("erase");
        effects(element);
    }



    function plus(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " +";
        valueholder = "0";
        condition = 1;

        var element = document.getElementById("plus");
        effects(element);
    }
    function minus(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " -";
        valueholder = "0";
        condition = 2;

        var element = document.getElementById("minus");
        effects(element);
    }
    function divide(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " %";
        valueholder = "0";
        condition = 3;

        var element = document.getElementById("divide");
        effects(element);
    }
    function multiply(){
        firstNumber = Number(valueholder);
        document.getElementById("textfield").innerHTML = " x";
        valueholder = "0";
        condition = 4;

        var element = document.getElementById("multiply");
        effects(element);
    }



    function equals(){

        var element = document.getElementById("equals");
        effects(element);

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