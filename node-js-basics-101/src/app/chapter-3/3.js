#!/usr/bin/env node
function printHelp() {
    console.log("2-async.js Help (C) Mahesh Kulkarni ");
    console.log("");
    console.log("Usage: ");
    console.log("--help                 Print this help");
    console.log("--file={NAME}          read then file {NAME} and output");
}

var args = require('minimist')(process.argv.slice(2), {
    string: "file"
});

if (args.help || !args.file) {
    printHelp();
    process.exit(1);
}

var hello = require("./hello-world-3.js");

/** Asynquence way -> ASYNC **/
hello.say(args.file).val(contents => {
    console.log(contents.toString());
}).or(err => {
    console.error(err);
});

