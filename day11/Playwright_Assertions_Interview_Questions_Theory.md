# Playwright Assertions – Interview Questions & Theory

## 1. Core Theory

Assertions are validation statements used to confirm that the application has reached the expected state.

Playwright Test provides the `expect` API for assertions.

```typescript
import { expect, test } from "@playwright/test";
```

Basic syntax:

```typescript
await expect(actual).assertionMethod(expected);
```

Example:

```typescript
await expect(page).toHaveURL(/opentaps/);
```

Assertions are important because a test should not only perform actions; it should also verify the result of those actions.

---

# 2. Page-Level Assertions

## `toHaveTitle()`

Used to verify the current page title.

```typescript
await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Plat");
```

Regular expression:

```typescript
await expect(page).toHaveTitle(/Automation Platform/);
```

### Interview Question

**Q: How do you validate the browser page title in Playwright?**

**Answer:**

Use `toHaveTitle()` with the `page` object.

```typescript
await expect(page).toHaveTitle("Expected Title");
```

---

## `toHaveURL()`

Used to verify the current URL.

```typescript
await expect(page).toHaveURL(/opentaps/);
```

### Interview Question

**Q: How do you verify that navigation was successful?**

**Answer:**

Validate the resulting URL using `toHaveURL()`.

```typescript
await expect(page).toHaveURL(/dashboard/);
```

---

# 3. Element-Level Assertions

## `toBeVisible()`

```typescript
await expect(page.getByRole("button", { name: "Login" }))
    .toBeVisible();
```

### Interview Question

**Q: How do you verify that an element is displayed?**

**Answer:**

Use `toBeVisible()`.

---

## `toBeHidden()`

```typescript
await expect(page.getByText("Loading"))
    .toBeHidden();
```

### Scenario

A loading spinner should disappear after the page finishes loading.

```typescript
await expect(page.locator(".spinner")).toBeHidden();
```

---

## `toBeEnabled()`

```typescript
await expect(page.getByRole("button", { name: "Login" }))
    .toBeEnabled();
```

---

## `toBeDisabled()`

```typescript
await expect(page.getByRole("button", { name: "Submit" }))
    .toBeDisabled();
```

---

## `toBeChecked()`

```typescript
await expect(page.getByRole("checkbox", { name: "Remember Me" }))
    .toBeChecked();
```

---

# 4. Text Assertions

## `toHaveText()`

Used to verify expected text.

```typescript
const usernameLabel = page.locator("//label[text()='Username']");

await expect(usernameLabel).toHaveText("Username");
```

### Interview Question

**Q: What is the difference between `toHaveText()` and `toContainText()`?**

**Answer:**

`toHaveText()` is used when the expected text should match the element's text content. `toContainText()` is used when only a portion of the text needs to be verified.

Example:

```typescript
await expect(locator).toHaveText("Welcome to Testleaf");
```

```typescript
await expect(locator).toContainText("Welcome");
```

---

# 5. Input Assertions

## `toHaveValue()`

```typescript
await page.getByRole("textbox", { name: "Username" })
    .fill("Demosalesmanager");

await expect(page.getByRole("textbox", { name: "Username" }))
    .toHaveValue("Demosalesmanager");
```

### Interview Question

**Q: How do you verify the value entered into a textbox?**

**Answer:**

Use `toHaveValue()`.

---

## `toBeEditable()`

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toBeEditable();
```

## `toBeEmpty()`

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toBeEmpty();
```

---

# 6. Attribute Assertions

## `toHaveAttribute()`

```typescript
await expect(page.getByRole("button", { name: "Login" }))
    .toHaveAttribute("type", "submit");
```

### Scenario

You need to verify that a link points to the expected page.

```typescript
await expect(page.getByRole("link", { name: "Home" }))
    .toHaveAttribute("href", "/home");
```

---

## `toHaveClass()`

```typescript
await expect(page.locator("#username"))
    .toHaveClass("form-control");
```

## `toHaveId()`

```typescript
await expect(page.getByRole("textbox", { name: "Username" }))
    .toHaveId("username");
```

---

# 7. Accessibility Assertions

## `toHaveAccessibleName()`

```typescript
await expect(page.getByRole("button"))
    .toHaveAccessibleName("Login");
```

## `toHaveRole()`

```typescript
await expect(page.locator("button"))
    .toHaveRole("button");
```

These are useful when validating accessibility-related element information.

---

# 8. Soft Assertions

## Normal Assertion

```typescript
await expect(page).toHaveTitle("Expected Title");
```

If this assertion fails, execution normally stops at that point.

## Soft Assertion

