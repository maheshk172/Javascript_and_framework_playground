const { spawn } = require('child_process');

/*
    stdio
    shell  -> spawns a new shell to perform this action
    cwd    -> set Current Working Directory
 */
/*const child = spawn('find', ['.','-type','f'], {
    stdio: 'inherit',
    shell: true
});*/

/*
const child = spawn('find', ['.','-type','f'], {
    stdio: 'inherit',
    shell: true,
    cwd: '/users/kulkamah'
});
*/

const child = spawn('echo $ANSWER', {
    stdio: 'inherit',
    shell: true,
    env: { ANSWER: 42 }
});

