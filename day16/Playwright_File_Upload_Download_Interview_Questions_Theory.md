# Playwright File Upload & File Download — Interview Questions and Theory

## 1. File Upload Fundamentals

### Q1. How do you upload a file in Playwright?

There are two common approaches:

1. `setInputFiles()` for a directly accessible file input.
2. `filechooser` event with `setFiles()` when a custom upload control opens a file chooser.

---

### Q2. What is `setInputFiles()`?

`setInputFiles()` directly assigns a file to a file input.

Example:

```typescript
// Upload a file directly to the file input.
await page.locator("input[type='file']").setInputFiles(
    "Data/TestleafLogo.png"
);
```

---

### Q3. When would you use `setInputFiles()`?

Use it when the application exposes a file input that can be directly targeted by Playwright.

---

### Q4. What is the difference between `setInputFiles()` and `setFiles()`?

- `setInputFiles()` is used directly on a locator representing a file input.
- `setFiles()` is used on the `FileChooser` object returned from the `filechooser` event.

---

## 2. File Chooser

### Q5. What is a file chooser?

A file chooser is the browser UI used to select files from the local machine.

Playwright can handle the event generated when an application opens the file chooser.

---

### Q6. How do you handle a file chooser?

```typescript
// Start listening for the file chooser.
const fileUploadPromise = page.waitForEvent("filechooser");

// Click the upload control.
await page.getByText("Choose files").click();

// Capture the file chooser.
const fileUpload = await fileUploadPromise;

// Upload the file.
await fileUpload.setFiles("Data/TestleafLogo.png");
```

---

### Q7. Why must `waitForEvent("filechooser")` be called before the click?

Because the click triggers the file chooser event.

If the listener is registered after the click, the event may already have occurred.

Correct:

```text
Wait for event
      ↓
Click
      ↓
Await event
```

Incorrect:

```text
Click
      ↓
Wait for event
```

---

### Q8. What does `setFiles()` do?

It assigns the selected file to the file chooser.

Example:

```typescript
// Upload the required file through the file chooser.
await fileUpload.setFiles("Data/TestleafLogo.png");
```

---

## 3. File Path Questions

### Q9. Why is `path.join()` used?

It combines path segments into a platform-independent file path.

Example:

```typescript
// Build the file path.
path.join(__dirname, "../../Data/TestleafLogo.png");
```

---

### Q10. What is `__dirname`?

`__dirname` represents the directory of the current file in environments that provide the Node.js CommonJS directory variable.

In the provided program, it is used as the starting point for building the file path.

---

## 4. File Download Fundamentals

### Q11. How do you handle a file download in Playwright?

Use the `download` event.

```typescript
// Start listening for the download event.
const fileDownloadPromise = page.waitForEvent("download");

// Click the Download button.
await page.getByRole("button", { name: "Download" }).click();

// Capture the Download object.
const fileDownload = await fileDownloadPromise;
```

---

### Q12. What does `page.waitForEvent("download")` do?

It waits for a download event and returns a promise that resolves to the Playwright `Download` object.

---

### Q13. What is a Download object?

It is the Playwright object representing the downloaded file and provides methods such as:

- `suggestedFilename()`
- `saveAs()`

---

## 5. Suggested Filename

### Q14. What does `suggestedFilename()` do?

It returns the filename suggested for the downloaded file.

Example:

```typescript
// Get the suggested filename.
const filename = fileDownload.suggestedFilename();

// Print the filename.
console.log(filename);
```

---

### Q15. How do you save a download using its original suggested filename?

```typescript
// Save the file using the suggested filename.
await fileDownload.saveAs(
    path.join(__dirname, `../../Download/${fileDownload.suggestedFilename()}`)
);
```

---

### Q16. How do you save a download with a custom filename?

```typescript
// Save the downloaded file using a custom filename.
await fileDownload.saveAs(
    path.join(__dirname, "../../Download/DownloadedFile.png")
);
```

---

## 6. `saveAs()` Questions

### Q17. What does `saveAs()` do?

It saves the downloaded file to the specified local path.

---

### Q18. Why should `saveAs()` be awaited?

Because the save operation is asynchronous.

```typescript
// Save the downloaded file and wait for the operation to complete.
await fileDownload.saveAs("Download/file.png");
```

---

## 7. Upload vs Download

### Q19. What is the difference between file upload and file download handling?

| File Upload | File Download |
|---|---|
| Sends a local file to the application | Receives a file from the application |
| `setInputFiles()` | `waitForEvent("download")` |
| `filechooser` may be used | `Download` object is returned |
| `setFiles()` for chooser | `suggestedFilename()` gets name |
| | `saveAs()` saves file |

---

### Q20. What are the main Playwright APIs for these programs?

| Operation | API |
|---|---|
| Direct upload | `setInputFiles()` |
| File chooser | `waitForEvent("filechooser")` |
| Upload through chooser | `setFiles()` |
| Download event | `waitForEvent("download")` |
| Suggested name | `suggestedFilename()` |
| Save download | `saveAs()` |

