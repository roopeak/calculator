let clearCounter = 0;
let a = '';
let b = '';
let currentOperator = '';

// Display
const currentNumber = document.querySelector('.current-number');
const previousNumber = document.querySelector('.previous-number');

// Buttons
const numberButtons = document.querySelectorAll('.num-btn');
const operationButtons = document.querySelectorAll('.operation-btn');
const eraseButton = document.querySelector('.erase-btn');
const clearButton = document.querySelector('.clear-btn');
const equalButton = document.querySelector('.equal-btn');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => addNumber(button.textContent))
});

operationButtons.forEach((button) => {
	button.addEventListener('click', () => setOperation(button.textContent))
});

eraseButton.addEventListener('click', () => eraseValue());
clearButton.addEventListener('click', () => clearValues());
equalButton.addEventListener('click', () => evaluate());

function addNumber(number) {
	currentNumber.textContent += number;
}

function setOperation(operator) {
	a = currentNumber.textContent;
	currentOperator = operator;
	previousNumber.textContent = `${a} ${currentOperator}`;
	currentNumber.textContent = '';
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

  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

function clearValues() {
	if (currentNumber.textContent === '' && previousNumber.textContent != '') {
		previousNumber.textContent = '';
	} else if (clearCounter === 0) {
		currentNumber.textContent = '';
		clearCounter++;
	} else if (clearCounter === 1) {
		previousNumber.textContent = '';
		clearCounter = 0;
	}
}

function eraseValue() {
	let stringToErase = currentNumber.textContent;

	if (stringToErase.length > 0) {
		currentNumber.textContent = stringToErase.substring(0, stringToErase.length - 1);
	}
}

function evaluate() {
	if (currentNumber.textContent === '') return;
	b = currentNumber.textContent;
	previousNumber.textContent = operate(currentOperator, a, b);
	currentNumber.textContent = '';
	// console.log('This is a: ', a, 'This is b: ', b)
	// console.log(operate(currentOperator, a, b));
	// console.log(`${a} ${currentOperator} ${b}`);

}