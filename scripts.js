const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const decimalButton = document.querySelector('[data-number]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const calcDisplay = document.querySelector('[data-calc-display]');


numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);


operationButtons.forEach((button) =>
    button.addEventListener('click', () => appendOperator(button.textContent))
);


function appendOperator(operator) {
    calcDisplay.textContent += operator;
}


function appendNumber(number) {
    calcDisplay.textContent += number;
}


function updateDisplay() {
    
}

function add(a, b) {
    console.log(a + b);
}


function subtract(a, b) {
    console.log(a - b);
}


function multiply(a, b) {
    console.log(a * b);
}


function divide(a, b) {
    console.log(a / b);
}


function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }      
}