---

# 8. Scenario-Based Interview Questions

## Scenario 1: File input is directly available

**Question:** The DOM contains `<input type="file">`. How will you upload a file?

**Answer:**

Use `setInputFiles()`.

```typescript
// Upload the file directly to the file input.
await page.locator("input[type='file']").setInputFiles(
    "Data/TestleafLogo.png"
);
```

---

## Scenario 2: A custom button opens the file chooser

**Question:** The application has a custom "Choose files" button. Clicking it opens the file chooser. What will you do?

**Answer:**

Use `waitForEvent("filechooser")` before clicking.

```typescript
// Start listening for the file chooser.
const chooserPromise = page.waitForEvent("filechooser");

// Click the custom upload control.
await page.getByText("Choose files").click();

// Capture the chooser.
const chooser = await chooserPromise;

// Select the file.
await chooser.setFiles("Data/TestleafLogo.png");
```

---

## Scenario 3: Download button starts a file download

**Question:** How will you capture the download?

**Answer:**

```typescript
// Start listening for the download.
const downloadPromise = page.waitForEvent("download");

// Click the Download button.
await page.getByRole("button", { name: "Download" }).click();

// Capture the download object.
const download = await downloadPromise;
```

---

## Scenario 4: Download must retain its original filename

**Answer:**

Use `suggestedFilename()`.

```typescript
// Save using the application's suggested filename.
await download.saveAs(
    path.join(__dirname, `../../Download/${download.suggestedFilename()}`)
);
```

---

## Scenario 5: Download must have a custom name

**Answer:**

```typescript
// Save using a custom filename.
await download.saveAs(
    path.join(__dirname, "../../Download/DownloadedFile.png")
);
```

---

# 9. Debugging Questions

### Q21. The file upload is not working. What will you check?

Check:

1. Whether the target is actually a file input.
2. Whether the file path is correct.
3. Whether the file exists.
4. Whether `setInputFiles()` is appropriate.
5. If a custom control is used, whether `filechooser` should be handled.
6. Whether the event listener is registered before the click.

---

### Q22. The download is not captured. What could be wrong?

Check:

1. Whether `waitForEvent("download")` is registered before the click.
2. Whether the click actually triggers a download.
3. Whether the locator targets the correct Download button.
4. Whether the application opens the file in a new page instead of downloading it.
5. Whether the download completes successfully.

---

### Q23. Why should you not click first and then wait for the download?

The download event may occur immediately after the click. If the listener is registered afterward, Playwright may miss the event.

---

# 10. Practical Coding Interview Questions

### Task 1

Write a Playwright test that:

1. Opens DemoQA.
2. Uploads `TestleafLogo.png`.
3. Uses `setInputFiles()`.
4. Waits for the result.

**Expected API:** `setInputFiles()`.

---

### Task 2

Write a test that:

1. Opens a file picker.
2. Registers a `filechooser` listener.
3. Clicks the upload control.
4. Uploads a file using `setFiles()`.

**Expected APIs:**

- `waitForEvent("filechooser")`
- `setFiles()`

---

### Task 3

Write a test that:

1. Opens DemoQA.
2. Registers a download listener.
3. Clicks Download.
4. Captures the Download object.
5. Saves it using the suggested filename.

**Expected APIs:**

- `waitForEvent("download")`
- `suggestedFilename()`
- `saveAs()`

---

### Task 4

Modify the download test so that the downloaded file is saved as `DownloadedFile.png`.

**Expected API:** `saveAs()`.

---

# 11. Interviewer Follow-Up Questions

Be prepared for these questions:

1. What is `setInputFiles()`?
2. What is a file chooser?
3. When would you use `waitForEvent("filechooser")`?
4. Difference between `setInputFiles()` and `setFiles()`?
5. Why should the file chooser listener be registered before clicking?
6. What does `waitForEvent("download")` return?
7. What is a Download object?
8. What does `suggestedFilename()` return?
9. What does `saveAs()` do?
10. Why should `saveAs()` be awaited?
11. How do you save a download with a custom filename?
12. How do you save it with the original filename?
13. Why is `path.join()` used?
14. What is `__dirname` used for in the provided code?
15. What is the difference between upload and download events?
16. How would you debug a file upload failure?
17. How would you debug a download event failure?
18. Why should event listeners be registered before triggering actions?

---

# 12. Quick Interview Revision

### Upload

```text
Direct file input
      ↓
setInputFiles()
```

```text
Custom upload control
      ↓
waitForEvent("filechooser")
      ↓
Click
      ↓
Await chooser
      ↓
setFiles()
```

### Download

```text
waitForEvent("download")
      ↓
Click Download
      ↓
Await Download object
      ↓
suggestedFilename()
      ↓
saveAs()
```

### Golden Rule

**For event-driven operations:**

```text
Listen first
    ↓
Trigger action
    ↓
Await event
    ↓
Use returned object
```