```typescript
await expect.soft(page).toHaveTitle("Expected Title");
```

The failure is recorded while execution continues.

### Interview Question

**Q: What is the difference between `expect()` and `expect.soft()`?**

**Answer:**

`expect()` performs a normal assertion and normally stops the test flow when the assertion fails. `expect.soft()` records the failure and allows subsequent test steps to continue.

### Scenario

You want to validate several independent page properties and collect all failures.

```typescript
await expect.soft(page).toHaveTitle("Expected Title");

await expect.soft(page).toHaveURL(/dashboard/);

await expect.soft(page.getByText("Welcome"))
    .toBeVisible();
```

---

# 9. Assertion Timeout

Assertions can have an individual timeout.

```typescript
await expect(page).toHaveTitle(
    "Leaftaps - TestLeaf Automation Plat",
    { timeout: 10000 }
);
```

### Interview Question

**Q: How do you provide a custom timeout for an assertion?**

**Answer:**

Pass a timeout option to the assertion.

```typescript
await expect(locator).toBeVisible({
    timeout: 10000
});
```

---

# 10. Assertions vs `waitForTimeout()`

### Fixed Wait

```typescript
await page.waitForTimeout(5000);
```

This pauses for five seconds regardless of whether the application is ready.

### Assertion

```typescript
await expect(page.getByText("Dashboard"))
    .toBeVisible();
```

The assertion waits for the expected condition.

### Interview Question

**Q: Why should `waitForTimeout()` generally be avoided?**

**Answer:**

Because it uses an arbitrary delay. If the application is ready after one second, the test unnecessarily waits longer. If the application needs more than five seconds, the test may still fail. Condition-based assertions are generally more reliable.

---

# 11. Locator and Assertion Combination

A strong Playwright test commonly follows this pattern:

```typescript
const usernameField = page.getByRole(
    "textbox",
    { name: "Username" }
);

await expect(usernameField).toBeVisible();

await expect(usernameField).toBeEnabled();

await usernameField.fill("Demosalesmanager");

await expect(usernameField)
    .toHaveValue("Demosalesmanager");
```

### Interview Question

**Q: Why create a locator variable before asserting?**

**Answer:**

It improves readability, avoids repeating the locator, and makes the test easier to maintain.

---

# 12. Scenario-Based Interview Questions

## Scenario 1: Verify Login Button

**Question:** How would you verify that the Login button is visible and enabled?

```typescript
const loginButton = page.getByRole(
    "button",
    { name: "Login" }
);

await expect(loginButton).toBeVisible();

await expect(loginButton).toBeEnabled();
```

---

## Scenario 2: Verify Username Field

**Question:** How would you verify that the Username field is visible, editable, and contains the expected value?

```typescript
const usernameField = page.getByRole(
    "textbox",
    { name: "Username" }
);

await expect(usernameField).toBeVisible();

await expect(usernameField).toBeEditable();

await usernameField.fill("Demosalesmanager");

await expect(usernameField)
    .toHaveValue("Demosalesmanager");
```

---

## Scenario 3: Verify Error Message

**Question:** An invalid login displays an error message. How would you verify it?

```typescript
await expect(page.getByText("Invalid username or password"))
    .toBeVisible();

await expect(page.getByText("Invalid username or password"))
    .toContainText("Invalid");
```

---

## Scenario 4: Verify Checkbox

**Question:** How do you verify that a checkbox is selected?

```typescript
await expect(page.getByRole("checkbox", { name: "Remember Me" }))
    .toBeChecked();
```

---

## Scenario 5: Verify Disabled Button

**Question:** How do you verify that the Submit button is disabled?

```typescript
await expect(page.getByRole("button", { name: "Submit" }))
    .toBeDisabled();
```

---

## Scenario 6: Verify Navigation

**Question:** After clicking Login, how do you verify that navigation occurred?

```typescript
await page.getByRole("button", { name: "Login" }).click();

await expect(page).toHaveURL(/dashboard/);
```

---

# 13. Practical Coding Questions

## Question 1

Write a Playwright assertion to verify that the page title contains `Automation`.

### Solution

```typescript
await expect(page).toHaveTitle(/Automation/);
```

---

## Question 2

Verify that the `Username` textbox is visible.

### Solution

```typescript
await expect(
    page.getByRole("textbox", { name: "Username" })
).toBeVisible();
```

---

## Question 3

Verify that the Username field contains `Vineeth`.

### Solution

```typescript
await expect(
    page.getByRole("textbox", { name: "Username" })
).toHaveValue("Vineeth");
```

---

## Question 4

Verify that a label contains the word `Username`.

