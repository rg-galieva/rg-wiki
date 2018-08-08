/*
We’d use a linked list over an array when we need faster insertion and deletion,
but we can tolerate slow item retrieval and we’re o.k. with extra space taken up.
If we’re space-limited or access speed is important, we’d use an array.
 */

const example = {
    head: {
        value: '1',
        next: {
            value: '2',
            next: {
                value: '3',
                next: {}
            }
        }
    }
}


class Node {
    constructor() {
        this.value = null;
        this.next = null;
        this.prev = null;

    }
}

class LinkedList {
    constructor() {
        this.head = new Node();
        this.head.next = new Node();
        this.head.next.prev = this.head;
        this.testNode = this.head.next;
        debugger
    }


    append(node) {
        this.testNode.next = node;
        this.testNode.next.prev = this.testNode;
        debugger
    }
}


const linkedList = new LinkedList()

linkedList.append(new Node());