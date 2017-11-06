

const http = require('http');
const {fork} = require('child_process');


const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.url);
    if(req.url === '/compute') {

        const computeChild = fork('compute.js');

        computeChild.on('message', (sum) => {
            return res.end(`Sum is now ${sum}`)
        });
        computeChild.send('START');

    } else {
        res.end('OK');
    }

});

server.listen(3000);