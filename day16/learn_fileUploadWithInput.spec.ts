// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the file path.
import path from "path";

// Create a test to learn file upload using an input tag.
test("Test to learn file upload with input tag", async ({ page }) => {

    // Navigate to the DemoQA Upload and Download page.
    await page.goto("https://demoqa.com/upload-download");

    // Locate the file input and directly upload the file.
    await page
        .getByRole("button", { name: "Choose File" })
        .setInputFiles(path.join(__dirname, "../../Data/TestleafLogo.png"));

    // Wait for 5 seconds so that the upload result can be observed.
    await page.waitForTimeout(5000);
});