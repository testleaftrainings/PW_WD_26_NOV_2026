# Playwright LeafTaps Login – Complete Reference Notes

## 1. Overview

This document covers the theory and Playwright concepts used in the LeafTaps login test, including fixtures, Browser/BrowserContext/Page architecture, navigation, `async/await`, locators, built-in Playwright locators, `fill()`, `click()`, auto-waiting, fixed waits, and assertions.

## 2. Original Test

```typescript
// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Create an asynchronous test case to verify the Create Lead functionality.
test("Test to verify the create lead", async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Enter the username into the Username textbox.
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    // Enter the password into the Password textbox.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Click the Login button to submit the login form.
    await page.getByRole("button", { name: "Login" }).click();

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);

});
```

## 3. What Is Playwright?

Playwright is an end-to-end browser automation and testing framework developed by Microsoft.

It supports:

- Chromium
- Firefox
- WebKit
- UI automation
- API testing
- Cross-browser testing
- Device emulation
- Network interception
- Authentication and session handling
- Screenshots and videos
- Tracing
- Parallel execution
- Test reporting

## 4. `@playwright/test`

```typescript
// Import the test function from the Playwright Test package.
import test from "@playwright/test";
```

The `@playwright/test` package provides the Playwright Test runner.

It provides:

- `test()`
- `expect()`
- Fixtures
- Hooks
- Configuration
- Retries
- Parallel execution
- Reporting

A commonly used import style is:

```typescript
// Import the test function and expect assertion from Playwright Test.
import { test, expect } from "@playwright/test";
```

Use the import style supported by the installed Playwright version and project setup.

## 5. `test()` Function

```typescript
// Define an asynchronous test case.
test("Test to verify the create lead", async ({ page }) => {

});
```

### Components

- `test` defines a test case.
- The string is the test title.
- `async` allows asynchronous Playwright operations.
- `{ page }` is a built-in Playwright Test fixture.

## 6. Fixtures

A fixture provides the test with the resources and setup required for execution.

Common built-in fixtures:

| Fixture | Purpose |
|---|---|
| `page` | Provides a Page object |
| `context` | Provides a BrowserContext |
| `browser` | Provides a Browser instance |
| `request` | Provides an APIRequestContext |
| `browserName` | Provides the current browser name |

### Page Fixture

```typescript
// Use the built-in page fixture.
test("Login test", async ({ page }) => {

    // Navigate using the supplied page.
    await page.goto("https://example.com");

});
```

The Playwright Test runner manages the required browser resources for the fixture.

## 7. Browser, BrowserContext, and Page

### Browser

Represents the browser instance, such as Chromium, Firefox, or WebKit.

### BrowserContext

Represents an isolated browser session with its own cookies, local storage, session storage, permissions, and other browser state.

### Page

Represents a browser tab.

### Architecture

```text
Browser
   |
   +--- BrowserContext
           |
           +--- Page
           +--- Page
```

A browser can contain multiple contexts, and each context can contain multiple pages.

## 8. `page.goto()`

```typescript
// Navigate to the LeafTaps application.
await page.goto("https://leaftaps.com/opentaps/control/main");
```

`page.goto()` navigates the current page to the specified URL.

### Important points

- It is asynchronous.
- It returns a Promise.
- `await` waits for the navigation operation.
- By default, navigation waits for the `load` event.

Example:

```typescript
// Navigate and wait for DOM content to load.
await page.goto("https://example.com", {
    waitUntil: "domcontentloaded"
});
```

Common navigation lifecycle options include `commit`, `domcontentloaded`, `load`, and `networkidle`.

## 9. `async` and `await`

Playwright APIs are asynchronous.

```typescript
// Navigate to the application and wait for navigation to complete.
await page.goto("https://example.com");

// Continue after the navigation Promise settles.
console.log("Navigation completed");
```

`await` waits for the Promise returned by the Playwright operation.

## 10. What Is a Locator?

A locator identifies an element on a web page.

Example:

```typescript
// Locate the Username textbox using its accessible role and name.
page.getByRole("textbox", { name: "Username" });
```

Locators provide:

- Reliable element identification
- Auto-waiting
- Retry behaviour
- Readable test code
- Better maintainability

## 11. Built-in Playwright Locators

