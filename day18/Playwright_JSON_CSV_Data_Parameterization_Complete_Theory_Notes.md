# Playwright JSON & CSV Data Parameterization — Complete Theory & Reference Notes

## 1. Test Data Parameterization

Test data parameterization means executing the same automation flow with multiple sets of external test data.

The two examples covered here use:

1. JSON test data
2. CSV test data

### Common Flow

```text
External Test Data
        ↓
Read / Import
        ↓
Array of Records
        ↓
for Loop
        ↓
Create Playwright Test
        ↓
Use Current Record
        ↓
Execute Same Test Flow
```

---

# 2. JSON Data Parameterization

## 2.1 JSON Test Data

Example `loginData.json`:

```json
[
    {
        "url": "https://leaftaps.com/opentaps/control/main",
        "username": "Demosalesmanager",
        "password": "crmsfa"
    },
    {
        "url": "https://leaftaps.com/opentaps/control/main",
        "username": "Demo",
        "password": "crmsfa"
    },
    {
        "url": "https://leaftaps.com/opentaps/control/main",
        "username": "",
        "password": ""
    }
]
```

Each object represents one test-data record.

---

## 2.2 Import JSON Data

```typescript
// Import the login test data from the JSON file.
import loginData from "../../Data/loginData.json";
```

The imported `loginData` contains an array of objects.

---

## 2.3 `loginData.length`

```typescript
// Get the number of records available in the JSON array.
loginData.length;
```

If there are three objects:

```text
loginData.length = 3
```

---

## 2.4 Iterating Through JSON Records

```typescript
// Iterate through every JSON record.
for (let i = 0; i < loginData.length; i++) {
```

The loop processes:

```text
i = 0
i = 1
i = 2
```

---

## 2.5 Creating Dynamic Tests

```typescript
// Create a separate Playwright test for the current JSON record.
test(`Test to verify login function ${i + 1}`, async ({ page }) => {
```

The resulting test names are:

```text
Test to verify login function 1
Test to verify login function 2
Test to verify login function 3
```

---

## 2.6 Accessing JSON Properties

```typescript
// Access the current JSON object.
loginData[i];

// Access the URL.
loginData[i].url;

// Access the username.
loginData[i].username;

// Access the password.
loginData[i].password;
```

---

## 2.7 Complete JSON Example

```typescript
// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import the login test data from the JSON file.
import loginData from "../../Data/loginData.json";

// Iterate through each login data object.
for (let i = 0; i < loginData.length; i++) {

    // Create a separate Playwright test for each JSON record.
    test(`Test to verify login function ${i + 1}`, async ({ page }) => {

        // Navigate to the URL from the current JSON record.
        await page.goto(loginData[i].url);

        // Locate the Username field and enter the current username.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(loginData[i].username);

        // Locate the Password textbox and enter the current password.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(loginData[i].password);

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill(loginData[i].password);

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
}
```

---

# 3. JSON Execution Flow

If the JSON contains three records:

```text
loginData[0]
    ↓
Test 1

loginData[1]
    ↓
Test 2

loginData[2]
    ↓
Test 3
```

Each test uses the values from its current record.

---

# 4. CSV Data Parameterization

## 4.1 CSV Test Data

Example `LoginData.csv`:

```csv
url,username,password
https://leaftaps.com/opentaps/control/main,Demosalesmanager,crmsfa
https://leaftaps.com/opentaps/control/main,Demo,crmsfa
https://leaftaps.com/opentaps/control/main,,
```

The first row contains the column names.

Each following row represents one test-data record.

---

## 4.2 Import `fs`

```typescript
// Import the file system module to read the CSV file.
import fs from "fs";
```

---

## 4.3 Import the CSV Parser

```typescript
// Import the synchronous CSV parser.
import { parse } from "csv-parse/sync";
```

---

## 4.4 Read the CSV File

```typescript
// Read the CSV file as UTF-8 text.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");
```

`csvData` contains the raw CSV text.

---

## 4.5 Parse the CSV

