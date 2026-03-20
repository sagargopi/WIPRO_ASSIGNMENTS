import moment from 'moment';

const name = process.argv[2];

if (!name) {
  console.log('Please provide your name as a command-line argument.');
  process.exit(1);
}

const now = moment().format('ddd MMM D YYYY, h:mm A');

console.log(`Hello, ${name}! Today is ${now}.`);
