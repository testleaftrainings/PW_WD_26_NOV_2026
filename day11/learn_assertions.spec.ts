// Import the expect and test functions from the Playwright Test package.
import { expect, test } from "@playwright/test";

// Create an asynchronous test case to learn and practice Playwright assertions.
test("Test to learn Assertions", async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Validate the title of the current page using a soft assertion.
    // The test continues execution even if this assertion fails.
    await expect.soft(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat", { timeout: 10000 });

    // Validate the page title using a regular expression.
    // await expect(page).toHaveTitle(/Automation Platform/, { timeout: 10000 });

    // Validate that the current page URL contains the text "opentaps".
    await expect(page).toHaveURL(/opentaps/);

    // Create a locator for the Username textbox using its accessible role and name.
    let usernameField = page.getByRole("textbox", { name: "Username" });

    // Validate that the Username textbox is visible on the page.
    await expect(usernameField).toBeVisible();

    // Create a locator for the Username label using XPath.
    let usernameLabel = page.locator("//label[text()='Username']");

    // Validate that the Username label contains the expected exact text.
    await expect(usernameLabel).toHaveText("Username");

    // Print a message to the console after all assertions are completed.
    console.log("Code completed");

});