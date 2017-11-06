const EventEmitter = require('events');

class Logger extends EventEmitter {}

const logger = new logger();

logger.emit('event');

logger.on('event', listenerFunction);

const listenerFunction = (data) => {

};