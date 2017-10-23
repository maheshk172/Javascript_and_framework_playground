function handleHTTP(req, res) {
    if (req.method === "GET") {
        handleGETRequest(req, res);
    } else {
        returnForbiddenResponse(req, res);
    }
}

function handleGETRequest(req, res) {
    if (req.url === "/") {
        ASQ(function (done) {
            setTimeout(function () {
                console.log("Generated Random");

                done(Math.random.toString());
            }, 500);
        }).then(function (done, random) {
            setTimeout(function () {
                console.log("Random appended to message");
                done("Hello World : " + random);
            }, 500);
        }).val(function (finalMessage) {
            console.log("printing it now");
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(finalMessage);
        });


    } else {
        returnForbiddenResponse(req, res);
    }

}

function returnForbiddenResponse(req, res) {
    res.writeHead(403);
    res.end("Get OUT of here dude !!");
}


var http = require("http");
var host = "localhost";
var port = 8006;

var httpServer = http.createServer(handleHTTP).listen(port, host);


var ASQ = require("asynquence");
require("asynquence-contrib");