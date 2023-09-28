// // Function to append characters to the display
// function ToDisplay(value) {
//   const display = document.getElementById('display');
//   display.value += value;
// }

// // Function to clear the display
// function clearDisplay() {
//   const display = document.getElementById('display');
//   display.value = '';
// }

// // Function to calculate the result
// function calculateResult() {
//   const display = document.getElementById('display');
//   try {
//       // Use the eval function to evaluate the expression entered
//       display.value = eval(display.value);
//   } catch (error) {
//       display.value = 'Error';
//   }
// }

// Get the elements
const resultElement = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// Initialize the result
let currentResult = '0';
let operator = '';
let operand = '';

// Helper function to update the display
function updateDisplay() {
    resultElement.value = currentResult;
}

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case 'C':
                currentResult = '0';
                operator = '';
                operand = '';
                break;
            case '←':
                currentResult = currentResult.slice(0, -1);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operator = buttonText;
                operand = currentResult;
                currentResult = '0';
                break;
            case '=':
                switch (operator) {
                    case '+':
                        currentResult = (parseFloat(operand) + parseFloat(currentResult)).toString();
                        break;
                    case '-':
                        currentResult = (parseFloat(operand) - parseFloat(currentResult)).toString();
                        break;
                    case '*':
                        currentResult = (parseFloat(operand) * parseFloat(currentResult)).toString();
                        break;
                    case '/':
                        currentResult = (parseFloat(operand) / parseFloat(currentResult)).toString();
                        break;
                }
                operator = '';
                operand = '';
                break;
            default:
                if (currentResult === '0') {
                    currentResult = buttonText;
                } else {
                    currentResult += buttonText;
                }
        }

        updateDisplay();
    });
});

