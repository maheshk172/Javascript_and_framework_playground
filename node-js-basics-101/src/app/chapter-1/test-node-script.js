#!/usr/bin/env node

// Turn JS file into Command Line Script
//Step 1:  chmod 700 test-node-script.js
//Step 2:  ./test-node-script.js

var args = require('minimist')(process.argv.slice(2), {
    string: "name"
})

var name = args.name;

console.log('hello ' + name);