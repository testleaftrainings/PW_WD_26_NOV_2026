# JavaScript Switch Case & Browser Alerts — Complete Notes

## 1. Switch Case

### What is a Switch Case?

A `switch` statement is a decision-making statement used when we want to compare **one value against multiple fixed values**.

It is especially useful when the possible values are known in advance, such as:

- Days of a week
- User roles
- Browser names
- Menu options
- Status codes
- Application states

### Basic Syntax

```javascript
switch (expression) {

    case value1:
        // Code to execute
        break;

    case value2:
        // Code to execute
        break;

    case value3:
        // Code to execute
        break;

    default:
        // Code when no case matches
}
```

---

## 2. Important Components of Switch Case

### `switch`

The `switch` contains the value that we want to evaluate.

```javascript
let dayOfWeek = "Thursday";

switch (dayOfWeek) {
    // cases
}
```

Here, `dayOfWeek` contains the value `"Thursday"`.

---

### `case`

A `case` represents one possible value.

```javascript
case "Thursday":
    console.log("The Day is Thursday");
    break;
```

JavaScript compares the value inside `switch` with the case values.

---

### `break`

`break` terminates the switch statement after the matching case is executed.

```javascript
case "Thursday":
    console.log("The Day is Thursday");
    break;
```

Without `break`, execution can continue into the next cases. This is called **fall-through**.

---

### `default`

The `default` block executes when none of the cases match.

```javascript
default:
    console.log("The input is not a valid day");
```

It is similar to the `else` block in an `if...else` structure.

---

## 3. Example — Days of the Week

```javascript
function learnSwitchCase() {

    let dayOfWeek = "Thursday";

    switch (dayOfWeek) {

        case "Monday":
            console.log("The Day is Monday");
            break;

        case "Tuesday":
            console.log("The Day is Tuesday");
            break;

        case "Wednesday":
            console.log("The Day is Wednesday");
            break;

        case "Thursday":
            console.log("The Day is Thursday");
            break;

        case "Friday":
            console.log("The Day is Friday");
            break;

        case "Saturday":
            console.log("The Day is Saturday");
            break;

        case "Sunday":
            console.log("The Day is Sunday");
            break;

        default:
            console.log("The input is not a valid day");
    }
}

learnSwitchCase();
```

### Execution

The value is:

```javascript
let dayOfWeek = "Thursday";
```

JavaScript checks the cases:

```text
Monday      → No match
Tuesday     → No match
Wednesday   → No match
Thursday    → Match
```

Output:

```text
The Day is Thursday
```

After executing the matching case, `break` exits the switch.

---

## 4. Fall-Through

If `break` is not used, JavaScript can continue executing the following cases.

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

The matching case is `"Thursday"`, but because there is no `break`, execution can continue into the following cases.

This behavior is called **fall-through**.

---

## 5. Switch Case vs If Else

### `if...else if`

Use `if...else if` when you need to evaluate:

- Ranges
- Comparisons
- Complex conditions
- Different logical expressions

