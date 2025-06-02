let currentInput = '';
let previousInput = '';
let currentOperation = null;

const display = document.getElementById('display');

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function chooseOperation(operation) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  display.value = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  display.value = currentInput;
}
