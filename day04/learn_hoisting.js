// Explain hoisting in JavaScript.

// Hoisting allows JavaScript declarations to be processed before code execution.

// Declare a variable using var and access it before initialization.

// Print the value of courseName before initialization.
// console.log(courseName);

// Declare a variable using var and assign the value Playwright.
// var courseName = "Playwright";

// Print the value of courseName after initialization.
// console.log(courseName);

// Output:
// undefined
// Playwright

// Explain hoisting with the const keyword.

// Access courseName before its initialization.
// console.log(courseName);

// Declare a constant named courseName and assign the value Playwright.
const courseName = "Playwright";

// Output:
// ReferenceError: Cannot access 'courseName' before initialization
