# Playwright + dotenv Environment Variable Configuration
## Complete Theory & Reference Notes

## 1. Overview

This approach uses environment variables to store login configuration such as the username and password instead of hardcoding them in the Playwright test.

The example uses:

- Playwright Test
- TypeScript
- `dotenv`
- `.env.dev`
- `process.env`

---

## 2. Why Use Environment Variables?

Hardcoding credentials directly in a test exposes configuration in the test source.

### Hardcoded approach

```typescript
await page.locator("//label[text()='Username']/following-sibling::input").fill("Demosalesmanager");
await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");
```

### Environment-variable approach

```typescript
await page
    .locator("//label[text()='Username']/following-sibling::input")
    .fill(process.env.Leaftaps_username!);

await page
    .getByRole("textbox", { name: "Password" })
    .fill(process.env.Leaftaps_Password!);
```

This separates test logic from environment-specific configuration.

---

## 3. Install dotenv

Install the package in the Playwright project:

```bash
npm install dotenv
```

---

## 4. Create the Environment File

Create:

```text
.env.dev
```

Example:

```text
Leaftaps_username=Demosalesmanager
Leaftaps_Password=crmsfa
```

The general format is:

```text
VARIABLE_NAME=VALUE
```

---

## 5. Import dotenv

Import the package:

```typescript
import dotenv from "dotenv";
```

Importing the package makes it available; it does not by itself load `.env.dev`.

---

## 6. Load the Environment File

Use:

```typescript
dotenv.config({ path: ".env.dev" });
```

This tells `dotenv` to read variables from `.env.dev`.

After loading, the values can be accessed through:

```typescript
process.env.Leaftaps_username
process.env.Leaftaps_Password
```

---

## 7. Complete Code

```typescript
// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Import dotenv to load environment variables from an environment file.
import dotenv from "dotenv";

// Load environment variables from the .env.dev file.
dotenv.config({ path: ".env.dev" });

// Create a Playwright test for the login functionality.
test("Test to verify login function", async ({ page }) => {

    // Navigate to the application URL configured in playwright.config.ts.
    await page.goto("/");

    // Locate the Username field and enter the username from the environment variable.
    await page
        .locator("//label[text()='Username']/following-sibling::input")
        .fill(process.env.Leaftaps_username!);

    // Locate the Password textbox and enter the password from the environment variable.
    await page
        .getByRole("textbox", { name: "Password" })
        .fill(process.env.Leaftaps_Password!);

    // Locate the Login button and click it.
    await page.getByRole("button", { name: "Login" }).click();
});
```

---

## 8. Understanding `process.env`

`process.env` is the Node.js object used to access environment variables.

For example:

```typescript
process.env.Leaftaps_username
```

retrieves the value of `Leaftaps_username`.

Similarly:

```typescript
process.env.Leaftaps_Password
```

retrieves the value of `Leaftaps_Password`.

If `.env.dev` contains:

```text
Leaftaps_username=Demosalesmanager
Leaftaps_Password=crmsfa
```

then:

```text
process.env.Leaftaps_username → Demosalesmanager
process.env.Leaftaps_Password → crmsfa
```

---

## 9. Understanding the `!`

The following contains a TypeScript non-null assertion:

```typescript
process.env.Leaftaps_username!
```

The `!` tells TypeScript to treat the value as non-null/non-undefined for type checking.

It does **not** load the environment variable.

The loading is performed by:

```typescript
dotenv.config({ path: ".env.dev" });
```

If the variable is actually missing at runtime, `!` does not create a value.

---

## 10. Execution Flow

```text
.env.dev
   |
   | dotenv.config({ path: ".env.dev" })
   ↓
Environment variables
   |
   ↓
process.env
   |
   ├── process.env.Leaftaps_username
   └── process.env.Leaftaps_Password
   |
   ↓
Playwright test
   |
   ├── Fill Username
   ├── Fill Password
   └── Click Login
```

---

## 11. What If `dotenv.config()` Is Commented?

If this is commented:

```typescript
// dotenv.config({ path: ".env.dev" });
```

then this test file does not explicitly load `.env.dev`.

Importing:

```typescript
import dotenv from "dotenv";
```

alone does not load the selected `.env.dev` file.

If no other configuration loads those variables, these may be undefined:

```typescript
process.env.Leaftaps_username
process.env.Leaftaps_Password
```

---

## 12. Understanding `page.goto("/")`

The test uses:

```typescript
await page.goto("/");
```

`/` is a relative URL.

For this to work, Playwright should have an appropriate `baseURL` configured.

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

The configuration responsibilities can therefore be separated:

```text
playwright.config.ts
        |
        └── baseURL → application URL

.env.dev
        |
        ├── username
        └── password
```

---

