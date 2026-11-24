// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import the login test data from the JSON file.
import loginData from "../../Data/loginData.json";

// Iterate through each login data object in the JSON file.
for (let i = 0; i < loginData.length; i++) {

    // Create a separate Playwright test for each login data object.
    test(`Test to verify login function ${i + 1}`, async ({ page }) => {

        // Navigate to the URL available in the current login data object.
        await page.goto(loginData[i].url);

        // Locate the Username field using the label relationship and enter the username.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(loginData[i].username);

        // Locate the Password textbox and enter the password.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(loginData[i].password);

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill(loginData[i].password);

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
}