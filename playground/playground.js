class Queue {
    constructor() {
        this.queue = []
    }

    add = (value) => {
        this.queue.unshift(value);
    }

    remove = () => {
        return this.queue.pop()
    }
}