# TypeScript Fundamentals – Complete Theory & Reference Notes

## 1. JavaScript vs TypeScript

JavaScript is dynamically typed. A variable can hold values of different types during runtime.

```javascript
let empID = 123;
empID = "Vineeth";
```

TypeScript adds static type checking and type annotations.

```typescript
let empID: number = 123;
empID = "Vineeth"; // Error
```

| JavaScript | TypeScript |
|---|---|
| Dynamically typed | Statically typed |
| Type checking mainly at runtime | Type checking during development/compilation |
| `.js` files | `.ts` files |
| More flexibility | Better type safety and tooling |

---

## 2. Type Annotation

A type annotation explicitly tells TypeScript what type a variable should contain.

```typescript
let age: number = 30;
let employeeName: string = "Vineeth";
let isWorking: boolean = true;
```

Syntax:

```typescript
let variableName: type = value;
```

---

## 3. Type Inference

Type inference means TypeScript automatically determines the type from the initial value.

```typescript
let age = 30;
let employeeName = "Vineeth";
let isWorking = true;
```

TypeScript infers:

- `age` → `number`
- `employeeName` → `string`
- `isWorking` → `boolean`

**Type annotation** = developer specifies the type.

**Type inference** = TypeScript determines the type.

---

## 4. `any` Type

`any` allows a variable to contain different types.

```typescript
let response: any = true;
response = 1000;
response = "Created";
```

`any` reduces type safety because TypeScript allows operations without requiring type checking.

```typescript
let response: any = "Vineeth";
console.log(response.toUpperCase());
```

Key point:

> `any` provides flexibility but reduces type safety.

---

## 5. `unknown` Type

`unknown` can store values of different types, but TypeScript requires narrowing before type-specific operations.

```typescript
let response: unknown = "Vineeth";

if (typeof response === "string") {
    console.log(response.toUpperCase());
}
```

### `any` vs `unknown`

| `any` | `unknown` |
|---|---|
| Allows operations directly | Requires type narrowing |
| Less type-safe | More type-safe |
| Can hide errors | Helps prevent unsafe operations |

---

## 6. Arrays

An array stores multiple values.

```typescript
let nums: number[] = [10, 20, 30];
let names: string[] = ["Vineeth", "Kumar", "Bharath"];
```

Another syntax:

```typescript
let nums: Array<number> = [10, 20, 30];
```

A union can be used when an array intentionally allows multiple types:

```typescript
let values: (string | number)[] = ["Vineeth", 100];
```

---

## 7. Tuples

A tuple defines a fixed positional structure where each position can have a specific type.

```typescript
let employee: [number, string, number] = [123, "Vineeth", 90000];
```

Positions:

- Position 1 → `number`
- Position 2 → `string`
- Position 3 → `number`

### Array vs Tuple

| Array | Tuple |
|---|---|
| Collection of elements | Fixed positional structure |
| Usually same/general element type | Type can differ by position |
| Length is generally flexible | Expected structure is defined |

---

## 8. Objects

An object stores related data using key-value pairs.

```typescript
let empDetails: {
    empID: number;
    empName?: string;
    empDepartment: string;
} = {
    empID: 123,
    empDepartment: "QA"
};
```

`empID` and `empDepartment` are required.

`empName?: string` means `empName` is optional.

### Access

```typescript
console.log(empDetails.empDepartment);
```

### Modify

```typescript
empDetails.empDepartment = "DEV";
```

### Delete an optional property

```typescript
delete empDetails.empName;
```

Reading an omitted optional property produces `undefined`.

---

## 9. Type Alias

A type alias gives a reusable name to a type.

### Simple type alias

```typescript
type responseType = string;

let res1: responseType = "Created";
let res2: responseType = "Ok";
```

### Object type alias

```typescript
type employeeDetails = {
    empID: number;
    empName: string;
    empDept: string;
};
```

The same structure can be reused:

```typescript
let employee1: employeeDetails = {
    empID: 12345,
    empName: "Karthik",
    empDept: "Finance"
};

let employee2: employeeDetails = {
    empID: 9876,
    empName: "Kumar",
    empDept: "HR"
};
```

Benefits:

- Avoid repeated type definitions.
- Reuse a common structure.
- Improve readability.
- Improve maintainability.

