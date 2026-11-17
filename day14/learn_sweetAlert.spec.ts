import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Alert page.
    await page.goto("https://leafground.com/alert.xhtml");

    // Click the button associated with the "Sweet Alert (Simple Dialog)" section.
    await page
        .locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button")
        .click();

    // Click the "Dismiss" button displayed in the Sweet Alert.
    await page.locator("//span[text()='Dismiss']").click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});