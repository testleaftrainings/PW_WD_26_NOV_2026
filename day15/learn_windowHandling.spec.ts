// Import the test function from Playwright Test.
import test from "@playwright/test";

// Create a test to verify window handling.
test("test to verify window handling", async ({ page, context }) => {

    // Navigate to the Amazon application.
    await page.goto("https://www.amazon.in/");

    // Locate the Amazon search box using its placeholder.
    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles");

    // Locate the Search button using XPath and click it.
    await page.locator("//input[@id='nav-search-submit-button']").click();

    // Listen for a new browser page to be opened.
    const newPagePromise = context.waitForEvent("page");

    // Click the first product from the search results.
    await page
        .locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/span")
        .first()
        .click();

    // Wait for the newly opened page to be available.
    const newPage = await newPagePromise;

    // Wait until the newly opened page finishes loading.
    await newPage.waitForLoadState();

    // Click the "Laptops & Accessories" text in the newly opened page.
    await newPage.getByText("Laptops & Accessories", { exact: true }).click();

    // Bring the original Amazon page back to the foreground.
    await page.bringToFront();

    // Locate the Amazon search box on the original page.
    await page.getByPlaceholder("Search Amazon.in").fill("Home appliances");

    // Locate the Search button on the original page and click it.
    await page.locator("//input[@id='nav-search-submit-button']").click();
});