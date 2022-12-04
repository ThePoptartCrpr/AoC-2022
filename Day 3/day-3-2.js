const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 3/input/3-1-rucksacks.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let sum = 0;
        let groupN = -1, inventory = [];
        for (line in lines) {
            if (line % 3 == 0) {
                groupN++;
                inventory.push([[]]);
            }
            inventory[groupN].push([]);
            for (c of lines[line]) {
                if (inventory[groupN][0].indexOf(c) == -1) inventory[groupN][0].push(c);
                if (inventory[groupN][(line % 3) + 1].indexOf(c) == -1) inventory[groupN][(line % 3) + 1].push(c);
            }
        }

        for (group of inventory) {
            let badge;
            for (item of group[0]) {
                if (group[1].indexOf(item) != -1 && group[2].indexOf(item) != -1 && group[3].indexOf(item) != -1) badge = item;
            }
            sum += (badge == badge.toUpperCase() ? badge.charCodeAt(0) - 38 : badge.charCodeAt(0) - 96);

        }

        utils.formatAnswer(`The total priority sum is <${sum}>.`);
    }
});
