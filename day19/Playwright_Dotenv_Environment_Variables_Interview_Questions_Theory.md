# Playwright + dotenv Environment Variables
## Interview Questions & Theory

## 1. Core Theory

Environment-variable-based configuration allows test data such as usernames and passwords to be maintained outside the Playwright test script.

The example uses:

- Playwright Test
- TypeScript
- `dotenv`
- `.env.dev`
- `process.env`

Main flow:

```text
.env.dev
   ↓
dotenv.config()
   ↓
process.env
   ↓
Playwright test
   ↓
Login
```

---

# 2. Basic Interview Questions

## Q1. Why do we use environment variables in Playwright?

Environment variables allow configuration and sensitive values such as credentials to be kept outside the test code.

This helps avoid hardcoding environment-specific values directly into test scripts.

---

## Q2. What is `dotenv`?

`dotenv` is a package used to load variables from an environment file into `process.env`.

Example:

```typescript
import dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });
```

---

## Q3. What does `dotenv.config()` do?

It reads the specified environment file and loads its variables into the Node.js environment.

Example:

```typescript
dotenv.config({ path: ".env.dev" });
```

The `path` identifies the environment file.

---

## Q4. What is `process.env`?

`process.env` is the Node.js object used to access environment variables.

Example:

```typescript
process.env.Leaftaps_username
process.env.Leaftaps_Password
```

---

## Q5. What is the difference between `dotenv` and `process.env`?

`dotenv` loads variables from an environment file.

`process.env` provides access to environment variables.

```text
dotenv
  ↓
loads variables
  ↓
process.env
  ↓
access variables
```

---

## Q6. Does importing `dotenv` automatically load `.env.dev`?

Not with the explicit configuration shown in this example.

Importing:

```typescript
import dotenv from "dotenv";
```

only imports the package.

The environment file is loaded with:

```typescript
dotenv.config({ path: ".env.dev" });
```

---

## Q7. What happens if `dotenv.config({ path: ".env.dev" })` is commented?

If no other configuration has loaded the variables, values from `.env.dev` will not be explicitly loaded by this test.

Therefore:

```typescript
process.env.Leaftaps_username
```

and:

```typescript
process.env.Leaftaps_Password
```

may be undefined.

---

## Q8. What is the purpose of the `.env.dev` file?

It stores development-environment configuration values.

Example:

```text
Leaftaps_username=Demosalesmanager
Leaftaps_Password=crmsfa
```

---

## Q9. How do you access the username?

```typescript
process.env.Leaftaps_username
```

---

## Q10. How do you access the password?

```typescript
process.env.Leaftaps_Password
```

---

# 3. TypeScript Questions

## Q11. What does the `!` mean in this code?

```typescript
process.env.Leaftaps_username!
```

The `!` is the TypeScript non-null assertion operator.

It tells TypeScript to treat the value as non-null/non-undefined for type checking.

---

## Q12. Does the `!` guarantee that the environment variable exists?

No.

It only affects TypeScript's type checking.

If the variable is actually missing at runtime, `!` does not create a value.

---

## Q13. What is the difference between these?

```typescript
process.env.Leaftaps_username
```

and:

```typescript
process.env.Leaftaps_username!
```

The first can be treated by TypeScript as potentially undefined.

The second tells TypeScript to assume the value is available.

---

# 4. Playwright Questions

## Q14. Why is `await` used with `page.goto()`?

Navigation is asynchronous, so the test waits for the navigation operation to complete.

Example:

```typescript
await page.goto("/");
```

---

## Q15. What does `page.goto("/")` mean?

`/` is a relative URL.

It relies on the `baseURL` configured for Playwright.

For example:

```typescript
use: {
    baseURL: "https://leaftaps.com/opentaps/control/main"
}
```

Then:

```typescript
await page.goto("/");
```

uses the configured base URL.

---

## Q16. What is the relationship between `.env.dev` and `baseURL`?

They can both be part of environment-specific configuration, but they have different responsibilities.

