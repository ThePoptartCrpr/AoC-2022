const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 10/input/10-cycles.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let cycles = [];

        for (line of lines) {
            if (line != '') {
                if (line == 'noop') cycles.push(0);
                else if (line.startsWith('addx')) {
                    cycles.push(0);
                    cycles.push(parseInt(line.split(' ')[1]));
                }
            }
        }

        let register = 1, signalSum = 0;

        for (i in cycles) {
            i = parseInt(i);
            register += cycles[i];
            console.log(register, i);
            if ([20, 60, 100, 140, 180, 220].includes(i + 2)) {
                signalSum += (register * (i + 2));
                console.log('yeah! ', register * (i + 2));
            }
        
        }

        utils.formatAnswer(`The sum of the signal strengths is <${signalSum}>.`);
    }
});
