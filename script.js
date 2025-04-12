const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

let num1;
let expression;
let num2;

const operate = function(num1, expression, num2) {
    if (expression === "+") {
        const res = add(num1, num2);
        return res;
    } 
    if (expression === "-") {
        const res = subtract(num1, num2);
        return res;
    }     
    if (expression === "*") {
        const res = multiply(num1, num2);
        return res;
    } 
    if (expression === "/") {
        const res = divide(num1, num2);
        return res;
    } 
}

const display = function() {
    const string = this.id.toString();
    const display = document.querySelector(".display");
    display.innerHTML += string;
}

const clearDisplay = function() {
    const display = document.querySelector(".display");
    display.innerHTML = null;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", display);
})
const exxButtons = document.querySelectorAll(".expression");
exxButtons.forEach((button) => {
    button.addEventListener("click", display);
})
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);