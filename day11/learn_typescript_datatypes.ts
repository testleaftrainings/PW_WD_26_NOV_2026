// Declare a variable named response with the any type and assign the boolean value true.
let response: any = true;

// Assign a number value to the same variable.
// The any type allows the variable to hold values of different types.
response = 1000;

// Attempt to call the toUpperCase() method on the response variable.
// This will cause a runtime error because response currently contains a number.
console.log(response.toUpperCase());


// Declare a variable named resp with the unknown type and assign a string value.
let resp: unknown = "Vineeth";

// Check whether the value stored in resp is a string before performing a string operation.
if (typeof resp === "string") {

    // Convert the string value to uppercase and print the result.
    console.log(resp.toUpperCase());
}


// Declare a tuple named numbers with three number elements followed by one string element.
let numbers: [number, number, number, string] = [10, 20, 30, "Vineeth"];

// Declare an array named nums that can contain only number values.
let nums: number[] = [10, 20, 30];


// Declare a tuple named ages with a fixed type and position for each element.
// The first element must be a number, the second must be a string, and the third must be a number.
let ages: [number, string, number] = [100, "Test", 200];
