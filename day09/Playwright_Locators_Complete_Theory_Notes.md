# Playwright – LeafTaps Create Lead: Complete Theory & Reference Notes

## 1. Introduction to Playwright

Playwright is an end-to-end web automation and testing framework developed by Microsoft. It supports Chromium, Firefox, and WebKit and provides APIs for browser automation, assertions, fixtures, network handling, screenshots, tracing, and cross-browser testing.

Playwright can be used for:
- UI automation
- End-to-end testing
- Cross-browser testing
- API testing
- Visual testing
- Network interception
- Authentication and session management
- Test parallelization

---

## 2. Playwright Test and `test()`

The Playwright Test package provides the test runner.

```typescript
import { test } from "@playwright/test";

test("Login Test", async ({ page }) => {
    await page.goto("https://example.com");
});
```

### Theory

`test()` defines an individual test case. A test normally contains a test name and an asynchronous test function.

The `async` keyword is used because browser operations are asynchronous, and `await` ensures that each required operation completes before the next statement continues.

---

## 3. Fixtures

Example:

```typescript
test("Test", async ({ page }) => {

});
```

`page` is a built-in Playwright Test fixture.

A fixture provides a test with a ready-to-use resource.

Common fixtures include:
- `page`
- `browser`
- `context`
- `request`

### Page Fixture

The `page` fixture represents a browser page/tab and can be used for:
- Navigation
- Locators
- Clicking
- Filling fields
- Assertions
- Screenshots
- Browser events

Playwright Test manages the fixture lifecycle automatically.

---

## 4. Browser, BrowserContext and Page

The relationship is:

```text
Browser
   |
   +-- BrowserContext
          |
          +-- Page
```

### Browser
Represents the browser instance.

### BrowserContext
Represents an isolated browser session with its own cookies, storage, permissions, and session state.

### Page
Represents a browser tab.

---

## 5. Async and Await

Example:

```typescript
await page.goto("https://example.com");
```

Browser automation involves operations that may take time.

- `async` marks a function as asynchronous.
- `await` waits for an asynchronous operation to complete.

Using `await` helps ensure actions execute in the intended sequence.

---

## 6. Navigation

Example:

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");
```

`page.goto()` navigates the page to the specified URL.

Other navigation APIs include:

```typescript
await page.goBack();
await page.goForward();
await page.reload();
```

---

# 7. Playwright Locators

A locator identifies an element on the page.

Common Playwright locators are:

```typescript
getByRole()
getByLabel()
getByPlaceholder()
getByText()
getByAltText()
getByTitle()
getByTestId()
locator()
```

Locators are used with actions and assertions.

Example:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

---

## 8. Locator Priority / Selection Strategy

There is no absolute universal priority that must always be followed. Locator choice should depend on the DOM, accessibility information, uniqueness, readability, and stability.

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

The main principle is to prefer stable, user-facing and semantic locators when available.

---

## 9. `getByRole()`

Example:

```typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

await page.getByRole("button", { name: "Login" }).click();
```

`getByRole()` identifies elements using their accessible role and accessible name.

Common roles include:
- `button`
- `textbox`
- `link`
- `checkbox`
- `radio`
- `heading`
- `combobox`
- `option`

The `name` option generally represents the accessible name of the element.

---

## 10. `getByLabel()`

Example:

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

`getByLabel()` locates a form control using its associated label.

Example HTML:

```html
<label for="password">Password</label>
<input id="password">
```

This is generally more readable than directly depending on a CSS selector.

---

## 11. `getByText()`

Example:

```typescript
await page.getByText("CRM/SFA").click();
```

`getByText()` locates an element using visible text.

Example:

```typescript
await page.getByText("Create Lead", { exact: true }).click();
```

### Partial Text Matching

Normal `getByText()` matching can match text that is not an exact whole-string match.

For explicit exact matching:

```typescript
await page.getByText("Leads", { exact: true }).click();
```

Use `exact: true` when the exact text is important and similar text could otherwise cause ambiguity.

---

## 12. `getByPlaceholder()`

Example:

```typescript
await page.getByPlaceholder("Enter username").fill("admin");
```

It locates an input using its placeholder text.

---

## 13. `getByAltText()`

Example:

```typescript
await page.getByAltText("Company Logo").click();
```

It locates an element using its `alt` attribute, commonly used for images.

---

## 14. `getByTitle()`

Example:

```typescript
await page.getByTitle("Delete").click();
```

It locates an element using its `title` attribute.

---

## 15. `getByTestId()`

Example:

```typescript
await page.getByTestId("login-button").click();
```

It locates an element using a test ID.

The default Playwright test ID attribute is commonly `data-testid`, and the attribute can be configured.

Test IDs are useful when a stable testing contract exists and a suitable semantic locator is unavailable.

---

# 16. `page.locator()`

Example:

```typescript
await page.locator("#createLeadForm_companyName").fill("Testleaf");
```

`locator()` is a general-purpose locator API and can be used with CSS selectors and XPath selectors.

CSS example:

```typescript
page.locator("#username")
```

XPath example:

```typescript
page.locator("//input[@id='username']")
```

Prefer semantic locators when they provide a stable and readable solution. Use CSS/XPath when they are appropriate for the DOM and application.

---

## 17. CSS Selectors

Example:

```typescript
await page.locator("#createLeadForm_companyName").fill("Testleaf");
```

`#` is the CSS syntax for an ID selector.

