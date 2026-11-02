# Testleaf Training
# JavaScript Arrays and Array Methods — Interview Questions with Answers

## Part A: Questions Only

Try answering these questions before reading the answers in Part B.

### Fundamentals

1. What is an array in JavaScript?
2. How do you declare and initialize an array?
3. What is an array index? What is the index of the first element?
4. What is the difference between an array's `length` and its last valid index?
5. What does `typeof` return when used with an array?
6. How can you check whether a value is an array?
7. How do you access the third element of an array?
8. How can you access the last element of an array without hard-coding its index?

### Loops and Array Methods

9. How can you print every element of an array using a `for` loop?
10. What is the purpose of the `length` property in a loop condition?
11. What is the difference between `push()` and `unshift()`?
12. What is the difference between `pop()` and `shift()`?
13. What does `splice()` do?
14. In `splice(2, 4)`, what do the two arguments represent?
15. What is the difference between `slice()` and `splice()`?
16. Does `push()` return the array or the new length?
17. Which of the following methods modify the original array: `push()`, `pop()`, `splice()`, `slice()`, and `sort()`?

### Sorting

18. Why should you use a comparison function when sorting numbers?
19. How do you sort numbers in ascending order?
20. How do you sort numbers in descending order?
21. What does `(a, b) => a - b` mean in a numeric sort?
22. Can `sort()` be used to sort strings alphabetically?

### Code and Output Questions

23. What is the output of the following code?

    ```javascript
    let numbers = [20, 40, 50, 10, 100];
    console.log(numbers[2]);
    console.log(numbers.length);
    ```

24. What is the output?

    ```javascript
    let numbers = [10, 20, 30];
    numbers.push(40);
    numbers.unshift(5);
    console.log(numbers);
    ```

25. What is the output?

    ```javascript
    let numbers = [10, 20, 30, 40];
    numbers.pop();
    numbers.shift();
    console.log(numbers);
    ```

26. What is the output?

    ```javascript
    let numbers = [10, 20, 30, 40, 50, 60];
    numbers.splice(2, 3);
    console.log(numbers);
    ```

27. What is the output?

    ```javascript
    let scores = [10, 30, 100, 20, 5];
    scores.sort((a, b) => a - b);
    console.log(scores);
    ```

28. What is the output?

    ```javascript
    let scores = [10, 30, 100, 20, 5];
    scores.sort((a, b) => b - a);
    console.log(scores);
    ```

29. What is the output, and does the original array change?

    ```javascript
    let values = [10, 20, 30, 40, 50];
    let result = values.slice(1, 4);
    console.log(result);
    console.log(values);
    ```

30. What is the difference between `typeof numbers` and `Array.isArray(numbers)` when `numbers` is an array?

### Scenario-Based Questions

31. You have an array of learner names. How would you print each name without writing a separate `console.log()` statement for every element?
32. You need to add a new score to the end of an array. Which method would you use, and why?
33. You need to add a priority item at the beginning of an array. Which method would you use?
34. You need to remove the last item from a queue-like list. Which array method would you use?
35. You need to remove two elements starting from index `3`. How would you do it using `splice()`?
36. Your numeric array `[10, 2, 100, 25]` does not sort as expected when you call `sort()`. How would you correct it?
37. You need a copy of the elements at indexes `1`, `2`, and `3` without modifying the original array. Which method would you use?
38. A loop tries to read one element beyond the end of an array. What loop condition should you check?
39. You need to determine whether an input value is an array before processing it. Which JavaScript method would you use?
40. You need to sort a list of names alphabetically. Which method would you use, and what should you consider if the names have mixed letter case?

---

## Part B: Answers and Explanations

### Fundamentals

**1. What is an array in JavaScript?**

An array is an ordered collection that stores multiple values in one variable. Each element can be accessed using its index.

**2. How do you declare and initialize an array?**

```javascript
// Create an array containing three numbers.
let numbers = [10, 20, 30];
```

**3. What is an array index? What is the index of the first element?**

An index is the position used to access an element. JavaScript arrays use zero-based indexing, so the first element is at index `0`.

**4. What is the difference between an array's `length` and its last valid index?**

`length` counts the elements. For a non-empty array, the last valid index is `length - 1`. For example, an array with three elements has a length of `3` and a last index of `2`.

**5. What does `typeof` return when used with an array?**

It returns `"object"`. This is why `typeof` is not sufficient to identify arrays.

**6. How can you check whether a value is an array?**

Use `Array.isArray(value)`. It returns `true` for arrays and `false` for non-array values.

**7. How do you access the third element of an array?**

Use `array[2]`, because indexing begins at `0`.

