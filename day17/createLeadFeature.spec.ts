// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Configure the test to reuse the previously saved login session.
test.use({
    storageState: "SSData/login_leaftaps.json"
});

// Create an asynchronous test case to verify the Create Lead functionality.
test("Test to verify Create Lead function", async ({ page }) => {

    // Navigate directly to the Leaftaps CRM/SFA page using the saved login session.
    await page.goto(
        "https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL440179960772"
    );

    // Click the Leads link using exact text matching.
    await page.getByText("Leads", { exact: true }).click();

    // Click the Create Lead link using exact text matching.
    await page.getByText("Create Lead", { exact: true }).click();

    // Enter the company name into the Company Name field.
    await page.locator("#createLeadForm_companyName").fill("Testleaf");

    // Enter the first name into the First Name field.
    await page.locator("#createLeadForm_firstName").fill("Vineeth");

    // Enter the last name into the Last Name field.
    await page.locator("#createLeadForm_lastName").fill("Rajendran");

    // Select multiple options from the Data Source dropdown using their index values.
    await page.locator("#createLeadForm_dataSourceId").selectOption([
        { index: 0 },
        { index: 3 },
        { index: 5 }
    ]);

    // Click the Create Lead button.
    // await page.locator('[name="submitButton"]').click();

    // Pause the test execution for 5 seconds.
    await page.waitForTimeout(5000);
});