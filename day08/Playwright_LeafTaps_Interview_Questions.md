# Playwright LeafTaps Login – Interview Questions

## Section 1: Basic Playwright

### 1. What is Playwright?

**Answer:** Playwright is an end-to-end browser automation and testing framework developed by Microsoft. It supports Chromium, Firefox, and WebKit.

### 2. What is `@playwright/test`?

**Answer:** It is Playwright's test runner package. It provides `test()`, `expect()`, fixtures, hooks, configuration, retries, parallel execution, and reporting.

### 3. What is the purpose of `test()`?

**Answer:** It defines a test case.

### 4. Why is `async` used in Playwright?

**Answer:** Playwright APIs are asynchronous and return Promises. `async` allows the test to use `await`.

### 5. What does `await` do?

**Answer:** It waits for the Promise returned by an asynchronous operation to settle before continuing the current async function.

## Section 2: Fixtures and Architecture

### 6. What is a fixture?

**Answer:** A fixture provides a test with the resources and setup required for execution.

### 7. What is the `page` fixture?

**Answer:** It provides a Page object representing a browser tab.

### 8. Who creates the `page` fixture?

**Answer:** The Playwright Test runner creates and manages the built-in `page` fixture.

### 9. What is a Browser?

**Answer:** It represents the browser instance, such as Chromium, Firefox, or WebKit.

### 10. What is a BrowserContext?

**Answer:** It represents an isolated browser session with its own cookies, storage, permissions, and browser state.

### 11. What is a Page?

**Answer:** A Page represents a browser tab inside a BrowserContext.

### 12. Can one BrowserContext have multiple pages?

**Answer:** Yes. Multiple pages can exist in the same BrowserContext.

## Section 3: Navigation

### 13. What does `page.goto()` do?

**Answer:** It navigates the current page to the specified URL.

### 14. Why do we use `await` with `page.goto()`?

**Answer:** `page.goto()` returns a Promise, so `await` waits for the navigation operation.

### 15. Does `page.goto()` guarantee that every background API call is complete?

**Answer:** No. It waits for the configured navigation lifecycle condition, not necessarily every dynamic request or UI operation.

### 16. What is `waitUntil` in `page.goto()`?

**Answer:** It specifies the navigation lifecycle event Playwright should wait for, such as `commit`, `domcontentloaded`, `load`, or `networkidle`.

## Section 4: Locators

### 17. What is a locator?

**Answer:** A locator identifies an element on a web page and provides a reliable way to interact with it.

### 18. Why are Playwright locators important?

**Answer:** They provide readable element identification, auto-waiting, retry behaviour, and maintainability.

### 19. What is `getByRole()`?

**Answer:** It locates an element using its accessible role and accessible name.

Example:

```typescript
page.getByRole("button", { name: "Login" });
```

### 20. Why is `getByRole()` preferred?

**Answer:** It uses accessibility semantics and generally creates user-oriented, readable locators.

### 21. What is `getByLabel()`?

**Answer:** It locates a form control associated with a label.

```typescript
page.getByLabel("Username");
```

### 22. What is `getByText()`?

**Answer:** It locates an element using visible text.

### 23. What is `getByPlaceholder()`?

**Answer:** It locates an input using its placeholder text.

### 24. What is `getByAltText()`?

**Answer:** It locates an image using its alternative text.

### 25. What is `getByTitle()`?

**Answer:** It locates an element using its `title` attribute.

### 26. What is `getByTestId()`?

**Answer:** It locates an element using a test ID attribute such as `data-testid`.

### 27. Does Playwright support CSS?

**Answer:** Yes. `page.locator("#username")` is an example.

### 28. Does Playwright support XPath?

**Answer:** Yes. `page.locator('//input[@name="USERNAME"]')` is an example. Prefer stable semantic locators when available.

### 29. What is a practical locator preference?

