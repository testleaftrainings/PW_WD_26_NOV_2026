// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import dotenv to load environment variables from an environment file.
import dotenv from "dotenv";

// Load environment variables from the .env.dev file.
dotenv.config({ path: ".env.dev" });

// Create a Playwright test for the login functionality.
test("Test to verify login function", async ({ page }) => {

    // Navigate to the application URL configured in playwright.config.ts.
    await page.goto("/");

    // Locate the Username field and enter the username from the environment variable.
    await page
        .locator("//label[text()='Username']/following-sibling::input")
        .fill(process.env.Leaftaps_username!);

    // Locate the Password textbox and enter the password from the environment variable.
    await page
        .getByRole("textbox", { name: "Password" })
        .fill(process.env.Leaftaps_Password!);

    // Locate the Login button and click it.
    await page.getByRole("button", { name: "Login" }).click();
});