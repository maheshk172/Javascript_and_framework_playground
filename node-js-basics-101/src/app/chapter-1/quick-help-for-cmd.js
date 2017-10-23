#!/usr/bin/env node

// Turn JS file into Command Line Script
//Step 1:  chmod 700 test-node-script.js
//Step 2:  ./test-node-script.js

function printHelp() {
    console.log("quick-help-for-cmd.js Help (C) Mahesh Kulkarni ");
    console.log("");
    console.log("Usage: ");
    console.log("--help                 Print this help");
    console.log("--name                 Say Hello to {NAME}");
}



var args = require('minimist')(process.argv.slice(2), {
    string: "name"
});

if(args.help || !args.name) {
    printHelp();
    process.exit(1);
}


var name = args.name;

console.log('hello ' + name);