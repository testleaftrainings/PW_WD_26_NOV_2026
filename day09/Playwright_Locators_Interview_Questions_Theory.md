# Playwright – LeafTaps Create Lead: Interview Questions and Theory

## 1. Playwright Fundamentals

### 1. What is Playwright?

Playwright is an end-to-end web automation and testing framework developed by Microsoft. It supports Chromium, Firefox, and WebKit and provides APIs for browser automation, assertions, fixtures, network handling, screenshots, tracing, and cross-browser testing.

### 2. What is Playwright Test?

Playwright Test is the test runner provided by Playwright. It provides:
- Test definition
- Fixtures
- Assertions
- Parallel execution
- Configuration
- Reporting
- Retries
- Projects

### 3. How do you create a Playwright test?

```typescript
import { test } from "@playwright/test";

test("Login Test", async ({ page }) => {
    await page.goto("https://example.com");
});
```

The `test()` function defines the test case.

### 4. Why is the Playwright test function asynchronous?

Browser operations involve communication with the browser and may take time to complete. Therefore, Playwright APIs are commonly used with `async` and `await`.

### 5. What is the purpose of `async` and `await`?

`async` defines an asynchronous function.

`await` waits for an asynchronous operation to complete before executing the next statement.

Example:

```typescript
await page.goto("https://example.com");
```

---

# 2. Fixtures

### 6. What is a fixture in Playwright?

A fixture provides a test with a ready-to-use resource or setup.

Example:

```typescript
test("Test", async ({ page }) => {
});
```

Here, `page` is a built-in fixture.

### 7. What is the `page` fixture?

The `page` fixture provides a browser page/tab for:
- Navigation
- Locators
- Clicking
- Filling
- Assertions
- Screenshots

### 8. What is the difference between Browser, BrowserContext and Page?

| Object | Meaning |
|---|---|
| Browser | Browser instance |
| BrowserContext | Isolated browser session |
| Page | Browser tab |

Hierarchy:

```text
Browser
   ↓
BrowserContext
   ↓
Page
```

### 9. Does Playwright automatically manage the `page` fixture?

Yes. Playwright Test manages the fixture lifecycle for the test.

---

# 3. Navigation

### 10. What is `page.goto()`?

`page.goto()` navigates the current page to a specified URL.

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");
```

### 11. What other navigation methods do you know?

Common methods include:

```typescript
page.goto()
page.goBack()
page.goForward()
page.reload()
```

---

# 4. Locators

### 12. What is a locator?

A locator identifies an element on a web page so that Playwright can interact with it or assert its state.

Examples:

```typescript
getByRole()
getByText()
getByLabel()
getByPlaceholder()
getByAltText()
getByTitle()
getByTestId()
locator()
```

### 13. What is the preferred locator strategy in Playwright?

There is no absolute universal priority. Prefer stable, user-facing and semantic locators when available.

A practical order is:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByAltText()`
6. `getByTitle()`
7. `getByTestId()`
8. CSS
9. XPath

The actual choice should depend on the DOM, accessibility information, uniqueness and stability.

### 14. Why is `getByRole()` commonly preferred?

It uses the accessible role and accessible name of an element, making tests closer to how users interact with the application.

Example:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

### 15. What is an accessible role?

An accessible role describes what an element represents to assistive technologies and users.

Examples:
- button
- textbox
- link
- checkbox
- radio
- heading
- combobox
- option

### 16. What does the `name` option in `getByRole()` mean?

It generally refers to the accessible name of the element.

Example:

```typescript
page.getByRole("button", { name: "Login" })
```

This identifies a button with accessible name `Login`.

### 17. What is `getByLabel()`?

`getByLabel()` identifies a form control using its associated label.

```typescript
await page.getByLabel("Password").fill("crmsfa");
```

### 18. When would you use `getByLabel()` instead of CSS?

Use `getByLabel()` when a form control has a reliable associated label. It is usually more readable and less dependent on DOM implementation details.

### 19. What is `getByText()`?

`getByText()` locates an element using visible text.

```typescript
await page.getByText("CRM/SFA").click();
```

### 20. Does `getByText()` support partial text matching?

Yes. Normal text matching can match text that is not an exact whole-string match.

For explicit exact matching:

```typescript
await page.getByText("Leads", { exact: true }).click();
```

### 21. Why would you use `exact: true`?

It makes the text matching requirement explicit and can prevent matching similar text.

