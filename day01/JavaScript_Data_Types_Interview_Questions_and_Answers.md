# JavaScript Data Types – Interview Questions and Answers

These interview questions are based on the JavaScript setup and data type examples covered in `datatypes.js`. They are suitable for beginners and learners preparing for JavaScript or Playwright automation interviews.

---

## 1. Basic Interview Questions

### Q1. What is a data type in JavaScript?

**Answer:** A data type describes the kind of value a variable holds, such as a number, string, boolean, undefined, null, BigInt, or Symbol.

**Example:**

```javascript
// Store a number in a variable
var mark = -99;

// Display the type of the variable
console.log(typeof mark);
```

**Output:**

```text
number
```

### Q2. What are the primitive data types in JavaScript?

**Answer:** JavaScript has seven primitive data types:

1. `number`
2. `string`
3. `boolean`
4. `undefined`
5. `null`
6. `bigint`
7. `symbol`

**Example:**

```javascript
// Store a string value
var courseName = "Playwright";

// Store a boolean value
var isEnabled = true;

// Display their data types
console.log(typeof courseName);
console.log(typeof isEnabled);
```

**Output:**

```text
string
boolean
```

### Q3. What is the difference between `console.log()` and `typeof`?

**Answer:**

- `console.log()` displays a value or message.
- `typeof` returns a string describing the type of a value.

**Example:**

```javascript
// Store a number
var mark = -99;

// Display the value
console.log(mark);

// Display the data type
console.log(typeof mark);
```

**Output:**

```text
-99
number
```

### Q4. What is the `number` data type in JavaScript?

**Answer:** The `number` type represents integers and floating-point numbers. It also includes special numeric values such as `NaN` and `Infinity`.

**Example:**

```javascript
// Store an integer
var mark = -99;

// Store a decimal number
var rateOfInterest = 10 / 3;

// Display both values
console.log(mark);
console.log(rateOfInterest);
```

### Q5. What is a string in JavaScript?

**Answer:** A string is a sequence of text characters. Strings can be written using single quotes, double quotes, or backticks.

**Example:**

```javascript
// Create a string using backticks
var courseName = `Playwright`;

// Display the value and data type
console.log(courseName);
console.log(typeof courseName);
```

**Output:**

```text
Playwright
string
```

### Q6. What is a boolean data type?

**Answer:** A boolean represents one of two values: `true` or `false`. It is commonly used in conditions and to represent states.

**Example:**

```javascript
// Store whether a feature is enabled
var isEnabled = true;

// Display the value and its type
console.log(isEnabled);
console.log(typeof isEnabled);
```

**Output:**

```text
true
boolean
```

### Q7. What is `undefined` in JavaScript?

**Answer:** A variable declared without an assigned value has the value `undefined`.

**Example:**

```javascript
// Declare a variable without assigning a value
var emailID;

// Display the value and its type
console.log(emailID);
console.log(typeof emailID);
```

**Output:**

```text
undefined
undefined
```

### Q8. What is `null` in JavaScript?

**Answer:** `null` is a value that is intentionally assigned to represent the absence of a value.

**Example:**

```javascript
// Intentionally represent the absence of a middle name
var middleName = null;

// Display the value
console.log(middleName);
```

**Output:**

```text
null
```

### Q9. What is the difference between `undefined` and `null`?

**Answer:**

- `undefined` commonly means a value has not been assigned.
- `null` is intentionally assigned to represent no value.

**Example:**

```javascript
// Declare a variable without assigning a value
var emailID;

// Intentionally assign no value to another variable
var middleName = null;

// Display both values
console.log(emailID);
console.log(middleName);
```

**Output:**

```text
undefined
null
```

### Q10. Why does `typeof null` return `"object"`?

**Answer:** This is a long-standing historical quirk in JavaScript. Although `typeof null` returns `"object"`, `null` is a primitive value, not an object.

**Example:**

```javascript
// Assign null to a variable
var middleName = null;

// Check its type
console.log(typeof middleName);
```

