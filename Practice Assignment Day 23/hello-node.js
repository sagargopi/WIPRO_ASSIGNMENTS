console.log(`Node.js version: ${process.version}`);
console.log(`Current file name: ${__filename}`);
console.log(`Current directory: ${__dirname}`);

const intervalId = setInterval(() => {
  console.log('Welcome to Node.js');
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('Timer stopped.');
}, 10000);
