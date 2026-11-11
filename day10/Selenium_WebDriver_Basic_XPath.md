# Selenium WebDriver – Basic XPath

## 1. What is XPath?

XPath stands for **XML Path**. It is used to identify or locate an element in the DOM (Document Object Model).

### When to use XPath?

XPath can be used when basic locators are not available or when elements are dynamically changing.

### How is XPath written?

XPath is written based on the element path and syntax.

---

# 2. Absolute XPath

Absolute XPath is a long path that starts from the root `<html>` tag and ends at the target element.

### Characteristics

- Starts from the root tag `<html>`.
- Starts with a single `/`.
- Traverses through each tag in the hierarchy.
- Usually produces a long path.
- It is rarely used because it is unreliable.

### Syntax

```text
/html/body/div[2]/div/div/form/p/input
```

---

# 3. Relative XPath

Relative XPath works in relation to the WebElement location in the DOM and goes directly to the address of the target WebElement.

Relative XPath starts with `//` and locates the inner or middle part of the DOM.

### General Syntax

```text
//tagName[@attribute='attributeValue']
```

### Example

```text
//input[@id='username']
```

### Syntax Breakdown

- `//` → Relative XPath.
- `input` → Tag name of the targeted element.
- `@id` → Attribute of the element.
- `username` → Value of the selected attribute.

---

# 4. Types of Relative XPath

The material covers:

1. Basic XPath
2. Advanced XPath

The Basic XPath types covered are:

- Attribute-based XPath
- Text-based XPath
- Partial attribute-based XPath
- Partial text-based XPath
- Collection-based XPath

---

# 5. Basic XPath – Attribute Based

Attribute-based XPath uses the attribute and attribute value of the WebElement.

### Syntax

```text
//tagName[@attribute='attributeValue']
```

### Example

```text
//input[@id='username']
```

### Playwright Example

```typescript
await page.locator("//input[@id='username']").fill("Demosalesmanager");
```

---

# 6. Basic XPath – Text Based

Text-based XPath is based on the text displayed for the WebElement in the DOM.

### Syntax

```text
//tagName[text()='text value in DOM']
```

### Example

```text
//a[text()='Create New Account']
```

### Playwright Example

```typescript
await page.locator("//a[text()='Create New Account']").click();
```

---

# 7. Basic XPath – Partial Match

Partial matching is useful when only part of an attribute value or text is known.

The material covers:

1. Partial attribute-based XPath
2. Partial text-based XPath

---

## 7.1 Partial Attribute Based XPath

Partial attribute-based XPath uses a partial attribute value of the WebElement.

The `contains()` function checks whether the specified attribute contains the given value.

### Syntax

```text
//tagName[contains(@attribute, 'Partial value of the attribute')]
```

### Example

```text
//input[contains(@id,'user')]
```

### Playwright Example

```typescript
await page.locator("//input[contains(@id,'user')]").fill("Demosalesmanager");
```

---

## 7.2 Partial Text Based XPath

Partial text-based XPath uses the partial text value of the WebElement.

### Syntax

```text
//tagname[contains(text(),'Partial text in my DOM')]
```

### Example

```text
//a[contains(text(),'Create')]
```

### Playwright Example

```typescript
await page.locator("//a[contains(text(),'Create')]").click();
```

---

# 8. Basic XPath – Collection Based

Collection-based XPath is used when multiple elements are found for the same XPath.

An index is then used to identify the exact element.

### Important Point

XPath indexes start with **1**.

### Syntax

```text
(//tagName[@attribute='attributeValue'])[index]
```

### Example

```text
(//input[@class='inputLogin'])[2]
```

This selects the second matching element.

### Playwright Example

```typescript
await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa");
```

---

# 9. XPath Type Selection – Interview Tips

The material recommends considering XPath when basic locators are not stable or available.

The XPath types covered are:

- Absolute XPath
- Attribute-based XPath
- Text-based XPath
- Partial attribute-based XPath
- Partial text-based XPath
- Collection-based XPath

### Recommendation

Absolute XPath is shown as the **least recommended** because it is unreliable.

Relative XPath is generally more useful because it can identify elements using attributes, text, partial values, and DOM relationships.

---

# 10. XPath Exceptions Mentioned

## InvalidSelectorException

This is associated with a syntax error in the XPath.

Example:

```text
//input[@id='username'
```

The closing bracket is missing.

---

## NoSuchElementException

This is associated in the material with a wrong XPath value, where the expected element cannot be found.

Example:

```text
//input[@id='user123']
```

when the actual element is:

```html
<input id="username">
```

---

# 11. XPath Quick Reference

| XPath Type | Purpose | Example |
|---|---|---|
| Absolute XPath | Traverse from root | `/html/body/div[2]/div/form/input` |
| Attribute-based | Use attribute and value | `//input[@id='username']` |
| Text-based | Use complete text | `//a[text()='Create New Account']` |
| Partial attribute | Use part of attribute | `//input[contains(@id,'user')]` |
| Partial text | Use part of text | `//a[contains(text(),'Create')]` |
| Collection-based | Select one element from multiple matches | `(//input[@class='inputLogin'])[2]` |

---

# 12. Playwright Usage

XPath can be supplied to Playwright's `locator()` method.

### Attribute-based XPath

```typescript
await page.locator("//input[@id='username']").fill("Demosalesmanager");
```

### Text-based XPath

```typescript
await page.locator("//a[text()='Create New Account']").click();
```

### Partial attribute XPath

```typescript
await page.locator("//input[contains(@id,'user')]").fill("Demosalesmanager");
```

### Partial text XPath

```typescript
await page.locator("//a[contains(text(),'Create')]").click();
```

### Collection XPath

```typescript
await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa");
```

---

# 13. Key Takeaways

- XPath is used to locate elements in the DOM.
- Absolute XPath starts from the root and follows the complete hierarchy.
- Relative XPath starts with `//`.
- Attribute-based XPath uses an attribute and its value.
- Text-based XPath uses the element's text.
- `contains()` supports partial attribute and partial text matching.
- Collection-based XPath uses an index when multiple elements match.
- XPath collection indexes start from 1.
- Absolute XPath is rarely recommended because it is unreliable.
- Incorrect XPath syntax can cause selector errors.
- An incorrect XPath value can result in the element not being found.
