// Display
const currentNumber = document.querySelector('.current-number');
const previousNumber = document.querySelector('.previous-number');

const numberButtons = document.querySelectorAll('.num-btn');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
		currentNumber.textContent += button.textContent;
	})
});