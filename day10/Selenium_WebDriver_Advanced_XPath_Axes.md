# Selenium WebDriver – Advanced XPath / XPath Axes

## 1. What is XPath Axes?

XPath Axes are used to locate elements based on their **relationship with other elements in the DOM**.

The material describes XPath-Axes as XML path based on relationship.

### When to use XPath Axes?

XPath Axes can be used when an element needs to be located in relation to another WebElement.

Examples include:

- Parent to child
- Grandparent to child
- Child to parent
- Grandchild to grandparent
- Elder sibling to younger sibling
- Younger sibling to elder sibling
- Elder cousin to younger cousin
- Younger cousin to elder cousin

---

# 2. Understanding DOM Relationships

Consider this simplified structure:

```html
<div>
    <form>
        <p>
            <label>Username</label>
            <input id="username">
        </p>

        <p>
            <label>Password</label>
            <input id="password">
        </p>
    </form>
</div>
```

The relationships are:

- `<div>` is an ancestor/grandparent of `<form>`.
- `<form>` is the parent of `<p>`.
- `<p>` is the child of `<form>`.
- `<label>` and `<input>` within the same `<p>` are sibling elements.
- Elements belonging to different parent branches can form cousin relationships.

---

# 3. XPath Axes Covered

The material covers **8 types of XPath Axes**:

1. Parent to Child
2. Grandparent to Child
3. Child to Parent
4. Grandchild to Grandparent
5. Elder Sibling to Younger Sibling
6. Younger Sibling to Elder Sibling
7. Elder Cousin to Younger Cousin
8. Younger Cousin to Elder Cousin

---

# 4. Parent to Child

Parent-to-child XPath is used to move from a parent element to its child element.

### Example Relationship

```html
<form>
    <p>
        ...
    </p>
</form>
```

Here:

- `<form>` is the parent.
- `<p>` is the child.

### Syntax

```text
(parent relative xpath)/(tagName of child)
```

### Example

```text
//form[@id='login']/p
```

### Playwright Example

```typescript
await page.locator("//form[@id='login']/p").click();
```

---

# 5. Grandparent to Child

This relationship is used to move from a grandparent element to a grandchild element.

The material uses `<form>` as the grandparent and `<label>` as the grandchild in its example.

### Syntax

```text
GrandParent relative xpath//tagName of grand child
```

### Example

```text
//form[@id='login']//label
```

### Playwright Example

```typescript
await page.locator("//form[@id='login']//label").first().click();
```

---

# 6. Child to Parent

Child-to-parent XPath moves from a child element to its parent.

The material uses the `parent::` keyword.

### Syntax

```text
Child relative xpath/parent::parent tagName
```

### Example

```text
//input[@id='username']/parent::p
```

### Playwright Example

```typescript
await page.locator("//input[@id='username']/parent::p").click();
```

---

# 7. Grandchild to Grandparent

Grandchild-to-grandparent XPath moves upward through the DOM hierarchy.

The material uses the `ancestor::` keyword.

### Syntax

```text
GrandChild relative xpath/ancestor::tagName of grand parent
```

### Example

```text
//input[@id='password']/ancestor::form
```

### Playwright Example

```typescript
await page.locator("//input[@id='password']/ancestor::form").click();
```

---

# 8. Elder Sibling to Younger Sibling

Sibling elements share the same parent.

The material uses `following-sibling` to move from an elder/earlier sibling to a younger/later sibling.

### Direction

```text
Top → Bottom
```

### Example

```text
//label[text()='Username']/following-sibling::input
```

This starts from the Username label and finds the following `<input>` sibling.

### Playwright Example

```typescript
await page.locator("//label[text()='Username']/following-sibling::input").fill("Demosalesmanager");
```

---

# 9. Younger Sibling to Elder Sibling

This relationship moves from a later sibling back to an earlier sibling.

The material uses `preceding-sibling`.

### Direction

```text
Bottom → Top
```

### Syntax

```text
Younger sibling relative xpath/preceding-sibling::tagName of Elder sibling
```

### Example

```text
//input[@id='username']/preceding-sibling::label
```

### Playwright Example

```typescript
await page.locator("//input[@id='username']/preceding-sibling::label").click();
```

---

# 10. Elder Cousin to Younger Cousin

This relationship moves from a child of one parent to a child of another parent.

The material uses the `following` axis.

### Direction

```text
Top → Bottom
```

### Syntax

```text
Elder cousin relative xpath/following::tagName of younger Cousin
```

### Example

```text
//input[@id='username']/following::label
```

### Playwright Example

```typescript
await page.locator("//input[@id='username']/following::label").first().click();
```

---

# 11. Younger Cousin to Elder Cousin

This relationship moves from a later element to an earlier related element in the document.

The material uses the `preceding` axis.

### Direction

```text
Bottom → Top
```

### Syntax

```text
Younger cousin xpath/preceding::tagName of Elder cousin
```

### Example

