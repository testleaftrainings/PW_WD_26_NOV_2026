# JavaScript Notes: Variables, Scope, Hoisting, Functions, Operators, and Conditional Statements

## 1. Variables: `var`, `let`, and `const`

Variables store data that can be used in a program.

```javascript
// Declare a variable without assigning a value.
var num;

// Declare a variable using let.
let studentName;

// Declare a constant and assign its required initial value.
const courseName = "Playwright";
```

- **Declaration** creates a variable.
- **Assignment** stores a value in a variable.
- `var` and `let` can be declared without an initial value.
- `const` must be initialized when declared.

### `var`: reassignment and redeclaration

```javascript
// Declare age and assign the value 10.
var age = 10;

// Reassign age with the value 20.
age = 20;

// Redeclare age in the same scope.
var age = 30;

// Print the latest value of age.
console.log(age);
```

Output:
```text
30
```

### `let`: reassignment is allowed, redeclaration in the same scope is not

```javascript
// Declare age and assign the value 15.
let age = 15;

// Reassign age with the value 30.
age = 30;

// Print the current value of age.
console.log(age);

// Redeclaring age in the same scope causes a SyntaxError.
// let age = 40;
```

Output:
```text
30
```

### `const`: reassignment is not allowed

```javascript
// Declare a constant and initialize it with the value 10.
const age = 10;

// Print the constant's value.
console.log(age);

// Reassignment causes a TypeError.
// age = 100;

// Redeclaration in the same scope causes a SyntaxError.
// const age = 200;
```

Output:
```text
10
```

### Quick comparison

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration in the same scope | Allowed | Not allowed | Not allowed |
| Must be initialized at declaration | No | No | Yes |
| Scope | Function-scoped | Block-scoped | Block-scoped |

`const` prevents reassignment of the variable binding. If the variable refers to an object or array, its contents may still be changed.

## 2. Scope: Function Scope and Block Scope

Scope determines where a variable can be accessed.

- **Function scope:** A `var` variable declared inside a function is available within that function.
- **Block scope:** `let` and `const` declared inside `{}` are available only inside that block.
- A function creates its own scope.
- An `if` statement's curly braces create a block.

```javascript
// Declare a function named login.
function login() {

    // Declare a function-scoped variable using let.
    let username = "vineeth@gmail.com";

    // Start an if block.
    if (true) {

        // Declare a different block-scoped username.
        let username = "rajendran@gmail.com";

        // Print the username declared inside the if block.
        console.log(username);
    }

    // Print the username declared inside the function.
    console.log(username);
}

// Call the login function.
login();
```

Output:
```text
rajendran@gmail.com
vineeth@gmail.com
```

The two `username` variables are different because each `let` declaration belongs to a different scope.

## 3. Hoisting

Hoisting describes how JavaScript processes declarations before executing code.

### Hoisting with `var`

A `var` declaration is hoisted and initialized with `undefined`. Its assigned value is not available until the assignment statement executes.

```javascript
// Access courseName before its assignment.
console.log(courseName);

// Declare courseName using var and assign its value.
var courseName = "Playwright";

// Print courseName after assignment.
console.log(courseName);
```

Output:
```text
undefined
Playwright
```

### Hoisting with `let` and `const`

`let` and `const` declarations are also processed before execution, but they cannot be accessed before their declaration is initialized. This period is called the **Temporal Dead Zone (TDZ)**.

```javascript
// Accessing courseName before its declaration causes a ReferenceError.
console.log(courseName);

// Declare the constant after the attempted access.
const courseName = "Playwright";
```

Result:
```text
ReferenceError: Cannot access 'courseName' before initialization
```

The program stops at the error, so the declaration does not execute.

## 4. Functions

A function is a reusable block of code designed to perform a specific task.

### Basic function

```javascript
// Declare a function named functionName.
function functionName() {

    // Print a message when the function runs.
    console.log("This is from a function");
}

// Call the function to execute its code.
functionName();
```

Output:
```text
This is from a function
```

### Function that adds two numbers

```javascript
// Declare a function named addNumbers.
function addNumbers() {

    // Store the first number.
    let a = 10;

    // Store the second number.
    let b = 30;

    // Add the two numbers and print the result.
    console.log(a + b);
}

// Call the function.
addNumbers();
```

Output:
```text
40
```

### Function with a loop

```javascript
// Declare a function named functionName.
function functionName() {

    // Start a loop at 0 and continue while i is less than 5.
    for (let i = 0; i < 5; i++) {

        // Print the current value of i.
        console.log(i);
    }
}

// Call the function to run the loop.
functionName();
```

Output:
```text
0
1
2
3
4
```

## 5. `for` Loop and Variable Scope

A `for` loop repeats a block while its condition is true.

```javascript
// Start a loop with i initialized to 0, continue while i is less than 5, and increment i each time.
for (let i = 0; i < 5; i++) {

    // Print the current value of i.
    console.log(i);
}
```

Using `let` in the loop keeps `i` scoped to the loop. Using `var` makes `i` function-scoped (or global-scoped when used at top level), which can cause the variable to remain accessible after the loop.

## 6. Assignment Operator

The assignment operator (`=`) assigns a value to a variable.

```javascript
// Declare age and assign the value 10.
var age = 10;

// Print the value of age.
console.log(age);
```

Output:
```text
10
```

## 7. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

