
process.on("exit", code => {
   // do something, Node is exiting

});

process.on("uncaughtExceotion", code => {
    // do something, Exception is not caught properly
    // Dont use this
});