```text
//label[text()='Password']/preceding::input
```

### Playwright Example

```typescript
await page.locator("//label[text()='Password']/preceding::input").first().fill("Demosalesmanager");
```

---

# 12. XPath Axes Quick Reference

| Relationship | XPath Keyword | Direction | Example |
|---|---|---|---|
| Parent → Child | `/` | Down | `//form[@id='login']/p` |
| Grandparent → Grandchild | `//` | Down | `//form[@id='login']//label` |
| Child → Parent | `parent::` | Up | `//input[@id='username']/parent::p` |
| Grandchild → Grandparent | `ancestor::` | Up | `//input[@id='password']/ancestor::form` |
| Elder Sibling → Younger Sibling | `following-sibling::` | Top → Bottom | `//label[text()='Username']/following-sibling::input` |
| Younger Sibling → Elder Sibling | `preceding-sibling::` | Bottom → Top | `//input[@id='username']/preceding-sibling::label` |
| Elder Cousin → Younger Cousin | `following::` | Top → Bottom | `//input[@id='username']/following::label` |
| Younger Cousin → Elder Cousin | `preceding::` | Bottom → Top | `//label[text()='Password']/preceding::input` |

---

# 13. Complete XPath Axes Syntax Reference

## Parent to Child

```text
(Relative xpath of parent)/tagname of child
```

Example:

```text
//form[@id='login']/p
```

## Grandparent to Grandchild

```text
(Relative xpath of Grandparent)//tagname of Grandchild
```

Example:

```text
//form[@id='login']//label
```

## Child to Parent

```text
(Relative xpath of child)/parent::tagname of parent
```

Example:

```text
//input[@id='username']/parent::p
```

## Grandchild to Grandparent

```text
(Relative xpath of Grandchild)/ancestor::tagname of Grandparent
```

Example:

```text
//input[@id='password']/ancestor::form
```

## Elder Sibling to Younger Sibling

```text
(Relative xpath of Elder sibling)/following-sibling::tagname of Younger
```

Example:

```text
//label[text()='Username']/following-sibling::input
```

## Younger Sibling to Elder Sibling

```text
(Relative xpath of Younger sibling)/preceding-sibling::tagname of Elder
```

Example:

```text
//input[@id='username']/preceding-sibling::label
```

## Elder Cousin to Younger Cousin

```text
(Relative xpath of Elder cousin)/following::tagname of younger
```

Example:

```text
//input[@id='username']/following::label
```

## Younger Cousin to Elder Cousin

```text
(Relative xpath of younger cousin)/preceding::tagname of Elder
```

Example:

```text
//label[text()='Password']/preceding::input
```

---

# 14. Playwright Usage

XPath can be supplied to Playwright's `locator()` method.

### Parent to Child

```typescript
await page.locator("//form[@id='login']/p").click();
```

### Grandparent to Grandchild

```typescript
await page.locator("//form[@id='login']//label").first().click();
```

### Child to Parent

```typescript
await page.locator("//input[@id='username']/parent::p").click();
```

### Grandchild to Grandparent

```typescript
await page.locator("//input[@id='password']/ancestor::form").click();
```

### Elder Sibling to Younger Sibling

```typescript
await page.locator("//label[text()='Username']/following-sibling::input").fill("Demosalesmanager");
```

### Younger Sibling to Elder Sibling

```typescript
await page.locator("//input[@id='username']/preceding-sibling::label").click();
```

### Elder Cousin to Younger Cousin

```typescript
await page.locator("//input[@id='username']/following::label").first().click();
```

### Younger Cousin to Elder Cousin

```typescript
await page.locator("//label[text()='Password']/preceding::input").first().fill("Demosalesmanager");
```

---

# 15. Interview Tips

When an interviewer asks about XPath Axes, first identify the relationship between the source element and target element.

### Parent to Child

Use:

```text
/
```

### Grandparent to Grandchild

Use:

```text
//
```

### Child to Parent

Use:

```text
parent::
```

### Grandchild to Grandparent

Use:

```text
ancestor::
```

### Elder Sibling to Younger Sibling

Use:

```text
following-sibling::
```

### Younger Sibling to Elder Sibling

Use:

```text
preceding-sibling::
```

### Elder Cousin to Younger Cousin

Use:

```text
following::
```

### Younger Cousin to Elder Cousin

Use:

```text
preceding::
```

---

# 16. Key Takeaways

- XPath Axes locate elements based on DOM relationships.
- Parent-child relationships move through the direct hierarchy.
- `parent::` moves from a child to its parent.
- `ancestor::` moves upward to an ancestor.
- `following-sibling::` moves from an earlier sibling to a later sibling.
- `preceding-sibling::` moves from a later sibling to an earlier sibling.
- `following::` searches forward in the document.
- `preceding::` searches backward in the document.
- Understanding the DOM hierarchy is essential for writing XPath Axes.
- XPath Axes are useful when the target element is difficult to identify using its own attributes or text.