**Answer:**

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByAltText()`
6. `getByTitle()`
7. `getByTestId()`
8. CSS
9. XPath

The actual choice depends on the application's DOM and accessibility structure.

## Section 5: LeafTaps Code

### 30. Explain this code:

```typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
```

**Answer:** It locates the Username textbox using its accessible role and name and fills it with the specified username.

### 31. Explain this code:

```typescript
await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");
```

**Answer:** It locates the Password textbox and fills it with the specified password.

### 32. Explain this code:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

**Answer:** It locates the Login button using its accessible role and name and clicks it.

### 33. What does `fill()` do?

**Answer:** It fills an input and replaces the existing value.

### 34. What is the difference between `fill()` and `type()`?

**Answer:** `fill()` sets the input value after clearing existing content. `type()` types characters into the field and can be useful when character-by-character behaviour is required.

### 35. What does `click()` do?

**Answer:** It clicks the target element after Playwright performs actionability checks.

## Section 6: Auto-Waiting and Synchronization

### 36. What is auto-waiting?

**Answer:** Playwright automatically waits for elements to become actionable before performing many actions.

### 37. What are actionability checks?

**Answer:** Playwright checks conditions such as visibility, stability, receiving events, and enabled state where applicable before actions.

### 38. Why is auto-waiting better than fixed waits?

**Answer:** It waits according to application readiness instead of an arbitrary duration, which generally makes tests faster and more reliable.

### 39. What does `page.waitForTimeout(5000)` do?

**Answer:** It pauses test execution for 5000 milliseconds, or 5 seconds.

### 40. Is `waitForTimeout()` recommended for normal synchronization?

**Answer:** Generally no. Prefer locator-based waits, web-first assertions, or meaningful application conditions.

### 41. What is wrong with this?

```typescript
await page.waitForTimeout(10000);
```

**Answer:** It blindly waits 10 seconds. It may be too long for a fast application and too short for a slow one.

## Section 7: Assertions

### 42. Why are assertions required?

**Answer:** Actions alone do not prove that the expected business outcome occurred. Assertions validate the expected application behaviour.

### 43. What is `expect()`?

**Answer:** It is Playwright Test's assertion API.

Example:

```typescript
await expect(page).toHaveURL(/opentaps/);
```

### 44. What are web-first assertions?

**Answer:** They automatically retry until the expected condition is satisfied or the assertion timeout is reached.

Examples:

```typescript
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Welcome");
await expect(locator).toHaveValue("admin");
await expect(page).toHaveURL(/opentaps/);
await expect(page).toHaveTitle(/LeafTaps/);
```

## Section 8: Scenario-Based Questions

### 45. The test passes locally but fails in CI because the application is slower. What would you do?

**Answer:** Do not blindly increase `waitForTimeout()`. Identify the required application condition and use a locator wait or web-first assertion.

### 46. The Login button is present but clicking fails intermittently. What would you investigate?

**Answer:** Check whether the element is visible, stable, enabled, receiving events, covered by another element, inside an iframe, or affected by animation. Also verify the locator is unique.

### 47. The Username field has no accessible label. What alternatives can you use?

**Answer:** Consider `getByPlaceholder()`, `getByTestId()`, a stable CSS locator, or another stable attribute.

### 48. The application has two Login buttons. How would you handle it?

**Answer:** Identify a more specific locator or scope the locator to the correct container. Avoid relying on `nth()` unless the order is stable.

### 49. The developer provides `data-testid="login-button"`. How would you locate it?

**Answer:**

```typescript
page.getByTestId("login-button");
```

### 50. The application uses `data-pw` instead of `data-testid`. What can you do?

**Answer:** Configure `testIdAttribute` in Playwright so `getByTestId()` uses `data-pw`.

### 51. The Username field is inside an iframe. Can `page.getByRole()` find it directly?

**Answer:** No. Access the frame first, commonly using `frameLocator()`, and then locate the element inside the frame.

### 52. The test logs in but does not verify the result. Is it complete?

**Answer:** No. Add an assertion for the expected post-login URL, element, text, or business state.

## Section 9: Practical Coding Questions

### 53. Write a test to open LeafTaps.

```typescript
import { test } from "@playwright/test";

test("Open LeafTaps", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
});
```

### 54. Write code to locate Username.

```typescript
page.getByRole("textbox", { name: "Username" });
```

### 55. Write code to enter Username.

```typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");
```

### 56. Write code to click Login.

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

### 57. Write a complete login test with validation.

```typescript
import { test, expect } from "@playwright/test";

test("LeafTaps Login", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/opentaps/);
});
```

The final assertion should be adjusted to the application's actual post-login state.

## Section 10: Interviewer Follow-Up Questions

1. Why did you use `getByRole()`?
2. How does Playwright determine an accessible name?
3. What is a fixture?
4. How is the `page` fixture created?
5. What is BrowserContext?
6. Can one context contain multiple pages?
7. How do you handle multiple tabs?
8. How do you handle iframes?
9. What is auto-waiting?
10. Why should `waitForTimeout()` generally be avoided?
11. What is the difference between locator waiting and assertion waiting?
12. How do you validate login success?
13. What would you do if the locator is not unique?
14. What would you do if the element is inside an iframe?
15. How do you handle dynamic elements?
16. How would you create a reusable login method?
17. How would you secure credentials?
18. How would you run the test across Chromium, Firefox, and WebKit?
19. How would you run tests in parallel?
20. How would you debug a failed Playwright test?

## Quick Revision Table

| Topic | Key Point |
|---|---|
| Playwright | Browser automation/testing framework |
| `test()` | Defines a test |
| Fixture | Provides test resources |
| `page` | Browser tab fixture |
| BrowserContext | Isolated browser session |
| `goto()` | Navigates to a URL |
| Locator | Identifies an element |
| `getByRole()` | Locate by accessible role/name |
| `getByLabel()` | Locate by label |
| `getByText()` | Locate by visible text |
| `getByPlaceholder()` | Locate by placeholder |
| `getByTestId()` | Locate by test ID |
| `fill()` | Fill input |
| `click()` | Click element |
| Auto-waiting | Wait for actionability |
| `waitForTimeout()` | Fixed delay |
| `expect()` | Assertion |
| Web-first assertion | Retries expected condition |

## Key Interview Explanation

A strong interview explanation of this code is:

> I am using Playwright Test with the built-in page fixture. The test navigates to LeafTaps using `page.goto()`, locates the username and password fields using semantic `getByRole()` locators, fills the credentials using `fill()`, and clicks the Login button. Playwright provides auto-waiting for actions, so I would avoid using a fixed `waitForTimeout()` for synchronization. I would add a web-first assertion to verify the expected post-login state.
