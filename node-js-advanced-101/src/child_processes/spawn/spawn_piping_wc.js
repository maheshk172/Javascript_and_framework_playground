const {spawn} = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of Files: ${data}`);
});

/*
disconnect - parent calls disconnect
error 	 -	process can not be spawned
message  -  process.send() -> parent - child communicate with this
close	 -  standard io stream is closed

child.stdin  -  Writable
child.stdout -  Readable
child.stderr  - Readable
*/



