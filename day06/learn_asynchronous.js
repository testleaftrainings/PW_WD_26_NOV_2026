// 1. Execute the First Synchronous Statement

// Print a message indicating that the username is entered.
console.log("Code for enter username");


// 2. Execute an Asynchronous Operation Using setTimeout()

// Schedule the callback function to execute after 5000 milliseconds (5 seconds).
setTimeout(() => {

    // Print a message indicating that the password is entered.
    console.log("Code for enter password");

}, 5000);


// 3. Execute the Next Synchronous Statement

// Print a message indicating that the login button is clicked.
console.log("Code for click login button");