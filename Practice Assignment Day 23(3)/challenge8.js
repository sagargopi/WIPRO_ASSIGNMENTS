const fs = require('fs').promises;

/**
 * Challenge 8: Promises
 * User Story: As a developer, I want to chain multiple async operations (read file → write to another file) using Promises.
 */

const sourceFile = 'input.txt';
const destFile = 'output.txt';

console.log('Starting file copy operation using Promises...');

// Using fs.promises for Promise-based file operations
fs.readFile(sourceFile, 'utf8')
    .then((content) => {
        console.log(`Content read from ${sourceFile}. Writing to ${destFile}...`);
        return fs.writeFile(destFile, content);
    })
    .then(() => {
        // Log confirmation message
        console.log('File copied successfully!');
    })
    .catch((err) => {
        // Bonus: Handle errors using .catch()
        console.error('An error occurred during the file copy operation:', err.message);
    });

console.log('Operation initiated (demonstrating asynchronous behavior)...');
