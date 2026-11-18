# Playwright Window Handling — Complete Notes

## 1. Introduction

Browser window handling in Playwright is mainly about working with multiple `Page` objects inside the same browser context.

A single browser context can contain multiple pages:

```text
Browser
  |
  └── Browser Context
       ├── Page 1 → Original tab/window
       └── Page 2 → Newly opened tab/window
```

In Playwright, a newly opened browser tab or window is represented by a new `Page`.

Important objects:

- `browser` → Browser instance
- `context` → Isolated browser session
- `page` → A tab/window inside the context

---

## 2. Browser → Context → Page

The hierarchy is:

```text
Browser
   ↓
Browser Context
   ↓
Page
```

A context can contain multiple pages.

With Playwright Test, `page` and `context` are normally provided automatically:

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test that receives the page and context fixtures.
test("Window handling", async ({ page, context }) => {

    // Navigate to the application.
    await page.goto("https://www.amazon.in/");
});
```

---

## 3. What Is Window Handling?

Window handling means controlling multiple browser tabs, windows, or popup pages during automation.

Common situations include:

- Clicking a link that opens a new tab
- Clicking a button that opens a new window
- Handling a popup
- Performing an action in the new page
- Returning to the original page

---

## 4. Detecting a Newly Opened Page

Playwright provides:

```typescript
context.waitForEvent("page")
```

This listens for a new page created inside the browser context.

Example:

```typescript
// Start listening for a newly created page.
const newPagePromise = context.waitForEvent("page");
```

This creates a Promise that waits for the new page event.

---

## 5. Why Register the Listener Before the Click?

The listener should be registered before the action that opens the new page.

Correct:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Click the element that opens the new page.
await page.getByText("Open Window").click();

// Retrieve the newly opened page.
const newPage = await newPagePromise;
```

Execution flow:

```text
Register listener
      ↓
Click
      ↓
New page opens
      ↓
Event is captured
      ↓
New Page object is returned
```

---

## 6. Getting the Newly Opened Page

After registering the listener:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Perform the action that opens the page.
await page.getByText("Open Window").click();

// Wait for and capture the new page.
const newPage = await newPagePromise;
```

Now `newPage` represents the newly opened tab/window.

---

## 7. Waiting for the New Page to Load

You can wait for its load state:

```typescript
// Wait until the newly opened page reaches its load state.
await newPage.waitForLoadState();
```

Typical flow:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Click the element that opens the new page.
await page.getByText("Open Window").click();

// Capture the newly opened page.
const newPage = await newPagePromise;

// Wait for the new page to load.
await newPage.waitForLoadState();
```

---

## 8. Interacting with the New Page

Use `newPage` for elements that belong to the new tab/window.

```typescript
// Click an element that exists in the newly opened page.
await newPage.getByText("Laptops & Accessories", { exact: true }).click();
```

Remember:

```text
page     → Original page
newPage  → Newly opened page
```

---

## 9. Returning to the Original Page

Use:

```typescript
// Bring the original page to the foreground.
await page.bringToFront();
```

Example:

```typescript
// Perform an action in the new page.
await newPage.getByText("Laptops & Accessories", { exact: true }).click();

// Bring the original page to the foreground.
await page.bringToFront();

// Continue working with the original page.
await page.getByPlaceholder("Search Amazon.in").fill("Home appliances");
```

`bringToFront()` does not close the other page.

---

## 10. Complete Example

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test to verify window handling.
test("test to verify window handling", async ({ page, context }) {

    // Navigate to the Amazon application.
    await page.goto("https://www.amazon.in/");

    // Locate the Amazon search box using its placeholder.
    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles");

    // Locate the Search button using XPath and click it.
    await page.locator("//input[@id='nav-search-submit-button']").click();

    // Start listening for a newly opened browser page.
    const newPagePromise = context.waitForEvent("page");

    // Click the first product from the search results.
    await page
        .locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/span")
        .first()
        .click();

    // Wait for and capture the newly opened page.
    const newPage = await newPagePromise;

    // Wait until the newly opened page finishes loading.
    await newPage.waitForLoadState();

    // Click the "Laptops & Accessories" text in the newly opened page.
    await newPage.getByText("Laptops & Accessories", { exact: true }).click();

    // Bring the original Amazon page back to the foreground.
    await page.bringToFront();

    // Locate the Amazon search box on the original page.
    await page.getByPlaceholder("Search Amazon.in").fill("Home appliances");

    // Locate the Search button on the original page and click it.
    await page.locator("//input[@id='nav-search-submit-button']").click();
});
```

---

## 11. `context.pages()`

`context.pages()` returns the pages currently available in the browser context.

Example:

```typescript
// Get all currently open pages.
const pages = context.pages();

