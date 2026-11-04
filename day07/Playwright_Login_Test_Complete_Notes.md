# Playwright Test: Browser, Context, Page, Fixtures, and Navigation

## 1. Overview

This example demonstrates how to write a basic Playwright Test, navigate to an application, and use the built-in `page` fixture.

```typescript
// Import chromium and test from the Playwright test package.
import { chromium, test } from "@playwright/test";

// Define an asynchronous test case to verify the login page.
test("Test to verify Login", async ({ page }) => {

    // Navigate the browser page to the Salesforce login URL.
    await page.goto("https://login.salesforce.com/");

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);

});
```

## 2. Importing Modules

```typescript
// Import chromium and test from the Playwright test package.
import { chromium, test } from "@playwright/test";
```

- `@playwright/test` is Playwright's test runner package.
- `test` is used to declare test cases and access Playwright Test fixtures.
- `chromium` is a browser automation engine provided by Playwright.
- In this example, `chromium` is imported but not used because the Playwright Test runner manages the browser lifecycle when the built-in `page` fixture is used.
- Remove the unused `chromium` import when you do not need to launch a browser manually:

```typescript
// Import the test function from the Playwright test package.
import { test } from "@playwright/test";
```

## 3. Understanding the `test()` Function

```typescript
// Define an asynchronous test case with a descriptive title.
test("Test to verify Login", async ({ page }) => {

    // Test steps are written inside this callback function.

});
```

- `test()` registers a test case with the Playwright Test runner.
- The first argument is the test title: `Test to verify Login`.
- The second argument is an asynchronous callback function containing the test steps.
- The `async` keyword allows the function to use `await`.
- The test runner executes the test and reports whether it passed or failed.
- A test should contain meaningful assertions to verify the expected application behaviour. The sample code currently navigates to the page but does not assert that the login page loaded successfully.

## 4. Understanding the `page` Fixture

The parameter `{ page }` is a built-in Playwright Test fixture.

```typescript
// Receive the page fixture from the Playwright Test runner.
test("Test to verify Login", async ({ page }) => {

    // Use the provided page object to interact with the application.

});
```

- A fixture provides a test with the resources and setup it needs.
- The `page` fixture provides a Page object.
- Playwright Test automatically creates the required browser, browser context, and page for the test.
- You do not need to manually launch Chromium or create a context and page when using this fixture.
- Playwright manages the fixture lifecycle and cleans up the resources after the test.

### Fixture versus manual browser creation

| Using the `page` fixture | Manual browser creation |
|---|---|
| Browser resources are managed by Playwright Test. | You explicitly launch and manage the browser. |
| Less setup code is required. | More setup code is required. |
| Suitable for most tests written with `@playwright/test`. | Useful when you need custom browser lifecycle control or are using the Playwright library outside the test runner. |

## 5. Understanding Browser, BrowserContext, and Page

Playwright uses three important concepts:

### Browser

- Represents the browser instance, such as Chromium, Firefox, or WebKit.
- A browser can contain multiple isolated browser contexts.
- When using the `page` fixture, the test runner manages the browser instance.

### BrowserContext

- Represents an isolated browser session.
- Each context has its own cookies, local storage, session storage, and session state.
- Multiple contexts can run independently within the same browser instance.
- Context isolation helps prevent one test's browser state from affecting another test.

### Page

- Represents a browser tab or page.
- A page belongs to a BrowserContext.
- It is used to navigate to URLs, locate elements, interact with the application, and verify results.

### Relationship

```text
Browser
  |
  |-- BrowserContext 1
  |      |-- Page 1
  |      |-- Page 2
  |
  |-- BrowserContext 2
         |-- Page 3
         |-- Page 4
```

## 6. Navigating to an Application Using `page.goto()`

```typescript
// Navigate to the Salesforce login page.
await page.goto("https://login.salesforce.com/");
```

- `page.goto()` is a navigation method.
- It opens the supplied URL in the current page.
- The URL must be a valid address that the browser can navigate to.
- `await` waits for the navigation promise to complete according to the method's navigation behaviour.
- By default, `page.goto()` waits for the `load` event. The waiting behaviour can be configured using the `waitUntil` option.

Example:

```typescript
// Navigate to the application and wait for the DOM content to load.
await page.goto("https://login.salesforce.com/", {
    waitUntil: "domcontentloaded"
});
```

