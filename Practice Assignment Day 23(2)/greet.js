import moment from 'moment';

// Get the name from command line arguments
// process.argv[0] is node executable path
// process.argv[1] is script file path
// process.argv[2] is the first user-provided argument
const name = process.argv[2] || 'Guest';

// Format the current date and time
// Format example: Fri Nov 7 2025, 10:45 AM
const formattedDate = moment().format('ddd MMM D YYYY, h:mm A');

console.log(`Hello, ${name}! Today is ${formattedDate}.`);
