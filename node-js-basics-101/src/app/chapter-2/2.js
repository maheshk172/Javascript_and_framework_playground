#!/usr/bin/env node

// Turn JS file into Command Line Script
//Step 1:  chmod 700 test-node-script.js
//Step 2:  ./2.js

function printHelp() {
    console.log("2.js Help (C) Mahesh Kulkarni ");
    console.log("");
    console.log("Usage: ");
    console.log("--help                 Print this help");
    console.log("--file={NAME}          read then file {NAME} and output");
}

var args = require('minimist')(process.argv.slice(2), {
    string: "file"
});

if(args.help || !args.file) {
    printHelp();
    process.exit(1);
}

var hello = require ("./hello-world.js");
var contents;

//Sync way
/*
contents = hello.say(args.file);
console.log(contents.toString());
*/


// Async Way  -> Using Callback
hello.say(args.file, (error, data) => {
    if(error) {
        console.log("Unable to read file, error thrown : ");
        console.log(error);
        process.exit(1);
    }

    contents = data;
    console.log(contents.toString());
});

