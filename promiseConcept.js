/**
 * JavaScript Promise Concepts Demo
 * This file demonstrates the usage of Promises, async/await, and sequential execution
 */

/**
 * Function that returns a Promise that resolves after 1.5 seconds
 * Demonstrates basic Promise creation with setTimeout
 * @returns {Promise} A promise that resolves after 1500ms
 */
function power() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi yash")
            resolve(); // Resolve the promise after logging
        }, 1500) // Wait for 1.5 seconds
    })
}

/**
 * Function that returns a Promise that resolves after 1.4 seconds
 * Similar to power() but with different timing and message
 * @returns {Promise} A promise that resolves after 1400ms
 */
function power1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi vivek")
            resolve(); // Resolve the promise after logging
        }, 1400) // Wait for 1.4 seconds
    })
}

/**
 * Function that returns a Promise that resolves after 1.3 seconds
 * Similar to other functions but with different timing and message
 * @returns {Promise} A promise that resolves after 1300ms
 */
function power2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi gaurav")
            resolve(); // Resolve the promise after logging
        }, 1300) // Wait for 1.3 seconds
    })
}

/**
 * Async function that demonstrates sequential execution of promises
 * Uses await to ensure promises execute in order (power -> power1 -> power2)
 * Even though power2 has the shortest timeout, it will execute last due to await
 */
const result = async () => {
    console.log("Starting sequential execution...")
    await power()    // Wait for power() to complete (1.5s)
    await power1()   // Wait for power1() to complete (1.4s)
    await power2()   // Wait for power2() to complete (1.3s)
    console.log("All promises completed!")
}

// Execute the async function
result()