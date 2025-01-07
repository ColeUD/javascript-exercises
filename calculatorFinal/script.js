const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "Error: Division by 0";
    return a / b;
};

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid Operator";
    }
};

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = "0";

const display = document.getElementById("display");

const updateDisplay = (value) => {
    display.textContent = value;
};

const clearCalculator = () => {
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    displayValue = "0";
    updateDisplay(displayValue);
};

const backspace = () => {
    displayValue = displayValue.slice(0, -1) || "0";
    updateDisplay(displayValue);
};

// Handle digit and dot input
const handleDigit = (digit) => {
    if (displayValue === "0") {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay(displayValue);
};

// Handle operator input
const handleOperator = (operator) => {
    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
        currentOperator = operator;
        displayValue = "0";
    } else if (currentOperator) {
        secondNumber = parseFloat(displayValue);
        const result = operate(currentOperator, firstNumber, secondNumber);
        firstNumber = result;
        currentOperator = operator;
        displayValue = "0";
        updateDisplay(firstNumber);
    }
};

// Handle equals
const handleEquals = () => {
    if (firstNumber !== null && currentOperator && displayValue !== "0") {
        secondNumber = parseFloat(displayValue);
        const result = operate(currentOperator, firstNumber, secondNumber);
        firstNumber = null;
        secondNumber = null;
        currentOperator = null;
        displayValue = result;
        updateDisplay(displayValue);
    }
};

// Attach event listeners
document.querySelectorAll(".digit").forEach(button => {
    button.addEventListener("click", (e) => handleDigit(e.target.dataset.value));
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", (e) => handleOperator(e.target.dataset.value));
});

document.getElementById("equals").addEventListener("click", handleEquals);
document.getElementById("clear").addEventListener("click", clearCalculator);
document.getElementById("backspace").addEventListener("click", backspace);
document.querySelector(".dot").addEventListener("click", () => {
    if (!displayValue.includes(".")) handleDigit(".");
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) handleDigit(e.key);
    if (["+", "-", "*", "/"].includes(e.key)) handleOperator(e.key);
    if (e.key === "Enter" || e.key === "=") handleEquals();
    if (e.key === "Backspace") backspace();
    if (e.key === "c" || e.key === "C") clearCalculator();
});

