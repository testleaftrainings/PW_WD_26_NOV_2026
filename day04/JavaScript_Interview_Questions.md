# JavaScript Interview Questions: Variables, Scope, Hoisting, Functions, Operators, and Conditional Statements

> These questions are based on the JavaScript training topics and examples in the notes file. Answers are included for revision.

## Part 1: Variables — `var`, `let`, and `const`

### 1. What is a variable in JavaScript?
A variable is a named place to store a value so that the program can use it.

### 2. What is the difference between declaration and assignment?
Declaration creates a variable. Assignment stores a value in that variable.

### 3. What is the difference between `var`, `let`, and `const`?
`var` is function-scoped and allows redeclaration. `let` is block-scoped and allows reassignment but not redeclaration in the same scope. `const` is block-scoped, must be initialized, and cannot be reassigned.

### 4. Can a variable declared with `var` be reassigned?
Yes. For example, `var age = 10; age = 20;` is valid.

### 5. Can a `var` variable be redeclared in the same scope?
Yes. Redeclaring a `var` variable in the same scope is allowed.

### 6. Can a `let` variable be reassigned?
Yes. Reassignment is allowed for a `let` variable.

### 7. Can a `let` variable be redeclared in the same scope?
No. It causes a `SyntaxError`.

### 8. Can a `const` variable be declared without an initial value?
No. A `const` declaration must be initialized when it is declared.

### 9. What happens if you reassign a `const` variable?
A `TypeError` is thrown when the reassignment is executed.

### 10. Does `const` make an array or object immutable?
No. It prevents reassignment of the variable binding, but the object's properties or array's elements can still be changed.

### 11. Which keyword would you normally choose if a value must change?
Use `let` when reassignment is needed. Use `const` when reassignment is not needed.

### 12. In Playwright, what could you store in a variable?
A variable can store a URL, locator, browser name, retry counter, test data, or other values.

## Part 2: Scope

### 13. What is scope in JavaScript?
Scope determines where a variable can be accessed.

### 14. What is the difference between function scope and block scope?
A function-scoped variable declared with `var` inside a function is available throughout that function. `let` and `const` are block-scoped and are available only within the block where they are declared.

### 15. What is a block in JavaScript?
A block is a group of statements enclosed in curly braces `{}`.

### 16. What is the output of this code?

```javascript
function login() {
    let username = "vineeth@gmail.com";

    if (true) {
        let username = "rajendran@gmail.com";
        console.log(username);
    }

    console.log(username);
}

login();
```

Output:
```text
rajendran@gmail.com
vineeth@gmail.com
```

The inner `username` belongs to the `if` block, while the outer `username` belongs to the function's scope.

### 17. What is variable shadowing?
Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable is used within its scope.

### 18. What can happen if you use `var` instead of `let` in a loop?
A `var` loop variable is not limited to the loop block; it is function-scoped or global-scoped at top level. This can make it accessible after the loop and can cause unexpected behavior in some code. `let` is block-scoped.

## Part 3: Hoisting

### 19. What is hoisting in JavaScript?
Hoisting describes how JavaScript processes declarations before executing statements in their scope. The behavior depends on the declaration type.

### 20. What is the output of this code?

```javascript
console.log(courseName);
var courseName = "Playwright";
console.log(courseName);
```

Output:
```text
undefined
Playwright
```

The `var` declaration is hoisted and initialized to `undefined`, but its assignment happens at its original position.

### 21. What happens when you access a `const` variable before its declaration?

```javascript
console.log(courseName);
const courseName = "Playwright";
```

A `ReferenceError` occurs because the variable is in the Temporal Dead Zone before initialization.

### 22. What is the Temporal Dead Zone (TDZ)?
The TDZ is the period from entering a scope until a `let` or `const` variable is initialized. Accessing the variable during this period causes a `ReferenceError`.

### 23. Are `let` and `const` hoisted?
Their declarations are processed before execution, but they cannot be accessed before initialization because of the TDZ.

### 24. Does hoisting move the actual assignment to the top?
No. Hoisting does not move the assignment value to the top of the scope.

## Part 4: Functions and Loops

### 25. What is a function?
A function is a reusable block of code designed to perform a specific task.

### 26. How do you declare and call a basic function?

```javascript
function functionName() {
    console.log("This is from a function");
}

functionName();
```

The function is declared with `function`, and `functionName()` calls it.

### 27. What is the output of this code?

```javascript
function addNumbers() {
    let a = 10;
    let b = 30;
    console.log(a + b);
}

addNumbers();
```

Output:
```text
40
```

### 28. Why do we use functions in automation?
Functions help organize reusable actions, reduce duplicate code, and make tests easier to maintain. Examples include login, navigation, and form submission functions.

### 29. What is a `for` loop?
A `for` loop repeatedly executes a block of code while its condition is true.

### 30. What is the output of this code?

