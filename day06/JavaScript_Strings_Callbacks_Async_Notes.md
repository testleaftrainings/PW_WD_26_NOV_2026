# Testleaf Training
# JavaScript Strings, Callback Functions, and Synchronous vs Asynchronous Execution — Topic Notes

## 1. Learning Objectives
- Declare strings using literals and the `String` constructor.
- Compare values using `==` and `===`.
- Join strings using concatenation and template literals.
- Use common string properties and methods.
- Explain callback functions and function references.
- Differentiate synchronous and asynchronous execution.
- Explain how `setTimeout()` schedules a callback.

# Part A: JavaScript Strings

## 2. What Is a String?
A string is a sequence of characters used to represent text.

```javascript
// Declare a number variable and assign the value 20.
let age = 20;

// Declare a string variable and assign the name "Vineeth".
let name = "Vineeth";
```

## 3. Declaring Strings

### 3.1 String Literal
A string literal creates a primitive string. Use single quotes, double quotes, or backticks.

```javascript
// Declare a string using double quotes.
let course1 = "playwright";

// Declare a string using single quotes.
let course2 = 'playwright';

// Declare a string using backticks.
let course3 = `playwright`;
```

### 3.2 String Object
The `String` constructor with `new` creates a String object.

```javascript
// Create a String object using the String constructor.
let course = new String("playwright");

// Print the data type of the String object.
console.log(typeof course);
```

**Important:** `"playwright"` is a primitive string, whereas `new String("playwright")` creates an object. Prefer primitive string literals for normal string handling.

## 4. Difference Between `==` and `===`
- `==` compares values after type conversion when needed.
- `===` compares without type conversion.

```javascript
// Declare a primitive string using a string literal.
let course1 = "playwright";

// Create a String object containing the same text.
let course2 = new String("playwright");

// Compare the values using loose equality.
console.log(course1 == course2);

// Compare the values using strict equality.
console.log(course1 === course2);
```

**Output:**
```text
true
false
```

## 5. Using Quotes Inside Strings
Choose a quote style that avoids unnecessary escaping.

```javascript
// Declare a string containing double quotes inside single quotes.
let str1 = '"Diwali sales"';

// Declare a string containing an apostrophe inside double quotes.
let str2 = "Men's Shirts";

// Print the first string.
console.log(str1);

// Print the second string.
console.log(str2);
```

## 6. String Concatenation
Concatenation joins strings using the `+` operator.

```javascript
// Declare a variable to store the first name.
let firstName = "Rajesh";

// Declare a variable to store the last name.
let lastName = "Kumar";

// Join the first name and last name with a space.
console.log(firstName + " " + lastName);

// Combine text and variables to form a sentence.
console.log("My firstName is " + firstName + " and Lastname is " + lastName);
```

## 7. Template Literals
Template literals use backticks and embed variables using `${}`.

```javascript
// Declare a variable to store the first name.
let firstName = "Rajesh";

// Declare a variable to store the last name.
let lastName = "Kumar";

// Print a sentence using template literal interpolation.
console.log(`My firstname is ${firstName} and My lastname is ${lastName}`);
```

## 8. Finding the Length of a String
The `length` property returns the number of UTF-16 code units in a string. For basic English text, this usually matches the visible character count.

```javascript
// Declare a string containing the course name.
let batchName = "Playwright";

// Print the length of the string.
console.log(batchName.length);
```

**Output:** `10`

`length` is a property, not a method. Use `batchName.length`, not `batchName.length()`.

## 9. Splitting a String with `split()`
`split()` divides a string into an array using a separator. It does not modify the original string.

```javascript
// Declare a string containing the batch name and month.
let batch = "Playwright Nov 2026";

// Split the string wherever the character "u" occurs.
let arr = batch.split("u");

// Print the second element of the resulting array.
console.log(arr[1]);
```

**Output:** `twright Nov 2026`

## 10. Extracting Text with `substring()`
`substring(start, end)` returns part of a string. The start index is included and the end index is excluded.

```javascript
// Declare a string containing the company name.
let companyName = "Testleaf";

// Extract characters from index 1 up to, but not including, index 4.
let splitedString = companyName.substring(1, 4);

// Print the extracted string.
console.log(splitedString);
```

**Output:** `est`

## 11. Retrieving a Character with `charAt()`
`charAt(index)` returns the character at the specified index. An out-of-range index returns an empty string.

```javascript
// Declare a string containing a name.
let nameOfCourse = "Vineeth";

// Retrieve and print the character at index 2.
console.log(nameOfCourse.charAt(2));
```

**Output:** `n`

## 12. Finding a Character with `indexOf()`
`indexOf()` returns the index of the first occurrence. It returns `-1` if the value is not found.

```javascript
// Declare a string containing a name.
let nameOfCourse = "Vineeth";

// Find and print the first occurrence index of the character "e".
console.log(nameOfCourse.indexOf("e"));
```

**Output:** `1`

## 13. Reversing a String Using a Loop
Strings are immutable. Build a new string by reading the original from the last index to the first.

```javascript
// Declare a string that needs to be reversed.
let name = "Vineeth";

// Create an empty string to store the reversed characters.
let reversedString = "";

// Start from the last valid index and move towards index 0.
for (let i = name.length - 1; i >= 0; i--) {

    // Append the character at the current index to the new string.
    reversedString = reversedString + name.charAt(i);
}

// Print the reversed string.
console.log(reversedString);
```

**Output:** `hteeniV`

The last valid index is `name.length - 1`, not `name.length`.

## 14. String Method Quick Reference