// Print the number of currently open pages.
console.log(pages.length);
```

A context may contain:

```text
Context
   ├── Page 1
   ├── Page 2
   └── Page 3
```

---

## 12. `waitForEvent("page")` vs `pages()`

### `context.waitForEvent("page")`

Use when you expect a new page to be created.

```typescript
// Start listening for a new page.
const newPagePromise = context.waitForEvent("page");

// Perform the action that opens the new page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

### `context.pages()`

Use when you want to inspect pages that already exist.

```typescript
// Get all currently open pages.
const pages = context.pages();

// Print the number of pages.
console.log(pages.length);
```

Simple difference:

```text
waitForEvent("page") → Future/new page
pages()              → Existing pages
```

---

## 13. Multiple Pages

A context can contain multiple pages:

```text
Browser
   |
   └── Context
        ├── Page 1
        ├── Page 2
        ├── Page 3
        └── Page 4
```

You can inspect them using:

```typescript
// Get all pages currently available in the context.
const pages = context.pages();
```

You can access an existing page by index:

```typescript
// Store the first page.
const firstPage = pages[0];

// Store the second page.
const secondPage = pages[1];
```

However, page indexes can change when pages are dynamically opened or closed. When an action specifically creates a new page, event-based handling is generally clearer.

---

## 14. Popup and New Page

A newly opened popup is also represented by a `Page` object.

The important mental model is:

```text
New tab/window/popup
          ↓
       Page object
```

Once captured, normal Page APIs can be used.

---

## 15. Common Mistakes

### Mistake 1: Registering the listener after the click

Incorrect:

```typescript
// Click the element first.
await page.getByText("Open").click();

// Start listening too late.
const newPagePromise = context.waitForEvent("page");
```

Correct:

```typescript
// Start listening before the action.
const newPagePromise = context.waitForEvent("page");

// Click the element that opens the page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

### Mistake 2: Using `page` instead of `newPage`

If the element belongs to the newly opened page:

Incorrect:

```typescript
// This uses the original page.
await page.getByText("Laptops & Accessories").click();
```

Correct:

```typescript
// This uses the newly opened page.
await newPage.getByText("Laptops & Accessories").click();
```

### Mistake 3: Forgetting `await`

Incorrect:

```typescript
// This stores the Promise instead of the Page.
const newPage = newPagePromise;
```

Correct:

```typescript
// This waits for the Promise and stores the Page.
const newPage = await newPagePromise;
```

### Mistake 4: Using unnecessary fixed waits

Avoid using:

```typescript
// Wait for a fixed amount of time.
await page.waitForTimeout(5000);
```

just to wait for a new page.

Prefer event-based synchronization:

```typescript
// Start listening for the new page.
const newPagePromise = context.waitForEvent("page");

// Trigger the new page.
await page.getByText("Open").click();

// Capture the new page.
const newPage = await newPagePromise;
```

---

## 16. Best Practices

1. Register `waitForEvent("page")` before the action that opens the page.
2. Store the new page in a meaningful variable such as `newPage`.
3. Use the correct Page object for each tab.
4. Use `waitForLoadState()` when a load-state synchronization point is actually required.
5. Prefer Playwright's automatic waiting and web-first assertions over fixed delays.
6. Avoid relying on page indexes when event-based handling is available.
7. Use `page.bringToFront()` when you need to explicitly return to another page.
8. Keep window-handling code sequential and readable.

---

## 17. Quick Revision

```text
page
↓
Original browser tab

context
↓
Owns multiple pages

context.waitForEvent("page")
↓
Waits for a newly created page

await newPagePromise
↓
Gets the newly opened Page

newPage
↓
Used to interact with the new tab/window

newPage.waitForLoadState()
↓
Waits for page loading

page.bringToFront()
↓
Brings the original page to the foreground

context.pages()
↓
Returns currently open pages
```

---

## 18. Interview Key Points

- A browser context can contain multiple pages.
- A browser tab/window is represented by a `Page`.
- `context.waitForEvent("page")` waits for a newly created page.
- The event listener should be registered before the action that opens the page.
- `await newPagePromise` retrieves the newly opened Page.
- `page.bringToFront()` brings a page to the foreground.
- `context.pages()` returns currently open pages.
- Use the appropriate Page object when working with multiple tabs.
- Avoid unnecessary `waitForTimeout()` calls.

---

# Final Mental Model

Think of the browser as a building:

```text
Browser = Building
     |
     └── Context = Separate apartment
              |
              ├── Page 1 = Room 1
              ├── Page 2 = Room 2
              └── Page 3 = Room 3
```

When a new tab/window opens, Playwright creates another `Page` inside the same context.

The key workflow is:

```text
Listen
  ↓
Action
  ↓
Capture new Page
  ↓
Wait if required
  ↓
Interact with new Page
  ↓
Return to original Page
```
