# JavaScript Interview Questions and Answers: Operators and Conditional Statements

## Assignment and Arithmetic Operators

### 1. What is the assignment operator in JavaScript?
The assignment operator (`=`) assigns a value to a variable. For example, `var age = 10;` stores `10` in `age`.

### 2. What are arithmetic operators?
They perform mathematical operations such as addition, subtraction, multiplication, division, exponentiation, and finding a remainder.

### 3. What is the output of `10 + 3`, `10 - 3`, and `10 * 3`?
The outputs are `13`, `7`, and `30`, respectively.

### 4. What does the exponentiation operator (`**`) do?
It raises the left operand to the power of the right operand. For example, `10 ** 3` returns `1000`.

### 5. What is the difference between `/` and `%`?
`/` performs division. `%` returns the remainder. For example, `10 / 3` is approximately `3.3333333333333335`, while `10 % 3` is `1`.

### 6. What does `Math.floor()` do?
It rounds a number down to the nearest integer. For example, `Math.floor(10 / 3)` returns `3`.

## Comparison and Equality Operators

### 7. What do comparison operators return?
They return a Boolean value, either `true` or `false`.

### 8. What is the difference between `<` and `<=`?
`<` checks whether one value is strictly less than another. `<=` also returns true when the values are equal.

### 9. What is the difference between `==` and `===`?
`==` compares values and may perform type conversion. `===` compares both value and data type without type conversion.

### 10. What is the output of `10 == "10"`?
It returns `true` because `==` converts the string `"10"` to a number for this comparison.

### 11. What is the output of `10 === "10"`?
It returns `false` because `10` is a number and `"10"` is a string.

### 12. What is the output of the following code?
```javascript
var x = 10;
var y = 20;
console.log(x < y);
console.log(x > y);
```
Output:
```text
true
false
```

## Increment and Decrement Operators

### 13. What is the difference between `v++` and `++v`?
`v++` returns the current value and then increments it. `++v` increments the value first and then returns the updated value.

### 14. What is the output of this code?
```javascript
var v = 5;
console.log(v++);
console.log(v);
```
Output:
```text
5
6
```

### 15. What is the difference between `v--` and `--v`?
`v--` returns the current value and then decrements it. `--v` decrements the value first and then returns the updated value.

### 16. What is the output of this code?
```javascript
var v = 5;
console.log(++v);
console.log(v--);
console.log(v);
```
Output:
```text
6
6
5
```

## Logical Operators

### 17. What are logical operators in JavaScript?
The logical operators shown in the code are AND (`&&`), OR (`||`), and NOT (`!`). They combine or reverse conditions.

### 18. When does the AND (`&&`) expression return `true`?
It returns `true` only when both conditions are true.

### 19. When does the OR (`||`) expression return `true`?
It returns `true` when at least one of the conditions is true.

### 20. What does the NOT (`!`) operator do?
It reverses a Boolean result: `!true` is `false`, and `!false` is `true`.

### 21. What is the output of the following code?
```javascript
var x = 10;
var y = 20;
console.log(x > y && x < y);
console.log(x > y || x < y);
console.log(!(x < y));
```
Output:
```text
false
true
false
```

## Conditional Statements

### 22. What is the purpose of an `if` statement?
An `if` statement runs its code block when its condition is true.

### 23. Why do we use `else if`?
We use `else if` to check another condition when the earlier condition was false.

### 24. What is the purpose of `else`?
The `else` block runs when none of the preceding `if` or `else if` conditions is true.

### 25. How can you select a browser using conditional statements?
Store the browser name in a variable and compare it with expected values using `if...else if...else`. The uploaded example checks `Chrome`, `Edge`, and `Firefox`, and prints an invalid-browser message for other values.

### 26. What is the output when `browserName = "Chrome"` in the uploaded browser-selection code?
```text
Chrome browser is selected
```

### 27. How can you check whether a number is positive, negative, or zero?
Check whether the number is greater than zero. If not, check whether it is less than zero. If neither condition is true, it is zero.

### 28. What is the output when `inputNumber = 0` in the uploaded positive/negative/zero example?
```text
The number is zero
```

### 29. Why does the zero case belong in the final `else` block?
If the number is neither greater than zero nor less than zero, it must be zero. The `else` block handles that remaining case.

### 30. What happens if the browser name does not match Chrome, Edge, or Firefox?
The final `else` block executes and prints `Invalid browser name`.

## Scenario-Based Questions

### 31. You have `var a = 10; var b = 3;`. Which operator would you use to find the remainder?
Use the modulus operator (`%`): `a % b` returns `1`.

### 32. You need to check whether a value is at least 20. Which comparison operator would you use?
Use `>=`, for example `value >= 20`.

### 33. You want to execute a block only when both conditions are true. Which logical operator should you use?
Use AND (`&&`).

### 34. You want a condition to be true when either of two conditions is true. Which logical operator should you use?
Use OR (`||`).

### 35. A browser variable contains `"Safari"`, but the code only checks Chrome, Edge, and Firefox. Which block executes?
The final `else` block executes and prints `Invalid browser name`.