```typescript
page.getByText("Create Lead", { exact: true })
```

### 22. What is `getByPlaceholder()`?

It locates an input using placeholder text.

```typescript
page.getByPlaceholder("Enter username")
```

### 23. What is `getByAltText()`?

It locates an element using its `alt` attribute, commonly used for images.

```typescript
page.getByAltText("Company Logo")
```

### 24. What is `getByTitle()`?

It locates an element using its `title` attribute.

```typescript
page.getByTitle("Delete")
```

### 25. What is `getByTestId()`?

It locates an element using a test ID.

```typescript
page.getByTestId("login-button")
```

The default test ID attribute is commonly `data-testid`, and it can be configured.

---

# 5. CSS and XPath

### 26. What is `page.locator()`?

`locator()` is a general locator API that can be used with CSS and XPath.

```typescript
page.locator("#username")
```

or:

```typescript
page.locator("//input[@id='username']")
```

### 27. Explain this locator:

```typescript
page.locator("#createLeadForm_companyName")
```

`#` is CSS syntax for an ID selector. It identifies the element whose ID is `createLeadForm_companyName`.

### 28. What is the difference between `getByRole()` and `locator()`?

`getByRole()` uses semantic/accessibility information.

`locator()` can use CSS or XPath and is more closely tied to DOM attributes or structure.

### 29. Why should long XPath expressions generally be avoided?

Long XPath expressions can be tightly coupled to DOM structure and may break when the UI changes.

---

# 6. Actions

### 30. What does `fill()` do?

`fill()` enters a value into an editable field and replaces the existing value.

```typescript
await page.locator("#firstName").fill("Vineeth");
```

### 31. What does `click()` do?

It performs a click action on the located element.

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

### 32. What other common Playwright actions do you know?

Examples:

```text
click()
fill()
check()
uncheck()
selectOption()
press()
hover()
focus()
```

---

# 7. Dropdowns

### 33. How do you identify whether a dropdown is a native dropdown?

Inspect the DOM.

If it is implemented using:

```html
<select>
```

it is a native HTML select dropdown.

If it uses elements such as:

```html
<div>
<button>
<input>
<ul>
<li>
```

it may be a custom dropdown.

### 34. How do you handle a native `<select>` dropdown?

Use:

```typescript
selectOption()
```

Example:

```typescript
await page.locator("#source")
    .selectOption({ label: "Public Relations" });
```

### 35. What are the different ways to select an option?

You can select by:
- Value
- Label
- Index

Examples:

```typescript
selectOption({ value: "LEAD_EXISTCUST" })
```

```typescript
selectOption({ label: "Public Relations" })
```

```typescript
selectOption({ index: 3 })
```

### 36. How do you select by value?

```typescript
await page.locator("#source")
    .selectOption({ value: "LEAD_EXISTCUST" });
```

### 37. How do you select by label?

```typescript
await page.locator("#source")
    .selectOption({ label: "Public Relations" });
```

### 38. How do you select by index?

```typescript
await page.locator("#source")
    .selectOption({ index: 3 });
```

Indexing starts from zero.

### 39. What is the difference between label and value?

Given:

```html
<option value="LEAD_PR">Public Relations</option>
```

- Value = `LEAD_PR`
- Visible label = `Public Relations`

### 40. Can `selectOption()` be used for a custom dropdown?

No. `selectOption()` is intended for native `<select>` elements.

For a custom dropdown, interact with the application's actual UI elements.

Example:

```typescript
await page.getByRole("combobox").click();
await page.getByRole("option", { name: "Public Relations" }).click();
```

### 41. Can a normal dropdown select multiple options?

A normal single-select `<select>` allows one selected option.

Multiple selection requires support such as:

```html
<select multiple>
```

### 42. Explain this code:

```typescript
await page.locator("#source").selectOption([
    { index: 0 },
    { index: 3 },
    { index: 5 }
]);
```

It attempts to select multiple options by index. This is appropriate when the underlying `<select>` supports multiple selection.

For a normal single-select dropdown, selecting another option replaces the current selection.

---

# 8. Waiting

### 43. What is auto-waiting in Playwright?

Playwright automatically waits for many actionability conditions before performing actions.

For example:

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

Playwright waits for the button to become actionable instead of requiring a fixed sleep in many situations.

### 44. What is `waitForTimeout()`?

It pauses execution for a fixed amount of time.

```typescript
await page.waitForTimeout(5000);
```

This waits for 5 seconds.

