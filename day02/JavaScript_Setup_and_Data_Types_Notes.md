# JavaScript Basics – Setup and Data Types

## 1. Prerequisites

Before starting, ensure the following software is installed:

- **Visual Studio Code (VS Code):** Used to write and manage code.
- **Node.js:** Used to execute JavaScript outside a browser.
- **Playwright:** Used for browser automation and testing.

Official download pages:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download)
- [Playwright](https://playwright.dev/)

### Verify the installations

Open the terminal in VS Code using **Terminal → New Terminal**.

Run these commands one by one:

```bash
node --version
```

Displays the installed Node.js version.

```bash
npm --version
```

Displays the installed npm version. npm is the package manager used to install JavaScript packages.

If both commands display version numbers, you can proceed.

---

## 2. Create a Workspace in VS Code

A workspace is an area where you organize and manage your project files.

### Steps

1. Open VS Code.
2. Click **File → Open Folder**.
3. Create a new folder named `JavaScript-Playwright`.
4. Select the folder and click **Select Folder**.
5. Open **Terminal → New Terminal**.

Your workspace is now ready.

```text
JavaScript-Playwright/
```

You will create your project files inside this folder.

---

## 3. Initialize the JavaScript Project

In the VS Code terminal, execute:

```bash
npm init -y
```

### Explanation

- `npm` is the Node.js package manager.
- `init` initializes a new Node.js project.
- `-y` accepts the default configuration without asking multiple questions.

After executing this command, npm creates a file named `package.json`.

**What is `package.json`?**

It contains project information and configuration, including the project's name, scripts, and dependencies.

Your folder structure will look like this:

```text
JavaScript-Playwright/
└── package.json
```

---

## 4. Install Playwright

For this introductory exercise, install the Playwright package using:

```bash
npm install playwright@latest
```

### Explanation

- `npm install` installs a package in the current project.
- `playwright` is the browser automation library.
- `@latest` requests the latest published version of the package at installation time.

This command installs Playwright as a project dependency.

**Important:** This command alone does not necessarily download all browser binaries. For browser automation, install the required browsers using:

```bash
npx playwright install
```

This downloads the browsers supported by Playwright for your environment.

**Training note:** We are installing Playwright now, but the first exercise will focus on JavaScript fundamentals. You do not need to launch a browser to practise `console.log()` or data types.

See the [Playwright Installation Guide](https://playwright.dev/docs/intro).

---

## 5. Create a JavaScript File

### Steps

1. In the VS Code Explorer, right-click the `JavaScript-Playwright` folder.
2. Select **New File**.
3. Name the file `datatypes.js`.
4. Open the file.
5. Start writing your JavaScript code.

Your project structure should look like this:

```text
JavaScript-Playwright/
│
├── node_modules/
├── package.json
├── package-lock.json
└── datatypes.js
```

**Explanation:**

- `node_modules/` contains installed packages and their dependencies.
- `package.json` contains project configuration and dependencies.
- `package-lock.json` records the installed dependency versions.
- `datatypes.js` contains the JavaScript code you write.

---

## 6. Understand `console.log()`

The `console.log()` statement is used to print information to the console.

### Example 1: Print a message

```javascript
// Display a message in the console
console.log("Welcome to JavaScript");
```

**Output:**

```text
Welcome to JavaScript
```

### Example 2: Print a number

```javascript
// Display a number in the console
console.log(100);
```

**Output:**

```text
100
```

### Example 3: Print multiple values

```javascript
// Display multiple values in the console
console.log("Playwright", 100, true);
```

**Output:**

```text
Playwright 100 true
```

### How to execute the JavaScript file

Save your file using `Ctrl + S`.

Open the VS Code terminal and execute:

```bash
node datatypes.js
```

The `node` command executes the JavaScript file using Node.js.

**Important:** Make sure the terminal is currently inside your `JavaScript-Playwright` project folder.

---

## 7. JavaScript Data Types

JavaScript data types specify the kind of value a variable holds.

For example:

- `100` is a number.
- `"Playwright"` is a string.
- `true` is a boolean.

JavaScript has seven commonly recognized primitive data types:

| Data type | Example | Purpose |
|---|---|---|
| Number | `100` | Stores integers and decimal numbers |
| String | `"Hello"` | Stores text |
| Boolean | `true` | Stores `true` or `false` |
| Undefined | `undefined` | Represents an unassigned value |
| Null | `null` | Represents an intentional absence of value |
| BigInt | `100n` | Stores large integers beyond the safe integer range |
| Symbol | `Symbol("id")` | Creates a unique identifier |

---

## 8. Complete JavaScript Data Types Code

Copy the following code into your `datatypes.js` file.

```javascript
// ========================================
// 1. NUMBER DATA TYPE
// ========================================

// Declare a variable named mark and assign a negative number
var mark = -99;

// Display the value of mark
console.log(mark);

// Display the data type of mark, which is number
console.log(typeof mark);


// ========================================
// 2. STRING DATA TYPE
// ========================================

// Declare a variable and assign a string using template literals
var courseName = `Playwright`;

// Display the value of courseName
console.log(courseName);

// Display the data type of courseName, which is string
console.log(typeof courseName);


// ========================================
// 3. BOOLEAN DATA TYPE
// ========================================

// Declare a variable and assign the boolean value true
var isEnabled = true;

// Display the value of isEnabled
console.log(isEnabled);

// Display the data type of isEnabled, which is boolean
console.log(typeof isEnabled);


// ========================================
// 4. UNDEFINED DATA TYPE
// ========================================

// Declare a variable without assigning any value
var emailID;

// Display the value of emailID, which is undefined
console.log(emailID);

// Display the data type of emailID, which is undefined
console.log(typeof emailID);


// ========================================
// 5. NULL VALUE
// ========================================

// Declare a variable and intentionally assign null
var middleName = null;

// Display the value of middleName, which is null
console.log(middleName);

// Display the data type of middleName, which returns object
console.log(typeof middleName);


// ========================================
// 6. NUMBER.MAX_SAFE_INTEGER
// ========================================

// Access the maximum safe integer supported by the number data type
var maxNumber = Number.MAX_SAFE_INTEGER;

// Display the maximum safe integer, which is 9007199254740991
console.log(maxNumber);


// ========================================
// 7. NUMBER PRECISION
// ========================================

// Assign the maximum safe integer to num1
var num1 = 9007199254740991;

// Display the value of num1
console.log(num1);


// ========================================
// 8. BIGINT DATA TYPE
// ========================================

// Declare a BigInt variable using the n suffix
var num2 = 9007199254740995n;

// Display the value of num2
console.log(num2);

// Display the data type of num2, which is bigint
console.log(typeof num2);


// ========================================
// 9. ANOTHER BIGINT EXAMPLE
// ========================================

// Declare another BigInt variable with a large integer value
var num3 = 9007199254740997n;

// Display the value of num3
console.log(num3);

// Display the data type of num3, which is bigint
console.log(typeof num3);


// ========================================
// 10. SYMBOL DATA TYPE
// ========================================

// Create a Symbol with the description id
var userID = Symbol("id");

// Display the value of userID
console.log(userID);

// Display the data type of userID, which is symbol
console.log(typeof userID);
```

### Expected Output

When you execute the file using `node datatypes.js`, you should see output similar to this:

```text
-99
number
Playwright
string
true
boolean
undefined
undefined
null
object
9007199254740991
9007199254740991
9007199254740995n
bigint
9007199254740997n
bigint
Symbol(id)
symbol
```

---

## 9. Difference Between `console.log()` and `typeof`

These two statements serve different purposes.

### `console.log()`

Displays the value of a variable.

```javascript
// Declare a variable and assign the value 100
var age = 100;

// Display the value stored in age
console.log(age);
```

**Output:**

```text
100
```

### `typeof`

Returns the data type of a value.

```javascript
// Declare a variable and assign the value 100
var age = 100;

// Display the data type of age
console.log(typeof age);
```

**Output:**

```text
number
```

**Remember:**

- `console.log(age)` → Displays the value.
- `console.log(typeof age)` → Displays the data type.

---

## 10. Important Notes for Learners

### A. Number vs. BigInt

JavaScript's `number` type can represent integers and decimal values. However, integers are guaranteed to be represented safely only between `-(2^53 - 1)` and `2^53 - 1`.

```javascript
// Store the maximum safe integer in a variable
var maxNumber = Number.MAX_SAFE_INTEGER;

// Display the maximum safe integer
console.log(maxNumber);

// Store a large integer using BigInt
var largeNumber = 9007199254740995n;

// Display the large integer
console.log(largeNumber);
```

**Output:**

```text
9007199254740991
9007199254740995n
```

The `n` suffix indicates that the value is a BigInt literal.

### B. Undefined vs. Null

```javascript
// Declare a variable without assigning a value
var emailID;

// Display undefined because no value was assigned
console.log(emailID);

// Assign null to represent an intentional absence of value
var middleName = null;

// Display null
console.log(middleName);
```

**Simple explanation:**

- `undefined` → No value has been assigned.
- `null` → The absence of a value has been intentionally specified.

**Important:** `typeof null` returns `"object"`. This is a historical JavaScript quirk, not an indication that `null` is actually an object.

---

## 11. Classroom Practice Activity

Ask learners to create a new file named `practice.js` and complete the following tasks.

1. Declare a variable named `studentName` and assign your name.
2. Declare a variable named `studentAge` and assign your age.
3. Declare a variable named `isStudent` and assign `true`.
4. Declare a variable named `phoneNumber` without assigning any value.
5. Declare a variable named `address` and assign `null`.
6. Display the value of each variable using `console.log()`.
7. Display the data type of each variable using `typeof`.
8. Declare a BigInt variable named `accountNumber` with the value `9876543210987654321n`.
9. Display the value and data type of `accountNumber`.
10. Access `Number.MAX_SAFE_INTEGER` and display its value.

### Final Execution Steps

Every time you modify the code:

1. Save the file using `Ctrl + S`.
2. Open the VS Code terminal.
3. Execute the file using the appropriate command.

For example:

```bash
node practice.js
```

## Training Takeaway

Learners have now created a JavaScript project, installed Playwright, written a `.js` file, executed JavaScript using Node.js, and practised basic data types using `console.log()` and `typeof`.
