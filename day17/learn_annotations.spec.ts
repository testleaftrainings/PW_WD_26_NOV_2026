// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Create a test suite for login functionality.
test.describe("Test for login functionality", () => {

    // Configure the tests in this suite to execute sequentially.
    test.describe.configure({ mode: "serial" });

    // Create a test to verify login with valid credentials.
    test("Test to verify login with valid credentials", async ({ page }) => {

        // Navigate to the LeafTaps application login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username input using the label and following-sibling relationship.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill("Demosalesmanager");

        // Locate the Password textbox using its role and accessible name.
        await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill("crmsfa");

        // Click the Login button.
        await page.getByRole("button", { name: "Login" }).click();
    });

    // Create a test to verify login with invalid credentials.
    test("Test to verify login with invalid credentials", async ({ page }) => {

        // Increase the default timeout for this test because it may take longer to complete.
        test.slow();

        // Navigate to the LeafTaps application login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username input using the label and following-sibling relationship.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill("Demo");

        // Locate the Password textbox using its role and accessible name.
        await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill("crmsfa");

        // Click the Login button.
        await page.getByRole("button", { name: "Login" }).click();
    });

    // Create a test to verify login without providing credentials.
    test("Test to verify login without credentials", async ({ page }) => {

        // Navigate to the LeafTaps application login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username input and leave it empty.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill("");

        // Locate the Password textbox and leave it empty.
        await page.getByRole("textbox", { name: "Password" }).fill("");

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill("crmsfa");

        // Click the Login button.
        await page.getByRole("button", { name: "Login" }).click();
    });
});