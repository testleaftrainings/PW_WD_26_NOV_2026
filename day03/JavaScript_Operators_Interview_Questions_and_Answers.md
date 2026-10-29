# JavaScript Operators – Interview Questions and Answers

## Assignment Operator

### Q1. What is the assignment operator in JavaScript?
**Answer:** The assignment operator (`=`) assigns a value to a variable.

### Q2. What is the difference between `=` and `==`?
**Answer:** `=` assigns a value. `==` compares values and may perform type conversion.

## Arithmetic Operators

### Q3. Name some arithmetic operators in JavaScript.
**Answer:** `+`, `-`, `*`, `/`, `%`, and `**`.

### Q4. What is the output of `10 + 3`, `10 - 3`, and `10 * 3`?
**Answer:** `13`, `7`, and `30`, respectively.

### Q5. What is the difference between `/` and `Math.floor(a / b)`?
**Answer:** `/` can return a decimal result. `Math.floor()` rounds the result down to the nearest integer.

```javascript
console.log(10 / 3); // 3.3333333333333335
console.log(Math.floor(10 / 3)); // 3
```

### Q6. What does `%` do?
**Answer:** It returns the remainder after division. For example, `10 % 3` returns `1`.

### Q7. What does `**` do?
**Answer:** It performs exponentiation. For example, `10 ** 3` returns `1000`.

## Comparison Operators

### Q8. What do comparison operators return?
**Answer:** A Boolean value: `true` or `false`.

### Q9. What is the difference between `<` and `<=`?
**Answer:** `<` checks whether the left value is strictly smaller. `<=` also returns true when both values are equal.

### Q10. What is the output?

```javascript
var x = 10;
var y = 20;
console.log(x > y);
console.log(x < y);
```

**Answer:**
```text
false
true
```

## Equality Operators

### Q11. What is the difference between `==` and `===`?
**Answer:** `==` compares values with type conversion when applicable. `===` compares both value and type without type conversion.

### Q12. What is the output of `10 == "10"`?
**Answer:** `true`, because loose equality converts the string to a number for this comparison.

### Q13. What is the output of `10 === "10"`?
**Answer:** `false`, because one value is a number and the other is a string.

### Q14. What is the output of the following code?

```javascript
var p = true;
var q = 10;
console.log(p === q);
```

**Answer:** `false`. A Boolean and a number are different types, and strict equality does not convert types.

## Increment and Decrement Operators

### Q15. What does `++` do?
**Answer:** It increases a numeric variable by 1.

### Q16. What is the difference between `v++` and `++v`?
**Answer:** `v++` returns the current value and then increments. `++v` increments first and then returns the updated value.

### Q17. What is the output?

```javascript
var v = 5;
console.log(v++);
console.log(v);
console.log(++v);
```

**Answer:**
```text
5
6
7
```

### Q18. What is the difference between `v--` and `--v`?
**Answer:** `v--` returns the current value and then decrements. `--v` decrements first and then returns the updated value.

### Q19. What is the output?

```javascript
var v = 7;
console.log(v--);
console.log(v);
console.log(--v);
```

**Answer:**
```text
7
6
5
```

## Logical Operators

### Q20. What are the common logical operators in JavaScript?
**Answer:** `&&` (AND), `||` (OR), and `!` (NOT).

### Q21. When does `&&` return true?
**Answer:** When both conditions are true.

### Q22. When does `||` return true?
**Answer:** When at least one condition is true.

### Q23. What does `!` do?
**Answer:** It reverses a Boolean value: `!true` becomes `false`, and `!false` becomes `true`.

### Q24. What is the output?

```javascript
var x = 10;
var y = 20;
console.log(x > y && x < y);
console.log(x > y || x < y);
```

**Answer:**
```text
false
true
```

### Q25. What is short-circuit evaluation?
**Answer:** JavaScript may stop evaluating a logical expression once its result is determined. For example, with `&&`, a falsy left operand determines the result; with `||`, a truthy left operand determines the result.

## Practice Questions

1. Write a program to calculate the sum, difference, product, quotient, and remainder of two numbers.
2. Compare two numbers using `<`, `>`, `<=`, and `>=`.
3. Predict the outputs of `5 == "5"` and `5 === "5"`.
4. Predict the output:

   ```javascript
   var count = 3;
   console.log(count++);
   console.log(++count);
   ```

5. Use `&&` to check whether a number is greater than 10 and less than 50.
6. Use `||` to check whether a number is less than 0 or greater than 100.
7. Use `!` to reverse the result of a Boolean condition.
