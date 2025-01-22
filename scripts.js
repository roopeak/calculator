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

const firstRow = document.querySelectorAll('.first-row');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => addNumber(button.textContent))
  mouseOverButton(button);
});

operationButtons.forEach((button) => {
	button.addEventListener('click', () => setOperation(button.textContent))
	mouseOverButton(button);
});

eraseButton.addEventListener('click', () => eraseValue());
eraseButton.addEventListener('mouseover', () => mouseOverButton)
clearButton.addEventListener('click', () => clearValues());
equalButton.addEventListener('click', () => calculate());

function mouseOverButton(button) {
	button.addEventListener('mouseover', () => {
		button.style.backgroundColor = 'black';
		button.style.color = 'white';
	})
	button.addEventListener('mouseout', () => {
		button.style.backgroundColor = 'white';
		button.style.color = 'black';
	})
}

function addNumber(number) {
	currentNumber.textContent += number;
}

function setOperation(operator) {
	console.log('This is an operator: ', operator);

	if (currentNumber.textContent != '' && previousNumber.textContent != '') {
		calculate();
	}

	currentOperator = operator;
	calculate();
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
	console.log(operator, a, b)
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

	a = '';
	b = '';
	currentOperator = '';
}

function eraseValue() {
	let stringToErase = currentNumber.textContent;

	if (stringToErase.length > 0) {
		currentNumber.textContent = stringToErase.substring(0, stringToErase.length - 1);
	}
}

function calculate() {
	if (currentNumber.textContent === '' && previousNumber.textContent === '') {
		return;
	}

	if (previousNumber.textContent === '') {
		previousNumber.textContent = currentNumber.textContent;
		a = previousNumber.textContent;
		currentNumber.textContent = '';
	} else if (currentNumber.textContent != '') {
		a = previousNumber.textContent;
		b = currentNumber.textContent;
		console.log(a, b)
		previousNumber.textContent = operate(currentOperator, a, b);
		currentNumber.textContent = '';
	}
}