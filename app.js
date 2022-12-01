let args = process.argv.slice(2);

if (args.length < 2) return console.log('Specify day and segment. idiot.')

let day = args[0], segment = args[1];

try {
    require(`./Day ${day}/day-${day}-${segment}.js`)
} catch(e) {
    if (e.code == 'MODULE_NOT_FOUND') console.log('Invalid day / segment. idiot.')
    else throw e;
}
