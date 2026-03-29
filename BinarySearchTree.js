class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(values = []) {
        this.root = null;
        if (Array.isArray(values) && values.length > 0) {
            this.BuildTree(values);
        }
    }

    BuildTree(values = []) {
        const sortedUnique = [...new Set(values)].sort((a, b) => a - b);
        this.root = this.buildBalancedTree(sortedUnique, 0, sortedUnique.length - 1);
    }

    includes(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true;
            }
            currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
        }
        return false;
    }

    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }

        return node;
    }

    deleteItem(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
            return node;
        }

        if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
            return node;
        }

        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        const successorValue = this._minValue(node.right);
        node.value = successorValue;
        node.right = this._deleteNode(node.right, successorValue);
        return node;
    }

    _minValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    levelOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required for levelOrderForEach.');
        }

        if (this.root === null) {
            return;
        }

        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            callback(currentNode.value);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    inOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required for inOrderForEach.');
        }
        this._inOrder(this.root, callback);
    }

    _inOrder(node, callback) {
        if (node === null) {
            return;
        }
        this._inOrder(node.left, callback);
        callback(node.value);
        this._inOrder(node.right, callback);
    }

    preOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required for preOrderForEach.');
        }
        this._preOrder(this.root, callback);
    }

    _preOrder(node, callback) {
        if (node === null) {
            return;
        }
        callback(node.value);
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback);
    }

    postOrderForEach(callback) {
        if (typeof callback !== 'function') {
            throw new Error('Callback is required for postOrderForEach.');
        }
        this._postOrder(this.root, callback);
    }

    _postOrder(node, callback) {
        if (node === null) {
            return;
        }
        this._postOrder(node.left, callback);
        this._postOrder(node.right, callback);
        callback(node.value);
    }

    height(node = this.root) {
        if (node === null) {
            return -1;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(value) {
        let currentNode = this.root;
        let currentDepth = 0;

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return currentDepth;
            }
            currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
            currentDepth += 1;
        }

        return -1;
    }

    isBalanced(node = this.root) {
        if (node === null) {
            return true;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        const currentBalanced = Math.abs(leftHeight - rightHeight) <= 1;

        return currentBalanced && this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    rebalance() {
        const values = [];
        this.inOrderForEach((value) => values.push(value));
        this.root = this.buildBalancedTree(values, 0, values.length - 1);
    }

    buildBalancedTree(values, start, end) {
        if (start > end) {
            return null;
        }

        const middle = Math.floor((start + end) / 2);
        const node = new Node(values[middle]);
        node.left = this.buildBalancedTree(values, start, middle - 1);
        node.right = this.buildBalancedTree(values, middle + 1, end);
        return node;
    }
}

export default { BinarySearchTree };