```text
.env.dev
   ├── username
   └── password

playwright.config.ts
   └── baseURL
```

The test uses environment variables for credentials and a relative URL for navigation.

---

# 5. Scenario-Based Questions

## Q17. You have `.env.dev`, `.env.qa`, and `.env.prod`. How can the same test use different credentials?

Load the appropriate environment file for the selected environment.

For example:

```text
.env.dev
.env.qa
.env.prod
```

Each can contain:

```text
Leaftaps_username=...
Leaftaps_Password=...
```

The test can remain unchanged:

```typescript
process.env.Leaftaps_username!
process.env.Leaftaps_Password!
```

Only the selected environment configuration changes.

---

## Q18. Why should you avoid hardcoding credentials?

Hardcoded credentials:

- expose sensitive values in source code
- make environment changes harder
- reduce reusability
- can accidentally be committed to Git

Environment variables separate configuration from test logic.

---

## Q19. What happens if the variable name is incorrect?

Suppose `.env.dev` contains:

```text
Leaftaps_username=Demosalesmanager
```

but the test uses:

```typescript
process.env.Leaftaps_user
```

The names do not match, so the requested variable can be undefined.

---

## Q20. How would you debug an environment-variable issue?

Check:

1. Is `dotenv` installed?
2. Is `dotenv` imported?
3. Is `dotenv.config()` executed?
4. Is the correct file path specified?
5. Does the variable name match exactly?
6. Is the environment file available?
7. Is another configuration overriding the variable?
8. Is the correct environment selected?

Do not print real passwords while debugging.

---

# 6. Code Understanding Questions

## Q21. Explain this line.

```typescript
dotenv.config({ path: ".env.dev" });
```

It loads environment variables from `.env.dev`.

---

## Q22. Explain this line.

```typescript
.fill(process.env.Leaftaps_username!);
```

The test retrieves the username from `process.env` and passes it to Playwright's `fill()` method.

The `!` is a TypeScript non-null assertion.

---

## Q23. Explain this line.

```typescript
await page.goto("/");
```

The test navigates to the relative URL `/` using the configured Playwright `baseURL`.

---

## Q24. Explain the complete login flow.

```text
1. Import Playwright test
2. Import dotenv
3. Load .env.dev
4. Access username through process.env
5. Access password through process.env
6. Navigate to the application
7. Fill username
8. Fill password
9. Click Login
```

---

# 7. Practical Coding Questions

## Q25. Write code to load `.env.dev`.

```typescript
// Import dotenv to load environment variables.
import dotenv from "dotenv";

// Load variables from the development environment file.
dotenv.config({ path: ".env.dev" });
```

---

## Q26. Write code to retrieve the username.

```typescript
// Retrieve the username from the environment variables.
const username = process.env.Leaftaps_username;
```

---

## Q27. Write code to retrieve the password.

```typescript
// Retrieve the password from the environment variables.
const password = process.env.Leaftaps_Password;
```

---

## Q28. Write a Playwright login using environment variables.

```typescript
// Import the Playwright Test function.
import test from "@playwright/test";

// Import dotenv to load environment variables.
import dotenv from "dotenv";

// Load the development environment variables.
dotenv.config({ path: ".env.dev" });

// Create a login test.
test("Test to verify login function", async ({ page }) => {

    // Navigate to the configured base URL.
    await page.goto("/");

    // Enter the username from the environment variables.
    await page
        .locator("//label[text()='Username']/following-sibling::input")
        .fill(process.env.Leaftaps_username!);

    // Enter the password from the environment variables.
    await page
        .getByRole("textbox", { name: "Password" })
        .fill(process.env.Leaftaps_Password!);

    // Click the Login button.
    await page.getByRole("button", { name: "Login" }).click();
});
```

---

# 8. Multiple Environment Questions

## Q29. Why would a project use multiple `.env` files?

Different environments may require different configuration values.

For example:

```text
.env.dev
.env.qa
.env.prod
```

The same test can be executed against different environments without changing the test logic.