### 45. Is `waitForTimeout()` recommended in production automation?

Generally, no. Fixed waits can make tests slow and flaky.

Prefer auto-waiting and condition-based assertions.

### 46. Why is this problematic?

```typescript
await page.waitForTimeout(5000);
```

If the page is ready after 1 second, the test unnecessarily waits.

If it takes 7 seconds, the wait may still be insufficient.

### 47. What should you use instead of fixed waits?

Use:
- Locator actions
- Web-first assertions
- Specific conditions
- Navigation handling where appropriate

Example:

```typescript
await expect(page.getByText("Create Lead")).toBeVisible();
```

---

# 9. Assertions

### 48. Why are assertions important?

Actions alone do not prove that the application behaved correctly. Assertions verify the expected result.

Example:

```typescript
await expect(page.getByText("Create Lead")).toBeVisible();
```

### 49. How do you import `expect`?

```typescript
import { test, expect } from "@playwright/test";
```

### 50. What are web-first assertions?

They are Playwright assertions designed for dynamic web applications by waiting for the expected condition.

Example:

```typescript
await expect(
    page.getByRole("heading", { name: "Create Lead" })
).toBeVisible();
```

### 51. Name some common assertions.

Examples:

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

# 10. LeafTaps Scenario Questions

### 52. How would you automate the LeafTaps login page?

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");

await page.getByRole("textbox", { name: "Password" })
    .fill("crmsfa");

await page.getByRole("button", { name: "Login" })
    .click();
```

### 53. How would you click CRM/SFA?

```typescript
await page.getByText("CRM/SFA").click();
```

### 54. How would you click Leads when similar text may exist?

```typescript
await page.getByText("Leads", { exact: true }).click();
```

### 55. How would you click Create Lead?

```typescript
await page.getByText("Create Lead", { exact: true }).click();
```

### 56. How would you enter the company name?

```typescript
await page.locator("#createLeadForm_companyName")
    .fill("Testleaf");
```

### 57. How would you select Public Relations?

If it is a native `<select>`:

```typescript
await page.locator("#createLeadForm_dataSourceId")
    .selectOption({ label: "Public Relations" });
```

---

# 11. Scenario-Based Interview Questions

### 58. Your locator matches three elements. What would you do?

First identify why the locator is ambiguous.

Possible solutions:
- Use a better role/name
- Use `exact: true`
- Narrow the locator
- Use a stable test ID
- Use an appropriate filter
- Use a stable CSS selector if appropriate

Do not blindly use `.nth()` just to hide ambiguity.

### 59. Your test passes locally but fails intermittently in CI. What would you investigate?

Check:
- Fixed waits
- Unstable locators
- Missing assertions
- Race conditions
- Network dependencies
- Environment differences
- Test data conflicts
- Parallel execution
- Authentication/session issues

### 60. Why should you avoid `waitForTimeout()` everywhere?

Because fixed waits:
- Slow execution
- Do not adapt to actual page state
- Can still be insufficient
- Can contribute to flaky tests

### 61. How would you improve a test that ends with only `waitForTimeout(5000)`?

Replace the fixed wait with a meaningful condition or assertion.

Example:

```typescript
await expect(page.getByText("Create Lead")).toBeVisible();
```

Then verify the actual business outcome.

### 62. How would you verify that the company name was entered correctly?

```typescript
await expect(
    page.locator("#createLeadForm_companyName")
).toHaveValue("Testleaf");
```

### 63. How would you verify that the Create Lead page is displayed?

Use a stable element that identifies the page.

Example:

```typescript
await expect(
    page.getByText("Create Lead", { exact: true })
).toBeVisible();
```

---

# 12. Practical Coding Questions

### 64. Write a locator for the Login button.

```typescript
page.getByRole("button", { name: "Login" })
```

### 65. Write a locator for the Username textbox.

```typescript
page.getByRole("textbox", { name: "Username" })
```

### 66. Write a label-based locator.

```typescript
page.getByLabel("Password")
```

### 67. Write a CSS locator using an ID.

```typescript
page.locator("#createLeadForm_companyName")
```

### 68. Fill the first name field.

```typescript
await page.locator("#createLeadForm_firstName")
    .fill("Vineeth");
```

### 69. Select a dropdown option by value.

```typescript
await page.locator("#source")
    .selectOption({ value: "LEAD_EXISTCUST" });
```

### 70. Select a dropdown option by label.

```typescript
await page.locator("#source")
    .selectOption({ label: "Public Relations" });
