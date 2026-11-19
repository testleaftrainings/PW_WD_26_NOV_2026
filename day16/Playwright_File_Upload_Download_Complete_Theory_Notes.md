# Playwright File Upload & File Download — Complete Theory and Reference Notes

## 1. File Upload in Playwright

File upload is the process of selecting a file from the local machine and attaching it to a web application's file input.

Playwright provides two important approaches:

1. `setInputFiles()`
2. `filechooser` event with `setFiles()`

---

# 2. File Upload Using `setInputFiles()`

## When to use it

Use `setInputFiles()` when the application exposes a file input that can be directly targeted.

### Program

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the file path.
import path from "path";

// Create a test to learn file upload using an input tag.
test("Test to learn file upload with input tag", async ({ page }) => {

    // Navigate to the DemoQA Upload and Download page.
    await page.goto("https://demoqa.com/upload-download");

    // Locate the file input and directly upload the required file.
    await page
        .getByRole("button", { name: "Choose File" })
        .setInputFiles(path.join(__dirname, "../../Data/TestleafLogo.png"));

    // Wait for five seconds so the upload result can be observed.
    await page.waitForTimeout(5000);
});
```

## Important API

```typescript
setInputFiles()
```

This method allows Playwright to assign one or more files to a file input.

### Basic syntax

```typescript
// Upload a file to a file input.
await page.locator("input[type='file']").setInputFiles("path/to/file");
```

---

# 3. Understanding the File Path

The example uses:

```typescript
path.join(__dirname, "../../Data/TestleafLogo.png")
```

### `__dirname`

`__dirname` represents the directory of the current file.

### `path.join()`

`path.join()` combines path segments into a platform-independent path.

### Example

```text
Current test file
      |
      └── __dirname
            |
            └── ../../Data/TestleafLogo.png
```

This makes the file path easier to maintain than manually writing operating-system-specific path separators.

---

# 4. File Upload Using File Chooser

Some applications use a custom upload control instead of exposing a directly usable file input.

In such cases, Playwright can listen for the `filechooser` event.

### Program

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the file path.
import path from "path";

// Create a test to learn file upload using a file chooser.
test("Test to learn file upload with file chooser", async ({ page }) => {

    // Navigate to the Blazorise File Picker page.
    await page.goto("https://blazorise.com/docs/components/file-picker");

    // Start listening for the file chooser event before clicking the upload control.
    const fileUploadPromise = page.waitForEvent("filechooser");

    // Locate the Choose files element and click it.
    await page.locator("//span[text()='Choose files']").first().click();

    // Wait for and capture the file chooser object.
    const fileUpload = await fileUploadPromise;

    // Upload the required file through the file chooser.
    await fileUpload.setFiles(
        path.join(__dirname, "../../Data/TestleafLogo.png")
    );

    // Wait for five seconds so the upload result can be observed.
    await page.waitForTimeout(5000);
});
```

---

# 5. Understanding `filechooser`

The `filechooser` event is triggered when an action opens the browser's file chooser.

The flow is:

```text
Start listening for filechooser
              ↓
       Click upload control
              ↓
      File chooser opens
              ↓
       Capture chooser
              ↓
          setFiles()
```

### Important APIs

| API | Purpose |
|---|---|
| `page.waitForEvent("filechooser")` | Wait for the file chooser event |
| `fileUpload.setFiles()` | Select/upload the file |

---

# 6. `setInputFiles()` vs `filechooser`

| `setInputFiles()` | `filechooser` |
|---|---|
| Directly interacts with a file input | Handles the file chooser event |
| Simpler approach | Useful for custom upload controls |
| Does not require a chooser event | Requires event listener before clicking |
| Uses `setInputFiles()` | Uses `setFiles()` |

### Easy way to remember

```text
Direct input
    ↓
setInputFiles()

Custom upload control
    ↓
waitForEvent("filechooser")
    ↓
setFiles()
```

---

# 7. Important Event Handling Rule

The event listener must be registered **before** the action that triggers the event.

### Correct

```typescript
// Start listening for the file chooser.
const fileUploadPromise = page.waitForEvent("filechooser");

// Click the control that opens the file chooser.
await page.locator("//span[text()='Choose files']").first().click();

// Capture the file chooser.
const fileUpload = await fileUploadPromise;
```

### Incorrect concept

```text
Click upload
      ↓
Start listening for filechooser
```

The event could already have occurred before Playwright started waiting for it.

### Correct concept

```text
Start listening
      ↓
Click upload
      ↓
Await event
```

---

# 8. File Download in Playwright

File download is the process of receiving a file from the application and saving it to a local location.

Playwright provides the `download` event.

### Program

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the download path.
import path from "path";

