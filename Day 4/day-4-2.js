const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 4/input/4-assignments.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let sum = 0;
        for (line of lines) {
            assignments = line.split(',');
            assignments[0] = assignments[0].split('-');
            assignments[1] = assignments[1].split('-');
            assignments[0][0] = parseInt(assignments[0][0]);
            assignments[0][1] = parseInt(assignments[0][1]);
            assignments[1][0] = parseInt(assignments[1][0]);
            assignments[1][1] = parseInt(assignments[1][1]);
            let overlapped = false;
            for (i = assignments[0][0]; i <= assignments[0][1]; i++) {
                if (i >= assignments[1][0] && i <= assignments[1][1] && !overlapped) {
                    sum++;
                    overlapped = true;
                }
            }
        }

        utils.formatAnswer(`The total sum of overlapping assignments is <${sum}>.`);
    }
});
