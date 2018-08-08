/**
 * events = { event: [subscribers] }
 */
class EventManager {
    constructor() {
        this.events = {};
    }

    on = (event, fn) => {
        this.events[event] = this.events[event] || [];
        this.events[event].push(fn);
    };

    emit = (event, data) => {
        if (this.events[event]) {
            this.events[event].forEach(fn => fn(data))
        }
    };

    unsubscribe = (event, fn) => {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(callback => callback !== fn);
        }
    }
}

// Example of usage
const eventBus = new EventManager();

const subscriber1 = (data) => {
    console.log("[Client debug] subscriber1", data);
};

const subscriber2 = (data) => {
    console.log("[Client debug] subscriber2", data)
};

eventBus.on('subscribe', subscriber1);
eventBus.on('subscribe', subscriber2);

eventBus.emit('subscribe', 10);

eventBus.unsubscribe('subscribe', subscriber1);
eventBus.emit('subscribe', 10);