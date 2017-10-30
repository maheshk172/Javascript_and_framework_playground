const EventEmitter = require('events');

class Server extends EventEmitter {


    constructor(client) {
        super();

        this.tasks = [];
        this.taskId = 1;

        process.nextTick(() => {
            this.emit('response', 'Type a Command(help to list commnds)');
        });

        client.on('command', (command, args) => {
            //help, add, ls, delete
            switch (command) {
                case 'help':
                case 'ls':
                case 'add':
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown Command');
            }

        });

    }

    tasksString() {
        return Object
            .keys(this.tasks)
            .map(key => {
                return `${key}: ${this.tasks[key]}`;
            }).join('\n');
    }

    help() {
        this.emit('response', `Available Command:
        add task    - Add Task(s)
        ls          - List All Tasks
        delete id   - delete task by id`
        );
    }

    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Task added with task id: ${this.taskId}`);
        this.taskId++;
    }

    ls() {
        this.emit('response', `Tasks:\n${this.tasksString()}`);
    }

    delete(args) {
        delete(this.tasks[args[0]]);
        this.emit('response', `Deleted task ${args[0]}`);
    }

}

module.exports = (client) => {
    return new Server(client);
};
