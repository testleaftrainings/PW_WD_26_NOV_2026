import test from "@playwright/test";

// Create a Playwright test.
test("Test to learn alert", async ({ page }) => {

    // Navigate to the LeafGround Alert page.
    await page.goto("https://leafground.com/alert.xhtml");

    // Listen for any dialog that appears on the page.
    page.on("dialog", async (dialogAlert) => {

        // Check whether the dialog is a prompt dialog.
        if (dialogAlert.type() === "prompt") {

            // Enter the given text into the prompt and accept it.
            await dialogAlert.accept("Vineeth Rajendran");
        }

        // Check whether the dialog is a confirm dialog.
        else if (dialogAlert.type() === "confirm") {

            // Dismiss the confirm dialog by clicking Cancel/No.
            await dialogAlert.dismiss();
        }

        // Check whether the dialog is a simple alert dialog.
        else if (dialogAlert.type() === "alert") {

            // Dismiss the alert dialog.
            await dialogAlert.dismiss();
        }
    });

    // Click the first Show button to trigger the simple alert.
    await page.locator("//span[text()='Show']").first().click();

    // Click the second Show button to trigger the confirm dialog.
    await page.locator("//span[text()='Show']").nth(1).click();

    // Click the fifth Show button to trigger the prompt dialog.
    await page.locator("//span[text()='Show']").nth(4).click();

    // Wait for 10 seconds.
    await page.waitForTimeout(10000);
});