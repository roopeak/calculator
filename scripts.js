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
    a = numberA;
    b = numberB;

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

operate('*', 5, 5);

// add(5,5);
// subtract(5,5);
// multiply(5,5);
// divide(5,5);