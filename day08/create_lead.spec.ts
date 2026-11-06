// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Create an asynchronous test case to verify the Create Lead functionality.
test("Test to verify the create lead", async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Enter the username into the Username textbox.
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    // Enter the password into the Password textbox.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Click the Login button to submit the login form.
    await page.getByRole("button", { name: "Login" }).click();

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);

});