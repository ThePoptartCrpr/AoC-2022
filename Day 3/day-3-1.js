const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 3/input/3-1-rucksacks.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let sum = 0;
        for (line in lines) {
            let flagged = false;
            for (c of lines[line].slice(0, lines[line].length / 2)) {
                for (c2 of lines[line].slice(lines[line].length / 2)) {
                    if (c == c2 && flagged == false) {
                        sum += (c == c.toUpperCase() ? c.charCodeAt(0) - 38 : c.charCodeAt(0) - 96);
                        flagged = true;
                    }
                }
            }
        }

        utils.formatAnswer(`The total priority sum is <${sum}>.`);
    }
});
