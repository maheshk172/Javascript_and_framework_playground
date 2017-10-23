/** With asynquence **/
function readFile(filename) {

    return ASQ(done => {
        var inputStream = fs.createReadStream(filename);
        var contents = "";

        var outputStream = fs.createWriteStream(filename + ".backup");
        inputStream.pipe(outputStream);

        inputStream.on("data", chunk => {
            console.log(chunk.toString());
            contents += chunk;
        });

        inputStream.on("end", () => {
           console.log("finished loading data from - " + filename);
           done(contents);
        });

        outputStream.on("end", () => {
           console.log("Finished writing to backup file");
        });
    });


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