### 11.1 `getByRole()`

Locates elements using their accessible role and accessible name.

```typescript
// Locate the Login button using its role and accessible name.
page.getByRole("button", { name: "Login" });
```

Common roles include:

- `button`
- `textbox`
- `checkbox`
- `radio`
- `link`
- `heading`
- `combobox`
- `listbox`
- `option`
- `tab`
- `menuitem`

Example:

```typescript
// Locate the Username textbox.
page.getByRole("textbox", { name: "Username" });

// Locate the Login button.
page.getByRole("button", { name: "Login" });
```

`getByRole()` is generally preferred when suitable because it uses accessibility semantics.

### 11.2 `getByText()`

Locates an element using visible text.

```typescript
// Locate an element containing the text "Create Lead".
page.getByText("Create Lead");
```

### 11.3 `getByLabel()`

Locates a form control associated with a label.

```typescript
// Locate the textbox associated with the Username label.
page.getByLabel("Username");
```

### 11.4 `getByPlaceholder()`

Locates an input using placeholder text.

```typescript
// Locate an input using its placeholder.
page.getByPlaceholder("Enter username");
```

### 11.5 `getByAltText()`

Locates an image using its alternative text.

```typescript
// Locate an image using its alt text.
page.getByAltText("Company Logo");
```

### 11.6 `getByTitle()`

Locates an element using its `title` attribute.

```typescript
// Locate an element using its title attribute.
page.getByTitle("Settings");
```

### 11.7 `getByTestId()`

Locates an element using a test ID.

Example HTML:

```html
<button data-testid="login-button">Login</button>
```

Playwright:

```typescript
// Locate the Login button using its test ID.
page.getByTestId("login-button");
```

The test ID attribute can be configured:

```typescript
// Configure Playwright to use data-pw as the test ID attribute.
use: {
    testIdAttribute: "data-pw"
}
```

## 12. CSS Locator

Playwright supports CSS selectors.

```typescript
// Locate an element using a CSS ID selector.
page.locator("#username");

// Locate an element using a CSS class selector.
page.locator(".login-button");

// Locate an input using its name attribute.
page.locator('input[name="USERNAME"]');
```

## 13. XPath Locator

Playwright supports XPath.

```typescript
// Locate an element using XPath.
page.locator('//input[@name="USERNAME"]');
```

Prefer semantic or stable locators when available instead of long or fragile XPath expressions.

## 14. Locator Preference

A practical preference is:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByAltText()`
6. `getByTitle()`
7. `getByTestId()`
8. CSS
9. XPath

The best locator is the one that is stable, unique, readable, and maintainable for the application.

## 15. `getByRole()` in the LeafTaps Test

Username:

```typescript
// Locate the Username textbox and enter the username.
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
```

Password:

```typescript
// Locate the Password textbox and enter the password.
await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");
```

Login:

```typescript
// Locate the Login button and click it.
await page.getByRole("button", { name: "Login" }).click();
```

## 16. `fill()` Method

```typescript
// Fill the Username textbox.
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
```

`fill()` enters text into an input and replaces the existing value.

Syntax:

```typescript
await locator.fill("value");
```

## 17. `fill()` vs `type()`

### `fill()`

```typescript
await locator.fill("Hello");
```

- Clears existing content.
- Sets the requested value.
- Generally preferred for normal form entry.

### `type()`

```typescript
await locator.type("Hello");
```

- Types characters into the element.
- Useful when character-by-character typing behaviour is specifically required.

## 18. `click()` Method

```typescript
// Click the Login button.
await page.getByRole("button", { name: "Login" }).click();
```

Playwright performs actionability checks before clicking.

These checks include conditions such as:

- Visible
- Stable
- Able to receive events
- Enabled where applicable

## 19. Playwright Auto-Waiting

Playwright automatically waits for elements to become actionable before many actions.

Example:

```typescript
// Click the Login button after Playwright determines it is actionable.
await page.getByRole("button", { name: "Login" }).click();
```

This reduces the need for arbitrary sleeps.

## 20. `waitForTimeout()`

The original test contains:

```typescript
// Pause the test execution for 5000 milliseconds.
await page.waitForTimeout(5000);
```

5000 milliseconds equals 5 seconds.

### Why fixed waits are usually discouraged

- They can make tests slower.
- They do not verify application readiness.
- They may be too short for a slow environment.
- They may be unnecessarily long for a fast environment.

Prefer a meaningful condition.

Example:

```typescript
// Wait until the Create Lead link becomes visible.
await page.getByRole("link", { name: "Create Lead" }).waitFor({
    state: "visible"
});
```

Use a locator that actually exists in the application.

## 21. Assertions

The original test does not contain an assertion.

A complete functional test should normally validate the expected result.

```typescript
// Import the test function and expect assertion.
import { test, expect } from "@playwright/test";

