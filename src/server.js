/**
 * Created by Mahesh on 11-08-2014.
 */
/**
 * New node file
 */

//all libraries needed
//var http = require("http");
var fs = require("fs");
var express = require("express");


//variables
var configPath = "server/config/config.json";

console.log("Starting the Web Server");

var config  = JSON.parse(fs.readFileSync(configPath));
var host = config.host;
var port = config.port;

var app = express();



app.use(express.static('client'));

app.get("/",function(request, response){
    //response.send("This is a default Page");
    response.redirect("sample.html");
});

app.listen(port, host);

console.log("server started listening on ",port);
/* Reloading of the configuration is required, so auto reload is provided, which will reload the config when necessary */

fs.watchFile("config/config.json", function(){
    console.log("config file is updated, reloading config aagin");
    config  = JSON.parse(fs.readFileSync(configPath));

    host = config.host;
    port = config.port;
    console.log("Server is restarting with new config");

    app.close();
    app.listen(port, host);
});

// creating server side services
require('./server/services/loginService.js').init(app);


