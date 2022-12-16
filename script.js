// Buttons
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");

let numberBtn = document.querySelectorAll(".number");

// const oneBtn = document.querySelector(".one");
// const twoBtn = document.querySelector(".two");
// const threeBtn = document.querySelector(".three");
// const fourBtn = document.querySelector(".four");
// const fiveBtn = document.querySelector(".five");
// const sixBtn = document.querySelector(".six");
// const sevenBtn = document.querySelector(".seven");
// const eightBtn = document.querySelector(".eight");
// const nineBtn = document.querySelector(".nine");

const sumBtn = document.querySelector(".sum");
const subtractBtn = document.querySelector(".subtract");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");

// Display
const prevNumbers = document.querySelector(".display-prev-numbers");
const currNumbers = document.querySelector(".display-curr-numbers");


for (let i = 0; i < numberBtn.length; i++) {
    let number = numberBtn[i].textContent
    numberBtn[i].addEventListener("click", function() {
        currNumbers.innerHTML += number
    })
}