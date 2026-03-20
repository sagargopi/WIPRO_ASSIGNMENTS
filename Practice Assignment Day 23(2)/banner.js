import chalk from 'chalk';
import figlet from 'figlet';

figlet('Welcome to Node.js', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    // Print the stylized banner in cyan
    console.log(chalk.cyan(data));
});
