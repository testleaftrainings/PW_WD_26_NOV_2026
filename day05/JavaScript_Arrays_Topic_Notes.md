# Testleaf Training
# JavaScript Arrays and Array Methods — Topic Notes

## 1. Learning Objectives

By the end of this topic, learners should be able to:

- Declare variables and arrays in JavaScript.
- Read array elements using indexes.
- Find the number of elements using `length`.
- Traverse arrays using a `for` loop.
- Add and remove elements using common array methods.
- Remove elements using `splice()`.
- Sort numeric arrays in ascending and descending order.

---

## 2. Variables

A variable stores a value that can be used later in a program. JavaScript variables can be declared using `let`, `const`, or `var`.

```javascript
// Declare a variable named name1 and assign the string value "Maha".
let name1 = "Maha";

// Declare a variable named name2 and assign the string value "Rajesh".
let name2 = "Rajesh";
```

**Key points:**

- Use `let` when the variable may need to be reassigned.
- Use `const` when the variable binding should not be reassigned.
- JavaScript variable names are case-sensitive.
- Use meaningful and consistently spelled variable names.

---

## 3. Arrays

An array stores multiple values in a single variable. Array elements are ordered and accessed by their index.

```javascript
// Create an array named numbers containing five numeric values.
let numbers = [20, 40, 50, 10, 100];

// Print the array to the console.
console.log(numbers);
```

**Output:**

```text
[20, 40, 50, 10, 100]
```

An array can store values of different data types, although arrays containing values of the same type are often easier to work with.

---

## 4. Checking the Type of an Array

The `typeof` operator returns the type of a value. In JavaScript, `typeof` returns `"object"` for an array.

```javascript
// Create an array containing three numbers.
let numbers = [20, 40, 50];

// Print the data type of the array.
console.log(typeof numbers);

// Check whether the variable is an array.
console.log(Array.isArray(numbers));
```

**Output:**

```text
object
true
```

**Important:** Use `Array.isArray(value)` when you need to check whether a value is an array.

---

## 5. Accessing Elements Using Indexes

Array indexes start at `0`. Therefore, index `0` represents the first element, index `1` represents the second element, and so on.

```javascript
// Create an array containing five numbers.
let numbers = [20, 40, 50, 10, 100];

// Print the first element at index 0.
console.log(numbers[0]);

// Print the third element at index 2.
console.log(numbers[2]);

// Print the last element using the array length.
console.log(numbers[numbers.length - 1]);
```

**Output:**

```text
20
50
100
```

**Remember:** The last valid index is `array.length - 1`, because the length counts elements while indexes begin at zero.

---

## 6. Finding the Number of Elements with `length`

The `length` property returns the number of elements in an array.

```javascript
// Create an array containing five numbers.
let numbers = [20, 40, 50, 10, 100];

// Print the number of elements in the array.
console.log(numbers.length);
```

**Output:**

```text
5
```

For an array with five elements, the length is `5`, but the last index is `4`.

---

## 7. Traversing an Array Using a `for` Loop

A `for` loop can access each array element by using an index that increases from `0` to `length - 1`.

```javascript
// Create an array containing five numbers.
let numbers = [20, 40, 50, 10, 100];

// Start at index 0 and continue while the index is less than the array length.
for (let i = 0; i < numbers.length; i++) {

    // Print the element at the current index.
    console.log(numbers[i]);
}
```

**Output:**

```text
20
40
50
10
100
```

**How the loop works:**

1. `let i = 0` initializes the index.
2. `i < numbers.length` checks whether the loop should continue.
3. `i++` increases the index by one after each iteration.
4. `numbers[i]` accesses the current element.

**Common mistake:** Using `i <= numbers.length` allows the loop to run one extra time. Use `i < numbers.length`.

---

## 8. Adding Elements with `push()`

The `push()` method adds one or more elements to the **end** of an array. It changes the original array and returns the new length.

```javascript
// Create an array containing five age values.
let ages = [25, 70, 20, 30, 5];

// Add 100 and 50 to the end of the array.
ages.push(100, 50);

// Print the updated array.
console.log(ages);
```

**Output:**

```text
[25, 70, 20, 30, 5, 100, 50]
```

---

## 9. Adding Elements with `unshift()`

The `unshift()` method adds one or more elements to the **beginning** of an array. Existing elements move to higher indexes.

```javascript
// Create an array containing five age values.
let ages = [25, 70, 20, 30, 5];

// Add 5 and 10 to the beginning of the array.
ages.unshift(5, 10);

// Print the updated array.
console.log(ages);
```

**Output:**

```text
[5, 10, 25, 70, 20, 30, 5]
```

---

## 10. Removing the Last Element with `pop()`

The `pop()` method removes the last element from an array and returns the removed element.

```javascript
// Create an array containing four numbers.
let ages = [25, 70, 20, 30];

// Remove the last element from the array.
let removedAge = ages.pop();

// Print the removed element.
console.log(removedAge);

// Print the updated array.
console.log(ages);
```

**Output:**

```text
30
[25, 70, 20]
```

---

## 11. Removing the First Element with `shift()`

The `shift()` method removes the first element from an array and returns the removed element.

```javascript
// Create an array containing four numbers.
let ages = [25, 70, 20, 30];

// Remove the first element from the array.
let removedAge = ages.shift();

// Print the removed element.
console.log(removedAge);

// Print the updated array.
console.log(ages);
```

