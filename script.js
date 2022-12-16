// Buttons
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");

let firstOperand = "";
let secondOperand = "";
let calcOperator = "";


// const oneBtn = document.querySelector(".one");
// const twoBtn = document.querySelector(".two");
// const threeBtn = document.querySelector(".three");
// const fourBtn = document.querySelector(".four");
// const fiveBtn = document.querySelector(".five");
// const sixBtn = document.querySelector(".six");
// const sevenBtn = document.querySelector(".seven");
// const eightBtn = document.querySelector(".eight");
// const nineBtn = document.querySelector(".nine");

// const sumBtn = document.querySelector(".sum");
// const subtractBtn = document.querySelector(".subtract");
// const divideBtn = document.querySelector(".divide");
// const multiplyBtn = document.querySelector(".multiply");

// Display
const prevNumbers = document.querySelector(".display-prev-numbers");
const currNumbers = document.querySelector(".display-curr-numbers");

// Populates display with numbers
for (let i = 0; i < numberBtn.length; i++) {
    let number = numberBtn[i].textContent
    numberBtn[i].addEventListener("click", function() {
        currNumbers.innerHTML += number
    })
}

for (let i = 0; i < operatorBtn.length; i++) {
    let operator = operatorBtn[i].textContent
    operatorBtn[i].addEventListener("click", function() {
        firstOperand = parseFloat(currNumbers.innerHTML);
        calcOperator = operator;
        currNumbers.innerHTML += operator;
        prevNumbers.innerHTML += currNumbers.innerHTML;
        currNumbers.innerHTML = "";
    })
}

equalsBtn.addEventListener("click", function() {
    secondOperand = parseFloat(currNumbers.innerHTML);
    prevNumbers.innerHTML += currNumbers.innerHTML
    currNumbers.innerHTML = "";
    calculate()
});

function calculate() {
    switch (calcOperator) {
        case "+": currNumbers.innerHTML += firstOperand + secondOperand
        break;

        case "-": currNumbers.innerHTML += firstOperand - secondOperand
        break;

        case "*": currNumbers.innerHTML += firstOperand * secondOperand
        break;

        case "/": currNumbers.innerHTML += firstOperand / secondOperand
        break;
    }

    equalsBtn.disabled = true;
}

clearBtn.addEventListener("click", clearDisplay);

function clearDisplay() {
    currNumbers.innerHTML = "";
    prevNumbers.innerHTML = "";
    equalsBtn.disabled = false;
}