// Create a test to learn file download handling.
test("Test to learn file download", async ({ page }) => {

    // Navigate to the DemoQA Upload and Download page.
    await page.goto("https://demoqa.com/upload-download");

    // Start listening for the download event before clicking the Download button.
    const fileDownloadPromise = page.waitForEvent("download");

    // Click the Download button to trigger the file download.
    await page.getByRole("button", { name: "Download" }).click();

    // Wait for and capture the downloaded file.
    const fileDownload = await fileDownloadPromise;

    // Save the downloaded file using its original suggested filename.
    await fileDownload.saveAs(
        path.join(__dirname, `../../Download/${fileDownload.suggestedFilename()}`)
    );

    // Wait for five seconds so the download result can be observed.
    await page.waitForTimeout(5000);
});
```

---

# 9. Understanding the Download Event

The download flow is:

```text
Start listening for download
              ↓
       Click Download
              ↓
      Download starts
              ↓
      Capture Download object
              ↓
       suggestedFilename()
              ↓
            saveAs()
              ↓
       File saved locally
```

---

# 10. `waitForEvent("download")`

This method waits for a Playwright download event.

```typescript
// Start listening for the download event.
const fileDownloadPromise = page.waitForEvent("download");
```

The variable contains a promise.

The actual `Download` object is obtained by awaiting it:

```typescript
// Capture the Download object.
const fileDownload = await fileDownloadPromise;
```

---

# 11. `suggestedFilename()`

The `suggestedFilename()` method returns the filename suggested for the downloaded file.

```typescript
// Get the filename suggested for the download.
const filename = fileDownload.suggestedFilename();

// Print the filename.
console.log(filename);
```

This is useful when you want to preserve the filename provided by the application.

---

# 12. `saveAs()`

`saveAs()` saves the downloaded file to the specified local path.

### Original suggested filename

```typescript
// Save the file using the suggested filename.
await fileDownload.saveAs(
    path.join(__dirname, `../../Download/${fileDownload.suggestedFilename()}`)
);
```

### Custom filename

The commented option from the program can be used when a custom name is required:

```typescript
// Save the downloaded file using a custom filename.
await fileDownload.saveAs(
    path.join(__dirname, "../../Download/DownloadedFile.png")
);
```

---

# 13. Suggested Filename vs Custom Filename

### Suggested filename

```typescript
// Save using the filename suggested by the application.
await fileDownload.saveAs(
    path.join(__dirname, `../../Download/${fileDownload.suggestedFilename()}`)
);
```

The application-provided filename is retained.

### Custom filename

```typescript
// Save using a custom filename.
await fileDownload.saveAs(
    path.join(__dirname, "../../Download/DownloadedFile.png")
);
```

The automation script controls the local filename.

---

# 14. Upload and Download API Comparison

| Operation | Playwright API |
|---|---|
| Direct file upload | `setInputFiles()` |
| File chooser upload | `waitForEvent("filechooser")` |
| Set file through chooser | `setFiles()` |
| Wait for download | `waitForEvent("download")` |
| Get suggested filename | `suggestedFilename()` |
| Save download | `saveAs()` |

---

# 15. Common Pattern in Both File Upload and Download

Both file chooser upload and download use an event-driven approach.

### File chooser

```text
Listen
  ↓
Click
  ↓
Await event
  ↓
Use chooser
```

### Download

```text
Listen
  ↓
Click
  ↓
Await event
  ↓
Use download object
```

The key principle is:

> **Register the event listener before performing the action that triggers the event.**

---

# 16. Important Corrections From the Programs

### Correction 1: Always await Playwright actions

Use:

```typescript
// Click the upload control and wait for completion.
await page.locator("//span[text()='Choose files']").first().click();
```

instead of:

```typescript
page.locator("//span[text()='Choose files']").first().click();
```

### Correction 2: Await `saveAs()`

Use:

```typescript
// Save the downloaded file and wait for the save operation to complete.
await fileDownload.saveAs("Download/file.png");
```

because saving is asynchronous.

### Correction 3: Register event listeners before triggering actions

For both file chooser and download:

```text
Register event listener
          ↓
Trigger action
          ↓
Await event
```

---

# 17. `waitForTimeout()` in These Programs

The examples use:

```typescript
// Wait for five seconds.
await page.waitForTimeout(5000);
```

This can be useful for demonstration or observing the result during training.

However, fixed waits should generally not be the primary synchronization strategy in production automation.

Prefer Playwright's automatic waiting and appropriate assertions when verifying application behavior.

---

# 18. Complete Conceptual Comparison

```text
                    FILE OPERATIONS
                         |
          +--------------+--------------+
          |                             |
       UPLOAD                        DOWNLOAD
          |                             |
   +------+-------+                     |
   |              |                     |
Direct Input   File Chooser             |
   |              |                     |
setInputFiles()   |                     |
                  |                     |
          waitForEvent()                |
          "filechooser"                 |
                  |                     |
              setFiles()                |
                                        |
                              waitForEvent("download")
                                        |
                                  Download object
                                        |
                           +------------+------------+
                           |                         |
                  suggestedFilename()              saveAs()
                           |                         |
                    Original name              Local file
```

---

# 19. Quick Revision

### File Upload

- `setInputFiles()` → direct file input upload.
- `waitForEvent("filechooser")` → wait for file chooser.
- `setFiles()` → upload through the file chooser.
- Register the file chooser listener before clicking.

### File Download

- `waitForEvent("download")` → wait for download.
- `suggestedFilename()` → get suggested filename.
- `saveAs()` → save the downloaded file.
- Register the download listener before clicking.

### Best Practice

```text
Listen first
    ↓
Trigger action
    ↓
Await event
    ↓
Use returned object
```