Example:

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 75) {
    console.log("Grade A");
}
else if (marks >= 60) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}
```

### `switch`

Use `switch` when one value needs to be compared against multiple fixed values.

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

### Important interview point

Do not generally say:

> Switch is always much faster than if...else if.

A better explanation is:

> Switch is useful because it provides a clear and readable structure when one value needs to be compared against multiple fixed values.

---

# 6. Browser Alerts

## What is a Browser Alert?

A browser alert is a **JavaScript browser dialog** that appears on top of the webpage.

Common browser dialogs are:

1. `alert`
2. `confirm`
3. `prompt`
4. `beforeunload`

In Playwright, these dialogs are handled using the **`page.on("dialog")`** event.

---

## 7. Playwright Dialog Event

Basic syntax:

```typescript
page.on("dialog", async (dialog) => {

    // Handle the dialog

});
```

### What does this mean?

```typescript
page.on("dialog", ...)
```

It tells Playwright:

> Listen for a browser dialog that appears on the page.

The callback receives a `Dialog` object.

For example:

```typescript
page.on("dialog", async (dialogAlert) => {

    console.log(dialogAlert.type());

});
```

---

# 8. Dialog Types

## 8.1 Alert Dialog

An alert displays a message to the user.

Example browser behavior:

```text
-------------------------
|       Alert           |
|                       |
|   Welcome User        |
|                       |
|          OK           |
-------------------------
```

The user normally clicks **OK**.

### Playwright handling

```typescript
page.on("dialog", async (dialogAlert) => {

    if (dialogAlert.type() === "alert") {

        await dialogAlert.accept();

    }

});
```

### `accept()`

`accept()` clicks the **OK** button of the dialog.

---

# 9. Confirm Dialog

A confirm dialog normally provides two choices:

- OK
- Cancel

Example:

```text
-------------------------
|      Confirm          |
|                       |
|   Delete this item?   |
|                       |
|   Cancel       OK     |
-------------------------
```

### Accept the confirmation

```typescript
await dialogAlert.accept();
```

This is equivalent to clicking **OK**.

### Dismiss the confirmation

```typescript
await dialogAlert.dismiss();
```

This is equivalent to clicking **Cancel**.

---

# 10. Prompt Dialog

A prompt dialog asks the user to enter some text.

Example:

```text
-----------------------------
|          Prompt           |
|                           |
| Enter your name:          |
| [ Vineeth Rajendran     ] |
|                           |
|   Cancel          OK      |
-----------------------------
```

In Playwright, we can provide the text while accepting the dialog.

```typescript
await dialogAlert.accept("Vineeth Rajendran");
```

This:

1. Enters the specified text.
2. Accepts the prompt.

---

# 11. `dialog.type()`

The `type()` method tells us which type of browser dialog appeared.

Example:

```typescript
console.log(dialogAlert.type());
```

Possible values include:

```text
alert
confirm
prompt
beforeunload
```

Example:

```typescript
if (dialogAlert.type() === "prompt") {
    await dialogAlert.accept("Vineeth Rajendran");
}
```

---

# 12. `dialog.message()`

`message()` returns the message displayed in the dialog.

Example:

```typescript
console.log(dialogAlert.message());
```

Suppose the browser dialog displays:

```text
Are you sure you want to delete this record?
```

Then:

```typescript
dialogAlert.message()
```

returns that dialog message.

---

# 13. `dialog.defaultValue()`

`defaultValue()` returns the default value of a prompt dialog.

This is mainly useful with prompt dialogs.

Example:

```typescript
console.log(dialogAlert.defaultValue());
```

---

# 14. `dialog.accept()`

Accepts the dialog.

For an alert:

```typescript
await dialogAlert.accept();
```

For a confirm:

```typescript
await dialogAlert.accept();
```

For a prompt:

```typescript
await dialogAlert.accept("Vineeth Rajendran");
```

---

# 15. `dialog.dismiss()`

Dismisses the dialog.

For example:

```typescript
await dialogAlert.dismiss();
```

For a confirm dialog, this behaves like clicking **Cancel**.

---

# 16. Complete Playwright Alert Example

```typescript
import test from "@playwright/test";