**Output:**

```text
25
[70, 20, 30]
```

---

## 12. Removing Elements with `splice()`

The `splice()` method can add, remove, or replace elements in an array. It changes the original array.

**Syntax for removing elements:**

```javascript
array.splice(startIndex, deleteCount);
```

- `startIndex`: The index where the operation begins.
- `deleteCount`: The number of elements to remove.

```javascript
// Create an array containing seven numbers.
let ages = [10, 25, 70, 20, 30, 100, 5];

// Remove four elements starting at index 2.
ages.splice(2, 4);

// Print the updated array.
console.log(ages);
```

**Output:**

```text
[10, 25, 5]
```

The values `70`, `20`, `30`, and `100` are removed.

**Common mistake:** `splice(2, 4)` does not mean “remove indexes 2 through 4.” It means “start at index 2 and remove four elements.”

---

## 13. Sorting Numeric Arrays

By default, `sort()` converts array elements to strings and sorts them by their string representations. For numeric sorting, use a comparison function.

### Ascending order

```javascript
// Create an array containing seven numbers.
let scores = [10, 30, 60, 100, 20, 70, 5];

// Sort the numbers from smallest to largest.
scores.sort((a, b) => a - b);

// Print the sorted array.
console.log(scores);
```

**Output:**

```text
[5, 10, 20, 30, 60, 70, 100]
```

### Descending order

```javascript
// Create an array containing seven numbers.
let scores = [10, 30, 60, 100, 20, 70, 5];

// Sort the numbers from largest to smallest.
scores.sort((a, b) => b - a);

// Print the sorted array.
console.log(scores);
```

**Output:**

```text
[100, 70, 60, 30, 20, 10, 5]
```

**How the comparator works:**

- `(a, b) => a - b` sorts numbers in ascending order.
- `(a, b) => b - a` sorts numbers in descending order.

**Common mistake:** `scores.sort()` without a comparator may place `100` before `20`, because the values are compared as strings.

---

## 14. Sorting String Arrays Alphabetically

For strings, `sort()` can sort values alphabetically according to their string ordering.

```javascript
// Create an array containing four names.
let names = ["Maha", "Rajesh", "Barani", "Vinoth"];

// Sort the names in ascending string order.
names.sort();

// Print the sorted names.
console.log(names);
```

**Output:**

```text
["Barani", "Maha", "Rajesh", "Vinoth"]
```

The exact ordering can be affected by letter case and locale when arrays contain mixed-case or non-English strings.

---

## 15. `slice()` Compared with `splice()`

Both methods work with array positions, but they behave differently.

- `slice(start, end)` returns a shallow copy of a selected range and does **not** change the original array.
- `splice(start, deleteCount)` changes the original array by removing, adding, or replacing elements.
- The `end` index in `slice()` is excluded.

```javascript
// Create an array containing seven scores.
let scores = [10, 30, 60, 100, 20, 70, 5];

// Copy elements from index 1 up to, but not including, index 5.
let slicedArray = scores.slice(1, 5);

// Print the copied elements.
console.log(slicedArray);

// Print the original array to show that slice did not change it.
console.log(scores);
```

**Output:**

```text
[30, 60, 100, 20]
[10, 30, 60, 100, 20, 70, 5]
```

---

## 16. Quick Reference Table

| Property / Method | Purpose | Changes the original array? |
|---|---|---|
| `typeof array` | Returns `"object"` for an array | No |
| `Array.isArray(array)` | Checks whether a value is an array | No |
| `array[index]` | Reads an element at an index | No |
| `array.length` | Returns the number of elements | No |
| `push(value)` | Adds elements to the end | Yes |
| `unshift(value)` | Adds elements to the beginning | Yes |
| `pop()` | Removes the last element | Yes |
| `shift()` | Removes the first element | Yes |
| `splice(start, count)` | Adds, removes, or replaces elements | Yes |
| `slice(start, end)` | Copies a selected range | No |
| `sort()` | Sorts the array | Yes |

---

## 17. Common Mistakes to Avoid

1. **Confusing length and the last index:** An array with five elements has length `5`, but its last index is `4`.
2. **Using `typeof` to identify arrays:** `typeof []` returns `"object"`; use `Array.isArray()` instead.
3. **Using `sort()` without a numeric comparator:** Numeric values may be sorted as strings.
4. **Misunderstanding `splice()`:** Its second argument is the number of elements to delete, not the ending index.
5. **Assuming `slice()` changes the original array:** `slice()` returns a new array and leaves the original unchanged.
6. **Using an incorrect loop condition:** Prefer `i < array.length` to avoid accessing an extra index.
7. **Forgetting that array methods may mutate the array:** `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, and `sort()` modify the original array.

---

## 18. Practice Activities

1. Create an array of five cities and print each city using a `for` loop.
2. Add two elements to the beginning and two elements to the end of an array.
3. Remove the first and last elements from an array and print the results.
4. Remove three elements starting from index `1` using `splice()`.
5. Sort an array of numbers in ascending order and then in descending order.
6. Use `slice()` to copy the middle three elements of an array. Confirm that the original array remains unchanged.
7. Explain why `typeof []` returns `"object"` and demonstrate how `Array.isArray()` can identify an array.
