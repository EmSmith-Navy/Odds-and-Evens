// TODO: this file! :)
// Select necessary DOM elements
const numberInput = document.getElementById("number");
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

let numberBank = [];

// Function to update the number bank display
function updateNumberBankDisplay() {
  numberBankOutput.textContent = numberBank.join(", ") || "No numbers added.";
}

// Function to handle adding a number
function addNumber(event) {
  event.preventDefault();
  const value = numberInput.value.trim();
  const number = Number(value);

  if (!isNaN(number) && Number.isFinite(number)) {
    numberBank.push(number);
    updateNumberBankDisplay();
    numberInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a valid number.");
  }
}

// Function to sort and move the first number to the appropriate category
function sortOne() {
  if (numberBank.length === 0) return;

  const number = numberBank.shift(); // Remove the first number
  if (number % 2 === 0) {
    evensOutput.textContent += `${number} `;
  } else {
    oddsOutput.textContent += `${number} `;
  }

  updateNumberBankDisplay();
}

// Function to sort all numbers into their respective categories
function sortAll() {
  while (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evensOutput.textContent += `${number} `;
    } else {
      oddsOutput.textContent += `${number} `;
    }
  }

  updateNumberBankDisplay();
}

// Event listeners
document.querySelector("form").addEventListener("submit", addNumber);
sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);
