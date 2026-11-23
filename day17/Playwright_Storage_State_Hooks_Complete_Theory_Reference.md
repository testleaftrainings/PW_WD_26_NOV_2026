# Playwright Storage State, Hooks and Test Execution — Complete Reference Notes

## 1. Storage State in Playwright

### Definition

Playwright `storageState` allows you to save the browser session state after login and reuse that state in other tests.

The saved state can contain authentication-related browser data such as cookies and local storage.

### Why Use Storage State?

Without storage state, every test may need to perform the login steps again.

With storage state:

```text
Login Test
   ↓
Save Authentication State
   ↓
login_leaftaps.json
   ↓
Reuse State in Other Tests
   ↓
Open Application Already Logged In
```

This is useful when multiple test cases need the same authenticated session.

---

## 2. Saving Storage State

Example based on the Leaftaps login flow:

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test to verify the Create Lead function.
test("Test to verify Create Lead function", async ({ page }) => {

    // Navigate to the Leaftaps application.
    await page.goto("/opentaps/");

    // Locate the Username field using the label relationship and enter the username.
    await page.locator("//label[text()='Username']/following-sibling::input").fill("Demosalesmanager");

    // Locate the Password textbox using its accessible role and enter the password.
    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    // Locate the Login button and click it.
    await page.getByRole("button", { name: "Login" }).click();

    // Locate the CRM/SFA link and click it.
    await page.getByText("CRM/SFA").click();

    // Save the current browser context storage state to a JSON file.
    await page.context().storageState({ path: "SSData/login_leaftaps.json" });
});
```

### Important Point

`storageState()` belongs to the browser context.

```typescript
// Save the current browser context state.
await page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

The `await` is important because saving the state is asynchronous.

---

## 3. Reusing Storage State

Once the state is saved, it can be configured for another test.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Configure the test to reuse the saved authentication state.
test.use({ storageState: "SSData/login_leaftaps.json" });

// Create a test to verify the Create Lead function.
test("Test to verify Create Lead function", async ({ page }) => {

    // Navigate to the CRM/SFA page.
    await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL440179960772");

    // Locate the Leads link and click it.
    await page.getByText("Leads", { exact: true }).click();

    // Locate the Create Lead link and click it.
    await page.getByText("Create Lead", { exact: true }).click();

    // Locate the Company Name field and enter the company name.
    await page.locator("#createLeadForm_companyName").fill("Testleaf");

    // Locate the First Name field and enter the first name.
    await page.locator("#createLeadForm_firstName").fill("Vineeth");

    // Locate the Last Name field and enter the last name.
    await page.locator("#createLeadForm_lastName").fill("Rajendran");

    // Locate the Data Source dropdown and select the required options.
    await page.locator("#createLeadForm_dataSourceId").selectOption([
        { index: 0 },
        { index: 3 },
        { index: 5 }
    ]);

    // Wait for 5 seconds so that the test result can be observed.
    await page.waitForTimeout(5000);
});
```

### How Reuse Works

```text
Saved Login State
       ↓
storageState JSON
       ↓
test.use()
       ↓
New Test Context
       ↓
Authentication State Available
       ↓
Test Starts
```

### Important Note

`test.use({ storageState: ... })` configures the storage state for the test or test scope. It does not mean that the same `page` object is reused.

---

# 4. Login Test Suite

The following code demonstrates grouping multiple login tests and configuring them to run serially.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Create a test group for login functionality.
test.describe("Test for login functionality", () => {

    // Configure the tests in this group to run serially.
    test.describe.configure({ mode: "serial" });

    // Create a test to verify login with valid credentials.
    test("Test to verify login with valid credentials", async ({ page }) => {

        // Navigate to the Leaftaps login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username field and enter a valid username.
        await page.locator("//label[text()='Username']/following-sibling::input").fill("Demosalesmanager");

        // Locate the Password textbox and enter the valid password.
        await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });

    // Create a test to verify login with invalid credentials.
    test("Test to verify login with invalid credentials", async ({ page }) => {

        // Increase the default timeout for this test because it is expected to take longer.
        test.slow();

        // Navigate to the Leaftaps login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username field and enter an invalid username.
        await page.locator("//label[text()='Username']/following-sibling::input").fill("Demo");

        // Locate the Password textbox and enter the password.
        await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });

    // Create a test to verify login without credentials.
    test("Test to verify login without credentials", async ({ page }) => {

        // Navigate to the Leaftaps login page.
        await page.goto("https://leaftaps.com/opentaps/control/main");

        // Locate the Username field and clear the field.
        await page.locator("//label[text()='Username']/following-sibling::input").fill("");

        // Locate the Password textbox and clear the field.
        await page.getByRole("textbox", { name: "Password" }).fill("");

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
});
```

## 5. Serial Execution

The following configuration makes tests inside the describe block execute serially:

```typescript
// Configure the tests to execute one after another.
test.describe.configure({ mode: "serial" });
```

### Execution Concept

```text
Test 1
  ↓
Test 2
  ↓
Test 3
```

### Important Distinction

Serial execution controls test order/dependency behavior within the group. It does **not** automatically make all tests share the same `page` or browser context.

If authentication needs to be reused, `storageState` is a suitable mechanism.

---

# 6. Playwright Hooks

Hooks are setup and cleanup mechanisms that execute at specific points in the test lifecycle.

The main hooks used here are:

- `beforeAll`
- `beforeEach`
- `afterEach`
- `afterAll`

---

## 7. `beforeAll`

`beforeAll` runs once before all tests in its scope.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Execute this hook once before all tests.
test.beforeAll(async () => {

    // Print a message before the test suite starts.
    console.log("Before All test");
});
```

### Use Cases

- one-time setup
- creating shared test data
- initializing resources

---

## 8. `beforeEach`

`beforeEach` runs before every test.

```typescript
// Execute this hook before every test.
test.beforeEach(async () => {

    // Print a message before each test starts.
    console.log("Before each test");
});
```

### Use Cases

- navigating to a page
- preparing test data
- performing common setup
- resetting state

---

## 9. `afterEach`

`afterEach` runs after every test.

```typescript
// Execute this hook after every test.
test.afterEach(async () => {

    // Print a message after each test completes.
    console.log("After each test");
});
```

### Use Cases

- cleanup
- logging
- collecting test information
- resetting test data

---

## 10. `afterAll`

`afterAll` runs once after all tests in its scope complete.

```typescript
// Execute this hook once after all tests.
test.afterAll(async () => {

    // Print a message after the complete test suite finishes.
    console.log("After all test");
});
```

---

# 11. Complete Hooks Example

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Execute this hook once before all tests.
test.beforeAll(async () => {

    // Print a message before the test suite starts.
    console.log("Before All test");
});

// Execute this hook before every test.
test.beforeEach(async () => {

    // Print a message before each test starts.
    console.log("Before each test");
});

// Create the first test case.
test("Test1", async ({ page }) => {

    // Print the name of the first test.
    console.log("Test1");
});

// Create the second test case.
test("Test2", async ({ page }) => {

    // Print the name of the second test.
    console.log("Test2");
});

// Create the third test case.
test("Test3", async ({ page }) => {

    // Print the name of the third test.
    console.log("Test3");
});

// Execute this hook after every test.
test.afterEach(async () => {

    // Print a message after each test completes.
    console.log("After each test");
});

// Execute this hook once after all tests complete.
test.afterAll(async () => {

    // Print a message after the complete test suite finishes.
    console.log("After all test");
});
```

### Execution Order

```text
Before All test

Before each test
Test1
After each test

Before each test
Test2
After each test

Before each test
Test3
After each test

After all test
```

---

# 12. Hook Execution Flow

```text
beforeAll()
     ↓
beforeEach()
     ↓
Test 1
     ↓
afterEach()
     ↓
beforeEach()
     ↓
Test 2
     ↓
afterEach()
     ↓
beforeEach()
     ↓
Test 3
     ↓
afterEach()
     ↓
afterAll()
```

---

# 13. `page` Fixture in Hooks

The example tests use:

```typescript
// Receive the Playwright page fixture.
async ({ page }) => {
```

The `page` fixture is supplied by Playwright Test.

If a test does not use the `page`, it can be removed from the parameter list.

```typescript
// Create a test without using the page fixture.
test("Test1", async () => {

    // Print the test name.
    console.log("Test1");
});
```

---

# 14. Storage State vs Hooks

| Feature | Storage State | Hooks |
|---|---|---|
| Main purpose | Reuse authentication/session state | Setup and cleanup |
| Common API | `storageState()` | `beforeAll()`, `beforeEach()`, `afterEach()`, `afterAll()` |
| Typical use | Avoid repeated login | Common setup/cleanup |
| Scope | Browser context state | Test lifecycle |
| Example | Save login session | Navigate before every test |

They can also be used together in a framework.

---

# 15. Important Corrections in the Provided Code

### Correction 1 — Await `storageState()`

Incorrect:

```typescript
page.context().storageState({ path: "SSData/login_leaftaps.json" });
```

Correct:

```typescript
// Save the browser context state to the specified JSON file.
await page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

### Correction 2 — Await `page.goto()`

Incorrect:

```typescript
page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL440179960772");
```

Correct:

```typescript
// Navigate to the CRM/SFA page.
await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL440179960772");
```

### Correction 3 — Standardize indentation and formatting

The examples were standardized for readability and beginner-friendly training.

---

# 16. Best Practices

1. Save authentication state in a dedicated folder such as `SSData`.
2. Do not commit authentication state files containing sensitive session information to a public repository.
3. Use `storageState` when many tests require the same authenticated state.
4. Use `beforeEach` for setup required before every test.
5. Use `afterEach` for cleanup required after every test.
6. Use `beforeAll` and `afterAll` for one-time setup and cleanup.
7. Use serial mode only when test ordering/dependency requires it.
8. Prefer independent tests whenever possible.
9. Do not use `waitForTimeout()` as the primary synchronization mechanism.
10. Use Playwright's auto-waiting and assertions where possible.

---

# 17. Quick Revision

### Storage State

```typescript
// Save the current browser context state.
await page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

```typescript
// Configure the test to reuse saved authentication state.
test.use({
    storageState: "SSData/login_leaftaps.json"
});
```

### Hooks

```text
beforeAll()  → once before all tests
beforeEach() → before every test
afterEach()  → after every test
afterAll()   → once after all tests
```

### Serial Execution

```typescript
// Configure tests in the group to execute serially.
test.describe.configure({ mode: "serial" });
```

### Key Interview Point

`storageState` is mainly used to persist and reuse browser authentication/session state, while hooks control setup and cleanup during the test lifecycle.