| Property / Method | Purpose | Changes original string? |
|---|---|---|
| `length` | Returns string length | No |
| `split(separator)` | Splits into an array | No |
| `substring(start, end)` | Extracts part of a string | No |
| `charAt(index)` | Returns a character | No |
| `indexOf(value)` | Finds first matching index | No |
| `toUpperCase()` | Returns uppercase text | No |
| `toLowerCase()` | Returns lowercase text | No |
| `includes(value)` | Checks whether text is present | No |

# Part B: Callback Functions

## 15. What Is a Callback Function?
A callback is a function passed as an argument to another function. The receiving function can invoke it when needed.

```javascript
// Define a function that accepts another function as a parameter.
function enterUsername(callback) {

    // Print a message indicating that the username has been entered.
    console.log("Username entered");

    // Invoke the callback function received as an argument.
    callback();
}

// Define a function to enter the password.
function enterPassword() {

    // Print a message indicating that the password has been entered.
    console.log("Password entered");
}

// Pass the enterPassword function reference as the callback argument.
enterUsername(enterPassword);
```

**Output:**
```text
Username entered
Password entered
```

## 16. Function Reference vs Function Invocation
- `enterPassword` refers to the function and can be passed as an argument.
- `enterPassword()` invokes the function immediately.

```javascript
// Define a function named enterPassword.
function enterPassword() {

    // Print a message when the function is invoked.
    console.log("Password entered");
}

// Store the function reference in a variable.
let callback = enterPassword;

// Invoke the function through the callback variable.
callback();
```

**Common mistake:** Passing `enterPassword()` instead of `enterPassword` when a function reference is expected. Parentheses execute the function immediately.

## 17. Callback Execution Flow
1. `enterUsername(enterPassword)` calls `enterUsername`.
2. The function reference is assigned to the `callback` parameter.
3. The username message is printed.
4. `callback()` invokes the passed function.
5. The password message is printed.

Callbacks are used in reusable functions, event handling, and asynchronous operations.

# Part C: Synchronous and Asynchronous JavaScript

## 18. Synchronous Execution
Synchronous statements execute in sequence. The next statement waits for the current synchronous statement to finish.

```javascript
// Print the first message to the console.
console.log("Enter username");

// Print the second message after the first statement completes.
console.log("Enter password");

// Print the third message after the second statement completes.
console.log("Click login button");
```

**Output:**
```text
Enter username
Enter password
Click login button
```

## 19. Asynchronous Execution with `setTimeout()`
`setTimeout()` schedules a callback to run after a specified delay. It does not pause the entire JavaScript program.

```javascript
// Print a message indicating that the username is entered.
console.log("Code for enter username");

// Schedule a callback to run after a delay of 5000 milliseconds.
setTimeout(() => {

    // Print a message indicating that the password is entered.
    console.log("Code for enter password");

}, 5000);

// Print a message indicating that the login button is clicked.
console.log("Code for click login button");
```

**Immediate output:**
```text
Code for enter username
Code for click login button
```

**After approximately five seconds:**
```text
Code for enter password
```

The timer callback runs after the delay when the call stack is clear and the event loop can process it. The delay is a minimum scheduling delay, not a guarantee of exact execution time.

## 20. How `setTimeout()` Works
1. JavaScript executes the first `console.log()`.
2. JavaScript encounters `setTimeout()` and registers the timer callback with the runtime.
3. JavaScript continues to the next synchronous statement.
4. The login button message is printed.
5. After the timer delay, the callback becomes eligible to run.
6. The event loop schedules the callback when the call stack is clear.

## 21. Synchronous vs Asynchronous Execution

| Synchronous execution | Asynchronous execution |
|---|---|
| Statements execute in sequence. | An operation can be scheduled to complete later. |
| Each synchronous statement completes before the next runs. | The program can continue while waiting. |
| Example: ordinary `console.log()` statements. | Example: `setTimeout()` callback. |
| Does not itself schedule a callback for later. | Often uses callbacks, promises, or `async`/`await`. |

## 22. Common Mistakes to Avoid
1. Treating a primitive string and a String object as the same type.
2. Assuming `===` performs type conversion.
3. Calling `length` as a method instead of using it as a property.
4. Forgetting that the ending index in `substring()` is excluded.
5. Assuming `indexOf()` returns `0` when a value is absent; it returns `-1`.
6. Starting a reverse loop at `string.length` instead of `string.length - 1`.
7. Passing `callback()` when the receiving function expects a function reference.
8. Assuming `setTimeout()` pauses the execution of the next statement.
9. Assuming a timer callback always runs at the exact requested millisecond.

## 23. Practice Activities
1. Declare a string using single quotes, double quotes, and backticks.
2. Compare a primitive string with a String object using `==` and `===`.
3. Join a first name and last name using concatenation.
4. Print the same sentence using a template literal.
5. Find the length of a course name.
6. Split `"Playwright Nov 2026"` using a space and print each array element.
7. Extract `"leaf"` from `"Testleaf"` using `substring()`.
8. Find the first occurrence of a character using `indexOf()`.
9. Reverse a string using a `for` loop.
10. Create a function that accepts a callback and invokes it.
11. Pass a function reference as an argument and explain why parentheses are not used.
12. Predict the output of a program containing two `console.log()` statements and one `setTimeout()` callback.

## 24. Final Revision
- A string is a sequence of characters.
- Prefer primitive string literals over `new String()`.
- `==` allows type coercion; `===` does not.
- `length` returns the string length.
- `split()` returns an array.
- `substring()` extracts a portion of a string.
- `charAt()` returns a character at an index.
- `indexOf()` returns the first matching index or `-1`.
- A callback is a function passed to another function.
- A function name without parentheses is a function reference.
- `setTimeout()` schedules a callback after a delay.
- Synchronous code runs before timer callbacks that are waiting to execute.
