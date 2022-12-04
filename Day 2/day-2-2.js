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
            let choice = '';

            switch(lines[line][0]) {
                case 'A':
                    choice = (lines[line][2] == 'X' ? 'Z' : lines[line][2] == 'Y' ? 'X' : 'Y');
                    break;
                case 'B':
                    choice = (lines[line][2] == 'X' ? 'X' : lines[line][2] == 'Y' ? 'Y' : 'Z');
                    break;
                case 'C':
                    choice = (lines[line][2] == 'X' ? 'Y' : lines[line][2] == 'Y' ? 'Z' : 'X');
                    break;
            }

            if (lines[line][0].charCodeAt(0) == (choice.charCodeAt(0) - 23)) outcome = 3;
            if ((lines[line][0] == 'A' && choice == 'Y') || (lines[line][0] == 'B' && choice == 'Z') || (lines[line][0] == 'C' && choice == 'X')) outcome = 6;
            score += outcome;
            score += (choice == 'X' ? 1 : choice == 'Y' ? 2 : choice == 'Z' ? 3 : 0);
        };

        utils.formatAnswer(`The projected score is <${score}>.`)
    }
});
