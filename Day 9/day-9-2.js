const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 9/input/9-strings.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');
        
        let rope = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
        let tailHistory = [];

        for (line of lines) {
            if (line != '') {
                line = line.split(' ');

                // tiny brain solution;
                let moveTail = (i) => {
                    if (rope[i - 1][0] == rope[i][0] && rope[i - 1][1] == rope[i][1] + 2) rope[i][1]++;
                    else if (rope[i - 1][0] == rope[i][0] && rope[i - 1][1] == rope[i][1] - 2) rope[i][1]--;
                    else if (rope[i - 1][0] == rope[i][0] + 2 && rope[i - 1][1] == rope[i][1] ) rope[i][0]++;
                    else if (rope[i - 1][0] == rope[i][0] - 2 && rope[i - 1][1] == rope[i][1] ) rope[i][0]--;
                    else if (rope[i - 1][0] == rope[i][0] + 2 && rope[i - 1][1] == rope[i][1] + 1) {
                        rope[i][0]++; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] - 2 && rope[i - 1][1] == rope[i][1] + 1) {
                        rope[i][0]--; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] + 2 && rope[i - 1][1] == rope[i][1] - 1) {
                        rope[i][0]++; rope[i][1]--;
                    } else if (rope[i - 1][0] == rope[i][0] - 2 && rope[i - 1][1] == rope[i][1] - 1) {
                        rope[i][0]--; rope[i][1]--;
                    } else if (rope[i - 1][0] == rope[i][0] + 1 && rope[i - 1][1] == rope[i][1] + 2) {
                        rope[i][0]++; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] - 1 && rope[i - 1][1] == rope[i][1] + 2) {
                        rope[i][0]--; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] + 1 && rope[i - 1][1] == rope[i][1] - 2) {
                        rope[i][0]++; rope[i][1]--;
                    } else if (rope[i - 1][0] == rope[i][0] - 1 && rope[i - 1][1] == rope[i][1] - 2) {
                        rope[i][0]--; rope[i][1]--;
                    } else if (rope[i - 1][0] == rope[i][0] + 2 && rope[i - 1][1] == rope[i][1] + 2) {
                        rope[i][0]++; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] - 2 && rope[i - 1][1] == rope[i][1] + 2) {
                        rope[i][0]--; rope[i][1]++;
                    } else if (rope[i - 1][0] == rope[i][0] + 2 && rope[i - 1][1] == rope[i][1] - 2) {
                        rope[i][0]++; rope[i][1]--;
                    } else if (rope[i - 1][0] == rope[i][0] - 2 && rope[i - 1][1] == rope[i][1] - 2) {
                        rope[i][0]--; rope[i][1]--;
                    }
                }

                let dirMap = {
                    'U': (headInput) => { return [headInput[0], headInput[1] + 1]; },
                    'D': (headInput) => { return [headInput[0], headInput[1] - 1]; },
                    'L': (headInput) => { return [headInput[0] - 1, headInput[1]]; },
                    'R': (headInput) => { return [headInput[0] + 1, headInput[1]]; },
                }

                for (let i = 0; i < line[1]; i++) {
                    rope[0] = dirMap[line[0]](rope[0]);
                    for (j of [1, 2, 3, 4, 5, 6, 7, 8, 9]) moveTail(j);
                    if (tailHistory.findIndex(a => a.x == rope[9][0] && a.y == rope[9][1]) == -1) tailHistory.push({x: rope[9][0], y: rope[9][1]});
                }
            }
        }
        
        utils.formatAnswer(`The tail of the rope covers a total of <${tailHistory.length}> positions.`);
    }
});
