# Playwright JSON & CSV Data Parameterization — Interview Questions & Theory

## 1. Parameterization Theory

### What is test data parameterization?

Test data parameterization means executing the same automation flow with multiple sets of external test data.

### Common Flow

```text
External Test Data
        ↓
Read / Import
        ↓
Array of Records
        ↓
Loop
        ↓
Create Test
        ↓
Use Current Record
```

---

# 2. JSON Parameterization

## Q1. How can you parameterize Playwright tests using JSON?

**Answer:** Import the JSON data, iterate through the records, and create a Playwright test for each record.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Import the login test data from the JSON file.
import loginData from "../../Data/loginData.json";

// Iterate through every JSON record.
for (let i = 0; i < loginData.length; i++) {

    // Create a separate test for the current JSON record.
    test(`Test to verify login function ${i + 1}`, async ({ page }) => {

        // Navigate to the URL from the current record.
        await page.goto(loginData[i].url);

        // Enter the username from the current record.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(loginData[i].username);

        // Enter the password from the current record.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(loginData[i].password);

        // Click the Login button.
        await page.getByRole("button", { name: "Login" }).click();
    });
}
```

## Q2. Why is `loginData.length` used?

**Answer:** It returns the number of records in the JSON array and controls how many times the loop executes.

## Q3. What does `loginData[i]` represent?

**Answer:** It represents the current JSON object being processed by the loop.

## Q4. How do you access the username?

```typescript
// Access the username from the current JSON record.
loginData[i].username;
```

## Q5. How does the JSON create multiple tests?

**Answer:** The `for` loop executes once per JSON record, and each iteration calls `test()`, creating a separate Playwright test.

```text
Record 1 → Test 1
Record 2 → Test 2
Record 3 → Test 3
```

---

# 3. CSV Parameterization

## Q6. How can you parameterize Playwright tests using CSV?

**Answer:** Read the CSV using `fs`, parse it using `csv-parse`, iterate through the parsed records, and create a test for each record.

## Q7. Why is the `fs` module used?

**Answer:** It is used to read the CSV file from the file system.

```typescript
// Import the file system module.
import fs from "fs";
```

## Q8. What does `readFileSync()` do?

**Answer:** It reads the specified file synchronously and returns its content.

```typescript
// Read the CSV file as UTF-8 text.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");
```

## Q9. Why is `utf-8` specified?

**Answer:** It tells Node.js to return the file content as text.

---

# 4. CSV Parser

## Q10. Why is `csv-parse/sync` used?

**Answer:** It converts CSV text into JavaScript data that can be consumed by the Playwright test.

```typescript
// Import the synchronous CSV parser.
import { parse } from "csv-parse/sync";
```

## Q11. What does `columns: true` do?

**Answer:** It uses the first CSV row as object property names.

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

## Q12. What does `skip_empty_lines: true` do?

**Answer:** It tells the parser to ignore empty lines in the CSV.

## Q13. What is stored in `csvRecords`?

**Answer:** The parsed CSV records are stored in `csvRecords`.

```typescript
// Parse CSV text into an array of objects.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

---

# 5. JSON vs CSV

## Q14. What is the difference between JSON and CSV parameterization?

| JSON | CSV |
|---|---|
| Direct JSON import in this example | Read using `fs` |
| Structured data | Tabular data |
| No separate parser in this example | Requires CSV parser |
| `loginData[i]` | `csvRecords[i]` |
| `loginData[i].username` | `csvRecords[i].username` |

## Q15. Which is better: JSON or CSV?

**Answer:** Neither is universally better. JSON is useful for structured data, while CSV is useful for row-and-column test data.

---

# 6. Scenario-Based Questions

## Q16. You have 100 login combinations. Would you create 100 test scripts?

**Answer:** No. Use data parameterization so the same test flow can execute with multiple records.

## Q17. The username and password change for every test. How would you handle it?

**Answer:** Store the credentials in an external source such as JSON or CSV and use the current record during test execution.

## Q18. You need to add another login combination. Do you need to modify the test flow?

**Answer:** Normally, no. Add another valid record to the external test-data file.

## Q19. You have 10 valid CSV records. How many tests can the loop create?

**Answer:** One Playwright test per parsed record, so normally 10 tests.

---

# 7. Coding Interview Questions

## Q20. Write code to read a CSV file.

```typescript
// Import the file system module.
import fs from "fs";

// Read the CSV file as UTF-8 text.
const csvData = fs.readFileSync("Data/LoginData.csv", "utf-8");
```

## Q21. Write code to parse CSV data.

```typescript
// Import the CSV parser.
import { parse } from "csv-parse/sync";

// Convert CSV text into an array of objects.
const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});
```

## Q22. How do you access the current CSV username?

```typescript
// Access the username from the current CSV record.
csvRecords[i].username;
```

## Q23. How do you create a dynamic test name?

```typescript
// Create a dynamic test name using the current index.
test(`Test to verify login function ${i + 1}`, async ({ page }) => {
});
```

---

# 8. Debugging Questions

## Q24. What happens if `columns: true` is removed?

**Answer:** The parser will produce a different structure because the first row will not be used as object property names in the same way. Property access such as `csvRecords[i].username` may therefore not work as expected.

## Q25. What happens if the CSV file path is incorrect?

**Answer:** The file-reading operation fails because the specified file cannot be found.

## Q26. What happens if a required column is missing?

**Answer:** The expected property may be unavailable, causing incorrect test data or failures when the test tries to use it.

---

# 9. Practical Comparison

### JSON

```text
loginData.json
      ↓
import
      ↓
loginData
      ↓
for loop
      ↓
test()
```

### CSV

```text
LoginData.csv
      ↓
fs.readFileSync()
      ↓
csvData
      ↓
parse()
      ↓
csvRecords
      ↓
for loop
      ↓
test()
```

---

# 10. Follow-Up Interview Questions

## Q27. Is parameterization the same as creating multiple test scripts?

**Answer:** No. Parameterization allows one test flow to execute against multiple data records.

## Q28. Why separate test data from test logic?

**Answer:** It improves reusability and maintainability and makes changing or adding test data easier.

## Q29. What is common between JSON and CSV parameterization?

**Answer:** Both provide external data to the same Playwright test flow.

## Q30. What is the main implementation difference?

**Answer:** JSON can be imported directly in the shown approach, while CSV must first be read and parsed.

---

# 11. Quick Interview Revision

### JSON

```typescript
// Import JSON data.
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

### Core Interview Statement

**Playwright data parameterization allows the same automation flow to execute with multiple external test-data records. JSON and CSV are two possible external data sources.**
