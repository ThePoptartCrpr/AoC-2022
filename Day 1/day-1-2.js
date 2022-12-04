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
        let mostCalories = [0, 0, 0];
        for (elfInv in elves) {
            let sum = 0;
            for (item in elves[elfInv]) {
                sum += elves[elfInv][item];
            }
            if (sum > mostCalories[0]) mostCalories[0] = sum;
            else if (sum > mostCalories[1]) mostCalories[1] = sum;
            else if (sum > mostCalories[2]) mostCalories[2] = sum;
        }

        let grandTotal = mostCalories[0] + mostCalories[1] + mostCalories[2];

        utils.formatAnswer(`The total amount of Calories held by the three top elves is <${grandTotal}> Calories.`);
    }
});
