const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 1/input/1-1-calories', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        // Elf builder
        let elves = [], elf = 0;
        for (line in lines) {
            if (!elves[elf]) elves[elf] = [];
            if (lines[line] == '') elf++;
            else elves[elf].push(parseInt(lines[line]));
        }

        // Elf inspector
        let richestBastard = 0;
        let mostCalories = 0;
        for (elfInv in elves) {
            sum = 0;
            for (item in elves[elfInv]) {
                sum += elves[elfInv][item];
            }
            if (sum > mostCalories) {
                richestBastard = elfInv;
                mostCalories = sum;
            }
        }

        utils.formatAnswer(`The elf carrying the most Calories is Elf #<${richestBastard + 1}>, carrying a total of <${mostCalories}> Calories.`);
    }
});
