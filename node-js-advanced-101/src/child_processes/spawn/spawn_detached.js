const { spawn } = require('child_process');


/*
    detached :  in its own window -> windows
                parent of new process -> linux/unix
                parent can exit but child keeps running


 */
const child = spawn('node', ['timer.js'], {
    stdio: 'ignore',
    detached: true
});

child.unref();