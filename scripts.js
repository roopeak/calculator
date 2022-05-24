let screenDisplay = document.querySelector('.screenDisplay');
let numberA = '';
let numberB = '';

const buttons = document.querySelectorAll('button[id]');
const operators = document.querySelectorAll('.operators');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');



let number = buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        inputNumber(this.textContent)
    });
});


const inputNumber = number => {
    const screenNumber = screenDisplay.innerHTML;
    if (screenNumber.length < 16)
        screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
}


let operator = buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        inputOperator(this.textContent)
    });
});


const inputOperator = operator => {
    const screenOperator = screenDisplay.innerHTML;
    screenDisplay.innerHTML = operator;
}



function add(a, b) {
    // return a + b;
}


function subtract(a, b) {
    // return a - b;
}


function multiply(a, b) {
    // return a * b;
}


function divide(a, b) {
    // return a / b;
}


function operate(operator) {
    let a = '';
    let b = '';

    if(operator == '+')
        prompt('Hello')
    else if(operator == '-')
        subtract(a,b)
    else if(operator == '*')
        multiply(a, b)
    else
        divide(a, b)
}


add(5,5);
subtract(5,5);
multiply(5,5);
divide(5,5);