import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Log Node.js version
console.log(`Node.js version: ${process.version}`);

// Log current file name and directory
console.log(`Current File Name: ${__filename}`);
console.log(`Current Directory: ${__dirname}`);

// Welcome message every 3 seconds
const intervalId = setInterval(() => {
    console.log("Welcome to Node.js! This message prints every 3 seconds.");
}, 3000);

// Stop timer after 10 seconds (Bonus)
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Timer stopped after 10 seconds.");
}, 10000);
