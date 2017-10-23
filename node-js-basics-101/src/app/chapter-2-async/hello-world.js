/*
//synchronized
function say(filename) {
    return fs.readFileSync(filename);
}*/

//Traditional ASynchronized - with Callbacks
/*function say(filename, cb) {
    return fs.readFile(filename, function (error, content) {
        if (error) {
            cb(error);
        } else {
            setTime(function () {
                cb(null, contents);
            }, 1000);
        }
    });
}*/


/** With asynquence **/
function readFile(filename) {
    var sq = ASQ();
    fs.readFile(filename, sq.errfcb());
    return sq;
}

function delayMsg(done, contents) {
    setTimeout(function () {
        done(contents);
    }, 1000);
}

function say(fileName) {
    return readFile(fileName).then(delayMsg);
}


var fs = require("fs");
var ASQ = require("asynquence");
// What is the use of this if we are not capturing anything,
//is it only to updated global vars ?
require("asynquence-contrib");

module.exports.say = say;