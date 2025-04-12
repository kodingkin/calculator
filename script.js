const add = function(num1, num2) {
    return (num1 + num2);
}

const subtract = function(num1, num2) {
    return (num1 - num2);
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

let isResult = false;

const display = function() {
    const string = this.id.toString();
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

    const maped = NumArr.map((num) => parseFloat(num))
    console.log(maped);
    
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
    console.log(input);
    const exx = ["+", "-", "x", "/"];
    if (exx.some(ex => input.includes(ex))) {
        const success = calculate();
        if (success === false) {
            return;
        }
    }
    document.querySelector(".display").innerHTML += this.id;
    isResult = false;
}

const dotController = function() {
    let input = document.querySelector(".display").innerHTML;
    const NumArr = input.split(/[+\-x/]/);
    const trimNumArr = NumArr.filter((item) => item != "");
    console.log(trimNumArr);
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