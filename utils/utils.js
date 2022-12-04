const chalk = require('chalk');

exports.formatAnswer = (text) => {
    // '(?!<)([^<>])+(?=>)'


    arr = text.split(/[<>]/g);
    for (i in arr) {
        if (i % 2 == 0) process.stdout.write(arr[i]);
        else process.stdout.write(chalk.underline.red(arr[i]));
    }
}
