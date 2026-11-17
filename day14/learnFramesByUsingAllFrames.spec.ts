import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    // Load the LeafGround Frame page.
    await page.goto("https://leafground.com/frame.xhtml");

    // Get all the frames available on the current page.
    const allFrames = page.frames();

    // Print the total number of frames available on the page.
    console.log(allFrames.length);

    // Print all the Frame objects available on the page.
    console.log(allFrames);

    // Loop through all the frames and print the URL of each frame.
    for (let i = 0; i < allFrames.length; i++) {

        // Print the URL of the current frame.
        console.log(allFrames[i].url());

    }

    // Access the second frame using its index and click the "Click Me" button.
    await allFrames[1].getByRole("button", { name: "Click Me" }).click();

    // Wait for 5 seconds to observe the result.
    await page.waitForTimeout(5000);

});