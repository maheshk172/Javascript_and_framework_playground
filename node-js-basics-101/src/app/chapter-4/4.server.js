function handleHTTP(req, res) {
    if (req.method === "GET") {
        handleGETRequest(req, res);
    } else {
        returnForbiddenResponse(req, res);
    }
}

function handleGETRequest(req, res) {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World: ");
        res.end(Math.random().toString());
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
