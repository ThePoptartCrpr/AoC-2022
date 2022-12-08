const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 8/input/8-trees.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let trees = [];
        
        for (line of lines) {
            if (line != '') {
                row = [];
                for (height of line) {
                    row.push(parseInt(height)); 
                }
                trees.push(row);
            }
        }

        let highestScore = 0;

        for (row in trees) {
            row = parseInt(row);
            for (column in trees[row]) {
                column = parseInt(column);
                // Left, right, up, down
                let score = [ 0, 0, 0, 0 ];

                // Check left
                let distance = 0;
                for (let i = (column - 1); i >= 0; i--) {
                    distance++;
                    if ((trees[row][i] >= trees[row][column]) || i == 0) {
                        score[0] = distance;
                        break;
                    }
                }

                // Check right
                distance = 0;
                for (let i = (column + 1); i <= (trees[row].length - 1); i++) {
                    distance++;
                    if ((trees[row][i] >= trees[row][column] || i == (trees[row].length - 1))) {
                        score[1] = distance;
                        break;
                    }
                }

                // Check up
                distance = 0;
                for (let i = (row - 1); i >= 0; i--) {
                    distance++;
                    if ((trees[i][column] >= trees[row][column]) || i == 0) {
                        score[2] = distance;
                        break;
                    }
                }

                // Check down
                distance = 0;
                for (let i = (row + 1); i <= (trees.length - 1); i++) {
                    distance++;
                    if ((trees[i][column] >= trees[row][column]) || i == (trees.length - 1)) {
                        score[3] = distance;
                        break;
                    }
                }

                if ((score[0] * score[1] * score[2] * score[3]) >= highestScore) highestScore = (score[0] * score[1] * score[2] * score[3]);
            }
        }

        utils.formatAnswer(`The highest scenic score possible is <${highestScore}>.`);
    }
});
