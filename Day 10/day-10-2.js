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

        let register = 1, cycle = 0;

        console.log();

        for (let y = 0; y < 6; y++) {
            let str = "";
            for (let x = 0; x < 40; x++) {
                str += (Math.abs(register - x) <= 1 ? "#" : ".");
                register += cycles[cycle];
                cycle++;
            }
            console.log(str);
        }

        console.log();
    }
});
