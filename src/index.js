import './style.css';
import { LinkedList } from './LinkedList.js';
// example uses class syntax - adjust as necessary
const list = new LinkedList();

console.log('Initial list:', list.toString());
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log('After append:', list.toString());
list.prepend('lion');

console.log('After prepend:', list.toString());

console.log('Size:', list.size());

console.log('Head value:', list.head.value);

console.log('Tail value:', list.tail());

console.log('At index 0:', list.at(0));
console.log('At index 2:', list.at(2));
console.log('At index 10:', list.at(10));

list.pop();
console.log('After pop:', list.toString());

console.log('Contains cat:', list.contains('cat')); // true
console.log('Contains tiger:', list.contains('tiger')); // false

console.log('Index of dog:', list.findIndex('dog')); // 0
console.log('Index of parrot:', list.findIndex('parrot')); // 2
console.log('Index of turtle:', list.findIndex('turtle')); // false

console.log('Final list:', list.toString());

const emptyList = new LinkedList();

console.log('Empty size:', emptyList.size()); // 0
console.log('Empty pop:', emptyList.pop()); // undefined
console.log('Empty toString:', emptyList.toString()); // null
