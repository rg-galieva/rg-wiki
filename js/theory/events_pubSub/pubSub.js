class EventManager {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
        this.events[eventName].push(callback);
    } else {
        this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let event of this.events[eventName]) {
          event.call(this, arguments)
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
      if (this.events[eventName]) {
        delete this.events[eventName];
      }
  }
}

/*
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
*/

module.exports = EventManager;
