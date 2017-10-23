//console.log('hello world');
//process.stdout.write('Hello world');

var args = require('minimist')(process.argv.slice(2), {
    string: "name"
})

var name = args.name;

console.log('hello ' + name);