**8. How can you access the last element without hard-coding its index?**

Use `array[array.length - 1]`. For an empty array, this expression returns `undefined`.

### Loops and Array Methods

**9. How can you print every element using a `for` loop?**

```javascript
// Create an array containing three numbers.
let numbers = [10, 20, 30];

// Visit each valid index in the array.
for (let i = 0; i < numbers.length; i++) {

    // Print the element at the current index.
    console.log(numbers[i]);
}
```

**10. What is the purpose of `length` in a loop condition?**

It lets the loop stop after the last valid index. The condition `i < array.length` avoids an extra iteration.

**11. What is the difference between `push()` and `unshift()`?**

`push()` adds elements to the end of an array. `unshift()` adds elements to the beginning. Both modify the original array.

**12. What is the difference between `pop()` and `shift()`?**

`pop()` removes and returns the last element. `shift()` removes and returns the first element.

**13. What does `splice()` do?**

`splice()` can remove, insert, or replace elements in an array. It modifies the original array.

**14. In `splice(2, 4)`, what do the arguments represent?**

The operation starts at index `2` and removes up to four elements.

**15. What is the difference between `slice()` and `splice()`?**

`slice()` returns a shallow copy of a selected range without changing the original array. `splice()` changes the original array and can add, remove, or replace elements.

**16. Does `push()` return the array or the new length?**

It returns the new length of the array.

**17. Which listed methods modify the original array?**

`push()`, `pop()`, `splice()`, and `sort()` modify the original array. `slice()` does not modify the original array.

### Sorting

**18. Why use a comparison function when sorting numbers?**

Without a comparison function, `sort()` sorts elements by their string representations. A numeric comparison function ensures numerical ordering.

**19. How do you sort numbers in ascending order?**

Use `numbers.sort((a, b) => a - b)`.

**20. How do you sort numbers in descending order?**

Use `numbers.sort((a, b) => b - a)`.

**21. What does `(a, b) => a - b` mean in a numeric sort?**

It is an arrow function used as the comparator. A negative result places `a` before `b`, a positive result places `b` before `a`, and zero indicates equal sort order.

**22. Can `sort()` sort strings alphabetically?**

Yes. Calling `names.sort()` sorts strings by their string ordering. Mixed-case or locale-specific names may require a locale-aware comparator such as `localeCompare()`.

### Code and Output Answers

**23. Output**

```text
50
5
```

Index `2` contains `50`, and the array has five elements.

**24. Output**

```text
[5, 10, 20, 30, 40]
```

`push(40)` adds `40` to the end, and `unshift(5)` adds `5` to the beginning.

**25. Output**

```text
[20, 30]
```

`pop()` removes `40`; then `shift()` removes `10`.

**26. Output**

```text
[10, 20, 60]
```

`splice(2, 3)` removes three elements beginning at index `2`: `30`, `40`, and `50`.

**27. Output**

```text
[5, 10, 20, 30, 100]
```

The comparator `a - b` sorts numerically in ascending order.

**28. Output**

```text
[100, 30, 20, 10, 5]
```

The comparator `b - a` sorts numerically in descending order.

**29. Output**

```text
[20, 30, 40]
[10, 20, 30, 40, 50]
```

`slice(1, 4)` copies elements at indexes `1`, `2`, and `3`. The end index `4` is excluded, and the original array remains unchanged.

**30. Difference**

For an array, `typeof numbers` returns `"object"`, while `Array.isArray(numbers)` returns `true`.

### Scenario-Based Answers

**31. Print every learner name**

Use a loop and print `names[i]` during each iteration.

**32. Add a score to the end**

Use `scores.push(newScore)`, because `push()` appends elements to the end.

**33. Add a priority item at the beginning**

Use `items.unshift(priorityItem)`.

**34. Remove the last item**

Use `items.pop()`. It removes and returns the last element.

**35. Remove two elements starting at index 3**

Use `items.splice(3, 2)`.

**36. Correct numeric sorting**

Use `numbers.sort((a, b) => a - b)` for ascending order or `numbers.sort((a, b) => b - a)` for descending order.

**37. Copy elements at indexes 1, 2, and 3**

Use `values.slice(1, 4)`. The ending index is exclusive, so index `4` is not included.

**38. Avoid reading beyond the array**

Use `i < array.length`, not `i <= array.length`.

**39. Check whether an input is an array**

Use `Array.isArray(inputValue)`.

**40. Sort names alphabetically**

Use `names.sort()`. If names contain mixed case or need language-aware ordering, consider `localeCompare()` with `Intl.Collator` or an appropriate locale-aware comparator.
