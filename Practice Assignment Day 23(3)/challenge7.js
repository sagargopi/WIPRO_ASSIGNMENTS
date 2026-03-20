const fs = require('fs');

/**
 * Challenge 7: Callbacks
 * User Story: As a developer, I want to read a file and then display a confirmation message once it’s done — using callbacks.
 */

const fileName = 'data.txt';

console.log('Starting read operation...');

// Using fs.readFile with a callback function
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }

    // Displaying file content (optional, but good for verification)
    console.log('File content read successfully.');

    // Bonus: Add an intentional delay using setTimeout() before confirmation
    console.log('Waiting for a short delay...');
    setTimeout(() => {
        console.log('Read operation completed');
    }, 1500); // 1.5 seconds delay
});

console.log('Continuing other tasks (demonstrating asynchronous behavior)...');
