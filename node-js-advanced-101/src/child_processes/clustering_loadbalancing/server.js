
const http = require('http');
const pid = process.pid;
let usersCount;
http.createServer((req, res) => {

    let sum =0;
    for(let i=0; i<1e7; i++) {
        sum += i;
    }

    res.write(`Request processed by ${pid}`);
    res.end(`Users: ${usersCount}`);

}).listen(8080, (err) => {
   console.log(`Started proces on ${pid}`);
});

process.on('message', msg => {
    console.log(`Message from master: ${JSON.stringify(msg)}`)

    usersCount = msg.usersCount;
});