```typescript
// Convert the CSV text into an array of JavaScript objects.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

### `columns: true`

The first CSV row is used as the object property names.

For example:

```csv
url,username,password
https://leaftaps.com,Demosalesmanager,crmsfa
```

becomes conceptually:

```typescript
{
    url: "https://leaftaps.com",
    username: "Demosalesmanager",
    password: "crmsfa"
}
```

### `skip_empty_lines: true`

Empty lines in the CSV are ignored.

---

## 4.6 Access CSV Records

```typescript
// Access the current CSV record.
csvRecords[i];

// Access the current URL.
csvRecords[i].url;

// Access the current username.
csvRecords[i].username;

// Access the current password.
csvRecords[i].password;
```

---

## 4.7 Complete CSV Example

```typescript
// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import the file system module to read the CSV file.
import fs from "fs";

// Import the synchronous CSV parser.
import { parse } from "csv-parse/sync";

// Read the CSV file as UTF-8 text.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");

// Convert the CSV text into an array of JavaScript objects.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

// Iterate through each CSV record.
for (let i = 0; i < csvRecords.length; i++) {

    // Create a separate Playwright test for each CSV record.
    test(`Test to verify login function ${i + 1}`, async ({ page }) => {

        // Navigate to the URL from the current CSV record.
        await page.goto(csvRecords[i].url);

        // Locate the Username field and enter the current username.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(csvRecords[i].username);

        // Locate the Password textbox and enter the current password.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(csvRecords[i].password);

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill(csvRecords[i].password);

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
}
```

---

# 5. CSV Execution Flow

```text
LoginData.csv
      ↓
fs.readFileSync()
      ↓
CSV Text
      ↓
parse()
      ↓
csvRecords[]
      ↓
for Loop
      ↓
Create Test
      ↓
Use Current Record
```

---

# 6. JSON vs CSV Parameterization

| Feature | JSON | CSV |
|---|---|---|
| Data source | `.json` | `.csv` |
| Loading | Direct import in this example | `fs.readFileSync()` |
| Parsing | Not separately required | `csv-parse/sync` |
| Data structure | Array of objects | Parsed array of objects |
| Current record | `loginData[i]` | `csvRecords[i]` |
| Username | `loginData[i].username` | `csvRecords[i].username` |
| Password | `loginData[i].password` | `csvRecords[i].password` |
| Typical strength | Structured data | Tabular data |

---

# 7. Common Parameterization Concept

Both programs follow the same automation principle:

```text
External Data
     ↓
Load Data
     ↓
Convert to Records
     ↓
Loop Through Records
     ↓
Create Separate Test
     ↓
Use Current Data
     ↓
Execute Common Flow
```

The main difference is the data-loading mechanism.

---

# 8. Important Standardization Corrections

### JSON

The username operation should be awaited:

```typescript
// Enter the username from the current JSON record.
await page
    .locator("//label[text()='Username']/following-sibling::input")
    .fill(loginData[i].username);
```

### CSV

The username operation should also be awaited:

```typescript
// Enter the username from the current CSV record.
await page
    .locator("//label[text()='Username']/following-sibling::input")
    .fill(csvRecords[i].username);
```

The examples were also formatted with consistent indentation and comments above executable statements.

---

# 9. Best Practices

1. Keep test data separate from test logic.
2. Use meaningful JSON property names and CSV column names.
3. Keep sensitive credentials out of source control where appropriate.
4. Use JSON for structured or nested data.
5. Use CSV for simple tabular data.
6. Reuse one test flow instead of duplicating test scripts.
7. Add new test data through the external file whenever possible.
8. Prefer suitable TypeScript types instead of `any` in production frameworks.
9. Keep external test-data files in a dedicated `Data` directory.
10. Validate test data when the framework requires strict input quality.

---

# 10. Quick Revision

### JSON

```typescript
// Import JSON test data.
import loginData from "../../Data/loginData.json";

// Iterate through JSON records.
for (let i = 0; i < loginData.length; i++) {

    // Access the current record.
    loginData[i];

    // Access the username.
    loginData[i].username;
}
```

### CSV

```typescript
// Import the file system module.
import fs from "fs";

// Import the CSV parser.
import { parse } from "csv-parse/sync";

// Read the CSV file.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");

// Parse the CSV data.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

### Core Concept

**Parameterization = One test flow + Multiple external test-data records.**
