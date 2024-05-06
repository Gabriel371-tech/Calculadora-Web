const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));
let currentOperand = '';
let previousOperand = '';
let currentOperator = null;
let result = null;

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    display.value = currentOperand;
}

function setOperator(operator) {
    if (currentOperator !== null || currentOperand === '') return;
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    if (currentOperator === null || previousOperand === '' || currentOperand === '') return;
    let calculation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperator) {
        case '+':
            calculation = prev + current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '*':
            calculation = prev * current;
            break;
        case '/':
            calculation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = calculation.toString();
    previousOperand = '';
    currentOperator = null;
    display.value = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    currentOperator = null;
    display.value = '';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.blur();
    });
});