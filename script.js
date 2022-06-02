const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const decimalButton = document.querySelector('[data-number]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const calcDisplay = document.querySelector('[data-calc-display]');


let num1 = null;
let num2 = null;
let operator = null;


allClearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', delNum);


operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        operation(button.textContent);
    });
});


function operation() {
    num1 = currentOperand.textContent;
    previousOperand.textContent = num1 + ' ' + operator;
    currentOperator = operator;
    clearCurrent();
}


function clearCurrent() {
    currentOperand.textContent = '';
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    })
})


function appendOperator(operator) {
    currentOperand.textContent += operator;
}


function appendNumber(number) {
    currentOperand.textContent += number;
}


equalsButton.addEventListener('click', button => {
    num2 = currentOperand.textContent;
    previousOperand.textContent = num1 + ' ' + operator + ' ' + num2 + ' =';
    currentOperand.textContent = operate(operator, num1, num2);
});


function clearScreen() {
    currentOperand.textContent = '';
    previousOperand.textContent = '';
}


function delNum() {
    currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1);
}

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }    
}