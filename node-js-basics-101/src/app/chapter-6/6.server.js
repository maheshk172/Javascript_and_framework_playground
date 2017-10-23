function handleHTTP(req, res) {
    if (req.method === "GET") {
        handleGETRequest(req, res);
    } else {
        returnForbiddenResponse(req, res);
    }
}

function handleGETRequest(req, res) {
    req.url = req.url + ".html";
    static_Files.serve(req, res);
}

function returnForbiddenResponse(req, res) {
    res.writeHead(403);
    res.end("Get OUT of here dude !!");
}


var http = require("http");
var host = "localhost";
var port = 8006;

var httpServer = http.createServer(handleHTTP).listen(port, host);

var node_static = require("node-static");
var static_Files = new node_static.Server(__dirname);
