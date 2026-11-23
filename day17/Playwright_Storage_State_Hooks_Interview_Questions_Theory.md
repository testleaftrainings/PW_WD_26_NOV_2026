# Playwright Storage State, Hooks and Test Execution — Interview Questions & Theory

## 1. Storage State — Interview Theory

### What is `storageState`?

`storageState` is a Playwright feature used to save and reuse browser context state, especially authentication-related state such as cookies and local storage.

### Why do we use storageState?

It helps avoid repeating the login steps in every test.

### Basic flow

```text
Login
  ↓
Save storage state
  ↓
JSON file
  ↓
Reuse with test.use()
  ↓
Authenticated test
```

---

## 2. Basic Interview Questions

### Q1. What is `storageState` in Playwright?

**Answer:**  
`storageState` allows us to save browser context state and reuse it in another test. It is commonly used to reuse an authenticated session.

### Q2. How do you save storage state?

```typescript
// Save the current browser context state.
await page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

### Q3. How do you reuse the saved state?

```typescript
// Configure the test to reuse the saved authentication state.
test.use({
    storageState: "SSData/login_leaftaps.json"
});
```

### Q4. Why is `await` used with `storageState()`?

**Answer:**  
Saving storage state is asynchronous, so we use `await` to wait until the state is successfully written.

### Q5. Does storage state reuse the same page?

**Answer:**  
No. It reuses the saved browser context state. The test can still receive a new `page` fixture.

---

# 3. Practical Storage State Question

### Q6. How would you avoid logging in for every test?

**Answer:**

1. Create a login test/setup.
2. Login successfully.
3. Save the browser context state using `storageState()`.
4. Configure tests with `test.use({ storageState: ... })`.
5. Start the protected test directly.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Configure the test to reuse the saved authentication state.
test.use({
    storageState: "SSData/login_leaftaps.json"
});

// Create a test that uses the saved authentication state.
test("Test with stored login state", async ({ page }) => {

    // Navigate directly to the authenticated application page.
    await page.goto("https://leaftaps.com/crmsfa/control/main");

    // Locate the Leads link and click it.
    await page.getByText("Leads", { exact: true }).click();
});
```

---

# 4. Serial Execution — Theory

### What is serial execution?

Serial execution means tests within the configured group execute one after another rather than independently in parallel.

```typescript
// Configure the tests in this group to execute serially.
test.describe.configure({ mode: "serial" });
```

### Execution

```text
Test 1
  ↓
Test 2
  ↓
Test 3
```

---

## 5. Serial Execution Interview Questions

### Q7. What is `test.describe.configure({ mode: "serial" })`?

**Answer:**  
It configures the tests in the describe group to run serially.

### Q8. Does serial mode automatically share the same page between tests?

**Answer:**  
No. Serial mode controls execution behavior. It does not automatically make tests share the same `page` object or browser context.

### Q9. When would you use serial execution?

**Answer:**  
Use it when test order or dependency requires tests to execute sequentially.

Example:

```text
Create data
   ↓
Update data
   ↓
Delete data
```

However, independent tests are generally preferable.

---

# 6. Playwright Hooks — Theory

Hooks allow us to execute setup or cleanup code at specific points in the test lifecycle.

The four commonly used hooks are:

```text
beforeAll()
beforeEach()
afterEach()
afterAll()
```

---

## 7. `beforeAll`

### What does `beforeAll()` do?

It runs once before all tests in its scope.

```typescript
// Execute this hook once before all tests.
test.beforeAll(async () => {

    // Print a message before the test suite starts.
    console.log("Before All test");
});
```

### Common use cases

- One-time setup
- Test data preparation
- Resource initialization

---

## 8. `beforeEach`

### What does `beforeEach()` do?

It runs before every test.

```typescript
// Execute this hook before every test.
test.beforeEach(async () => {

    // Print a message before each test starts.
    console.log("Before each test");
});
```

### Common use cases

- Navigate to a page
- Prepare test data
- Perform common setup

---

## 9. `afterEach`

### What does `afterEach()` do?

It runs after every test.

```typescript
// Execute this hook after every test.
test.afterEach(async () => {

    // Print a message after each test completes.
    console.log("After each test");
});
```

### Common use cases

- Cleanup
- Logging
- Resetting test data

---

## 10. `afterAll`

### What does `afterAll()` do?

It runs once after all tests in its scope complete.

```typescript
// Execute this hook once after all tests.
test.afterAll(async () => {

    // Print a message after the test suite finishes.
    console.log("After all test");
});
```

---

# 11. Hook Execution Order

For three tests, the execution flow is:

```text
beforeAll

beforeEach
Test1
afterEach

beforeEach
Test2
afterEach

beforeEach
Test3
afterEach

afterAll
```

---

## 12. Interview Question — Explain the Execution Order

### Q10. What is the execution order of Playwright hooks?

**Answer:**

```text
beforeAll()
   ↓
beforeEach()
   ↓
Test
   ↓
afterEach()
   ↓
beforeEach()
   ↓
Test
   ↓
afterEach()
   ↓
afterAll()
```

