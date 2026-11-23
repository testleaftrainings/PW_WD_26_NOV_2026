// Import the test function from the Playwright Test package.
import test from "@playwright/test";

// Execute this hook once before all the tests in this file.
test.beforeAll(async () => {

    // Print a message before the test suite starts.
    console.log("Before All test");
});

// Execute this hook before every test.
test.beforeEach(async () => {

    // Print a message before each test starts.
    console.log("Before each test");
});

// Create the first test case.
test("Test1", async ({ page }) => {

    // Print the name of the first test.
    console.log("Test1");
});

// Create the second test case.
test("Test2", async ({ page }) => {

    // Print the name of the second test.
    console.log("Test2");
});

// Create the third test case.
test("Test3", async ({ page }) => {

    // Print the name of the third test.
    console.log("Test3");
});

// Execute this hook after every test.
test.afterEach(async () => {

    // Print a message after each test completes.
    console.log("After each test");
});

// Execute this hook once after all the tests in this file complete.
test.afterAll(async () => {

    // Print a message after the complete test suite finishes.
    console.log("After all test");
});