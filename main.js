const { LinkedList } = require('./LinkedList').default;
const { HashMap } = require('./HashMap').default;

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

