# TypeScript Fundamentals – Interview Questions & Theory

## 1. JavaScript vs TypeScript

### Theory

JavaScript is dynamically typed. TypeScript adds static type checking, type annotations, and other type-system features to JavaScript.

### Q1. What is the difference between JavaScript and TypeScript?

**Answer:**
- JavaScript is dynamically typed.
- TypeScript supports static type checking.
- TypeScript supports type annotations.
- TypeScript code is transpiled/compiled to JavaScript for execution.

### Q2. Why is TypeScript useful in Playwright?

**Answer:**
- Provides type safety.
- Catches many incorrect assignments during development.
- Improves IDE autocomplete.
- Helps maintain Page Object Model classes.
- Allows typed test data and method parameters.

---

## 2. Type Annotation and Type Inference

### Theory

Type annotation explicitly specifies a type.

```typescript
let age: number = 30;
```

Type inference means TypeScript determines the type automatically.

```typescript
let age = 30;
```

### Q3. What is type annotation?

**Answer:** Explicitly specifying the expected type.

```typescript
let employeeName: string = "Vineeth";
```

### Q4. What is type inference?

**Answer:** TypeScript automatically determines the type from the assigned value.

```typescript
let employeeName = "Vineeth";
```

### Q5. What is the difference?

- Annotation → developer specifies the type.
- Inference → TypeScript determines the type.

---

## 3. `any` and `unknown`

### Theory

`any` allows operations without meaningful type checking.

`unknown` allows an unknown value but requires narrowing before type-specific operations.

### Q6. What is `any`?

**Answer:** `any` allows a variable to contain different types and disables much of TypeScript's type safety for that value.

```typescript
let response: any = "Created";
response = 1000;
```

### Q7. Why should `any` be avoided when possible?

**Answer:** It can hide type errors and move failures to runtime.

### Q8. What is `unknown`?

**Answer:** `unknown` represents a value whose type is not known yet. Type narrowing is required before type-specific operations.

```typescript
let response: unknown = "Vineeth";

if (typeof response === "string") {
    console.log(response.toUpperCase());
}
```

### Q9. Which is safer: `any` or `unknown`?

**Answer:** `unknown`, because it requires narrowing.

### Scenario

**Q10. An API response may contain an unknown type. Which type would you prefer?**

**Answer:** Prefer `unknown` when the type has not been established, then narrow/validate it before use.

---

## 4. Arrays

### Theory

An array stores multiple values.

```typescript
let nums: number[] = [10, 20, 30];
```

### Q11. How do you declare an array of numbers?

```typescript
let nums: number[] = [10, 20, 30];
```

### Q12. Can an array contain string and number values?

Yes, using a union element type:

```typescript
let values: (string | number)[] = ["Vineeth", 100];
```

### Q13. What is the difference between `number[]` and `(string | number)[]`?

- `number[]` → only numbers.
- `(string | number)[]` → strings or numbers.

---

## 5. Tuples

### Theory

A tuple defines a fixed positional structure.

```typescript
let employee: [number, string, number] = [123, "Vineeth", 90000];
```

### Q14. What is a tuple?

**Answer:** A tuple defines the expected type of each position in a structured value.

### Q15. Array vs tuple?

**Answer:**
- Array → collection.
- Tuple → fixed positional structure.

### Q16. Give a practical tuple example.

```typescript
let employee: [number, string, number] = [123, "Vineeth", 90000];
```

---

## 6. Objects

### Theory

Objects contain related key-value properties.

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

### Q17. What does `?` mean?

**Answer:** It makes the property optional.

```typescript
empName?: string;
```

### Q18. What happens when an optional property is not supplied?

**Answer:** Reading that property results in `undefined`.

### Q19. Can object properties be modified?

Yes, unless the type/design prevents modification.

```typescript
empDetails.empDepartment = "DEV";
```

---

## 7. Type Alias

### Theory

A type alias gives a reusable name to a type.

```typescript
type responseType = string;
```

Object type aliases are also possible:

```typescript
type employeeDetails = {
    empID: number;
    empName: string;
    empDept: string;
};
```

### Q20. What is a type alias?

**Answer:** A reusable name for an existing type or a custom type definition.

### Q21. Why use type aliases?

**Answer:**
- Reuse definitions.
- Reduce duplication.
- Improve readability.
- Simplify maintenance.

### Q22. Is this a union?

```typescript
type responseType = string;
```

**Answer:** No. It is a type alias for `string`.

### Q23. Is this a union?

```typescript
type responseType = string | number;
```

**Answer:** Yes. It is a type alias containing a union type.

---

## 8. Union Type

### Theory

A union allows a value to be one of several specified types.

`|` means **OR**.

```typescript
type username = string | number;

let user1: username = 8516511170;
let user2: username = "demo@gmail.com";
```

### Q24. What is a union type?

**Answer:** A union type allows a value to have one of multiple specified types.

### Q25. What does `|` mean?

**Answer:** Union; think **OR**.

### Q26. Is this valid?

```typescript
type username = string | number;

let user1: username = 8516511170;
let user2: username = "demo@gmail.com";
```

**Answer:** Yes.

### Q27. Is this valid?

```typescript
let user3: username = true;
```

**Answer:** No. `boolean` is not included.

### Scenario

**Q28. A login system accepts either an email or a numeric user ID. What type would you create?**

```typescript
type username = string | number;
```

---

## 9. Intersection Type

### Theory

