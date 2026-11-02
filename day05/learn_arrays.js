
// 1. Declare Individual Variables

// Declare a variable named name1 and assign the string value "Maha".
let name1 = "Maha";

// Declare a variable named name2 and assign the string value "Rajesh".
let name2 = "Rajesh";

// Declare a variable named name3 and assign the string value "Barani".
let name3 = "Barani";

// Declare a variable named name4 and assign the string value "Vinoth".
let name4 = "Vinoth";

// Declare a variable named nam5 and assign the string value "Kumar".
let nam5 = "Kumar";


// 2. Declare and Initialize an Array

// Create an array named numbers containing five different numbers.
let numbers = [20, 40, 50, 10, 100];


// 3. Check the Array Data Type

// Print the data type of the numbers variable to the console.
console.log(typeof numbers);


// 4. Access an Array Element Using Its Index

// Print the element stored at index 2 of the numbers array.
console.log(numbers[2]);


// 5. Find the Length of an Array

// Print the total number of elements in the numbers array.
console.log(numbers.length);


// 6. Print All Array Elements Using a For Loop

// Iterate through the numbers array using its length as the loop boundary.
for (let i = 0; i < numbers.length; i++) {

    // Print the element at the current index.
    console.log(numbers[i]);
}


// 7. Declare and Initialize an Ages Array

// Create an array named ages containing five different age values.
let ages = [25, 70, 20, 30, 5];


// 8. Add Elements to the End Using push()

// Add 100 and 50 to the end of the ages array.
ages.push(100, 50);

// Print the updated ages array to the console.
console.log(ages);


// 9. Add Elements to the Beginning Using unshift()

// Add 5 and 10 to the beginning of the ages array.
ages.unshift(5, 10);

// Print the updated ages array to the console.
console.log(ages);


// 10. Remove the Last Element Using pop()

// Remove the last element from the ages array.
ages.pop();

// Print the updated ages array to the console.
console.log(ages);


// 11. Remove the First Element Using shift()

// Remove the first element from the ages array.
ages.shift();

// Print the updated ages array to the console.
console.log(ages);


// 12. Remove Elements Using splice()

// Remove four elements starting from index 2 of the ages array.
ages.splice(2, 4);

// Print the updated ages array to the console.
console.log(ages);


// 13. Declare and Initialize a Scores Array

// Create an array named scores containing seven different numbers.
let scores = [10, 30, 60, 100, 20, 70, 5];


// 14. Sort Array Elements in Descending Order

// Sort the scores array from highest to lowest using a comparison function.
scores.sort((a, b) => b - a);

// Print the sorted scores array to the console.
console.log(scores);
