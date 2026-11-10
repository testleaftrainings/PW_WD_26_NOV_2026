// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Create an asynchronous test case to verify the Create Lead functionality.
test("Test to verify Create Lead function", async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Enter the username into the Username textbox.
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    // Enter the password into the Password textbox.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Enter the password using the label-based locator as an alternative approach.
    // await page.getByLabel("Password").fill("crmsfa");

    // Click the Login button.
    await page.getByRole("button", { name: "Login" }).click();

    // Click the CRM/SFA link.
    await page.getByText("CRM/SFA").click();

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

    // Select a value from the Source dropdown.
    // The selectOption() method is used when the dropdown is implemented using a <select> tag.

    // Select an option using its value attribute.
    // await page.locator("#createLeadForm_dataSourceId").selectOption({ value: "LEAD_EXISTCUST" });

    // Select an option using its visible label.
    // await page.locator("#createLeadForm_dataSourceId").selectOption({ label: "Public Relations" });

    // Select multiple options using their index values.
    await page.locator("#createLeadForm_dataSourceId").selectOption([
        { index: 0 },
        { index: 3 },
        { index: 5 }
    ]);

    // Click the Create Lead button.
    // await page.locator('[name="submitButton"]').click();

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);

});