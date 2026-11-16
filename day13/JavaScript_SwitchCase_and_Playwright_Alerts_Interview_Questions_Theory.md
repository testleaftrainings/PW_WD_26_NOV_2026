# JavaScript Switch Case & Playwright Alerts — Interview Questions & Theory

## 1. Core Theory

### What is a `switch` statement?

A `switch` statement is a decision-making statement used when one value needs to be compared against multiple fixed values.

### Basic syntax

```javascript
switch (expression) {

    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Code when no case matches
}
```

### Important components

- `switch` → contains the value being evaluated.
- `case` → represents a possible value.
- `break` → exits the switch after a matching case.
- `default` → executes when no case matches.

---

# 2. Basic Switch Case Interview Questions

## Q1. What is a switch case?

A `switch` statement compares one expression against multiple fixed values and executes the matching `case`.

---

## Q2. When would you use switch instead of if-else?

Use `switch` when one value needs to be compared against multiple fixed values.

Example:

```javascript
let browser = "Chrome";

switch (browser) {

    case "Chrome":
        console.log("Chrome browser");
        break;

    case "Firefox":
        console.log("Firefox browser");
        break;

    case "Edge":
        console.log("Edge browser");
        break;

    default:
        console.log("Unsupported browser");
}
```

For ranges or complex conditions, `if...else if` is usually more suitable.

---

## Q3. What is the purpose of `case`?

A `case` represents a possible value that can match the value provided to `switch`.

---

## Q4. What is the purpose of `break`?

`break` terminates the switch execution and exits the switch.

---

## Q5. What happens if `break` is not used?

Execution can continue into subsequent cases. This is called **fall-through**.

Example:

```javascript
let day = "Thursday";

switch (day) {

    case "Thursday":
        console.log("Thursday");

    case "Friday":
        console.log("Friday");

    default:
        console.log("Invalid");
}
```

Because `break` is missing, execution can continue after the matching case.

---

## Q6. What is `default`?

`default` executes when none of the cases match.

```javascript
default:
    console.log("Invalid input");
```

---

## Q7. Is `default` mandatory?

No. A switch can work without a `default` block.

However, `default` is useful for handling unexpected or invalid values.

---

# 3. Switch Case Code-Based Questions

## Q8. What is the output?

```javascript
let day = "Thursday";

switch (day) {

    case "Monday":
        console.log("Monday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    default:
        console.log("Invalid");
}
```

### Answer

```text
Thursday
```

The value `"Thursday"` matches the second case.

---

## Q9. What is the output?

```javascript
let day = "Holiday";

switch (day) {

    case "Monday":
        console.log("Monday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}
```

### Answer

```text
Invalid day
```

No case matches, so `default` executes.

---

## Q10. What is the output?

```javascript
let option = 2;

switch (option) {

    case 1:
        console.log("Create");
        break;

    case 2:
        console.log("Update");
        break;

    case 3:
        console.log("Delete");
        break;

    default:
        console.log("Invalid");
}
```

### Answer

```text
Update
```

---

# 4. Scenario-Based Switch Questions

## Q11. You need to handle Monday to Sunday. Which statement would you use?

A `switch` is a suitable choice because one day value is compared with multiple fixed values.

---

## Q12. You need to categorize employees based on salary ranges. Would you use switch?

`if...else if` is generally more suitable because salary categories involve ranges.

---

## Q13. You need to handle Chrome, Firefox, and Edge. Which approach is suitable?

A `switch` statement is suitable because the browser variable contains one of several fixed values.

---

## Q14. You need to create a menu with options 1, 2, 3, and 4. Which statement can be used?

A `switch` statement can be used because each number represents a fixed option.

---

# 5. Follow-Up Switch Questions

## Q15. Is switch always faster than if-else?

Do not state that switch is always faster.

A better interview answer is:

> Switch is mainly useful for readability and structure when comparing one expression against multiple fixed values. Performance depends on the JavaScript engine and implementation.

---

## Q16. Can multiple cases execute?

Yes. If `break` is omitted, execution can fall through into subsequent cases.

---

## Q17. Can multiple cases share the same code?

Yes.

```javascript
let day = "Saturday";

switch (day) {

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
```

Both Saturday and Sunday execute the same code.

---

# 6. Browser Alerts — Core Theory

## What is a browser alert?

A browser alert is a JavaScript browser dialog that appears on top of the webpage.

Common browser dialog types include:

- `alert`
- `confirm`
- `prompt`
- `beforeunload`

In Playwright, browser dialogs are handled using the `page.on("dialog")` event.

---

# 7. Playwright Dialog Event

### Syntax

```typescript
page.on("dialog", async (dialog) => {

    // Handle the dialog

});
```

The `dialog` object represents the browser dialog that appeared.

