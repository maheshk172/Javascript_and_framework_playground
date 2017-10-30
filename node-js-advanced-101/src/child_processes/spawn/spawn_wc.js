
const {spawn} = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin);

child.on('exit', function(code, signal) {
    console.log(`child process exited with ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => {
    console.log(`child process stdout:\n ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child process stdErr:\n ${data}`);
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



