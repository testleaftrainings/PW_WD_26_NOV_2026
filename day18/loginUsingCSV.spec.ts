// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import the file system module to read the CSV file.
import fs from "fs";

// Import the parse function to convert CSV data into JavaScript objects.
import { parse } from "csv-parse/sync";

// Read the CSV file as UTF-8 text.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");

// Convert the CSV text into an array of JavaScript objects.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

// Iterate through each record available in the CSV file.
for (let i = 0; i < csvRecords.length; i++) {

    // Create a separate Playwright test for each CSV record.
    test(`Test to verify login function ${i + 1}`, async ({ page }) => {

        // Navigate to the URL available in the current CSV record.
        await page.goto(csvRecords[i].url);

        // Locate the Username field and enter the username from the current CSV record.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(csvRecords[i].username);

        // Locate the Password textbox and enter the password from the current CSV record.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(csvRecords[i].password);

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill(csvRecords[i].password);

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
}