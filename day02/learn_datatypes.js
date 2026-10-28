
// Declare a variable named mark and assign a negative number
var mark = -99;

// Display the data type of mark, which is number
console.log(typeof mark);

// Declare a variable named courseName and assign a string using template literals
var courseName = `Playwright`;

// Display the data type of courseName, which is string
console.log(typeof courseName);

// Declare a variable named isEnabled and assign a boolean value true
var isEnabled = true;

// Display the data type of isEnabled, which is boolean
console.log(typeof isEnabled);

// Declare a variable named emailID without assigning any value
var emailID;

// Display the data type of emailID, which is undefined
console.log(typeof emailID);

// Declare a variable named middleName and intentionally assign null to represent no value
var middleName = null;

// Display the data type of middleName, which returns object due to a JavaScript historical behavior
console.log(typeof middleName);

// Declare a variable with a large number to demonstrate the limitations of the number data type
// var rupee = 45465474164265426542652462;

// Access the largest safe integer supported by the JavaScript number data type
var maxNumber = Number.MAX_SAFE_INTEGER;

// Display the maximum safe integer, which is 9007199254740991
console.log(maxNumber);

// Assign the maximum safe integer to a variable
var num1 = 9007199254740991;

// Display the value of num1
console.log(num1);

// Declare a BigInt variable using the n suffix to represent a large integer
var num2 = 9007199254740995n;

// Display the value of num2 without losing integer precision
console.log(num2);

// Declare another BigInt variable with a large integer value
var num3 = 9007199254740997n;

// Display the data type of num3, which is bigint
console.log(typeof num3);