Common navigation-related events:

- `commit`: The response has been received and the document has started loading.
- `domcontentloaded`: The HTML document has been parsed and the DOM is ready.
- `load`: The page and its dependent resources have fired the load event.
- `networkidle`: Network connections have been idle for the required period. This is not generally recommended as the primary readiness check for tests.

## 7. Understanding Promises and `await`

Many Playwright actions are asynchronous and return Promises.

- A Promise represents the eventual completion or failure of an asynchronous operation.
- `await` pauses the execution of the current async function until the Promise settles.
- If the Promise is fulfilled, execution continues with the next statement.
- If the Promise is rejected, the error is propagated and the test normally fails unless it is handled.

Example:

```typescript
// Navigate to the Salesforce login page and wait for navigation to complete.
await page.goto("https://login.salesforce.com/");

// Continue with the next test step after the navigation promise settles.
console.log("Navigation step completed");
```

Without `await`, the next statement may execute before the navigation operation has completed.

## 8. Understanding `page.waitForTimeout()`

```typescript
// Pause test execution for 5000 milliseconds.
await page.waitForTimeout(5000);
```

- `page.waitForTimeout()` waits for the specified number of milliseconds.
- `5000` milliseconds equals 5 seconds.
- It returns a Promise, so it is normally used with `await`.
- It creates a fixed delay regardless of whether the application is already ready.

### Why fixed waits are usually discouraged

- They can make tests slower than necessary.
- They may still be insufficient when the application takes longer than the chosen delay.
- They do not confirm that a particular element or application state is ready.
- Playwright's auto-waiting and condition-based waits are generally more reliable.

Prefer waiting for a meaningful condition:

```typescript
// Wait until the username textbox is visible.
await page.getByLabel("Username").waitFor({ state: "visible" });
```

The locator in this example is illustrative; use a locator that matches the actual application's accessible label.

## 9. Adding an Assertion to Verify the Page

Navigation alone does not prove that the expected page is displayed. Add an assertion.

```typescript
// Import the expect assertion function and test function.
import { expect, test } from "@playwright/test";

// Define a test to verify the Salesforce login page.
test("Test to verify Login", async ({ page }) => {

    // Navigate to the Salesforce login page.
    await page.goto("https://login.salesforce.com/");

    // Verify that the page title contains the expected text.
    await expect(page).toHaveTitle(/Salesforce/);

});
```

- `expect` is Playwright Test's assertion library.
- `toHaveTitle()` verifies the page title.
- Playwright's web-first assertions automatically retry until the assertion passes or the timeout is reached.
- The expected title should be confirmed against the application's current title.

## 10. Complete Recommended Example

This version removes the unused `chromium` import, avoids an unnecessary fixed wait, and includes an assertion.

```typescript
// Import the expect assertion function and test function.
import { expect, test } from "@playwright/test";

// Define an asynchronous test case to verify the login page.
test("Test to verify Login", async ({ page }) => {

    // Navigate to the Salesforce login application.
    await page.goto("https://login.salesforce.com/");

    // Verify that the page title contains the expected text.
    await expect(page).toHaveTitle(/Salesforce/);

});
```

## 11. How to Execute the Test

Run these commands from the root directory of your Playwright project (the directory containing `package.json` and usually `playwright.config.ts`).

```bash
# Run all tests in the project.
npx playwright test

# Run a specific test file.
npx playwright test tests/login.spec.ts

# Run tests in headed mode to see the browser.
npx playwright test --headed

# Run a specific test file in headed mode.
npx playwright test tests/login.spec.ts --headed

# Open the HTML test report after execution.
npx playwright show-report
```

Replace `tests/login.spec.ts` with the actual path and filename of your test.

## 12. Key Takeaways

- `test()` is used to define a Playwright test case.
- `{ page }` is a built-in fixture supplied by Playwright Test.
- The `page` fixture gives access to a browser tab.
- The Browser, BrowserContext, and Page have a parent-child relationship.
- `page.goto()` navigates to a URL.
- `await` waits for an asynchronous operation's Promise to settle.
- `page.waitForTimeout()` creates a fixed delay and should not be used as a substitute for a proper readiness check.
- Assertions are necessary to verify expected application behaviour.
- The test runner manages browser resources when built-in fixtures are used.
