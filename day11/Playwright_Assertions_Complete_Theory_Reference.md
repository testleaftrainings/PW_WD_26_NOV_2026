# Playwright Assertions – Complete Theory & Reference Notes

## 1. Introduction to Playwright Assertions

Assertions are used in Playwright Test to verify that the application behaves as expected.

An assertion compares the **actual state of the application** with the **expected state**.

For example:

```typescript
await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat");
```

This verifies that the current page title matches the expected title.

Assertions are an essential part of automation because navigation and actions alone do not prove that a test passed. A good test performs an action and then verifies the expected result.

### Basic Pattern

```typescript
await expect(actual).assertionMethod(expected);
```

Example:

```typescript
await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
```

---

## 2. Importing `expect`

The `expect` function is provided by Playwright Test.

```typescript
import { expect, test } from "@playwright/test";
```

A typical Playwright assertion test looks like:

```typescript
import { expect, test } from "@playwright/test";

test("Test to learn Assertions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat");

});
```

---

# 3. Types of Assertions in Playwright

Assertions can broadly be grouped into:

1. Page-level assertions
2. Locator / element-level assertions
3. Attribute and value assertions
4. State assertions
5. Text assertions
6. Screenshot assertions
7. Soft assertions
8. Generic value assertions
9. Advanced assertions and retry behavior

---

# 4. Page-Level Assertions

Page-level assertions validate information related to the current page.

## 4.1 `toHaveTitle()`

Used to verify the page title.

### Syntax

```typescript
await expect(page).toHaveTitle("Expected Title");
```

### Example

```typescript
await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat");
```

### Regular Expression

A regular expression can be used when the complete title does not need to be matched.

```typescript
await expect(page).toHaveTitle(/Automation Platform/);
```

### When to Use

Use `toHaveTitle()` when you need to verify:

- Page title
- Navigation result
- Browser tab title
- Correct application page

---

## 4.2 `toHaveURL()`

Used to verify the current page URL.

### Exact URL

```typescript
await expect(page).toHaveURL("https://example.com/login");
```

### Regular Expression

```typescript
await expect(page).toHaveURL(/opentaps/);
```

### Example

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");

await expect(page).toHaveURL(/opentaps/);
```

### When to Use

Use `toHaveURL()` after:

- Login
- Navigation
- Form submission
- Redirect
- Link clicks

---

# 5. Locator / Element-Level Assertions

Locator assertions validate the state or properties of elements.

Example:

```typescript
const usernameField = page.getByRole("textbox", { name: "Username" });

await expect(usernameField).toBeVisible();
```

---

## 5.1 `toBeVisible()`

Verifies that an element is visible.

```typescript
await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
```

### Use Case

Use when the expected UI element should be displayed to the user.

---

## 5.2 `toBeHidden()`

Verifies that an element is hidden.

```typescript
await expect(page.getByText("Loading")).toBeHidden();
```

### Use Case

Useful for verifying:

- Loading indicators disappear
- Modal closes
- Error message is hidden
- Temporary UI elements disappear

---

## 5.3 `toBeAttached()`

Verifies that an element is attached to the DOM.

```typescript
await expect(page.locator("#username")).toBeAttached();
```

Visibility is not required. An element can be attached to the DOM while not being visible.

---

## 5.4 `toBeInViewport()`

Verifies that the element is within the viewport.

```typescript
await expect(page.getByRole("button", { name: "Login" })).toBeInViewport();
```

---

# 6. Enabled and Disabled State Assertions

## 6.1 `toBeEnabled()`

Verifies that an element is enabled.

```typescript
await expect(page.getByRole("button", { name: "Login" })).toBeEnabled();
```

### Use Case

Verify that a user can interact with a control.

---

## 6.2 `toBeDisabled()`

Verifies that an element is disabled.

```typescript
await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();
```

### Use Case

Useful for validating:

- Submit buttons before mandatory fields are entered
- Disabled controls
- Restricted actions

---

# 7. Checkbox and Radio Assertions

## 7.1 `toBeChecked()`

Verifies that a checkbox or radio button is selected.

```typescript
await expect(page.getByRole("checkbox", { name: "Remember Me" })).toBeChecked();
```

---

## 7.2 `toBeChecked({ checked: false })`

Verifies that a checkbox is not selected.

```typescript
await expect(page.getByRole("checkbox", { name: "Remember Me" }))
    .toBeChecked({ checked: false });
```

---

# 8. Text Assertions

Text assertions are used to verify text displayed by an element.

## 8.1 `toHaveText()`

Verifies the complete text content of an element.

```typescript
const usernameLabel = page.locator("//label[text()='Username']");

