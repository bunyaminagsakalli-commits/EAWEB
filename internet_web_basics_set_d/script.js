// Internet and Web Basics - SET D Practical Exam
// Student: Ekrem Ağsakallı
// This file contains all JavaScript functions for the website tasks.

// Show current date automatically
const currentDateElement = document.getElementById("currentDate");
currentDateElement.textContent = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

// Create 20 clickable task buttons dynamically
const taskMenu = document.getElementById("taskMenu");
for (let i = 1; i <= 20; i++) {
  const link = document.createElement("a");
  link.href = `#task${i}`;
  link.textContent = `Task ${i}`;
  taskMenu.appendChild(link);
}

// Helper function to print result in output area
function printOutput(id, message, type = "") {
  const output = document.getElementById(id);
  output.className = `output ${type}`;
  output.innerHTML = message;
}

// Task 1: Reverse words order in sentence
function reverseWords() {
  const sentence = document.getElementById("sentenceInput").value.trim();
  if (sentence === "") {
    printOutput("output1", "Please enter a sentence.", "error");
    return;
  }
  const reversed = sentence.split(/\s+/).reverse().join(" ");
  printOutput("output1", `Reversed words: <strong>${reversed}</strong>`, "success");
}

// Task 2: Extract first, third, fourth and last characters
function extractCharacters() {
  const text = document.getElementById("charInput").value;
  if (text.length < 4) {
    printOutput("output2", "Please enter at least 4 characters.", "error");
    return;
  }
  const first = text.charAt(0);
  const third = text.charAt(2);
  const fourth = text.charAt(3);
  const last = text.charAt(text.length - 1);
  printOutput("output2", `First: ${first}<br>Third: ${third}<br>Fourth: ${fourth}<br>Last: ${last}`, "success");
}

// Task 3: Find longest word from string
function findLongestWord() {
  const text = document.getElementById("longestInput").value.trim();
  if (text === "") {
    printOutput("output3", "Please enter a sentence.", "error");
    return;
  }
  const words = text.split(/\s+/);
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  printOutput("output3", `Longest word: <strong>${longest}</strong>`, "success");
}

// Task 4: Toggle case of entire string
function toggleCase() {
  const text = document.getElementById("caseInput").value;
  if (text === "") {
    printOutput("output4", "Please enter text.", "error");
    return;
  }
  let result = "";
  for (let char of text) {
    result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  printOutput("output4", `Toggled case: <strong>${result}</strong>`, "success");
}

// Task 5: Find word count and space count
function countWordsSpaces() {
  const text = document.getElementById("countInput").value;
  if (text.trim() === "") {
    printOutput("output5", "Please enter a sentence.", "error");
    return;
  }
  const words = text.trim().split(/\s+/).length;
  const spaces = (text.match(/ /g) || []).length;
  printOutput("output5", `Word count: ${words}<br>Space count: ${spaces}`, "success");
}

// Task 6: Create array of fruits and show third element
function showThirdFruit() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
  printOutput("output6", `Fruits: ${fruits.join(", ")}<br>Third element: <strong>${fruits[2]}</strong>`, "success");
}

// Task 7: Remove duplicates from array
function removeDuplicates() {
  const input = document.getElementById("duplicateInput").value.trim();
  if (input === "") {
    printOutput("output7", "Please enter values separated by commas.", "error");
    return;
  }
  const array = input.split(",").map(item => item.trim()).filter(item => item !== "");
  const uniqueArray = [...new Set(array)];
  printOutput("output7", `Original: ${array.join(", ")}<br>Without duplicates: <strong>${uniqueArray.join(", ")}</strong>`, "success");
}

// Task 8: Find last element from array using popup
function lastElementPopup() {
  const input = prompt("Enter array values separated by commas:");
  if (input === null || input.trim() === "") {
    printOutput("output8", "No values entered.", "error");
    return;
  }
  const array = input.split(",").map(item => item.trim()).filter(item => item !== "");
  const last = array[array.length - 1];
  alert(`Last element is: ${last}`);
  printOutput("output8", `Array: ${array.join(", ")}<br>Last element: <strong>${last}</strong>`, "success");
}

// Task 9: Find index of element using user input
function findElementIndex() {
  const arrayInput = document.getElementById("arrayInput9").value.trim();
  const searchValue = document.getElementById("searchInput9").value.trim();
  if (arrayInput === "" || searchValue === "") {
    printOutput("output9", "Please enter array values and search element.", "error");
    return;
  }
  const array = arrayInput.split(",").map(item => item.trim());
  const index = array.indexOf(searchValue);
  if (index === -1) {
    printOutput("output9", `${searchValue} was not found in the array.`, "error");
  } else {
    printOutput("output9", `${searchValue} found at index: <strong>${index}</strong>`, "success");
  }
}

// Task 10: Use splice() to delete elements one by one
let spliceArray = ["HTML", "CSS", "JavaScript", "DOM", "GitHub"];
function resetSpliceArray() {
  spliceArray = ["HTML", "CSS", "JavaScript", "DOM", "GitHub"];
  printOutput("output10", `Array reset: ${spliceArray.join(", ")}`, "success");
}

function deleteOneByOne() {
  if (spliceArray.length === 0) {
    printOutput("output10", "All elements have been deleted.", "error");
    return;
  }
  const removed = spliceArray.splice(0, 1);
  printOutput("output10", `Deleted: ${removed}<br>Remaining array: <strong>${spliceArray.join(", ") || "Empty"}</strong>`, "success");
}

