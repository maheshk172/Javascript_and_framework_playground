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

function handleIO(socket) {
    console.log('Client connected: ' + socket);

    function disconnect() {
        //interval.cancel();
        console.log('Client disconnected: ');
    }

    function reconnect() {
        console.log('Client reconnected: ');
    }

    socket.on("disconnect", disconnect);
    socket.on("connect", reconnect);

    var interval = setInterval(function () {
        var data = Math.random();
        socket.emit("hello", data);
    }, 1000);

    socket.on("MESSAGE", data => {

        if (!data) {
            setTimeout(() => {
                socket.emit("MESSAGE", "No input received, type something dude !")
            }, 1000);
        } else {
            setTimeout(() => {
                socket.emit("MESSAGE", " I read as : " + data)
            }, 1000);
        }
    });
}


var http = require("http");
var host = "localhost";
var port = 8006;

var httpServer = http.createServer(handleHTTP).listen(port, host);

var node_static = require("node-static");
var static_Files = new node_static.Server(__dirname);

var io = require("socket.io")(httpServer);
//highjack HttpServer and Run WebSockets as well
//io.listen(httpServer);

io.on("connection", handleIO);

/*
io.configure(() => {
   io.enable("browser client minification");
   io.enable("browser client etag");
   io.set("log level", 1);
   io.set("transport", [
       "websocket",
       "xhr-polling",
       "jsonp-polling"
   ]);
});*/
