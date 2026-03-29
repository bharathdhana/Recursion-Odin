const { LinkedList } = require('./LinkedList').default;
const { HashMap } = require('./HashMap').default;
const { BinarySearchTree } = require('./BinarySearchTree').default;

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("bird");
list.append("fish");
list.append("hamster");

console.log(list.toString());

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get('ice cream')); 
console.log(test.get('carrot'));

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
console.log("Level Order:");
tree.levelOrderForEach(value => console.log(value));
console.log("In Order:");
tree.inOrderForEach(value => console.log(value));
console.log("Pre Order:");
tree.preOrderForEach(value => console.log(value));
console.log("Post Order:");
tree.postOrderForEach(value => console.log(value));
console.log("is Balanced");
console.log(tree.isBalanced());
tree.insert(1);
console.log("is Balanced after inserting 1");
console.log(tree.isBalanced());

