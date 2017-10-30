const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.trim().split(' ');
    client.emit('command', command, args);
});

server.on('response', (resp) => {
    //console.log(`Response : ${resp}`)
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(resp.toString());
    process.stdout.write('\n\>');
});
