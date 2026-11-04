# Playwright Interview Questions – Test, Fixtures, Browser, Page, and Navigation

## Section 1: Basic Conceptual Questions

### 1. What is Playwright?
**Answer:** Playwright is an open-source browser automation framework used for end-to-end testing. It supports Chromium, Firefox, and WebKit and provides features such as auto-waiting, browser contexts, multiple tabs, and cross-browser testing.

### 2. What is the purpose of the `@playwright/test` package?
**Answer:** It provides the Playwright Test runner, including test declarations, fixtures, assertions, hooks, parallel execution, and reporting.

### 3. What is the purpose of the `test()` function?
**Answer:** The `test()` function is used to define a test case. It accepts a test title and a callback function containing the test steps.

### 4. What is the purpose of the `page` fixture?
**Answer:** The `page` fixture provides a Page object that allows the test to navigate to a URL, locate elements, interact with the application, and perform validations.

### 5. Is `page` a user-defined variable in the sample test?
**Answer:** No. It is a built-in Playwright Test fixture injected into the test callback by the Playwright Test runner.

### 6. What is a fixture in Playwright?
**Answer:** A fixture provides a test with the resources and setup it needs. Examples include `page`, `context`, and `browser`.

### 7. What is the difference between a browser and a page?
**Answer:** A browser represents the browser instance, while a page represents an individual browser tab or page inside a browser context.

### 8. What is a BrowserContext?
**Answer:** A BrowserContext is an isolated browser session. It maintains its own cookies and browser storage, allowing tests to run with separate session states.

### 9. What is the relationship between Browser, BrowserContext, and Page?
**Answer:** A Browser can contain multiple BrowserContexts, and each BrowserContext can contain multiple Pages.

### 10. Can one browser have multiple pages?
**Answer:** Yes. A browser can have multiple contexts, and each context can contain multiple pages. A page represents a tab.

## Section 2: Code-Based Questions

### 11. Explain the following statement:
```typescript
import { chromium, test } from "@playwright/test";
```
**Answer:** It imports the Chromium browser type and the Playwright Test `test` function. In the sample test, `chromium` is not used because the test runner manages the browser through the `page` fixture.

### 12. Why is the `async` keyword used in the test callback?
**Answer:** It allows the callback to use `await` for asynchronous operations such as navigation and locator actions.

### 13. What does the following code do?
```typescript
await page.goto("https://login.salesforce.com/");
```
**Answer:** It navigates the current page to the Salesforce login URL and waits for the navigation operation according to the configured navigation wait condition.

### 14. What does `await` do in Playwright?
**Answer:** It waits for the Promise returned by an asynchronous operation to settle before continuing with the next statement in the async function.

### 15. What is the output of the following code?
```typescript
console.log("Step 1");
await page.goto("https://login.salesforce.com/");
console.log("Step 2");
```
**Answer:** `Step 1` is printed first. After the navigation Promise settles, `Step 2` is printed.

### 16. What is the purpose of `page.waitForTimeout(5000)`?
**Answer:** It pauses the test for 5000 milliseconds, which is 5 seconds.

### 17. Is `page.waitForTimeout(5000)` an efficient way to wait for a page to load?
**Answer:** No. It introduces a fixed delay and does not verify that the page or a particular element is ready. Prefer auto-waiting and condition-based waits.

### 18. What happens if `await` is removed from `page.goto()`?
**Answer:** The navigation starts, but the test does not wait for its Promise to settle before moving to the next statement. This can cause later steps to run before navigation is complete.

### 19. Is `chromium` required in the sample code?
**Answer:** No. It is unused because the test runner creates and manages the browser when the built-in `page` fixture is used. The import can be removed.

### 20. Does the sample test verify that the Salesforce login page loaded successfully?
**Answer:** Not explicitly. It navigates to the URL and waits, but it has no assertion. An assertion such as `await expect(page).toHaveTitle(/Salesforce/);` can verify an expected page title.

## Section 3: Scenario-Based Questions

### 21. You have used `await page.goto(url)`. Does this guarantee that every API request and dynamic element on the page has finished loading?
**Answer:** No. Navigation completion does not guarantee that every background request or dynamically rendered element has completed. Wait for the specific element or application state required by the test.

### 22. Your test uses `page.waitForTimeout(10000)`, but the application loads in 2 seconds. What is the issue?
**Answer:** The test waits unnecessarily for the remaining 8 seconds. A condition-based wait or web-first assertion can continue as soon as the required condition is met.

