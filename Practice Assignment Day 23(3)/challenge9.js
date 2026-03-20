const fs = require('fs').promises;

/**
 * Challenge 9: Async/Await
 * User Story: As a developer, I want cleaner syntax for asynchronous operations using modern JavaScript.
 */

const sourceFile = 'input.txt';
const destFile = 'output_async.txt'; // Using a different output name for clarity

/**
 * Copies a file from source to destination using async/await.
 * @param {string} src - The path to the source file.
 * @param {string} dest - The path to the destination file.
 */
async function copyFile(src, dest) {
    try {
        console.log(`Starting file copy operation from ${src} to ${dest} using async/await...`);

        // 1. Read content from input.txt
        const content = await fs.readFile(src, 'utf8');
        console.log(`Read successful. Simulation a slow operation...`);

        // Bonus: Add an artificial delay to simulate a slow operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 2. Write same content to destination file
        await fs.writeFile(dest, content);

        // 3. Log confirmation message
        console.log('File copied successfully!');
    } catch (err) {
        // Graceful error handling implemented
        console.error('An error occurred during the async file copy:', err.message);
    }
}

// Invoke the async function
copyFile(sourceFile, destFile);

console.log('Async operation initiated. Waiting for the simulated delay...');
