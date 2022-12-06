const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 6/input/6-packet.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        let observed = [];
        let index = 0;

        for (char of lines[0]) {
            observed.push(char);
            if (observed.length > 14) observed.shift();
            index++;
            if (observed.length == 14 && (new Set(observed)).size == observed.length) break;
        }

        utils.formatAnswer(`The first marker appears after <${index}> characters, at which point the marker consists of <${observed}>.`);
    }
});