---

# 8. Alert Dialog

An alert displays a message to the user and normally provides an OK action.

### Playwright handling

```typescript
page.on("dialog", async (dialogAlert) => {

    if (dialogAlert.type() === "alert") {

        await dialogAlert.accept();

    }

});
```

### Key method

```typescript
await dialogAlert.accept();
```

This accepts the alert.

---

# 9. Confirm Dialog

A confirm dialog normally provides:

- OK
- Cancel

### Accept

```typescript
await dialogAlert.accept();
```

This performs the OK action.

### Dismiss

```typescript
await dialogAlert.dismiss();
```

This performs the Cancel action.

---

# 10. Prompt Dialog

A prompt dialog allows the user to enter text.

### Accept with text

```typescript
await dialogAlert.accept("Vineeth Rajendran");
```

This supplies the text and accepts the prompt.

### Dismiss

```typescript
await dialogAlert.dismiss();
```

This cancels the prompt.

---

# 11. Dialog Methods

| Method | Purpose |
|---|---|
| `dialog.type()` | Returns the dialog type |
| `dialog.message()` | Returns the dialog message |
| `dialog.defaultValue()` | Returns the default prompt value |
| `dialog.accept()` | Accepts the dialog |
| `dialog.accept("text")` | Enters text and accepts a prompt |
| `dialog.dismiss()` | Dismisses the dialog |

---

# 12. Alert Interview Questions

## Q18. How do you handle browser alerts in Playwright?

Use the `page.on("dialog")` event.

```typescript
page.on("dialog", async (dialog) => {
    await dialog.accept();
});
```

---

## Q19. How do you identify the type of browser dialog?

Use:

```typescript
dialog.type()
```

Possible values include:

```text
alert
confirm
prompt
beforeunload
```

---

## Q20. How do you accept an alert?

```typescript
await dialog.accept();
```

---

## Q21. How do you dismiss a confirm dialog?

```typescript
await dialog.dismiss();
```

---

## Q22. How do you enter text into a prompt?

```typescript
await dialog.accept("Vineeth Rajendran");
```

---

## Q23. How do you read the dialog message?

Use:

```typescript
console.log(dialog.message());
```

---

## Q24. How do you get the default value of a prompt?

Use:

```typescript
console.log(dialog.defaultValue());
```

---

## Q25. What is the difference between `accept()` and `dismiss()`?

- `accept()` → accepts the dialog / performs the OK action.
- `dismiss()` → dismisses the dialog / performs the Cancel action where applicable.

---

# 13. Scenario-Based Alert Questions

## Q26. A webpage displays an alert after clicking a button. How would you handle it?

Register a dialog listener before triggering the alert:

```typescript
page.on("dialog", async (dialog) => {

    await dialog.accept();

});

await page.getByText("Show").click();
```

---

## Q27. A confirmation dialog asks "Are you sure?" and you want to click Cancel. What will you use?

Use:

```typescript
await dialog.dismiss();
```

---

## Q28. A prompt asks for the user's name. How would you enter the name and submit it?

Use:

```typescript
await dialog.accept("Vineeth Rajendran");
```

---

## Q29. You need to handle different types of dialogs from the same page. What would you do?

Check `dialog.type()` and handle each type separately.

```typescript
page.on("dialog", async (dialogAlert) => {

    if (dialogAlert.type() === "alert") {
        await dialogAlert.accept();
    }

    else if (dialogAlert.type() === "confirm") {
        await dialogAlert.dismiss();
    }

    else if (dialogAlert.type() === "prompt") {
        await dialogAlert.accept("Vineeth Rajendran");
    }

});
```

---

# 14. Code-Based Alert Questions

## Q30. What does this code do?

```typescript
page.on("dialog", async (dialogAlert) => {

    if (dialogAlert.type() === "prompt") {
        await dialogAlert.accept("Vineeth Rajendran");
    }

});
```

### Answer

It listens for a browser dialog. If the dialog is a prompt, it enters `"Vineeth Rajendran"` and accepts the prompt.

---

## Q31. What does this code do?

```typescript
page.on("dialog", async (dialogAlert) => {

    if (dialogAlert.type() === "confirm") {
        await dialogAlert.dismiss();
    }

});
```

### Answer

It listens for a dialog and dismisses it if it is a confirm dialog. For a confirm dialog, this is equivalent to choosing Cancel.

---

## Q32. What does `dialog.message()` return?

It returns the message displayed inside the browser dialog.

---

# 15. Important Dialog Timing Question

## Q33. Why should the dialog listener be registered before clicking the button that opens the dialog?

The listener should be ready before the dialog is triggered so Playwright can handle the dialog when it appears.

Correct approach:

```typescript
page.on("dialog", async (dialogAlert) => {

    await dialogAlert.accept();

});

await page.getByText("Show").click();
```