### Solution

```typescript
await expect(
    page.locator("//label[text()='Username']")
).toContainText("Username");
```

---

## Question 5

Verify that a button is disabled.

### Solution

```typescript
await expect(
    page.getByRole("button", { name: "Submit" })
).toBeDisabled();
```

---

# 14. Advanced Interview Questions

## Q1. What is a web-first assertion?

A web-first assertion is designed to verify an asynchronous web condition and automatically wait for the expected state.

Example:

```typescript
await expect(locator).toBeVisible();
```

---

## Q2. Does Playwright immediately check an assertion only once?

Not necessarily. Locator-based web assertions can retry while waiting for the expected condition until the assertion timeout is reached.

---

## Q3. What is the advantage of assertion retrying?

Modern applications often update asynchronously. Retry behavior helps prevent failures caused by checking an element before the UI has reached the expected state.

---

## Q4. Should assertions be placed only at the end of a test?

No. Assertions should be placed after meaningful operations so that the test verifies each important expected outcome.

---

## Q5. What is the difference between an action and an assertion?

An action interacts with the application.

```typescript
await page.getByRole("button", { name: "Login" }).click();
```

An assertion verifies the result.

```typescript
await expect(page.getByText("Dashboard")).toBeVisible();
```

---

# 15. Complete Interview-Style Test

```typescript
import { expect, test } from "@playwright/test";

test("Verify Login Page", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await expect(page).toHaveTitle(
        "Leaftaps - TestLeaf Automation Plat"
    );

    await expect(page).toHaveURL(/opentaps/);

    const usernameField = page.getByRole(
        "textbox",
        { name: "Username" }
    );

    const passwordField = page.getByRole(
        "textbox",
        { name: "Password" }
    );

    const loginButton = page.getByRole(
        "button",
        { name: "Login" }
    );

    await expect(usernameField).toBeVisible();

    await expect(usernameField).toBeEditable();

    await expect(passwordField).toBeVisible();

    await expect(passwordField).toBeEditable();

    await expect(loginButton).toBeVisible();

    await expect(loginButton).toBeEnabled();

    await usernameField.fill("Demosalesmanager");

    await passwordField.fill("crmsfa");

    await expect(usernameField)
        .toHaveValue("Demosalesmanager");

    await expect(passwordField)
        .toHaveValue("crmsfa");

    await loginButton.click();

    await expect(page).toHaveURL(/opentaps/);

});
```

---

# 16. Assertion Quick Revision Table

| Requirement | Assertion |
|---|---|
| Page title | `toHaveTitle()` |
| Page URL | `toHaveURL()` |
| Element visible | `toBeVisible()` |
| Element hidden | `toBeHidden()` |
| Element enabled | `toBeEnabled()` |
| Element disabled | `toBeDisabled()` |
| Element attached | `toBeAttached()` |
| Element in viewport | `toBeInViewport()` |
| Checkbox selected | `toBeChecked()` |
| Text matches | `toHaveText()` |
| Text partially matches | `toContainText()` |
| Input value | `toHaveValue()` |
| Element editable | `toBeEditable()` |
| Element empty | `toBeEmpty()` |
| Attribute | `toHaveAttribute()` |
| CSS class | `toHaveClass()` |
| ID | `toHaveId()` |
| Accessible name | `toHaveAccessibleName()` |
| Role | `toHaveRole()` |
| Soft validation | `expect.soft()` |

---

# 17. Interview Follow-Up Questions

After answering a basic assertion question, an interviewer may ask:

1. What is the difference between `toHaveText()` and `toContainText()`?
2. What is the difference between `toBeVisible()` and `toBeAttached()`?
3. Why is `waitForTimeout()` discouraged?
4. How do Playwright assertions handle asynchronous UI changes?
5. What is a web-first assertion?
6. What is the difference between normal and soft assertions?
7. How do you provide an assertion timeout?
8. How do you validate an input value?
9. How do you validate an element attribute?
10. How do you validate a checkbox?
11. How do you verify a page URL after navigation?
12. How do you verify that a button is disabled?
13. How do you verify that an element is editable?
14. How do you verify partial text?
15. Where should assertions be placed in an automation test?

---

# 18. Interview Guidance

When answering Playwright assertion questions:

- Start with the purpose of the assertion.
- Give the syntax.
- Give a small practical example.
- Explain the difference from similar assertions.
- Mention asynchronous/web-first behavior when relevant.
- Avoid using fixed waits as a substitute for assertions.
- Use realistic application scenarios.

A strong answer should explain both **what the assertion does** and **why it is useful in an automation test**.
