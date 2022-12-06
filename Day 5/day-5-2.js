const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 5/input/5-crates.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let stacks = [[], [], [], [], [], [], [], [], []];
        for (line in lines) {
            if (line < 8) {
                for (i in [1, 5, 9, 13, 17, 21, 25, 29, 33]) {
                    if (lines[line][(i * 4) + 1] != ' ') stacks[i].push(lines[line][(i * 4) + 1]);
                }
            } else if (line >= 10 && lines[line] != '') {
                // Move: i = 1, from: i = 3, to: i = 5
                instructions = lines[line].split(' ');

                let crates = stacks[instructions[3] - 1].splice(0, instructions[1]);
                if (line == 10) console.log(instructions[1]);
                for (let i = instructions[1] - 1; i >= 0; i--) {
                    stacks[instructions[5] - 1].unshift(crates[i]);
                }
            }
        }

        let final_top = [];
        for (stack of stacks) {
            final_top.push(stack[0]);
        }
        
        utils.formatAnswer(`The final top crate in each stack is: <${final_top}>.`)
    }
});
