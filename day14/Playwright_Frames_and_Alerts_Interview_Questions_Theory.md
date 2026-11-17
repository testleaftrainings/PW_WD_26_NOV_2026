# Playwright Frames and Alerts – Interview Questions & Theory

## 1. Core Theory

### What is an iframe?

An iframe is an embedded browsing context inside a web page. It can contain its own document and elements.

When an element is inside an iframe, Playwright needs to access the frame context before interacting with that element.

---

### How do you handle an iframe using Playwright?

Use `frameLocator()`.

```typescript
// Create a reference to the iframe.
const frameRef = page.frameLocator("[src='default.xhtml']");

// Locate and click the button inside the iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

---

### What is `frameLocator()`?

`frameLocator()` provides a locator-based way to work with elements inside an iframe.

```typescript
// Create a frame locator using the iframe src attribute.
const frameRef = page.frameLocator("[src='default.xhtml']");
```

---

### How do you handle nested iframes?

Chain `frameLocator()`.

```typescript
// Access the outer iframe and then the inner iframe.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");

// Click the button inside the nested iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

---

### Can nested frames be handled using separate variables?

Yes.

```typescript
// Create a reference to the outer iframe.
const outerFrameRef = page.frameLocator("[src='page.xhtml']");

// Create a reference to the inner iframe.
const innerFrameRef = outerFrameRef.frameLocator("[src='framebutton.xhtml']");

// Click the button inside the inner iframe.
await innerFrameRef.getByRole("button", { name: "Click Me" }).click();
```

---

# 2. `page.frames()` Interview Questions

### What does `page.frames()` do?

It returns an array containing the `Frame` objects associated with the page.

```typescript
// Get all frames available on the page.
const allFrames = page.frames();
```

---

### How do you get the number of frames?

```typescript
// Get all frames.
const allFrames = page.frames();

// Print the number of frames.
console.log(allFrames.length);
```

---

### How do you print the URL of every frame?

```typescript
// Loop through all frames.
for (let i = 0; i < allFrames.length; i++) {

    // Print the URL of the current frame.
    console.log(allFrames[i].url());

}
```

---

### How do you access a frame using its index?

```typescript
// Access the second frame in the frame array.
const requiredFrame = allFrames[1];
```

Then:

```typescript
// Click the button inside the selected frame.
await allFrames[1].getByRole("button", { name: "Click Me" }).click();
```

---

### What is the difference between `frameLocator()` and `page.frames()`?

**Strong interview answer:**

> `frameLocator()` provides a locator-based way to interact with elements inside a specific iframe, while `page.frames()` returns the Frame objects associated with the page.

---

# 3. Scenario-Based Frame Questions

### Scenario 1: A button is inside an iframe. What will you do?

Use `frameLocator()`.

```typescript
// Create a reference to the iframe.
const frameRef = page.frameLocator("[src='default.xhtml']");

// Click the button inside the iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

---

### Scenario 2: A button is inside an iframe inside another iframe. How will you handle it?

Chain `frameLocator()`.

```typescript
// Access the outer iframe and then the inner iframe.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");

// Click the button inside the inner iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

---

### Scenario 3: You want to inspect all frames on the page. What will you use?

Use `page.frames()`.

```typescript
// Get all frames on the page.
const allFrames = page.frames();

// Loop through all frames.
for (let i = 0; i < allFrames.length; i++) {

    // Print each frame URL.
    console.log(allFrames[i].url());

}
```

---

### Scenario 4: Why can relying on `allFrames[1]` be fragile?

`allFrames[1]` relies on the position of the frame in the frame collection. If the page's frame structure changes, a different frame could occupy that position.

---

# 4. Frame Coding Questions

### Write code to access a single iframe.

```typescript
// Create a reference to the iframe.
const frameRef = page.frameLocator("[src='default.xhtml']");

// Click the button inside the iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

### Write code to access a nested iframe.

```typescript
// Access the outer frame and then the inner frame.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");

// Click the button inside the nested iframe.
await frameRef.getByRole("button", { name: "Click Me" }).click();
```

### Write code to get all frames and print their URLs.

```typescript
// Get all frames.
const allFrames = page.frames();

// Loop through all frames.
for (let i = 0; i < allFrames.length; i++) {

    // Print the URL of the current frame.
    console.log(allFrames[i].url());

}
```

---

# 5. Sweet Alert Theory

### What is a Sweet Alert in the example?

The Sweet Alert shown in the LeafGround example is an HTML/page element displayed by the application.

Therefore, it can be interacted with using normal Playwright locators.

---

### How do you handle the Sweet Alert?

First click its trigger:

```typescript
// Click the button associated with the Sweet Alert heading.
await page
    .locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button")
    .click();
