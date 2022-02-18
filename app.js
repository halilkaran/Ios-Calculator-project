//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

//! Selectors

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const acButton = document.querySelector(".ac");
const pmButton = document.querySelector(".pm");
const percentButton = document.querySelector(".percent");
const prevDisp = document.querySelector(".displayTotal");
const currDisp = document.querySelector(".displayCurrent");

//? Operator variables
let previousOperand = "";
let currentOperand = "";
let operation = "";

//* After equal or percent buttons are pressed and then new number entered, we should clear the current display. This boolean variable is used to check these buttons are pressed or not
let equalOrPercentBtnPressed = false;

//!numbers and decimal buttons event
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.textContent);
    updateDisplay();
  });
});

//!Operator button event
operationButtons.forEach((op) => {
  op.addEventListener("click", () => {
    chooseOperator(op.textContent);
    updateDisplay();
  });
});

//! Equal button event
equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
  equalOrPercentBtnPressed = true;
});

//! All Clear(AC) button event
acButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

//! plus-minus(+-) button event
pmButton.addEventListener("click", () => {
  plusMinus();
  updateDisplay();
});

//! percent (%) button event
percentButton.addEventListener("click", () => {
  percent();
  updateDisplay();
  equalOrPercentBtnPressed = true;
});

//! When number and decimal buttons are clicked
const appendNumber = (num) => {
  if (num === "." && currentOperand.includes(".")) return;

  if (currentOperand === "0" && num === "0") return;

  if (currentOperand === "0" && num !== "0" && num !== ".") {
    currentOperand = num;
    return;
  }

  if (currentOperand.length > 10) return;

  //! if equal or percent btn is pressed and then user enter new number
  if (equalOrPercentBtnPressed) {
    equalOrPercentBtnPressed = false; //* clear for next usage
    currentOperand = num;
    return;
  }

  currentOperand += num;
};

//! Display the numbers and computation
const updateDisplay = () => {
  if (currentOperand.toString().length > 12) {
    currentOperand = currentOperand.toString().slice(0, 12);
  }
  currDisp.textContent = currentOperand;

  if (operation != null) {
    prevDisp.textContent = `${previousOperand} ${operation}`;
  } else {
    prevDisp.textContent = "";
  }
};
const chooseOperator = (op) => {
  if (currentOperand === "") return;

  if (previousOperand) {
    compute();
  }

  //? variable swapping
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
};

//? compute the result
const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = "";
  previousOperand = "";
};

//? when ac button is clicked
const clear = () => {
  operation = "";
  previousOperand = "";
  currentOperand = "";
};

//? when pm button is clicked
const plusMinus = () => {
  if (!currentOperand) return;
  currentOperand = currentOperand * -1;
};

//? when % button is clicked
const percent = () => {
  if (!currentOperand) return;
  currentOperand = currentOperand / 100;
};
