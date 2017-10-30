const http = require('http');

/* REQUEST METHOD */
/*var req = http.request(
    {
        hostname: 'www.google.co.in'
    }, (res) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (data) => {
           console.log(data.toString());
        });
    });


req.on('error', (err) => {
    console.log(err);
});

req.end();

    */

/* GET METHOD */
// req: http.ClientRequest
var req = http.get(
    'http://www.google.co.in'
    // res: http.IncomingMessage
    , (res) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (data) => {
            console.log(data.toString());
        });
    });


req.on('error', (err) => {
    console.log(err);
});

// Not needed for Http GET
//req.end();
//agent: http.Agent
console.log(req.agent);