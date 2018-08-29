class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        const storage = [this.root];

        while (storage.length) {
            const node = storage.shift();
            storage.push(...node.children)
            fn(node);
        }
    }

    traverseDF(fn) {
        const storage = [this.root];

        while (storage.length) {
            const node = storage.shift();
            storage.unshift(...node.children)
            fn(node)
        }
    }
}


module.exports = {Tree, Node};
