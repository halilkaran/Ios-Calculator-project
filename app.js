let displayTotal = document.querySelector(".displayTotal");
let displayCurrent = document.querySelector(".displayCurrent");
let operator = ["+", "-", "*", "/"];

//! ------------------------------------------//
//** SELECT TO NUMBERS AND ONCLICK */
//! -----------------------------------------//

const numbers = document.querySelectorAll(".number");
for (let i in numbers) {
  numbers[i].onclick = () => {
    if (
      displayCurrent.textContent.length == 1 &&
      displayCurrent.textContent == 0
    ) {
      displayCurrent.textContent = numbers[i].textContent;
    } else if (displayCurrent.textContent.length < 11) {
      displayCurrent.textContent += numbers[i].textContent;
    }
  };
}
//! ------------------------------------------//
//** FIND INDEX OF OPERAOTOR*/
//! -----------------------------------------//

let indexof = 0;
let index = () => {
    let arr = [];
 arr.push(displayCurrent.textContent.lastIndexOf("+"));
 arr.push(displayCurrent.textContent.lastIndexOf("-"));
 arr.push(displayCurrent.textContent.lastIndexOf("*"));
arr.push(displayCurrent.textContent.lastIndexOf("/"));
    indexof = Math.max(...arr);
console.log(indexof);
    
}


//! --------------------------------//
//** SELECT TO COMMA*/
//! --------------------------------//
const comma = document.querySelector(".komma");
comma.onclick = () => {
    index();
    if (displayCurrent.textContent == 0) {

        displayCurrent.textContent = "0.";
    }
    if (
      !displayCurrent.textContent.includes(".", indexof) &&
      (displayCurrent.textContent.includes("+") ||
        displayCurrent.textContent.includes("-") ||
        displayCurrent.textContent.includes("*") ||
        displayCurrent.textContent.includes("/")) &&
      displayCurrent.textContent.slice(-1) != "."
    ) {
      displayCurrent.textContent += ".";
    } if (displayCurrent.textContent.length < 2) {
        displayCurrent.textContent += ".";
    }
    if (!displayCurrent.textContent.includes(".")) {
        if (displayCurrent.textContent.slice(-1).includes(operator)) {
            displayCurrent.textContent += "0.";
        } else {
            displayCurrent.textContent += "0.";
        }
    }
}
//! --------------------------------//
//** AC ON CLICK */
//! --------------------------------//

document.querySelector(".AC").addEventListener("click", () => {
  displayCurrent.textContent = "";
  displayTotal.textContent = "";
});

//! --------------------------------//
//** +- CLICK */
//! --------------------------------//

document.querySelector(".plusMinus").addEventListener("click", () => {
  if (!displayCurrent.textContent.length || displayCurrent.textContent == 0)
    displayCurrent.textContent = "-";
  else if (
    (displayCurrent.textContent.length == 1 ||
      displayCurrent.textContent == 0) &&
    displayCurrent.textContent.includes("-")
  )
    displayCurrent.textContent = "";
  else if (!displayCurrent.textContent.includes("-"))
    displayCurrent.textContent = 0 - Number(displayCurrent.textContent);
  else if (displayCurrent.textContent.includes("-"))
    displayCurrent.textContent = 0 - Number(displayCurrent.textContent);
});

//! --------------------------------//
//**  OPERATORS  **/
//! --------------------------------//
document.querySelector(".plus").addEventListener("click", () => {
    if (!operator.includes(displayCurrent.textContent.slice(-1)))
      displayCurrent.textContent += "+";
})
document.querySelector(".minus").addEventListener("click", () => {
  if (!operator.includes(displayCurrent.textContent.slice(-1)))
    displayCurrent.textContent += "-";
});
document.querySelector(".multiple").addEventListener("click", () => {
  if (!operator.includes(displayCurrent.textContent.slice(-1)))
    displayCurrent.textContent += "*";
});

document.querySelector(".divide").addEventListener("click", () => {
  if (!operator.includes(displayCurrent.textContent.slice(-1)))
    displayCurrent.textContent += "/";
});
document.querySelector(".equal").addEventListener("click", () => {
  if (!operator.includes(displayCurrent.textContent.slice(-1)))
        displayTotal.textContent = eval(displayCurrent.textContent);
    displayCurrent.textContent = "";
    
});