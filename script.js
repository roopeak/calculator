// Buttons
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");

// Operands and operator for calculations
let firstOperand = "";
let secondOperand = "";
let calcOperator = "";


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

// Listen which number button is pressed
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

// If user clicks equals
equalsBtn.addEventListener("click", function() {
    secondOperand = parseFloat(currNumbers.innerHTML);
    prevNumbers.innerHTML += currNumbers.innerHTML
    currNumbers.innerHTML = "";
    calculate()
});

// Calculates given expression
function calculate() {

    if (secondOperand == 0) {
        equalsBtn.disabled = true;
        deleteBtn.disabled = true;
        return
    }

    // Switch-Case to determine operator
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

    // Prevent extra calculations by disabling buttons
    equalsBtn.disabled = true;
    deleteBtn.disabled = true;
    
    numberBtn.forEach(elem => {
        elem.disabled = true;
    })

    operatorBtn.forEach(elem => {
        elem.disabled = true;
    })
}

clearBtn.addEventListener("click", clearDisplay);

// Clears display
function clearDisplay() {
    currNumbers.innerHTML = "";
    prevNumbers.innerHTML = "";
    equalsBtn.disabled = false;
    deleteBtn.disabled = false;

    numberBtn.forEach(elem => {
        elem.disabled = false;
    })

    operatorBtn.forEach(elem => {
        elem.disabled = false;
    })

}

deleteBtn.addEventListener("click", deleteNumber);

// Erase last number
function deleteNumber() {
    str = currNumbers.innerHTML;
    strSliced = str.substring(0, str.length - 1);
    currNumbers.innerHTML = "";
    currNumbers.innerHTML += strSliced;
}