Other common CSS selectors:

```css
#id
.className
tag
tag.className
tag#id
[attribute="value"]
```

Example:

```typescript
page.locator('[name="submitButton"]')
```

---

# 18. `fill()`

Example:

```typescript
await page.locator("#createLeadForm_firstName").fill("Vineeth");
```

`fill()` enters a value into an editable element and replaces the existing value.

Typical uses:
- Textboxes
- Textareas
- Other compatible editable fields

---

## 19. `click()`

Example:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

`click()` performs a click action on the located element.

Playwright performs actionability checks before the action, helping reduce timing-related failures.

---

# 20. LeafTaps Login and Navigation Flow

Typical flow:

```text
Open LeafTaps
      ↓
Enter Username
      ↓
Enter Password
      ↓
Click Login
      ↓
Click CRM/SFA
      ↓
Click Leads
      ↓
Click Create Lead
```

Example:

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

await page.getByRole("button", { name: "Login" }).click();

await page.getByText("CRM/SFA").click();

await page.getByText("Leads", { exact: true }).click();

await page.getByText("Create Lead", { exact: true }).click();
```

---

# 21. Native Select Dropdown

A native dropdown is normally represented by:

```html
<select>
```

Example:

```html
<select id="source">
    <option value="LEAD_DIRECT">Direct</option>
    <option value="LEAD_EXISTCUST">Existing Customer</option>
    <option value="LEAD_PR">Public Relations</option>
</select>
```

For a native `<select>`, Playwright provides:

```typescript
selectOption()
```

---

## 22. `selectOption()`

Example:

```typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ value: "LEAD_EXISTCUST" });
```

`selectOption()` selects options in a native `<select>` element.

It supports selection by:
- `value`
- `label`
- `index`

---

## 23. Select by Value

```typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ value: "LEAD_EXISTCUST" });
```

This uses the option's `value` attribute.

Example:

```html
<option value="LEAD_EXISTCUST">Existing Customer</option>
```

---

## 24. Select by Label

```typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ label: "Public Relations" });
```

This uses the option's visible text.

Example:

```html
<option value="LEAD_PR">Public Relations</option>
```

Visible label:

```text
Public Relations
```

---

## 25. Select by Index

```typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ index: 3 });
```

Indexes start from zero:

```text
0 → First option
1 → Second option
2 → Third option
3 → Fourth option
```

Indexes should be used carefully because changing the order of options can change which option is selected.

---

## 26. Multiple Selection

Example:

```typescript
await page.locator("#createLeadForm_dataSourceId").selectOption([
    { index: 0 },
    { index: 3 },
    { index: 5 }
]);
```

This attempts to select multiple options.

Multiple selection is meaningful when the underlying `<select>` supports it, for example:

```html
<select multiple>
```

For a normal single-select dropdown, selecting another option replaces the current selection.

Passing an array does not turn a single-select dropdown into a multi-select dropdown.

---

## 27. Native vs Custom Dropdown

### Native Dropdown

Usually:

```html
<select>
```

Use:

```typescript
selectOption()
```

### Custom Dropdown

May use:

```html
<div>
<button>
<input>
<ul>
<li>
```

For a custom dropdown, interact with the application's UI.

Example:

```typescript
await page.getByRole("combobox").click();
await page.getByRole("option", { name: "Public Relations" }).click();
```

The exact locator depends on the application's DOM and accessibility implementation.

---

# 28. Auto-Waiting

Playwright automatically waits for many actionability conditions before performing actions.

Example:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

Playwright can wait for the button to become actionable.

This reduces the need for manually inserted sleeps.

---

## 29. `waitForTimeout()`

Example:

```typescript
await page.waitForTimeout(5000);
```

This pauses execution for 5000 milliseconds, which equals 5 seconds.

It can be useful for temporary debugging or demonstrations, but fixed waits are generally not recommended for stable automation.

---

## 30. Why Fixed Waits Are Not Preferred

Consider:

```typescript
await page.waitForTimeout(5000);
```

If the page is ready after 1 second, the test unnecessarily waits 4 additional seconds.

If the page takes 7 seconds, the 5-second wait may still be insufficient.

Therefore, condition-based waiting is generally better.

---

# 31. Condition-Based Waiting

Prefer actions and web-first assertions that wait for the required state.

Example:

```typescript
await expect(page.getByText("Create Lead", { exact: true }))
    .toBeVisible();
```

Or perform the next Playwright action directly when appropriate:

```typescript
await page.getByText("Create Lead", { exact: true }).click();
```

---

# 32. Assertions

A test should not only perform actions. It should verify the expected result.

Import:

```typescript
import { test, expect } from "@playwright/test";
```

Example:

```typescript
await expect(page.getByText("Create Lead", { exact: true }))
    .toBeVisible();
