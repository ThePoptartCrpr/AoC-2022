const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 2/input/2-1-rps.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let score = 0;
        for (line in lines) {
            let outcome = 0;
            if (lines[line][0].charCodeAt(0) == (lines[line][2].charCodeAt(0) - 23)) outcome = 3;
            if ((lines[line][0] == 'A' && lines[line][2] == 'Y') || (lines[line][0] == 'B' && lines[line][2] == 'Z') || (lines[line][0] == 'C' && lines[line][2] == 'X')) outcome = 6;
            score += outcome;
            score += (lines[line][2] == 'X' ? 1 : lines[line][2] == 'Y' ? 2 : lines[line][2] == 'Z' ? 3 : 0);
        };

        utils.formatAnswer(`The projected score is <${score}>.`);
    }
});
