import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Frame page.
    await page.goto("https://leafground.com/frame.xhtml");

    // Create a reference to the outer iframe.
    // Then locate the inner iframe inside the outer iframe.
    const frameRef = page
        .frameLocator("[src='page.xhtml']")
        .frameLocator("[src='framebutton.xhtml']");

    // Locate the "Click Me" button inside the inner iframe and click it.
    await frameRef.getByRole("button", { name: "Click Me" }).click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});