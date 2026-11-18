# Playwright Window Handling — Interview Questions & Answers

## 1. What is window handling in Playwright?

Window handling is the process of working with multiple browser tabs, windows, or popup pages during automation.

In Playwright, each browser tab/window is represented by a `Page` object.

---

## 2. Explain Browser → Context → Page.

The hierarchy is:

```text
Browser
   ↓
Browser Context
   ↓
Page
```

- Browser → browser process.
- Context → isolated browser session.
- Page → individual browser tab/window.

A context can contain multiple pages.

---

## 3. Can one browser context contain multiple pages?

Yes.

For example:

```text
Context
   ├── Page 1
   ├── Page 2
   └── Page 3
```

Each page can represent a different browser tab or window.

---

## 4. How do you detect a newly opened tab in Playwright?

Use:

```typescript
// Start listening for a newly created page.
const newPagePromise = context.waitForEvent("page");
```

Then perform the action and await the promise:

```typescript
// Click the element that opens the new page.
await page.getByText("Open").click();

// Capture the newly opened page.
const newPage = await newPagePromise;
```

---

## 5. Why should `context.waitForEvent("page")` be written before the click?

Because the click is the action that causes the new page to open.

The listener must already be waiting when the event occurs.

Correct sequence:

```text
Register listener
      ↓
Click
      ↓
New page opens
      ↓
Capture page
```

---

## 6. What does `context.waitForEvent("page")` return?

It returns a Promise that resolves when a new `Page` is created in the browser context.

Example:

```typescript
// Start waiting for a newly created page.
const newPagePromise = context.waitForEvent("page");
```

It is not the actual Page yet.

Retrieve the page using:

```typescript
// Wait for the event and get the Page object.
const newPage = await newPagePromise;
```

---

## 7. What is the difference between `newPagePromise` and `newPage`?

`newPagePromise` is a Promise waiting for the new page:

```typescript
// Store the Promise for the future page event.
const newPagePromise = context.waitForEvent("page");
```

`newPage` is the actual Page after the Promise resolves:

```typescript
// Resolve the Promise and store the Page.
const newPage = await newPagePromise;
```

---

## 8. What happens if you forget `await`?

If you write:

```typescript
// Store the Promise without resolving it.
const newPage = newPagePromise;
```

`newPage` is a Promise, not the actual Page.

Correct:

```typescript
// Resolve the Promise and get the Page.
const newPage = await newPagePromise;
```

---

## 9. How do you interact with the newly opened page?

Use the Page object returned by the page event.

```typescript
// Start listening for a new page.
const newPagePromise = context.waitForEvent("page");

// Click the element that opens the page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;

// Click an element in the new page.
await newPage.getByText("Laptops & Accessories").click();
```

---

## 10. How do you return to the original page?

Use:

```typescript
// Bring the original page to the foreground.
await page.bringToFront();
```

---

## 11. Does `bringToFront()` close the new page?

No.

It only brings the specified page to the foreground.

The other page remains available unless it is explicitly closed.

---

## 12. How do you get all currently open pages?

Use:

```typescript
// Get all currently open pages in the context.
const pages = context.pages();

// Print the number of pages.
console.log(pages.length);
```

---

## 13. What is the difference between `context.pages()` and `context.waitForEvent("page")`?

### `context.pages()`

Returns pages that currently exist:

```typescript
// Get the pages that already exist.
const pages = context.pages();
```

### `context.waitForEvent("page")`

Waits for a new page to be created:

```typescript
// Start listening for a future page event.
const newPagePromise = context.waitForEvent("page");
```

Simple difference:

```text
pages()
    ↓
Existing pages

waitForEvent("page")
    ↓
Future/new page
```

---

## 14. What is a Page in Playwright?

A `Page` represents a browser tab or window.

For example:

```text
page
↓
Original tab

newPage
↓
Newly opened tab
```

---

## 15. Can a popup be handled as a Page?

Yes.

A newly opened popup is represented by a `Page` object.

Once captured, normal Playwright Page APIs can be used.

---

## 16. Write a basic example for handling a new window.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test for new window handling.
test("Handle new window", async ({ page, context }) => {

    // Navigate to the application.
    await page.goto("https://example.com");

    // Start listening for a new page.
    const newPagePromise = context.waitForEvent("page");

    // Click the element that opens a new page.
    await page.getByText("Open Window").click();

    // Capture the newly opened page.
    const newPage = await newPagePromise;

    // Wait for the new page to load.
    await newPage.waitForLoadState();

    // Print the title of the new page.
    console.log(await newPage.title());
});
```

---

## 17. Why do we use `context.waitForEvent("page")` instead of `page.waitForEvent("page")`?

A new browser page is created at the browser-context level.

Therefore, the context is the appropriate object for listening to the `page` event.

Use:

```typescript
// Listen at the browser context level for a new page.
const newPagePromise = context.waitForEvent("page");
```

---

## 18. How do you handle multiple newly opened pages?

You can listen for each new page and store the returned Page objects.

You can also inspect existing pages using:

```typescript
// Get all currently open pages.
const pages = context.pages();
```

The important point is to keep track of which Page object represents which tab.

---

## 19. Why is using page indexes sometimes risky?

You might write:

```typescript
// Get all currently open pages.
const pages = context.pages();

