const { LinkedList } = require('./LinkedList').default;

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("bird");
list.append("fish");
list.append("hamster");

console.log(list.toString());