```javascript
function functionName() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

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

### 31. What are the three parts of a typical `for` loop?
Initialization, condition, and update. For example, in `for (let i = 0; i < 5; i++)`, initialization is `let i = 0`, the condition is `i < 5`, and the update is `i++`.

## Part 5: Operators

### 32. What is the assignment operator?
The assignment operator (`=`) assigns a value to a variable.

### 33. What are arithmetic operators?
They perform calculations such as addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), exponentiation (`**`), and remainder (`%`).

### 34. What is the difference between `/` and `%`?
`/` performs division. `%` returns the remainder after division.

### 35. What does `Math.floor()` do?
It rounds a number down to the nearest integer. For example, `Math.floor(10 / 3)` returns `3`.

### 36. What is the difference between `==` and `===`?
`==` compares values and may convert types. `===` compares both value and data type without type conversion.

### 37. What is the output of `10 == "10"` and `10 === "10"`?
`10 == "10"` returns `true`, while `10 === "10"` returns `false`.

### 38. What is the difference between `v++` and `++v`?
`v++` returns the current value before incrementing. `++v` increments first and then returns the updated value.

### 39. What is the difference between `v--` and `--v`?
`v--` returns the current value before decrementing. `--v` decrements first and then returns the updated value.

### 40. What are logical operators?
The main logical operators are AND (`&&`), OR (`||`), and NOT (`!`).

### 41. When does `&&` return true?
When both conditions evaluate to true.

### 42. When does `||` return true?
When at least one condition evaluates to true.

### 43. What does `!` do?
It reverses a Boolean value. For example, `!true` is `false`.

## Part 6: Conditional Statements

### 44. What is the purpose of an `if` statement?
It executes a block when the specified condition is true.

### 45. Why do we use `else if`?
It checks another condition when the previous `if` or `else if` condition was false.

### 46. What is the purpose of `else`?
It executes when none of the preceding conditions is true.

### 47. How would you select a browser using conditional statements?
Store the browser name in a variable and compare it using `if`, `else if`, and `else`. Print or execute the appropriate browser-specific action.

### 48. What happens if the browser name is `Safari` but the code only checks Chrome, Edge, and Firefox?
The final `else` block runs, assuming the code has no separate condition for Safari.

### 49. How do you check whether a number is positive, negative, or zero?
Check whether it is greater than zero, then whether it is less than zero. If neither condition is true, it is zero.

### 50. Why is `else` useful when checking positive, negative, or zero?
If the number is neither greater than zero nor less than zero, it must be zero, so `else` handles that remaining case.

## Part 7: Scenario-Based Questions

### 51. You need to store a locator and do not plan to reassign the variable. Which keyword would you use?
Use `const`, for example `const submitButton = page.locator("#submit");`.

### 52. A retry counter changes after every failed attempt. Which keyword is suitable?
Use `let`, because the counter needs reassignment.

### 53. A variable declared with `let` inside an `if` block is accessed outside that block. What happens?
A `ReferenceError` occurs if no variable with that name is available in the outer scope.

### 54. A developer uses `var` for a loop counter and accesses it after the loop. Why might this work?
Because `var` is function-scoped, not block-scoped. If declared at top level, it is available in the surrounding top-level scope.

### 55. A test prints `undefined` when a `var` variable is logged before its assignment. Why?
The `var` declaration is hoisted and initialized to `undefined`, while the assignment occurs later.

### 56. A test throws `ReferenceError` when a `const` variable is logged before declaration. Why?
The variable is in the Temporal Dead Zone until its declaration is initialized.

### 57. You have the same variable name inside a function and inside an `if` block using `let`. Why can both values be printed?
Each variable belongs to a different scope. The inner variable shadows the outer variable only inside the `if` block.

### 58. You need to print numbers from 0 to 4. Which loop condition would you use?
Use `for (let i = 0; i < 5; i++)` and print `i` inside the loop.

### 59. You need to execute a block only when two checks pass. Which operator should you use?
Use the logical AND operator (`&&`).

### 60. You need a condition to pass when either of two checks passes. Which operator should you use?
Use the logical OR operator (`||`).

### 61. You need to compare a browser name with `"Chrome"` without implicit type conversion. Which operator should you use?
Use strict equality (`===`).

### 62. Why are functions useful in a Playwright framework?
They allow common actions to be reused, reduce duplication, and help keep test code organized and maintainable.

## Quick Answer Recap

- `var`: function-scoped; reassignment and redeclaration allowed.
- `let`: block-scoped; reassignment allowed, same-scope redeclaration not allowed.
- `const`: block-scoped; must be initialized and cannot be reassigned.
- Hoisting: declarations are processed before execution; initialization behavior depends on the declaration type.
- TDZ: `let` and `const` cannot be accessed before initialization.
- Function: reusable block of code for a task.
- Loop: repeats statements while its condition is true.
- `===`: strict equality comparison.
- `&&`: AND; both conditions must be true.
- `||`: OR; at least one condition must be true.
- `!`: NOT; reverses a Boolean value.
- `if...else if...else`: selects a code block based on conditions.
