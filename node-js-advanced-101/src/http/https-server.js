
// Https Server needs Key, Cert, PFX
//Generate Private key and certificate
//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes


const fs = require('fs');
//server - http.Server
const server = require('https')
    .createServer({
        key:fs.readFileSync('./key.pem'),
        cert:fs.readFileSync('./cert.pem')
    });

server.on('request', (req, res) => {
    //req: http.IncomingMessage
    //res: http.ServerResponse

   res.writeHead(200, {'Content-type':'text/plain'});
   res.end('Hello world from https relm');
});

server.listen(443, (err) => {
    if(err) throw err;
    console.log('Server listening on port 443');
});
