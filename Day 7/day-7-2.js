const fs = require('fs');
const utils = require('../utils/utils.js');

fs.readFile('./Day 7/input/7-terminal.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let lines = data.split('\n');

        var storage = { contents: {} };
        let currentDir = storage.contents;
        let path = [];

        for (line of lines) {
            if (line.startsWith('$ ')) {
                if (line.startsWith('cd', 2)) {
                    dir = line.substring(5);
                    if (dir != '/') {
                        if (dir == '..') {
                            path.pop();
                            currentDir = storage.contents;
                            for (folder of path) {
                                currentDir = currentDir[folder].contents;
                            }
                        } else {
                            path.push(dir);
                            currentDir = currentDir[dir].contents;
                        }
                    }
                }
            } else if (line != '') {
                if (line.startsWith('dir ')) {
                    if (!currentDir[line.substring(4)]) currentDir[line.substring(4)] = ({ name: line.substring(4), type: 'dir', contents: {} });
                } else if (!currentDir[line.split(' ')[1]]) currentDir[line.split(' ')[1]] = ({ name: line.split(' ')[1], type: 'file', size: parseInt(line.split(' ')[0]) });
            }
        }

        let writeFolderSize = (folder) => {
            let size = 0;
            for ([k, item] of Object.entries(folder.contents)) {
                if (item.type == 'file') size += item.size;
                else size += writeFolderSize(item);
            }
            folder.size = size;
            return size;
        }

        writeFolderSize(storage);

        let size = 0;
        let findFolders = (folder) => {
            for ([k, item] of Object.entries(folder.contents)) {
                if (item.type == 'dir') {
                    if (item.size >= 30000000 - (70000000 - storage.size) && (item.size <= size || size == 0)) size = item.size;
                    findFolders(item);
                }
            }
        }

        findFolders(storage);
        
        utils.formatAnswer(`The size of the smallest directory above ${30000000 - (70000000 - storage.size)} bytes is <${size}>.`);
    }
});
