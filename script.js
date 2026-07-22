const inputString = document.querySelector(".input")
const buttons = document.querySelectorAll("button")

let firstNum = "";
let operator = "";
let secondNum = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        check(button.textContent)
    });
})

function check(button) {
    if (button == 'AC' || button == 'DEL' || button == 'k') {
        if (button == 'AC') {
            inputString.value = "";
            firstNum = "";
            secondNum = "";
            operator = "";
        }
        else if (button == 'DEL') {
            if (secondNum == "") {
                if (operator == "") {
                    firstNum = firstNum.slice(0, -1)
                    inputString.value = inputString.value.slice(0, -1);
                }
                else {
                    operator = "";
                    inputString.value = inputString.value.slice(0, -1);
                }
            }
            else {
                secondNum = secondNum.slice(0, -1)
                inputString.value = inputString.value.slice(0, -1);
            }
        }
    }
    else if (button == '+' || button == '-' || button == '*' || button == '/') {
        if (operator == "") {
            operator = button;
            inputString.value += button;
            //console.log(operator);
        }
        else {
            if (secondNum !== "") {
                evaluate(firstNum, operator, secondNum)
                operator = button;
                inputString.value += button;
                secondNum = "";
            }
        }
    }
    else if (button == '=') {
        if (operator !== "" && secondNum !== "") {
            evaluate(firstNum, operator, secondNum);
            operator = "";
            secondNum = "";
        }
    }
    else {
        if (operator == "") {
            if (firstNum == result) {
                firstNum = "";
                inputString.value = "";
            }
            firstNum += button;
            inputString.value += button;
            //console.log(firstNum);
        }
        else {
            secondNum += button;
            inputString.value += button;
        }

    }
}
let result = 0;
const evaluate = (fNum, operator, sNum) => {


    let first = parseFloat(fNum);
    let second = parseFloat(sNum)


    if (operator == '+') {
        result = first + second;
    }
    else if (operator == '-') {
        result = first - second;
    }
    else if (operator == '*') {
        result = first * second;
    }
    else if (operator == '/') {
        if (second == 0) {
            alert("Nice try nigga")
        }
        else {
            result = first / second;
        }
    }

    if (result % 1 !== 0) {
        inputString.value = result.toFixed(5);
    }
    else {
        inputString.value = result;
    }
    firstNum = inputString.value;
    //console.log(firstNum);

}
