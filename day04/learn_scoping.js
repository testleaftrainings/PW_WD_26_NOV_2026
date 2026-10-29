// Explain how var, let, and const variables can be accessed.

// A block is defined using curly braces {}.

// A function is defined using the function keyword followed by its name and parentheses.

// The var keyword is function-scoped.

// The let and const keywords are block-scoped.

// Declare a function named login.
function login() {

    // Declare a block-scoped variable named username inside the function.
    let username = "vineeth@gmail.com";

    // Start an if block that executes when the condition is true.
    if (true) {

        // Declare another block-scoped variable named username inside the if block.
        let username = "rajendran@gmail.com";

        // Print the username declared inside the if block.
        console.log(username);
    }

    // Print the username declared inside the function.
    console.log(username);
}

// Call the login function to execute the code.
login();

// Expected Output:
// rajendran@gmail.com
// vineeth@gmail.com