```

Then click Dismiss:

```typescript
// Click the Dismiss button.
await page.locator("//span[text()='Dismiss']").click();
```

---

# 6. XPath Interview Questions

### Explain this XPath:

```xpath
//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button
```

**Answer:**

It finds the `h5` whose text is `Sweet Alert (Simple Dialog)` and then selects a `button` that is a following sibling of that `h5`.

---

### What does `following-sibling` mean?

It is an XPath axis used to select sibling elements that occur after the current element under the same parent.

Example:

```xpath
//h5/following-sibling::button
```

---

### Why is `following-sibling` useful here?

It allows the button to be located in relation to the heading instead of depending only on an element index.

---

# 7. Sweet Alert vs Browser-Native Dialog

### Is the Sweet Alert the same as a browser-native alert?

No. In the example covered here, the Sweet Alert is a page-level HTML element.

Browser-native dialogs are handled through Playwright's dialog event.

---

### How do you handle a browser-native dialog?

```typescript
// Listen for a browser-native dialog.
page.on("dialog", async (dialogAlert) => {

    // Dismiss the dialog.
    await dialogAlert.dismiss();

});
```

---

### How do you handle a Sweet Alert?

```typescript
// Click the Sweet Alert trigger.
await page
    .locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button")
    .click();

// Click the Dismiss button.
await page.locator("//span[text()='Dismiss']").click();
```

---

# 8. Scenario-Based Alert Questions

### Scenario 1: The application displays a Sweet Alert with a Dismiss button. How will you handle it?

Use a locator to find the Dismiss element and click it.

```typescript
// Click the Dismiss button.
await page.locator("//span[text()='Dismiss']").click();
```

### Scenario 2: You use `page.on("dialog")`, but the Sweet Alert is not handled. Why?

Because the Sweet Alert in this example is an HTML/page element rather than a browser-native dialog. Use a locator for the HTML element.

### Scenario 3: The application displays a browser-native alert. What will you use?

Use the `dialog` event.

```typescript
// Listen for the browser-native dialog.
page.on("dialog", async (dialogAlert) => {

    // Dismiss the dialog.
    await dialogAlert.dismiss();

});
```

---

# 9. Understanding Questions

### What does this return?

```typescript
page.frames()
```

**Answer:** An array of `Frame` objects associated with the page.

### What does this return?

```typescript
allFrames.length
```

**Answer:** The number of frames in the `allFrames` array.

### What does this return?

```typescript
allFrames[1].url()
```

**Answer:** The URL associated with the frame at index `1`.

### What does this do?

```typescript
frameRef.getByRole("button", { name: "Click Me" }).click()
```

**Answer:** It locates the `Click Me` button inside the referenced frame and clicks it.

---

# 10. Follow-Up Interview Questions

### Why can't you always use `page.getByRole()` for an element inside an iframe?

Because the element belongs to the iframe's document. The frame context needs to be accessed before locating the element inside it.

### Can `frameLocator()` be chained?

Yes. This is useful for nested iframes.

```typescript
// Access the outer and inner frames.
const frameRef = page
    .frameLocator("[src='page.xhtml']")
    .frameLocator("[src='framebutton.xhtml']");
```

### Can you inspect all frames on a page?

Yes.

```typescript
// Get all frames.
const allFrames = page.frames();
```

### Why print frame URLs?

To inspect the available frames and identify which frame contains the required content.

---

# 11. Common Mistakes

### Mistake 1: Directly locating an iframe element

```typescript
await page.getByRole("button", { name: "Click Me" }).click();
```

If the button is inside an iframe, access the frame first.

### Mistake 2: Stopping at the outer frame

For nested frames, the inner frame must also be accessed.

```typescript
// Access the outer frame.
const outerFrameRef = page.frameLocator("[src='page.xhtml']");

// Access the inner frame.
const innerFrameRef = outerFrameRef.frameLocator("[src='framebutton.xhtml']");
```

### Mistake 3: Confusing Sweet Alert with browser dialog

A page-level Sweet Alert can be handled with a locator.

A browser-native dialog is handled through:

```typescript
page.on("dialog")
```

### Mistake 4: Blindly relying on frame indexes

```typescript
allFrames[1]
```

uses a positional index. A page structure change can change which frame is at that index.

---

# 12. Quick Revision

| Requirement | Playwright approach |
|---|---|
| Single iframe | `page.frameLocator("selector")` |
| Nested iframe | Chain `frameLocator()` |
| Get all frames | `page.frames()` |
| Frame count | `allFrames.length` |
| Frame URL | `allFrames[i].url()` |
| Frame element | `allFrames[i].getByRole(...)` |
| Sweet Alert | `page.locator(...)` |
| Browser-native dialog | `page.on("dialog")` |
| Following sibling | `following-sibling::button` |

---

# 13. Strong Interview Summary

- `frameLocator()` is used to work with elements inside an iframe.
- Nested iframes can be handled by chaining `frameLocator()`.
- `page.frames()` returns the `Frame` objects associated with the page.
- `allFrames[index]` accesses a frame by position.
- `frame.url()` returns a frame's URL.
- A Sweet Alert represented by HTML can be handled using normal locators.
- Browser-native dialogs are handled using the `dialog` event.
- `following-sibling` is an XPath axis used to locate sibling elements after the current element.
- `waitForTimeout()` in these examples is for observation; stable tests should preferably synchronize with appropriate conditions or assertions.
