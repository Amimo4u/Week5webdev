// ==============================
// Part 1: Variables & Conditionals
// ==============================
let num = 8;  // variable declaration
if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}

// ==============================
// Part 2: Functions
// ==============================
// Function to greet a user
function greet(name) {
  return "Hello " + name;
}

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// ==============================
// Part 3: Loops
// ==============================
// For loop example
for (let i = 1; i <= 3; i++) {
  console.log("For loop: " + i);
}

// While loop example
let x = 1;
while (x <= 2) {
  console.log("While loop: " + x);
  x++;
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// Change text when button clicked
document.getElementById("btnChange").onclick = function() {
  document.getElementById("message").innerText = "Message Changed!";
};

// Show counting numbers in alert
document.getElementById("btnCount").onclick = function() {
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }
  alert("Counting: " + numbers);
};

// Show sum using add() function
document.getElementById("btnCalc").onclick = function() {
  let result = add(10, 20);
  document.getElementById("message").innerText = "Sum is " + result;
};