## 13. Username and Password Flow

Username:

```typescript
process.env.Leaftaps_username!
```

is passed to:

```typescript
.fill(process.env.Leaftaps_username!)
```

Password:

```typescript
process.env.Leaftaps_Password!
```

is passed to:

```typescript
.fill(process.env.Leaftaps_Password!)
```

So the flow is:

```text
.env.dev
    |
    ├── Leaftaps_username
    └── Leaftaps_Password
             |
             ↓
        process.env
             |
             ↓
      Playwright test
             |
       ┌─────┴─────┐
       ↓           ↓
   Username     Password
       ↓           ↓
     fill()      fill()
```

---

## 14. Multiple Environment Files

A project can maintain separate files for different environments:

```text
.env.dev
.env.qa
.env.prod
```

Example:

### `.env.dev`

```text
Leaftaps_username=devuser
Leaftaps_Password=devpassword
```

### `.env.qa`

```text
Leaftaps_username=qauser
Leaftaps_Password=qapassword
```

### `.env.prod`

```text
Leaftaps_username=produser
Leaftaps_Password=prodpassword
```

The test can continue to use:

```typescript
process.env.Leaftaps_username!
process.env.Leaftaps_Password!
```

The values depend on which environment configuration is loaded.

---

## 15. Direct Loading From the Test File

For a simple implementation:

```typescript
dotenv.config({ path: ".env.dev" });
```

can be placed in the test file.

This is useful for understanding how `dotenv` works.

For a larger framework with multiple environments, environment selection is generally cleaner when centralized in configuration rather than repeated across every test file.

---

## 16. Recommended Project Structure

```text
PlaywrightProject/
│
├── tests/
│   └── login.spec.ts
│
├── Data/
│
├── .env.dev
├── .env.qa
├── .env.prod
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

Real credentials should normally not be committed to source control.

---

## 17. Security Considerations

Environment variables separate credentials from test code, but they do not automatically make credentials secure.

Avoid:

```typescript
console.log(process.env.Leaftaps_Password);
```

because this can expose credentials in logs.

Avoid committing real credentials to Git.

A safe template can be maintained as:

```text
.env.example
```

Example:

```text
Leaftaps_username=your_username
Leaftaps_Password=your_password
```

---

## 18. `dotenv` vs `process.env`

These have different responsibilities.

### dotenv

Loads variables from an environment file:

```typescript
dotenv.config({ path: ".env.dev" });
```

### process.env

Accesses environment variables:

```typescript
process.env.Leaftaps_username
```

The overall relationship is:

```text
dotenv
  ↓
loads .env.dev
  ↓
process.env
  ↓
test accesses variables
```

---

## 19. Common Mistakes

### Mistake 1: Importing dotenv but not configuring it

```typescript
import dotenv from "dotenv";
```

alone does not load `.env.dev`.

Use:

```typescript
dotenv.config({ path: ".env.dev" });
```

when the test is responsible for loading the file.

### Mistake 2: Incorrect variable name

If the file contains:

```text
Leaftaps_username=Demosalesmanager
```

the test must use:

```typescript
process.env.Leaftaps_username
```

### Mistake 3: Missing `baseURL`

If the test uses:

```typescript
await page.goto("/");
```

make sure an appropriate `baseURL` is configured.

### Mistake 4: Logging credentials

Avoid:

```typescript
console.log(process.env.Leaftaps_Password);
```

### Mistake 5: Assuming `!` loads the variable

This:

```typescript
process.env.Leaftaps_Password!
```

only affects TypeScript's type checking. It does not load the variable.

---

## 20. Best Practices

1. Keep credentials outside test scripts.
2. Use meaningful environment variable names.
3. Centralize environment selection in larger frameworks.
4. Do not print passwords in logs.
5. Do not commit real credentials.
6. Use `.env.example` for safe templates.
7. Keep application URL configuration and credentials clearly separated.
8. Reuse the same test logic across environments where possible.
9. Validate required environment variables in mature frameworks.
10. Avoid duplicating `dotenv.config()` across many test files.

---

## 21. Quick Reference

| Concept | Purpose |
|---|---|
| `.env.dev` | Stores development environment variables |
| `dotenv` | Loads variables from an environment file |
| `dotenv.config()` | Performs the loading |
| `process.env` | Accesses environment variables |
| `Leaftaps_username` | Username environment variable |
| `Leaftaps_Password` | Password environment variable |
| `!` | TypeScript non-null assertion |
| `baseURL` | Base URL for relative navigation |
| `page.goto("/")` | Navigates using the configured base URL |

### Key flow

```text
.env.dev
   ↓
dotenv.config()
   ↓
process.env
   ↓
Playwright test
   ↓
Username / Password
   ↓
Login
```