// Create a login test.
test("LeafTaps Login", async ({ page }) => {

    // Navigate to the LeafTaps application.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Enter the username.
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    // Enter the password.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Click the Login button.
    await page.getByRole("button", { name: "Login" }).click();

    // Verify the expected post-login URL.
    await expect(page).toHaveURL(/opentaps/);

});
```

The final assertion should be changed to the application's actual post-login condition if a more reliable business-specific validation is available.

## 22. Web-First Assertions

Examples:

```typescript
// Verify that the page title contains expected text.
await expect(page).toHaveTitle(/LeafTaps/);

// Verify that the URL contains expected text.
await expect(page).toHaveURL(/opentaps/);

// Verify that an element is visible.
await expect(locator).toBeVisible();

// Verify expected text.
await expect(locator).toHaveText("Expected Text");

// Verify an input value.
await expect(locator).toHaveValue("Expected Value");
```

Web-first assertions automatically retry until the condition passes or the assertion timeout is reached.

## 23. Fixed Wait vs Condition-Based Wait

| Fixed Wait | Condition-Based Wait |
|---|---|
| `waitForTimeout()` | Locator wait/assertion |
| Fixed duration | Waits for actual condition |
| Can be too short | Retries until timeout |
| Can be unnecessarily long | Usually more efficient |
| Does not validate readiness | Validates application state |

## 24. Better Version of the Test

```typescript
// Import the test function and expect assertion.
import { test, expect } from "@playwright/test";

// Create an asynchronous test case to verify LeafTaps login.
test("Test to verify the create lead", async ({ page }) => {

    // Navigate to the LeafTaps application.
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Enter the username.
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    // Enter the password.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Click the Login button.
    await page.getByRole("button", { name: "Login" }).click();

    // Verify the expected post-login state.
    await expect(page).toHaveURL(/opentaps/);

});
```

## 25. Test Execution

```bash
# Run all Playwright tests.
npx playwright test

# Run a specific test file.
npx playwright test tests/login.spec.ts

# Run tests in headed mode.
npx playwright test --headed

# Open the HTML report.
npx playwright show-report
```

Replace the test path with the actual file location.

## 26. Important Best Practices

1. Prefer `getByRole()` and other semantic locators where appropriate.
2. Use stable test IDs when the application provides them.
3. Avoid fragile XPath.
4. Avoid unnecessary `waitForTimeout()` calls.
5. Use auto-waiting and condition-based waits.
6. Use web-first assertions.
7. Keep locators unique and readable.
8. Use fixtures instead of manually creating browser resources when appropriate.
9. Do not hard-code real credentials in source code.
10. Validate business outcomes rather than only performing UI actions.

## 27. Quick Reference

| Method / Concept | Purpose |
|---|---|
| `test()` | Define a test |
| `page` | Browser tab fixture |
| `context` | Browser session fixture |
| `browser` | Browser instance fixture |
| `page.goto()` | Navigate |
| `getByRole()` | Locate by role/name |
| `getByLabel()` | Locate by label |
| `getByText()` | Locate by visible text |
| `getByPlaceholder()` | Locate by placeholder |
| `getByAltText()` | Locate image by alt text |
| `getByTitle()` | Locate by title |
| `getByTestId()` | Locate by test ID |
| `locator()` | Generic locator API |
| `fill()` | Fill an input |
| `click()` | Click an element |
| `waitForTimeout()` | Fixed delay |
| `expect()` | Assertion |
| `toBeVisible()` | Verify visibility |
| `toHaveText()` | Verify text |
| `toHaveValue()` | Verify input value |
| `toHaveURL()` | Verify URL |
| `toHaveTitle()` | Verify title |