```javascript
// Store the first number.
var a = 10;

// Store the second number.
var b = 3;

// Add the two numbers.
console.log(a + b);

// Subtract b from a.
console.log(a - b);

// Multiply the two numbers.
console.log(a * b);

// Raise a to the power of b.
console.log(a ** b);

// Divide a by b.
console.log(a / b);

// Round the division result down to the nearest integer.
console.log(Math.floor(a / b));

// Find the remainder after dividing a by b.
console.log(a % b);
```

Output:
```text
13
7
30
1000
3.3333333333333335
3
1
```

| Operator | Purpose | Example | Result |
|---|---|---|---:|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `**` | Exponentiation | `10 ** 3` | `1000` |
| `/` | Division | `10 / 3` | `3.3333333333333335` |
| `%` | Remainder | `10 % 3` | `1` |

`Math.floor()` rounds down to the nearest integer.

## 8. Comparison and Equality Operators

Comparison operators return a Boolean value: `true` or `false`.

```javascript
// Store the first value.
var x = 10;

// Store the second value.
var y = 20;

// Check whether x is less than y.
console.log(x < y);

// Check whether x is greater than y.
console.log(x > y);

// Check whether x is less than or equal to y.
console.log(x <= y);

// Check whether x is greater than or equal to y.
console.log(x >= y);

// Compare values with type conversion allowed.
console.log(10 == "10");

// Compare values and types without type conversion.
console.log(10 === "10");
```

Output:
```text
true
false
true
false
true
false
```

- `==` compares values and may convert types.
- `===` compares both value and data type. Prefer `===` for most JavaScript comparisons.

## 9. Increment and Decrement Operators

- **Post-increment (`v++`):** uses the current value, then increments it.
- **Pre-increment (`++v`):** increments first, then uses the updated value.
- **Post-decrement (`v--`):** uses the current value, then decrements it.
- **Pre-decrement (`--v`):** decrements first, then uses the updated value.

```javascript
// Initialize v with the value 5.
var v = 5;

// Print v first, then increment it.
console.log(v++);

// Print the updated value of v.
console.log(v);

// Increment v first, then print it.
console.log(++v);

// Print v first, then decrement it.
console.log(v--);

// Print the updated value of v.
console.log(v);

// Decrement v first, then print it.
console.log(--v);
```

Output:
```text
5
6
7
7
6
5
```

## 10. Logical Operators

- `&&` (AND) is true only when both conditions are true.
- `||` (OR) is true when at least one condition is true.
- `!` (NOT) reverses a Boolean value.

```javascript
// Store the first number.
var x = 10;

// Store the second number.
var y = 20;

// Both conditions must be true for the AND result to be true.
console.log(x > y && x < y);

// At least one condition must be true for the OR result to be true.
console.log(x > y || x < y);

// Reverse the result of the condition.
console.log(!(x < y));
```

Output:
```text
false
true
false
```

## 11. Conditional Statements: `if`, `else if`, and `else`

Conditional statements choose which code block to execute based on conditions.

```javascript
// Store the browser name.
var browserName = "Chrome";

// Check whether the browser name is Chrome.
if (browserName === "Chrome") {

    // Print a message for Chrome.
    console.log("Chrome browser is selected");

// Check whether the browser name is Edge if the first condition is false.
} else if (browserName === "Edge") {

    // Print a message for Edge.
    console.log("Edge browser is selected");

// Check whether the browser name is Firefox if earlier conditions are false.
} else if (browserName === "Firefox") {

    // Print a message for Firefox.
    console.log("Firefox browser is selected");

// Run this block if none of the conditions match.
} else {

    // Print a message for an unsupported browser.
    console.log("Invalid browser name");
}
```

Output:
```text
Chrome browser is selected
```

### Check whether a number is positive, negative, or zero

```javascript
// Store the number to be checked.
var inputNumber = 0;

// Check whether the number is greater than zero.
if (inputNumber > 0) {

    // Print a message when the number is positive.
    console.log("This is a positive number");

// Check whether the number is less than zero.
} else if (inputNumber < 0) {

    // Print a message when the number is negative.
    console.log("This is a negative number");

// Run this block when the number is neither positive nor negative.
} else {

    // Print a message when the number is zero.
    console.log("The number is zero");
}
```

Output:
```text
The number is zero
```

## 12. Playwright Automation Relevance

- Use `const` for a locator, page object, or URL when its variable binding does not need reassignment.
- Use `let` when a variable must be reassigned, such as a counter or changing value.
- Use `if...else` to choose actions based on browser names, test data, or application state.
- Use functions to group reusable actions such as login or form submission.
- Understanding scope helps avoid accidentally reusing or shadowing variables.
- Understanding hoisting helps explain errors caused by accessing variables before initialization.

Example:

```javascript
// Store a URL that will not be reassigned.
const url = "https://example.com";

// Store a retry counter that may change.
let retryCount = 0;

// Store a locator reference.
const submitButton = page.locator("#submit");

// Print the URL.
console.log(url);

// Print the initial retry count.
console.log(retryCount);
```

## Quick Revision

- `var` is function-scoped and allows redeclaration.
- `let` is block-scoped and allows reassignment but not redeclaration in the same scope.
- `const` is block-scoped, must be initialized, and cannot be reassigned.
- `var` declarations are initialized to `undefined` during hoisting.
- `let` and `const` cannot be accessed before initialization because of the Temporal Dead Zone.
- Functions group reusable code.
- `for` loops repeat code while a condition is true.
- Arithmetic operators perform calculations.
- Comparison operators return Boolean values.
- Prefer `===` when comparing both value and type.
- Logical operators are `&&`, `||`, and `!`.
- Conditional statements control which block runs.