await expect(usernameLabel).toHaveText("Username");
```

### Use Case

Use when the complete expected text matters.

---

## 8.2 `toContainText()`

Verifies that an element contains specific text.

```typescript
await expect(page.locator("h1")).toContainText("Welcome");
```

If the element contains:

```text
Welcome to Testleaf Automation Platform
```

the following can pass:

```typescript
await expect(page.locator("h1")).toContainText("Welcome");
```

### Difference

| Assertion | Purpose |
|---|---|
| `toHaveText()` | Verify expected text |
| `toContainText()` | Verify that expected text exists within the content |

---

# 9. Value Assertions

## 9.1 `toHaveValue()`

Verifies the current value of an input, textarea, or similar form control.

```typescript
await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

await expect(page.getByRole("textbox", { name: "Username" }))
    .toHaveValue("Demosalesmanager");
```

### Use Case

Useful after:

- `fill()`
- `type()`
- Form data entry
- Editing fields

---

# 10. Attribute Assertions

## 10.1 `toHaveAttribute()`

Verifies an element attribute.

### Syntax

```typescript
await expect(locator).toHaveAttribute("attribute", "expectedValue");
```

### Example

```typescript
await expect(page.getByRole("button", { name: "Login" }))
    .toHaveAttribute("type", "submit");
```

### Regular Expression

```typescript
await expect(locator).toHaveAttribute("href", /login/);
```

---

# 11. CSS Class Assertions

## 11.1 `toHaveClass()`

Verifies the CSS class of an element.

```typescript
await expect(page.locator("#username"))
    .toHaveClass("form-control");
```

A regular expression can also be used:

```typescript
await expect(page.locator("#username"))
    .toHaveClass(/form-control/);
```

---

# 12. ID and Accessibility Assertions

## 12.1 `toHaveId()`

Verifies the ID of an element.

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toHaveId("username");
```

---

## 12.2 `toHaveAccessibleName()`

Verifies the accessible name of an element.

```typescript
await expect(page.getByRole("button"))
    .toHaveAccessibleName("Login");
```

This is particularly useful when working with accessibility-oriented locators such as `getByRole()`.

---

## 12.3 `toHaveRole()`

Verifies the ARIA role of an element.

```typescript
await expect(page.locator("button"))
    .toHaveRole("button");
```

---

# 13. Form State Assertions

## 13.1 `toBeEditable()`

Verifies that a form element can be edited.

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toBeEditable();
```

---

## 13.2 `toBeEmpty()`

Verifies that an input, textarea, or relevant editable element is empty.

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toBeEmpty();
```

---

# 14. Soft Assertions

A normal assertion failure stops the current test at that point.

A soft assertion records the failure but allows the test to continue.

### Syntax

```typescript
await expect.soft(page).toHaveTitle("Expected Title");
```

### Example

```typescript
await expect.soft(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat");

await expect(page).toHaveURL(/opentaps/);

await expect(page.getByRole("textbox", { name: "Username" }))
    .toBeVisible();
```

### When to Use

Soft assertions are useful when you want to validate multiple independent conditions and collect failures together.

### Important Difference

| Normal Assertion | Soft Assertion |
|---|---|
| `expect()` | `expect.soft()` |
| Failure normally stops further execution at that point | Test continues |
| Useful for critical validations | Useful for independent validations |

---

# 15. Assertion Timeout

Playwright assertions automatically wait for the expected condition for a limited period.

A timeout can be specified for an individual assertion.

```typescript
await expect(page).toHaveTitle(
    "Leaftaps - TestLeaf Automation Plat",
    { timeout: 10000 }
);
```

This gives the assertion up to 10 seconds to satisfy the condition.

### Important Concept

An assertion timeout is different from a fixed wait.

Assertion:

```typescript
await expect(locator).toBeVisible();
```

The assertion waits for the condition.

Fixed wait:

```typescript
await page.waitForTimeout(5000);
```

The test simply pauses for five seconds.

Prefer condition-based waiting and web-first assertions over unnecessary fixed waits.

---

# 16. Web-First Assertions

Playwright assertions are designed to work with the asynchronous nature of modern web applications.

For example:

```typescript
await expect(page.getByRole("button", { name: "Login" }))
    .toBeVisible();
```

Playwright can wait for the expected state instead of requiring the test author to insert a fixed delay.

This makes tests more stable than:

```typescript
await page.waitForTimeout(5000);
```

---

# 17. Assertion with Locators

A recommended pattern is to create a locator and then assert against it.

```typescript
const usernameField = page.getByRole("textbox", { name: "Username" });

await expect(usernameField).toBeVisible();

await expect(usernameField).toBeEnabled();

await expect(usernameField).toHaveValue("");
```

This improves readability and makes the test easier to maintain.

---

# 18. Complete Assertion Example

```typescript
import { expect, test } from "@playwright/test";

test("Test to learn Assertions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await expect.soft(
        page
    ).toHaveTitle(
        "Leaftaps - TestLeaf Automation Plat",
        { timeout: 10000 }
    );

    await expect(page).toHaveURL(/opentaps/);

    const usernameField = page.getByRole(
        "textbox",
        { name: "Username" }
    );

    await expect(usernameField).toBeVisible();

    await expect(usernameField).toBeEnabled();

    const usernameLabel = page.locator("//label[text()='Username']");

    await expect(usernameLabel).toHaveText("Username");

});
```

