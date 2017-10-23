/*
//synchronized
function say(filename) {
    return fs.readFileSync(filename);
}*/

//A-Synchronized
function say(filename, cb) {
    return fs.readFile(filename, function (error, content) {
        if (error) {
            cb(error);
        } else {
            setTime(function () {
                cb(null, contents);
            }, 1000);
        }
    });
}

var fs = require("fs");

module.exports.say = say;