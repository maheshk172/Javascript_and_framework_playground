const server = require('http').createServer();
const fs = require('fs');
const data = {
    'name':'test name',
    'email':'abc@testemail.com'
};
server.on('request', (req, res) => {
    console.log(req.url);

    switch (req.url) {
        case '/api':
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end(fs.readFileSync(`${__dirname + req.url}.html`));
            break;

        case '/':
            res.writeHead(301, {'location': '/home'});
            res.end();
            break;

        default:
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end();
    }
});

server.listen(8000, (err) => {
    if (err) throw err;
    console.log('Server listening on 8000');
});