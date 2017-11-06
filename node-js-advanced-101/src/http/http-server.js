const server = require('http').createServer();

/*server.on('request', (req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World\n');
});*/

// .end -> terminates session
// .write -> writes and keeps session open

let counter = 1;
server.on('request', (req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Sending Data\n');
    let interval;
    interval = setInterval(function() {
        res.write(`chunk ${counter++} sent`)
        if(counter === 20) {
            interval.cancel();
            res.end('last chunk sent');
        }
    }, 1000);
});


server.listen(8000, (err) => {
    if (err) throw err;
    console.log('Server listening on 8000');
});