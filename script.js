const add = ((num1, num2) => num1 + num2)
const subtract = ((num1, num2) => num1 - num2)
const multiply = ((num1, num2) => num1 * num2)
const divide = ((num1, num2) => num1 / num2)

let isResult = false;

const display = function() {
    const string = this.value.toString();
    const display = document.querySelector(".display");

    // if current displaying result of calculation, pressing number should reset the display and only display the new number entered
    if (isResult === true) {
        display.innerHTML = string;
        isResult = false;
    }
    else {    
        display.innerHTML += string;
    }
}

const clearDisplay = function() {
    const display = document.querySelector(".display");
    display.innerHTML = null;
}

const calculate = function() {
    let result
    const display = document.querySelector(".display");
    const input = display.innerHTML;
    const NumArr = input.split(/[+\-x/]/);
    const inputArr = input.split("");
    const exxArr = inputArr.filter((item) => (item === "+" || item === "-" || item === "x" || item === "/"));

    // check whether the input is vaild or not
    if (NumArr.includes("")) {
        return false;
    }

    // turn all number into float (for the dot)
    const maped = NumArr.map((num) => parseFloat(num))
    
    for (let i = 0; i < exxArr.length; i++) {
        const exx = exxArr[i];
        if (exx === "+") {
            result = add(maped[i],maped[i+1])
        }
        if (exx === "-") {
            result = subtract(maped[i],maped[i+1])
        }
        if (exx === "x") {
            result = multiply(maped[i],maped[i+1])
        }
        if (exx === "/") {
            result = divide(maped[i],maped[i+1])
        }
    }
    display.innerHTML = result;
    isResult = true;
}

const exxController = function() {
    let input = document.querySelector(".display").innerHTML;
    const exx = ["+", "-", "x", "/"];
    if (input === "") {
        return;
    }
    if (exx.some(ex => input.includes(ex))) {
        const success = calculate();
        if (success === false) {
            return;
        }
    }
    document.querySelector(".display").innerHTML += this.value;
    isResult = false;
}

const dotController = function() {
    let input = document.querySelector(".display").innerHTML;
    const NumArr = input.split(/[+\-x/]/);
    const trimNumArr = NumArr.filter((item) => item != "");
    if (isResult === true) {
        document.querySelector(".display").innerHTML = "."
        isResult = false;
        return;
    }
    if (input === "") {
        document.querySelector(".display").innerHTML += "."
        return;
    }
    if (trimNumArr[(trimNumArr.length - 1)].includes(".")) {
        return;
    }
    else {
        document.querySelector(".display").innerHTML += "."
    }
}

const backController = function() {
    const input = document.querySelector(".display").innerHTML;
    const originalLen = input.length;
    let newDisplay = "";
    for (let i = 0; i < (originalLen - 1); i++) {
        newDisplay += input[i];
    }
    document.querySelector(".display").innerHTML = newDisplay;
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
    button.addEventListener("click", display);
})
const exxButtons = document.querySelectorAll(".expression");
exxButtons.forEach((button) => {
    button.addEventListener("click", exxController);
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

const operateButton = document.querySelector(".equal");
operateButton.addEventListener("click", calculate);

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", dotController);

const backButton = document.querySelector(".backspace");
backButton.addEventListener("click", backController);

const body = document.body;
body.addEventListener("keydown", (event) => {
    let button;
    if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "." || event.key === "=") {
        button = document.querySelector(`#key\\${event.key}`)
        if (button) {
            button.click();
        }
    }
    else if (event.key === "Enter") {
        button = document.querySelector(".equal");
        if (button) {
            button.click();
        }
    }
    else if (event.key === "*") {
        button = document.querySelector("#keyx");
        if (button) {
            button.click();
        }
    }
    else {
        button = document.querySelector(`#key${event.key}`)
        if (button) {
            button.click();
        }
    }
})