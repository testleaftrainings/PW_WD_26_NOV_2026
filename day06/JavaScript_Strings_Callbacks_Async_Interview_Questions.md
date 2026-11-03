# Testleaf Training
# JavaScript Strings, Callback Functions, and Synchronous vs Asynchronous Execution — Interview Questions

## Part A: Interview Questions

### 1. String Fundamentals
1. What is a string in JavaScript?
2. What are the different ways to declare a string?
3. What is the difference between a primitive string and a String object?
4. What is the output of `typeof "Playwright"`?
5. What is the output of `typeof new String("Playwright")`?
6. What is the difference between `==` and `===` when comparing strings?
7. Why is it generally recommended to use string literals instead of `new String()`?
8. Can single quotes, double quotes, and backticks all be used to declare strings?
9. How can you include an apostrophe inside a string?
10. What is string concatenation?

### 2. String Properties and Methods
11. What is the purpose of the `length` property?
12. Is `length` a property or a method?
13. What does `split()` return?
14. Does `split()` modify the original string?
15. What is the purpose of `substring()`?
16. Is the ending index included in `substring(start, end)`?
17. What does `charAt()` return?
18. What does `indexOf()` return when the requested text is not found?
19. What is the difference between `charAt()` and `indexOf()`?
20. Are JavaScript strings mutable or immutable?

### 3. Template Literals and String Operations
21. What are template literals?
22. How do you insert a variable into a template literal?
23. What is the difference between concatenation and template literals?
24. How can you reverse a string without using a built-in reverse method?
25. Why does a reverse loop usually start at `string.length - 1`?
26. Why does `string.length` not represent the last valid index?

### 4. Callback Functions
27. What is a callback function?
28. How can a function be passed as an argument to another function?
29. What is the difference between a function reference and a function invocation?
30. What is the role of the `callback` parameter in a function?
31. What happens when `callback()` is executed?
32. What is the difference between passing `enterPassword` and `enterPassword()`?
33. Can an anonymous function be passed as a callback?
34. Where are callback functions commonly used in JavaScript?

### 5. Synchronous and Asynchronous JavaScript
35. What is synchronous execution?
36. What is asynchronous execution?
37. What is the purpose of `setTimeout()`?
38. Does `setTimeout()` block the execution of the next statement?
39. What unit of time does `setTimeout()` use?
40. Does a `setTimeout()` callback always execute at the exact specified time?
41. What is the event loop?
42. What is the call stack?
43. Why does a synchronous `console.log()` execute before a timer callback?
44. What is the difference between a callback invoked synchronously and one scheduled asynchronously?

---

## Part B: Code Output and Explanation Questions

### Question 1: Primitive String and String Object
What is the output?

```javascript
// Declare a primitive string.
let course1 = "playwright";

// Create a String object containing the same text.
let course2 = new String("playwright");

// Compare the values using loose equality.
console.log(course1 == course2);

// Compare the values using strict equality.
console.log(course1 === course2);
```

### Question 2: String Length
What is the output?

```javascript
// Declare a string containing the course name.
let batchName = "Playwright";

// Print the number of UTF-16 code units in the string.
console.log(batchName.length);
```

### Question 3: Split a String
What is the output?

```javascript
// Declare a string containing a batch name and month.
let batch = "Playwright Nov 2026";

// Split the string wherever the character "u" occurs.
let arr = batch.split("u");

// Print the second element of the resulting array.
console.log(arr[1]);
```

### Question 4: Substring
What is the output?

```javascript
// Declare a string containing the company name.
let companyName = "Testleaf";

// Extract characters from index 1 up to, but not including, index 4.
let result = companyName.substring(1, 4);

// Print the extracted string.
console.log(result);
```

### Question 5: Character and Index
What is the output?

```javascript
// Declare a string containing a name.
let nameOfCourse = "Vineeth";

// Print the character at index 2.
console.log(nameOfCourse.charAt(2));

// Print the first index of the character "e".
console.log(nameOfCourse.indexOf("e"));
```

### Question 6: Reverse a String
What is the output?

```javascript
// Declare a string that needs to be reversed.
let name = "Vineeth";

// Create an empty string to store the reversed characters.
let reversedString = "";

// Iterate from the last valid index to the first index.
for (let i = name.length - 1; i >= 0; i--) {

    // Append the current character to the reversed string.
    reversedString = reversedString + name.charAt(i);
}

// Print the reversed string.
console.log(reversedString);
```

### Question 7: Callback Function
What is the output, and why?

```javascript
// Define a function that accepts a callback function.
function enterUsername(callback) {

    // Print a message indicating that the username is entered.
    console.log("Username entered");

    // Invoke the callback function.
    callback();
}

// Define the function that will be passed as a callback.
function enterPassword() {

    // Print a message indicating that the password is entered.
    console.log("Password entered");
}

// Pass the enterPassword function reference to enterUsername.
enterUsername(enterPassword);
```

### Question 8: Function Reference vs Invocation
What is the difference between these two calls?

```javascript
// Pass the function reference as an argument.
enterUsername(enterPassword);

// Invoke the function immediately and pass its return value.
enterUsername(enterPassword());
```

Explain why the second call may not work as intended when `enterUsername` expects a function.

### Question 9: Synchronous and Asynchronous Execution
Predict the order of output.

```javascript
// Print the username message.
console.log("Code for enter username");

// Schedule a callback to execute after 5000 milliseconds.
setTimeout(() => {

    // Print the password message.
    console.log("Code for enter password");

}, 5000);

// Print the login button message.
console.log("Code for click login button");
```

### Question 10: Timer Delay
If the delay passed to `setTimeout()` is `2000`, how many seconds is that? Does it guarantee that the callback runs at exactly two seconds?

---