An intersection combines multiple types.

`&` means **AND**.

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

### Q29. What is an intersection type?

**Answer:** A type that combines multiple types so the resulting value must satisfy all of their requirements.

### Q30. What does `&` mean?

**Answer:** Intersection; think **AND**.

### Q31. What is the difference between union and intersection?

**Answer:**

```text
| → OR → alternatives
& → AND → combined requirements
```

### Q32. What properties are required here?

```typescript
type details = personalDetails & empDetails;
```

**Answer:** The properties required by both `personalDetails` and `empDetails`.

---

## 10. Enums

### Theory

An enum groups related named constants.

### Q33. What is an enum?

**Answer:** A TypeScript feature for defining a group of named constants.

### Q34. What are the default values of a numeric enum?

By default, numeric enum members start from `0`.

```typescript
enum Role {
    admin,
    user1,
    user2,
    guest
}
```

Values are:

```text
admin = 0
user1 = 1
user2 = 2
guest = 3
```

### Q35. Can enum values be explicitly assigned?

Yes.

```typescript
enum RolePassword {
    admin = 123,
    user1 = 567,
    user2 = 1234,
    guest = 123
}
```

### Q36. Can enums contain strings?

Yes.

```typescript
enum Role {
    admin = "ADMIN",
    user1 = "USER1",
    user2 = "USER2",
    guest = "GUEST"
}
```

---

## 11. Classes and Objects

### Theory

A class is a blueprint/template. An object is an instance created from that class.

```typescript
class LoginPage {
    username: string = "Demo";
    password: string = "crm";

    enterUsername() {
        console.log("Username is entered");
    }
}

let userCredentials = new LoginPage();
userCredentials.enterUsername();
```

### Q37. What is a class?

**Answer:** A blueprint that defines related data and behavior.

### Q38. What is an object?

**Answer:** An instance of a class.

### Q39. What does `new` do?

**Answer:** It creates an instance/object of a class.

### Q40. What is a property?

**Answer:** Data/state associated with an object or class.

### Q41. What is a method?

**Answer:** Behavior/action defined in a class.

---

## 12. TypeScript Classes and Playwright POM

### Theory

A Playwright Page Object can be represented as a TypeScript class.

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

### Q42. How is a class useful in Playwright POM?

**Answer:** It groups page locators and related actions into a reusable page object.

### Q43. How do TypeScript concepts map to POM?

| TypeScript | Playwright POM |
|---|---|
| Class | Page object class |
| Object | Page class instance |
| Property | Locator |
| Method | Page action |
| Type annotation | Type-safe parameter/property |

### Q44. Why use `username: string` in a POM method?

```typescript
async enterUsername(username: string) {
}
```

**Answer:** It specifies that the method expects a string argument.

---

## 13. Scenario-Based Questions

### Q45. A variable should accept either a string or number. What do you use?

**Answer:** Union type.

```typescript
type username = string | number;
```

### Q46. Multiple employee objects must follow the same structure. What do you use?

**Answer:** A type alias.

```typescript
type employeeDetails = {
    empID: number;
    empName: string;
    empDept: string;
};
```

### Q47. One object must contain properties from two separate types. What do you use?

**Answer:** Intersection type.

```typescript
type details = personalDetails & empDetails;
```

### Q48. A value has an unknown type and you want type-safe usage. What do you use?

**Answer:** `unknown`, followed by type narrowing.

### Q49. You need a fixed structure such as employee ID, employee name, and salary. What do you use?

**Answer:** Tuple.

```typescript
let employee: [number, string, number] = [123, "Vineeth", 90000];
```

### Q50. You need named roles such as ADMIN, USER, and GUEST. What can you use?

**Answer:** Enum.

---

## 14. Practical Coding Questions

### Q51. Create a type alias for string.

```typescript
type responseType = string;

let response: responseType = "Created";
```

### Q52. Create a union type for string and number.

```typescript
type username = string | number;

let user1: username = 8516511170;
let user2: username = "demo@gmail.com";
```

### Q53. Create an employee object type alias.

```typescript
type employeeDetails = {
    empID: number;
    empName: string;
    empDept: string;
};
```

### Q54. Create two employees using the same alias.

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

### Q55. Create an intersection type.

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

### Q56. Create an object using the intersection type.

```typescript
let employee1: details = {
    name: "Bharath",
    age: 30,
    empID: 123,
    empSalary: 90000
};
```

---

## 15. Rapid Revision

| Concept | Meaning |
|---|---|
| Type annotation | Explicit type |
| Type inference | Automatically determined type |
| `any` | Flexible, less type-safe |
| `unknown` | Unknown value requiring narrowing |
| Array | Collection |
| Tuple | Fixed positional structure |
| Object | Key-value data |
| Type alias | Reusable type name |
| Union `\|` | OR |
| Intersection `&` | AND |
| Enum | Named constants |
| Class | Blueprint |
| Object | Instance |
| Property | Data/state |
| Method | Behavior/action |

## 16. Interview Answer Pattern

For a TypeScript interview question, use:

1. Definition.
2. Operator/syntax if applicable.
3. Small code example.
4. One practical use case.

Example:

> A union type allows a value to be one of multiple specified types. We use the `|` operator, which can be remembered as OR.

```typescript
type username = string | number;

let user1: username = 8516511170;
let user2: username = "demo@gmail.com";
```

This gives the interviewer the definition, syntax, and practical example concisely.
