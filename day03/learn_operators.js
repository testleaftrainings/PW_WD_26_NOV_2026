// ==========================================
// 1. ASSIGNMENT OPERATOR
// ==========================================

// The assignment operator (=) assigns a value to a variable.
var age = 10;

// Prints the value stored in the age variable.
console.log(age); // Output: 10


// ==========================================
// 2. ARITHMETIC OPERATORS
// ==========================================

// Declare two variables to perform arithmetic operations.
var a = 10;
var b = 3;

// Addition (+) adds two numbers.
console.log(a + b); // Output: 13

// Subtraction (-) subtracts the second number from the first.
console.log(a - b); // Output: 7

// Multiplication (*) multiplies two numbers.
console.log(a * b); // Output: 30

// Exponentiation (**) raises the first number to the power of the second.
console.log(a ** b); // Output: 1000

// Division (/) divides the first number by the second.
console.log(a / b); // Output: 3.3333333333333335

// Math.floor() rounds the division result down to the nearest integer.
console.log(Math.floor(a / b)); // Output: 3

// Modulus (%) returns the remainder after division.
console.log(a % b); // Output: 1


// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================

// Declare two variables for comparison.
var x = 10;
var y = 20;

// Less than (<) checks whether x is smaller than y.
console.log(x < y); // Output: true

// Greater than (>) checks whether x is greater than y.
console.log(x > y); // Output: false

// Less than or equal to (<=) checks whether x is smaller than or equal to y.
console.log(x <= y); // Output: true

// Greater than or equal to (>=) checks whether x is greater than or equal to y.
console.log(x >= y); // Output: false


// ==========================================
// 4. EQUALITY OPERATORS
// ==========================================

// Declare a Boolean variable and assign the value true.
var p = true;

// Declare a number variable and assign the value 10.
var q = 10;

// Double equality (==) compares values and may convert their data types.
console.log(p == q); // Output: false

// Triple equality (===) compares both value and data type without type conversion.
console.log(p === q); // Output: false

// Double equality converts the string "10" to a number for this comparison.
console.log(10 == "10"); // Output: true

// Triple equality does not treat a number and a string as the same type.
console.log(10 === "10"); // Output: false


// ==========================================
// 5. INCREMENT AND DECREMENT OPERATORS
// ==========================================

// Declare a variable and assign the value 5.
var v = 5;

// Post-increment (v++) returns the current value first and then increases it by 1.
console.log(v++); // Output: 5

// The value of v is now 6 after post-increment.
console.log(v); // Output: 6

// Pre-increment (++v) increases the value first and then returns the updated value.
console.log(++v); // Output: 7

// Post-decrement (v--) returns the current value first and then decreases it by 1.
console.log(v--); // Output: 7

// The value of v is now 6 after post-decrement.
console.log(v); // Output: 6

// Pre-decrement (--v) decreases the value first and then returns the updated value.
console.log(--v); // Output: 5


// ==========================================
// 6. LOGICAL OPERATORS
// ==========================================

// Declare two variables to check logical conditions.
var x = 10;
var y = 20;

// Logical AND (&&) returns true only when both conditions are true.
// Here, x > y is false and x < y is true.
// Since both conditions are not true, the final result is false.
console.log(x > y && x < y); // Output: false

// Logical OR (||) returns true when at least one condition is true.
// Here, x > y is false and x < y is true.
// Since one condition is true, the final result is true.
console.log(x > y || x < y); // Output: true

// Logical NOT (!) reverses the Boolean result.
// Here, x < y is true, so !true becomes false.
console.log(!(x < y)); // Output: false