```

### 71. Select the fourth option.

```typescript
await page.locator("#source")
    .selectOption({ index: 3 });
```

Remember that indexes start from zero.

---

# 13. Advanced Follow-Up Questions

### 72. Why is `getByRole()` considered a user-facing locator?

Because it identifies elements using semantic roles and accessible names that represent how users and assistive technologies understand the UI.

### 73. Is CSS always bad in Playwright?

No. CSS is a valid and useful locator strategy.

The recommendation is to prefer stable and semantic locators when they provide a clear and reliable identification method.

### 74. Is XPath always bad in Playwright?

No. XPath is supported and can be useful for certain DOM relationships. However, long or fragile XPath expressions can make tests harder to maintain.

### 75. What makes a locator stable?

A stable locator is unlikely to change when the application's visual layout or internal DOM structure changes.

Good candidates include:
- Accessible role/name
- Associated label
- Stable test ID
- Stable business attribute

Avoid unnecessary dependence on:
- Deep DOM hierarchy
- Dynamic generated classes
- Position
- Unstable indexes

### 76. What is locator strictness?

Playwright expects actions such as `click()` to resolve to the intended element. If a locator unexpectedly matches multiple elements, Playwright can report a strict mode violation instead of silently choosing one.

This helps detect ambiguous test code.

---

# 14. Interviewer Follow-Up Questions

### 77. Why did you use `getByRole()` for Username?

Expected answer:

Because Username is a textbox and its accessible name can be used to identify it in a semantic and readable way.

### 78. Why did you use `locator()` for the company name?

Expected answer:

Because the field has a stable ID and a CSS ID locator provides a direct and readable way to identify the element.

### 79. Why did you use `exact: true` for Leads?

Expected answer:

To make the text match exact and avoid accidentally matching another element with similar text.

### 80. Why did you use `selectOption()`?

Expected answer:

Because the source dropdown is implemented using a native HTML `<select>` element.

### 81. What happens if the dropdown is not implemented using `<select>`?

Expected answer:

`selectOption()` should not be used. I would inspect the DOM and interact with the custom dropdown using its actual UI elements.

### 82. Why should you not rely heavily on indexes?

Expected answer:

Indexes depend on the order of elements. If the application changes the order or inserts another element, the test may interact with the wrong element.

### 83. What is the difference between action and assertion?

An action interacts with or changes the application.

Examples:

```text
click()
fill()
selectOption()
```

An assertion verifies the expected state.

Examples:

```text
toBeVisible()
toHaveText()
toHaveValue()
```

---

# 15. Quick Interview Revision Table

| Topic | Key Answer |
|---|---|
| Playwright | Web automation/testing framework |
| Playwright Test | Test runner |
| `test()` | Defines a test |
| `page` | Built-in page fixture |
| Browser | Browser instance |
| Context | Isolated browser session |
| Page | Browser tab |
| `goto()` | Navigate to URL |
| Locator | Identifies web element |
| `getByRole()` | Role/accessibility-based locator |
| `getByLabel()` | Label-based form locator |
| `getByText()` | Visible text locator |
| `exact: true` | Exact text matching |
| `getByPlaceholder()` | Placeholder-based locator |
| `getByTestId()` | Test ID locator |
| `locator()` | CSS/XPath/general locator |
| `fill()` | Fill editable field |
| `click()` | Click element |
| `selectOption()` | Native select dropdown |
| `value` | Option value attribute |
| `label` | Visible option text |
| `index` | Zero-based option position |
| `waitForTimeout()` | Fixed wait |
| Auto-wait | Playwright waits for actionability |
| `expect()` | Assertion |
| Web-first assertion | Condition-based assertion with waiting |
| Single select | One selected option |
| Multi select | Multiple selected options with appropriate select support |

---

# 16. Final Interview Guidance

When explaining Playwright in an interview, do not only list APIs. Explain the reasoning behind your choices.

A strong answer could be:

> I prefer semantic and user-facing locators such as `getByRole()` and `getByLabel()` when they are available because they make the test readable and less dependent on DOM implementation details. I use CSS or XPath when they provide a stable locator appropriate for the application. For native `<select>` dropdowns, I use `selectOption()` and can select by value, label, or index. I avoid unnecessary `waitForTimeout()` calls because Playwright provides auto-waiting and web-first assertions. Finally, I use assertions to verify the expected business outcome rather than only performing UI actions.
