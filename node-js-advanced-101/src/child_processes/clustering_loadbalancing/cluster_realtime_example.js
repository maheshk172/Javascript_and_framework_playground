const cluster = require('cluster');
const os = require('os');


const numberOfUsersInDB = () => {
    this.count = this.count || 5;
    this.count = this.count + this.count;
    return this.count;
};


if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUS`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    console.dir(cluster.workers, {depth: 0});


    const updateWorkers = () => {
        //console.log('update worker called again');
        const usersCount = numberOfUsersInDB();

        Object.values(cluster.workers).forEach(worker => {
            //console.log(`Sent updated usercount: ${usersCount} to ${worker.id}`);
            worker.send({usersCount});
        });
    };

    updateWorkers();
    setInterval(updateWorkers, 5000);


} else {
    // When the Forked child starts, it requires Server.js and starts those many processes
    // On my machine, it started 4 process as I have 4 core CPUs

    require('./server');
}