`beforeAll` and `afterAll` execute once, while `beforeEach` and `afterEach` execute for every test.

---

# 13. Scenario-Based Questions

### Q11. You need to navigate to the same page before every test. Which hook would you use?

**Answer:**  
`beforeEach()`.

```typescript
// Navigate to the login page before every test.
test.beforeEach(async ({ page }) => {

    // Open the Leaftaps login page.
    await page.goto("https://leaftaps.com/opentaps/control/main");
});
```

### Q12. You need to perform setup only once before all tests. Which hook would you use?

**Answer:**  
`beforeAll()`.

### Q13. You need cleanup after every test. Which hook would you use?

**Answer:**  
`afterEach()`.

### Q14. You need cleanup only once after all tests. Which hook would you use?

**Answer:**  
`afterAll()`.

### Q15. Three tests need the same login session. What would you use?

**Answer:**  
Use `storageState` to save and reuse the authentication state.

---

# 14. Practical Coding Question

### Q16. Write a Playwright test using all four hooks.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Execute setup once before all tests.
test.beforeAll(async () => {

    // Print a message before all tests.
    console.log("Before All test");
});

// Execute setup before every test.
test.beforeEach(async () => {

    // Print a message before each test.
    console.log("Before each test");
});

// Create the first test.
test("Test1", async () => {

    // Print the first test name.
    console.log("Test1");
});

// Create the second test.
test("Test2", async () => {

    // Print the second test name.
    console.log("Test2");
});

// Execute cleanup after every test.
test.afterEach(async () => {

    // Print a message after each test.
    console.log("After each test");
});

// Execute cleanup once after all tests.
test.afterAll(async () => {

    // Print a message after all tests.
    console.log("After all test");
});
```

---

# 15. Difference Between Hooks

| Hook | Frequency | Purpose |
|---|---|---|
| `beforeAll()` | Once | Common setup |
| `beforeEach()` | Every test | Test-level setup |
| `afterEach()` | Every test | Test-level cleanup |
| `afterAll()` | Once | Common cleanup |

---

# 16. Storage State vs Hooks

### Q17. What is the difference between storageState and hooks?

**Answer:**

`storageState` is mainly used to save and reuse browser authentication/session state.

Hooks are used to perform setup and cleanup at different points in the test lifecycle.

| Storage State | Hooks |
|---|---|
| Saves/reuses browser state | Controls test lifecycle |
| Commonly used for authentication | Commonly used for setup/cleanup |
| Uses `storageState()` | Uses `beforeAll`, `beforeEach`, `afterEach`, `afterAll` |

---

# 17. Debugging Questions

### Q18. What is wrong with this code?

```typescript
// Call storageState without waiting for the asynchronous operation.
page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

**Answer:**  
The operation should be awaited.

Correct:

```typescript
// Save the browser context state and wait for completion.
await page.context().storageState({
    path: "SSData/login_leaftaps.json"
});
```

### Q19. What is wrong with this code?

```typescript
// Start navigation without awaiting the asynchronous operation.
page.goto("https://leaftaps.com/crmsfa/control/main");
```

**Answer:**  
The navigation should be awaited.

Correct:

```typescript
// Navigate to the application and wait for navigation to complete.
await page.goto("https://leaftaps.com/crmsfa/control/main");
```

---

# 18. Advanced Follow-Up Questions

### Q20. Can storageState and hooks be used together?

**Answer:**  
Yes. A framework can reuse authentication through `storageState` and use `beforeEach()` for page-level setup.

### Q21. Should every test depend on the previous test?

**Answer:**  
Prefer independent tests where possible. Serial execution should be used when there is a genuine dependency or ordering requirement.

### Q22. Why should authentication state files be handled carefully?

**Answer:**  
They may contain authentication-related browser data. They should not be unnecessarily exposed or committed to a public repository.

### Q23. What is the difference between `beforeAll` and `beforeEach`?

**Answer:**

- `beforeAll()` runs once for the scope.
- `beforeEach()` runs before every test.

### Q24. What is the difference between `afterAll` and `afterEach`?

**Answer:**

- `afterAll()` runs once after the scope completes.
- `afterEach()` runs after every test.

---

# 19. Quick Interview Revision

## Storage State

```text
storageState()
      ↓
Save authentication/session state
      ↓
JSON file
      ↓
test.use()
      ↓
Reuse state
```

## Hooks

```text
beforeAll  → once before all tests
beforeEach → before every test
afterEach  → after every test
afterAll   → once after all tests
```

## Serial

```typescript
// Configure the test group for serial execution.
test.describe.configure({ mode: "serial" });
```

## Key Interview Answers

- `storageState` → reuse browser authentication/session state.
- `beforeAll` → once before all tests.
- `beforeEach` → before every test.
- `afterEach` → after every test.
- `afterAll` → once after all tests.
- `serial` → execute tests sequentially.
- Serial mode does not automatically mean the same page/context is shared.
- Prefer independent tests unless ordering/dependency is required.
