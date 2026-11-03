// 1. Declare Strings Using Literals

// Declare a string variable named course1 using double quotes.
let course1 = "playwright";

// Declare another string variable named course3 using double quotes.
let course3 = "playwright";


// 2. Declare Strings Using String Object

// Create a String object named course2 using the String constructor.
let course2 = new String("playwright");

// Create another String object named course4 using the String constructor.
let course4 = new String("playwright");


// 3. Compare Strings Using == and ===

// Compare course1 and course2 based on their values using the loose equality operator.
console.log(course1 == course2);

// Compare course1 and course2 based on their values and data types using the strict equality operator.
console.log(course1 === course2);


// 4. Declare Strings Using Different Quote Styles

// Declare a string using backticks.
let str = `November`;

// Declare a string containing double quotes inside single quotes.
let str1 = '"Diwali sales"';

// Declare a string containing an apostrophe using double quotes.
let str2 = "Men's Shirts";


// 5. Concatenate Two Strings

// Declare a variable named firstName and assign the value "Rajesh".
let firstName = "Rajesh";

// Declare a variable named lastName and assign the value "Kumar".
let lastName = "Kumar";

// Combine firstName and lastName with a space and print the result.
console.log(firstName + " " + lastName);

// Combine multiple strings and variables to display a complete sentence.
console.log("My firstName is " + firstName + " and Lastname is " + lastName);


// 6. Use Template Literals

// Combine variables and string values using template literal syntax.
console.log(`My firstname is ${firstName} and My lastname is ${lastName}`);


// 7. Find the Length of a String

// Declare a string variable named batchName and assign the value "Playwright".
let batchName = "Playwright";

// Print the total number of characters in the batchName string.
console.log(batchName.length);


// 8. Split a String Using split()

// Declare a string variable containing the batch name and month.
let batch = "Playwright Nov 2026";

// Split the batch string wherever the character "u" occurs and store the result in an array.
let arr = batch.split("u");

// Print the second element of the resulting array.
console.log(arr[1]);


// 9. Extract a Portion of a String Using substring()

// Declare a string variable named companyName and assign the value "Testleaf".
let companyName = "Testleaf";

// Extract characters from index 1 up to, but not including, index 4.
let splitedString = companyName.substring(1, 4);

// Print the extracted substring.
console.log(splitedString);


// 10. Retrieve a Character Using charAt()

// Declare a string variable named nameOfCourse and assign the value "Vineeth".
let nameOfCourse = "Vineeth";

// Retrieve and print the character present at index 2.
console.log(nameOfCourse.charAt(2));


// 11. Find the Index of a Character Using indexOf()

// Find and print the first occurrence index of the character "e" in nameOfCourse.
console.log(nameOfCourse.indexOf("e"));


// 12. Reverse a String Using a For Loop

// Declare a string variable named name and assign the value "Vineeth".
let name = "Vineeth";

// Create an empty string to store the reversed characters.
let reversedString = "";

// Iterate through the string from the last valid index to the first index.
for (let i = name.length - 1; i >= 0; i--) {

    // Append the character at the current index to reversedString.
    reversedString = reversedString + name.charAt(i);
}

// Print the reversed string to the console.
console.log(reversedString);