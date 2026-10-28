// ==========================================
// 1. SELECT A BROWSER USING IF-ELSE
// ==========================================

// Declare a variable to store the selected browser name.
var browserName = "Chrome";

// Check whether the selected browser is Chrome.
if (browserName === "Chrome") {
    console.log("Chrome browser is selected");
}

// If the selected browser is Edge, execute this block.
else if (browserName === "Edge") {
    console.log("Edge browser is selected");
}

// If the selected browser is Firefox, execute this block.
else if (browserName === "Firefox") {
    console.log("Firefox browser is selected");
}

// If none of the above conditions match, execute this block.
else {
    console.log("Invalid browser name");
}


// ==========================================
// 2. CHECK WHETHER A NUMBER IS POSITIVE,
//    NEGATIVE, OR ZERO
// ==========================================

// Declare a variable and assign the value 0.
var inputNumber = 0;

// Check whether the number is greater than zero.
if (inputNumber > 0) {
    console.log("This is a positive number");
}

// Check whether the number is less than zero.
else if (inputNumber < 0) {
    console.log("This is a negative number");
}

// If neither condition is true, the number must be zero.
else {
    console.log("The number is zero");
}