---

# 19. Common Assertion Methods – Quick Reference

| Assertion | Purpose |
|---|---|
| `toHaveTitle()` | Verify page title |
| `toHaveURL()` | Verify page URL |
| `toBeVisible()` | Verify element is visible |
| `toBeHidden()` | Verify element is hidden |
| `toBeAttached()` | Verify element is attached to DOM |
| `toBeInViewport()` | Verify element is inside viewport |
| `toBeEnabled()` | Verify element is enabled |
| `toBeDisabled()` | Verify element is disabled |
| `toBeEditable()` | Verify element is editable |
| `toBeEmpty()` | Verify editable element is empty |
| `toBeChecked()` | Verify checkbox/radio state |
| `toHaveText()` | Verify text |
| `toContainText()` | Verify partial text |
| `toHaveValue()` | Verify input value |
| `toHaveAttribute()` | Verify attribute |
| `toHaveClass()` | Verify CSS class |
| `toHaveId()` | Verify element ID |
| `toHaveAccessibleName()` | Verify accessible name |
| `toHaveRole()` | Verify ARIA role |
| `toHaveScreenshot()` | Visual comparison |
| `toEqual()` | Compare expected and actual values |
| `toStrictEqual()` | Strict value comparison |
| `toBeTruthy()` | Verify truthy value |
| `toBeFalsy()` | Verify falsy value |
| `toBe()` | Verify exact identity/value relationship |

---

# 20. Common Assertion Categories

## Page Assertions

```typescript
await expect(page).toHaveTitle("Title");
await expect(page).toHaveURL(/dashboard/);
```

## Visibility Assertions

```typescript
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
```

## State Assertions

```typescript
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
```

## Text Assertions

```typescript
await expect(locator).toHaveText("Login");
await expect(locator).toContainText("Log");
```

## Input Assertions

```typescript
await expect(locator).toHaveValue("Vineeth");
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
```

## Attribute Assertions

```typescript
await expect(locator).toHaveAttribute("type", "submit");
await expect(locator).toHaveClass("btn");
await expect(locator).toHaveId("username");
```

---

# 21. Assertion vs Action

An action changes or interacts with the application.

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

An assertion verifies the result.

```typescript
await expect(page.getByText("Welcome")).toBeVisible();
```

A complete automation test generally follows:

```text
Navigate → Action → Assertion
```

Example:

```typescript
await page.goto("https://example.com");

await page.getByRole("button", { name: "Login" }).click();

await expect(page.getByText("Dashboard")).toBeVisible();
```

---

# 22. Best Practices

1. Use assertions after meaningful actions.
2. Prefer web-first assertions over fixed waits.
3. Use `toHaveText()` when the complete text matters.
4. Use `toContainText()` when only part of the text matters.
5. Use `toHaveValue()` for input values.
6. Use `toBeVisible()` to verify user-visible elements.
7. Use `toBeEnabled()` and `toBeDisabled()` for control state.
8. Use `toBeChecked()` for checkbox and radio state.
9. Use `toHaveAttribute()` for attribute validation.
10. Use soft assertions only when continuing after an individual failure is useful.
11. Keep assertion messages meaningful and focused.
12. Prefer stable locators before writing assertions.
13. Avoid replacing condition-based assertions with `waitForTimeout()`.

---

# 23. Key Interview Concepts

### What is an assertion?

An assertion validates that the actual application state matches the expected state.

### Why are assertions important?

Actions alone do not verify application behavior. Assertions confirm the expected result.

### What is the difference between `toHaveText()` and `toContainText()`?

`toHaveText()` is used when the expected text should match the element's text content, while `toContainText()` checks that the expected text occurs within the content.

### What is the difference between `expect()` and `expect.soft()`?

A normal assertion failure normally interrupts the test at that assertion. A soft assertion records the failure and allows execution to continue.

### Why should `waitForTimeout()` generally be avoided?

It introduces an arbitrary delay rather than waiting for the actual application condition. Web-first assertions provide condition-based waiting.

---

# 24. Recommended Assertion Strategy

For a typical UI test:

```text
1. Navigate
2. Perform action
3. Verify page state
4. Verify element visibility/state
5. Verify text/value/attribute
6. Continue with the next business operation
```

Example:

```typescript
await page.goto("https://leaftaps.com/opentaps/control/main");

await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");

await page.getByRole("textbox", { name: "Password" })
    .fill("crmsfa");

await page.getByRole("button", { name: "Login" })
    .click();

await expect(page).toHaveURL(/opentaps/);

await expect(page.getByText("CRM/SFA")).toBeVisible();
```

This provides a clear relationship between the test action and the expected result.