### 23. Your test uses `page.waitForTimeout(3000)`, but the application takes 6 seconds to load. What could happen?
**Answer:** The test may continue before the application is ready, causing subsequent actions or assertions to fail.

### 24. You need to verify that the login page is displayed after navigation. What would you add?
**Answer:** Add an assertion, for example:
```typescript
await expect(page).toHaveTitle(/Salesforce/);
```
The expected title pattern should match the actual application.

### 25. Two tests need to run with different logged-in users. How can you keep their browser sessions isolated?
**Answer:** Use separate BrowserContexts. Playwright Test's built-in fixtures normally provide an isolated context and page for each test.

### 26. You need to open a second tab in the same browser session. What should you use?
**Answer:** Create another Page within the same BrowserContext, for example:
```typescript
const secondPage = await context.newPage();
```

### 27. You need to open a page with a completely separate cookie and storage session. What should you use?
**Answer:** Create a new BrowserContext and then create a Page within that context.

### 28. A test passes locally but fails when run in CI because of a fixed timeout. What would you change?
**Answer:** Replace the fixed timeout with a condition-based wait or a web-first assertion that waits for the expected application state.

### 29. Your test navigates to the correct URL, but the application displays an error page. How would you detect it?
**Answer:** Add assertions for expected page content, title, URL, or a key element that confirms the intended page has loaded. Navigation alone is not sufficient.

### 30. You imported `chromium`, `firefox`, and `webkit`, but your test uses only `{ page }`. Is that necessary?
**Answer:** No. The test runner selects the browser project configured in `playwright.config.ts`. Remove unused imports unless you are manually launching those browser engines.

## Section 4: Output and Understanding Questions

### 31. What is the unit used by `page.waitForTimeout()`?
**Answer:** Milliseconds. For example, `1000` means 1 second.

### 32. Convert 5 seconds into milliseconds.
**Answer:** 5000 milliseconds.

### 33. What is the difference between `page.goto()` and `page.waitForTimeout()`?
**Answer:** `page.goto()` navigates to a URL and returns a Promise for the navigation operation. `page.waitForTimeout()` pauses execution for a fixed duration.

### 34. Does `await` block the entire JavaScript runtime?
**Answer:** No. It suspends the execution of the current async function while the awaited Promise settles. It does not block the entire JavaScript runtime.

### 35. What happens if a navigation Promise rejects and the error is not handled?
**Answer:** The error propagates through the async test callback, and the test normally fails.

## Section 5: Practical Interview Tasks

### 36. Write a Playwright test to navigate to a website.
**Expected solution:**
```typescript
import { test } from "@playwright/test";

test("Navigate to application", async ({ page }) => {
    await page.goto("https://example.com/");
});
```

### 37. Write a test to navigate to a website and verify its title.
**Expected solution:**
```typescript
import { expect, test } from "@playwright/test";

test("Verify page title", async ({ page }) => {
    await page.goto("https://example.com/");
    await expect(page).toHaveTitle(/Example Domain/);
});
```

### 38. Rewrite a test that uses a 5-second fixed wait with a condition-based wait.
**Expected solution:** Wait for a meaningful locator or application condition instead of using a fixed timeout. For example:
```typescript
await page.getByRole("heading", { name: "Welcome" }).waitFor({
    state: "visible"
});
```
Use a role and accessible name that actually exist in the application.

### 39. Identify the unused import in the original sample.
**Expected answer:** `chromium` is unused. The sample can import only `test` from `@playwright/test`.

### 40. Improve the original sample by adding a validation and removing the fixed wait.
**Expected solution:**
```typescript
import { expect, test } from "@playwright/test";

test("Test to verify Login", async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await expect(page).toHaveTitle(/Salesforce/);
});
```
The title assertion should be adjusted if the application's actual title differs.

## Quick Revision

| Topic | Key point |
|---|---|
| `test()` | Defines a test case |
| `async` | Allows use of `await` |
| `page` fixture | Provides a Page object |
| Browser | Browser instance |
| BrowserContext | Isolated browser session |
| Page | Browser tab |
| `page.goto()` | Navigates to a URL |
| `await` | Waits for a Promise to settle |
| `page.waitForTimeout()` | Waits for a fixed duration in milliseconds |
| `expect()` | Verifies expected behaviour |
| Auto-waiting | Waits for relevant actionability conditions |
| Web-first assertion | Retries an assertion until it passes or times out |