---

# 16. `waitForTimeout()` and Dialogs

## Q34. Do we need `waitForTimeout()` to handle a browser dialog?

Normally, no.

Dialog handling is event-based:

```typescript
page.on("dialog", async (dialogAlert) => {
    await dialogAlert.accept();
});
```

Using an arbitrary fixed delay such as:

```typescript
await page.waitForTimeout(10000);
```

is generally unnecessary for dialog handling.

---

# 17. Alert vs Confirm vs Prompt

| Dialog | Purpose | Typical handling |
|---|---|---|
| Alert | Displays information | `accept()` |
| Confirm | Asks for confirmation | `accept()` / `dismiss()` |
| Prompt | Gets text input | `accept("text")` / `dismiss()` |
| Beforeunload | Warns before leaving | Accept/dismiss depending on scenario |

---

# 18. Combined Practical Interview Question

## Q35. Write a Playwright test that handles alert, confirm, and prompt.

```typescript
import test from "@playwright/test";

test("Test to learn alerts", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async (dialogAlert) => {

        if (dialogAlert.type() === "alert") {
            await dialogAlert.accept();
        }

        else if (dialogAlert.type() === "confirm") {
            await dialogAlert.dismiss();
        }

        else if (dialogAlert.type() === "prompt") {
            await dialogAlert.accept("Vineeth Rajendran");
        }

    });

    await page.locator("//span[text()='Show']").first().click();

    await page.locator("//span[text()='Show']").nth(1).click();

    await page.locator("//span[text()='Show']").nth(4).click();

});
```

---

# 19. Common Interview Mistakes

### Mistake 1 — Registering the dialog listener after triggering the dialog

Incorrect order:

```typescript
await page.getByText("Show").click();

page.on("dialog", async (dialog) => {
    await dialog.accept();
});
```

Better:

```typescript
page.on("dialog", async (dialog) => {
    await dialog.accept();
});

await page.getByText("Show").click();
```

---

### Mistake 2 — Using `dismiss()` when you need OK

If you need to accept a dialog:

```typescript
await dialog.accept();
```

If you need to cancel/dismiss it:

```typescript
await dialog.dismiss();
```

---

### Mistake 3 — Forgetting prompt text

For a prompt that requires input:

```typescript
await dialog.accept("Vineeth Rajendran");
```

not simply:

```typescript
await dialog.accept();
```

if the test requires a specific input value.

---

# 20. Quick Interview Revision

## Switch Case

**What is switch?**

> A decision-making statement used to compare one expression against multiple fixed values.

**What is case?**

> A possible value that can match the switch expression.

**What is break?**

> It exits the switch after the matching case.

**What is default?**

> It executes when no case matches.

**What is fall-through?**

> Execution continuing into subsequent cases when `break` is omitted.

---

## Playwright Alerts

**How do you handle browser dialogs?**

> Using `page.on("dialog")`.

**How do you identify the dialog type?**

```typescript
dialog.type()
```

**How do you accept a dialog?**

```typescript
dialog.accept()
```

**How do you dismiss a dialog?**

```typescript
dialog.dismiss()
```

**How do you enter text into a prompt?**

```typescript
dialog.accept("text")
```

**How do you read the dialog message?**

```typescript
dialog.message()
```

**How do you get a prompt's default value?**

```typescript
dialog.defaultValue()
```

---

# 21. Strong Interview Answers

### Explain switch case

> "`switch` is a decision-making statement used when one expression needs to be compared against multiple fixed values. Each possible value is represented by a `case`. `break` is commonly used to exit after a matching case, and `default` handles values for which no case matches."

### Explain browser alerts in Playwright

> "Playwright handles browser dialogs using the `page.on('dialog')` event. The dialog type can be identified using `dialog.type()`. We can accept a dialog using `accept()`, dismiss it using `dismiss()`, read its message using `message()`, and provide input to a prompt using `accept('text')`."

### Explain alert vs confirm vs prompt

> "An alert displays information, a confirm asks the user to accept or cancel an action, and a prompt accepts text input from the user. In Playwright, these are handled through the Dialog object."

---

# 22. Final Quick Reference

```text
SWITCH
  switch(expression)
       ↓
    case value
       ↓
    matching code
       ↓
     break
       ↓
   exit switch

No match
       ↓
   default
```

```text
PLAYWRIGHT DIALOG
       ↓
page.on("dialog")
       ↓
dialog object
       ↓
dialog.type()
       ↓
 ┌────────┬─────────┬────────┐
 │ alert  │ confirm │ prompt │
 └────────┴─────────┴────────┘
      ↓        ↓         ↓
  accept   accept/    accept("text")
  dismiss  dismiss    / dismiss
```
