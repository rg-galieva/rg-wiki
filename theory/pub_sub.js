/**

 EventManager.subscribe('useradded', function(user) {
    console.log(user)
});


 form.onsubmit(function(e) {
    e.preventDefault();
    EventManager.publish('useradded', user);
})
 */

class EventManager {
    constructor() {
        /*
            this.events = {
                event: [subscribers]
            };
         */
        this.events = {};
    }

    publish = (event, data) => {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data))
        }
    }

    subscribe = (event, callback) => {
        this.events[event] = this.events[event] || [];

        this.events[event].push(callback);
    }

    unsubscribe = (event, callback) => {
        if (this.events[event]) {

            const callbackIndex = this.events[event].indexOf(callback);

            if (callbackIndex >= 0) {
                this.events[event] = this.events[event].filter(func => func !== callback)
            }
        }
    }
}

const test = new EventManager();

const subscribe1 = (data) => {
    console.log("[Client debug] subscribe1", data);
}
const subscribe2 = (data) => {
    console.log("[Client debug] subscribe2", data)
}

test.subscribe('subscribe', subscribe1);
test.subscribe('subscribe', subscribe2);

test.publish('subscribe', 10);

test.unsubscribe('subscribe', subscribe1);
test.publish('subscribe', 10);