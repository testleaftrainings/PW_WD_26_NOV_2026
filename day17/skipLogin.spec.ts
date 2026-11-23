// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Create an asynchronous test case to verify the Create Lead functionality.
test("Test to verify Create Lead function", async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto("/opentaps/");

    // Locate the Username input using the label and following-sibling relationship.
    await page
        .locator("//label[text()='Username']/following-sibling::input")
        .fill("Demosalesmanager");

    // Enter the password into the Password textbox using the accessible role and name.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Enter the password using the label-based locator as an alternative approach.
    // await page.getByLabel("Password").fill("crmsfa");

    // Click the Login button.
    await page.getByRole("button", { name: "Login" }).click();

    // Click the CRM/SFA link.
    await page.getByText("CRM/SFA").click();

    // Save the current browser context storage state for reuse in other tests.
    await page.context().storageState({
        path: "SSData/login_leaftaps.json"
    });
});