
/*
//synchronized
function say(filename) {
    return fs.readFileSync(filename);
}*/

//A-Synchronized
function say(filename, cb) {
    fs.readFile(filename, cb)
}

var fs = require("fs");

module.exports.say = say;