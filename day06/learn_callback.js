// 1. Define a Function with a Callback Parameter

// Define a function named enterUsername that accepts another function as a parameter.
function enterUsername(callback) {

    // Print a message indicating that the username has been entered.
    console.log("Username entered");

    // Invoke the callback function passed as an argument.
    callback();
}


// 2. Define the Callback Function

// Define a function named enterPassword without any parameters.
function enterPassword() {

    // Print a message indicating that the password has been entered.
    console.log("Password entered");
}


// 3. Call the Function by Passing Another Function as an Argument

// Call enterUsername and pass enterPassword as a callback function.
enterUsername(enterPassword);