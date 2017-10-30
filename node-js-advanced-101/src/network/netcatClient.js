var NetcatClient = require('netcat/client')
var ncClient = new NetcatClient();

//ncClient.addr('127.0.0.1').port(8080).connect();

ncClient.addr('127.0.0.1').port(8080).connect();
