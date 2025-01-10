// Display
const currentNumber = document.querySelector('.current-number');
const previousNumber = document.querySelector('.previous-number');

// Buttons
const numberButtons = document.querySelectorAll('.num-btn');
const operationButtons = document.querySelectorAll('.operation-btn');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
		currentNumber.textContent += button.textContent;
	})
});

console.log(operationButtons)

operationButtons.forEach((button) => {

	button.addEventListener('click', () => {
		console.log(button.textContent);
		switch (button.textContent) {
			case '+':
				add(a, b);
			case '-':
				subtract(a, b);
			case '*':
				multiply(a, b);
			case '÷':
				divide(a, b);
			case 'clear':
				clearValues(1);
			case 'erase':
				eraseValue();
		}
	})
})

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

function clearValues(timesCleared) {
	let clearCounter = 0;

	if (clearCounter === 0) {
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