**Output:**

```text
object
```

---

## 2. Number Precision and BigInt Questions

### Q11. What is `Number.MAX_SAFE_INTEGER`?

**Answer:** `Number.MAX_SAFE_INTEGER` is the largest integer that JavaScript's `number` type can represent safely without losing integer precision. Its value is `9007199254740991`.

**Example:**

```javascript
// Read the maximum safe integer
var maxNumber = Number.MAX_SAFE_INTEGER;

// Display the value
console.log(maxNumber);
```

**Output:**

```text
9007199254740991
```

### Q12. What does “safe integer” mean in JavaScript?

**Answer:** A safe integer is an integer that JavaScript can represent exactly and compare correctly using the `number` type. The safe integer range is from `-(2^53 - 1)` to `2^53 - 1`.

### Q13. What is BigInt in JavaScript?

**Answer:** `BigInt` is a primitive data type used to represent integers of arbitrary size, subject to available memory. An integer literal can be written with an `n` suffix.

**Example:**

```javascript
// Store a large integer as BigInt
var num2 = 9007199254740995n;

// Display its value and data type
console.log(num2);
console.log(typeof num2);
```

**Output:**

```text
9007199254740995n
bigint
```

### Q14. What is the difference between `number` and `bigint`?

**Answer:**

| `number` | `bigint` |
|---|---|
| Represents integers and decimal numbers | Represents integers only |
| Integers are safe only within the safe integer range | Can represent much larger integers exactly |
| Example: `100` | Example: `100n` |
| `typeof` returns `"number"` | `typeof` returns `"bigint"` |

### Q15. Why do we add `n` at the end of a number?

**Answer:** The `n` suffix identifies a BigInt literal. Without the suffix, an integer literal is normally interpreted as a `number`.

**Example:**

```javascript
// Create a number value
var regularNumber = 100;

// Create a BigInt value
var bigIntNumber = 100n;

// Display the data types
console.log(typeof regularNumber);
console.log(typeof bigIntNumber);
```

**Output:**

```text
number
bigint
```

### Q16. Can we perform arithmetic directly between a number and a BigInt?

**Answer:** No. JavaScript does not allow most arithmetic operations between `number` and `bigint` values without explicit conversion.

**Example:**

```javascript
// Create a number
var num1 = 10;

// Create a BigInt
var num2 = 10n;

// This operation throws a TypeError
// console.log(num1 + num2);
```

**Explanation:** Convert values deliberately when appropriate, keeping in mind that converting a large BigInt to a number can lose precision.

### Q17. Why might a very large integer stored as a number lose precision?

**Answer:** JavaScript's `number` type uses IEEE 754 double-precision floating-point representation. Integers outside the safe integer range may not all be represented exactly. Use BigInt when exact large-integer arithmetic is needed.

---

## 3. Symbol Questions

### Q18. What is a Symbol in JavaScript?

**Answer:** A Symbol is a primitive data type that creates a unique value. Symbols are often used as unique property keys.

**Example:**

```javascript
// Create a Symbol with a description
var userID = Symbol("id");

// Display the Symbol
console.log(userID);

// Display its data type
console.log(typeof userID);
```

**Output:**

```text
Symbol(id)
symbol
```

### Q19. If two Symbols have the same description, are they equal?

**Answer:** No. Each call to `Symbol()` creates a unique Symbol.

**Example:**

```javascript
// Create two Symbols with the same description
var firstID = Symbol("id");
var secondID = Symbol("id");

// Compare the two Symbols
console.log(firstID === secondID);
```

**Output:**

```text
false
```

---

## 4. Scenario-Based Interview Questions

### Q20. You declare a variable for a learner's email, but you do not know the email yet. What value does the variable contain?

**Answer:** If the variable is declared without assigning a value, its value is `undefined`.

```javascript
// Declare the email variable without a value
var emailID;

// Check its value
console.log(emailID);
```

**Expected output:** `undefined`

### Q21. An API response contains no middle name for a user. You want to represent that absence intentionally. Which value could you use?