---

## 10. Union Type

A union type allows a value to be one of multiple specified types.

The operator is `|`, meaning **OR**.

```typescript
type username = string | number;

let user1: username = 8516511170;
let user2: username = "demo@gmail.com";
```

Both values are valid because `username` allows either `string` OR `number`.

This is invalid:

```typescript
let user3: username = true;
```

because `boolean` is not included.

### Important distinction

```typescript
type responseType = string;
```

This is a type alias for `string`, not a union.

```typescript
type responseType = string | number;
```

This is a type alias containing a union type.

So:

> Type alias = reusable name for a type.

> Union type = multiple possible types using `|`.

---

## 11. Intersection Type

An intersection type combines multiple types.

The operator is `&`, meaning **AND**.

```typescript
type personalDetails = {
    name: string;
    age: number;
};

type empDetails = {
    empID: number;
    empSalary: number;
};

type details = personalDetails & empDetails;
```

The resulting type requires all properties from both types.

```typescript
let employee1: details = {
    name: "Bharath",
    age: 30,
    empID: 123,
    empSalary: 90000
};
```

### Union vs Intersection

```text
| → OR → alternatives
& → AND → combined requirements
```

---

## 12. Enums

An enum groups related named constants.

### Default numeric enum

```typescript
enum Role {
    admin,
    user1,
    user2,
    guest
}
```

Default values:

```text
admin → 0
user1 → 1
user2 → 2
guest → 3
```

### Numeric enum

```typescript
enum RolePassword {
    admin = 123,
    user1 = 567,
    user2 = 1234,
    guest = 123
}

console.log(RolePassword.guest);
```

Output:

```text
123
```

### String enum

```typescript
enum Role {
    admin = "ADMIN",
    user1 = "USER1",
    user2 = "USER2",
    guest = "GUEST"
}
```

---

## 13. Classes and Objects

A class is a blueprint/template for creating objects.

```typescript
class LoginPage {
    username: string = "Demo";
    password: string = "crm";

    enterUsername() {
        console.log("Username is entered");
    }
}
```

Create an object:

```typescript
let userCredentials = new LoginPage();
```

Call a method:

```typescript
userCredentials.enterUsername();
```

Key concepts:

- Class → blueprint
- Object → instance
- Property → data/state
- Method → behavior/action

---

## 14. TypeScript Classes in Playwright POM

TypeScript classes are commonly used to organize Playwright Page Object Model code.

```typescript
class LoginPage {
    usernameTextField = page.getByRole("textbox", { name: "Username" });
    passwordTextField = page.getByRole("textbox", { name: "Password" });
    loginButton = page.getByRole("button", { name: "Login" });

    async enterUsername(username: string) {
        await this.usernameTextField.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordTextField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}
```

Usage:

```typescript
let loginPage = new LoginPage(page);

await loginPage.enterUsername("Demosalesmanager");
await loginPage.enterPassword("crmsfa");
await loginPage.clickLoginButton();
```

POM mapping:

| TypeScript | Playwright POM |
|---|---|
| Class | Page class |
| Object | Page object instance |
| Property | Locator |
| Method | Page action |
| Type annotation | Type-safe parameters/properties |

---

## 15. Quick Revision

- **Type annotation** → Explicitly specifies a type.
- **Type inference** → TypeScript determines the type automatically.
- **any** → Flexible but reduces type safety.
- **unknown** → Unknown value requiring narrowing.
- **Array** → Collection of elements.
- **Tuple** → Fixed positional type structure.
- **Object** → Related key-value data.
- **Type alias** → Reusable name for a type.
- **Union** → OR using `|`.
- **Intersection** → AND using `&`.
- **Enum** → Group of named constants.
- **Class** → Blueprint.
- **Object** → Instance of a class.
- **Method** → Behavior/action.
- **Property** → Data/state.

## 16. Learning Flow

```text
JavaScript vs TypeScript
        ↓
Type Annotation / Inference
        ↓
any / unknown
        ↓
Arrays / Tuples
        ↓
Objects
        ↓
Type Alias
        ↓
Union Type |
        ↓
Intersection Type &
        ↓
Enums
        ↓
Classes / Objects
        ↓
Playwright POM
```
