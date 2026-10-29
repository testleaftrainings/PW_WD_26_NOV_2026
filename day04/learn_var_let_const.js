// Explain the var, let, and const keywords.

// Declare a variable using the var keyword.
// var num;

// Declare a variable using the let keyword.
// let num;

// Declare a variable using the const keyword and assign a value.
// const num = 10;

// Demonstrate var: Reassignment and Redeclaration.

// Declare a variable age and assign the value 10.
// var age = 10;

// Reassign the variable age with the value 20.
// age = 20;

// Redeclare the variable age using var and assign the value 30.
// var age = 30;

// Demonstrate let: Reassignment is allowed, but redeclaration in the same scope is not allowed.

// Declare a variable age and assign the value 15.
// let age = 15;

// Reassign the variable age with the value 30.
// age = 30;

// Redeclaring age using let in the same scope causes a SyntaxError.
// let age = 30;

// Demonstrate const: Reassignment and redeclaration are not allowed.

// Declare a constant age and assign the value 10.
const age = 10;

// Reassigning age causes a TypeError.
// age = 100;

// Redeclaring age using const in the same scope causes a SyntaxError.
// const age = 200;

// In Playwright automation, const can store a web element locator or a URL that does not need reassignment.

// Print the value stored in the constant age.
console.log(age);