**Answer:** Use `null` if that matches the API or application contract.

```javascript
// Represent the missing middle name explicitly
var middleName = null;

// Check the value
console.log(middleName);
```

**Expected output:** `null`

**Follow-up:** Why might `typeof middleName` be confusing?

**Answer:** It returns `"object"` because of JavaScript's historical `typeof null` behavior.

### Q22. You run `console.log(typeof num3)` and get `"bigint"`. What does this tell you?

**Answer:** It tells you that `num3` contains a BigInt value.

```javascript
// Store a large integer as BigInt
var num3 = 9007199254740997n;

// Display its type
console.log(typeof num3);
```

**Expected output:** `bigint`

### Q23. You need to store a very large integer identifier and preserve its exact integer value. What should you consider?

**Answer:** Consider using BigInt if the value is handled as an integer within JavaScript. For JSON APIs, remember that `JSON.stringify()` does not serialize BigInt by default; the API may instead represent large identifiers as strings.

### Q24. A learner says that `typeof middleName` proves `null` is an object. Is the learner correct?

**Answer:** No. `typeof null` returns `"object"` because of a historical quirk. `null` itself is a primitive value.

### Q25. You want to check whether a variable contains a boolean value. Which expression can you use?

**Answer:** Use `typeof variableName === "boolean"`.

```javascript
// Store a boolean value
var isEnabled = true;

// Check whether the variable contains a boolean
console.log(typeof isEnabled === "boolean");
```

**Expected output:** `true`

---

## 5. Output-Based Interview Questions

Try to predict each output before checking the answer.

### Q26. What is the output?

```javascript
// Store a negative number
var mark = -99;

// Print its type
console.log(typeof mark);
```

**Answer:**

```text
number
```

### Q27. What is the output?

```javascript
// Declare a variable without assigning a value
var emailID;

// Print its type
console.log(typeof emailID);
```

**Answer:**

```text
undefined
```

### Q28. What is the output?

```javascript
// Assign null to a variable
var middleName = null;

// Print its type
console.log(typeof middleName);
```

**Answer:**

```text
object
```

### Q29. What is the output?

```javascript
// Store an integer as BigInt
var num3 = 9007199254740997n;

// Print the value
console.log(num3);

// Print the type
console.log(typeof num3);
```

**Answer:**

```text
9007199254740997n
bigint
```

### Q30. What is the output?

```javascript
// Store a number
var regularNumber = 100;

// Store a BigInt
var bigIntNumber = 100n;

// Compare their types
console.log(typeof regularNumber === typeof bigIntNumber);
```

**Answer:**

```text
false
```

**Explanation:** The first type is `"number"` and the second is `"bigint"`.

---

## 6. Quick Revision Table

| Concept | Key point |
|---|---|
| `console.log(value)` | Displays a value |
| `typeof value` | Returns a string describing the value's type |
| `number` | Represents integers and decimal numbers |
| `string` | Represents text |
| `boolean` | Represents `true` or `false` |
| `undefined` | A declared variable has no assigned value |
| `null` | Intentionally represents the absence of a value |
| `typeof null` | Returns `"object"` due to a historical quirk |
| `Number.MAX_SAFE_INTEGER` | `9007199254740991` |
| `bigint` | Represents large integers exactly |
| `n` suffix | Identifies a BigInt integer literal |
| `symbol` | Creates a unique primitive value |

---

## 7. Practice Questions for Learners

Answer these without referring to the notes:

1. What is the difference between `console.log()` and `typeof`?
2. Name the seven primitive data types in JavaScript.
3. What is the difference between `undefined` and `null`?
4. Why does `typeof null` return `"object"`?
5. What is the value of `Number.MAX_SAFE_INTEGER`?
6. Why would you use BigInt?
7. How can you identify a BigInt literal?
8. Can you directly add a `number` and a `bigint`?
9. What is the purpose of a Symbol?
10. What is the output of `console.log(typeof true)`?

### Answer to Question 10

```text
boolean
```