test("Test to learn alerts", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async (dialogAlert) => {

        if (dialogAlert.type() === "prompt") {
            await dialogAlert.accept("Vineeth Rajendran");
        }

        else if (dialogAlert.type() === "confirm") {
            await dialogAlert.dismiss();
        }

        else if (dialogAlert.type() === "alert") {
            await dialogAlert.dismiss();
        }

    });

    await page.locator("//span[text()='Show']").first().click();

    await page.locator("//span[text()='Show']").nth(1).click();

    await page.locator("//span[text()='Show']").nth(4).click();

});
```

---

# 17. Understanding the Complete Alert Code

### Register the dialog listener

```typescript
page.on("dialog", async (dialogAlert) => {
```

This tells Playwright to listen for browser dialogs.

### Check for prompt

```typescript
if (dialogAlert.type() === "prompt") {
```

If the dialog is a prompt, execute the prompt handling code.

### Enter text and accept

```typescript
await dialogAlert.accept("Vineeth Rajendran");
```

The text is entered into the prompt and the dialog is accepted.

### Check for confirm

```typescript
else if (dialogAlert.type() === "confirm") {
```

If it is a confirm dialog:

```typescript
await dialogAlert.dismiss();
```

The Cancel action is performed.

### Check for alert

```typescript
else if (dialogAlert.type() === "alert") {
```

For a simple alert:

```typescript
await dialogAlert.dismiss();
```

The alert is closed.

---

# 18. Important Playwright Dialog Methods

| Method | Purpose |
|---|---|
| `dialog.type()` | Returns the dialog type |
| `dialog.message()` | Returns the dialog message |
| `dialog.defaultValue()` | Returns the default prompt value |
| `dialog.accept()` | Accepts the dialog |
| `dialog.accept("text")` | Enters text and accepts a prompt |
| `dialog.dismiss()` | Dismisses the dialog |

---

# 19. Alert Handling Flow

```text
Browser action
      ↓
Dialog appears
      ↓
page.on("dialog")
      ↓
dialog object received
      ↓
dialog.type()
      ↓
 ┌──────────────┬──────────────┬──────────────┐
 ↓              ↓              ↓
alert         confirm        prompt
 ↓              ↓              ↓
accept()     accept()       accept("text")
or           or             or
dismiss()    dismiss()      dismiss()
```

---

# 20. Important Point — Register the Listener Before Triggering the Dialog

The dialog listener should be registered before clicking the element that opens the dialog.

Correct:

```typescript
page.on("dialog", async (dialogAlert) => {
    await dialogAlert.accept();
});

await page.getByText("Show").click();
```

This ensures Playwright is ready to handle the dialog when it appears.

---

# 21. Why `waitForTimeout()` Is Usually Not Required

A common example may contain:

```typescript
await page.waitForTimeout(10000);
```

For dialog handling, this fixed wait is generally unnecessary.

The dialog event listener handles the dialog when it appears.

Instead of using an arbitrary delay:

```typescript
await page.waitForTimeout(10000);
```

prefer event-based handling:

```typescript
page.on("dialog", async (dialogAlert) => {
    await dialogAlert.accept();
});
```

This makes the automation more reliable and avoids unnecessary waiting.

---

# 22. Alert vs Confirm vs Prompt

| Dialog | Purpose | Typical actions |
|---|---|---|
| `alert` | Displays a message | Accept/Dismiss |
| `confirm` | Asks for confirmation | Accept/Dismiss |
| `prompt` | Gets input from user | Accept with text/Dismiss |
| `beforeunload` | Warns before leaving page | Accept/Dismiss depending on scenario |

---

# 23. Common Interview Questions

### Q1. How do you handle browser alerts in Playwright?

Use the `page.on("dialog")` event and handle the received `Dialog` object.

```typescript
page.on("dialog", async (dialog) => {
    await dialog.accept();
});
```

### Q2. How do you identify whether the dialog is an alert, confirm, or prompt?

Use:

```typescript
dialog.type()
```

### Q3. How do you accept an alert?

```typescript
await dialog.accept();
```

### Q4. How do you cancel a confirm dialog?

```typescript
await dialog.dismiss();
```

### Q5. How do you enter text into a prompt?

```typescript
await dialog.accept("Vineeth Rajendran");
```

### Q6. How do you read the alert message?

```typescript
console.log(dialog.message());
```

### Q7. What is the difference between `accept()` and `dismiss()`?

- `accept()` → OK/accept action.
- `dismiss()` → Cancel/dismiss action.

### Q8. What happens if a dialog appears and is not handled?

A Playwright test can become blocked because the browser dialog is modal and prevents normal page interaction.

### Q9. Why should the dialog listener be registered before clicking the button?

Because the listener needs to be ready when the dialog is triggered.

---

# 24. Quick Revision

## Switch Case

```text
switch
   ↓
One value
   ↓
Multiple fixed cases
   ↓
Matching case executes
   ↓
break → exits switch
   ↓
default → no case matches
```

## Browser Alerts

```text
Browser action
      ↓
Dialog appears
      ↓
page.on("dialog")
      ↓
dialog.type()
      ↓
alert / confirm / prompt
      ↓
accept() / dismiss()
      ↓
Prompt → accept("text")
```

## Most Important Methods

```typescript
dialog.type()
dialog.message()
dialog.defaultValue()
dialog.accept()
dialog.accept("text")
dialog.dismiss()
```

## Interview Summary

> A switch statement compares one expression against multiple fixed values. Each possible value is represented using a case, `break` is commonly used to exit after a matching case, and `default` handles unmatched values. In Playwright, browser dialogs are handled using the `page.on("dialog")` event. The dialog type can be identified using `dialog.type()`, messages can be read using `dialog.message()`, dialogs can be accepted using `accept()`, dismissed using `dismiss()`, and prompt text can be supplied using `accept("text")`.