---

## Q30. What should remain the same when switching environments?

Ideally, the test logic should remain unchanged.

Only environment-specific configuration should change.

```text
Same test
   +
Different environment configuration
   =
Different environment execution
```

---

## Q31. Where should environment selection ideally be handled in a larger framework?

For a larger framework, environment selection is generally cleaner when centralized in configuration rather than repeated inside every test file.

This keeps test files focused on test behavior.

---

# 9. Security Questions

## Q32. Is using `.env` automatically secure?

No.

Environment files can still contain sensitive information.

They should be protected and real credentials should not be exposed through source control or logs.

---

## Q33. Should passwords be printed using `console.log()`?

No.

Avoid:

```typescript
console.log(process.env.Leaftaps_Password);
```

because the password may appear in test output or CI logs.

---

## Q34. Should `.env.dev` be committed to Git?

Real credentials should generally not be committed to source control.

A safe `.env.example` can contain placeholder values:

```text
Leaftaps_username=your_username
Leaftaps_Password=your_password
```

---

# 10. Interview Scenario Questions

## Q35. Your test says the username is undefined. What will you check?

Check:

```text
dotenv import
      ↓
dotenv.config()
      ↓
correct .env path
      ↓
correct variable name
      ↓
environment file availability
```

Also check whether another configuration is overriding the value.

---

## Q36. The password works locally but fails in CI. What could be the reason?

Possible causes include:

- environment variables are not configured in CI
- `.env.dev` is not available in the CI workspace
- the wrong environment is selected
- variable names differ
- CI secrets/configuration were not provided

The actual cause should be verified from the CI configuration.

---

## Q37. You have 100 test files. Would you call `dotenv.config()` in every file?

That would create unnecessary duplication.

For a larger framework, centralizing environment configuration is cleaner.

The exact implementation depends on the framework's configuration strategy.

---

## Q38. Why use `page.goto("/")` instead of the complete URL?

Using a relative URL allows the base URL to be configured separately.

For example:

```typescript
await page.goto("/");
```

can work against different environments when the corresponding `baseURL` changes.

---

# 11. Debugging Questions

## Q39. What if `.env.dev` exists but the variables are still undefined?

Check:

```text
1. File name
2. File path
3. Variable names
4. dotenv configuration
5. Execution location
6. Environment overrides
```

---

## Q40. What if this line is commented?

```typescript
// dotenv.config({ path: ".env.dev" });
```

The test will not explicitly load `.env.dev` through that statement.

If no other configuration loads the variables, `process.env.Leaftaps_username` and `process.env.Leaftaps_Password` may be undefined.

---

# 12. Rapid-Fire Interview Revision

### `dotenv`

Loads variables from an environment file.

### `dotenv.config()`

Loads the environment file.

### `process.env`

Accesses environment variables.

### `.env.dev`

An environment-specific configuration file.

### `!`

TypeScript non-null assertion operator.

### `baseURL`

The base URL used for relative navigation.

### `page.goto("/")`

Navigates using the configured base URL.

### Main benefit

Separates configuration from test logic.

### Main security rule

Do not expose real credentials in source code or logs.

### Main execution flow

```text
.env.dev
   ↓
dotenv.config()
   ↓
process.env
   ↓
Playwright
   ↓
Login
```

---

# 13. Interviewer Follow-Up Questions

1. What is `dotenv`?
2. What is `process.env`?
3. What does `dotenv.config()` do?
4. Why do we use `.env.dev`?
5. What happens if `dotenv.config()` is commented?
6. What does `!` mean in TypeScript?
7. Does `!` load the environment variable?
8. How do you handle `.env.dev`, `.env.qa`, and `.env.prod`?
9. How do you prevent credentials from being exposed?
10. Why should passwords not be logged?
11. What is `baseURL`?
12. Why can `page.goto("/")` work without a complete URL?
13. How would you debug an undefined environment variable?
14. How would you handle environment configuration in a large Playwright framework?
15. What changes when moving from local execution to CI?
