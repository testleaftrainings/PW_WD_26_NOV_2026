// Create a LoginPage class that acts as a blueprint for login-related functionality.
class LoginPage {

    // Define a username property for the LoginPage object.
    username: string = "Demo";

    // Define a password property for the LoginPage object.
    password: string = "crm";

    // Define a method to enter the username.
    enterUsername() {

        // Print a message when the username is entered.
        console.log("Username is entered");
    }
}

// Create an object using the LoginPage class.
let userCredentials = new LoginPage();