```

Common assertions include:

```text
toBeVisible()
toBeHidden()
toHaveText()
toContainText()
toHaveValue()
toBeEnabled()
toBeDisabled()
toBeChecked()
toHaveAttribute()
```

---

# 33. Web-First Assertions

Web-first assertions are designed for dynamic web applications.

Example:

```typescript
await expect(
    page.getByRole("heading", { name: "Create Lead" })
).toBeVisible();
```

The assertion waits for the expected condition rather than simply checking once.

This helps reduce flaky tests.

---

# 34. Improved Create Lead Test

```typescript
import { test, expect } from "@playwright/test";

test("Test to verify Create Lead function", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox", { name: "Username" })
        .fill("Demosalesmanager");

    await page.getByRole("textbox", { name: "Password" })
        .fill("crmsfa");

    await page.getByRole("button", { name: "Login" }).click();

    await page.getByText("CRM/SFA").click();

    await page.getByText("Leads", { exact: true }).click();

    await page.getByText("Create Lead", { exact: true }).click();

    await page.locator("#createLeadForm_companyName")
        .fill("Testleaf");

    await page.locator("#createLeadForm_firstName")
        .fill("Vineeth");

    await page.locator("#createLeadForm_lastName")
        .fill("Rajendran");

    await page.locator("#createLeadForm_dataSourceId")
        .selectOption({ label: "Public Relations" });

    await expect(
        page.locator("#createLeadForm_companyName")
    ).toHaveValue("Testleaf");
});
```

The important improvement is that the test verifies an expected state instead of ending with only a fixed wait.

---

# 35. Locator Stability

A good locator should be:
- Unique
- Readable
- Stable
- Closely related to the intended element

Avoid unnecessary dependence on:
- Deep DOM hierarchy
- Dynamic class names
- Position
- Unstable indexes
- Long XPath expressions

---

# 36. Locator Strictness

If an action such as `click()` resolves to multiple elements when one element is expected, Playwright can report a strict mode violation.

This helps identify ambiguous locators.

Improve the locator by:
- Using a better role/name
- Using exact text
- Narrowing the locator
- Using a stable test ID
- Using an appropriate filter

Do not use `.nth()` simply to hide locator ambiguity unless the position is intentional and stable.

---

# 37. Common Playwright Actions

| Action | Purpose |
|---|---|
| `click()` | Click an element |
| `fill()` | Fill an editable field |
| `check()` | Check a checkbox/radio |
| `uncheck()` | Uncheck a checkbox |
| `selectOption()` | Select native dropdown options |
| `press()` | Press a keyboard key |
| `hover()` | Hover over an element |
| `focus()` | Focus an element |

---

# 38. Best Practices

- Use meaningful test names.
- Prefer stable semantic locators.
- Use `getByRole()` and `getByLabel()` when appropriate.
- Use `exact: true` when exact text matching is needed.
- Use CSS selectors when they provide a stable locator.
- Avoid unnecessarily long XPath expressions.
- Avoid unnecessary `waitForTimeout()`.
- Use auto-waiting and web-first assertions.
- Add meaningful assertions.
- Keep test data understandable.
- Keep tests independent where possible.
- Verify the actual business outcome.

---

# 39. Key Concepts Covered

The LeafTaps Create Lead example demonstrates:

1. Playwright Test
2. `test()`
3. Fixtures
4. `page`
5. Browser / Context / Page
6. `async` / `await`
7. `page.goto()`
8. `getByRole()`
9. `getByLabel()`
10. `getByText()`
11. `exact: true`
12. `getByPlaceholder()`
13. `getByTestId()`
14. `locator()`
15. CSS selectors
16. `fill()`
17. `click()`
18. Native `<select>` dropdown
19. `selectOption()`
20. Value selection
21. Label selection
22. Index selection
23. Multi-select
24. Custom dropdowns
25. Auto-waiting
26. `waitForTimeout()`
27. Assertions
28. Web-first assertions
29. Locator stability
30. Locator strictness

---

# 40. Quick Reference

| Requirement | API |
|---|---|
| Define test | `test()` |
| Navigate | `page.goto()` |
| Find button | `getByRole("button")` |
| Find textbox | `getByRole("textbox")` |
| Find labeled field | `getByLabel()` |
| Find text | `getByText()` |
| Exact text | `getByText("text", { exact: true })` |
| Placeholder | `getByPlaceholder()` |
| Alt text | `getByAltText()` |
| Title | `getByTitle()` |
| Test ID | `getByTestId()` |
| CSS/XPath | `locator()` |
| Enter text | `fill()` |
| Click | `click()` |
| Native dropdown | `selectOption()` |
| By value | `selectOption({ value: "..." })` |
| By label | `selectOption({ label: "..." })` |
| By index | `selectOption({ index: 0 })` |
| Fixed wait | `waitForTimeout()` |
| Assertion | `expect()` |

---

# 41. Final Takeaway

A strong Playwright test follows this general flow:

```text
Test
 ↓
Fixture
 ↓
Page
 ↓
Locator
 ↓
Action
 ↓
Auto-Wait
 ↓
Assertion
```

The goal is not merely to automate clicks. A reliable test should identify elements using stable locators, perform meaningful business actions, wait intelligently, and verify the expected outcome.
