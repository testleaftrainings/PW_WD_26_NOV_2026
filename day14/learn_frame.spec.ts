import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Frame page.
    await page.goto("https://leafground.com/frame.xhtml");

    // Create a reference to the iframe using its src attribute.
    const frameReference = page.frameLocator("[src='default.xhtml']");

    // Locate the "Click Me" button inside the iframe and click it.
    await frameReference.getByRole("button", { name: "Click Me" }).click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});