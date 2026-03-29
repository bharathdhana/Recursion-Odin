class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAt(value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
    }
    removeAt() {
        if (!this.head) {
            this.tail = null;
            return null;
        }
        var oldHead = this.head;
        this.head = oldHead.nextNode;
        return oldHead.value;
    }
    append(value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
    }
    prepend(value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    size() {
        var count = 0;
        var currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }
    at(index) {
        var currentNode = this.head;
        var count = 0;
        while (currentNode) {
            if (count === index) {
                return currentNode.value;
            }
            count++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }
    pop() {
        if (!this.head) {
            return null;
        }
        if (this.head === this.tail) {
            var value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        var currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        var value = this.tail.value;
        currentNode.nextNode = null;
        this.tail = currentNode;
        return value;
    }
    contains(value) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    findIndex(value) {
        var currentNode = this.head;
        var index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return -1;
    }
    toString() {
        var currentNode = this.head;
        var result = '';
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}

LinkedList.prototype.head = function() {
    return this.head ? this.head.value : null;
}

LinkedList.prototype.tail = function() {
    return this.tail ? this.tail.value : null;
}

export default { Node, LinkedList };