// Select the second page.
const secondPage = pages[1];
```

This depends on the current order and number of pages.

If another page opens or closes, the index can change.

When a specific action is expected to create a new page, event-based handling is generally clearer:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Trigger the new page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

---

## 20. What is `waitForLoadState()`?

It waits for the page to reach a specified load state.

Example:

```typescript
// Wait for the newly opened page to reach its load state.
await newPage.waitForLoadState();
```

It can be useful after capturing a new page when the test needs a page-load synchronization point.

---

## 21. Is `waitForTimeout()` recommended for window handling?

Generally, no.

Avoid fixed delays such as:

```typescript
// Wait for a fixed five seconds.
await page.waitForTimeout(5000);
```

just to wait for a new page.

Instead, synchronize with the actual page event:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Trigger the new page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

---

## 22. Scenario: The new tab opens, but the test continues interacting with the old tab. What could be wrong?

The test may still be using the original `page` object.

If the element belongs to the new tab, use:

```typescript
// Interact with the element in the new page.
await newPage.getByText("Some Element").click();
```

Always identify which Page owns the element.

---

## 23. Scenario: The test misses the newly opened page. What is a likely mistake?

A common mistake is registering the page event listener after the click.

Incorrect:

```typescript
// Trigger the new page first.
await page.getByText("Open").click();

// Start listening too late.
const newPagePromise = context.waitForEvent("page");
```

Correct:

```typescript
// Start listening before the action.
const newPagePromise = context.waitForEvent("page");

// Trigger the new page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

---

## 24. Scenario: `newPage` is not behaving like a Page. What should you check?

Check whether `await` was used.

Incorrect:

```typescript
// Store the Promise instead of resolving it.
const newPage = newPagePromise;
```

Correct:

```typescript
// Resolve the Promise and get the Page.
const newPage = await newPagePromise;
```

---

## 25. Scenario: You need to search in the original tab after working in a new tab. What should you do?

Bring the original page to the foreground:

```typescript
// Bring the original page to the foreground.
await page.bringToFront();
```

Then continue using the original `page` object.

---

## 26. Explain this code.

```typescript
// Start listening for a new page.
const newPagePromise = context.waitForEvent("page");

// Click the element that opens the new page.
await page.getByText("Open").click();

// Capture the newly opened page.
const newPage = await newPagePromise;
```

### Answer

The first line starts listening for a new Page.

The second line performs the action that opens the new page.

The third line waits until the event occurs and stores the newly opened Page object in `newPage`.

---

## 27. What is the correct sequence for window handling?

The standard sequence is:

```text
1. Register page event listener
2. Perform action that opens new page
3. Await the page event
4. Store the new Page
5. Wait for loading if required
6. Interact with the new Page
7. Return to the original Page if required
```

---

## 28. Practical Coding Question

### Question

Write Playwright code to click an element that opens a new tab and print the title of the new tab.

### Answer

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test for handling a new tab.
test("Verify new tab", async ({ page, context }) => {

    // Navigate to the application.
    await page.goto("https://example.com");

    // Start listening for a new page.
    const newPagePromise = context.waitForEvent("page");

    // Click the element that opens the new tab.
    await page.getByText("Open Window").click();

    // Capture the newly opened page.
    const newPage = await newPagePromise;

    // Wait for the new page to load.
    await newPage.waitForLoadState();

    // Print the title of the new page.
    console.log(await newPage.title());
});
```

---

## 29. Practical Coding Question

### Question

After opening a new tab, perform an action in the new tab and then return to the original tab.

### Answer

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test for switching between pages.
test("Switch between pages", async ({ page, context }) => {

    // Navigate to the application.
    await page.goto("https://example.com");

    // Start listening for a new page.
    const newPagePromise = context.waitForEvent("page");

    // Click the element that opens the new page.
    await page.getByText("Open Window").click();

    // Capture the new page.
    const newPage = await newPagePromise;

    // Wait for the new page to load.
    await newPage.waitForLoadState();

    // Perform an action in the new page.
    await newPage.getByText("Products").click();

    // Bring the original page to the foreground.
    await page.bringToFront();

    // Perform an action in the original page.
    await page.getByText("Home").click();
});
```

---

## 30. What are the most important methods for window handling?

Remember:

```text
context.waitForEvent("page")
await newPagePromise
newPage.waitForLoadState()
page.bringToFront()
context.pages()
```

---

# Quick Interview Revision

| Question | Key Answer |
|---|---|
| What represents a tab/window? | `Page` |
| Where are multiple pages managed? | `BrowserContext` |
| How to wait for a new page? | `context.waitForEvent("page")` |
| How to get the new page? | `await newPagePromise` |
| How to wait for loading? | `newPage.waitForLoadState()` |
| How to return to original page? | `page.bringToFront()` |
| How to get existing pages? | `context.pages()` |
| Should event listener come before click? | Yes |
| Should fixed waits be preferred? | No |
| Does `bringToFront()` close another page? | No |

---

# Interview Tip

A concise interview answer:

> "In Playwright, each browser tab or window is represented as a Page. When an action opens a new page, I register `context.waitForEvent("page")` before the action, capture the newly created Page using `await`, perform the required actions on that Page, and use `page.bringToFront()` when I need to return to the original page."
