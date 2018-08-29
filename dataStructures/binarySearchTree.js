class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data)
        } else if (data < this.data && !this.left) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data && !this.right) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (data === this.data) return this;

        if (data > this.data && this.right) {
            return this.right.contains(data)
        } else if (data < this.data && this.left) {
            return this.left.contains(data)
        }

        return null
    }
}

module.exports = Node;