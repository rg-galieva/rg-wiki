// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            node = node.next;
            counter++;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;

        let node = this.head;

        while (node) {
            if (!node.next) return node;

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = new Node(data);
        } else {
            lastNode.next = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) return;

        let nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        prevNode.next = new Node(data, prevNode.next);
    }

    forEach(fn) {
        if (!this.head) return;

        let node = this.head;

        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }

}

module.exports = {Node, LinkedList};
