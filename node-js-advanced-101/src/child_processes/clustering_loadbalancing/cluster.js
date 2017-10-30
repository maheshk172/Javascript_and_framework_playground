const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUS`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    // When the Forked child starts, it requires Server.js and starts those many processes
    // On my machine, it started 4 process as I have 4 core CPUs

    require('./server');
}
