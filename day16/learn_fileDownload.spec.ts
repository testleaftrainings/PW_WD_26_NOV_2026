// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the download path.
import path from "path";

// Create a test to learn file download handling.
test("Test to learn file download", async ({ page }) => {

    // Navigate to the DemoQA Upload and Download page.
    await page.goto("https://demoqa.com/upload-download");

    // Start listening for the download event before clicking the Download button.
    const fileDownloadPromise = page.waitForEvent("download");

    // Click the Download button to trigger the file download.
    await page.getByRole("button", { name: "Download" }).click();

    // Wait for and capture the downloaded file.
    const fileDownload = await fileDownloadPromise;

    // Save the downloaded file using its original suggested filename.
    await fileDownload.saveAs(
        path.join(__dirname, `../../Download/${fileDownload.suggestedFilename()}`)
    );

    // Wait for 5 seconds so that the download result can be observed.
    await page.waitForTimeout(5000);
});