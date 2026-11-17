# Playwright Frames and Alerts – Complete Theory & Reference Notes

## 1. Frames in Playwright

A frame (iframe) is an embedded browsing context inside a web page. Elements inside a frame are accessed through the frame context.

The examples covered:

1. Single iframe using `frameLocator()`
2. Nested iframes using chained `frameLocator()`
3. Retrieving all frames using `page.frames()`
4. Handling a Sweet Alert using normal locators

---

## 2. Single Frame Using `frameLocator()`

```typescript
import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Frame page.
    await page.goto("https://leafground.com/frame.xhtml");

    // Create a reference to the iframe using its src attribute.
    const frameReference = page.frameLocator("[src='default.xhtml']");

    // Locate the "Click Me" button inside the iframe and click it.
    await frameReference.getByRole("button", { name: "Click Me" }).click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});
```

### Flow

```text
Page → Frame → Element → Action
```

`frameLocator()` gives a locator-based way to interact with elements inside an iframe.

---

## 3. Nested Iframes

A frame can contain another frame.

```text
Main Page
└── Outer Frame
    └── Inner Frame
        └── Click Me Button
```

### Chained approach

```typescript
// Access the outer iframe and then the inner iframe.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");

// Locate the button inside the inner iframe and click it.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

### Separate-reference approach

```typescript
// Create a reference to the outer iframe.
const outerFrameRef = page.frameLocator("[src='page.xhtml']");

// Create a reference to the inner iframe inside the outer iframe.
const innerFrameRef = outerFrameRef.frameLocator("[src='framebutton.xhtml']");

// Locate the button inside the inner iframe and click it.
await innerFrameRef.getByRole("button", { name: "Click Me" }).click();
```

Both approaches represent:

```text
page → outer frame → inner frame → element
```

---

## 4. Getting All Frames with `page.frames()`

```typescript
import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Frame page.
    await page.goto("https://leafground.com/frame.xhtml");

    // Get all the frames available on the current page.
    const allFrames = page.frames();

    // Print the total number of frames available on the page.
    console.log(allFrames.length);

    // Print all the Frame objects available on the page.
    console.log(allFrames);

    // Loop through all the frames and print the URL of each frame.
    for (let i = 0; i < allFrames.length; i++) {

        // Print the URL of the current frame.
        console.log(allFrames[i].url());

    }

    // Access the second frame using its index and click the "Click Me" button.
    await allFrames[1].getByRole("button", { name: "Click Me" }).click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});
```

### What does `page.frames()` do?

```typescript
const allFrames = page.frames();
```

It returns an array of `Frame` objects associated with the page.

You can inspect the collection with:

```typescript
console.log(allFrames.length);
console.log(allFrames);
```

You can inspect each frame URL:

```typescript
// Loop through all available frames.
for (let i = 0; i < allFrames.length; i++) {

    // Print the URL of the current frame.
    console.log(allFrames[i].url());

}
```

A frame can then be accessed by index:

```typescript
// Access the second frame and click its button.
await allFrames[1].getByRole("button", { name: "Click Me" }).click();
```

The example demonstrates frame indexing; the index depends on the page's frame structure.

---

## 5. `frameLocator()` vs `page.frames()`

| `frameLocator()` | `page.frames()` |
|---|---|
| Locator-based frame access | Returns `Frame` objects |
| Used to interact with elements inside a frame | Used to inspect/access the page's frame collection |
| Can be chained for nested frames | Provides an array of frames |
| Example: `page.frameLocator("selector")` | Example: `page.frames()` |

### Key distinction

```text
frameLocator()
    ↓
Frame locator
    ↓
Element
```

```text
page.frames()
    ↓
Array of Frame objects
    ↓
Frame
    ↓
Element
```

---

# 6. Sweet Alert

The fourth example handles a Sweet Alert on the LeafGround Alert page.

In this example, the Sweet Alert is an HTML/page element, so normal Playwright locators are used.

## Example

```typescript
import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Alert page.
    await page.goto("https://leafground.com/alert.xhtml");

    // Click the button associated with the "Sweet Alert (Simple Dialog)" section.
    await page
        .locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button")
        .click();

    // Click the "Dismiss" button displayed in the Sweet Alert.
    await page.locator("//span[text()='Dismiss']").click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});
```

---

## 7. Understanding the Sweet Alert XPath

```xpath
//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button
```

This XPath:

1. Finds the `h5` element whose text is `Sweet Alert (Simple Dialog)`.
2. Moves to a following sibling.
3. Selects the `button`.

Conceptually:

```text
h5: Sweet Alert (Simple Dialog)
        ↓
following-sibling
        ↓
button
```

---

## 8. `following-sibling` XPath Axis

`following-sibling` selects sibling elements that occur after the current element under the same parent.

Example:

```xpath
//h5/following-sibling::button
```

The specific example uses:

```xpath
//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button
```

This makes the button location dependent on the nearby heading.

---

## 9. Handling the Sweet Alert Dismiss Button

After the Sweet Alert is opened:

```typescript
// Click the Dismiss button displayed in the Sweet Alert.
await page.locator("//span[text()='Dismiss']").click();
```

This treats `Dismiss` as a normal page element.

---

# 10. Sweet Alert vs Browser-Native Dialog

These are different handling mechanisms.

### Sweet Alert / HTML dialog

Use a normal locator:

```typescript
// Click the Dismiss button in the HTML-based Sweet Alert.
await page.locator("//span[text()='Dismiss']").click();
```

### Browser-native dialog

Use the dialog event:

```typescript
// Listen for a browser-native dialog.
page.on("dialog", async (dialogAlert) => {

    // Dismiss the dialog.
    await dialogAlert.dismiss();

});
```

Browser-native examples include:

- `alert`
- `confirm`
- `prompt`

The Sweet Alert example here is handled as a page element.

---

# 11. `waitForTimeout()`

The examples contain:

```typescript
await page.waitForTimeout(5000);
```

This waits for five seconds.

In these training examples it can be used to observe the result. For stable automation, fixed waits should not normally be the primary synchronization mechanism; appropriate conditions or assertions are preferable.

---

# 12. Quick Reference

### Single iframe

```typescript
// Create a reference to the iframe.
const frameRef = page.frameLocator("[src='default.xhtml']");

// Click an element inside the iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

### Nested iframe

```typescript
// Access the outer and inner iframe.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");

// Click an element inside the inner iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

### Get all frames

```typescript
// Get all frame objects.
const allFrames = page.frames();

// Access a frame by index.
await allFrames[1].getByRole("button", { name: "Click Me" }).click();
```

### Print frame URLs

```typescript
// Loop through all frames.
for (let i = 0; i < allFrames.length; i++) {

    // Print the URL of the current frame.
    console.log(allFrames[i].url());

}
```

### Sweet Alert

```typescript
// Click the Sweet Alert trigger button.
await page
    .locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button")
    .click();

// Click the Dismiss button.
await page.locator("//span[text()='Dismiss']").click();
```

---

# 13. Key Takeaways

1. Use `frameLocator()` to work with elements inside an iframe.
2. Chain `frameLocator()` for nested iframes.
3. Use `page.frames()` to get the page's `Frame` objects.
4. Use `frame.url()` to inspect a frame's URL.
5. `allFrames[index]` accesses a frame by position.
6. `following-sibling::button` can locate a button after a related heading.
7. The Sweet Alert in this example is handled with normal locators.
8. Browser-native dialogs are handled through the `dialog` event.
9. `waitForTimeout()` is used here for observation, not as the preferred synchronization strategy for stable tests.
