import chalk from 'chalk';
import figlet from 'figlet';

figlet('Welcome to Node.js', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data));
});
