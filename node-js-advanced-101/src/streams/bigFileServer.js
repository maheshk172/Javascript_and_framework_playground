const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    /*fs.readFile('./v-big.file', (err, data) => {
      if(err) throw err;

      res.end(data);
   });*/

    const fileStream = fs.createReadStream('./v-big.file');
    fileStream.pipe(res);
});


server.listen(8000, (err) => {
    if(err) throw err;
    console.log('big file server is now serving on port 8000');
});
