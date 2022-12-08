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

        let sumVisible = 0;

        // Idiot brain brute forcing time
        for (row in trees) {
            row = parseInt(row);
            for (column in trees[row]) {
                column = parseInt(column);
                // Left, right, up, down
                let visible = [ 1, 1, 1, 1 ];

                // Check if tree is hidden in row
                for (tree in trees[row]) {
                    tree = parseInt(tree);
                    if ((trees[row][tree] >= trees[row][column] && (tree < column))) visible[0] = 0;
                    else if ((trees[row][tree] >= trees[row][column] && (tree > column))) visible[1] = 0;
                }

                // Check if tree is hidden in column
                for (treeRow in trees) {
                    treeRow = parseInt(treeRow);
                    if ((trees[treeRow][column] >= trees[row][column] && (treeRow < row))) visible[2] = 0;
                    else if ((trees[treeRow][column] >= trees[row][column] && (treeRow > row))) visible[3] = 0;
                }

                // If visible on any side, must be visible!
                if (visible.indexOf(1) != -1) sumVisible++;
            }
        }

        utils.formatAnswer(`A total of <${sumVisible}> trees are visible from outside.`);
    }
});
