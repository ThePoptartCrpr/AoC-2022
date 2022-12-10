const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 9/input/9-strings.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');
        
        let head = [0, 0], tail = [0, 0];
        let tailHistory = [];

        for (line of lines) {
            if (line != '') {
                line = line.split(' ');

                // tiny brain solution;
                let moveTail = () => {
                    if (head[0] == tail[0] && head[1] == tail[1] + 2) tail[1]++;
                    else if (head[0] == tail[0] && head[1] == tail[1] - 2) tail[1]--;
                    else if (head[0] == tail[0] + 2 && head[1] == tail[1] ) tail[0]++;
                    else if (head[0] == tail[0] - 2 && head[1] == tail[1] ) tail[0]--;
                    else if (head[0] == tail[0] + 2 && head[1] == tail[1] + 1) {
                        tail[0]++; tail[1]++;
                    } else if (head[0] == tail[0] - 2 && head[1] == tail[1] + 1) {
                        tail[0]--; tail[1]++;
                    } else if (head[0] == tail[0] + 2 && head[1] == tail[1] - 1) {
                        tail[0]++; tail[1]--;
                    } else if (head[0] == tail[0] - 2 && head[1] == tail[1] - 1) {
                        tail[0]--; tail[1]--;
                    } else if (head[0] == tail[0] + 1 && head[1] == tail[1] + 2) {
                        tail[0]++; tail[1]++;
                    } else if (head[0] == tail[0] - 1 && head[1] == tail[1] + 2) {
                        tail[0]--; tail[1]++;
                    } else if (head[0] == tail[0] + 1 && head[1] == tail[1] - 2) {
                        tail[0]++; tail[1]--;
                    } else if (head[0] == tail[0] - 1 && head[1] == tail[1] - 2) {
                        tail[0]--; tail[1]--;
                    }
                }

                let dirMap = {
                    'U': (headInput) => { return [headInput[0], headInput[1] + 1]; },
                    'D': (headInput) => { return [headInput[0], headInput[1] - 1]; },
                    'L': (headInput) => { return [headInput[0] - 1, headInput[1]]; },
                    'R': (headInput) => { return [headInput[0] + 1, headInput[1]]; },
                }

                for (let i = 0; i < line[1]; i++) {
                    head = dirMap[line[0]](head);
                    moveTail();
                    if (tailHistory.findIndex(a => a.x == tail[0] && a.y == tail[1]) == -1) tailHistory.push({x: tail[0], y: tail[1]});
                }
            }
        }
        
        utils.formatAnswer(`The tail of the rope covers a total of <${tailHistory.length}> positions.`);
    }
});