## Part C: Scenario-Based Interview Questions
1. You receive a course name from a user and need to display the number of characters. Which string property would you use?
2. You have the string `"Testleaf"` and need only `"leaf"`. How would you extract it using `substring()`?
3. You need to divide `"Playwright Nov 2026"` into separate parts using spaces. Which method would you use?
4. You need to check whether a particular character exists in a string. How can `indexOf()` help?
5. You need to reverse a learner's name without using an array conversion. How would you solve it using a loop?
6. You have a primitive string and a String object containing identical text. Why can `==` and `===` produce different results?
7. A login workflow has separate functions for entering a username and password. How can you pass the password function as a callback to the username function?
8. A function accepts a callback, but the callback is executing before the receiving function reaches its callback statement. What might be wrong with the way the function is passed?
9. You need to execute a message after a delay while allowing the next statement to run immediately. Which JavaScript API can you use?
10. A developer expects `setTimeout(callback, 3000)` to pause the next line for three seconds. Is that expectation correct? Explain.
11. The timer delay has elapsed, but the callback has not executed yet. What could explain the delay?
12. You need to print username and login-button messages immediately, then print the password message after five seconds. How would you arrange the statements?

---

## Part D: Answer Key

### String Fundamentals
1. A string is a sequence of text characters represented using quotes or backticks.
2. Use single quotes, double quotes, or backticks. `new String()` creates a String object but is generally unnecessary.
3. A primitive string is a primitive value; `new String()` creates an object wrapping a string.
4. `"string"`.
5. `"object"`.
6. `==` allows type conversion; `===` compares without type conversion.
7. String literals produce primitive strings and avoid unexpected object behavior.
8. Yes. Backticks additionally support template literal features.
9. Use double quotes around the string, for example `"Men's Shirts"`, or escape the apostrophe.
10. Concatenation joins strings, commonly with the `+` operator.

### String Properties and Methods
11. `length` returns the number of UTF-16 code units.
12. It is a property. Use `text.length`.
13. `split()` returns an array of substrings.
14. No. It returns a new array.
15. `substring()` extracts and returns part of a string.
16. No. The ending index is excluded.
17. `charAt()` returns the character at the specified index, or an empty string for an out-of-range index.
18. `indexOf()` returns `-1` when the value is not found.
19. `charAt()` returns a character; `indexOf()` returns an index.
20. Strings are immutable. String operations return new values rather than changing the original.

### Template Literals and String Operations
21. Template literals are strings written with backticks and support interpolation and multiline text.
22. Use `${variableName}` inside backticks.
23. Both combine text and values; template literals often improve readability.
24. Loop from the last valid index to the first, appending each character to a new string.
25. The last valid index is one less than the length because indexes start at zero.
26. Length counts code units; indexes start at zero.

### Callback Functions
27. A callback is a function passed as an argument to another function, which can invoke it.
28. Pass its name without parentheses, for example `enterUsername(enterPassword)`.
29. `enterPassword` is a reference; `enterPassword()` executes the function.
30. The callback parameter receives the function reference.
31. The function stored in the callback parameter is invoked.
32. The first passes a function reference; the second executes the function immediately and passes its return value.
33. Yes. An anonymous function or arrow function can be passed as a callback.
34. Callbacks are used in event handlers, timers, array methods, and asynchronous APIs.

### Synchronous and Asynchronous JavaScript
35. Synchronous statements execute in sequence, with each statement completing before the next runs.
36. An operation can be scheduled so JavaScript can continue other work while waiting for it.
37. `setTimeout()` schedules a callback to become eligible after a specified delay.
38. No. The next synchronous statement continues executing.
39. Milliseconds; `5000` milliseconds is five seconds.
40. No. The delay is a minimum scheduling delay, not a guarantee of exact execution time.
41. The event loop coordinates when queued callbacks can run after the call stack is clear.
42. The call stack tracks currently executing function calls.
43. Synchronous statements execute before the timer callback is eligible to run.
44. A synchronous callback is invoked during the current call; an asynchronous callback is scheduled to run later.

### Code Output Answers
**Question 1**
```text
true
false
```
The primitive string and String object can compare equal with loose equality after conversion, but strict equality distinguishes them.

**Question 2**
```text
10
```

**Question 3**
```text
twright Nov 2026
```

**Question 4**
```text
est
```

**Question 5**
```text
n
1
```

**Question 6**
```text
hteeniV
```

**Question 7**
```text
Username entered
Password entered
```
The password function reference is passed into `enterUsername` and invoked through `callback()`.

**Question 8**
`enterPassword` passes a function reference. `enterPassword()` executes it immediately. If the receiving function expects a callback, passing the return value instead can cause an error or unexpected behavior.

**Question 9**

Immediately:
```text
Code for enter username
Code for click login button
```

After approximately five seconds, when the callback can run:
```text
Code for enter password
```

**Question 10**
`2000` milliseconds is two seconds. It does not guarantee execution at exactly two seconds; the callback runs when the delay has elapsed and the event loop can process it.

### Scenario-Based Answers
1. Use the `length` property.
2. Use `companyName.substring(4)` to obtain `"leaf"` from `"Testleaf"`.
3. Use `split(" ")`.
4. Use `indexOf(character)` and check whether the result is not `-1`.
5. Iterate from `text.length - 1` down to `0`, appending each character to a new string.
6. `==` permits conversion; `===` does not, so a primitive string and a String object are not strictly equal.
7. Pass the function reference: `enterUsername(enterPassword)`.
8. Check whether the caller used parentheses and executed the callback instead of passing its reference.
9. Use `setTimeout()`.
10. No. `setTimeout()` schedules the callback and does not block the next synchronous statement.
11. The call stack may still be busy, or other queued work may delay the callback.
12. Print the username, schedule the password message with `setTimeout()`, and then print the login-button message.
