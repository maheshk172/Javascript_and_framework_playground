// Some of the methods like Object.entries are not yet added to Node LTE
// So run then with --harmony flag on

const server = require('net').createServer();
let socketCounter = 1;
let sockets = [];

function timeStamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = socketCounter++;

    console.log('client connected');
    socket.write('Please type your name: ');
    sockets[socket.id] = socket;
    //Writing back to same Socket
    /*socket.on('data', data => {
        console.log('data is : ', data);
        socket.write(`User ${socket.id}: `);
        socket.write(data);
    });*/

    //broadcast
    socket.on('data', data => {
        if(!sockets[socket.id]) {
            socket.name = data.toString().trim();
            sockets[socket.id] = socket;
            socket.write(`Welcome ${socket.name}! \n`);
            return;
        }


        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id === key) return;

            cs.write(`User ${socket.name} ${timeStamp()} `);
            cs.write(data);

        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server started on port: 8080');
});