// Task 11: Arithmetic function based on user choice
function arithmeticChoice() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(a) || isNaN(b)) {
    printOutput("output11", "Please enter valid numbers.", "error");
    return;
  }

  let result;
  if (operation === "+") result = a + b;
  else if (operation === "-") result = a - b;
  else if (operation === "*") result = a * b;
  else if (operation === "/") {
    if (b === 0) {
      printOutput("output11", "Division by zero is not allowed.", "error");
      return;
    }
    result = a / b;
  }

  printOutput("output11", `Result: <strong>${result}</strong>`, "success");
}

// Task 12: Popup numeric/string input rule arithmetic
function popupArithmeticRule() {
  const first = prompt("Enter first number:");
  const second = prompt("Enter second number:");

  const a = Number(first);
  const b = Number(second);

  if (first === null || second === null || first.trim() === "" || second.trim() === "") {
    printOutput("output12", "Input cannot be empty.", "error");
    return;
  }

  if (isNaN(a) || isNaN(b)) {
    alert("String input detected. Please enter numeric values only.");
    printOutput("output12", "Invalid input: only numeric values are accepted.", "error");
    return;
  }

  const sum = a + b;
  alert(`Both inputs are numeric. Sum is: ${sum}`);
  printOutput("output12", `Numeric inputs accepted.<br>${a} + ${b} = <strong>${sum}</strong>`, "success");
}

// Task 13: Required field validation
function requiredValidation() {
  const value = document.getElementById("requiredInput").value.trim();
  if (value === "") {
    printOutput("output13", "This field is required.", "error");
  } else {
    printOutput("output13", "Validation successful.", "success");
  }
}

// Task 14: Age validation must be >= 18
function ageValidation() {
  const age = Number(document.getElementById("ageInput").value);
  if (isNaN(age) || age <= 0) {
    printOutput("output14", "Please enter a valid age.", "error");
  } else if (age < 18) {
    printOutput("output14", "Access denied. Age must be 18 or older.", "error");
  } else {
    printOutput("output14", "Access granted. Age is valid.", "success");
  }
}

// Task 15: Signup form with submit and reset
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("nameField").value.trim();
  const email = document.getElementById("emailField").value.trim();
  const password = document.getElementById("passwordField").value.trim();

  if (name === "" || email === "" || password === "") {
    printOutput("output15", "All signup fields are required.", "error");
    return;
  }

  printOutput("output15", `Signup successful!<br>Name: ${name}<br>Email: ${email}`, "success");
});

signupForm.addEventListener("reset", function() {
  printOutput("output15", "Form has been reset.", "success");
});

// Task 16: Display submitted data with success message
function displaySubmittedData() {
  const name = document.getElementById("displayName").value.trim();
  const course = document.getElementById("displayCourse").value.trim();

  if (name === "" || course === "") {
    printOutput("output16", "Please complete all fields.", "error");
    return;
  }

  printOutput("output16", `Success! Submitted Data:<br>Name: <strong>${name}</strong><br>Course: <strong>${course}</strong>`, "success");
}

// Task 17: Reset button clears output
function showResetDemo() {
  const text = document.getElementById("resetDemoInput").value.trim();
  if (text === "") {
    printOutput("output17", "Please write something first.", "error");
    return;
  }
  printOutput("output17", text, "success");
}

function clearResetDemo() {
  document.getElementById("output17").innerHTML = "";
  document.getElementById("resetDemoInput").value = "";
}

// Task 18: Store 3 persons in array and display
function displayPersons() {
  const persons = [
    { name: "Ekrem", age: 21, role: "Student" },
    { name: "Ali", age: 22, role: "Developer" },
    { name: "Sara", age: 20, role: "Designer" }
  ];

  let result = "";
  persons.forEach((person, index) => {
    result += `${index + 1}. ${person.name} - Age: ${person.age} - Role: ${person.role}<br>`;
  });

  printOutput("output18", result, "success");
}

// Task 19: Countdown timer with Start / Pause / Reset buttons
let timerInterval = null;
let remainingSeconds = 0;

function startTimer() {
  const inputSeconds = Number(document.getElementById("timerInput").value);

  // If timer is not already running, set seconds from input
  if (remainingSeconds <= 0) {
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
      printOutput("output19", "Please enter a valid number of seconds.", "error");
      return;
    }
    remainingSeconds = inputSeconds;
  }

  // Prevent multiple intervals from running at the same time
  if (timerInterval !== null) return;

  timerInterval = setInterval(() => {
    remainingSeconds--;
    document.getElementById("timerDisplay").textContent = remainingSeconds.toString().padStart(2, "0");

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      printOutput("output19", "Countdown finished!", "success");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  printOutput("output19", "Timer paused.", "success");
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingSeconds = 0;
  document.getElementById("timerDisplay").textContent = "00";
  document.getElementById("timerInput").value = "";
  printOutput("output19", "Timer reset.", "success");
}

// Task 20: Double-click event to clear task output area
function showDoubleClickText() {
  const text = document.getElementById("doubleInput").value.trim();
  if (text === "") {
    printOutput("output20", "Please enter text first.", "error");
    return;
  }
  printOutput("output20", `${text}<br><small>Double-click here to clear this output.</small>`, "success");
}

function clearDoubleClickOutput() {
  document.getElementById("output20").innerHTML = "Output cleared by double-click.";
}
